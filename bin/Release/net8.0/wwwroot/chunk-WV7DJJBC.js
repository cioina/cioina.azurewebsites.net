import { a as St, b as It, c as Nt, w as At } from './chunk-5VUTOZIQ.js';
import {
  Be as Ft,
  Ca as I,
  Da as u,
  Ec as ut,
  Fa as et,
  Ga as g,
  Ia as y,
  Jb as x,
  Kb as c,
  M as J,
  Mb as pt,
  Na as D,
  O as m,
  P as Y,
  Pa as nt,
  Pb as ct,
  Pe as yt,
  Qa as it,
  Qc as dt,
  Qe as Dt,
  Ra as ot,
  Rc as w,
  Sa as a,
  Ta as l,
  U as Z,
  Ua as j,
  Va as b,
  Wa as T,
  X as M,
  Y as v,
  Z as K,
  _ as X,
  _d as zt,
  a as P,
  bb as d,
  bd as V,
  cb as N,
  cd as W,
  db as A,
  e as Q,
  ea as $,
  fd as ht,
  fe as Ct,
  g as z,
  gb as rt,
  hd as ft,
  ib as st,
  ie as q,
  jb as at,
  l as E,
  lb as k,
  mb as L,
  na as tt,
  nc as mt,
  p as U,
  pd as R,
  rd as H,
  re as gt,
  tb as lt,
  ub as F,
  ue as vt,
  va as s,
  wa as p,
  wb as G,
  xe as bt,
  z as C,
  ze as Tt,
} from './chunk-55QWLPSH.js';
var kt = ['*'],
  xt = (() => {
    let n = class n {
      setWithHelpViaTips(t) {
        (this.withHelpClass = t), this.cdr.markForCheck();
      }
      setStatus(t) {
        (this.status = t), this.cdr.markForCheck();
      }
      setHasFeedback(t) {
        (this.hasFeedback = t), this.cdr.markForCheck();
      }
      constructor(t) {
        (this.cdr = t),
          (this.status = ''),
          (this.hasFeedback = !1),
          (this.withHelpClass = !1),
          (this.destroy$ = new z());
      }
      ngOnDestroy() {
        this.destroy$.next(!0), this.destroy$.complete();
      }
    };
    (n.ɵfac = function (i) {
      return new (i || n)(p(x));
    }),
      (n.ɵcmp = v({
        type: n,
        selectors: [['nz-form-item']],
        hostAttrs: [1, 'ant-form-item'],
        hostVars: 12,
        hostBindings: function (i, o) {
          i & 2 &&
            y('ant-form-item-has-success', o.status === 'success')(
              'ant-form-item-has-warning',
              o.status === 'warning',
            )('ant-form-item-has-error', o.status === 'error')(
              'ant-form-item-is-validating',
              o.status === 'validating',
            )('ant-form-item-has-feedback', o.hasFeedback && o.status)(
              'ant-form-item-with-help',
              o.withHelpClass,
            );
        },
        exportAs: ['nzFormItem'],
        standalone: !0,
        features: [F],
        ngContentSelectors: kt,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (N(), A(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = n;
    return e;
  })();
var Lt = 'form',
  B = { type: 'question-circle', theme: 'outline' },
  _ = class _ {
    getInputObservable(n) {
      return this.inputChanges$.pipe(
        C(r => n in r),
        U(r => r[n]),
      );
    }
    constructor(n, r) {
      (this.nzConfigService = n),
        (this.directionality = r),
        (this._nzModuleName = Lt),
        (this.nzLayout = 'horizontal'),
        (this.nzNoColon = !1),
        (this.nzAutoTips = {}),
        (this.nzDisableAutoTips = !1),
        (this.nzTooltipIcon = B),
        (this.nzLabelAlign = 'right'),
        (this.nzLabelWrap = !1),
        (this.dir = 'ltr'),
        (this.destroy$ = new z()),
        (this.inputChanges$ = new z()),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(m(this.destroy$)).subscribe(t => {
          this.dir = t;
        });
    }
    ngOnChanges(n) {
      this.inputChanges$.next(n);
    }
    ngOnDestroy() {
      this.inputChanges$.complete(),
        this.destroy$.next(!0),
        this.destroy$.complete();
    }
  };
(_.ɵfac = function (r) {
  return new (r || _)(p(dt), p(mt));
}),
  (_.ɵdir = X({
    type: _,
    selectors: [['', 'nz-form', '']],
    hostAttrs: [1, 'ant-form'],
    hostVars: 8,
    hostBindings: function (r, t) {
      r & 2 &&
        y('ant-form-horizontal', t.nzLayout === 'horizontal')(
          'ant-form-vertical',
          t.nzLayout === 'vertical',
        )('ant-form-inline', t.nzLayout === 'inline')(
          'ant-form-rtl',
          t.dir === 'rtl',
        );
    },
    inputs: {
      nzLayout: 'nzLayout',
      nzNoColon: [2, 'nzNoColon', 'nzNoColon', c],
      nzAutoTips: 'nzAutoTips',
      nzDisableAutoTips: [2, 'nzDisableAutoTips', 'nzDisableAutoTips', c],
      nzTooltipIcon: 'nzTooltipIcon',
      nzLabelAlign: 'nzLabelAlign',
      nzLabelWrap: [2, 'nzLabelWrap', 'nzLabelWrap', c],
    },
    exportAs: ['nzForm'],
    standalone: !0,
    features: [I, $],
  }));
var h = _;
E([w()], h.prototype, 'nzNoColon', void 0);
E([w()], h.prototype, 'nzAutoTips', void 0);
E([w()], h.prototype, 'nzTooltipIcon', void 0);
E([w()], h.prototype, 'nzLabelWrap', void 0);
var Ot = ['*'],
  $t = e => [e],
  jt = e => ({ $implicit: e });
function Vt(e, n) {
  if ((e & 1 && (b(0), k(1), T()), e & 2)) {
    let r = d(2);
    s(), L(r.innerTip);
  }
}
function Wt(e, n) {
  if (
    (e & 1 &&
      (a(0, 'div', 2)(1, 'div', 4), u(2, Vt, 2, 1, 'ng-container', 5), l()()),
    e & 2)
  ) {
    let r = d();
    g('@helpMotion', void 0),
      s(),
      g('ngClass', G(4, $t, 'ant-form-item-explain-' + r.status)),
      s(),
      g('nzStringTemplateOutlet', r.innerTip)(
        'nzStringTemplateOutletContext',
        G(6, jt, r.validateControl),
      );
  }
}
function Rt(e, n) {
  if ((e & 1 && (b(0), k(1), T()), e & 2)) {
    let r = d(2);
    s(), L(r.nzExtra);
  }
}
function Ht(e, n) {
  if (
    (e & 1 && (a(0, 'div', 3), u(1, Rt, 2, 1, 'ng-container', 6), l()), e & 2)
  ) {
    let r = d();
    s(), g('nzStringTemplateOutlet', r.nzExtra);
  }
}
var Ie = (() => {
  let n = class n {
    get disableAutoTips() {
      return this.nzDisableAutoTips !== void 0
        ? ut(this.nzDisableAutoTips)
        : !!this.nzFormDirective?.nzDisableAutoTips;
    }
    set nzHasFeedback(t) {
      (this._hasFeedback = t),
        this.nzFormStatusService.formStatusChanges.next({
          status: this.status,
          hasFeedback: this._hasFeedback,
        }),
        this.nzFormItemComponent &&
          this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
    }
    get nzHasFeedback() {
      return this._hasFeedback;
    }
    set nzValidateStatus(t) {
      t instanceof vt || t instanceof bt
        ? ((this.validateControl = t),
          (this.validateString = null),
          this.watchControl())
        : t instanceof Ft
          ? ((this.validateControl = t.control),
            (this.validateString = null),
            this.watchControl())
          : ((this.validateString = t),
            (this.validateControl = null),
            this.setStatus());
    }
    watchControl() {
      this.validateChanges.unsubscribe(),
        this.validateControl &&
          this.validateControl.statusChanges &&
          (this.validateChanges = this.validateControl.statusChanges
            .pipe(J(null), m(this.destroyed$))
            .subscribe(() => {
              this.disableAutoTips || this.updateAutoErrorTip(),
                this.setStatus(),
                this.cdr.markForCheck();
            }));
    }
    setStatus() {
      (this.status = this.getControlStatus(this.validateString)),
        (this.innerTip = this.getInnerTip(this.status)),
        this.nzFormStatusService.formStatusChanges.next({
          status: this.status,
          hasFeedback: this.nzHasFeedback,
        }),
        this.nzFormItemComponent &&
          (this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip),
          this.nzFormItemComponent.setStatus(this.status));
    }
    getControlStatus(t) {
      let i;
      return (
        t === 'warning' || this.validateControlStatus('INVALID', 'warning')
          ? (i = 'warning')
          : t === 'error' || this.validateControlStatus('INVALID')
            ? (i = 'error')
            : t === 'validating' ||
                t === 'pending' ||
                this.validateControlStatus('PENDING')
              ? (i = 'validating')
              : t === 'success' || this.validateControlStatus('VALID')
                ? (i = 'success')
                : (i = ''),
        i
      );
    }
    validateControlStatus(t, i) {
      if (this.validateControl) {
        let { dirty: o, touched: f, status: S } = this.validateControl;
        return (!!o || !!f) && (i ? this.validateControl.hasError(i) : S === t);
      } else return !1;
    }
    getInnerTip(t) {
      switch (t) {
        case 'error':
          return (
            (!this.disableAutoTips && this.autoErrorTip) ||
            this.nzErrorTip ||
            null
          );
        case 'validating':
          return this.nzValidatingTip || null;
        case 'success':
          return this.nzSuccessTip || null;
        case 'warning':
          return this.nzWarningTip || null;
        default:
          return null;
      }
    }
    updateAutoErrorTip() {
      if (this.validateControl) {
        let t = this.validateControl.errors || {},
          i = '';
        for (let o in t)
          if (
            (t.hasOwnProperty(o) &&
              (i =
                t[o]?.[this.localeId] ??
                this.nzAutoTips?.[this.localeId]?.[o] ??
                this.nzAutoTips.default?.[o] ??
                this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[o] ??
                this.nzFormDirective?.nzAutoTips.default?.[o]),
            i)
          )
            break;
        this.autoErrorTip = i;
      }
    }
    subscribeAutoTips(t) {
      t?.pipe(m(this.destroyed$)).subscribe(() => {
        this.disableAutoTips ||
          (this.updateAutoErrorTip(),
          this.setStatus(),
          this.cdr.markForCheck());
      });
    }
    constructor(t, i, o) {
      (this.cdr = t),
        (this.nzFormStatusService = o),
        (this._hasFeedback = !1),
        (this.validateChanges = Q.EMPTY),
        (this.validateString = null),
        (this.destroyed$ = new z()),
        (this.status = ''),
        (this.validateControl = null),
        (this.innerTip = null),
        (this.nzAutoTips = {}),
        (this.nzFormItemComponent = M(xt, { host: !0, optional: !0 })),
        (this.nzFormDirective = M(h, { optional: !0 })),
        this.subscribeAutoTips(
          i.localeChange.pipe(Y(f => (this.localeId = f.locale))),
        ),
        this.subscribeAutoTips(
          this.nzFormDirective?.getInputObservable('nzAutoTips'),
        ),
        this.subscribeAutoTips(
          this.nzFormDirective
            ?.getInputObservable('nzDisableAutoTips')
            .pipe(C(() => this.nzDisableAutoTips === void 0)),
        );
    }
    ngOnChanges(t) {
      let {
        nzDisableAutoTips: i,
        nzAutoTips: o,
        nzSuccessTip: f,
        nzWarningTip: S,
        nzErrorTip: Et,
        nzValidatingTip: Mt,
      } = t;
      i || o
        ? (this.updateAutoErrorTip(), this.setStatus())
        : (f || S || Et || Mt) && this.setStatus();
    }
    ngOnInit() {
      this.setStatus();
    }
    ngOnDestroy() {
      this.destroyed$.next(), this.destroyed$.complete();
    }
    ngAfterContentInit() {
      !this.validateControl &&
        !this.validateString &&
        (this.defaultValidateControl instanceof Tt
          ? (this.nzValidateStatus = this.defaultValidateControl.control)
          : (this.nzValidateStatus = this.defaultValidateControl));
    }
  };
  (n.ɵfac = function (i) {
    return new (i || n)(p(x), p(ft), p(q));
  }),
    (n.ɵcmp = v({
      type: n,
      selectors: [['nz-form-control']],
      contentQueries: function (i, o, f) {
        if ((i & 1 && rt(f, gt, 5), i & 2)) {
          let S;
          st((S = at())) && (o.defaultValidateControl = S.first);
        }
      },
      hostAttrs: [1, 'ant-form-item-control'],
      inputs: {
        nzSuccessTip: 'nzSuccessTip',
        nzWarningTip: 'nzWarningTip',
        nzErrorTip: 'nzErrorTip',
        nzValidatingTip: 'nzValidatingTip',
        nzExtra: 'nzExtra',
        nzAutoTips: 'nzAutoTips',
        nzDisableAutoTips: [2, 'nzDisableAutoTips', 'nzDisableAutoTips', c],
        nzHasFeedback: [2, 'nzHasFeedback', 'nzHasFeedback', c],
        nzValidateStatus: 'nzValidateStatus',
      },
      exportAs: ['nzFormControl'],
      standalone: !0,
      features: [lt([q]), I, $, F],
      ngContentSelectors: Ot,
      decls: 5,
      vars: 2,
      consts: [
        [1, 'ant-form-item-control-input'],
        [1, 'ant-form-item-control-input-content'],
        [1, 'ant-form-item-explain', 'ant-form-item-explain-connected'],
        [1, 'ant-form-item-extra'],
        ['role', 'alert', 3, 'ngClass'],
        [4, 'nzStringTemplateOutlet', 'nzStringTemplateOutletContext'],
        [4, 'nzStringTemplateOutlet'],
      ],
      template: function (i, o) {
        i & 1 &&
          (N(),
          a(0, 'div', 0)(1, 'div', 1),
          A(2),
          l()(),
          u(3, Wt, 3, 8, 'div', 2)(4, Ht, 2, 1, 'div', 3)),
          i & 2 && (s(3), D(o.innerTip ? 3 : -1), s(), D(o.nzExtra ? 4 : -1));
      },
      dependencies: [ct, W, V],
      encapsulation: 2,
      data: { animation: [zt] },
      changeDetection: 0,
    }));
  let e = n;
  return e;
})();
var qt = ['*'];
function Bt(e, n) {
  if ((e & 1 && (b(0), j(1, 'span', 2), T()), e & 2)) {
    let r = n.$implicit,
      t = d(2);
    s(), g('nzType', r)('nzTheme', t.tooltipIcon.theme);
  }
}
function Pt(e, n) {
  if (
    (e & 1 && (a(0, 'span', 0), u(1, Bt, 2, 2, 'ng-container', 1), l()), e & 2)
  ) {
    let r = d();
    g('nzTooltipTitle', r.nzTooltipTitle),
      s(),
      g('nzStringTemplateOutlet', r.tooltipIcon.type);
  }
}
function _t(e) {
  let n = typeof e == 'string' ? { type: e } : e;
  return P(P({}, B), n);
}
var We = (() => {
  let n = class n {
    set nzNoColon(t) {
      this.noColon = t;
    }
    get nzNoColon() {
      return this.noColon !== 'default'
        ? this.noColon
        : !!this.nzFormDirective?.nzNoColon;
    }
    set nzTooltipIcon(t) {
      this._tooltipIcon = _t(t);
    }
    get tooltipIcon() {
      return this._tooltipIcon !== 'default'
        ? this._tooltipIcon
        : _t(this.nzFormDirective?.nzTooltipIcon || B);
    }
    set nzLabelAlign(t) {
      this.labelAlign = t;
    }
    get nzLabelAlign() {
      return this.labelAlign !== 'default'
        ? this.labelAlign
        : this.nzFormDirective?.nzLabelAlign || 'right';
    }
    set nzLabelWrap(t) {
      this.labelWrap = t;
    }
    get nzLabelWrap() {
      return this.labelWrap !== 'default'
        ? this.labelWrap
        : !!this.nzFormDirective?.nzLabelWrap;
    }
    constructor(t) {
      (this.cdr = t),
        (this.nzRequired = !1),
        (this.noColon = 'default'),
        (this._tooltipIcon = 'default'),
        (this.labelAlign = 'default'),
        (this.labelWrap = 'default'),
        (this.destroy$ = new z()),
        (this.nzFormDirective = M(h, { skipSelf: !0, optional: !0 })),
        this.nzFormDirective &&
          (this.nzFormDirective
            .getInputObservable('nzNoColon')
            .pipe(
              C(() => this.noColon === 'default'),
              m(this.destroy$),
            )
            .subscribe(() => this.cdr.markForCheck()),
          this.nzFormDirective
            .getInputObservable('nzTooltipIcon')
            .pipe(
              C(() => this._tooltipIcon === 'default'),
              m(this.destroy$),
            )
            .subscribe(() => this.cdr.markForCheck()),
          this.nzFormDirective
            .getInputObservable('nzLabelAlign')
            .pipe(
              C(() => this.labelAlign === 'default'),
              m(this.destroy$),
            )
            .subscribe(() => this.cdr.markForCheck()),
          this.nzFormDirective
            .getInputObservable('nzLabelWrap')
            .pipe(
              C(() => this.labelWrap === 'default'),
              m(this.destroy$),
            )
            .subscribe(() => this.cdr.markForCheck()));
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (n.ɵfac = function (i) {
    return new (i || n)(p(x));
  }),
    (n.ɵcmp = v({
      type: n,
      selectors: [['nz-form-label']],
      hostAttrs: [1, 'ant-form-item-label'],
      hostVars: 4,
      hostBindings: function (i, o) {
        i & 2 &&
          y('ant-form-item-label-left', o.nzLabelAlign === 'left')(
            'ant-form-item-label-wrap',
            o.nzLabelWrap,
          );
      },
      inputs: {
        nzFor: 'nzFor',
        nzRequired: [2, 'nzRequired', 'nzRequired', c],
        nzNoColon: [2, 'nzNoColon', 'nzNoColon', c],
        nzTooltipTitle: 'nzTooltipTitle',
        nzTooltipIcon: 'nzTooltipIcon',
        nzLabelAlign: 'nzLabelAlign',
        nzLabelWrap: [2, 'nzLabelWrap', 'nzLabelWrap', c],
      },
      exportAs: ['nzFormLabel'],
      standalone: !0,
      features: [I, F],
      ngContentSelectors: qt,
      decls: 3,
      vars: 6,
      consts: [
        ['nz-tooltip', '', 1, 'ant-form-item-tooltip', 3, 'nzTooltipTitle'],
        [4, 'nzStringTemplateOutlet'],
        ['nz-icon', '', 3, 'nzType', 'nzTheme'],
      ],
      template: function (i, o) {
        i & 1 && (N(), a(0, 'label'), A(1), u(2, Pt, 2, 2, 'span', 0), l()),
          i & 2 &&
            (y('ant-form-item-no-colon', o.nzNoColon)(
              'ant-form-item-required',
              o.nzRequired,
            ),
            et('for', o.nzFor),
            s(2),
            D(o.nzTooltipTitle ? 2 : -1));
      },
      dependencies: [W, V, Ct, H, R],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = n;
  return e;
})();
var sn = (() => {
  let n = class n {};
  (n.ɵfac = function (i) {
    return new (i || n)();
  }),
    (n.ɵmod = K({ type: n })),
    (n.ɵinj = Z({ imports: [ht] }));
  let e = n;
  return e;
})();
function Gt(e, n) {
  e & 1 && (b(0), a(1, 'h4', 4), j(2, 'span', 5), l(), T());
}
function Qt(e, n) {
  if ((e & 1 && (b(0), a(1, 'h5', 4), k(2), l(), T()), e & 2)) {
    let r = d().$implicit;
    s(2), L(r);
  }
}
function Ut(e, n) {
  e & 1 &&
    (a(0, 'li')(1, 'nz-space', 2),
    u(2, Gt, 3, 0, 'ng-container', 3)(3, Qt, 3, 1, 'ng-container', 3),
    l()());
}
function Jt(e, n) {
  e & 1 &&
    (a(0, 'div', 0)(1, 'div', 1)(2, 'ul'),
    it(3, Ut, 4, 0, 'li', null, nt),
    l()()()),
    e & 2 && (s(3), ot(n));
}
var _n = (() => {
  class e {
    errorResponse;
    nzErrorResponseChanged = new tt();
    formErrors = pt(() => this.#t(this.errorResponse()));
    #t(r) {
      if (!r) return this.nzErrorResponseChanged.emit(!1), null;
      let t = [];
      return (
        Object.entries(r.errors).forEach(([i, o]) => {
          t.push(...o.map(f => `${f}`));
        }),
        this.nzErrorResponseChanged.emit(!0),
        t
      );
    }
    static ɵfac = function (t) {
      return new (t || e)();
    };
    static ɵcmp = v({
      type: e,
      selectors: [['app-form-errors']],
      inputs: { errorResponse: 'errorResponse' },
      outputs: { nzErrorResponseChanged: 'nzErrorResponseChanged' },
      standalone: !0,
      features: [F],
      decls: 1,
      vars: 1,
      consts: [
        ['nz-row', '', 'nzJustify', 'center'],
        ['nz-col', ''],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nz-icon', '', 'nzType', 'exclamation-circle'],
      ],
      template: function (t, i) {
        if ((t & 1 && u(0, Jt, 5, 0, 'div', 0), t & 2)) {
          let o;
          D((o = i.formErrors()) ? 0 : -1, o);
        }
      },
      dependencies: [Dt, yt, Nt, It, St, At, H, R],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return e;
})();
export { xt as a, h as b, Ie as c, We as d, sn as e, _n as f };
