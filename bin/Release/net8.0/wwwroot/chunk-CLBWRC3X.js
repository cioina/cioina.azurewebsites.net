import {
  Ac as w,
  Ca as Z,
  Fc as z,
  Jb as G,
  Mc as x,
  O as S,
  Ob as Y,
  Q as j,
  Qc as ot,
  Rc as O,
  Sa as H,
  Ta as Q,
  U as D,
  Wc as st,
  X as P,
  Y as A,
  Z as B,
  a as y,
  ad as nt,
  b as C,
  cb as U,
  db as k,
  e as T,
  ea as R,
  g as N,
  hb as q,
  i as E,
  ib as V,
  jb as X,
  l as v,
  na as F,
  nc as K,
  oa as _,
  oc as tt,
  p as L,
  pc as et,
  qa as $,
  qc as it,
  u as I,
  ub as J,
  wa as l,
  x as M,
  ya as W,
} from './chunk-55QWLPSH.js';
var d = (function (o) {
  return (
    (o.resize = 'resize'),
    (o.scroll = 'scroll'),
    (o.touchstart = 'touchstart'),
    (o.touchmove = 'touchmove'),
    (o.touchend = 'touchend'),
    (o.pageshow = 'pageshow'),
    (o.load = 'LOAD'),
    o
  );
})(d || {});
function lt(o) {
  return typeof window < 'u' && o === window;
}
function b(o) {
  return lt(o) ? { top: 0, left: 0, bottom: 0 } : o.getBoundingClientRect();
}
var ht = ['fixedEl'],
  ct = ['*'],
  dt = 'affix',
  a = 'ant-affix',
  at = 20,
  p = class p {
    get target() {
      let t = this.nzTarget;
      return (
        (typeof t == 'string' ? this.document.querySelector(t) : t) || window
      );
    }
    constructor(t, e, i, s, n, r, f, h, c) {
      (this.nzConfigService = e),
        (this.scrollSrv = i),
        (this.ngZone = s),
        (this.platform = n),
        (this.renderer = r),
        (this.nzResizeObserver = f),
        (this.cdr = h),
        (this.directionality = c),
        (this._nzModuleName = dt),
        (this.nzChange = new F()),
        (this.dir = 'ltr'),
        (this.positionChangeSubscription = T.EMPTY),
        (this.offsetChanged$ = new E(1)),
        (this.destroy$ = new N()),
        (this.document = P(Y)),
        (this.placeholderNode = t.nativeElement);
    }
    ngOnInit() {
      this.directionality.change?.pipe(S(this.destroy$)).subscribe(t => {
        (this.dir = t),
          this.registerListeners(),
          this.updatePosition({}),
          this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value);
    }
    ngOnChanges(t) {
      let { nzOffsetBottom: e, nzOffsetTop: i, nzTarget: s } = t;
      (e || i) && this.offsetChanged$.next(), s && this.registerListeners();
    }
    ngAfterViewInit() {
      this.registerListeners();
    }
    ngOnDestroy() {
      this.removeListeners();
    }
    registerListeners() {
      if (!this.platform.isBrowser) return;
      this.removeListeners();
      let t = this.target === window ? this.document.body : this.target;
      (this.positionChangeSubscription = this.ngZone.runOutsideAngular(() =>
        M(
          ...Object.keys(d).map(e => I(this.target, e)),
          this.offsetChanged$.pipe(L(() => ({}))),
          this.nzResizeObserver.observe(t),
        )
          .pipe(j(at, void 0, { trailing: !0 }), S(this.destroy$))
          .subscribe(e => this.updatePosition(e)),
      )),
        (this.timeout = setTimeout(() => this.updatePosition({})));
    }
    removeListeners() {
      clearTimeout(this.timeout),
        this.positionChangeSubscription.unsubscribe(),
        this.destroy$.next(!0),
        this.destroy$.complete();
    }
    getOffset(t, e) {
      let i = t.getBoundingClientRect(),
        s = b(e),
        n = this.scrollSrv.getScroll(e, !0),
        r = this.scrollSrv.getScroll(e, !1),
        f = this.document.body,
        h = f.clientTop || 0,
        c = f.clientLeft || 0;
      return {
        top: i.top - s.top + n - h,
        left: i.left - s.left + r - c,
        width: i.width,
        height: i.height,
      };
    }
    setAffixStyle(t, e) {
      let i = this.affixStyle,
        s = this.target === window;
      if ((t.type === d.scroll && i && e && s) || w(i, e)) return;
      let n = !!e,
        r = this.fixedEl.nativeElement;
      this.renderer.setStyle(r, 'cssText', x(e)),
        (this.affixStyle = e),
        n ? r.classList.add(a) : r.classList.remove(a),
        this.updateRtlClass(),
        ((e && !i) || (!e && i)) && this.nzChange.emit(n);
    }
    setPlaceholderStyle(t) {
      let e = this.placeholderStyle;
      w(t, e) ||
        (this.renderer.setStyle(this.placeholderNode, 'cssText', x(t)),
        (this.placeholderStyle = t));
    }
    syncPlaceholderStyle(t) {
      if (!this.affixStyle || this.placeholderNode.offsetWidth) return;
      this.renderer.setStyle(this.placeholderNode, 'cssText', ''),
        (this.placeholderStyle = void 0);
      let e = {
        width: this.placeholderNode.offsetWidth,
        height: this.fixedEl.nativeElement.offsetHeight,
      };
      this.setAffixStyle(t, y(y({}, this.affixStyle), e)),
        this.setPlaceholderStyle(e);
    }
    updatePosition(t) {
      if (!this.platform.isBrowser) return;
      let e = this.target,
        i = this.nzOffsetTop,
        s = this.scrollSrv.getScroll(e, !0),
        n = this.getOffset(this.placeholderNode, e),
        r = this.fixedEl.nativeElement,
        f = { width: r.offsetWidth, height: r.offsetHeight },
        h = { top: !1, bottom: !1 };
      typeof i != 'number' && typeof this.nzOffsetBottom != 'number'
        ? ((h.top = !0), (i = 0))
        : ((h.top = typeof i == 'number'),
          (h.bottom = typeof this.nzOffsetBottom == 'number'));
      let c = b(e),
        rt = e.innerHeight || e.clientHeight;
      if (s >= n.top - i && h.top) {
        let u = n.width ?? f.width,
          g = c.top + i;
        this.setAffixStyle(t, {
          position: 'fixed',
          top: g,
          left: c.left + n.left,
          width: u,
        }),
          this.setPlaceholderStyle({ width: u, height: f.height });
      } else if (s <= n.top + f.height + this.nzOffsetBottom - rt && h.bottom) {
        let u = e === window ? 0 : window.innerHeight - c.bottom,
          g = n.width ?? f.width;
        this.setAffixStyle(t, {
          position: 'fixed',
          bottom: u + this.nzOffsetBottom,
          left: c.left + n.left,
          width: g,
        }),
          this.setPlaceholderStyle({ width: g, height: n.height });
      } else
        t.type === d.resize &&
        this.affixStyle &&
        this.affixStyle.position === 'fixed' &&
        this.placeholderNode.offsetWidth
          ? this.setAffixStyle(
              t,
              C(y({}, this.affixStyle), {
                width: this.placeholderNode.offsetWidth,
              }),
            )
          : this.setAffixStyle(t),
          this.setPlaceholderStyle();
      t.type === d.resize && this.syncPlaceholderStyle(t);
    }
    updateRtlClass() {
      let t = this.fixedEl.nativeElement;
      this.dir === 'rtl'
        ? t.classList.contains(a)
          ? t.classList.add(`${a}-rtl`)
          : t.classList.remove(`${a}-rtl`)
        : t.classList.remove(`${a}-rtl`);
    }
  };
(p.ɵfac = function (e) {
  return new (e || p)(l($), l(ot), l(st), l(_), l(et), l(W), l(nt), l(G), l(K));
}),
  (p.ɵcmp = A({
    type: p,
    selectors: [['nz-affix']],
    viewQuery: function (e, i) {
      if ((e & 1 && q(ht, 7), e & 2)) {
        let s;
        V((s = X())) && (i.fixedEl = s.first);
      }
    },
    inputs: {
      nzTarget: 'nzTarget',
      nzOffsetTop: [2, 'nzOffsetTop', 'nzOffsetTop', z],
      nzOffsetBottom: [2, 'nzOffsetBottom', 'nzOffsetBottom', z],
    },
    outputs: { nzChange: 'nzChange' },
    exportAs: ['nzAffix'],
    standalone: !0,
    features: [Z, R, J],
    ngContentSelectors: ct,
    decls: 3,
    vars: 0,
    consts: [['fixedEl', '']],
    template: function (e, i) {
      e & 1 && (U(), H(0, 'div', null, 0), k(2), Q());
    },
    dependencies: [tt, it],
    encapsulation: 2,
    changeDetection: 0,
  }));
var m = p;
v([O()], m.prototype, 'nzOffsetTop', void 0);
v([O()], m.prototype, 'nzOffsetBottom', void 0);
var Wt = (() => {
  let t = class t {};
  (t.ɵfac = function (s) {
    return new (s || t)();
  }),
    (t.ɵmod = B({ type: t })),
    (t.ɵinj = D({ imports: [m] }));
  let o = t;
  return o;
})();
export { m as a, Wt as b };
