import {
  Ca as I,
  Da as c,
  Fa as T,
  Ga as m,
  Ia as F,
  Jb as j,
  Je as q,
  Kb as u,
  Na as C,
  O as a,
  Qc as W,
  Rc as $,
  S as D,
  Sa as z,
  Ta as p,
  U as S,
  Ua as g,
  Ue as H,
  Va as v,
  Ve as B,
  Wa as w,
  Y as _,
  Z as N,
  bb as h,
  bd as Z,
  cd as P,
  g as k,
  hb as O,
  ib as L,
  jb as R,
  l as E,
  lb as y,
  mb as b,
  me as J,
  nc as U,
  oa as x,
  pd as Q,
  qa as M,
  rd as G,
  tb as V,
  u as f,
  ub as A,
  va as d,
  wa as o,
} from './chunk-55QWLPSH.js';
var oe = ['switchElement'];
function se(i, e) {
  i & 1 && g(0, 'span', 3);
}
function re(i, e) {
  if ((i & 1 && (v(0), y(1), w()), i & 2)) {
    let t = h(2);
    d(), b(t.nzCheckedChildren);
  }
}
function ae(i, e) {
  if ((i & 1 && c(0, re, 2, 1, 'ng-container', 6), i & 2)) {
    let t = h();
    m('nzStringTemplateOutlet', t.nzCheckedChildren);
  }
}
function de(i, e) {
  if ((i & 1 && (v(0), y(1), w()), i & 2)) {
    let t = h(2);
    d(), b(t.nzUnCheckedChildren);
  }
}
function ce(i, e) {
  if ((i & 1 && c(0, de, 2, 1, 'ng-container', 6), i & 2)) {
    let t = h();
    m('nzStringTemplateOutlet', t.nzUnCheckedChildren);
  }
}
var he = 'switch',
  s = class s {
    updateValue(e) {
      this.isChecked !== e &&
        ((this.isChecked = e), this.onChange(this.isChecked));
    }
    focus() {
      this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    }
    blur() {
      this.switchElement.nativeElement.blur();
    }
    constructor(e, t, n, r, K, X) {
      (this.nzConfigService = e),
        (this.host = t),
        (this.ngZone = n),
        (this.cdr = r),
        (this.focusMonitor = K),
        (this.directionality = X),
        (this._nzModuleName = he),
        (this.isChecked = !1),
        (this.onChange = () => {}),
        (this.onTouched = () => {}),
        (this.nzLoading = !1),
        (this.nzDisabled = !1),
        (this.nzControl = !1),
        (this.nzCheckedChildren = null),
        (this.nzUnCheckedChildren = null),
        (this.nzSize = 'default'),
        (this.nzId = null),
        (this.dir = 'ltr'),
        (this.destroy$ = new k()),
        (this.isNzDisableFirstChange = !0);
    }
    ngOnInit() {
      this.directionality.change.pipe(a(this.destroy$)).subscribe(e => {
        (this.dir = e), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value),
        this.ngZone.runOutsideAngular(() => {
          f(this.host.nativeElement, 'click')
            .pipe(a(this.destroy$))
            .subscribe(e => {
              e.preventDefault(),
                !(this.nzControl || this.nzDisabled || this.nzLoading) &&
                  this.ngZone.run(() => {
                    this.updateValue(!this.isChecked), this.cdr.markForCheck();
                  });
            }),
            f(this.switchElement.nativeElement, 'keydown')
              .pipe(a(this.destroy$))
              .subscribe(e => {
                if (this.nzControl || this.nzDisabled || this.nzLoading) return;
                let { keyCode: t } = e;
                (t !== 37 && t !== 39 && t !== 32 && t !== 13) ||
                  (e.preventDefault(),
                  this.ngZone.run(() => {
                    t === 37
                      ? this.updateValue(!1)
                      : t === 39
                        ? this.updateValue(!0)
                        : (t === 32 || t === 13) &&
                          this.updateValue(!this.isChecked),
                      this.cdr.markForCheck();
                  }));
              });
        });
    }
    ngAfterViewInit() {
      this.focusMonitor
        .monitor(this.switchElement.nativeElement, !0)
        .pipe(a(this.destroy$))
        .subscribe(e => {
          e || Promise.resolve().then(() => this.onTouched());
        });
    }
    ngOnDestroy() {
      this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),
        this.destroy$.next(),
        this.destroy$.complete();
    }
    writeValue(e) {
      (this.isChecked = e), this.cdr.markForCheck();
    }
    registerOnChange(e) {
      this.onChange = e;
    }
    registerOnTouched(e) {
      this.onTouched = e;
    }
    setDisabledState(e) {
      (this.nzDisabled = (this.isNzDisableFirstChange && this.nzDisabled) || e),
        (this.isNzDisableFirstChange = !1),
        this.cdr.markForCheck();
    }
  };
(s.ɵfac = function (t) {
  return new (t || s)(o(W), o(M), o(x), o(j), o(q), o(U));
}),
  (s.ɵcmp = _({
    type: s,
    selectors: [['nz-switch']],
    viewQuery: function (t, n) {
      if ((t & 1 && O(oe, 7), t & 2)) {
        let r;
        L((r = R())) && (n.switchElement = r.first);
      }
    },
    inputs: {
      nzLoading: [2, 'nzLoading', 'nzLoading', u],
      nzDisabled: [2, 'nzDisabled', 'nzDisabled', u],
      nzControl: [2, 'nzControl', 'nzControl', u],
      nzCheckedChildren: 'nzCheckedChildren',
      nzUnCheckedChildren: 'nzUnCheckedChildren',
      nzSize: 'nzSize',
      nzId: 'nzId',
    },
    exportAs: ['nzSwitch'],
    standalone: !0,
    features: [V([{ provide: J, useExisting: D(() => s), multi: !0 }]), I, A],
    decls: 8,
    vars: 15,
    consts: [
      ['switchElement', ''],
      [
        'nz-wave',
        '',
        'type',
        'button',
        1,
        'ant-switch',
        3,
        'disabled',
        'nzWaveExtraNode',
      ],
      [1, 'ant-switch-handle'],
      ['nz-icon', '', 'nzType', 'loading', 1, 'ant-switch-loading-icon'],
      [1, 'ant-switch-inner'],
      [1, 'ant-click-animating-node'],
      [4, 'nzStringTemplateOutlet'],
    ],
    template: function (t, n) {
      t & 1 &&
        (z(0, 'button', 1, 0)(2, 'span', 2),
        c(3, se, 1, 0, 'span', 3),
        p(),
        z(4, 'span', 4),
        c(5, ae, 1, 1, 'ng-container')(6, ce, 1, 1, 'ng-container'),
        p(),
        g(7, 'div', 5),
        p()),
        t & 2 &&
          (F('ant-switch-checked', n.isChecked)(
            'ant-switch-loading',
            n.nzLoading,
          )('ant-switch-disabled', n.nzDisabled)(
            'ant-switch-small',
            n.nzSize === 'small',
          )('ant-switch-rtl', n.dir === 'rtl'),
          m('disabled', n.nzDisabled)('nzWaveExtraNode', !0),
          T('id', n.nzId),
          d(3),
          C(n.nzLoading ? 3 : -1),
          d(2),
          C(n.isChecked ? 5 : 6));
    },
    dependencies: [B, H, G, Q, P, Z],
    encapsulation: 2,
    changeDetection: 0,
  }));
var l = s;
E([$()], l.prototype, 'nzSize', void 0);
var Oe = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵmod = N({ type: e })),
    (e.ɵinj = S({ imports: [l] }));
  let i = e;
  return i;
})();
export { l as a, Oe as b };
