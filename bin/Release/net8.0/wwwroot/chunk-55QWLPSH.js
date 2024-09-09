var Ww = Object.defineProperty,
  Gw = Object.defineProperties;
var Kw = Object.getOwnPropertyDescriptors;
var L5 = Object.getOwnPropertySymbols;
var F7 = Object.prototype.hasOwnProperty,
  C7 = Object.prototype.propertyIsEnumerable;
var b7 = (t, e, r) =>
    e in t
      ? Ww(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  M = (t, e) => {
    for (var r in (e ||= {})) F7.call(e, r) && b7(t, r, e[r]);
    if (L5) for (var r of L5(e)) C7.call(e, r) && b7(t, r, e[r]);
    return t;
  },
  Q = (t, e) => Gw(t, Kw(e));
var jl = (t, e) => {
  var r = {};
  for (var a in t) F7.call(t, a) && e.indexOf(a) < 0 && (r[a] = t[a]);
  if (t != null && L5)
    for (var a of L5(t)) e.indexOf(a) < 0 && C7.call(t, a) && (r[a] = t[a]);
  return r;
};
var I5 = (t, e, r) =>
  new Promise((a, o) => {
    var n = l => {
        try {
          s(r.next(l));
        } catch (c) {
          o(c);
        }
      },
      i = l => {
        try {
          s(r.throw(l));
        } catch (c) {
          o(c);
        }
      },
      s = l => (l.done ? a(l.value) : Promise.resolve(l.value).then(n, i));
    s((r = r.apply(t, e)).next());
  });
function z7(t, e) {
  return Object.is(t, e);
}
var s1 = null,
  Yo = !1,
  P5 = 1,
  qt = Symbol('SIGNAL');
function ce(t) {
  let e = s1;
  return (s1 = t), e;
}
function A7() {
  return s1;
}
function Zw() {
  return Yo;
}
var Er = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Wl(t) {
  if (Yo) throw new Error('');
  if (s1 === null) return;
  s1.consumerOnSignalRead(t);
  let e = s1.nextProducerIndex++;
  if (
    (j5(s1), e < s1.producerNode.length && s1.producerNode[e] !== t && Uo(s1))
  ) {
    let r = s1.producerNode[e];
    q5(r, s1.producerIndexOfThis[e]);
  }
  s1.producerNode[e] !== t &&
    ((s1.producerNode[e] = t),
    (s1.producerIndexOfThis[e] = Uo(s1) ? H7(t, s1, e) : 0)),
    (s1.producerLastReadVersion[e] = t.version);
}
function Qw() {
  P5++;
}
function S7(t) {
  if (!(Uo(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === P5)) {
    if (!t.producerMustRecompute(t) && !N5(t)) {
      (t.dirty = !1), (t.lastCleanEpoch = P5);
      return;
    }
    t.producerRecomputeValue(t), (t.dirty = !1), (t.lastCleanEpoch = P5);
  }
}
function V7(t) {
  if (t.liveConsumerNode === void 0) return;
  let e = Yo;
  Yo = !0;
  try {
    for (let r of t.liveConsumerNode) r.dirty || _7(r);
  } finally {
    Yo = e;
  }
}
function D7() {
  return s1?.consumerAllowSignalWrites !== !1;
}
function _7(t) {
  (t.dirty = !0), V7(t), t.consumerMarkedDirty?.(t);
}
function $o(t) {
  return t && (t.nextProducerIndex = 0), ce(t);
}
function O5(t, e) {
  if (
    (ce(e),
    !(
      !t ||
      t.producerNode === void 0 ||
      t.producerIndexOfThis === void 0 ||
      t.producerLastReadVersion === void 0
    ))
  ) {
    if (Uo(t))
      for (let r = t.nextProducerIndex; r < t.producerNode.length; r++)
        q5(t.producerNode[r], t.producerIndexOfThis[r]);
    for (; t.producerNode.length > t.nextProducerIndex; )
      t.producerNode.pop(),
        t.producerLastReadVersion.pop(),
        t.producerIndexOfThis.pop();
  }
}
function N5(t) {
  j5(t);
  for (let e = 0; e < t.producerNode.length; e++) {
    let r = t.producerNode[e],
      a = t.producerLastReadVersion[e];
    if (a !== r.version || (S7(r), a !== r.version)) return !0;
  }
  return !1;
}
function R5(t) {
  if ((j5(t), Uo(t)))
    for (let e = 0; e < t.producerNode.length; e++)
      q5(t.producerNode[e], t.producerIndexOfThis[e]);
  (t.producerNode.length =
    t.producerLastReadVersion.length =
    t.producerIndexOfThis.length =
      0),
    t.liveConsumerNode &&
      (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0);
}
function H7(t, e, r) {
  if ((E7(t), t.liveConsumerNode.length === 0 && T7(t)))
    for (let a = 0; a < t.producerNode.length; a++)
      t.producerIndexOfThis[a] = H7(t.producerNode[a], t, a);
  return t.liveConsumerIndexOfThis.push(r), t.liveConsumerNode.push(e) - 1;
}
function q5(t, e) {
  if ((E7(t), t.liveConsumerNode.length === 1 && T7(t)))
    for (let a = 0; a < t.producerNode.length; a++)
      q5(t.producerNode[a], t.producerIndexOfThis[a]);
  let r = t.liveConsumerNode.length - 1;
  if (
    ((t.liveConsumerNode[e] = t.liveConsumerNode[r]),
    (t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[r]),
    t.liveConsumerNode.length--,
    t.liveConsumerIndexOfThis.length--,
    e < t.liveConsumerNode.length)
  ) {
    let a = t.liveConsumerIndexOfThis[e],
      o = t.liveConsumerNode[e];
    j5(o), (o.producerIndexOfThis[a] = e);
  }
}
function Uo(t) {
  return t.consumerIsAlwaysLive || (t?.liveConsumerNode?.length ?? 0) > 0;
}
function j5(t) {
  (t.producerNode ??= []),
    (t.producerIndexOfThis ??= []),
    (t.producerLastReadVersion ??= []);
}
function E7(t) {
  (t.liveConsumerNode ??= []), (t.liveConsumerIndexOfThis ??= []);
}
function T7(t) {
  return t.producerNode !== void 0;
}
function k7(t) {
  let e = Object.create(Xw);
  e.computation = t;
  let r = () => {
    if ((S7(e), Wl(e), e.value === B5)) throw e.error;
    return e.value;
  };
  return (r[qt] = e), r;
}
var Yl = Symbol('UNSET'),
  Ul = Symbol('COMPUTING'),
  B5 = Symbol('ERRORED'),
  Xw = Q(M({}, Er), {
    value: Yl,
    dirty: !0,
    error: null,
    equal: z7,
    producerMustRecompute(t) {
      return t.value === Yl || t.value === Ul;
    },
    producerRecomputeValue(t) {
      if (t.value === Ul) throw new Error('Detected cycle in computations.');
      let e = t.value;
      t.value = Ul;
      let r = $o(t),
        a;
      try {
        a = t.computation();
      } catch (o) {
        (a = B5), (t.error = o);
      } finally {
        O5(t, r);
      }
      if (e !== Yl && e !== B5 && a !== B5 && t.equal(e, a)) {
        t.value = e;
        return;
      }
      (t.value = a), t.version++;
    },
  });
function Jw() {
  throw new Error();
}
var L7 = Jw;
function I7() {
  L7();
}
function P7(t) {
  L7 = t;
}
var ex = null;
function B7(t) {
  let e = Object.create(N7);
  e.value = t;
  let r = () => (Wl(e), e.value);
  return (r[qt] = e), r;
}
function Gl(t, e) {
  D7() || I7(), t.equal(t.value, e) || ((t.value = e), tx(t));
}
function O7(t, e) {
  D7() || I7(), Gl(t, e(t.value));
}
var N7 = Q(M({}, Er), { equal: z7, value: void 0 });
function tx(t) {
  t.version++, Qw(), V7(t), ex?.();
}
function R7(t, e, r) {
  let a = Object.create(ax);
  r && (a.consumerAllowSignalWrites = !0), (a.fn = t), (a.schedule = e);
  let o = l => {
    a.cleanupFn = l;
  };
  function n(l) {
    return l.fn === null && l.schedule === null;
  }
  function i(l) {
    n(l) ||
      (R5(l),
      l.cleanupFn(),
      (l.fn = null),
      (l.schedule = null),
      (l.cleanupFn = $l));
  }
  let s = () => {
    if (a.fn === null) return;
    if (Zw())
      throw new Error(
        'Schedulers cannot synchronously execute watches while scheduling.',
      );
    if (((a.dirty = !1), a.hasRun && !N5(a))) return;
    a.hasRun = !0;
    let l = $o(a);
    try {
      a.cleanupFn(), (a.cleanupFn = $l), a.fn(o);
    } finally {
      O5(a, l);
    }
  };
  return (
    (a.ref = {
      notify: () => _7(a),
      run: s,
      cleanup: () => a.cleanupFn(),
      destroy: () => i(a),
      [qt]: a,
    }),
    a.ref
  );
}
var $l = () => {},
  ax = Q(M({}, Er), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: t => {
      t.schedule !== null && t.schedule(t.ref);
    },
    hasRun: !1,
    cleanupFn: $l,
  });
function O(t) {
  return typeof t == 'function';
}
function Tr(t) {
  let r = t(a => {
    Error.call(a), (a.stack = new Error().stack);
  });
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var Y5 = Tr(
  t =>
    function (r) {
      t(this),
        (this.message = r
          ? `${r.length} errors occurred during unsubscription:
${r.map((a, o) => `${o + 1}) ${a.toString()}`).join(`
  `)}`
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = r);
    },
);
function qa(t, e) {
  if (t) {
    let r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var se = class t {
  constructor(e) {
    (this.initialTeardown = e),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let e;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: r } = this;
      if (r)
        if (((this._parentage = null), Array.isArray(r)))
          for (let n of r) n.remove(this);
        else r.remove(this);
      let { initialTeardown: a } = this;
      if (O(a))
        try {
          a();
        } catch (n) {
          e = n instanceof Y5 ? n.errors : [n];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let n of o)
          try {
            q7(n);
          } catch (i) {
            (e = e ?? []),
              i instanceof Y5 ? (e = [...e, ...i.errors]) : e.push(i);
          }
      }
      if (e) throw new Y5(e);
    }
  }
  add(e) {
    var r;
    if (e && e !== this)
      if (this.closed) q7(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this)) return;
          e._addParent(this);
        }
        (this._finalizers =
          (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }
  _hasParent(e) {
    let { _parentage: r } = this;
    return r === e || (Array.isArray(r) && r.includes(e));
  }
  _addParent(e) {
    let { _parentage: r } = this;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }
  _removeParent(e) {
    let { _parentage: r } = this;
    r === e ? (this._parentage = null) : Array.isArray(r) && qa(r, e);
  }
  remove(e) {
    let { _finalizers: r } = this;
    r && qa(r, e), e instanceof t && e._removeParent(this);
  }
};
se.EMPTY = (() => {
  let t = new se();
  return (t.closed = !0), t;
})();
var Kl = se.EMPTY;
function U5(t) {
  return (
    t instanceof se ||
    (t && 'closed' in t && O(t.remove) && O(t.add) && O(t.unsubscribe))
  );
}
function q7(t) {
  O(t) ? t() : t.unsubscribe();
}
var At = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var kr = {
  setTimeout(t, e, ...r) {
    let { delegate: a } = kr;
    return a?.setTimeout ? a.setTimeout(t, e, ...r) : setTimeout(t, e, ...r);
  },
  clearTimeout(t) {
    let { delegate: e } = kr;
    return (e?.clearTimeout || clearTimeout)(t);
  },
  delegate: void 0,
};
function $5(t) {
  kr.setTimeout(() => {
    let { onUnhandledError: e } = At;
    if (e) e(t);
    else throw t;
  });
}
function Z1() {}
var j7 = Zl('C', void 0, void 0);
function Y7(t) {
  return Zl('E', void 0, t);
}
function U7(t) {
  return Zl('N', t, void 0);
}
function Zl(t, e, r) {
  return { kind: t, value: e, error: r };
}
var ja = null;
function Lr(t) {
  if (At.useDeprecatedSynchronousErrorHandling) {
    let e = !ja;
    if ((e && (ja = { errorThrown: !1, error: null }), t(), e)) {
      let { errorThrown: r, error: a } = ja;
      if (((ja = null), r)) throw a;
    }
  } else t();
}
function $7(t) {
  At.useDeprecatedSynchronousErrorHandling &&
    ja &&
    ((ja.errorThrown = !0), (ja.error = t));
}
var Ya = class extends se {
    constructor(e) {
      super(),
        (this.isStopped = !1),
        e
          ? ((this.destination = e), U5(e) && e.add(this))
          : (this.destination = nx);
    }
    static create(e, r, a) {
      return new M0(e, r, a);
    }
    next(e) {
      this.isStopped ? Xl(U7(e), this) : this._next(e);
    }
    error(e) {
      this.isStopped
        ? Xl(Y7(e), this)
        : ((this.isStopped = !0), this._error(e));
    }
    complete() {
      this.isStopped ? Xl(j7, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(e) {
      this.destination.next(e);
    }
    _error(e) {
      try {
        this.destination.error(e);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  rx = Function.prototype.bind;
function Ql(t, e) {
  return rx.call(t, e);
}
var Jl = class {
    constructor(e) {
      this.partialObserver = e;
    }
    next(e) {
      let { partialObserver: r } = this;
      if (r.next)
        try {
          r.next(e);
        } catch (a) {
          W5(a);
        }
    }
    error(e) {
      let { partialObserver: r } = this;
      if (r.error)
        try {
          r.error(e);
        } catch (a) {
          W5(a);
        }
      else W5(e);
    }
    complete() {
      let { partialObserver: e } = this;
      if (e.complete)
        try {
          e.complete();
        } catch (r) {
          W5(r);
        }
    }
  },
  M0 = class extends Ya {
    constructor(e, r, a) {
      super();
      let o;
      if (O(e) || !e)
        o = { next: e ?? void 0, error: r ?? void 0, complete: a ?? void 0 };
      else {
        let n;
        this && At.useDeprecatedNextContext
          ? ((n = Object.create(e)),
            (n.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: e.next && Ql(e.next, n),
              error: e.error && Ql(e.error, n),
              complete: e.complete && Ql(e.complete, n),
            }))
          : (o = e);
      }
      this.destination = new Jl(o);
    }
  };
function W5(t) {
  At.useDeprecatedSynchronousErrorHandling ? $7(t) : $5(t);
}
function ox(t) {
  throw t;
}
function Xl(t, e) {
  let { onStoppedNotification: r } = At;
  r && kr.setTimeout(() => r(t, e));
}
var nx = { closed: !0, next: Z1, error: ox, complete: Z1 };
var Ir = (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
function y1(t) {
  return t;
}
function e3(...t) {
  return t3(t);
}
function t3(t) {
  return t.length === 0
    ? y1
    : t.length === 1
      ? t[0]
      : function (r) {
          return t.reduce((a, o) => o(a), r);
        };
}
var P = (() => {
  class t {
    constructor(r) {
      r && (this._subscribe = r);
    }
    lift(r) {
      let a = new t();
      return (a.source = this), (a.operator = r), a;
    }
    subscribe(r, a, o) {
      let n = sx(r) ? r : new M0(r, a, o);
      return (
        Lr(() => {
          let { operator: i, source: s } = this;
          n.add(
            i ? i.call(n, s) : s ? this._subscribe(n) : this._trySubscribe(n),
          );
        }),
        n
      );
    }
    _trySubscribe(r) {
      try {
        return this._subscribe(r);
      } catch (a) {
        r.error(a);
      }
    }
    forEach(r, a) {
      return (
        (a = W7(a)),
        new a((o, n) => {
          let i = new M0({
            next: s => {
              try {
                r(s);
              } catch (l) {
                n(l), i.unsubscribe();
              }
            },
            error: n,
            complete: o,
          });
          this.subscribe(i);
        })
      );
    }
    _subscribe(r) {
      var a;
      return (a = this.source) === null || a === void 0
        ? void 0
        : a.subscribe(r);
    }
    [Ir]() {
      return this;
    }
    pipe(...r) {
      return t3(r)(this);
    }
    toPromise(r) {
      return (
        (r = W7(r)),
        new r((a, o) => {
          let n;
          this.subscribe(
            i => (n = i),
            i => o(i),
            () => a(n),
          );
        })
      );
    }
  }
  return (t.create = e => new t(e)), t;
})();
function W7(t) {
  var e;
  return (e = t ?? At.Promise) !== null && e !== void 0 ? e : Promise;
}
function ix(t) {
  return t && O(t.next) && O(t.error) && O(t.complete);
}
function sx(t) {
  return (t && t instanceof Ya) || (ix(t) && U5(t));
}
function a3(t) {
  return O(t?.lift);
}
function B(t) {
  return e => {
    if (a3(e))
      return e.lift(function (r) {
        try {
          return t(r, this);
        } catch (a) {
          this.error(a);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function k(t, e, r, a, o) {
  return new r3(t, e, r, a, o);
}
var r3 = class extends Ya {
  constructor(e, r, a, o, n, i) {
    super(e),
      (this.onFinalize = n),
      (this.shouldUnsubscribe = i),
      (this._next = r
        ? function (s) {
            try {
              r(s);
            } catch (l) {
              e.error(l);
            }
          }
        : super._next),
      (this._error = o
        ? function (s) {
            try {
              o(s);
            } catch (l) {
              e.error(l);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = a
        ? function () {
            try {
              a();
            } catch (s) {
              e.error(s);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var e;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: r } = this;
      super.unsubscribe(),
        !r && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    }
  }
};
function Pr() {
  return B((t, e) => {
    let r = null;
    t._refCount++;
    let a = k(e, void 0, void 0, void 0, () => {
      if (!t || t._refCount <= 0 || 0 < --t._refCount) {
        r = null;
        return;
      }
      let o = t._connection,
        n = r;
      (r = null), o && (!n || o === n) && o.unsubscribe(), e.unsubscribe();
    });
    t.subscribe(a), a.closed || (r = t.connect());
  });
}
var jt = class extends P {
  constructor(e, r) {
    super(),
      (this.source = e),
      (this.subjectFactory = r),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      a3(e) && (this.lift = e.lift);
  }
  _subscribe(e) {
    return this.getSubject().subscribe(e);
  }
  getSubject() {
    let e = this._subject;
    return (
      (!e || e.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: e } = this;
    (this._subject = this._connection = null), e?.unsubscribe();
  }
  connect() {
    let e = this._connection;
    if (!e) {
      e = this._connection = new se();
      let r = this.getSubject();
      e.add(
        this.source.subscribe(
          k(
            r,
            void 0,
            () => {
              this._teardown(), r.complete();
            },
            a => {
              this._teardown(), r.error(a);
            },
            () => this._teardown(),
          ),
        ),
      ),
        e.closed && ((this._connection = null), (e = se.EMPTY));
    }
    return e;
  }
  refCount() {
    return Pr()(this);
  }
};
var Br = {
  schedule(t) {
    let e = requestAnimationFrame,
      r = cancelAnimationFrame,
      { delegate: a } = Br;
    a && ((e = a.requestAnimationFrame), (r = a.cancelAnimationFrame));
    let o = e(n => {
      (r = void 0), t(n);
    });
    return new se(() => r?.(o));
  },
  requestAnimationFrame(...t) {
    let { delegate: e } = Br;
    return (e?.requestAnimationFrame || requestAnimationFrame)(...t);
  },
  cancelAnimationFrame(...t) {
    let { delegate: e } = Br;
    return (e?.cancelAnimationFrame || cancelAnimationFrame)(...t);
  },
  delegate: void 0,
};
var G7 = Tr(
  t =>
    function () {
      t(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    },
);
var C = (() => {
    class t extends P {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(r) {
        let a = new G5(this, this);
        return (a.operator = r), a;
      }
      _throwIfClosed() {
        if (this.closed) throw new G7();
      }
      next(r) {
        Lr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let a of this.currentObservers) a.next(r);
          }
        });
      }
      error(r) {
        Lr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = r);
            let { observers: a } = this;
            for (; a.length; ) a.shift().error(r);
          }
        });
      }
      complete() {
        Lr(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: r } = this;
            for (; r.length; ) r.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var r;
        return (
          ((r = this.observers) === null || r === void 0 ? void 0 : r.length) >
          0
        );
      }
      _trySubscribe(r) {
        return this._throwIfClosed(), super._trySubscribe(r);
      }
      _subscribe(r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }
      _innerSubscribe(r) {
        let { hasError: a, isStopped: o, observers: n } = this;
        return a || o
          ? Kl
          : ((this.currentObservers = null),
            n.push(r),
            new se(() => {
              (this.currentObservers = null), qa(n, r);
            }));
      }
      _checkFinalizedStatuses(r) {
        let { hasError: a, thrownError: o, isStopped: n } = this;
        a ? r.error(o) : n && r.complete();
      }
      asObservable() {
        let r = new P();
        return (r.source = this), r;
      }
    }
    return (t.create = (e, r) => new G5(e, r)), t;
  })(),
  G5 = class extends C {
    constructor(e, r) {
      super(), (this.destination = e), (this.source = r);
    }
    next(e) {
      var r, a;
      (a =
        (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
        null ||
        a === void 0 ||
        a.call(r, e);
    }
    error(e) {
      var r, a;
      (a =
        (r = this.destination) === null || r === void 0 ? void 0 : r.error) ===
        null ||
        a === void 0 ||
        a.call(r, e);
    }
    complete() {
      var e, r;
      (r =
        (e = this.destination) === null || e === void 0
          ? void 0
          : e.complete) === null ||
        r === void 0 ||
        r.call(e);
    }
    _subscribe(e) {
      var r, a;
      return (a =
        (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(e)) !== null && a !== void 0
        ? a
        : Kl;
    }
  };
var Pe = class extends C {
  constructor(e) {
    super(), (this._value = e);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(e) {
    let r = super._subscribe(e);
    return !r.closed && e.next(this._value), r;
  }
  getValue() {
    let { hasError: e, thrownError: r, _value: a } = this;
    if (e) throw r;
    return this._throwIfClosed(), a;
  }
  next(e) {
    super.next((this._value = e));
  }
};
var Wo = {
  now() {
    return (Wo.delegate || Date).now();
  },
  delegate: void 0,
};
var O1 = class extends C {
  constructor(e = 1 / 0, r = 1 / 0, a = Wo) {
    super(),
      (this._bufferSize = e),
      (this._windowTime = r),
      (this._timestampProvider = a),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = r === 1 / 0),
      (this._bufferSize = Math.max(1, e)),
      (this._windowTime = Math.max(1, r));
  }
  next(e) {
    let {
      isStopped: r,
      _buffer: a,
      _infiniteTimeWindow: o,
      _timestampProvider: n,
      _windowTime: i,
    } = this;
    r || (a.push(e), !o && a.push(n.now() + i)),
      this._trimBuffer(),
      super.next(e);
  }
  _subscribe(e) {
    this._throwIfClosed(), this._trimBuffer();
    let r = this._innerSubscribe(e),
      { _infiniteTimeWindow: a, _buffer: o } = this,
      n = o.slice();
    for (let i = 0; i < n.length && !e.closed; i += a ? 1 : 2) e.next(n[i]);
    return this._checkFinalizedStatuses(e), r;
  }
  _trimBuffer() {
    let {
        _bufferSize: e,
        _timestampProvider: r,
        _buffer: a,
        _infiniteTimeWindow: o,
      } = this,
      n = (o ? 1 : 2) * e;
    if ((e < 1 / 0 && n < a.length && a.splice(0, a.length - n), !o)) {
      let i = r.now(),
        s = 0;
      for (let l = 1; l < a.length && a[l] <= i; l += 2) s = l;
      s && a.splice(0, s + 1);
    }
  }
};
var K5 = class extends se {
  constructor(e, r) {
    super();
  }
  schedule(e, r = 0) {
    return this;
  }
};
var Go = {
  setInterval(t, e, ...r) {
    let { delegate: a } = Go;
    return a?.setInterval ? a.setInterval(t, e, ...r) : setInterval(t, e, ...r);
  },
  clearInterval(t) {
    let { delegate: e } = Go;
    return (e?.clearInterval || clearInterval)(t);
  },
  delegate: void 0,
};
var Yt = class extends K5 {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r), (this.pending = !1);
  }
  schedule(e, r = 0) {
    var a;
    if (this.closed) return this;
    this.state = e;
    let o = this.id,
      n = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(n, o, r)),
      (this.pending = !0),
      (this.delay = r),
      (this.id =
        (a = this.id) !== null && a !== void 0
          ? a
          : this.requestAsyncId(n, this.id, r)),
      this
    );
  }
  requestAsyncId(e, r, a = 0) {
    return Go.setInterval(e.flush.bind(e, this), a);
  }
  recycleAsyncId(e, r, a = 0) {
    if (a != null && this.delay === a && this.pending === !1) return r;
    r != null && Go.clearInterval(r);
  }
  execute(e, r) {
    if (this.closed) return new Error('executing a cancelled action');
    this.pending = !1;
    let a = this._execute(e, r);
    if (a) return a;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(e, r) {
    let a = !1,
      o;
    try {
      this.work(e);
    } catch (n) {
      (a = !0), (o = n || new Error('Scheduled action threw falsy error'));
    }
    if (a) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: e, scheduler: r } = this,
        { actions: a } = r;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        qa(a, this),
        e != null && (this.id = this.recycleAsyncId(r, e, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var lx = 1,
  o3,
  n3 = {};
function K7(t) {
  return t in n3 ? (delete n3[t], !0) : !1;
}
var Z7 = {
  setImmediate(t) {
    let e = lx++;
    return (
      (n3[e] = !0),
      o3 || (o3 = Promise.resolve()),
      o3.then(() => K7(e) && t()),
      e
    );
  },
  clearImmediate(t) {
    K7(t);
  },
};
var { setImmediate: cx, clearImmediate: hx } = Z7,
  Ko = {
    setImmediate(...t) {
      let { delegate: e } = Ko;
      return (e?.setImmediate || cx)(...t);
    },
    clearImmediate(t) {
      let { delegate: e } = Ko;
      return (e?.clearImmediate || hx)(t);
    },
    delegate: void 0,
  };
var Z5 = class extends Yt {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  requestAsyncId(e, r, a = 0) {
    return a !== null && a > 0
      ? super.requestAsyncId(e, r, a)
      : (e.actions.push(this),
        e._scheduled ||
          (e._scheduled = Ko.setImmediate(e.flush.bind(e, void 0))));
  }
  recycleAsyncId(e, r, a = 0) {
    var o;
    if (a != null ? a > 0 : this.delay > 0)
      return super.recycleAsyncId(e, r, a);
    let { actions: n } = e;
    r != null &&
      ((o = n[n.length - 1]) === null || o === void 0 ? void 0 : o.id) !== r &&
      (Ko.clearImmediate(r), e._scheduled === r && (e._scheduled = void 0));
  }
};
var Or = class t {
  constructor(e, r = t.now) {
    (this.schedulerActionCtor = e), (this.now = r);
  }
  schedule(e, r = 0, a) {
    return new this.schedulerActionCtor(this, e).schedule(a, r);
  }
};
Or.now = Wo.now;
var Ut = class extends Or {
  constructor(e, r = Or.now) {
    super(e, r), (this.actions = []), (this._active = !1);
  }
  flush(e) {
    let { actions: r } = this;
    if (this._active) {
      r.push(e);
      return;
    }
    let a;
    this._active = !0;
    do if ((a = e.execute(e.state, e.delay))) break;
    while ((e = r.shift()));
    if (((this._active = !1), a)) {
      for (; (e = r.shift()); ) e.unsubscribe();
      throw a;
    }
  }
};
var Q5 = class extends Ut {
  flush(e) {
    this._active = !0;
    let r = this._scheduled;
    this._scheduled = void 0;
    let { actions: a } = this,
      o;
    e = e || a.shift();
    do if ((o = e.execute(e.state, e.delay))) break;
    while ((e = a[0]) && e.id === r && a.shift());
    if (((this._active = !1), o)) {
      for (; (e = a[0]) && e.id === r && a.shift(); ) e.unsubscribe();
      throw o;
    }
  }
};
var y0 = new Q5(Z5);
var St = new Ut(Yt),
  Q7 = St;
var X5 = class extends Yt {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  schedule(e, r = 0) {
    return r > 0
      ? super.schedule(e, r)
      : ((this.delay = r), (this.state = e), this.scheduler.flush(this), this);
  }
  execute(e, r) {
    return r > 0 || this.closed ? super.execute(e, r) : this._execute(e, r);
  }
  requestAsyncId(e, r, a = 0) {
    return (a != null && a > 0) || (a == null && this.delay > 0)
      ? super.requestAsyncId(e, r, a)
      : (e.flush(this), 0);
  }
};
var J5 = class extends Ut {};
var e2 = new J5(X5);
var t2 = class extends Yt {
  constructor(e, r) {
    super(e, r), (this.scheduler = e), (this.work = r);
  }
  requestAsyncId(e, r, a = 0) {
    return a !== null && a > 0
      ? super.requestAsyncId(e, r, a)
      : (e.actions.push(this),
        e._scheduled ||
          (e._scheduled = Br.requestAnimationFrame(() => e.flush(void 0))));
  }
  recycleAsyncId(e, r, a = 0) {
    var o;
    if (a != null ? a > 0 : this.delay > 0)
      return super.recycleAsyncId(e, r, a);
    let { actions: n } = e;
    r != null &&
      ((o = n[n.length - 1]) === null || o === void 0 ? void 0 : o.id) !== r &&
      (Br.cancelAnimationFrame(r), (e._scheduled = void 0));
  }
};
var a2 = class extends Ut {
  flush(e) {
    this._active = !0;
    let r = this._scheduled;
    this._scheduled = void 0;
    let { actions: a } = this,
      o;
    e = e || a.shift();
    do if ((o = e.execute(e.state, e.delay))) break;
    while ((e = a[0]) && e.id === r && a.shift());
    if (((this._active = !1), o)) {
      for (; (e = a[0]) && e.id === r && a.shift(); ) e.unsubscribe();
      throw o;
    }
  }
};
var i3 = new a2(t2);
var Ge = new P(t => t.complete());
function r2(t) {
  return t && O(t.schedule);
}
function s3(t) {
  return t[t.length - 1];
}
function Nr(t) {
  return O(s3(t)) ? t.pop() : void 0;
}
function $t(t) {
  return r2(s3(t)) ? t.pop() : void 0;
}
function X7(t, e) {
  return typeof s3(t) == 'number' ? t.pop() : e;
}
function ta(t, e, r, a) {
  var o = arguments.length,
    n =
      o < 3 ? e : a === null ? (a = Object.getOwnPropertyDescriptor(e, r)) : a,
    i;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    n = Reflect.decorate(t, e, r, a);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (i = t[s]) && (n = (o < 3 ? i(n) : o > 3 ? i(e, r, n) : i(e, r)) || n);
  return o > 3 && n && Object.defineProperty(e, r, n), n;
}
function ed(t, e, r, a) {
  function o(n) {
    return n instanceof r
      ? n
      : new r(function (i) {
          i(n);
        });
  }
  return new (r || (r = Promise))(function (n, i) {
    function s(h) {
      try {
        c(a.next(h));
      } catch (d) {
        i(d);
      }
    }
    function l(h) {
      try {
        c(a.throw(h));
      } catch (d) {
        i(d);
      }
    }
    function c(h) {
      h.done ? n(h.value) : o(h.value).then(s, l);
    }
    c((a = a.apply(t, e || [])).next());
  });
}
function J7(t) {
  var e = typeof Symbol == 'function' && Symbol.iterator,
    r = e && t[e],
    a = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == 'number')
    return {
      next: function () {
        return (
          t && a >= t.length && (t = void 0), { value: t && t[a++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
  );
}
function Ua(t) {
  return this instanceof Ua ? ((this.v = t), this) : new Ua(t);
}
function td(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var a = r.apply(t, e || []),
    o,
    n = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == 'function' ? AsyncIterator : Object).prototype,
    )),
    s('next'),
    s('throw'),
    s('return', i),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function i(p) {
    return function (f) {
      return Promise.resolve(f).then(p, d);
    };
  }
  function s(p, f) {
    a[p] &&
      ((o[p] = function (x) {
        return new Promise(function (b, z) {
          n.push([p, x, b, z]) > 1 || l(p, x);
        });
      }),
      f && (o[p] = f(o[p])));
  }
  function l(p, f) {
    try {
      c(a[p](f));
    } catch (x) {
      u(n[0][3], x);
    }
  }
  function c(p) {
    p.value instanceof Ua
      ? Promise.resolve(p.value.v).then(h, d)
      : u(n[0][2], p);
  }
  function h(p) {
    l('next', p);
  }
  function d(p) {
    l('throw', p);
  }
  function u(p, f) {
    p(f), n.shift(), n.length && l(n[0][0], n[0][1]);
  }
}
function ad(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof J7 == 'function' ? J7(t) : t[Symbol.iterator]()),
      (r = {}),
      a('next'),
      a('throw'),
      a('return'),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function a(n) {
    r[n] =
      t[n] &&
      function (i) {
        return new Promise(function (s, l) {
          (i = t[n](i)), o(s, l, i.done, i.value);
        });
      };
  }
  function o(n, i, s, l) {
    Promise.resolve(l).then(function (c) {
      n({ value: c, done: s });
    }, i);
  }
}
var Rr = t => t && typeof t.length == 'number' && typeof t != 'function';
function o2(t) {
  return O(t?.then);
}
function n2(t) {
  return O(t[Ir]);
}
function i2(t) {
  return Symbol.asyncIterator && O(t?.[Symbol.asyncIterator]);
}
function s2(t) {
  return new TypeError(
    `You provided ${t !== null && typeof t == 'object' ? 'an invalid object' : `'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function dx() {
  return typeof Symbol != 'function' || !Symbol.iterator
    ? '@@iterator'
    : Symbol.iterator;
}
var l2 = dx();
function c2(t) {
  return O(t?.[l2]);
}
function h2(t) {
  return td(this, arguments, function* () {
    let r = t.getReader();
    try {
      for (;;) {
        let { value: a, done: o } = yield Ua(r.read());
        if (o) return yield Ua(void 0);
        yield yield Ua(a);
      }
    } finally {
      r.releaseLock();
    }
  });
}
function d2(t) {
  return O(t?.getReader);
}
function te(t) {
  if (t instanceof P) return t;
  if (t != null) {
    if (n2(t)) return ux(t);
    if (Rr(t)) return px(t);
    if (o2(t)) return fx(t);
    if (i2(t)) return rd(t);
    if (c2(t)) return mx(t);
    if (d2(t)) return vx(t);
  }
  throw s2(t);
}
function ux(t) {
  return new P(e => {
    let r = t[Ir]();
    if (O(r.subscribe)) return r.subscribe(e);
    throw new TypeError(
      'Provided object does not correctly implement Symbol.observable',
    );
  });
}
function px(t) {
  return new P(e => {
    for (let r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
    e.complete();
  });
}
function fx(t) {
  return new P(e => {
    t.then(
      r => {
        e.closed || (e.next(r), e.complete());
      },
      r => e.error(r),
    ).then(null, $5);
  });
}
function mx(t) {
  return new P(e => {
    for (let r of t) if ((e.next(r), e.closed)) return;
    e.complete();
  });
}
function rd(t) {
  return new P(e => {
    gx(t, e).catch(r => e.error(r));
  });
}
function vx(t) {
  return rd(h2(t));
}
function gx(t, e) {
  var r, a, o, n;
  return ed(this, void 0, void 0, function* () {
    try {
      for (r = ad(t); (a = yield r.next()), !a.done; ) {
        let i = a.value;
        if ((e.next(i), e.closed)) return;
      }
    } catch (i) {
      o = { error: i };
    } finally {
      try {
        a && !a.done && (n = r.return) && (yield n.call(r));
      } finally {
        if (o) throw o.error;
      }
    }
    e.complete();
  });
}
function N1(t, e, r, a = 0, o = !1) {
  let n = e.schedule(function () {
    r(), o ? t.add(this.schedule(null, a)) : this.unsubscribe();
  }, a);
  if ((t.add(n), !o)) return n;
}
function $a(t, e = 0) {
  return B((r, a) => {
    r.subscribe(
      k(
        a,
        o => N1(a, t, () => a.next(o), e),
        () => N1(a, t, () => a.complete(), e),
        o => N1(a, t, () => a.error(o), e),
      ),
    );
  });
}
function u2(t, e = 0) {
  return B((r, a) => {
    a.add(t.schedule(() => r.subscribe(a), e));
  });
}
function od(t, e) {
  return te(t).pipe(u2(e), $a(e));
}
function nd(t, e) {
  return te(t).pipe(u2(e), $a(e));
}
function id(t, e) {
  return new P(r => {
    let a = 0;
    return e.schedule(function () {
      a === t.length
        ? r.complete()
        : (r.next(t[a++]), r.closed || this.schedule());
    });
  });
}
function sd(t, e) {
  return new P(r => {
    let a;
    return (
      N1(r, e, () => {
        (a = t[l2]()),
          N1(
            r,
            e,
            () => {
              let o, n;
              try {
                ({ value: o, done: n } = a.next());
              } catch (i) {
                r.error(i);
                return;
              }
              n ? r.complete() : r.next(o);
            },
            0,
            !0,
          );
      }),
      () => O(a?.return) && a.return()
    );
  });
}
function p2(t, e) {
  if (!t) throw new Error('Iterable cannot be null');
  return new P(r => {
    N1(r, e, () => {
      let a = t[Symbol.asyncIterator]();
      N1(
        r,
        e,
        () => {
          a.next().then(o => {
            o.done ? r.complete() : r.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function ld(t, e) {
  return p2(h2(t), e);
}
function Zo(t, e) {
  if (t != null) {
    if (n2(t)) return od(t, e);
    if (Rr(t)) return id(t, e);
    if (o2(t)) return nd(t, e);
    if (i2(t)) return p2(t, e);
    if (c2(t)) return sd(t, e);
    if (d2(t)) return ld(t, e);
  }
  throw s2(t);
}
function Me(t, e) {
  return e ? Zo(t, e) : te(t);
}
function D(...t) {
  let e = $t(t);
  return Me(t, e);
}
function aa(t, e) {
  let r = O(t) ? t : () => t,
    a = o => o.error(r());
  return new P(e ? o => e.schedule(a, 0, o) : a);
}
function Q1(t) {
  return !!t && (t instanceof P || (O(t.lift) && O(t.subscribe)));
}
var b0 = Tr(
  t =>
    function () {
      t(this),
        (this.name = 'EmptyError'),
        (this.message = 'no elements in sequence');
    },
);
function cd(t) {
  return t instanceof Date && !isNaN(t);
}
function I(t, e) {
  return B((r, a) => {
    let o = 0;
    r.subscribe(
      k(a, n => {
        a.next(t.call(e, n, o++));
      }),
    );
  });
}
var { isArray: wx } = Array;
function xx(t, e) {
  return wx(e) ? t(...e) : t(e);
}
function qr(t) {
  return I(e => xx(t, e));
}
var { isArray: Mx } = Array,
  { getPrototypeOf: yx, prototype: bx, keys: Fx } = Object;
function f2(t) {
  if (t.length === 1) {
    let e = t[0];
    if (Mx(e)) return { args: e, keys: null };
    if (Cx(e)) {
      let r = Fx(e);
      return { args: r.map(a => e[a]), keys: r };
    }
  }
  return { args: t, keys: null };
}
function Cx(t) {
  return t && typeof t == 'object' && yx(t) === bx;
}
function m2(t, e) {
  return t.reduce((r, a, o) => ((r[a] = e[o]), r), {});
}
function F0(...t) {
  let e = $t(t),
    r = Nr(t),
    { args: a, keys: o } = f2(t);
  if (a.length === 0) return Me([], e);
  let n = new P(zx(a, e, o ? i => m2(o, i) : y1));
  return r ? n.pipe(qr(r)) : n;
}
function zx(t, e, r = y1) {
  return a => {
    hd(
      e,
      () => {
        let { length: o } = t,
          n = new Array(o),
          i = o,
          s = o;
        for (let l = 0; l < o; l++)
          hd(
            e,
            () => {
              let c = Me(t[l], e),
                h = !1;
              c.subscribe(
                k(
                  a,
                  d => {
                    (n[l] = d), h || ((h = !0), s--), s || a.next(r(n.slice()));
                  },
                  () => {
                    --i || a.complete();
                  },
                ),
              );
            },
            a,
          );
      },
      a,
    );
  };
}
function hd(t, e, r) {
  t ? N1(r, t, e) : e();
}
function dd(t, e, r, a, o, n, i, s) {
  let l = [],
    c = 0,
    h = 0,
    d = !1,
    u = () => {
      d && !l.length && !c && e.complete();
    },
    p = x => (c < a ? f(x) : l.push(x)),
    f = x => {
      n && e.next(x), c++;
      let b = !1;
      te(r(x, h++)).subscribe(
        k(
          e,
          z => {
            o?.(z), n ? p(z) : e.next(z);
          },
          () => {
            b = !0;
          },
          void 0,
          () => {
            if (b)
              try {
                for (c--; l.length && c < a; ) {
                  let z = l.shift();
                  i ? N1(e, i, () => f(z)) : f(z);
                }
                u();
              } catch (z) {
                e.error(z);
              }
          },
        ),
      );
    };
  return (
    t.subscribe(
      k(e, p, () => {
        (d = !0), u();
      }),
    ),
    () => {
      s?.();
    }
  );
}
function Ee(t, e, r = 1 / 0) {
  return O(e)
    ? Ee((a, o) => I((n, i) => e(a, n, o, i))(te(t(a, o))), r)
    : (typeof e == 'number' && (r = e), B((a, o) => dd(a, o, t, r)));
}
function ra(t = 1 / 0) {
  return Ee(y1, t);
}
function ud() {
  return ra(1);
}
function Wt(...t) {
  return ud()(Me(t, $t(t)));
}
function v2(t) {
  return new P(e => {
    te(t()).subscribe(e);
  });
}
function l3(...t) {
  let e = Nr(t),
    { args: r, keys: a } = f2(t),
    o = new P(n => {
      let { length: i } = r;
      if (!i) {
        n.complete();
        return;
      }
      let s = new Array(i),
        l = i,
        c = i;
      for (let h = 0; h < i; h++) {
        let d = !1;
        te(r[h]).subscribe(
          k(
            n,
            u => {
              d || ((d = !0), c--), (s[h] = u);
            },
            () => l--,
            void 0,
            () => {
              (!l || !d) && (c || n.next(a ? m2(a, s) : s), n.complete());
            },
          ),
        );
      }
    });
  return e ? o.pipe(qr(e)) : o;
}
var Ax = ['addListener', 'removeListener'],
  Sx = ['addEventListener', 'removeEventListener'],
  Vx = ['on', 'off'];
function Vt(t, e, r, a) {
  if ((O(r) && ((a = r), (r = void 0)), a)) return Vt(t, e, r).pipe(qr(a));
  let [o, n] = Hx(t)
    ? Sx.map(i => s => t[i](e, s, r))
    : Dx(t)
      ? Ax.map(pd(t, e))
      : _x(t)
        ? Vx.map(pd(t, e))
        : [];
  if (!o && Rr(t)) return Ee(i => Vt(i, e, r))(te(t));
  if (!o) throw new TypeError('Invalid event target');
  return new P(i => {
    let s = (...l) => i.next(1 < l.length ? l : l[0]);
    return o(s), () => n(s);
  });
}
function pd(t, e) {
  return r => a => t[r](e, a);
}
function Dx(t) {
  return O(t.addListener) && O(t.removeListener);
}
function _x(t) {
  return O(t.on) && O(t.off);
}
function Hx(t) {
  return O(t.addEventListener) && O(t.removeEventListener);
}
function C0(t = 0, e, r = Q7) {
  let a = -1;
  return (
    e != null && (r2(e) ? (r = e) : (a = e)),
    new P(o => {
      let n = cd(t) ? +t - r.now() : t;
      n < 0 && (n = 0);
      let i = 0;
      return r.schedule(function () {
        o.closed ||
          (o.next(i++), 0 <= a ? this.schedule(void 0, a) : o.complete());
      }, n);
    })
  );
}
function Ex(t = 0, e = St) {
  return t < 0 && (t = 0), C0(t, t, e);
}
function Qo(...t) {
  let e = $t(t),
    r = X7(t, 1 / 0),
    a = t;
  return a.length ? (a.length === 1 ? te(a[0]) : ra(r)(Me(a, e))) : Ge;
}
var Tx = new P(Z1);
function me(t, e) {
  return B((r, a) => {
    let o = 0;
    r.subscribe(k(a, n => t.call(e, n, o++) && a.next(n)));
  });
}
function fd(t) {
  return B((e, r) => {
    let a = !1,
      o = null,
      n = null,
      i = !1,
      s = () => {
        if ((n?.unsubscribe(), (n = null), a)) {
          a = !1;
          let c = o;
          (o = null), r.next(c);
        }
        i && r.complete();
      },
      l = () => {
        (n = null), i && r.complete();
      };
    e.subscribe(
      k(
        r,
        c => {
          (a = !0), (o = c), n || te(t(c)).subscribe((n = k(r, s, l)));
        },
        () => {
          (i = !0), (!a || !n || n.closed) && r.complete();
        },
      ),
    );
  });
}
function Wa(t, e = St) {
  return fd(() => C0(t, e));
}
function E1(t) {
  return B((e, r) => {
    let a = null,
      o = !1,
      n;
    (a = e.subscribe(
      k(r, void 0, void 0, i => {
        (n = te(t(i, E1(t)(e)))),
          a ? (a.unsubscribe(), (a = null), n.subscribe(r)) : (o = !0);
      }),
    )),
      o && (a.unsubscribe(), (a = null), n.subscribe(r));
  });
}
function md(t, e, r, a, o) {
  return (n, i) => {
    let s = r,
      l = e,
      c = 0;
    n.subscribe(
      k(
        i,
        h => {
          let d = c++;
          (l = s ? t(l, h, d) : ((s = !0), h)), a && i.next(l);
        },
        o &&
          (() => {
            s && i.next(l), i.complete();
          }),
      ),
    );
  };
}
function z0(t, e) {
  return O(e) ? Ee(t, e, 1) : Ee(t, 1);
}
function vd(t) {
  return new P(e => t.subscribe(e));
}
var kx = { connector: () => new C() };
function g2(t, e = kx) {
  let { connector: r } = e;
  return B((a, o) => {
    let n = r();
    te(t(vd(n))).subscribe(o), o.add(a.subscribe(n));
  });
}
function Lx(t) {
  return B((e, r) => {
    let a = !1,
      o = null,
      n = null,
      i = () => {
        if ((n?.unsubscribe(), (n = null), a)) {
          a = !1;
          let s = o;
          (o = null), r.next(s);
        }
      };
    e.subscribe(
      k(
        r,
        s => {
          n?.unsubscribe(),
            (a = !0),
            (o = s),
            (n = k(r, i, Z1)),
            te(t(s)).subscribe(n);
        },
        () => {
          i(), r.complete();
        },
        void 0,
        () => {
          o = n = null;
        },
      ),
    );
  });
}
function w2(t, e = St) {
  return B((r, a) => {
    let o = null,
      n = null,
      i = null,
      s = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = n;
          (n = null), a.next(c);
        }
      };
    function l() {
      let c = i + t,
        h = e.now();
      if (h < c) {
        (o = this.schedule(void 0, c - h)), a.add(o);
        return;
      }
      s();
    }
    r.subscribe(
      k(
        a,
        c => {
          (n = c), (i = e.now()), o || ((o = e.schedule(l, t)), a.add(o));
        },
        () => {
          s(), a.complete();
        },
        void 0,
        () => {
          n = o = null;
        },
      ),
    );
  });
}
function oa(t) {
  return B((e, r) => {
    let a = !1;
    e.subscribe(
      k(
        r,
        o => {
          (a = !0), r.next(o);
        },
        () => {
          a || r.next(t), r.complete();
        },
      ),
    );
  });
}
function a1(t) {
  return t <= 0
    ? () => Ge
    : B((e, r) => {
        let a = 0;
        e.subscribe(
          k(r, o => {
            ++a <= t && (r.next(o), t <= a && r.complete());
          }),
        );
      });
}
function gd() {
  return B((t, e) => {
    t.subscribe(k(e, Z1));
  });
}
function Ga(t) {
  return I(() => t);
}
function c3(t, e) {
  return e
    ? r => Wt(e.pipe(a1(1), gd()), r.pipe(c3(t)))
    : Ee((r, a) => te(t(r, a)).pipe(a1(1), Ga(r)));
}
function h3(t, e = St) {
  let r = C0(t, e);
  return c3(() => r);
}
function z1(t, e = y1) {
  return (
    (t = t ?? Ix),
    B((r, a) => {
      let o,
        n = !0;
      r.subscribe(
        k(a, i => {
          let s = e(i);
          (n || !t(o, s)) && ((n = !1), (o = s), a.next(i));
        }),
      );
    })
  );
}
function Ix(t, e) {
  return t === e;
}
function x2(t = Px) {
  return B((e, r) => {
    let a = !1;
    e.subscribe(
      k(
        r,
        o => {
          (a = !0), r.next(o);
        },
        () => (a ? r.complete() : r.error(t())),
      ),
    );
  });
}
function Px() {
  return new b0();
}
function wd(t, e) {
  return e
    ? r => r.pipe(wd((a, o) => te(t(a, o)).pipe(I((n, i) => e(a, n, o, i)))))
    : B((r, a) => {
        let o = 0,
          n = null,
          i = !1;
        r.subscribe(
          k(
            a,
            s => {
              n ||
                ((n = k(a, void 0, () => {
                  (n = null), i && a.complete();
                })),
                te(t(s, o++)).subscribe(n));
            },
            () => {
              (i = !0), !n && a.complete();
            },
          ),
        );
      });
}
function X1(t) {
  return B((e, r) => {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
function dt(t, e) {
  let r = arguments.length >= 2;
  return a =>
    a.pipe(
      t ? me((o, n) => t(o, n, a)) : y1,
      a1(1),
      r ? oa(e) : x2(() => new b0()),
    );
}
function jr(t) {
  return t <= 0
    ? () => Ge
    : B((e, r) => {
        let a = [];
        e.subscribe(
          k(
            r,
            o => {
              a.push(o), t < a.length && a.shift();
            },
            () => {
              for (let o of a) r.next(o);
              r.complete();
            },
            void 0,
            () => {
              a = null;
            },
          ),
        );
      });
}
function d3(t, e) {
  let r = arguments.length >= 2;
  return a =>
    a.pipe(
      t ? me((o, n) => t(o, n, a)) : y1,
      jr(1),
      r ? oa(e) : x2(() => new b0()),
    );
}
function xd(t, e) {
  let r = O(t) ? t : () => t;
  return O(e) ? g2(e, { connector: r }) : a => new jt(a, r);
}
function u3() {
  return B((t, e) => {
    let r,
      a = !1;
    t.subscribe(
      k(e, o => {
        let n = r;
        (r = o), a && e.next([n, o]), (a = !0);
      }),
    );
  });
}
function Bx(t) {
  return t ? e => g2(t)(e) : e => xd(new C())(e);
}
function p3(t, e) {
  return B(md(t, e, arguments.length >= 2, !0));
}
function Xo(t = {}) {
  let {
    connector: e = () => new C(),
    resetOnError: r = !0,
    resetOnComplete: a = !0,
    resetOnRefCountZero: o = !0,
  } = t;
  return n => {
    let i,
      s,
      l,
      c = 0,
      h = !1,
      d = !1,
      u = () => {
        s?.unsubscribe(), (s = void 0);
      },
      p = () => {
        u(), (i = l = void 0), (h = d = !1);
      },
      f = () => {
        let x = i;
        p(), x?.unsubscribe();
      };
    return B((x, b) => {
      c++, !d && !h && u();
      let z = (l = l ?? e());
      b.add(() => {
        c--, c === 0 && !d && !h && (s = f3(f, o));
      }),
        z.subscribe(b),
        !i &&
          c > 0 &&
          ((i = new M0({
            next: L => z.next(L),
            error: L => {
              (d = !0), u(), (s = f3(p, r, L)), z.error(L);
            },
            complete: () => {
              (h = !0), u(), (s = f3(p, a)), z.complete();
            },
          })),
          te(x).subscribe(i));
    })(n);
  };
}
function f3(t, e, ...r) {
  if (e === !0) {
    t();
    return;
  }
  if (e === !1) return;
  let a = new M0({
    next: () => {
      a.unsubscribe(), t();
    },
  });
  return te(e(...r)).subscribe(a);
}
function Jo(t, e, r) {
  let a,
    o = !1;
  return (
    t && typeof t == 'object'
      ? ({
          bufferSize: a = 1 / 0,
          windowTime: e = 1 / 0,
          refCount: o = !1,
          scheduler: r,
        } = t)
      : (a = t ?? 1 / 0),
    Xo({
      connector: () => new O1(a, e, r),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function en(t) {
  return me((e, r) => t <= r);
}
function T1(...t) {
  let e = $t(t);
  return B((r, a) => {
    (e ? Wt(t, r, e) : Wt(t, r)).subscribe(a);
  });
}
function Ve(t, e) {
  return B((r, a) => {
    let o = null,
      n = 0,
      i = !1,
      s = () => i && !o && a.complete();
    r.subscribe(
      k(
        a,
        l => {
          o?.unsubscribe();
          let c = 0,
            h = n++;
          te(t(l, h)).subscribe(
            (o = k(
              a,
              d => a.next(e ? e(l, d, h, c++) : d),
              () => {
                (o = null), s();
              },
            )),
          );
        },
        () => {
          (i = !0), s();
        },
      ),
    );
  });
}
function S(t) {
  return B((e, r) => {
    te(t).subscribe(k(r, () => r.complete(), Z1)), !r.closed && e.subscribe(r);
  });
}
function m3(t, e = !1) {
  return B((r, a) => {
    let o = 0;
    r.subscribe(
      k(a, n => {
        let i = t(n, o++);
        (i || e) && a.next(n), !i && a.complete();
      }),
    );
  });
}
function ve(t, e, r) {
  let a = O(t) || e || r ? { next: t, error: e, complete: r } : t;
  return a
    ? B((o, n) => {
        var i;
        (i = a.subscribe) === null || i === void 0 || i.call(a);
        let s = !0;
        o.subscribe(
          k(
            n,
            l => {
              var c;
              (c = a.next) === null || c === void 0 || c.call(a, l), n.next(l);
            },
            () => {
              var l;
              (s = !1),
                (l = a.complete) === null || l === void 0 || l.call(a),
                n.complete();
            },
            l => {
              var c;
              (s = !1),
                (c = a.error) === null || c === void 0 || c.call(a, l),
                n.error(l);
            },
            () => {
              var l, c;
              s && ((l = a.unsubscribe) === null || l === void 0 || l.call(a)),
                (c = a.finalize) === null || c === void 0 || c.call(a);
            },
          ),
        );
      })
    : y1;
}
function Md(t, e) {
  return B((r, a) => {
    let { leading: o = !0, trailing: n = !1 } = e ?? {},
      i = !1,
      s = null,
      l = null,
      c = !1,
      h = () => {
        l?.unsubscribe(), (l = null), n && (p(), c && a.complete());
      },
      d = () => {
        (l = null), c && a.complete();
      },
      u = f => (l = te(t(f)).subscribe(k(a, h, d))),
      p = () => {
        if (i) {
          i = !1;
          let f = s;
          (s = null), a.next(f), !c && u(f);
        }
      };
    r.subscribe(
      k(
        a,
        f => {
          (i = !0), (s = f), !(l && !l.closed) && (o ? p() : u(f));
        },
        () => {
          (c = !0), !(n && i && l && !l.closed) && a.complete();
        },
      ),
    );
  });
}
function Ox(t, e = St, r) {
  let a = C0(t, e);
  return Md(() => a, r);
}
function v3(...t) {
  let e = Nr(t);
  return B((r, a) => {
    let o = t.length,
      n = new Array(o),
      i = t.map(() => !1),
      s = !1;
    for (let l = 0; l < o; l++)
      te(t[l]).subscribe(
        k(
          a,
          c => {
            (n[l] = c),
              !s && !i[l] && ((i[l] = !0), (s = i.every(y1)) && (i = null));
          },
          Z1,
        ),
      );
    r.subscribe(
      k(a, l => {
        if (s) {
          let c = [l, ...n];
          a.next(e ? e(...c) : c);
        }
      }),
    );
  });
}
var uu = 'https://g.co/ng/security#xss',
  y = class extends Error {
    constructor(e, r) {
      super(si(e, r)), (this.code = e);
    }
  };
function si(t, e) {
  return `${`NG0${Math.abs(t)}`}${e ? ': ' + e : ''}`;
}
function dn(t) {
  return { toString: t }.toString();
}
var M2 = '__parameters__';
function Nx(t) {
  return function (...r) {
    if (t) {
      let a = t(...r);
      for (let o in a) this[o] = a[o];
    }
  };
}
function Y4(t, e, r) {
  return dn(() => {
    let a = Nx(e);
    function o(...n) {
      if (this instanceof o) return a.apply(this, n), this;
      let i = new o(...n);
      return (s.annotation = i), s;
      function s(l, c, h) {
        let d = l.hasOwnProperty(M2)
          ? l[M2]
          : Object.defineProperty(l, M2, { value: [] })[M2];
        for (; d.length <= h; ) d.push(null);
        return (d[h] = d[h] || []).push(i), l;
      }
    }
    return (
      r && (o.prototype = Object.create(r.prototype)),
      (o.prototype.ngMetadataName = t),
      (o.annotationCls = o),
      o
    );
  });
}
var A0 = globalThis;
function De(t) {
  for (let e in t) if (t[e] === De) return e;
  throw Error('Could not find renamed property on target object.');
}
function Rx(t, e) {
  for (let r in e) e.hasOwnProperty(r) && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function L1(t) {
  if (typeof t == 'string') return t;
  if (Array.isArray(t)) return '[' + t.map(L1).join(', ') + ']';
  if (t == null) return '' + t;
  if (t.overriddenName) return `${t.overriddenName}`;
  if (t.name) return `${t.name}`;
  let e = t.toString();
  if (e == null) return '' + e;
  let r = e.indexOf(`
`);
  return r === -1 ? e : e.substring(0, r);
}
function H3(t, e) {
  return t == null || t === ''
    ? e === null
      ? ''
      : e
    : e == null || e === ''
      ? t
      : t + ' ' + e;
}
var qx = De({ __forward_ref__: De });
function Ht(t) {
  return (
    (t.__forward_ref__ = Ht),
    (t.toString = function () {
      return L1(this());
    }),
    t
  );
}
function k1(t) {
  return pu(t) ? t() : t;
}
function pu(t) {
  return (
    typeof t == 'function' && t.hasOwnProperty(qx) && t.__forward_ref__ === Ht
  );
}
function w(t) {
  return {
    token: t.token,
    providedIn: t.providedIn || null,
    factory: t.factory,
    value: void 0,
  };
}
function q(t) {
  return { providers: t.providers || [], imports: t.imports || [] };
}
function li(t) {
  return yd(t, mu) || yd(t, vu);
}
function fu(t) {
  return li(t) !== null;
}
function yd(t, e) {
  return t.hasOwnProperty(e) ? t[e] : null;
}
function jx(t) {
  let e = t && (t[mu] || t[vu]);
  return e || null;
}
function bd(t) {
  return t && (t.hasOwnProperty(Fd) || t.hasOwnProperty(Yx)) ? t[Fd] : null;
}
var mu = De({ ɵprov: De }),
  Fd = De({ ɵinj: De }),
  vu = De({ ngInjectableDef: De }),
  Yx = De({ ngInjectorDef: De }),
  F = class {
    constructor(e, r) {
      (this._desc = e),
        (this.ngMetadataName = 'InjectionToken'),
        (this.ɵprov = void 0),
        typeof r == 'number'
          ? (this.__NG_ELEMENT_ID__ = r)
          : r !== void 0 &&
            (this.ɵprov = w({
              token: this,
              providedIn: r.providedIn || 'root',
              factory: r.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function gu(t) {
  return t && !!t.ɵproviders;
}
var Ux = De({ ɵcmp: De }),
  $x = De({ ɵdir: De }),
  Wx = De({ ɵpipe: De }),
  Gx = De({ ɵmod: De }),
  k2 = De({ ɵfac: De }),
  an = De({ __NG_ELEMENT_ID__: De }),
  Cd = De({ __NG_ENV_ID__: De });
function Zt(t) {
  return typeof t == 'string' ? t : t == null ? '' : String(t);
}
function Kx(t) {
  return typeof t == 'function'
    ? t.name || t.toString()
    : typeof t == 'object' && t != null && typeof t.type == 'function'
      ? t.type.name || t.type.toString()
      : Zt(t);
}
function Zx(t, e) {
  let r = e ? `. Dependency path: ${e.join(' > ')} > ${t}` : '';
  throw new y(-200, t);
}
function U4(t, e) {
  throw new y(-201, !1);
}
var ne = (function (t) {
    return (
      (t[(t.Default = 0)] = 'Default'),
      (t[(t.Host = 1)] = 'Host'),
      (t[(t.Self = 2)] = 'Self'),
      (t[(t.SkipSelf = 4)] = 'SkipSelf'),
      (t[(t.Optional = 8)] = 'Optional'),
      t
    );
  })(ne || {}),
  E3;
function wu() {
  return E3;
}
function R1(t) {
  let e = E3;
  return (E3 = t), e;
}
function xu(t, e, r) {
  let a = li(t);
  if (a && a.providedIn == 'root')
    return a.value === void 0 ? (a.value = a.factory()) : a.value;
  if (r & ne.Optional) return null;
  if (e !== void 0) return e;
  U4(t, 'Injector');
}
var Qx = {},
  rn = Qx,
  T3 = '__NG_DI_FLAG__',
  L2 = 'ngTempTokenPath',
  Xx = 'ngTokenPath',
  Jx = /\n/gm,
  eM = '\u0275',
  zd = '__source',
  Gr;
function tM() {
  return Gr;
}
function na(t) {
  let e = Gr;
  return (Gr = t), e;
}
function aM(t, e = ne.Default) {
  if (Gr === void 0) throw new y(-203, !1);
  return Gr === null
    ? xu(t, void 0, e)
    : Gr.get(t, e & ne.Optional ? null : void 0, e);
}
function g(t, e = ne.Default) {
  return (wu() || aM)(k1(t), e);
}
function m(t, e = ne.Default) {
  return g(t, ci(e));
}
function ci(t) {
  return typeof t > 'u' || typeof t == 'number'
    ? t
    : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4);
}
function k3(t) {
  let e = [];
  for (let r = 0; r < t.length; r++) {
    let a = k1(t[r]);
    if (Array.isArray(a)) {
      if (a.length === 0) throw new y(900, !1);
      let o,
        n = ne.Default;
      for (let i = 0; i < a.length; i++) {
        let s = a[i],
          l = rM(s);
        typeof l == 'number' ? (l === -1 ? (o = s.token) : (n |= l)) : (o = s);
      }
      e.push(g(o, n));
    } else e.push(g(a));
  }
  return e;
}
function $4(t, e) {
  return (t[T3] = e), (t.prototype[T3] = e), t;
}
function rM(t) {
  return t[T3];
}
function oM(t, e, r, a) {
  let o = t[L2];
  throw (
    (e[zd] && o.unshift(e[zd]),
    (t.message = nM(
      `
` + t.message,
      o,
      r,
      a,
    )),
    (t[Xx] = o),
    (t[L2] = null),
    t)
  );
}
function nM(t, e, r, a = null) {
  t =
    t &&
    t.charAt(0) ===
      `
` &&
    t.charAt(1) == eM
      ? t.slice(2)
      : t;
  let o = L1(e);
  if (Array.isArray(e)) o = e.map(L1).join(' -> ');
  else if (typeof e == 'object') {
    let n = [];
    for (let i in e)
      if (e.hasOwnProperty(i)) {
        let s = e[i];
        n.push(i + ':' + (typeof s == 'string' ? JSON.stringify(s) : L1(s)));
      }
    o = `{${n.join(', ')}}`;
  }
  return `${r}${a ? '(' + a + ')' : ''}[${o}]: ${t.replace(
    Jx,
    `
  `,
  )}`;
}
var Mu = $4(
    Y4('Inject', t => ({ token: t })),
    -1,
  ),
  hr = $4(Y4('Optional'), 8);
var hi = $4(Y4('SkipSelf'), 4);
function Ja(t, e) {
  let r = t.hasOwnProperty(k2);
  return r ? t[k2] : null;
}
function iM(t, e, r) {
  if (t.length !== e.length) return !1;
  for (let a = 0; a < t.length; a++) {
    let o = t[a],
      n = e[a];
    if ((r && ((o = r(o)), (n = r(n))), n !== o)) return !1;
  }
  return !0;
}
function sM(t) {
  return t.flat(Number.POSITIVE_INFINITY);
}
function W4(t, e) {
  t.forEach(r => (Array.isArray(r) ? W4(r, e) : e(r)));
}
function yu(t, e, r) {
  e >= t.length ? t.push(r) : t.splice(e, 0, r);
}
function I2(t, e) {
  return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
}
function lM(t, e) {
  let r = [];
  for (let a = 0; a < t; a++) r.push(e);
  return r;
}
function cM(t, e, r, a) {
  let o = t.length;
  if (o == e) t.push(r, a);
  else if (o === 1) t.push(a, t[0]), (t[0] = r);
  else {
    for (o--, t.push(t[o - 1], t[o]); o > e; ) {
      let n = o - 2;
      (t[o] = t[n]), o--;
    }
    (t[e] = r), (t[e + 1] = a);
  }
}
function un(t, e, r) {
  let a = pn(t, e);
  return a >= 0 ? (t[a | 1] = r) : ((a = ~a), cM(t, a, e, r)), a;
}
function g3(t, e) {
  let r = pn(t, e);
  if (r >= 0) return t[r | 1];
}
function pn(t, e) {
  return hM(t, e, 1);
}
function hM(t, e, r) {
  let a = 0,
    o = t.length >> r;
  for (; o !== a; ) {
    let n = a + ((o - a) >> 1),
      i = t[n << r];
    if (e === i) return n << r;
    i > e ? (o = n) : (a = n + 1);
  }
  return ~(o << r);
}
var Zr = {},
  q1 = [],
  Qr = new F(''),
  bu = new F('', -1),
  Fu = new F(''),
  P2 = class {
    get(e, r = rn) {
      if (r === rn) {
        let a = new Error(`NullInjectorError: No provider for ${L1(e)}!`);
        throw ((a.name = 'NullInjectorError'), a);
      }
      return r;
    }
  },
  Cu = (function (t) {
    return (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t;
  })(Cu || {}),
  Qt = (function (t) {
    return (
      (t[(t.Emulated = 0)] = 'Emulated'),
      (t[(t.None = 2)] = 'None'),
      (t[(t.ShadowDom = 3)] = 'ShadowDom'),
      t
    );
  })(Qt || {}),
  la = (function (t) {
    return (
      (t[(t.None = 0)] = 'None'),
      (t[(t.SignalBased = 1)] = 'SignalBased'),
      (t[(t.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
      t
    );
  })(la || {});
function dM(t, e, r) {
  let a = t.length;
  for (;;) {
    let o = t.indexOf(e, r);
    if (o === -1) return o;
    if (o === 0 || t.charCodeAt(o - 1) <= 32) {
      let n = e.length;
      if (o + n === a || t.charCodeAt(o + n) <= 32) return o;
    }
    r = o + 1;
  }
}
function L3(t, e, r) {
  let a = 0;
  for (; a < r.length; ) {
    let o = r[a];
    if (typeof o == 'number') {
      if (o !== 0) break;
      a++;
      let n = r[a++],
        i = r[a++],
        s = r[a++];
      t.setAttribute(e, i, s, n);
    } else {
      let n = o,
        i = r[++a];
      uM(n) ? t.setProperty(e, n, i) : t.setAttribute(e, n, i), a++;
    }
  }
  return a;
}
function zu(t) {
  return t === 3 || t === 4 || t === 6;
}
function uM(t) {
  return t.charCodeAt(0) === 64;
}
function on(t, e) {
  if (!(e === null || e.length === 0))
    if (t === null || t.length === 0) t = e.slice();
    else {
      let r = -1;
      for (let a = 0; a < e.length; a++) {
        let o = e[a];
        typeof o == 'number'
          ? (r = o)
          : r === 0 ||
            (r === -1 || r === 2
              ? Ad(t, r, o, null, e[++a])
              : Ad(t, r, o, null, null));
      }
    }
  return t;
}
function Ad(t, e, r, a, o) {
  let n = 0,
    i = t.length;
  if (e === -1) i = -1;
  else
    for (; n < t.length; ) {
      let s = t[n++];
      if (typeof s == 'number') {
        if (s === e) {
          i = -1;
          break;
        } else if (s > e) {
          i = n - 1;
          break;
        }
      }
    }
  for (; n < t.length; ) {
    let s = t[n];
    if (typeof s == 'number') break;
    if (s === r) {
      if (a === null) {
        o !== null && (t[n + 1] = o);
        return;
      } else if (a === t[n + 1]) {
        t[n + 2] = o;
        return;
      }
    }
    n++, a !== null && n++, o !== null && n++;
  }
  i !== -1 && (t.splice(i, 0, e), (n = i + 1)),
    t.splice(n++, 0, r),
    a !== null && t.splice(n++, 0, a),
    o !== null && t.splice(n++, 0, o);
}
var Au = 'ng-template';
function pM(t, e, r, a) {
  let o = 0;
  if (a) {
    for (; o < e.length && typeof e[o] == 'string'; o += 2)
      if (e[o] === 'class' && dM(e[o + 1].toLowerCase(), r, 0) !== -1)
        return !0;
  } else if (G4(t)) return !1;
  if (((o = e.indexOf(1, o)), o > -1)) {
    let n;
    for (; ++o < e.length && typeof (n = e[o]) == 'string'; )
      if (n.toLowerCase() === r) return !0;
  }
  return !1;
}
function G4(t) {
  return t.type === 4 && t.value !== Au;
}
function fM(t, e, r) {
  let a = t.type === 4 && !r ? Au : t.value;
  return e === a;
}
function mM(t, e, r) {
  let a = 4,
    o = t.attrs,
    n = o !== null ? wM(o) : 0,
    i = !1;
  for (let s = 0; s < e.length; s++) {
    let l = e[s];
    if (typeof l == 'number') {
      if (!i && !Dt(a) && !Dt(l)) return !1;
      if (i && Dt(l)) continue;
      (i = !1), (a = l | (a & 1));
      continue;
    }
    if (!i)
      if (a & 4) {
        if (
          ((a = 2 | (a & 1)),
          (l !== '' && !fM(t, l, r)) || (l === '' && e.length === 1))
        ) {
          if (Dt(a)) return !1;
          i = !0;
        }
      } else if (a & 8) {
        if (o === null || !pM(t, o, l, r)) {
          if (Dt(a)) return !1;
          i = !0;
        }
      } else {
        let c = e[++s],
          h = vM(l, o, G4(t), r);
        if (h === -1) {
          if (Dt(a)) return !1;
          i = !0;
          continue;
        }
        if (c !== '') {
          let d;
          if (
            (h > n ? (d = '') : (d = o[h + 1].toLowerCase()), a & 2 && c !== d)
          ) {
            if (Dt(a)) return !1;
            i = !0;
          }
        }
      }
  }
  return Dt(a) || i;
}
function Dt(t) {
  return (t & 1) === 0;
}
function vM(t, e, r, a) {
  if (e === null) return -1;
  let o = 0;
  if (a || !r) {
    let n = !1;
    for (; o < e.length; ) {
      let i = e[o];
      if (i === t) return o;
      if (i === 3 || i === 6) n = !0;
      else if (i === 1 || i === 2) {
        let s = e[++o];
        for (; typeof s == 'string'; ) s = e[++o];
        continue;
      } else {
        if (i === 4) break;
        if (i === 0) {
          o += 4;
          continue;
        }
      }
      o += n ? 1 : 2;
    }
    return -1;
  } else return xM(e, t);
}
function Su(t, e, r = !1) {
  for (let a = 0; a < e.length; a++) if (mM(t, e[a], r)) return !0;
  return !1;
}
function gM(t) {
  let e = t.attrs;
  if (e != null) {
    let r = e.indexOf(5);
    if (!(r & 1)) return e[r + 1];
  }
  return null;
}
function wM(t) {
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    if (zu(r)) return e;
  }
  return t.length;
}
function xM(t, e) {
  let r = t.indexOf(4);
  if (r > -1)
    for (r++; r < t.length; ) {
      let a = t[r];
      if (typeof a == 'number') return -1;
      if (a === e) return r;
      r++;
    }
  return -1;
}
function MM(t, e) {
  e: for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (t.length === a.length) {
      for (let o = 0; o < t.length; o++) if (t[o] !== a[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Sd(t, e) {
  return t ? ':not(' + e.trim() + ')' : e;
}
function yM(t) {
  let e = t[0],
    r = 1,
    a = 2,
    o = '',
    n = !1;
  for (; r < t.length; ) {
    let i = t[r];
    if (typeof i == 'string')
      if (a & 2) {
        let s = t[++r];
        o += '[' + i + (s.length > 0 ? '="' + s + '"' : '') + ']';
      } else a & 8 ? (o += '.' + i) : a & 4 && (o += ' ' + i);
    else
      o !== '' && !Dt(i) && ((e += Sd(n, o)), (o = '')),
        (a = i),
        (n = n || !Dt(a));
    r++;
  }
  return o !== '' && (e += Sd(n, o)), e;
}
function bM(t) {
  return t.map(yM).join(',');
}
function FM(t) {
  let e = [],
    r = [],
    a = 1,
    o = 2;
  for (; a < t.length; ) {
    let n = t[a];
    if (typeof n == 'string')
      o === 2 ? n !== '' && e.push(n, t[++a]) : o === 8 && r.push(n);
    else {
      if (!Dt(o)) break;
      o = n;
    }
    a++;
  }
  return { attrs: e, classes: r };
}
function Ze(t) {
  return dn(() => {
    let e = Eu(t),
      r = Q(M({}, e), {
        decls: t.decls,
        vars: t.vars,
        template: t.template,
        consts: t.consts || null,
        ngContentSelectors: t.ngContentSelectors,
        onPush: t.changeDetection === Cu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (e.standalone && t.dependencies) || null,
        getStandaloneInjector: null,
        signals: t.signals ?? !1,
        data: t.data || {},
        encapsulation: t.encapsulation || Qt.Emulated,
        styles: t.styles || q1,
        _: null,
        schemas: t.schemas || null,
        tView: null,
        id: '',
      });
    Tu(r);
    let a = t.dependencies;
    return (
      (r.directiveDefs = Dd(a, !1)), (r.pipeDefs = Dd(a, !0)), (r.id = AM(r)), r
    );
  });
}
function CM(t) {
  return S0(t) || Vu(t);
}
function zM(t) {
  return t !== null;
}
function j(t) {
  return dn(() => ({
    type: t.type,
    bootstrap: t.bootstrap || q1,
    declarations: t.declarations || q1,
    imports: t.imports || q1,
    exports: t.exports || q1,
    transitiveCompileScopes: null,
    schemas: t.schemas || null,
    id: t.id || null,
  }));
}
function Vd(t, e) {
  if (t == null) return Zr;
  let r = {};
  for (let a in t)
    if (t.hasOwnProperty(a)) {
      let o = t[a],
        n,
        i,
        s = la.None;
      Array.isArray(o)
        ? ((s = o[0]), (n = o[1]), (i = o[2] ?? n))
        : ((n = o), (i = o)),
        e ? ((r[n] = s !== la.None ? [a, s] : a), (e[n] = i)) : (r[n] = a);
    }
  return r;
}
function _(t) {
  return dn(() => {
    let e = Eu(t);
    return Tu(e), e;
  });
}
function fn(t) {
  return {
    type: t.type,
    name: t.name,
    factory: null,
    pure: t.pure !== !1,
    standalone: t.standalone === !0,
    onDestroy: t.type.prototype.ngOnDestroy || null,
  };
}
function S0(t) {
  return t[Ux] || null;
}
function Vu(t) {
  return t[$x] || null;
}
function Du(t) {
  return t[Wx] || null;
}
function _u(t) {
  let e = S0(t) || Vu(t) || Du(t);
  return e !== null ? e.standalone : !1;
}
function Hu(t, e) {
  let r = t[Gx] || null;
  if (!r && e === !0)
    throw new Error(`Type ${L1(t)} does not have '\u0275mod' property.`);
  return r;
}
function Eu(t) {
  let e = {};
  return {
    type: t.type,
    providersResolver: null,
    factory: null,
    hostBindings: t.hostBindings || null,
    hostVars: t.hostVars || 0,
    hostAttrs: t.hostAttrs || null,
    contentQueries: t.contentQueries || null,
    declaredInputs: e,
    inputTransforms: null,
    inputConfig: t.inputs || Zr,
    exportAs: t.exportAs || null,
    standalone: t.standalone === !0,
    signals: t.signals === !0,
    selectors: t.selectors || q1,
    viewQuery: t.viewQuery || null,
    features: t.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Vd(t.inputs, e),
    outputs: Vd(t.outputs),
    debugInfo: null,
  };
}
function Tu(t) {
  t.features?.forEach(e => e(t));
}
function Dd(t, e) {
  if (!t) return null;
  let r = e ? Du : CM;
  return () => (typeof t == 'function' ? t() : t).map(a => r(a)).filter(zM);
}
function AM(t) {
  let e = 0,
    r = [
      t.selectors,
      t.ngContentSelectors,
      t.hostVars,
      t.hostAttrs,
      t.consts,
      t.vars,
      t.decls,
      t.encapsulation,
      t.standalone,
      t.signals,
      t.exportAs,
      JSON.stringify(t.inputs),
      JSON.stringify(t.outputs),
      Object.getOwnPropertyNames(t.type.prototype),
      !!t.contentQueries,
      !!t.viewQuery,
    ].join('|');
  for (let o of r) e = (Math.imul(31, e) + o.charCodeAt(0)) << 0;
  return (e += 2147483648), 'c' + e;
}
function Et(t) {
  return { ɵproviders: t };
}
function SM(...t) {
  return { ɵproviders: ku(!0, t), ɵfromNgModule: !0 };
}
function ku(t, ...e) {
  let r = [],
    a = new Set(),
    o,
    n = i => {
      r.push(i);
    };
  return (
    W4(e, i => {
      let s = i;
      I3(s, n, [], a) && ((o ||= []), o.push(s));
    }),
    o !== void 0 && Lu(o, n),
    r
  );
}
function Lu(t, e) {
  for (let r = 0; r < t.length; r++) {
    let { ngModule: a, providers: o } = t[r];
    K4(o, n => {
      e(n, a);
    });
  }
}
function I3(t, e, r, a) {
  if (((t = k1(t)), !t)) return !1;
  let o = null,
    n = bd(t),
    i = !n && S0(t);
  if (!n && !i) {
    let l = t.ngModule;
    if (((n = bd(l)), n)) o = l;
    else return !1;
  } else {
    if (i && !i.standalone) return !1;
    o = t;
  }
  let s = a.has(o);
  if (i) {
    if (s) return !1;
    if ((a.add(o), i.dependencies)) {
      let l =
        typeof i.dependencies == 'function' ? i.dependencies() : i.dependencies;
      for (let c of l) I3(c, e, r, a);
    }
  } else if (n) {
    if (n.imports != null && !s) {
      a.add(o);
      let c;
      try {
        W4(n.imports, h => {
          I3(h, e, r, a) && ((c ||= []), c.push(h));
        });
      } finally {
      }
      c !== void 0 && Lu(c, e);
    }
    if (!s) {
      let c = Ja(o) || (() => new o());
      e({ provide: o, useFactory: c, deps: q1 }, o),
        e({ provide: Fu, useValue: o, multi: !0 }, o),
        e({ provide: Qr, useValue: () => g(o), multi: !0 }, o);
    }
    let l = n.providers;
    if (l != null && !s) {
      let c = t;
      K4(l, h => {
        e(h, c);
      });
    }
  } else return !1;
  return o !== t && t.providers !== void 0;
}
function K4(t, e) {
  for (let r of t)
    gu(r) && (r = r.ɵproviders), Array.isArray(r) ? K4(r, e) : e(r);
}
var VM = De({ provide: String, useValue: De });
function Iu(t) {
  return t !== null && typeof t == 'object' && VM in t;
}
function DM(t) {
  return !!(t && t.useExisting);
}
function _M(t) {
  return !!(t && t.useFactory);
}
function Xr(t) {
  return typeof t == 'function';
}
function HM(t) {
  return !!t.useClass;
}
var di = new F(''),
  S2 = {},
  EM = {},
  w3;
function ui() {
  return w3 === void 0 && (w3 = new P2()), w3;
}
var F1 = class {},
  nn = class extends F1 {
    get destroyed() {
      return this._destroyed;
    }
    constructor(e, r, a, o) {
      super(),
        (this.parent = r),
        (this.source = a),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        B3(e, i => this.processProvider(i)),
        this.records.set(bu, Yr(void 0, this)),
        o.has('environment') && this.records.set(F1, Yr(void 0, this));
      let n = this.records.get(di);
      n != null && typeof n.value == 'string' && this.scopes.add(n.value),
        (this.injectorDefTypes = new Set(this.get(Fu, q1, ne.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let e = ce(null);
      try {
        for (let a of this._ngOnDestroyHooks) a.ngOnDestroy();
        let r = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let a of r) a();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          ce(e);
      }
    }
    onDestroy(e) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(e),
        () => this.removeOnDestroy(e)
      );
    }
    runInContext(e) {
      this.assertNotDestroyed();
      let r = na(this),
        a = R1(void 0),
        o;
      try {
        return e();
      } finally {
        na(r), R1(a);
      }
    }
    get(e, r = rn, a = ne.Default) {
      if ((this.assertNotDestroyed(), e.hasOwnProperty(Cd))) return e[Cd](this);
      a = ci(a);
      let o,
        n = na(this),
        i = R1(void 0);
      try {
        if (!(a & ne.SkipSelf)) {
          let l = this.records.get(e);
          if (l === void 0) {
            let c = PM(e) && li(e);
            c && this.injectableDefInScope(c)
              ? (l = Yr(P3(e), S2))
              : (l = null),
              this.records.set(e, l);
          }
          if (l != null) return this.hydrate(e, l);
        }
        let s = a & ne.Self ? ui() : this.parent;
        return (r = a & ne.Optional && r === rn ? null : r), s.get(e, r);
      } catch (s) {
        if (s.name === 'NullInjectorError') {
          if (((s[L2] = s[L2] || []).unshift(L1(e)), n)) throw s;
          return oM(s, e, 'R3InjectorError', this.source);
        } else throw s;
      } finally {
        R1(i), na(n);
      }
    }
    resolveInjectorInitializers() {
      let e = ce(null),
        r = na(this),
        a = R1(void 0),
        o;
      try {
        let n = this.get(Qr, q1, ne.Self);
        for (let i of n) i();
      } finally {
        na(r), R1(a), ce(e);
      }
    }
    toString() {
      let e = [],
        r = this.records;
      for (let a of r.keys()) e.push(L1(a));
      return `R3Injector[${e.join(', ')}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new y(205, !1);
    }
    processProvider(e) {
      e = k1(e);
      let r = Xr(e) ? e : k1(e && e.provide),
        a = kM(e);
      if (!Xr(e) && e.multi === !0) {
        let o = this.records.get(r);
        o ||
          ((o = Yr(void 0, S2, !0)),
          (o.factory = () => k3(o.multi)),
          this.records.set(r, o)),
          (r = e),
          o.multi.push(e);
      }
      this.records.set(r, a);
    }
    hydrate(e, r) {
      let a = ce(null);
      try {
        return (
          r.value === S2 && ((r.value = EM), (r.value = r.factory())),
          typeof r.value == 'object' &&
            r.value &&
            IM(r.value) &&
            this._ngOnDestroyHooks.add(r.value),
          r.value
        );
      } finally {
        ce(a);
      }
    }
    injectableDefInScope(e) {
      if (!e.providedIn) return !1;
      let r = k1(e.providedIn);
      return typeof r == 'string'
        ? r === 'any' || this.scopes.has(r)
        : this.injectorDefTypes.has(r);
    }
    removeOnDestroy(e) {
      let r = this._onDestroyHooks.indexOf(e);
      r !== -1 && this._onDestroyHooks.splice(r, 1);
    }
  };
function P3(t) {
  let e = li(t),
    r = e !== null ? e.factory : Ja(t);
  if (r !== null) return r;
  if (t instanceof F) throw new y(204, !1);
  if (t instanceof Function) return TM(t);
  throw new y(204, !1);
}
function TM(t) {
  if (t.length > 0) throw new y(204, !1);
  let r = jx(t);
  return r !== null ? () => r.factory(t) : () => new t();
}
function kM(t) {
  if (Iu(t)) return Yr(void 0, t.useValue);
  {
    let e = Pu(t);
    return Yr(e, S2);
  }
}
function Pu(t, e, r) {
  let a;
  if (Xr(t)) {
    let o = k1(t);
    return Ja(o) || P3(o);
  } else if (Iu(t)) a = () => k1(t.useValue);
  else if (_M(t)) a = () => t.useFactory(...k3(t.deps || []));
  else if (DM(t)) a = () => g(k1(t.useExisting));
  else {
    let o = k1(t && (t.useClass || t.provide));
    if (LM(t)) a = () => new o(...k3(t.deps));
    else return Ja(o) || P3(o);
  }
  return a;
}
function Yr(t, e, r = !1) {
  return { factory: t, value: e, multi: r ? [] : void 0 };
}
function LM(t) {
  return !!t.deps;
}
function IM(t) {
  return (
    t !== null && typeof t == 'object' && typeof t.ngOnDestroy == 'function'
  );
}
function PM(t) {
  return typeof t == 'function' || (typeof t == 'object' && t instanceof F);
}
function B3(t, e) {
  for (let r of t)
    Array.isArray(r) ? B3(r, e) : r && gu(r) ? B3(r.ɵproviders, e) : e(r);
}
function pt(t, e) {
  t instanceof nn && t.assertNotDestroyed();
  let r,
    a = na(t),
    o = R1(void 0);
  try {
    return e();
  } finally {
    na(a), R1(o);
  }
}
function Bu() {
  return wu() !== void 0 || tM() != null;
}
function dr(t) {
  if (!Bu()) throw new y(-203, !1);
}
var Ou = Function;
function BM(t) {
  return typeof t == 'function';
}
var r0 = 0,
  Z = 1,
  K = 2,
  S1 = 3,
  _t = 4,
  $1 = 5,
  Jr = 6,
  B2 = 7,
  b1 = 8,
  eo = 9,
  Xt = 10,
  Be = 11,
  sn = 12,
  _d = 13,
  lo = 14,
  j1 = 15,
  er = 16,
  Ur = 17,
  V0 = 18,
  pi = 19,
  Nu = 20,
  ia = 21,
  V2 = 22,
  ut = 23,
  c1 = 25,
  Z4 = 1;
var tr = 7,
  O2 = 8,
  to = 9,
  A1 = 10,
  N2 = (function (t) {
    return (
      (t[(t.None = 0)] = 'None'),
      (t[(t.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
      t
    );
  })(N2 || {});
function sa(t) {
  return Array.isArray(t) && typeof t[Z4] == 'object';
}
function H0(t) {
  return Array.isArray(t) && t[Z4] === !0;
}
function Q4(t) {
  return (t.flags & 4) !== 0;
}
function fi(t) {
  return t.componentOffset > -1;
}
function mi(t) {
  return (t.flags & 1) === 1;
}
function D0(t) {
  return !!t.template;
}
function O3(t) {
  return (t[K] & 512) !== 0;
}
var N3 = class {
  constructor(e, r, a) {
    (this.previousValue = e), (this.currentValue = r), (this.firstChange = a);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Ru(t, e, r, a) {
  e !== null ? e.applyValueToInputSignal(e, a) : (t[r] = a);
}
function ee() {
  return qu;
}
function qu(t) {
  return t.type.prototype.ngOnChanges && (t.setInput = NM), OM;
}
ee.ngInherit = !0;
function OM() {
  let t = Yu(this),
    e = t?.current;
  if (e) {
    let r = t.previous;
    if (r === Zr) t.previous = e;
    else for (let a in e) r[a] = e[a];
    (t.current = null), this.ngOnChanges(e);
  }
}
function NM(t, e, r, a, o) {
  let n = this.declaredInputs[a],
    i = Yu(t) || RM(t, { previous: Zr, current: null }),
    s = i.current || (i.current = {}),
    l = i.previous,
    c = l[n];
  (s[n] = new N3(c && c.currentValue, r, l === Zr)), Ru(t, e, o, r);
}
var ju = '__ngSimpleChanges__';
function Yu(t) {
  return t[ju] || null;
}
function RM(t, e) {
  return (t[ju] = e);
}
var Hd = null;
var Gt = function (t, e, r) {
    Hd?.(t, e, r);
  },
  Uu = 'svg',
  qM = 'math';
function Jt(t) {
  for (; Array.isArray(t); ) t = t[r0];
  return t;
}
function jM(t) {
  for (; Array.isArray(t); ) {
    if (typeof t[Z4] == 'object') return t;
    t = t[r0];
  }
  return null;
}
function $u(t, e) {
  return Jt(e[t]);
}
function ft(t, e) {
  return Jt(e[t.index]);
}
function X4(t, e) {
  return t.data[e];
}
function vi(t, e) {
  return t[e];
}
function ua(t, e) {
  let r = e[t];
  return sa(r) ? r : r[r0];
}
function YM(t) {
  return (t[K] & 4) === 4;
}
function J4(t) {
  return (t[K] & 128) === 128;
}
function UM(t) {
  return H0(t[S1]);
}
function ca(t, e) {
  return e == null ? null : t[e];
}
function Wu(t) {
  t[Ur] = 0;
}
function Gu(t) {
  t[K] & 1024 || ((t[K] |= 1024), J4(t) && wi(t));
}
function $M(t, e) {
  for (; t > 0; ) (e = e[lo]), t--;
  return e;
}
function gi(t) {
  return !!(t[K] & 9216 || t[ut]?.dirty);
}
function R3(t) {
  t[Xt].changeDetectionScheduler?.notify(8),
    t[K] & 64 && (t[K] |= 1024),
    gi(t) && wi(t);
}
function wi(t) {
  t[Xt].changeDetectionScheduler?.notify(0);
  let e = ar(t);
  for (; e !== null && !(e[K] & 8192 || ((e[K] |= 8192), !J4(e))); ) e = ar(e);
}
function Ku(t, e) {
  if ((t[K] & 256) === 256) throw new y(911, !1);
  t[ia] === null && (t[ia] = []), t[ia].push(e);
}
function WM(t, e) {
  if (t[ia] === null) return;
  let r = t[ia].indexOf(e);
  r !== -1 && t[ia].splice(r, 1);
}
function ar(t) {
  let e = t[S1];
  return H0(e) ? e[S1] : e;
}
var J = { lFrame: np(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Zu = !1;
function GM() {
  return J.lFrame.elementDepthCount;
}
function KM() {
  J.lFrame.elementDepthCount++;
}
function ZM() {
  J.lFrame.elementDepthCount--;
}
function Qu() {
  return J.bindingsEnabled;
}
function Xu() {
  return J.skipHydrationRootTNode !== null;
}
function QM(t) {
  return J.skipHydrationRootTNode === t;
}
function Pj() {
  J.bindingsEnabled = !0;
}
function Bj() {
  J.bindingsEnabled = !1;
}
function XM() {
  J.skipHydrationRootTNode = null;
}
function N() {
  return J.lFrame.lView;
}
function Te() {
  return J.lFrame.tView;
}
function J1(t) {
  return (J.lFrame.contextLView = t), t[b1];
}
function et(t) {
  return (J.lFrame.contextLView = null), t;
}
function m1() {
  let t = Ju();
  for (; t !== null && t.type === 64; ) t = t.parent;
  return t;
}
function Ju() {
  return J.lFrame.currentTNode;
}
function JM() {
  let t = J.lFrame,
    e = t.currentTNode;
  return t.isParent ? e : e.parent;
}
function ur(t, e) {
  let r = J.lFrame;
  (r.currentTNode = t), (r.isParent = e);
}
function e6() {
  return J.lFrame.isParent;
}
function t6() {
  J.lFrame.isParent = !1;
}
function ey() {
  return J.lFrame.contextLView;
}
function ep() {
  return Zu;
}
function Ed(t) {
  Zu = t;
}
function pa() {
  let t = J.lFrame,
    e = t.bindingRootIndex;
  return e === -1 && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e;
}
function tp() {
  return J.lFrame.bindingIndex;
}
function ty(t) {
  return (J.lFrame.bindingIndex = t);
}
function fa() {
  return J.lFrame.bindingIndex++;
}
function xi(t) {
  let e = J.lFrame,
    r = e.bindingIndex;
  return (e.bindingIndex = e.bindingIndex + t), r;
}
function ay() {
  return J.lFrame.inI18n;
}
function ry(t, e) {
  let r = J.lFrame;
  (r.bindingIndex = r.bindingRootIndex = t), q3(e);
}
function oy() {
  return J.lFrame.currentDirectiveIndex;
}
function q3(t) {
  J.lFrame.currentDirectiveIndex = t;
}
function a6(t) {
  let e = J.lFrame.currentDirectiveIndex;
  return e === -1 ? null : t[e];
}
function ap() {
  return J.lFrame.currentQueryIndex;
}
function r6(t) {
  J.lFrame.currentQueryIndex = t;
}
function ny(t) {
  let e = t[Z];
  return e.type === 2 ? e.declTNode : e.type === 1 ? t[$1] : null;
}
function rp(t, e, r) {
  if (r & ne.SkipSelf) {
    let o = e,
      n = t;
    for (; (o = o.parent), o === null && !(r & ne.Host); )
      if (((o = ny(n)), o === null || ((n = n[lo]), o.type & 10))) break;
    if (o === null) return !1;
    (e = o), (t = n);
  }
  let a = (J.lFrame = op());
  return (a.currentTNode = e), (a.lView = t), !0;
}
function o6(t) {
  let e = op(),
    r = t[Z];
  (J.lFrame = e),
    (e.currentTNode = r.firstChild),
    (e.lView = t),
    (e.tView = r),
    (e.contextLView = t),
    (e.bindingIndex = r.bindingStartIndex),
    (e.inI18n = !1);
}
function op() {
  let t = J.lFrame,
    e = t === null ? null : t.child;
  return e === null ? np(t) : e;
}
function np(t) {
  let e = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: t,
    child: null,
    inI18n: !1,
  };
  return t !== null && (t.child = e), e;
}
function ip() {
  let t = J.lFrame;
  return (J.lFrame = t.parent), (t.currentTNode = null), (t.lView = null), t;
}
var sp = ip;
function n6() {
  let t = ip();
  (t.isParent = !0),
    (t.tView = null),
    (t.selectedIndex = -1),
    (t.contextLView = null),
    (t.elementDepthCount = 0),
    (t.currentDirectiveIndex = -1),
    (t.currentNamespace = null),
    (t.bindingRootIndex = -1),
    (t.bindingIndex = -1),
    (t.currentQueryIndex = 0);
}
function iy(t) {
  return (J.lFrame.contextLView = $M(t, J.lFrame.contextLView))[b1];
}
function o0() {
  return J.lFrame.selectedIndex;
}
function rr(t) {
  J.lFrame.selectedIndex = t;
}
function co() {
  let t = J.lFrame;
  return X4(t.tView, t.selectedIndex);
}
function Oj() {
  J.lFrame.currentNamespace = Uu;
}
function sy() {
  return J.lFrame.currentNamespace;
}
var lp = !0;
function Mi() {
  return lp;
}
function yi(t) {
  lp = t;
}
function ly(t, e, r) {
  let { ngOnChanges: a, ngOnInit: o, ngDoCheck: n } = e.type.prototype;
  if (a) {
    let i = qu(e);
    (r.preOrderHooks ??= []).push(t, i),
      (r.preOrderCheckHooks ??= []).push(t, i);
  }
  o && (r.preOrderHooks ??= []).push(0 - t, o),
    n &&
      ((r.preOrderHooks ??= []).push(t, n),
      (r.preOrderCheckHooks ??= []).push(t, n));
}
function bi(t, e) {
  for (let r = e.directiveStart, a = e.directiveEnd; r < a; r++) {
    let n = t.data[r].type.prototype,
      {
        ngAfterContentInit: i,
        ngAfterContentChecked: s,
        ngAfterViewInit: l,
        ngAfterViewChecked: c,
        ngOnDestroy: h,
      } = n;
    i && (t.contentHooks ??= []).push(-r, i),
      s &&
        ((t.contentHooks ??= []).push(r, s),
        (t.contentCheckHooks ??= []).push(r, s)),
      l && (t.viewHooks ??= []).push(-r, l),
      c &&
        ((t.viewHooks ??= []).push(r, c), (t.viewCheckHooks ??= []).push(r, c)),
      h != null && (t.destroyHooks ??= []).push(r, h);
  }
}
function D2(t, e, r) {
  cp(t, e, 3, r);
}
function _2(t, e, r, a) {
  (t[K] & 3) === r && cp(t, e, r, a);
}
function x3(t, e) {
  let r = t[K];
  (r & 3) === e && ((r &= 16383), (r += 1), (t[K] = r));
}
function cp(t, e, r, a) {
  let o = a !== void 0 ? t[Ur] & 65535 : 0,
    n = a ?? -1,
    i = e.length - 1,
    s = 0;
  for (let l = o; l < i; l++)
    if (typeof e[l + 1] == 'number') {
      if (((s = e[l]), a != null && s >= a)) break;
    } else
      e[l] < 0 && (t[Ur] += 65536),
        (s < n || n == -1) &&
          (cy(t, r, e, l), (t[Ur] = (t[Ur] & 4294901760) + l + 2)),
        l++;
}
function Td(t, e) {
  Gt(4, t, e);
  let r = ce(null);
  try {
    e.call(t);
  } finally {
    ce(r), Gt(5, t, e);
  }
}
function cy(t, e, r, a) {
  let o = r[a] < 0,
    n = r[a + 1],
    i = o ? -r[a] : r[a],
    s = t[i];
  o
    ? t[K] >> 14 < t[Ur] >> 16 &&
      (t[K] & 3) === e &&
      ((t[K] += 16384), Td(s, n))
    : Td(s, n);
}
var Kr = -1,
  or = class {
    constructor(e, r, a) {
      (this.factory = e),
        (this.resolving = !1),
        (this.canSeeViewProviders = r),
        (this.injectImpl = a);
    }
  };
function hy(t) {
  return t instanceof or;
}
function dy(t) {
  return (t.flags & 8) !== 0;
}
function uy(t) {
  return (t.flags & 16) !== 0;
}
var M3 = {},
  j3 = class {
    constructor(e, r) {
      (this.injector = e), (this.parentInjector = r);
    }
    get(e, r, a) {
      a = ci(a);
      let o = this.injector.get(e, M3, a);
      return o !== M3 || r === M3 ? o : this.parentInjector.get(e, r, a);
    }
  };
function hp(t) {
  return t !== Kr;
}
function R2(t) {
  return t & 32767;
}
function py(t) {
  return t >> 16;
}
function q2(t, e) {
  let r = py(t),
    a = e;
  for (; r > 0; ) (a = a[lo]), r--;
  return a;
}
var Y3 = !0;
function j2(t) {
  let e = Y3;
  return (Y3 = t), e;
}
var fy = 256,
  dp = fy - 1,
  up = 5,
  my = 0,
  Kt = {};
function vy(t, e, r) {
  let a;
  typeof r == 'string'
    ? (a = r.charCodeAt(0) || 0)
    : r.hasOwnProperty(an) && (a = r[an]),
    a == null && (a = r[an] = my++);
  let o = a & dp,
    n = 1 << o;
  e.data[t + (o >> up)] |= n;
}
function Y2(t, e) {
  let r = pp(t, e);
  if (r !== -1) return r;
  let a = e[Z];
  a.firstCreatePass &&
    ((t.injectorIndex = e.length),
    y3(a.data, t),
    y3(e, null),
    y3(a.blueprint, null));
  let o = i6(t, e),
    n = t.injectorIndex;
  if (hp(o)) {
    let i = R2(o),
      s = q2(o, e),
      l = s[Z].data;
    for (let c = 0; c < 8; c++) e[n + c] = s[i + c] | l[i + c];
  }
  return (e[n + 8] = o), n;
}
function y3(t, e) {
  t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
}
function pp(t, e) {
  return t.injectorIndex === -1 ||
    (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
    e[t.injectorIndex + 8] === null
    ? -1
    : t.injectorIndex;
}
function i6(t, e) {
  if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
  let r = 0,
    a = null,
    o = e;
  for (; o !== null; ) {
    if (((a = wp(o)), a === null)) return Kr;
    if ((r++, (o = o[lo]), a.injectorIndex !== -1))
      return a.injectorIndex | (r << 16);
  }
  return Kr;
}
function U3(t, e, r) {
  vy(t, e, r);
}
function gy(t, e) {
  if (e === 'class') return t.classes;
  if (e === 'style') return t.styles;
  let r = t.attrs;
  if (r) {
    let a = r.length,
      o = 0;
    for (; o < a; ) {
      let n = r[o];
      if (zu(n)) break;
      if (n === 0) o = o + 2;
      else if (typeof n == 'number')
        for (o++; o < a && typeof r[o] == 'string'; ) o++;
      else {
        if (n === e) return r[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function fp(t, e, r) {
  if (r & ne.Optional || t !== void 0) return t;
  U4(e, 'NodeInjector');
}
function mp(t, e, r, a) {
  if (
    (r & ne.Optional && a === void 0 && (a = null), !(r & (ne.Self | ne.Host)))
  ) {
    let o = t[eo],
      n = R1(void 0);
    try {
      return o ? o.get(e, a, r & ne.Optional) : xu(e, a, r & ne.Optional);
    } finally {
      R1(n);
    }
  }
  return fp(a, e, r);
}
function vp(t, e, r, a = ne.Default, o) {
  if (t !== null) {
    if (e[K] & 2048 && !(a & ne.Self)) {
      let i = yy(t, e, r, a, Kt);
      if (i !== Kt) return i;
    }
    let n = gp(t, e, r, a, Kt);
    if (n !== Kt) return n;
  }
  return mp(e, r, a, o);
}
function gp(t, e, r, a, o) {
  let n = xy(r);
  if (typeof n == 'function') {
    if (!rp(e, t, a)) return a & ne.Host ? fp(o, r, a) : mp(e, r, a, o);
    try {
      let i;
      if (((i = n(a)), i == null && !(a & ne.Optional))) U4(r);
      else return i;
    } finally {
      sp();
    }
  } else if (typeof n == 'number') {
    let i = null,
      s = pp(t, e),
      l = Kr,
      c = a & ne.Host ? e[j1][$1] : null;
    for (
      (s === -1 || a & ne.SkipSelf) &&
      ((l = s === -1 ? i6(t, e) : e[s + 8]),
      l === Kr || !Ld(a, !1)
        ? (s = -1)
        : ((i = e[Z]), (s = R2(l)), (e = q2(l, e))));
      s !== -1;

    ) {
      let h = e[Z];
      if (kd(n, s, h.data)) {
        let d = wy(s, e, r, i, a, c);
        if (d !== Kt) return d;
      }
      (l = e[s + 8]),
        l !== Kr && Ld(a, e[Z].data[s + 8] === c) && kd(n, s, e)
          ? ((i = h), (s = R2(l)), (e = q2(l, e)))
          : (s = -1);
    }
  }
  return o;
}
function wy(t, e, r, a, o, n) {
  let i = e[Z],
    s = i.data[t + 8],
    l = a == null ? fi(s) && Y3 : a != i && (s.type & 3) !== 0,
    c = o & ne.Host && n === s,
    h = H2(s, i, r, l, c);
  return h !== null ? nr(e, i, h, s) : Kt;
}
function H2(t, e, r, a, o) {
  let n = t.providerIndexes,
    i = e.data,
    s = n & 1048575,
    l = t.directiveStart,
    c = t.directiveEnd,
    h = n >> 20,
    d = a ? s : s + h,
    u = o ? s + h : c;
  for (let p = d; p < u; p++) {
    let f = i[p];
    if ((p < l && r === f) || (p >= l && f.type === r)) return p;
  }
  if (o) {
    let p = i[l];
    if (p && D0(p) && p.type === r) return l;
  }
  return null;
}
function nr(t, e, r, a) {
  let o = t[r],
    n = e.data;
  if (hy(o)) {
    let i = o;
    i.resolving && Zx(Kx(n[r]));
    let s = j2(i.canSeeViewProviders);
    i.resolving = !0;
    let l,
      c = i.injectImpl ? R1(i.injectImpl) : null,
      h = rp(t, a, ne.Default);
    try {
      (o = t[r] = i.factory(void 0, n, t, a)),
        e.firstCreatePass && r >= a.directiveStart && ly(r, n[r], e);
    } finally {
      c !== null && R1(c), j2(s), (i.resolving = !1), sp();
    }
  }
  return o;
}
function xy(t) {
  if (typeof t == 'string') return t.charCodeAt(0) || 0;
  let e = t.hasOwnProperty(an) ? t[an] : void 0;
  return typeof e == 'number' ? (e >= 0 ? e & dp : My) : e;
}
function kd(t, e, r) {
  let a = 1 << t;
  return !!(r[e + (t >> up)] & a);
}
function Ld(t, e) {
  return !(t & ne.Self) && !(t & ne.Host && e);
}
var Xa = class {
  constructor(e, r) {
    (this._tNode = e), (this._lView = r);
  }
  get(e, r, a) {
    return vp(this._tNode, this._lView, e, ci(a), r);
  }
};
function My() {
  return new Xa(m1(), N());
}
function I1(t) {
  return dn(() => {
    let e = t.prototype.constructor,
      r = e[k2] || $3(e),
      a = Object.prototype,
      o = Object.getPrototypeOf(t.prototype).constructor;
    for (; o && o !== a; ) {
      let n = o[k2] || $3(o);
      if (n && n !== r) return n;
      o = Object.getPrototypeOf(o);
    }
    return n => new n();
  });
}
function $3(t) {
  return pu(t)
    ? () => {
        let e = $3(k1(t));
        return e && e();
      }
    : Ja(t);
}
function yy(t, e, r, a, o) {
  let n = t,
    i = e;
  for (; n !== null && i !== null && i[K] & 2048 && !(i[K] & 512); ) {
    let s = gp(n, i, r, a | ne.Self, Kt);
    if (s !== Kt) return s;
    let l = n.parent;
    if (!l) {
      let c = i[Nu];
      if (c) {
        let h = c.get(r, Kt, a);
        if (h !== Kt) return h;
      }
      (l = wp(i)), (i = i[lo]);
    }
    n = l;
  }
  return o;
}
function wp(t) {
  let e = t[Z],
    r = e.type;
  return r === 2 ? e.declTNode : r === 1 ? t[$1] : null;
}
function s6(t) {
  return gy(m1(), t);
}
function Id(t, e = null, r = null, a) {
  let o = xp(t, e, r, a);
  return o.resolveInjectorInitializers(), o;
}
function xp(t, e = null, r = null, a, o = new Set()) {
  let n = [r || q1, SM(t)];
  return (
    (a = a || (typeof t == 'object' ? void 0 : L1(t))),
    new nn(n, e || ui(), a || null, o)
  );
}
var Za = class Za {
  static create(e, r) {
    if (Array.isArray(e)) return Id({ name: '' }, r, e, '');
    {
      let a = e.name ?? '';
      return Id({ name: a }, e.parent, e.providers, a);
    }
  }
};
(Za.THROW_IF_NOT_FOUND = rn),
  (Za.NULL = new P2()),
  (Za.ɵprov = w({ token: Za, providedIn: 'any', factory: () => g(bu) })),
  (Za.__NG_ELEMENT_ID__ = -1);
var Oe = Za;
var by = new F('');
by.__NG_ELEMENT_ID__ = t => {
  let e = m1();
  if (e === null) throw new y(204, !1);
  if (e.type & 2) return e.value;
  if (t & ne.Optional) return null;
  throw new y(204, !1);
};
var Fy = 'ngOriginalError';
function b3(t) {
  return t[Fy];
}
var Mp = !0,
  E0 = (() => {
    let e = class e {};
    (e.__NG_ELEMENT_ID__ = Cy), (e.__NG_ENV_ID__ = a => a);
    let t = e;
    return t;
  })(),
  W3 = class extends E0 {
    constructor(e) {
      super(), (this._lView = e);
    }
    onDestroy(e) {
      return Ku(this._lView, e), () => WM(this._lView, e);
    }
  };
function Cy() {
  return new W3(N());
}
var T0 = (() => {
  let e = class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Pe(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let a = this.taskId++;
      return this.pendingTasks.add(a), a;
    }
    remove(a) {
      this.pendingTasks.delete(a),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  e.ɵprov = w({ token: e, providedIn: 'root', factory: () => new e() });
  let t = e;
  return t;
})();
var G3 = class extends C {
    constructor(e = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = e),
        Bu() &&
          ((this.destroyRef = m(E0, { optional: !0 }) ?? void 0),
          (this.pendingTasks = m(T0, { optional: !0 }) ?? void 0));
    }
    emit(e) {
      let r = ce(null);
      try {
        super.next(e);
      } finally {
        ce(r);
      }
    }
    subscribe(e, r, a) {
      let o = e,
        n = r || (() => null),
        i = a;
      if (e && typeof e == 'object') {
        let l = e;
        (o = l.next?.bind(l)),
          (n = l.error?.bind(l)),
          (i = l.complete?.bind(l));
      }
      this.__isAsync &&
        ((n = this.wrapInTimeout(n)),
        o && (o = this.wrapInTimeout(o)),
        i && (i = this.wrapInTimeout(i)));
      let s = super.subscribe({ next: o, error: n, complete: i });
      return e instanceof se && e.add(s), s;
    }
    wrapInTimeout(e) {
      return r => {
        let a = this.pendingTasks?.add();
        setTimeout(() => {
          e(r), a !== void 0 && this.pendingTasks?.remove(a);
        });
      };
    }
  },
  W = G3;
function U2(...t) {}
function yp(t) {
  let e, r;
  function a() {
    t = U2;
    try {
      r !== void 0 &&
        typeof cancelAnimationFrame == 'function' &&
        cancelAnimationFrame(r),
        e !== void 0 && clearTimeout(e);
    } catch {}
  }
  return (
    (e = setTimeout(() => {
      t(), a();
    })),
    typeof requestAnimationFrame == 'function' &&
      (r = requestAnimationFrame(() => {
        t(), a();
      })),
    () => a()
  );
}
function Pd(t) {
  return (
    queueMicrotask(() => t()),
    () => {
      t = U2;
    }
  );
}
var l6 = 'isAngularZone',
  $2 = l6 + '_ID',
  zy = 0,
  T = class t {
    constructor(e) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new W(!1)),
        (this.onMicrotaskEmpty = new W(!1)),
        (this.onStable = new W(!1)),
        (this.onError = new W(!1));
      let {
        enableLongStackTrace: r = !1,
        shouldCoalesceEventChangeDetection: a = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: n = Mp,
      } = e;
      if (typeof Zone > 'u') throw new y(908, !1);
      Zone.assertZonePatched();
      let i = this;
      (i._nesting = 0),
        (i._outer = i._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
        r &&
          Zone.longStackTraceZoneSpec &&
          (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
        (i.shouldCoalesceEventChangeDetection = !o && a),
        (i.shouldCoalesceRunChangeDetection = o),
        (i.callbackScheduled = !1),
        (i.scheduleInRootZone = n),
        Vy(i);
    }
    static isInAngularZone() {
      return typeof Zone < 'u' && Zone.current.get(l6) === !0;
    }
    static assertInAngularZone() {
      if (!t.isInAngularZone()) throw new y(909, !1);
    }
    static assertNotInAngularZone() {
      if (t.isInAngularZone()) throw new y(909, !1);
    }
    run(e, r, a) {
      return this._inner.run(e, r, a);
    }
    runTask(e, r, a, o) {
      let n = this._inner,
        i = n.scheduleEventTask('NgZoneEvent: ' + o, e, Ay, U2, U2);
      try {
        return n.runTask(i, r, a);
      } finally {
        n.cancelTask(i);
      }
    }
    runGuarded(e, r, a) {
      return this._inner.runGuarded(e, r, a);
    }
    runOutsideAngular(e) {
      return this._outer.run(e);
    }
  },
  Ay = {};
function c6(t) {
  if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable)
    try {
      t._nesting++, t.onMicrotaskEmpty.emit(null);
    } finally {
      if ((t._nesting--, !t.hasPendingMicrotasks))
        try {
          t.runOutsideAngular(() => t.onStable.emit(null));
        } finally {
          t.isStable = !0;
        }
    }
}
function Sy(t) {
  if (t.isCheckStableRunning || t.callbackScheduled) return;
  t.callbackScheduled = !0;
  function e() {
    yp(() => {
      (t.callbackScheduled = !1),
        K3(t),
        (t.isCheckStableRunning = !0),
        c6(t),
        (t.isCheckStableRunning = !1);
    });
  }
  t.scheduleInRootZone
    ? Zone.root.run(() => {
        e();
      })
    : t._outer.run(() => {
        e();
      }),
    K3(t);
}
function Vy(t) {
  let e = () => {
      Sy(t);
    },
    r = zy++;
  t._inner = t._inner.fork({
    name: 'angular',
    properties: { [l6]: !0, [$2]: r, [$2 + r]: !0 },
    onInvokeTask: (a, o, n, i, s, l) => {
      if (Dy(l)) return a.invokeTask(n, i, s, l);
      try {
        return Bd(t), a.invokeTask(n, i, s, l);
      } finally {
        ((t.shouldCoalesceEventChangeDetection && i.type === 'eventTask') ||
          t.shouldCoalesceRunChangeDetection) &&
          e(),
          Od(t);
      }
    },
    onInvoke: (a, o, n, i, s, l, c) => {
      try {
        return Bd(t), a.invoke(n, i, s, l, c);
      } finally {
        t.shouldCoalesceRunChangeDetection &&
          !t.callbackScheduled &&
          !_y(l) &&
          e(),
          Od(t);
      }
    },
    onHasTask: (a, o, n, i) => {
      a.hasTask(n, i),
        o === n &&
          (i.change == 'microTask'
            ? ((t._hasPendingMicrotasks = i.microTask), K3(t), c6(t))
            : i.change == 'macroTask' &&
              (t.hasPendingMacrotasks = i.macroTask));
    },
    onHandleError: (a, o, n, i) => (
      a.handleError(n, i), t.runOutsideAngular(() => t.onError.emit(i)), !1
    ),
  });
}
function K3(t) {
  t._hasPendingMicrotasks ||
  ((t.shouldCoalesceEventChangeDetection ||
    t.shouldCoalesceRunChangeDetection) &&
    t.callbackScheduled === !0)
    ? (t.hasPendingMicrotasks = !0)
    : (t.hasPendingMicrotasks = !1);
}
function Bd(t) {
  t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
}
function Od(t) {
  t._nesting--, c6(t);
}
var Z3 = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new W()),
      (this.onMicrotaskEmpty = new W()),
      (this.onStable = new W()),
      (this.onError = new W());
  }
  run(e, r, a) {
    return e.apply(r, a);
  }
  runGuarded(e, r, a) {
    return e.apply(r, a);
  }
  runOutsideAngular(e) {
    return e();
  }
  runTask(e, r, a, o) {
    return e.apply(r, a);
  }
};
function Dy(t) {
  return bp(t, '__ignore_ng_zone__');
}
function _y(t) {
  return bp(t, '__scheduler_tick__');
}
function bp(t, e) {
  return !Array.isArray(t) || t.length !== 1 ? !1 : t[0]?.data?.[e] === !0;
}
var e0 = class {
    constructor() {
      this._console = console;
    }
    handleError(e) {
      let r = this._findOriginalError(e);
      this._console.error('ERROR', e),
        r && this._console.error('ORIGINAL ERROR', r);
    }
    _findOriginalError(e) {
      let r = e && b3(e);
      for (; r && b3(r); ) r = b3(r);
      return r || null;
    }
  },
  Hy = new F('', {
    providedIn: 'root',
    factory: () => {
      let t = m(T),
        e = m(e0);
      return r => t.runOutsideAngular(() => e.handleError(r));
    },
  });
function Ey() {
  return ho(m1(), N());
}
function ho(t, e) {
  return new E(ft(t, e));
}
var E = (() => {
  let e = class e {
    constructor(a) {
      this.nativeElement = a;
    }
  };
  e.__NG_ELEMENT_ID__ = Ey;
  let t = e;
  return t;
})();
function Ty(t) {
  return t instanceof E ? t.nativeElement : t;
}
function ky() {
  return this._results[Symbol.iterator]();
}
var W2 = class t {
  get changes() {
    return (this._changes ??= new W());
  }
  constructor(e = !1) {
    (this._emitDistinctChangesOnly = e),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let r = t.prototype;
    r[Symbol.iterator] || (r[Symbol.iterator] = ky);
  }
  get(e) {
    return this._results[e];
  }
  map(e) {
    return this._results.map(e);
  }
  filter(e) {
    return this._results.filter(e);
  }
  find(e) {
    return this._results.find(e);
  }
  reduce(e, r) {
    return this._results.reduce(e, r);
  }
  forEach(e) {
    this._results.forEach(e);
  }
  some(e) {
    return this._results.some(e);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(e, r) {
    this.dirty = !1;
    let a = sM(e);
    (this._changesDetected = !iM(this._results, a, r)) &&
      ((this._results = a),
      (this.length = a.length),
      (this.last = a[this.length - 1]),
      (this.first = a[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(e) {
    this._onDirty = e;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function Fp(t) {
  return (t.flags & 128) === 128;
}
var Cp = new Map(),
  Ly = 0;
function Iy() {
  return Ly++;
}
function Py(t) {
  Cp.set(t[pi], t);
}
function Q3(t) {
  Cp.delete(t[pi]);
}
var Nd = '__ngContext__';
function ha(t, e) {
  sa(e) ? ((t[Nd] = e[pi]), Py(e)) : (t[Nd] = e);
}
function zp(t) {
  return Sp(t[sn]);
}
function Ap(t) {
  return Sp(t[_t]);
}
function Sp(t) {
  for (; t !== null && !H0(t); ) t = t[_t];
  return t;
}
var X3;
function Vp(t) {
  X3 = t;
}
function Dp() {
  if (X3 !== void 0) return X3;
  if (typeof document < 'u') return document;
  throw new y(210, !1);
}
var Fi = new F('', { providedIn: 'root', factory: () => By }),
  By = 'ng',
  h6 = new F(''),
  V1 = new F('', { providedIn: 'platform', factory: () => 'unknown' });
var n0 = new F(''),
  k0 = new F('', {
    providedIn: 'root',
    factory: () =>
      Dp().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') ||
      null,
  });
var Oy = 'h',
  Ny = 'b';
var Ry = () => null;
function d6(t, e, r = !1) {
  return Ry(t, e, r);
}
var _p = !1,
  qy = new F('', { providedIn: 'root', factory: () => _p });
var y2;
function jy() {
  if (y2 === void 0 && ((y2 = null), A0.trustedTypes))
    try {
      y2 = A0.trustedTypes.createPolicy('angular', {
        createHTML: t => t,
        createScript: t => t,
        createScriptURL: t => t,
      });
    } catch {}
  return y2;
}
function Ci(t) {
  return jy()?.createHTML(t) || t;
}
var b2;
function Hp() {
  if (b2 === void 0 && ((b2 = null), A0.trustedTypes))
    try {
      b2 = A0.trustedTypes.createPolicy('angular#unsafe-bypass', {
        createHTML: t => t,
        createScript: t => t,
        createScriptURL: t => t,
      });
    } catch {}
  return b2;
}
function Rd(t) {
  return Hp()?.createHTML(t) || t;
}
function qd(t) {
  return Hp()?.createScriptURL(t) || t;
}
var _0 = class {
    constructor(e) {
      this.changingThisBreaksApplicationSecurity = e;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${uu})`;
    }
  },
  J3 = class extends _0 {
    getTypeName() {
      return 'HTML';
    }
  },
  e4 = class extends _0 {
    getTypeName() {
      return 'Style';
    }
  },
  t4 = class extends _0 {
    getTypeName() {
      return 'Script';
    }
  },
  a4 = class extends _0 {
    getTypeName() {
      return 'URL';
    }
  },
  r4 = class extends _0 {
    getTypeName() {
      return 'ResourceURL';
    }
  };
function tt(t) {
  return t instanceof _0 ? t.changingThisBreaksApplicationSecurity : t;
}
function L0(t, e) {
  let r = Yy(t);
  if (r != null && r !== e) {
    if (r === 'ResourceURL' && e === 'URL') return !0;
    throw new Error(`Required a safe ${e}, got a ${r} (see ${uu})`);
  }
  return r === e;
}
function Yy(t) {
  return (t instanceof _0 && t.getTypeName()) || null;
}
function Ep(t) {
  return new J3(t);
}
function Tp(t) {
  return new e4(t);
}
function kp(t) {
  return new t4(t);
}
function Lp(t) {
  return new a4(t);
}
function Ip(t) {
  return new r4(t);
}
function Uy(t) {
  let e = new n4(t);
  return $y() ? new o4(e) : e;
}
var o4 = class {
    constructor(e) {
      this.inertDocumentHelper = e;
    }
    getInertBodyElement(e) {
      e = '<body><remove></remove>' + e;
      try {
        let r = new window.DOMParser().parseFromString(Ci(e), 'text/html').body;
        return r === null
          ? this.inertDocumentHelper.getInertBodyElement(e)
          : (r.firstChild?.remove(), r);
      } catch {
        return null;
      }
    }
  },
  n4 = class {
    constructor(e) {
      (this.defaultDoc = e),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            'sanitization-inert',
          ));
    }
    getInertBodyElement(e) {
      let r = this.inertDocument.createElement('template');
      return (r.innerHTML = Ci(e)), r;
    }
  };
function $y() {
  try {
    return !!new window.DOMParser().parseFromString(Ci(''), 'text/html');
  } catch {
    return !1;
  }
}
var Wy = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function zi(t) {
  return (t = String(t)), t.match(Wy) ? t : 'unsafe:' + t;
}
function I0(t) {
  let e = {};
  for (let r of t.split(',')) e[r] = !0;
  return e;
}
function mn(...t) {
  let e = {};
  for (let r of t) for (let a in r) r.hasOwnProperty(a) && (e[a] = !0);
  return e;
}
var Pp = I0('area,br,col,hr,img,wbr'),
  Bp = I0('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
  Op = I0('rp,rt'),
  Gy = mn(Op, Bp),
  Ky = mn(
    Bp,
    I0(
      'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
    ),
  ),
  Zy = mn(
    Op,
    I0(
      'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
    ),
  ),
  jd = mn(Pp, Ky, Zy, Gy),
  Np = I0('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
  Qy = I0(
    'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
  ),
  Xy = I0(
    'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
  ),
  Jy = mn(Np, Qy, Xy),
  eb = I0('script,style,template'),
  i4 = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(e) {
      let r = e.firstChild,
        a = !0,
        o = [];
      for (; r; ) {
        if (
          (r.nodeType === Node.ELEMENT_NODE
            ? (a = this.startElement(r))
            : r.nodeType === Node.TEXT_NODE
              ? this.chars(r.nodeValue)
              : (this.sanitizedSomething = !0),
          a && r.firstChild)
        ) {
          o.push(r), (r = rb(r));
          continue;
        }
        for (; r; ) {
          r.nodeType === Node.ELEMENT_NODE && this.endElement(r);
          let n = ab(r);
          if (n) {
            r = n;
            break;
          }
          r = o.pop();
        }
      }
      return this.buf.join('');
    }
    startElement(e) {
      let r = Yd(e).toLowerCase();
      if (!jd.hasOwnProperty(r))
        return (this.sanitizedSomething = !0), !eb.hasOwnProperty(r);
      this.buf.push('<'), this.buf.push(r);
      let a = e.attributes;
      for (let o = 0; o < a.length; o++) {
        let n = a.item(o),
          i = n.name,
          s = i.toLowerCase();
        if (!Jy.hasOwnProperty(s)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let l = n.value;
        Np[s] && (l = zi(l)), this.buf.push(' ', i, '="', Ud(l), '"');
      }
      return this.buf.push('>'), !0;
    }
    endElement(e) {
      let r = Yd(e).toLowerCase();
      jd.hasOwnProperty(r) &&
        !Pp.hasOwnProperty(r) &&
        (this.buf.push('</'), this.buf.push(r), this.buf.push('>'));
    }
    chars(e) {
      this.buf.push(Ud(e));
    }
  };
function tb(t, e) {
  return (
    (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function ab(t) {
  let e = t.nextSibling;
  if (e && t !== e.previousSibling) throw Rp(e);
  return e;
}
function rb(t) {
  let e = t.firstChild;
  if (e && tb(t, e)) throw Rp(e);
  return e;
}
function Yd(t) {
  let e = t.nodeName;
  return typeof e == 'string' ? e : 'FORM';
}
function Rp(t) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`,
  );
}
var ob = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  nb = /([^\#-~ |!])/g;
function Ud(t) {
  return t
    .replace(/&/g, '&amp;')
    .replace(ob, function (e) {
      let r = e.charCodeAt(0),
        a = e.charCodeAt(1);
      return '&#' + ((r - 55296) * 1024 + (a - 56320) + 65536) + ';';
    })
    .replace(nb, function (e) {
      return '&#' + e.charCodeAt(0) + ';';
    })
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
var F2;
function u6(t, e) {
  let r = null;
  try {
    F2 = F2 || Uy(t);
    let a = e ? String(e) : '';
    r = F2.getInertBodyElement(a);
    let o = 5,
      n = a;
    do {
      if (o === 0)
        throw new Error(
          'Failed to sanitize html because the input is unstable',
        );
      o--, (a = n), (n = r.innerHTML), (r = F2.getInertBodyElement(a));
    } while (a !== n);
    let s = new i4().sanitizeChildren($d(r) || r);
    return Ci(s);
  } finally {
    if (r) {
      let a = $d(r) || r;
      for (; a.firstChild; ) a.firstChild.remove();
    }
  }
}
function $d(t) {
  return 'content' in t && ib(t) ? t.content : null;
}
function ib(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.nodeName === 'TEMPLATE';
}
var at = (function (t) {
  return (
    (t[(t.NONE = 0)] = 'NONE'),
    (t[(t.HTML = 1)] = 'HTML'),
    (t[(t.STYLE = 2)] = 'STYLE'),
    (t[(t.SCRIPT = 3)] = 'SCRIPT'),
    (t[(t.URL = 4)] = 'URL'),
    (t[(t.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
    t
  );
})(at || {});
function Nj(t) {
  let e = p6();
  return e
    ? Rd(e.sanitize(at.HTML, t) || '')
    : L0(t, 'HTML')
      ? Rd(tt(t))
      : u6(Dp(), Zt(t));
}
function sb(t) {
  let e = p6();
  return e ? e.sanitize(at.URL, t) || '' : L0(t, 'URL') ? tt(t) : zi(Zt(t));
}
function lb(t) {
  let e = p6();
  if (e) return qd(e.sanitize(at.RESOURCE_URL, t) || '');
  if (L0(t, 'ResourceURL')) return qd(tt(t));
  throw new y(904, !1);
}
function cb(t, e) {
  return (e === 'src' &&
    (t === 'embed' ||
      t === 'frame' ||
      t === 'iframe' ||
      t === 'media' ||
      t === 'script')) ||
    (e === 'href' && (t === 'base' || t === 'link'))
    ? lb
    : sb;
}
function qp(t, e, r) {
  return cb(e, r)(t);
}
function p6() {
  let t = N();
  return t && t[Xt].sanitizer;
}
var hb = /^>|^->|<!--|-->|--!>|<!-$/g,
  db = /(<|>)/g,
  ub = '\u200B$1\u200B';
function pb(t) {
  return t.replace(hb, e => e.replace(db, ub));
}
function jp(t) {
  return t instanceof Function ? t() : t;
}
function Yp(t) {
  return (t ?? m(Oe)).get(V1) === 'browser';
}
var t0 = (function (t) {
    return (
      (t[(t.Important = 1)] = 'Important'),
      (t[(t.DashCase = 2)] = 'DashCase'),
      t
    );
  })(t0 || {}),
  fb;
function f6(t, e) {
  return fb(t, e);
}
function $r(t, e, r, a, o) {
  if (a != null) {
    let n,
      i = !1;
    H0(a) ? (n = a) : sa(a) && ((i = !0), (a = a[r0]));
    let s = Jt(a);
    t === 0 && r !== null
      ? o == null
        ? Kp(e, r, s)
        : G2(e, r, s, o || null, !0)
      : t === 1 && r !== null
        ? G2(e, r, s, o || null, !0)
        : t === 2
          ? Vb(e, s, i)
          : t === 3 && e.destroyNode(s),
      n != null && _b(e, t, n, r, o);
  }
}
function mb(t, e) {
  return t.createText(e);
}
function vb(t, e, r) {
  t.setValue(e, r);
}
function gb(t, e) {
  return t.createComment(pb(e));
}
function Up(t, e, r) {
  return t.createElement(e, r);
}
function wb(t, e) {
  $p(t, e), (e[r0] = null), (e[$1] = null);
}
function xb(t, e, r, a, o, n) {
  (a[r0] = o), (a[$1] = e), Vi(t, a, r, 1, o, n);
}
function $p(t, e) {
  e[Xt].changeDetectionScheduler?.notify(9), Vi(t, e, e[Be], 2, null, null);
}
function Mb(t) {
  let e = t[sn];
  if (!e) return F3(t[Z], t);
  for (; e; ) {
    let r = null;
    if (sa(e)) r = e[sn];
    else {
      let a = e[A1];
      a && (r = a);
    }
    if (!r) {
      for (; e && !e[_t] && e !== t; ) sa(e) && F3(e[Z], e), (e = e[S1]);
      e === null && (e = t), sa(e) && F3(e[Z], e), (r = e && e[_t]);
    }
    e = r;
  }
}
function yb(t, e, r, a) {
  let o = A1 + a,
    n = r.length;
  a > 0 && (r[o - 1][_t] = e),
    a < n - A1
      ? ((e[_t] = r[o]), yu(r, A1 + a, e))
      : (r.push(e), (e[_t] = null)),
    (e[S1] = r);
  let i = e[er];
  i !== null && r !== i && Wp(i, e);
  let s = e[V0];
  s !== null && s.insertView(t), R3(e), (e[K] |= 128);
}
function Wp(t, e) {
  let r = t[to],
    a = e[S1];
  if (sa(a)) t[K] |= N2.HasTransplantedViews;
  else {
    let o = a[S1][j1];
    e[j1] !== o && (t[K] |= N2.HasTransplantedViews);
  }
  r === null ? (t[to] = [e]) : r.push(e);
}
function m6(t, e) {
  let r = t[to],
    a = r.indexOf(e);
  r.splice(a, 1);
}
function ln(t, e) {
  if (t.length <= A1) return;
  let r = A1 + e,
    a = t[r];
  if (a) {
    let o = a[er];
    o !== null && o !== t && m6(o, a), e > 0 && (t[r - 1][_t] = a[_t]);
    let n = I2(t, A1 + e);
    wb(a[Z], a);
    let i = n[V0];
    i !== null && i.detachView(n[Z]),
      (a[S1] = null),
      (a[_t] = null),
      (a[K] &= -129);
  }
  return a;
}
function Ai(t, e) {
  if (!(e[K] & 256)) {
    let r = e[Be];
    r.destroyNode && Vi(t, e, r, 3, null, null), Mb(e);
  }
}
function F3(t, e) {
  if (e[K] & 256) return;
  let r = ce(null);
  try {
    (e[K] &= -129),
      (e[K] |= 256),
      e[ut] && R5(e[ut]),
      Fb(t, e),
      bb(t, e),
      e[Z].type === 1 && e[Be].destroy();
    let a = e[er];
    if (a !== null && H0(e[S1])) {
      a !== e[S1] && m6(a, e);
      let o = e[V0];
      o !== null && o.detachView(t);
    }
    Q3(e);
  } finally {
    ce(r);
  }
}
function bb(t, e) {
  let r = t.cleanup,
    a = e[B2];
  if (r !== null)
    for (let n = 0; n < r.length - 1; n += 2)
      if (typeof r[n] == 'string') {
        let i = r[n + 3];
        i >= 0 ? a[i]() : a[-i].unsubscribe(), (n += 2);
      } else {
        let i = a[r[n + 1]];
        r[n].call(i);
      }
  a !== null && (e[B2] = null);
  let o = e[ia];
  if (o !== null) {
    e[ia] = null;
    for (let n = 0; n < o.length; n++) {
      let i = o[n];
      i();
    }
  }
}
function Fb(t, e) {
  let r;
  if (t != null && (r = t.destroyHooks) != null)
    for (let a = 0; a < r.length; a += 2) {
      let o = e[r[a]];
      if (!(o instanceof or)) {
        let n = r[a + 1];
        if (Array.isArray(n))
          for (let i = 0; i < n.length; i += 2) {
            let s = o[n[i]],
              l = n[i + 1];
            Gt(4, s, l);
            try {
              l.call(s);
            } finally {
              Gt(5, s, l);
            }
          }
        else {
          Gt(4, o, n);
          try {
            n.call(o);
          } finally {
            Gt(5, o, n);
          }
        }
      }
    }
}
function Gp(t, e, r) {
  return Cb(t, e.parent, r);
}
function Cb(t, e, r) {
  let a = e;
  for (; a !== null && a.type & 168; ) (e = a), (a = e.parent);
  if (a === null) return r[r0];
  {
    let { componentOffset: o } = a;
    if (o > -1) {
      let { encapsulation: n } = t.data[a.directiveStart + o];
      if (n === Qt.None || n === Qt.Emulated) return null;
    }
    return ft(a, r);
  }
}
function G2(t, e, r, a, o) {
  t.insertBefore(e, r, a, o);
}
function Kp(t, e, r) {
  t.appendChild(e, r);
}
function Wd(t, e, r, a, o) {
  a !== null ? G2(t, e, r, a, o) : Kp(t, e, r);
}
function Zp(t, e) {
  return t.parentNode(e);
}
function zb(t, e) {
  return t.nextSibling(e);
}
function Qp(t, e, r) {
  return Sb(t, e, r);
}
function Ab(t, e, r) {
  return t.type & 40 ? ft(t, r) : null;
}
var Sb = Ab,
  Gd;
function Si(t, e, r, a) {
  let o = Gp(t, a, e),
    n = e[Be],
    i = a.parent || e[$1],
    s = Qp(i, a, e);
  if (o != null)
    if (Array.isArray(r))
      for (let l = 0; l < r.length; l++) Wd(n, o, r[l], s, !1);
    else Wd(n, o, r, s, !1);
  Gd !== void 0 && Gd(n, a, e, r, o);
}
function tn(t, e) {
  if (e !== null) {
    let r = e.type;
    if (r & 3) return ft(e, t);
    if (r & 4) return s4(-1, t[e.index]);
    if (r & 8) {
      let a = e.child;
      if (a !== null) return tn(t, a);
      {
        let o = t[e.index];
        return H0(o) ? s4(-1, o) : Jt(o);
      }
    } else {
      if (r & 128) return tn(t, e.next);
      if (r & 32) return f6(e, t)() || Jt(t[e.index]);
      {
        let a = Xp(t, e);
        if (a !== null) {
          if (Array.isArray(a)) return a[0];
          let o = ar(t[j1]);
          return tn(o, a);
        } else return tn(t, e.next);
      }
    }
  }
  return null;
}
function Xp(t, e) {
  if (e !== null) {
    let a = t[j1][$1],
      o = e.projection;
    return a.projection[o];
  }
  return null;
}
function s4(t, e) {
  let r = A1 + t + 1;
  if (r < e.length) {
    let a = e[r],
      o = a[Z].firstChild;
    if (o !== null) return tn(a, o);
  }
  return e[tr];
}
function Vb(t, e, r) {
  t.removeChild(null, e, r);
}
function v6(t, e, r, a, o, n, i) {
  for (; r != null; ) {
    if (r.type === 128) {
      r = r.next;
      continue;
    }
    let s = a[r.index],
      l = r.type;
    if (
      (i && e === 0 && (s && ha(Jt(s), a), (r.flags |= 2)),
      (r.flags & 32) !== 32)
    )
      if (l & 8) v6(t, e, r.child, a, o, n, !1), $r(e, t, o, s, n);
      else if (l & 32) {
        let c = f6(r, a),
          h;
        for (; (h = c()); ) $r(e, t, o, h, n);
        $r(e, t, o, s, n);
      } else l & 16 ? Jp(t, e, a, r, o, n) : $r(e, t, o, s, n);
    r = i ? r.projectionNext : r.next;
  }
}
function Vi(t, e, r, a, o, n) {
  v6(r, a, t.firstChild, e, o, n, !1);
}
function Db(t, e, r) {
  let a = e[Be],
    o = Gp(t, r, e),
    n = r.parent || e[$1],
    i = Qp(n, r, e);
  Jp(a, 0, e, r, o, i);
}
function Jp(t, e, r, a, o, n) {
  let i = r[j1],
    l = i[$1].projection[a.projection];
  if (Array.isArray(l))
    for (let c = 0; c < l.length; c++) {
      let h = l[c];
      $r(e, t, o, h, n);
    }
  else {
    let c = l,
      h = i[S1];
    Fp(a) && (c.flags |= 128), v6(t, e, c, h, o, n, !0);
  }
}
function _b(t, e, r, a, o) {
  let n = r[tr],
    i = Jt(r);
  n !== i && $r(e, t, a, n, o);
  for (let s = A1; s < r.length; s++) {
    let l = r[s];
    Vi(l[Z], l, t, e, a, n);
  }
}
function Hb(t, e, r, a, o) {
  if (e) o ? t.addClass(r, a) : t.removeClass(r, a);
  else {
    let n = a.indexOf('-') === -1 ? void 0 : t0.DashCase;
    o == null
      ? t.removeStyle(r, a, n)
      : (typeof o == 'string' &&
          o.endsWith('!important') &&
          ((o = o.slice(0, -10)), (n |= t0.Important)),
        t.setStyle(r, a, o, n));
  }
}
function Eb(t, e, r) {
  t.setAttribute(e, 'style', r);
}
function ef(t, e, r) {
  r === '' ? t.removeAttribute(e, 'class') : t.setAttribute(e, 'class', r);
}
function tf(t, e, r) {
  let { mergedAttrs: a, classes: o, styles: n } = r;
  a !== null && L3(t, e, a),
    o !== null && ef(t, e, o),
    n !== null && Eb(t, e, n);
}
var D1 = {};
function de(t = 1) {
  af(Te(), N(), o0() + t, !1);
}
function af(t, e, r, a) {
  if (!a)
    if ((e[K] & 3) === 3) {
      let n = t.preOrderCheckHooks;
      n !== null && D2(e, n, r);
    } else {
      let n = t.preOrderHooks;
      n !== null && _2(e, n, 0, r);
    }
  rr(r);
}
function v(t, e = ne.Default) {
  let r = N();
  if (r === null) return g(t, e);
  let a = m1();
  return vp(a, r, k1(t), e);
}
function rf() {
  let t = 'invalid';
  throw new Error(t);
}
function of(t, e, r, a, o, n) {
  let i = ce(null);
  try {
    let s = null;
    o & la.SignalBased && (s = e[a][qt]),
      s !== null && s.transformFn !== void 0 && (n = s.transformFn(n)),
      o & la.HasDecoratorInputTransform &&
        (n = t.inputTransforms[a].call(e, n)),
      t.setInput !== null ? t.setInput(e, s, n, r, a) : Ru(e, s, a, n);
  } finally {
    ce(i);
  }
}
function Tb(t, e) {
  let r = t.hostBindingOpCodes;
  if (r !== null)
    try {
      for (let a = 0; a < r.length; a++) {
        let o = r[a];
        if (o < 0) rr(~o);
        else {
          let n = o,
            i = r[++a],
            s = r[++a];
          ry(i, n);
          let l = e[n];
          s(2, l);
        }
      }
    } finally {
      rr(-1);
    }
}
function Di(t, e, r, a, o, n, i, s, l, c, h) {
  let d = e.blueprint.slice();
  return (
    (d[r0] = o),
    (d[K] = a | 4 | 128 | 8 | 64),
    (c !== null || (t && t[K] & 2048)) && (d[K] |= 2048),
    Wu(d),
    (d[S1] = d[lo] = t),
    (d[b1] = r),
    (d[Xt] = i || (t && t[Xt])),
    (d[Be] = s || (t && t[Be])),
    (d[eo] = l || (t && t[eo]) || null),
    (d[$1] = n),
    (d[pi] = Iy()),
    (d[Jr] = h),
    (d[Nu] = c),
    (d[j1] = e.type == 2 ? t[j1] : d),
    d
  );
}
function uo(t, e, r, a, o) {
  let n = t.data[e];
  if (n === null) (n = kb(t, e, r, a, o)), ay() && (n.flags |= 32);
  else if (n.type & 64) {
    (n.type = r), (n.value = a), (n.attrs = o);
    let i = JM();
    n.injectorIndex = i === null ? -1 : i.injectorIndex;
  }
  return ur(n, !0), n;
}
function kb(t, e, r, a, o) {
  let n = Ju(),
    i = e6(),
    s = i ? n : n && n.parent,
    l = (t.data[e] = Nb(t, s, r, e, a, o));
  return (
    t.firstChild === null && (t.firstChild = l),
    n !== null &&
      (i
        ? n.child == null && l.parent !== null && (n.child = l)
        : n.next === null && ((n.next = l), (l.prev = n))),
    l
  );
}
function nf(t, e, r, a) {
  if (r === 0) return -1;
  let o = e.length;
  for (let n = 0; n < r; n++) e.push(a), t.blueprint.push(a), t.data.push(null);
  return o;
}
function sf(t, e, r, a, o) {
  let n = o0(),
    i = a & 2;
  try {
    rr(-1), i && e.length > c1 && af(t, e, c1, !1), Gt(i ? 2 : 0, o), r(a, o);
  } finally {
    rr(n), Gt(i ? 3 : 1, o);
  }
}
function g6(t, e, r) {
  if (Q4(e)) {
    let a = ce(null);
    try {
      let o = e.directiveStart,
        n = e.directiveEnd;
      for (let i = o; i < n; i++) {
        let s = t.data[i];
        if (s.contentQueries) {
          let l = r[i];
          s.contentQueries(1, l, i);
        }
      }
    } finally {
      ce(a);
    }
  }
}
function w6(t, e, r) {
  Qu() && ($b(t, e, r, ft(r, e)), (r.flags & 64) === 64 && hf(t, e, r));
}
function x6(t, e, r = ft) {
  let a = e.localNames;
  if (a !== null) {
    let o = e.index + 1;
    for (let n = 0; n < a.length; n += 2) {
      let i = a[n + 1],
        s = i === -1 ? r(e, t) : t[i];
      t[o++] = s;
    }
  }
}
function lf(t) {
  let e = t.tView;
  return e === null || e.incompleteFirstPass
    ? (t.tView = M6(
        1,
        null,
        t.template,
        t.decls,
        t.vars,
        t.directiveDefs,
        t.pipeDefs,
        t.viewQuery,
        t.schemas,
        t.consts,
        t.id,
      ))
    : e;
}
function M6(t, e, r, a, o, n, i, s, l, c, h) {
  let d = c1 + a,
    u = d + o,
    p = Lb(d, u),
    f = typeof c == 'function' ? c() : c;
  return (p[Z] = {
    type: t,
    blueprint: p,
    template: r,
    queries: null,
    viewQuery: s,
    declTNode: e,
    data: p.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: u,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof n == 'function' ? n() : n,
    pipeRegistry: typeof i == 'function' ? i() : i,
    firstChild: null,
    schemas: l,
    consts: f,
    incompleteFirstPass: !1,
    ssrId: h,
  });
}
function Lb(t, e) {
  let r = [];
  for (let a = 0; a < e; a++) r.push(a < t ? null : D1);
  return r;
}
function Ib(t, e, r, a) {
  let n = a.get(qy, _p) || r === Qt.ShadowDom,
    i = t.selectRootElement(e, n);
  return Pb(i), i;
}
function Pb(t) {
  Bb(t);
}
var Bb = () => null;
function Ob(t, e, r, a) {
  let o = pf(e);
  o.push(r), t.firstCreatePass && ff(t).push(a, o.length - 1);
}
function Nb(t, e, r, a, o, n) {
  let i = e ? e.injectorIndex : -1,
    s = 0;
  return (
    Xu() && (s |= 128),
    {
      type: r,
      index: a,
      insertBeforeIndex: null,
      injectorIndex: i,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: s,
      providerIndexes: 0,
      value: o,
      attrs: n,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: e,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function Kd(t, e, r, a, o) {
  for (let n in e) {
    if (!e.hasOwnProperty(n)) continue;
    let i = e[n];
    if (i === void 0) continue;
    a ??= {};
    let s,
      l = la.None;
    Array.isArray(i) ? ((s = i[0]), (l = i[1])) : (s = i);
    let c = n;
    if (o !== null) {
      if (!o.hasOwnProperty(n)) continue;
      c = o[n];
    }
    t === 0 ? Zd(a, r, c, s, l) : Zd(a, r, c, s);
  }
  return a;
}
function Zd(t, e, r, a, o) {
  let n;
  t.hasOwnProperty(r) ? (n = t[r]).push(e, a) : (n = t[r] = [e, a]),
    o !== void 0 && n.push(o);
}
function Rb(t, e, r) {
  let a = e.directiveStart,
    o = e.directiveEnd,
    n = t.data,
    i = e.attrs,
    s = [],
    l = null,
    c = null;
  for (let h = a; h < o; h++) {
    let d = n[h],
      u = r ? r.get(d) : null,
      p = u ? u.inputs : null,
      f = u ? u.outputs : null;
    (l = Kd(0, d.inputs, h, l, p)), (c = Kd(1, d.outputs, h, c, f));
    let x = l !== null && i !== null && !G4(e) ? rF(l, h, i) : null;
    s.push(x);
  }
  l !== null &&
    (l.hasOwnProperty('class') && (e.flags |= 8),
    l.hasOwnProperty('style') && (e.flags |= 16)),
    (e.initialInputs = s),
    (e.inputs = l),
    (e.outputs = c);
}
function qb(t) {
  return t === 'class'
    ? 'className'
    : t === 'for'
      ? 'htmlFor'
      : t === 'formaction'
        ? 'formAction'
        : t === 'innerHtml'
          ? 'innerHTML'
          : t === 'readonly'
            ? 'readOnly'
            : t === 'tabindex'
              ? 'tabIndex'
              : t;
}
function vn(t, e, r, a, o, n, i, s) {
  let l = ft(e, r),
    c = e.inputs,
    h;
  !s && c != null && (h = c[a])
    ? (b6(t, r, h, a, o), fi(e) && jb(r, e.index))
    : e.type & 3
      ? ((a = qb(a)),
        (o = i != null ? i(o, e.value || '', a) : o),
        n.setProperty(l, a, o))
      : e.type & 12;
}
function jb(t, e) {
  let r = ua(e, t);
  r[K] & 16 || (r[K] |= 64);
}
function y6(t, e, r, a) {
  if (Qu()) {
    let o = a === null ? null : { '': -1 },
      n = Gb(t, r),
      i,
      s;
    n === null ? (i = s = null) : ([i, s] = n),
      i !== null && cf(t, e, r, i, o, s),
      o && Kb(r, a, o);
  }
  r.mergedAttrs = on(r.mergedAttrs, r.attrs);
}
function cf(t, e, r, a, o, n) {
  for (let c = 0; c < a.length; c++) U3(Y2(r, e), t, a[c].type);
  Qb(r, t.data.length, a.length);
  for (let c = 0; c < a.length; c++) {
    let h = a[c];
    h.providersResolver && h.providersResolver(h);
  }
  let i = !1,
    s = !1,
    l = nf(t, e, a.length, null);
  for (let c = 0; c < a.length; c++) {
    let h = a[c];
    (r.mergedAttrs = on(r.mergedAttrs, h.hostAttrs)),
      Xb(t, r, e, l, h),
      Zb(l, h, o),
      h.contentQueries !== null && (r.flags |= 4),
      (h.hostBindings !== null || h.hostAttrs !== null || h.hostVars !== 0) &&
        (r.flags |= 64);
    let d = h.type.prototype;
    !i &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((t.preOrderHooks ??= []).push(r.index), (i = !0)),
      !s &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((t.preOrderCheckHooks ??= []).push(r.index), (s = !0)),
      l++;
  }
  Rb(t, r, n);
}
function Yb(t, e, r, a, o) {
  let n = o.hostBindings;
  if (n) {
    let i = t.hostBindingOpCodes;
    i === null && (i = t.hostBindingOpCodes = []);
    let s = ~e.index;
    Ub(i) != s && i.push(s), i.push(r, a, n);
  }
}
function Ub(t) {
  let e = t.length;
  for (; e > 0; ) {
    let r = t[--e];
    if (typeof r == 'number' && r < 0) return r;
  }
  return 0;
}
function $b(t, e, r, a) {
  let o = r.directiveStart,
    n = r.directiveEnd;
  fi(r) && Jb(e, r, t.data[o + r.componentOffset]),
    t.firstCreatePass || Y2(r, e),
    ha(a, e);
  let i = r.initialInputs;
  for (let s = o; s < n; s++) {
    let l = t.data[s],
      c = nr(e, t, s, r);
    if ((ha(c, e), i !== null && aF(e, s - o, c, l, r, i), D0(l))) {
      let h = ua(r.index, e);
      h[b1] = nr(e, t, s, r);
    }
  }
}
function hf(t, e, r) {
  let a = r.directiveStart,
    o = r.directiveEnd,
    n = r.index,
    i = oy();
  try {
    rr(n);
    for (let s = a; s < o; s++) {
      let l = t.data[s],
        c = e[s];
      q3(s),
        (l.hostBindings !== null || l.hostVars !== 0 || l.hostAttrs !== null) &&
          Wb(l, c);
    }
  } finally {
    rr(-1), q3(i);
  }
}
function Wb(t, e) {
  t.hostBindings !== null && t.hostBindings(1, e);
}
function Gb(t, e) {
  let r = t.directiveRegistry,
    a = null,
    o = null;
  if (r)
    for (let n = 0; n < r.length; n++) {
      let i = r[n];
      if (Su(e, i.selectors, !1))
        if ((a || (a = []), D0(i)))
          if (i.findHostDirectiveDefs !== null) {
            let s = [];
            (o = o || new Map()),
              i.findHostDirectiveDefs(i, s, o),
              a.unshift(...s, i);
            let l = s.length;
            l4(t, e, l);
          } else a.unshift(i), l4(t, e, 0);
        else
          (o = o || new Map()), i.findHostDirectiveDefs?.(i, a, o), a.push(i);
    }
  return a === null ? null : [a, o];
}
function l4(t, e, r) {
  (e.componentOffset = r), (t.components ??= []).push(e.index);
}
function Kb(t, e, r) {
  if (e) {
    let a = (t.localNames = []);
    for (let o = 0; o < e.length; o += 2) {
      let n = r[e[o + 1]];
      if (n == null) throw new y(-301, !1);
      a.push(e[o], n);
    }
  }
}
function Zb(t, e, r) {
  if (r) {
    if (e.exportAs)
      for (let a = 0; a < e.exportAs.length; a++) r[e.exportAs[a]] = t;
    D0(e) && (r[''] = t);
  }
}
function Qb(t, e, r) {
  (t.flags |= 1),
    (t.directiveStart = e),
    (t.directiveEnd = e + r),
    (t.providerIndexes = e);
}
function Xb(t, e, r, a, o) {
  t.data[a] = o;
  let n = o.factory || (o.factory = Ja(o.type, !0)),
    i = new or(n, D0(o), v);
  (t.blueprint[a] = i), (r[a] = i), Yb(t, e, a, nf(t, r, o.hostVars, D1), o);
}
function Jb(t, e, r) {
  let a = ft(e, t),
    o = lf(r),
    n = t[Xt].rendererFactory,
    i = 16;
  r.signals ? (i = 4096) : r.onPush && (i = 64);
  let s = _i(
    t,
    Di(t, o, null, i, a, e, null, n.createRenderer(a, r), null, null, null),
  );
  t[e.index] = s;
}
function eF(t, e, r, a, o, n) {
  let i = ft(t, e);
  tF(e[Be], i, n, t.value, r, a, o);
}
function tF(t, e, r, a, o, n, i) {
  if (n == null) t.removeAttribute(e, o, r);
  else {
    let s = i == null ? Zt(n) : i(n, a || '', o);
    t.setAttribute(e, o, s, r);
  }
}
function aF(t, e, r, a, o, n) {
  let i = n[e];
  if (i !== null)
    for (let s = 0; s < i.length; ) {
      let l = i[s++],
        c = i[s++],
        h = i[s++],
        d = i[s++];
      of(a, r, l, c, h, d);
    }
}
function rF(t, e, r) {
  let a = null,
    o = 0;
  for (; o < r.length; ) {
    let n = r[o];
    if (n === 0) {
      o += 4;
      continue;
    } else if (n === 5) {
      o += 2;
      continue;
    }
    if (typeof n == 'number') break;
    if (t.hasOwnProperty(n)) {
      a === null && (a = []);
      let i = t[n];
      for (let s = 0; s < i.length; s += 3)
        if (i[s] === e) {
          a.push(n, i[s + 1], i[s + 2], r[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return a;
}
function df(t, e, r, a) {
  return [t, !0, 0, e, null, a, null, r, null, null];
}
function uf(t, e) {
  let r = t.contentQueries;
  if (r !== null) {
    let a = ce(null);
    try {
      for (let o = 0; o < r.length; o += 2) {
        let n = r[o],
          i = r[o + 1];
        if (i !== -1) {
          let s = t.data[i];
          r6(n), s.contentQueries(2, e[i], i);
        }
      }
    } finally {
      ce(a);
    }
  }
}
function _i(t, e) {
  return t[sn] ? (t[_d][_t] = e) : (t[sn] = e), (t[_d] = e), e;
}
function c4(t, e, r) {
  r6(0);
  let a = ce(null);
  try {
    e(t, r);
  } finally {
    ce(a);
  }
}
function pf(t) {
  return (t[B2] ??= []);
}
function ff(t) {
  return (t.cleanup ??= []);
}
function mf(t, e, r) {
  return (t === null || D0(t)) && (r = jM(r[e.index])), r[Be];
}
function vf(t, e) {
  let r = t[eo],
    a = r ? r.get(e0, null) : null;
  a && a.handleError(e);
}
function b6(t, e, r, a, o) {
  for (let n = 0; n < r.length; ) {
    let i = r[n++],
      s = r[n++],
      l = r[n++],
      c = e[i],
      h = t.data[i];
    of(h, c, a, s, l, o);
  }
}
function F6(t, e, r) {
  let a = $u(e, t);
  vb(t[Be], a, r);
}
function oF(t, e) {
  let r = ua(e, t),
    a = r[Z];
  nF(a, r);
  let o = r[r0];
  o !== null && r[Jr] === null && (r[Jr] = d6(o, r[eo])), C6(a, r, r[b1]);
}
function nF(t, e) {
  for (let r = e.length; r < t.blueprint.length; r++) e.push(t.blueprint[r]);
}
function C6(t, e, r) {
  o6(e);
  try {
    let a = t.viewQuery;
    a !== null && c4(1, a, r);
    let o = t.template;
    o !== null && sf(t, e, o, 1, r),
      t.firstCreatePass && (t.firstCreatePass = !1),
      e[V0]?.finishViewCreation(t),
      t.staticContentQueries && uf(t, e),
      t.staticViewQueries && c4(2, t.viewQuery, r);
    let n = t.components;
    n !== null && iF(e, n);
  } catch (a) {
    throw (
      (t.firstCreatePass &&
        ((t.incompleteFirstPass = !0), (t.firstCreatePass = !1)),
      a)
    );
  } finally {
    (e[K] &= -5), n6();
  }
}
function iF(t, e) {
  for (let r = 0; r < e.length; r++) oF(t, e[r]);
}
function gn(t, e, r, a) {
  let o = ce(null);
  try {
    let n = e.tView,
      s = t[K] & 4096 ? 4096 : 16,
      l = Di(
        t,
        n,
        r,
        s,
        null,
        e,
        null,
        null,
        a?.injector ?? null,
        a?.embeddedViewInjector ?? null,
        a?.dehydratedView ?? null,
      ),
      c = t[e.index];
    l[er] = c;
    let h = t[V0];
    return h !== null && (l[V0] = h.createEmbeddedView(n)), C6(n, l, r), l;
  } finally {
    ce(o);
  }
}
function gf(t, e) {
  let r = A1 + e;
  if (r < t.length) return t[r];
}
function ao(t, e) {
  return !e || e.firstChild === null || Fp(t);
}
function wn(t, e, r, a = !0) {
  let o = e[Z];
  if ((yb(o, e, t, r), a)) {
    let i = s4(r, t),
      s = e[Be],
      l = Zp(s, t[tr]);
    l !== null && xb(o, t[$1], s, e, l, i);
  }
  let n = e[Jr];
  n !== null && n.firstChild !== null && (n.firstChild = null);
}
function wf(t, e) {
  let r = ln(t, e);
  return r !== void 0 && Ai(r[Z], r), r;
}
function K2(t, e, r, a, o = !1) {
  for (; r !== null; ) {
    if (r.type === 128) {
      r = o ? r.projectionNext : r.next;
      continue;
    }
    let n = e[r.index];
    n !== null && a.push(Jt(n)), H0(n) && sF(n, a);
    let i = r.type;
    if (i & 8) K2(t, e, r.child, a);
    else if (i & 32) {
      let s = f6(r, e),
        l;
      for (; (l = s()); ) a.push(l);
    } else if (i & 16) {
      let s = Xp(e, r);
      if (Array.isArray(s)) a.push(...s);
      else {
        let l = ar(e[j1]);
        K2(l[Z], l, s, a, !0);
      }
    }
    r = o ? r.projectionNext : r.next;
  }
  return a;
}
function sF(t, e) {
  for (let r = A1; r < t.length; r++) {
    let a = t[r],
      o = a[Z].firstChild;
    o !== null && K2(a[Z], a, o, e);
  }
  t[tr] !== t[r0] && e.push(t[tr]);
}
var xf = [];
function lF(t) {
  return t[ut] ?? cF(t);
}
function cF(t) {
  let e = xf.pop() ?? Object.create(dF);
  return (e.lView = t), e;
}
function hF(t) {
  t.lView[ut] !== t && ((t.lView = null), xf.push(t));
}
var dF = Q(M({}, Er), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: t => {
    wi(t.lView);
  },
  consumerOnSignalRead() {
    this.lView[ut] = this;
  },
});
function uF(t) {
  let e = t[ut] ?? Object.create(pF);
  return (e.lView = t), e;
}
var pF = Q(M({}, Er), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: t => {
    let e = ar(t.lView);
    for (; e && !Mf(e[Z]); ) e = ar(e);
    e && Gu(e);
  },
  consumerOnSignalRead() {
    this.lView[ut] = this;
  },
});
function Mf(t) {
  return t.type !== 2;
}
var fF = 100;
function yf(t, e = !0, r = 0) {
  let a = t[Xt],
    o = a.rendererFactory,
    n = !1;
  n || o.begin?.();
  try {
    mF(t, r);
  } catch (i) {
    throw (e && vf(t, i), i);
  } finally {
    n || (o.end?.(), a.inlineEffectRunner?.flush());
  }
}
function mF(t, e) {
  let r = ep();
  try {
    Ed(!0), h4(t, e);
    let a = 0;
    for (; gi(t); ) {
      if (a === fF) throw new y(103, !1);
      a++, h4(t, 1);
    }
  } finally {
    Ed(r);
  }
}
function vF(t, e, r, a) {
  let o = e[K];
  if ((o & 256) === 256) return;
  let n = !1,
    i = !1;
  !n && e[Xt].inlineEffectRunner?.flush(), o6(e);
  let s = !0,
    l = null,
    c = null;
  n ||
    (Mf(t)
      ? ((c = lF(e)), (l = $o(c)))
      : A7() === null
        ? ((s = !1), (c = uF(e)), (l = $o(c)))
        : e[ut] && (R5(e[ut]), (e[ut] = null)));
  try {
    Wu(e), ty(t.bindingStartIndex), r !== null && sf(t, e, r, 2, a);
    let h = (o & 3) === 3;
    if (!n)
      if (h) {
        let p = t.preOrderCheckHooks;
        p !== null && D2(e, p, null);
      } else {
        let p = t.preOrderHooks;
        p !== null && _2(e, p, 0, null), x3(e, 0);
      }
    if ((i || gF(e), bf(e, 0), t.contentQueries !== null && uf(t, e), !n))
      if (h) {
        let p = t.contentCheckHooks;
        p !== null && D2(e, p);
      } else {
        let p = t.contentHooks;
        p !== null && _2(e, p, 1), x3(e, 1);
      }
    Tb(t, e);
    let d = t.components;
    d !== null && Cf(e, d, 0);
    let u = t.viewQuery;
    if ((u !== null && c4(2, u, a), !n))
      if (h) {
        let p = t.viewCheckHooks;
        p !== null && D2(e, p);
      } else {
        let p = t.viewHooks;
        p !== null && _2(e, p, 2), x3(e, 2);
      }
    if ((t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[V2])) {
      for (let p of e[V2]) p();
      e[V2] = null;
    }
    n || (e[K] &= -73);
  } catch (h) {
    throw (n || wi(e), h);
  } finally {
    c !== null && (O5(c, l), s && hF(c)), n6();
  }
}
function bf(t, e) {
  for (let r = zp(t); r !== null; r = Ap(r))
    for (let a = A1; a < r.length; a++) {
      let o = r[a];
      Ff(o, e);
    }
}
function gF(t) {
  for (let e = zp(t); e !== null; e = Ap(e)) {
    if (!(e[K] & N2.HasTransplantedViews)) continue;
    let r = e[to];
    for (let a = 0; a < r.length; a++) {
      let o = r[a];
      Gu(o);
    }
  }
}
function wF(t, e, r) {
  let a = ua(e, t);
  Ff(a, r);
}
function Ff(t, e) {
  J4(t) && h4(t, e);
}
function h4(t, e) {
  let a = t[Z],
    o = t[K],
    n = t[ut],
    i = !!(e === 0 && o & 16);
  if (
    ((i ||= !!(o & 64 && e === 0)),
    (i ||= !!(o & 1024)),
    (i ||= !!(n?.dirty && N5(n))),
    (i ||= !1),
    n && (n.dirty = !1),
    (t[K] &= -9217),
    i)
  )
    vF(a, t, a.template, t[b1]);
  else if (o & 8192) {
    bf(t, 1);
    let s = a.components;
    s !== null && Cf(t, s, 1);
  }
}
function Cf(t, e, r) {
  for (let a = 0; a < e.length; a++) wF(t, e[a], r);
}
function z6(t, e) {
  let r = ep() ? 64 : 1088;
  for (t[Xt].changeDetectionScheduler?.notify(e); t; ) {
    t[K] |= r;
    let a = ar(t);
    if (O3(t) && !a) return t;
    t = a;
  }
  return null;
}
var ir = class {
    get rootNodes() {
      let e = this._lView,
        r = e[Z];
      return K2(r, e, r.firstChild, []);
    }
    constructor(e, r, a = !0) {
      (this._lView = e),
        (this._cdRefInjectingView = r),
        (this.notifyErrorHandler = a),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[b1];
    }
    set context(e) {
      this._lView[b1] = e;
    }
    get destroyed() {
      return (this._lView[K] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let e = this._lView[S1];
        if (H0(e)) {
          let r = e[O2],
            a = r ? r.indexOf(this) : -1;
          a > -1 && (ln(e, a), I2(r, a));
        }
        this._attachedToViewContainer = !1;
      }
      Ai(this._lView[Z], this._lView);
    }
    onDestroy(e) {
      Ku(this._lView, e);
    }
    markForCheck() {
      z6(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[K] &= -129;
    }
    reattach() {
      R3(this._lView), (this._lView[K] |= 128);
    }
    detectChanges() {
      (this._lView[K] |= 1024), yf(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new y(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let e = O3(this._lView),
        r = this._lView[er];
      r !== null && !e && m6(r, this._lView), $p(this._lView[Z], this._lView);
    }
    attachToAppRef(e) {
      if (this._attachedToViewContainer) throw new y(902, !1);
      this._appRef = e;
      let r = O3(this._lView),
        a = this._lView[er];
      a !== null && !r && Wp(a, this._lView), R3(this._lView);
    }
  },
  Ke = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = yF;
    let t = e;
    return t;
  })(),
  xF = Ke,
  MF = class extends xF {
    constructor(e, r, a) {
      super(),
        (this._declarationLView = e),
        (this._declarationTContainer = r),
        (this.elementRef = a);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(e, r) {
      return this.createEmbeddedViewImpl(e, r);
    }
    createEmbeddedViewImpl(e, r, a) {
      let o = gn(this._declarationLView, this._declarationTContainer, e, {
        embeddedViewInjector: r,
        dehydratedView: a,
      });
      return new ir(o);
    }
  };
function yF() {
  return Hi(m1(), N());
}
function Hi(t, e) {
  return t.type & 4 ? new MF(e, t, ho(t, e)) : null;
}
var qj = new RegExp(`^(\\d+)*(${Ny}|${Oy})*(.*)`);
var bF = () => null;
function ro(t, e) {
  return bF(t, e);
}
var oo = class {},
  zf = new F('', { providedIn: 'root', factory: () => !1 });
var Af = new F(''),
  Sf = new F(''),
  d4 = class {},
  Z2 = class {};
function FF(t) {
  let e = Error(`No component factory found for ${L1(t)}.`);
  return (e[CF] = t), e;
}
var CF = 'ngComponent';
var u4 = class {
    resolveComponentFactory(e) {
      throw FF(e);
    }
  },
  I6 = class I6 {};
I6.NULL = new u4();
var a0 = I6,
  Y1 = class {},
  Ce = (() => {
    let e = class e {
      constructor() {
        this.destroyNode = null;
      }
    };
    e.__NG_ELEMENT_ID__ = () => zF();
    let t = e;
    return t;
  })();
function zF() {
  let t = N(),
    e = m1(),
    r = ua(e.index, t);
  return (sa(r) ? r : t)[Be];
}
var AF = (() => {
  let e = class e {};
  e.ɵprov = w({ token: e, providedIn: 'root', factory: () => null });
  let t = e;
  return t;
})();
function Q2(t, e, r) {
  let a = r ? t.styles : null,
    o = r ? t.classes : null,
    n = 0;
  if (e !== null)
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (typeof s == 'number') n = s;
      else if (n == 1) o = H3(o, s);
      else if (n == 2) {
        let l = s,
          c = e[++i];
        a = H3(a, l + ': ' + c + ';');
      }
    }
  r ? (t.styles = a) : (t.stylesWithoutHost = a),
    r ? (t.classes = o) : (t.classesWithoutHost = o);
}
var X2 = class extends a0 {
  constructor(e) {
    super(), (this.ngModule = e);
  }
  resolveComponentFactory(e) {
    let r = S0(e);
    return new sr(r, this.ngModule);
  }
};
function Qd(t, e) {
  let r = [];
  for (let a in t) {
    if (!t.hasOwnProperty(a)) continue;
    let o = t[a];
    if (o === void 0) continue;
    let n = Array.isArray(o),
      i = n ? o[0] : o,
      s = n ? o[1] : la.None;
    e
      ? r.push({
          propName: i,
          templateName: a,
          isSignal: (s & la.SignalBased) !== 0,
        })
      : r.push({ propName: i, templateName: a });
  }
  return r;
}
function SF(t) {
  let e = t.toLowerCase();
  return e === 'svg' ? Uu : e === 'math' ? qM : null;
}
var sr = class extends Z2 {
    get inputs() {
      let e = this.componentDef,
        r = e.inputTransforms,
        a = Qd(e.inputs, !0);
      if (r !== null)
        for (let o of a)
          r.hasOwnProperty(o.propName) && (o.transform = r[o.propName]);
      return a;
    }
    get outputs() {
      return Qd(this.componentDef.outputs, !1);
    }
    constructor(e, r) {
      super(),
        (this.componentDef = e),
        (this.ngModule = r),
        (this.componentType = e.type),
        (this.selector = bM(e.selectors)),
        (this.ngContentSelectors = e.ngContentSelectors
          ? e.ngContentSelectors
          : []),
        (this.isBoundToModule = !!r);
    }
    create(e, r, a, o) {
      let n = ce(null);
      try {
        o = o || this.ngModule;
        let i = o instanceof F1 ? o : o?.injector;
        i &&
          this.componentDef.getStandaloneInjector !== null &&
          (i = this.componentDef.getStandaloneInjector(i) || i);
        let s = i ? new j3(e, i) : e,
          l = s.get(Y1, null);
        if (l === null) throw new y(407, !1);
        let c = s.get(AF, null),
          h = s.get(oo, null),
          d = {
            rendererFactory: l,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: h,
          },
          u = l.createRenderer(null, this.componentDef),
          p = this.componentDef.selectors[0][0] || 'div',
          f = a
            ? Ib(u, a, this.componentDef.encapsulation, s)
            : Up(u, p, SF(p)),
          x = 512;
        this.componentDef.signals
          ? (x |= 4096)
          : this.componentDef.onPush || (x |= 16);
        let b = null;
        f !== null && (b = d6(f, s, !0));
        let z = M6(0, null, null, 1, 0, null, null, null, null, null, null),
          L = Di(null, z, null, x, null, null, d, u, s, null, b);
        o6(L);
        let oe,
          U,
          qe = null;
        try {
          let ue = this.componentDef,
            xe,
            je = null;
          ue.findHostDirectiveDefs
            ? ((xe = []),
              (je = new Map()),
              ue.findHostDirectiveDefs(ue, xe, je),
              xe.push(ue))
            : (xe = [ue]);
          let fe = VF(L, f);
          (qe = DF(fe, f, ue, xe, L, d, u)),
            (U = X4(z, c1)),
            f && EF(u, ue, f, a),
            r !== void 0 && TF(U, this.ngContentSelectors, r),
            (oe = HF(qe, ue, xe, je, L, [kF])),
            C6(z, L, null);
        } catch (ue) {
          throw (qe !== null && Q3(qe), Q3(L), ue);
        } finally {
          n6();
        }
        return new p4(this.componentType, oe, ho(U, L), L, U);
      } finally {
        ce(n);
      }
    }
  },
  p4 = class extends d4 {
    constructor(e, r, a, o, n) {
      super(),
        (this.location = a),
        (this._rootLView = o),
        (this._tNode = n),
        (this.previousInputValues = null),
        (this.instance = r),
        (this.hostView = this.changeDetectorRef = new ir(o, void 0, !1)),
        (this.componentType = e);
    }
    setInput(e, r) {
      let a = this._tNode.inputs,
        o;
      if (a !== null && (o = a[e])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(e) &&
            Object.is(this.previousInputValues.get(e), r))
        )
          return;
        let n = this._rootLView;
        b6(n[Z], n, o, e, r), this.previousInputValues.set(e, r);
        let i = ua(this._tNode.index, n);
        z6(i, 1);
      }
    }
    get injector() {
      return new Xa(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(e) {
      this.hostView.onDestroy(e);
    }
  };
function VF(t, e) {
  let r = t[Z],
    a = c1;
  return (t[a] = e), uo(r, a, 2, '#host', null);
}
function DF(t, e, r, a, o, n, i) {
  let s = o[Z];
  _F(a, t, e, i);
  let l = null;
  e !== null && (l = d6(e, o[eo]));
  let c = n.rendererFactory.createRenderer(e, r),
    h = 16;
  r.signals ? (h = 4096) : r.onPush && (h = 64);
  let d = Di(o, lf(r), null, h, o[t.index], t, n, c, null, null, l);
  return (
    s.firstCreatePass && l4(s, t, a.length - 1), _i(o, d), (o[t.index] = d)
  );
}
function _F(t, e, r, a) {
  for (let o of t) e.mergedAttrs = on(e.mergedAttrs, o.hostAttrs);
  e.mergedAttrs !== null &&
    (Q2(e, e.mergedAttrs, !0), r !== null && tf(a, r, e));
}
function HF(t, e, r, a, o, n) {
  let i = m1(),
    s = o[Z],
    l = ft(i, o);
  cf(s, o, i, r, null, a);
  for (let h = 0; h < r.length; h++) {
    let d = i.directiveStart + h,
      u = nr(o, s, d, i);
    ha(u, o);
  }
  hf(s, o, i), l && ha(l, o);
  let c = nr(o, s, i.directiveStart + i.componentOffset, i);
  if (((t[b1] = o[b1] = c), n !== null)) for (let h of n) h(c, e);
  return g6(s, i, o), c;
}
function EF(t, e, r, a) {
  if (a) L3(t, r, ['ng-version', '18.2.3']);
  else {
    let { attrs: o, classes: n } = FM(e.selectors[0]);
    o && L3(t, r, o), n && n.length > 0 && ef(t, r, n.join(' '));
  }
}
function TF(t, e, r) {
  let a = (t.projection = []);
  for (let o = 0; o < e.length; o++) {
    let n = r[o];
    a.push(n != null ? Array.from(n) : null);
  }
}
function kF() {
  let t = m1();
  bi(N()[Z], t);
}
var Qe = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = LF;
  let t = e;
  return t;
})();
function LF() {
  let t = m1();
  return Df(t, N());
}
var IF = Qe,
  Vf = class extends IF {
    constructor(e, r, a) {
      super(),
        (this._lContainer = e),
        (this._hostTNode = r),
        (this._hostLView = a);
    }
    get element() {
      return ho(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Xa(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let e = i6(this._hostTNode, this._hostLView);
      if (hp(e)) {
        let r = q2(e, this._hostLView),
          a = R2(e),
          o = r[Z].data[a + 8];
        return new Xa(o, r);
      } else return new Xa(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(e) {
      let r = Xd(this._lContainer);
      return (r !== null && r[e]) || null;
    }
    get length() {
      return this._lContainer.length - A1;
    }
    createEmbeddedView(e, r, a) {
      let o, n;
      typeof a == 'number'
        ? (o = a)
        : a != null && ((o = a.index), (n = a.injector));
      let i = ro(this._lContainer, e.ssrId),
        s = e.createEmbeddedViewImpl(r || {}, n, i);
      return this.insertImpl(s, o, ao(this._hostTNode, i)), s;
    }
    createComponent(e, r, a, o, n) {
      let i = e && !BM(e),
        s;
      if (i) s = r;
      else {
        let f = r || {};
        (s = f.index),
          (a = f.injector),
          (o = f.projectableNodes),
          (n = f.environmentInjector || f.ngModuleRef);
      }
      let l = i ? e : new sr(S0(e)),
        c = a || this.parentInjector;
      if (!n && l.ngModule == null) {
        let x = (i ? c : this.parentInjector).get(F1, null);
        x && (n = x);
      }
      let h = S0(l.componentType ?? {}),
        d = ro(this._lContainer, h?.id ?? null),
        u = d?.firstChild ?? null,
        p = l.create(c, o, u, n);
      return this.insertImpl(p.hostView, s, ao(this._hostTNode, d)), p;
    }
    insert(e, r) {
      return this.insertImpl(e, r, !0);
    }
    insertImpl(e, r, a) {
      let o = e._lView;
      if (UM(o)) {
        let s = this.indexOf(e);
        if (s !== -1) this.detach(s);
        else {
          let l = o[S1],
            c = new Vf(l, l[$1], l[S1]);
          c.detach(c.indexOf(e));
        }
      }
      let n = this._adjustIndex(r),
        i = this._lContainer;
      return wn(i, o, n, a), e.attachToViewContainerRef(), yu(C3(i), n, e), e;
    }
    move(e, r) {
      return this.insert(e, r);
    }
    indexOf(e) {
      let r = Xd(this._lContainer);
      return r !== null ? r.indexOf(e) : -1;
    }
    remove(e) {
      let r = this._adjustIndex(e, -1),
        a = ln(this._lContainer, r);
      a && (I2(C3(this._lContainer), r), Ai(a[Z], a));
    }
    detach(e) {
      let r = this._adjustIndex(e, -1),
        a = ln(this._lContainer, r);
      return a && I2(C3(this._lContainer), r) != null ? new ir(a) : null;
    }
    _adjustIndex(e, r = 0) {
      return e ?? this.length + r;
    }
  };
function Xd(t) {
  return t[O2];
}
function C3(t) {
  return t[O2] || (t[O2] = []);
}
function Df(t, e) {
  let r,
    a = e[t.index];
  return (
    H0(a) ? (r = a) : ((r = df(a, e, null, t)), (e[t.index] = r), _i(e, r)),
    BF(r, e, t, a),
    new Vf(r, t, e)
  );
}
function PF(t, e) {
  let r = t[Be],
    a = r.createComment(''),
    o = ft(e, t),
    n = Zp(r, o);
  return G2(r, n, a, zb(r, o), !1), a;
}
var BF = RF,
  OF = () => !1;
function NF(t, e, r) {
  return OF(t, e, r);
}
function RF(t, e, r, a) {
  if (t[tr]) return;
  let o;
  r.type & 8 ? (o = Jt(a)) : (o = PF(e, r)), (t[tr] = o);
}
var f4 = class t {
    constructor(e) {
      (this.queryList = e), (this.matches = null);
    }
    clone() {
      return new t(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  m4 = class t {
    constructor(e = []) {
      this.queries = e;
    }
    createEmbeddedView(e) {
      let r = e.queries;
      if (r !== null) {
        let a = e.contentQueries !== null ? e.contentQueries[0] : r.length,
          o = [];
        for (let n = 0; n < a; n++) {
          let i = r.getByIndex(n),
            s = this.queries[i.indexInDeclarationView];
          o.push(s.clone());
        }
        return new t(o);
      }
      return null;
    }
    insertView(e) {
      this.dirtyQueriesWithMatches(e);
    }
    detachView(e) {
      this.dirtyQueriesWithMatches(e);
    }
    finishViewCreation(e) {
      this.dirtyQueriesWithMatches(e);
    }
    dirtyQueriesWithMatches(e) {
      for (let r = 0; r < this.queries.length; r++)
        A6(e, r).matches !== null && this.queries[r].setDirty();
    }
  },
  J2 = class {
    constructor(e, r, a = null) {
      (this.flags = r),
        (this.read = a),
        typeof e == 'string' ? (this.predicate = KF(e)) : (this.predicate = e);
    }
  },
  v4 = class t {
    constructor(e = []) {
      this.queries = e;
    }
    elementStart(e, r) {
      for (let a = 0; a < this.queries.length; a++)
        this.queries[a].elementStart(e, r);
    }
    elementEnd(e) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementEnd(e);
    }
    embeddedTView(e) {
      let r = null;
      for (let a = 0; a < this.length; a++) {
        let o = r !== null ? r.length : 0,
          n = this.getByIndex(a).embeddedTView(e, o);
        n &&
          ((n.indexInDeclarationView = a), r !== null ? r.push(n) : (r = [n]));
      }
      return r !== null ? new t(r) : null;
    }
    template(e, r) {
      for (let a = 0; a < this.queries.length; a++)
        this.queries[a].template(e, r);
    }
    getByIndex(e) {
      return this.queries[e];
    }
    get length() {
      return this.queries.length;
    }
    track(e) {
      this.queries.push(e);
    }
  },
  g4 = class t {
    constructor(e, r = -1) {
      (this.metadata = e),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = r);
    }
    elementStart(e, r) {
      this.isApplyingToNode(r) && this.matchTNode(e, r);
    }
    elementEnd(e) {
      this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1);
    }
    template(e, r) {
      this.elementStart(e, r);
    }
    embeddedTView(e, r) {
      return this.isApplyingToNode(e)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-e.index, r),
          new t(this.metadata))
        : null;
    }
    isApplyingToNode(e) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let r = this._declarationNodeIndex,
          a = e.parent;
        for (; a !== null && a.type & 8 && a.index !== r; ) a = a.parent;
        return r === (a !== null ? a.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(e, r) {
      let a = this.metadata.predicate;
      if (Array.isArray(a))
        for (let o = 0; o < a.length; o++) {
          let n = a[o];
          this.matchTNodeWithReadOption(e, r, qF(r, n)),
            this.matchTNodeWithReadOption(e, r, H2(r, e, n, !1, !1));
        }
      else
        a === Ke
          ? r.type & 4 && this.matchTNodeWithReadOption(e, r, -1)
          : this.matchTNodeWithReadOption(e, r, H2(r, e, a, !1, !1));
    }
    matchTNodeWithReadOption(e, r, a) {
      if (a !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === E || o === Qe || (o === Ke && r.type & 4))
            this.addMatch(r.index, -2);
          else {
            let n = H2(r, e, o, !1, !1);
            n !== null && this.addMatch(r.index, n);
          }
        else this.addMatch(r.index, a);
      }
    }
    addMatch(e, r) {
      this.matches === null ? (this.matches = [e, r]) : this.matches.push(e, r);
    }
  };
function qF(t, e) {
  let r = t.localNames;
  if (r !== null) {
    for (let a = 0; a < r.length; a += 2) if (r[a] === e) return r[a + 1];
  }
  return null;
}
function jF(t, e) {
  return t.type & 11 ? ho(t, e) : t.type & 4 ? Hi(t, e) : null;
}
function YF(t, e, r, a) {
  return r === -1 ? jF(e, t) : r === -2 ? UF(t, e, a) : nr(t, t[Z], r, e);
}
function UF(t, e, r) {
  if (r === E) return ho(e, t);
  if (r === Ke) return Hi(e, t);
  if (r === Qe) return Df(e, t);
}
function _f(t, e, r, a) {
  let o = e[V0].queries[a];
  if (o.matches === null) {
    let n = t.data,
      i = r.matches,
      s = [];
    for (let l = 0; i !== null && l < i.length; l += 2) {
      let c = i[l];
      if (c < 0) s.push(null);
      else {
        let h = n[c];
        s.push(YF(e, h, i[l + 1], r.metadata.read));
      }
    }
    o.matches = s;
  }
  return o.matches;
}
function w4(t, e, r, a) {
  let o = t.queries.getByIndex(r),
    n = o.matches;
  if (n !== null) {
    let i = _f(t, e, o, r);
    for (let s = 0; s < n.length; s += 2) {
      let l = n[s];
      if (l > 0) a.push(i[s / 2]);
      else {
        let c = n[s + 1],
          h = e[-l];
        for (let d = A1; d < h.length; d++) {
          let u = h[d];
          u[er] === u[S1] && w4(u[Z], u, c, a);
        }
        if (h[to] !== null) {
          let d = h[to];
          for (let u = 0; u < d.length; u++) {
            let p = d[u];
            w4(p[Z], p, c, a);
          }
        }
      }
    }
  }
  return a;
}
function $F(t, e) {
  return t[V0].queries[e].queryList;
}
function Hf(t, e, r) {
  let a = new W2((r & 4) === 4);
  return (
    Ob(t, e, a, a.destroy), (e[V0] ??= new m4()).queries.push(new f4(a)) - 1
  );
}
function WF(t, e, r) {
  let a = Te();
  return (
    a.firstCreatePass &&
      (Ef(a, new J2(t, e, r), -1), (e & 2) === 2 && (a.staticViewQueries = !0)),
    Hf(a, N(), e)
  );
}
function GF(t, e, r, a) {
  let o = Te();
  if (o.firstCreatePass) {
    let n = m1();
    Ef(o, new J2(e, r, a), n.index),
      ZF(o, t),
      (r & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Hf(o, N(), r);
}
function KF(t) {
  return t.split(',').map(e => e.trim());
}
function Ef(t, e, r) {
  t.queries === null && (t.queries = new v4()), t.queries.track(new g4(e, r));
}
function ZF(t, e) {
  let r = t.contentQueries || (t.contentQueries = []),
    a = r.length ? r[r.length - 1] : -1;
  e !== a && r.push(t.queries.length - 1, e);
}
function A6(t, e) {
  return t.queries.getByIndex(e);
}
function QF(t, e) {
  let r = t[Z],
    a = A6(r, e);
  return a.crossesNgTemplate ? w4(r, t, e, []) : _f(r, t, a, e);
}
var Jd = new Set();
function mt(t) {
  Jd.has(t) ||
    (Jd.add(t),
    performance?.mark?.('mark_feature_usage', { detail: { feature: t } }));
}
function Tf(t) {
  return typeof t == 'function' && t[qt] !== void 0;
}
function ma(t, e) {
  mt('NgSignals');
  let r = B7(t),
    a = r[qt];
  return (
    e?.equal && (a.equal = e.equal),
    (r.set = o => Gl(a, o)),
    (r.update = o => O7(a, o)),
    (r.asReadonly = XF.bind(r)),
    r
  );
}
function XF() {
  let t = this[qt];
  if (t.readonlyFn === void 0) {
    let e = () => this();
    (e[qt] = t), (t.readonlyFn = e);
  }
  return t.readonlyFn;
}
function kf(t) {
  return Tf(t) && typeof t.set == 'function';
}
function JF(t) {
  return Object.getPrototypeOf(t.prototype).constructor;
}
function r1(t) {
  let e = JF(t.type),
    r = !0,
    a = [t];
  for (; e; ) {
    let o;
    if (D0(t)) o = e.ɵcmp || e.ɵdir;
    else {
      if (e.ɵcmp) throw new y(903, !1);
      o = e.ɵdir;
    }
    if (o) {
      if (r) {
        a.push(o);
        let i = t;
        (i.inputs = C2(t.inputs)),
          (i.inputTransforms = C2(t.inputTransforms)),
          (i.declaredInputs = C2(t.declaredInputs)),
          (i.outputs = C2(t.outputs));
        let s = o.hostBindings;
        s && oC(t, s);
        let l = o.viewQuery,
          c = o.contentQueries;
        if (
          (l && aC(t, l),
          c && rC(t, c),
          eC(t, o),
          Rx(t.outputs, o.outputs),
          D0(o) && o.data.animation)
        ) {
          let h = t.data;
          h.animation = (h.animation || []).concat(o.data.animation);
        }
      }
      let n = o.features;
      if (n)
        for (let i = 0; i < n.length; i++) {
          let s = n[i];
          s && s.ngInherit && s(t), s === r1 && (r = !1);
        }
    }
    e = Object.getPrototypeOf(e);
  }
  tC(a);
}
function eC(t, e) {
  for (let r in e.inputs) {
    if (!e.inputs.hasOwnProperty(r) || t.inputs.hasOwnProperty(r)) continue;
    let a = e.inputs[r];
    if (
      a !== void 0 &&
      ((t.inputs[r] = a),
      (t.declaredInputs[r] = e.declaredInputs[r]),
      e.inputTransforms !== null)
    ) {
      let o = Array.isArray(a) ? a[0] : a;
      if (!e.inputTransforms.hasOwnProperty(o)) continue;
      (t.inputTransforms ??= {}), (t.inputTransforms[o] = e.inputTransforms[o]);
    }
  }
}
function tC(t) {
  let e = 0,
    r = null;
  for (let a = t.length - 1; a >= 0; a--) {
    let o = t[a];
    (o.hostVars = e += o.hostVars),
      (o.hostAttrs = on(o.hostAttrs, (r = on(r, o.hostAttrs))));
  }
}
function C2(t) {
  return t === Zr ? {} : t === q1 ? [] : t;
}
function aC(t, e) {
  let r = t.viewQuery;
  r
    ? (t.viewQuery = (a, o) => {
        e(a, o), r(a, o);
      })
    : (t.viewQuery = e);
}
function rC(t, e) {
  let r = t.contentQueries;
  r
    ? (t.contentQueries = (a, o, n) => {
        e(a, o, n), r(a, o, n);
      })
    : (t.contentQueries = e);
}
function oC(t, e) {
  let r = t.hostBindings;
  r
    ? (t.hostBindings = (a, o) => {
        e(a, o), r(a, o);
      })
    : (t.hostBindings = e);
}
function ke(t) {
  let e = t.inputConfig,
    r = {};
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let o = e[a];
      Array.isArray(o) && o[3] && (r[a] = o[3]);
    }
  t.inputTransforms = r;
}
var da = class {},
  cn = class {};
var x4 = class extends da {
    constructor(e, r, a, o = !0) {
      super(),
        (this.ngModuleType = e),
        (this._parent = r),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new X2(this));
      let n = Hu(e);
      (this._bootstrapComponents = jp(n.bootstrap)),
        (this._r3Injector = xp(
          e,
          r,
          [
            { provide: da, useValue: this },
            { provide: a0, useValue: this.componentFactoryResolver },
            ...a,
          ],
          L1(e),
          new Set(['environment']),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let e = this._r3Injector;
      !e.destroyed && e.destroy(),
        this.destroyCbs.forEach(r => r()),
        (this.destroyCbs = null);
    }
    onDestroy(e) {
      this.destroyCbs.push(e);
    }
  },
  M4 = class extends cn {
    constructor(e) {
      super(), (this.moduleType = e);
    }
    create(e) {
      return new x4(this.moduleType, e, []);
    }
  };
var ei = class extends da {
  constructor(e) {
    super(),
      (this.componentFactoryResolver = new X2(this)),
      (this.instance = null);
    let r = new nn(
      [
        ...e.providers,
        { provide: da, useValue: this },
        { provide: a0, useValue: this.componentFactoryResolver },
      ],
      e.parent || ui(),
      e.debugName,
      new Set(['environment']),
    );
    (this.injector = r),
      e.runEnvironmentInitializers && r.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(e) {
    this.injector.onDestroy(e);
  }
};
function Ei(t, e, r = null) {
  return new ei({
    providers: t,
    parent: e,
    debugName: r,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Lf(t) {
  return S6(t)
    ? Array.isArray(t) || (!(t instanceof Map) && Symbol.iterator in t)
    : !1;
}
function nC(t, e) {
  if (Array.isArray(t)) for (let r = 0; r < t.length; r++) e(t[r]);
  else {
    let r = t[Symbol.iterator](),
      a;
    for (; !(a = r.next()).done; ) e(a.value);
  }
}
function S6(t) {
  return t !== null && (typeof t == 'function' || typeof t == 'object');
}
function xn(t, e, r) {
  return (t[e] = r);
}
function If(t, e) {
  return t[e];
}
function U1(t, e, r) {
  let a = t[e];
  return Object.is(a, r) ? !1 : ((t[e] = r), !0);
}
function no(t, e, r, a) {
  let o = U1(t, e, r);
  return U1(t, e + 1, a) || o;
}
function Pf(t, e, r, a, o) {
  let n = no(t, e, r, a);
  return U1(t, e + 2, o) || n;
}
function iC(t, e, r, a, o, n) {
  let i = no(t, e, r, a);
  return no(t, e + 2, o, n) || i;
}
function sC(t) {
  return (t.flags & 32) === 32;
}
function lC(t, e, r, a, o, n, i, s, l) {
  let c = e.consts,
    h = uo(e, t, 4, i || null, s || null);
  y6(e, r, h, ca(c, l)), bi(e, h);
  let d = (h.tView = M6(
    2,
    h,
    a,
    o,
    n,
    e.directiveRegistry,
    e.pipeRegistry,
    null,
    e.schemas,
    c,
    null,
  ));
  return (
    e.queries !== null &&
      (e.queries.template(e, h), (d.queries = e.queries.embeddedTView(h))),
    h
  );
}
function ti(t, e, r, a, o, n, i, s, l, c) {
  let h = r + c1,
    d = e.firstCreatePass ? lC(h, e, t, a, o, n, i, s, l) : e.data[h];
  ur(d, !1);
  let u = cC(e, t, d, r);
  Mi() && Si(e, t, u, d), ha(u, t);
  let p = df(u, t, u, d);
  return (
    (t[h] = p),
    _i(t, p),
    NF(p, d, t),
    mi(d) && w6(e, t, d),
    l != null && x6(t, d, c),
    d
  );
}
function ge(t, e, r, a, o, n, i, s) {
  let l = N(),
    c = Te(),
    h = ca(c.consts, n);
  return ti(l, c, t, e, r, a, o, h, i, s), ge;
}
var cC = hC;
function hC(t, e, r, a) {
  return yi(!0), e[Be].createComment('');
}
var Wr = (function (t) {
    return (
      (t[(t.EarlyRead = 0)] = 'EarlyRead'),
      (t[(t.Write = 1)] = 'Write'),
      (t[(t.MixedReadWrite = 2)] = 'MixedReadWrite'),
      (t[(t.Read = 3)] = 'Read'),
      t
    );
  })(Wr || {}),
  Bf = (() => {
    let e = class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
    };
    e.ɵprov = w({ token: e, providedIn: 'root', factory: () => new e() });
    let t = e;
    return t;
  })(),
  Qa = class Qa {
    constructor() {
      (this.ngZone = m(T)),
        (this.scheduler = m(oo)),
        (this.errorHandler = m(e0, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    execute() {
      this.executing = !0;
      for (let e of Qa.PHASES)
        for (let r of this.sequences)
          if (!(r.erroredOrDestroyed || !r.hooks[e]))
            try {
              r.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                r.hooks[e](r.pipelinedValue),
              );
            } catch (a) {
              (r.erroredOrDestroyed = !0), this.errorHandler?.handleError(a);
            }
      this.executing = !1;
      for (let e of this.sequences)
        e.afterRun(), e.once && this.sequences.delete(e);
      for (let e of this.deferredRegistrations) this.sequences.add(e);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(e) {
      this.executing
        ? this.deferredRegistrations.add(e)
        : (this.sequences.add(e), this.scheduler.notify(6));
    }
    unregister(e) {
      this.executing && this.sequences.has(e)
        ? ((e.erroredOrDestroyed = !0),
          (e.pipelinedValue = void 0),
          (e.once = !0))
        : (this.sequences.delete(e), this.deferredRegistrations.delete(e));
    }
  };
(Qa.PHASES = [Wr.EarlyRead, Wr.Write, Wr.MixedReadWrite, Wr.Read]),
  (Qa.ɵprov = w({ token: Qa, providedIn: 'root', factory: () => new Qa() }));
var y4 = Qa,
  b4 = class {
    constructor(e, r, a, o) {
      (this.impl = e),
        (this.hooks = r),
        (this.once = a),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy();
    }
  };
function V6(t, e) {
  !e?.injector && dr(V6);
  let r = e?.injector ?? m(Oe);
  return Yp(r) ? (mt('NgAfterRender'), Of(t, r, e, !1)) : Nf;
}
function Tt(t, e) {
  !e?.injector && dr(Tt);
  let r = e?.injector ?? m(Oe);
  return Yp(r) ? (mt('NgAfterNextRender'), Of(t, r, e, !0)) : Nf;
}
function dC(t, e) {
  if (t instanceof Function) {
    let r = [void 0, void 0, void 0, void 0];
    return (r[e] = t), r;
  } else return [t.earlyRead, t.write, t.mixedReadWrite, t.read];
}
function Of(t, e, r, a) {
  let o = e.get(Bf);
  o.impl ??= e.get(y4);
  let n = r?.phase ?? Wr.MixedReadWrite,
    i = new b4(o.impl, dC(t, n), a, e.get(E0));
  return o.impl.register(i), i;
}
var Nf = { destroy() {} };
function P0(t, e, r, a) {
  let o = N(),
    n = fa();
  if (U1(o, n, e)) {
    let i = Te(),
      s = co();
    eF(s, o, t, e, r, a);
  }
  return P0;
}
function D6(t, e, r, a) {
  return U1(t, fa(), r) ? e + Zt(r) + a : D1;
}
function uC(t, e, r, a, o, n) {
  let i = tp(),
    s = no(t, i, r, o);
  return xi(2), s ? e + Zt(r) + a + Zt(o) + n : D1;
}
function pC(t, e, r, a, o, n, i, s) {
  let l = tp(),
    c = Pf(t, l, r, o, i);
  return xi(3), c ? e + Zt(r) + a + Zt(o) + n + Zt(i) + s : D1;
}
function z2(t, e) {
  return (t << 17) | (e << 2);
}
function lr(t) {
  return (t >> 17) & 32767;
}
function fC(t) {
  return (t & 2) == 2;
}
function mC(t, e) {
  return (t & 131071) | (e << 17);
}
function F4(t) {
  return t | 2;
}
function io(t) {
  return (t & 131068) >> 2;
}
function z3(t, e) {
  return (t & -131069) | (e << 2);
}
function vC(t) {
  return (t & 1) === 1;
}
function C4(t) {
  return t | 1;
}
function gC(t, e, r, a, o, n) {
  let i = n ? e.classBindings : e.styleBindings,
    s = lr(i),
    l = io(i);
  t[a] = r;
  let c = !1,
    h;
  if (Array.isArray(r)) {
    let d = r;
    (h = d[1]), (h === null || pn(d, h) > 0) && (c = !0);
  } else h = r;
  if (o)
    if (l !== 0) {
      let u = lr(t[s + 1]);
      (t[a + 1] = z2(u, s)),
        u !== 0 && (t[u + 1] = z3(t[u + 1], a)),
        (t[s + 1] = mC(t[s + 1], a));
    } else
      (t[a + 1] = z2(s, 0)), s !== 0 && (t[s + 1] = z3(t[s + 1], a)), (s = a);
  else
    (t[a + 1] = z2(l, 0)),
      s === 0 ? (s = a) : (t[l + 1] = z3(t[l + 1], a)),
      (l = a);
  c && (t[a + 1] = F4(t[a + 1])),
    eu(t, h, a, !0),
    eu(t, h, a, !1),
    wC(e, h, t, a, n),
    (i = z2(s, l)),
    n ? (e.classBindings = i) : (e.styleBindings = i);
}
function wC(t, e, r, a, o) {
  let n = o ? t.residualClasses : t.residualStyles;
  n != null &&
    typeof e == 'string' &&
    pn(n, e) >= 0 &&
    (r[a + 1] = C4(r[a + 1]));
}
function eu(t, e, r, a) {
  let o = t[r + 1],
    n = e === null,
    i = a ? lr(o) : io(o),
    s = !1;
  for (; i !== 0 && (s === !1 || n); ) {
    let l = t[i],
      c = t[i + 1];
    xC(l, e) && ((s = !0), (t[i + 1] = a ? C4(c) : F4(c))),
      (i = a ? lr(c) : io(c));
  }
  s && (t[r + 1] = a ? F4(o) : C4(o));
}
function xC(t, e) {
  return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e
    ? !0
    : Array.isArray(t) && typeof e == 'string'
      ? pn(t, e) >= 0
      : !1;
}
var l1 = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Rf(t) {
  return t.substring(l1.key, l1.keyEnd);
}
function MC(t) {
  return t.substring(l1.value, l1.valueEnd);
}
function yC(t) {
  return Yf(t), qf(t, so(t, 0, l1.textEnd));
}
function qf(t, e) {
  let r = l1.textEnd;
  return r === e ? -1 : ((e = l1.keyEnd = FC(t, (l1.key = e), r)), so(t, e, r));
}
function bC(t) {
  return Yf(t), jf(t, so(t, 0, l1.textEnd));
}
function jf(t, e) {
  let r = l1.textEnd,
    a = (l1.key = so(t, e, r));
  return r === a
    ? -1
    : ((a = l1.keyEnd = CC(t, a, r)),
      (a = tu(t, a, r, 58)),
      (a = l1.value = so(t, a, r)),
      (a = l1.valueEnd = zC(t, a, r)),
      tu(t, a, r, 59));
}
function Yf(t) {
  (l1.key = 0),
    (l1.keyEnd = 0),
    (l1.value = 0),
    (l1.valueEnd = 0),
    (l1.textEnd = t.length);
}
function so(t, e, r) {
  for (; e < r && t.charCodeAt(e) <= 32; ) e++;
  return e;
}
function FC(t, e, r) {
  for (; e < r && t.charCodeAt(e) > 32; ) e++;
  return e;
}
function CC(t, e, r) {
  let a;
  for (
    ;
    e < r &&
    ((a = t.charCodeAt(e)) === 45 ||
      a === 95 ||
      ((a & -33) >= 65 && (a & -33) <= 90) ||
      (a >= 48 && a <= 57));

  )
    e++;
  return e;
}
function tu(t, e, r, a) {
  return (e = so(t, e, r)), e < r && e++, e;
}
function zC(t, e, r) {
  let a = -1,
    o = -1,
    n = -1,
    i = e,
    s = i;
  for (; i < r; ) {
    let l = t.charCodeAt(i++);
    if (l === 59) return s;
    l === 34 || l === 39
      ? (s = i = au(t, l, i, r))
      : e === i - 4 && n === 85 && o === 82 && a === 76 && l === 40
        ? (s = i = au(t, 41, i, r))
        : l > 32 && (s = i),
      (n = o),
      (o = a),
      (a = l & -33);
  }
  return s;
}
function au(t, e, r, a) {
  let o = -1,
    n = r;
  for (; n < a; ) {
    let i = t.charCodeAt(n++);
    if (i == e && o !== 92) return n;
    i == 92 && o === 92 ? (o = 0) : (o = i);
  }
  throw new Error();
}
function he(t, e, r) {
  let a = N(),
    o = fa();
  if (U1(a, o, e)) {
    let n = Te(),
      i = co();
    vn(n, i, a, t, e, a[Be], r, !1);
  }
  return he;
}
function z4(t, e, r, a, o) {
  let n = e.inputs,
    i = o ? 'class' : 'style';
  b6(t, r, n[i], i, a);
}
function i0(t, e, r) {
  return $f(t, e, r, !1), i0;
}
function we(t, e) {
  return $f(t, e, null, !0), we;
}
function Yj(t) {
  _6(Kf, AC, t, !1);
}
function AC(t, e) {
  for (let r = bC(e); r >= 0; r = jf(e, r)) Kf(t, Rf(e), MC(e));
}
function Uj(t) {
  _6(EC, Uf, t, !0);
}
function Uf(t, e) {
  for (let r = yC(e); r >= 0; r = qf(e, r)) un(t, Rf(e), !0);
}
function $f(t, e, r, a) {
  let o = N(),
    n = Te(),
    i = xi(2);
  if ((n.firstUpdatePass && Gf(n, t, i, a), e !== D1 && U1(o, i, e))) {
    let s = n.data[o0()];
    Zf(n, s, o, o[Be], t, (o[i + 1] = kC(e, r)), a, i);
  }
}
function _6(t, e, r, a) {
  let o = Te(),
    n = xi(2);
  o.firstUpdatePass && Gf(o, null, n, a);
  let i = N();
  if (r !== D1 && U1(i, n, r)) {
    let s = o.data[o0()];
    if (Qf(s, a) && !Wf(o, n)) {
      let l = a ? s.classesWithoutHost : s.stylesWithoutHost;
      l !== null && (r = H3(l, r || '')), z4(o, s, i, r, a);
    } else TC(o, s, i, i[Be], i[n + 1], (i[n + 1] = HC(t, e, r)), a, n);
  }
}
function Wf(t, e) {
  return e >= t.expandoStartIndex;
}
function Gf(t, e, r, a) {
  let o = t.data;
  if (o[r + 1] === null) {
    let n = o[o0()],
      i = Wf(t, r);
    Qf(n, a) && e === null && !i && (e = !1),
      (e = SC(o, n, e, a)),
      gC(o, n, e, r, i, a);
  }
}
function SC(t, e, r, a) {
  let o = a6(t),
    n = a ? e.residualClasses : e.residualStyles;
  if (o === null)
    (a ? e.classBindings : e.styleBindings) === 0 &&
      ((r = A3(null, t, e, r, a)), (r = hn(r, e.attrs, a)), (n = null));
  else {
    let i = e.directiveStylingLast;
    if (i === -1 || t[i] !== o)
      if (((r = A3(o, t, e, r, a)), n === null)) {
        let l = VC(t, e, a);
        l !== void 0 &&
          Array.isArray(l) &&
          ((l = A3(null, t, e, l[1], a)),
          (l = hn(l, e.attrs, a)),
          DC(t, e, a, l));
      } else n = _C(t, e, a);
  }
  return (
    n !== void 0 && (a ? (e.residualClasses = n) : (e.residualStyles = n)), r
  );
}
function VC(t, e, r) {
  let a = r ? e.classBindings : e.styleBindings;
  if (io(a) !== 0) return t[lr(a)];
}
function DC(t, e, r, a) {
  let o = r ? e.classBindings : e.styleBindings;
  t[lr(o)] = a;
}
function _C(t, e, r) {
  let a,
    o = e.directiveEnd;
  for (let n = 1 + e.directiveStylingLast; n < o; n++) {
    let i = t[n].hostAttrs;
    a = hn(a, i, r);
  }
  return hn(a, e.attrs, r);
}
function A3(t, e, r, a, o) {
  let n = null,
    i = r.directiveEnd,
    s = r.directiveStylingLast;
  for (
    s === -1 ? (s = r.directiveStart) : s++;
    s < i && ((n = e[s]), (a = hn(a, n.hostAttrs, o)), n !== t);

  )
    s++;
  return t !== null && (r.directiveStylingLast = s), a;
}
function hn(t, e, r) {
  let a = r ? 1 : 2,
    o = -1;
  if (e !== null)
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      typeof i == 'number'
        ? (o = i)
        : o === a &&
          (Array.isArray(t) || (t = t === void 0 ? [] : ['', t]),
          un(t, i, r ? !0 : e[++n]));
    }
  return t === void 0 ? null : t;
}
function HC(t, e, r) {
  if (r == null || r === '') return q1;
  let a = [],
    o = tt(r);
  if (Array.isArray(o)) for (let n = 0; n < o.length; n++) t(a, o[n], !0);
  else if (typeof o == 'object')
    for (let n in o) o.hasOwnProperty(n) && t(a, n, o[n]);
  else typeof o == 'string' && e(a, o);
  return a;
}
function Kf(t, e, r) {
  un(t, e, tt(r));
}
function EC(t, e, r) {
  let a = String(e);
  a !== '' && !a.includes(' ') && un(t, a, r);
}
function TC(t, e, r, a, o, n, i, s) {
  o === D1 && (o = q1);
  let l = 0,
    c = 0,
    h = 0 < o.length ? o[0] : null,
    d = 0 < n.length ? n[0] : null;
  for (; h !== null || d !== null; ) {
    let u = l < o.length ? o[l + 1] : void 0,
      p = c < n.length ? n[c + 1] : void 0,
      f = null,
      x;
    h === d
      ? ((l += 2), (c += 2), u !== p && ((f = d), (x = p)))
      : d === null || (h !== null && h < d)
        ? ((l += 2), (f = h))
        : ((c += 2), (f = d), (x = p)),
      f !== null && Zf(t, e, r, a, f, x, i, s),
      (h = l < o.length ? o[l] : null),
      (d = c < n.length ? n[c] : null);
  }
}
function Zf(t, e, r, a, o, n, i, s) {
  if (!(e.type & 3)) return;
  let l = t.data,
    c = l[s + 1],
    h = vC(c) ? ru(l, e, r, o, io(c), i) : void 0;
  if (!ai(h)) {
    ai(n) || (fC(c) && (n = ru(l, null, r, o, s, i)));
    let d = $u(o0(), r);
    Hb(a, i, d, o, n);
  }
}
function ru(t, e, r, a, o, n) {
  let i = e === null,
    s;
  for (; o > 0; ) {
    let l = t[o],
      c = Array.isArray(l),
      h = c ? l[1] : l,
      d = h === null,
      u = r[o + 1];
    u === D1 && (u = d ? q1 : void 0);
    let p = d ? g3(u, a) : h === a ? u : void 0;
    if ((c && !ai(p) && (p = g3(l, a)), ai(p) && ((s = p), i))) return s;
    let f = t[o + 1];
    o = i ? lr(f) : io(f);
  }
  if (e !== null) {
    let l = n ? e.residualClasses : e.residualStyles;
    l != null && (s = g3(l, a));
  }
  return s;
}
function ai(t) {
  return t !== void 0;
}
function kC(t, e) {
  return (
    t == null ||
      t === '' ||
      (typeof e == 'string'
        ? (t = t + e)
        : typeof t == 'object' && (t = L1(tt(t)))),
    t
  );
}
function Qf(t, e) {
  return (t.flags & (e ? 8 : 16)) !== 0;
}
function $j(t, e, r) {
  let a = N(),
    o = D6(a, t, e, r);
  _6(un, Uf, o, !0);
}
function Wj() {
  return N()[j1][b1];
}
var A4 = class {
  destroy(e) {}
  updateValue(e, r) {}
  swap(e, r) {
    let a = Math.min(e, r),
      o = Math.max(e, r),
      n = this.detach(o);
    if (o - a > 1) {
      let i = this.detach(a);
      this.attach(a, n), this.attach(o, i);
    } else this.attach(a, n);
  }
  move(e, r) {
    this.attach(r, this.detach(e));
  }
};
function S3(t, e, r, a, o) {
  return t === r && Object.is(e, a) ? 1 : Object.is(o(t, e), o(r, a)) ? -1 : 0;
}
function LC(t, e, r) {
  let a,
    o,
    n = 0,
    i = t.length - 1,
    s = void 0;
  if (Array.isArray(e)) {
    let l = e.length - 1;
    for (; n <= i && n <= l; ) {
      let c = t.at(n),
        h = e[n],
        d = S3(n, c, n, h, r);
      if (d !== 0) {
        d < 0 && t.updateValue(n, h), n++;
        continue;
      }
      let u = t.at(i),
        p = e[l],
        f = S3(i, u, l, p, r);
      if (f !== 0) {
        f < 0 && t.updateValue(i, p), i--, l--;
        continue;
      }
      let x = r(n, c),
        b = r(i, u),
        z = r(n, h);
      if (Object.is(z, b)) {
        let L = r(l, p);
        Object.is(L, x)
          ? (t.swap(n, i), t.updateValue(i, p), l--, i--)
          : t.move(i, n),
          t.updateValue(n, h),
          n++;
        continue;
      }
      if (((a ??= new ri()), (o ??= nu(t, n, i, r)), S4(t, a, n, z)))
        t.updateValue(n, h), n++, i++;
      else if (o.has(z)) a.set(x, t.detach(n)), i--;
      else {
        let L = t.create(n, e[n]);
        t.attach(n, L), n++, i++;
      }
    }
    for (; n <= l; ) ou(t, a, r, n, e[n]), n++;
  } else if (e != null) {
    let l = e[Symbol.iterator](),
      c = l.next();
    for (; !c.done && n <= i; ) {
      let h = t.at(n),
        d = c.value,
        u = S3(n, h, n, d, r);
      if (u !== 0) u < 0 && t.updateValue(n, d), n++, (c = l.next());
      else {
        (a ??= new ri()), (o ??= nu(t, n, i, r));
        let p = r(n, d);
        if (S4(t, a, n, p)) t.updateValue(n, d), n++, i++, (c = l.next());
        else if (!o.has(p))
          t.attach(n, t.create(n, d)), n++, i++, (c = l.next());
        else {
          let f = r(n, h);
          a.set(f, t.detach(n)), i--;
        }
      }
    }
    for (; !c.done; ) ou(t, a, r, t.length, c.value), (c = l.next());
  }
  for (; n <= i; ) t.destroy(t.detach(i--));
  a?.forEach(l => {
    t.destroy(l);
  });
}
function S4(t, e, r, a) {
  return e !== void 0 && e.has(a)
    ? (t.attach(r, e.get(a)), e.delete(a), !0)
    : !1;
}
function ou(t, e, r, a, o) {
  if (S4(t, e, a, r(a, o))) t.updateValue(a, o);
  else {
    let n = t.create(a, o);
    t.attach(a, n);
  }
}
function nu(t, e, r, a) {
  let o = new Set();
  for (let n = e; n <= r; n++) o.add(a(n, t.at(n)));
  return o;
}
var ri = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(e) {
    return this.kvMap.has(e);
  }
  delete(e) {
    if (!this.has(e)) return !1;
    let r = this.kvMap.get(e);
    return (
      this._vMap !== void 0 && this._vMap.has(r)
        ? (this.kvMap.set(e, this._vMap.get(r)), this._vMap.delete(r))
        : this.kvMap.delete(e),
      !0
    );
  }
  get(e) {
    return this.kvMap.get(e);
  }
  set(e, r) {
    if (this.kvMap.has(e)) {
      let a = this.kvMap.get(e);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(a); ) a = o.get(a);
      o.set(a, r);
    } else this.kvMap.set(e, r);
  }
  forEach(e) {
    for (let [r, a] of this.kvMap)
      if ((e(a, r), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(a); ) (a = o.get(a)), e(a, r);
      }
  }
};
function Ae(t, e) {
  mt('NgControlFlow');
  let r = N(),
    a = fa(),
    o = r[a] !== D1 ? r[a] : -1,
    n = o !== -1 ? oi(r, c1 + o) : void 0,
    i = 0;
  if (U1(r, a, t)) {
    let s = ce(null);
    try {
      if ((n !== void 0 && wf(n, i), t !== -1)) {
        let l = c1 + t,
          c = oi(r, l),
          h = H4(r[Z], l),
          d = ro(c, h.tView.ssrId),
          u = gn(r, h, e, { dehydratedView: d });
        wn(c, u, i, ao(h, d));
      }
    } finally {
      ce(s);
    }
  } else if (n !== void 0) {
    let s = gf(n, i);
    s !== void 0 && (s[b1] = e);
  }
}
var V4 = class {
  constructor(e, r, a) {
    (this.lContainer = e), (this.$implicit = r), (this.$index = a);
  }
  get $count() {
    return this.lContainer.length - A1;
  }
};
function Gj(t) {
  return t;
}
function Kj(t, e) {
  return e;
}
var D4 = class {
  constructor(e, r, a) {
    (this.hasEmptyBlock = e), (this.trackByFn = r), (this.liveCollection = a);
  }
};
function Zj(t, e, r, a, o, n, i, s, l, c, h, d, u) {
  mt('NgControlFlow');
  let p = N(),
    f = Te(),
    x = l !== void 0,
    b = N(),
    z = s ? i.bind(b[j1][b1]) : i,
    L = new D4(x, z);
  (b[c1 + t] = L),
    ti(p, f, t + 1, e, r, a, o, ca(f.consts, n)),
    x && ti(p, f, t + 2, l, c, h, d, ca(f.consts, u));
}
var _4 = class extends A4 {
  constructor(e, r, a) {
    super(),
      (this.lContainer = e),
      (this.hostLView = r),
      (this.templateTNode = a),
      (this.operationsCounter = void 0),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - A1;
  }
  at(e) {
    return this.getLView(e)[b1].$implicit;
  }
  attach(e, r) {
    let a = r[Jr];
    (this.needsIndexUpdate ||= e !== this.length),
      wn(this.lContainer, r, e, ao(this.templateTNode, a));
  }
  detach(e) {
    return (
      (this.needsIndexUpdate ||= e !== this.length - 1), IC(this.lContainer, e)
    );
  }
  create(e, r) {
    let a = ro(this.lContainer, this.templateTNode.tView.ssrId),
      o = gn(
        this.hostLView,
        this.templateTNode,
        new V4(this.lContainer, r, e),
        { dehydratedView: a },
      );
    return this.operationsCounter?.recordCreate(), o;
  }
  destroy(e) {
    Ai(e[Z], e), this.operationsCounter?.recordDestroy();
  }
  updateValue(e, r) {
    this.getLView(e)[b1].$implicit = r;
  }
  reset() {
    (this.needsIndexUpdate = !1), this.operationsCounter?.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let e = 0; e < this.length; e++) this.getLView(e)[b1].$index = e;
  }
  getLView(e) {
    return PC(this.lContainer, e);
  }
};
function Qj(t) {
  let e = ce(null),
    r = o0();
  try {
    let a = N(),
      o = a[Z],
      n = a[r],
      i = r + 1,
      s = oi(a, i);
    if (n.liveCollection === void 0) {
      let c = H4(o, i);
      n.liveCollection = new _4(s, a, c);
    } else n.liveCollection.reset();
    let l = n.liveCollection;
    if ((LC(l, t, n.trackByFn), l.updateIndexes(), n.hasEmptyBlock)) {
      let c = fa(),
        h = l.length === 0;
      if (U1(a, c, h)) {
        let d = r + 2,
          u = oi(a, d);
        if (h) {
          let p = H4(o, d),
            f = ro(u, p.tView.ssrId),
            x = gn(a, p, void 0, { dehydratedView: f });
          wn(u, x, 0, ao(p, f));
        } else wf(u, 0);
      }
    }
  } finally {
    ce(e);
  }
}
function oi(t, e) {
  return t[e];
}
function IC(t, e) {
  return ln(t, e);
}
function PC(t, e) {
  return gf(t, e);
}
function H4(t, e) {
  return X4(t, e);
}
function BC(t, e, r, a, o, n) {
  let i = e.consts,
    s = ca(i, o),
    l = uo(e, t, 2, a, s);
  return (
    y6(e, r, l, ca(i, n)),
    l.attrs !== null && Q2(l, l.attrs, !1),
    l.mergedAttrs !== null && Q2(l, l.mergedAttrs, !0),
    e.queries !== null && e.queries.elementStart(e, l),
    l
  );
}
function Xe(t, e, r, a) {
  let o = N(),
    n = Te(),
    i = c1 + t,
    s = o[Be],
    l = n.firstCreatePass ? BC(i, n, o, e, r, a) : n.data[i],
    c = OC(n, o, l, s, e, t);
  o[i] = c;
  let h = mi(l);
  return (
    ur(l, !0),
    tf(s, c, l),
    !sC(l) && Mi() && Si(n, o, c, l),
    GM() === 0 && ha(c, o),
    KM(),
    h && (w6(n, o, l), g6(n, l, o)),
    a !== null && x6(o, l),
    Xe
  );
}
function Je() {
  let t = m1();
  e6() ? t6() : ((t = t.parent), ur(t, !1));
  let e = t;
  QM(e) && XM(), ZM();
  let r = Te();
  return (
    r.firstCreatePass && (bi(r, t), Q4(t) && r.queries.elementEnd(t)),
    e.classesWithoutHost != null &&
      dy(e) &&
      z4(r, e, N(), e.classesWithoutHost, !0),
    e.stylesWithoutHost != null &&
      uy(e) &&
      z4(r, e, N(), e.stylesWithoutHost, !1),
    Je
  );
}
function Le(t, e, r, a) {
  return Xe(t, e, r, a), Je(), Le;
}
var OC = (t, e, r, a, o, n) => (yi(!0), Up(a, o, sy()));
function NC(t, e, r, a, o) {
  let n = e.consts,
    i = ca(n, a),
    s = uo(e, t, 8, 'ng-container', i);
  i !== null && Q2(s, i, !0);
  let l = ca(n, o);
  return y6(e, r, s, l), e.queries !== null && e.queries.elementStart(e, s), s;
}
function s0(t, e, r) {
  let a = N(),
    o = Te(),
    n = t + c1,
    i = o.firstCreatePass ? NC(n, o, a, e, r) : o.data[n];
  ur(i, !0);
  let s = qC(o, a, i, t);
  return (
    (a[n] = s),
    Mi() && Si(o, a, s, i),
    ha(s, a),
    mi(i) && (w6(o, a, i), g6(o, i, a)),
    r != null && x6(a, i),
    s0
  );
}
function l0() {
  let t = m1(),
    e = Te();
  return (
    e6() ? t6() : ((t = t.parent), ur(t, !1)),
    e.firstCreatePass && (bi(e, t), Q4(t) && e.queries.elementEnd(t)),
    l0
  );
}
function RC(t, e, r) {
  return s0(t, e, r), l0(), RC;
}
var qC = (t, e, r, a) => (yi(!0), gb(e[Be], ''));
function B0() {
  return N();
}
function jC(t, e, r) {
  let a = N(),
    o = fa();
  if (U1(a, o, e)) {
    let n = Te(),
      i = co();
    vn(n, i, a, t, e, a[Be], r, !0);
  }
  return jC;
}
function YC(t, e, r) {
  let a = N(),
    o = fa();
  if (U1(a, o, e)) {
    let n = Te(),
      i = co(),
      s = a6(n.data),
      l = mf(s, i, a);
    vn(n, i, a, t, e, l, r, !0);
  }
  return YC;
}
var Ka = void 0;
function UC(t) {
  let e = t,
    r = Math.floor(Math.abs(t)),
    a = t.toString().replace(/^[^.]*\.?/, '').length;
  return r === 1 && a === 0 ? 1 : 5;
}
var $C = [
    'en',
    [['a', 'p'], ['AM', 'PM'], Ka],
    [['AM', 'PM'], Ka, Ka],
    [
      ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    ],
    Ka,
    [
      ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    ],
    Ka,
    [
      ['B', 'A'],
      ['BC', 'AD'],
      ['Before Christ', 'Anno Domini'],
    ],
    0,
    [6, 0],
    ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
    ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
    ['{1}, {0}', Ka, "{1} 'at' {0}", Ka],
    ['.', ',', ';', '%', '+', '-', 'E', '\xD7', '\u2030', '\u221E', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '\xA4#,##0.00', '#E0'],
    'USD',
    '$',
    'US Dollar',
    {},
    'ltr',
    UC,
  ],
  V3 = {};
function vt(t) {
  let e = WC(t),
    r = iu(e);
  if (r) return r;
  let a = e.split('-')[0];
  if (((r = iu(a)), r)) return r;
  if (a === 'en') return $C;
  throw new y(701, !1);
}
function iu(t) {
  return (
    t in V3 ||
      (V3[t] =
        A0.ng &&
        A0.ng.common &&
        A0.ng.common.locales &&
        A0.ng.common.locales[t]),
    V3[t]
  );
}
var o1 = (function (t) {
  return (
    (t[(t.LocaleId = 0)] = 'LocaleId'),
    (t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
    (t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
    (t[(t.DaysFormat = 3)] = 'DaysFormat'),
    (t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
    (t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
    (t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
    (t[(t.Eras = 7)] = 'Eras'),
    (t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
    (t[(t.WeekendRange = 9)] = 'WeekendRange'),
    (t[(t.DateFormat = 10)] = 'DateFormat'),
    (t[(t.TimeFormat = 11)] = 'TimeFormat'),
    (t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
    (t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
    (t[(t.NumberFormats = 14)] = 'NumberFormats'),
    (t[(t.CurrencyCode = 15)] = 'CurrencyCode'),
    (t[(t.CurrencySymbol = 16)] = 'CurrencySymbol'),
    (t[(t.CurrencyName = 17)] = 'CurrencyName'),
    (t[(t.Currencies = 18)] = 'Currencies'),
    (t[(t.Directionality = 19)] = 'Directionality'),
    (t[(t.PluralCase = 20)] = 'PluralCase'),
    (t[(t.ExtraData = 21)] = 'ExtraData'),
    t
  );
})(o1 || {});
function WC(t) {
  return t.toLowerCase().replace(/_/g, '-');
}
var ni = 'en-US';
var GC = ni;
function KC(t) {
  typeof t == 'string' && (GC = t.toLowerCase().replace(/_/g, '-'));
}
var ZC = (t, e, r) => {};
function e1(t, e, r, a) {
  let o = N(),
    n = Te(),
    i = m1();
  return H6(n, o, o[Be], i, t, e, a), e1;
}
function QC(t, e) {
  let r = m1(),
    a = N(),
    o = Te(),
    n = a6(o.data),
    i = mf(n, r, a);
  return H6(o, a, i, r, t, e), QC;
}
function XC(t, e, r, a) {
  let o = t.cleanup;
  if (o != null)
    for (let n = 0; n < o.length - 1; n += 2) {
      let i = o[n];
      if (i === r && o[n + 1] === a) {
        let s = e[B2],
          l = o[n + 2];
        return s.length > l ? s[l] : null;
      }
      typeof i == 'string' && (n += 2);
    }
  return null;
}
function H6(t, e, r, a, o, n, i) {
  let s = mi(a),
    c = t.firstCreatePass && ff(t),
    h = e[b1],
    d = pf(e),
    u = !0;
  if (a.type & 3 || i) {
    let x = ft(a, e),
      b = i ? i(x) : x,
      z = d.length,
      L = i ? U => i(Jt(U[a.index])) : a.index,
      oe = null;
    if ((!i && s && (oe = XC(t, e, o, a.index)), oe !== null)) {
      let U = oe.__ngLastListenerFn__ || oe;
      (U.__ngNextListenerFn__ = n), (oe.__ngLastListenerFn__ = n), (u = !1);
    } else {
      (n = lu(a, e, h, n)), ZC(x, o, n);
      let U = r.listen(b, o, n);
      d.push(n, U), c && c.push(o, L, z, z + 1);
    }
  } else n = lu(a, e, h, n);
  let p = a.outputs,
    f;
  if (u && p !== null && (f = p[o])) {
    let x = f.length;
    if (x)
      for (let b = 0; b < x; b += 2) {
        let z = f[b],
          L = f[b + 1],
          qe = e[z][L].subscribe(n),
          ue = d.length;
        d.push(n, qe), c && c.push(o, a.index, ue, -(ue + 1));
      }
  }
}
function su(t, e, r, a) {
  let o = ce(null);
  try {
    return Gt(6, e, r), r(a) !== !1;
  } catch (n) {
    return vf(t, n), !1;
  } finally {
    Gt(7, e, r), ce(o);
  }
}
function lu(t, e, r, a) {
  return function o(n) {
    if (n === Function) return a;
    let i = t.componentOffset > -1 ? ua(t.index, e) : e;
    z6(i, 5);
    let s = su(e, r, a, n),
      l = o.__ngNextListenerFn__;
    for (; l; ) (s = su(e, r, l, n) && s), (l = l.__ngNextListenerFn__);
    return s;
  };
}
function ae(t = 1) {
  return iy(t);
}
function JC(t, e) {
  let r = null,
    a = gM(t);
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    if (n === '*') {
      r = o;
      continue;
    }
    if (a === null ? Su(t, n, !0) : MM(a, n)) return o;
  }
  return r;
}
function gt(t) {
  let e = N()[j1][$1];
  if (!e.projection) {
    let r = t ? t.length : 1,
      a = (e.projection = lM(r, null)),
      o = a.slice(),
      n = e.child;
    for (; n !== null; ) {
      if (n.type !== 128) {
        let i = t ? JC(n, t) : 0;
        i !== null &&
          (o[i] ? (o[i].projectionNext = n) : (a[i] = n), (o[i] = n));
      }
      n = n.next;
    }
  }
}
function wt(t, e = 0, r, a, o, n) {
  let i = N(),
    s = Te(),
    l = a ? t + 1 : null;
  l !== null && ti(i, s, l, a, o, n, null, r);
  let c = uo(s, c1 + t, 16, null, r || null);
  c.projection === null && (c.projection = e), t6();
  let d = !i[Jr] || Xu();
  i[j1][$1].projection[c.projection] === null && l !== null
    ? ez(i, s, l)
    : d && (c.flags & 32) !== 32 && Db(s, i, c);
}
function ez(t, e, r) {
  let a = c1 + r,
    o = e.data[a],
    n = t[a],
    i = ro(n, o.tView.ssrId),
    s = gn(t, o, void 0, { dehydratedView: i });
  wn(n, s, 0, ao(o, i));
}
function tz(t, e, r) {
  return Xf(t, '', e, '', r), tz;
}
function Xf(t, e, r, a, o) {
  let n = N(),
    i = D6(n, e, r, a);
  if (i !== D1) {
    let s = Te(),
      l = co();
    vn(s, l, n, t, i, n[Be], o, !1);
  }
  return Xf;
}
function Mn(t, e, r, a) {
  GF(t, e, r, a);
}
function rt(t, e, r) {
  WF(t, e, r);
}
function v1(t) {
  let e = N(),
    r = Te(),
    a = ap();
  r6(a + 1);
  let o = A6(r, a);
  if (t.dirty && YM(e) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) t.reset([]);
    else {
      let n = QF(e, a);
      t.reset(n, Ty), t.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function g1() {
  return $F(N(), ap());
}
function az(t, e, r, a) {
  r >= t.data.length && ((t.data[r] = null), (t.blueprint[r] = null)),
    (e[r] = a);
}
function va(t) {
  let e = ey();
  return vi(e, c1 + t);
}
function c0(t, e = '') {
  let r = N(),
    a = Te(),
    o = t + c1,
    n = a.firstCreatePass ? uo(a, o, 1, e, null) : a.data[o],
    i = rz(a, r, n, e, t);
  (r[o] = i), Mi() && Si(a, r, i, n), ur(n, !1);
}
var rz = (t, e, r, a, o) => (yi(!0), mb(e[Be], a));
function yn(t) {
  return ga('', t, ''), yn;
}
function ga(t, e, r) {
  let a = N(),
    o = D6(a, t, e, r);
  return o !== D1 && F6(a, o0(), o), ga;
}
function oz(t, e, r, a, o) {
  let n = N(),
    i = uC(n, t, e, r, a, o);
  return i !== D1 && F6(n, o0(), i), oz;
}
function nz(t, e, r, a, o, n, i) {
  let s = N(),
    l = pC(s, t, e, r, a, o, n, i);
  return l !== D1 && F6(s, o0(), l), nz;
}
function iz(t, e, r) {
  kf(e) && (e = e());
  let a = N(),
    o = fa();
  if (U1(a, o, e)) {
    let n = Te(),
      i = co();
    vn(n, i, a, t, e, a[Be], r, !1);
  }
  return iz;
}
function Xj(t, e) {
  let r = kf(t);
  return r && t.set(e), r;
}
function sz(t, e) {
  let r = N(),
    a = Te(),
    o = m1();
  return H6(a, r, r[Be], o, t, e), sz;
}
function lz(t, e, r) {
  let a = Te();
  if (a.firstCreatePass) {
    let o = D0(t);
    E4(r, a.data, a.blueprint, o, !0), E4(e, a.data, a.blueprint, o, !1);
  }
}
function E4(t, e, r, a, o) {
  if (((t = k1(t)), Array.isArray(t)))
    for (let n = 0; n < t.length; n++) E4(t[n], e, r, a, o);
  else {
    let n = Te(),
      i = N(),
      s = m1(),
      l = Xr(t) ? t : k1(t.provide),
      c = Pu(t),
      h = s.providerIndexes & 1048575,
      d = s.directiveStart,
      u = s.providerIndexes >> 20;
    if (Xr(t) || !t.multi) {
      let p = new or(c, o, v),
        f = _3(l, e, o ? h : h + u, d);
      f === -1
        ? (U3(Y2(s, i), n, l),
          D3(n, t, e.length),
          e.push(l),
          s.directiveStart++,
          s.directiveEnd++,
          o && (s.providerIndexes += 1048576),
          r.push(p),
          i.push(p))
        : ((r[f] = p), (i[f] = p));
    } else {
      let p = _3(l, e, h + u, d),
        f = _3(l, e, h, h + u),
        x = p >= 0 && r[p],
        b = f >= 0 && r[f];
      if ((o && !b) || (!o && !x)) {
        U3(Y2(s, i), n, l);
        let z = dz(o ? hz : cz, r.length, o, a, c);
        !o && b && (r[f].providerFactory = z),
          D3(n, t, e.length, 0),
          e.push(l),
          s.directiveStart++,
          s.directiveEnd++,
          o && (s.providerIndexes += 1048576),
          r.push(z),
          i.push(z);
      } else {
        let z = Jf(r[o ? f : p], c, !o && a);
        D3(n, t, p > -1 ? p : f, z);
      }
      !o && a && b && r[f].componentProviders++;
    }
  }
}
function D3(t, e, r, a) {
  let o = Xr(e),
    n = HM(e);
  if (o || n) {
    let l = (n ? k1(e.useClass) : e).prototype.ngOnDestroy;
    if (l) {
      let c = t.destroyHooks || (t.destroyHooks = []);
      if (!o && e.multi) {
        let h = c.indexOf(r);
        h === -1 ? c.push(r, [a, l]) : c[h + 1].push(a, l);
      } else c.push(r, l);
    }
  }
}
function Jf(t, e, r) {
  return r && t.componentProviders++, t.multi.push(e) - 1;
}
function _3(t, e, r, a) {
  for (let o = r; o < a; o++) if (e[o] === t) return o;
  return -1;
}
function cz(t, e, r, a) {
  return T4(this.multi, []);
}
function hz(t, e, r, a) {
  let o = this.multi,
    n;
  if (this.providerFactory) {
    let i = this.providerFactory.componentProviders,
      s = nr(r, r[Z], this.providerFactory.index, a);
    (n = s.slice(0, i)), T4(o, n);
    for (let l = i; l < s.length; l++) n.push(s[l]);
  } else (n = []), T4(o, n);
  return n;
}
function T4(t, e) {
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    e.push(a());
  }
  return e;
}
function dz(t, e, r, a, o) {
  let n = new or(t, r, v);
  return (
    (n.multi = []),
    (n.index = e),
    (n.componentProviders = 0),
    Jf(n, o, a && !r),
    n
  );
}
function h1(t, e = []) {
  return r => {
    r.providersResolver = (a, o) => lz(a, o ? o(t) : t, e);
  };
}
var uz = (() => {
  let e = class e {
    constructor(a) {
      (this._injector = a), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(a) {
      if (!a.standalone) return null;
      if (!this.cachedInjectors.has(a)) {
        let o = ku(!1, a.type),
          n =
            o.length > 0
              ? Ei([o], this._injector, `Standalone[${a.type.name}]`)
              : null;
        this.cachedInjectors.set(a, n);
      }
      return this.cachedInjectors.get(a);
    }
    ngOnDestroy() {
      try {
        for (let a of this.cachedInjectors.values()) a !== null && a.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  e.ɵprov = w({
    token: e,
    providedIn: 'environment',
    factory: () => new e(g(F1)),
  });
  let t = e;
  return t;
})();
function t1(t) {
  mt('NgStandalone'),
    (t.getStandaloneInjector = e => e.get(uz).getOrCreateStandaloneInjector(t));
}
function Jj(t, e, r) {
  let a = pa() + t,
    o = N();
  return o[a] === D1 ? xn(o, a, r ? e.call(r) : e()) : If(o, a);
}
function em(t, e, r, a) {
  return tm(N(), pa(), t, e, r, a);
}
function eY(t, e, r, a, o) {
  return am(N(), pa(), t, e, r, a, o);
}
function tY(t, e, r, a, o, n) {
  return rm(N(), pa(), t, e, r, a, o, n);
}
function aY(t, e, r, a, o, n, i, s, l) {
  let c = pa() + t,
    h = N(),
    d = iC(h, c, r, a, o, n);
  return no(h, c + 4, i, s) || d
    ? xn(h, c + 6, l ? e.call(l, r, a, o, n, i, s) : e(r, a, o, n, i, s))
    : If(h, c + 6);
}
function E6(t, e) {
  let r = t[e];
  return r === D1 ? void 0 : r;
}
function tm(t, e, r, a, o, n) {
  let i = e + r;
  return U1(t, i, o) ? xn(t, i + 1, n ? a.call(n, o) : a(o)) : E6(t, i + 1);
}
function am(t, e, r, a, o, n, i) {
  let s = e + r;
  return no(t, s, o, n)
    ? xn(t, s + 2, i ? a.call(i, o, n) : a(o, n))
    : E6(t, s + 2);
}
function rm(t, e, r, a, o, n, i, s) {
  let l = e + r;
  return Pf(t, l, o, n, i)
    ? xn(t, l + 3, s ? a.call(s, o, n, i) : a(o, n, i))
    : E6(t, l + 3);
}
function rY(t, e) {
  let r = Te(),
    a,
    o = t + c1;
  r.firstCreatePass
    ? ((a = pz(e, r.pipeRegistry)),
      (r.data[o] = a),
      a.onDestroy && (r.destroyHooks ??= []).push(o, a.onDestroy))
    : (a = r.data[o]);
  let n = a.factory || (a.factory = Ja(a.type, !0)),
    i,
    s = R1(v);
  try {
    let l = j2(!1),
      c = n();
    return j2(l), az(r, N(), o, c), c;
  } finally {
    R1(s);
  }
}
function pz(t, e) {
  if (e)
    for (let r = e.length - 1; r >= 0; r--) {
      let a = e[r];
      if (t === a.name) return a;
    }
}
function oY(t, e, r) {
  let a = t + c1,
    o = N(),
    n = vi(o, a);
  return T6(o, a) ? tm(o, pa(), e, n.transform, r, n) : n.transform(r);
}
function nY(t, e, r, a) {
  let o = t + c1,
    n = N(),
    i = vi(n, o);
  return T6(n, o) ? am(n, pa(), e, i.transform, r, a, i) : i.transform(r, a);
}
function iY(t, e, r, a, o) {
  let n = t + c1,
    i = N(),
    s = vi(i, n);
  return T6(i, n)
    ? rm(i, pa(), e, s.transform, r, a, o, s)
    : s.transform(r, a, o);
}
function T6(t, e) {
  return t[Z].data[e].pure;
}
function pr(t, e) {
  return Hi(t, e);
}
var cr = class {
    constructor(e) {
      this.full = e;
      let r = e.split('.');
      (this.major = r[0]),
        (this.minor = r[1]),
        (this.patch = r.slice(2).join('.'));
    }
  },
  sY = new cr('18.2.3');
var Ti = (() => {
  let e = class e {
    log(a) {
      console.log(a);
    }
    warn(a) {
      console.warn(a);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'platform' }));
  let t = e;
  return t;
})();
var om = new F('');
function wa(t) {
  return !!t && typeof t.then == 'function';
}
function k6(t) {
  return !!t && typeof t.subscribe == 'function';
}
var ki = new F(''),
  nm = (() => {
    let e = class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((a, o) => {
            (this.resolve = a), (this.reject = o);
          })),
          (this.appInits = m(ki, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let a = [];
        for (let n of this.appInits) {
          let i = n();
          if (wa(i)) a.push(i);
          else if (k6(i)) {
            let s = new Promise((l, c) => {
              i.subscribe({ complete: l, error: c });
            });
            a.push(s);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(a)
          .then(() => {
            o();
          })
          .catch(n => {
            this.reject(n);
          }),
          a.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  bn = new F('');
function fz() {
  P7(() => {
    throw new y(600, !1);
  });
}
function mz(t) {
  return t.isBoundToModule;
}
var vz = 10;
function gz(t, e, r) {
  try {
    let a = r();
    return wa(a)
      ? a.catch(o => {
          throw (e.runOutsideAngular(() => t.handleError(o)), o);
        })
      : a;
  } catch (a) {
    throw (e.runOutsideAngular(() => t.handleError(a)), a);
  }
}
var h0 = (() => {
  let e = class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = m(Hy)),
        (this.afterRenderManager = m(Bf)),
        (this.zonelessEnabled = m(zf)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new C()),
        (this.afterTick = new C()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = m(T0).hasPendingTasks.pipe(I(a => !a))),
        (this._injector = m(F1));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let a;
      return new Promise(o => {
        a = this.isStable.subscribe({
          next: n => {
            n && o();
          },
        });
      }).finally(() => {
        a.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(a, o) {
      let n = a instanceof Z2;
      if (!this._injector.get(nm).done) {
        let p = !n && _u(a),
          f = !1;
        throw new y(405, f);
      }
      let s;
      n ? (s = a) : (s = this._injector.get(a0).resolveComponentFactory(a)),
        this.componentTypes.push(s.componentType);
      let l = mz(s) ? void 0 : this._injector.get(da),
        c = o || s.selector,
        h = s.create(Oe.NULL, [], c, l),
        d = h.location.nativeElement,
        u = h.injector.get(om, null);
      return (
        u?.registerApplication(d),
        h.onDestroy(() => {
          this.detachView(h.hostView),
            E2(this.components, h),
            u?.unregisterApplication(d);
        }),
        this._loadComponent(h),
        h
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new y(101, !1);
      let a = ce(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        (this._runningTick = !1), ce(a), this.afterTick.next();
      }
    }
    synchronize() {
      let a = null;
      this._injector.destroyed ||
        (a = this._injector.get(Y1, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < vz; ) this.synchronizeOnce(a);
    }
    synchronizeOnce(a) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let o = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(o);
        for (let { _lView: n, notifyErrorHandler: i } of this._views)
          wz(n, i, o, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else a?.begin?.(), a?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: a }) => gi(a))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(a) {
      let o = a;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(a) {
      let o = a;
      E2(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(a) {
      this.attachView(a.hostView), this.tick(), this.components.push(a);
      let o = this._injector.get(bn, []);
      [...this._bootstrapListeners, ...o].forEach(n => n(a));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach(a => a()),
            this._views.slice().forEach(a => a.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(a) {
      return (
        this._destroyListeners.push(a), () => E2(this._destroyListeners, a)
      );
    }
    destroy() {
      if (this._destroyed) throw new y(406, !1);
      let a = this._injector;
      a.destroy && !a.destroyed && a.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
function E2(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function wz(t, e, r, a) {
  if (!r && !gi(t)) return;
  yf(t, e, r && !a ? 0 : 1);
}
var k4 = class {
    constructor(e, r) {
      (this.ngModuleFactory = e), (this.componentFactories = r);
    }
  },
  Li = (() => {
    let e = class e {
      compileModuleSync(a) {
        return new M4(a);
      }
      compileModuleAsync(a) {
        return Promise.resolve(this.compileModuleSync(a));
      }
      compileModuleAndAllComponentsSync(a) {
        let o = this.compileModuleSync(a),
          n = Hu(a),
          i = jp(n.declarations).reduce((s, l) => {
            let c = S0(l);
            return c && s.push(new sr(c)), s;
          }, []);
        return new k4(o, i);
      }
      compileModuleAndAllComponentsAsync(a) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(a));
      }
      clearCache() {}
      clearCacheFor(a) {}
      getModuleId(a) {}
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var xz = (() => {
  let e = class e {
    constructor() {
      (this.zone = m(T)),
        (this.changeDetectionScheduler = m(oo)),
        (this.applicationRef = m(h0));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.changeDetectionScheduler.runningTick ||
                this.zone.run(() => {
                  this.applicationRef.tick();
                });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
function Mz({
  ngZoneFactory: t,
  ignoreChangesOutsideZone: e,
  scheduleInRootZone: r,
}) {
  return (
    (t ??= () => new T(Q(M({}, yz()), { scheduleInRootZone: r }))),
    [
      { provide: T, useFactory: t },
      {
        provide: Qr,
        multi: !0,
        useFactory: () => {
          let a = m(xz, { optional: !0 });
          return () => a.initialize();
        },
      },
      {
        provide: Qr,
        multi: !0,
        useFactory: () => {
          let a = m(bz);
          return () => {
            a.initialize();
          };
        },
      },
      e === !0 ? { provide: Af, useValue: !0 } : [],
      { provide: Sf, useValue: r ?? Mp },
    ]
  );
}
function yz(t) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: t?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: t?.runCoalescing ?? !1,
  };
}
var bz = (() => {
  let e = class e {
    constructor() {
      (this.subscription = new se()),
        (this.initialized = !1),
        (this.zone = m(T)),
        (this.pendingTasks = m(T0));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let a = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (a = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              T.assertNotInAngularZone(),
                queueMicrotask(() => {
                  a !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(a), (a = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            T.assertInAngularZone(), (a ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var Fz = (() => {
  let e = class e {
    constructor() {
      (this.appRef = m(h0)),
        (this.taskService = m(T0)),
        (this.ngZone = m(T)),
        (this.zonelessEnabled = m(zf)),
        (this.disableScheduling = m(Af, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new se()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get($2)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (m(Sf, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Z3 || !this.zoneIsDefined));
    }
    notify(a) {
      if (!this.zonelessEnabled && a === 5) return;
      switch (a) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? Pd : yp;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick()),
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get($2 + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let a = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (o) {
        throw (this.taskService.remove(a), o);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        Pd(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(a);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let a = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(a);
      }
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
function Cz() {
  return (typeof $localize < 'u' && $localize.locale) || ni;
}
var Ii = new F('', {
  providedIn: 'root',
  factory: () => m(Ii, ne.Optional | ne.SkipSelf) || Cz(),
});
var im = new F('');
function A2(t) {
  return !!t.platformInjector;
}
function zz(t) {
  let e = A2(t) ? t.r3Injector : t.moduleRef.injector,
    r = e.get(T);
  return r.run(() => {
    A2(t)
      ? t.r3Injector.resolveInjectorInitializers()
      : t.moduleRef.resolveInjectorInitializers();
    let a = e.get(e0, null),
      o;
    if (
      (r.runOutsideAngular(() => {
        o = r.onError.subscribe({
          next: n => {
            a.handleError(n);
          },
        });
      }),
      A2(t))
    ) {
      let n = () => e.destroy(),
        i = t.platformInjector.get(im);
      i.add(n),
        e.onDestroy(() => {
          o.unsubscribe(), i.delete(n);
        });
    } else
      t.moduleRef.onDestroy(() => {
        E2(t.allPlatformModules, t.moduleRef), o.unsubscribe();
      });
    return gz(a, r, () => {
      let n = e.get(nm);
      return (
        n.runInitializers(),
        n.donePromise.then(() => {
          let i = e.get(Ii, ni);
          if ((KC(i || ni), A2(t))) {
            let s = e.get(h0);
            return (
              t.rootComponent !== void 0 && s.bootstrap(t.rootComponent), s
            );
          } else return Az(t.moduleRef, t.allPlatformModules), t.moduleRef;
        })
      );
    });
  });
}
function Az(t, e) {
  let r = t.injector.get(h0);
  if (t._bootstrapComponents.length > 0)
    t._bootstrapComponents.forEach(a => r.bootstrap(a));
  else if (t.instance.ngDoBootstrap) t.instance.ngDoBootstrap(r);
  else throw new y(-403, !1);
  e.push(t);
}
var T2 = null;
function Sz(t = [], e) {
  return Oe.create({
    name: e,
    providers: [
      { provide: di, useValue: 'platform' },
      { provide: im, useValue: new Set([() => (T2 = null)]) },
      ...t,
    ],
  });
}
function Vz(t = []) {
  if (T2) return T2;
  let e = Sz(t);
  return (T2 = e), fz(), Dz(e), e;
}
function Dz(t) {
  t.get(h6, null)?.forEach(r => r());
}
function po() {
  return !1;
}
var _e = (() => {
  let e = class e {};
  e.__NG_ELEMENT_ID__ = _z;
  let t = e;
  return t;
})();
function _z(t) {
  return Hz(m1(), N(), (t & 16) === 16);
}
function Hz(t, e, r) {
  if (fi(t) && !r) {
    let a = ua(t.index, e);
    return new ir(a, a);
  } else if (t.type & 175) {
    let a = e[j1];
    return new ir(a, e);
  }
  return null;
}
var L4 = class {
    constructor() {}
    supports(e) {
      return Lf(e);
    }
    create(e) {
      return new I4(e);
    }
  },
  Ez = (t, e) => e,
  I4 = class {
    constructor(e) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = e || Ez);
    }
    forEachItem(e) {
      let r;
      for (r = this._itHead; r !== null; r = r._next) e(r);
    }
    forEachOperation(e) {
      let r = this._itHead,
        a = this._removalsHead,
        o = 0,
        n = null;
      for (; r || a; ) {
        let i = !a || (r && r.currentIndex < cu(a, o, n)) ? r : a,
          s = cu(i, o, n),
          l = i.currentIndex;
        if (i === a) o--, (a = a._nextRemoved);
        else if (((r = r._next), i.previousIndex == null)) o++;
        else {
          n || (n = []);
          let c = s - o,
            h = l - o;
          if (c != h) {
            for (let u = 0; u < c; u++) {
              let p = u < n.length ? n[u] : (n[u] = 0),
                f = p + u;
              h <= f && f < c && (n[u] = p + 1);
            }
            let d = i.previousIndex;
            n[d] = h - c;
          }
        }
        s !== l && e(i, s, l);
      }
    }
    forEachPreviousItem(e) {
      let r;
      for (r = this._previousItHead; r !== null; r = r._nextPrevious) e(r);
    }
    forEachAddedItem(e) {
      let r;
      for (r = this._additionsHead; r !== null; r = r._nextAdded) e(r);
    }
    forEachMovedItem(e) {
      let r;
      for (r = this._movesHead; r !== null; r = r._nextMoved) e(r);
    }
    forEachRemovedItem(e) {
      let r;
      for (r = this._removalsHead; r !== null; r = r._nextRemoved) e(r);
    }
    forEachIdentityChange(e) {
      let r;
      for (r = this._identityChangesHead; r !== null; r = r._nextIdentityChange)
        e(r);
    }
    diff(e) {
      if ((e == null && (e = []), !Lf(e))) throw new y(900, !1);
      return this.check(e) ? this : null;
    }
    onDestroy() {}
    check(e) {
      this._reset();
      let r = this._itHead,
        a = !1,
        o,
        n,
        i;
      if (Array.isArray(e)) {
        this.length = e.length;
        for (let s = 0; s < this.length; s++)
          (n = e[s]),
            (i = this._trackByFn(s, n)),
            r === null || !Object.is(r.trackById, i)
              ? ((r = this._mismatch(r, n, i, s)), (a = !0))
              : (a && (r = this._verifyReinsertion(r, n, i, s)),
                Object.is(r.item, n) || this._addIdentityChange(r, n)),
            (r = r._next);
      } else
        (o = 0),
          nC(e, s => {
            (i = this._trackByFn(o, s)),
              r === null || !Object.is(r.trackById, i)
                ? ((r = this._mismatch(r, s, i, o)), (a = !0))
                : (a && (r = this._verifyReinsertion(r, s, i, o)),
                  Object.is(r.item, s) || this._addIdentityChange(r, s)),
              (r = r._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(r), (this.collection = e), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let e;
        for (e = this._previousItHead = this._itHead; e !== null; e = e._next)
          e._nextPrevious = e._next;
        for (e = this._additionsHead; e !== null; e = e._nextAdded)
          e.previousIndex = e.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, e = this._movesHead;
          e !== null;
          e = e._nextMoved
        )
          e.previousIndex = e.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(e, r, a, o) {
      let n;
      return (
        e === null ? (n = this._itTail) : ((n = e._prev), this._remove(e)),
        (e =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(a, null)),
        e !== null
          ? (Object.is(e.item, r) || this._addIdentityChange(e, r),
            this._reinsertAfter(e, n, o))
          : ((e =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(a, o)),
            e !== null
              ? (Object.is(e.item, r) || this._addIdentityChange(e, r),
                this._moveAfter(e, n, o))
              : (e = this._addAfter(new P4(r, a), n, o))),
        e
      );
    }
    _verifyReinsertion(e, r, a, o) {
      let n =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(a, null);
      return (
        n !== null
          ? (e = this._reinsertAfter(n, e._prev, o))
          : e.currentIndex != o &&
            ((e.currentIndex = o), this._addToMoves(e, o)),
        e
      );
    }
    _truncate(e) {
      for (; e !== null; ) {
        let r = e._next;
        this._addToRemovals(this._unlink(e)), (e = r);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(e, r, a) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(e);
      let o = e._prevRemoved,
        n = e._nextRemoved;
      return (
        o === null ? (this._removalsHead = n) : (o._nextRemoved = n),
        n === null ? (this._removalsTail = o) : (n._prevRemoved = o),
        this._insertAfter(e, r, a),
        this._addToMoves(e, a),
        e
      );
    }
    _moveAfter(e, r, a) {
      return (
        this._unlink(e), this._insertAfter(e, r, a), this._addToMoves(e, a), e
      );
    }
    _addAfter(e, r, a) {
      return (
        this._insertAfter(e, r, a),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = e)
          : (this._additionsTail = this._additionsTail._nextAdded = e),
        e
      );
    }
    _insertAfter(e, r, a) {
      let o = r === null ? this._itHead : r._next;
      return (
        (e._next = o),
        (e._prev = r),
        o === null ? (this._itTail = e) : (o._prev = e),
        r === null ? (this._itHead = e) : (r._next = e),
        this._linkedRecords === null && (this._linkedRecords = new ii()),
        this._linkedRecords.put(e),
        (e.currentIndex = a),
        e
      );
    }
    _remove(e) {
      return this._addToRemovals(this._unlink(e));
    }
    _unlink(e) {
      this._linkedRecords !== null && this._linkedRecords.remove(e);
      let r = e._prev,
        a = e._next;
      return (
        r === null ? (this._itHead = a) : (r._next = a),
        a === null ? (this._itTail = r) : (a._prev = r),
        e
      );
    }
    _addToMoves(e, r) {
      return (
        e.previousIndex === r ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = e)
            : (this._movesTail = this._movesTail._nextMoved = e)),
        e
      );
    }
    _addToRemovals(e) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new ii()),
        this._unlinkedRecords.put(e),
        (e.currentIndex = null),
        (e._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = e),
            (e._prevRemoved = null))
          : ((e._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = e)),
        e
      );
    }
    _addIdentityChange(e, r) {
      return (
        (e.item = r),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = e)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                e),
        e
      );
    }
  },
  P4 = class {
    constructor(e, r) {
      (this.item = e),
        (this.trackById = r),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  B4 = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(e) {
      this._head === null
        ? ((this._head = this._tail = e),
          (e._nextDup = null),
          (e._prevDup = null))
        : ((this._tail._nextDup = e),
          (e._prevDup = this._tail),
          (e._nextDup = null),
          (this._tail = e));
    }
    get(e, r) {
      let a;
      for (a = this._head; a !== null; a = a._nextDup)
        if ((r === null || r <= a.currentIndex) && Object.is(a.trackById, e))
          return a;
      return null;
    }
    remove(e) {
      let r = e._prevDup,
        a = e._nextDup;
      return (
        r === null ? (this._head = a) : (r._nextDup = a),
        a === null ? (this._tail = r) : (a._prevDup = r),
        this._head === null
      );
    }
  },
  ii = class {
    constructor() {
      this.map = new Map();
    }
    put(e) {
      let r = e.trackById,
        a = this.map.get(r);
      a || ((a = new B4()), this.map.set(r, a)), a.add(e);
    }
    get(e, r) {
      let a = e,
        o = this.map.get(a);
      return o ? o.get(e, r) : null;
    }
    remove(e) {
      let r = e.trackById;
      return this.map.get(r).remove(e) && this.map.delete(r), e;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function cu(t, e, r) {
  let a = t.previousIndex;
  if (a === null) return a;
  let o = 0;
  return r && a < r.length && (o = r[a]), a + e + o;
}
var O4 = class {
    constructor() {}
    supports(e) {
      return e instanceof Map || S6(e);
    }
    create() {
      return new N4();
    }
  },
  N4 = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(e) {
      let r;
      for (r = this._mapHead; r !== null; r = r._next) e(r);
    }
    forEachPreviousItem(e) {
      let r;
      for (r = this._previousMapHead; r !== null; r = r._nextPrevious) e(r);
    }
    forEachChangedItem(e) {
      let r;
      for (r = this._changesHead; r !== null; r = r._nextChanged) e(r);
    }
    forEachAddedItem(e) {
      let r;
      for (r = this._additionsHead; r !== null; r = r._nextAdded) e(r);
    }
    forEachRemovedItem(e) {
      let r;
      for (r = this._removalsHead; r !== null; r = r._nextRemoved) e(r);
    }
    diff(e) {
      if (!e) e = new Map();
      else if (!(e instanceof Map || S6(e))) throw new y(900, !1);
      return this.check(e) ? this : null;
    }
    onDestroy() {}
    check(e) {
      this._reset();
      let r = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(e, (a, o) => {
          if (r && r.key === o)
            this._maybeAddToChanges(r, a),
              (this._appendAfter = r),
              (r = r._next);
          else {
            let n = this._getOrCreateRecordForKey(o, a);
            r = this._insertBeforeOrAppend(r, n);
          }
        }),
        r)
      ) {
        r._prev && (r._prev._next = null), (this._removalsHead = r);
        for (let a = r; a !== null; a = a._nextRemoved)
          a === this._mapHead && (this._mapHead = null),
            this._records.delete(a.key),
            (a._nextRemoved = a._next),
            (a.previousValue = a.currentValue),
            (a.currentValue = null),
            (a._prev = null),
            (a._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(e, r) {
      if (e) {
        let a = e._prev;
        return (
          (r._next = e),
          (r._prev = a),
          (e._prev = r),
          a && (a._next = r),
          e === this._mapHead && (this._mapHead = r),
          (this._appendAfter = e),
          e
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = r), (r._prev = this._appendAfter))
          : (this._mapHead = r),
        (this._appendAfter = r),
        null
      );
    }
    _getOrCreateRecordForKey(e, r) {
      if (this._records.has(e)) {
        let o = this._records.get(e);
        this._maybeAddToChanges(o, r);
        let n = o._prev,
          i = o._next;
        return (
          n && (n._next = i),
          i && (i._prev = n),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let a = new R4(e);
      return (
        this._records.set(e, a),
        (a.currentValue = r),
        this._addToAdditions(a),
        a
      );
    }
    _reset() {
      if (this.isDirty) {
        let e;
        for (
          this._previousMapHead = this._mapHead, e = this._previousMapHead;
          e !== null;
          e = e._next
        )
          e._nextPrevious = e._next;
        for (e = this._changesHead; e !== null; e = e._nextChanged)
          e.previousValue = e.currentValue;
        for (e = this._additionsHead; e != null; e = e._nextAdded)
          e.previousValue = e.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(e, r) {
      Object.is(r, e.currentValue) ||
        ((e.previousValue = e.currentValue),
        (e.currentValue = r),
        this._addToChanges(e));
    }
    _addToAdditions(e) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = e)
        : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
    }
    _addToChanges(e) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = e)
        : ((this._changesTail._nextChanged = e), (this._changesTail = e));
    }
    _forEach(e, r) {
      e instanceof Map ? e.forEach(r) : Object.keys(e).forEach(a => r(e[a], a));
    }
  },
  R4 = class {
    constructor(e) {
      (this.key = e),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function hu() {
  return new Pi([new L4()]);
}
var Pi = (() => {
  let e = class e {
    constructor(a) {
      this.factories = a;
    }
    static create(a, o) {
      if (o != null) {
        let n = o.factories.slice();
        a = a.concat(n);
      }
      return new e(a);
    }
    static extend(a) {
      return {
        provide: e,
        useFactory: o => e.create(a, o || hu()),
        deps: [[e, new hi(), new hr()]],
      };
    }
    find(a) {
      let o = this.factories.find(n => n.supports(a));
      if (o != null) return o;
      throw new y(901, !1);
    }
  };
  e.ɵprov = w({ token: e, providedIn: 'root', factory: hu });
  let t = e;
  return t;
})();
function du() {
  return new L6([new O4()]);
}
var L6 = (() => {
  let e = class e {
    constructor(a) {
      this.factories = a;
    }
    static create(a, o) {
      if (o) {
        let n = o.factories.slice();
        a = a.concat(n);
      }
      return new e(a);
    }
    static extend(a) {
      return {
        provide: e,
        useFactory: o => e.create(a, o || du()),
        deps: [[e, new hi(), new hr()]],
      };
    }
    find(a) {
      let o = this.factories.find(n => n.supports(a));
      if (o) return o;
      throw new y(901, !1);
    }
  };
  e.ɵprov = w({ token: e, providedIn: 'root', factory: du });
  let t = e;
  return t;
})();
function sm(t) {
  try {
    let { rootComponent: e, appProviders: r, platformProviders: a } = t,
      o = Vz(a),
      n = [Mz({}), { provide: oo, useExisting: Fz }, ...(r || [])],
      i = new ei({
        providers: n,
        parent: o,
        debugName: '',
        runEnvironmentInitializers: !1,
      });
    return zz({
      r3Injector: i.injector,
      platformInjector: o,
      rootComponent: e,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}
var lm = new F('');
function G(t) {
  return typeof t == 'boolean' ? t : t != null && t !== 'false';
}
function fr(t, e = NaN) {
  return !isNaN(parseFloat(t)) && !isNaN(Number(t)) ? Number(t) : e;
}
function O0(t, e) {
  mt('NgSignals');
  let r = k7(t);
  return e?.equal && (r[qt].equal = e.equal), r;
}
function _1(t) {
  let e = ce(null);
  try {
    return t();
  } finally {
    ce(e);
  }
}
var Tz = new F('', { providedIn: 'root', factory: () => m(kz) }),
  kz = (() => {
    let e = class e {};
    e.ɵprov = w({ token: e, providedIn: 'root', factory: () => new q4() });
    let t = e;
    return t;
  })(),
  q4 = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = m(T0)),
        (this.taskId = null);
    }
    scheduleEffect(e) {
      if ((this.enqueue(e), this.taskId === null)) {
        let r = (this.taskId = this.pendingTasks.add());
        queueMicrotask(() => {
          this.flush(), this.pendingTasks.remove(r), (this.taskId = null);
        });
      }
    }
    enqueue(e) {
      let r = e.creationZone;
      this.queues.has(r) || this.queues.set(r, new Set());
      let a = this.queues.get(r);
      a.has(e) || (this.queuedEffectCount++, a.add(e));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [e, r] of this.queues)
          e === null ? this.flushQueue(r) : e.run(() => this.flushQueue(r));
    }
    flushQueue(e) {
      for (let r of e) e.delete(r), this.queuedEffectCount--, r.run();
    }
  },
  j4 = class {
    constructor(e, r, a, o, n, i) {
      (this.scheduler = e),
        (this.effectFn = r),
        (this.creationZone = a),
        (this.injector = n),
        (this.watcher = R7(
          s => this.runEffect(s),
          () => this.schedule(),
          i,
        )),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    runEffect(e) {
      try {
        this.effectFn(e);
      } catch (r) {
        this.injector.get(e0, null, { optional: !0 })?.handleError(r);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.scheduleEffect(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function Bi(t, e) {
  mt('NgSignals'), !e?.injector && dr(Bi);
  let r = e?.injector ?? m(Oe),
    a = e?.manualCleanup !== !0 ? r.get(E0) : null,
    o = new j4(
      r.get(Tz),
      t,
      typeof Zone > 'u' ? null : Zone.current,
      a,
      r,
      e?.allowSignalWrites ?? !1,
    ),
    n = r.get(_e, null, { optional: !0 });
  return (
    !n || !(n._lView[K] & 8)
      ? o.watcher.notify()
      : (n._lView[V2] ??= []).push(o.watcher.notify),
    o
  );
}
function lY(t, e) {
  let r = S0(t),
    a = e.elementInjector || ui();
  return new sr(r).create(
    a,
    e.projectableNodes,
    e.hostElement,
    e.environmentInjector,
  );
}
function cm(t) {
  let e = S0(t);
  if (!e) return null;
  let r = new sr(e);
  return {
    get selector() {
      return r.selector;
    },
    get type() {
      return r.componentType;
    },
    get inputs() {
      return r.inputs;
    },
    get outputs() {
      return r.outputs;
    },
    get ngContentSelectors() {
      return r.ngContentSelectors;
    },
    get isStandalone() {
      return e.standalone;
    },
    get isSignal() {
      return e.signals;
    },
  };
}
var mm = null;
function j0() {
  return mm;
}
function vm(t) {
  mm ??= t;
}
var Wi = class {};
var Y = new F(''),
  $6 = (() => {
    let e = class e {
      historyGo(a) {
        throw new Error('');
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(Iz), providedIn: 'platform' }));
    let t = e;
    return t;
  })(),
  gm = new F(''),
  Iz = (() => {
    let e = class e extends $6 {
      constructor() {
        super(),
          (this._doc = m(Y)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return j0().getBaseHref(this._doc);
      }
      onPopState(a) {
        let o = j0().getGlobalEventTarget(this._doc, 'window');
        return (
          o.addEventListener('popstate', a, !1),
          () => o.removeEventListener('popstate', a)
        );
      }
      onHashChange(a) {
        let o = j0().getGlobalEventTarget(this._doc, 'window');
        return (
          o.addEventListener('hashchange', a, !1),
          () => o.removeEventListener('hashchange', a)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(a) {
        this._location.pathname = a;
      }
      pushState(a, o, n) {
        this._history.pushState(a, o, n);
      }
      replaceState(a, o, n) {
        this._history.replaceState(a, o, n);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(a = 0) {
        this._history.go(a);
      }
      getState() {
        return this._history.state;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({
        token: e,
        factory: () => new e(),
        providedIn: 'platform',
      }));
    let t = e;
    return t;
  })();
function W6(t, e) {
  if (t.length == 0) return e;
  if (e.length == 0) return t;
  let r = 0;
  return (
    t.endsWith('/') && r++,
    e.startsWith('/') && r++,
    r == 2 ? t + e.substring(1) : r == 1 ? t + e : t + '/' + e
  );
}
function hm(t) {
  let e = t.match(/#|\?|$/),
    r = (e && e.index) || t.length,
    a = r - (t[r - 1] === '/' ? 1 : 0);
  return t.slice(0, a) + t.slice(r);
}
function R0(t) {
  return t && t[0] !== '?' ? '?' + t : t;
}
var Y0 = (() => {
    let e = class e {
      historyGo(a) {
        throw new Error('');
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(G6), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  wm = new F(''),
  G6 = (() => {
    let e = class e extends Y0 {
      constructor(a, o) {
        super(),
          (this._platformLocation = a),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            m(Y).location?.origin ??
            '');
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(a) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(a),
          this._platformLocation.onHashChange(a),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(a) {
        return W6(this._baseHref, a);
      }
      path(a = !1) {
        let o =
            this._platformLocation.pathname + R0(this._platformLocation.search),
          n = this._platformLocation.hash;
        return n && a ? `${o}${n}` : o;
      }
      pushState(a, o, n, i) {
        let s = this.prepareExternalUrl(n + R0(i));
        this._platformLocation.pushState(a, o, s);
      }
      replaceState(a, o, n, i) {
        let s = this.prepareExternalUrl(n + R0(i));
        this._platformLocation.replaceState(a, o, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(a = 0) {
        this._platformLocation.historyGo?.(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g($6), g(wm, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  xm = (() => {
    let e = class e extends Y0 {
      constructor(a, o) {
        super(),
          (this._platformLocation = a),
          (this._baseHref = ''),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(a) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(a),
          this._platformLocation.onHashChange(a),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(a = !1) {
        let o = this._platformLocation.hash ?? '#';
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(a) {
        let o = W6(this._baseHref, a);
        return o.length > 0 ? '#' + o : o;
      }
      pushState(a, o, n, i) {
        let s = this.prepareExternalUrl(n + R0(i));
        s.length == 0 && (s = this._platformLocation.pathname),
          this._platformLocation.pushState(a, o, s);
      }
      replaceState(a, o, n, i) {
        let s = this.prepareExternalUrl(n + R0(i));
        s.length == 0 && (s = this._platformLocation.pathname),
          this._platformLocation.replaceState(a, o, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(a = 0) {
        this._platformLocation.historyGo?.(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g($6), g(wm, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Ma = (() => {
    let e = class e {
      constructor(a) {
        (this._subject = new W()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = a);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = Oz(hm(dm(o)))),
          this._locationStrategy.onPopState(n => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: n.state,
              type: n.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(a = !1) {
        return this.normalize(this._locationStrategy.path(a));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(a, o = '') {
        return this.path() == this.normalize(a + R0(o));
      }
      normalize(a) {
        return e.stripTrailingSlash(Bz(this._basePath, dm(a)));
      }
      prepareExternalUrl(a) {
        return (
          a && a[0] !== '/' && (a = '/' + a),
          this._locationStrategy.prepareExternalUrl(a)
        );
      }
      go(a, o = '', n = null) {
        this._locationStrategy.pushState(n, '', a, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(a + R0(o)), n);
      }
      replaceState(a, o = '', n = null) {
        this._locationStrategy.replaceState(n, '', a, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(a + R0(o)), n);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(a = 0) {
        this._locationStrategy.historyGo?.(a);
      }
      onUrlChange(a) {
        return (
          this._urlChangeListeners.push(a),
          (this._urlChangeSubscription ??= this.subscribe(o => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(a);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(a = '', o) {
        this._urlChangeListeners.forEach(n => n(a, o));
      }
      subscribe(a, o, n) {
        return this._subject.subscribe({ next: a, error: o, complete: n });
      }
    };
    (e.normalizeQueryParams = R0),
      (e.joinWithSlash = W6),
      (e.stripTrailingSlash = hm),
      (e.ɵfac = function (o) {
        return new (o || e)(g(Y0));
      }),
      (e.ɵprov = w({ token: e, factory: () => Pz(), providedIn: 'root' }));
    let t = e;
    return t;
  })();
function Pz() {
  return new Ma(g(Y0));
}
function Bz(t, e) {
  if (!t || !e.startsWith(t)) return e;
  let r = e.substring(t.length);
  return r === '' || ['/', ';', '?', '#'].includes(r[0]) ? r : e;
}
function dm(t) {
  return t.replace(/\/index.html$/, '');
}
function Oz(t) {
  if (new RegExp('^(https?:)?//').test(t)) {
    let [, r] = t.split(/\/\/[^\/]+/);
    return r;
  }
  return t;
}
var P1 = (function (t) {
    return (
      (t[(t.Format = 0)] = 'Format'), (t[(t.Standalone = 1)] = 'Standalone'), t
    );
  })(P1 || {}),
  He = (function (t) {
    return (
      (t[(t.Narrow = 0)] = 'Narrow'),
      (t[(t.Abbreviated = 1)] = 'Abbreviated'),
      (t[(t.Wide = 2)] = 'Wide'),
      (t[(t.Short = 3)] = 'Short'),
      t
    );
  })(He || {}),
  ot = (function (t) {
    return (
      (t[(t.Short = 0)] = 'Short'),
      (t[(t.Medium = 1)] = 'Medium'),
      (t[(t.Long = 2)] = 'Long'),
      (t[(t.Full = 3)] = 'Full'),
      t
    );
  })(ot || {}),
  xa = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
  };
function Nz(t) {
  return vt(t)[o1.LocaleId];
}
function Rz(t, e, r) {
  let a = vt(t),
    o = [a[o1.DayPeriodsFormat], a[o1.DayPeriodsStandalone]],
    n = xt(o, e);
  return xt(n, r);
}
function qz(t, e, r) {
  let a = vt(t),
    o = [a[o1.DaysFormat], a[o1.DaysStandalone]],
    n = xt(o, e);
  return xt(n, r);
}
function jz(t, e, r) {
  let a = vt(t),
    o = [a[o1.MonthsFormat], a[o1.MonthsStandalone]],
    n = xt(o, e);
  return xt(n, r);
}
function Yz(t, e) {
  let a = vt(t)[o1.Eras];
  return xt(a, e);
}
function Oi(t, e) {
  let r = vt(t);
  return xt(r[o1.DateFormat], e);
}
function Ni(t, e) {
  let r = vt(t);
  return xt(r[o1.TimeFormat], e);
}
function Ri(t, e) {
  let a = vt(t)[o1.DateTimeFormat];
  return xt(a, e);
}
function Ki(t, e) {
  let r = vt(t),
    a = r[o1.NumberSymbols][e];
  if (typeof a > 'u') {
    if (e === xa.CurrencyDecimal) return r[o1.NumberSymbols][xa.Decimal];
    if (e === xa.CurrencyGroup) return r[o1.NumberSymbols][xa.Group];
  }
  return a;
}
function Mm(t) {
  if (!t[o1.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${t[o1.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`,
    );
}
function Uz(t) {
  let e = vt(t);
  return (
    Mm(e),
    (e[o1.ExtraData][2] || []).map(a =>
      typeof a == 'string' ? P6(a) : [P6(a[0]), P6(a[1])],
    )
  );
}
function $z(t, e, r) {
  let a = vt(t);
  Mm(a);
  let o = [a[o1.ExtraData][0], a[o1.ExtraData][1]],
    n = xt(o, e) || [];
  return xt(n, r) || [];
}
function xt(t, e) {
  for (let r = e; r > -1; r--) if (typeof t[r] < 'u') return t[r];
  throw new Error('Locale data API: locale data undefined');
}
function P6(t) {
  let [e, r] = t.split(':');
  return { hours: +e, minutes: +r };
}
var Wz =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  qi = {},
  Gz =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  q0 = (function (t) {
    return (
      (t[(t.Short = 0)] = 'Short'),
      (t[(t.ShortGMT = 1)] = 'ShortGMT'),
      (t[(t.Long = 2)] = 'Long'),
      (t[(t.Extended = 3)] = 'Extended'),
      t
    );
  })(q0 || {}),
  be = (function (t) {
    return (
      (t[(t.FullYear = 0)] = 'FullYear'),
      (t[(t.Month = 1)] = 'Month'),
      (t[(t.Date = 2)] = 'Date'),
      (t[(t.Hours = 3)] = 'Hours'),
      (t[(t.Minutes = 4)] = 'Minutes'),
      (t[(t.Seconds = 5)] = 'Seconds'),
      (t[(t.FractionalSeconds = 6)] = 'FractionalSeconds'),
      (t[(t.Day = 7)] = 'Day'),
      t
    );
  })(be || {}),
  ye = (function (t) {
    return (
      (t[(t.DayPeriods = 0)] = 'DayPeriods'),
      (t[(t.Days = 1)] = 'Days'),
      (t[(t.Months = 2)] = 'Months'),
      (t[(t.Eras = 3)] = 'Eras'),
      t
    );
  })(ye || {});
function Kz(t, e, r, a) {
  let o = oA(t);
  e = N0(r, e) || e;
  let i = [],
    s;
  for (; e; )
    if (((s = Gz.exec(e)), s)) {
      i = i.concat(s.slice(1));
      let h = i.pop();
      if (!h) break;
      e = h;
    } else {
      i.push(e);
      break;
    }
  let l = o.getTimezoneOffset();
  a && ((l = bm(a, l)), (o = rA(o, a, !0)));
  let c = '';
  return (
    i.forEach(h => {
      let d = tA(h);
      c += d
        ? d(o, r, l)
        : h === "''"
          ? "'"
          : h.replace(/(^'|'$)/g, '').replace(/''/g, "'");
    }),
    c
  );
}
function Gi(t, e, r) {
  let a = new Date(0);
  return a.setFullYear(t, e, r), a.setHours(0, 0, 0), a;
}
function N0(t, e) {
  let r = Nz(t);
  if (((qi[r] ??= {}), qi[r][e])) return qi[r][e];
  let a = '';
  switch (e) {
    case 'shortDate':
      a = Oi(t, ot.Short);
      break;
    case 'mediumDate':
      a = Oi(t, ot.Medium);
      break;
    case 'longDate':
      a = Oi(t, ot.Long);
      break;
    case 'fullDate':
      a = Oi(t, ot.Full);
      break;
    case 'shortTime':
      a = Ni(t, ot.Short);
      break;
    case 'mediumTime':
      a = Ni(t, ot.Medium);
      break;
    case 'longTime':
      a = Ni(t, ot.Long);
      break;
    case 'fullTime':
      a = Ni(t, ot.Full);
      break;
    case 'short':
      let o = N0(t, 'shortTime'),
        n = N0(t, 'shortDate');
      a = ji(Ri(t, ot.Short), [o, n]);
      break;
    case 'medium':
      let i = N0(t, 'mediumTime'),
        s = N0(t, 'mediumDate');
      a = ji(Ri(t, ot.Medium), [i, s]);
      break;
    case 'long':
      let l = N0(t, 'longTime'),
        c = N0(t, 'longDate');
      a = ji(Ri(t, ot.Long), [l, c]);
      break;
    case 'full':
      let h = N0(t, 'fullTime'),
        d = N0(t, 'fullDate');
      a = ji(Ri(t, ot.Full), [h, d]);
      break;
  }
  return a && (qi[r][e] = a), a;
}
function ji(t, e) {
  return (
    e &&
      (t = t.replace(/\{([^}]+)}/g, function (r, a) {
        return e != null && a in e ? e[a] : r;
      })),
    t
  );
}
function kt(t, e, r = '-', a, o) {
  let n = '';
  (t < 0 || (o && t <= 0)) && (o ? (t = -t + 1) : ((t = -t), (n = r)));
  let i = String(t);
  for (; i.length < e; ) i = '0' + i;
  return a && (i = i.slice(i.length - e)), n + i;
}
function Zz(t, e) {
  return kt(t, 3).substring(0, e);
}
function i1(t, e, r = 0, a = !1, o = !1) {
  return function (n, i) {
    let s = Qz(t, n);
    if (((r > 0 || s > -r) && (s += r), t === be.Hours))
      s === 0 && r === -12 && (s = 12);
    else if (t === be.FractionalSeconds) return Zz(s, e);
    let l = Ki(i, xa.MinusSign);
    return kt(s, e, l, a, o);
  };
}
function Qz(t, e) {
  switch (t) {
    case be.FullYear:
      return e.getFullYear();
    case be.Month:
      return e.getMonth();
    case be.Date:
      return e.getDate();
    case be.Hours:
      return e.getHours();
    case be.Minutes:
      return e.getMinutes();
    case be.Seconds:
      return e.getSeconds();
    case be.FractionalSeconds:
      return e.getMilliseconds();
    case be.Day:
      return e.getDay();
    default:
      throw new Error(`Unknown DateType value "${t}".`);
  }
}
function Ie(t, e, r = P1.Format, a = !1) {
  return function (o, n) {
    return Xz(o, n, t, e, r, a);
  };
}
function Xz(t, e, r, a, o, n) {
  switch (r) {
    case ye.Months:
      return jz(e, o, a)[t.getMonth()];
    case ye.Days:
      return qz(e, o, a)[t.getDay()];
    case ye.DayPeriods:
      let i = t.getHours(),
        s = t.getMinutes();
      if (n) {
        let c = Uz(e),
          h = $z(e, o, a),
          d = c.findIndex(u => {
            if (Array.isArray(u)) {
              let [p, f] = u,
                x = i >= p.hours && s >= p.minutes,
                b = i < f.hours || (i === f.hours && s < f.minutes);
              if (p.hours < f.hours) {
                if (x && b) return !0;
              } else if (x || b) return !0;
            } else if (u.hours === i && u.minutes === s) return !0;
            return !1;
          });
        if (d !== -1) return h[d];
      }
      return Rz(e, o, a)[i < 12 ? 0 : 1];
    case ye.Eras:
      return Yz(e, a)[t.getFullYear() <= 0 ? 0 : 1];
    default:
      let l = r;
      throw new Error(`unexpected translation type ${l}`);
  }
}
function Yi(t) {
  return function (e, r, a) {
    let o = -1 * a,
      n = Ki(r, xa.MinusSign),
      i = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (t) {
      case q0.Short:
        return (o >= 0 ? '+' : '') + kt(i, 2, n) + kt(Math.abs(o % 60), 2, n);
      case q0.ShortGMT:
        return 'GMT' + (o >= 0 ? '+' : '') + kt(i, 1, n);
      case q0.Long:
        return (
          'GMT' +
          (o >= 0 ? '+' : '') +
          kt(i, 2, n) +
          ':' +
          kt(Math.abs(o % 60), 2, n)
        );
      case q0.Extended:
        return a === 0
          ? 'Z'
          : (o >= 0 ? '+' : '') +
              kt(i, 2, n) +
              ':' +
              kt(Math.abs(o % 60), 2, n);
      default:
        throw new Error(`Unknown zone width "${t}"`);
    }
  };
}
var Jz = 0,
  $i = 4;
function eA(t) {
  let e = Gi(t, Jz, 1).getDay();
  return Gi(t, 0, 1 + (e <= $i ? $i : $i + 7) - e);
}
function ym(t) {
  let e = t.getDay(),
    r = e === 0 ? -3 : $i - e;
  return Gi(t.getFullYear(), t.getMonth(), t.getDate() + r);
}
function B6(t, e = !1) {
  return function (r, a) {
    let o;
    if (e) {
      let n = new Date(r.getFullYear(), r.getMonth(), 1).getDay() - 1,
        i = r.getDate();
      o = 1 + Math.floor((i + n) / 7);
    } else {
      let n = ym(r),
        i = eA(n.getFullYear()),
        s = n.getTime() - i.getTime();
      o = 1 + Math.round(s / 6048e5);
    }
    return kt(o, t, Ki(a, xa.MinusSign));
  };
}
function Ui(t, e = !1) {
  return function (r, a) {
    let n = ym(r).getFullYear();
    return kt(n, t, Ki(a, xa.MinusSign), e);
  };
}
var O6 = {};
function tA(t) {
  if (O6[t]) return O6[t];
  let e;
  switch (t) {
    case 'G':
    case 'GG':
    case 'GGG':
      e = Ie(ye.Eras, He.Abbreviated);
      break;
    case 'GGGG':
      e = Ie(ye.Eras, He.Wide);
      break;
    case 'GGGGG':
      e = Ie(ye.Eras, He.Narrow);
      break;
    case 'y':
      e = i1(be.FullYear, 1, 0, !1, !0);
      break;
    case 'yy':
      e = i1(be.FullYear, 2, 0, !0, !0);
      break;
    case 'yyy':
      e = i1(be.FullYear, 3, 0, !1, !0);
      break;
    case 'yyyy':
      e = i1(be.FullYear, 4, 0, !1, !0);
      break;
    case 'Y':
      e = Ui(1);
      break;
    case 'YY':
      e = Ui(2, !0);
      break;
    case 'YYY':
      e = Ui(3);
      break;
    case 'YYYY':
      e = Ui(4);
      break;
    case 'M':
    case 'L':
      e = i1(be.Month, 1, 1);
      break;
    case 'MM':
    case 'LL':
      e = i1(be.Month, 2, 1);
      break;
    case 'MMM':
      e = Ie(ye.Months, He.Abbreviated);
      break;
    case 'MMMM':
      e = Ie(ye.Months, He.Wide);
      break;
    case 'MMMMM':
      e = Ie(ye.Months, He.Narrow);
      break;
    case 'LLL':
      e = Ie(ye.Months, He.Abbreviated, P1.Standalone);
      break;
    case 'LLLL':
      e = Ie(ye.Months, He.Wide, P1.Standalone);
      break;
    case 'LLLLL':
      e = Ie(ye.Months, He.Narrow, P1.Standalone);
      break;
    case 'w':
      e = B6(1);
      break;
    case 'ww':
      e = B6(2);
      break;
    case 'W':
      e = B6(1, !0);
      break;
    case 'd':
      e = i1(be.Date, 1);
      break;
    case 'dd':
      e = i1(be.Date, 2);
      break;
    case 'c':
    case 'cc':
      e = i1(be.Day, 1);
      break;
    case 'ccc':
      e = Ie(ye.Days, He.Abbreviated, P1.Standalone);
      break;
    case 'cccc':
      e = Ie(ye.Days, He.Wide, P1.Standalone);
      break;
    case 'ccccc':
      e = Ie(ye.Days, He.Narrow, P1.Standalone);
      break;
    case 'cccccc':
      e = Ie(ye.Days, He.Short, P1.Standalone);
      break;
    case 'E':
    case 'EE':
    case 'EEE':
      e = Ie(ye.Days, He.Abbreviated);
      break;
    case 'EEEE':
      e = Ie(ye.Days, He.Wide);
      break;
    case 'EEEEE':
      e = Ie(ye.Days, He.Narrow);
      break;
    case 'EEEEEE':
      e = Ie(ye.Days, He.Short);
      break;
    case 'a':
    case 'aa':
    case 'aaa':
      e = Ie(ye.DayPeriods, He.Abbreviated);
      break;
    case 'aaaa':
      e = Ie(ye.DayPeriods, He.Wide);
      break;
    case 'aaaaa':
      e = Ie(ye.DayPeriods, He.Narrow);
      break;
    case 'b':
    case 'bb':
    case 'bbb':
      e = Ie(ye.DayPeriods, He.Abbreviated, P1.Standalone, !0);
      break;
    case 'bbbb':
      e = Ie(ye.DayPeriods, He.Wide, P1.Standalone, !0);
      break;
    case 'bbbbb':
      e = Ie(ye.DayPeriods, He.Narrow, P1.Standalone, !0);
      break;
    case 'B':
    case 'BB':
    case 'BBB':
      e = Ie(ye.DayPeriods, He.Abbreviated, P1.Format, !0);
      break;
    case 'BBBB':
      e = Ie(ye.DayPeriods, He.Wide, P1.Format, !0);
      break;
    case 'BBBBB':
      e = Ie(ye.DayPeriods, He.Narrow, P1.Format, !0);
      break;
    case 'h':
      e = i1(be.Hours, 1, -12);
      break;
    case 'hh':
      e = i1(be.Hours, 2, -12);
      break;
    case 'H':
      e = i1(be.Hours, 1);
      break;
    case 'HH':
      e = i1(be.Hours, 2);
      break;
    case 'm':
      e = i1(be.Minutes, 1);
      break;
    case 'mm':
      e = i1(be.Minutes, 2);
      break;
    case 's':
      e = i1(be.Seconds, 1);
      break;
    case 'ss':
      e = i1(be.Seconds, 2);
      break;
    case 'S':
      e = i1(be.FractionalSeconds, 1);
      break;
    case 'SS':
      e = i1(be.FractionalSeconds, 2);
      break;
    case 'SSS':
      e = i1(be.FractionalSeconds, 3);
      break;
    case 'Z':
    case 'ZZ':
    case 'ZZZ':
      e = Yi(q0.Short);
      break;
    case 'ZZZZZ':
      e = Yi(q0.Extended);
      break;
    case 'O':
    case 'OO':
    case 'OOO':
    case 'z':
    case 'zz':
    case 'zzz':
      e = Yi(q0.ShortGMT);
      break;
    case 'OOOO':
    case 'ZZZZ':
    case 'zzzz':
      e = Yi(q0.Long);
      break;
    default:
      return null;
  }
  return (O6[t] = e), e;
}
function bm(t, e) {
  t = t.replace(/:/g, '');
  let r = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
  return isNaN(r) ? e : r;
}
function aA(t, e) {
  return (t = new Date(t.getTime())), t.setMinutes(t.getMinutes() + e), t;
}
function rA(t, e, r) {
  let a = r ? -1 : 1,
    o = t.getTimezoneOffset(),
    n = bm(e, o);
  return aA(t, a * (n - o));
}
function oA(t) {
  if (um(t)) return t;
  if (typeof t == 'number' && !isNaN(t)) return new Date(t);
  if (typeof t == 'string') {
    if (((t = t.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t))) {
      let [o, n = 1, i = 1] = t.split('-').map(s => +s);
      return Gi(o, n - 1, i);
    }
    let r = parseFloat(t);
    if (!isNaN(t - r)) return new Date(r);
    let a;
    if ((a = t.match(Wz))) return nA(a);
  }
  let e = new Date(t);
  if (!um(e)) throw new Error(`Unable to convert "${t}" into a date`);
  return e;
}
function nA(t) {
  let e = new Date(0),
    r = 0,
    a = 0,
    o = t[8] ? e.setUTCFullYear : e.setFullYear,
    n = t[8] ? e.setUTCHours : e.setHours;
  t[9] && ((r = Number(t[9] + t[10])), (a = Number(t[9] + t[11]))),
    o.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
  let i = Number(t[4] || 0) - r,
    s = Number(t[5] || 0) - a,
    l = Number(t[6] || 0),
    c = Math.floor(parseFloat('0.' + (t[7] || 0)) * 1e3);
  return n.call(e, i, s, l, c), e;
}
function um(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}
function Zi(t, e) {
  e = encodeURIComponent(e);
  for (let r of t.split(';')) {
    let a = r.indexOf('='),
      [o, n] = a == -1 ? [r, ''] : [r.slice(0, a), r.slice(a + 1)];
    if (o.trim() === e) return decodeURIComponent(n);
  }
  return null;
}
var N6 = /\s+/,
  pm = [],
  Qi = (() => {
    let e = class e {
      constructor(a, o) {
        (this._ngEl = a),
          (this._renderer = o),
          (this.initialClasses = pm),
          (this.stateMap = new Map());
      }
      set klass(a) {
        this.initialClasses = a != null ? a.trim().split(N6) : pm;
      }
      set ngClass(a) {
        this.rawClass = typeof a == 'string' ? a.trim().split(N6) : a;
      }
      ngDoCheck() {
        for (let o of this.initialClasses) this._updateState(o, !0);
        let a = this.rawClass;
        if (Array.isArray(a) || a instanceof Set)
          for (let o of a) this._updateState(o, !0);
        else if (a != null)
          for (let o of Object.keys(a)) this._updateState(o, !!a[o]);
        this._applyStateDiff();
      }
      _updateState(a, o) {
        let n = this.stateMap.get(a);
        n !== void 0
          ? (n.enabled !== o && ((n.changed = !0), (n.enabled = o)),
            (n.touched = !0))
          : this.stateMap.set(a, { enabled: o, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let a of this.stateMap) {
          let o = a[0],
            n = a[1];
          n.changed
            ? (this._toggleClass(o, n.enabled), (n.changed = !1))
            : n.touched ||
              (n.enabled && this._toggleClass(o, !1), this.stateMap.delete(o)),
            (n.touched = !1);
        }
      }
      _toggleClass(a, o) {
        (a = a.trim()),
          a.length > 0 &&
            a.split(N6).forEach(n => {
              o
                ? this._renderer.addClass(this._ngEl.nativeElement, n)
                : this._renderer.removeClass(this._ngEl.nativeElement, n);
            });
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E), v(Ce));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'ngClass', '']],
        inputs: { klass: [0, 'class', 'klass'], ngClass: 'ngClass' },
        standalone: !0,
      }));
    let t = e;
    return t;
  })();
var VY = (() => {
    let e = class e {
      constructor(a, o) {
        (this._viewContainer = a),
          (this._context = new R6()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = o);
      }
      set ngIf(a) {
        (this._context.$implicit = this._context.ngIf = a), this._updateView();
      }
      set ngIfThen(a) {
        fm('ngIfThen', a),
          (this._thenTemplateRef = a),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(a) {
        fm('ngIfElse', a),
          (this._elseTemplateRef = a),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context,
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context,
              )));
      }
      static ngTemplateContextGuard(a, o) {
        return !0;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Qe), v(Ke));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'ngIf', '']],
        inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  R6 = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function fm(t, e) {
  if (!!!(!e || e.createEmbeddedView))
    throw new Error(`${t} must be a TemplateRef, but received '${L1(e)}'.`);
}
var Fm = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this._ngEl = a),
          (this._differs = o),
          (this._renderer = n),
          (this._ngStyle = null),
          (this._differ = null);
      }
      set ngStyle(a) {
        (this._ngStyle = a),
          !this._differ && a && (this._differ = this._differs.find(a).create());
      }
      ngDoCheck() {
        if (this._differ) {
          let a = this._differ.diff(this._ngStyle);
          a && this._applyChanges(a);
        }
      }
      _setStyle(a, o) {
        let [n, i] = a.split('.'),
          s = n.indexOf('-') === -1 ? void 0 : t0.DashCase;
        o != null
          ? this._renderer.setStyle(
              this._ngEl.nativeElement,
              n,
              i ? `${o}${i}` : o,
              s,
            )
          : this._renderer.removeStyle(this._ngEl.nativeElement, n, s);
      }
      _applyChanges(a) {
        a.forEachRemovedItem(o => this._setStyle(o.key, null)),
          a.forEachAddedItem(o => this._setStyle(o.key, o.currentValue)),
          a.forEachChangedItem(o => this._setStyle(o.key, o.currentValue));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E), v(L6), v(Ce));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'ngStyle', '']],
        inputs: { ngStyle: 'ngStyle' },
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  Xi = (() => {
    let e = class e {
      constructor(a) {
        (this._viewContainerRef = a),
          (this._viewRef = null),
          (this.ngTemplateOutletContext = null),
          (this.ngTemplateOutlet = null),
          (this.ngTemplateOutletInjector = null);
      }
      ngOnChanges(a) {
        if (this._shouldRecreateView(a)) {
          let o = this._viewContainerRef;
          if (
            (this._viewRef && o.remove(o.indexOf(this._viewRef)),
            !this.ngTemplateOutlet)
          ) {
            this._viewRef = null;
            return;
          }
          let n = this._createContextForwardProxy();
          this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, n, {
            injector: this.ngTemplateOutletInjector ?? void 0,
          });
        }
      }
      _shouldRecreateView(a) {
        return !!a.ngTemplateOutlet || !!a.ngTemplateOutletInjector;
      }
      _createContextForwardProxy() {
        return new Proxy(
          {},
          {
            set: (a, o, n) =>
              this.ngTemplateOutletContext
                ? Reflect.set(this.ngTemplateOutletContext, o, n)
                : !1,
            get: (a, o, n) => {
              if (this.ngTemplateOutletContext)
                return Reflect.get(this.ngTemplateOutletContext, o, n);
            },
          },
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Qe));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'ngTemplateOutlet', '']],
        inputs: {
          ngTemplateOutletContext: 'ngTemplateOutletContext',
          ngTemplateOutlet: 'ngTemplateOutlet',
          ngTemplateOutletInjector: 'ngTemplateOutletInjector',
        },
        standalone: !0,
        features: [ee],
      }));
    let t = e;
    return t;
  })();
function Cm(t, e) {
  return new y(2100, !1);
}
var q6 = class {
    createSubscription(e, r) {
      return _1(() =>
        e.subscribe({
          next: r,
          error: a => {
            throw a;
          },
        }),
      );
    }
    dispose(e) {
      _1(() => e.unsubscribe());
    }
  },
  j6 = class {
    createSubscription(e, r) {
      return e.then(r, a => {
        throw a;
      });
    }
    dispose(e) {}
  },
  iA = new j6(),
  sA = new q6(),
  DY = (() => {
    let e = class e {
      constructor(a) {
        (this._latestValue = null),
          (this.markForCheckOnValueUpdate = !0),
          (this._subscription = null),
          (this._obj = null),
          (this._strategy = null),
          (this._ref = a);
      }
      ngOnDestroy() {
        this._subscription && this._dispose(), (this._ref = null);
      }
      transform(a) {
        if (!this._obj) {
          if (a)
            try {
              (this.markForCheckOnValueUpdate = !1), this._subscribe(a);
            } finally {
              this.markForCheckOnValueUpdate = !0;
            }
          return this._latestValue;
        }
        return a !== this._obj
          ? (this._dispose(), this.transform(a))
          : this._latestValue;
      }
      _subscribe(a) {
        (this._obj = a),
          (this._strategy = this._selectStrategy(a)),
          (this._subscription = this._strategy.createSubscription(a, o =>
            this._updateLatestValue(a, o),
          ));
      }
      _selectStrategy(a) {
        if (wa(a)) return iA;
        if (k6(a)) return sA;
        throw Cm(e, a);
      }
      _dispose() {
        this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null);
      }
      _updateLatestValue(a, o) {
        a === this._obj &&
          ((this._latestValue = o),
          this.markForCheckOnValueUpdate && this._ref?.markForCheck());
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(_e, 16));
    }),
      (e.ɵpipe = fn({ name: 'async', type: e, pure: !1, standalone: !0 }));
    let t = e;
    return t;
  })();
var lA = 'mediumDate',
  cA = new F(''),
  hA = new F(''),
  _Y = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this.locale = a),
          (this.defaultTimezone = o),
          (this.defaultOptions = n);
      }
      transform(a, o, n, i) {
        if (a == null || a === '' || a !== a) return null;
        try {
          let s = o ?? this.defaultOptions?.dateFormat ?? lA,
            l =
              n ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return Kz(a, s, i || this.locale, l);
        } catch (s) {
          throw Cm(e, s.message);
        }
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Ii, 16), v(cA, 24), v(hA, 24));
    }),
      (e.ɵpipe = fn({ name: 'date', type: e, pure: !0, standalone: !0 }));
    let t = e;
    return t;
  })();
var K6 = 'browser',
  dA = 'server';
function Fn(t) {
  return t === K6;
}
function Ji(t) {
  return t === dA;
}
var zm = (() => {
    let e = class e {};
    e.ɵprov = w({
      token: e,
      providedIn: 'root',
      factory: () => (Fn(m(V1)) ? new Y6(m(Y), window) : new U6()),
    });
    let t = e;
    return t;
  })(),
  Y6 = class {
    constructor(e, r) {
      (this.document = e), (this.window = r), (this.offset = () => [0, 0]);
    }
    setOffset(e) {
      Array.isArray(e) ? (this.offset = () => e) : (this.offset = e);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(e) {
      this.window.scrollTo(e[0], e[1]);
    }
    scrollToAnchor(e) {
      let r = uA(this.document, e);
      r && (this.scrollToElement(r), r.focus());
    }
    setHistoryScrollRestoration(e) {
      this.window.history.scrollRestoration = e;
    }
    scrollToElement(e) {
      let r = e.getBoundingClientRect(),
        a = r.left + this.window.pageXOffset,
        o = r.top + this.window.pageYOffset,
        n = this.offset();
      this.window.scrollTo(a - n[0], o - n[1]);
    }
  };
function uA(t, e) {
  let r = t.getElementById(e) || t.getElementsByName(e)[0];
  if (r) return r;
  if (
    typeof t.createTreeWalker == 'function' &&
    t.body &&
    typeof t.body.attachShadow == 'function'
  ) {
    let a = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT),
      o = a.currentNode;
    for (; o; ) {
      let n = o.shadowRoot;
      if (n) {
        let i = n.getElementById(e) || n.querySelector(`[name="${e}"]`);
        if (i) return i;
      }
      o = a.nextNode();
    }
  }
  return null;
}
var U6 = class {
    setOffset(e) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(e) {}
    scrollToAnchor(e) {}
    setHistoryScrollRestoration(e) {}
  },
  fo = class {};
var zn = class {},
  Ca = class {},
  U0 = class t {
    constructor(e) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        e
          ? typeof e == 'string'
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  e
                    .split(
                      `
`,
                    )
                    .forEach(r => {
                      let a = r.indexOf(':');
                      if (a > 0) {
                        let o = r.slice(0, a),
                          n = o.toLowerCase(),
                          i = r.slice(a + 1).trim();
                        this.maybeSetNormalizedName(o, n),
                          this.headers.has(n)
                            ? this.headers.get(n).push(i)
                            : this.headers.set(n, [i]);
                      }
                    });
              })
            : typeof Headers < 'u' && e instanceof Headers
              ? ((this.headers = new Map()),
                e.forEach((r, a) => {
                  this.setHeaderEntries(a, r);
                }))
              : (this.lazyInit = () => {
                  (this.headers = new Map()),
                    Object.entries(e).forEach(([r, a]) => {
                      this.setHeaderEntries(r, a);
                    });
                })
          : (this.headers = new Map());
    }
    has(e) {
      return this.init(), this.headers.has(e.toLowerCase());
    }
    get(e) {
      this.init();
      let r = this.headers.get(e.toLowerCase());
      return r && r.length > 0 ? r[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(e) {
      return this.init(), this.headers.get(e.toLowerCase()) || null;
    }
    append(e, r) {
      return this.clone({ name: e, value: r, op: 'a' });
    }
    set(e, r) {
      return this.clone({ name: e, value: r, op: 's' });
    }
    delete(e, r) {
      return this.clone({ name: e, value: r, op: 'd' });
    }
    maybeSetNormalizedName(e, r) {
      this.normalizedNames.has(r) || this.normalizedNames.set(r, e);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach(e => this.applyUpdate(e)),
          (this.lazyUpdate = null)));
    }
    copyFrom(e) {
      e.init(),
        Array.from(e.headers.keys()).forEach(r => {
          this.headers.set(r, e.headers.get(r)),
            this.normalizedNames.set(r, e.normalizedNames.get(r));
        });
    }
    clone(e) {
      let r = new t();
      return (
        (r.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (r.lazyUpdate = (this.lazyUpdate || []).concat([e])),
        r
      );
    }
    applyUpdate(e) {
      let r = e.name.toLowerCase();
      switch (e.op) {
        case 'a':
        case 's':
          let a = e.value;
          if ((typeof a == 'string' && (a = [a]), a.length === 0)) return;
          this.maybeSetNormalizedName(e.name, r);
          let o = (e.op === 'a' ? this.headers.get(r) : void 0) || [];
          o.push(...a), this.headers.set(r, o);
          break;
        case 'd':
          let n = e.value;
          if (!n) this.headers.delete(r), this.normalizedNames.delete(r);
          else {
            let i = this.headers.get(r);
            if (!i) return;
            (i = i.filter(s => n.indexOf(s) === -1)),
              i.length === 0
                ? (this.headers.delete(r), this.normalizedNames.delete(r))
                : this.headers.set(r, i);
          }
          break;
      }
    }
    setHeaderEntries(e, r) {
      let a = (Array.isArray(r) ? r : [r]).map(n => n.toString()),
        o = e.toLowerCase();
      this.headers.set(o, a), this.maybeSetNormalizedName(e, o);
    }
    forEach(e) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach(r =>
          e(this.normalizedNames.get(r), this.headers.get(r)),
        );
    }
  };
var X6 = class {
  encodeKey(e) {
    return Am(e);
  }
  encodeValue(e) {
    return Am(e);
  }
  decodeKey(e) {
    return decodeURIComponent(e);
  }
  decodeValue(e) {
    return decodeURIComponent(e);
  }
};
function pA(t, e) {
  let r = new Map();
  return (
    t.length > 0 &&
      t
        .replace(/^\?/, '')
        .split('&')
        .forEach(o => {
          let n = o.indexOf('='),
            [i, s] =
              n == -1
                ? [e.decodeKey(o), '']
                : [e.decodeKey(o.slice(0, n)), e.decodeValue(o.slice(n + 1))],
            l = r.get(i) || [];
          l.push(s), r.set(i, l);
        }),
    r
  );
}
var fA = /%(\d[a-f0-9])/gi,
  mA = {
    40: '@',
    '3A': ':',
    24: '$',
    '2C': ',',
    '3B': ';',
    '3D': '=',
    '3F': '?',
    '2F': '/',
  };
function Am(t) {
  return encodeURIComponent(t).replace(fA, (e, r) => mA[r] ?? e);
}
function es(t) {
  return `${t}`;
}
var ba = class t {
  constructor(e = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = e.encoder || new X6()),
      e.fromString)
    ) {
      if (e.fromObject)
        throw new Error('Cannot specify both fromString and fromObject.');
      this.map = pA(e.fromString, this.encoder);
    } else
      e.fromObject
        ? ((this.map = new Map()),
          Object.keys(e.fromObject).forEach(r => {
            let a = e.fromObject[r],
              o = Array.isArray(a) ? a.map(es) : [es(a)];
            this.map.set(r, o);
          }))
        : (this.map = null);
  }
  has(e) {
    return this.init(), this.map.has(e);
  }
  get(e) {
    this.init();
    let r = this.map.get(e);
    return r ? r[0] : null;
  }
  getAll(e) {
    return this.init(), this.map.get(e) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(e, r) {
    return this.clone({ param: e, value: r, op: 'a' });
  }
  appendAll(e) {
    let r = [];
    return (
      Object.keys(e).forEach(a => {
        let o = e[a];
        Array.isArray(o)
          ? o.forEach(n => {
              r.push({ param: a, value: n, op: 'a' });
            })
          : r.push({ param: a, value: o, op: 'a' });
      }),
      this.clone(r)
    );
  }
  set(e, r) {
    return this.clone({ param: e, value: r, op: 's' });
  }
  delete(e, r) {
    return this.clone({ param: e, value: r, op: 'd' });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map(e => {
          let r = this.encoder.encodeKey(e);
          return this.map
            .get(e)
            .map(a => r + '=' + this.encoder.encodeValue(a))
            .join('&');
        })
        .filter(e => e !== '')
        .join('&')
    );
  }
  clone(e) {
    let r = new t({ encoder: this.encoder });
    return (
      (r.cloneFrom = this.cloneFrom || this),
      (r.updates = (this.updates || []).concat(e)),
      r
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach(e => this.map.set(e, this.cloneFrom.map.get(e))),
        this.updates.forEach(e => {
          switch (e.op) {
            case 'a':
            case 's':
              let r = (e.op === 'a' ? this.map.get(e.param) : void 0) || [];
              r.push(es(e.value)), this.map.set(e.param, r);
              break;
            case 'd':
              if (e.value !== void 0) {
                let a = this.map.get(e.param) || [],
                  o = a.indexOf(es(e.value));
                o !== -1 && a.splice(o, 1),
                  a.length > 0
                    ? this.map.set(e.param, a)
                    : this.map.delete(e.param);
              } else {
                this.map.delete(e.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var J6 = class {
  constructor() {
    this.map = new Map();
  }
  set(e, r) {
    return this.map.set(e, r), this;
  }
  get(e) {
    return (
      this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    );
  }
  delete(e) {
    return this.map.delete(e), this;
  }
  has(e) {
    return this.map.has(e);
  }
  keys() {
    return this.map.keys();
  }
};
function vA(t) {
  switch (t) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return !1;
    default:
      return !0;
  }
}
function Sm(t) {
  return typeof ArrayBuffer < 'u' && t instanceof ArrayBuffer;
}
function Vm(t) {
  return typeof Blob < 'u' && t instanceof Blob;
}
function Dm(t) {
  return typeof FormData < 'u' && t instanceof FormData;
}
function gA(t) {
  return typeof URLSearchParams < 'u' && t instanceof URLSearchParams;
}
var Cn = class t {
    constructor(e, r, a, o) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = 'json'),
        (this.method = e.toUpperCase());
      let n;
      if (
        (vA(this.method) || o
          ? ((this.body = a !== void 0 ? a : null), (n = o))
          : (n = a),
        n &&
          ((this.reportProgress = !!n.reportProgress),
          (this.withCredentials = !!n.withCredentials),
          n.responseType && (this.responseType = n.responseType),
          n.headers && (this.headers = n.headers),
          n.context && (this.context = n.context),
          n.params && (this.params = n.params),
          (this.transferCache = n.transferCache)),
        (this.headers ??= new U0()),
        (this.context ??= new J6()),
        !this.params)
      )
        (this.params = new ba()), (this.urlWithParams = r);
      else {
        let i = this.params.toString();
        if (i.length === 0) this.urlWithParams = r;
        else {
          let s = r.indexOf('?'),
            l = s === -1 ? '?' : s < r.length - 1 ? '&' : '';
          this.urlWithParams = r + l + i;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == 'string' ||
            Sm(this.body) ||
            Vm(this.body) ||
            Dm(this.body) ||
            gA(this.body)
          ? this.body
          : this.body instanceof ba
            ? this.body.toString()
            : typeof this.body == 'object' ||
                typeof this.body == 'boolean' ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Dm(this.body)
        ? null
        : Vm(this.body)
          ? this.body.type || null
          : Sm(this.body)
            ? null
            : typeof this.body == 'string'
              ? 'text/plain'
              : this.body instanceof ba
                ? 'application/x-www-form-urlencoded;charset=UTF-8'
                : typeof this.body == 'object' ||
                    typeof this.body == 'number' ||
                    typeof this.body == 'boolean'
                  ? 'application/json'
                  : null;
    }
    clone(e = {}) {
      let r = e.method || this.method,
        a = e.url || this.url,
        o = e.responseType || this.responseType,
        n = e.transferCache ?? this.transferCache,
        i = e.body !== void 0 ? e.body : this.body,
        s = e.withCredentials ?? this.withCredentials,
        l = e.reportProgress ?? this.reportProgress,
        c = e.headers || this.headers,
        h = e.params || this.params,
        d = e.context ?? this.context;
      return (
        e.setHeaders !== void 0 &&
          (c = Object.keys(e.setHeaders).reduce(
            (u, p) => u.set(p, e.setHeaders[p]),
            c,
          )),
        e.setParams &&
          (h = Object.keys(e.setParams).reduce(
            (u, p) => u.set(p, e.setParams[p]),
            h,
          )),
        new t(r, a, i, {
          params: h,
          headers: c,
          context: d,
          reportProgress: l,
          responseType: o,
          withCredentials: s,
          transferCache: n,
        })
      );
    }
  },
  Fa = (function (t) {
    return (
      (t[(t.Sent = 0)] = 'Sent'),
      (t[(t.UploadProgress = 1)] = 'UploadProgress'),
      (t[(t.ResponseHeader = 2)] = 'ResponseHeader'),
      (t[(t.DownloadProgress = 3)] = 'DownloadProgress'),
      (t[(t.Response = 4)] = 'Response'),
      (t[(t.User = 5)] = 'User'),
      t
    );
  })(Fa || {}),
  An = class {
    constructor(e, r = 200, a = 'OK') {
      (this.headers = e.headers || new U0()),
        (this.status = e.status !== void 0 ? e.status : r),
        (this.statusText = e.statusText || a),
        (this.url = e.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  ts = class t extends An {
    constructor(e = {}) {
      super(e), (this.type = Fa.ResponseHeader);
    }
    clone(e = {}) {
      return new t({
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  Sn = class t extends An {
    constructor(e = {}) {
      super(e),
        (this.type = Fa.Response),
        (this.body = e.body !== void 0 ? e.body : null);
    }
    clone(e = {}) {
      return new t({
        body: e.body !== void 0 ? e.body : this.body,
        headers: e.headers || this.headers,
        status: e.status !== void 0 ? e.status : this.status,
        statusText: e.statusText || this.statusText,
        url: e.url || this.url || void 0,
      });
    }
  },
  ya = class extends An {
    constructor(e) {
      super(e, 0, 'Unknown Error'),
        (this.name = 'HttpErrorResponse'),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${e.url || '(unknown url)'}`)
          : (this.message = `Http failure response for ${e.url || '(unknown url)'}: ${e.status} ${e.statusText}`),
        (this.error = e.error || null);
    }
  },
  Tm = 200,
  wA = 204;
function Q6(t, e) {
  return {
    body: e,
    headers: t.headers,
    context: t.context,
    observe: t.observe,
    params: t.params,
    reportProgress: t.reportProgress,
    responseType: t.responseType,
    withCredentials: t.withCredentials,
    transferCache: t.transferCache,
  };
}
var B1 = (() => {
    let e = class e {
      constructor(a) {
        this.handler = a;
      }
      request(a, o, n = {}) {
        let i;
        if (a instanceof Cn) i = a;
        else {
          let c;
          n.headers instanceof U0 ? (c = n.headers) : (c = new U0(n.headers));
          let h;
          n.params &&
            (n.params instanceof ba
              ? (h = n.params)
              : (h = new ba({ fromObject: n.params }))),
            (i = new Cn(a, o, n.body !== void 0 ? n.body : null, {
              headers: c,
              context: n.context,
              params: h,
              reportProgress: n.reportProgress,
              responseType: n.responseType || 'json',
              withCredentials: n.withCredentials,
              transferCache: n.transferCache,
            }));
        }
        let s = D(i).pipe(z0(c => this.handler.handle(c)));
        if (a instanceof Cn || n.observe === 'events') return s;
        let l = s.pipe(me(c => c instanceof Sn));
        switch (n.observe || 'body') {
          case 'body':
            switch (i.responseType) {
              case 'arraybuffer':
                return l.pipe(
                  I(c => {
                    if (c.body !== null && !(c.body instanceof ArrayBuffer))
                      throw new Error('Response is not an ArrayBuffer.');
                    return c.body;
                  }),
                );
              case 'blob':
                return l.pipe(
                  I(c => {
                    if (c.body !== null && !(c.body instanceof Blob))
                      throw new Error('Response is not a Blob.');
                    return c.body;
                  }),
                );
              case 'text':
                return l.pipe(
                  I(c => {
                    if (c.body !== null && typeof c.body != 'string')
                      throw new Error('Response is not a string.');
                    return c.body;
                  }),
                );
              case 'json':
              default:
                return l.pipe(I(c => c.body));
            }
          case 'response':
            return l;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${n.observe}}`,
            );
        }
      }
      delete(a, o = {}) {
        return this.request('DELETE', a, o);
      }
      get(a, o = {}) {
        return this.request('GET', a, o);
      }
      head(a, o = {}) {
        return this.request('HEAD', a, o);
      }
      jsonp(a, o) {
        return this.request('JSONP', a, {
          params: new ba().append(o, 'JSONP_CALLBACK'),
          observe: 'body',
          responseType: 'json',
        });
      }
      options(a, o = {}) {
        return this.request('OPTIONS', a, o);
      }
      patch(a, o, n = {}) {
        return this.request('PATCH', a, Q6(n, o));
      }
      post(a, o, n = {}) {
        return this.request('POST', a, Q6(n, o));
      }
      put(a, o, n = {}) {
        return this.request('PUT', a, Q6(n, o));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(zn));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  xA = /^\)\]\}',?\n/,
  MA = 'X-Request-URL';
function _m(t) {
  if (t.url) return t.url;
  let e = MA.toLocaleLowerCase();
  return t.headers.get(e);
}
var yA = (() => {
    let e = class e {
      constructor() {
        (this.fetchImpl =
          m(ec, { optional: !0 })?.fetch ?? ((...a) => globalThis.fetch(...a))),
          (this.ngZone = m(T));
      }
      handle(a) {
        return new P(o => {
          let n = new AbortController();
          return (
            this.doRequest(a, n.signal, o).then(tc, i =>
              o.error(new ya({ error: i })),
            ),
            () => n.abort()
          );
        });
      }
      doRequest(a, o, n) {
        return I5(this, null, function* () {
          let i = this.createRequestInit(a),
            s;
          try {
            let f = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(a.urlWithParams, M({ signal: o }, i)),
            );
            bA(f), n.next({ type: Fa.Sent }), (s = yield f);
          } catch (f) {
            n.error(
              new ya({
                error: f,
                status: f.status ?? 0,
                statusText: f.statusText,
                url: a.urlWithParams,
                headers: f.headers,
              }),
            );
            return;
          }
          let l = new U0(s.headers),
            c = s.statusText,
            h = _m(s) ?? a.urlWithParams,
            d = s.status,
            u = null;
          if (
            (a.reportProgress &&
              n.next(new ts({ headers: l, status: d, statusText: c, url: h })),
            s.body)
          ) {
            let f = s.headers.get('content-length'),
              x = [],
              b = s.body.getReader(),
              z = 0,
              L,
              oe,
              U = typeof Zone < 'u' && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              I5(this, null, function* () {
                for (;;) {
                  let { done: ue, value: xe } = yield b.read();
                  if (ue) break;
                  if ((x.push(xe), (z += xe.length), a.reportProgress)) {
                    oe =
                      a.responseType === 'text'
                        ? (oe ?? '') +
                          (L ??= new TextDecoder()).decode(xe, { stream: !0 })
                        : void 0;
                    let je = () =>
                      n.next({
                        type: Fa.DownloadProgress,
                        total: f ? +f : void 0,
                        loaded: z,
                        partialText: oe,
                      });
                    U ? U.run(je) : je();
                  }
                }
              }),
            );
            let qe = this.concatChunks(x, z);
            try {
              let ue = s.headers.get('Content-Type') ?? '';
              u = this.parseBody(a, qe, ue);
            } catch (ue) {
              n.error(
                new ya({
                  error: ue,
                  headers: new U0(s.headers),
                  status: s.status,
                  statusText: s.statusText,
                  url: _m(s) ?? a.urlWithParams,
                }),
              );
              return;
            }
          }
          d === 0 && (d = u ? Tm : 0),
            d >= 200 && d < 300
              ? (n.next(
                  new Sn({
                    body: u,
                    headers: l,
                    status: d,
                    statusText: c,
                    url: h,
                  }),
                ),
                n.complete())
              : n.error(
                  new ya({
                    error: u,
                    headers: l,
                    status: d,
                    statusText: c,
                    url: h,
                  }),
                );
        });
      }
      parseBody(a, o, n) {
        switch (a.responseType) {
          case 'json':
            let i = new TextDecoder().decode(o).replace(xA, '');
            return i === '' ? null : JSON.parse(i);
          case 'text':
            return new TextDecoder().decode(o);
          case 'blob':
            return new Blob([o], { type: n });
          case 'arraybuffer':
            return o.buffer;
        }
      }
      createRequestInit(a) {
        let o = {},
          n = a.withCredentials ? 'include' : void 0;
        if (
          (a.headers.forEach((i, s) => (o[i] = s.join(','))),
          a.headers.has('Accept') ||
            (o.Accept = 'application/json, text/plain, */*'),
          !a.headers.has('Content-Type'))
        ) {
          let i = a.detectContentTypeHeader();
          i !== null && (o['Content-Type'] = i);
        }
        return {
          body: a.serializeBody(),
          method: a.method,
          headers: o,
          credentials: n,
        };
      }
      concatChunks(a, o) {
        let n = new Uint8Array(o),
          i = 0;
        for (let s of a) n.set(s, i), (i += s.length);
        return n;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  ec = class {};
function tc() {}
function bA(t) {
  t.then(tc, tc);
}
function FA(t, e) {
  return e(t);
}
function CA(t, e, r) {
  return (a, o) => pt(r, () => e(a, n => t(n, o)));
}
var ac = new F(''),
  zA = new F(''),
  AA = new F('', { providedIn: 'root', factory: () => !0 });
var Hm = (() => {
  let e = class e extends zn {
    constructor(a, o) {
      super(),
        (this.backend = a),
        (this.injector = o),
        (this.chain = null),
        (this.pendingTasks = m(T0)),
        (this.contributeToStability = m(AA));
    }
    handle(a) {
      if (this.chain === null) {
        let o = Array.from(
          new Set([...this.injector.get(ac), ...this.injector.get(zA, [])]),
        );
        this.chain = o.reduceRight((n, i) => CA(n, i, this.injector), FA);
      }
      if (this.contributeToStability) {
        let o = this.pendingTasks.add();
        return this.chain(a, n => this.backend.handle(n)).pipe(
          X1(() => this.pendingTasks.remove(o)),
        );
      } else return this.chain(a, o => this.backend.handle(o));
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(Ca), g(F1));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var SA = /^\)\]\}',?\n/;
function VA(t) {
  return 'responseURL' in t && t.responseURL
    ? t.responseURL
    : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
      ? t.getResponseHeader('X-Request-URL')
      : null;
}
var Em = (() => {
    let e = class e {
      constructor(a) {
        this.xhrFactory = a;
      }
      handle(a) {
        if (a.method === 'JSONP') throw new y(-2800, !1);
        let o = this.xhrFactory;
        return (o.ɵloadImpl ? Me(o.ɵloadImpl()) : D(null)).pipe(
          Ve(
            () =>
              new P(i => {
                let s = o.build();
                if (
                  (s.open(a.method, a.urlWithParams),
                  a.withCredentials && (s.withCredentials = !0),
                  a.headers.forEach((b, z) =>
                    s.setRequestHeader(b, z.join(',')),
                  ),
                  a.headers.has('Accept') ||
                    s.setRequestHeader(
                      'Accept',
                      'application/json, text/plain, */*',
                    ),
                  !a.headers.has('Content-Type'))
                ) {
                  let b = a.detectContentTypeHeader();
                  b !== null && s.setRequestHeader('Content-Type', b);
                }
                if (a.responseType) {
                  let b = a.responseType.toLowerCase();
                  s.responseType = b !== 'json' ? b : 'text';
                }
                let l = a.serializeBody(),
                  c = null,
                  h = () => {
                    if (c !== null) return c;
                    let b = s.statusText || 'OK',
                      z = new U0(s.getAllResponseHeaders()),
                      L = VA(s) || a.url;
                    return (
                      (c = new ts({
                        headers: z,
                        status: s.status,
                        statusText: b,
                        url: L,
                      })),
                      c
                    );
                  },
                  d = () => {
                    let { headers: b, status: z, statusText: L, url: oe } = h(),
                      U = null;
                    z !== wA &&
                      (U =
                        typeof s.response > 'u' ? s.responseText : s.response),
                      z === 0 && (z = U ? Tm : 0);
                    let qe = z >= 200 && z < 300;
                    if (a.responseType === 'json' && typeof U == 'string') {
                      let ue = U;
                      U = U.replace(SA, '');
                      try {
                        U = U !== '' ? JSON.parse(U) : null;
                      } catch (xe) {
                        (U = ue),
                          qe && ((qe = !1), (U = { error: xe, text: U }));
                      }
                    }
                    qe
                      ? (i.next(
                          new Sn({
                            body: U,
                            headers: b,
                            status: z,
                            statusText: L,
                            url: oe || void 0,
                          }),
                        ),
                        i.complete())
                      : i.error(
                          new ya({
                            error: U,
                            headers: b,
                            status: z,
                            statusText: L,
                            url: oe || void 0,
                          }),
                        );
                  },
                  u = b => {
                    let { url: z } = h(),
                      L = new ya({
                        error: b,
                        status: s.status || 0,
                        statusText: s.statusText || 'Unknown Error',
                        url: z || void 0,
                      });
                    i.error(L);
                  },
                  p = !1,
                  f = b => {
                    p || (i.next(h()), (p = !0));
                    let z = { type: Fa.DownloadProgress, loaded: b.loaded };
                    b.lengthComputable && (z.total = b.total),
                      a.responseType === 'text' &&
                        s.responseText &&
                        (z.partialText = s.responseText),
                      i.next(z);
                  },
                  x = b => {
                    let z = { type: Fa.UploadProgress, loaded: b.loaded };
                    b.lengthComputable && (z.total = b.total), i.next(z);
                  };
                return (
                  s.addEventListener('load', d),
                  s.addEventListener('error', u),
                  s.addEventListener('timeout', u),
                  s.addEventListener('abort', u),
                  a.reportProgress &&
                    (s.addEventListener('progress', f),
                    l !== null &&
                      s.upload &&
                      s.upload.addEventListener('progress', x)),
                  s.send(l),
                  i.next({ type: Fa.Sent }),
                  () => {
                    s.removeEventListener('error', u),
                      s.removeEventListener('abort', u),
                      s.removeEventListener('load', d),
                      s.removeEventListener('timeout', u),
                      a.reportProgress &&
                        (s.removeEventListener('progress', f),
                        l !== null &&
                          s.upload &&
                          s.upload.removeEventListener('progress', x)),
                      s.readyState !== s.DONE && s.abort();
                  }
                );
              }),
          ),
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(fo));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  km = new F(''),
  DA = 'XSRF-TOKEN',
  _A = new F('', { providedIn: 'root', factory: () => DA }),
  HA = 'X-XSRF-TOKEN',
  EA = new F('', { providedIn: 'root', factory: () => HA }),
  as = class {},
  TA = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this.doc = a),
          (this.platform = o),
          (this.cookieName = n),
          (this.lastCookieString = ''),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === 'server') return null;
        let a = this.doc.cookie || '';
        return (
          a !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Zi(a, this.cookieName)),
            (this.lastCookieString = a)),
          this.lastToken
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y), g(V1), g(_A));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function kA(t, e) {
  let r = t.url.toLowerCase();
  if (
    !m(km) ||
    t.method === 'GET' ||
    t.method === 'HEAD' ||
    r.startsWith('http://') ||
    r.startsWith('https://')
  )
    return e(t);
  let a = m(as).getToken(),
    o = m(EA);
  return (
    a != null &&
      !t.headers.has(o) &&
      (t = t.clone({ headers: t.headers.set(o, a) })),
    e(t)
  );
}
var Lm = (function (t) {
  return (
    (t[(t.Interceptors = 0)] = 'Interceptors'),
    (t[(t.LegacyInterceptors = 1)] = 'LegacyInterceptors'),
    (t[(t.CustomXsrfConfiguration = 2)] = 'CustomXsrfConfiguration'),
    (t[(t.NoXsrfProtection = 3)] = 'NoXsrfProtection'),
    (t[(t.JsonpSupport = 4)] = 'JsonpSupport'),
    (t[(t.RequestsMadeViaParent = 5)] = 'RequestsMadeViaParent'),
    (t[(t.Fetch = 6)] = 'Fetch'),
    t
  );
})(Lm || {});
function LA(t, e) {
  return { ɵkind: t, ɵproviders: e };
}
function jY(...t) {
  let e = [
    B1,
    Em,
    Hm,
    { provide: zn, useExisting: Hm },
    { provide: Ca, useFactory: () => m(yA, { optional: !0 }) ?? m(Em) },
    { provide: ac, useValue: kA, multi: !0 },
    { provide: km, useValue: !0 },
    { provide: as, useClass: TA },
  ];
  for (let r of t) e.push(...r.ɵproviders);
  return Et(e);
}
function YY(t) {
  return LA(
    Lm.Interceptors,
    t.map(e => ({ provide: ac, useValue: e, multi: !0 })),
  );
}
var nc = class extends Wi {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  ic = class t extends nc {
    static makeCurrent() {
      vm(new t());
    }
    onAndCancel(e, r, a) {
      return (
        e.addEventListener(r, a),
        () => {
          e.removeEventListener(r, a);
        }
      );
    }
    dispatchEvent(e, r) {
      e.dispatchEvent(r);
    }
    remove(e) {
      e.remove();
    }
    createElement(e, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(e);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(e) {
      return e.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(e) {
      return e instanceof DocumentFragment;
    }
    getGlobalEventTarget(e, r) {
      return r === 'window'
        ? window
        : r === 'document'
          ? e
          : r === 'body'
            ? e.body
            : null;
    }
    getBaseHref(e) {
      let r = IA();
      return r == null ? null : PA(r);
    }
    resetBaseElement() {
      Vn = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(e) {
      return Zi(document.cookie, e);
    }
  },
  Vn = null;
function IA() {
  return (
    (Vn = Vn || document.querySelector('base')),
    Vn ? Vn.getAttribute('href') : null
  );
}
function PA(t) {
  return new URL(t, document.baseURI).pathname;
}
var BA = (() => {
    let e = class e {
      build() {
        return new XMLHttpRequest();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  rs = new F(''),
  Om = (() => {
    let e = class e {
      constructor(a, o) {
        (this._zone = o),
          (this._eventNameToPlugin = new Map()),
          a.forEach(n => {
            n.manager = this;
          }),
          (this._plugins = a.slice().reverse());
      }
      addEventListener(a, o, n) {
        return this._findPluginFor(o).addEventListener(a, o, n);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(a) {
        let o = this._eventNameToPlugin.get(a);
        if (o) return o;
        if (((o = this._plugins.find(i => i.supports(a))), !o))
          throw new y(5101, !1);
        return this._eventNameToPlugin.set(a, o), o;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(rs), g(T));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Dn = class {
    constructor(e) {
      this._doc = e;
    }
  },
  rc = 'ng-app-id',
  Nm = (() => {
    let e = class e {
      constructor(a, o, n, i = {}) {
        (this.doc = a),
          (this.appId = o),
          (this.nonce = n),
          (this.platformId = i),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Ji(i)),
          this.resetHostNodes();
      }
      addStyles(a) {
        for (let o of a)
          this.changeUsageCount(o, 1) === 1 && this.onStyleAdded(o);
      }
      removeStyles(a) {
        for (let o of a)
          this.changeUsageCount(o, -1) <= 0 && this.onStyleRemoved(o);
      }
      ngOnDestroy() {
        let a = this.styleNodesInDOM;
        a && (a.forEach(o => o.remove()), a.clear());
        for (let o of this.getAllStyles()) this.onStyleRemoved(o);
        this.resetHostNodes();
      }
      addHost(a) {
        this.hostNodes.add(a);
        for (let o of this.getAllStyles()) this.addStyleToHost(a, o);
      }
      removeHost(a) {
        this.hostNodes.delete(a);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(a) {
        for (let o of this.hostNodes) this.addStyleToHost(o, a);
      }
      onStyleRemoved(a) {
        let o = this.styleRef;
        o.get(a)?.elements?.forEach(n => n.remove()), o.delete(a);
      }
      collectServerRenderedStyles() {
        let a = this.doc.head?.querySelectorAll(`style[${rc}="${this.appId}"]`);
        if (a?.length) {
          let o = new Map();
          return (
            a.forEach(n => {
              n.textContent != null && o.set(n.textContent, n);
            }),
            o
          );
        }
        return null;
      }
      changeUsageCount(a, o) {
        let n = this.styleRef;
        if (n.has(a)) {
          let i = n.get(a);
          return (i.usage += o), i.usage;
        }
        return n.set(a, { usage: o, elements: [] }), o;
      }
      getStyleElement(a, o) {
        let n = this.styleNodesInDOM,
          i = n?.get(o);
        if (i?.parentNode === a) return n.delete(o), i.removeAttribute(rc), i;
        {
          let s = this.doc.createElement('style');
          return (
            this.nonce && s.setAttribute('nonce', this.nonce),
            (s.textContent = o),
            this.platformIsServer && s.setAttribute(rc, this.appId),
            a.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(a, o) {
        let n = this.getStyleElement(a, o),
          i = this.styleRef,
          s = i.get(o)?.elements;
        s ? s.push(n) : i.set(o, { elements: [n], usage: 1 });
      }
      resetHostNodes() {
        let a = this.hostNodes;
        a.clear(), a.add(this.doc.head);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y), g(Fi), g(k0, 8), g(V1));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  oc = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  lc = /%COMP%/g,
  Rm = '%COMP%',
  OA = `_nghost-${Rm}`,
  NA = `_ngcontent-${Rm}`,
  RA = !0,
  qA = new F('', { providedIn: 'root', factory: () => RA });
function jA(t) {
  return NA.replace(lc, t);
}
function YA(t) {
  return OA.replace(lc, t);
}
function qm(t, e) {
  return e.map(r => r.replace(lc, t));
}
var os = (() => {
    let e = class e {
      constructor(a, o, n, i, s, l, c, h = null) {
        (this.eventManager = a),
          (this.sharedStylesHost = o),
          (this.appId = n),
          (this.removeStylesOnCompDestroy = i),
          (this.doc = s),
          (this.platformId = l),
          (this.ngZone = c),
          (this.nonce = h),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Ji(l)),
          (this.defaultRenderer = new _n(a, s, c, this.platformIsServer));
      }
      createRenderer(a, o) {
        if (!a || !o) return this.defaultRenderer;
        this.platformIsServer &&
          o.encapsulation === Qt.ShadowDom &&
          (o = Q(M({}, o), { encapsulation: Qt.Emulated }));
        let n = this.getOrCreateRenderer(a, o);
        return (
          n instanceof ns
            ? n.applyToHost(a)
            : n instanceof Hn && n.applyStyles(),
          n
        );
      }
      getOrCreateRenderer(a, o) {
        let n = this.rendererByCompId,
          i = n.get(o.id);
        if (!i) {
          let s = this.doc,
            l = this.ngZone,
            c = this.eventManager,
            h = this.sharedStylesHost,
            d = this.removeStylesOnCompDestroy,
            u = this.platformIsServer;
          switch (o.encapsulation) {
            case Qt.Emulated:
              i = new ns(c, h, o, this.appId, d, s, l, u);
              break;
            case Qt.ShadowDom:
              return new sc(c, h, a, o, s, l, this.nonce, u);
            default:
              i = new Hn(c, h, o, d, s, l, u);
              break;
          }
          n.set(o.id, i);
        }
        return i;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Om), g(Nm), g(Fi), g(qA), g(Y), g(V1), g(T), g(k0));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  _n = class {
    constructor(e, r, a, o) {
      (this.eventManager = e),
        (this.doc = r),
        (this.ngZone = a),
        (this.platformIsServer = o),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(e, r) {
      return r
        ? this.doc.createElementNS(oc[r] || r, e)
        : this.doc.createElement(e);
    }
    createComment(e) {
      return this.doc.createComment(e);
    }
    createText(e) {
      return this.doc.createTextNode(e);
    }
    appendChild(e, r) {
      (Pm(e) ? e.content : e).appendChild(r);
    }
    insertBefore(e, r, a) {
      e && (Pm(e) ? e.content : e).insertBefore(r, a);
    }
    removeChild(e, r) {
      r.remove();
    }
    selectRootElement(e, r) {
      let a = typeof e == 'string' ? this.doc.querySelector(e) : e;
      if (!a) throw new y(-5104, !1);
      return r || (a.textContent = ''), a;
    }
    parentNode(e) {
      return e.parentNode;
    }
    nextSibling(e) {
      return e.nextSibling;
    }
    setAttribute(e, r, a, o) {
      if (o) {
        r = o + ':' + r;
        let n = oc[o];
        n ? e.setAttributeNS(n, r, a) : e.setAttribute(r, a);
      } else e.setAttribute(r, a);
    }
    removeAttribute(e, r, a) {
      if (a) {
        let o = oc[a];
        o ? e.removeAttributeNS(o, r) : e.removeAttribute(`${a}:${r}`);
      } else e.removeAttribute(r);
    }
    addClass(e, r) {
      e.classList.add(r);
    }
    removeClass(e, r) {
      e.classList.remove(r);
    }
    setStyle(e, r, a, o) {
      o & (t0.DashCase | t0.Important)
        ? e.style.setProperty(r, a, o & t0.Important ? 'important' : '')
        : (e.style[r] = a);
    }
    removeStyle(e, r, a) {
      a & t0.DashCase ? e.style.removeProperty(r) : (e.style[r] = '');
    }
    setProperty(e, r, a) {
      e != null && (e[r] = a);
    }
    setValue(e, r) {
      e.nodeValue = r;
    }
    listen(e, r, a) {
      if (
        typeof e == 'string' &&
        ((e = j0().getGlobalEventTarget(this.doc, e)), !e)
      )
        throw new Error(`Unsupported event target ${e} for event ${r}`);
      return this.eventManager.addEventListener(
        e,
        r,
        this.decoratePreventDefault(a),
      );
    }
    decoratePreventDefault(e) {
      return r => {
        if (r === '__ngUnwrap__') return e;
        (this.platformIsServer ? this.ngZone.runGuarded(() => e(r)) : e(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function Pm(t) {
  return t.tagName === 'TEMPLATE' && t.content !== void 0;
}
var sc = class extends _n {
    constructor(e, r, a, o, n, i, s, l) {
      super(e, n, i, l),
        (this.sharedStylesHost = r),
        (this.hostEl = a),
        (this.shadowRoot = a.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = qm(o.id, o.styles);
      for (let h of c) {
        let d = document.createElement('style');
        s && d.setAttribute('nonce', s),
          (d.textContent = h),
          this.shadowRoot.appendChild(d);
      }
    }
    nodeOrShadowRoot(e) {
      return e === this.hostEl ? this.shadowRoot : e;
    }
    appendChild(e, r) {
      return super.appendChild(this.nodeOrShadowRoot(e), r);
    }
    insertBefore(e, r, a) {
      return super.insertBefore(this.nodeOrShadowRoot(e), r, a);
    }
    removeChild(e, r) {
      return super.removeChild(null, r);
    }
    parentNode(e) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Hn = class extends _n {
    constructor(e, r, a, o, n, i, s, l) {
      super(e, n, i, s),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = o),
        (this.styles = l ? qm(l, a.styles) : a.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ns = class extends Hn {
    constructor(e, r, a, o, n, i, s, l) {
      let c = o + '-' + a.id;
      super(e, r, a, n, i, s, l, c),
        (this.contentAttr = jA(c)),
        (this.hostAttr = YA(c));
    }
    applyToHost(e) {
      this.applyStyles(), this.setAttribute(e, this.hostAttr, '');
    }
    createElement(e, r) {
      let a = super.createElement(e, r);
      return super.setAttribute(a, this.contentAttr, ''), a;
    }
  },
  UA = (() => {
    let e = class e extends Dn {
      constructor(a) {
        super(a);
      }
      supports(a) {
        return !0;
      }
      addEventListener(a, o, n) {
        return (
          a.addEventListener(o, n, !1), () => this.removeEventListener(a, o, n)
        );
      }
      removeEventListener(a, o, n) {
        return a.removeEventListener(o, n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  $A = (() => {
    let e = class e extends Dn {
      constructor(a) {
        super(a), (this.delegate = m(lm, { optional: !0 }));
      }
      supports(a) {
        return this.delegate ? this.delegate.supports(a) : !1;
      }
      addEventListener(a, o, n) {
        return this.delegate.addEventListener(a, o, n);
      }
      removeEventListener(a, o, n) {
        return this.delegate.removeEventListener(a, o, n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  Bm = ['alt', 'control', 'meta', 'shift'],
  WA = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  GA = {
    alt: t => t.altKey,
    control: t => t.ctrlKey,
    meta: t => t.metaKey,
    shift: t => t.shiftKey,
  },
  KA = (() => {
    let e = class e extends Dn {
      constructor(a) {
        super(a);
      }
      supports(a) {
        return e.parseEventName(a) != null;
      }
      addEventListener(a, o, n) {
        let i = e.parseEventName(o),
          s = e.eventCallback(i.fullKey, n, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => j0().onAndCancel(a, i.domEventName, s));
      }
      static parseEventName(a) {
        let o = a.toLowerCase().split('.'),
          n = o.shift();
        if (o.length === 0 || !(n === 'keydown' || n === 'keyup')) return null;
        let i = e._normalizeKey(o.pop()),
          s = '',
          l = o.indexOf('code');
        if (
          (l > -1 && (o.splice(l, 1), (s = 'code.')),
          Bm.forEach(h => {
            let d = o.indexOf(h);
            d > -1 && (o.splice(d, 1), (s += h + '.'));
          }),
          (s += i),
          o.length != 0 || i.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = n), (c.fullKey = s), c;
      }
      static matchEventFullKeyCode(a, o) {
        let n = WA[a.key] || a.key,
          i = '';
        return (
          o.indexOf('code.') > -1 && ((n = a.code), (i = 'code.')),
          n == null || !n
            ? !1
            : ((n = n.toLowerCase()),
              n === ' ' ? (n = 'space') : n === '.' && (n = 'dot'),
              Bm.forEach(s => {
                if (s !== n) {
                  let l = GA[s];
                  l(a) && (i += s + '.');
                }
              }),
              (i += n),
              i === o)
        );
      }
      static eventCallback(a, o, n) {
        return i => {
          e.matchEventFullKeyCode(i, a) && n.runGuarded(() => o(i));
        };
      }
      static _normalizeKey(a) {
        return a === 'esc' ? 'escape' : a;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function hU(t, e) {
  return sm(M({ rootComponent: t }, ZA(e)));
}
function ZA(t) {
  return {
    appProviders: [...tS, ...(t?.providers ?? [])],
    platformProviders: eS,
  };
}
function QA() {
  ic.makeCurrent();
}
function XA() {
  return new e0();
}
function JA() {
  return Vp(document), document;
}
var eS = [
  { provide: V1, useValue: K6 },
  { provide: h6, useValue: QA, multi: !0 },
  { provide: Y, useFactory: JA, deps: [] },
];
var tS = [
  { provide: di, useValue: 'root' },
  { provide: e0, useFactory: XA, deps: [] },
  { provide: rs, useClass: UA, multi: !0, deps: [Y, T, V1] },
  { provide: rs, useClass: KA, multi: !0, deps: [Y] },
  { provide: rs, useClass: $A, multi: !0 },
  os,
  Nm,
  Om,
  { provide: Y1, useExisting: os },
  { provide: fo, useClass: BA, deps: [] },
  [],
];
var is = (() => {
  let e = class e {
    constructor(a) {
      this._doc = a;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(a) {
      this._doc.title = a || '';
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(Y));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var En = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({
        token: e,
        factory: function (o) {
          let n = null;
          return o ? (n = new (o || e)()) : (n = g(aS)), n;
        },
        providedIn: 'root',
      }));
    let t = e;
    return t;
  })(),
  aS = (() => {
    let e = class e extends En {
      constructor(a) {
        super(), (this._doc = a);
      }
      sanitize(a, o) {
        if (o == null) return null;
        switch (a) {
          case at.NONE:
            return o;
          case at.HTML:
            return L0(o, 'HTML') ? tt(o) : u6(this._doc, String(o)).toString();
          case at.STYLE:
            return L0(o, 'Style') ? tt(o) : o;
          case at.SCRIPT:
            if (L0(o, 'Script')) return tt(o);
            throw new y(5200, !1);
          case at.URL:
            return L0(o, 'URL') ? tt(o) : zi(String(o));
          case at.RESOURCE_URL:
            if (L0(o, 'ResourceURL')) return tt(o);
            throw new y(5201, !1);
          default:
            throw new y(5202, !1);
        }
      }
      bypassSecurityTrustHtml(a) {
        return Ep(a);
      }
      bypassSecurityTrustStyle(a) {
        return Tp(a);
      }
      bypassSecurityTrustScript(a) {
        return kp(a);
      }
      bypassSecurityTrustUrl(a) {
        return Lp(a);
      }
      bypassSecurityTrustResourceUrl(a) {
        return Ip(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function rS(t) {
  t || (dr(rS), (t = m(E0)));
  let e = new P(r => t.onDestroy(r.next.bind(r)));
  return r => r.pipe(S(e));
}
function oS(t, e) {
  !e?.injector && dr(oS);
  let r = e?.injector ?? m(Oe),
    a = new O1(1),
    o = Bi(
      () => {
        let n;
        try {
          n = t();
        } catch (i) {
          _1(() => a.error(i));
          return;
        }
        _1(() => a.next(n));
      },
      { injector: r, manualCleanup: !0 },
    );
  return (
    r.get(E0).onDestroy(() => {
      o.destroy(), a.complete();
    }),
    a.asObservable()
  );
}
function hc(t, e) {
  let r = !e?.manualCleanup;
  r && !e?.injector && dr(hc);
  let a = r ? (e?.injector?.get(E0) ?? m(E0)) : null,
    o = nS(e?.equal),
    n;
  e?.requireSync
    ? (n = ma({ kind: 0 }, { equal: o }))
    : (n = ma({ kind: 1, value: e?.initialValue }, { equal: o }));
  let i = t.subscribe({
    next: s => n.set({ kind: 1, value: s }),
    error: s => {
      if (e?.rejectErrors) throw s;
      n.set({ kind: 2, error: s });
    },
  });
  if (e?.requireSync && n().kind === 0) throw new y(601, !1);
  return (
    a?.onDestroy(i.unsubscribe.bind(i)),
    O0(
      () => {
        let s = n();
        switch (s.kind) {
          case 1:
            return s.value;
          case 2:
            throw s.error;
          case 0:
            throw new y(601, !1);
        }
      },
      { equal: e?.equal },
    )
  );
}
function nS(t = Object.is) {
  return (e, r) => e.kind === 1 && r.kind === 1 && t(e.value, r.value);
}
var re = 'primary',
  Wn = Symbol('RouteTitle'),
  mc = class {
    constructor(e) {
      this.params = e || {};
    }
    has(e) {
      return Object.prototype.hasOwnProperty.call(this.params, e);
    }
    get(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(e) {
      if (this.has(e)) {
        let r = this.params[e];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Mo(t) {
  return new mc(t);
}
function iS(t, e, r) {
  let a = r.path.split('/');
  if (
    a.length > t.length ||
    (r.pathMatch === 'full' && (e.hasChildren() || a.length < t.length))
  )
    return null;
  let o = {};
  for (let n = 0; n < a.length; n++) {
    let i = a[n],
      s = t[n];
    if (i[0] === ':') o[i.substring(1)] = s;
    else if (i !== s.path) return null;
  }
  return { consumed: t.slice(0, a.length), posParams: o };
}
function sS(t, e) {
  if (t.length !== e.length) return !1;
  for (let r = 0; r < t.length; ++r) if (!d0(t[r], e[r])) return !1;
  return !0;
}
function d0(t, e) {
  let r = t ? vc(t) : void 0,
    a = e ? vc(e) : void 0;
  if (!r || !a || r.length != a.length) return !1;
  let o;
  for (let n = 0; n < r.length; n++)
    if (((o = r[n]), !Jm(t[o], e[o]))) return !1;
  return !0;
}
function vc(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function Jm(t, e) {
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return !1;
    let r = [...t].sort(),
      a = [...e].sort();
    return r.every((o, n) => a[n] === o);
  } else return t === e;
}
function e9(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function Sa(t) {
  return Q1(t) ? t : wa(t) ? Me(Promise.resolve(t)) : D(t);
}
var lS = { exact: a9, subset: r9 },
  t9 = { exact: cS, subset: hS, ignored: () => !0 };
function jm(t, e, r) {
  return (
    lS[r.paths](t.root, e.root, r.matrixParams) &&
    t9[r.queryParams](t.queryParams, e.queryParams) &&
    !(r.fragment === 'exact' && t.fragment !== e.fragment)
  );
}
function cS(t, e) {
  return d0(t, e);
}
function a9(t, e, r) {
  if (
    !vr(t.segments, e.segments) ||
    !cs(t.segments, e.segments, r) ||
    t.numberOfChildren !== e.numberOfChildren
  )
    return !1;
  for (let a in e.children)
    if (!t.children[a] || !a9(t.children[a], e.children[a], r)) return !1;
  return !0;
}
function hS(t, e) {
  return (
    Object.keys(e).length <= Object.keys(t).length &&
    Object.keys(e).every(r => Jm(t[r], e[r]))
  );
}
function r9(t, e, r) {
  return o9(t, e, e.segments, r);
}
function o9(t, e, r, a) {
  if (t.segments.length > r.length) {
    let o = t.segments.slice(0, r.length);
    return !(!vr(o, r) || e.hasChildren() || !cs(o, r, a));
  } else if (t.segments.length === r.length) {
    if (!vr(t.segments, r) || !cs(t.segments, r, a)) return !1;
    for (let o in e.children)
      if (!t.children[o] || !r9(t.children[o], e.children[o], a)) return !1;
    return !0;
  } else {
    let o = r.slice(0, t.segments.length),
      n = r.slice(t.segments.length);
    return !vr(t.segments, o) || !cs(t.segments, o, a) || !t.children[re]
      ? !1
      : o9(t.children[re], e, n, a);
  }
}
function cs(t, e, r) {
  return e.every((a, o) => t9[r](t[o].parameters, a.parameters));
}
var W0 = class {
    constructor(e = new Fe([], {}), r = {}, a = null) {
      (this.root = e), (this.queryParams = r), (this.fragment = a);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Mo(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return pS.serialize(this);
    }
  },
  Fe = class {
    constructor(e, r) {
      (this.segments = e),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach(a => (a.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return hs(this);
    }
  },
  mr = class {
    constructor(e, r) {
      (this.path = e), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= Mo(this.parameters)), this._parameterMap;
    }
    toString() {
      return i9(this);
    }
  };
function dS(t, e) {
  return vr(t, e) && t.every((r, a) => d0(r.parameters, e[a].parameters));
}
function vr(t, e) {
  return t.length !== e.length ? !1 : t.every((r, a) => r.path === e[a].path);
}
function uS(t, e) {
  let r = [];
  return (
    Object.entries(t.children).forEach(([a, o]) => {
      a === re && (r = r.concat(e(o, a)));
    }),
    Object.entries(t.children).forEach(([a, o]) => {
      a !== re && (r = r.concat(e(o, a)));
    }),
    r
  );
}
var Gn = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => new yo(), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  yo = class {
    parse(e) {
      let r = new wc(e);
      return new W0(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment(),
      );
    }
    serialize(e) {
      let r = `/${Tn(e.root, !0)}`,
        a = vS(e.queryParams),
        o = typeof e.fragment == 'string' ? `#${fS(e.fragment)}` : '';
      return `${r}${a}${o}`;
    }
  },
  pS = new yo();
function hs(t) {
  return t.segments.map(e => i9(e)).join('/');
}
function Tn(t, e) {
  if (!t.hasChildren()) return hs(t);
  if (e) {
    let r = t.children[re] ? Tn(t.children[re], !1) : '',
      a = [];
    return (
      Object.entries(t.children).forEach(([o, n]) => {
        o !== re && a.push(`${o}:${Tn(n, !1)}`);
      }),
      a.length > 0 ? `${r}(${a.join('//')})` : r
    );
  } else {
    let r = uS(t, (a, o) =>
      o === re ? [Tn(t.children[re], !1)] : [`${o}:${Tn(a, !1)}`],
    );
    return Object.keys(t.children).length === 1 && t.children[re] != null
      ? `${hs(t)}/${r[0]}`
      : `${hs(t)}/(${r.join('//')})`;
  }
}
function n9(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}
function ss(t) {
  return n9(t).replace(/%3B/gi, ';');
}
function fS(t) {
  return encodeURI(t);
}
function gc(t) {
  return n9(t)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%26/gi, '&');
}
function ds(t) {
  return decodeURIComponent(t);
}
function Ym(t) {
  return ds(t.replace(/\+/g, '%20'));
}
function i9(t) {
  return `${gc(t.path)}${mS(t.parameters)}`;
}
function mS(t) {
  return Object.entries(t)
    .map(([e, r]) => `;${gc(e)}=${gc(r)}`)
    .join('');
}
function vS(t) {
  let e = Object.entries(t)
    .map(([r, a]) =>
      Array.isArray(a)
        ? a.map(o => `${ss(r)}=${ss(o)}`).join('&')
        : `${ss(r)}=${ss(a)}`,
    )
    .filter(r => r);
  return e.length ? `?${e.join('&')}` : '';
}
var gS = /^[^\/()?;#]+/;
function dc(t) {
  let e = t.match(gS);
  return e ? e[0] : '';
}
var wS = /^[^\/()?;=#]+/;
function xS(t) {
  let e = t.match(wS);
  return e ? e[0] : '';
}
var MS = /^[^=?&#]+/;
function yS(t) {
  let e = t.match(MS);
  return e ? e[0] : '';
}
var bS = /^[^&#]+/;
function FS(t) {
  let e = t.match(bS);
  return e ? e[0] : '';
}
var wc = class {
  constructor(e) {
    (this.url = e), (this.remaining = e);
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' ||
      this.peekStartsWith('?') ||
      this.peekStartsWith('#')
        ? new Fe([], {})
        : new Fe([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let e = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(e);
      while (this.consumeOptional('&'));
    return e;
  }
  parseFragment() {
    return this.consumeOptional('#')
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let e = [];
    for (
      this.peekStartsWith('(') || e.push(this.parseSegment());
      this.peekStartsWith('/') &&
      !this.peekStartsWith('//') &&
      !this.peekStartsWith('/(');

    )
      this.capture('/'), e.push(this.parseSegment());
    let r = {};
    this.peekStartsWith('/(') &&
      (this.capture('/'), (r = this.parseParens(!0)));
    let a = {};
    return (
      this.peekStartsWith('(') && (a = this.parseParens(!1)),
      (e.length > 0 || Object.keys(r).length > 0) && (a[re] = new Fe(e, r)),
      a
    );
  }
  parseSegment() {
    let e = dc(this.remaining);
    if (e === '' && this.peekStartsWith(';')) throw new y(4009, !1);
    return this.capture(e), new mr(ds(e), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let e = {};
    for (; this.consumeOptional(';'); ) this.parseParam(e);
    return e;
  }
  parseParam(e) {
    let r = xS(this.remaining);
    if (!r) return;
    this.capture(r);
    let a = '';
    if (this.consumeOptional('=')) {
      let o = dc(this.remaining);
      o && ((a = o), this.capture(a));
    }
    e[ds(r)] = ds(a);
  }
  parseQueryParam(e) {
    let r = yS(this.remaining);
    if (!r) return;
    this.capture(r);
    let a = '';
    if (this.consumeOptional('=')) {
      let i = FS(this.remaining);
      i && ((a = i), this.capture(a));
    }
    let o = Ym(r),
      n = Ym(a);
    if (e.hasOwnProperty(o)) {
      let i = e[o];
      Array.isArray(i) || ((i = [i]), (e[o] = i)), i.push(n);
    } else e[o] = n;
  }
  parseParens(e) {
    let r = {};
    for (
      this.capture('(');
      !this.consumeOptional(')') && this.remaining.length > 0;

    ) {
      let a = dc(this.remaining),
        o = this.remaining[a.length];
      if (o !== '/' && o !== ')' && o !== ';') throw new y(4010, !1);
      let n;
      a.indexOf(':') > -1
        ? ((n = a.slice(0, a.indexOf(':'))), this.capture(n), this.capture(':'))
        : e && (n = re);
      let i = this.parseChildren();
      (r[n] = Object.keys(i).length === 1 ? i[re] : new Fe([], i)),
        this.consumeOptional('//');
    }
    return r;
  }
  peekStartsWith(e) {
    return this.remaining.startsWith(e);
  }
  consumeOptional(e) {
    return this.peekStartsWith(e)
      ? ((this.remaining = this.remaining.substring(e.length)), !0)
      : !1;
  }
  capture(e) {
    if (!this.consumeOptional(e)) throw new y(4011, !1);
  }
};
function s9(t) {
  return t.segments.length > 0 ? new Fe([], { [re]: t }) : t;
}
function l9(t) {
  let e = {};
  for (let [a, o] of Object.entries(t.children)) {
    let n = l9(o);
    if (a === re && n.segments.length === 0 && n.hasChildren())
      for (let [i, s] of Object.entries(n.children)) e[i] = s;
    else (n.segments.length > 0 || n.hasChildren()) && (e[a] = n);
  }
  let r = new Fe(t.segments, e);
  return CS(r);
}
function CS(t) {
  if (t.numberOfChildren === 1 && t.children[re]) {
    let e = t.children[re];
    return new Fe(t.segments.concat(e.segments), e.children);
  }
  return t;
}
function gr(t) {
  return t instanceof W0;
}
function zS(t, e, r = null, a = null) {
  let o = c9(t);
  return h9(o, e, r, a);
}
function c9(t) {
  let e;
  function r(n) {
    let i = {};
    for (let l of n.children) {
      let c = r(l);
      i[l.outlet] = c;
    }
    let s = new Fe(n.url, i);
    return n === t && (e = s), s;
  }
  let a = r(t.root),
    o = s9(a);
  return e ?? o;
}
function h9(t, e, r, a) {
  let o = t;
  for (; o.parent; ) o = o.parent;
  if (e.length === 0) return uc(o, o, o, r, a);
  let n = AS(e);
  if (n.toRoot()) return uc(o, o, new Fe([], {}), r, a);
  let i = SS(n, o, t),
    s = i.processChildren
      ? In(i.segmentGroup, i.index, n.commands)
      : u9(i.segmentGroup, i.index, n.commands);
  return uc(o, i.segmentGroup, s, r, a);
}
function us(t) {
  return typeof t == 'object' && t != null && !t.outlets && !t.segmentPath;
}
function On(t) {
  return typeof t == 'object' && t != null && t.outlets;
}
function uc(t, e, r, a, o) {
  let n = {};
  a &&
    Object.entries(a).forEach(([l, c]) => {
      n[l] = Array.isArray(c) ? c.map(h => `${h}`) : `${c}`;
    });
  let i;
  t === e ? (i = r) : (i = d9(t, e, r));
  let s = s9(l9(i));
  return new W0(s, n, o);
}
function d9(t, e, r) {
  let a = {};
  return (
    Object.entries(t.children).forEach(([o, n]) => {
      n === e ? (a[o] = r) : (a[o] = d9(n, e, r));
    }),
    new Fe(t.segments, a)
  );
}
var ps = class {
  constructor(e, r, a) {
    if (
      ((this.isAbsolute = e),
      (this.numberOfDoubleDots = r),
      (this.commands = a),
      e && a.length > 0 && us(a[0]))
    )
      throw new y(4003, !1);
    let o = a.find(On);
    if (o && o !== e9(a)) throw new y(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/'
    );
  }
};
function AS(t) {
  if (typeof t[0] == 'string' && t.length === 1 && t[0] === '/')
    return new ps(!0, 0, t);
  let e = 0,
    r = !1,
    a = t.reduce((o, n, i) => {
      if (typeof n == 'object' && n != null) {
        if (n.outlets) {
          let s = {};
          return (
            Object.entries(n.outlets).forEach(([l, c]) => {
              s[l] = typeof c == 'string' ? c.split('/') : c;
            }),
            [...o, { outlets: s }]
          );
        }
        if (n.segmentPath) return [...o, n.segmentPath];
      }
      return typeof n != 'string'
        ? [...o, n]
        : i === 0
          ? (n.split('/').forEach((s, l) => {
              (l == 0 && s === '.') ||
                (l == 0 && s === ''
                  ? (r = !0)
                  : s === '..'
                    ? e++
                    : s != '' && o.push(s));
            }),
            o)
          : [...o, n];
    }, []);
  return new ps(r, e, a);
}
var go = class {
  constructor(e, r, a) {
    (this.segmentGroup = e), (this.processChildren = r), (this.index = a);
  }
};
function SS(t, e, r) {
  if (t.isAbsolute) return new go(e, !0, 0);
  if (!r) return new go(e, !1, NaN);
  if (r.parent === null) return new go(r, !0, 0);
  let a = us(t.commands[0]) ? 0 : 1,
    o = r.segments.length - 1 + a;
  return VS(r, o, t.numberOfDoubleDots);
}
function VS(t, e, r) {
  let a = t,
    o = e,
    n = r;
  for (; n > o; ) {
    if (((n -= o), (a = a.parent), !a)) throw new y(4005, !1);
    o = a.segments.length;
  }
  return new go(a, !1, o - n);
}
function DS(t) {
  return On(t[0]) ? t[0].outlets : { [re]: t };
}
function u9(t, e, r) {
  if (((t ??= new Fe([], {})), t.segments.length === 0 && t.hasChildren()))
    return In(t, e, r);
  let a = _S(t, e, r),
    o = r.slice(a.commandIndex);
  if (a.match && a.pathIndex < t.segments.length) {
    let n = new Fe(t.segments.slice(0, a.pathIndex), {});
    return (
      (n.children[re] = new Fe(t.segments.slice(a.pathIndex), t.children)),
      In(n, 0, o)
    );
  } else
    return a.match && o.length === 0
      ? new Fe(t.segments, {})
      : a.match && !t.hasChildren()
        ? xc(t, e, r)
        : a.match
          ? In(t, 0, o)
          : xc(t, e, r);
}
function In(t, e, r) {
  if (r.length === 0) return new Fe(t.segments, {});
  {
    let a = DS(r),
      o = {};
    if (
      Object.keys(a).some(n => n !== re) &&
      t.children[re] &&
      t.numberOfChildren === 1 &&
      t.children[re].segments.length === 0
    ) {
      let n = In(t.children[re], e, r);
      return new Fe(t.segments, n.children);
    }
    return (
      Object.entries(a).forEach(([n, i]) => {
        typeof i == 'string' && (i = [i]),
          i !== null && (o[n] = u9(t.children[n], e, i));
      }),
      Object.entries(t.children).forEach(([n, i]) => {
        a[n] === void 0 && (o[n] = i);
      }),
      new Fe(t.segments, o)
    );
  }
}
function _S(t, e, r) {
  let a = 0,
    o = e,
    n = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; o < t.segments.length; ) {
    if (a >= r.length) return n;
    let i = t.segments[o],
      s = r[a];
    if (On(s)) break;
    let l = `${s}`,
      c = a < r.length - 1 ? r[a + 1] : null;
    if (o > 0 && l === void 0) break;
    if (l && c && typeof c == 'object' && c.outlets === void 0) {
      if (!$m(l, c, i)) return n;
      a += 2;
    } else {
      if (!$m(l, {}, i)) return n;
      a++;
    }
    o++;
  }
  return { match: !0, pathIndex: o, commandIndex: a };
}
function xc(t, e, r) {
  let a = t.segments.slice(0, e),
    o = 0;
  for (; o < r.length; ) {
    let n = r[o];
    if (On(n)) {
      let l = HS(n.outlets);
      return new Fe(a, l);
    }
    if (o === 0 && us(r[0])) {
      let l = t.segments[e];
      a.push(new mr(l.path, Um(r[0]))), o++;
      continue;
    }
    let i = On(n) ? n.outlets[re] : `${n}`,
      s = o < r.length - 1 ? r[o + 1] : null;
    i && s && us(s)
      ? (a.push(new mr(i, Um(s))), (o += 2))
      : (a.push(new mr(i, {})), o++);
  }
  return new Fe(a, {});
}
function HS(t) {
  let e = {};
  return (
    Object.entries(t).forEach(([r, a]) => {
      typeof a == 'string' && (a = [a]),
        a !== null && (e[r] = xc(new Fe([], {}), 0, a));
    }),
    e
  );
}
function Um(t) {
  let e = {};
  return Object.entries(t).forEach(([r, a]) => (e[r] = `${a}`)), e;
}
function $m(t, e, r) {
  return t == r.path && d0(e, r.parameters);
}
var Pn = 'imperative',
  w1 = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = 'NavigationStart'),
      (t[(t.NavigationEnd = 1)] = 'NavigationEnd'),
      (t[(t.NavigationCancel = 2)] = 'NavigationCancel'),
      (t[(t.NavigationError = 3)] = 'NavigationError'),
      (t[(t.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (t[(t.ResolveStart = 5)] = 'ResolveStart'),
      (t[(t.ResolveEnd = 6)] = 'ResolveEnd'),
      (t[(t.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (t[(t.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (t[(t.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (t[(t.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (t[(t.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (t[(t.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (t[(t.ActivationStart = 13)] = 'ActivationStart'),
      (t[(t.ActivationEnd = 14)] = 'ActivationEnd'),
      (t[(t.Scroll = 15)] = 'Scroll'),
      (t[(t.NavigationSkipped = 16)] = 'NavigationSkipped'),
      t
    );
  })(w1 || {}),
  Mt = class {
    constructor(e, r) {
      (this.id = e), (this.url = r);
    }
  },
  bo = class extends Mt {
    constructor(e, r, a = 'imperative', o = null) {
      super(e, r),
        (this.type = w1.NavigationStart),
        (this.navigationTrigger = a),
        (this.restoredState = o);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  u0 = class extends Mt {
    constructor(e, r, a) {
      super(e, r), (this.urlAfterRedirects = a), (this.type = w1.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  it = (function (t) {
    return (
      (t[(t.Redirect = 0)] = 'Redirect'),
      (t[(t.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (t[(t.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (t[(t.GuardRejected = 3)] = 'GuardRejected'),
      t
    );
  })(it || {}),
  fs = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        'IgnoredByUrlHandlingStrategy'),
      t
    );
  })(fs || {}),
  $0 = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.reason = a),
        (this.code = o),
        (this.type = w1.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  za = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.reason = a),
        (this.code = o),
        (this.type = w1.NavigationSkipped);
    }
  },
  Nn = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.error = a),
        (this.target = o),
        (this.type = w1.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  ms = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.urlAfterRedirects = a),
        (this.state = o),
        (this.type = w1.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Mc = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.urlAfterRedirects = a),
        (this.state = o),
        (this.type = w1.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  yc = class extends Mt {
    constructor(e, r, a, o, n) {
      super(e, r),
        (this.urlAfterRedirects = a),
        (this.state = o),
        (this.shouldActivate = n),
        (this.type = w1.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  bc = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.urlAfterRedirects = a),
        (this.state = o),
        (this.type = w1.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Fc = class extends Mt {
    constructor(e, r, a, o) {
      super(e, r),
        (this.urlAfterRedirects = a),
        (this.state = o),
        (this.type = w1.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Cc = class {
    constructor(e) {
      (this.route = e), (this.type = w1.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  zc = class {
    constructor(e) {
      (this.route = e), (this.type = w1.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Ac = class {
    constructor(e) {
      (this.snapshot = e), (this.type = w1.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Sc = class {
    constructor(e) {
      (this.snapshot = e), (this.type = w1.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Vc = class {
    constructor(e) {
      (this.snapshot = e), (this.type = w1.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Dc = class {
    constructor(e) {
      (this.snapshot = e), (this.type = w1.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  vs = class {
    constructor(e, r, a) {
      (this.routerEvent = e),
        (this.position = r),
        (this.anchor = a),
        (this.type = w1.Scroll);
    }
    toString() {
      let e = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${e}')`;
    }
  },
  Rn = class {},
  Fo = class {
    constructor(e, r) {
      (this.url = e), (this.navigationBehaviorOptions = r);
    }
  };
function ES(t, e) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = Ei(t.providers, e, `Route: ${t.path}`)),
    t._injector ?? e
  );
}
function Lt(t) {
  return t.outlet || re;
}
function TS(t, e) {
  let r = t.filter(a => Lt(a) === e);
  return r.push(...t.filter(a => Lt(a) !== e)), r;
}
function Kn(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let e = t.parent; e; e = e.parent) {
    let r = e.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var _c = class {
    get injector() {
      return Kn(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(e) {}
    constructor(e) {
      (this.rootInjector = e),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Zn(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Zn = (() => {
    let e = class e {
      constructor(a) {
        (this.rootInjector = a), (this.contexts = new Map());
      }
      onChildOutletCreated(a, o) {
        let n = this.getOrCreateContext(a);
        (n.outlet = o), this.contexts.set(a, n);
      }
      onChildOutletDestroyed(a) {
        let o = this.getContext(a);
        o && ((o.outlet = null), (o.attachRef = null));
      }
      onOutletDeactivated() {
        let a = this.contexts;
        return (this.contexts = new Map()), a;
      }
      onOutletReAttached(a) {
        this.contexts = a;
      }
      getOrCreateContext(a) {
        let o = this.getContext(a);
        return (
          o || ((o = new _c(this.rootInjector)), this.contexts.set(a, o)), o
        );
      }
      getContext(a) {
        return this.contexts.get(a) || null;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(F1));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  gs = class {
    constructor(e) {
      this._root = e;
    }
    get root() {
      return this._root.value;
    }
    parent(e) {
      let r = this.pathFromRoot(e);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(e) {
      let r = Hc(e, this._root);
      return r ? r.children.map(a => a.value) : [];
    }
    firstChild(e) {
      let r = Hc(e, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(e) {
      let r = Ec(e, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map(o => o.value).filter(o => o !== e);
    }
    pathFromRoot(e) {
      return Ec(e, this._root).map(r => r.value);
    }
  };
function Hc(t, e) {
  if (t === e.value) return e;
  for (let r of e.children) {
    let a = Hc(t, r);
    if (a) return a;
  }
  return null;
}
function Ec(t, e) {
  if (t === e.value) return [e];
  for (let r of e.children) {
    let a = Ec(t, r);
    if (a.length) return a.unshift(e), a;
  }
  return [];
}
var nt = class {
  constructor(e, r) {
    (this.value = e), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function vo(t) {
  let e = {};
  return t && t.children.forEach(r => (e[r.value.outlet] = r)), e;
}
var ws = class extends gs {
  constructor(e, r) {
    super(e), (this.snapshot = r), Rc(this, e);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function p9(t) {
  let e = kS(t),
    r = new Pe([new mr('', {})]),
    a = new Pe({}),
    o = new Pe({}),
    n = new Pe({}),
    i = new Pe(''),
    s = new Aa(r, a, n, i, o, re, t, e.root);
  return (s.snapshot = e.root), new ws(new nt(s, []), e);
}
function kS(t) {
  let e = {},
    r = {},
    a = {},
    o = '',
    n = new wo([], e, a, o, r, re, t, null, {});
  return new Ms('', new nt(n, []));
}
var Aa = class {
  constructor(e, r, a, o, n, i, s, l) {
    (this.urlSubject = e),
      (this.paramsSubject = r),
      (this.queryParamsSubject = a),
      (this.fragmentSubject = o),
      (this.dataSubject = n),
      (this.outlet = i),
      (this.component = s),
      (this._futureSnapshot = l),
      (this.title = this.dataSubject?.pipe(I(c => c[Wn])) ?? D(void 0)),
      (this.url = e),
      (this.params = r),
      (this.queryParams = a),
      (this.fragment = o),
      (this.data = n);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (this._paramMap ??= this.params.pipe(I(e => Mo(e)))), this._paramMap;
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(I(e => Mo(e)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function xs(t, e, r = 'emptyOnly') {
  let a,
    { routeConfig: o } = t;
  return (
    e !== null &&
    (r === 'always' ||
      o?.path === '' ||
      (!e.component && !e.routeConfig?.loadComponent))
      ? (a = {
          params: M(M({}, e.params), t.params),
          data: M(M({}, e.data), t.data),
          resolve: M(M(M(M({}, t.data), e.data), o?.data), t._resolvedData),
        })
      : (a = {
          params: M({}, t.params),
          data: M({}, t.data),
          resolve: M(M({}, t.data), t._resolvedData ?? {}),
        }),
    o && m9(o) && (a.resolve[Wn] = o.title),
    a
  );
}
var wo = class {
    get title() {
      return this.data?.[Wn];
    }
    constructor(e, r, a, o, n, i, s, l, c) {
      (this.url = e),
        (this.params = r),
        (this.queryParams = a),
        (this.fragment = o),
        (this.data = n),
        (this.outlet = i),
        (this.component = s),
        (this.routeConfig = l),
        (this._resolve = c);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Mo(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Mo(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let e = this.url.map(a => a.toString()).join('/'),
        r = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${e}', path:'${r}')`;
    }
  },
  Ms = class extends gs {
    constructor(e, r) {
      super(r), (this.url = e), Rc(this, r);
    }
    toString() {
      return f9(this._root);
    }
  };
function Rc(t, e) {
  (e.value._routerState = t), e.children.forEach(r => Rc(t, r));
}
function f9(t) {
  let e = t.children.length > 0 ? ` { ${t.children.map(f9).join(', ')} } ` : '';
  return `${t.value}${e}`;
}
function pc(t) {
  if (t.snapshot) {
    let e = t.snapshot,
      r = t._futureSnapshot;
    (t.snapshot = r),
      d0(e.queryParams, r.queryParams) ||
        t.queryParamsSubject.next(r.queryParams),
      e.fragment !== r.fragment && t.fragmentSubject.next(r.fragment),
      d0(e.params, r.params) || t.paramsSubject.next(r.params),
      sS(e.url, r.url) || t.urlSubject.next(r.url),
      d0(e.data, r.data) || t.dataSubject.next(r.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Tc(t, e) {
  let r = d0(t.params, e.params) && dS(t.url, e.url),
    a = !t.parent != !e.parent;
  return r && !a && (!t.parent || Tc(t.parent, e.parent));
}
function m9(t) {
  return typeof t.title == 'string' || t.title === null;
}
var LS = (() => {
    let e = class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = re),
          (this.activateEvents = new W()),
          (this.deactivateEvents = new W()),
          (this.attachEvents = new W()),
          (this.detachEvents = new W()),
          (this.parentContexts = m(Zn)),
          (this.location = m(Qe)),
          (this.changeDetector = m(_e)),
          (this.inputBinder = m(Cs, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(a) {
        if (a.name) {
          let { firstChange: o, previousValue: n } = a.name;
          if (o) return;
          this.isTrackedInParentContexts(n) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(n)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(a) {
        return this.parentContexts.getContext(a)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let a = this.parentContexts.getContext(this.name);
        a?.route &&
          (a.attachRef
            ? this.attach(a.attachRef, a.route)
            : this.activateWith(a.route, a.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new y(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new y(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new y(4012, !1);
        this.location.detach();
        let a = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(a.instance),
          a
        );
      }
      attach(a, o) {
        (this.activated = a),
          (this._activatedRoute = o),
          this.location.insert(a.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(a.instance);
      }
      deactivate() {
        if (this.activated) {
          let a = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(a);
        }
      }
      activateWith(a, o) {
        if (this.isActivated) throw new y(4013, !1);
        this._activatedRoute = a;
        let n = this.location,
          s = a.snapshot.component,
          l = this.parentContexts.getOrCreateContext(this.name).children,
          c = new kc(a, l, n.injector);
        (this.activated = n.createComponent(s, {
          index: n.length,
          injector: c,
          environmentInjector: o,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['router-outlet']],
        inputs: { name: 'name' },
        outputs: {
          activateEvents: 'activate',
          deactivateEvents: 'deactivate',
          attachEvents: 'attach',
          detachEvents: 'detach',
        },
        exportAs: ['outlet'],
        standalone: !0,
        features: [ee],
      }));
    let t = e;
    return t;
  })(),
  kc = class t {
    __ngOutletInjector(e) {
      return new t(this.route, this.childContexts, e);
    }
    constructor(e, r, a) {
      (this.route = e), (this.childContexts = r), (this.parent = a);
    }
    get(e, r) {
      return e === Aa
        ? this.route
        : e === Zn
          ? this.childContexts
          : this.parent.get(e, r);
    }
  },
  Cs = new F(''),
  Wm = (() => {
    let e = class e {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(a) {
        this.unsubscribeFromRouteData(a), this.subscribeToRouteData(a);
      }
      unsubscribeFromRouteData(a) {
        this.outletDataSubscriptions.get(a)?.unsubscribe(),
          this.outletDataSubscriptions.delete(a);
      }
      subscribeToRouteData(a) {
        let { activatedRoute: o } = a,
          n = F0([o.queryParams, o.params, o.data])
            .pipe(
              Ve(
                ([i, s, l], c) => (
                  (l = M(M(M({}, i), s), l)),
                  c === 0 ? D(l) : Promise.resolve(l)
                ),
              ),
            )
            .subscribe(i => {
              if (
                !a.isActivated ||
                !a.activatedComponentRef ||
                a.activatedRoute !== o ||
                o.component === null
              ) {
                this.unsubscribeFromRouteData(a);
                return;
              }
              let s = cm(o.component);
              if (!s) {
                this.unsubscribeFromRouteData(a);
                return;
              }
              for (let { templateName: l } of s.inputs)
                a.activatedComponentRef.setInput(l, i[l]);
            });
        this.outletDataSubscriptions.set(a, n);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function IS(t, e, r) {
  let a = qn(t, e._root, r ? r._root : void 0);
  return new ws(a, e);
}
function qn(t, e, r) {
  if (r && t.shouldReuseRoute(e.value, r.value.snapshot)) {
    let a = r.value;
    a._futureSnapshot = e.value;
    let o = PS(t, e, r);
    return new nt(a, o);
  } else {
    if (t.shouldAttach(e.value)) {
      let n = t.retrieve(e.value);
      if (n !== null) {
        let i = n.route;
        return (
          (i.value._futureSnapshot = e.value),
          (i.children = e.children.map(s => qn(t, s))),
          i
        );
      }
    }
    let a = BS(e.value),
      o = e.children.map(n => qn(t, n));
    return new nt(a, o);
  }
}
function PS(t, e, r) {
  return e.children.map(a => {
    for (let o of r.children)
      if (t.shouldReuseRoute(a.value, o.value.snapshot)) return qn(t, a, o);
    return qn(t, a);
  });
}
function BS(t) {
  return new Aa(
    new Pe(t.url),
    new Pe(t.params),
    new Pe(t.queryParams),
    new Pe(t.fragment),
    new Pe(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var jn = class {
    constructor(e, r) {
      (this.redirectTo = e), (this.navigationBehaviorOptions = r);
    }
  },
  v9 = 'ngNavigationCancelingError';
function ys(t, e) {
  let { redirectTo: r, navigationBehaviorOptions: a } = gr(e)
      ? { redirectTo: e, navigationBehaviorOptions: void 0 }
      : e,
    o = g9(!1, it.Redirect);
  return (o.url = r), (o.navigationBehaviorOptions = a), o;
}
function g9(t, e) {
  let r = new Error(`NavigationCancelingError: ${t || ''}`);
  return (r[v9] = !0), (r.cancellationCode = e), r;
}
function OS(t) {
  return w9(t) && gr(t.url);
}
function w9(t) {
  return !!t && t[v9];
}
var NS = (t, e, r, a) =>
    I(
      o => (
        new Lc(e, o.targetRouterState, o.currentRouterState, r, a).activate(t),
        o
      ),
    ),
  Lc = class {
    constructor(e, r, a, o, n) {
      (this.routeReuseStrategy = e),
        (this.futureState = r),
        (this.currState = a),
        (this.forwardEvent = o),
        (this.inputBindingEnabled = n);
    }
    activate(e) {
      let r = this.futureState._root,
        a = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, a, e),
        pc(this.futureState.root),
        this.activateChildRoutes(r, a, e);
    }
    deactivateChildRoutes(e, r, a) {
      let o = vo(r);
      e.children.forEach(n => {
        let i = n.value.outlet;
        this.deactivateRoutes(n, o[i], a), delete o[i];
      }),
        Object.values(o).forEach(n => {
          this.deactivateRouteAndItsChildren(n, a);
        });
    }
    deactivateRoutes(e, r, a) {
      let o = e.value,
        n = r ? r.value : null;
      if (o === n)
        if (o.component) {
          let i = a.getContext(o.outlet);
          i && this.deactivateChildRoutes(e, r, i.children);
        } else this.deactivateChildRoutes(e, r, a);
      else n && this.deactivateRouteAndItsChildren(r, a);
    }
    deactivateRouteAndItsChildren(e, r) {
      e.value.component &&
      this.routeReuseStrategy.shouldDetach(e.value.snapshot)
        ? this.detachAndStoreRouteSubtree(e, r)
        : this.deactivateRouteAndOutlet(e, r);
    }
    detachAndStoreRouteSubtree(e, r) {
      let a = r.getContext(e.value.outlet),
        o = a && e.value.component ? a.children : r,
        n = vo(e);
      for (let i of Object.values(n)) this.deactivateRouteAndItsChildren(i, o);
      if (a && a.outlet) {
        let i = a.outlet.detach(),
          s = a.children.onOutletDeactivated();
        this.routeReuseStrategy.store(e.value.snapshot, {
          componentRef: i,
          route: e,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(e, r) {
      let a = r.getContext(e.value.outlet),
        o = a && e.value.component ? a.children : r,
        n = vo(e);
      for (let i of Object.values(n)) this.deactivateRouteAndItsChildren(i, o);
      a &&
        (a.outlet && (a.outlet.deactivate(), a.children.onOutletDeactivated()),
        (a.attachRef = null),
        (a.route = null));
    }
    activateChildRoutes(e, r, a) {
      let o = vo(r);
      e.children.forEach(n => {
        this.activateRoutes(n, o[n.value.outlet], a),
          this.forwardEvent(new Dc(n.value.snapshot));
      }),
        e.children.length && this.forwardEvent(new Sc(e.value.snapshot));
    }
    activateRoutes(e, r, a) {
      let o = e.value,
        n = r ? r.value : null;
      if ((pc(o), o === n))
        if (o.component) {
          let i = a.getOrCreateContext(o.outlet);
          this.activateChildRoutes(e, r, i.children);
        } else this.activateChildRoutes(e, r, a);
      else if (o.component) {
        let i = a.getOrCreateContext(o.outlet);
        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(o.snapshot);
          this.routeReuseStrategy.store(o.snapshot, null),
            i.children.onOutletReAttached(s.contexts),
            (i.attachRef = s.componentRef),
            (i.route = s.route.value),
            i.outlet && i.outlet.attach(s.componentRef, s.route.value),
            pc(s.route.value),
            this.activateChildRoutes(e, null, i.children);
        } else
          (i.attachRef = null),
            (i.route = o),
            i.outlet && i.outlet.activateWith(o, i.injector),
            this.activateChildRoutes(e, null, i.children);
      } else this.activateChildRoutes(e, null, a);
    }
  },
  bs = class {
    constructor(e) {
      (this.path = e), (this.route = this.path[this.path.length - 1]);
    }
  },
  xo = class {
    constructor(e, r) {
      (this.component = e), (this.route = r);
    }
  };
function RS(t, e, r) {
  let a = t._root,
    o = e ? e._root : null;
  return kn(a, o, r, [a.value]);
}
function qS(t) {
  let e = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !e || e.length === 0 ? null : { node: t, guards: e };
}
function zo(t, e) {
  let r = Symbol(),
    a = e.get(t, r);
  return a === r ? (typeof t == 'function' && !fu(t) ? t : e.get(t)) : a;
}
function kn(
  t,
  e,
  r,
  a,
  o = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let n = vo(e);
  return (
    t.children.forEach(i => {
      jS(i, n[i.value.outlet], r, a.concat([i.value]), o),
        delete n[i.value.outlet];
    }),
    Object.entries(n).forEach(([i, s]) => Bn(s, r.getContext(i), o)),
    o
  );
}
function jS(
  t,
  e,
  r,
  a,
  o = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let n = t.value,
    i = e ? e.value : null,
    s = r ? r.getContext(t.value.outlet) : null;
  if (i && n.routeConfig === i.routeConfig) {
    let l = YS(i, n, n.routeConfig.runGuardsAndResolvers);
    l
      ? o.canActivateChecks.push(new bs(a))
      : ((n.data = i.data), (n._resolvedData = i._resolvedData)),
      n.component ? kn(t, e, s ? s.children : null, a, o) : kn(t, e, r, a, o),
      l &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        o.canDeactivateChecks.push(new xo(s.outlet.component, i));
  } else
    i && Bn(e, s, o),
      o.canActivateChecks.push(new bs(a)),
      n.component
        ? kn(t, null, s ? s.children : null, a, o)
        : kn(t, null, r, a, o);
  return o;
}
function YS(t, e, r) {
  if (typeof r == 'function') return r(t, e);
  switch (r) {
    case 'pathParamsChange':
      return !vr(t.url, e.url);
    case 'pathParamsOrQueryParamsChange':
      return !vr(t.url, e.url) || !d0(t.queryParams, e.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !Tc(t, e) || !d0(t.queryParams, e.queryParams);
    case 'paramsChange':
    default:
      return !Tc(t, e);
  }
}
function Bn(t, e, r) {
  let a = vo(t),
    o = t.value;
  Object.entries(a).forEach(([n, i]) => {
    o.component
      ? e
        ? Bn(i, e.children.getContext(n), r)
        : Bn(i, null, r)
      : Bn(i, e, r);
  }),
    o.component
      ? e && e.outlet && e.outlet.isActivated
        ? r.canDeactivateChecks.push(new xo(e.outlet.component, o))
        : r.canDeactivateChecks.push(new xo(null, o))
      : r.canDeactivateChecks.push(new xo(null, o));
}
function Qn(t) {
  return typeof t == 'function';
}
function US(t) {
  return typeof t == 'boolean';
}
function $S(t) {
  return t && Qn(t.canLoad);
}
function WS(t) {
  return t && Qn(t.canActivate);
}
function GS(t) {
  return t && Qn(t.canActivateChild);
}
function KS(t) {
  return t && Qn(t.canDeactivate);
}
function ZS(t) {
  return t && Qn(t.canMatch);
}
function x9(t) {
  return t instanceof b0 || t?.name === 'EmptyError';
}
var ls = Symbol('INITIAL_VALUE');
function Co() {
  return Ve(t =>
    F0(t.map(e => e.pipe(a1(1), T1(ls)))).pipe(
      I(e => {
        for (let r of e)
          if (r !== !0) {
            if (r === ls) return ls;
            if (r === !1 || QS(r)) return r;
          }
        return !0;
      }),
      me(e => e !== ls),
      a1(1),
    ),
  );
}
function QS(t) {
  return gr(t) || t instanceof jn;
}
function XS(t, e) {
  return Ee(r => {
    let {
      targetSnapshot: a,
      currentSnapshot: o,
      guards: { canActivateChecks: n, canDeactivateChecks: i },
    } = r;
    return i.length === 0 && n.length === 0
      ? D(Q(M({}, r), { guardsResult: !0 }))
      : JS(i, a, o, t).pipe(
          Ee(s => (s && US(s) ? eV(a, n, t, e) : D(s))),
          I(s => Q(M({}, r), { guardsResult: s })),
        );
  });
}
function JS(t, e, r, a) {
  return Me(t).pipe(
    Ee(o => nV(o.component, o.route, r, e, a)),
    dt(o => o !== !0, !0),
  );
}
function eV(t, e, r, a) {
  return Me(e).pipe(
    z0(o =>
      Wt(
        aV(o.route.parent, a),
        tV(o.route, a),
        oV(t, o.path, r),
        rV(t, o.route, r),
      ),
    ),
    dt(o => o !== !0, !0),
  );
}
function tV(t, e) {
  return t !== null && e && e(new Vc(t)), D(!0);
}
function aV(t, e) {
  return t !== null && e && e(new Ac(t)), D(!0);
}
function rV(t, e, r) {
  let a = e.routeConfig ? e.routeConfig.canActivate : null;
  if (!a || a.length === 0) return D(!0);
  let o = a.map(n =>
    v2(() => {
      let i = Kn(e) ?? r,
        s = zo(n, i),
        l = WS(s) ? s.canActivate(e, t) : pt(i, () => s(e, t));
      return Sa(l).pipe(dt());
    }),
  );
  return D(o).pipe(Co());
}
function oV(t, e, r) {
  let a = e[e.length - 1],
    n = e
      .slice(0, e.length - 1)
      .reverse()
      .map(i => qS(i))
      .filter(i => i !== null)
      .map(i =>
        v2(() => {
          let s = i.guards.map(l => {
            let c = Kn(i.node) ?? r,
              h = zo(l, c),
              d = GS(h) ? h.canActivateChild(a, t) : pt(c, () => h(a, t));
            return Sa(d).pipe(dt());
          });
          return D(s).pipe(Co());
        }),
      );
  return D(n).pipe(Co());
}
function nV(t, e, r, a, o) {
  let n = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
  if (!n || n.length === 0) return D(!0);
  let i = n.map(s => {
    let l = Kn(e) ?? o,
      c = zo(s, l),
      h = KS(c) ? c.canDeactivate(t, e, r, a) : pt(l, () => c(t, e, r, a));
    return Sa(h).pipe(dt());
  });
  return D(i).pipe(Co());
}
function iV(t, e, r, a) {
  let o = e.canLoad;
  if (o === void 0 || o.length === 0) return D(!0);
  let n = o.map(i => {
    let s = zo(i, t),
      l = $S(s) ? s.canLoad(e, r) : pt(t, () => s(e, r));
    return Sa(l);
  });
  return D(n).pipe(Co(), M9(a));
}
function M9(t) {
  return e3(
    ve(e => {
      if (typeof e != 'boolean') throw ys(t, e);
    }),
    I(e => e === !0),
  );
}
function sV(t, e, r, a) {
  let o = e.canMatch;
  if (!o || o.length === 0) return D(!0);
  let n = o.map(i => {
    let s = zo(i, t),
      l = ZS(s) ? s.canMatch(e, r) : pt(t, () => s(e, r));
    return Sa(l);
  });
  return D(n).pipe(Co(), M9(a));
}
var Yn = class {
    constructor(e) {
      this.segmentGroup = e || null;
    }
  },
  Un = class extends Error {
    constructor(e) {
      super(), (this.urlTree = e);
    }
  };
function mo(t) {
  return aa(new Yn(t));
}
function lV(t) {
  return aa(new y(4e3, !1));
}
function cV(t) {
  return aa(g9(!1, it.GuardRejected));
}
var Ic = class {
    constructor(e, r) {
      (this.urlSerializer = e), (this.urlTree = r);
    }
    lineralizeSegments(e, r) {
      let a = [],
        o = r.root;
      for (;;) {
        if (((a = a.concat(o.segments)), o.numberOfChildren === 0)) return D(a);
        if (o.numberOfChildren > 1 || !o.children[re])
          return lV(`${e.redirectTo}`);
        o = o.children[re];
      }
    }
    applyRedirectCommands(e, r, a, o, n) {
      if (typeof r != 'string') {
        let s = r,
          {
            queryParams: l,
            fragment: c,
            routeConfig: h,
            url: d,
            outlet: u,
            params: p,
            data: f,
            title: x,
          } = o,
          b = pt(n, () =>
            s({
              params: p,
              data: f,
              queryParams: l,
              fragment: c,
              routeConfig: h,
              url: d,
              outlet: u,
              title: x,
            }),
          );
        if (b instanceof W0) throw new Un(b);
        r = b;
      }
      let i = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        e,
        a,
      );
      if (r[0] === '/') throw new Un(i);
      return i;
    }
    applyRedirectCreateUrlTree(e, r, a, o) {
      let n = this.createSegmentGroup(e, r.root, a, o);
      return new W0(
        n,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment,
      );
    }
    createQueryParams(e, r) {
      let a = {};
      return (
        Object.entries(e).forEach(([o, n]) => {
          if (typeof n == 'string' && n[0] === ':') {
            let s = n.substring(1);
            a[o] = r[s];
          } else a[o] = n;
        }),
        a
      );
    }
    createSegmentGroup(e, r, a, o) {
      let n = this.createSegments(e, r.segments, a, o),
        i = {};
      return (
        Object.entries(r.children).forEach(([s, l]) => {
          i[s] = this.createSegmentGroup(e, l, a, o);
        }),
        new Fe(n, i)
      );
    }
    createSegments(e, r, a, o) {
      return r.map(n =>
        n.path[0] === ':'
          ? this.findPosParam(e, n, o)
          : this.findOrReturn(n, a),
      );
    }
    findPosParam(e, r, a) {
      let o = a[r.path.substring(1)];
      if (!o) throw new y(4001, !1);
      return o;
    }
    findOrReturn(e, r) {
      let a = 0;
      for (let o of r) {
        if (o.path === e.path) return r.splice(a), o;
        a++;
      }
      return e;
    }
  },
  Pc = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function hV(t, e, r, a, o) {
  let n = y9(t, e, r);
  return n.matched
    ? ((a = ES(e, a)), sV(a, e, r, o).pipe(I(i => (i === !0 ? n : M({}, Pc)))))
    : D(n);
}
function y9(t, e, r) {
  if (e.path === '**') return dV(r);
  if (e.path === '')
    return e.pathMatch === 'full' && (t.hasChildren() || r.length > 0)
      ? M({}, Pc)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let o = (e.matcher || iS)(r, t, e);
  if (!o) return M({}, Pc);
  let n = {};
  Object.entries(o.posParams ?? {}).forEach(([s, l]) => {
    n[s] = l.path;
  });
  let i =
    o.consumed.length > 0
      ? M(M({}, n), o.consumed[o.consumed.length - 1].parameters)
      : n;
  return {
    matched: !0,
    consumedSegments: o.consumed,
    remainingSegments: r.slice(o.consumed.length),
    parameters: i,
    positionalParamSegments: o.posParams ?? {},
  };
}
function dV(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? e9(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Gm(t, e, r, a) {
  return r.length > 0 && fV(t, r, a)
    ? {
        segmentGroup: new Fe(e, pV(a, new Fe(r, t.children))),
        slicedSegments: [],
      }
    : r.length === 0 && mV(t, r, a)
      ? {
          segmentGroup: new Fe(t.segments, uV(t, r, a, t.children)),
          slicedSegments: r,
        }
      : { segmentGroup: new Fe(t.segments, t.children), slicedSegments: r };
}
function uV(t, e, r, a) {
  let o = {};
  for (let n of r)
    if (zs(t, e, n) && !a[Lt(n)]) {
      let i = new Fe([], {});
      o[Lt(n)] = i;
    }
  return M(M({}, a), o);
}
function pV(t, e) {
  let r = {};
  r[re] = e;
  for (let a of t)
    if (a.path === '' && Lt(a) !== re) {
      let o = new Fe([], {});
      r[Lt(a)] = o;
    }
  return r;
}
function fV(t, e, r) {
  return r.some(a => zs(t, e, a) && Lt(a) !== re);
}
function mV(t, e, r) {
  return r.some(a => zs(t, e, a));
}
function zs(t, e, r) {
  return (t.hasChildren() || e.length > 0) && r.pathMatch === 'full'
    ? !1
    : r.path === '';
}
function vV(t, e, r) {
  return e.length === 0 && !t.children[r];
}
var Bc = class {};
function gV(t, e, r, a, o, n, i = 'emptyOnly') {
  return new Oc(t, e, r, a, o, i, n).recognize();
}
var wV = 31,
  Oc = class {
    constructor(e, r, a, o, n, i, s) {
      (this.injector = e),
        (this.configLoader = r),
        (this.rootComponentType = a),
        (this.config = o),
        (this.urlTree = n),
        (this.paramsInheritanceStrategy = i),
        (this.urlSerializer = s),
        (this.applyRedirects = new Ic(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(e) {
      return new y(4002, `'${e.segmentGroup}'`);
    }
    recognize() {
      let e = Gm(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(e).pipe(
        I(({ children: r, rootSnapshot: a }) => {
          let o = new nt(a, r),
            n = new Ms('', o),
            i = zS(a, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (i.queryParams = this.urlTree.queryParams),
            (n.url = this.urlSerializer.serialize(i)),
            { state: n, tree: i }
          );
        }),
      );
    }
    match(e) {
      let r = new wo(
        [],
        Object.freeze({}),
        Object.freeze(M({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        re,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(
        this.injector,
        this.config,
        e,
        re,
        r,
      ).pipe(
        I(a => ({ children: a, rootSnapshot: r })),
        E1(a => {
          if (a instanceof Un)
            return (this.urlTree = a.urlTree), this.match(a.urlTree.root);
          throw a instanceof Yn ? this.noMatchError(a) : a;
        }),
      );
    }
    processSegmentGroup(e, r, a, o, n) {
      return a.segments.length === 0 && a.hasChildren()
        ? this.processChildren(e, r, a, n)
        : this.processSegment(e, r, a, a.segments, o, !0, n).pipe(
            I(i => (i instanceof nt ? [i] : [])),
          );
    }
    processChildren(e, r, a, o) {
      let n = [];
      for (let i of Object.keys(a.children))
        i === 'primary' ? n.unshift(i) : n.push(i);
      return Me(n).pipe(
        z0(i => {
          let s = a.children[i],
            l = TS(r, i);
          return this.processSegmentGroup(e, l, s, i, o);
        }),
        p3((i, s) => (i.push(...s), i)),
        oa(null),
        d3(),
        Ee(i => {
          if (i === null) return mo(a);
          let s = b9(i);
          return xV(s), D(s);
        }),
      );
    }
    processSegment(e, r, a, o, n, i, s) {
      return Me(r).pipe(
        z0(l =>
          this.processSegmentAgainstRoute(
            l._injector ?? e,
            r,
            l,
            a,
            o,
            n,
            i,
            s,
          ).pipe(
            E1(c => {
              if (c instanceof Yn) return D(null);
              throw c;
            }),
          ),
        ),
        dt(l => !!l),
        E1(l => {
          if (x9(l)) return vV(a, o, n) ? D(new Bc()) : mo(a);
          throw l;
        }),
      );
    }
    processSegmentAgainstRoute(e, r, a, o, n, i, s, l) {
      return Lt(a) !== i && (i === re || !zs(o, n, a))
        ? mo(o)
        : a.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(e, o, a, n, i, l)
          : this.allowRedirects && s
            ? this.expandSegmentAgainstRouteUsingRedirect(e, o, r, a, n, i, l)
            : mo(o);
    }
    expandSegmentAgainstRouteUsingRedirect(e, r, a, o, n, i, s) {
      let {
        matched: l,
        parameters: c,
        consumedSegments: h,
        positionalParamSegments: d,
        remainingSegments: u,
      } = y9(r, o, n);
      if (!l) return mo(r);
      typeof o.redirectTo == 'string' &&
        o.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > wV && (this.allowRedirects = !1));
      let p = new wo(
          n,
          c,
          Object.freeze(M({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Km(o),
          Lt(o),
          o.component ?? o._loadedComponent ?? null,
          o,
          Zm(o),
        ),
        f = xs(p, s, this.paramsInheritanceStrategy);
      (p.params = Object.freeze(f.params)), (p.data = Object.freeze(f.data));
      let x = this.applyRedirects.applyRedirectCommands(
        h,
        o.redirectTo,
        d,
        p,
        e,
      );
      return this.applyRedirects
        .lineralizeSegments(o, x)
        .pipe(Ee(b => this.processSegment(e, a, r, b.concat(u), i, !1, s)));
    }
    matchSegmentAgainstRoute(e, r, a, o, n, i) {
      let s = hV(r, a, o, e, this.urlSerializer);
      return (
        a.path === '**' && (r.children = {}),
        s.pipe(
          Ve(l =>
            l.matched
              ? ((e = a._injector ?? e),
                this.getChildConfig(e, a, o).pipe(
                  Ve(({ routes: c }) => {
                    let h = a._loadedInjector ?? e,
                      {
                        parameters: d,
                        consumedSegments: u,
                        remainingSegments: p,
                      } = l,
                      f = new wo(
                        u,
                        d,
                        Object.freeze(M({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Km(a),
                        Lt(a),
                        a.component ?? a._loadedComponent ?? null,
                        a,
                        Zm(a),
                      ),
                      x = xs(f, i, this.paramsInheritanceStrategy);
                    (f.params = Object.freeze(x.params)),
                      (f.data = Object.freeze(x.data));
                    let { segmentGroup: b, slicedSegments: z } = Gm(r, u, p, c);
                    if (z.length === 0 && b.hasChildren())
                      return this.processChildren(h, c, b, f).pipe(
                        I(oe => new nt(f, oe)),
                      );
                    if (c.length === 0 && z.length === 0)
                      return D(new nt(f, []));
                    let L = Lt(a) === n;
                    return this.processSegment(
                      h,
                      c,
                      b,
                      z,
                      L ? re : n,
                      !0,
                      f,
                    ).pipe(I(oe => new nt(f, oe instanceof nt ? [oe] : [])));
                  }),
                ))
              : mo(r),
          ),
        )
      );
    }
    getChildConfig(e, r, a) {
      return r.children
        ? D({ routes: r.children, injector: e })
        : r.loadChildren
          ? r._loadedRoutes !== void 0
            ? D({ routes: r._loadedRoutes, injector: r._loadedInjector })
            : iV(e, r, a, this.urlSerializer).pipe(
                Ee(o =>
                  o
                    ? this.configLoader.loadChildren(e, r).pipe(
                        ve(n => {
                          (r._loadedRoutes = n.routes),
                            (r._loadedInjector = n.injector);
                        }),
                      )
                    : cV(r),
                ),
              )
          : D({ routes: [], injector: e });
    }
  };
function xV(t) {
  t.sort((e, r) =>
    e.value.outlet === re
      ? -1
      : r.value.outlet === re
        ? 1
        : e.value.outlet.localeCompare(r.value.outlet),
  );
}
function MV(t) {
  let e = t.value.routeConfig;
  return e && e.path === '';
}
function b9(t) {
  let e = [],
    r = new Set();
  for (let a of t) {
    if (!MV(a)) {
      e.push(a);
      continue;
    }
    let o = e.find(n => a.value.routeConfig === n.value.routeConfig);
    o !== void 0 ? (o.children.push(...a.children), r.add(o)) : e.push(a);
  }
  for (let a of r) {
    let o = b9(a.children);
    e.push(new nt(a.value, o));
  }
  return e.filter(a => !r.has(a));
}
function Km(t) {
  return t.data || {};
}
function Zm(t) {
  return t.resolve || {};
}
function yV(t, e, r, a, o, n) {
  return Ee(i =>
    gV(t, e, r, a, i.extractedUrl, o, n).pipe(
      I(({ state: s, tree: l }) =>
        Q(M({}, i), { targetSnapshot: s, urlAfterRedirects: l }),
      ),
    ),
  );
}
function bV(t, e) {
  return Ee(r => {
    let {
      targetSnapshot: a,
      guards: { canActivateChecks: o },
    } = r;
    if (!o.length) return D(r);
    let n = new Set(o.map(l => l.route)),
      i = new Set();
    for (let l of n) if (!i.has(l)) for (let c of F9(l)) i.add(c);
    let s = 0;
    return Me(i).pipe(
      z0(l =>
        n.has(l)
          ? FV(l, a, t, e)
          : ((l.data = xs(l, l.parent, t).resolve), D(void 0)),
      ),
      ve(() => s++),
      jr(1),
      Ee(l => (s === i.size ? D(r) : Ge)),
    );
  });
}
function F9(t) {
  let e = t.children.map(r => F9(r)).flat();
  return [t, ...e];
}
function FV(t, e, r, a) {
  let o = t.routeConfig,
    n = t._resolve;
  return (
    o?.title !== void 0 && !m9(o) && (n[Wn] = o.title),
    CV(n, t, e, a).pipe(
      I(
        i => (
          (t._resolvedData = i), (t.data = xs(t, t.parent, r).resolve), null
        ),
      ),
    )
  );
}
function CV(t, e, r, a) {
  let o = vc(t);
  if (o.length === 0) return D({});
  let n = {};
  return Me(o).pipe(
    Ee(i =>
      zV(t[i], e, r, a).pipe(
        dt(),
        ve(s => {
          if (s instanceof jn) throw ys(new yo(), s);
          n[i] = s;
        }),
      ),
    ),
    jr(1),
    Ga(n),
    E1(i => (x9(i) ? Ge : aa(i))),
  );
}
function zV(t, e, r, a) {
  let o = Kn(e) ?? a,
    n = zo(t, o),
    i = n.resolve ? n.resolve(e, r) : pt(o, () => n(e, r));
  return Sa(i);
}
function fc(t) {
  return Ve(e => {
    let r = t(e);
    return r ? Me(r).pipe(I(() => e)) : D(e);
  });
}
var As = (() => {
    let e = class e {
      buildTitle(a) {
        let o,
          n = a.root;
        for (; n !== void 0; )
          (o = this.getResolvedTitleForRoute(n) ?? o),
            (n = n.children.find(i => i.outlet === re));
        return o;
      }
      getResolvedTitleForRoute(a) {
        return a.data[Wn];
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(AV), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  AV = (() => {
    let e = class e extends As {
      constructor(a) {
        super(), (this.title = a);
      }
      updateTitle(a) {
        let o = this.buildTitle(a);
        o !== void 0 && this.title.setTitle(o);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(is));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Xn = new F('', { providedIn: 'root', factory: () => ({}) }),
  SV = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['ng-component']],
        standalone: !0,
        features: [t1],
        decls: 1,
        vars: 0,
        template: function (o, n) {
          o & 1 && Le(0, 'router-outlet');
        },
        dependencies: [LS],
        encapsulation: 2,
      }));
    let t = e;
    return t;
  })();
function qc(t) {
  let e = t.children && t.children.map(qc),
    r = e ? Q(M({}, t), { children: e }) : M({}, t);
  return (
    !r.component &&
      !r.loadComponent &&
      (e || r.loadChildren) &&
      r.outlet &&
      r.outlet !== re &&
      (r.component = SV),
    r
  );
}
var $n = new F(''),
  jc = (() => {
    let e = class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = m(Li));
      }
      loadComponent(a) {
        if (this.componentLoaders.get(a)) return this.componentLoaders.get(a);
        if (a._loadedComponent) return D(a._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(a);
        let o = Sa(a.loadComponent()).pipe(
            I(C9),
            ve(i => {
              this.onLoadEndListener && this.onLoadEndListener(a),
                (a._loadedComponent = i);
            }),
            X1(() => {
              this.componentLoaders.delete(a);
            }),
          ),
          n = new jt(o, () => new C()).pipe(Pr());
        return this.componentLoaders.set(a, n), n;
      }
      loadChildren(a, o) {
        if (this.childrenLoaders.get(o)) return this.childrenLoaders.get(o);
        if (o._loadedRoutes)
          return D({ routes: o._loadedRoutes, injector: o._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(o);
        let i = VV(o, this.compiler, a, this.onLoadEndListener).pipe(
            X1(() => {
              this.childrenLoaders.delete(o);
            }),
          ),
          s = new jt(i, () => new C()).pipe(Pr());
        return this.childrenLoaders.set(o, s), s;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function VV(t, e, r, a) {
  return Sa(t.loadChildren()).pipe(
    I(C9),
    Ee(o =>
      o instanceof cn || Array.isArray(o) ? D(o) : Me(e.compileModuleAsync(o)),
    ),
    I(o => {
      a && a(t);
      let n,
        i,
        s = !1;
      return (
        Array.isArray(o)
          ? ((i = o), (s = !0))
          : ((n = o.create(r).injector),
            (i = n.get($n, [], { optional: !0, self: !0 }).flat())),
        { routes: i.map(qc), injector: n }
      );
    }),
  );
}
function DV(t) {
  return t && typeof t == 'object' && 'default' in t;
}
function C9(t) {
  return DV(t) ? t.default : t;
}
var Yc = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(_V), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  _V = (() => {
    let e = class e {
      shouldProcessUrl(a) {
        return !0;
      }
      extract(a) {
        return a;
      }
      merge(a, o) {
        return a;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  z9 = new F(''),
  A9 = new F('');
function HV(t, e, r) {
  let a = t.get(A9),
    o = t.get(Y);
  return t.get(T).runOutsideAngular(() => {
    if (!o.startViewTransition || a.skipNextTransition)
      return (a.skipNextTransition = !1), new Promise(c => setTimeout(c));
    let n,
      i = new Promise(c => {
        n = c;
      }),
      s = o.startViewTransition(() => (n(), EV(t))),
      { onViewTransitionCreated: l } = a;
    return l && pt(t, () => l({ transition: s, from: e, to: r })), i;
  });
}
function EV(t) {
  return new Promise(e => {
    Tt({ read: () => setTimeout(e) }, { injector: t });
  });
}
var TV = new F(''),
  Uc = (() => {
    let e = class e {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new C()),
          (this.transitionAbortSubject = new C()),
          (this.configLoader = m(jc)),
          (this.environmentInjector = m(F1)),
          (this.urlSerializer = m(Gn)),
          (this.rootContexts = m(Zn)),
          (this.location = m(Ma)),
          (this.inputBindingEnabled = m(Cs, { optional: !0 }) !== null),
          (this.titleStrategy = m(As)),
          (this.options = m(Xn, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || 'emptyOnly'),
          (this.urlHandlingStrategy = m(Yc)),
          (this.createViewTransition = m(z9, { optional: !0 })),
          (this.navigationErrorHandler = m(TV, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => D(void 0)),
          (this.rootComponentType = null);
        let a = n => this.events.next(new Cc(n)),
          o = n => this.events.next(new zc(n));
        (this.configLoader.onLoadEndListener = o),
          (this.configLoader.onLoadStartListener = a);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(a) {
        let o = ++this.navigationId;
        this.transitions?.next(
          Q(M(M({}, this.transitions.value), a), { id: o }),
        );
      }
      setupNavigations(a, o, n) {
        return (
          (this.transitions = new Pe({
            id: 0,
            currentUrlTree: o,
            currentRawUrl: o,
            extractedUrl: this.urlHandlingStrategy.extract(o),
            urlAfterRedirects: this.urlHandlingStrategy.extract(o),
            rawUrl: o,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: Pn,
            restoredState: null,
            currentSnapshot: n.snapshot,
            targetSnapshot: null,
            currentRouterState: n,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            me(i => i.id !== 0),
            I(i =>
              Q(M({}, i), {
                extractedUrl: this.urlHandlingStrategy.extract(i.rawUrl),
              }),
            ),
            Ve(i => {
              let s = !1,
                l = !1;
              return D(i).pipe(
                Ve(c => {
                  if (this.navigationId > i.id)
                    return (
                      this.cancelNavigationTransition(
                        i,
                        '',
                        it.SupersededByNewNavigation,
                      ),
                      Ge
                    );
                  (this.currentTransition = i),
                    (this.currentNavigation = {
                      id: c.id,
                      initialUrl: c.rawUrl,
                      extractedUrl: c.extractedUrl,
                      targetBrowserUrl:
                        typeof c.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(c.extras.browserUrl)
                          : c.extras.browserUrl,
                      trigger: c.source,
                      extras: c.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Q(M({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let h =
                      !a.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    d = c.extras.onSameUrlNavigation ?? a.onSameUrlNavigation;
                  if (!h && d !== 'reload') {
                    let u = '';
                    return (
                      this.events.next(
                        new za(
                          c.id,
                          this.urlSerializer.serialize(c.rawUrl),
                          u,
                          fs.IgnoredSameUrlNavigation,
                        ),
                      ),
                      c.resolve(!1),
                      Ge
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                    return D(c).pipe(
                      Ve(u => {
                        let p = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new bo(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              u.source,
                              u.restoredState,
                            ),
                          ),
                          p !== this.transitions?.getValue()
                            ? Ge
                            : Promise.resolve(u)
                        );
                      }),
                      yV(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        a.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      ve(u => {
                        (i.targetSnapshot = u.targetSnapshot),
                          (i.urlAfterRedirects = u.urlAfterRedirects),
                          (this.currentNavigation = Q(
                            M({}, this.currentNavigation),
                            { finalUrl: u.urlAfterRedirects },
                          ));
                        let p = new ms(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot,
                        );
                        this.events.next(p);
                      }),
                    );
                  if (
                    h &&
                    this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                  ) {
                    let {
                        id: u,
                        extractedUrl: p,
                        source: f,
                        restoredState: x,
                        extras: b,
                      } = c,
                      z = new bo(u, this.urlSerializer.serialize(p), f, x);
                    this.events.next(z);
                    let L = p9(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = i =
                        Q(M({}, c), {
                          targetSnapshot: L,
                          urlAfterRedirects: p,
                          extras: Q(M({}, b), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = p),
                      D(i)
                    );
                  } else {
                    let u = '';
                    return (
                      this.events.next(
                        new za(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          u,
                          fs.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      c.resolve(!1),
                      Ge
                    );
                  }
                }),
                ve(c => {
                  let h = new Mc(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                  );
                  this.events.next(h);
                }),
                I(
                  c => (
                    (this.currentTransition = i =
                      Q(M({}, c), {
                        guards: RS(
                          c.targetSnapshot,
                          c.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    i
                  ),
                ),
                XS(this.environmentInjector, c => this.events.next(c)),
                ve(c => {
                  if (
                    ((i.guardsResult = c.guardsResult),
                    c.guardsResult && typeof c.guardsResult != 'boolean')
                  )
                    throw ys(this.urlSerializer, c.guardsResult);
                  let h = new yc(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult,
                  );
                  this.events.next(h);
                }),
                me(c =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, '', it.GuardRejected),
                      !1),
                ),
                fc(c => {
                  if (c.guards.canActivateChecks.length)
                    return D(c).pipe(
                      ve(h => {
                        let d = new bc(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(d);
                      }),
                      Ve(h => {
                        let d = !1;
                        return D(h).pipe(
                          bV(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          ve({
                            next: () => (d = !0),
                            complete: () => {
                              d ||
                                this.cancelNavigationTransition(
                                  h,
                                  '',
                                  it.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      ve(h => {
                        let d = new Fc(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(d);
                      }),
                    );
                }),
                fc(c => {
                  let h = d => {
                    let u = [];
                    d.routeConfig?.loadComponent &&
                      !d.routeConfig._loadedComponent &&
                      u.push(
                        this.configLoader.loadComponent(d.routeConfig).pipe(
                          ve(p => {
                            d.component = p;
                          }),
                          I(() => {}),
                        ),
                      );
                    for (let p of d.children) u.push(...h(p));
                    return u;
                  };
                  return F0(h(c.targetSnapshot.root)).pipe(oa(null), a1(1));
                }),
                fc(() => this.afterPreactivation()),
                Ve(() => {
                  let { currentSnapshot: c, targetSnapshot: h } = i,
                    d = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      h.root,
                    );
                  return d ? Me(d).pipe(I(() => i)) : D(i);
                }),
                I(c => {
                  let h = IS(
                    a.routeReuseStrategy,
                    c.targetSnapshot,
                    c.currentRouterState,
                  );
                  return (
                    (this.currentTransition = i =
                      Q(M({}, c), { targetRouterState: h })),
                    (this.currentNavigation.targetRouterState = h),
                    i
                  );
                }),
                ve(() => {
                  this.events.next(new Rn());
                }),
                NS(
                  this.rootContexts,
                  a.routeReuseStrategy,
                  c => this.events.next(c),
                  this.inputBindingEnabled,
                ),
                a1(1),
                ve({
                  next: c => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new u0(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        c.targetRouterState.snapshot,
                      ),
                      c.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                S(
                  this.transitionAbortSubject.pipe(
                    ve(c => {
                      throw c;
                    }),
                  ),
                ),
                X1(() => {
                  !s &&
                    !l &&
                    this.cancelNavigationTransition(
                      i,
                      '',
                      it.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === i.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                E1(c => {
                  if (((l = !0), w9(c)))
                    this.events.next(
                      new $0(
                        i.id,
                        this.urlSerializer.serialize(i.extractedUrl),
                        c.message,
                        c.cancellationCode,
                      ),
                    ),
                      OS(c)
                        ? this.events.next(
                            new Fo(c.url, c.navigationBehaviorOptions),
                          )
                        : i.resolve(!1);
                  else {
                    let h = new Nn(
                      i.id,
                      this.urlSerializer.serialize(i.extractedUrl),
                      c,
                      i.targetSnapshot ?? void 0,
                    );
                    try {
                      let d = pt(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(h),
                      );
                      if (d instanceof jn) {
                        let { message: u, cancellationCode: p } = ys(
                          this.urlSerializer,
                          d,
                        );
                        this.events.next(
                          new $0(
                            i.id,
                            this.urlSerializer.serialize(i.extractedUrl),
                            u,
                            p,
                          ),
                        ),
                          this.events.next(
                            new Fo(d.redirectTo, d.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(h);
                        let u = a.errorHandler(c);
                        i.resolve(!!u);
                      }
                    } catch (d) {
                      this.options.resolveNavigationPromiseOnError
                        ? i.resolve(!1)
                        : i.reject(d);
                    }
                  }
                  return Ge;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(a, o, n) {
        let i = new $0(
          a.id,
          this.urlSerializer.serialize(a.extractedUrl),
          o,
          n,
        );
        this.events.next(i), a.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let a = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          o =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          a.toString() !== o?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function kV(t) {
  return t !== Pn;
}
var LV = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(IV), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Nc = class {
    shouldDetach(e) {
      return !1;
    }
    store(e, r) {}
    shouldAttach(e) {
      return !1;
    }
    retrieve(e) {
      return null;
    }
    shouldReuseRoute(e, r) {
      return e.routeConfig === r.routeConfig;
    }
  },
  IV = (() => {
    let e = class e extends Nc {};
    (e.ɵfac = (() => {
      let a;
      return function (n) {
        return (a || (a = I1(e)))(n || e);
      };
    })()),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  S9 = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: () => m(PV), providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  PV = (() => {
    let e = class e extends S9 {
      constructor() {
        super(...arguments),
          (this.location = m(Ma)),
          (this.urlSerializer = m(Gn)),
          (this.options = m(Xn, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || 'replace'),
          (this.urlHandlingStrategy = m(Yc)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.currentUrlTree = new W0()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = p9(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(a) {
        return this.location.subscribe(o => {
          o.type === 'popstate' && a(o.url, o.state);
        });
      }
      handleRouterEvent(a, o) {
        if (a instanceof bo) this.stateMemento = this.createStateMemento();
        else if (a instanceof za) this.rawUrlTree = o.initialUrl;
        else if (a instanceof ms) {
          if (
            this.urlUpdateStrategy === 'eager' &&
            !o.extras.skipLocationChange
          ) {
            let n = this.urlHandlingStrategy.merge(o.finalUrl, o.initialUrl);
            this.setBrowserUrl(o.targetBrowserUrl ?? n, o);
          }
        } else
          a instanceof Rn
            ? ((this.currentUrlTree = o.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                o.finalUrl,
                o.initialUrl,
              )),
              (this.routerState = o.targetRouterState),
              this.urlUpdateStrategy === 'deferred' &&
                !o.extras.skipLocationChange &&
                this.setBrowserUrl(o.targetBrowserUrl ?? this.rawUrlTree, o))
            : a instanceof $0 &&
                (a.code === it.GuardRejected ||
                  a.code === it.NoDataFromResolver)
              ? this.restoreHistory(o)
              : a instanceof Nn
                ? this.restoreHistory(o, !0)
                : a instanceof u0 &&
                  ((this.lastSuccessfulId = a.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(a, o) {
        let n = a instanceof W0 ? this.urlSerializer.serialize(a) : a;
        if (this.location.isCurrentPathEqualTo(n) || o.extras.replaceUrl) {
          let i = this.browserPageId,
            s = M(M({}, o.extras.state), this.generateNgRouterState(o.id, i));
          this.location.replaceState(n, '', s);
        } else {
          let i = M(
            M({}, o.extras.state),
            this.generateNgRouterState(o.id, this.browserPageId + 1),
          );
          this.location.go(n, '', i);
        }
      }
      restoreHistory(a, o = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let n = this.browserPageId,
            i = this.currentPageId - n;
          i !== 0
            ? this.location.historyGo(i)
            : this.currentUrlTree === a.finalUrl &&
              i === 0 &&
              (this.resetState(a), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (o && this.resetState(a), this.resetUrlToCurrentUrlTree());
      }
      resetState(a) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            a.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(a, o) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: a, ɵrouterPageId: o }
          : { navigationId: a };
      }
    };
    (e.ɵfac = (() => {
      let a;
      return function (n) {
        return (a || (a = I1(e)))(n || e);
      };
    })()),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Ln = (function (t) {
    return (
      (t[(t.COMPLETE = 0)] = 'COMPLETE'),
      (t[(t.FAILED = 1)] = 'FAILED'),
      (t[(t.REDIRECTING = 2)] = 'REDIRECTING'),
      t
    );
  })(Ln || {});
function V9(t, e) {
  t.events
    .pipe(
      me(
        r =>
          r instanceof u0 ||
          r instanceof $0 ||
          r instanceof Nn ||
          r instanceof za,
      ),
      I(r =>
        r instanceof u0 || r instanceof za
          ? Ln.COMPLETE
          : (
                r instanceof $0
                  ? r.code === it.Redirect ||
                    r.code === it.SupersededByNewNavigation
                  : !1
              )
            ? Ln.REDIRECTING
            : Ln.FAILED,
      ),
      me(r => r !== Ln.REDIRECTING),
      a1(1),
    )
    .subscribe(() => {
      e();
    });
}
function BV(t) {
  throw t;
}
var OV = {
    paths: 'exact',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'exact',
  },
  NV = {
    paths: 'subset',
    fragment: 'ignored',
    matrixParams: 'ignored',
    queryParams: 'subset',
  },
  It = (() => {
    let e = class e {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = m(Ti)),
          (this.stateManager = m(S9)),
          (this.options = m(Xn, { optional: !0 }) || {}),
          (this.pendingTasks = m(T0)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || 'deferred'),
          (this.navigationTransitions = m(Uc)),
          (this.urlSerializer = m(Gn)),
          (this.location = m(Ma)),
          (this.urlHandlingStrategy = m(Yc)),
          (this._events = new C()),
          (this.errorHandler = this.options.errorHandler || BV),
          (this.navigated = !1),
          (this.routeReuseStrategy = m(LV)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || 'ignore'),
          (this.config = m($n, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!m(Cs, { optional: !0 })),
          (this.eventsSubscription = new se()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: a => {
                this.console.warn(a);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let a = this.navigationTransitions.events.subscribe(o => {
          try {
            let n = this.navigationTransitions.currentTransition,
              i = this.navigationTransitions.currentNavigation;
            if (n !== null && i !== null) {
              if (
                (this.stateManager.handleRouterEvent(o, i),
                o instanceof $0 &&
                  o.code !== it.Redirect &&
                  o.code !== it.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (o instanceof u0) this.navigated = !0;
              else if (o instanceof Fo) {
                let s = o.navigationBehaviorOptions,
                  l = this.urlHandlingStrategy.merge(o.url, n.currentRawUrl),
                  c = M(
                    {
                      browserUrl: n.extras.browserUrl,
                      info: n.extras.info,
                      skipLocationChange: n.extras.skipLocationChange,
                      replaceUrl:
                        n.extras.replaceUrl ||
                        this.urlUpdateStrategy === 'eager' ||
                        kV(n.source),
                    },
                    s,
                  );
                this.scheduleNavigation(l, Pn, null, c, {
                  resolve: n.resolve,
                  reject: n.reject,
                  promise: n.promise,
                });
              }
            }
            qV(o) && this._events.next(o);
          } catch (n) {
            this.navigationTransitions.transitionAbortSubject.next(n);
          }
        });
        this.eventsSubscription.add(a);
      }
      resetRootComponentType(a) {
        (this.routerState.root.component = a),
          (this.navigationTransitions.rootComponentType = a);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Pn,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (a, o) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(a, 'popstate', o);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(a, o, n) {
        let i = { replaceUrl: !0 },
          s = n?.navigationId ? n : null;
        if (n) {
          let c = M({}, n);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (i.state = c);
        }
        let l = this.parseUrl(a);
        this.scheduleNavigation(l, o, s, i);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(a) {
        (this.config = a.map(qc)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(a, o = {}) {
        let {
            relativeTo: n,
            queryParams: i,
            fragment: s,
            queryParamsHandling: l,
            preserveFragment: c,
          } = o,
          h = c ? this.currentUrlTree.fragment : s,
          d = null;
        switch (l ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            d = M(M({}, this.currentUrlTree.queryParams), i);
            break;
          case 'preserve':
            d = this.currentUrlTree.queryParams;
            break;
          default:
            d = i || null;
        }
        d !== null && (d = this.removeEmptyProps(d));
        let u;
        try {
          let p = n ? n.snapshot : this.routerState.snapshot.root;
          u = c9(p);
        } catch {
          (typeof a[0] != 'string' || a[0][0] !== '/') && (a = []),
            (u = this.currentUrlTree.root);
        }
        return h9(u, a, d, h ?? null);
      }
      navigateByUrl(a, o = { skipLocationChange: !1 }) {
        let n = gr(a) ? a : this.parseUrl(a),
          i = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(i, Pn, null, o);
      }
      navigate(a, o = { skipLocationChange: !1 }) {
        return RV(a), this.navigateByUrl(this.createUrlTree(a, o), o);
      }
      serializeUrl(a) {
        return this.urlSerializer.serialize(a);
      }
      parseUrl(a) {
        try {
          return this.urlSerializer.parse(a);
        } catch {
          return this.urlSerializer.parse('/');
        }
      }
      isActive(a, o) {
        let n;
        if (
          (o === !0 ? (n = M({}, OV)) : o === !1 ? (n = M({}, NV)) : (n = o),
          gr(a))
        )
          return jm(this.currentUrlTree, a, n);
        let i = this.parseUrl(a);
        return jm(this.currentUrlTree, i, n);
      }
      removeEmptyProps(a) {
        return Object.entries(a).reduce(
          (o, [n, i]) => (i != null && (o[n] = i), o),
          {},
        );
      }
      scheduleNavigation(a, o, n, i, s) {
        if (this.disposed) return Promise.resolve(!1);
        let l, c, h;
        s
          ? ((l = s.resolve), (c = s.reject), (h = s.promise))
          : (h = new Promise((u, p) => {
              (l = u), (c = p);
            }));
        let d = this.pendingTasks.add();
        return (
          V9(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(d));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: o,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: a,
            extras: i,
            resolve: l,
            reject: c,
            promise: h,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          h.catch(u => Promise.reject(u))
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function RV(t) {
  for (let e = 0; e < t.length; e++) if (t[e] == null) throw new y(4008, !1);
}
function qV(t) {
  return !(t instanceof Rn) && !(t instanceof Fo);
}
var kU = (() => {
  let e = class e {
    constructor(a, o, n, i, s, l) {
      (this.router = a),
        (this.route = o),
        (this.tabIndexAttribute = n),
        (this.renderer = i),
        (this.el = s),
        (this.locationStrategy = l),
        (this.href = null),
        (this.onChanges = new C()),
        (this.preserveFragment = !1),
        (this.skipLocationChange = !1),
        (this.replaceUrl = !1),
        (this.routerLinkInput = null);
      let c = s.nativeElement.tagName?.toLowerCase();
      (this.isAnchorElement = c === 'a' || c === 'area'),
        this.isAnchorElement
          ? (this.subscription = a.events.subscribe(h => {
              h instanceof u0 && this.updateHref();
            }))
          : this.setTabIndexIfNotOnNativeEl('0');
    }
    setTabIndexIfNotOnNativeEl(a) {
      this.tabIndexAttribute != null ||
        this.isAnchorElement ||
        this.applyAttributeValue('tabindex', a);
    }
    ngOnChanges(a) {
      this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
    }
    set routerLink(a) {
      a == null
        ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
        : (gr(a)
            ? (this.routerLinkInput = a)
            : (this.routerLinkInput = Array.isArray(a) ? a : [a]),
          this.setTabIndexIfNotOnNativeEl('0'));
    }
    onClick(a, o, n, i, s) {
      let l = this.urlTree;
      if (
        l === null ||
        (this.isAnchorElement &&
          (a !== 0 ||
            o ||
            n ||
            i ||
            s ||
            (typeof this.target == 'string' && this.target != '_self')))
      )
        return !0;
      let c = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state,
        info: this.info,
      };
      return this.router.navigateByUrl(l, c), !this.isAnchorElement;
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      let a = this.urlTree;
      this.href =
        a !== null && this.locationStrategy
          ? this.locationStrategy?.prepareExternalUrl(
              this.router.serializeUrl(a),
            )
          : null;
      let o =
        this.href === null
          ? null
          : qp(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
      this.applyAttributeValue('href', o);
    }
    applyAttributeValue(a, o) {
      let n = this.renderer,
        i = this.el.nativeElement;
      o !== null ? n.setAttribute(i, a, o) : n.removeAttribute(i, a);
    }
    get urlTree() {
      return this.routerLinkInput === null
        ? null
        : gr(this.routerLinkInput)
          ? this.routerLinkInput
          : this.router.createUrlTree(this.routerLinkInput, {
              relativeTo:
                this.relativeTo !== void 0 ? this.relativeTo : this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: this.preserveFragment,
            });
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(It), v(Aa), s6('tabindex'), v(Ce), v(E), v(Y0));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'routerLink', '']],
      hostVars: 1,
      hostBindings: function (o, n) {
        o & 1 &&
          e1('click', function (s) {
            return n.onClick(
              s.button,
              s.ctrlKey,
              s.shiftKey,
              s.altKey,
              s.metaKey,
            );
          }),
          o & 2 && P0('target', n.target);
      },
      inputs: {
        target: 'target',
        queryParams: 'queryParams',
        fragment: 'fragment',
        queryParamsHandling: 'queryParamsHandling',
        state: 'state',
        info: 'info',
        relativeTo: 'relativeTo',
        preserveFragment: [2, 'preserveFragment', 'preserveFragment', G],
        skipLocationChange: [2, 'skipLocationChange', 'skipLocationChange', G],
        replaceUrl: [2, 'replaceUrl', 'replaceUrl', G],
        routerLink: 'routerLink',
      },
      standalone: !0,
      features: [ke, ee],
    }));
  let t = e;
  return t;
})();
var Fs = class {},
  LU = (() => {
    let e = class e {
      preload(a, o) {
        return o().pipe(E1(() => D(null)));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var jV = (() => {
    let e = class e {
      constructor(a, o, n, i, s) {
        (this.router = a),
          (this.injector = n),
          (this.preloadingStrategy = i),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            me(a => a instanceof u0),
            z0(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(a, o) {
        let n = [];
        for (let i of o) {
          i.providers &&
            !i._injector &&
            (i._injector = Ei(i.providers, a, `Route: ${i.path}`));
          let s = i._injector ?? a,
            l = i._loadedInjector ?? s;
          ((i.loadChildren && !i._loadedRoutes && i.canLoad === void 0) ||
            (i.loadComponent && !i._loadedComponent)) &&
            n.push(this.preloadConfig(s, i)),
            (i.children || i._loadedRoutes) &&
              n.push(this.processRoutes(l, i.children ?? i._loadedRoutes));
        }
        return Me(n).pipe(ra());
      }
      preloadConfig(a, o) {
        return this.preloadingStrategy.preload(o, () => {
          let n;
          o.loadChildren && o.canLoad === void 0
            ? (n = this.loader.loadChildren(a, o))
            : (n = D(null));
          let i = n.pipe(
            Ee(s =>
              s === null
                ? D(void 0)
                : ((o._loadedRoutes = s.routes),
                  (o._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? a, s.routes)),
            ),
          );
          if (o.loadComponent && !o._loadedComponent) {
            let s = this.loader.loadComponent(o);
            return Me([i, s]).pipe(ra());
          } else return i;
        });
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(It), g(Li), g(F1), g(Fs), g(jc));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  D9 = new F(''),
  YV = (() => {
    let e = class e {
      constructor(a, o, n, i, s = {}) {
        (this.urlSerializer = a),
          (this.transitions = o),
          (this.viewportScroller = n),
          (this.zone = i),
          (this.options = s),
          (this.lastId = 0),
          (this.lastSource = 'imperative'),
          (this.restoredId = 0),
          (this.store = {}),
          (s.scrollPositionRestoration ||= 'disabled'),
          (s.anchorScrolling ||= 'disabled');
      }
      init() {
        this.options.scrollPositionRestoration !== 'disabled' &&
          this.viewportScroller.setHistoryScrollRestoration('manual'),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe(a => {
          a instanceof bo
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = a.navigationTrigger),
              (this.restoredId = a.restoredState
                ? a.restoredState.navigationId
                : 0))
            : a instanceof u0
              ? ((this.lastId = a.id),
                this.scheduleScrollEvent(
                  a,
                  this.urlSerializer.parse(a.urlAfterRedirects).fragment,
                ))
              : a instanceof za &&
                a.code === fs.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  a,
                  this.urlSerializer.parse(a.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe(a => {
          a instanceof vs &&
            (a.position
              ? this.options.scrollPositionRestoration === 'top'
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === 'enabled' &&
                  this.viewportScroller.scrollToPosition(a.position)
              : a.anchor && this.options.anchorScrolling === 'enabled'
                ? this.viewportScroller.scrollToAnchor(a.anchor)
                : this.options.scrollPositionRestoration !== 'disabled' &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(a, o) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new vs(
                  a,
                  this.lastSource === 'popstate'
                    ? this.store[this.restoredId]
                    : null,
                  o,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (e.ɵfac = function (o) {
      rf();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
function IU(t, ...e) {
  return Et([
    { provide: $n, multi: !0, useValue: t },
    [],
    { provide: Aa, useFactory: _9, deps: [It] },
    { provide: bn, multi: !0, useFactory: H9 },
    e.map(r => r.ɵproviders),
  ]);
}
function _9(t) {
  return t.routerState.root;
}
function Jn(t, e) {
  return { ɵkind: t, ɵproviders: e };
}
function H9() {
  let t = m(Oe);
  return e => {
    let r = t.get(h0);
    if (e !== r.components[0]) return;
    let a = t.get(It),
      o = t.get(E9);
    t.get($c) === 1 && a.initialNavigation(),
      t.get(T9, null, ne.Optional)?.setUpPreloading(),
      t.get(D9, null, ne.Optional)?.init(),
      a.resetRootComponentType(r.componentTypes[0]),
      o.closed || (o.next(), o.complete(), o.unsubscribe());
  };
}
var E9 = new F('', { factory: () => new C() }),
  $c = new F('', { providedIn: 'root', factory: () => 1 });
function UV() {
  return Jn(2, [
    { provide: $c, useValue: 0 },
    {
      provide: ki,
      multi: !0,
      deps: [Oe],
      useFactory: e => {
        let r = e.get(gm, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise(a => {
                let o = e.get(It),
                  n = e.get(E9);
                V9(o, () => {
                  a(!0);
                }),
                  (e.get(Uc).afterPreactivation = () => (
                    a(!0), n.closed ? D(void 0) : n
                  )),
                  o.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function $V() {
  return Jn(3, [
    {
      provide: ki,
      multi: !0,
      useFactory: () => {
        let e = m(It);
        return () => {
          e.setUpLocationChangeListener();
        };
      },
    },
    { provide: $c, useValue: 2 },
  ]);
}
var T9 = new F('');
function WV(t) {
  return Jn(0, [
    { provide: T9, useExisting: jV },
    { provide: Fs, useExisting: t },
  ]);
}
function GV() {
  return Jn(8, [Wm, { provide: Cs, useExisting: Wm }]);
}
function KV(t) {
  let e = [
    { provide: z9, useValue: HV },
    {
      provide: A9,
      useValue: M({ skipNextTransition: !!t?.skipInitialTransition }, t),
    },
  ];
  return Jn(9, e);
}
var Qm = new F('ROUTER_FORROOT_GUARD'),
  ZV = [
    Ma,
    { provide: Gn, useClass: yo },
    It,
    Zn,
    { provide: Aa, useFactory: _9, deps: [It] },
    jc,
    [],
  ],
  PU = (() => {
    let e = class e {
      constructor(a) {}
      static forRoot(a, o) {
        return {
          ngModule: e,
          providers: [
            ZV,
            [],
            { provide: $n, multi: !0, useValue: a },
            { provide: Qm, useFactory: eD, deps: [[It, new hr(), new hi()]] },
            { provide: Xn, useValue: o || {} },
            o?.useHash ? XV() : JV(),
            QV(),
            o?.preloadingStrategy ? WV(o.preloadingStrategy).ɵproviders : [],
            o?.initialNavigation ? tD(o) : [],
            o?.bindToComponentInputs ? GV().ɵproviders : [],
            o?.enableViewTransitions ? KV().ɵproviders : [],
            aD(),
          ],
        };
      }
      static forChild(a) {
        return {
          ngModule: e,
          providers: [{ provide: $n, multi: !0, useValue: a }],
        };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Qm, 8));
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({}));
    let t = e;
    return t;
  })();
function QV() {
  return {
    provide: D9,
    useFactory: () => {
      let t = m(zm),
        e = m(T),
        r = m(Xn),
        a = m(Uc),
        o = m(Gn);
      return (
        r.scrollOffset && t.setOffset(r.scrollOffset), new YV(o, a, t, e, r)
      );
    },
  };
}
function XV() {
  return { provide: Y0, useClass: xm };
}
function JV() {
  return { provide: Y0, useClass: G6 };
}
function eD(t) {
  return 'guarded';
}
function tD(t) {
  return [
    t.initialNavigation === 'disabled' ? $V().ɵproviders : [],
    t.initialNavigation === 'enabledBlocking' ? UV().ɵproviders : [],
  ];
}
var Xm = new F('');
function aD() {
  return [
    { provide: Xm, useFactory: H9 },
    { provide: bn, multi: !0, useExisting: Xm },
  ];
}
var Wc = () => {},
  Ao = (() => {
    let e = class e {
      constructor(a, o) {
        (this.ngZone = a),
          (this.rendererFactory2 = o),
          (this.resizeSource$ = new C()),
          (this.listeners = 0),
          (this.disposeHandle = Wc),
          (this.handler = () => {
            this.ngZone.run(() => {
              this.resizeSource$.next();
            });
          }),
          (this.renderer = this.rendererFactory2.createRenderer(null, null));
      }
      ngOnDestroy() {
        this.handler = Wc;
      }
      subscribe() {
        return (
          this.registerListener(),
          this.resizeSource$.pipe(
            Wa(16),
            X1(() => this.unregisterListener()),
          )
        );
      }
      unsubscribe() {
        this.unregisterListener();
      }
      registerListener() {
        this.listeners === 0 &&
          this.ngZone.runOutsideAngular(() => {
            this.disposeHandle = this.renderer.listen(
              'window',
              'resize',
              this.handler,
            );
          }),
          (this.listeners += 1);
      }
      unregisterListener() {
        (this.listeners -= 1),
          this.listeners === 0 &&
            (this.disposeHandle(), (this.disposeHandle = Wc));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(T), g(Y1));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var Ss = { isTestMode: !1 };
var oD = new Map(),
  GU = (() => {
    let e = class e {
      constructor() {
        this._singletonRegistry = new Map();
      }
      get singletonRegistry() {
        return Ss.isTestMode ? oD : this._singletonRegistry;
      }
      registerSingletonWithKey(a, o) {
        let n = this.singletonRegistry.has(a),
          i = n ? this.singletonRegistry.get(a) : this.withNewTarget(o);
        n || this.singletonRegistry.set(a, i);
      }
      unregisterSingletonWithKey(a) {
        this.singletonRegistry.has(a) && this.singletonRegistry.delete(a);
      }
      getSingletonWithKey(a) {
        return this.singletonRegistry.has(a)
          ? this.singletonRegistry.get(a).target
          : null;
      }
      withNewTarget(a) {
        return { target: a };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function ZU(t) {
  let e;
  return t == null ? (e = []) : Array.isArray(t) ? (e = t) : (e = [t]), e;
}
function QU(t, e) {
  if (!t || !e || t.length !== e.length) return !1;
  let r = t.length;
  for (let a = 0; a < r; a++) if (t[a] !== e[a]) return !1;
  return !0;
}
function yt(t) {
  return typeof t < 'u' && t !== null;
}
function e$(t) {
  return typeof t > 'u' || t === null;
}
function t$(t, e) {
  if (t === e) return !0;
  if (typeof t != 'object' || !t || typeof e != 'object' || !e) return !1;
  let r = Object.keys(t),
    a = Object.keys(e);
  if (r.length !== a.length) return !1;
  let o = Object.prototype.hasOwnProperty.bind(e);
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    if (!o(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}
function a$(t) {
  return t instanceof Ke;
}
function k9(t) {
  return t != null && `${t}` != 'false';
}
function wr(t, e = 0) {
  return nD(t) ? Number(t) : arguments.length === 2 ? e : 0;
}
function nD(t) {
  return !isNaN(parseFloat(t)) && !isNaN(Number(t));
}
function So(t) {
  return Array.isArray(t) ? t : [t];
}
function Ue(t) {
  return t == null ? '' : typeof t == 'string' ? t : `${t}px`;
}
function Va(t) {
  return t instanceof E ? t.nativeElement : t;
}
var L9 = {},
  iD = '[NG-ZORRO]:';
function sD(...t) {
  let e = t.reduce((r, a) => r + a.toString(), '');
  return L9[e] ? !1 : ((L9[e] = !0), !0);
}
function lD(t, ...e) {
  (Ss.isTestMode || (po() && sD(...e))) && t(...e);
}
var p0 = (...t) => lD((...e) => console.warn(iD, ...e), ...t);
function I9(t) {
  return k9(t);
}
function v$(t) {
  return fr(t, 0);
}
function g$(t, e = 0) {
  return wr(t, e);
}
function e5(t) {
  return Ue(t);
}
function x$(t) {
  if (!t.getClientRects().length) return { top: 0, left: 0 };
  let e = t.getBoundingClientRect(),
    r = t.ownerDocument.defaultView;
  return { top: e.top + r.pageYOffset, left: e.left + r.pageXOffset };
}
function P9(t) {
  return !!t && typeof t.then == 'function' && typeof t.catch == 'function';
}
function C$(t) {
  return typeof t == 'number' && isFinite(t);
}
function z$(t, e) {
  return Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
}
var cD = typeof window < 'u',
  V$ = cD && window.mozInnerScreenX != null;
function Gc(t) {
  if (
    typeof window < 'u' &&
    window.document &&
    window.document.documentElement
  ) {
    let e = Array.isArray(t) ? t : [t],
      { documentElement: r } = window.document;
    return e.some(a => a in r.style);
  }
  return !1;
}
function _$(t) {
  return t
    ? Object.keys(t)
        .map(e => {
          let r = t[e];
          return `${e}:${typeof r == 'string' ? r : `${r}px`}`;
        })
        .join(';')
    : '';
}
var ze,
  Kc = { padding: '0', margin: '0', display: 'inline', lineHeight: 'inherit' };
function Zc(t) {
  if (!t) return 0;
  let e = t.match(/^\d*(\.\d*)?/);
  return e ? Number(e[0]) : 0;
}
function hD(t) {
  return Array.prototype.slice
    .apply(t)
    .map(r => `${r}: ${t.getPropertyValue(r)};`)
    .join('');
}
function dD(t) {
  let e = [];
  return (
    t.forEach(r => {
      let a = e[e.length - 1];
      a && r.nodeType === 3 && a.nodeType === 3
        ? (a.data += r.data)
        : e.push(r);
    }),
    e
  );
}
function B9(t, e, r, a, o, n = '') {
  ze ||
    ((ze = document.createElement('div')),
    ze.setAttribute('aria-hidden', 'true'),
    document.body.appendChild(ze));
  let i = window.getComputedStyle(t),
    s = hD(i),
    l = Zc(i.lineHeight),
    c = Math.round(l * (e + 1) + Zc(i.paddingTop) + Zc(i.paddingBottom));
  ze.setAttribute('style', s),
    (ze.style.position = 'fixed'),
    (ze.style.left = '0'),
    (ze.style.height = 'auto'),
    (ze.style.minHeight = 'auto'),
    (ze.style.maxHeight = 'auto'),
    (ze.style.top = '-999999px'),
    (ze.style.zIndex = '-1000'),
    (ze.style.textOverflow = 'clip'),
    (ze.style.whiteSpace = 'normal'),
    (ze.style.webkitLineClamp = 'none');
  let h = dD(r),
    d = document.createElement('div'),
    u = document.createElement('span'),
    p = document.createTextNode(n),
    f = document.createElement('span');
  Object.assign(d.style, Kc),
    Object.assign(u.style, Kc),
    Object.assign(f.style, Kc),
    h.forEach(fe => {
      u.appendChild(fe);
    }),
    u.appendChild(p),
    a.forEach(fe => {
      f.appendChild(fe.cloneNode(!0));
    }),
    d.appendChild(u),
    d.appendChild(f),
    ze.appendChild(d);
  function x() {
    return ze.offsetHeight < c;
  }
  if (x()) {
    let fe = ze.innerHTML;
    return ze.removeChild(d), { contentNodes: r, text: fe, ellipsis: !1 };
  }
  let b = Array.prototype.slice
      .apply(ze.childNodes[0].childNodes[0].cloneNode(!0).childNodes)
      .filter(({ nodeType: fe }) => fe !== 8),
    z = Array.prototype.slice.apply(
      ze.childNodes[0].childNodes[1].cloneNode(!0).childNodes,
    );
  ze.removeChild(d), (ze.innerHTML = '');
  let L = document.createElement('span');
  ze.appendChild(L);
  let oe = document.createTextNode(o + n);
  L.appendChild(oe),
    z.forEach(fe => {
      ze.appendChild(fe);
    });
  function U(fe) {
    L.insertBefore(fe, oe);
  }
  function qe(fe, u1, ct = 0, p1 = u1.length, J0 = 0) {
    let Oa = Math.floor((ct + p1) / 2);
    if (((fe.textContent = u1.slice(0, Oa)), ct >= p1 - 1))
      for (let Na = p1; Na >= ct; Na -= 1) {
        let V = u1.slice(0, Na);
        if (((fe.textContent = V), x() || !V))
          return Na === u1.length
            ? { finished: !1, node: document.createTextNode(u1) }
            : { finished: !0, node: document.createTextNode(V) };
      }
    return x() ? qe(fe, u1, Oa, p1, Oa) : qe(fe, u1, ct, Oa, J0);
  }
  function ue(fe, u1) {
    let ct = fe.nodeType;
    if (ct === 1)
      return x()
        ? { finished: !1, node: h[u1] }
        : (L.removeChild(fe), { finished: !0, node: null });
    if (ct === 3) {
      let p1 = fe.textContent || '',
        J0 = document.createTextNode(p1);
      return U(J0), qe(J0, p1);
    }
    return { finished: !1, node: null };
  }
  let xe = [];
  b.some((fe, u1) => {
    let { finished: ct, node: p1 } = ue(fe, u1);
    return p1 && xe.push(p1), ct;
  });
  let je = { contentNodes: xe, text: ze.innerHTML, ellipsis: !0 };
  for (; ze.firstChild; ) ze.removeChild(ze.firstChild);
  return je;
}
var Qc,
  Xc,
  O9 = { position: 'absolute', top: '-9999px', width: '50px', height: '50px' };
function T$(t = 'vertical', e = 'ant') {
  if (typeof document > 'u' || typeof window > 'u') return 0;
  let r = t === 'vertical';
  if (r && Qc) return Qc;
  if (!r && Xc) return Xc;
  let a = document.createElement('div');
  Object.keys(O9).forEach(n => {
    a.style[n] = O9[n];
  }),
    (a.className = `${e}-hide-scrollbar scroll-div-append-to-body`),
    r ? (a.style.overflowY = 'scroll') : (a.style.overflowX = 'scroll'),
    document.body.appendChild(a);
  let o = 0;
  return (
    r
      ? ((o = a.offsetWidth - a.clientWidth), (Qc = o))
      : ((o = a.offsetHeight - a.clientHeight), (Xc = o)),
    document.body.removeChild(a),
    o
  );
}
function O$(t) {
  return Q1(t) ? t : P9(t) ? Me(Promise.resolve(t)) : D(t);
}
function Vs() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var uD = 'rc-util-key';
function R9({ mark: t } = {}) {
  return t ? (t.startsWith('data-') ? t : `data-${t}`) : uD;
}
function eh(t) {
  return t.attachTo
    ? t.attachTo
    : document.querySelector('head') || document.body;
}
function N9(t, e = {}) {
  if (!Vs()) return null;
  let r = document.createElement('style');
  e.cspNonce && (r.nonce = e.cspNonce), (r.innerHTML = t);
  let a = eh(e),
    { firstChild: o } = a;
  return (
    e.prepend && a.prepend
      ? a.prepend(r)
      : e.prepend && o
        ? a.insertBefore(r, o)
        : a.appendChild(r),
    r
  );
}
var Jc = new Map();
function pD(t, e = {}) {
  let r = eh(e);
  return Array.from(Jc.get(r)?.children || []).find(
    a => a.tagName === 'STYLE' && a.getAttribute(R9(e)) === t,
  );
}
function q9(t, e, r = {}) {
  let a = eh(r);
  if (!Jc.has(a)) {
    let i = N9('', r),
      { parentNode: s } = i;
    Jc.set(a, s), s.removeChild(i);
  }
  let o = pD(e, r);
  if (o)
    return (
      r.cspNonce && o.nonce !== r.cspNonce && (o.nonce = r.cspNonce),
      o.innerHTML !== t && (o.innerHTML = t),
      o
    );
  let n = N9(t, r);
  return n?.setAttribute(R9(r), e), n;
}
function Vo(t, e, r) {
  return {
    [`${t}-status-success`]: e === 'success',
    [`${t}-status-warning`]: e === 'warning',
    [`${t}-status-error`]: e === 'error',
    [`${t}-status-validating`]: e === 'validating',
    [`${t}-has-feedback`]: r,
  };
}
var j9 = ['moz', 'ms', 'webkit'];
function fD() {
  let t = 0;
  return function (e) {
    let r = new Date().getTime(),
      a = Math.max(0, 16 - (r - t)),
      o = window.setTimeout(() => {
        e(r + a);
      }, a);
    return (t = r + a), o;
  };
}
function mD() {
  if (typeof window > 'u') return () => 0;
  if (window.requestAnimationFrame)
    return window.requestAnimationFrame.bind(window);
  let t = j9.filter(e => `${e}RequestAnimationFrame` in window)[0];
  return t ? window[`${t}RequestAnimationFrame`] : fD();
}
function Y9(t) {
  if (typeof window > 'u') return null;
  if (window.cancelAnimationFrame) return window.cancelAnimationFrame(t);
  let e = j9.filter(
    r =>
      `${r}CancelAnimationFrame` in window ||
      `${r}CancelRequestAnimationFrame` in window,
  )[0];
  return e
    ? (
        window[`${e}CancelAnimationFrame`] ||
        window[`${e}CancelRequestAnimationFrame`]
      ).call(this, t)
    : clearTimeout(t);
}
var t5 = mD();
function vD(t, e, r, a) {
  let o = r - e,
    n = t / (a / 2);
  return n < 1 ? (o / 2) * n * n * n + e : (o / 2) * ((n -= 2) * n * n + 2) + e;
}
var AW = (() => {
  let e = class e {
    constructor(a) {
      (this.ngZone = a), (this.doc = m(Y));
    }
    setScrollTop(a, o = 0) {
      a === window
        ? ((this.doc.body.scrollTop = o),
          (this.doc.documentElement.scrollTop = o))
        : (a.scrollTop = o);
    }
    getOffset(a) {
      let o = { top: 0, left: 0 };
      if (!a || !a.getClientRects().length) return o;
      let n = a.getBoundingClientRect();
      if (n.width || n.height) {
        let i = a.ownerDocument.documentElement;
        (o.top = n.top - i.clientTop), (o.left = n.left - i.clientLeft);
      } else (o.top = n.top), (o.left = n.left);
      return o;
    }
    getScroll(a, o = !0) {
      if (typeof window > 'u') return 0;
      let n = o ? 'scrollTop' : 'scrollLeft',
        i = 0;
      return (
        this.isWindow(a)
          ? (i = a[o ? 'pageYOffset' : 'pageXOffset'])
          : a instanceof Document
            ? (i = a.documentElement[n])
            : a && (i = a[n]),
        a &&
          !this.isWindow(a) &&
          typeof i != 'number' &&
          (i = (a.ownerDocument || a).documentElement[n]),
        i
      );
    }
    isWindow(a) {
      return a != null && a === a.window;
    }
    scrollTo(a, o = 0, n = {}) {
      let i = a || window,
        s = this.getScroll(i),
        l = Date.now(),
        { easing: c, callback: h, duration: d = 450 } = n,
        u = () => {
          let f = Date.now() - l,
            x = (c || vD)(f > d ? d : f, s, o, d);
          this.isWindow(i)
            ? i.scrollTo(window.pageXOffset, x)
            : i instanceof HTMLDocument || i.constructor.name === 'HTMLDocument'
              ? (i.documentElement.scrollTop = x)
              : (i.scrollTop = x),
            f < d ? t5(u) : typeof h == 'function' && this.ngZone.run(h);
        };
      this.ngZone.runOutsideAngular(() => t5(u));
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(T));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var ah;
try {
  ah = typeof Intl < 'u' && Intl.v8BreakIterator;
} catch {
  ah = !1;
}
var Se = (() => {
    let e = class e {
      constructor(a) {
        (this._platformId = a),
          (this.isBrowser = this._platformId
            ? Fn(this._platformId)
            : typeof document == 'object' && !!document),
          (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
          (this.TRIDENT =
            this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
          (this.BLINK =
            this.isBrowser &&
            !!(window.chrome || ah) &&
            typeof CSS < 'u' &&
            !this.EDGE &&
            !this.TRIDENT),
          (this.WEBKIT =
            this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) &&
            !this.BLINK &&
            !this.EDGE &&
            !this.TRIDENT),
          (this.IOS =
            this.isBrowser &&
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window)),
          (this.FIREFOX =
            this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
          (this.ANDROID =
            this.isBrowser &&
            /android/i.test(navigator.userAgent) &&
            !this.TRIDENT),
          (this.SAFARI =
            this.isBrowser &&
            /safari/i.test(navigator.userAgent) &&
            this.WEBKIT);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(V1));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  TW = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({}));
    let t = e;
    return t;
  })();
var a5;
function gD() {
  if (a5 == null && typeof window < 'u')
    try {
      window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', { get: () => (a5 = !0) }),
      );
    } finally {
      a5 = a5 || !1;
    }
  return a5;
}
function rh(t) {
  return gD() ? t : !!t.capture;
}
var Pt = (function (t) {
    return (
      (t[(t.NORMAL = 0)] = 'NORMAL'),
      (t[(t.NEGATED = 1)] = 'NEGATED'),
      (t[(t.INVERTED = 2)] = 'INVERTED'),
      t
    );
  })(Pt || {}),
  Ds,
  xr;
function _s() {
  if (xr == null) {
    if (
      typeof document != 'object' ||
      !document ||
      typeof Element != 'function' ||
      !Element
    )
      return (xr = !1), xr;
    if ('scrollBehavior' in document.documentElement.style) xr = !0;
    else {
      let t = Element.prototype.scrollTo;
      t ? (xr = !/\{\s*\[native code\]\s*\}/.test(t.toString())) : (xr = !1);
    }
  }
  return xr;
}
function Do() {
  if (typeof document != 'object' || !document) return Pt.NORMAL;
  if (Ds == null) {
    let t = document.createElement('div'),
      e = t.style;
    (t.dir = 'rtl'),
      (e.width = '1px'),
      (e.overflow = 'auto'),
      (e.visibility = 'hidden'),
      (e.pointerEvents = 'none'),
      (e.position = 'absolute');
    let r = document.createElement('div'),
      a = r.style;
    (a.width = '2px'),
      (a.height = '1px'),
      t.appendChild(r),
      document.body.appendChild(t),
      (Ds = Pt.NORMAL),
      t.scrollLeft === 0 &&
        ((t.scrollLeft = 1),
        (Ds = t.scrollLeft === 0 ? Pt.NEGATED : Pt.INVERTED)),
      t.remove();
  }
  return Ds;
}
var th;
function wD() {
  if (th == null) {
    let t = typeof document < 'u' ? document.head : null;
    th = !!(t && (t.createShadowRoot || t.attachShadow));
  }
  return th;
}
function U9(t) {
  if (wD()) {
    let e = t.getRootNode ? t.getRootNode() : null;
    if (typeof ShadowRoot < 'u' && ShadowRoot && e instanceof ShadowRoot)
      return e;
  }
  return null;
}
function $9() {
  let t = typeof document < 'u' && document ? document.activeElement : null;
  for (; t && t.shadowRoot; ) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e;
  }
  return t;
}
function bt(t) {
  return t.composedPath ? t.composedPath()[0] : t.target;
}
function oh() {
  return (
    (typeof __karma__ < 'u' && !!__karma__) ||
    (typeof jasmine < 'u' && !!jasmine) ||
    (typeof jest < 'u' && !!jest) ||
    (typeof Mocha < 'u' && !!Mocha)
  );
}
var W9 = new Set(),
  Mr,
  r5 = (() => {
    let e = class e {
      constructor(a, o) {
        (this._platform = a),
          (this._nonce = o),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : MD);
      }
      matchMedia(a) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && xD(a, this._nonce),
          this._matchMedia(a)
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Se), g(k0, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function xD(t, e) {
  if (!W9.has(t))
    try {
      Mr ||
        ((Mr = document.createElement('style')),
        e && Mr.setAttribute('nonce', e),
        Mr.setAttribute('type', 'text/css'),
        document.head.appendChild(Mr)),
        Mr.sheet &&
          (Mr.sheet.insertRule(`@media ${t} {body{ }}`, 0), W9.add(t));
    } catch (r) {
      console.error(r);
    }
}
function MD(t) {
  return {
    matches: t === 'all' || t === '',
    media: t,
    addListener: () => {},
    removeListener: () => {},
  };
}
var K9 = (() => {
  let e = class e {
    constructor(a, o) {
      (this._mediaMatcher = a),
        (this._zone = o),
        (this._queries = new Map()),
        (this._destroySubject = new C());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(a) {
      return G9(So(a)).some(n => this._registerQuery(n).mql.matches);
    }
    observe(a) {
      let n = G9(So(a)).map(s => this._registerQuery(s).observable),
        i = F0(n);
      return (
        (i = Wt(i.pipe(a1(1)), i.pipe(en(1), w2(0)))),
        i.pipe(
          I(s => {
            let l = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: c, query: h }) => {
                (l.matches = l.matches || c), (l.breakpoints[h] = c);
              }),
              l
            );
          }),
        )
      );
    }
    _registerQuery(a) {
      if (this._queries.has(a)) return this._queries.get(a);
      let o = this._mediaMatcher.matchMedia(a),
        i = {
          observable: new P(s => {
            let l = c => this._zone.run(() => s.next(c));
            return (
              o.addListener(l),
              () => {
                o.removeListener(l);
              }
            );
          }).pipe(
            T1(o),
            I(({ matches: s }) => ({ query: a, matches: s })),
            S(this._destroySubject),
          ),
          mql: o,
        };
      return this._queries.set(a, i), i;
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(r5), g(T));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
function G9(t) {
  return t
    .map(e => e.split(','))
    .reduce((e, r) => e.concat(r))
    .map(e => e.trim());
}
var Q9 = (function (t) {
    return (
      (t.xxl = 'xxl'),
      (t.xl = 'xl'),
      (t.lg = 'lg'),
      (t.md = 'md'),
      (t.sm = 'sm'),
      (t.xs = 'xs'),
      t
    );
  })(Q9 || {}),
  o5 = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  };
var X9 = (() => {
  let e = class e {
    constructor(a, o) {
      (this.resizeService = a),
        (this.mediaMatcher = o),
        (this.destroy$ = new C()),
        this.resizeService
          .subscribe()
          .pipe(S(this.destroy$))
          .subscribe(() => {});
    }
    ngOnDestroy() {
      this.destroy$.next();
    }
    subscribe(a, o) {
      if (o) {
        let n = () => this.matchMedia(a, !0);
        return this.resizeService.subscribe().pipe(
          I(n),
          T1(n()),
          z1((i, s) => i[0] === s[0]),
          I(i => i[1]),
        );
      } else {
        let n = () => this.matchMedia(a);
        return this.resizeService.subscribe().pipe(I(n), T1(n()), z1());
      }
    }
    matchMedia(a, o) {
      let n = Q9.md,
        i = {};
      return (
        Object.keys(a).map(s => {
          let l = s,
            c = this.mediaMatcher.matchMedia(o5[l]).matches;
          (i[s] = c), c && (n = l);
        }),
        o ? [n, i] : n
      );
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(Ao), g(r5));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var _a = (() => {
  let e = class e extends C {
    ngOnDestroy() {
      this.next(), this.complete();
    }
  };
  (e.ɵfac = (() => {
    let a;
    return function (n) {
      return (a || (a = I1(e)))(n || e);
    };
  })()),
    (e.ɵprov = w({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var yD = new F('cdk-dir-doc', { providedIn: 'root', factory: bD });
function bD() {
  return m(Y);
}
var FD =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function CD(t) {
  let e = t?.toLowerCase() || '';
  return e === 'auto' && typeof navigator < 'u' && navigator?.language
    ? FD.test(navigator.language)
      ? 'rtl'
      : 'ltr'
    : e === 'rtl'
      ? 'rtl'
      : 'ltr';
}
var $e = (() => {
  let e = class e {
    constructor(a) {
      if (((this.value = 'ltr'), (this.change = new W()), a)) {
        let o = a.body ? a.body.dir : null,
          n = a.documentElement ? a.documentElement.dir : null;
        this.value = CD(o || n || 'ltr');
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(yD, 8));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var i5 = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var J9 = (() => {
  let e = class e {
    getGutter() {
      let a = [null, null],
        o = this.nzGutter || 0;
      return (
        (Array.isArray(o) ? o : [o, null]).forEach((i, s) => {
          typeof i == 'object' && i !== null
            ? ((a[s] = null),
              Object.keys(o5).map(l => {
                let c = l;
                this.mediaMatcher.matchMedia(o5[c]).matches &&
                  i[c] &&
                  (a[s] = i[c]);
              }))
            : (a[s] = Number(i) || null);
        }),
        a
      );
    }
    setGutterStyle() {
      let [a, o] = this.getGutter();
      this.actualGutter$.next([a, o]);
      let n = (i, s) => {
        let l = this.elementRef.nativeElement;
        s !== null && this.renderer.setStyle(l, i, `-${s / 2}px`);
      };
      n('margin-left', a),
        n('margin-right', a),
        n('margin-top', o),
        n('margin-bottom', o);
    }
    constructor(a, o, n, i, s, l, c) {
      (this.elementRef = a),
        (this.renderer = o),
        (this.mediaMatcher = n),
        (this.ngZone = i),
        (this.platform = s),
        (this.breakpointService = l),
        (this.directionality = c),
        (this.nzAlign = null),
        (this.nzJustify = null),
        (this.nzGutter = null),
        (this.actualGutter$ = new O1(1)),
        (this.dir = 'ltr'),
        (this.destroy$ = new C());
    }
    ngOnInit() {
      (this.dir = this.directionality.value),
        this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
          this.dir = a;
        }),
        this.setGutterStyle();
    }
    ngOnChanges(a) {
      a.nzGutter && this.setGutterStyle();
    }
    ngAfterViewInit() {
      this.platform.isBrowser &&
        this.breakpointService
          .subscribe(o5)
          .pipe(S(this.destroy$))
          .subscribe(() => {
            this.setGutterStyle();
          });
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(E), v(Ce), v(r5), v(T), v(Se), v(X9), v($e));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'nz-row', ''], ['nz-row'], ['nz-form-item']],
      hostAttrs: [1, 'ant-row'],
      hostVars: 20,
      hostBindings: function (o, n) {
        o & 2 &&
          we('ant-row-top', n.nzAlign === 'top')(
            'ant-row-middle',
            n.nzAlign === 'middle',
          )('ant-row-bottom', n.nzAlign === 'bottom')(
            'ant-row-start',
            n.nzJustify === 'start',
          )('ant-row-end', n.nzJustify === 'end')(
            'ant-row-center',
            n.nzJustify === 'center',
          )('ant-row-space-around', n.nzJustify === 'space-around')(
            'ant-row-space-between',
            n.nzJustify === 'space-between',
          )('ant-row-space-evenly', n.nzJustify === 'space-evenly')(
            'ant-row-rtl',
            n.dir === 'rtl',
          );
      },
      inputs: {
        nzAlign: 'nzAlign',
        nzJustify: 'nzJustify',
        nzGutter: 'nzGutter',
      },
      exportAs: ['nzRow'],
      standalone: !0,
      features: [ee],
    }));
  let t = e;
  return t;
})();
var FG = (() => {
  let e = class e {
    setHostClassMap() {
      let a = M(
        {
          'ant-col': !0,
          [`ant-col-${this.nzSpan}`]: yt(this.nzSpan),
          [`ant-col-order-${this.nzOrder}`]: yt(this.nzOrder),
          [`ant-col-offset-${this.nzOffset}`]: yt(this.nzOffset),
          [`ant-col-pull-${this.nzPull}`]: yt(this.nzPull),
          [`ant-col-push-${this.nzPush}`]: yt(this.nzPush),
          'ant-col-rtl': this.dir === 'rtl',
        },
        this.generateClass(),
      );
      for (let o in this.classMap)
        this.classMap.hasOwnProperty(o) &&
          this.renderer.removeClass(this.elementRef.nativeElement, o);
      this.classMap = M({}, a);
      for (let o in this.classMap)
        this.classMap.hasOwnProperty(o) &&
          this.classMap[o] &&
          this.renderer.addClass(this.elementRef.nativeElement, o);
    }
    setHostFlexStyle() {
      this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }
    parseFlex(a) {
      return typeof a == 'number'
        ? `${a} ${a} auto`
        : typeof a == 'string' && /^\d+(\.\d+)?(px|em|rem|%)$/.test(a)
          ? `0 0 ${a}`
          : a;
    }
    generateClass() {
      let a = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'],
        o = {};
      return (
        a.forEach(n => {
          let i = n.replace('nz', '').toLowerCase();
          if (yt(this[n]))
            if (typeof this[n] == 'number' || typeof this[n] == 'string')
              o[`ant-col-${i}-${this[n]}`] = !0;
            else {
              let s = this[n];
              ['span', 'pull', 'push', 'offset', 'order'].forEach(c => {
                let h = c === 'span' ? '-' : `-${c}-`;
                o[`ant-col-${i}${h}${s[c]}`] = s && yt(s[c]);
              });
            }
        }),
        o
      );
    }
    constructor(a, o, n) {
      (this.elementRef = a),
        (this.renderer = o),
        (this.directionality = n),
        (this.classMap = {}),
        (this.destroy$ = new C()),
        (this.hostFlexStyle = null),
        (this.dir = 'ltr'),
        (this.nzFlex = null),
        (this.nzSpan = null),
        (this.nzOrder = null),
        (this.nzOffset = null),
        (this.nzPush = null),
        (this.nzPull = null),
        (this.nzXs = null),
        (this.nzSm = null),
        (this.nzMd = null),
        (this.nzLg = null),
        (this.nzXl = null),
        (this.nzXXl = null),
        (this.nzRowDirective = m(J9, { host: !0, optional: !0 }));
    }
    ngOnInit() {
      (this.dir = this.directionality.value),
        this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
          (this.dir = a), this.setHostClassMap();
        }),
        this.setHostClassMap(),
        this.setHostFlexStyle();
    }
    ngOnChanges(a) {
      this.setHostClassMap();
      let { nzFlex: o } = a;
      o && this.setHostFlexStyle();
    }
    ngAfterViewInit() {
      this.nzRowDirective &&
        this.nzRowDirective.actualGutter$
          .pipe(S(this.destroy$))
          .subscribe(([a, o]) => {
            let n = (i, s) => {
              let l = this.elementRef.nativeElement;
              s !== null && this.renderer.setStyle(l, i, `${s / 2}px`);
            };
            n('padding-left', a),
              n('padding-right', a),
              n('padding-top', o),
              n('padding-bottom', o);
          });
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(E), v(Ce), v($e));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [
        ['', 'nz-col', ''],
        ['nz-col'],
        ['nz-form-control'],
        ['nz-form-label'],
      ],
      hostVars: 2,
      hostBindings: function (o, n) {
        o & 2 && i0('flex', n.hostFlexStyle);
      },
      inputs: {
        nzFlex: 'nzFlex',
        nzSpan: 'nzSpan',
        nzOrder: 'nzOrder',
        nzOffset: 'nzOffset',
        nzPush: 'nzPush',
        nzPull: 'nzPull',
        nzXs: 'nzXs',
        nzSm: 'nzSm',
        nzMd: 'nzMd',
        nzLg: 'nzLg',
        nzXl: 'nzXl',
        nzXXl: 'nzXXl',
      },
      exportAs: ['nzCol'],
      standalone: !0,
      features: [ee],
    }));
  let t = e;
  return t;
})();
var _G = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
function d1(t, e) {
  zD(t) && (t = '100%');
  var r = AD(t);
  return (
    (t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t)))),
    r && (t = parseInt(String(t * e), 10) / 100),
    Math.abs(t - e) < 1e-6
      ? 1
      : (e === 360
          ? (t = (t < 0 ? (t % e) + e : t % e) / parseFloat(String(e)))
          : (t = (t % e) / parseFloat(String(e))),
        t)
  );
}
function s5(t) {
  return Math.min(1, Math.max(0, t));
}
function zD(t) {
  return typeof t == 'string' && t.indexOf('.') !== -1 && parseFloat(t) === 1;
}
function AD(t) {
  return typeof t == 'string' && t.indexOf('%') !== -1;
}
function Hs(t) {
  return (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function l5(t) {
  return t <= 1 ? ''.concat(Number(t) * 100, '%') : t;
}
function Ha(t) {
  return t.length === 1 ? '0' + t : String(t);
}
function ev(t, e, r) {
  return { r: d1(t, 255) * 255, g: d1(e, 255) * 255, b: d1(r, 255) * 255 };
}
function ih(t, e, r) {
  (t = d1(t, 255)), (e = d1(e, 255)), (r = d1(r, 255));
  var a = Math.max(t, e, r),
    o = Math.min(t, e, r),
    n = 0,
    i = 0,
    s = (a + o) / 2;
  if (a === o) (i = 0), (n = 0);
  else {
    var l = a - o;
    switch (((i = s > 0.5 ? l / (2 - a - o) : l / (a + o)), a)) {
      case t:
        n = (e - r) / l + (e < r ? 6 : 0);
        break;
      case e:
        n = (r - t) / l + 2;
        break;
      case r:
        n = (t - e) / l + 4;
        break;
      default:
        break;
    }
    n /= 6;
  }
  return { h: n, s: i, l: s };
}
function nh(t, e, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? t + (e - t) * (6 * r)
      : r < 1 / 2
        ? e
        : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t
  );
}
function tv(t, e, r) {
  var a, o, n;
  if (((t = d1(t, 360)), (e = d1(e, 100)), (r = d1(r, 100)), e === 0))
    (o = r), (n = r), (a = r);
  else {
    var i = r < 0.5 ? r * (1 + e) : r + e - r * e,
      s = 2 * r - i;
    (a = nh(s, i, t + 1 / 3)), (o = nh(s, i, t)), (n = nh(s, i, t - 1 / 3));
  }
  return { r: a * 255, g: o * 255, b: n * 255 };
}
function yr(t, e, r) {
  (t = d1(t, 255)), (e = d1(e, 255)), (r = d1(r, 255));
  var a = Math.max(t, e, r),
    o = Math.min(t, e, r),
    n = 0,
    i = a,
    s = a - o,
    l = a === 0 ? 0 : s / a;
  if (a === o) n = 0;
  else {
    switch (a) {
      case t:
        n = (e - r) / s + (e < r ? 6 : 0);
        break;
      case e:
        n = (r - t) / s + 2;
        break;
      case r:
        n = (t - e) / s + 4;
        break;
      default:
        break;
    }
    n /= 6;
  }
  return { h: n, s: l, v: i };
}
function av(t, e, r) {
  (t = d1(t, 360) * 6), (e = d1(e, 100)), (r = d1(r, 100));
  var a = Math.floor(t),
    o = t - a,
    n = r * (1 - e),
    i = r * (1 - o * e),
    s = r * (1 - (1 - o) * e),
    l = a % 6,
    c = [r, i, n, n, s, r][l],
    h = [s, r, r, i, n, n][l],
    d = [n, n, s, r, r, i][l];
  return { r: c * 255, g: h * 255, b: d * 255 };
}
function br(t, e, r, a) {
  var o = [
    Ha(Math.round(t).toString(16)),
    Ha(Math.round(e).toString(16)),
    Ha(Math.round(r).toString(16)),
  ];
  return a &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function rv(t, e, r, a, o) {
  var n = [
    Ha(Math.round(t).toString(16)),
    Ha(Math.round(e).toString(16)),
    Ha(Math.round(r).toString(16)),
    Ha(SD(a)),
  ];
  return o &&
    n[0].startsWith(n[0].charAt(1)) &&
    n[1].startsWith(n[1].charAt(1)) &&
    n[2].startsWith(n[2].charAt(1)) &&
    n[3].startsWith(n[3].charAt(1))
    ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0)
    : n.join('');
}
function SD(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function sh(t) {
  return W1(t) / 255;
}
function W1(t) {
  return parseInt(t, 16);
}
function ov(t) {
  return { r: t >> 16, g: (t & 65280) >> 8, b: t & 255 };
}
var c5 = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function G1(t) {
  var e = { r: 0, g: 0, b: 0 },
    r = 1,
    a = null,
    o = null,
    n = null,
    i = !1,
    s = !1;
  return (
    typeof t == 'string' && (t = _D(t)),
    typeof t == 'object' &&
      (K0(t.r) && K0(t.g) && K0(t.b)
        ? ((e = ev(t.r, t.g, t.b)),
          (i = !0),
          (s = String(t.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : K0(t.h) && K0(t.s) && K0(t.v)
          ? ((a = l5(t.s)),
            (o = l5(t.v)),
            (e = av(t.h, a, o)),
            (i = !0),
            (s = 'hsv'))
          : K0(t.h) &&
            K0(t.s) &&
            K0(t.l) &&
            ((a = l5(t.s)),
            (n = l5(t.l)),
            (e = tv(t.h, a, n)),
            (i = !0),
            (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(t, 'a') && (r = t.a)),
    (r = Hs(r)),
    {
      ok: i,
      format: t.format || s,
      r: Math.min(255, Math.max(e.r, 0)),
      g: Math.min(255, Math.max(e.g, 0)),
      b: Math.min(255, Math.max(e.b, 0)),
      a: r,
    }
  );
}
var VD = '[-\\+]?\\d+%?',
  DD = '[-\\+]?\\d*\\.\\d+%?',
  Ea = '(?:'.concat(DD, ')|(?:').concat(VD, ')'),
  lh = '[\\s|\\(]+('
    .concat(Ea, ')[,|\\s]+(')
    .concat(Ea, ')[,|\\s]+(')
    .concat(Ea, ')\\s*\\)?'),
  ch = '[\\s|\\(]+('
    .concat(Ea, ')[,|\\s]+(')
    .concat(Ea, ')[,|\\s]+(')
    .concat(Ea, ')[,|\\s]+(')
    .concat(Ea, ')\\s*\\)?'),
  Bt = {
    CSS_UNIT: new RegExp(Ea),
    rgb: new RegExp('rgb' + lh),
    rgba: new RegExp('rgba' + ch),
    hsl: new RegExp('hsl' + lh),
    hsla: new RegExp('hsla' + ch),
    hsv: new RegExp('hsv' + lh),
    hsva: new RegExp('hsva' + ch),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function _D(t) {
  if (((t = t.trim().toLowerCase()), t.length === 0)) return !1;
  var e = !1;
  if (c5[t]) (t = c5[t]), (e = !0);
  else if (t === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var r = Bt.rgb.exec(t);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = Bt.rgba.exec(t)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = Bt.hsl.exec(t)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = Bt.hsla.exec(t)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = Bt.hsv.exec(t)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = Bt.hsva.exec(t)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = Bt.hex8.exec(t)),
                          r
                            ? {
                                r: W1(r[1]),
                                g: W1(r[2]),
                                b: W1(r[3]),
                                a: sh(r[4]),
                                format: e ? 'name' : 'hex8',
                              }
                            : ((r = Bt.hex6.exec(t)),
                              r
                                ? {
                                    r: W1(r[1]),
                                    g: W1(r[2]),
                                    b: W1(r[3]),
                                    format: e ? 'name' : 'hex',
                                  }
                                : ((r = Bt.hex4.exec(t)),
                                  r
                                    ? {
                                        r: W1(r[1] + r[1]),
                                        g: W1(r[2] + r[2]),
                                        b: W1(r[3] + r[3]),
                                        a: sh(r[4] + r[4]),
                                        format: e ? 'name' : 'hex8',
                                      }
                                    : ((r = Bt.hex3.exec(t)),
                                      r
                                        ? {
                                            r: W1(r[1] + r[1]),
                                            g: W1(r[2] + r[2]),
                                            b: W1(r[3] + r[3]),
                                            format: e ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function K0(t) {
  return !!Bt.CSS_UNIT.exec(String(t));
}
var Es = (function () {
  function t(e, r) {
    e === void 0 && (e = ''), r === void 0 && (r = {});
    var a;
    if (e instanceof t) return e;
    typeof e == 'number' && (e = ov(e)), (this.originalInput = e);
    var o = G1(e);
    (this.originalInput = e),
      (this.r = o.r),
      (this.g = o.g),
      (this.b = o.b),
      (this.a = o.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (a = r.format) !== null && a !== void 0 ? a : o.format),
      (this.gradientType = r.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = o.ok);
  }
  return (
    (t.prototype.isDark = function () {
      return this.getBrightness() < 128;
    }),
    (t.prototype.isLight = function () {
      return !this.isDark();
    }),
    (t.prototype.getBrightness = function () {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }),
    (t.prototype.getLuminance = function () {
      var e = this.toRgb(),
        r,
        a,
        o,
        n = e.r / 255,
        i = e.g / 255,
        s = e.b / 255;
      return (
        n <= 0.03928
          ? (r = n / 12.92)
          : (r = Math.pow((n + 0.055) / 1.055, 2.4)),
        i <= 0.03928
          ? (a = i / 12.92)
          : (a = Math.pow((i + 0.055) / 1.055, 2.4)),
        s <= 0.03928
          ? (o = s / 12.92)
          : (o = Math.pow((s + 0.055) / 1.055, 2.4)),
        0.2126 * r + 0.7152 * a + 0.0722 * o
      );
    }),
    (t.prototype.getAlpha = function () {
      return this.a;
    }),
    (t.prototype.setAlpha = function (e) {
      return (
        (this.a = Hs(e)), (this.roundA = Math.round(100 * this.a) / 100), this
      );
    }),
    (t.prototype.isMonochrome = function () {
      var e = this.toHsl().s;
      return e === 0;
    }),
    (t.prototype.toHsv = function () {
      var e = yr(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }),
    (t.prototype.toHsvString = function () {
      var e = yr(this.r, this.g, this.b),
        r = Math.round(e.h * 360),
        a = Math.round(e.s * 100),
        o = Math.round(e.v * 100);
      return this.a === 1
        ? 'hsv('.concat(r, ', ').concat(a, '%, ').concat(o, '%)')
        : 'hsva('
            .concat(r, ', ')
            .concat(a, '%, ')
            .concat(o, '%, ')
            .concat(this.roundA, ')');
    }),
    (t.prototype.toHsl = function () {
      var e = ih(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }),
    (t.prototype.toHslString = function () {
      var e = ih(this.r, this.g, this.b),
        r = Math.round(e.h * 360),
        a = Math.round(e.s * 100),
        o = Math.round(e.l * 100);
      return this.a === 1
        ? 'hsl('.concat(r, ', ').concat(a, '%, ').concat(o, '%)')
        : 'hsla('
            .concat(r, ', ')
            .concat(a, '%, ')
            .concat(o, '%, ')
            .concat(this.roundA, ')');
    }),
    (t.prototype.toHex = function (e) {
      return e === void 0 && (e = !1), br(this.r, this.g, this.b, e);
    }),
    (t.prototype.toHexString = function (e) {
      return e === void 0 && (e = !1), '#' + this.toHex(e);
    }),
    (t.prototype.toHex8 = function (e) {
      return e === void 0 && (e = !1), rv(this.r, this.g, this.b, this.a, e);
    }),
    (t.prototype.toHex8String = function (e) {
      return e === void 0 && (e = !1), '#' + this.toHex8(e);
    }),
    (t.prototype.toHexShortString = function (e) {
      return (
        e === void 0 && (e = !1),
        this.a === 1 ? this.toHexString(e) : this.toHex8String(e)
      );
    }),
    (t.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      };
    }),
    (t.prototype.toRgbString = function () {
      var e = Math.round(this.r),
        r = Math.round(this.g),
        a = Math.round(this.b);
      return this.a === 1
        ? 'rgb('.concat(e, ', ').concat(r, ', ').concat(a, ')')
        : 'rgba('
            .concat(e, ', ')
            .concat(r, ', ')
            .concat(a, ', ')
            .concat(this.roundA, ')');
    }),
    (t.prototype.toPercentageRgb = function () {
      var e = function (r) {
        return ''.concat(Math.round(d1(r, 255) * 100), '%');
      };
      return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
    }),
    (t.prototype.toPercentageRgbString = function () {
      var e = function (r) {
        return Math.round(d1(r, 255) * 100);
      };
      return this.a === 1
        ? 'rgb('
            .concat(e(this.r), '%, ')
            .concat(e(this.g), '%, ')
            .concat(e(this.b), '%)')
        : 'rgba('
            .concat(e(this.r), '%, ')
            .concat(e(this.g), '%, ')
            .concat(e(this.b), '%, ')
            .concat(this.roundA, ')');
    }),
    (t.prototype.toName = function () {
      if (this.a === 0) return 'transparent';
      if (this.a < 1) return !1;
      for (
        var e = '#' + br(this.r, this.g, this.b, !1),
          r = 0,
          a = Object.entries(c5);
        r < a.length;
        r++
      ) {
        var o = a[r],
          n = o[0],
          i = o[1];
        if (e === i) return n;
      }
      return !1;
    }),
    (t.prototype.toString = function (e) {
      var r = !!e;
      e = e ?? this.format;
      var a = !1,
        o = this.a < 1 && this.a >= 0,
        n = !r && o && (e.startsWith('hex') || e === 'name');
      return n
        ? e === 'name' && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (e === 'rgb' && (a = this.toRgbString()),
          e === 'prgb' && (a = this.toPercentageRgbString()),
          (e === 'hex' || e === 'hex6') && (a = this.toHexString()),
          e === 'hex3' && (a = this.toHexString(!0)),
          e === 'hex4' && (a = this.toHex8String(!0)),
          e === 'hex8' && (a = this.toHex8String()),
          e === 'name' && (a = this.toName()),
          e === 'hsl' && (a = this.toHslString()),
          e === 'hsv' && (a = this.toHsvString()),
          a || this.toHexString());
    }),
    (t.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      );
    }),
    (t.prototype.clone = function () {
      return new t(this.toString());
    }),
    (t.prototype.lighten = function (e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return (r.l += e / 100), (r.l = s5(r.l)), new t(r);
    }),
    (t.prototype.brighten = function (e) {
      e === void 0 && (e = 10);
      var r = this.toRgb();
      return (
        (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100))))),
        (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100))))),
        (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100))))),
        new t(r)
      );
    }),
    (t.prototype.darken = function (e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return (r.l -= e / 100), (r.l = s5(r.l)), new t(r);
    }),
    (t.prototype.tint = function (e) {
      return e === void 0 && (e = 10), this.mix('white', e);
    }),
    (t.prototype.shade = function (e) {
      return e === void 0 && (e = 10), this.mix('black', e);
    }),
    (t.prototype.desaturate = function (e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return (r.s -= e / 100), (r.s = s5(r.s)), new t(r);
    }),
    (t.prototype.saturate = function (e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return (r.s += e / 100), (r.s = s5(r.s)), new t(r);
    }),
    (t.prototype.greyscale = function () {
      return this.desaturate(100);
    }),
    (t.prototype.spin = function (e) {
      var r = this.toHsl(),
        a = (r.h + e) % 360;
      return (r.h = a < 0 ? 360 + a : a), new t(r);
    }),
    (t.prototype.mix = function (e, r) {
      r === void 0 && (r = 50);
      var a = this.toRgb(),
        o = new t(e).toRgb(),
        n = r / 100,
        i = {
          r: (o.r - a.r) * n + a.r,
          g: (o.g - a.g) * n + a.g,
          b: (o.b - a.b) * n + a.b,
          a: (o.a - a.a) * n + a.a,
        };
      return new t(i);
    }),
    (t.prototype.analogous = function (e, r) {
      e === void 0 && (e = 6), r === void 0 && (r = 30);
      var a = this.toHsl(),
        o = 360 / r,
        n = [this];
      for (a.h = (a.h - ((o * e) >> 1) + 720) % 360; --e; )
        (a.h = (a.h + o) % 360), n.push(new t(a));
      return n;
    }),
    (t.prototype.complement = function () {
      var e = this.toHsl();
      return (e.h = (e.h + 180) % 360), new t(e);
    }),
    (t.prototype.monochromatic = function (e) {
      e === void 0 && (e = 6);
      for (
        var r = this.toHsv(), a = r.h, o = r.s, n = r.v, i = [], s = 1 / e;
        e--;

      )
        i.push(new t({ h: a, s: o, v: n })), (n = (n + s) % 1);
      return i;
    }),
    (t.prototype.splitcomplement = function () {
      var e = this.toHsl(),
        r = e.h;
      return [
        this,
        new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (r + 216) % 360, s: e.s, l: e.l }),
      ];
    }),
    (t.prototype.onBackground = function (e) {
      var r = this.toRgb(),
        a = new t(e).toRgb(),
        o = r.a + a.a * (1 - r.a);
      return new t({
        r: (r.r * r.a + a.r * a.a * (1 - r.a)) / o,
        g: (r.g * r.a + a.g * a.a * (1 - r.a)) / o,
        b: (r.b * r.a + a.b * a.a * (1 - r.a)) / o,
        a: o,
      });
    }),
    (t.prototype.triad = function () {
      return this.polyad(3);
    }),
    (t.prototype.tetrad = function () {
      return this.polyad(4);
    }),
    (t.prototype.polyad = function (e) {
      for (
        var r = this.toHsl(), a = r.h, o = [this], n = 360 / e, i = 1;
        i < e;
        i++
      )
        o.push(new t({ h: (a + i * n) % 360, s: r.s, l: r.l }));
      return o;
    }),
    (t.prototype.equals = function (e) {
      return this.toRgbString() === new t(e).toRgbString();
    }),
    t
  );
})();
var Ts = 2,
  nv = 0.16,
  HD = 0.05,
  ED = 0.05,
  TD = 0.15,
  hv = 5,
  dv = 4,
  kD = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function iv({ r: t, g: e, b: r }) {
  let a = yr(t, e, r);
  return { h: a.h * 360, s: a.s, v: a.v };
}
function ks({ r: t, g: e, b: r }) {
  return `#${br(t, e, r, !1)}`;
}
function LD(t, e, r) {
  let a = r / 100;
  return {
    r: (e.r - t.r) * a + t.r,
    g: (e.g - t.g) * a + t.g,
    b: (e.b - t.b) * a + t.b,
  };
}
function sv(t, e, r) {
  let a;
  return (
    Math.round(t.h) >= 60 && Math.round(t.h) <= 240
      ? (a = r ? Math.round(t.h) - Ts * e : Math.round(t.h) + Ts * e)
      : (a = r ? Math.round(t.h) + Ts * e : Math.round(t.h) - Ts * e),
    a < 0 ? (a += 360) : a >= 360 && (a -= 360),
    a
  );
}
function lv(t, e, r) {
  if (t.h === 0 && t.s === 0) return t.s;
  let a;
  return (
    r ? (a = t.s - nv * e) : e === dv ? (a = t.s + nv) : (a = t.s + HD * e),
    a > 1 && (a = 1),
    r && e === hv && a > 0.1 && (a = 0.1),
    a < 0.06 && (a = 0.06),
    Number(a.toFixed(2))
  );
}
function cv(t, e, r) {
  let a;
  return (
    r ? (a = t.v + ED * e) : (a = t.v - TD * e),
    a > 1 && (a = 1),
    Number(a.toFixed(2))
  );
}
function _o(t, e = {}) {
  let r = [],
    a = G1(t);
  for (let o = hv; o > 0; o -= 1) {
    let n = iv(a),
      i = ks(G1({ h: sv(n, o, !0), s: lv(n, o, !0), v: cv(n, o, !0) }));
    r.push(i);
  }
  r.push(ks(a));
  for (let o = 1; o <= dv; o += 1) {
    let n = iv(a),
      i = ks(G1({ h: sv(n, o), s: lv(n, o), v: cv(n, o) }));
    r.push(i);
  }
  return e.theme === 'dark'
    ? kD.map(({ index: o, opacity: n }) =>
        ks(LD(G1(e.backgroundColor || '#141414'), G1(r[o]), n * 100)),
      )
    : r;
}
var hh = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  H1 = {},
  dh = {};
Object.keys(hh).forEach(t => {
  (H1[t] = _o(hh[t])),
    (H1[t].primary = H1[t][5]),
    (dh[t] = _o(hh[t], { theme: 'dark', backgroundColor: '#141414' })),
    (dh[t].primary = dh[t][5]);
});
var eK = H1.red,
  tK = H1.volcano,
  aK = H1.gold,
  rK = H1.orange,
  oK = H1.yellow,
  nK = H1.lime,
  iK = H1.green,
  sK = H1.cyan,
  lK = H1.blue,
  cK = H1.geekblue,
  hK = H1.purple,
  dK = H1.magenta,
  uK = H1.grey;
var f0 = '[@ant-design/icons-angular]:';
function uv(t) {
  console.error(`${f0} ${t}.`);
}
function Ls(t) {
  po() && console.warn(`${f0} ${t}.`);
}
function uh(t) {
  return _o(t)[0];
}
function Fr(t, e) {
  switch (e) {
    case 'fill':
      return `${t}-fill`;
    case 'outline':
      return `${t}-o`;
    case 'twotone':
      return `${t}-twotone`;
    case 'feather':
      return `${t}-f`;
    case void 0:
      return t;
    default:
      throw new Error(`${f0}Theme "${e}" is not a recognized theme!`);
  }
}
function pv(t, e, r, a) {
  return `${Fr(t, e)}-${r}-${a}`;
}
function ID(t) {
  return t === 'o' ? 'outline' : 'feather';
}
function fv(t) {
  return (
    t.endsWith('-fill') ||
    t.endsWith('-o') ||
    t.endsWith('-twotone') ||
    t.endsWith('-f')
  );
}
function Is(t) {
  return (
    typeof t == 'object' &&
    typeof t.name == 'string' &&
    (typeof t.theme == 'string' || t.theme === void 0) &&
    typeof t.icon == 'string'
  );
}
function mv(t) {
  let e = t.split('-'),
    r = ID(e.splice(e.length - 1, 1)[0]);
  return { name: e.join('-'), theme: r, icon: '' };
}
function vv(t) {
  return t.cloneNode(!0);
}
function gv(t) {
  return t
    .replace(/['"]#333['"]/g, '"primaryColor"')
    .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
    .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
    .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
function Ho(t) {
  let e = t.split(':');
  switch (e.length) {
    case 1:
      return [t, ''];
    case 2:
      return [e[1], e[0]];
    default:
      throw new Error(`${f0}The icon type ${t} is not valid!`);
  }
}
function wv(t) {
  return Ho(t)[1] !== '';
}
function xv() {
  return new Error(
    `${f0}Type should have a namespace. Try "namespace:${name}".`,
  );
}
function ph(t) {
  return new Error(`${f0}the icon ${t} does not exist or is not registered.`);
}
function Mv() {
  return (
    uv('you need to import "HttpClientModule" to use dynamic importing.'), null
  );
}
function yv(t) {
  return new Error(`${f0}The url "${t}" is unsafe.`);
}
function bv() {
  return new Error(`${f0}<svg> tag not found.`);
}
function Fv() {
  return new Error(`${f0}Importing timeout error.`);
}
var PD = '__ant_icon_load',
  BD = new F('ant_icons'),
  h5 = (() => {
    class t {
      _http;
      _rendererFactory;
      _handler;
      _document;
      sanitizer;
      _antIcons;
      defaultTheme = 'outline';
      set twoToneColor({ primaryColor: r, secondaryColor: a }) {
        (this._twoToneColorPalette.primaryColor = r),
          (this._twoToneColorPalette.secondaryColor = a || uh(r));
      }
      get twoToneColor() {
        return M({}, this._twoToneColorPalette);
      }
      _renderer;
      get _disableDynamicLoading() {
        return !1;
      }
      _svgDefinitions = new Map();
      _svgRenderedDefinitions = new Map();
      _inProgressFetches = new Map();
      _assetsUrlRoot = '';
      _twoToneColorPalette = {
        primaryColor: '#333333',
        secondaryColor: '#E6E6E6',
      };
      _enableJsonpLoading = !1;
      _jsonpIconLoad$ = new C();
      constructor(r, a, o, n, i, s) {
        (this._http = r),
          (this._rendererFactory = a),
          (this._handler = o),
          (this._document = n),
          (this.sanitizer = i),
          (this._antIcons = s),
          (this._renderer = this._rendererFactory.createRenderer(null, null)),
          this._handler && (this._http = new B1(this._handler)),
          this._antIcons && this.addIcon(...this._antIcons);
      }
      useJsonpLoading() {
        this._enableJsonpLoading
          ? Ls('You are already using jsonp loading.')
          : ((this._enableJsonpLoading = !0),
            (window[PD] = r => {
              this._jsonpIconLoad$.next(r);
            }));
      }
      changeAssetsSource(r) {
        this._assetsUrlRoot = r.endsWith('/') ? r : `${r}/`;
      }
      addIcon(...r) {
        r.forEach(a => {
          this._svgDefinitions.set(Fr(a.name, a.theme), a);
        });
      }
      addIconLiteral(r, a) {
        let [o, n] = Ho(r);
        if (!n) throw xv();
        this.addIcon({ name: r, icon: a });
      }
      clear() {
        this._svgDefinitions.clear(), this._svgRenderedDefinitions.clear();
      }
      getRenderedContent(r, a) {
        let o = Is(r) ? r : this._svgDefinitions.get(r) || null;
        if (!o && this._disableDynamicLoading) throw ph(r);
        return (o ? D(o) : this._loadIconDynamically(r)).pipe(
          I(i => {
            if (!i) throw ph(r);
            return this._loadSVGFromCacheOrCreateNew(i, a);
          }),
        );
      }
      getCachedIcons() {
        return this._svgDefinitions;
      }
      _loadIconDynamically(r) {
        if (!this._http && !this._enableJsonpLoading) return D(Mv());
        let a = this._inProgressFetches.get(r);
        if (!a) {
          let [o, n] = Ho(r),
            i = n ? { name: r, icon: '' } : mv(o),
            l =
              (n
                ? `${this._assetsUrlRoot}assets/${n}/${o}`
                : `${this._assetsUrlRoot}assets/${i.theme}/${i.name}`) + '.js',
            c = this.sanitizer.sanitize(at.URL, l);
          if (!c) throw yv(l);
          (a = (
            this._enableJsonpLoading
              ? this._loadIconDynamicallyWithJsonp(i, c)
              : this._http
                  .get(c, { responseType: 'text' })
                  .pipe(I(d => Q(M({}, i), { icon: d })))
          ).pipe(
            ve(d => this.addIcon(d)),
            X1(() => this._inProgressFetches.delete(r)),
            E1(() => D(null)),
            Xo(),
          )),
            this._inProgressFetches.set(r, a);
        }
        return a;
      }
      _loadIconDynamicallyWithJsonp(r, a) {
        return new P(o => {
          let n = this._document.createElement('script'),
            i = setTimeout(() => {
              s(), o.error(Fv());
            }, 6e3);
          n.src = a;
          function s() {
            n.parentNode.removeChild(n), clearTimeout(i);
          }
          this._document.body.appendChild(n),
            this._jsonpIconLoad$
              .pipe(
                me(l => l.name === r.name && l.theme === r.theme),
                a1(1),
              )
              .subscribe(l => {
                o.next(l), s();
              });
        });
      }
      _loadSVGFromCacheOrCreateNew(r, a) {
        let o,
          n = a || this._twoToneColorPalette.primaryColor,
          i = uh(n) || this._twoToneColorPalette.secondaryColor,
          s =
            r.theme === 'twotone'
              ? pv(r.name, r.theme, n, i)
              : r.theme === void 0
                ? r.name
                : Fr(r.name, r.theme),
          l = this._svgRenderedDefinitions.get(s);
        return (
          l
            ? (o = l.icon)
            : ((o = this._setSVGAttribute(
                this._colorizeSVGIcon(
                  this._createSVGElementFromString(
                    wv(r.name) ? r.icon : gv(r.icon),
                  ),
                  r.theme === 'twotone',
                  n,
                  i,
                ),
              )),
              this._svgRenderedDefinitions.set(s, Q(M({}, r), { icon: o }))),
          vv(o)
        );
      }
      _createSVGElementFromString(r) {
        let a = this._document.createElement('div');
        a.innerHTML = r;
        let o = a.querySelector('svg');
        if (!o) throw bv;
        return o;
      }
      _setSVGAttribute(r) {
        return (
          this._renderer.setAttribute(r, 'width', '1em'),
          this._renderer.setAttribute(r, 'height', '1em'),
          r
        );
      }
      _colorizeSVGIcon(r, a, o, n) {
        if (a) {
          let i = r.childNodes,
            s = i.length;
          for (let l = 0; l < s; l++) {
            let c = i[l];
            c.getAttribute('fill') === 'secondaryColor'
              ? this._renderer.setAttribute(c, 'fill', n)
              : this._renderer.setAttribute(c, 'fill', o);
          }
        }
        return this._renderer.setAttribute(r, 'fill', 'currentColor'), r;
      }
      static ɵfac = function (a) {
        return new (a || t)(g(B1), g(Y1), g(Ca, 8), g(Y, 8), g(En), g(BD, 8));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function ND(t, e) {
  return (
    t.type === e.type &&
    t.theme === e.theme &&
    t.twoToneColor === e.twoToneColor
  );
}
var Cv = (() => {
  class t {
    _iconService;
    _elementRef;
    _renderer;
    type;
    theme;
    twoToneColor;
    constructor(r, a, o) {
      (this._iconService = r), (this._elementRef = a), (this._renderer = o);
    }
    ngOnChanges(r) {
      (r.type || r.theme || r.twoToneColor) && this._changeIcon();
    }
    _changeIcon() {
      return new Promise(r => {
        if (!this.type) {
          this._clearSVGElement(), r(null);
          return;
        }
        let a = this._getSelfRenderMeta();
        this._iconService
          .getRenderedContent(
            this._parseIconType(this.type, this.theme),
            this.twoToneColor,
          )
          .subscribe(o => {
            let n = this._getSelfRenderMeta();
            ND(a, n) ? (this._setSVGElement(o), r(o)) : r(null);
          });
      });
    }
    _getSelfRenderMeta() {
      return {
        type: this.type,
        theme: this.theme,
        twoToneColor: this.twoToneColor,
      };
    }
    _parseIconType(r, a) {
      if (Is(r)) return r;
      {
        let [o, n] = Ho(r);
        if (n) return r;
        if (fv(o)) {
          if (a) {
            if (a === 'feather' && o.endsWith('-fill')) return Fr(o, a);
            Ls(
              `'type' ${o} already gets a theme inside so 'theme' ${a} would be ignored`,
            );
          }
          return o;
        } else return Fr(o, a || this._iconService.defaultTheme);
      }
    }
    _setSVGElement(r) {
      this._clearSVGElement(),
        this._renderer.appendChild(this._elementRef.nativeElement, r);
    }
    _clearSVGElement() {
      let r = this._elementRef.nativeElement,
        a = r.childNodes,
        o = a.length;
      for (let n = o - 1; n >= 0; n--) {
        let i = a[n];
        i.tagName?.toLowerCase() === 'svg' && this._renderer.removeChild(r, i);
      }
    }
    static ɵfac = function (a) {
      return new (a || t)(v(h5), v(E), v(Ce));
    };
    static ɵdir = _({
      type: t,
      selectors: [['', 'antIcon', '']],
      inputs: { type: 'type', theme: 'theme', twoToneColor: 'twoToneColor' },
      features: [ee],
    });
  }
  return t;
})();
var RD = {
  name: 'arrow-left',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8" /></svg>',
};
var qD = {
  name: 'arrow-right',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4" /></svg>',
};
var jD = {
  name: 'arrow-up',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2" /></svg>',
};
var fh = {
  name: 'bars',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0" /></svg>',
};
var mh = {
  name: 'calendar',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32m-40 656H184V460h656zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z" /></svg>',
};
var vh = {
  name: 'caret-down',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35" /></svg>',
};
var gh = {
  name: 'caret-down',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35" /></svg>',
};
var wh = {
  name: 'caret-up',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689 530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35" /></svg>',
};
var xh = {
  name: 'caret-up',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689 530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35" /></svg>',
};
var Mh = {
  name: 'check-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372" /></svg>',
};
var yh = {
  name: 'check',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8" /></svg>',
};
var bh = {
  name: 'check-circle',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m193.5 301.7-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7" /></svg>',
};
var Fh = {
  name: 'clock-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372" /><path d="M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2" /></svg>',
};
var Ch = {
  name: 'close-circle',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64m127.98 274.82h-.04l-.08.06L512 466.76 384.14 338.89q-.05-.07-.08-.06h-.07q-.04 0-.09.05l-45.02 45.02-.05.09v.09l.06.06L466.75 512 338.89 639.86q-.07.05-.06.08v.07q0 .04.05.09l45.02 45.02.09.05h.07q.03 0 .08-.05L512 557.25l127.86 127.87q.05.06.08.05h.07q.04 0 .09-.05l45.02-45.02.05-.09v-.09l-.05-.06L557.25 512l127.87-127.86q.06-.05.05-.08v-.07q0-.04-.05-.09l-45.02-45.02-.09-.05h-.07Z" /></svg>',
};
var zh = {
  name: 'close',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M799.86 166.31q.02 0 .08.06l57.69 57.7q.05.04.06.08v.06q0 .04-.06.09L569.93 512l287.7 287.7q.05.05.06.09v.07q0 .02-.06.08l-57.7 57.69q-.04.05-.07.06h-.07q-.04 0-.09-.06L512 569.93l-287.7 287.7q-.05.05-.09.06h-.07q-.03 0-.08-.06l-57.69-57.7q-.05-.04-.06-.07v-.07q0-.04.06-.09L454.07 512l-287.7-287.7q-.05-.05-.06-.09v-.07q0-.03.06-.08l57.7-57.69q.04-.05.07-.06h.07q.04 0 .09.06L512 454.07l287.7-287.7q.05-.05.09-.06z" /></svg>',
};
var Ah = {
  name: 'close-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64m0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372m128.01 198.83q.04 0 .09.06l45.02 45.01.05.09v.07q0 .03-.05.08L557.25 512l127.87 127.86.05.06v.09q0 .04-.05.09l-45.02 45.02-.09.05h-.07q-.02 0-.08-.05L512 557.25 384.14 685.12q-.05.06-.08.05h-.07q-.04 0-.09-.05l-45.02-45.02-.05-.09v-.07q0-.02.06-.08L466.75 512 338.89 384.14l-.05-.06-.01-.02v-.07q0-.04.05-.09l45.02-45.02.09-.05h.07q.03 0 .08.06L512 466.75l127.86-127.86q.05-.07.08-.06z" /></svg>',
};
var Sh = {
  name: 'copy',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32M350 856.2 263.9 770H350zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432z" /></svg>',
};
var Vh = {
  name: 'delete',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M360 184h-8c4.4 0 8-3.6 8-8zh304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32M731.3 840H292.7l-24.2-512h487z" /></svg>',
};
var Dh = {
  name: 'double-left',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="m272.9 512 265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a32 32 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9zm304 0 265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a32 32 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9z" /></svg>',
};
var _h = {
  name: 'double-right',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M533.2 492.3 277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5m304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5" /></svg>',
};
var Hh = {
  name: 'down',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7" /></svg>',
};
var Eh = {
  name: 'edit',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32" /></svg>',
};
var Th = {
  name: 'ellipsis',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M176 511a56 56 0 1 0 112 0 56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0" /></svg>',
};
var kh = {
  name: 'exclamation-circle',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96" /></svg>',
};
var Lh = {
  name: 'exclamation-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372" /><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0m24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8" /></svg>',
};
var Ih = {
  name: 'eye',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5M512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766m-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112" /></svg>',
};
var Ph = {
  name: 'file',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4zM790.2 326 602 137.8V326z" /></svg>',
};
var Bh = {
  name: 'file',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.6 639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7M790.2 326H602V137.8zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216z" /></svg>',
};
var Oh = {
  name: 'filter',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48" /></svg>',
};
var Nh = {
  name: 'info-circle',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96" /></svg>',
};
var Rh = {
  name: 'info-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372" /><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0m72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8" /></svg>',
};
var qh = {
  name: 'left',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6" /></svg>',
};
var jh = {
  name: 'loading',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 438 438 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" /></svg>',
};
var YD = {
  name: 'menu',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8" /></svg>',
};
var Yh = {
  name: 'paper-clip',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.2 172.2 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7s88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9" /></svg>',
};
var Uh = {
  name: 'question-circle',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372" /><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3M472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0" /></svg>',
};
var $h = {
  name: 'right',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M765.7 486.8 314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4" /></svg>',
};
var Wh = {
  name: 'rotate-right',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="64 64 896 896" focusable="false"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.8 399.8 0 0 0 123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8" /><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H396V494h440z" /></svg>',
};
var Gh = {
  name: 'rotate-left',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="64 64 896 896" focusable="false"><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H188V494h440z" /><path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a326 326 0 0 1 6.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3" /></svg>',
};
var Kh = {
  name: 'search',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4" /></svg>',
};
var Ps = {
  name: 'star',
  theme: 'fill',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3" /></svg>',
};
var Zh = {
  name: 'swap-right',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" focusable="false"><path d="m873.1 596.2-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8" /></svg>',
};
var Qh = {
  name: 'swap',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8M872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8" /></svg>',
};
var Xh = {
  name: 'up',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M890.5 755.3 537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7" /></svg>',
};
var Jh = {
  name: 'upload',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8" /></svg>',
};
var e8 = {
  name: 'vertical-align-top',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8M518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9z" /></svg>',
};
var t8 = {
  name: 'zoom-in',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430" /></svg>',
};
var a8 = {
  name: 'zoom-out',
  theme: 'outline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" focusable="false"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430" /></svg>',
};
var zv = [
  fh,
  mh,
  xh,
  wh,
  vh,
  gh,
  bh,
  Mh,
  yh,
  Fh,
  Ah,
  Ch,
  zh,
  Sh,
  Vh,
  Dh,
  _h,
  Hh,
  Eh,
  Th,
  kh,
  Lh,
  Ih,
  Ph,
  Bh,
  Oh,
  Nh,
  Rh,
  qh,
  jh,
  Yh,
  Uh,
  $h,
  Wh,
  Gh,
  Ps,
  Kh,
  Ps,
  Jh,
  e8,
  Xh,
  Qh,
  Zh,
  t8,
  a8,
];
var Av = new F('nz-config');
var UD = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
function Sv(t) {
  return UD.indexOf(t) !== -1;
}
var Bs = 2,
  Vv = 0.16,
  $D = 0.05,
  WD = 0.05,
  GD = 0.15,
  Tv = 5,
  kv = 4,
  KD = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function Dv({ r: t, g: e, b: r }) {
  let a = yr(t, e, r);
  return { h: a.h * 360, s: a.s, v: a.v };
}
function Os({ r: t, g: e, b: r }) {
  return `#${br(t, e, r, !1)}`;
}
function ZD(t, e, r) {
  let a = r / 100;
  return {
    r: (e.r - t.r) * a + t.r,
    g: (e.g - t.g) * a + t.g,
    b: (e.b - t.b) * a + t.b,
  };
}
function _v(t, e, r) {
  let a;
  return (
    Math.round(t.h) >= 60 && Math.round(t.h) <= 240
      ? (a = r ? Math.round(t.h) - Bs * e : Math.round(t.h) + Bs * e)
      : (a = r ? Math.round(t.h) + Bs * e : Math.round(t.h) - Bs * e),
    a < 0 ? (a += 360) : a >= 360 && (a -= 360),
    a
  );
}
function Hv(t, e, r) {
  if (t.h === 0 && t.s === 0) return t.s;
  let a;
  return (
    r ? (a = t.s - Vv * e) : e === kv ? (a = t.s + Vv) : (a = t.s + $D * e),
    a > 1 && (a = 1),
    r && e === Tv && a > 0.1 && (a = 0.1),
    a < 0.06 && (a = 0.06),
    Number(a.toFixed(2))
  );
}
function Ev(t, e, r) {
  let a;
  return (
    r ? (a = t.v + WD * e) : (a = t.v - GD * e),
    a > 1 && (a = 1),
    Number(a.toFixed(2))
  );
}
function r8(t, e = {}) {
  let r = [],
    a = G1(t);
  for (let o = Tv; o > 0; o -= 1) {
    let n = Dv(a),
      i = Os(G1({ h: _v(n, o, !0), s: Hv(n, o, !0), v: Ev(n, o, !0) }));
    r.push(i);
  }
  r.push(Os(a));
  for (let o = 1; o <= kv; o += 1) {
    let n = Dv(a),
      i = Os(G1({ h: _v(n, o), s: Hv(n, o), v: Ev(n, o) }));
    r.push(i);
  }
  return e.theme === 'dark'
    ? KD.map(({ index: o, opacity: n }) =>
        Os(ZD(G1(e.backgroundColor || '#141414'), G1(r[o]), n * 100)),
      )
    : r;
}
var QD = `-ant-${Date.now()}-${Math.random()}`;
function XD(t, e) {
  let r = {},
    a = (i, s) => {
      let l = i.clone();
      return (l = s?.(l) || l), l.toRgbString();
    },
    o = (i, s) => {
      let l = new Es(i),
        c = r8(l.toRgbString());
      (r[`${s}-color`] = a(l)),
        (r[`${s}-color-disabled`] = c[1]),
        (r[`${s}-color-hover`] = c[4]),
        (r[`${s}-color-active`] = c[7]),
        (r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (r[`${s}-color-deprecated-bg`] = c[1]),
        (r[`${s}-color-deprecated-border`] = c[3]);
    };
  if (e.primaryColor) {
    o(e.primaryColor, 'primary');
    let i = new Es(e.primaryColor),
      s = r8(i.toRgbString());
    s.forEach((c, h) => {
      r[`primary-${h + 1}`] = c;
    }),
      (r['primary-color-deprecated-l-35'] = a(i, c => c.lighten(35))),
      (r['primary-color-deprecated-l-20'] = a(i, c => c.lighten(20))),
      (r['primary-color-deprecated-t-20'] = a(i, c => c.tint(20))),
      (r['primary-color-deprecated-t-50'] = a(i, c => c.tint(50))),
      (r['primary-color-deprecated-f-12'] = a(i, c =>
        c.setAlpha(c.getAlpha() * 0.12),
      ));
    let l = new Es(s[0]);
    (r['primary-color-active-deprecated-f-30'] = a(l, c =>
      c.setAlpha(c.getAlpha() * 0.3),
    )),
      (r['primary-color-active-deprecated-d-02'] = a(l, c => c.darken(2)));
  }
  return (
    e.successColor && o(e.successColor, 'success'),
    e.warningColor && o(e.warningColor, 'warning'),
    e.errorColor && o(e.errorColor, 'error'),
    e.infoColor && o(e.infoColor, 'info'),
    `
  :root {
    ${Object.keys(r).map(i => `--${t}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim()
  );
}
function o8(t, e, r) {
  let a = XD(t, e);
  Vs()
    ? q9(a, `${QD}-dynamic-theme`, { cspNonce: r })
    : p0(
        'NzConfigService: SSR do not support dynamic theme with css variables.',
      );
}
var Lv = function (t) {
    return t !== void 0;
  },
  Iv = 'ant',
  Ta = (() => {
    let e = class e {
      constructor() {
        (this.configUpdated$ = new C()),
          (this.config = m(Av, { optional: !0 }) || {}),
          (this.cspNonce = m(k0, { optional: !0 })),
          this.config.theme &&
            o8(
              this.getConfig().prefixCls?.prefixCls || Iv,
              this.config.theme,
              this.cspNonce,
            );
      }
      getConfig() {
        return this.config;
      }
      getConfigForComponent(a) {
        return this.config[a];
      }
      getConfigChangeEventForComponent(a) {
        return this.configUpdated$.pipe(
          me(o => o === a),
          Ga(void 0),
        );
      }
      set(a, o) {
        (this.config[a] = M(M({}, this.config[a]), o)),
          a === 'theme' &&
            this.config.theme &&
            o8(
              this.getConfig().prefixCls?.prefixCls || Iv,
              this.config.theme,
              this.cspNonce,
            ),
          this.configUpdated$.next(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function ka() {
  return function (e, r, a) {
    let o = `$$__zorroConfigDecorator__${r}`;
    return (
      Object.defineProperty(e, o, {
        configurable: !0,
        writable: !0,
        enumerable: !1,
      }),
      {
        get() {
          let n = a?.get ? a.get.bind(this)() : this[o],
            i = (this.propertyAssignCounter?.[r] || 0) > 1,
            s = this.nzConfigService.getConfigForComponent(
              this._nzModuleName,
            )?.[r];
          return i && Lv(n) ? n : Lv(s) ? s : n;
        },
        set(n) {
          (this.propertyAssignCounter = this.propertyAssignCounter || {}),
            (this.propertyAssignCounter[r] =
              (this.propertyAssignCounter[r] || 0) + 1),
            a?.set ? a.set.bind(this)(n) : (this[o] = n);
        },
        configurable: !0,
        enumerable: !0,
      }
    );
  };
}
var i8 = new F('nz_icons'),
  Ugt = new F('nz_icon_default_twotone_color'),
  Pv = '#1890ff',
  s8 = (() => {
    let e = class e extends h5 {
      get _disableDynamicLoading() {
        return !this.platform.isBrowser;
      }
      ngOnDestroy() {
        this.subscription &&
          (this.subscription.unsubscribe(), (this.subscription = null));
      }
      normalizeSvgElement(a) {
        a.getAttribute('viewBox') ||
          this._renderer.setAttribute(a, 'viewBox', '0 0 1024 1024'),
          (!a.getAttribute('width') || !a.getAttribute('height')) &&
            (this._renderer.setAttribute(a, 'width', '1em'),
            this._renderer.setAttribute(a, 'height', '1em')),
          a.getAttribute('fill') ||
            this._renderer.setAttribute(a, 'fill', 'currentColor');
      }
      normalizeSvgSize(a, o, n) {
        this._renderer.setAttribute(a, 'width', o),
          this._renderer.setAttribute(a, 'height', n);
      }
      fetchFromIconfont(a) {
        let { scriptUrl: o } = a;
        if (this._document && !this.iconfontCache.has(o)) {
          let n = this._renderer.createElement('script');
          this._renderer.setAttribute(n, 'src', o),
            this._renderer.setAttribute(
              n,
              'data-namespace',
              o.replace(/^(https?|http):/g, ''),
            ),
            this._renderer.appendChild(this._document.body, n),
            this.iconfontCache.add(o);
        }
      }
      createIconfontIcon(a) {
        return this._createSVGElementFromString(
          `<svg><use xlink:href="${a}"></svg>`,
        );
      }
      constructor(a, o, n, i, s) {
        super(a, o, m(Ca, { optional: !0 }), m(Y), n, [
          ...zv,
          ...(m(i8, { optional: !0 }) || []),
        ]),
          (this.nzConfigService = i),
          (this.platform = s),
          (this.configUpdated$ = new C()),
          (this.iconfontCache = new Set()),
          (this.subscription = null),
          this.onConfigChange(),
          this.configDefaultTwotoneColor(),
          this.configDefaultTheme();
      }
      onConfigChange() {
        this.subscription = this.nzConfigService
          .getConfigChangeEventForComponent('icon')
          .subscribe(() => {
            this.configDefaultTwotoneColor(),
              this.configDefaultTheme(),
              this.configUpdated$.next();
          });
      }
      configDefaultTheme() {
        let a = this.getConfig();
        this.defaultTheme = a.nzTheme || 'outline';
      }
      configDefaultTwotoneColor() {
        let o = this.getConfig().nzTwotoneColor || Pv,
          n = Pv;
        o &&
          (o.startsWith('#')
            ? (n = o)
            : p0('Twotone color must be a hex color!')),
          (this.twoToneColor = { primaryColor: n });
      }
      getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(B1), g(Y1), g(En), g(Ta), g(Se));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  l8 = new F('nz_icons_patch'),
  Ns = (() => {
    let e = class e {
      constructor(a) {
        (this.rootIconService = a),
          (this.patched = !1),
          (this.extraIcons = m(l8, { self: !0 }));
      }
      doPatch() {
        this.patched ||
          (this.extraIcons.forEach(a => this.rootIconService.addIcon(a)),
          (this.patched = !0));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(s8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })();
var Ct = (() => {
  let e = class e extends Cv {
    set nzSpin(a) {
      this.spin = a;
    }
    set nzType(a) {
      this.type = a;
    }
    set nzTheme(a) {
      this.theme = a;
    }
    set nzTwotoneColor(a) {
      this.twoToneColor = a;
    }
    set nzIconfont(a) {
      this.iconfont = a;
    }
    constructor(a, o, n, i, s) {
      super(i, n, s),
        (this.ngZone = a),
        (this.changeDetectorRef = o),
        (this.iconService = i),
        (this.renderer = s),
        (this.cacheClassName = null),
        (this.nzRotate = 0),
        (this.spin = !1),
        (this.destroy$ = new C());
      let l = m(Ns, { optional: !0 });
      l && l.doPatch(), (this.el = n.nativeElement);
    }
    ngOnChanges(a) {
      let {
        nzType: o,
        nzTwotoneColor: n,
        nzSpin: i,
        nzTheme: s,
        nzRotate: l,
      } = a;
      o || n || i || s
        ? this.changeIcon2()
        : l
          ? this.handleRotate(this.el.firstChild)
          : this._setSVGElement(
              this.iconService.createIconfontIcon(`#${this.iconfont}`),
            );
    }
    ngOnInit() {
      this.renderer.setAttribute(
        this.el,
        'class',
        `anticon ${this.el.className}`.trim(),
      );
    }
    ngAfterContentChecked() {
      if (this.type) {
        if (this.nzWidth !== void 0 && this.nzHeight !== void 0) {
          let a = this.el.firstChild;
          if (a && a.tagName.toLowerCase() === 'svg')
            this.iconService.normalizeSvgSize(
              a,
              e5(this.nzWidth),
              e5(this.nzHeight),
            );
          else {
            let o = this.el.children,
              n = o.length;
            if (!this.type && o.length)
              for (; n--; ) {
                let i = o[n];
                i.tagName.toLowerCase() === 'svg' &&
                  this.iconService.normalizeSvgSize(
                    i,
                    e5(this.nzWidth),
                    e5(this.nzHeight),
                  );
              }
          }
        }
      } else {
        let a = this.el.firstChild;
        if (a && a.tagName.toLowerCase() === 'svg')
          this.iconService.normalizeSvgElement(a);
        else {
          let o = this.el.children,
            n = o.length;
          if (!this.type && o.length)
            for (; n--; ) {
              let i = o[n];
              i.tagName.toLowerCase() === 'svg' &&
                this.iconService.normalizeSvgElement(i);
            }
        }
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
    }
    changeIcon2() {
      this.setClassName(),
        this.ngZone.runOutsideAngular(() => {
          Me(this._changeIcon())
            .pipe(S(this.destroy$))
            .subscribe({
              next: a => {
                this.ngZone.run(() => {
                  this.changeDetectorRef.detectChanges(),
                    a &&
                      (this.setSVGData(a),
                      this.handleSpin(a),
                      this.handleRotate(a));
                });
              },
              error: p0,
            });
        });
    }
    handleSpin(a) {
      this.spin || this.type === 'loading'
        ? this.renderer.addClass(a, 'anticon-spin')
        : this.renderer.removeClass(a, 'anticon-spin');
    }
    handleRotate(a) {
      this.nzRotate
        ? this.renderer.setAttribute(
            a,
            'style',
            `transform: rotate(${this.nzRotate}deg)`,
          )
        : this.renderer.removeAttribute(a, 'style');
    }
    setClassName() {
      this.cacheClassName &&
        this.renderer.removeClass(this.el, this.cacheClassName),
        (this.cacheClassName = `anticon-${this.type}`),
        this.renderer.addClass(this.el, this.cacheClassName);
    }
    setSVGData(a) {
      this.renderer.setAttribute(a, 'data-icon', this.type),
        this.renderer.setAttribute(a, 'aria-hidden', 'true');
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(T), v(_e), v(E), v(s8), v(Ce));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'nz-icon', '']],
      hostVars: 2,
      hostBindings: function (o, n) {
        o & 2 && we('anticon', !0);
      },
      inputs: {
        nzSpin: [2, 'nzSpin', 'nzSpin', G],
        nzRotate: [2, 'nzRotate', 'nzRotate', fr],
        nzType: 'nzType',
        nzTheme: 'nzTheme',
        nzTwotoneColor: 'nzTwotoneColor',
        nzIconfont: 'nzIconfont',
        nzWidth: 'nzWidth',
        nzHeight: 'nzHeight',
      },
      exportAs: ['nzIcon'],
      standalone: !0,
      features: [ke, r1, ee],
    }));
  let t = e;
  return t;
})();
var Bv = t => Et([{ provide: i8, useValue: t }]),
  Ov = t => [Ns, { provide: l8, useValue: t }];
var m0 = (() => {
  let e = class e {
    static forRoot(a) {
      return { ngModule: e, providers: [Bv(a)] };
    }
    static forChild(a) {
      return { ngModule: e, providers: [Ov(a)] };
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var c8 = class {};
function Nv(t) {
  return t && typeof t.connect == 'function' && !(t instanceof jt);
}
var Rs = class extends c8 {
    constructor(e) {
      super(), (this._data = e);
    }
    connect() {
      return Q1(this._data) ? this._data : D(this._data);
    }
    disconnect() {}
  },
  u5 = (function (t) {
    return (
      (t[(t.REPLACED = 0)] = 'REPLACED'),
      (t[(t.INSERTED = 1)] = 'INSERTED'),
      (t[(t.MOVED = 2)] = 'MOVED'),
      (t[(t.REMOVED = 3)] = 'REMOVED'),
      t
    );
  })(u5 || {}),
  h8 = new F('_ViewRepeater');
var qs = class {
  constructor() {
    (this.viewCacheSize = 20), (this._viewCache = []);
  }
  applyChanges(e, r, a, o, n) {
    e.forEachOperation((i, s, l) => {
      let c, h;
      if (i.previousIndex == null) {
        let d = () => a(i, s, l);
        (c = this._insertView(d, l, r, o(i))),
          (h = c ? u5.INSERTED : u5.REPLACED);
      } else
        l == null
          ? (this._detachAndCacheView(s, r), (h = u5.REMOVED))
          : ((c = this._moveView(s, l, r, o(i))), (h = u5.MOVED));
      n && n({ context: c?.context, operation: h, record: i });
    });
  }
  detach() {
    for (let e of this._viewCache) e.destroy();
    this._viewCache = [];
  }
  _insertView(e, r, a, o) {
    let n = this._insertViewFromCache(r, a);
    if (n) {
      n.context.$implicit = o;
      return;
    }
    let i = e();
    return a.createEmbeddedView(i.templateRef, i.context, i.index);
  }
  _detachAndCacheView(e, r) {
    let a = r.detach(e);
    this._maybeCacheView(a, r);
  }
  _moveView(e, r, a, o) {
    let n = a.get(e);
    return a.move(n, r), (n.context.$implicit = o), n;
  }
  _maybeCacheView(e, r) {
    if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(e);
    else {
      let a = r.indexOf(e);
      a === -1 ? e.destroy() : r.remove(a);
    }
  }
  _insertViewFromCache(e, r) {
    let a = this._viewCache.pop();
    return a && r.insert(a, e), a || null;
  }
};
var e_ = ['contentWrapper'],
  t_ = ['*'],
  Yv = new F('VIRTUAL_SCROLL_STRATEGY'),
  d8 = class {
    constructor(e, r, a) {
      (this._scrolledIndexChange = new C()),
        (this.scrolledIndexChange = this._scrolledIndexChange.pipe(z1())),
        (this._viewport = null),
        (this._itemSize = e),
        (this._minBufferPx = r),
        (this._maxBufferPx = a);
    }
    attach(e) {
      (this._viewport = e),
        this._updateTotalContentSize(),
        this._updateRenderedRange();
    }
    detach() {
      this._scrolledIndexChange.complete(), (this._viewport = null);
    }
    updateItemAndBufferSize(e, r, a) {
      a < r,
        (this._itemSize = e),
        (this._minBufferPx = r),
        (this._maxBufferPx = a),
        this._updateTotalContentSize(),
        this._updateRenderedRange();
    }
    onContentScrolled() {
      this._updateRenderedRange();
    }
    onDataLengthChanged() {
      this._updateTotalContentSize(), this._updateRenderedRange();
    }
    onContentRendered() {}
    onRenderedOffsetChanged() {}
    scrollToIndex(e, r) {
      this._viewport && this._viewport.scrollToOffset(e * this._itemSize, r);
    }
    _updateTotalContentSize() {
      this._viewport &&
        this._viewport.setTotalContentSize(
          this._viewport.getDataLength() * this._itemSize,
        );
    }
    _updateRenderedRange() {
      if (!this._viewport) return;
      let e = this._viewport.getRenderedRange(),
        r = { start: e.start, end: e.end },
        a = this._viewport.getViewportSize(),
        o = this._viewport.getDataLength(),
        n = this._viewport.measureScrollOffset(),
        i = this._itemSize > 0 ? n / this._itemSize : 0;
      if (r.end > o) {
        let l = Math.ceil(a / this._itemSize),
          c = Math.max(0, Math.min(i, o - l));
        i != c &&
          ((i = c), (n = c * this._itemSize), (r.start = Math.floor(i))),
          (r.end = Math.max(0, Math.min(o, r.start + l)));
      }
      let s = n - r.start * this._itemSize;
      if (s < this._minBufferPx && r.start != 0) {
        let l = Math.ceil((this._maxBufferPx - s) / this._itemSize);
        (r.start = Math.max(0, r.start - l)),
          (r.end = Math.min(
            o,
            Math.ceil(i + (a + this._minBufferPx) / this._itemSize),
          ));
      } else {
        let l = r.end * this._itemSize - (n + a);
        if (l < this._minBufferPx && r.end != o) {
          let c = Math.ceil((this._maxBufferPx - l) / this._itemSize);
          c > 0 &&
            ((r.end = Math.min(o, r.end + c)),
            (r.start = Math.max(
              0,
              Math.floor(i - this._minBufferPx / this._itemSize),
            )));
        }
      }
      this._viewport.setRenderedRange(r),
        this._viewport.setRenderedContentOffset(this._itemSize * r.start),
        this._scrolledIndexChange.next(Math.floor(i));
    }
  };
function a_(t) {
  return t._scrollStrategy;
}
var Bwt = (() => {
    let e = class e {
      constructor() {
        (this._itemSize = 20),
          (this._minBufferPx = 100),
          (this._maxBufferPx = 200),
          (this._scrollStrategy = new d8(
            this.itemSize,
            this.minBufferPx,
            this.maxBufferPx,
          ));
      }
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(a) {
        this._itemSize = wr(a);
      }
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(a) {
        this._minBufferPx = wr(a);
      }
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(a) {
        this._maxBufferPx = wr(a);
      }
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(
          this.itemSize,
          this.minBufferPx,
          this.maxBufferPx,
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['cdk-virtual-scroll-viewport', 'itemSize', '']],
        inputs: {
          itemSize: 'itemSize',
          minBufferPx: 'minBufferPx',
          maxBufferPx: 'maxBufferPx',
        },
        standalone: !0,
        features: [
          h1([{ provide: Yv, useFactory: a_, deps: [Ht(() => e)] }]),
          ee,
        ],
      }));
    let t = e;
    return t;
  })(),
  r_ = 20,
  p5 = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this._ngZone = a),
          (this._platform = o),
          (this._scrolled = new C()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = n);
      }
      register(a) {
        this.scrollContainers.has(a) ||
          this.scrollContainers.set(
            a,
            a.elementScrolled().subscribe(() => this._scrolled.next(a)),
          );
      }
      deregister(a) {
        let o = this.scrollContainers.get(a);
        o && (o.unsubscribe(), this.scrollContainers.delete(a));
      }
      scrolled(a = r_) {
        return this._platform.isBrowser
          ? new P(o => {
              this._globalSubscription || this._addGlobalListener();
              let n =
                a > 0
                  ? this._scrolled.pipe(Wa(a)).subscribe(o)
                  : this._scrolled.subscribe(o);
              return (
                this._scrolledCount++,
                () => {
                  n.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : D();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((a, o) => this.deregister(o)),
          this._scrolled.complete();
      }
      ancestorScrolled(a, o) {
        let n = this.getAncestorScrollContainers(a);
        return this.scrolled(o).pipe(me(i => !i || n.indexOf(i) > -1));
      }
      getAncestorScrollContainers(a) {
        let o = [];
        return (
          this.scrollContainers.forEach((n, i) => {
            this._scrollableContainsElement(i, a) && o.push(i);
          }),
          o
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(a, o) {
        let n = Va(o),
          i = a.getElementRef().nativeElement;
        do if (n == i) return !0;
        while ((n = n.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let a = this._getWindow();
          return Vt(a.document, 'scroll').subscribe(() =>
            this._scrolled.next(),
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(T), g(Se), g(Y, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Uv = (() => {
    let e = class e {
      constructor(a, o, n, i) {
        (this.elementRef = a),
          (this.scrollDispatcher = o),
          (this.ngZone = n),
          (this.dir = i),
          (this._destroyed = new C()),
          (this._elementScrolled = new P(s =>
            this.ngZone.runOutsideAngular(() =>
              Vt(this.elementRef.nativeElement, 'scroll')
                .pipe(S(this._destroyed))
                .subscribe(s),
            ),
          ));
      }
      ngOnInit() {
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this.scrollDispatcher.deregister(this),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      elementScrolled() {
        return this._elementScrolled;
      }
      getElementRef() {
        return this.elementRef;
      }
      scrollTo(a) {
        let o = this.elementRef.nativeElement,
          n = this.dir && this.dir.value == 'rtl';
        a.left == null && (a.left = n ? a.end : a.start),
          a.right == null && (a.right = n ? a.start : a.end),
          a.bottom != null &&
            (a.top = o.scrollHeight - o.clientHeight - a.bottom),
          n && Do() != Pt.NORMAL
            ? (a.left != null &&
                (a.right = o.scrollWidth - o.clientWidth - a.left),
              Do() == Pt.INVERTED
                ? (a.left = a.right)
                : Do() == Pt.NEGATED && (a.left = a.right ? -a.right : a.right))
            : a.right != null &&
              (a.left = o.scrollWidth - o.clientWidth - a.right),
          this._applyScrollToOptions(a);
      }
      _applyScrollToOptions(a) {
        let o = this.elementRef.nativeElement;
        _s()
          ? o.scrollTo(a)
          : (a.top != null && (o.scrollTop = a.top),
            a.left != null && (o.scrollLeft = a.left));
      }
      measureScrollOffset(a) {
        let o = 'left',
          n = 'right',
          i = this.elementRef.nativeElement;
        if (a == 'top') return i.scrollTop;
        if (a == 'bottom') return i.scrollHeight - i.clientHeight - i.scrollTop;
        let s = this.dir && this.dir.value == 'rtl';
        return (
          a == 'start' ? (a = s ? n : o) : a == 'end' && (a = s ? o : n),
          s && Do() == Pt.INVERTED
            ? a == o
              ? i.scrollWidth - i.clientWidth - i.scrollLeft
              : i.scrollLeft
            : s && Do() == Pt.NEGATED
              ? a == o
                ? i.scrollLeft + i.scrollWidth - i.clientWidth
                : -i.scrollLeft
              : a == o
                ? i.scrollLeft
                : i.scrollWidth - i.clientWidth - i.scrollLeft
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E), v(p5), v(T), v($e, 8));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'cdk-scrollable', ''],
          ['', 'cdkScrollable', ''],
        ],
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  o_ = 20,
  js = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this._platform = a),
          (this._change = new C()),
          (this._changeListener = i => {
            this._change.next(i);
          }),
          (this._document = n),
          o.runOutsideAngular(() => {
            if (a.isBrowser) {
              let i = this._getWindow();
              i.addEventListener('resize', this._changeListener),
                i.addEventListener('orientationchange', this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let a = this._getWindow();
          a.removeEventListener('resize', this._changeListener),
            a.removeEventListener('orientationchange', this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let a = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), a;
      }
      getViewportRect() {
        let a = this.getViewportScrollPosition(),
          { width: o, height: n } = this.getViewportSize();
        return {
          top: a.top,
          left: a.left,
          bottom: a.top + n,
          right: a.left + o,
          height: n,
          width: o,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let a = this._document,
          o = this._getWindow(),
          n = a.documentElement,
          i = n.getBoundingClientRect(),
          s = -i.top || a.body.scrollTop || o.scrollY || n.scrollTop || 0,
          l = -i.left || a.body.scrollLeft || o.scrollX || n.scrollLeft || 0;
        return { top: s, left: l };
      }
      change(a = o_) {
        return a > 0 ? this._change.pipe(Wa(a)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let a = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: a.innerWidth, height: a.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Se), g(T), g(Y, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Rv = new F('VIRTUAL_SCROLLABLE'),
  n_ = (() => {
    let e = class e extends Uv {
      constructor(a, o, n, i) {
        super(a, o, n, i);
      }
      measureViewportSize(a) {
        let o = this.elementRef.nativeElement;
        return a === 'horizontal' ? o.clientWidth : o.clientHeight;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E), v(p5), v(T), v($e, 8));
    }),
      (e.ɵdir = _({ type: e, features: [r1] }));
    let t = e;
    return t;
  })();
function i_(t, e) {
  return t.start == e.start && t.end == e.end;
}
var s_ = typeof requestAnimationFrame < 'u' ? i3 : y0,
  l_ = (() => {
    let e = class e extends n_ {
      get orientation() {
        return this._orientation;
      }
      set orientation(a) {
        this._orientation !== a &&
          ((this._orientation = a), this._calculateSpacerSize());
      }
      constructor(a, o, n, i, s, l, c, h) {
        super(a, l, n, s),
          (this.elementRef = a),
          (this._changeDetectorRef = o),
          (this._scrollStrategy = i),
          (this.scrollable = h),
          (this._platform = m(Se)),
          (this._detachedSubject = new C()),
          (this._renderedRangeSubject = new C()),
          (this._orientation = 'vertical'),
          (this.appendOnly = !1),
          (this.scrolledIndexChange = new P(d =>
            this._scrollStrategy.scrolledIndexChange.subscribe(u =>
              Promise.resolve().then(() => this.ngZone.run(() => d.next(u))),
            ),
          )),
          (this.renderedRangeStream = this._renderedRangeSubject),
          (this._totalContentSize = 0),
          (this._totalContentWidth = ''),
          (this._totalContentHeight = ''),
          (this._renderedRange = { start: 0, end: 0 }),
          (this._dataLength = 0),
          (this._viewportSize = 0),
          (this._renderedContentOffset = 0),
          (this._renderedContentOffsetNeedsRewrite = !1),
          (this._isChangeDetectionPending = !1),
          (this._runAfterChangeDetection = []),
          (this._viewportChanges = se.EMPTY),
          (this._injector = m(Oe)),
          (this._isDestroyed = !1),
          (this._viewportChanges = c.change().subscribe(() => {
            this.checkViewportSize();
          })),
          this.scrollable ||
            (this.elementRef.nativeElement.classList.add(
              'cdk-virtual-scrollable',
            ),
            (this.scrollable = this));
      }
      ngOnInit() {
        this._platform.isBrowser &&
          (this.scrollable === this && super.ngOnInit(),
          this.ngZone.runOutsideAngular(() =>
            Promise.resolve().then(() => {
              this._measureViewportSize(),
                this._scrollStrategy.attach(this),
                this.scrollable
                  .elementScrolled()
                  .pipe(T1(null), Wa(0, s_), S(this._destroyed))
                  .subscribe(() => this._scrollStrategy.onContentScrolled()),
                this._markChangeDetectionNeeded();
            }),
          ));
      }
      ngOnDestroy() {
        this.detach(),
          this._scrollStrategy.detach(),
          this._renderedRangeSubject.complete(),
          this._detachedSubject.complete(),
          this._viewportChanges.unsubscribe(),
          (this._isDestroyed = !0),
          super.ngOnDestroy();
      }
      attach(a) {
        this._forOf,
          this.ngZone.runOutsideAngular(() => {
            (this._forOf = a),
              this._forOf.dataStream
                .pipe(S(this._detachedSubject))
                .subscribe(o => {
                  let n = o.length;
                  n !== this._dataLength &&
                    ((this._dataLength = n),
                    this._scrollStrategy.onDataLengthChanged()),
                    this._doChangeDetection();
                });
          });
      }
      detach() {
        (this._forOf = null), this._detachedSubject.next();
      }
      getDataLength() {
        return this._dataLength;
      }
      getViewportSize() {
        return this._viewportSize;
      }
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(a) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[a];
      }
      setTotalContentSize(a) {
        this._totalContentSize !== a &&
          ((this._totalContentSize = a),
          this._calculateSpacerSize(),
          this._markChangeDetectionNeeded());
      }
      setRenderedRange(a) {
        i_(this._renderedRange, a) ||
          (this.appendOnly &&
            (a = { start: 0, end: Math.max(this._renderedRange.end, a.end) }),
          this._renderedRangeSubject.next((this._renderedRange = a)),
          this._markChangeDetectionNeeded(() =>
            this._scrollStrategy.onContentRendered(),
          ));
      }
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite
          ? null
          : this._renderedContentOffset;
      }
      setRenderedContentOffset(a, o = 'to-start') {
        a = this.appendOnly && o === 'to-start' ? 0 : a;
        let n = this.dir && this.dir.value == 'rtl',
          i = this.orientation == 'horizontal',
          s = i ? 'X' : 'Y',
          c = `translate${s}(${Number((i && n ? -1 : 1) * a)}px)`;
        (this._renderedContentOffset = a),
          o === 'to-end' &&
            ((c += ` translate${s}(-100%)`),
            (this._renderedContentOffsetNeedsRewrite = !0)),
          this._renderedContentTransform != c &&
            ((this._renderedContentTransform = c),
            this._markChangeDetectionNeeded(() => {
              this._renderedContentOffsetNeedsRewrite
                ? ((this._renderedContentOffset -=
                    this.measureRenderedContentSize()),
                  (this._renderedContentOffsetNeedsRewrite = !1),
                  this.setRenderedContentOffset(this._renderedContentOffset))
                : this._scrollStrategy.onRenderedOffsetChanged();
            }));
      }
      scrollToOffset(a, o = 'auto') {
        let n = { behavior: o };
        this.orientation === 'horizontal' ? (n.start = a) : (n.top = a),
          this.scrollable.scrollTo(n);
      }
      scrollToIndex(a, o = 'auto') {
        this._scrollStrategy.scrollToIndex(a, o);
      }
      measureScrollOffset(a) {
        let o;
        return (
          this.scrollable == this
            ? (o = n => super.measureScrollOffset(n))
            : (o = n => this.scrollable.measureScrollOffset(n)),
          Math.max(
            0,
            o(a ?? (this.orientation === 'horizontal' ? 'start' : 'top')) -
              this.measureViewportOffset(),
          )
        );
      }
      measureViewportOffset(a) {
        let o,
          n = 'left',
          i = 'right',
          s = this.dir?.value == 'rtl';
        a == 'start'
          ? (o = s ? i : n)
          : a == 'end'
            ? (o = s ? n : i)
            : a
              ? (o = a)
              : (o = this.orientation === 'horizontal' ? 'left' : 'top');
        let l = this.scrollable.measureBoundingClientRectWithScrollOffset(o);
        return this.elementRef.nativeElement.getBoundingClientRect()[o] - l;
      }
      measureRenderedContentSize() {
        let a = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal'
          ? a.offsetWidth
          : a.offsetHeight;
      }
      measureRangeSize(a) {
        return this._forOf
          ? this._forOf.measureRangeSize(a, this.orientation)
          : 0;
      }
      checkViewportSize() {
        this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged();
      }
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(
          this.orientation,
        );
      }
      _markChangeDetectionNeeded(a) {
        a && this._runAfterChangeDetection.push(a),
          this._isChangeDetectionPending ||
            ((this._isChangeDetectionPending = !0),
            this.ngZone.runOutsideAngular(() =>
              Promise.resolve().then(() => {
                this._doChangeDetection();
              }),
            ));
      }
      _doChangeDetection() {
        this._isDestroyed ||
          this.ngZone.run(() => {
            this._changeDetectorRef.markForCheck(),
              (this._contentWrapper.nativeElement.style.transform =
                this._renderedContentTransform),
              Tt(
                () => {
                  this._isChangeDetectionPending = !1;
                  let a = this._runAfterChangeDetection;
                  this._runAfterChangeDetection = [];
                  for (let o of a) o();
                },
                { injector: this._injector },
              );
          });
      }
      _calculateSpacerSize() {
        (this._totalContentHeight =
          this.orientation === 'horizontal'
            ? ''
            : `${this._totalContentSize}px`),
          (this._totalContentWidth =
            this.orientation === 'horizontal'
              ? `${this._totalContentSize}px`
              : '');
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(
        v(E),
        v(_e),
        v(T),
        v(Yv, 8),
        v($e, 8),
        v(p5),
        v(js),
        v(Rv, 8),
      );
    }),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['cdk-virtual-scroll-viewport']],
        viewQuery: function (o, n) {
          if ((o & 1 && rt(e_, 7), o & 2)) {
            let i;
            v1((i = g1())) && (n._contentWrapper = i.first);
          }
        },
        hostAttrs: [1, 'cdk-virtual-scroll-viewport'],
        hostVars: 4,
        hostBindings: function (o, n) {
          o & 2 &&
            we(
              'cdk-virtual-scroll-orientation-horizontal',
              n.orientation === 'horizontal',
            )(
              'cdk-virtual-scroll-orientation-vertical',
              n.orientation !== 'horizontal',
            );
        },
        inputs: {
          orientation: 'orientation',
          appendOnly: [2, 'appendOnly', 'appendOnly', G],
        },
        outputs: { scrolledIndexChange: 'scrolledIndexChange' },
        standalone: !0,
        features: [
          h1([
            {
              provide: Uv,
              useFactory: (a, o) => a || o,
              deps: [[new hr(), new Mu(Rv)], e],
            },
          ]),
          ke,
          r1,
          t1,
        ],
        ngContentSelectors: t_,
        decls: 4,
        vars: 4,
        consts: [
          ['contentWrapper', ''],
          [1, 'cdk-virtual-scroll-content-wrapper'],
          [1, 'cdk-virtual-scroll-spacer'],
        ],
        template: function (o, n) {
          o & 1 && (gt(), Xe(0, 'div', 1, 0), wt(2), Je(), Le(3, 'div', 2)),
            o & 2 &&
              (de(3),
              i0('width', n._totalContentWidth)(
                'height',
                n._totalContentHeight,
              ));
        },
        styles: [
          'cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
function qv(t, e, r) {
  let a = r;
  if (!a.getBoundingClientRect) return 0;
  let o = a.getBoundingClientRect();
  return t === 'horizontal'
    ? e === 'start'
      ? o.left
      : o.right
    : e === 'start'
      ? o.top
      : o.bottom;
}
var Owt = (() => {
  let e = class e {
    get cdkVirtualForOf() {
      return this._cdkVirtualForOf;
    }
    set cdkVirtualForOf(a) {
      (this._cdkVirtualForOf = a),
        Nv(a)
          ? this._dataSourceChanges.next(a)
          : this._dataSourceChanges.next(
              new Rs(Q1(a) ? a : Array.from(a || [])),
            );
    }
    get cdkVirtualForTrackBy() {
      return this._cdkVirtualForTrackBy;
    }
    set cdkVirtualForTrackBy(a) {
      (this._needsUpdate = !0),
        (this._cdkVirtualForTrackBy = a
          ? (o, n) =>
              a(o + (this._renderedRange ? this._renderedRange.start : 0), n)
          : void 0);
    }
    set cdkVirtualForTemplate(a) {
      a && ((this._needsUpdate = !0), (this._template = a));
    }
    get cdkVirtualForTemplateCacheSize() {
      return this._viewRepeater.viewCacheSize;
    }
    set cdkVirtualForTemplateCacheSize(a) {
      this._viewRepeater.viewCacheSize = wr(a);
    }
    constructor(a, o, n, i, s, l) {
      (this._viewContainerRef = a),
        (this._template = o),
        (this._differs = n),
        (this._viewRepeater = i),
        (this._viewport = s),
        (this.viewChange = new C()),
        (this._dataSourceChanges = new C()),
        (this.dataStream = this._dataSourceChanges.pipe(
          T1(null),
          u3(),
          Ve(([c, h]) => this._changeDataSource(c, h)),
          Jo(1),
        )),
        (this._differ = null),
        (this._needsUpdate = !1),
        (this._destroyed = new C()),
        this.dataStream.subscribe(c => {
          (this._data = c), this._onRenderedDataChange();
        }),
        this._viewport.renderedRangeStream
          .pipe(S(this._destroyed))
          .subscribe(c => {
            (this._renderedRange = c),
              this.viewChange.observers.length &&
                l.run(() => this.viewChange.next(this._renderedRange)),
              this._onRenderedDataChange();
          }),
        this._viewport.attach(this);
    }
    measureRangeSize(a, o) {
      if (a.start >= a.end) return 0;
      a.start < this._renderedRange.start || a.end > this._renderedRange.end;
      let n = a.start - this._renderedRange.start,
        i = a.end - a.start,
        s,
        l;
      for (let c = 0; c < i; c++) {
        let h = this._viewContainerRef.get(c + n);
        if (h && h.rootNodes.length) {
          s = l = h.rootNodes[0];
          break;
        }
      }
      for (let c = i - 1; c > -1; c--) {
        let h = this._viewContainerRef.get(c + n);
        if (h && h.rootNodes.length) {
          l = h.rootNodes[h.rootNodes.length - 1];
          break;
        }
      }
      return s && l ? qv(o, 'end', l) - qv(o, 'start', s) : 0;
    }
    ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        let a = this._differ.diff(this._renderedItems);
        a ? this._applyChanges(a) : this._updateContext(),
          (this._needsUpdate = !1);
      }
    }
    ngOnDestroy() {
      this._viewport.detach(),
        this._dataSourceChanges.next(void 0),
        this._dataSourceChanges.complete(),
        this.viewChange.complete(),
        this._destroyed.next(),
        this._destroyed.complete(),
        this._viewRepeater.detach();
    }
    _onRenderedDataChange() {
      this._renderedRange &&
        ((this._renderedItems = this._data.slice(
          this._renderedRange.start,
          this._renderedRange.end,
        )),
        this._differ ||
          (this._differ = this._differs
            .find(this._renderedItems)
            .create((a, o) =>
              this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(a, o) : o,
            )),
        (this._needsUpdate = !0));
    }
    _changeDataSource(a, o) {
      return (
        a && a.disconnect(this),
        (this._needsUpdate = !0),
        o ? o.connect(this) : D()
      );
    }
    _updateContext() {
      let a = this._data.length,
        o = this._viewContainerRef.length;
      for (; o--; ) {
        let n = this._viewContainerRef.get(o);
        (n.context.index = this._renderedRange.start + o),
          (n.context.count = a),
          this._updateComputedContextProperties(n.context),
          n.detectChanges();
      }
    }
    _applyChanges(a) {
      this._viewRepeater.applyChanges(
        a,
        this._viewContainerRef,
        (i, s, l) => this._getEmbeddedViewArgs(i, l),
        i => i.item,
      ),
        a.forEachIdentityChange(i => {
          let s = this._viewContainerRef.get(i.currentIndex);
          s.context.$implicit = i.item;
        });
      let o = this._data.length,
        n = this._viewContainerRef.length;
      for (; n--; ) {
        let i = this._viewContainerRef.get(n);
        (i.context.index = this._renderedRange.start + n),
          (i.context.count = o),
          this._updateComputedContextProperties(i.context);
      }
    }
    _updateComputedContextProperties(a) {
      (a.first = a.index === 0),
        (a.last = a.index === a.count - 1),
        (a.even = a.index % 2 === 0),
        (a.odd = !a.even);
    }
    _getEmbeddedViewArgs(a, o) {
      return {
        templateRef: this._template,
        context: {
          $implicit: a.item,
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: !1,
          last: !1,
          odd: !1,
          even: !1,
        },
        index: o,
      };
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(Qe), v(Ke), v(Pi), v(h8), v(l_, 4), v(T));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'cdkVirtualFor', '', 'cdkVirtualForOf', '']],
      inputs: {
        cdkVirtualForOf: 'cdkVirtualForOf',
        cdkVirtualForTrackBy: 'cdkVirtualForTrackBy',
        cdkVirtualForTemplate: 'cdkVirtualForTemplate',
        cdkVirtualForTemplateCacheSize: 'cdkVirtualForTemplateCacheSize',
      },
      standalone: !0,
      features: [h1([{ provide: h8, useClass: qs }])],
    }));
  let t = e;
  return t;
})();
var jv = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({}));
    let t = e;
    return t;
  })(),
  u8 = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({ imports: [i5, jv, i5, jv] }));
    let t = e;
    return t;
  })();
var f5 = class {
    attach(e) {
      return (this._attachedHost = e), e.attach(this);
    }
    detach() {
      let e = this._attachedHost;
      e != null && ((this._attachedHost = null), e.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(e) {
      this._attachedHost = e;
    }
  },
  p8 = class extends f5 {
    constructor(e, r, a, o, n) {
      super(),
        (this.component = e),
        (this.viewContainerRef = r),
        (this.injector = a),
        (this.componentFactoryResolver = o),
        (this.projectableNodes = n);
    }
  },
  m5 = class extends f5 {
    constructor(e, r, a, o) {
      super(),
        (this.templateRef = e),
        (this.viewContainerRef = r),
        (this.context = a),
        (this.injector = o);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(e, r = this.context) {
      return (this.context = r), super.attach(e);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  f8 = class extends f5 {
    constructor(e) {
      super(), (this.element = e instanceof E ? e.nativeElement : e);
    }
  },
  Ys = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(e) {
      if (e instanceof p8)
        return (this._attachedPortal = e), this.attachComponentPortal(e);
      if (e instanceof m5)
        return (this._attachedPortal = e), this.attachTemplatePortal(e);
      if (this.attachDomPortal && e instanceof f8)
        return (this._attachedPortal = e), this.attachDomPortal(e);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(e) {
      this._disposeFn = e;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var Us = class extends Ys {
  constructor(e, r, a, o, n) {
    super(),
      (this.outletElement = e),
      (this._componentFactoryResolver = r),
      (this._appRef = a),
      (this._defaultInjector = o),
      (this.attachDomPortal = i => {
        this._document;
        let s = i.element;
        s.parentNode;
        let l = this._document.createComment('dom-portal');
        s.parentNode.insertBefore(l, s),
          this.outletElement.appendChild(s),
          (this._attachedPortal = i),
          super.setDisposeFn(() => {
            l.parentNode && l.parentNode.replaceChild(s, l);
          });
      }),
      (this._document = n);
  }
  attachComponentPortal(e) {
    let a = (
        e.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(e.component),
      o;
    return (
      e.viewContainerRef
        ? ((o = e.viewContainerRef.createComponent(
            a,
            e.viewContainerRef.length,
            e.injector || e.viewContainerRef.injector,
            e.projectableNodes || void 0,
          )),
          this.setDisposeFn(() => o.destroy()))
        : ((o = a.create(e.injector || this._defaultInjector || Oe.NULL)),
          this._appRef.attachView(o.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(o.hostView),
              o.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(o)),
      (this._attachedPortal = e),
      o
    );
  }
  attachTemplatePortal(e) {
    let r = e.viewContainerRef,
      a = r.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
    return (
      a.rootNodes.forEach(o => this.outletElement.appendChild(o)),
      a.detectChanges(),
      this.setDisposeFn(() => {
        let o = r.indexOf(a);
        o !== -1 && r.remove(o);
      }),
      (this._attachedPortal = e),
      a
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var Wwt = (() => {
  let e = class e extends Ys {
    constructor(a, o, n) {
      super(),
        (this._componentFactoryResolver = a),
        (this._viewContainerRef = o),
        (this._isInitialized = !1),
        (this.attached = new W()),
        (this.attachDomPortal = i => {
          this._document;
          let s = i.element;
          s.parentNode;
          let l = this._document.createComment('dom-portal');
          i.setAttachedHost(this),
            s.parentNode.insertBefore(l, s),
            this._getRootNode().appendChild(s),
            (this._attachedPortal = i),
            super.setDisposeFn(() => {
              l.parentNode && l.parentNode.replaceChild(s, l);
            });
        }),
        (this._document = n);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(a) {
      (this.hasAttached() && !a && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        a && super.attach(a),
        (this._attachedPortal = a || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(a) {
      a.setAttachedHost(this);
      let o =
          a.viewContainerRef != null
            ? a.viewContainerRef
            : this._viewContainerRef,
        i = (
          a.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(a.component),
        s = o.createComponent(
          i,
          o.length,
          a.injector || o.injector,
          a.projectableNodes || void 0,
        );
      return (
        o !== this._viewContainerRef &&
          this._getRootNode().appendChild(s.hostView.rootNodes[0]),
        super.setDisposeFn(() => s.destroy()),
        (this._attachedPortal = a),
        (this._attachedRef = s),
        this.attached.emit(s),
        s
      );
    }
    attachTemplatePortal(a) {
      a.setAttachedHost(this);
      let o = this._viewContainerRef.createEmbeddedView(
        a.templateRef,
        a.context,
        { injector: a.injector },
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = a),
        (this._attachedRef = o),
        this.attached.emit(o),
        o
      );
    }
    _getRootNode() {
      let a = this._viewContainerRef.element.nativeElement;
      return a.nodeType === a.ELEMENT_NODE ? a : a.parentNode;
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(a0), v(Qe), v(Y));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'cdkPortalOutlet', '']],
      inputs: { portal: [0, 'cdkPortalOutlet', 'portal'] },
      outputs: { attached: 'attached' },
      exportAs: ['cdkPortalOutlet'],
      standalone: !0,
      features: [r1],
    }));
  let t = e;
  return t;
})();
var $v = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
function Wv(t, ...e) {
  return e.length
    ? e.some(r => t[r])
    : t.altKey || t.shiftKey || t.ctrlKey || t.metaKey;
}
var Gv = _s(),
  m8 = class {
    constructor(e, r) {
      (this._viewportRuler = e),
        (this._previousHTMLStyles = { top: '', left: '' }),
        (this._isEnabled = !1),
        (this._document = r);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let e = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = e.style.left || ''),
          (this._previousHTMLStyles.top = e.style.top || ''),
          (e.style.left = Ue(-this._previousScrollPosition.left)),
          (e.style.top = Ue(-this._previousScrollPosition.top)),
          e.classList.add('cdk-global-scrollblock'),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let e = this._document.documentElement,
          r = this._document.body,
          a = e.style,
          o = r.style,
          n = a.scrollBehavior || '',
          i = o.scrollBehavior || '';
        (this._isEnabled = !1),
          (a.left = this._previousHTMLStyles.left),
          (a.top = this._previousHTMLStyles.top),
          e.classList.remove('cdk-global-scrollblock'),
          Gv && (a.scrollBehavior = o.scrollBehavior = 'auto'),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          Gv && ((a.scrollBehavior = n), (o.scrollBehavior = i));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          'cdk-global-scrollblock',
        ) ||
        this._isEnabled
      )
        return !1;
      let r = this._document.body,
        a = this._viewportRuler.getViewportSize();
      return r.scrollHeight > a.height || r.scrollWidth > a.width;
    }
  };
var v8 = class {
    constructor(e, r, a, o) {
      (this._scrollDispatcher = e),
        (this._ngZone = r),
        (this._viewportRuler = a),
        (this._config = o),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (this._scrollSubscription) return;
      let e = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          me(
            r =>
              !r ||
              !this._overlayRef.overlayElement.contains(
                r.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = e.subscribe(() => {
            let r = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(r - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = e.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  $s = class {
    enable() {}
    disable() {}
    attach() {}
  };
function g8(t, e) {
  return e.some(r => {
    let a = t.bottom < r.top,
      o = t.top > r.bottom,
      n = t.right < r.left,
      i = t.left > r.right;
    return a || o || n || i;
  });
}
function Kv(t, e) {
  return e.some(r => {
    let a = t.top < r.top,
      o = t.bottom > r.bottom,
      n = t.left < r.left,
      i = t.right > r.right;
    return a || o || n || i;
  });
}
var w8 = class {
    constructor(e, r, a, o) {
      (this._scrollDispatcher = e),
        (this._viewportRuler = r),
        (this._ngZone = a),
        (this._config = o),
        (this._scrollSubscription = null);
    }
    attach(e) {
      this._overlayRef, (this._overlayRef = e);
    }
    enable() {
      if (!this._scrollSubscription) {
        let e = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(e)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let r = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: a, height: o } = this._viewportRuler.getViewportSize();
              g8(r, [
                { width: a, height: o, bottom: o, right: a, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  h_ = (() => {
    let e = class e {
      constructor(a, o, n, i) {
        (this._scrollDispatcher = a),
          (this._viewportRuler = o),
          (this._ngZone = n),
          (this.noop = () => new $s()),
          (this.close = s =>
            new v8(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              s,
            )),
          (this.block = () => new m8(this._viewportRuler, this._document)),
          (this.reposition = s =>
            new w8(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              s,
            )),
          (this._document = i);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(p5), g(js), g(T), g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Ws = class {
    constructor(e) {
      if (
        ((this.scrollStrategy = new $s()),
        (this.panelClass = ''),
        (this.hasBackdrop = !1),
        (this.backdropClass = 'cdk-overlay-dark-backdrop'),
        (this.disposeOnNavigation = !1),
        e)
      ) {
        let r = Object.keys(e);
        for (let a of r) e[a] !== void 0 && (this[a] = e[a]);
      }
    }
  },
  Ne = class {
    constructor(e, r, a, o, n) {
      (this.offsetX = a),
        (this.offsetY = o),
        (this.panelClass = n),
        (this.originX = e.originX),
        (this.originY = e.originY),
        (this.overlayX = r.overlayX),
        (this.overlayY = r.overlayY);
    }
  };
var x8 = class {
  constructor(e, r) {
    (this.connectionPair = e), (this.scrollableViewProperties = r);
  }
};
var tg = (() => {
    let e = class e {
      constructor(a) {
        (this._attachedOverlays = []), (this._document = a);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(a) {
        this.remove(a), this._attachedOverlays.push(a);
      }
      remove(a) {
        let o = this._attachedOverlays.indexOf(a);
        o > -1 && this._attachedOverlays.splice(o, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  d_ = (() => {
    let e = class e extends tg {
      constructor(a, o) {
        super(a),
          (this._ngZone = o),
          (this._keydownListener = n => {
            let i = this._attachedOverlays;
            for (let s = i.length - 1; s > -1; s--)
              if (i[s]._keydownEvents.observers.length > 0) {
                let l = i[s]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => l.next(n)) : l.next(n);
                break;
              }
          });
      }
      add(a) {
        super.add(a),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    'keydown',
                    this._keydownListener,
                  ),
                )
              : this._document.body.addEventListener(
                  'keydown',
                  this._keydownListener,
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            'keydown',
            this._keydownListener,
          ),
          (this._isAttached = !1));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y), g(T, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  u_ = (() => {
    let e = class e extends tg {
      constructor(a, o, n) {
        super(a),
          (this._platform = o),
          (this._ngZone = n),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = i => {
            this._pointerDownEventTarget = bt(i);
          }),
          (this._clickListener = i => {
            let s = bt(i),
              l =
                i.type === 'click' && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : s;
            this._pointerDownEventTarget = null;
            let c = this._attachedOverlays.slice();
            for (let h = c.length - 1; h > -1; h--) {
              let d = c[h];
              if (
                d._outsidePointerEvents.observers.length < 1 ||
                !d.hasAttached()
              )
                continue;
              if (Zv(d.overlayElement, s) || Zv(d.overlayElement, l)) break;
              let u = d._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => u.next(i)) : u.next(i);
            }
          });
      }
      add(a) {
        if ((super.add(a), !this._isAttached)) {
          let o = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(o))
            : this._addEventListeners(o),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = o.style.cursor),
              (o.style.cursor = 'pointer'),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let a = this._document.body;
          a.removeEventListener('pointerdown', this._pointerDownListener, !0),
            a.removeEventListener('click', this._clickListener, !0),
            a.removeEventListener('auxclick', this._clickListener, !0),
            a.removeEventListener('contextmenu', this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((a.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(a) {
        a.addEventListener('pointerdown', this._pointerDownListener, !0),
          a.addEventListener('click', this._clickListener, !0),
          a.addEventListener('auxclick', this._clickListener, !0),
          a.addEventListener('contextmenu', this._clickListener, !0);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y), g(Se), g(T, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
function Zv(t, e) {
  let r = typeof ShadowRoot < 'u' && ShadowRoot,
    a = e;
  for (; a; ) {
    if (a === t) return !0;
    a = r && a instanceof ShadowRoot ? a.host : a.parentNode;
  }
  return !1;
}
var ag = (() => {
    let e = class e {
      constructor(a, o) {
        (this._platform = o), (this._document = a);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let a = 'cdk-overlay-container';
        if (this._platform.isBrowser || oh()) {
          let n = this._document.querySelectorAll(
            `.${a}[platform="server"], .${a}[platform="test"]`,
          );
          for (let i = 0; i < n.length; i++) n[i].remove();
        }
        let o = this._document.createElement('div');
        o.classList.add(a),
          oh()
            ? o.setAttribute('platform', 'test')
            : this._platform.isBrowser || o.setAttribute('platform', 'server'),
          this._document.body.appendChild(o),
          (this._containerElement = o);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y), g(Se));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  M8 = class {
    constructor(e, r, a, o, n, i, s, l, c, h = !1, d) {
      (this._portalOutlet = e),
        (this._host = r),
        (this._pane = a),
        (this._config = o),
        (this._ngZone = n),
        (this._keyboardDispatcher = i),
        (this._document = s),
        (this._location = l),
        (this._outsideClickDispatcher = c),
        (this._animationsDisabled = h),
        (this._injector = d),
        (this._backdropElement = null),
        (this._backdropClick = new C()),
        (this._attachments = new C()),
        (this._detachments = new C()),
        (this._locationChanges = se.EMPTY),
        (this._backdropClickHandler = u => this._backdropClick.next(u)),
        (this._backdropTransitionendHandler = u => {
          this._disposeBackdrop(u.target);
        }),
        (this._keydownEvents = new C()),
        (this._outsidePointerEvents = new C()),
        (this._renders = new C()),
        o.scrollStrategy &&
          ((this._scrollStrategy = o.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = o.positionStrategy),
        (this._afterRenderRef = _1(() =>
          V6(
            () => {
              this._renders.next();
            },
            { injector: this._injector },
          ),
        ));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(e) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let r = this._portalOutlet.attach(e);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        Tt(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector },
        ),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof r?.onDestroy == 'function' &&
          r.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        r
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let e = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        e
      );
    }
    dispose() {
      let e = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        (this._previousHostParent = this._pane = this._host = null),
        e && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(e) {
      e !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = e),
        this.hasAttached() && (e.attach(this), this.updatePosition()));
    }
    updateSize(e) {
      (this._config = M(M({}, this._config), e)), this._updateElementSize();
    }
    setDirection(e) {
      (this._config = Q(M({}, this._config), { direction: e })),
        this._updateElementDirection();
    }
    addPanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !0);
    }
    removePanelClass(e) {
      this._pane && this._toggleClasses(this._pane, e, !1);
    }
    getDirection() {
      let e = this._config.direction;
      return e ? (typeof e == 'string' ? e : e.value) : 'ltr';
    }
    updateScrollStrategy(e) {
      e !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = e),
        this.hasAttached() && (e.attach(this), e.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute('dir', this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let e = this._pane.style;
      (e.width = Ue(this._config.width)),
        (e.height = Ue(this._config.height)),
        (e.minWidth = Ue(this._config.minWidth)),
        (e.minHeight = Ue(this._config.minHeight)),
        (e.maxWidth = Ue(this._config.maxWidth)),
        (e.maxHeight = Ue(this._config.maxHeight));
    }
    _togglePointerEvents(e) {
      this._pane.style.pointerEvents = e ? '' : 'none';
    }
    _attachBackdrop() {
      let e = 'cdk-overlay-backdrop-showing';
      (this._backdropElement = this._document.createElement('div')),
        this._backdropElement.classList.add('cdk-overlay-backdrop'),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            'cdk-overlay-backdrop-noop-animation',
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._backdropElement.addEventListener(
          'click',
          this._backdropClickHandler,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < 'u'
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(e);
              });
            })
          : this._backdropElement.classList.add(e);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let e = this._backdropElement;
      if (e) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(e);
          return;
        }
        e.classList.remove('cdk-overlay-backdrop-showing'),
          this._ngZone.runOutsideAngular(() => {
            e.addEventListener(
              'transitionend',
              this._backdropTransitionendHandler,
            );
          }),
          (e.style.pointerEvents = 'none'),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(e);
            }, 500),
          ));
      }
    }
    _toggleClasses(e, r, a) {
      let o = So(r || []).filter(n => !!n);
      o.length && (a ? e.classList.add(...o) : e.classList.remove(...o));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let e = this._renders
          .pipe(S(Qo(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              e.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let e = this._scrollStrategy;
      e && (e.disable(), e.detach && e.detach());
    }
    _disposeBackdrop(e) {
      e &&
        (e.removeEventListener('click', this._backdropClickHandler),
        e.removeEventListener(
          'transitionend',
          this._backdropTransitionendHandler,
        ),
        e.remove(),
        this._backdropElement === e && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Qv = 'cdk-overlay-connected-position-bounding-box',
  p_ = /([A-Za-z%]+)$/,
  y8 = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(e, r, a, o, n) {
      (this._viewportRuler = r),
        (this._document = a),
        (this._platform = o),
        (this._overlayContainer = n),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new C()),
        (this._resizeSubscription = se.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(e);
    }
    attach(e) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        e.hostElement.classList.add(Qv),
        (this._overlayRef = e),
        (this._boundingBox = e.hostElement),
        (this._pane = e.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._originRect,
        r = this._overlayRect,
        a = this._viewportRect,
        o = this._containerRect,
        n = [],
        i;
      for (let s of this._preferredPositions) {
        let l = this._getOriginPoint(e, o, s),
          c = this._getOverlayPoint(l, r, s),
          h = this._getOverlayFit(c, r, a, s);
        if (h.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(s, l);
          return;
        }
        if (this._canFitWithFlexibleDimensions(h, c, a)) {
          n.push({
            position: s,
            origin: l,
            overlayRect: r,
            boundingBoxRect: this._calculateBoundingBoxRect(l, s),
          });
          continue;
        }
        (!i || i.overlayFit.visibleArea < h.visibleArea) &&
          (i = {
            overlayFit: h,
            overlayPoint: c,
            originPoint: l,
            position: s,
            overlayRect: r,
          });
      }
      if (n.length) {
        let s = null,
          l = -1;
        for (let c of n) {
          let h =
            c.boundingBoxRect.width *
            c.boundingBoxRect.height *
            (c.position.weight || 1);
          h > l && ((l = h), (s = c));
        }
        (this._isPushed = !1), this._applyPosition(s.position, s.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(i.position, i.originPoint);
        return;
      }
      this._applyPosition(i.position, i.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          Cr(this._boundingBox.style, {
            top: '',
            left: '',
            right: '',
            bottom: '',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Qv),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let e = this._lastPosition;
      if (e) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let r = this._getOriginPoint(this._originRect, this._containerRect, e);
        this._applyPosition(e, r);
      } else this.apply();
    }
    withScrollableContainers(e) {
      return (this._scrollables = e), this;
    }
    withPositions(e) {
      return (
        (this._preferredPositions = e),
        e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(e) {
      return (this._viewportMargin = e), this;
    }
    withFlexibleDimensions(e = !0) {
      return (this._hasFlexibleDimensions = e), this;
    }
    withGrowAfterOpen(e = !0) {
      return (this._growAfterOpen = e), this;
    }
    withPush(e = !0) {
      return (this._canPush = e), this;
    }
    withLockedPosition(e = !0) {
      return (this._positionLocked = e), this;
    }
    setOrigin(e) {
      return (this._origin = e), this;
    }
    withDefaultOffsetX(e) {
      return (this._offsetX = e), this;
    }
    withDefaultOffsetY(e) {
      return (this._offsetY = e), this;
    }
    withTransformOriginOn(e) {
      return (this._transformOriginSelector = e), this;
    }
    _getOriginPoint(e, r, a) {
      let o;
      if (a.originX == 'center') o = e.left + e.width / 2;
      else {
        let i = this._isRtl() ? e.right : e.left,
          s = this._isRtl() ? e.left : e.right;
        o = a.originX == 'start' ? i : s;
      }
      r.left < 0 && (o -= r.left);
      let n;
      return (
        a.originY == 'center'
          ? (n = e.top + e.height / 2)
          : (n = a.originY == 'top' ? e.top : e.bottom),
        r.top < 0 && (n -= r.top),
        { x: o, y: n }
      );
    }
    _getOverlayPoint(e, r, a) {
      let o;
      a.overlayX == 'center'
        ? (o = -r.width / 2)
        : a.overlayX === 'start'
          ? (o = this._isRtl() ? -r.width : 0)
          : (o = this._isRtl() ? 0 : -r.width);
      let n;
      return (
        a.overlayY == 'center'
          ? (n = -r.height / 2)
          : (n = a.overlayY == 'top' ? 0 : -r.height),
        { x: e.x + o, y: e.y + n }
      );
    }
    _getOverlayFit(e, r, a, o) {
      let n = Jv(r),
        { x: i, y: s } = e,
        l = this._getOffset(o, 'x'),
        c = this._getOffset(o, 'y');
      l && (i += l), c && (s += c);
      let h = 0 - i,
        d = i + n.width - a.width,
        u = 0 - s,
        p = s + n.height - a.height,
        f = this._subtractOverflows(n.width, h, d),
        x = this._subtractOverflows(n.height, u, p),
        b = f * x;
      return {
        visibleArea: b,
        isCompletelyWithinViewport: n.width * n.height === b,
        fitsInViewportVertically: x === n.height,
        fitsInViewportHorizontally: f == n.width,
      };
    }
    _canFitWithFlexibleDimensions(e, r, a) {
      if (this._hasFlexibleDimensions) {
        let o = a.bottom - r.y,
          n = a.right - r.x,
          i = Xv(this._overlayRef.getConfig().minHeight),
          s = Xv(this._overlayRef.getConfig().minWidth),
          l = e.fitsInViewportVertically || (i != null && i <= o),
          c = e.fitsInViewportHorizontally || (s != null && s <= n);
        return l && c;
      }
      return !1;
    }
    _pushOverlayOnScreen(e, r, a) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: e.x + this._previousPushAmount.x,
          y: e.y + this._previousPushAmount.y,
        };
      let o = Jv(r),
        n = this._viewportRect,
        i = Math.max(e.x + o.width - n.width, 0),
        s = Math.max(e.y + o.height - n.height, 0),
        l = Math.max(n.top - a.top - e.y, 0),
        c = Math.max(n.left - a.left - e.x, 0),
        h = 0,
        d = 0;
      return (
        o.width <= n.width
          ? (h = c || -i)
          : (h = e.x < this._viewportMargin ? n.left - a.left - e.x : 0),
        o.height <= n.height
          ? (d = l || -s)
          : (d = e.y < this._viewportMargin ? n.top - a.top - e.y : 0),
        (this._previousPushAmount = { x: h, y: d }),
        { x: e.x + h, y: e.y + d }
      );
    }
    _applyPosition(e, r) {
      if (
        (this._setTransformOrigin(e),
        this._setOverlayElementStyles(r, e),
        this._setBoundingBoxStyles(r, e),
        e.panelClass && this._addPanelClasses(e.panelClass),
        this._positionChanges.observers.length)
      ) {
        let a = this._getScrollVisibility();
        if (
          e !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !f_(this._lastScrollVisibility, a)
        ) {
          let o = new x8(e, a);
          this._positionChanges.next(o);
        }
        this._lastScrollVisibility = a;
      }
      (this._lastPosition = e), (this._isInitialRender = !1);
    }
    _setTransformOrigin(e) {
      if (!this._transformOriginSelector) return;
      let r = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        a,
        o = e.overlayY;
      e.overlayX === 'center'
        ? (a = 'center')
        : this._isRtl()
          ? (a = e.overlayX === 'start' ? 'right' : 'left')
          : (a = e.overlayX === 'start' ? 'left' : 'right');
      for (let n = 0; n < r.length; n++)
        r[n].style.transformOrigin = `${a} ${o}`;
    }
    _calculateBoundingBoxRect(e, r) {
      let a = this._viewportRect,
        o = this._isRtl(),
        n,
        i,
        s;
      if (r.overlayY === 'top')
        (i = e.y), (n = a.height - i + this._viewportMargin);
      else if (r.overlayY === 'bottom')
        (s = a.height - e.y + this._viewportMargin * 2),
          (n = a.height - s + this._viewportMargin);
      else {
        let p = Math.min(a.bottom - e.y + a.top, e.y),
          f = this._lastBoundingBoxSize.height;
        (n = p * 2),
          (i = e.y - p),
          n > f &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (i = e.y - f / 2);
      }
      let l = (r.overlayX === 'start' && !o) || (r.overlayX === 'end' && o),
        c = (r.overlayX === 'end' && !o) || (r.overlayX === 'start' && o),
        h,
        d,
        u;
      if (c)
        (u = a.width - e.x + this._viewportMargin * 2),
          (h = e.x - this._viewportMargin);
      else if (l) (d = e.x), (h = a.right - e.x);
      else {
        let p = Math.min(a.right - e.x + a.left, e.x),
          f = this._lastBoundingBoxSize.width;
        (h = p * 2),
          (d = e.x - p),
          h > f &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (d = e.x - f / 2);
      }
      return { top: i, left: d, bottom: s, right: u, width: h, height: n };
    }
    _setBoundingBoxStyles(e, r) {
      let a = this._calculateBoundingBoxRect(e, r);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((a.height = Math.min(a.height, this._lastBoundingBoxSize.height)),
        (a.width = Math.min(a.width, this._lastBoundingBoxSize.width)));
      let o = {};
      if (this._hasExactPosition())
        (o.top = o.left = '0'),
          (o.bottom = o.right = o.maxHeight = o.maxWidth = ''),
          (o.width = o.height = '100%');
      else {
        let n = this._overlayRef.getConfig().maxHeight,
          i = this._overlayRef.getConfig().maxWidth;
        (o.height = Ue(a.height)),
          (o.top = Ue(a.top)),
          (o.bottom = Ue(a.bottom)),
          (o.width = Ue(a.width)),
          (o.left = Ue(a.left)),
          (o.right = Ue(a.right)),
          r.overlayX === 'center'
            ? (o.alignItems = 'center')
            : (o.alignItems = r.overlayX === 'end' ? 'flex-end' : 'flex-start'),
          r.overlayY === 'center'
            ? (o.justifyContent = 'center')
            : (o.justifyContent =
                r.overlayY === 'bottom' ? 'flex-end' : 'flex-start'),
          n && (o.maxHeight = Ue(n)),
          i && (o.maxWidth = Ue(i));
      }
      (this._lastBoundingBoxSize = a), Cr(this._boundingBox.style, o);
    }
    _resetBoundingBoxStyles() {
      Cr(this._boundingBox.style, {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        height: '',
        width: '',
        alignItems: '',
        justifyContent: '',
      });
    }
    _resetOverlayElementStyles() {
      Cr(this._pane.style, {
        top: '',
        left: '',
        bottom: '',
        right: '',
        position: '',
        transform: '',
      });
    }
    _setOverlayElementStyles(e, r) {
      let a = {},
        o = this._hasExactPosition(),
        n = this._hasFlexibleDimensions,
        i = this._overlayRef.getConfig();
      if (o) {
        let h = this._viewportRuler.getViewportScrollPosition();
        Cr(a, this._getExactOverlayY(r, e, h)),
          Cr(a, this._getExactOverlayX(r, e, h));
      } else a.position = 'static';
      let s = '',
        l = this._getOffset(r, 'x'),
        c = this._getOffset(r, 'y');
      l && (s += `translateX(${l}px) `),
        c && (s += `translateY(${c}px)`),
        (a.transform = s.trim()),
        i.maxHeight &&
          (o ? (a.maxHeight = Ue(i.maxHeight)) : n && (a.maxHeight = '')),
        i.maxWidth &&
          (o ? (a.maxWidth = Ue(i.maxWidth)) : n && (a.maxWidth = '')),
        Cr(this._pane.style, a);
    }
    _getExactOverlayY(e, r, a) {
      let o = { top: '', bottom: '' },
        n = this._getOverlayPoint(r, this._overlayRect, e);
      if (
        (this._isPushed &&
          (n = this._pushOverlayOnScreen(n, this._overlayRect, a)),
        e.overlayY === 'bottom')
      ) {
        let i = this._document.documentElement.clientHeight;
        o.bottom = `${i - (n.y + this._overlayRect.height)}px`;
      } else o.top = Ue(n.y);
      return o;
    }
    _getExactOverlayX(e, r, a) {
      let o = { left: '', right: '' },
        n = this._getOverlayPoint(r, this._overlayRect, e);
      this._isPushed &&
        (n = this._pushOverlayOnScreen(n, this._overlayRect, a));
      let i;
      if (
        (this._isRtl()
          ? (i = e.overlayX === 'end' ? 'left' : 'right')
          : (i = e.overlayX === 'end' ? 'right' : 'left'),
        i === 'right')
      ) {
        let s = this._document.documentElement.clientWidth;
        o.right = `${s - (n.x + this._overlayRect.width)}px`;
      } else o.left = Ue(n.x);
      return o;
    }
    _getScrollVisibility() {
      let e = this._getOriginRect(),
        r = this._pane.getBoundingClientRect(),
        a = this._scrollables.map(o =>
          o.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: Kv(e, a),
        isOriginOutsideView: g8(e, a),
        isOverlayClipped: Kv(r, a),
        isOverlayOutsideView: g8(r, a),
      };
    }
    _subtractOverflows(e, ...r) {
      return r.reduce((a, o) => a - Math.max(o, 0), e);
    }
    _getNarrowedViewportRect() {
      let e = this._document.documentElement.clientWidth,
        r = this._document.documentElement.clientHeight,
        a = this._viewportRuler.getViewportScrollPosition();
      return {
        top: a.top + this._viewportMargin,
        left: a.left + this._viewportMargin,
        right: a.left + e - this._viewportMargin,
        bottom: a.top + r - this._viewportMargin,
        width: e - 2 * this._viewportMargin,
        height: r - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === 'rtl';
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(e, r) {
      return r === 'x'
        ? e.offsetX == null
          ? this._offsetX
          : e.offsetX
        : e.offsetY == null
          ? this._offsetY
          : e.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(e) {
      this._pane &&
        So(e).forEach(r => {
          r !== '' &&
            this._appliedPanelClasses.indexOf(r) === -1 &&
            (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach(e => {
          this._pane.classList.remove(e);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let e = this._origin;
      if (e instanceof E) return e.nativeElement.getBoundingClientRect();
      if (e instanceof Element) return e.getBoundingClientRect();
      let r = e.width || 0,
        a = e.height || 0;
      return {
        top: e.y,
        bottom: e.y + a,
        left: e.x,
        right: e.x + r,
        height: a,
        width: r,
      };
    }
  };
function Cr(t, e) {
  for (let r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
}
function Xv(t) {
  if (typeof t != 'number' && t != null) {
    let [e, r] = t.split(p_);
    return !r || r === 'px' ? parseFloat(e) : null;
  }
  return t || null;
}
function Jv(t) {
  return {
    top: Math.floor(t.top),
    right: Math.floor(t.right),
    bottom: Math.floor(t.bottom),
    left: Math.floor(t.left),
    width: Math.floor(t.width),
    height: Math.floor(t.height),
  };
}
function f_(t, e) {
  return t === e
    ? !0
    : t.isOriginClipped === e.isOriginClipped &&
        t.isOriginOutsideView === e.isOriginOutsideView &&
        t.isOverlayClipped === e.isOverlayClipped &&
        t.isOverlayOutsideView === e.isOverlayOutsideView;
}
var eg = 'cdk-global-overlay-wrapper',
  b8 = class {
    constructor() {
      (this._cssPosition = 'static'),
        (this._topOffset = ''),
        (this._bottomOffset = ''),
        (this._alignItems = ''),
        (this._xPosition = ''),
        (this._xOffset = ''),
        (this._width = ''),
        (this._height = ''),
        (this._isDisposed = !1);
    }
    attach(e) {
      let r = e.getConfig();
      (this._overlayRef = e),
        this._width && !r.width && e.updateSize({ width: this._width }),
        this._height && !r.height && e.updateSize({ height: this._height }),
        e.hostElement.classList.add(eg),
        (this._isDisposed = !1);
    }
    top(e = '') {
      return (
        (this._bottomOffset = ''),
        (this._topOffset = e),
        (this._alignItems = 'flex-start'),
        this
      );
    }
    left(e = '') {
      return (this._xOffset = e), (this._xPosition = 'left'), this;
    }
    bottom(e = '') {
      return (
        (this._topOffset = ''),
        (this._bottomOffset = e),
        (this._alignItems = 'flex-end'),
        this
      );
    }
    right(e = '') {
      return (this._xOffset = e), (this._xPosition = 'right'), this;
    }
    start(e = '') {
      return (this._xOffset = e), (this._xPosition = 'start'), this;
    }
    end(e = '') {
      return (this._xOffset = e), (this._xPosition = 'end'), this;
    }
    width(e = '') {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: e })
          : (this._width = e),
        this
      );
    }
    height(e = '') {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: e })
          : (this._height = e),
        this
      );
    }
    centerHorizontally(e = '') {
      return this.left(e), (this._xPosition = 'center'), this;
    }
    centerVertically(e = '') {
      return this.top(e), (this._alignItems = 'center'), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement.style,
        a = this._overlayRef.getConfig(),
        { width: o, height: n, maxWidth: i, maxHeight: s } = a,
        l =
          (o === '100%' || o === '100vw') &&
          (!i || i === '100%' || i === '100vw'),
        c =
          (n === '100%' || n === '100vh') &&
          (!s || s === '100%' || s === '100vh'),
        h = this._xPosition,
        d = this._xOffset,
        u = this._overlayRef.getConfig().direction === 'rtl',
        p = '',
        f = '',
        x = '';
      l
        ? (x = 'flex-start')
        : h === 'center'
          ? ((x = 'center'), u ? (f = d) : (p = d))
          : u
            ? h === 'left' || h === 'end'
              ? ((x = 'flex-end'), (p = d))
              : (h === 'right' || h === 'start') &&
                ((x = 'flex-start'), (f = d))
            : h === 'left' || h === 'start'
              ? ((x = 'flex-start'), (p = d))
              : (h === 'right' || h === 'end') && ((x = 'flex-end'), (f = d)),
        (e.position = this._cssPosition),
        (e.marginLeft = l ? '0' : p),
        (e.marginTop = c ? '0' : this._topOffset),
        (e.marginBottom = this._bottomOffset),
        (e.marginRight = l ? '0' : f),
        (r.justifyContent = x),
        (r.alignItems = c ? 'flex-start' : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let e = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement,
        a = r.style;
      r.classList.remove(eg),
        (a.justifyContent =
          a.alignItems =
          e.marginTop =
          e.marginBottom =
          e.marginLeft =
          e.marginRight =
          e.position =
            ''),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  m_ = (() => {
    let e = class e {
      constructor(a, o, n, i) {
        (this._viewportRuler = a),
          (this._document = o),
          (this._platform = n),
          (this._overlayContainer = i);
      }
      global() {
        return new b8();
      }
      flexibleConnectedTo(a) {
        return new y8(
          a,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(js), g(Y), g(Se), g(ag));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  v_ = 0,
  Ks = (() => {
    let e = class e {
      constructor(a, o, n, i, s, l, c, h, d, u, p, f) {
        (this.scrollStrategies = a),
          (this._overlayContainer = o),
          (this._componentFactoryResolver = n),
          (this._positionBuilder = i),
          (this._keyboardDispatcher = s),
          (this._injector = l),
          (this._ngZone = c),
          (this._document = h),
          (this._directionality = d),
          (this._location = u),
          (this._outsideClickDispatcher = p),
          (this._animationsModuleType = f);
      }
      create(a) {
        let o = this._createHostElement(),
          n = this._createPaneElement(o),
          i = this._createPortalOutlet(n),
          s = new Ws(a);
        return (
          (s.direction = s.direction || this._directionality.value),
          new M8(
            i,
            o,
            n,
            s,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === 'NoopAnimations',
            this._injector.get(F1),
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(a) {
        let o = this._document.createElement('div');
        return (
          (o.id = `cdk-overlay-${v_++}`),
          o.classList.add('cdk-overlay-pane'),
          a.appendChild(o),
          o
        );
      }
      _createHostElement() {
        let a = this._document.createElement('div');
        return this._overlayContainer.getContainerElement().appendChild(a), a;
      }
      _createPortalOutlet(a) {
        return (
          this._appRef || (this._appRef = this._injector.get(h0)),
          new Us(
            a,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document,
          )
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(
        g(h_),
        g(ag),
        g(a0),
        g(m_),
        g(d_),
        g(Oe),
        g(T),
        g(Y),
        g($e),
        g(Ma),
        g(u_),
        g(n0, 8),
      );
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  g_ = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
    { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
  ],
  rg = new F('cdk-connected-overlay-scroll-strategy', {
    providedIn: 'root',
    factory: () => {
      let t = m(Ks);
      return () => t.scrollStrategies.reposition();
    },
  }),
  Gs = (() => {
    let e = class e {
      constructor(a) {
        this.elementRef = a;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'cdk-overlay-origin', ''],
          ['', 'overlay-origin', ''],
          ['', 'cdkOverlayOrigin', ''],
        ],
        exportAs: ['cdkOverlayOrigin'],
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  Zs = (() => {
    let e = class e {
      get offsetX() {
        return this._offsetX;
      }
      set offsetX(a) {
        (this._offsetX = a),
          this._position && this._updatePositionStrategy(this._position);
      }
      get offsetY() {
        return this._offsetY;
      }
      set offsetY(a) {
        (this._offsetY = a),
          this._position && this._updatePositionStrategy(this._position);
      }
      get disposeOnNavigation() {
        return this._disposeOnNavigation;
      }
      set disposeOnNavigation(a) {
        this._disposeOnNavigation = a;
      }
      constructor(a, o, n, i, s) {
        (this._overlay = a),
          (this._dir = s),
          (this._backdropSubscription = se.EMPTY),
          (this._attachSubscription = se.EMPTY),
          (this._detachSubscription = se.EMPTY),
          (this._positionSubscription = se.EMPTY),
          (this._disposeOnNavigation = !1),
          (this._ngZone = m(T)),
          (this.viewportMargin = 0),
          (this.open = !1),
          (this.disableClose = !1),
          (this.hasBackdrop = !1),
          (this.lockPosition = !1),
          (this.flexibleDimensions = !1),
          (this.growAfterOpen = !1),
          (this.push = !1),
          (this.backdropClick = new W()),
          (this.positionChange = new W()),
          (this.attach = new W()),
          (this.detach = new W()),
          (this.overlayKeydown = new W()),
          (this.overlayOutsideClick = new W()),
          (this._templatePortal = new m5(o, n)),
          (this._scrollStrategyFactory = i),
          (this.scrollStrategy = this._scrollStrategyFactory());
      }
      get overlayRef() {
        return this._overlayRef;
      }
      get dir() {
        return this._dir ? this._dir.value : 'ltr';
      }
      ngOnDestroy() {
        this._attachSubscription.unsubscribe(),
          this._detachSubscription.unsubscribe(),
          this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe(),
          this._overlayRef && this._overlayRef.dispose();
      }
      ngOnChanges(a) {
        this._position &&
          (this._updatePositionStrategy(this._position),
          this._overlayRef.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight,
          }),
          a.origin && this.open && this._position.apply()),
          a.open && (this.open ? this._attachOverlay() : this._detachOverlay());
      }
      _createOverlay() {
        (!this.positions || !this.positions.length) && (this.positions = g_);
        let a = (this._overlayRef = this._overlay.create(this._buildConfig()));
        (this._attachSubscription = a
          .attachments()
          .subscribe(() => this.attach.emit())),
          (this._detachSubscription = a
            .detachments()
            .subscribe(() => this.detach.emit())),
          a.keydownEvents().subscribe(o => {
            this.overlayKeydown.next(o),
              o.keyCode === 27 &&
                !this.disableClose &&
                !Wv(o) &&
                (o.preventDefault(), this._detachOverlay());
          }),
          this._overlayRef.outsidePointerEvents().subscribe(o => {
            let n = this._getOriginElement(),
              i = bt(o);
            (!n || (n !== i && !n.contains(i))) &&
              this.overlayOutsideClick.next(o);
          });
      }
      _buildConfig() {
        let a = (this._position =
            this.positionStrategy || this._createPositionStrategy()),
          o = new Ws({
            direction: this._dir,
            positionStrategy: a,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop,
            disposeOnNavigation: this.disposeOnNavigation,
          });
        return (
          (this.width || this.width === 0) && (o.width = this.width),
          (this.height || this.height === 0) && (o.height = this.height),
          (this.minWidth || this.minWidth === 0) &&
            (o.minWidth = this.minWidth),
          (this.minHeight || this.minHeight === 0) &&
            (o.minHeight = this.minHeight),
          this.backdropClass && (o.backdropClass = this.backdropClass),
          this.panelClass && (o.panelClass = this.panelClass),
          o
        );
      }
      _updatePositionStrategy(a) {
        let o = this.positions.map(n => ({
          originX: n.originX,
          originY: n.originY,
          overlayX: n.overlayX,
          overlayY: n.overlayY,
          offsetX: n.offsetX || this.offsetX,
          offsetY: n.offsetY || this.offsetY,
          panelClass: n.panelClass || void 0,
        }));
        return a
          .setOrigin(this._getOrigin())
          .withPositions(o)
          .withFlexibleDimensions(this.flexibleDimensions)
          .withPush(this.push)
          .withGrowAfterOpen(this.growAfterOpen)
          .withViewportMargin(this.viewportMargin)
          .withLockedPosition(this.lockPosition)
          .withTransformOriginOn(this.transformOriginSelector);
      }
      _createPositionStrategy() {
        let a = this._overlay.position().flexibleConnectedTo(this._getOrigin());
        return this._updatePositionStrategy(a), a;
      }
      _getOrigin() {
        return this.origin instanceof Gs ? this.origin.elementRef : this.origin;
      }
      _getOriginElement() {
        return this.origin instanceof Gs
          ? this.origin.elementRef.nativeElement
          : this.origin instanceof E
            ? this.origin.nativeElement
            : typeof Element < 'u' && this.origin instanceof Element
              ? this.origin
              : null;
      }
      _attachOverlay() {
        this._overlayRef
          ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
          : this._createOverlay(),
          this._overlayRef.hasAttached() ||
            this._overlayRef.attach(this._templatePortal),
          this.hasBackdrop
            ? (this._backdropSubscription = this._overlayRef
                .backdropClick()
                .subscribe(a => {
                  this.backdropClick.emit(a);
                }))
            : this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe(),
          this.positionChange.observers.length > 0 &&
            (this._positionSubscription = this._position.positionChanges
              .pipe(m3(() => this.positionChange.observers.length > 0))
              .subscribe(a => {
                this._ngZone.run(() => this.positionChange.emit(a)),
                  this.positionChange.observers.length === 0 &&
                    this._positionSubscription.unsubscribe();
              }));
      }
      _detachOverlay() {
        this._overlayRef && this._overlayRef.detach(),
          this._backdropSubscription.unsubscribe(),
          this._positionSubscription.unsubscribe();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Ks), v(Ke), v(Qe), v(rg), v($e, 8));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'cdk-connected-overlay', ''],
          ['', 'connected-overlay', ''],
          ['', 'cdkConnectedOverlay', ''],
        ],
        inputs: {
          origin: [0, 'cdkConnectedOverlayOrigin', 'origin'],
          positions: [0, 'cdkConnectedOverlayPositions', 'positions'],
          positionStrategy: [
            0,
            'cdkConnectedOverlayPositionStrategy',
            'positionStrategy',
          ],
          offsetX: [0, 'cdkConnectedOverlayOffsetX', 'offsetX'],
          offsetY: [0, 'cdkConnectedOverlayOffsetY', 'offsetY'],
          width: [0, 'cdkConnectedOverlayWidth', 'width'],
          height: [0, 'cdkConnectedOverlayHeight', 'height'],
          minWidth: [0, 'cdkConnectedOverlayMinWidth', 'minWidth'],
          minHeight: [0, 'cdkConnectedOverlayMinHeight', 'minHeight'],
          backdropClass: [
            0,
            'cdkConnectedOverlayBackdropClass',
            'backdropClass',
          ],
          panelClass: [0, 'cdkConnectedOverlayPanelClass', 'panelClass'],
          viewportMargin: [
            0,
            'cdkConnectedOverlayViewportMargin',
            'viewportMargin',
          ],
          scrollStrategy: [
            0,
            'cdkConnectedOverlayScrollStrategy',
            'scrollStrategy',
          ],
          open: [0, 'cdkConnectedOverlayOpen', 'open'],
          disableClose: [0, 'cdkConnectedOverlayDisableClose', 'disableClose'],
          transformOriginSelector: [
            0,
            'cdkConnectedOverlayTransformOriginOn',
            'transformOriginSelector',
          ],
          hasBackdrop: [2, 'cdkConnectedOverlayHasBackdrop', 'hasBackdrop', G],
          lockPosition: [
            2,
            'cdkConnectedOverlayLockPosition',
            'lockPosition',
            G,
          ],
          flexibleDimensions: [
            2,
            'cdkConnectedOverlayFlexibleDimensions',
            'flexibleDimensions',
            G,
          ],
          growAfterOpen: [
            2,
            'cdkConnectedOverlayGrowAfterOpen',
            'growAfterOpen',
            G,
          ],
          push: [2, 'cdkConnectedOverlayPush', 'push', G],
          disposeOnNavigation: [
            2,
            'cdkConnectedOverlayDisposeOnNavigation',
            'disposeOnNavigation',
            G,
          ],
        },
        outputs: {
          backdropClick: 'backdropClick',
          positionChange: 'positionChange',
          attach: 'attach',
          detach: 'detach',
          overlayKeydown: 'overlayKeydown',
          overlayOutsideClick: 'overlayOutsideClick',
        },
        exportAs: ['cdkConnectedOverlay'],
        standalone: !0,
        features: [ke, ee],
      }));
    let t = e;
    return t;
  })();
function w_(t) {
  return () => t.scrollStrategies.reposition();
}
var x_ = { provide: rg, deps: [Ks], useFactory: w_ },
  og = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({ providers: [Ks, x_], imports: [i5, $v, u8, u8] }));
    let t = e;
    return t;
  })();
var Re = (() => {
    let e = class e {};
    (e.SLOW = '0.3s'), (e.BASE = '0.2s'), (e.FAST = '0.1s');
    let t = e;
    return t;
  })(),
  n1 = (() => {
    let e = class e {};
    (e.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)'),
      (e.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)'),
      (e.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)'),
      (e.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'),
      (e.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)'),
      (e.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)'),
      (e.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)'),
      (e.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)'),
      (e.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)'),
      (e.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)'),
      (e.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)'),
      (e.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)'),
      (e.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'),
      (e.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)');
    let t = e;
    return t;
  })();
var X = (function (t) {
    return (
      (t[(t.State = 0)] = 'State'),
      (t[(t.Transition = 1)] = 'Transition'),
      (t[(t.Sequence = 2)] = 'Sequence'),
      (t[(t.Group = 3)] = 'Group'),
      (t[(t.Animate = 4)] = 'Animate'),
      (t[(t.Keyframes = 5)] = 'Keyframes'),
      (t[(t.Style = 6)] = 'Style'),
      (t[(t.Trigger = 7)] = 'Trigger'),
      (t[(t.Reference = 8)] = 'Reference'),
      (t[(t.AnimateChild = 9)] = 'AnimateChild'),
      (t[(t.AnimateRef = 10)] = 'AnimateRef'),
      (t[(t.Query = 11)] = 'Query'),
      (t[(t.Stagger = 12)] = 'Stagger'),
      t
    );
  })(X || {}),
  v0 = '*';
function We(t, e) {
  return { type: X.Trigger, name: t, definitions: e, options: {} };
}
function ie(t, e = null) {
  return { type: X.Animate, styles: e, timings: t };
}
function ig(t, e = null) {
  return { type: X.Sequence, steps: t, options: e };
}
function H(t) {
  return { type: X.Style, styles: t, offset: null };
}
function x1(t, e, r) {
  return { type: X.State, name: t, styles: e, options: r };
}
function le(t, e, r = null) {
  return { type: X.Transition, expr: t, animation: e, options: r };
}
function C8(t, e, r = null) {
  return { type: X.Query, selector: t, animation: e, options: r };
}
function z8(t, e) {
  return { type: X.Stagger, timings: t, animation: e };
}
var La = class {
    constructor(e = 0, r = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = e + r);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach(e => e()),
        (this._onDoneFns = []));
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach(e => e()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach(e => e()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(e) {
      this._position = this.totalTime ? e * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(e) {
      let r = e == 'start' ? this._onStartFns : this._onDoneFns;
      r.forEach(a => a()), (r.length = 0);
    }
  },
  v5 = class {
    constructor(e) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = e);
      let r = 0,
        a = 0,
        o = 0,
        n = this.players.length;
      n == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach(i => {
            i.onDone(() => {
              ++r == n && this._onFinish();
            }),
              i.onDestroy(() => {
                ++a == n && this._onDestroy();
              }),
              i.onStart(() => {
                ++o == n && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (i, s) => Math.max(i, s.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach(e => e()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach(e => e.init());
    }
    onStart(e) {
      this._onStartFns.push(e);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach(e => e()),
        (this._onStartFns = []));
    }
    onDone(e) {
      this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach(e => e.play());
    }
    pause() {
      this.players.forEach(e => e.pause());
    }
    restart() {
      this.players.forEach(e => e.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach(e => e.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach(e => e.destroy()),
        this._onDestroyFns.forEach(e => e()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach(e => e.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(e) {
      let r = e * this.totalTime;
      this.players.forEach(a => {
        let o = a.totalTime ? Math.min(1, r / a.totalTime) : 1;
        a.setPosition(o);
      });
    }
    getPosition() {
      let e = this.players.reduce(
        (r, a) => (r === null || a.totalTime > r.totalTime ? a : r),
        null,
      );
      return e != null ? e.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach(e => {
        e.beforeDestroy && e.beforeDestroy();
      });
    }
    triggerCallback(e) {
      let r = e == 'start' ? this._onStartFns : this._onDoneFns;
      r.forEach(a => a()), (r.length = 0);
    }
  },
  Qs = '!';
var wxt = We('collapseMotion', [
    x1('expanded', H({ height: '*' })),
    x1('collapsed', H({ height: 0, overflow: 'hidden' })),
    x1('hidden', H({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    le('expanded => collapsed', ie(`150ms ${n1.EASE_IN_OUT}`)),
    le('expanded => hidden', ie(`150ms ${n1.EASE_IN_OUT}`)),
    le('collapsed => expanded', ie(`150ms ${n1.EASE_IN_OUT}`)),
    le('hidden => expanded', ie(`150ms ${n1.EASE_IN_OUT}`)),
  ]),
  xxt = We('treeCollapseMotion', [
    le('* => *', [
      C8(
        'nz-tree-node:leave,nz-tree-builtin-node:leave',
        [
          H({ overflow: 'hidden' }),
          z8(0, [
            ie(
              `150ms ${n1.EASE_IN_OUT}`,
              H({ height: 0, opacity: 0, 'padding-bottom': 0 }),
            ),
          ]),
        ],
        { optional: !0 },
      ),
      C8(
        'nz-tree-node:enter,nz-tree-builtin-node:enter',
        [
          H({ overflow: 'hidden', height: 0, opacity: 0, 'padding-bottom': 0 }),
          z8(0, [
            ie(
              `150ms ${n1.EASE_IN_OUT}`,
              H({
                overflow: 'hidden',
                height: '*',
                opacity: '*',
                'padding-bottom': '*',
              }),
            ),
          ]),
        ],
        { optional: !0 },
      ),
    ]),
  ]);
var Fxt = We('drawerMaskMotion', [
  le(':enter', [H({ opacity: 0 }), ie(`${Re.SLOW}`, H({ opacity: 1 }))]),
  le(':leave', [H({ opacity: 1 }), ie(`${Re.SLOW}`, H({ opacity: 0 }))]),
]);
var Sxt = We('fadeMotion', [
  le('* => enter', [H({ opacity: 0 }), ie(`${Re.BASE}`, H({ opacity: 1 }))]),
  le('* => leave, :leave', [
    H({ opacity: 1 }),
    ie(`${Re.BASE}`, H({ opacity: 0 })),
  ]),
]);
var Hxt = We('helpMotion', [
  le(':enter', [
    H({ opacity: 0, transform: 'translateY(-5px)' }),
    ie(
      `${Re.SLOW} ${n1.EASE_IN_OUT}`,
      H({ opacity: 1, transform: 'translateY(0)' }),
    ),
  ]),
  le(':leave', [
    H({ opacity: 1, transform: 'translateY(0)' }),
    ie(
      `${Re.SLOW} ${n1.EASE_IN_OUT}`,
      H({ opacity: 0, transform: 'translateY(-5px)' }),
    ),
  ]),
]);
var Lxt = We('moveUpMotion', [
  le('* => enter', [
    H({ transformOrigin: '0 0', transform: 'translateY(-100%)', opacity: 0 }),
    ie(
      `${Re.BASE}`,
      H({ transformOrigin: '0 0', transform: 'translateY(0%)', opacity: 1 }),
    ),
  ]),
  le('* => leave', [
    H({ transformOrigin: '0 0', transform: 'translateY(0%)', opacity: 1 }),
    ie(
      `${Re.BASE}`,
      H({ transformOrigin: '0 0', transform: 'translateY(-100%)', opacity: 0 }),
    ),
  ]),
]);
var Bxt = We('notificationMotion', [
  x1('enterRight', H({ opacity: 1, transform: 'translateX(0)' })),
  le('* => enterRight', [
    H({ opacity: 0, transform: 'translateX(5%)' }),
    ie('100ms linear'),
  ]),
  x1('enterLeft', H({ opacity: 1, transform: 'translateX(0)' })),
  le('* => enterLeft', [
    H({ opacity: 0, transform: 'translateX(-5%)' }),
    ie('100ms linear'),
  ]),
  x1('enterTop', H({ opacity: 1, transform: 'translateY(0)' })),
  le('* => enterTop', [
    H({ opacity: 0, transform: 'translateY(-5%)' }),
    ie('100ms linear'),
  ]),
  x1('enterBottom', H({ opacity: 1, transform: 'translateY(0)' })),
  le('* => enterBottom', [
    H({ opacity: 0, transform: 'translateY(5%)' }),
    ie('100ms linear'),
  ]),
  x1(
    'leave',
    H({ opacity: 0, transform: 'scaleY(0.8)', transformOrigin: '0% 0%' }),
  ),
  le('* => leave', [
    H({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
    ie('100ms linear'),
  ]),
]);
var M_ = `${Re.BASE} ${n1.EASE_OUT_QUINT}`,
  y_ = `${Re.BASE} ${n1.EASE_IN_QUINT}`,
  qxt = We('slideMotion', [
    x1('void', H({ opacity: 0, transform: 'scaleY(0.8)' })),
    x1('enter', H({ opacity: 1, transform: 'scaleY(1)' })),
    le('void => *', [ie(M_)]),
    le('* => void', [ie(y_)]),
  ]),
  jxt = We('slideAlertMotion', [
    le(':leave', [
      H({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
      ie(
        `${Re.SLOW} ${n1.EASE_IN_OUT_CIRC}`,
        H({ opacity: 0, transform: 'scaleY(0)', transformOrigin: '0% 0%' }),
      ),
    ]),
  ]);
var Wxt = We('tabSwitchMotion', [
  x1('leave', H({ display: 'none' })),
  le('* => enter', [H({ display: 'block', opacity: 0 }), ie(Re.SLOW)]),
  le('* => leave, :leave', [
    H({ position: 'absolute', top: 0, left: 0, width: '100%' }),
    ie(Re.SLOW, H({ opacity: 0 })),
    H({ display: 'none' }),
  ]),
]);
var Qxt = We('thumbMotion', [
  x1(
    'from',
    H({ transform: 'translateX({{ transform }}px)', width: '{{ width }}px' }),
    { params: { transform: 0, width: 0 } },
  ),
  x1(
    'to',
    H({ transform: 'translateX({{ transform }}px)', width: '{{ width }}px' }),
    { params: { transform: 100, width: 0 } },
  ),
  le('from => to', ie(`300ms ${n1.EASE_IN_OUT}`)),
]);
var sg = We('zoomBigMotion', [
    le('void => active', [
      H({ opacity: 0, transform: 'scale(0.8)' }),
      ie(
        `${Re.BASE} ${n1.EASE_OUT_CIRC}`,
        H({ opacity: 1, transform: 'scale(1)' }),
      ),
    ]),
    le('active => void', [
      H({ opacity: 1, transform: 'scale(1)' }),
      ie(
        `${Re.BASE} ${n1.EASE_IN_OUT_CIRC}`,
        H({ opacity: 0, transform: 'scale(0.8)' }),
      ),
    ]),
  ]),
  tMt = We('zoomBadgeMotion', [
    le(':enter', [
      H({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
      ie(
        `${Re.SLOW} ${n1.EASE_OUT_BACK}`,
        H({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
      ),
    ]),
    le(':leave', [
      H({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
      ie(
        `${Re.SLOW} ${n1.EASE_IN_BACK}`,
        H({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
      ),
    ]),
  ]);
function lg(t) {
  return new y(3e3, !1);
}
function b_() {
  return new y(3100, !1);
}
function F_() {
  return new y(3101, !1);
}
function C_(t) {
  return new y(3001, !1);
}
function z_(t) {
  return new y(3003, !1);
}
function A_(t) {
  return new y(3004, !1);
}
function S_(t, e) {
  return new y(3005, !1);
}
function V_() {
  return new y(3006, !1);
}
function D_() {
  return new y(3007, !1);
}
function __(t, e) {
  return new y(3008, !1);
}
function H_(t) {
  return new y(3002, !1);
}
function E_(t, e, r, a, o) {
  return new y(3010, !1);
}
function T_() {
  return new y(3011, !1);
}
function k_() {
  return new y(3012, !1);
}
function L_() {
  return new y(3200, !1);
}
function I_() {
  return new y(3202, !1);
}
function P_() {
  return new y(3013, !1);
}
function B_(t) {
  return new y(3014, !1);
}
function O_(t) {
  return new y(3015, !1);
}
function N_(t) {
  return new y(3016, !1);
}
function R_(t, e) {
  return new y(3404, !1);
}
function q_(t) {
  return new y(3502, !1);
}
function j_(t) {
  return new y(3503, !1);
}
function Y_() {
  return new y(3300, !1);
}
function U_(t) {
  return new y(3504, !1);
}
function $_(t) {
  return new y(3301, !1);
}
function W_(t, e) {
  return new y(3302, !1);
}
function G_(t) {
  return new y(3303, !1);
}
function K_(t, e) {
  return new y(3400, !1);
}
function Z_(t) {
  return new y(3401, !1);
}
function Q_(t) {
  return new y(3402, !1);
}
function X_(t, e) {
  return new y(3505, !1);
}
function Ia(t) {
  switch (t.length) {
    case 0:
      return new La();
    case 1:
      return t[0];
    default:
      return new v5(t);
  }
}
function bg(t, e, r = new Map(), a = new Map()) {
  let o = [],
    n = [],
    i = -1,
    s = null;
  if (
    (e.forEach(l => {
      let c = l.get('offset'),
        h = c == i,
        d = (h && s) || new Map();
      l.forEach((u, p) => {
        let f = p,
          x = u;
        if (p !== 'offset')
          switch (((f = t.normalizePropertyName(f, o)), x)) {
            case Qs:
              x = r.get(p);
              break;
            case v0:
              x = a.get(p);
              break;
            default:
              x = t.normalizeStyleValue(p, f, x, o);
              break;
          }
        d.set(f, x);
      }),
        h || n.push(d),
        (s = d),
        (i = c);
    }),
    o.length)
  )
    throw q_(o);
  return n;
}
function G8(t, e, r, a) {
  switch (e) {
    case 'start':
      t.onStart(() => a(r && A8(r, 'start', t)));
      break;
    case 'done':
      t.onDone(() => a(r && A8(r, 'done', t)));
      break;
    case 'destroy':
      t.onDestroy(() => a(r && A8(r, 'destroy', t)));
      break;
  }
}
function A8(t, e, r) {
  let a = r.totalTime,
    o = !!r.disabled,
    n = K8(
      t.element,
      t.triggerName,
      t.fromState,
      t.toState,
      e || t.phaseName,
      a ?? t.totalTime,
      o,
    ),
    i = t._data;
  return i != null && (n._data = i), n;
}
function K8(t, e, r, a, o = '', n = 0, i) {
  return {
    element: t,
    triggerName: e,
    fromState: r,
    toState: a,
    phaseName: o,
    totalTime: n,
    disabled: !!i,
  };
}
function lt(t, e, r) {
  let a = t.get(e);
  return a || t.set(e, (a = r)), a;
}
function cg(t) {
  let e = t.indexOf(':'),
    r = t.substring(1, e),
    a = t.slice(e + 1);
  return [r, a];
}
var J_ = typeof document > 'u' ? null : document.documentElement;
function Z8(t) {
  let e = t.parentNode || t.host || null;
  return e === J_ ? null : e;
}
function eH(t) {
  return t.substring(1, 6) == 'ebkit';
}
var zr = null,
  hg = !1;
function tH(t) {
  zr ||
    ((zr = aH() || {}), (hg = zr.style ? 'WebkitAppearance' in zr.style : !1));
  let e = !0;
  return (
    zr.style &&
      !eH(t) &&
      ((e = t in zr.style),
      !e &&
        hg &&
        (e = 'Webkit' + t.charAt(0).toUpperCase() + t.slice(1) in zr.style)),
    e
  );
}
function aH() {
  return typeof document < 'u' ? document.body : null;
}
function Fg(t, e) {
  for (; e; ) {
    if (e === t) return !0;
    e = Z8(e);
  }
  return !1;
}
function Cg(t, e, r) {
  if (r) return Array.from(t.querySelectorAll(e));
  let a = t.querySelector(e);
  return a ? [a] : [];
}
var Q8 = (() => {
    let e = class e {
      validateStyleProperty(a) {
        return tH(a);
      }
      containsElement(a, o) {
        return Fg(a, o);
      }
      getParentElement(a) {
        return Z8(a);
      }
      query(a, o, n) {
        return Cg(a, o, n);
      }
      computeStyle(a, o, n) {
        return n || '';
      }
      animate(a, o, n, i, s, l = [], c) {
        return new La(n, i);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac }));
    let t = e;
    return t;
  })(),
  t7 = class t7 {};
t7.NOOP = new Q8();
var Vr = t7,
  Dr = class {};
var rH = 1e3,
  zg = '{{',
  oH = '}}',
  Ag = 'ng-enter',
  E8 = 'ng-leave',
  Xs = 'ng-trigger',
  rl = '.ng-trigger',
  dg = 'ng-animating',
  T8 = '.ng-animating';
function Z0(t) {
  if (typeof t == 'number') return t;
  let e = t.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : k8(parseFloat(e[1]), e[2]);
}
function k8(t, e) {
  switch (e) {
    case 's':
      return t * rH;
    default:
      return t;
  }
}
function ol(t, e, r) {
  return t.hasOwnProperty('duration') ? t : nH(t, e, r);
}
function nH(t, e, r) {
  let a =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    o,
    n = 0,
    i = '';
  if (typeof t == 'string') {
    let s = t.match(a);
    if (s === null) return e.push(lg(t)), { duration: 0, delay: 0, easing: '' };
    o = k8(parseFloat(s[1]), s[2]);
    let l = s[3];
    l != null && (n = k8(parseFloat(l), s[4]));
    let c = s[5];
    c && (i = c);
  } else o = t;
  if (!r) {
    let s = !1,
      l = e.length;
    o < 0 && (e.push(b_()), (s = !0)),
      n < 0 && (e.push(F_()), (s = !0)),
      s && e.splice(l, 0, lg(t));
  }
  return { duration: o, delay: n, easing: i };
}
function iH(t) {
  return t.length
    ? t[0] instanceof Map
      ? t
      : t.map(e => new Map(Object.entries(e)))
    : [];
}
function g0(t, e, r) {
  e.forEach((a, o) => {
    let n = X8(o);
    r && !r.has(o) && r.set(o, t.style[n]), (t.style[n] = a);
  });
}
function Sr(t, e) {
  e.forEach((r, a) => {
    let o = X8(a);
    t.style[o] = '';
  });
}
function g5(t) {
  return Array.isArray(t) ? (t.length == 1 ? t[0] : ig(t)) : t;
}
function sH(t, e, r) {
  let a = e.params || {},
    o = Sg(t);
  o.length &&
    o.forEach(n => {
      a.hasOwnProperty(n) || r.push(C_(n));
    });
}
var L8 = new RegExp(`${zg}\\s*(.+?)\\s*${oH}`, 'g');
function Sg(t) {
  let e = [];
  if (typeof t == 'string') {
    let r;
    for (; (r = L8.exec(t)); ) e.push(r[1]);
    L8.lastIndex = 0;
  }
  return e;
}
function x5(t, e, r) {
  let a = `${t}`,
    o = a.replace(L8, (n, i) => {
      let s = e[i];
      return s == null && (r.push(z_(i)), (s = '')), s.toString();
    });
  return o == a ? t : o;
}
var lH = /-+([a-z0-9])/g;
function X8(t) {
  return t.replace(lH, (...e) => e[1].toUpperCase());
}
function cH(t, e) {
  return t === 0 || e === 0;
}
function hH(t, e, r) {
  if (r.size && e.length) {
    let a = e[0],
      o = [];
    if (
      (r.forEach((n, i) => {
        a.has(i) || o.push(i), a.set(i, n);
      }),
      o.length)
    )
      for (let n = 1; n < e.length; n++) {
        let i = e[n];
        o.forEach(s => i.set(s, J8(t, s)));
      }
  }
  return e;
}
function st(t, e, r) {
  switch (e.type) {
    case X.Trigger:
      return t.visitTrigger(e, r);
    case X.State:
      return t.visitState(e, r);
    case X.Transition:
      return t.visitTransition(e, r);
    case X.Sequence:
      return t.visitSequence(e, r);
    case X.Group:
      return t.visitGroup(e, r);
    case X.Animate:
      return t.visitAnimate(e, r);
    case X.Keyframes:
      return t.visitKeyframes(e, r);
    case X.Style:
      return t.visitStyle(e, r);
    case X.Reference:
      return t.visitReference(e, r);
    case X.AnimateChild:
      return t.visitAnimateChild(e, r);
    case X.AnimateRef:
      return t.visitAnimateRef(e, r);
    case X.Query:
      return t.visitQuery(e, r);
    case X.Stagger:
      return t.visitStagger(e, r);
    default:
      throw A_(e.type);
  }
}
function J8(t, e) {
  return window.getComputedStyle(t)[e];
}
var dH = new Set([
    'width',
    'height',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'left',
    'top',
    'bottom',
    'right',
    'fontSize',
    'outlineWidth',
    'outlineOffset',
    'paddingTop',
    'paddingLeft',
    'paddingBottom',
    'paddingRight',
    'marginTop',
    'marginLeft',
    'marginBottom',
    'marginRight',
    'borderRadius',
    'borderWidth',
    'borderTopWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'textIndent',
    'perspective',
  ]),
  nl = class extends Dr {
    normalizePropertyName(e, r) {
      return X8(e);
    }
    normalizeStyleValue(e, r, a, o) {
      let n = '',
        i = a.toString().trim();
      if (dH.has(r) && a !== 0 && a !== '0')
        if (typeof a == 'number') n = 'px';
        else {
          let s = a.match(/^[+-]?[\d\.]+([a-z]*)$/);
          s && s[1].length == 0 && o.push(S_(e, a));
        }
      return i + n;
    }
  };
var il = '*';
function uH(t, e) {
  let r = [];
  return (
    typeof t == 'string'
      ? t.split(/\s*,\s*/).forEach(a => pH(a, r, e))
      : r.push(t),
    r
  );
}
function pH(t, e, r) {
  if (t[0] == ':') {
    let l = fH(t, r);
    if (typeof l == 'function') {
      e.push(l);
      return;
    }
    t = l;
  }
  let a = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (a == null || a.length < 4) return r.push(O_(t)), e;
  let o = a[1],
    n = a[2],
    i = a[3];
  e.push(ug(o, i));
  let s = o == il && i == il;
  n[0] == '<' && !s && e.push(ug(i, o));
}
function fH(t, e) {
  switch (t) {
    case ':enter':
      return 'void => *';
    case ':leave':
      return '* => void';
    case ':increment':
      return (r, a) => parseFloat(a) > parseFloat(r);
    case ':decrement':
      return (r, a) => parseFloat(a) < parseFloat(r);
    default:
      return e.push(N_(t)), '* => *';
  }
}
var Js = new Set(['true', '1']),
  el = new Set(['false', '0']);
function ug(t, e) {
  let r = Js.has(t) || el.has(t),
    a = Js.has(e) || el.has(e);
  return (o, n) => {
    let i = t == il || t == o,
      s = e == il || e == n;
    return (
      !i && r && typeof o == 'boolean' && (i = o ? Js.has(t) : el.has(t)),
      !s && a && typeof n == 'boolean' && (s = n ? Js.has(e) : el.has(e)),
      i && s
    );
  };
}
var Vg = ':self',
  mH = new RegExp(`s*${Vg}s*,?`, 'g');
function Dg(t, e, r, a) {
  return new I8(t).build(e, r, a);
}
var pg = '',
  I8 = class {
    constructor(e) {
      this._driver = e;
    }
    build(e, r, a) {
      let o = new P8(r);
      return this._resetContextStyleTimingState(o), st(this, g5(e), o);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = pg),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set(pg, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, r) {
      let a = (r.queryCount = 0),
        o = (r.depCount = 0),
        n = [],
        i = [];
      return (
        e.name.charAt(0) == '@' && r.errors.push(V_()),
        e.definitions.forEach(s => {
          if ((this._resetContextStyleTimingState(r), s.type == X.State)) {
            let l = s,
              c = l.name;
            c
              .toString()
              .split(/\s*,\s*/)
              .forEach(h => {
                (l.name = h), n.push(this.visitState(l, r));
              }),
              (l.name = c);
          } else if (s.type == X.Transition) {
            let l = this.visitTransition(s, r);
            (a += l.queryCount), (o += l.depCount), i.push(l);
          } else r.errors.push(D_());
        }),
        {
          type: X.Trigger,
          name: e.name,
          states: n,
          transitions: i,
          queryCount: a,
          depCount: o,
          options: null,
        }
      );
    }
    visitState(e, r) {
      let a = this.visitStyle(e.styles, r),
        o = (e.options && e.options.params) || null;
      if (a.containsDynamicStyles) {
        let n = new Set(),
          i = o || {};
        a.styles.forEach(s => {
          s instanceof Map &&
            s.forEach(l => {
              Sg(l).forEach(c => {
                i.hasOwnProperty(c) || n.add(c);
              });
            });
        }),
          n.size && r.errors.push(__(e.name, [...n.values()]));
      }
      return {
        type: X.State,
        name: e.name,
        style: a,
        options: o ? { params: o } : null,
      };
    }
    visitTransition(e, r) {
      (r.queryCount = 0), (r.depCount = 0);
      let a = st(this, g5(e.animation), r),
        o = uH(e.expr, r.errors);
      return {
        type: X.Transition,
        matchers: o,
        animation: a,
        queryCount: r.queryCount,
        depCount: r.depCount,
        options: Ar(e.options),
      };
    }
    visitSequence(e, r) {
      return {
        type: X.Sequence,
        steps: e.steps.map(a => st(this, a, r)),
        options: Ar(e.options),
      };
    }
    visitGroup(e, r) {
      let a = r.currentTime,
        o = 0,
        n = e.steps.map(i => {
          r.currentTime = a;
          let s = st(this, i, r);
          return (o = Math.max(o, r.currentTime)), s;
        });
      return (
        (r.currentTime = o), { type: X.Group, steps: n, options: Ar(e.options) }
      );
    }
    visitAnimate(e, r) {
      let a = xH(e.timings, r.errors);
      r.currentAnimateTimings = a;
      let o,
        n = e.styles ? e.styles : H({});
      if (n.type == X.Keyframes) o = this.visitKeyframes(n, r);
      else {
        let i = e.styles,
          s = !1;
        if (!i) {
          s = !0;
          let c = {};
          a.easing && (c.easing = a.easing), (i = H(c));
        }
        r.currentTime += a.duration + a.delay;
        let l = this.visitStyle(i, r);
        (l.isEmptyStep = s), (o = l);
      }
      return (
        (r.currentAnimateTimings = null),
        { type: X.Animate, timings: a, style: o, options: null }
      );
    }
    visitStyle(e, r) {
      let a = this._makeStyleAst(e, r);
      return this._validateStyleAst(a, r), a;
    }
    _makeStyleAst(e, r) {
      let a = [],
        o = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let s of o)
        typeof s == 'string'
          ? s === v0
            ? a.push(s)
            : r.errors.push(H_(s))
          : a.push(new Map(Object.entries(s)));
      let n = !1,
        i = null;
      return (
        a.forEach(s => {
          if (
            s instanceof Map &&
            (s.has('easing') && ((i = s.get('easing')), s.delete('easing')), !n)
          ) {
            for (let l of s.values())
              if (l.toString().indexOf(zg) >= 0) {
                n = !0;
                break;
              }
          }
        }),
        {
          type: X.Style,
          styles: a,
          easing: i,
          offset: e.offset,
          containsDynamicStyles: n,
          options: null,
        }
      );
    }
    _validateStyleAst(e, r) {
      let a = r.currentAnimateTimings,
        o = r.currentTime,
        n = r.currentTime;
      a && n > 0 && (n -= a.duration + a.delay),
        e.styles.forEach(i => {
          typeof i != 'string' &&
            i.forEach((s, l) => {
              let c = r.collectedStyles.get(r.currentQuerySelector),
                h = c.get(l),
                d = !0;
              h &&
                (n != o &&
                  n >= h.startTime &&
                  o <= h.endTime &&
                  (r.errors.push(E_(l, h.startTime, h.endTime, n, o)),
                  (d = !1)),
                (n = h.startTime)),
                d && c.set(l, { startTime: n, endTime: o }),
                r.options && sH(s, r.options, r.errors);
            });
        });
    }
    visitKeyframes(e, r) {
      let a = { type: X.Keyframes, styles: [], options: null };
      if (!r.currentAnimateTimings) return r.errors.push(T_()), a;
      let o = 1,
        n = 0,
        i = [],
        s = !1,
        l = !1,
        c = 0,
        h = e.steps.map(z => {
          let L = this._makeStyleAst(z, r),
            oe = L.offset != null ? L.offset : wH(L.styles),
            U = 0;
          return (
            oe != null && (n++, (U = L.offset = oe)),
            (l = l || U < 0 || U > 1),
            (s = s || U < c),
            (c = U),
            i.push(U),
            L
          );
        });
      l && r.errors.push(k_()), s && r.errors.push(L_());
      let d = e.steps.length,
        u = 0;
      n > 0 && n < d ? r.errors.push(I_()) : n == 0 && (u = o / (d - 1));
      let p = d - 1,
        f = r.currentTime,
        x = r.currentAnimateTimings,
        b = x.duration;
      return (
        h.forEach((z, L) => {
          let oe = u > 0 ? (L == p ? 1 : u * L) : i[L],
            U = oe * b;
          (r.currentTime = f + x.delay + U),
            (x.duration = U),
            this._validateStyleAst(z, r),
            (z.offset = oe),
            a.styles.push(z);
        }),
        a
      );
    }
    visitReference(e, r) {
      return {
        type: X.Reference,
        animation: st(this, g5(e.animation), r),
        options: Ar(e.options),
      };
    }
    visitAnimateChild(e, r) {
      return r.depCount++, { type: X.AnimateChild, options: Ar(e.options) };
    }
    visitAnimateRef(e, r) {
      return {
        type: X.AnimateRef,
        animation: this.visitReference(e.animation, r),
        options: Ar(e.options),
      };
    }
    visitQuery(e, r) {
      let a = r.currentQuerySelector,
        o = e.options || {};
      r.queryCount++, (r.currentQuery = e);
      let [n, i] = vH(e.selector);
      (r.currentQuerySelector = a.length ? a + ' ' + n : n),
        lt(r.collectedStyles, r.currentQuerySelector, new Map());
      let s = st(this, g5(e.animation), r);
      return (
        (r.currentQuery = null),
        (r.currentQuerySelector = a),
        {
          type: X.Query,
          selector: n,
          limit: o.limit || 0,
          optional: !!o.optional,
          includeSelf: i,
          animation: s,
          originalSelector: e.selector,
          options: Ar(e.options),
        }
      );
    }
    visitStagger(e, r) {
      r.currentQuery || r.errors.push(P_());
      let a =
        e.timings === 'full'
          ? { duration: 0, delay: 0, easing: 'full' }
          : ol(e.timings, r.errors, !0);
      return {
        type: X.Stagger,
        animation: st(this, g5(e.animation), r),
        timings: a,
        options: null,
      };
    }
  };
function vH(t) {
  let e = !!t.split(/\s*,\s*/).find(r => r == Vg);
  return (
    e && (t = t.replace(mH, '')),
    (t = t
      .replace(/@\*/g, rl)
      .replace(/@\w+/g, r => rl + '-' + r.slice(1))
      .replace(/:animating/g, T8)),
    [t, e]
  );
}
function gH(t) {
  return t ? M({}, t) : null;
}
var P8 = class {
  constructor(e) {
    (this.errors = e),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function wH(t) {
  if (typeof t == 'string') return null;
  let e = null;
  if (Array.isArray(t))
    t.forEach(r => {
      if (r instanceof Map && r.has('offset')) {
        let a = r;
        (e = parseFloat(a.get('offset'))), a.delete('offset');
      }
    });
  else if (t instanceof Map && t.has('offset')) {
    let r = t;
    (e = parseFloat(r.get('offset'))), r.delete('offset');
  }
  return e;
}
function xH(t, e) {
  if (t.hasOwnProperty('duration')) return t;
  if (typeof t == 'number') {
    let n = ol(t, e).duration;
    return S8(n, 0, '');
  }
  let r = t;
  if (r.split(/\s+/).some(n => n.charAt(0) == '{' && n.charAt(1) == '{')) {
    let n = S8(0, 0, '');
    return (n.dynamic = !0), (n.strValue = r), n;
  }
  let o = ol(r, e);
  return S8(o.duration, o.delay, o.easing);
}
function Ar(t) {
  return (
    t ? ((t = M({}, t)), t.params && (t.params = gH(t.params))) : (t = {}), t
  );
}
function S8(t, e, r) {
  return { duration: t, delay: e, easing: r };
}
function e7(t, e, r, a, o, n, i = null, s = !1) {
  return {
    type: 1,
    element: t,
    keyframes: e,
    preStyleProps: r,
    postStyleProps: a,
    duration: o,
    delay: n,
    totalTime: o + n,
    easing: i,
    subTimeline: s,
  };
}
var M5 = class {
    constructor() {
      this._map = new Map();
    }
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, r) {
      let a = this._map.get(e);
      a || this._map.set(e, (a = [])), a.push(...r);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  MH = 1,
  yH = ':enter',
  bH = new RegExp(yH, 'g'),
  FH = ':leave',
  CH = new RegExp(FH, 'g');
function _g(t, e, r, a, o, n = new Map(), i = new Map(), s, l, c = []) {
  return new B8().buildKeyframes(t, e, r, a, o, n, i, s, l, c);
}
var B8 = class {
    buildKeyframes(e, r, a, o, n, i, s, l, c, h = []) {
      c = c || new M5();
      let d = new O8(e, r, c, o, n, h, []);
      d.options = l;
      let u = l.delay ? Z0(l.delay) : 0;
      d.currentTimeline.delayNextStep(u),
        d.currentTimeline.setStyles([i], null, d.errors, l),
        st(this, a, d);
      let p = d.timelines.filter(f => f.containsAnimation());
      if (p.length && s.size) {
        let f;
        for (let x = p.length - 1; x >= 0; x--) {
          let b = p[x];
          if (b.element === r) {
            f = b;
            break;
          }
        }
        f &&
          !f.allowOnlyTimelineStyles() &&
          f.setStyles([s], null, d.errors, l);
      }
      return p.length
        ? p.map(f => f.buildKeyframes())
        : [e7(r, [], [], [], 0, u, '', !1)];
    }
    visitTrigger(e, r) {}
    visitState(e, r) {}
    visitTransition(e, r) {}
    visitAnimateChild(e, r) {
      let a = r.subInstructions.get(r.element);
      if (a) {
        let o = r.createSubContext(e.options),
          n = r.currentTimeline.currentTime,
          i = this._visitSubInstructions(a, o, o.options);
        n != i && r.transformIntoNewTimeline(i);
      }
      r.previousNode = e;
    }
    visitAnimateRef(e, r) {
      let a = r.createSubContext(e.options);
      a.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], r, a),
        this.visitReference(e.animation, a),
        r.transformIntoNewTimeline(a.currentTimeline.currentTime),
        (r.previousNode = e);
    }
    _applyAnimationRefDelays(e, r, a) {
      for (let o of e) {
        let n = o?.delay;
        if (n) {
          let i =
            typeof n == 'number' ? n : Z0(x5(n, o?.params ?? {}, r.errors));
          a.delayNextStep(i);
        }
      }
    }
    _visitSubInstructions(e, r, a) {
      let n = r.currentTimeline.currentTime,
        i = a.duration != null ? Z0(a.duration) : null,
        s = a.delay != null ? Z0(a.delay) : null;
      return (
        i !== 0 &&
          e.forEach(l => {
            let c = r.appendInstructionToTimeline(l, i, s);
            n = Math.max(n, c.duration + c.delay);
          }),
        n
      );
    }
    visitReference(e, r) {
      r.updateOptions(e.options, !0),
        st(this, e.animation, r),
        (r.previousNode = e);
    }
    visitSequence(e, r) {
      let a = r.subContextCount,
        o = r,
        n = e.options;
      if (
        n &&
        (n.params || n.delay) &&
        ((o = r.createSubContext(n)),
        o.transformIntoNewTimeline(),
        n.delay != null)
      ) {
        o.previousNode.type == X.Style &&
          (o.currentTimeline.snapshotCurrentStyles(), (o.previousNode = sl));
        let i = Z0(n.delay);
        o.delayNextStep(i);
      }
      e.steps.length &&
        (e.steps.forEach(i => st(this, i, o)),
        o.currentTimeline.applyStylesToKeyframe(),
        o.subContextCount > a && o.transformIntoNewTimeline()),
        (r.previousNode = e);
    }
    visitGroup(e, r) {
      let a = [],
        o = r.currentTimeline.currentTime,
        n = e.options && e.options.delay ? Z0(e.options.delay) : 0;
      e.steps.forEach(i => {
        let s = r.createSubContext(e.options);
        n && s.delayNextStep(n),
          st(this, i, s),
          (o = Math.max(o, s.currentTimeline.currentTime)),
          a.push(s.currentTimeline);
      }),
        a.forEach(i => r.currentTimeline.mergeTimelineCollectedStyles(i)),
        r.transformIntoNewTimeline(o),
        (r.previousNode = e);
    }
    _visitTiming(e, r) {
      if (e.dynamic) {
        let a = e.strValue,
          o = r.params ? x5(a, r.params, r.errors) : a;
        return ol(o, r.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, r) {
      let a = (r.currentAnimateTimings = this._visitTiming(e.timings, r)),
        o = r.currentTimeline;
      a.delay && (r.incrementTime(a.delay), o.snapshotCurrentStyles());
      let n = e.style;
      n.type == X.Keyframes
        ? this.visitKeyframes(n, r)
        : (r.incrementTime(a.duration),
          this.visitStyle(n, r),
          o.applyStylesToKeyframe()),
        (r.currentAnimateTimings = null),
        (r.previousNode = e);
    }
    visitStyle(e, r) {
      let a = r.currentTimeline,
        o = r.currentAnimateTimings;
      !o && a.hasCurrentStyleProperties() && a.forwardFrame();
      let n = (o && o.easing) || e.easing;
      e.isEmptyStep
        ? a.applyEmptyStep(n)
        : a.setStyles(e.styles, n, r.errors, r.options),
        (r.previousNode = e);
    }
    visitKeyframes(e, r) {
      let a = r.currentAnimateTimings,
        o = r.currentTimeline.duration,
        n = a.duration,
        s = r.createSubContext().currentTimeline;
      (s.easing = a.easing),
        e.styles.forEach(l => {
          let c = l.offset || 0;
          s.forwardTime(c * n),
            s.setStyles(l.styles, l.easing, r.errors, r.options),
            s.applyStylesToKeyframe();
        }),
        r.currentTimeline.mergeTimelineCollectedStyles(s),
        r.transformIntoNewTimeline(o + n),
        (r.previousNode = e);
    }
    visitQuery(e, r) {
      let a = r.currentTimeline.currentTime,
        o = e.options || {},
        n = o.delay ? Z0(o.delay) : 0;
      n &&
        (r.previousNode.type === X.Style ||
          (a == 0 && r.currentTimeline.hasCurrentStyleProperties())) &&
        (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = sl));
      let i = a,
        s = r.invokeQuery(
          e.selector,
          e.originalSelector,
          e.limit,
          e.includeSelf,
          !!o.optional,
          r.errors,
        );
      r.currentQueryTotal = s.length;
      let l = null;
      s.forEach((c, h) => {
        r.currentQueryIndex = h;
        let d = r.createSubContext(e.options, c);
        n && d.delayNextStep(n),
          c === r.element && (l = d.currentTimeline),
          st(this, e.animation, d),
          d.currentTimeline.applyStylesToKeyframe();
        let u = d.currentTimeline.currentTime;
        i = Math.max(i, u);
      }),
        (r.currentQueryIndex = 0),
        (r.currentQueryTotal = 0),
        r.transformIntoNewTimeline(i),
        l &&
          (r.currentTimeline.mergeTimelineCollectedStyles(l),
          r.currentTimeline.snapshotCurrentStyles()),
        (r.previousNode = e);
    }
    visitStagger(e, r) {
      let a = r.parentContext,
        o = r.currentTimeline,
        n = e.timings,
        i = Math.abs(n.duration),
        s = i * (r.currentQueryTotal - 1),
        l = i * r.currentQueryIndex;
      switch (n.duration < 0 ? 'reverse' : n.easing) {
        case 'reverse':
          l = s - l;
          break;
        case 'full':
          l = a.currentStaggerTime;
          break;
      }
      let h = r.currentTimeline;
      l && h.delayNextStep(l);
      let d = h.currentTime;
      st(this, e.animation, r),
        (r.previousNode = e),
        (a.currentStaggerTime =
          o.currentTime - d + (o.startTime - a.currentTimeline.startTime));
    }
  },
  sl = {},
  O8 = class t {
    constructor(e, r, a, o, n, i, s, l) {
      (this._driver = e),
        (this.element = r),
        (this.subInstructions = a),
        (this._enterClassName = o),
        (this._leaveClassName = n),
        (this.errors = i),
        (this.timelines = s),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = sl),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = l || new ll(this._driver, r, 0)),
        s.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, r) {
      if (!e) return;
      let a = e,
        o = this.options;
      a.duration != null && (o.duration = Z0(a.duration)),
        a.delay != null && (o.delay = Z0(a.delay));
      let n = a.params;
      if (n) {
        let i = o.params;
        i || (i = this.options.params = {}),
          Object.keys(n).forEach(s => {
            (!r || !i.hasOwnProperty(s)) && (i[s] = x5(n[s], i, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let r = this.options.params;
        if (r) {
          let a = (e.params = {});
          Object.keys(r).forEach(o => {
            a[o] = r[o];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, r, a) {
      let o = r || this.element,
        n = new t(
          this._driver,
          o,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(o, a || 0),
        );
      return (
        (n.previousNode = this.previousNode),
        (n.currentAnimateTimings = this.currentAnimateTimings),
        (n.options = this._copyOptions()),
        n.updateOptions(e),
        (n.currentQueryIndex = this.currentQueryIndex),
        (n.currentQueryTotal = this.currentQueryTotal),
        (n.parentContext = this),
        this.subContextCount++,
        n
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = sl),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, r, a) {
      let o = {
          duration: r ?? e.duration,
          delay: this.currentTimeline.currentTime + (a ?? 0) + e.delay,
          easing: '',
        },
        n = new N8(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          o,
          e.stretchStartingKeyframe,
        );
      return this.timelines.push(n), o;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, r, a, o, n, i) {
      let s = [];
      if ((o && s.push(this.element), e.length > 0)) {
        (e = e.replace(bH, '.' + this._enterClassName)),
          (e = e.replace(CH, '.' + this._leaveClassName));
        let l = a != 1,
          c = this._driver.query(this.element, e, l);
        a !== 0 &&
          (c = a < 0 ? c.slice(c.length + a, c.length) : c.slice(0, a)),
          s.push(...c);
      }
      return !n && s.length == 0 && i.push(B_(r)), s;
    }
  },
  ll = class t {
    constructor(e, r, a, o) {
      (this._driver = e),
        (this.element = r),
        (this.startTime = a),
        (this._elementTimelineStylesLookup = o),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(r)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(r, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let r = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || r
        ? (this.forwardTime(this.currentTime + e),
          r && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, r) {
      return (
        this.applyStylesToKeyframe(),
        new t(
          this._driver,
          e,
          r || this.currentTime,
          this._elementTimelineStylesLookup,
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += MH), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, r) {
      this._localTimelineStyles.set(e, r),
        this._globalTimelineStyles.set(e, r),
        this._styleSummary.set(e, { time: this.currentTime, value: r });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set('easing', e);
      for (let [r, a] of this._globalTimelineStyles)
        this._backFill.set(r, a || v0), this._currentKeyframe.set(r, v0);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, r, a, o) {
      r && this._previousKeyframe.set('easing', r);
      let n = (o && o.params) || {},
        i = zH(e, this._globalTimelineStyles);
      for (let [s, l] of i) {
        let c = x5(l, n, a);
        this._pendingStyles.set(s, c),
          this._localTimelineStyles.has(s) ||
            this._backFill.set(s, this._globalTimelineStyles.get(s) ?? v0),
          this._updateStyle(s, c);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, r) => {
          this._currentKeyframe.set(r, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, r) => {
          this._currentKeyframe.has(r) || this._currentKeyframe.set(r, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, r] of this._localTimelineStyles)
        this._pendingStyles.set(e, r), this._updateStyle(e, r);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let r in this._currentKeyframe) e.push(r);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((r, a) => {
        let o = this._styleSummary.get(a);
        (!o || r.time > o.time) && this._updateStyle(a, r.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        r = new Set(),
        a = this._keyframes.size === 1 && this.duration === 0,
        o = [];
      this._keyframes.forEach((s, l) => {
        let c = new Map([...this._backFill, ...s]);
        c.forEach((h, d) => {
          h === Qs ? e.add(d) : h === v0 && r.add(d);
        }),
          a || c.set('offset', l / this.duration),
          o.push(c);
      });
      let n = [...e.values()],
        i = [...r.values()];
      if (a) {
        let s = o[0],
          l = new Map(s);
        s.set('offset', 0), l.set('offset', 1), (o = [s, l]);
      }
      return e7(
        this.element,
        o,
        n,
        i,
        this.duration,
        this.startTime,
        this.easing,
        !1,
      );
    }
  },
  N8 = class extends ll {
    constructor(e, r, a, o, n, i, s = !1) {
      super(e, r, i.delay),
        (this.keyframes = a),
        (this.preStyleProps = o),
        (this.postStyleProps = n),
        (this._stretchStartingKeyframe = s),
        (this.timings = {
          duration: i.duration,
          delay: i.delay,
          easing: i.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: r, duration: a, easing: o } = this.timings;
      if (this._stretchStartingKeyframe && r) {
        let n = [],
          i = a + r,
          s = r / i,
          l = new Map(e[0]);
        l.set('offset', 0), n.push(l);
        let c = new Map(e[0]);
        c.set('offset', fg(s)), n.push(c);
        let h = e.length - 1;
        for (let d = 1; d <= h; d++) {
          let u = new Map(e[d]),
            p = u.get('offset'),
            f = r + p * a;
          u.set('offset', fg(f / i)), n.push(u);
        }
        (a = i), (r = 0), (o = ''), (e = n);
      }
      return e7(
        this.element,
        e,
        this.preStyleProps,
        this.postStyleProps,
        a,
        r,
        o,
        !0,
      );
    }
  };
function fg(t, e = 3) {
  let r = Math.pow(10, e - 1);
  return Math.round(t * r) / r;
}
function zH(t, e) {
  let r = new Map(),
    a;
  return (
    t.forEach(o => {
      if (o === '*') {
        a ??= e.keys();
        for (let n of a) r.set(n, v0);
      } else for (let [n, i] of o) r.set(n, i);
    }),
    r
  );
}
function mg(t, e, r, a, o, n, i, s, l, c, h, d, u) {
  return {
    type: 0,
    element: t,
    triggerName: e,
    isRemovalTransition: o,
    fromState: r,
    fromStyles: n,
    toState: a,
    toStyles: i,
    timelines: s,
    queriedElements: l,
    preStyleProps: c,
    postStyleProps: h,
    totalTime: d,
    errors: u,
  };
}
var V8 = {},
  cl = class {
    constructor(e, r, a) {
      (this._triggerName = e), (this.ast = r), (this._stateStyles = a);
    }
    match(e, r, a, o) {
      return AH(this.ast.matchers, e, r, a, o);
    }
    buildStyles(e, r, a) {
      let o = this._stateStyles.get('*');
      return (
        e !== void 0 && (o = this._stateStyles.get(e?.toString()) || o),
        o ? o.buildStyles(r, a) : new Map()
      );
    }
    build(e, r, a, o, n, i, s, l, c, h) {
      let d = [],
        u = (this.ast.options && this.ast.options.params) || V8,
        p = (s && s.params) || V8,
        f = this.buildStyles(a, p, d),
        x = (l && l.params) || V8,
        b = this.buildStyles(o, x, d),
        z = new Set(),
        L = new Map(),
        oe = new Map(),
        U = o === 'void',
        qe = { params: Hg(x, u), delay: this.ast.options?.delay },
        ue = h ? [] : _g(e, r, this.ast.animation, n, i, f, b, qe, c, d),
        xe = 0;
      return (
        ue.forEach(je => {
          xe = Math.max(je.duration + je.delay, xe);
        }),
        d.length
          ? mg(r, this._triggerName, a, o, U, f, b, [], [], L, oe, xe, d)
          : (ue.forEach(je => {
              let fe = je.element,
                u1 = lt(L, fe, new Set());
              je.preStyleProps.forEach(p1 => u1.add(p1));
              let ct = lt(oe, fe, new Set());
              je.postStyleProps.forEach(p1 => ct.add(p1)),
                fe !== r && z.add(fe);
            }),
            mg(
              r,
              this._triggerName,
              a,
              o,
              U,
              f,
              b,
              ue,
              [...z.values()],
              L,
              oe,
              xe,
            ))
      );
    }
  };
function AH(t, e, r, a, o) {
  return t.some(n => n(e, r, a, o));
}
function Hg(t, e) {
  let r = M({}, e);
  return (
    Object.entries(t).forEach(([a, o]) => {
      o != null && (r[a] = o);
    }),
    r
  );
}
var R8 = class {
  constructor(e, r, a) {
    (this.styles = e), (this.defaultParams = r), (this.normalizer = a);
  }
  buildStyles(e, r) {
    let a = new Map(),
      o = Hg(e, this.defaultParams);
    return (
      this.styles.styles.forEach(n => {
        typeof n != 'string' &&
          n.forEach((i, s) => {
            i && (i = x5(i, o, r));
            let l = this.normalizer.normalizePropertyName(s, r);
            (i = this.normalizer.normalizeStyleValue(s, l, i, r)), a.set(s, i);
          });
      }),
      a
    );
  }
};
function SH(t, e, r) {
  return new q8(t, e, r);
}
var q8 = class {
  constructor(e, r, a) {
    (this.name = e),
      (this.ast = r),
      (this._normalizer = a),
      (this.transitionFactories = []),
      (this.states = new Map()),
      r.states.forEach(o => {
        let n = (o.options && o.options.params) || {};
        this.states.set(o.name, new R8(o.style, n, a));
      }),
      vg(this.states, 'true', '1'),
      vg(this.states, 'false', '0'),
      r.transitions.forEach(o => {
        this.transitionFactories.push(new cl(e, o, this.states));
      }),
      (this.fallbackTransition = VH(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, r, a, o) {
    return this.transitionFactories.find(i => i.match(e, r, a, o)) || null;
  }
  matchStyles(e, r, a) {
    return this.fallbackTransition.buildStyles(e, r, a);
  }
};
function VH(t, e, r) {
  let a = [(i, s) => !0],
    o = { type: X.Sequence, steps: [], options: null },
    n = {
      type: X.Transition,
      animation: o,
      matchers: a,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new cl(t, n, e);
}
function vg(t, e, r) {
  t.has(e) ? t.has(r) || t.set(r, t.get(e)) : t.has(r) && t.set(e, t.get(r));
}
var DH = new M5(),
  j8 = class {
    constructor(e, r, a) {
      (this.bodyNode = e),
        (this._driver = r),
        (this._normalizer = a),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(e, r) {
      let a = [],
        o = [],
        n = Dg(this._driver, r, a, o);
      if (a.length) throw j_(a);
      o.length && void 0, this._animations.set(e, n);
    }
    _buildPlayer(e, r, a) {
      let o = e.element,
        n = bg(this._normalizer, e.keyframes, r, a);
      return this._driver.animate(o, n, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, r, a = {}) {
      let o = [],
        n = this._animations.get(e),
        i,
        s = new Map();
      if (
        (n
          ? ((i = _g(
              this._driver,
              r,
              n,
              Ag,
              E8,
              new Map(),
              new Map(),
              a,
              DH,
              o,
            )),
            i.forEach(h => {
              let d = lt(s, h.element, new Map());
              h.postStyleProps.forEach(u => d.set(u, null));
            }))
          : (o.push(Y_()), (i = [])),
        o.length)
      )
        throw U_(o);
      s.forEach((h, d) => {
        h.forEach((u, p) => {
          h.set(p, this._driver.computeStyle(d, p, v0));
        });
      });
      let l = i.map(h => {
          let d = s.get(h.element);
          return this._buildPlayer(h, new Map(), d);
        }),
        c = Ia(l);
      return (
        this._playersById.set(e, c),
        c.onDestroy(() => this.destroy(e)),
        this.players.push(c),
        c
      );
    }
    destroy(e) {
      let r = this._getPlayer(e);
      r.destroy(), this._playersById.delete(e);
      let a = this.players.indexOf(r);
      a >= 0 && this.players.splice(a, 1);
    }
    _getPlayer(e) {
      let r = this._playersById.get(e);
      if (!r) throw $_(e);
      return r;
    }
    listen(e, r, a, o) {
      let n = K8(r, '', '', '');
      return G8(this._getPlayer(e), a, n, o), () => {};
    }
    command(e, r, a, o) {
      if (a == 'register') {
        this.register(e, o[0]);
        return;
      }
      if (a == 'create') {
        let i = o[0] || {};
        this.create(e, r, i);
        return;
      }
      let n = this._getPlayer(e);
      switch (a) {
        case 'play':
          n.play();
          break;
        case 'pause':
          n.pause();
          break;
        case 'reset':
          n.reset();
          break;
        case 'restart':
          n.restart();
          break;
        case 'finish':
          n.finish();
          break;
        case 'init':
          n.init();
          break;
        case 'setPosition':
          n.setPosition(parseFloat(o[0]));
          break;
        case 'destroy':
          this.destroy(e);
          break;
      }
    }
  },
  gg = 'ng-animate-queued',
  _H = '.ng-animate-queued',
  D8 = 'ng-animate-disabled',
  HH = '.ng-animate-disabled',
  EH = 'ng-star-inserted',
  TH = '.ng-star-inserted',
  kH = [],
  Eg = {
    namespaceId: '',
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  LH = {
    namespaceId: '',
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  Ot = '__ng_removed',
  y5 = class {
    get params() {
      return this.options.params;
    }
    constructor(e, r = '') {
      this.namespaceId = r;
      let a = e && e.hasOwnProperty('value'),
        o = a ? e.value : e;
      if (((this.value = PH(o)), a)) {
        let n = e,
          { value: i } = n,
          s = jl(n, ['value']);
        this.options = s;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let r = e.params;
      if (r) {
        let a = this.options.params;
        Object.keys(r).forEach(o => {
          a[o] == null && (a[o] = r[o]);
        });
      }
    }
  },
  w5 = 'void',
  _8 = new y5(w5),
  Y8 = class {
    constructor(e, r, a) {
      (this.id = e),
        (this.hostElement = r),
        (this._engine = a),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = 'ng-tns-' + e),
        zt(r, this._hostClassName);
    }
    listen(e, r, a, o) {
      if (!this._triggers.has(r)) throw W_(a, r);
      if (a == null || a.length == 0) throw G_(r);
      if (!BH(a)) throw K_(a, r);
      let n = lt(this._elementListeners, e, []),
        i = { name: r, phase: a, callback: o };
      n.push(i);
      let s = lt(this._engine.statesByElement, e, new Map());
      return (
        s.has(r) || (zt(e, Xs), zt(e, Xs + '-' + r), s.set(r, _8)),
        () => {
          this._engine.afterFlush(() => {
            let l = n.indexOf(i);
            l >= 0 && n.splice(l, 1), this._triggers.has(r) || s.delete(r);
          });
        }
      );
    }
    register(e, r) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, r), !0);
    }
    _getTrigger(e) {
      let r = this._triggers.get(e);
      if (!r) throw Z_(e);
      return r;
    }
    trigger(e, r, a, o = !0) {
      let n = this._getTrigger(r),
        i = new b5(this.id, r, e),
        s = this._engine.statesByElement.get(e);
      s ||
        (zt(e, Xs),
        zt(e, Xs + '-' + r),
        this._engine.statesByElement.set(e, (s = new Map())));
      let l = s.get(r),
        c = new y5(a, this.id);
      if (
        (!(a && a.hasOwnProperty('value')) && l && c.absorbOptions(l.options),
        s.set(r, c),
        l || (l = _8),
        !(c.value === w5) && l.value === c.value)
      ) {
        if (!RH(l.params, c.params)) {
          let x = [],
            b = n.matchStyles(l.value, l.params, x),
            z = n.matchStyles(c.value, c.params, x);
          x.length
            ? this._engine.reportError(x)
            : this._engine.afterFlush(() => {
                Sr(e, b), g0(e, z);
              });
        }
        return;
      }
      let u = lt(this._engine.playersByElement, e, []);
      u.forEach(x => {
        x.namespaceId == this.id &&
          x.triggerName == r &&
          x.queued &&
          x.destroy();
      });
      let p = n.matchTransition(l.value, c.value, e, c.params),
        f = !1;
      if (!p) {
        if (!o) return;
        (p = n.fallbackTransition), (f = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: r,
          transition: p,
          fromState: l,
          toState: c,
          player: i,
          isFallbackTransition: f,
        }),
        f ||
          (zt(e, gg),
          i.onStart(() => {
            Eo(e, gg);
          })),
        i.onDone(() => {
          let x = this.players.indexOf(i);
          x >= 0 && this.players.splice(x, 1);
          let b = this._engine.playersByElement.get(e);
          if (b) {
            let z = b.indexOf(i);
            z >= 0 && b.splice(z, 1);
          }
        }),
        this.players.push(i),
        u.push(i),
        i
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach(r => r.delete(e)),
        this._elementListeners.forEach((r, a) => {
          this._elementListeners.set(
            a,
            r.filter(o => o.name != e),
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let r = this._engine.playersByElement.get(e);
      r &&
        (r.forEach(a => a.destroy()), this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, r) {
      let a = this._engine.driver.query(e, rl, !0);
      a.forEach(o => {
        if (o[Ot]) return;
        let n = this._engine.fetchNamespacesByElement(o);
        n.size
          ? n.forEach(i => i.triggerLeaveAnimation(o, r, !1, !0))
          : this.clearElementCache(o);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          a.forEach(o => this.clearElementCache(o)),
        );
    }
    triggerLeaveAnimation(e, r, a, o) {
      let n = this._engine.statesByElement.get(e),
        i = new Map();
      if (n) {
        let s = [];
        if (
          (n.forEach((l, c) => {
            if ((i.set(c, l.value), this._triggers.has(c))) {
              let h = this.trigger(e, c, w5, o);
              h && s.push(h);
            }
          }),
          s.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, r, i),
            a && Ia(s).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let r = this._elementListeners.get(e),
        a = this._engine.statesByElement.get(e);
      if (r && a) {
        let o = new Set();
        r.forEach(n => {
          let i = n.name;
          if (o.has(i)) return;
          o.add(i);
          let l = this._triggers.get(i).fallbackTransition,
            c = a.get(i) || _8,
            h = new y5(w5),
            d = new b5(this.id, i, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: i,
              transition: l,
              fromState: c,
              toState: h,
              player: d,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, r) {
      let a = this._engine;
      if (
        (e.childElementCount && this._signalRemovalForInnerTriggers(e, r),
        this.triggerLeaveAnimation(e, r, !0))
      )
        return;
      let o = !1;
      if (a.totalAnimations) {
        let n = a.players.length ? a.playersByQueriedElement.get(e) : [];
        if (n && n.length) o = !0;
        else {
          let i = e;
          for (; (i = i.parentNode); )
            if (a.statesByElement.get(i)) {
              o = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), o))
        a.markElementAsRemoved(this.id, e, !1, r);
      else {
        let n = e[Ot];
        (!n || n === Eg) &&
          (a.afterFlush(() => this.clearElementCache(e)),
          a.destroyInnerAnimations(e),
          a._onRemovalComplete(e, r));
      }
    }
    insertNode(e, r) {
      zt(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let r = [];
      return (
        this._queue.forEach(a => {
          let o = a.player;
          if (o.destroyed) return;
          let n = a.element,
            i = this._elementListeners.get(n);
          i &&
            i.forEach(s => {
              if (s.name == a.triggerName) {
                let l = K8(
                  n,
                  a.triggerName,
                  a.fromState.value,
                  a.toState.value,
                );
                (l._data = e), G8(a.player, s.phase, l, s.callback);
              }
            }),
            o.markedForDestroy
              ? this._engine.afterFlush(() => {
                  o.destroy();
                })
              : r.push(a);
        }),
        (this._queue = []),
        r.sort((a, o) => {
          let n = a.transition.ast.depCount,
            i = o.transition.ast.depCount;
          return n == 0 || i == 0
            ? n - i
            : this._engine.driver.containsElement(a.element, o.element)
              ? 1
              : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach(r => r.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  U8 = class {
    _onRemovalComplete(e, r) {
      this.onRemovalComplete(e, r);
    }
    constructor(e, r, a) {
      (this.bodyNode = e),
        (this.driver = r),
        (this._normalizer = a),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (o, n) => {});
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach(r => {
          r.players.forEach(a => {
            a.queued && e.push(a);
          });
        }),
        e
      );
    }
    createNamespace(e, r) {
      let a = new Y8(e, r, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, r)
          ? this._balanceNamespaceList(a, r)
          : (this.newHostElements.set(r, a), this.collectEnterElement(r)),
        (this._namespaceLookup[e] = a)
      );
    }
    _balanceNamespaceList(e, r) {
      let a = this._namespaceList,
        o = this.namespacesByHostElement;
      if (a.length - 1 >= 0) {
        let i = !1,
          s = this.driver.getParentElement(r);
        for (; s; ) {
          let l = o.get(s);
          if (l) {
            let c = a.indexOf(l);
            a.splice(c + 1, 0, e), (i = !0);
            break;
          }
          s = this.driver.getParentElement(s);
        }
        i || a.unshift(e);
      } else a.push(e);
      return o.set(r, e), e;
    }
    register(e, r) {
      let a = this._namespaceLookup[e];
      return a || (a = this.createNamespace(e, r)), a;
    }
    registerTrigger(e, r, a) {
      let o = this._namespaceLookup[e];
      o && o.register(r, a) && this.totalAnimations++;
    }
    destroy(e, r) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let a = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(a.hostElement);
          let o = this._namespaceList.indexOf(a);
          o >= 0 && this._namespaceList.splice(o, 1),
            a.destroy(r),
            delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let r = new Set(),
        a = this.statesByElement.get(e);
      if (a) {
        for (let o of a.values())
          if (o.namespaceId) {
            let n = this._fetchNamespace(o.namespaceId);
            n && r.add(n);
          }
      }
      return r;
    }
    trigger(e, r, a, o) {
      if (tl(r)) {
        let n = this._fetchNamespace(e);
        if (n) return n.trigger(r, a, o), !0;
      }
      return !1;
    }
    insertNode(e, r, a, o) {
      if (!tl(r)) return;
      let n = r[Ot];
      if (n && n.setForRemoval) {
        (n.setForRemoval = !1), (n.setForMove = !0);
        let i = this.collectedLeaveElements.indexOf(r);
        i >= 0 && this.collectedLeaveElements.splice(i, 1);
      }
      if (e) {
        let i = this._fetchNamespace(e);
        i && i.insertNode(r, a);
      }
      o && this.collectEnterElement(r);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, r) {
      r
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), zt(e, D8))
        : this.disabledNodes.has(e) &&
          (this.disabledNodes.delete(e), Eo(e, D8));
    }
    removeNode(e, r, a) {
      if (tl(r)) {
        let o = e ? this._fetchNamespace(e) : null;
        o ? o.removeNode(r, a) : this.markElementAsRemoved(e, r, !1, a);
        let n = this.namespacesByHostElement.get(r);
        n && n.id !== e && n.removeNode(r, a);
      } else this._onRemovalComplete(r, a);
    }
    markElementAsRemoved(e, r, a, o, n) {
      this.collectedLeaveElements.push(r),
        (r[Ot] = {
          namespaceId: e,
          setForRemoval: o,
          hasAnimation: a,
          removedBeforeQueried: !1,
          previousTriggersValues: n,
        });
    }
    listen(e, r, a, o, n) {
      return tl(r) ? this._fetchNamespace(e).listen(r, a, o, n) : () => {};
    }
    _buildInstruction(e, r, a, o, n) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        a,
        o,
        e.fromState.options,
        e.toState.options,
        r,
        n,
      );
    }
    destroyInnerAnimations(e) {
      let r = this.driver.query(e, rl, !0);
      r.forEach(a => this.destroyActiveAnimationsForElement(a)),
        this.playersByQueriedElement.size != 0 &&
          ((r = this.driver.query(e, T8, !0)),
          r.forEach(a => this.finishActiveQueriedAnimationOnElement(a)));
    }
    destroyActiveAnimationsForElement(e) {
      let r = this.playersByElement.get(e);
      r &&
        r.forEach(a => {
          a.queued ? (a.markedForDestroy = !0) : a.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let r = this.playersByQueriedElement.get(e);
      r && r.forEach(a => a.finish());
    }
    whenRenderingDone() {
      return new Promise(e => {
        if (this.players.length) return Ia(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let r = e[Ot];
      if (r && r.setForRemoval) {
        if (((e[Ot] = Eg), r.namespaceId)) {
          this.destroyInnerAnimations(e);
          let a = this._fetchNamespace(r.namespaceId);
          a && a.clearElementCache(e);
        }
        this._onRemovalComplete(e, r.setForRemoval);
      }
      e.classList?.contains(D8) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, HH, !0).forEach(a => {
          this.markElementAsDisabled(a, !1);
        });
    }
    flush(e = -1) {
      let r = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((a, o) =>
            this._balanceNamespaceList(a, o),
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let a = 0; a < this.collectedEnterElements.length; a++) {
          let o = this.collectedEnterElements[a];
          zt(o, EH);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let a = [];
        try {
          r = this._flushAnimations(a, e);
        } finally {
          for (let o = 0; o < a.length; o++) a[o]();
        }
      } else
        for (let a = 0; a < this.collectedLeaveElements.length; a++) {
          let o = this.collectedLeaveElements[a];
          this.processLeaveNode(o);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach(a => a()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let a = this._whenQuietFns;
        (this._whenQuietFns = []),
          r.length
            ? Ia(r).onDone(() => {
                a.forEach(o => o());
              })
            : a.forEach(o => o());
      }
    }
    reportError(e) {
      throw Q_(e);
    }
    _flushAnimations(e, r) {
      let a = new M5(),
        o = [],
        n = new Map(),
        i = [],
        s = new Map(),
        l = new Map(),
        c = new Map(),
        h = new Set();
      this.disabledNodes.forEach(V => {
        h.add(V);
        let R = this.driver.query(V, _H, !0);
        for (let $ = 0; $ < R.length; $++) h.add(R[$]);
      });
      let d = this.bodyNode,
        u = Array.from(this.statesByElement.keys()),
        p = Mg(u, this.collectedEnterElements),
        f = new Map(),
        x = 0;
      p.forEach((V, R) => {
        let $ = Ag + x++;
        f.set(R, $), V.forEach(pe => zt(pe, $));
      });
      let b = [],
        z = new Set(),
        L = new Set();
      for (let V = 0; V < this.collectedLeaveElements.length; V++) {
        let R = this.collectedLeaveElements[V],
          $ = R[Ot];
        $ &&
          $.setForRemoval &&
          (b.push(R),
          z.add(R),
          $.hasAnimation
            ? this.driver.query(R, TH, !0).forEach(pe => z.add(pe))
            : L.add(R));
      }
      let oe = new Map(),
        U = Mg(u, Array.from(z));
      U.forEach((V, R) => {
        let $ = E8 + x++;
        oe.set(R, $), V.forEach(pe => zt(pe, $));
      }),
        e.push(() => {
          p.forEach((V, R) => {
            let $ = f.get(R);
            V.forEach(pe => Eo(pe, $));
          }),
            U.forEach((V, R) => {
              let $ = oe.get(R);
              V.forEach(pe => Eo(pe, $));
            }),
            b.forEach(V => {
              this.processLeaveNode(V);
            });
        });
      let qe = [],
        ue = [];
      for (let V = this._namespaceList.length - 1; V >= 0; V--)
        this._namespaceList[V].drainQueuedTransitions(r).forEach($ => {
          let pe = $.player,
            f1 = $.element;
          if ((qe.push(pe), this.collectedEnterElements.length)) {
            let C1 = f1[Ot];
            if (C1 && C1.setForMove) {
              if (
                C1.previousTriggersValues &&
                C1.previousTriggersValues.has($.triggerName)
              ) {
                let Ra = C1.previousTriggersValues.get($.triggerName),
                  ht = this.statesByElement.get($.element);
                if (ht && ht.has($.triggerName)) {
                  let k5 = ht.get($.triggerName);
                  (k5.value = Ra), ht.set($.triggerName, k5);
                }
              }
              pe.destroy();
              return;
            }
          }
          let Rt = !d || !this.driver.containsElement(d, f1),
            K1 = oe.get(f1),
            ea = f.get(f1),
            Ye = this._buildInstruction($, a, ea, K1, Rt);
          if (Ye.errors && Ye.errors.length) {
            ue.push(Ye);
            return;
          }
          if (Rt) {
            pe.onStart(() => Sr(f1, Ye.fromStyles)),
              pe.onDestroy(() => g0(f1, Ye.toStyles)),
              o.push(pe);
            return;
          }
          if ($.isFallbackTransition) {
            pe.onStart(() => Sr(f1, Ye.fromStyles)),
              pe.onDestroy(() => g0(f1, Ye.toStyles)),
              o.push(pe);
            return;
          }
          let y7 = [];
          Ye.timelines.forEach(C1 => {
            (C1.stretchStartingKeyframe = !0),
              this.disabledNodes.has(C1.element) || y7.push(C1);
          }),
            (Ye.timelines = y7),
            a.append(f1, Ye.timelines);
          let $w = { instruction: Ye, player: pe, element: f1 };
          i.push($w),
            Ye.queriedElements.forEach(C1 => lt(s, C1, []).push(pe)),
            Ye.preStyleProps.forEach((C1, Ra) => {
              if (C1.size) {
                let ht = l.get(Ra);
                ht || l.set(Ra, (ht = new Set())),
                  C1.forEach((k5, ql) => ht.add(ql));
              }
            }),
            Ye.postStyleProps.forEach((C1, Ra) => {
              let ht = c.get(Ra);
              ht || c.set(Ra, (ht = new Set())),
                C1.forEach((k5, ql) => ht.add(ql));
            });
        });
      if (ue.length) {
        let V = [];
        ue.forEach(R => {
          V.push(X_(R.triggerName, R.errors));
        }),
          qe.forEach(R => R.destroy()),
          this.reportError(V);
      }
      let xe = new Map(),
        je = new Map();
      i.forEach(V => {
        let R = V.element;
        a.has(R) &&
          (je.set(R, R),
          this._beforeAnimationBuild(V.player.namespaceId, V.instruction, xe));
      }),
        o.forEach(V => {
          let R = V.element;
          this._getPreviousPlayers(
            R,
            !1,
            V.namespaceId,
            V.triggerName,
            null,
          ).forEach(pe => {
            lt(xe, R, []).push(pe), pe.destroy();
          });
        });
      let fe = b.filter(V => yg(V, l, c)),
        u1 = new Map();
      xg(u1, this.driver, L, c, v0).forEach(V => {
        yg(V, l, c) && fe.push(V);
      });
      let p1 = new Map();
      p.forEach((V, R) => {
        xg(p1, this.driver, new Set(V), l, Qs);
      }),
        fe.forEach(V => {
          let R = u1.get(V),
            $ = p1.get(V);
          u1.set(
            V,
            new Map([...(R?.entries() ?? []), ...($?.entries() ?? [])]),
          );
        });
      let J0 = [],
        Oa = [],
        Na = {};
      i.forEach(V => {
        let { element: R, player: $, instruction: pe } = V;
        if (a.has(R)) {
          if (h.has(R)) {
            $.onDestroy(() => g0(R, pe.toStyles)),
              ($.disabled = !0),
              $.overrideTotalTime(pe.totalTime),
              o.push($);
            return;
          }
          let f1 = Na;
          if (je.size > 1) {
            let K1 = R,
              ea = [];
            for (; (K1 = K1.parentNode); ) {
              let Ye = je.get(K1);
              if (Ye) {
                f1 = Ye;
                break;
              }
              ea.push(K1);
            }
            ea.forEach(Ye => je.set(Ye, f1));
          }
          let Rt = this._buildAnimation($.namespaceId, pe, xe, n, p1, u1);
          if (($.setRealPlayer(Rt), f1 === Na)) J0.push($);
          else {
            let K1 = this.playersByElement.get(f1);
            K1 && K1.length && ($.parentPlayer = Ia(K1)), o.push($);
          }
        } else
          Sr(R, pe.fromStyles),
            $.onDestroy(() => g0(R, pe.toStyles)),
            Oa.push($),
            h.has(R) && o.push($);
      }),
        Oa.forEach(V => {
          let R = n.get(V.element);
          if (R && R.length) {
            let $ = Ia(R);
            V.setRealPlayer($);
          }
        }),
        o.forEach(V => {
          V.parentPlayer ? V.syncPlayerEvents(V.parentPlayer) : V.destroy();
        });
      for (let V = 0; V < b.length; V++) {
        let R = b[V],
          $ = R[Ot];
        if ((Eo(R, E8), $ && $.hasAnimation)) continue;
        let pe = [];
        if (s.size) {
          let Rt = s.get(R);
          Rt && Rt.length && pe.push(...Rt);
          let K1 = this.driver.query(R, T8, !0);
          for (let ea = 0; ea < K1.length; ea++) {
            let Ye = s.get(K1[ea]);
            Ye && Ye.length && pe.push(...Ye);
          }
        }
        let f1 = pe.filter(Rt => !Rt.destroyed);
        f1.length ? OH(this, R, f1) : this.processLeaveNode(R);
      }
      return (
        (b.length = 0),
        J0.forEach(V => {
          this.players.push(V),
            V.onDone(() => {
              V.destroy();
              let R = this.players.indexOf(V);
              this.players.splice(R, 1);
            }),
            V.play();
        }),
        J0
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, r, a, o, n) {
      let i = [];
      if (r) {
        let s = this.playersByQueriedElement.get(e);
        s && (i = s);
      } else {
        let s = this.playersByElement.get(e);
        if (s) {
          let l = !n || n == w5;
          s.forEach(c => {
            c.queued || (!l && c.triggerName != o) || i.push(c);
          });
        }
      }
      return (
        (a || o) &&
          (i = i.filter(
            s => !((a && a != s.namespaceId) || (o && o != s.triggerName)),
          )),
        i
      );
    }
    _beforeAnimationBuild(e, r, a) {
      let o = r.triggerName,
        n = r.element,
        i = r.isRemovalTransition ? void 0 : e,
        s = r.isRemovalTransition ? void 0 : o;
      for (let l of r.timelines) {
        let c = l.element,
          h = c !== n,
          d = lt(a, c, []);
        this._getPreviousPlayers(c, h, i, s, r.toState).forEach(p => {
          let f = p.getRealPlayer();
          f.beforeDestroy && f.beforeDestroy(), p.destroy(), d.push(p);
        });
      }
      Sr(n, r.fromStyles);
    }
    _buildAnimation(e, r, a, o, n, i) {
      let s = r.triggerName,
        l = r.element,
        c = [],
        h = new Set(),
        d = new Set(),
        u = r.timelines.map(f => {
          let x = f.element;
          h.add(x);
          let b = x[Ot];
          if (b && b.removedBeforeQueried) return new La(f.duration, f.delay);
          let z = x !== l,
            L = NH((a.get(x) || kH).map(xe => xe.getRealPlayer())).filter(
              xe => {
                let je = xe;
                return je.element ? je.element === x : !1;
              },
            ),
            oe = n.get(x),
            U = i.get(x),
            qe = bg(this._normalizer, f.keyframes, oe, U),
            ue = this._buildPlayer(f, qe, L);
          if ((f.subTimeline && o && d.add(x), z)) {
            let xe = new b5(e, s, x);
            xe.setRealPlayer(ue), c.push(xe);
          }
          return ue;
        });
      c.forEach(f => {
        lt(this.playersByQueriedElement, f.element, []).push(f),
          f.onDone(() => IH(this.playersByQueriedElement, f.element, f));
      }),
        h.forEach(f => zt(f, dg));
      let p = Ia(u);
      return (
        p.onDestroy(() => {
          h.forEach(f => Eo(f, dg)), g0(l, r.toStyles);
        }),
        d.forEach(f => {
          lt(o, f, []).push(p);
        }),
        p
      );
    }
    _buildPlayer(e, r, a) {
      return r.length > 0
        ? this.driver.animate(e.element, r, e.duration, e.delay, e.easing, a)
        : new La(e.duration, e.delay);
    }
  },
  b5 = class {
    constructor(e, r, a) {
      (this.namespaceId = e),
        (this.triggerName = r),
        (this.element = a),
        (this._player = new La()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((r, a) => {
          r.forEach(o => G8(e, a, void 0, o));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let r = this._player;
      r.triggerCallback && e.onStart(() => r.triggerCallback('start')),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, r) {
      lt(this._queuedCallbacks, e, []).push(r);
    }
    onDone(e) {
      this.queued && this._queueEvent('done', e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent('start', e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent('destroy', e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let r = this._player;
      r.triggerCallback && r.triggerCallback(e);
    }
  };
function IH(t, e, r) {
  let a = t.get(e);
  if (a) {
    if (a.length) {
      let o = a.indexOf(r);
      a.splice(o, 1);
    }
    a.length == 0 && t.delete(e);
  }
  return a;
}
function PH(t) {
  return t ?? null;
}
function tl(t) {
  return t && t.nodeType === 1;
}
function BH(t) {
  return t == 'start' || t == 'done';
}
function wg(t, e) {
  let r = t.style.display;
  return (t.style.display = e ?? 'none'), r;
}
function xg(t, e, r, a, o) {
  let n = [];
  r.forEach(l => n.push(wg(l)));
  let i = [];
  a.forEach((l, c) => {
    let h = new Map();
    l.forEach(d => {
      let u = e.computeStyle(c, d, o);
      h.set(d, u), (!u || u.length == 0) && ((c[Ot] = LH), i.push(c));
    }),
      t.set(c, h);
  });
  let s = 0;
  return r.forEach(l => wg(l, n[s++])), i;
}
function Mg(t, e) {
  let r = new Map();
  if ((t.forEach(s => r.set(s, [])), e.length == 0)) return r;
  let a = 1,
    o = new Set(e),
    n = new Map();
  function i(s) {
    if (!s) return a;
    let l = n.get(s);
    if (l) return l;
    let c = s.parentNode;
    return r.has(c) ? (l = c) : o.has(c) ? (l = a) : (l = i(c)), n.set(s, l), l;
  }
  return (
    e.forEach(s => {
      let l = i(s);
      l !== a && r.get(l).push(s);
    }),
    r
  );
}
function zt(t, e) {
  t.classList?.add(e);
}
function Eo(t, e) {
  t.classList?.remove(e);
}
function OH(t, e, r) {
  Ia(r).onDone(() => t.processLeaveNode(e));
}
function NH(t) {
  let e = [];
  return Tg(t, e), e;
}
function Tg(t, e) {
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    a instanceof v5 ? Tg(a.players, e) : e.push(a);
  }
}
function RH(t, e) {
  let r = Object.keys(t),
    a = Object.keys(e);
  if (r.length != a.length) return !1;
  for (let o = 0; o < r.length; o++) {
    let n = r[o];
    if (!e.hasOwnProperty(n) || t[n] !== e[n]) return !1;
  }
  return !0;
}
function yg(t, e, r) {
  let a = r.get(t);
  if (!a) return !1;
  let o = e.get(t);
  return o ? a.forEach(n => o.add(n)) : e.set(t, a), r.delete(t), !0;
}
var ko = class {
  constructor(e, r, a) {
    (this._driver = r),
      (this._normalizer = a),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (o, n) => {}),
      (this._transitionEngine = new U8(e.body, r, a)),
      (this._timelineEngine = new j8(e.body, r, a)),
      (this._transitionEngine.onRemovalComplete = (o, n) =>
        this.onRemovalComplete(o, n));
  }
  registerTrigger(e, r, a, o, n) {
    let i = e + '-' + o,
      s = this._triggerCache[i];
    if (!s) {
      let l = [],
        c = [],
        h = Dg(this._driver, n, l, c);
      if (l.length) throw R_(o, l);
      c.length && void 0,
        (s = SH(o, h, this._normalizer)),
        (this._triggerCache[i] = s);
    }
    this._transitionEngine.registerTrigger(r, o, s);
  }
  register(e, r) {
    this._transitionEngine.register(e, r);
  }
  destroy(e, r) {
    this._transitionEngine.destroy(e, r);
  }
  onInsert(e, r, a, o) {
    this._transitionEngine.insertNode(e, r, a, o);
  }
  onRemove(e, r, a) {
    this._transitionEngine.removeNode(e, r, a);
  }
  disableAnimations(e, r) {
    this._transitionEngine.markElementAsDisabled(e, r);
  }
  process(e, r, a, o) {
    if (a.charAt(0) == '@') {
      let [n, i] = cg(a),
        s = o;
      this._timelineEngine.command(n, r, i, s);
    } else this._transitionEngine.trigger(e, r, a, o);
  }
  listen(e, r, a, o, n) {
    if (a.charAt(0) == '@') {
      let [i, s] = cg(a);
      return this._timelineEngine.listen(i, r, s, n);
    }
    return this._transitionEngine.listen(e, r, a, o, n);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function qH(t, e) {
  let r = null,
    a = null;
  return (
    Array.isArray(e) && e.length
      ? ((r = H8(e[0])), e.length > 1 && (a = H8(e[e.length - 1])))
      : e instanceof Map && (r = H8(e)),
    r || a ? new $8(t, r, a) : null
  );
}
var To = class To {
  constructor(e, r, a) {
    (this._element = e),
      (this._startStyles = r),
      (this._endStyles = a),
      (this._state = 0);
    let o = To.initialStylesByElement.get(e);
    o || To.initialStylesByElement.set(e, (o = new Map())),
      (this._initialStyles = o);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        g0(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (g0(this._element, this._initialStyles),
        this._endStyles &&
          (g0(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (To.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (Sr(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (Sr(this._element, this._endStyles), (this._endStyles = null)),
        g0(this._element, this._initialStyles),
        (this._state = 3));
  }
};
To.initialStylesByElement = new WeakMap();
var $8 = To;
function H8(t) {
  let e = null;
  return (
    t.forEach((r, a) => {
      jH(a) && ((e = e || new Map()), e.set(a, r));
    }),
    e
  );
}
function jH(t) {
  return t === 'display' || t === 'position';
}
var hl = class {
    constructor(e, r, a, o) {
      (this.element = e),
        (this.keyframes = r),
        (this.options = a),
        (this._specialStyles = o),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = a.duration),
        (this._delay = a.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach(e => e()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        e,
        this.options,
      )),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let r = () => this._onFinish();
      this.domPlayer.addEventListener('finish', r),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener('finish', r);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let r = [];
      return (
        e.forEach(a => {
          r.push(Object.fromEntries(a));
        }),
        r
      );
    }
    _triggerWebAnimation(e, r, a) {
      return e.animate(this._convertKeyframesToObject(r), a);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach(e => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach(e => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((a, o) => {
          o !== 'offset' && e.set(o, this._finished ? a : J8(this.element, o));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let r = e === 'start' ? this._onStartFns : this._onDoneFns;
      r.forEach(a => a()), (r.length = 0);
    }
  },
  dl = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    containsElement(e, r) {
      return Fg(e, r);
    }
    getParentElement(e) {
      return Z8(e);
    }
    query(e, r, a) {
      return Cg(e, r, a);
    }
    computeStyle(e, r, a) {
      return J8(e, r);
    }
    animate(e, r, a, o, n, i = []) {
      let s = o == 0 ? 'both' : 'forwards',
        l = { duration: a, delay: o, fill: s };
      n && (l.easing = n);
      let c = new Map(),
        h = i.filter(p => p instanceof hl);
      cH(a, o) &&
        h.forEach(p => {
          p.currentSnapshot.forEach((f, x) => c.set(x, f));
        });
      let d = iH(r).map(p => new Map(p));
      d = hH(e, d, c);
      let u = qH(e, d);
      return new hl(e, d, l, u);
    }
  };
var al = '@',
  kg = '@.disabled',
  ul = class {
    constructor(e, r, a, o) {
      (this.namespaceId = e),
        (this.delegate = r),
        (this.engine = a),
        (this._onDestroy = o),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, r) {
      return this.delegate.createElement(e, r);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, r) {
      this.delegate.appendChild(e, r),
        this.engine.onInsert(this.namespaceId, r, e, !1);
    }
    insertBefore(e, r, a, o = !0) {
      this.delegate.insertBefore(e, r, a),
        this.engine.onInsert(this.namespaceId, r, e, o);
    }
    removeChild(e, r, a) {
      this.parentNode(r) &&
        this.engine.onRemove(this.namespaceId, r, this.delegate);
    }
    selectRootElement(e, r) {
      return this.delegate.selectRootElement(e, r);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, r, a, o) {
      this.delegate.setAttribute(e, r, a, o);
    }
    removeAttribute(e, r, a) {
      this.delegate.removeAttribute(e, r, a);
    }
    addClass(e, r) {
      this.delegate.addClass(e, r);
    }
    removeClass(e, r) {
      this.delegate.removeClass(e, r);
    }
    setStyle(e, r, a, o) {
      this.delegate.setStyle(e, r, a, o);
    }
    removeStyle(e, r, a) {
      this.delegate.removeStyle(e, r, a);
    }
    setProperty(e, r, a) {
      r.charAt(0) == al && r == kg
        ? this.disableAnimations(e, !!a)
        : this.delegate.setProperty(e, r, a);
    }
    setValue(e, r) {
      this.delegate.setValue(e, r);
    }
    listen(e, r, a) {
      return this.delegate.listen(e, r, a);
    }
    disableAnimations(e, r) {
      this.engine.disableAnimations(e, r);
    }
  },
  W8 = class extends ul {
    constructor(e, r, a, o, n) {
      super(r, a, o, n), (this.factory = e), (this.namespaceId = r);
    }
    setProperty(e, r, a) {
      r.charAt(0) == al
        ? r.charAt(1) == '.' && r == kg
          ? ((a = a === void 0 ? !0 : !!a), this.disableAnimations(e, a))
          : this.engine.process(this.namespaceId, e, r.slice(1), a)
        : this.delegate.setProperty(e, r, a);
    }
    listen(e, r, a) {
      if (r.charAt(0) == al) {
        let o = YH(e),
          n = r.slice(1),
          i = '';
        return (
          n.charAt(0) != al && ([n, i] = UH(n)),
          this.engine.listen(this.namespaceId, o, n, i, s => {
            let l = s._data || -1;
            this.factory.scheduleListenerCallback(l, a, s);
          })
        );
      }
      return this.delegate.listen(e, r, a);
    }
  };
function YH(t) {
  switch (t) {
    case 'body':
      return document.body;
    case 'document':
      return document;
    case 'window':
      return window;
    default:
      return t;
  }
}
function UH(t) {
  let e = t.indexOf('.'),
    r = t.substring(0, e),
    a = t.slice(e + 1);
  return [r, a];
}
var pl = class {
  constructor(e, r, a) {
    (this.delegate = e),
      (this.engine = r),
      (this._zone = a),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (r.onRemovalComplete = (o, n) => {
        n?.removeChild(null, o);
      });
  }
  createRenderer(e, r) {
    let a = '',
      o = this.delegate.createRenderer(e, r);
    if (!e || !r?.data?.animation) {
      let c = this._rendererCache,
        h = c.get(o);
      if (!h) {
        let d = () => c.delete(o);
        (h = new ul(a, o, this.engine, d)), c.set(o, h);
      }
      return h;
    }
    let n = r.id,
      i = r.id + '-' + this._currentId;
    this._currentId++, this.engine.register(i, e);
    let s = c => {
      Array.isArray(c)
        ? c.forEach(s)
        : this.engine.registerTrigger(n, i, e, c.name, c);
    };
    return r.data.animation.forEach(s), new W8(this, i, o, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, r, a) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => r(a));
      return;
    }
    let o = this._animationCallbacksBuffer;
    o.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          o.forEach(n => {
            let [i, s] = n;
            i(s);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      o.push([r, a]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var WH = (() => {
  let e = class e extends ko {
    constructor(a, o, n) {
      super(a, o, n);
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(Y), g(Vr), g(Dr));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
function GH() {
  return new nl();
}
function KH(t, e, r) {
  return new pl(t, e, r);
}
var Lg = [
    { provide: Dr, useFactory: GH },
    { provide: ko, useClass: WH },
    { provide: Y1, useFactory: KH, deps: [os, ko, T] },
  ],
  ZH = [
    { provide: Vr, useFactory: () => new dl() },
    { provide: n0, useValue: 'BrowserAnimations' },
    ...Lg,
  ],
  DMt = [
    { provide: Vr, useClass: Q8 },
    { provide: n0, useValue: 'NoopAnimations' },
    ...Lg,
  ];
function _Mt() {
  return mt('NgEagerAnimations'), [...ZH];
}
var Lo = (() => {
  let e = class e {
    constructor() {
      (this.animationType = m(n0, { optional: !0 })), (this.nzNoAnimation = !1);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'nzNoAnimation', '']],
      hostVars: 2,
      hostBindings: function (o, n) {
        o & 2 &&
          we(
            'nz-animate-disabled',
            n.nzNoAnimation || n.animationType === 'NoopAnimations',
          );
      },
      inputs: { nzNoAnimation: [2, 'nzNoAnimation', 'nzNoAnimation', G] },
      exportAs: ['nzNoAnimation'],
      standalone: !0,
      features: [ke],
    }));
  let t = e;
  return t;
})();
var Q0 = (() => {
    let e = class e {
      static ngTemplateContextGuard(a, o) {
        return !0;
      }
      recreateView() {
        this.viewContainer.clear();
        let a = this.nzStringTemplateOutlet instanceof Ke,
          o = a ? this.nzStringTemplateOutlet : this.templateRef;
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(
          o,
          a ? this.nzStringTemplateOutletContext : this.context,
        );
      }
      updateContext() {
        let o =
            this.nzStringTemplateOutlet instanceof Ke
              ? this.nzStringTemplateOutletContext
              : this.context,
          n = this.embeddedViewRef.context;
        if (o) for (let i of Object.keys(o)) n[i] = o[i];
      }
      constructor(a, o) {
        (this.viewContainer = a),
          (this.templateRef = o),
          (this.embeddedViewRef = null),
          (this.context = new a7()),
          (this.nzStringTemplateOutletContext = null),
          (this.nzStringTemplateOutlet = null);
      }
      ngOnChanges(a) {
        let { nzStringTemplateOutletContext: o, nzStringTemplateOutlet: n } = a,
          i = () => {
            let l = !1;
            if (n)
              if (n.firstChange) l = !0;
              else {
                let d = n.previousValue instanceof Ke,
                  u = n.currentValue instanceof Ke;
                l = d || u;
              }
            return (
              (o &&
                (d => {
                  let u = Object.keys(d.previousValue || {}),
                    p = Object.keys(d.currentValue || {});
                  if (u.length === p.length) {
                    for (let f of p) if (u.indexOf(f) === -1) return !0;
                    return !1;
                  } else return !0;
                })(o)) ||
              l
            );
          };
        n && (this.context.$implicit = n.currentValue),
          i() ? this.recreateView() : this.updateContext();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Qe), v(Ke));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'nzStringTemplateOutlet', '']],
        inputs: {
          nzStringTemplateOutletContext: 'nzStringTemplateOutletContext',
          nzStringTemplateOutlet: 'nzStringTemplateOutlet',
        },
        exportAs: ['nzStringTemplateOutlet'],
        standalone: !0,
        features: [ee],
      }));
    let t = e;
    return t;
  })(),
  a7 = class {};
var X0 = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var M1 = {
    top: new Ne(
      { originX: 'center', originY: 'top' },
      { overlayX: 'center', overlayY: 'bottom' },
    ),
    topCenter: new Ne(
      { originX: 'center', originY: 'top' },
      { overlayX: 'center', overlayY: 'bottom' },
    ),
    topLeft: new Ne(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' },
    ),
    topRight: new Ne(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' },
    ),
    right: new Ne(
      { originX: 'end', originY: 'center' },
      { overlayX: 'start', overlayY: 'center' },
    ),
    rightTop: new Ne(
      { originX: 'end', originY: 'top' },
      { overlayX: 'start', overlayY: 'top' },
    ),
    rightBottom: new Ne(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'bottom' },
    ),
    bottom: new Ne(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'top' },
    ),
    bottomCenter: new Ne(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'top' },
    ),
    bottomLeft: new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' },
    ),
    bottomRight: new Ne(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' },
    ),
    left: new Ne(
      { originX: 'start', originY: 'center' },
      { overlayX: 'end', overlayY: 'center' },
    ),
    leftTop: new Ne(
      { originX: 'start', originY: 'top' },
      { overlayX: 'end', overlayY: 'top' },
    ),
    leftBottom: new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'bottom' },
    ),
  },
  r7 = [M1.top, M1.right, M1.bottom, M1.left],
  nyt = [
    M1.bottomLeft,
    M1.bottomRight,
    M1.topLeft,
    M1.topRight,
    M1.topCenter,
    M1.bottomCenter,
  ],
  iyt = [
    new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'bottom' },
    ),
    new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'bottom' },
    ),
  ],
  syt = [
    M1.bottomLeft,
    new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' },
    ),
  ];
function vl(t) {
  for (let e in M1)
    if (
      t.connectionPair.originX === M1[e].originX &&
      t.connectionPair.originY === M1[e].originY &&
      t.connectionPair.overlayX === M1[e].overlayX &&
      t.connectionPair.overlayY === M1[e].overlayY
    )
      return e;
}
var ml = {
    bottomLeft: new Ne(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' },
      void 0,
      2,
    ),
    topLeft: new Ne(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' },
      void 0,
      -2,
    ),
    bottomRight: new Ne(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' },
      void 0,
      2,
    ),
    topRight: new Ne(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' },
      void 0,
      -2,
    ),
  },
  lyt = [ml.bottomLeft, ml.topLeft, ml.bottomRight, ml.topRight];
var Ig = (() => {
  let e = class e {
    constructor(a, o) {
      (this.cdkConnectedOverlay = a),
        (this.nzDestroyService = o),
        (this.nzArrowPointAtCenter = !1),
        (this.cdkConnectedOverlay.backdropClass =
          'nz-overlay-transparent-backdrop'),
        this.cdkConnectedOverlay.positionChange
          .pipe(S(this.nzDestroyService))
          .subscribe(n => {
            this.nzArrowPointAtCenter && this.updateArrowPosition(n);
          });
    }
    updateArrowPosition(a) {
      let o = this.getOriginRect(),
        n = vl(a),
        i = 0,
        s = 0;
      n === 'topLeft' || n === 'bottomLeft'
        ? (i = o.width / 2 - 14)
        : n === 'topRight' || n === 'bottomRight'
          ? (i = -(o.width / 2 - 14))
          : n === 'leftTop' || n === 'rightTop'
            ? (s = o.height / 2 - 10)
            : (n === 'leftBottom' || n === 'rightBottom') &&
              (s = -(o.height / 2 - 10)),
        (this.cdkConnectedOverlay.offsetX !== i ||
          this.cdkConnectedOverlay.offsetY !== s) &&
          ((this.cdkConnectedOverlay.offsetY = s),
          (this.cdkConnectedOverlay.offsetX = i),
          this.cdkConnectedOverlay.overlayRef.updatePosition());
    }
    getFlexibleConnectedPositionStrategyOrigin() {
      return this.cdkConnectedOverlay.origin instanceof Gs
        ? this.cdkConnectedOverlay.origin.elementRef
        : this.cdkConnectedOverlay.origin;
    }
    getOriginRect() {
      let a = this.getFlexibleConnectedPositionStrategyOrigin();
      if (a instanceof E) return a.nativeElement.getBoundingClientRect();
      if (a instanceof Element) return a.getBoundingClientRect();
      let o = a.width || 0,
        n = a.height || 0;
      return {
        top: a.y,
        bottom: a.y + n,
        left: a.x,
        right: a.x + o,
        height: n,
        width: o,
      };
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(Zs), v(_a));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['', 'cdkConnectedOverlay', '', 'nzConnectedOverlay', '']],
      inputs: {
        nzArrowPointAtCenter: [
          2,
          'nzArrowPointAtCenter',
          'nzArrowPointAtCenter',
          G,
        ],
      },
      exportAs: ['nzConnectedOverlay'],
      features: [h1([_a]), ke],
    }));
  let t = e;
  return t;
})();
var Pg = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
function Myt(t, e) {
  e && (t._host.style.zIndex = `${e}`);
}
var XH = ['overlay'],
  Bg = (() => {
    let e = class e {
      get _title() {
        return this.title || this.directiveTitle || null;
      }
      get _content() {
        return this.content || this.directiveContent || null;
      }
      get _trigger() {
        return typeof this.trigger < 'u' ? this.trigger : 'hover';
      }
      get _placement() {
        let a = this.placement;
        return Array.isArray(a) && a.length > 0
          ? a
          : typeof a == 'string' && a
            ? [a]
            : ['top'];
      }
      get _visible() {
        return (
          (typeof this.visible < 'u' ? this.visible : this.internalVisible) ||
          !1
        );
      }
      get _mouseEnterDelay() {
        return this.mouseEnterDelay || 0.15;
      }
      get _mouseLeaveDelay() {
        return this.mouseLeaveDelay || 0.1;
      }
      get _overlayClassName() {
        return this.overlayClassName || null;
      }
      get _overlayStyle() {
        return this.overlayStyle || null;
      }
      getProxyPropertyMap() {
        return { noAnimation: ['noAnimation', () => !!this.noAnimation] };
      }
      constructor(a) {
        (this.componentType = a),
          (this.visibleChange = new W()),
          (this.internalVisible = !1),
          (this.destroy$ = new C()),
          (this.triggerDisposables = []),
          (this.elementRef = m(E)),
          (this.hostView = m(Qe)),
          (this.renderer = m(Ce)),
          (this.noAnimation = m(Lo, { host: !0, optional: !0 })),
          (this.nzConfigService = m(Ta)),
          (this.platformId = m(V1));
      }
      ngAfterViewInit() {
        Fn(this.platformId) &&
          (this.createComponent(), this.registerTriggers());
      }
      ngOnChanges(a) {
        let { trigger: o } = a;
        o && !o.isFirstChange() && this.registerTriggers(),
          this.component && this.updatePropertiesByChanges(a);
      }
      ngOnDestroy() {
        this.destroy$.next(),
          this.destroy$.complete(),
          this.clearTogglingTimer(),
          this.removeTriggerListeners();
      }
      show() {
        this.component?.show();
      }
      hide() {
        this.component?.hide();
      }
      updatePosition() {
        this.component && this.component.updatePosition();
      }
      createComponent() {
        let a = this.hostView.createComponent(this.componentType);
        (this.component = a.instance),
          this.renderer.removeChild(
            this.renderer.parentNode(this.elementRef.nativeElement),
            a.location.nativeElement,
          ),
          this.component.setOverlayOrigin(this.origin || this.elementRef),
          this.initProperties();
        let o = this.component.nzVisibleChange.pipe(z1());
        o.pipe(S(this.destroy$)).subscribe(n => {
          (this.internalVisible = n), this.visibleChange.emit(n);
        }),
          o
            .pipe(
              me(n => n),
              h3(0, y0),
              me(() => !!this.component?.overlay?.overlayRef),
              S(this.destroy$),
            )
            .subscribe(() => {
              this.component?.updatePosition();
            });
      }
      registerTriggers() {
        let a = this.elementRef.nativeElement,
          o = this.trigger;
        if ((this.removeTriggerListeners(), o === 'hover')) {
          let n;
          this.triggerDisposables.push(
            this.renderer.listen(a, 'mouseenter', () => {
              this.delayEnterLeave(!0, !0, this._mouseEnterDelay);
            }),
          ),
            this.triggerDisposables.push(
              this.renderer.listen(a, 'mouseleave', () => {
                this.delayEnterLeave(!0, !1, this._mouseLeaveDelay),
                  this.component?.overlay.overlayRef &&
                    !n &&
                    ((n = this.component.overlay.overlayRef.overlayElement),
                    this.triggerDisposables.push(
                      this.renderer.listen(n, 'mouseenter', () => {
                        this.delayEnterLeave(!1, !0, this._mouseEnterDelay);
                      }),
                    ),
                    this.triggerDisposables.push(
                      this.renderer.listen(n, 'mouseleave', () => {
                        this.delayEnterLeave(!1, !1, this._mouseLeaveDelay);
                      }),
                    ));
              }),
            );
        } else
          o === 'focus'
            ? (this.triggerDisposables.push(
                this.renderer.listen(a, 'focusin', () => this.show()),
              ),
              this.triggerDisposables.push(
                this.renderer.listen(a, 'focusout', () => this.hide()),
              ))
            : o === 'click' &&
              this.triggerDisposables.push(
                this.renderer.listen(a, 'click', n => {
                  n.preventDefault(), this.show();
                }),
              );
      }
      updatePropertiesByChanges(a) {
        this.updatePropertiesByKeys(Object.keys(a));
      }
      updatePropertiesByKeys(a) {
        let o = M(
          {
            title: ['nzTitle', () => this._title],
            directiveTitle: ['nzTitle', () => this._title],
            content: ['nzContent', () => this._content],
            directiveContent: ['nzContent', () => this._content],
            trigger: ['nzTrigger', () => this._trigger],
            placement: ['nzPlacement', () => this._placement],
            visible: ['nzVisible', () => this._visible],
            mouseEnterDelay: ['nzMouseEnterDelay', () => this._mouseEnterDelay],
            mouseLeaveDelay: ['nzMouseLeaveDelay', () => this._mouseLeaveDelay],
            overlayClassName: [
              'nzOverlayClassName',
              () => this._overlayClassName,
            ],
            overlayStyle: ['nzOverlayStyle', () => this._overlayStyle],
            arrowPointAtCenter: [
              'nzArrowPointAtCenter',
              () => this.arrowPointAtCenter,
            ],
            cdkConnectedOverlayPush: [
              'cdkConnectedOverlayPush',
              () => this.cdkConnectedOverlayPush,
            ],
          },
          this.getProxyPropertyMap(),
        );
        (a || Object.keys(o).filter(n => !n.startsWith('directive'))).forEach(
          n => {
            if (o[n]) {
              let [i, s] = o[n];
              this.updateComponentValue(i, s());
            }
          },
        ),
          this.component?.updateByDirective();
      }
      initProperties() {
        this.updatePropertiesByKeys();
      }
      updateComponentValue(a, o) {
        typeof o < 'u' && (this.component[a] = o);
      }
      delayEnterLeave(a, o, n = -1) {
        this.delayTimer
          ? this.clearTogglingTimer()
          : n > 0
            ? (this.delayTimer = setTimeout(() => {
                (this.delayTimer = void 0), o ? this.show() : this.hide();
              }, n * 1e3))
            : o && a
              ? this.show()
              : this.hide();
      }
      removeTriggerListeners() {
        this.triggerDisposables.forEach(a => a()),
          (this.triggerDisposables.length = 0);
      }
      clearTogglingTimer() {
        this.delayTimer &&
          (clearTimeout(this.delayTimer), (this.delayTimer = void 0));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Ou));
    }),
      (e.ɵdir = _({ type: e, features: [ee] }));
    let t = e;
    return t;
  })(),
  Og = (() => {
    let e = class e {
      constructor() {
        (this.noAnimation = m(Lo, { host: !0, optional: !0 })),
          (this.cdr = m(_e)),
          (this.directionality = m($e)),
          (this.nzTitle = null),
          (this.nzContent = null),
          (this.nzArrowPointAtCenter = !1),
          (this.nzOverlayStyle = {}),
          (this.nzBackdrop = !1),
          (this.cdkConnectedOverlayPush = !0),
          (this.nzVisibleChange = new C()),
          (this._visible = !1),
          (this._trigger = 'hover'),
          (this.preferredPlacement = 'top'),
          (this.dir = 'ltr'),
          (this._classMap = {}),
          (this._prefix = 'ant-tooltip'),
          (this._positions = [...r7]),
          (this.destroy$ = new C());
      }
      set nzVisible(a) {
        let o = I9(a);
        this._visible !== o &&
          ((this._visible = o), this.nzVisibleChange.next(o));
      }
      get nzVisible() {
        return this._visible;
      }
      set nzTrigger(a) {
        this._trigger = a;
      }
      get nzTrigger() {
        return this._trigger;
      }
      set nzPlacement(a) {
        let o = a.map(n => M1[n]);
        this._positions = [...o, ...r7];
      }
      ngOnInit() {
        this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
          (this.dir = a), this.cdr.detectChanges();
        }),
          (this.dir = this.directionality.value);
      }
      ngOnDestroy() {
        this.nzVisibleChange.complete(),
          this.destroy$.next(),
          this.destroy$.complete();
      }
      show() {
        this.nzVisible ||
          (this.isEmpty() ||
            ((this.nzVisible = !0),
            this.nzVisibleChange.next(!0),
            this.cdr.detectChanges()),
          this.origin &&
            this.overlay &&
            this.overlay.overlayRef &&
            this.overlay.overlayRef.getDirection() === 'rtl' &&
            this.overlay.overlayRef.setDirection('ltr'));
      }
      hide() {
        this.nzVisible &&
          ((this.nzVisible = !1),
          this.nzVisibleChange.next(!1),
          this.cdr.detectChanges());
      }
      updateByDirective() {
        this.updateStyles(),
          this.cdr.detectChanges(),
          Promise.resolve().then(() => {
            this.updatePosition(), this.updateVisibilityByTitle();
          });
      }
      updatePosition() {
        this.origin &&
          this.overlay &&
          this.overlay.overlayRef &&
          this.overlay.overlayRef.updatePosition();
      }
      onPositionChange(a) {
        (this.preferredPlacement = vl(a)),
          this.updateStyles(),
          this.cdr.detectChanges();
      }
      setOverlayOrigin(a) {
        (this.origin = a), this.cdr.markForCheck();
      }
      onClickOutside(a) {
        let o = bt(a);
        !this.origin.nativeElement.contains(o) &&
          this.nzTrigger !== null &&
          this.hide();
      }
      updateVisibilityByTitle() {
        this.isEmpty() && this.hide();
      }
      updateStyles() {
        this._classMap = {
          [this.nzOverlayClassName]: !0,
          [`${this._prefix}-placement-${this.preferredPlacement}`]: !0,
        };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _({
        type: e,
        viewQuery: function (o, n) {
          if ((o & 1 && rt(XH, 5), o & 2)) {
            let i;
            v1((i = g1())) && (n.overlay = i.first);
          }
        },
      }));
    let t = e;
    return t;
  })();
function Ng(t) {
  return t instanceof Ke ? !1 : t === '' || !yt(t);
}
function JH(t, e) {
  if ((t & 1 && (s0(0), c0(1), l0()), t & 2)) {
    let r = ae(2);
    de(), yn(r.nzTitle);
  }
}
function eE(t, e) {
  if (
    (t & 1 &&
      (Xe(0, 'div', 2)(1, 'div', 3)(2, 'div', 4),
      Le(3, 'span', 5),
      Je(),
      Xe(4, 'div', 6),
      ge(5, JH, 2, 1, 'ng-container', 7),
      Je()()()),
    t & 2)
  ) {
    let r = ae();
    we('ant-tooltip-rtl', r.dir === 'rtl'),
      he('ngClass', r._classMap)('ngStyle', r.nzOverlayStyle)(
        '@.disabled',
        !!(r.noAnimation != null && r.noAnimation.nzNoAnimation),
      )(
        'nzNoAnimation',
        r.noAnimation == null ? null : r.noAnimation.nzNoAnimation,
      )('@zoomBigMotion', 'active'),
      de(3),
      he('ngStyle', r._contentStyleMap),
      de(),
      he('ngStyle', r._contentStyleMap),
      de(),
      he('nzStringTemplateOutlet', r.nzTitle)(
        'nzStringTemplateOutletContext',
        r.nzTitleContext,
      );
  }
}
var gl = (() => {
    let e = class e extends Bg {
      constructor() {
        super(o7),
          (this.titleContext = null),
          (this.trigger = 'hover'),
          (this.placement = 'top'),
          (this.cdkConnectedOverlayPush = !0),
          (this.visibleChange = new W());
      }
      getProxyPropertyMap() {
        return Q(M({}, super.getProxyPropertyMap()), {
          nzTooltipColor: ['nzColor', () => this.nzTooltipColor],
          titleContext: ['nzTitleContext', () => this.titleContext],
        });
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'nz-tooltip', '']],
        hostVars: 2,
        hostBindings: function (o, n) {
          o & 2 && we('ant-tooltip-open', n.visible);
        },
        inputs: {
          title: [0, 'nzTooltipTitle', 'title'],
          titleContext: [0, 'nzTooltipTitleContext', 'titleContext'],
          directiveTitle: [0, 'nz-tooltip', 'directiveTitle'],
          trigger: [0, 'nzTooltipTrigger', 'trigger'],
          placement: [0, 'nzTooltipPlacement', 'placement'],
          origin: [0, 'nzTooltipOrigin', 'origin'],
          visible: [0, 'nzTooltipVisible', 'visible'],
          mouseEnterDelay: [0, 'nzTooltipMouseEnterDelay', 'mouseEnterDelay'],
          mouseLeaveDelay: [0, 'nzTooltipMouseLeaveDelay', 'mouseLeaveDelay'],
          overlayClassName: [
            0,
            'nzTooltipOverlayClassName',
            'overlayClassName',
          ],
          overlayStyle: [0, 'nzTooltipOverlayStyle', 'overlayStyle'],
          arrowPointAtCenter: [
            2,
            'nzTooltipArrowPointAtCenter',
            'arrowPointAtCenter',
            G,
          ],
          cdkConnectedOverlayPush: [
            2,
            'cdkConnectedOverlayPush',
            'cdkConnectedOverlayPush',
            G,
          ],
          nzTooltipColor: 'nzTooltipColor',
        },
        outputs: { visibleChange: 'nzTooltipVisibleChange' },
        exportAs: ['nzTooltip'],
        standalone: !0,
        features: [ke, r1],
      }));
    let t = e;
    return t;
  })(),
  o7 = (() => {
    let e = class e extends Og {
      constructor() {
        super(...arguments),
          (this.nzTitle = null),
          (this.nzTitleContext = null),
          (this._contentStyleMap = {});
      }
      isEmpty() {
        return Ng(this.nzTitle);
      }
      updateStyles() {
        let a = this.nzColor && Sv(this.nzColor);
        (this._classMap = {
          [this.nzOverlayClassName]: !0,
          [`${this._prefix}-placement-${this.preferredPlacement}`]: !0,
          [`${this._prefix}-${this.nzColor}`]: a,
        }),
          (this._contentStyleMap = {
            backgroundColor: this.nzColor && !a ? this.nzColor : null,
            '--antd-arrow-background-color': this.nzColor,
          });
      }
    };
    (e.ɵfac = (() => {
      let a;
      return function (n) {
        return (a || (a = I1(e)))(n || e);
      };
    })()),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['nz-tooltip']],
        exportAs: ['nzTooltipComponent'],
        standalone: !0,
        features: [r1, t1],
        decls: 2,
        vars: 5,
        consts: [
          ['overlay', 'cdkConnectedOverlay'],
          [
            'cdkConnectedOverlay',
            '',
            'nzConnectedOverlay',
            '',
            3,
            'overlayOutsideClick',
            'detach',
            'positionChange',
            'cdkConnectedOverlayOrigin',
            'cdkConnectedOverlayOpen',
            'cdkConnectedOverlayPositions',
            'cdkConnectedOverlayPush',
            'nzArrowPointAtCenter',
          ],
          [1, 'ant-tooltip', 3, 'ngClass', 'ngStyle', 'nzNoAnimation'],
          [1, 'ant-tooltip-content'],
          [1, 'ant-tooltip-arrow'],
          [1, 'ant-tooltip-arrow-content', 3, 'ngStyle'],
          [1, 'ant-tooltip-inner', 3, 'ngStyle'],
          [4, 'nzStringTemplateOutlet', 'nzStringTemplateOutletContext'],
        ],
        template: function (o, n) {
          if (o & 1) {
            let i = B0();
            ge(0, eE, 6, 11, 'ng-template', 1, 0, pr),
              e1('overlayOutsideClick', function (l) {
                return J1(i), et(n.onClickOutside(l));
              })('detach', function () {
                return J1(i), et(n.hide());
              })('positionChange', function (l) {
                return J1(i), et(n.onPositionChange(l));
              });
          }
          o & 2 &&
            he('cdkConnectedOverlayOrigin', n.origin)(
              'cdkConnectedOverlayOpen',
              n._visible,
            )('cdkConnectedOverlayPositions', n._positions)(
              'cdkConnectedOverlayPush',
              n.cdkConnectedOverlayPush,
            )('nzArrowPointAtCenter', n.nzArrowPointAtCenter);
        },
        dependencies: [og, Zs, Qi, Fm, Lo, X0, Q0, Pg, Ig],
        encapsulation: 2,
        data: { animation: [sg] },
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var wl = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({ imports: [o7] }));
  let t = e;
  return t;
})();
var Zg = (() => {
    let e = class e {
      constructor(a, o) {
        (this._renderer = a),
          (this._elementRef = o),
          (this.onChange = n => {}),
          (this.onTouched = () => {});
      }
      setProperty(a, o) {
        this._renderer.setProperty(this._elementRef.nativeElement, a, o);
      }
      registerOnTouched(a) {
        this.onTouched = a;
      }
      registerOnChange(a) {
        this.onChange = a;
      }
      setDisabledState(a) {
        this.setProperty('disabled', a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Ce), v(E));
    }),
      (e.ɵdir = _({ type: e }));
    let t = e;
    return t;
  })(),
  Qg = (() => {
    let e = class e extends Zg {};
    (e.ɵfac = (() => {
      let a;
      return function (n) {
        return (a || (a = I1(e)))(n || e);
      };
    })()),
      (e.ɵdir = _({ type: e, features: [r1] }));
    let t = e;
    return t;
  })(),
  S5 = new F(''),
  tE = { provide: S5, useExisting: Ht(() => aE), multi: !0 },
  aE = (() => {
    let e = class e extends Qg {
      writeValue(a) {
        this.setProperty('checked', a);
      }
    };
    (e.ɵfac = (() => {
      let a;
      return function (n) {
        return (a || (a = I1(e)))(n || e);
      };
    })()),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['input', 'type', 'checkbox', 'formControlName', ''],
          ['input', 'type', 'checkbox', 'formControl', ''],
          ['input', 'type', 'checkbox', 'ngModel', ''],
        ],
        hostBindings: function (o, n) {
          o & 1 &&
            e1('change', function (s) {
              return n.onChange(s.target.checked);
            })('blur', function () {
              return n.onTouched();
            });
        },
        features: [h1([tE]), r1],
      }));
    let t = e;
    return t;
  })(),
  rE = { provide: S5, useExisting: Ht(() => Xg), multi: !0 };
function oE() {
  let t = j0() ? j0().getUserAgent() : '';
  return /android (\d+)/.test(t.toLowerCase());
}
var nE = new F(''),
  Xg = (() => {
    let e = class e extends Zg {
      constructor(a, o, n) {
        super(a, o),
          (this._compositionMode = n),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !oE());
      }
      writeValue(a) {
        let o = a ?? '';
        this.setProperty('value', o);
      }
      _handleInput(a) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(a);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(a) {
        (this._composing = !1), this._compositionMode && this.onChange(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Ce), v(E), v(nE, 8));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['input', 'formControlName', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControlName', ''],
          ['input', 'formControl', '', 3, 'type', 'checkbox'],
          ['textarea', 'formControl', ''],
          ['input', 'ngModel', '', 3, 'type', 'checkbox'],
          ['textarea', 'ngModel', ''],
          ['', 'ngDefaultControl', ''],
        ],
        hostBindings: function (o, n) {
          o & 1 &&
            e1('input', function (s) {
              return n._handleInput(s.target.value);
            })('blur', function () {
              return n.onTouched();
            })('compositionstart', function () {
              return n._compositionStart();
            })('compositionend', function (s) {
              return n._compositionEnd(s.target.value);
            });
        },
        features: [h1([rE]), r1],
      }));
    let t = e;
    return t;
  })();
function Pa(t) {
  return (
    t == null || ((typeof t == 'string' || Array.isArray(t)) && t.length === 0)
  );
}
function Jg(t) {
  return t != null && typeof t.length == 'number';
}
var Dl = new F(''),
  _l = new F(''),
  iE =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  qg = class {
    static min(e) {
      return sE(e);
    }
    static max(e) {
      return lE(e);
    }
    static required(e) {
      return cE(e);
    }
    static requiredTrue(e) {
      return hE(e);
    }
    static email(e) {
      return dE(e);
    }
    static minLength(e) {
      return uE(e);
    }
    static maxLength(e) {
      return pE(e);
    }
    static pattern(e) {
      return fE(e);
    }
    static nullValidator(e) {
      return ew(e);
    }
    static compose(e) {
      return iw(e);
    }
    static composeAsync(e) {
      return lw(e);
    }
  };
function sE(t) {
  return e => {
    if (Pa(e.value) || Pa(t)) return null;
    let r = parseFloat(e.value);
    return !isNaN(r) && r < t ? { min: { min: t, actual: e.value } } : null;
  };
}
function lE(t) {
  return e => {
    if (Pa(e.value) || Pa(t)) return null;
    let r = parseFloat(e.value);
    return !isNaN(r) && r > t ? { max: { max: t, actual: e.value } } : null;
  };
}
function cE(t) {
  return Pa(t.value) ? { required: !0 } : null;
}
function hE(t) {
  return t.value === !0 ? null : { required: !0 };
}
function dE(t) {
  return Pa(t.value) || iE.test(t.value) ? null : { email: !0 };
}
function uE(t) {
  return e =>
    Pa(e.value) || !Jg(e.value)
      ? null
      : e.value.length < t
        ? { minlength: { requiredLength: t, actualLength: e.value.length } }
        : null;
}
function pE(t) {
  return e =>
    Jg(e.value) && e.value.length > t
      ? { maxlength: { requiredLength: t, actualLength: e.value.length } }
      : null;
}
function fE(t) {
  if (!t) return ew;
  let e, r;
  return (
    typeof t == 'string'
      ? ((r = ''),
        t.charAt(0) !== '^' && (r += '^'),
        (r += t),
        t.charAt(t.length - 1) !== '$' && (r += '$'),
        (e = new RegExp(r)))
      : ((r = t.toString()), (e = t)),
    a => {
      if (Pa(a.value)) return null;
      let o = a.value;
      return e.test(o)
        ? null
        : { pattern: { requiredPattern: r, actualValue: o } };
    }
  );
}
function ew(t) {
  return null;
}
function tw(t) {
  return t != null;
}
function aw(t) {
  return wa(t) ? Me(t) : t;
}
function rw(t) {
  let e = {};
  return (
    t.forEach(r => {
      e = r != null ? M(M({}, e), r) : e;
    }),
    Object.keys(e).length === 0 ? null : e
  );
}
function ow(t, e) {
  return e.map(r => r(t));
}
function mE(t) {
  return !t.validate;
}
function nw(t) {
  return t.map(e => (mE(e) ? e : r => e.validate(r)));
}
function iw(t) {
  if (!t) return null;
  let e = t.filter(tw);
  return e.length == 0
    ? null
    : function (r) {
        return rw(ow(r, e));
      };
}
function sw(t) {
  return t != null ? iw(nw(t)) : null;
}
function lw(t) {
  if (!t) return null;
  let e = t.filter(tw);
  return e.length == 0
    ? null
    : function (r) {
        let a = ow(r, e).map(aw);
        return l3(a).pipe(I(rw));
      };
}
function cw(t) {
  return t != null ? lw(nw(t)) : null;
}
function jg(t, e) {
  return t === null ? [e] : Array.isArray(t) ? [...t, e] : [t, e];
}
function hw(t) {
  return t._rawValidators;
}
function dw(t) {
  return t._rawAsyncValidators;
}
function n7(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function Ml(t, e) {
  return Array.isArray(t) ? t.includes(e) : t === e;
}
function Yg(t, e) {
  let r = n7(e);
  return (
    n7(t).forEach(o => {
      Ml(r, o) || r.push(o);
    }),
    r
  );
}
function Ug(t, e) {
  return n7(e).filter(r => !Ml(t, r));
}
var yl = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(e) {
      (this._rawValidators = e || []),
        (this._composedValidatorFn = sw(this._rawValidators));
    }
    _setAsyncValidators(e) {
      (this._rawAsyncValidators = e || []),
        (this._composedAsyncValidatorFn = cw(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(e) {
      this._onDestroyCallbacks.push(e);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach(e => e()),
        (this._onDestroyCallbacks = []);
    }
    reset(e = void 0) {
      this.control && this.control.reset(e);
    }
    hasError(e, r) {
      return this.control ? this.control.hasError(e, r) : !1;
    }
    getError(e, r) {
      return this.control ? this.control.getError(e, r) : null;
    }
  },
  _r = class extends yl {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  Nt = class extends yl {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  bl = class {
    constructor(e) {
      this._cd = e;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  vE = {
    '[class.ng-untouched]': 'isUntouched',
    '[class.ng-touched]': 'isTouched',
    '[class.ng-pristine]': 'isPristine',
    '[class.ng-dirty]': 'isDirty',
    '[class.ng-valid]': 'isValid',
    '[class.ng-invalid]': 'isInvalid',
    '[class.ng-pending]': 'isPending',
  },
  Dbt = Q(M({}, vE), { '[class.ng-submitted]': 'isSubmitted' }),
  _bt = (() => {
    let e = class e extends bl {
      constructor(a) {
        super(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Nt, 2));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'formControlName', ''],
          ['', 'ngModel', ''],
          ['', 'formControl', ''],
        ],
        hostVars: 14,
        hostBindings: function (o, n) {
          o & 2 &&
            we('ng-untouched', n.isUntouched)('ng-touched', n.isTouched)(
              'ng-pristine',
              n.isPristine,
            )('ng-dirty', n.isDirty)('ng-valid', n.isValid)(
              'ng-invalid',
              n.isInvalid,
            )('ng-pending', n.isPending);
        },
        features: [r1],
      }));
    let t = e;
    return t;
  })(),
  Hbt = (() => {
    let e = class e extends bl {
      constructor(a) {
        super(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(_r, 10));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'formGroupName', ''],
          ['', 'formArrayName', ''],
          ['', 'ngModelGroup', ''],
          ['', 'formGroup', ''],
          ['form', 3, 'ngNoForm', ''],
          ['', 'ngForm', ''],
        ],
        hostVars: 16,
        hostBindings: function (o, n) {
          o & 2 &&
            we('ng-untouched', n.isUntouched)('ng-touched', n.isTouched)(
              'ng-pristine',
              n.isPristine,
            )('ng-dirty', n.isDirty)('ng-valid', n.isValid)(
              'ng-invalid',
              n.isInvalid,
            )('ng-pending', n.isPending)('ng-submitted', n.isSubmitted);
        },
        features: [r1],
      }));
    let t = e;
    return t;
  })();
var F5 = 'VALID',
  xl = 'INVALID',
  Io = 'PENDING',
  C5 = 'DISABLED',
  Ba = class {},
  Fl = class extends Ba {
    constructor(e, r) {
      super(), (this.value = e), (this.source = r);
    }
  },
  z5 = class extends Ba {
    constructor(e, r) {
      super(), (this.pristine = e), (this.source = r);
    }
  },
  A5 = class extends Ba {
    constructor(e, r) {
      super(), (this.touched = e), (this.source = r);
    }
  },
  Po = class extends Ba {
    constructor(e, r) {
      super(), (this.status = e), (this.source = r);
    }
  },
  i7 = class extends Ba {
    constructor(e) {
      super(), (this.source = e);
    }
  },
  s7 = class extends Ba {
    constructor(e) {
      super(), (this.source = e);
    }
  };
function uw(t) {
  return (Hl(t) ? t.validators : t) || null;
}
function gE(t) {
  return Array.isArray(t) ? sw(t) : t || null;
}
function pw(t, e) {
  return (Hl(e) ? e.asyncValidators : t) || null;
}
function wE(t) {
  return Array.isArray(t) ? cw(t) : t || null;
}
function Hl(t) {
  return t != null && !Array.isArray(t) && typeof t == 'object';
}
function xE(t, e, r) {
  let a = t.controls;
  if (!(e ? Object.keys(a) : a).length) throw new y(1e3, '');
  if (!a[r]) throw new y(1001, '');
}
function ME(t, e, r) {
  t._forEachChild((a, o) => {
    if (r[o] === void 0) throw new y(1002, '');
  });
}
var Cl = class {
    constructor(e, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = O0(() => this.statusReactive())),
        (this.statusReactive = ma(void 0)),
        (this._pristine = O0(() => this.pristineReactive())),
        (this.pristineReactive = ma(!0)),
        (this._touched = O0(() => this.touchedReactive())),
        (this.touchedReactive = ma(!1)),
        (this._events = new C()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(e),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(e) {
      this._rawValidators = this._composedValidatorFn = e;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(e) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = e;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return _1(this.statusReactive);
    }
    set status(e) {
      _1(() => this.statusReactive.set(e));
    }
    get valid() {
      return this.status === F5;
    }
    get invalid() {
      return this.status === xl;
    }
    get pending() {
      return this.status == Io;
    }
    get disabled() {
      return this.status === C5;
    }
    get enabled() {
      return this.status !== C5;
    }
    get pristine() {
      return _1(this.pristineReactive);
    }
    set pristine(e) {
      _1(() => this.pristineReactive.set(e));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return _1(this.touchedReactive);
    }
    set touched(e) {
      _1(() => this.touchedReactive.set(e));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : 'change';
    }
    setValidators(e) {
      this._assignValidators(e);
    }
    setAsyncValidators(e) {
      this._assignAsyncValidators(e);
    }
    addValidators(e) {
      this.setValidators(Yg(e, this._rawValidators));
    }
    addAsyncValidators(e) {
      this.setAsyncValidators(Yg(e, this._rawAsyncValidators));
    }
    removeValidators(e) {
      this.setValidators(Ug(e, this._rawValidators));
    }
    removeAsyncValidators(e) {
      this.setAsyncValidators(Ug(e, this._rawAsyncValidators));
    }
    hasValidator(e) {
      return Ml(this._rawValidators, e);
    }
    hasAsyncValidator(e) {
      return Ml(this._rawAsyncValidators, e);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(e = {}) {
      let r = this.touched === !1;
      this.touched = !0;
      let a = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsTouched(Q(M({}, e), { sourceControl: a })),
        r && e.emitEvent !== !1 && this._events.next(new A5(!0, a));
    }
    markAllAsTouched(e = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: e.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild(r => r.markAllAsTouched(e));
    }
    markAsUntouched(e = {}) {
      let r = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let a = e.sourceControl ?? this;
      this._forEachChild(o => {
        o.markAsUntouched({
          onlySelf: !0,
          emitEvent: e.emitEvent,
          sourceControl: a,
        });
      }),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, a),
        r && e.emitEvent !== !1 && this._events.next(new A5(!1, a));
    }
    markAsDirty(e = {}) {
      let r = this.pristine === !0;
      this.pristine = !1;
      let a = e.sourceControl ?? this;
      this._parent &&
        !e.onlySelf &&
        this._parent.markAsDirty(Q(M({}, e), { sourceControl: a })),
        r && e.emitEvent !== !1 && this._events.next(new z5(!1, a));
    }
    markAsPristine(e = {}) {
      let r = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let a = e.sourceControl ?? this;
      this._forEachChild(o => {
        o.markAsPristine({ onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, a),
        r && e.emitEvent !== !1 && this._events.next(new z5(!0, a));
    }
    markAsPending(e = {}) {
      this.status = Io;
      let r = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Po(this.status, r)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.markAsPending(Q(M({}, e), { sourceControl: r }));
    }
    disable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = C5),
        (this.errors = null),
        this._forEachChild(o => {
          o.disable(Q(M({}, e), { onlySelf: !0 }));
        }),
        this._updateValue();
      let a = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Fl(this.value, a)),
        this._events.next(new Po(this.status, a)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(Q(M({}, e), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach(o => o(!0));
    }
    enable(e = {}) {
      let r = this._parentMarkedDirty(e.onlySelf);
      (this.status = F5),
        this._forEachChild(a => {
          a.enable(Q(M({}, e), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent }),
        this._updateAncestors(Q(M({}, e), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach(a => a(!1));
    }
    _updateAncestors(e, r) {
      this._parent &&
        !e.onlySelf &&
        (this._parent.updateValueAndValidity(e),
        e.skipPristineCheck || this._parent._updatePristine({}, r),
        this._parent._updateTouched({}, r));
    }
    setParent(e) {
      this._parent = e;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(e = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let a = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === F5 || this.status === Io) &&
            this._runAsyncValidator(a, e.emitEvent);
      }
      let r = e.sourceControl ?? this;
      e.emitEvent !== !1 &&
        (this._events.next(new Fl(this.value, r)),
        this._events.next(new Po(this.status, r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !e.onlySelf &&
          this._parent.updateValueAndValidity(
            Q(M({}, e), { sourceControl: r }),
          );
    }
    _updateTreeValidity(e = { emitEvent: !0 }) {
      this._forEachChild(r => r._updateTreeValidity(e)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: e.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? C5 : F5;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(e, r) {
      if (this.asyncValidator) {
        (this.status = Io),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let a = aw(this.asyncValidator(this));
        this._asyncValidationSubscription = a.subscribe(o => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(o, { emitEvent: r, shouldHaveEmitted: e });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let e = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), e;
      }
      return !1;
    }
    setErrors(e, r = {}) {
      (this.errors = e),
        this._updateControlsErrors(
          r.emitEvent !== !1,
          this,
          r.shouldHaveEmitted,
        );
    }
    get(e) {
      let r = e;
      return r == null ||
        (Array.isArray(r) || (r = r.split('.')), r.length === 0)
        ? null
        : r.reduce((a, o) => a && a._find(o), this);
    }
    getError(e, r) {
      let a = r ? this.get(r) : this;
      return a && a.errors ? a.errors[e] : null;
    }
    hasError(e, r) {
      return !!this.getError(e, r);
    }
    get root() {
      let e = this;
      for (; e._parent; ) e = e._parent;
      return e;
    }
    _updateControlsErrors(e, r, a) {
      (this.status = this._calculateStatus()),
        e && this.statusChanges.emit(this.status),
        (e || a) && this._events.next(new Po(this.status, r)),
        this._parent && this._parent._updateControlsErrors(e, r, a);
    }
    _initObservables() {
      (this.valueChanges = new W()), (this.statusChanges = new W());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? C5
        : this.errors
          ? xl
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Io)
            ? Io
            : this._anyControlsHaveStatus(xl)
              ? xl
              : F5;
    }
    _anyControlsHaveStatus(e) {
      return this._anyControls(r => r.status === e);
    }
    _anyControlsDirty() {
      return this._anyControls(e => e.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls(e => e.touched);
    }
    _updatePristine(e, r) {
      let a = !this._anyControlsDirty(),
        o = this.pristine !== a;
      (this.pristine = a),
        this._parent && !e.onlySelf && this._parent._updatePristine(e, r),
        o && this._events.next(new z5(this.pristine, r));
    }
    _updateTouched(e = {}, r) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new A5(this.touched, r)),
        this._parent && !e.onlySelf && this._parent._updateTouched(e, r);
    }
    _registerOnCollectionChange(e) {
      this._onCollectionChange = e;
    }
    _setUpdateStrategy(e) {
      Hl(e) && e.updateOn != null && (this._updateOn = e.updateOn);
    }
    _parentMarkedDirty(e) {
      let r = this._parent && this._parent.dirty;
      return !e && !!r && !this._parent._anyControlsDirty();
    }
    _find(e) {
      return null;
    }
    _assignValidators(e) {
      (this._rawValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedValidatorFn = gE(this._rawValidators));
    }
    _assignAsyncValidators(e) {
      (this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e),
        (this._composedAsyncValidatorFn = wE(this._rawAsyncValidators));
    }
  },
  $g = class extends Cl {
    constructor(e, r, a) {
      super(uw(r), pw(a, r)),
        (this.controls = e),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(e, r) {
      return this.controls[e]
        ? this.controls[e]
        : ((this.controls[e] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(e, r, a = {}) {
      this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: a.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(e, r = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(e, r, a = {}) {
      this.controls[e] &&
        this.controls[e]._registerOnCollectionChange(() => {}),
        delete this.controls[e],
        r && this.registerControl(e, r),
        this.updateValueAndValidity({ emitEvent: a.emitEvent }),
        this._onCollectionChange();
    }
    contains(e) {
      return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
    }
    setValue(e, r = {}) {
      ME(this, !0, e),
        Object.keys(e).forEach(a => {
          xE(this, !0, a),
            this.controls[a].setValue(e[a], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(e, r = {}) {
      e != null &&
        (Object.keys(e).forEach(a => {
          let o = this.controls[a];
          o && o.patchValue(e[a], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(e = {}, r = {}) {
      this._forEachChild((a, o) => {
        a.reset(e ? e[o] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r, this),
        this._updateTouched(r, this),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (e, r, a) => ((e[a] = r.getRawValue()), e),
      );
    }
    _syncPendingControls() {
      let e = this._reduceChildren(!1, (r, a) =>
        a._syncPendingControls() ? !0 : r,
      );
      return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
    }
    _forEachChild(e) {
      Object.keys(this.controls).forEach(r => {
        let a = this.controls[r];
        a && e(a, r);
      });
    }
    _setUpControls() {
      this._forEachChild(e => {
        e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(e) {
      for (let [r, a] of Object.entries(this.controls))
        if (this.contains(r) && e(a)) return !0;
      return !1;
    }
    _reduceValue() {
      let e = {};
      return this._reduceChildren(
        e,
        (r, a, o) => ((a.enabled || this.disabled) && (r[o] = a.value), r),
      );
    }
    _reduceChildren(e, r) {
      let a = e;
      return (
        this._forEachChild((o, n) => {
          a = r(a, o, n);
        }),
        a
      );
    }
    _allControlsDisabled() {
      for (let e of Object.keys(this.controls))
        if (this.controls[e].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(e) {
      return this.controls.hasOwnProperty(e) ? this.controls[e] : null;
    }
  };
var V5 = new F('CallSetDisabledState', {
    providedIn: 'root',
    factory: () => El,
  }),
  El = 'always';
function fw(t, e) {
  return [...e.path, t];
}
function zl(t, e, r = El) {
  l7(t, e),
    e.valueAccessor.writeValue(t.value),
    (t.disabled || r === 'always') &&
      e.valueAccessor.setDisabledState?.(t.disabled),
    bE(t, e),
    CE(t, e),
    FE(t, e),
    yE(t, e);
}
function Al(t, e, r = !0) {
  let a = () => {};
  e.valueAccessor &&
    (e.valueAccessor.registerOnChange(a), e.valueAccessor.registerOnTouched(a)),
    Vl(t, e),
    t &&
      (e._invokeOnDestroyCallbacks(), t._registerOnCollectionChange(() => {}));
}
function Sl(t, e) {
  t.forEach(r => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(e);
  });
}
function yE(t, e) {
  if (e.valueAccessor.setDisabledState) {
    let r = a => {
      e.valueAccessor.setDisabledState(a);
    };
    t.registerOnDisabledChange(r),
      e._registerOnDestroy(() => {
        t._unregisterOnDisabledChange(r);
      });
  }
}
function l7(t, e) {
  let r = hw(t);
  e.validator !== null
    ? t.setValidators(jg(r, e.validator))
    : typeof r == 'function' && t.setValidators([r]);
  let a = dw(t);
  e.asyncValidator !== null
    ? t.setAsyncValidators(jg(a, e.asyncValidator))
    : typeof a == 'function' && t.setAsyncValidators([a]);
  let o = () => t.updateValueAndValidity();
  Sl(e._rawValidators, o), Sl(e._rawAsyncValidators, o);
}
function Vl(t, e) {
  let r = !1;
  if (t !== null) {
    if (e.validator !== null) {
      let o = hw(t);
      if (Array.isArray(o) && o.length > 0) {
        let n = o.filter(i => i !== e.validator);
        n.length !== o.length && ((r = !0), t.setValidators(n));
      }
    }
    if (e.asyncValidator !== null) {
      let o = dw(t);
      if (Array.isArray(o) && o.length > 0) {
        let n = o.filter(i => i !== e.asyncValidator);
        n.length !== o.length && ((r = !0), t.setAsyncValidators(n));
      }
    }
  }
  let a = () => {};
  return Sl(e._rawValidators, a), Sl(e._rawAsyncValidators, a), r;
}
function bE(t, e) {
  e.valueAccessor.registerOnChange(r => {
    (t._pendingValue = r),
      (t._pendingChange = !0),
      (t._pendingDirty = !0),
      t.updateOn === 'change' && mw(t, e);
  });
}
function FE(t, e) {
  e.valueAccessor.registerOnTouched(() => {
    (t._pendingTouched = !0),
      t.updateOn === 'blur' && t._pendingChange && mw(t, e),
      t.updateOn !== 'submit' && t.markAsTouched();
  });
}
function mw(t, e) {
  t._pendingDirty && t.markAsDirty(),
    t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
    e.viewToModelUpdate(t._pendingValue),
    (t._pendingChange = !1);
}
function CE(t, e) {
  let r = (a, o) => {
    e.valueAccessor.writeValue(a), o && e.viewToModelUpdate(a);
  };
  t.registerOnChange(r),
    e._registerOnDestroy(() => {
      t._unregisterOnChange(r);
    });
}
function zE(t, e) {
  t == null, l7(t, e);
}
function AE(t, e) {
  return Vl(t, e);
}
function c7(t, e) {
  if (!t.hasOwnProperty('model')) return !1;
  let r = t.model;
  return r.isFirstChange() ? !0 : !Object.is(e, r.currentValue);
}
function SE(t) {
  return Object.getPrototypeOf(t.constructor) === Qg;
}
function VE(t, e) {
  t._syncPendingControls(),
    e.forEach(r => {
      let a = r.control;
      a.updateOn === 'submit' &&
        a._pendingChange &&
        (r.viewToModelUpdate(a._pendingValue), (a._pendingChange = !1));
    });
}
function h7(t, e) {
  if (!e) return null;
  Array.isArray(e);
  let r, a, o;
  return (
    e.forEach(n => {
      n.constructor === Xg ? (r = n) : SE(n) ? (a = n) : (o = n);
    }),
    o || a || r || null
  );
}
function DE(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function Wg(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
function Gg(t) {
  return (
    typeof t == 'object' &&
    t !== null &&
    Object.keys(t).length === 2 &&
    'value' in t &&
    'disabled' in t
  );
}
var vw = class extends Cl {
  constructor(e = null, r, a) {
    super(uw(r), pw(a, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(e),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Hl(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (Gg(e) ? (this.defaultValue = e.value) : (this.defaultValue = e));
  }
  setValue(e, r = {}) {
    (this.value = this._pendingValue = e),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach(a =>
          a(this.value, r.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(e, r = {}) {
    this.setValue(e, r);
  }
  reset(e = this.defaultValue, r = {}) {
    this._applyFormState(e),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(e) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(e) {
    this._onChange.push(e);
  }
  _unregisterOnChange(e) {
    Wg(this._onChange, e);
  }
  registerOnDisabledChange(e) {
    this._onDisabledChange.push(e);
  }
  _unregisterOnDisabledChange(e) {
    Wg(this._onDisabledChange, e);
  }
  _forEachChild(e) {}
  _syncPendingControls() {
    return this.updateOn === 'submit' &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(e) {
    Gg(e)
      ? ((this.value = this._pendingValue = e.value),
        e.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = e);
  }
};
var _E = t => t instanceof vw;
var HE = { provide: Nt, useExisting: Ht(() => EE) },
  Kg = Promise.resolve(),
  EE = (() => {
    let e = class e extends Nt {
      constructor(a, o, n, i, s, l) {
        super(),
          (this._changeDetectorRef = s),
          (this.callSetDisabledState = l),
          (this.control = new vw()),
          (this._registered = !1),
          (this.name = ''),
          (this.update = new W()),
          (this._parent = a),
          this._setValidators(o),
          this._setAsyncValidators(n),
          (this.valueAccessor = h7(this, i));
      }
      ngOnChanges(a) {
        if ((this._checkForErrors(), !this._registered || 'name' in a)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let o = a.name.previousValue;
            this.formDirective.removeControl({
              name: o,
              path: this._getPath(o),
            });
          }
          this._setUpControl();
        }
        'isDisabled' in a && this._updateDisabled(a),
          c7(a, this.viewModel) &&
            (this._updateValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(a) {
        (this.viewModel = a), this.update.emit(a);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          (this._registered = !0);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        zl(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(a) {
        Kg.then(() => {
          this.control.setValue(a, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(a) {
        let o = a.isDisabled.currentValue,
          n = o !== 0 && G(o);
        Kg.then(() => {
          n && !this.control.disabled
            ? this.control.disable()
            : !n && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(a) {
        return this._parent ? fw(a, this._parent) : [a];
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(
        v(_r, 9),
        v(Dl, 10),
        v(_l, 10),
        v(S5, 10),
        v(_e, 8),
        v(V5, 8),
      );
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['', 'ngModel', '', 3, 'formControlName', '', 3, 'formControl', ''],
        ],
        inputs: {
          name: 'name',
          isDisabled: [0, 'disabled', 'isDisabled'],
          model: [0, 'ngModel', 'model'],
          options: [0, 'ngModelOptions', 'options'],
        },
        outputs: { update: 'ngModelChange' },
        exportAs: ['ngModel'],
        features: [h1([HE]), r1, ee],
      }));
    let t = e;
    return t;
  })(),
  Tbt = (() => {
    let e = class e {};
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
        hostAttrs: ['novalidate', ''],
      }));
    let t = e;
    return t;
  })();
var d7 = new F(''),
  TE = { provide: Nt, useExisting: Ht(() => kE) },
  kE = (() => {
    let e = class e extends Nt {
      set isDisabled(a) {}
      constructor(a, o, n, i, s) {
        super(),
          (this._ngModelWarningConfig = i),
          (this.callSetDisabledState = s),
          (this.update = new W()),
          (this._ngModelWarningSent = !1),
          this._setValidators(a),
          this._setAsyncValidators(o),
          (this.valueAccessor = h7(this, n));
      }
      ngOnChanges(a) {
        if (this._isControlChanged(a)) {
          let o = a.form.previousValue;
          o && Al(o, this, !1),
            zl(this.form, this, this.callSetDisabledState),
            this.form.updateValueAndValidity({ emitEvent: !1 });
        }
        c7(a, this.viewModel) &&
          (this.form.setValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.form && Al(this.form, this, !1);
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(a) {
        (this.viewModel = a), this.update.emit(a);
      }
      _isControlChanged(a) {
        return a.hasOwnProperty('form');
      }
    };
    (e._ngModelWarningSentOnce = !1),
      (e.ɵfac = function (o) {
        return new (o || e)(
          v(Dl, 10),
          v(_l, 10),
          v(S5, 10),
          v(d7, 8),
          v(V5, 8),
        );
      }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'formControl', '']],
        inputs: {
          form: [0, 'formControl', 'form'],
          isDisabled: [0, 'disabled', 'isDisabled'],
          model: [0, 'ngModel', 'model'],
        },
        outputs: { update: 'ngModelChange' },
        exportAs: ['ngForm'],
        features: [h1([TE]), r1, ee],
      }));
    let t = e;
    return t;
  })(),
  LE = { provide: _r, useExisting: Ht(() => IE) },
  IE = (() => {
    let e = class e extends _r {
      get submitted() {
        return _1(this._submittedReactive);
      }
      set submitted(a) {
        this._submittedReactive.set(a);
      }
      constructor(a, o, n) {
        super(),
          (this.callSetDisabledState = n),
          (this._submitted = O0(() => this._submittedReactive())),
          (this._submittedReactive = ma(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new W()),
          this._setValidators(a),
          this._setAsyncValidators(o);
      }
      ngOnChanges(a) {
        this._checkFormPresent(),
          a.hasOwnProperty('form') &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (Vl(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(a) {
        let o = this.form.get(a.path);
        return (
          zl(o, a, this.callSetDisabledState),
          o.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(a),
          o
        );
      }
      getControl(a) {
        return this.form.get(a.path);
      }
      removeControl(a) {
        Al(a.control || null, a, !1), DE(this.directives, a);
      }
      addFormGroup(a) {
        this._setUpFormContainer(a);
      }
      removeFormGroup(a) {
        this._cleanUpFormContainer(a);
      }
      getFormGroup(a) {
        return this.form.get(a.path);
      }
      addFormArray(a) {
        this._setUpFormContainer(a);
      }
      removeFormArray(a) {
        this._cleanUpFormContainer(a);
      }
      getFormArray(a) {
        return this.form.get(a.path);
      }
      updateModel(a, o) {
        this.form.get(a.path).setValue(o);
      }
      onSubmit(a) {
        return (
          this._submittedReactive.set(!0),
          VE(this.form, this.directives),
          this.ngSubmit.emit(a),
          this.form._events.next(new i7(this.control)),
          a?.target?.method === 'dialog'
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(a = void 0) {
        this.form.reset(a),
          this._submittedReactive.set(!1),
          this.form._events.next(new s7(this.form));
      }
      _updateDomValue() {
        this.directives.forEach(a => {
          let o = a.control,
            n = this.form.get(a.path);
          o !== n &&
            (Al(o || null, a),
            _E(n) && (zl(n, a, this.callSetDisabledState), (a.control = n)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(a) {
        let o = this.form.get(a.path);
        zE(o, a), o.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(a) {
        if (this.form) {
          let o = this.form.get(a.path);
          o && AE(o, a) && o.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        l7(this.form, this), this._oldForm && Vl(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Dl, 10), v(_l, 10), v(V5, 8));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'formGroup', '']],
        hostBindings: function (o, n) {
          o & 1 &&
            e1('submit', function (s) {
              return n.onSubmit(s);
            })('reset', function () {
              return n.onReset();
            });
        },
        inputs: { form: [0, 'formGroup', 'form'] },
        outputs: { ngSubmit: 'ngSubmit' },
        exportAs: ['ngForm'],
        features: [h1([LE]), r1, ee],
      }));
    let t = e;
    return t;
  })();
var PE = { provide: Nt, useExisting: Ht(() => BE) },
  BE = (() => {
    let e = class e extends Nt {
      set isDisabled(a) {}
      constructor(a, o, n, i, s) {
        super(),
          (this._ngModelWarningConfig = s),
          (this._added = !1),
          (this.name = null),
          (this.update = new W()),
          (this._ngModelWarningSent = !1),
          (this._parent = a),
          this._setValidators(o),
          this._setAsyncValidators(n),
          (this.valueAccessor = h7(this, i));
      }
      ngOnChanges(a) {
        this._added || this._setUpControl(),
          c7(a, this.viewModel) &&
            ((this.viewModel = this.model),
            this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(a) {
        (this.viewModel = a), this.update.emit(a);
      }
      get path() {
        return fw(
          this.name == null ? this.name : this.name.toString(),
          this._parent,
        );
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {}
      _setUpControl() {
        this._checkParentType(),
          (this.control = this.formDirective.addControl(this)),
          (this._added = !0);
      }
    };
    (e._ngModelWarningSentOnce = !1),
      (e.ɵfac = function (o) {
        return new (o || e)(
          v(_r, 13),
          v(Dl, 10),
          v(_l, 10),
          v(S5, 10),
          v(d7, 8),
        );
      }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'formControlName', '']],
        inputs: {
          name: [0, 'formControlName', 'name'],
          isDisabled: [0, 'disabled', 'isDisabled'],
          model: [0, 'ngModel', 'model'],
        },
        outputs: { update: 'ngModelChange' },
        features: [h1([PE]), r1, ee],
      }));
    let t = e;
    return t;
  })();
var gw = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var kbt = (() => {
    let e = class e {
      static withConfig(a) {
        return {
          ngModule: e,
          providers: [{ provide: V5, useValue: a.callSetDisabledState ?? El }],
        };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({ imports: [gw] }));
    let t = e;
    return t;
  })(),
  Lbt = (() => {
    let e = class e {
      static withConfig(a) {
        return {
          ngModule: e,
          providers: [
            {
              provide: d7,
              useValue: a.warnOnNgModelWithFormControl ?? 'always',
            },
            { provide: V5, useValue: a.callSetDisabledState ?? El },
          ],
        };
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({ imports: [gw] }));
    let t = e;
    return t;
  })();
var Tl = (() => {
  let e = class e {
    constructor() {
      this.formStatusChanges = new O1(1);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
var D5 = (() => {
  let e = class e {
    constructor() {
      this.noFormStatus = new Pe(!1);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac }));
  let t = e;
  return t;
})();
function OE(t, e) {
  if ((t & 1 && Le(0, 'span', 0), t & 2)) {
    let r = ae();
    he('nzType', r.iconType);
  }
}
var NE = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill',
  },
  kl = (() => {
    let e = class e {
      constructor(a) {
        (this.cdr = a), (this.status = ''), (this.iconType = null);
      }
      ngOnChanges(a) {
        this.updateIcon();
      }
      updateIcon() {
        (this.iconType = this.status ? NE[this.status] : null),
          this.cdr.markForCheck();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(_e));
    }),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['nz-form-item-feedback-icon']],
        hostAttrs: [1, 'ant-form-item-feedback-icon'],
        hostVars: 8,
        hostBindings: function (o, n) {
          o & 2 &&
            we('ant-form-item-feedback-icon-error', n.status === 'error')(
              'ant-form-item-feedback-icon-warning',
              n.status === 'warning',
            )('ant-form-item-feedback-icon-success', n.status === 'success')(
              'ant-form-item-feedback-icon-validating',
              n.status === 'validating',
            );
        },
        inputs: { status: 'status' },
        exportAs: ['nzFormFeedbackIcon'],
        standalone: !0,
        features: [ee, t1],
        decls: 1,
        vars: 1,
        consts: [['nz-icon', '', 3, 'nzType']],
        template: function (o, n) {
          o & 1 && ge(0, OE, 1, 1, 'span', 0), o & 2 && Ae(n.iconType ? 0 : -1);
        },
        dependencies: [m0, Ct],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var ww = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var _5 = (() => {
  let e = class e {
    get disabled() {
      return this.ngControl && this.ngControl.disabled !== null
        ? this.ngControl.disabled
        : this._disabled;
    }
    set disabled(a) {
      this._disabled = a;
    }
    constructor(a, o, n, i) {
      (this.renderer = a),
        (this.elementRef = o),
        (this.hostView = n),
        (this.directionality = i),
        (this.nzBorderless = !1),
        (this.nzSize = 'default'),
        (this.nzStepperless = !0),
        (this.nzStatus = ''),
        (this._disabled = !1),
        (this.disabled$ = new C()),
        (this.dir = 'ltr'),
        (this.prefixCls = 'ant-input'),
        (this.status = ''),
        (this.statusCls = {}),
        (this.hasFeedback = !1),
        (this.feedbackRef = null),
        (this.components = []),
        (this.destroy$ = new C()),
        (this.ngControl = m(Nt, { self: !0, optional: !0 })),
        (this.nzFormStatusService = m(Tl, { optional: !0 })),
        (this.nzFormNoStatusService = m(D5, { optional: !0 }));
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges
        .pipe(
          z1(
            (a, o) => a.status === o.status && a.hasFeedback === o.hasFeedback,
          ),
          S(this.destroy$),
        )
        .subscribe(({ status: a, hasFeedback: o }) => {
          this.setStatusStyles(a, o);
        }),
        this.ngControl &&
          this.ngControl.statusChanges
            ?.pipe(
              me(() => this.ngControl.disabled !== null),
              S(this.destroy$),
            )
            .subscribe(() => {
              this.disabled$.next(this.ngControl.disabled);
            }),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
          this.dir = a;
        });
    }
    ngOnChanges(a) {
      let { disabled: o, nzStatus: n } = a;
      o && this.disabled$.next(this.disabled),
        n && this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    setStatusStyles(a, o) {
      (this.status = a),
        (this.hasFeedback = o),
        this.renderFeedbackIcon(),
        (this.statusCls = Vo(this.prefixCls, a, o)),
        Object.keys(this.statusCls).forEach(n => {
          this.statusCls[n]
            ? this.renderer.addClass(this.elementRef.nativeElement, n)
            : this.renderer.removeClass(this.elementRef.nativeElement, n);
        });
    }
    renderFeedbackIcon() {
      if (!this.status || !this.hasFeedback || this.nzFormNoStatusService) {
        this.hostView.clear(), (this.feedbackRef = null);
        return;
      }
      (this.feedbackRef =
        this.feedbackRef || this.hostView.createComponent(kl)),
        this.feedbackRef.location.nativeElement.classList.add(
          'ant-input-suffix',
        ),
        (this.feedbackRef.instance.status = this.status),
        this.feedbackRef.instance.updateIcon();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(Ce), v(E), v(Qe), v($e));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [
        ['input', 'nz-input', ''],
        ['textarea', 'nz-input', ''],
      ],
      hostAttrs: [1, 'ant-input'],
      hostVars: 13,
      hostBindings: function (o, n) {
        o & 2 &&
          (P0('disabled', n.disabled || null),
          we('ant-input-disabled', n.disabled)(
            'ant-input-borderless',
            n.nzBorderless,
          )('ant-input-lg', n.nzSize === 'large')(
            'ant-input-sm',
            n.nzSize === 'small',
          )('ant-input-rtl', n.dir === 'rtl')(
            'ant-input-stepperless',
            n.nzStepperless,
          ));
      },
      inputs: {
        nzBorderless: [2, 'nzBorderless', 'nzBorderless', G],
        nzSize: 'nzSize',
        nzStepperless: [2, 'nzStepperless', 'nzStepperless', G],
        nzStatus: 'nzStatus',
        disabled: [2, 'disabled', 'disabled', G],
      },
      exportAs: ['nzInput'],
      standalone: !0,
      features: [ke, ee],
    }));
  let t = e;
  return t;
})();
var jE = ['nz-input-group-slot', ''],
  YE = ['*'];
function UE(t, e) {
  if ((t & 1 && Le(0, 'span', 0), t & 2)) {
    let r = ae();
    he('nzType', r.icon);
  }
}
function $E(t, e) {
  if ((t & 1 && (s0(0), c0(1), l0()), t & 2)) {
    let r = ae();
    de(), yn(r.template);
  }
}
var xw = (() => {
  let e = class e {
    constructor() {
      (this.icon = null), (this.type = null), (this.template = null);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵcmp = Ze({
      type: e,
      selectors: [['', 'nz-input-group-slot', '']],
      hostVars: 6,
      hostBindings: function (o, n) {
        o & 2 &&
          we('ant-input-group-addon', n.type === 'addon')(
            'ant-input-prefix',
            n.type === 'prefix',
          )('ant-input-suffix', n.type === 'suffix');
      },
      inputs: { icon: 'icon', type: 'type', template: 'template' },
      standalone: !0,
      features: [t1],
      attrs: jE,
      ngContentSelectors: YE,
      decls: 3,
      vars: 2,
      consts: [
        ['nz-icon', '', 3, 'nzType'],
        [4, 'nzStringTemplateOutlet'],
      ],
      template: function (o, n) {
        o & 1 &&
          (gt(),
          ge(0, UE, 1, 1, 'span', 0)(1, $E, 2, 1, 'ng-container', 1),
          wt(2)),
          o & 2 &&
            (Ae(n.icon ? 0 : -1),
            de(),
            he('nzStringTemplateOutlet', n.template));
      },
      dependencies: [m0, Ct, X0, Q0],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var WE = (() => {
  let e = class e {
    create(a) {
      return typeof MutationObserver > 'u' ? null : new MutationObserver(a);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var Mw = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({ providers: [WE] }));
  let t = e;
  return t;
})();
var GE = (() => {
  let e = class e {
    constructor(a) {
      this._platform = a;
    }
    isDisabled(a) {
      return a.hasAttribute('disabled');
    }
    isVisible(a) {
      return ZE(a) && getComputedStyle(a).visibility === 'visible';
    }
    isTabbable(a) {
      if (!this._platform.isBrowser) return !1;
      let o = KE(oT(a));
      if (o && (yw(o) === -1 || !this.isVisible(o))) return !1;
      let n = a.nodeName.toLowerCase(),
        i = yw(a);
      return a.hasAttribute('contenteditable')
        ? i !== -1
        : n === 'iframe' ||
            n === 'object' ||
            (this._platform.WEBKIT && this._platform.IOS && !aT(a))
          ? !1
          : n === 'audio'
            ? a.hasAttribute('controls')
              ? i !== -1
              : !1
            : n === 'video'
              ? i === -1
                ? !1
                : i !== null
                  ? !0
                  : this._platform.FIREFOX || a.hasAttribute('controls')
              : a.tabIndex >= 0;
    }
    isFocusable(a, o) {
      return (
        rT(a) &&
        !this.isDisabled(a) &&
        (o?.ignoreVisibility || this.isVisible(a))
      );
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(g(Se));
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
function KE(t) {
  try {
    return t.frameElement;
  } catch {
    return null;
  }
}
function ZE(t) {
  return !!(
    t.offsetWidth ||
    t.offsetHeight ||
    (typeof t.getClientRects == 'function' && t.getClientRects().length)
  );
}
function QE(t) {
  let e = t.nodeName.toLowerCase();
  return e === 'input' || e === 'select' || e === 'button' || e === 'textarea';
}
function XE(t) {
  return eT(t) && t.type == 'hidden';
}
function JE(t) {
  return tT(t) && t.hasAttribute('href');
}
function eT(t) {
  return t.nodeName.toLowerCase() == 'input';
}
function tT(t) {
  return t.nodeName.toLowerCase() == 'a';
}
function Cw(t) {
  if (!t.hasAttribute('tabindex') || t.tabIndex === void 0) return !1;
  let e = t.getAttribute('tabindex');
  return !!(e && !isNaN(parseInt(e, 10)));
}
function yw(t) {
  if (!Cw(t)) return null;
  let e = parseInt(t.getAttribute('tabindex') || '', 10);
  return isNaN(e) ? -1 : e;
}
function aT(t) {
  let e = t.nodeName.toLowerCase(),
    r = e === 'input' && t.type;
  return r === 'text' || r === 'password' || e === 'select' || e === 'textarea';
}
function rT(t) {
  return XE(t)
    ? !1
    : QE(t) || JE(t) || t.hasAttribute('contenteditable') || Cw(t);
}
function oT(t) {
  return (t.ownerDocument && t.ownerDocument.defaultView) || window;
}
var p7 = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      (this._enabled = e),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(e, this._startAnchor),
          this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    constructor(e, r, a, o, n = !1, i) {
      (this._element = e),
        (this._checker = r),
        (this._ngZone = a),
        (this._document = o),
        (this._injector = i),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        n || this.attachAnchors();
    }
    destroy() {
      let e = this._startAnchor,
        r = this._endAnchor;
      e &&
        (e.removeEventListener('focus', this.startAnchorListener), e.remove()),
        r &&
          (r.removeEventListener('focus', this.endAnchorListener), r.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                'focus',
                this.startAnchorListener,
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  'focus',
                  this.endAnchorListener,
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element,
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling,
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(e) {
      return new Promise(r => {
        this._executeOnStable(() => r(this.focusInitialElement(e)));
      });
    }
    focusFirstTabbableElementWhenReady(e) {
      return new Promise(r => {
        this._executeOnStable(() => r(this.focusFirstTabbableElement(e)));
      });
    }
    focusLastTabbableElementWhenReady(e) {
      return new Promise(r => {
        this._executeOnStable(() => r(this.focusLastTabbableElement(e)));
      });
    }
    _getRegionBoundary(e) {
      let r = this._element.querySelectorAll(
        `[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`,
      );
      return e == 'start'
        ? r.length
          ? r[0]
          : this._getFirstTabbableElement(this._element)
        : r.length
          ? r[r.length - 1]
          : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(e) {
      let r = this._element.querySelector(
        '[cdk-focus-initial], [cdkFocusInitial]',
      );
      if (r) {
        if (!this._checker.isFocusable(r)) {
          let a = this._getFirstTabbableElement(r);
          return a?.focus(e), !!a;
        }
        return r.focus(e), !0;
      }
      return this.focusFirstTabbableElement(e);
    }
    focusFirstTabbableElement(e) {
      let r = this._getRegionBoundary('start');
      return r && r.focus(e), !!r;
    }
    focusLastTabbableElement(e) {
      let r = this._getRegionBoundary('end');
      return r && r.focus(e), !!r;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let r = e.children;
      for (let a = 0; a < r.length; a++) {
        let o =
          r[a].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(r[a])
            : null;
        if (o) return o;
      }
      return null;
    }
    _getLastTabbableElement(e) {
      if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
      let r = e.children;
      for (let a = r.length - 1; a >= 0; a--) {
        let o =
          r[a].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(r[a])
            : null;
        if (o) return o;
      }
      return null;
    }
    _createAnchor() {
      let e = this._document.createElement('div');
      return (
        this._toggleAnchorTabIndex(this._enabled, e),
        e.classList.add('cdk-visually-hidden'),
        e.classList.add('cdk-focus-trap-anchor'),
        e.setAttribute('aria-hidden', 'true'),
        e
      );
    }
    _toggleAnchorTabIndex(e, r) {
      e ? r.setAttribute('tabindex', '0') : r.removeAttribute('tabindex');
    }
    toggleAnchors(e) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(e, this._startAnchor),
        this._toggleAnchorTabIndex(e, this._endAnchor));
    }
    _executeOnStable(e) {
      this._injector ? Tt(e, { injector: this._injector }) : setTimeout(e);
    }
  },
  nT = (() => {
    let e = class e {
      constructor(a, o, n) {
        (this._checker = a),
          (this._ngZone = o),
          (this._injector = m(Oe)),
          (this._document = n);
      }
      create(a, o = !1) {
        return new p7(
          a,
          this._checker,
          this._ngZone,
          this._document,
          o,
          this._injector,
        );
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(GE), g(T), g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  HFt = (() => {
    let e = class e {
      get enabled() {
        return this.focusTrap?.enabled || !1;
      }
      set enabled(a) {
        this.focusTrap && (this.focusTrap.enabled = a);
      }
      constructor(a, o, n) {
        (this._elementRef = a),
          (this._focusTrapFactory = o),
          (this._previouslyFocusedElement = null),
          m(Se).isBrowser &&
            (this.focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement,
              !0,
            ));
      }
      ngOnDestroy() {
        this.focusTrap?.destroy(),
          this._previouslyFocusedElement &&
            (this._previouslyFocusedElement.focus(),
            (this._previouslyFocusedElement = null));
      }
      ngAfterContentInit() {
        this.focusTrap?.attachAnchors(),
          this.autoCapture && this._captureFocus();
      }
      ngDoCheck() {
        this.focusTrap &&
          !this.focusTrap.hasAttached() &&
          this.focusTrap.attachAnchors();
      }
      ngOnChanges(a) {
        let o = a.autoCapture;
        o &&
          !o.firstChange &&
          this.autoCapture &&
          this.focusTrap?.hasAttached() &&
          this._captureFocus();
      }
      _captureFocus() {
        (this._previouslyFocusedElement = $9()),
          this.focusTrap?.focusInitialElementWhenReady();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E), v(nT), v(Y));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [['', 'cdkTrapFocus', '']],
        inputs: {
          enabled: [2, 'cdkTrapFocus', 'enabled', G],
          autoCapture: [2, 'cdkTrapFocusAutoCapture', 'autoCapture', G],
        },
        exportAs: ['cdkTrapFocus'],
        standalone: !0,
        features: [ke, ee],
      }));
    let t = e;
    return t;
  })();
function iT(t) {
  return t.buttons === 0 || t.detail === 0;
}
function sT(t) {
  let e =
    (t.touches && t.touches[0]) || (t.changedTouches && t.changedTouches[0]);
  return (
    !!e &&
    e.identifier === -1 &&
    (e.radiusX == null || e.radiusX === 1) &&
    (e.radiusY == null || e.radiusY === 1)
  );
}
var lT = new F('cdk-input-modality-detector-options'),
  cT = { ignoreKeys: [18, 17, 224, 91, 16] },
  zw = 650,
  Bo = rh({ passive: !0, capture: !0 }),
  hT = (() => {
    let e = class e {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(a, o, n, i) {
        (this._platform = a),
          (this._mostRecentTarget = null),
          (this._modality = new Pe(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = s => {
            this._options?.ignoreKeys?.some(l => l === s.keyCode) ||
              (this._modality.next('keyboard'),
              (this._mostRecentTarget = bt(s)));
          }),
          (this._onMousedown = s => {
            Date.now() - this._lastTouchMs < zw ||
              (this._modality.next(iT(s) ? 'keyboard' : 'mouse'),
              (this._mostRecentTarget = bt(s)));
          }),
          (this._onTouchstart = s => {
            if (sT(s)) {
              this._modality.next('keyboard');
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next('touch'),
              (this._mostRecentTarget = bt(s));
          }),
          (this._options = M(M({}, cT), i)),
          (this.modalityDetected = this._modality.pipe(en(1))),
          (this.modalityChanged = this.modalityDetected.pipe(z1())),
          a.isBrowser &&
            o.runOutsideAngular(() => {
              n.addEventListener('keydown', this._onKeydown, Bo),
                n.addEventListener('mousedown', this._onMousedown, Bo),
                n.addEventListener('touchstart', this._onTouchstart, Bo);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener('keydown', this._onKeydown, Bo),
            document.removeEventListener('mousedown', this._onMousedown, Bo),
            document.removeEventListener('touchstart', this._onTouchstart, Bo));
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Se), g(T), g(Y), g(lT, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var Il = (function (t) {
    return (
      (t[(t.IMMEDIATE = 0)] = 'IMMEDIATE'),
      (t[(t.EVENTUAL = 1)] = 'EVENTUAL'),
      t
    );
  })(Il || {}),
  dT = new F('cdk-focus-monitor-default-options'),
  Ll = rh({ passive: !0, capture: !0 }),
  Aw = (() => {
    let e = class e {
      constructor(a, o, n, i, s) {
        (this._ngZone = a),
          (this._platform = o),
          (this._inputModalityDetector = n),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new C()),
          (this._rootNodeFocusAndBlurListener = l => {
            let c = bt(l);
            for (let h = c; h; h = h.parentElement)
              l.type === 'focus' ? this._onFocus(l, h) : this._onBlur(l, h);
          }),
          (this._document = i),
          (this._detectionMode = s?.detectionMode || Il.IMMEDIATE);
      }
      monitor(a, o = !1) {
        let n = Va(a);
        if (!this._platform.isBrowser || n.nodeType !== 1) return D();
        let i = U9(n) || this._getDocument(),
          s = this._elementInfo.get(n);
        if (s) return o && (s.checkChildren = !0), s.subject;
        let l = { checkChildren: o, subject: new C(), rootNode: i };
        return (
          this._elementInfo.set(n, l),
          this._registerGlobalListeners(l),
          l.subject
        );
      }
      stopMonitoring(a) {
        let o = Va(a),
          n = this._elementInfo.get(o);
        n &&
          (n.subject.complete(),
          this._setClasses(o),
          this._elementInfo.delete(o),
          this._removeGlobalListeners(n));
      }
      focusVia(a, o, n) {
        let i = Va(a),
          s = this._getDocument().activeElement;
        i === s
          ? this._getClosestElementsInfo(i).forEach(([l, c]) =>
              this._originChanged(l, o, c),
            )
          : (this._setOrigin(o), typeof i.focus == 'function' && i.focus(n));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((a, o) => this.stopMonitoring(o));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(a) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(a)
              ? 'touch'
              : 'program'
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : a && this._isLastInteractionFromInputLabel(a)
              ? 'mouse'
              : 'program';
      }
      _shouldBeAttributedToTouch(a) {
        return (
          this._detectionMode === Il.EVENTUAL ||
          !!a?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(a, o) {
        a.classList.toggle('cdk-focused', !!o),
          a.classList.toggle('cdk-touch-focused', o === 'touch'),
          a.classList.toggle('cdk-keyboard-focused', o === 'keyboard'),
          a.classList.toggle('cdk-mouse-focused', o === 'mouse'),
          a.classList.toggle('cdk-program-focused', o === 'program');
      }
      _setOrigin(a, o = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = a),
            (this._originFromTouchInteraction = a === 'touch' && o),
            this._detectionMode === Il.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let n = this._originFromTouchInteraction ? zw : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), n);
          }
        });
      }
      _onFocus(a, o) {
        let n = this._elementInfo.get(o),
          i = bt(a);
        !n ||
          (!n.checkChildren && o !== i) ||
          this._originChanged(o, this._getFocusOrigin(i), n);
      }
      _onBlur(a, o) {
        let n = this._elementInfo.get(o);
        !n ||
          (n.checkChildren &&
            a.relatedTarget instanceof Node &&
            o.contains(a.relatedTarget)) ||
          (this._setClasses(o), this._emitOrigin(n, null));
      }
      _emitOrigin(a, o) {
        a.subject.observers.length && this._ngZone.run(() => a.subject.next(o));
      }
      _registerGlobalListeners(a) {
        if (!this._platform.isBrowser) return;
        let o = a.rootNode,
          n = this._rootNodeFocusListenerCount.get(o) || 0;
        n ||
          this._ngZone.runOutsideAngular(() => {
            o.addEventListener('focus', this._rootNodeFocusAndBlurListener, Ll),
              o.addEventListener(
                'blur',
                this._rootNodeFocusAndBlurListener,
                Ll,
              );
          }),
          this._rootNodeFocusListenerCount.set(o, n + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                'focus',
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(S(this._stopInputModalityDetector))
              .subscribe(i => {
                this._setOrigin(i, !0);
              }));
      }
      _removeGlobalListeners(a) {
        let o = a.rootNode;
        if (this._rootNodeFocusListenerCount.has(o)) {
          let n = this._rootNodeFocusListenerCount.get(o);
          n > 1
            ? this._rootNodeFocusListenerCount.set(o, n - 1)
            : (o.removeEventListener(
                'focus',
                this._rootNodeFocusAndBlurListener,
                Ll,
              ),
              o.removeEventListener(
                'blur',
                this._rootNodeFocusAndBlurListener,
                Ll,
              ),
              this._rootNodeFocusListenerCount.delete(o));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            'focus',
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(a, o, n) {
        this._setClasses(a, o),
          this._emitOrigin(n, o),
          (this._lastFocusOrigin = o);
      }
      _getClosestElementsInfo(a) {
        let o = [];
        return (
          this._elementInfo.forEach((n, i) => {
            (i === a || (n.checkChildren && i.contains(a))) && o.push([i, n]);
          }),
          o
        );
      }
      _isLastInteractionFromInputLabel(a) {
        let { _mostRecentTarget: o, mostRecentModality: n } =
          this._inputModalityDetector;
        if (
          n !== 'mouse' ||
          !o ||
          o === a ||
          (a.nodeName !== 'INPUT' && a.nodeName !== 'TEXTAREA') ||
          a.disabled
        )
          return !1;
        let i = a.labels;
        if (i) {
          for (let s = 0; s < i.length; s++) if (i[s].contains(o)) return !0;
        }
        return !1;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(T), g(Se), g(hT), g(Y, 8), g(dT, 8));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var Hr = (function (t) {
    return (
      (t[(t.NONE = 0)] = 'NONE'),
      (t[(t.BLACK_ON_WHITE = 1)] = 'BLACK_ON_WHITE'),
      (t[(t.WHITE_ON_BLACK = 2)] = 'WHITE_ON_BLACK'),
      t
    );
  })(Hr || {}),
  bw = 'cdk-high-contrast-black-on-white',
  Fw = 'cdk-high-contrast-white-on-black',
  u7 = 'cdk-high-contrast-active',
  uT = (() => {
    let e = class e {
      constructor(a, o) {
        (this._platform = a),
          (this._document = o),
          (this._breakpointSubscription = m(K9)
            .observe('(forced-colors: active)')
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Hr.NONE;
        let a = this._document.createElement('div');
        (a.style.backgroundColor = 'rgb(1,2,3)'),
          (a.style.position = 'absolute'),
          this._document.body.appendChild(a);
        let o = this._document.defaultView || window,
          n = o && o.getComputedStyle ? o.getComputedStyle(a) : null,
          i = ((n && n.backgroundColor) || '').replace(/ /g, '');
        switch ((a.remove(), i)) {
          case 'rgb(0,0,0)':
          case 'rgb(45,50,54)':
          case 'rgb(32,32,32)':
            return Hr.WHITE_ON_BLACK;
          case 'rgb(255,255,255)':
          case 'rgb(255,250,239)':
            return Hr.BLACK_ON_WHITE;
        }
        return Hr.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let a = this._document.body.classList;
          a.remove(u7, bw, Fw), (this._hasCheckedHighContrastMode = !0);
          let o = this.getHighContrastMode();
          o === Hr.BLACK_ON_WHITE
            ? a.add(u7, bw)
            : o === Hr.WHITE_ON_BLACK && a.add(u7, Fw);
        }
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Se), g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  EFt = (() => {
    let e = class e {
      constructor(a) {
        a._applyBodyHighContrastModeCssClasses();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(uT));
    }),
      (e.ɵmod = j({ type: e })),
      (e.ɵinj = q({ imports: [Mw] }));
    let t = e;
    return t;
  })();
var fT = ['*'];
function mT(t, e) {
  if ((t & 1 && Le(0, 'span', 3), t & 2)) {
    let r = ae(2);
    he('icon', r.nzAddOnBeforeIcon)('template', r.nzAddOnBefore);
  }
}
function vT(t, e) {}
function gT(t, e) {
  if (
    (t & 1 && (Xe(0, 'span', 6), ge(1, vT, 0, 0, 'ng-template', 5), Je()),
    t & 2)
  ) {
    let r = ae(2),
      a = va(3);
    we('ant-input-affix-wrapper-disabled', r.disabled)(
      'ant-input-affix-wrapper-sm',
      r.isSmall,
    )('ant-input-affix-wrapper-lg', r.isLarge)(
      'ant-input-affix-wrapper-focused',
      r.focused,
    ),
      he('ngClass', r.affixInGroupStatusCls),
      de(),
      he('ngTemplateOutlet', a);
  }
}
function wT(t, e) {}
function xT(t, e) {
  if ((t & 1 && ge(0, wT, 0, 0, 'ng-template', 5), t & 2)) {
    ae(2);
    let r = va(5);
    he('ngTemplateOutlet', r);
  }
}
function MT(t, e) {
  if ((t & 1 && Le(0, 'span', 3), t & 2)) {
    let r = ae(2);
    he('icon', r.nzAddOnAfterIcon)('template', r.nzAddOnAfter);
  }
}
function yT(t, e) {
  if (
    (t & 1 &&
      (Xe(0, 'span', 2),
      ge(1, mT, 1, 2, 'span', 3)(2, gT, 2, 10, 'span', 4)(3, xT, 1, 1, null, 5)(
        4,
        MT,
        1,
        2,
        'span',
        3,
      ),
      Je()),
    t & 2)
  ) {
    let r = ae();
    de(),
      Ae(r.nzAddOnBefore || r.nzAddOnBeforeIcon ? 1 : -1),
      de(),
      Ae(r.isAffix || r.hasFeedback ? 2 : 3),
      de(2),
      Ae(r.nzAddOnAfter || r.nzAddOnAfterIcon ? 4 : -1);
  }
}
function bT(t, e) {}
function FT(t, e) {
  if ((t & 1 && ge(0, bT, 0, 0, 'ng-template', 5), t & 2)) {
    ae(2);
    let r = va(3);
    he('ngTemplateOutlet', r);
  }
}
function CT(t, e) {}
function zT(t, e) {
  if ((t & 1 && ge(0, CT, 0, 0, 'ng-template', 5), t & 2)) {
    ae(2);
    let r = va(5);
    he('ngTemplateOutlet', r);
  }
}
function AT(t, e) {
  if ((t & 1 && ge(0, FT, 1, 1, null, 5)(1, zT, 1, 1, null, 5), t & 2)) {
    let r = ae();
    Ae(r.isAffix ? 0 : 1);
  }
}
function ST(t, e) {
  if ((t & 1 && Le(0, 'span', 7), t & 2)) {
    let r = ae(2);
    he('icon', r.nzPrefixIcon)('template', r.nzPrefix);
  }
}
function VT(t, e) {}
function DT(t, e) {
  if ((t & 1 && Le(0, 'nz-form-item-feedback-icon', 9), t & 2)) {
    let r = ae(3);
    he('status', r.status);
  }
}
function _T(t, e) {
  if (
    (t & 1 &&
      (Xe(0, 'span', 8),
      ge(1, DT, 1, 1, 'nz-form-item-feedback-icon', 9),
      Je()),
    t & 2)
  ) {
    let r = ae(2);
    he('icon', r.nzSuffixIcon)('template', r.nzSuffix),
      de(),
      Ae(r.isFeedback ? 1 : -1);
  }
}
function HT(t, e) {
  if (
    (t & 1 &&
      ge(0, ST, 1, 2, 'span', 7)(1, VT, 0, 0, 'ng-template', 5)(
        2,
        _T,
        2,
        3,
        'span',
        8,
      ),
    t & 2)
  ) {
    let r = ae(),
      a = va(5);
    Ae(r.nzPrefix || r.nzPrefixIcon ? 0 : -1),
      de(),
      he('ngTemplateOutlet', a),
      de(),
      Ae(r.nzSuffix || r.nzSuffixIcon || r.isFeedback ? 2 : -1);
  }
}
function ET(t, e) {
  if (
    (t & 1 && (Xe(0, 'span', 10), Le(1, 'nz-form-item-feedback-icon', 9), Je()),
    t & 2)
  ) {
    let r = ae(2);
    de(), he('status', r.status);
  }
}
function TT(t, e) {
  if ((t & 1 && (wt(0), ge(1, ET, 2, 1, 'span', 10)), t & 2)) {
    let r = ae();
    de(), Ae(!r.isAddOn && !r.isAffix && r.isFeedback ? 1 : -1);
  }
}
var GFt = (() => {
    let e = class e {
      constructor(a) {
        this.elementRef = a;
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(E));
    }),
      (e.ɵdir = _({
        type: e,
        selectors: [
          ['nz-input-group', 'nzSuffix', ''],
          ['nz-input-group', 'nzPrefix', ''],
        ],
        standalone: !0,
      }));
    let t = e;
    return t;
  })(),
  KFt = (() => {
    let e = class e {
      constructor(a, o, n, i, s) {
        (this.focusMonitor = a),
          (this.elementRef = o),
          (this.renderer = n),
          (this.cdr = i),
          (this.directionality = s),
          (this.nzAddOnBeforeIcon = null),
          (this.nzAddOnAfterIcon = null),
          (this.nzPrefixIcon = null),
          (this.nzSuffixIcon = null),
          (this.nzStatus = ''),
          (this.nzSize = 'default'),
          (this.nzSearch = !1),
          (this.nzCompact = !1),
          (this.isLarge = !1),
          (this.isSmall = !1),
          (this.isAffix = !1),
          (this.isAddOn = !1),
          (this.isFeedback = !1),
          (this.focused = !1),
          (this.disabled = !1),
          (this.dir = 'ltr'),
          (this.prefixCls = 'ant-input'),
          (this.affixStatusCls = {}),
          (this.groupStatusCls = {}),
          (this.affixInGroupStatusCls = {}),
          (this.status = ''),
          (this.hasFeedback = !1),
          (this.destroy$ = new C()),
          (this.nzFormStatusService = m(Tl, { optional: !0 })),
          (this.nzFormNoStatusService = m(D5, { optional: !0 }));
      }
      updateChildrenInputSize() {
        this.listOfNzInputDirective &&
          this.listOfNzInputDirective.forEach(a => (a.nzSize = this.nzSize));
      }
      ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
          .pipe(
            z1(
              (a, o) =>
                a.status === o.status && a.hasFeedback === o.hasFeedback,
            ),
            S(this.destroy$),
          )
          .subscribe(({ status: a, hasFeedback: o }) => {
            this.setStatusStyles(a, o);
          }),
          this.focusMonitor
            .monitor(this.elementRef, !0)
            .pipe(S(this.destroy$))
            .subscribe(a => {
              (this.focused = !!a), this.cdr.markForCheck();
            }),
          (this.dir = this.directionality.value),
          this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
            this.dir = a;
          });
      }
      ngAfterContentInit() {
        this.updateChildrenInputSize();
        let a = this.listOfNzInputDirective.changes.pipe(
          T1(this.listOfNzInputDirective),
        );
        a.pipe(
          Ve(o => Qo(a, ...o.map(n => n.disabled$))),
          Ee(() => a),
          I(o => o.some(n => n.disabled)),
          S(this.destroy$),
        ).subscribe(o => {
          (this.disabled = o), this.cdr.markForCheck();
        });
      }
      ngOnChanges(a) {
        let {
          nzSize: o,
          nzSuffix: n,
          nzPrefix: i,
          nzPrefixIcon: s,
          nzSuffixIcon: l,
          nzAddOnAfter: c,
          nzAddOnBefore: h,
          nzAddOnAfterIcon: d,
          nzAddOnBeforeIcon: u,
          nzStatus: p,
        } = a;
        o &&
          (this.updateChildrenInputSize(),
          (this.isLarge = this.nzSize === 'large'),
          (this.isSmall = this.nzSize === 'small')),
          (n || i || s || l) &&
            (this.isAffix = !!(
              this.nzSuffix ||
              this.nzPrefix ||
              this.nzPrefixIcon ||
              this.nzSuffixIcon
            )),
          (c || h || d || u) &&
            ((this.isAddOn = !!(
              this.nzAddOnAfter ||
              this.nzAddOnBefore ||
              this.nzAddOnAfterIcon ||
              this.nzAddOnBeforeIcon
            )),
            this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),
          p && this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef),
          this.destroy$.next(),
          this.destroy$.complete();
      }
      setStatusStyles(a, o) {
        (this.status = a), (this.hasFeedback = o), (this.isFeedback = !!a && o);
        let n = !!(
          this.nzSuffix ||
          this.nzPrefix ||
          this.nzPrefixIcon ||
          this.nzSuffixIcon
        );
        (this.isAffix = n || (!this.isAddOn && o)),
          (this.affixInGroupStatusCls =
            this.isAffix || this.isFeedback
              ? (this.affixStatusCls = Vo(
                  `${this.prefixCls}-affix-wrapper`,
                  a,
                  o,
                ))
              : {}),
          this.cdr.markForCheck(),
          (this.affixStatusCls = Vo(
            `${this.prefixCls}-affix-wrapper`,
            this.isAddOn ? '' : a,
            this.isAddOn ? !1 : o,
          )),
          (this.groupStatusCls = Vo(
            `${this.prefixCls}-group-wrapper`,
            this.isAddOn ? a : '',
            this.isAddOn ? o : !1,
          ));
        let i = M(M({}, this.affixStatusCls), this.groupStatusCls);
        Object.keys(i).forEach(s => {
          i[s]
            ? this.renderer.addClass(this.elementRef.nativeElement, s)
            : this.renderer.removeClass(this.elementRef.nativeElement, s);
        });
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v(Aw), v(E), v(Ce), v(_e), v($e));
    }),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['nz-input-group']],
        contentQueries: function (o, n, i) {
          if ((o & 1 && Mn(i, _5, 4), o & 2)) {
            let s;
            v1((s = g1())) && (n.listOfNzInputDirective = s);
          }
        },
        hostVars: 40,
        hostBindings: function (o, n) {
          o & 2 &&
            we('ant-input-group-compact', n.nzCompact)(
              'ant-input-search-enter-button',
              n.nzSearch,
            )('ant-input-search', n.nzSearch)(
              'ant-input-search-rtl',
              n.dir === 'rtl',
            )('ant-input-search-sm', n.nzSearch && n.isSmall)(
              'ant-input-search-large',
              n.nzSearch && n.isLarge,
            )('ant-input-group-wrapper', n.isAddOn)(
              'ant-input-group-wrapper-rtl',
              n.dir === 'rtl',
            )('ant-input-group-wrapper-lg', n.isAddOn && n.isLarge)(
              'ant-input-group-wrapper-sm',
              n.isAddOn && n.isSmall,
            )('ant-input-affix-wrapper', n.isAffix && !n.isAddOn)(
              'ant-input-affix-wrapper-rtl',
              n.dir === 'rtl',
            )('ant-input-affix-wrapper-focused', n.isAffix && n.focused)(
              'ant-input-affix-wrapper-disabled',
              n.isAffix && n.disabled,
            )(
              'ant-input-affix-wrapper-lg',
              n.isAffix && !n.isAddOn && n.isLarge,
            )(
              'ant-input-affix-wrapper-sm',
              n.isAffix && !n.isAddOn && n.isSmall,
            )('ant-input-group', !n.isAffix && !n.isAddOn)(
              'ant-input-group-rtl',
              n.dir === 'rtl',
            )('ant-input-group-lg', !n.isAffix && !n.isAddOn && n.isLarge)(
              'ant-input-group-sm',
              !n.isAffix && !n.isAddOn && n.isSmall,
            );
        },
        inputs: {
          nzAddOnBeforeIcon: 'nzAddOnBeforeIcon',
          nzAddOnAfterIcon: 'nzAddOnAfterIcon',
          nzPrefixIcon: 'nzPrefixIcon',
          nzSuffixIcon: 'nzSuffixIcon',
          nzAddOnBefore: 'nzAddOnBefore',
          nzAddOnAfter: 'nzAddOnAfter',
          nzPrefix: 'nzPrefix',
          nzStatus: 'nzStatus',
          nzSuffix: 'nzSuffix',
          nzSize: 'nzSize',
          nzSearch: [2, 'nzSearch', 'nzSearch', G],
          nzCompact: [2, 'nzCompact', 'nzCompact', G],
        },
        exportAs: ['nzInputGroup'],
        standalone: !0,
        features: [h1([D5]), ke, ee, t1],
        ngContentSelectors: fT,
        decls: 6,
        vars: 1,
        consts: [
          ['affixTemplate', ''],
          ['contentTemplate', ''],
          [1, 'ant-input-wrapper', 'ant-input-group'],
          ['nz-input-group-slot', '', 'type', 'addon', 3, 'icon', 'template'],
          [
            1,
            'ant-input-affix-wrapper',
            3,
            'ant-input-affix-wrapper-disabled',
            'ant-input-affix-wrapper-sm',
            'ant-input-affix-wrapper-lg',
            'ant-input-affix-wrapper-focused',
            'ngClass',
          ],
          [3, 'ngTemplateOutlet'],
          [1, 'ant-input-affix-wrapper', 3, 'ngClass'],
          ['nz-input-group-slot', '', 'type', 'prefix', 3, 'icon', 'template'],
          ['nz-input-group-slot', '', 'type', 'suffix', 3, 'icon', 'template'],
          [3, 'status'],
          ['nz-input-group-slot', '', 'type', 'suffix'],
        ],
        template: function (o, n) {
          o & 1 &&
            (gt(),
            ge(0, yT, 5, 3, 'span', 2)(1, AT, 2, 1)(
              2,
              HT,
              3,
              3,
              'ng-template',
              null,
              0,
              pr,
            )(4, TT, 2, 1, 'ng-template', null, 1, pr)),
            o & 2 && Ae(n.isAddOn ? 0 : 1);
        },
        dependencies: [xw, Qi, Xi, ww, kl],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var Pl = (() => {
  let e = class e {
    set nzAutosize(a) {
      typeof a == 'string' || a === !0
        ? (this.autosize = !0)
        : (n =>
            typeof n != 'string' &&
            typeof n != 'boolean' &&
            (!!n.maxRows || !!n.minRows))(a) &&
          ((this.autosize = !0),
          (this.minRows = a.minRows),
          (this.maxRows = a.maxRows),
          (this.maxHeight = this.setMaxHeight()),
          (this.minHeight = this.setMinHeight()));
    }
    resizeToFitContent(a = !1) {
      if ((this.cacheTextareaLineHeight(), !this.cachedLineHeight)) return;
      let o = this.el,
        n = o.value;
      if (
        !a &&
        this.minRows === this.previousMinRows &&
        n === this.previousValue
      )
        return;
      let i = o.placeholder;
      o.classList.add('nz-textarea-autosize-measuring'), (o.placeholder = '');
      let s =
        Math.round((o.scrollHeight - this.inputGap) / this.cachedLineHeight) *
          this.cachedLineHeight +
        this.inputGap;
      this.maxHeight !== null && s > this.maxHeight && (s = this.maxHeight),
        this.minHeight !== null && s < this.minHeight && (s = this.minHeight),
        (o.style.height = `${s}px`),
        o.classList.remove('nz-textarea-autosize-measuring'),
        (o.placeholder = i),
        typeof requestAnimationFrame < 'u' &&
          this.ngZone.runOutsideAngular(() =>
            requestAnimationFrame(() => {
              let { selectionStart: l, selectionEnd: c } = o;
              !this.destroy$.isStopped &&
                document.activeElement === o &&
                o.setSelectionRange(l, c);
            }),
          ),
        (this.previousValue = n),
        (this.previousMinRows = this.minRows);
    }
    cacheTextareaLineHeight() {
      if (this.cachedLineHeight >= 0 || !this.el.parentNode) return;
      let a = this.el.cloneNode(!1);
      (a.rows = 1),
        (a.style.position = 'absolute'),
        (a.style.visibility = 'hidden'),
        (a.style.border = 'none'),
        (a.style.padding = '0'),
        (a.style.height = ''),
        (a.style.minHeight = ''),
        (a.style.maxHeight = ''),
        (a.style.overflow = 'hidden'),
        this.el.parentNode.appendChild(a),
        (this.cachedLineHeight = a.clientHeight - this.inputGap),
        this.el.parentNode.removeChild(a),
        (this.maxHeight = this.setMaxHeight()),
        (this.minHeight = this.setMinHeight());
    }
    setMinHeight() {
      let a =
        this.minRows && this.cachedLineHeight
          ? this.minRows * this.cachedLineHeight + this.inputGap
          : null;
      return a !== null && (this.el.style.minHeight = `${a}px`), a;
    }
    setMaxHeight() {
      let a =
        this.maxRows && this.cachedLineHeight
          ? this.maxRows * this.cachedLineHeight + this.inputGap
          : null;
      return a !== null && (this.el.style.maxHeight = `${a}px`), a;
    }
    noopInputHandler() {}
    constructor(a, o, n, i) {
      (this.elementRef = a),
        (this.ngZone = o),
        (this.platform = n),
        (this.resizeService = i),
        (this.autosize = !1),
        (this.el = this.elementRef.nativeElement),
        (this.maxHeight = null),
        (this.minHeight = null),
        (this.destroy$ = new C()),
        (this.inputGap = 10);
    }
    ngAfterViewInit() {
      this.autosize &&
        this.platform.isBrowser &&
        (this.resizeToFitContent(),
        this.resizeService
          .subscribe()
          .pipe(S(this.destroy$))
          .subscribe(() => this.resizeToFitContent(!0)));
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
    ngDoCheck() {
      this.autosize && this.platform.isBrowser && this.resizeToFitContent();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(E), v(T), v(Se), v(Ao));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['textarea', 'nzAutosize', '']],
      hostAttrs: ['rows', '1'],
      hostBindings: function (o, n) {
        o & 1 &&
          e1('input', function () {
            return n.noopInputHandler();
          });
      },
      inputs: { nzAutosize: 'nzAutosize' },
      exportAs: ['nzAutosize'],
      standalone: !0,
    }));
  let t = e;
  return t;
})();
var Sw = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var H5 = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [['button', 'nz-trans-button', '']],
      hostVars: 8,
      hostBindings: function (o, n) {
        o & 2 &&
          i0('border', '0')('background', 'transparent')('padding', '0')(
            'line-height',
            'inherit',
          );
      },
      standalone: !0,
    }));
  let t = e;
  return t;
})();
var E5 = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var f7 = class {
    constructor(e, r) {
      this._document = r;
      let a = (this._textarea = this._document.createElement('textarea')),
        o = a.style;
      (o.position = 'fixed'),
        (o.top = o.opacity = '0'),
        (o.left = '-999em'),
        a.setAttribute('aria-hidden', 'true'),
        (a.value = e),
        (a.readOnly = !0),
        (this._document.fullscreenElement || this._document.body).appendChild(
          a,
        );
    }
    copy() {
      let e = this._textarea,
        r = !1;
      try {
        if (e) {
          let a = this._document.activeElement;
          e.select(),
            e.setSelectionRange(0, e.value.length),
            (r = this._document.execCommand('copy')),
            a && a.focus();
        }
      } catch {}
      return r;
    }
    destroy() {
      let e = this._textarea;
      e && (e.remove(), (this._textarea = void 0));
    }
  },
  Dw = (() => {
    let e = class e {
      constructor(a) {
        this._document = a;
      }
      copy(a) {
        let o = this.beginCopy(a),
          n = o.copy();
        return o.destroy(), n;
      }
      beginCopy(a) {
        return new f7(a, this._document);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(Y));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
var m7 = {
  locale: 'en',
  Pagination: {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  },
  DatePicker: {
    lang: {
      placeholder: 'Select date',
      yearPlaceholder: 'Select year',
      quarterPlaceholder: 'Select quarter',
      monthPlaceholder: 'Select month',
      weekPlaceholder: 'Select week',
      rangePlaceholder: ['Start date', 'End date'],
      rangeYearPlaceholder: ['Start year', 'End year'],
      rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
      rangeMonthPlaceholder: ['Start month', 'End month'],
      rangeWeekPlaceholder: ['Start week', 'End week'],
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'Ok',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      yearFormat: 'YYYY',
      dateFormat: 'M/D/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      monthBeforeYear: !0,
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century',
    },
    timePickerLocale: {
      placeholder: 'Select time',
      rangePlaceholder: ['Start time', 'End time'],
    },
  },
  TimePicker: {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Calendar: {
    lang: {
      placeholder: 'Select date',
      yearPlaceholder: 'Select year',
      quarterPlaceholder: 'Select quarter',
      monthPlaceholder: 'Select month',
      weekPlaceholder: 'Select week',
      rangePlaceholder: ['Start date', 'End date'],
      rangeYearPlaceholder: ['Start year', 'End year'],
      rangeMonthPlaceholder: ['Start month', 'End month'],
      rangeWeekPlaceholder: ['Start week', 'End week'],
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'Ok',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      yearFormat: 'YYYY',
      dateFormat: 'M/D/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      monthBeforeYear: !0,
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century',
    },
    timePickerLocale: {
      placeholder: 'Select time',
      rangePlaceholder: ['Start time', 'End time'],
    },
  },
  global: { placeholder: 'Please select' },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    selectNone: 'Clear all data',
  },
  Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
  Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page',
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file',
  },
  Empty: { description: 'No Data' },
  Icon: { icon: 'icon' },
  Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
  PageHeader: { back: 'Back' },
  Image: { preview: 'Preview' },
  CronExpression: {
    cronError: 'Invalid cron expression',
    second: 'second',
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    month: 'month',
    week: 'week',
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh',
    scanned: 'Scanned',
  },
};
var v7 = {
  locale: 'zh-cn',
  Pagination: {
    items_per_page: '\u6761/\u9875',
    jump_to: '\u8DF3\u81F3',
    jump_to_confirm: '\u786E\u5B9A',
    page: '\u9875',
    prev_page: '\u4E0A\u4E00\u9875',
    next_page: '\u4E0B\u4E00\u9875',
    prev_5: '\u5411\u524D 5 \u9875',
    next_5: '\u5411\u540E 5 \u9875',
    prev_3: '\u5411\u524D 3 \u9875',
    next_3: '\u5411\u540E 3 \u9875',
    page_size: '\u9875\u7801',
  },
  DatePicker: {
    lang: {
      placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      yearPlaceholder: '\u8BF7\u9009\u62E9\u5E74\u4EFD',
      quarterPlaceholder: '\u8BF7\u9009\u62E9\u5B63\u5EA6',
      monthPlaceholder: '\u8BF7\u9009\u62E9\u6708\u4EFD',
      weekPlaceholder: '\u8BF7\u9009\u62E9\u5468',
      rangePlaceholder: [
        '\u5F00\u59CB\u65E5\u671F',
        '\u7ED3\u675F\u65E5\u671F',
      ],
      rangeYearPlaceholder: [
        '\u5F00\u59CB\u5E74\u4EFD',
        '\u7ED3\u675F\u5E74\u4EFD',
      ],
      rangeQuarterPlaceholder: [
        '\u5F00\u59CB\u5B63\u5EA6',
        '\u7ED3\u675F\u5B63\u5EA6',
      ],
      rangeMonthPlaceholder: [
        '\u5F00\u59CB\u6708\u4EFD',
        '\u7ED3\u675F\u6708\u4EFD',
      ],
      rangeWeekPlaceholder: ['\u5F00\u59CB\u5468', '\u7ED3\u675F\u5468'],
      locale: 'zh_CN',
      today: '\u4ECA\u5929',
      now: '\u6B64\u523B',
      backToToday: '\u8FD4\u56DE\u4ECA\u5929',
      ok: '\u786E\u5B9A',
      timeSelect: '\u9009\u62E9\u65F6\u95F4',
      dateSelect: '\u9009\u62E9\u65E5\u671F',
      weekSelect: '\u9009\u62E9\u5468',
      clear: '\u6E05\u9664',
      month: '\u6708',
      year: '\u5E74',
      previousMonth: '\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)',
      nextMonth: '\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)',
      monthSelect: '\u9009\u62E9\u6708\u4EFD',
      yearSelect: '\u9009\u62E9\u5E74\u4EFD',
      decadeSelect: '\u9009\u62E9\u5E74\u4EE3',
      yearFormat: 'YYYY\u5E74',
      dayFormat: 'D\u65E5',
      dateFormat: 'YYYY\u5E74M\u6708D\u65E5',
      dateTimeFormat: 'YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2',
      previousYear:
        '\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)',
      nextYear:
        '\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)',
      previousDecade: '\u4E0A\u4E00\u5E74\u4EE3',
      nextDecade: '\u4E0B\u4E00\u5E74\u4EE3',
      previousCentury: '\u4E0A\u4E00\u4E16\u7EAA',
      nextCentury: '\u4E0B\u4E00\u4E16\u7EAA',
    },
    timePickerLocale: {
      placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
      rangePlaceholder: [
        '\u5F00\u59CB\u65F6\u95F4',
        '\u7ED3\u675F\u65F6\u95F4',
      ],
    },
  },
  TimePicker: {
    placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
    rangePlaceholder: ['\u5F00\u59CB\u65F6\u95F4', '\u7ED3\u675F\u65F6\u95F4'],
  },
  Calendar: {
    lang: {
      placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      yearPlaceholder: '\u8BF7\u9009\u62E9\u5E74\u4EFD',
      quarterPlaceholder: '\u8BF7\u9009\u62E9\u5B63\u5EA6',
      monthPlaceholder: '\u8BF7\u9009\u62E9\u6708\u4EFD',
      weekPlaceholder: '\u8BF7\u9009\u62E9\u5468',
      rangePlaceholder: [
        '\u5F00\u59CB\u65E5\u671F',
        '\u7ED3\u675F\u65E5\u671F',
      ],
      rangeYearPlaceholder: [
        '\u5F00\u59CB\u5E74\u4EFD',
        '\u7ED3\u675F\u5E74\u4EFD',
      ],
      rangeMonthPlaceholder: [
        '\u5F00\u59CB\u6708\u4EFD',
        '\u7ED3\u675F\u6708\u4EFD',
      ],
      rangeWeekPlaceholder: ['\u5F00\u59CB\u5468', '\u7ED3\u675F\u5468'],
      locale: 'zh_CN',
      today: '\u4ECA\u5929',
      now: '\u6B64\u523B',
      backToToday: '\u8FD4\u56DE\u4ECA\u5929',
      ok: '\u786E\u5B9A',
      timeSelect: '\u9009\u62E9\u65F6\u95F4',
      dateSelect: '\u9009\u62E9\u65E5\u671F',
      weekSelect: '\u9009\u62E9\u5468',
      clear: '\u6E05\u9664',
      month: '\u6708',
      year: '\u5E74',
      previousMonth: '\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)',
      nextMonth: '\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)',
      monthSelect: '\u9009\u62E9\u6708\u4EFD',
      yearSelect: '\u9009\u62E9\u5E74\u4EFD',
      decadeSelect: '\u9009\u62E9\u5E74\u4EE3',
      yearFormat: 'YYYY\u5E74',
      dayFormat: 'D\u65E5',
      dateFormat: 'YYYY\u5E74M\u6708D\u65E5',
      dateTimeFormat: 'YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2',
      previousYear:
        '\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)',
      nextYear:
        '\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)',
      previousDecade: '\u4E0A\u4E00\u5E74\u4EE3',
      nextDecade: '\u4E0B\u4E00\u5E74\u4EE3',
      previousCentury: '\u4E0A\u4E00\u4E16\u7EAA',
      nextCentury: '\u4E0B\u4E00\u4E16\u7EAA',
    },
    timePickerLocale: {
      placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
      rangePlaceholder: [
        '\u5F00\u59CB\u65F6\u95F4',
        '\u7ED3\u675F\u65F6\u95F4',
      ],
    },
  },
  global: { placeholder: '\u8BF7\u9009\u62E9' },
  Table: {
    filterTitle: '\u7B5B\u9009',
    filterConfirm: '\u786E\u5B9A',
    filterReset: '\u91CD\u7F6E',
    filterEmptyText: '\u65E0\u7B5B\u9009\u9879',
    selectAll: '\u5168\u9009\u5F53\u9875',
    selectInvert: '\u53CD\u9009\u5F53\u9875',
    selectionAll: '\u5168\u9009\u6240\u6709',
    sortTitle: '\u6392\u5E8F',
    expand: '\u5C55\u5F00\u884C',
    collapse: '\u5173\u95ED\u884C',
    triggerDesc: '\u70B9\u51FB\u964D\u5E8F',
    triggerAsc: '\u70B9\u51FB\u5347\u5E8F',
    cancelSort: '\u53D6\u6D88\u6392\u5E8F',
    filterCheckall: '\u5168\u9009',
    filterSearchPlaceholder: '\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22',
    selectNone: '\u6E05\u7A7A\u6240\u6709',
  },
  Modal: {
    okText: '\u786E\u5B9A',
    cancelText: '\u53D6\u6D88',
    justOkText: '\u77E5\u9053\u4E86',
  },
  Popconfirm: { cancelText: '\u53D6\u6D88', okText: '\u786E\u5B9A' },
  Transfer: {
    searchPlaceholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9',
    itemUnit: '\u9879',
    itemsUnit: '\u9879',
    remove: '\u5220\u9664',
    selectCurrent: '\u5168\u9009\u5F53\u9875',
    removeCurrent: '\u5220\u9664\u5F53\u9875',
    selectAll: '\u5168\u9009\u6240\u6709',
    removeAll: '\u5220\u9664\u5168\u90E8',
    selectInvert: '\u53CD\u9009\u5F53\u9875',
  },
  Upload: {
    uploading: '\u6587\u4EF6\u4E0A\u4F20\u4E2D',
    removeFile: '\u5220\u9664\u6587\u4EF6',
    uploadError: '\u4E0A\u4F20\u9519\u8BEF',
    previewFile: '\u9884\u89C8\u6587\u4EF6',
    downloadFile: '\u4E0B\u8F7D\u6587\u4EF6',
  },
  Empty: { description: '\u6682\u65E0\u6570\u636E' },
  Icon: { icon: '\u56FE\u6807' },
  Text: {
    edit: '\u7F16\u8F91',
    copy: '\u590D\u5236',
    copied: '\u590D\u5236\u6210\u529F',
    expand: '\u5C55\u5F00',
  },
  PageHeader: { back: '\u8FD4\u56DE' },
  Image: { preview: '\u9884\u89C8' },
  CronExpression: {
    cronError: 'cron \u8868\u8FBE\u5F0F\u4E0D\u5408\u6CD5',
    second: '\u79D2',
    minute: '\u5206\u949F',
    hour: '\u5C0F\u65F6',
    day: '\u65E5',
    month: '\u6708',
    week: '\u5468',
  },
  QRCode: {
    expired: '\u4E8C\u7EF4\u7801\u8FC7\u671F',
    refresh: '\u70B9\u51FB\u5237\u65B0',
    scanned: '\u5DF2\u626B\u63CF',
  },
};
var _w = new F('nz-i18n');
var Hw = new F('nz-date-locale');
var w0 = (() => {
  let e = class e {
    get localeChange() {
      return this._change.asObservable();
    }
    constructor() {
      (this._change = new Pe(this._locale)),
        this.setLocale(m(_w, { optional: !0 }) || v7),
        this.setDateLocale(m(Hw, { optional: !0 }));
    }
    translate(a, o) {
      let n = this._getObjectPath(this._locale, a);
      return typeof n == 'string'
        ? (o &&
            Object.keys(o).forEach(
              i => (n = n.replace(new RegExp(`%${i}%`, 'g'), o[i])),
            ),
          n)
        : a;
    }
    setLocale(a) {
      (this._locale && this._locale.locale === a.locale) ||
        ((this._locale = a), this._change.next(a));
    }
    getLocale() {
      return this._locale;
    }
    getLocaleId() {
      return this._locale ? this._locale.locale : '';
    }
    setDateLocale(a) {
      this.dateLocale = a;
    }
    getDateLocale() {
      return this.dateLocale;
    }
    getLocaleData(a, o) {
      let n = a ? this._getObjectPath(this._locale, a) : this._locale;
      return (
        !n &&
          !o &&
          p0(`Missing translations for "${a}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`),
        n || o || this._getObjectPath(m7, a) || {}
      );
    }
    _getObjectPath(a, o) {
      let n = a,
        i = o.split('.'),
        s = i.length,
        l = 0;
      for (; n && l < s; ) n = n[i[l++]];
      return l === s ? n : null;
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
  let t = e;
  return t;
})();
var UCt = (() => {
  let e = class e {
    constructor(a) {
      this._locale = a;
    }
    transform(a, o) {
      return this._locale.translate(a, o);
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(w0, 16));
  }),
    (e.ɵpipe = fn({ name: 'nzI18n', type: e, pure: !0, standalone: !0 }));
  let t = e;
  return t;
})();
var KCt = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var IT = new F('date-config');
function BT(t, e) {
  if ((t & 1 && (s0(0), Le(1, 'span', 2), l0()), t & 2)) {
    let r = e.$implicit;
    de(), he('nzType', r);
  }
}
var Oo = (() => {
  let e = class e {
    constructor(a, o, n, i) {
      (this.host = a),
        (this.cdr = o),
        (this.clipboard = n),
        (this.i18n = i),
        (this.copied = !1),
        (this.nativeElement = this.host.nativeElement),
        (this.copyTooltip = null),
        (this.copedTooltip = null),
        (this.copyIcon = 'copy'),
        (this.copedIcon = 'check'),
        (this.destroy$ = new C()),
        (this.icons = ['copy', 'check']),
        (this.textCopy = new W());
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(S(this.destroy$)).subscribe(() => {
        (this.locale = this.i18n.getLocaleData('Text')),
          this.updateTooltips(),
          this.cdr.markForCheck();
      });
    }
    ngOnChanges(a) {
      let { tooltips: o, icons: n } = a;
      o && this.updateTooltips(), n && this.updateIcons();
    }
    ngOnDestroy() {
      clearTimeout(this.copyId),
        this.destroy$.next(!0),
        this.destroy$.complete();
    }
    onClick() {
      if (this.copied) return;
      (this.copied = !0), this.cdr.detectChanges();
      let a = this.text;
      this.textCopy.emit(a), this.clipboard.copy(a), this.onCopied();
    }
    onCopied() {
      clearTimeout(this.copyId),
        (this.copyId = setTimeout(() => {
          (this.copied = !1), this.cdr.detectChanges();
        }, 3e3));
    }
    updateTooltips() {
      if (this.tooltips === null)
        (this.copedTooltip = null), (this.copyTooltip = null);
      else if (Array.isArray(this.tooltips)) {
        let [a, o] = this.tooltips;
        (this.copyTooltip = a || this.locale?.copy),
          (this.copedTooltip = o || this.locale?.copied);
      } else
        (this.copyTooltip = this.locale?.copy),
          (this.copedTooltip = this.locale?.copied);
      this.cdr.markForCheck();
    }
    updateIcons() {
      let [a, o] = this.icons;
      (this.copyIcon = a), (this.copedIcon = o), this.cdr.markForCheck();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(E), v(_e), v(Dw), v(w0));
  }),
    (e.ɵcmp = Ze({
      type: e,
      selectors: [['nz-text-copy']],
      inputs: { text: 'text', tooltips: 'tooltips', icons: 'icons' },
      outputs: { textCopy: 'textCopy' },
      exportAs: ['nzTextCopy'],
      standalone: !0,
      features: [ee, t1],
      decls: 2,
      vars: 4,
      consts: [
        [
          'type',
          'button',
          'nz-tooltip',
          '',
          'nz-trans-button',
          '',
          1,
          'ant-typography-copy',
          3,
          'click',
          'nzTooltipTitle',
        ],
        [4, 'nzStringTemplateOutlet'],
        ['nz-icon', '', 3, 'nzType'],
      ],
      template: function (o, n) {
        o & 1 &&
          (Xe(0, 'button', 0),
          e1('click', function () {
            return n.onClick();
          }),
          ge(1, BT, 2, 1, 'ng-container', 1),
          Je()),
          o & 2 &&
            (we('ant-typography-copy-success', n.copied),
            he('nzTooltipTitle', n.copied ? n.copedTooltip : n.copyTooltip),
            de(),
            he('nzStringTemplateOutlet', n.copied ? n.copedIcon : n.copyIcon));
      },
      dependencies: [wl, gl, E5, H5, m0, Ct, X0, Q0],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var OT = ['textarea'];
function NT(t, e) {
  if (t & 1) {
    let r = B0();
    Xe(0, 'textarea', 2, 0),
      e1('blur', function () {
        J1(r);
        let o = ae();
        return et(o.confirm());
      }),
      Je(),
      Xe(2, 'button', 3),
      e1('click', function () {
        J1(r);
        let o = ae();
        return et(o.confirm());
      }),
      Le(3, 'span', 4),
      Je();
  }
}
function RT(t, e) {
  if ((t & 1 && (s0(0), Le(1, 'span', 7), l0()), t & 2)) {
    let r = e.$implicit;
    de(), he('nzType', r);
  }
}
function qT(t, e) {
  if (t & 1) {
    let r = B0();
    Xe(0, 'button', 5),
      e1('click', function () {
        J1(r);
        let o = ae();
        return et(o.onClick());
      }),
      ge(1, RT, 2, 1, 'ng-container', 6),
      Je();
  }
  if (t & 2) {
    let r = ae();
    he(
      'nzTooltipTitle',
      r.tooltip === null
        ? null
        : r.tooltip || (r.locale == null ? null : r.locale.edit),
    ),
      de(),
      he('nzStringTemplateOutlet', r.icon);
  }
}
var No = (() => {
  let e = class e {
    set textarea(a) {
      this.textarea$.next(a);
    }
    constructor(a, o, n, i, s) {
      (this.ngZone = a),
        (this.host = o),
        (this.cdr = n),
        (this.i18n = i),
        (this.destroy$ = s),
        (this.editing = !1),
        (this.icon = 'edit'),
        (this.startEditing = new W()),
        (this.endEditing = new W(!0)),
        (this.nativeElement = this.host.nativeElement),
        (this.textarea$ = new Pe(null)),
        (this.injector = m(Oe));
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(S(this.destroy$)).subscribe(() => {
        (this.locale = this.i18n.getLocaleData('Text')),
          this.cdr.markForCheck();
      }),
        this.textarea$
          .pipe(
            Ve(a =>
              a
                ? new P(o =>
                    this.ngZone.runOutsideAngular(() =>
                      Vt(a.nativeElement, 'keydown').subscribe(o),
                    ),
                  )
                : Ge,
            ),
            S(this.destroy$),
          )
          .subscribe(a => {
            (a.keyCode !== 27 && a.keyCode !== 13) ||
              this.ngZone.run(() => {
                a.keyCode === 27 ? this.onCancel() : this.onEnter(a),
                  this.cdr.markForCheck();
              });
          }),
        this.textarea$
          .pipe(
            Ve(a =>
              a
                ? new P(o =>
                    this.ngZone.runOutsideAngular(() =>
                      Vt(a.nativeElement, 'input').subscribe(o),
                    ),
                  )
                : Ge,
            ),
            S(this.destroy$),
          )
          .subscribe(a => {
            this.currentText = a.target.value;
          });
    }
    onClick() {
      (this.beforeText = this.text),
        (this.currentText = this.beforeText),
        (this.editing = !0),
        this.startEditing.emit(),
        this.focusAndSetValue();
    }
    confirm() {
      (this.editing = !1), this.endEditing.emit(this.currentText);
    }
    onEnter(a) {
      a.stopPropagation(), a.preventDefault(), this.confirm();
    }
    onCancel() {
      (this.currentText = this.beforeText), this.confirm();
    }
    focusAndSetValue() {
      let { injector: a } = this;
      Tt(
        () => {
          this.textarea$
            .pipe(
              dt(o => o != null),
              S(this.destroy$),
            )
            .subscribe(o => {
              o.nativeElement.focus(),
                (o.nativeElement.value = this.currentText || ''),
                this.autosizeDirective.resizeToFitContent(),
                this.cdr.markForCheck();
            });
        },
        { injector: a },
      );
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(T), v(E), v(_e), v(w0), v(_a));
  }),
    (e.ɵcmp = Ze({
      type: e,
      selectors: [['nz-text-edit']],
      viewQuery: function (o, n) {
        if ((o & 1 && (rt(OT, 5), rt(Pl, 5)), o & 2)) {
          let i;
          v1((i = g1())) && (n.textarea = i.first),
            v1((i = g1())) && (n.autosizeDirective = i.first);
        }
      },
      inputs: { text: 'text', icon: 'icon', tooltip: 'tooltip' },
      outputs: { startEditing: 'startEditing', endEditing: 'endEditing' },
      exportAs: ['nzTextEdit'],
      standalone: !0,
      features: [h1([_a]), t1],
      decls: 2,
      vars: 1,
      consts: [
        ['textarea', ''],
        [
          'nz-tooltip',
          '',
          'nz-trans-button',
          '',
          1,
          'ant-typography-edit',
          3,
          'nzTooltipTitle',
        ],
        ['nz-input', '', 'nzAutosize', '', 3, 'blur'],
        [
          'nz-trans-button',
          '',
          1,
          'ant-typography-edit-content-confirm',
          3,
          'click',
        ],
        ['nz-icon', '', 'nzType', 'enter'],
        [
          'nz-tooltip',
          '',
          'nz-trans-button',
          '',
          1,
          'ant-typography-edit',
          3,
          'click',
          'nzTooltipTitle',
        ],
        [4, 'nzStringTemplateOutlet'],
        ['nz-icon', '', 3, 'nzType'],
      ],
      template: function (o, n) {
        o & 1 && ge(0, NT, 4, 0)(1, qT, 2, 2, 'button', 1),
          o & 2 && Ae(n.editing ? 0 : 1);
      },
      dependencies: [Sw, _5, Pl, E5, H5, m0, Ct, wl, gl, X0, Q0],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let t = e;
  return t;
})();
var jT = ['ellipsisContainer'],
  YT = ['expandable'],
  UT = ['contentTemplate'],
  $T = ['*'],
  WT = t => ({ content: t });
function GT(t, e) {
  t & 1 && wt(0);
}
function KT(t, e) {
  if ((t & 1 && (ge(0, GT, 1, 0), c0(1)), t & 2)) {
    let r = e.content;
    Ae(r ? -1 : 0), de(), ga(' ', r, ' ');
  }
}
function ZT(t, e) {}
function QT(t, e) {
  if ((t & 1 && c0(0), t & 2)) {
    let r = ae(3);
    ga(' ', r.nzSuffix, ' ');
  }
}
function XT(t, e) {
  if ((t & 1 && ge(0, ZT, 0, 0, 'ng-template', 5)(1, QT, 1, 1), t & 2)) {
    let r = ae(2),
      a = va(1);
    he('ngTemplateOutlet', a)(
      'ngTemplateOutletContext',
      em(3, WT, r.nzContent),
    ),
      de(),
      Ae(r.nzSuffix ? 1 : -1);
  }
}
function JT(t, e) {
  if ((t & 1 && c0(0), t & 2)) {
    let r = ae(3);
    ga(' ', r.ellipsisStr, ' ');
  }
}
function ek(t, e) {
  if ((t & 1 && c0(0), t & 2)) {
    let r = ae(3);
    ga(' ', r.nzSuffix, ' ');
  }
}
function tk(t, e) {
  if (t & 1) {
    let r = B0();
    Xe(0, 'a', 7, 2),
      e1('click', function () {
        J1(r);
        let o = ae(3);
        return et(o.onExpand());
      }),
      c0(2),
      Je();
  }
  if (t & 2) {
    let r = ae(3);
    de(2), ga(' ', r.locale == null ? null : r.locale.expand, ' ');
  }
}
function ak(t, e) {
  if (
    (t & 1 &&
      (Le(0, 'span', null, 1),
      ge(2, JT, 1, 1)(3, ek, 1, 1)(4, tk, 3, 1, 'a', 6)),
    t & 2)
  ) {
    let r = ae(2);
    de(2),
      Ae(r.isEllipsis ? 2 : -1),
      de(),
      Ae(r.nzSuffix ? 3 : -1),
      de(),
      Ae(r.nzExpandable && r.isEllipsis ? 4 : -1);
  }
}
function rk(t, e) {
  if ((t & 1 && ge(0, XT, 2, 5)(1, ak, 5, 3), t & 2)) {
    let r = ae();
    Ae(
      r.expanded ||
        (!r.hasOperationsWithEllipsis &&
          r.nzEllipsisRows === 1 &&
          !r.hasEllipsisObservers) ||
        r.canCssEllipsis ||
        (r.nzSuffix && r.expanded)
        ? 0
        : 1,
    );
  }
}
function ok(t, e) {
  if (t & 1) {
    let r = B0();
    Xe(0, 'nz-text-edit', 8),
      e1('endEditing', function (o) {
        J1(r);
        let n = ae();
        return et(n.onEndEditing(o));
      })('startEditing', function () {
        J1(r);
        let o = ae();
        return et(o.onStartEditing());
      }),
      Je();
  }
  if (t & 2) {
    let r = ae();
    he('text', r.nzContent)('icon', r.nzEditIcon)('tooltip', r.nzEditTooltip);
  }
}
function nk(t, e) {
  if (t & 1) {
    let r = B0();
    Xe(0, 'nz-text-copy', 9),
      e1('textCopy', function (o) {
        J1(r);
        let n = ae();
        return et(n.onTextCopy(o));
      }),
      Je();
  }
  if (t & 2) {
    let r = ae();
    he('text', r.copyText)('tooltips', r.nzCopyTooltips)(
      'icons',
      r.nzCopyIcons,
    );
  }
}
var ik = 'typography',
  sk = 'ant-typography-expand',
  Ro = class Ro {
    get hasEllipsisObservers() {
      return this.nzOnEllipsis.observers.length > 0;
    }
    get canCssEllipsis() {
      return (
        this.nzEllipsis &&
        this.cssEllipsis &&
        !this.expanded &&
        !this.hasEllipsisObservers
      );
    }
    get hasOperationsWithEllipsis() {
      return (
        (this.nzCopyable || this.nzEditable || this.nzExpandable) &&
        this.nzEllipsis
      );
    }
    get copyText() {
      return typeof this.nzCopyText == 'string'
        ? this.nzCopyText
        : this.nzContent;
    }
    constructor(e, r, a, o, n, i, s, l, c) {
      (this.nzConfigService = e),
        (this.host = r),
        (this.cdr = a),
        (this.viewContainerRef = o),
        (this.renderer = n),
        (this.platform = i),
        (this.i18n = s),
        (this.resizeService = l),
        (this.directionality = c),
        (this._nzModuleName = ik),
        (this.nzCopyable = !1),
        (this.nzEditable = !1),
        (this.nzDisabled = !1),
        (this.nzExpandable = !1),
        (this.nzEllipsis = !1),
        (this.nzCopyTooltips = void 0),
        (this.nzCopyIcons = ['copy', 'check']),
        (this.nzEditTooltip = void 0),
        (this.nzEditIcon = 'edit'),
        (this.nzEllipsisRows = 1),
        (this.nzContentChange = new W()),
        (this.nzCopy = new W()),
        (this.nzExpandChange = new W()),
        (this.nzOnEllipsis = new W()),
        (this.document = m(Y)),
        (this.expandableBtnElementCache = null),
        (this.editing = !1),
        (this.cssEllipsis = !1),
        (this.isEllipsis = !0),
        (this.expanded = !1),
        (this.ellipsisStr = '...'),
        (this.dir = 'ltr'),
        (this.viewInit = !1),
        (this.rfaId = -1),
        (this.destroy$ = new C()),
        (this.windowResizeSubscription = se.EMPTY);
    }
    onTextCopy(e) {
      this.nzCopy.emit(e);
    }
    onStartEditing() {
      this.editing = !0;
    }
    onEndEditing(e) {
      (this.editing = !1),
        this.nzContentChange.emit(e),
        this.nzContent === e && this.renderOnNextFrame(),
        this.cdr.markForCheck();
    }
    onExpand() {
      (this.isEllipsis = !1),
        (this.expanded = !0),
        this.nzExpandChange.emit(),
        this.nzOnEllipsis.emit(!1);
    }
    canUseCSSEllipsis() {
      return this.nzEditable ||
        this.nzCopyable ||
        this.nzExpandable ||
        this.nzSuffix ||
        this.hasEllipsisObservers
        ? !1
        : this.nzEllipsisRows === 1
          ? Gc('textOverflow')
          : Gc('webkitLineClamp');
    }
    renderOnNextFrame() {
      Y9(this.rfaId),
        !(
          !this.viewInit ||
          !this.nzEllipsis ||
          this.nzEllipsisRows < 0 ||
          this.expanded ||
          !this.platform.isBrowser
        ) &&
          (this.rfaId = t5(() => {
            this.syncEllipsis();
          }));
    }
    getOriginContentViewRef() {
      let e = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
        content: this.nzContent,
      });
      return (
        e.detectChanges(),
        {
          viewRef: e,
          removeView: () => {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(e));
          },
        }
      );
    }
    syncEllipsis() {
      if (this.cssEllipsis) return;
      let { viewRef: e, removeView: r } = this.getOriginContentViewRef(),
        a = [this.textCopyRef, this.textEditRef]
          .filter(c => c && c.nativeElement)
          .map(c => c.nativeElement),
        o = this.getExpandableBtnElement();
      o && a.push(o);
      let {
        contentNodes: n,
        text: i,
        ellipsis: s,
      } = B9(
        this.host.nativeElement,
        this.nzEllipsisRows,
        e.rootNodes,
        a,
        this.ellipsisStr,
        this.nzSuffix,
      );
      r(),
        (this.ellipsisText = i),
        s !== this.isEllipsis &&
          ((this.isEllipsis = s), this.nzOnEllipsis.emit(s));
      let l = this.ellipsisContainer.nativeElement;
      for (; l.firstChild; ) this.renderer.removeChild(l, l.firstChild);
      n.forEach(c => {
        this.renderer.appendChild(l, c.cloneNode(!0));
      }),
        this.cdr.markForCheck();
    }
    getExpandableBtnElement() {
      if (this.nzExpandable) {
        let e = this.locale ? this.locale.expand : '',
          r = this.expandableBtnElementCache;
        if (!r || r.innerText === e) {
          let a = this.document.createElement('a');
          (a.className = sk),
            (a.innerText = e),
            (this.expandableBtnElementCache = a);
        }
        return this.expandableBtnElementCache;
      } else return (this.expandableBtnElementCache = null), null;
    }
    renderAndSubscribeWindowResize() {
      this.platform.isBrowser &&
        (this.windowResizeSubscription.unsubscribe(),
        (this.cssEllipsis = this.canUseCSSEllipsis()),
        this.renderOnNextFrame(),
        (this.windowResizeSubscription = this.resizeService
          .subscribe()
          .pipe(S(this.destroy$))
          .subscribe(() => this.renderOnNextFrame())));
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(S(this.destroy$)).subscribe(() => {
        (this.locale = this.i18n.getLocaleData('Text')),
          this.cdr.markForCheck();
      }),
        this.directionality.change?.pipe(S(this.destroy$)).subscribe(e => {
          (this.dir = e), this.cdr.detectChanges();
        }),
        (this.dir = this.directionality.value);
    }
    ngAfterViewInit() {
      (this.viewInit = !0), this.renderAndSubscribeWindowResize();
    }
    ngOnChanges(e) {
      let {
        nzCopyable: r,
        nzEditable: a,
        nzExpandable: o,
        nzEllipsis: n,
        nzContent: i,
        nzEllipsisRows: s,
        nzSuffix: l,
      } = e;
      (r || a || o || n || i || s || l) &&
        this.nzEllipsis &&
        (this.expanded
          ? this.windowResizeSubscription.unsubscribe()
          : this.renderAndSubscribeWindowResize());
    }
    ngOnDestroy() {
      this.destroy$.next(!0),
        this.destroy$.complete(),
        (this.expandableBtnElementCache = null),
        this.windowResizeSubscription.unsubscribe();
    }
  };
(Ro.ɵfac = function (r) {
  return new (r || Ro)(
    v(Ta),
    v(E),
    v(_e),
    v(Qe),
    v(Ce),
    v(Se),
    v(w0),
    v(Ao),
    v($e),
  );
}),
  (Ro.ɵcmp = Ze({
    type: Ro,
    selectors: [
      ['nz-typography'],
      ['', 'nz-typography', ''],
      ['p', 'nz-paragraph', ''],
      ['span', 'nz-text', ''],
      ['h1', 'nz-title', ''],
      ['h2', 'nz-title', ''],
      ['h3', 'nz-title', ''],
      ['h4', 'nz-title', ''],
    ],
    viewQuery: function (r, a) {
      if (
        (r & 1 && (rt(No, 5), rt(Oo, 5), rt(jT, 5), rt(YT, 5), rt(UT, 5)),
        r & 2)
      ) {
        let o;
        v1((o = g1())) && (a.textEditRef = o.first),
          v1((o = g1())) && (a.textCopyRef = o.first),
          v1((o = g1())) && (a.ellipsisContainer = o.first),
          v1((o = g1())) && (a.expandableBtn = o.first),
          v1((o = g1())) && (a.contentTemplate = o.first);
      }
    },
    hostVars: 26,
    hostBindings: function (r, a) {
      r & 2 &&
        (i0(
          '-webkit-line-clamp',
          a.canCssEllipsis && a.nzEllipsisRows > 1 ? a.nzEllipsisRows : null,
        ),
        we('ant-typography', !a.editing)('ant-typography-rtl', a.dir === 'rtl')(
          'ant-typography-edit-content',
          a.editing,
        )('ant-typography-secondary', a.nzType === 'secondary')(
          'ant-typography-warning',
          a.nzType === 'warning',
        )('ant-typography-danger', a.nzType === 'danger')(
          'ant-typography-success',
          a.nzType === 'success',
        )('ant-typography-disabled', a.nzDisabled)(
          'ant-typography-ellipsis',
          a.nzEllipsis && !a.expanded,
        )('ant-typography-single-line', a.nzEllipsis && a.nzEllipsisRows === 1)(
          'ant-typography-ellipsis-single-line',
          a.canCssEllipsis && a.nzEllipsisRows === 1,
        )(
          'ant-typography-ellipsis-multiple-line',
          a.canCssEllipsis && a.nzEllipsisRows > 1,
        ));
    },
    inputs: {
      nzCopyable: [2, 'nzCopyable', 'nzCopyable', G],
      nzEditable: [2, 'nzEditable', 'nzEditable', G],
      nzDisabled: [2, 'nzDisabled', 'nzDisabled', G],
      nzExpandable: [2, 'nzExpandable', 'nzExpandable', G],
      nzEllipsis: [2, 'nzEllipsis', 'nzEllipsis', G],
      nzCopyTooltips: 'nzCopyTooltips',
      nzCopyIcons: 'nzCopyIcons',
      nzEditTooltip: 'nzEditTooltip',
      nzEditIcon: 'nzEditIcon',
      nzContent: 'nzContent',
      nzEllipsisRows: [2, 'nzEllipsisRows', 'nzEllipsisRows', fr],
      nzType: 'nzType',
      nzCopyText: 'nzCopyText',
      nzSuffix: 'nzSuffix',
    },
    outputs: {
      nzContentChange: 'nzContentChange',
      nzCopy: 'nzCopy',
      nzExpandChange: 'nzExpandChange',
      nzOnEllipsis: 'nzOnEllipsis',
    },
    exportAs: ['nzTypography'],
    standalone: !0,
    features: [ke, ee, t1],
    ngContentSelectors: $T,
    decls: 5,
    vars: 3,
    consts: [
      ['contentTemplate', ''],
      ['ellipsisContainer', ''],
      ['expandable', ''],
      [3, 'text', 'icon', 'tooltip'],
      [3, 'text', 'tooltips', 'icons'],
      [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
      [1, 'ant-typography-expand'],
      [1, 'ant-typography-expand', 3, 'click'],
      [3, 'endEditing', 'startEditing', 'text', 'icon', 'tooltip'],
      [3, 'textCopy', 'text', 'tooltips', 'icons'],
    ],
    template: function (r, a) {
      r & 1 &&
        (gt(),
        ge(0, KT, 2, 2, 'ng-template', null, 0, pr)(2, rk, 2, 1)(
          3,
          ok,
          1,
          3,
          'nz-text-edit',
          3,
        )(4, nk, 1, 3, 'nz-text-copy', 4)),
        r & 2 &&
          (de(2),
          Ae(a.editing ? -1 : 2),
          de(),
          Ae(a.nzEditable ? 3 : -1),
          de(),
          Ae(a.nzCopyable && !a.editing ? 4 : -1));
    },
    dependencies: [Xi, No, Oo],
    encapsulation: 2,
    changeDetection: 0,
  }));
var x0 = Ro;
ta([ka()], x0.prototype, 'nzCopyTooltips', void 0);
ta([ka()], x0.prototype, 'nzCopyIcons', void 0);
ta([ka()], x0.prototype, 'nzEditTooltip', void 0);
ta([ka()], x0.prototype, 'nzEditIcon', void 0);
ta([ka()], x0.prototype, 'nzEllipsisRows', void 0);
var lk = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({ imports: [x0, Oo, No] }));
  let t = e;
  return t;
})();
var ck = ['nz-button', ''],
  hk = ['*'];
function dk(t, e) {
  t & 1 && Le(0, 'span', 0);
}
var Tw = 'button',
  qo = class qo {
    insertSpan(e, r) {
      e.forEach(a => {
        if (a.nodeName === '#text') {
          let o = r.createElement('span'),
            n = r.parentNode(a);
          r.insertBefore(n, o, a), r.appendChild(o, a);
        }
      });
    }
    get iconOnly() {
      let e = Array.from(this.elementRef?.nativeElement?.childNodes || []),
        r = e.every(o => o.nodeName !== '#text'),
        a =
          e.filter(
            o =>
              !(
                o.nodeName === '#comment' ||
                o?.attributes?.getNamedItem('nz-icon')
              ),
          ).length == 0;
      return !!this.nzIconDirectiveElement && a && r;
    }
    constructor(e, r, a, o, n, i) {
      (this.ngZone = e),
        (this.elementRef = r),
        (this.cdr = a),
        (this.renderer = o),
        (this.nzConfigService = n),
        (this.directionality = i),
        (this._nzModuleName = Tw),
        (this.nzBlock = !1),
        (this.nzGhost = !1),
        (this.nzSearch = !1),
        (this.nzLoading = !1),
        (this.nzDanger = !1),
        (this.disabled = !1),
        (this.tabIndex = null),
        (this.nzType = null),
        (this.nzShape = null),
        (this.nzSize = 'default'),
        (this.dir = 'ltr'),
        (this.destroy$ = new C()),
        (this.loading$ = new C()),
        this.nzConfigService
          .getConfigChangeEventForComponent(Tw)
          .pipe(S(this.destroy$))
          .subscribe(() => {
            this.cdr.markForCheck();
          });
    }
    ngOnInit() {
      this.directionality.change?.pipe(S(this.destroy$)).subscribe(e => {
        (this.dir = e), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value),
        this.ngZone.runOutsideAngular(() => {
          Vt(this.elementRef.nativeElement, 'click', { capture: !0 })
            .pipe(S(this.destroy$))
            .subscribe(e => {
              ((this.disabled && e.target?.tagName === 'A') ||
                this.nzLoading) &&
                (e.preventDefault(), e.stopImmediatePropagation());
            });
        });
    }
    ngOnChanges(e) {
      let { nzLoading: r } = e;
      r && this.loading$.next(this.nzLoading);
    }
    ngAfterViewInit() {
      this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    }
    ngAfterContentInit() {
      this.loading$
        .pipe(
          T1(this.nzLoading),
          me(() => !!this.nzIconDirectiveElement),
          S(this.destroy$),
        )
        .subscribe(e => {
          let r = this.nzIconDirectiveElement.nativeElement;
          e
            ? this.renderer.setStyle(r, 'display', 'none')
            : this.renderer.removeStyle(r, 'display');
        });
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
(qo.ɵfac = function (r) {
  return new (r || qo)(v(T), v(E), v(_e), v(Ce), v(Ta), v($e));
}),
  (qo.ɵcmp = Ze({
    type: qo,
    selectors: [
      ['button', 'nz-button', ''],
      ['a', 'nz-button', ''],
    ],
    contentQueries: function (r, a, o) {
      if ((r & 1 && Mn(o, Ct, 5, E), r & 2)) {
        let n;
        v1((n = g1())) && (a.nzIconDirectiveElement = n.first);
      }
    },
    hostAttrs: [1, 'ant-btn'],
    hostVars: 34,
    hostBindings: function (r, a) {
      r & 2 &&
        (P0(
          'tabindex',
          a.disabled ? -1 : a.tabIndex === null ? null : a.tabIndex,
        )('disabled', a.disabled || null),
        we('ant-btn-default', a.nzType === 'default')(
          'ant-btn-primary',
          a.nzType === 'primary',
        )('ant-btn-dashed', a.nzType === 'dashed')(
          'ant-btn-link',
          a.nzType === 'link',
        )('ant-btn-text', a.nzType === 'text')(
          'ant-btn-circle',
          a.nzShape === 'circle',
        )('ant-btn-round', a.nzShape === 'round')(
          'ant-btn-lg',
          a.nzSize === 'large',
        )('ant-btn-sm', a.nzSize === 'small')('ant-btn-dangerous', a.nzDanger)(
          'ant-btn-loading',
          a.nzLoading,
        )('ant-btn-background-ghost', a.nzGhost)('ant-btn-block', a.nzBlock)(
          'ant-input-search-button',
          a.nzSearch,
        )('ant-btn-rtl', a.dir === 'rtl')('ant-btn-icon-only', a.iconOnly));
    },
    inputs: {
      nzBlock: [2, 'nzBlock', 'nzBlock', G],
      nzGhost: [2, 'nzGhost', 'nzGhost', G],
      nzSearch: [2, 'nzSearch', 'nzSearch', G],
      nzLoading: [2, 'nzLoading', 'nzLoading', G],
      nzDanger: [2, 'nzDanger', 'nzDanger', G],
      disabled: [2, 'disabled', 'disabled', G],
      tabIndex: 'tabIndex',
      nzType: 'nzType',
      nzShape: 'nzShape',
      nzSize: 'nzSize',
    },
    exportAs: ['nzButton'],
    standalone: !0,
    features: [ke, ee, t1],
    attrs: ck,
    ngContentSelectors: hk,
    decls: 2,
    vars: 1,
    consts: [['nz-icon', '', 'nzType', 'loading']],
    template: function (r, a) {
      r & 1 && (gt(), ge(0, dk, 1, 0, 'span', 0), wt(1)),
        r & 2 && Ae(a.nzLoading ? 0 : -1);
    },
    dependencies: [m0, Ct],
    encapsulation: 2,
    changeDetection: 0,
  }));
var w7 = qo;
ta([ka()], w7.prototype, 'nzSize', void 0);
var uk = (() => {
  let e = class e {
    setHiddenAttribute() {
      this.hidden
        ? typeof this.hidden == 'string'
          ? this.renderer.setAttribute(
              this.elementRef.nativeElement,
              'hidden',
              this.hidden,
            )
          : this.renderer.setAttribute(
              this.elementRef.nativeElement,
              'hidden',
              '',
            )
        : this.renderer.removeAttribute(
            this.elementRef.nativeElement,
            'hidden',
          );
    }
    constructor(a, o) {
      (this.elementRef = a),
        (this.renderer = o),
        (this.hidden = null),
        this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
    }
    ngOnChanges() {
      this.setHiddenAttribute();
    }
    ngAfterViewInit() {
      this.setHiddenAttribute();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(E), v(Ce));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [
        ['', 'nz-button', ''],
        ['nz-button-group'],
        ['', 'nz-icon', ''],
        ['', 'nz-menu-item', ''],
        ['', 'nz-submenu', ''],
        ['nz-select-top-control'],
        ['nz-select-placeholder'],
        ['nz-input-group'],
      ],
      inputs: { hidden: 'hidden' },
      standalone: !0,
      features: [ee],
    }));
  let t = e;
  return t;
})();
var x7 = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({}));
  let t = e;
  return t;
})();
var Bl = class {
  get waveAttributeName() {
    return this.insertExtraNode
      ? 'ant-click-animating'
      : 'ant-click-animating-without-extra-node';
  }
  constructor(e, r, a, o, n) {
    (this.triggerElement = e),
      (this.ngZone = r),
      (this.insertExtraNode = a),
      (this.platformId = o),
      (this.cspNonce = n),
      (this.waveTransitionDuration = 400),
      (this.styleForPseudo = null),
      (this.extraNode = null),
      (this.lastTime = 0),
      (this.onClick = i => {
        !this.triggerElement ||
          !this.triggerElement.getAttribute ||
          this.triggerElement.getAttribute('disabled') ||
          i.target.tagName === 'INPUT' ||
          this.triggerElement.className.indexOf('disabled') >= 0 ||
          this.fadeOutWave();
      }),
      (this.platform = new Se(this.platformId)),
      (this.clickHandler = this.onClick.bind(this)),
      this.bindTriggerEvent();
  }
  bindTriggerEvent() {
    this.platform.isBrowser &&
      this.ngZone.runOutsideAngular(() => {
        this.removeTriggerEvent(),
          this.triggerElement &&
            this.triggerElement.addEventListener(
              'click',
              this.clickHandler,
              !0,
            );
      });
  }
  removeTriggerEvent() {
    this.triggerElement &&
      this.triggerElement.removeEventListener('click', this.clickHandler, !0);
  }
  removeStyleAndExtraNode() {
    this.styleForPseudo &&
      document.body.contains(this.styleForPseudo) &&
      (document.body.removeChild(this.styleForPseudo),
      (this.styleForPseudo = null)),
      this.insertExtraNode &&
        this.triggerElement.contains(this.extraNode) &&
        this.triggerElement.removeChild(this.extraNode);
  }
  destroy() {
    this.removeTriggerEvent(), this.removeStyleAndExtraNode();
  }
  fadeOutWave() {
    let e = this.triggerElement,
      r = this.getWaveColor(e);
    e.setAttribute(this.waveAttributeName, 'true'),
      !(Date.now() < this.lastTime + this.waveTransitionDuration) &&
        (this.isValidColor(r) &&
          (this.styleForPseudo ||
            ((this.styleForPseudo = document.createElement('style')),
            this.cspNonce && (this.styleForPseudo.nonce = this.cspNonce)),
          (this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${r};
      }`),
          document.body.appendChild(this.styleForPseudo)),
        this.insertExtraNode &&
          (this.extraNode || (this.extraNode = document.createElement('div')),
          (this.extraNode.className = 'ant-click-animating-node'),
          e.appendChild(this.extraNode)),
        (this.lastTime = Date.now()),
        this.runTimeoutOutsideZone(() => {
          e.removeAttribute(this.waveAttributeName),
            this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration));
  }
  isValidColor(e) {
    return (
      !!e &&
      e !== '#ffffff' &&
      e !== 'rgb(255, 255, 255)' &&
      this.isNotGrey(e) &&
      !/rgba\(\d*, \d*, \d*, 0\)/.test(e) &&
      e !== 'transparent'
    );
  }
  isNotGrey(e) {
    let r = e.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
    return r && r[1] && r[2] && r[3] ? !(r[1] === r[2] && r[2] === r[3]) : !0;
  }
  getWaveColor(e) {
    let r = getComputedStyle(e);
    return (
      r.getPropertyValue('border-top-color') ||
      r.getPropertyValue('border-color') ||
      r.getPropertyValue('background-color')
    );
  }
  runTimeoutOutsideZone(e, r) {
    this.ngZone.runOutsideAngular(() => setTimeout(e, r));
  }
};
var kw = { disabled: !1 },
  Lw = new F('nz-wave-global-options');
function Iw(t) {
  return Et([{ provide: Lw, useValue: t }]);
}
var L_t = (() => {
  let e = class e {
    get disabled() {
      return this.waveDisabled;
    }
    get rendererRef() {
      return this.waveRenderer;
    }
    constructor(a, o) {
      (this.ngZone = a),
        (this.elementRef = o),
        (this.nzWaveExtraNode = !1),
        (this.waveDisabled = !1),
        (this.cspNonce = m(k0, { optional: !0 })),
        (this.platformId = m(V1)),
        (this.config = m(Lw, { optional: !0 })),
        (this.animationType = m(n0, { optional: !0 })),
        (this.waveDisabled = this.isConfigDisabled());
    }
    isConfigDisabled() {
      let a = !1;
      return (
        this.config &&
          typeof this.config.disabled == 'boolean' &&
          (a = this.config.disabled),
        this.animationType === 'NoopAnimations' && (a = !0),
        a
      );
    }
    ngOnDestroy() {
      this.waveRenderer && this.waveRenderer.destroy();
    }
    ngOnInit() {
      this.renderWaveIfEnabled();
    }
    renderWaveIfEnabled() {
      !this.waveDisabled &&
        this.elementRef.nativeElement &&
        (this.waveRenderer = new Bl(
          this.elementRef.nativeElement,
          this.ngZone,
          this.nzWaveExtraNode,
          this.platformId,
          this.cspNonce,
        ));
    }
    disable() {
      (this.waveDisabled = !0),
        this.waveRenderer &&
          (this.waveRenderer.removeTriggerEvent(),
          this.waveRenderer.removeStyleAndExtraNode());
    }
    enable() {
      (this.waveDisabled = this.isConfigDisabled() || !1),
        this.waveRenderer && this.waveRenderer.bindTriggerEvent();
    }
  };
  (e.ɵfac = function (o) {
    return new (o || e)(v(T), v(E));
  }),
    (e.ɵdir = _({
      type: e,
      selectors: [
        ['', 'nz-wave', ''],
        ['button', 'nz-button', '', 3, 'nzType', 'link', 3, 'nzType', 'text'],
      ],
      inputs: { nzWaveExtraNode: 'nzWaveExtraNode' },
      exportAs: ['nzWave'],
      standalone: !0,
    }));
  let t = e;
  return t;
})();
var Pw = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({ providers: [Iw(kw)] }));
  let t = e;
  return t;
})();
var pk = ['*'],
  G_t = (() => {
    let e = class e {
      constructor(a) {
        (this.directionality = a),
          (this.nzSize = 'default'),
          (this.dir = 'ltr'),
          (this.destroy$ = new C());
      }
      ngOnInit() {
        (this.dir = this.directionality.value),
          this.directionality.change?.pipe(S(this.destroy$)).subscribe(a => {
            this.dir = a;
          });
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(v($e));
    }),
      (e.ɵcmp = Ze({
        type: e,
        selectors: [['nz-button-group']],
        hostAttrs: [1, 'ant-btn-group'],
        hostVars: 6,
        hostBindings: function (o, n) {
          o & 2 &&
            we('ant-btn-group-lg', n.nzSize === 'large')(
              'ant-btn-group-sm',
              n.nzSize === 'small',
            )('ant-btn-group-rtl', n.dir === 'rtl');
        },
        inputs: { nzSize: 'nzSize' },
        exportAs: ['nzButtonGroup'],
        standalone: !0,
        features: [t1],
        ngContentSelectors: pk,
        decls: 1,
        vars: 0,
        template: function (o, n) {
          o & 1 && (gt(), wt(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let t = e;
    return t;
  })();
var aHt = (() => {
  let e = class e {};
  (e.ɵfac = function (o) {
    return new (o || e)();
  }),
    (e.ɵmod = j({ type: e })),
    (e.ɵinj = q({ imports: [x7, Pw] }));
  let t = e;
  return t;
})();
function Ol(t) {
  return typeof t.ngrxOnStoreInit == 'function';
}
function Nl(t) {
  return typeof t.ngrxOnStateInit == 'function';
}
function fk(t) {
  let e = new F('@ngrx/component-store ComponentStore with Hooks');
  return [
    { provide: e, useClass: t },
    {
      provide: t,
      useFactory: () => {
        let r = m(e);
        return (
          (r.ɵhasProvider = !0),
          Ol(r) && r.ngrxOnStoreInit(),
          Nl(r) && r.state$.pipe(a1(1)).subscribe(() => r.ngrxOnStateInit()),
          r
        );
      },
    },
  ];
}
function Bw() {
  return t =>
    new P(e => {
      let r,
        a,
        o = new se();
      return (
        o.add(
          t.subscribe({
            complete: () => {
              r && e.next(a), e.complete();
            },
            error: n => {
              e.error(n);
            },
            next: n => {
              (a = n),
                r ||
                  ((r = y0.schedule(() => {
                    e.next(a), (r = void 0);
                  })),
                  o.add(r));
            },
          }),
        ),
        o
      );
    });
}
var mk = new F('@ngrx/component-store Initial State'),
  Nw = (() => {
    class t {
      destroySubject$ = new O1(1);
      destroy$ = this.destroySubject$.asObservable();
      stateSubject$ = new O1(1);
      isInitialized = !1;
      state$ = this.select(r => r);
      state = hc(this.stateSubject$.pipe(S(this.destroy$)), {
        requireSync: !1,
        manualCleanup: !0,
      });
      ɵhasProvider = !1;
      constructor(r) {
        r && this.initState(r), this.checkProviderForHooks();
      }
      ngOnDestroy() {
        this.stateSubject$.complete(), this.destroySubject$.next();
      }
      updater(r) {
        return a => {
          let o = !0,
            n,
            s = (Q1(a) ? a : D(a))
              .pipe(
                $a(e2),
                ve(() => this.assertStateIsInitialized()),
                v3(this.stateSubject$),
                I(([l, c]) => r(c, l)),
                ve(l => this.stateSubject$.next(l)),
                E1(l => (o ? ((n = l), Ge) : aa(l))),
                S(this.destroy$),
              )
              .subscribe();
          if (n) throw n;
          return (o = !1), s;
        };
      }
      initState(r) {
        Zo([r], e2).subscribe(a => {
          (this.isInitialized = !0), this.stateSubject$.next(a);
        });
      }
      setState(r) {
        typeof r != 'function' ? this.initState(r) : this.updater(r)();
      }
      patchState(r) {
        let a = typeof r == 'function' ? r(this.get()) : r;
        this.updater((o, n) => M(M({}, o), n))(a);
      }
      get(r) {
        this.assertStateIsInitialized();
        let a;
        return (
          this.stateSubject$.pipe(a1(1)).subscribe(o => {
            a = r ? r(o) : o;
          }),
          a
        );
      }
      select(...r) {
        let {
          observablesOrSelectorsObject: a,
          projector: o,
          config: n,
        } = vk(r);
        return (wk(a, o) ? this.stateSubject$ : F0(a)).pipe(
          n.debounce ? Bw() : Ow(),
          o
            ? I(s => (a.length > 0 && Array.isArray(s) ? o(...s) : o(s)))
            : Ow(),
          z1(n.equal),
          Jo({ refCount: !0, bufferSize: 1 }),
          S(this.destroy$),
        );
      }
      selectSignal(...r) {
        let a = [...r],
          o = typeof a[r.length - 1] == 'object' ? a.pop() : {},
          n = a.pop(),
          i = a,
          s =
            i.length === 0
              ? () => n(this.state())
              : () => {
                  let l = i.map(c => c());
                  return n(...l);
                };
        return O0(s, o);
      }
      effect(r) {
        let a = new C();
        return (
          r(a).pipe(S(this.destroy$)).subscribe(),
          o =>
            (Q1(o) ? o : D(o)).pipe(S(this.destroy$)).subscribe(i => {
              a.next(i);
            })
        );
      }
      checkProviderForHooks() {
        y0.schedule(() => {
          if (po() && (Ol(this) || Nl(this)) && !this.ɵhasProvider) {
            let r = [
              Ol(this) ? 'OnStoreInit' : '',
              Nl(this) ? 'OnStateInit' : '',
            ].filter(a => a);
            console.warn(
              `@ngrx/component-store: ${this.constructor.name} has the ${r.join(' and ')} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`,
            );
          }
        });
      }
      assertStateIsInitialized() {
        if (!this.isInitialized)
          throw new Error(
            `${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`,
          );
      }
      static ɵfac = function (a) {
        return new (a || t)(g(mk, 8));
      };
      static ɵprov = w({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function vk(t) {
  let e = Array.from(t),
    a = { debounce: !1, equal: (i, s) => i === s };
  if (
    (gk(e[e.length - 1]) && (a = M(M({}, a), e.pop())),
    e.length === 1 && typeof e[0] != 'function')
  )
    return { observablesOrSelectorsObject: e[0], projector: void 0, config: a };
  let o = e.pop();
  return { observablesOrSelectorsObject: e, projector: o, config: a };
}
function gk(t) {
  let e = t;
  return typeof e.debounce < 'u' || typeof e.equal < 'u';
}
function wk(t, e) {
  return Array.isArray(t) && t.length === 0 && typeof e == 'function';
}
function Ow() {
  return t => t;
}
function jo(t, e, r) {
  let a = typeof t == 'function' ? { next: t, error: e, complete: r } : t;
  return o =>
    o.pipe(
      ve({ next: a.next, complete: a.complete }),
      E1(n => (a.error(n), Ge)),
      a.finalize ? X1(a.finalize) : n => n,
    );
}
var T5 = { user: 'userInfo' };
var Rw = (() => {
  class t {
    #e = m(B1);
    login(r) {
      return this.#e.post('/identity/login', { user: r });
    }
    loginPassword(r) {
      return this.#e.post('/identity', { user: r });
    }
    register(r) {
      return this.#e.post('/identity/register', { user: r });
    }
    updateUser(r) {
      return this.#e.put('/identity/update', {
        user: {
          username: r.username ? r.username : null,
          password: r.password ? r.password : null,
        },
      });
    }
    static ɵfac = function (a) {
      return new (a || t)();
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var QHt = (() => {
  class t {
    #e = m(B1);
    getArticleDetail(r) {
      return this.#e.get(`/articles/details/${r}`);
    }
    createArticle(r) {
      return this.#e.post('/articles/create', { article: r });
    }
    editArticle(r, a) {
      return this.#e.put(`/articles/edit/${r}`, { article: a });
    }
    deleteArticle(r) {
      return this.#e.delete(`/articles/delete/${r}`);
    }
    linkTags(r) {
      return this.#e.post('/articles/linktags', { articleTags: r });
    }
    getArticleGlobal(r) {
      return this.#e.post('/articles', { filter: M({}, r) });
    }
    getAllArticles(r) {
      return this.#e.post('/articles/all', { filter: M({}, r) });
    }
    static ɵfac = function (a) {
      return new (a || t)();
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var oEt = (() => {
  class t extends As {
    titleService = m(is);
    updateTitle(r) {
      let a = this.buildTitle(r);
      a && this.titleService.setTitle(`${a} - Alexei Cioina`);
    }
    static ɵfac = (() => {
      let r;
      return function (o) {
        return (r || (r = I1(t)))(o || t);
      };
    })();
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var cEt = (() => {
  class t {
    #e = m(B1);
    getProfile(r) {
      return this.#e.get(`/profile/${r}`);
    }
    static ɵfac = function (a) {
      return new (a || t)();
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var qw = (() => {
  class t {
    #e = m(B1);
    getVersion() {
      return this.#e.get('/version');
    }
    static ɵfac = function (a) {
      return new (a || t)();
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
function jw(t, e) {
  let r = new F(t, e);
  function a(n, i) {
    return i
      ? { provide: r, useFactory: i, deps: n }
      : { provide: r, useValue: n };
  }
  function o(n = {}) {
    return m(r, n);
  }
  return [o, a, r];
}
function xk(t) {
  return new Proxy(
    {},
    {
      get(e, r, a) {
        let o = r;
        return e[o]
          ? Reflect.get(e, r, a)
          : ((e[o] = t.selectSignal(n => n[o])), e[o]);
      },
    },
  );
}
var Rl = class extends Nw {
  selectors = xk(this);
};
var [Mk] = jw('local storage', {
    factory: () => {
      let t = m(Y, { optional: !0 });
      return t?.defaultView ? t?.defaultView?.localStorage : null;
    },
  }),
  Yw = (() => {
    class t {
      ls = Mk();
      getItem(r) {
        if (!this.ls) return null;
        let a = this.ls.getItem(r);
        if (!a) return null;
        try {
          let o = JSON.parse(a);
          return typeof o == 'object' ? o : a;
        } catch {
          return a;
        }
      }
      setItem(r, a) {
        this.ls &&
          (typeof a == 'object'
            ? this.ls.setItem(r, JSON.stringify(a))
            : this.ls.setItem(r, a));
      }
      removeItem(r) {
        this.ls && this.ls.removeItem(r);
      }
      static ɵfac = function (a) {
        return new (a || t)();
      };
      static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
var YEt = (() => {
  class t extends Rl {
    #e = m(Rw);
    #o = m(qw);
    #t = m(Yw);
    #a = m(It);
    ngrxOnStoreInit() {
      let r = this.#t.getItem(T5.user);
      this.setState({
        isAuthenticated: !!r,
        user: r,
        errorResponse: null,
        articleListConfig: {
          currentPage: 1,
          filters: { limit: 10, offset: 0 },
        },
        version: { hash: '' },
        isSwitcher: !1,
        isAdminArticles: !1,
      });
    }
    getVersion = this.effect(
      Ve(() =>
        this.#o.getVersion().pipe(
          jo(
            r => {
              this.patchState({ version: r.version });
            },
            r => {
              console.error('Get Version Failed', r);
            },
          ),
        ),
      ),
    );
    updateUser = this.effect(
      Ve(
        r => (
          r.form.disable(),
          r.loading.set(!0),
          this.#e.updateUser(r.form.getRawValue()).pipe(
            jo({
              next: a => {
                this.#t.setItem(T5.user, a.user),
                  this.patchState({ user: a.user }),
                  this.selectors.errorResponse() &&
                    this.patchState({ errorResponse: null });
              },
              error: a => {
                this.patchState({ errorResponse: a.error });
              },
              finalize: () => {
                r.form.enable(), r.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    #r = r => ({
      next: a => {
        this.#t.setItem(T5.user, a.user),
          this.patchState({ user: a.user, isAuthenticated: !0 }),
          this.selectors.errorResponse() &&
            this.patchState({ errorResponse: null }),
          this.#a.navigate(['/']);
      },
      error: a => {
        this.patchState({ errorResponse: a.error });
      },
      finalize: () => {
        r.form.enable(), r.loading.set(!1);
      },
    });
    login = this.effect(
      Ve(
        r => (
          r.form.disable(),
          r.loading.set(!0),
          this.#e.login(r.form.getRawValue()).pipe(jo(this.#r(r)))
        ),
      ),
    );
    register = this.effect(
      Ve(
        r => (
          r.form.disable(),
          r.loading.set(!0),
          this.#e.register(r.form.getRawValue()).pipe(jo(this.#r(r)))
        ),
      ),
    );
    logout = this.effect(
      ve(() => {
        this.#t.removeItem(T5.user),
          this.patchState({ isAuthenticated: !1, user: null }),
          this.#a.navigate(['/login']);
      }),
    );
    setSwitcher = this.effect(
      ve(r => {
        this.patchState({ isSwitcher: r });
      }),
    );
    setVersion = this.effect(
      ve(r => {
        this.patchState({ version: { hash: r } });
      }),
    );
    setAdminArticles = this.effect(
      ve(r => {
        this.patchState({ isAdminArticles: r });
      }),
    );
    resetErrorResponse = this.updater(r =>
      Q(M({}, r), { errorResponse: null }),
    );
    static ɵfac = (() => {
      let r;
      return function (o) {
        return (r || (r = I1(t)))(o || t);
      };
    })();
    static ɵprov = w({ token: t, factory: t.ɵfac });
  }
  return t;
})();
var M7 = (() => {
    let e = class e {
      create(a) {
        return typeof ResizeObserver > 'u' ? null : new ResizeObserver(a);
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)();
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })(),
  Uw = (() => {
    let e = class e {
      constructor(a) {
        (this.nzResizeObserverFactory = a), (this.observedElements = new Map());
      }
      ngOnDestroy() {
        this.observedElements.forEach((a, o) => this.cleanupObserver(o));
      }
      observe(a) {
        let o = Va(a);
        return new P(n => {
          let s = this.observeElement(o).subscribe(n);
          return () => {
            s.unsubscribe(), this.unobserveElement(o);
          };
        });
      }
      observeElement(a) {
        if (this.observedElements.has(a)) this.observedElements.get(a).count++;
        else {
          let o = new C(),
            n = this.nzResizeObserverFactory.create(i => o.next(i));
          n && n.observe(a),
            this.observedElements.set(a, { observer: n, stream: o, count: 1 });
        }
        return this.observedElements.get(a).stream;
      }
      unobserveElement(a) {
        this.observedElements.has(a) &&
          (this.observedElements.get(a).count--,
          this.observedElements.get(a).count || this.cleanupObserver(a));
      }
      cleanupObserver(a) {
        if (this.observedElements.has(a)) {
          let { observer: o, stream: n } = this.observedElements.get(a);
          o && o.disconnect(), n.complete(), this.observedElements.delete(a);
        }
      }
    };
    (e.ɵfac = function (o) {
      return new (o || e)(g(M7));
    }),
      (e.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
    let t = e;
    return t;
  })();
export {
  M as a,
  Q as b,
  jl as c,
  I5 as d,
  se as e,
  P as f,
  C as g,
  Pe as h,
  O1 as i,
  i3 as j,
  Ge as k,
  ta as l,
  Me as m,
  D as n,
  aa as o,
  I as p,
  F0 as q,
  Ee as r,
  Wt as s,
  v2 as t,
  Vt as u,
  C0 as v,
  Ex as w,
  Qo as x,
  Tx as y,
  me as z,
  Wa as A,
  Lx as B,
  w2 as C,
  a1 as D,
  Ga as E,
  h3 as F,
  z1 as G,
  wd as H,
  X1 as I,
  dt as J,
  Bx as K,
  en as L,
  T1 as M,
  Ve as N,
  S as O,
  ve as P,
  Ox as Q,
  v3 as R,
  Ht as S,
  w as T,
  q as U,
  F as V,
  g as W,
  m as X,
  Ze as Y,
  j as Z,
  _,
  fn as $,
  Et as aa,
  SM as ba,
  F1 as ca,
  Ou as da,
  ee as ea,
  Pj as fa,
  Bj as ga,
  J1 as ha,
  et as ia,
  Oj as ja,
  I1 as ka,
  Oe as la,
  E0 as ma,
  W as na,
  T as oa,
  e0 as pa,
  E as qa,
  V1 as ra,
  n0 as sa,
  Nj as ta,
  sb as ua,
  de as va,
  v as wa,
  Ke as xa,
  Ce as ya,
  Qe as za,
  ma as Aa,
  r1 as Ba,
  ke as Ca,
  ge as Da,
  Tt as Ea,
  P0 as Fa,
  he as Ga,
  i0 as Ha,
  we as Ia,
  Yj as Ja,
  Uj as Ka,
  $j as La,
  Wj as Ma,
  Ae as Na,
  Gj as Oa,
  Kj as Pa,
  Zj as Qa,
  Qj as Ra,
  Xe as Sa,
  Je as Ta,
  Le as Ua,
  s0 as Va,
  l0 as Wa,
  RC as Xa,
  B0 as Ya,
  jC as Za,
  YC as _a,
  e1 as $a,
  QC as ab,
  ae as bb,
  gt as cb,
  wt as db,
  tz as eb,
  Xf as fb,
  Mn as gb,
  rt as hb,
  v1 as ib,
  g1 as jb,
  va as kb,
  c0 as lb,
  yn as mb,
  ga as nb,
  oz as ob,
  nz as pb,
  iz as qb,
  Xj as rb,
  sz as sb,
  h1 as tb,
  t1 as ub,
  Jj as vb,
  em as wb,
  eY as xb,
  tY as yb,
  aY as zb,
  rY as Ab,
  oY as Bb,
  nY as Cb,
  iY as Db,
  pr as Eb,
  cr as Fb,
  sY as Gb,
  ki as Hb,
  h0 as Ib,
  _e as Jb,
  G as Kb,
  fr as Lb,
  O0 as Mb,
  lY as Nb,
  Y as Ob,
  Qi as Pb,
  VY as Qb,
  Fm as Rb,
  Xi as Sb,
  DY as Tb,
  _Y as Ub,
  Fn as Vb,
  zm as Wb,
  B1 as Xb,
  jY as Yb,
  YY as Zb,
  hU as _b,
  is as $b,
  En as ac,
  rS as bc,
  oS as cc,
  u0 as dc,
  LS as ec,
  As as fc,
  It as gc,
  kU as hc,
  LU as ic,
  IU as jc,
  WV as kc,
  GV as lc,
  PU as mc,
  $e as nc,
  i5 as oc,
  Se as pc,
  TW as qc,
  rh as rc,
  U9 as sc,
  bt as tc,
  Av as uc,
  p0 as vc,
  ZU as wc,
  QU as xc,
  yt as yc,
  e$ as zc,
  t$ as Ac,
  a$ as Bc,
  wr as Cc,
  Va as Dc,
  I9 as Ec,
  v$ as Fc,
  g$ as Gc,
  e5 as Hc,
  x$ as Ic,
  P9 as Jc,
  C$ as Kc,
  z$ as Lc,
  _$ as Mc,
  T$ as Nc,
  O$ as Oc,
  Vo as Pc,
  Ta as Qc,
  ka as Rc,
  Ao as Sc,
  GU as Tc,
  Y9 as Uc,
  t5 as Vc,
  AW as Wc,
  Q9 as Xc,
  o5 as Yc,
  X9 as Zc,
  _a as _c,
  M7 as $c,
  Uw as ad,
  Q0 as bd,
  X0 as cd,
  J9 as dd,
  FG as ed,
  _G as fd,
  m7 as gd,
  w0 as hd,
  UCt as id,
  KCt as jd,
  RD as kd,
  qD as ld,
  jD as md,
  YD as nd,
  s8 as od,
  Ct as pd,
  Bv as qd,
  m0 as rd,
  Bwt as sd,
  js as td,
  l_ as ud,
  Owt as vd,
  u8 as wd,
  p8 as xd,
  m5 as yd,
  Ys as zd,
  Wwt as Ad,
  $v as Bd,
  Wv as Cd,
  Ws as Dd,
  Ne as Ed,
  d_ as Fd,
  M8 as Gd,
  Ks as Hd,
  Gs as Id,
  Zs as Jd,
  og as Kd,
  We as Ld,
  ie as Md,
  H as Nd,
  x1 as Od,
  le as Pd,
  _Mt as Qd,
  Lo as Rd,
  M1 as Sd,
  vl as Td,
  Ig as Ud,
  Pg as Vd,
  Myt as Wd,
  wxt as Xd,
  Fxt as Yd,
  Sxt as Zd,
  Hxt as _d,
  Lxt as $d,
  qxt as ae,
  sg as be,
  tMt as ce,
  Bg as de,
  Ng as ee,
  gl as fe,
  o7 as ge,
  wl as he,
  Tl as ie,
  D5 as je,
  kl as ke,
  ww as le,
  S5 as me,
  aE as ne,
  nE as oe,
  Xg as pe,
  qg as qe,
  Nt as re,
  _bt as se,
  Hbt as te,
  Cl as ue,
  $g as ve,
  vw as we,
  EE as xe,
  Tbt as ye,
  kE as ze,
  IE as Ae,
  BE as Be,
  kbt as Ce,
  Lbt as De,
  _5 as Ee,
  nT as Fe,
  HFt as Ge,
  iT as He,
  sT as Ie,
  Aw as Je,
  EFt as Ke,
  GFt as Le,
  KFt as Me,
  Pl as Ne,
  Sw as Oe,
  x0 as Pe,
  lk as Qe,
  w7 as Re,
  G_t as Se,
  uk as Te,
  L_t as Ue,
  Pw as Ve,
  aHt as We,
  fk as Xe,
  jo as Ye,
  QHt as Ze,
  oEt as _e,
  cEt as $e,
  Rl as af,
  YEt as bf,
};
