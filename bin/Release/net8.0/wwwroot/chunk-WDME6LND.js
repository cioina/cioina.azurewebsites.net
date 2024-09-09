import {
  B as y,
  Ca as I,
  Da as f,
  Eb as A,
  G as x,
  Ga as M,
  Ia as c,
  Jb as B,
  Kb as g,
  Lb as P,
  M as _,
  N as D,
  Na as l,
  O as r,
  Qc as J,
  Rc as V,
  Sa as a,
  Sb as R,
  Ta as p,
  U as T,
  Ua as j,
  Y as N,
  Z as b,
  bb as m,
  cb as E,
  db as F,
  ea as $,
  g as u,
  h as z,
  i as S,
  kb as O,
  l as C,
  lb as w,
  mb as L,
  nc as U,
  ub as k,
  v,
  va as o,
  wa as d,
} from './chunk-55QWLPSH.js';
var Z = ['*'];
function q(t, i) {
  t & 1 &&
    (a(0, 'span', 2), j(1, 'i', 3)(2, 'i', 3)(3, 'i', 3)(4, 'i', 3), p());
}
function K(t, i) {}
function Q(t, i) {
  if ((t & 1 && (a(0, 'div', 6), w(1), p()), t & 2)) {
    let n = m(2);
    o(), L(n.nzTip);
  }
}
function X(t, i) {
  if (
    (t & 1 &&
      (a(0, 'div')(1, 'div', 4),
      f(2, K, 0, 0, 'ng-template', 5)(3, Q, 2, 1, 'div', 6),
      p()()),
    t & 2)
  ) {
    let n = m(),
      e = O(1);
    o(),
      c('ant-spin-rtl', n.dir === 'rtl')('ant-spin-spinning', n.isLoading)(
        'ant-spin-lg',
        n.nzSize === 'large',
      )('ant-spin-sm', n.nzSize === 'small')('ant-spin-show-text', n.nzTip),
      o(),
      M('ngTemplateOutlet', n.nzIndicator || e),
      o(),
      l(n.nzTip ? 3 : -1);
  }
}
function Y(t, i) {
  if ((t & 1 && (a(0, 'div', 7), F(1), p()), t & 2)) {
    let n = m();
    c('ant-spin-blur', n.isLoading);
  }
}
var W = 'spin',
  s = class s {
    constructor(i, n, e) {
      (this.nzConfigService = i),
        (this.cdr = n),
        (this.directionality = e),
        (this._nzModuleName = W),
        (this.nzIndicator = null),
        (this.nzSize = 'default'),
        (this.nzTip = null),
        (this.nzDelay = 0),
        (this.nzSimple = !1),
        (this.nzSpinning = !0),
        (this.destroy$ = new u()),
        (this.spinning$ = new z(this.nzSpinning)),
        (this.delay$ = new S(1)),
        (this.isLoading = !1),
        (this.dir = 'ltr');
    }
    ngOnInit() {
      this.delay$
        .pipe(
          _(this.nzDelay),
          x(),
          D(n =>
            n === 0
              ? this.spinning$
              : this.spinning$.pipe(y(e => v(e ? n : 0))),
          ),
          r(this.destroy$),
        )
        .subscribe(n => {
          (this.isLoading = n), this.cdr.markForCheck();
        }),
        this.nzConfigService
          .getConfigChangeEventForComponent(W)
          .pipe(r(this.destroy$))
          .subscribe(() => this.cdr.markForCheck()),
        this.directionality.change?.pipe(r(this.destroy$)).subscribe(n => {
          (this.dir = n), this.cdr.detectChanges();
        }),
        (this.dir = this.directionality.value);
    }
    ngOnChanges(i) {
      let { nzSpinning: n, nzDelay: e } = i;
      n && this.spinning$.next(this.nzSpinning),
        e && this.delay$.next(this.nzDelay);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
(s.ɵfac = function (n) {
  return new (n || s)(d(J), d(B), d(U));
}),
  (s.ɵcmp = N({
    type: s,
    selectors: [['nz-spin']],
    hostVars: 2,
    hostBindings: function (n, e) {
      n & 2 && c('ant-spin-nested-loading', !e.nzSimple);
    },
    inputs: {
      nzIndicator: 'nzIndicator',
      nzSize: 'nzSize',
      nzTip: 'nzTip',
      nzDelay: [2, 'nzDelay', 'nzDelay', P],
      nzSimple: [2, 'nzSimple', 'nzSimple', g],
      nzSpinning: [2, 'nzSpinning', 'nzSpinning', g],
    },
    exportAs: ['nzSpin'],
    standalone: !0,
    features: [I, $, k],
    ngContentSelectors: Z,
    decls: 4,
    vars: 2,
    consts: [
      ['defaultTemplate', ''],
      [1, 'ant-spin-container', 3, 'ant-spin-blur'],
      [1, 'ant-spin-dot', 'ant-spin-dot-spin'],
      [1, 'ant-spin-dot-item'],
      [1, 'ant-spin'],
      [3, 'ngTemplateOutlet'],
      [1, 'ant-spin-text'],
      [1, 'ant-spin-container'],
    ],
    template: function (n, e) {
      n & 1 &&
        (E(),
        f(0, q, 5, 0, 'ng-template', null, 0, A)(2, X, 4, 12, 'div')(
          3,
          Y,
          2,
          2,
          'div',
          1,
        )),
        n & 2 && (o(2), l(e.isLoading ? 2 : -1), o(), l(e.nzSimple ? -1 : 3));
    },
    dependencies: [R],
    encapsulation: 2,
  }));
var h = s;
C([V()], h.prototype, 'nzIndicator', void 0);
var un = (() => {
  let i = class i {};
  (i.ɵfac = function (G) {
    return new (G || i)();
  }),
    (i.ɵmod = b({ type: i })),
    (i.ɵinj = T({}));
  let t = i;
  return t;
})();
export { h as a, un as b };
