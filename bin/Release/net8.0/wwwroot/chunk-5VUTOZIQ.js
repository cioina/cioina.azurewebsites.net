import {
  a as Lt,
  c as Ut,
  e as ot,
  g as Xt,
  h as at,
} from './chunk-SVCW45ZG.js';
import { a as fi } from './chunk-WDME6LND.js';
import {
  $a as O,
  Ab as Pe,
  Ad as ei,
  Ba as hn,
  Bb as Ve,
  Bd as ti,
  C as kt,
  Ca as L,
  Ce as Ne,
  Da as p,
  Eb as te,
  F as St,
  Fa as J,
  G as qe,
  Ga as c,
  Gc as At,
  Ge as hi,
  Ha as ce,
  I as Tn,
  Ia as D,
  Id as Cn,
  J as On,
  Jb as U,
  Jd as vt,
  Je as Ee,
  Kb as T,
  Kd as Qt,
  Ke as ui,
  L as wn,
  Lb as We,
  M as se,
  Ma as Pn,
  N as le,
  Na as z,
  Nc as jn,
  O as f,
  Oa as Pt,
  Ob as $n,
  Oc as Wn,
  Pa as Vt,
  Pb as Rn,
  Pc as Qn,
  Qa as me,
  Qc as we,
  R as Dn,
  Ra as he,
  Rb as et,
  Rc as G,
  Rd as Ue,
  Re as Zt,
  S as je,
  Sa as d,
  Sb as A,
  Sc as Hn,
  Sd as _n,
  T as Xe,
  Ta as m,
  Tb as $t,
  Td as ni,
  Te as Gt,
  U as ve,
  Ua as _,
  Uc as zn,
  Ud as Ht,
  Ue as Jt,
  V as In,
  Va as ne,
  Vb as An,
  Vc as gn,
  Vd as nt,
  Wa as ie,
  We as qt,
  X as H,
  Xa as Ye,
  Xc as Un,
  Y as g,
  Ya as P,
  Yc as Zn,
  Z as xe,
  Za as Vn,
  Zc as Gn,
  _ as pe,
  _c as ae,
  a as Ct,
  ad as Bt,
  ae as ii,
  b as mn,
  bb as s,
  bd as ye,
  be as oi,
  cb as j,
  cd as be,
  da as Nn,
  db as B,
  de as ai,
  ea as F,
  g as I,
  gb as Oe,
  ge as ri,
  h as Y,
  ha as x,
  hb as $,
  hd as tt,
  i as K,
  ia as y,
  ib as k,
  id as Jn,
  ie as it,
  ja as Mt,
  jb as M,
  jd as qn,
  je as si,
  k as It,
  kb as W,
  ke as li,
  l as Z,
  la as Ft,
  lb as E,
  le as ci,
  mb as ue,
  me as Qe,
  n as Nt,
  na as b,
  nb as q,
  nc as Ce,
  ne as pi,
  oa as X,
  ob as En,
  oe as di,
  p as ee,
  pc as Rt,
  pd as fe,
  pe as mi,
  q as ge,
  qa as V,
  r as _t,
  ra as kn,
  rd as ze,
  sd as jt,
  se as De,
  tb as oe,
  tc as Bn,
  u as re,
  ua as Mn,
  ub as C,
  ud as Ae,
  va as l,
  vd as Wt,
  wa as u,
  wb as Et,
  wd as Xn,
  x as Te,
  xa as ke,
  xb as Ke,
  xc as Ln,
  xd as Yn,
  xe as Ie,
  ya as de,
  yc as un,
  yd as Kn,
  z as Le,
  za as Fn,
  zc as fn,
} from './chunk-55QWLPSH.js';
var zi = (() => {
  let t = class t {
    constructor() {}
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [['', 'nzSpaceItem', '']],
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var qi = ['*'],
  Xi = i => ({ $implicit: i });
function Yi(i, t) {}
function Ki(i, t) {
  if (
    (i & 1 && (d(0, 'span', 3), p(1, Yi, 0, 0, 'ng-template', 4), m()), i & 2)
  ) {
    let o = s(),
      e = o.$index,
      n = o.$count,
      a = s();
    ce(
      'margin-bottom',
      a.nzDirection === 'vertical' ? (e === n - 1 ? null : a.spaceSize) : null,
      'px',
    )(
      'margin-right',
      a.nzDirection === 'horizontal'
        ? e === n - 1
          ? null
          : a.spaceSize
        : null,
      'px',
    ),
      l(),
      c('ngTemplateOutlet', a.nzSplit)('ngTemplateOutletContext', Et(6, Xi, e));
  }
}
function eo(i, t) {
  if (
    (i & 1 && (d(0, 'div', 0), Ye(1, 1), m(), p(2, Ki, 2, 8, 'span', 2)), i & 2)
  ) {
    let o = t.$implicit,
      e = t.$index,
      n = t.$count,
      a = s();
    ce(
      'margin-bottom',
      a.nzDirection === 'vertical' ? (e === n - 1 ? null : a.spaceSize) : null,
      'px',
    )(
      'margin-right',
      a.nzDirection === 'horizontal'
        ? e === n - 1
          ? null
          : a.spaceSize
        : null,
      'px',
    ),
      l(),
      c('ngTemplateOutlet', o),
      l(),
      z(a.nzSplit && e !== n - 1 ? 2 : -1);
  }
}
var to = 'space',
  gi = { small: 8, middle: 16, large: 24 },
  rt = class rt {
    constructor(t, o) {
      (this.nzConfigService = t),
        (this.cdr = o),
        (this._nzModuleName = to),
        (this.nzDirection = 'horizontal'),
        (this.nzSplit = null),
        (this.nzWrap = !1),
        (this.nzSize = 'small'),
        (this.spaceSize = gi.small),
        (this.destroy$ = new I());
    }
    updateSpaceItems() {
      let t = typeof this.nzSize == 'string' ? gi[this.nzSize] : this.nzSize;
      (this.spaceSize = t / (this.nzSplit ? 2 : 1)), this.cdr.markForCheck();
    }
    ngOnChanges() {
      this.updateSpaceItems(),
        (this.mergedAlign =
          this.nzAlign === void 0 && this.nzDirection === 'horizontal'
            ? 'center'
            : this.nzAlign);
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
    ngAfterContentInit() {
      this.updateSpaceItems(),
        this.items.changes.pipe(f(this.destroy$)).subscribe(() => {
          this.cdr.markForCheck();
        });
    }
  };
(rt.ɵfac = function (o) {
  return new (o || rt)(u(we), u(U));
}),
  (rt.ɵcmp = g({
    type: rt,
    selectors: [['nz-space'], ['', 'nz-space', '']],
    contentQueries: function (o, e, n) {
      if ((o & 1 && Oe(n, zi, 4, ke), o & 2)) {
        let a;
        k((a = M())) && (e.items = a);
      }
    },
    hostAttrs: [1, 'ant-space'],
    hostVars: 14,
    hostBindings: function (o, e) {
      o & 2 &&
        (ce('flex-wrap', e.nzWrap ? 'wrap' : null),
        D('ant-space-horizontal', e.nzDirection === 'horizontal')(
          'ant-space-vertical',
          e.nzDirection === 'vertical',
        )('ant-space-align-start', e.mergedAlign === 'start')(
          'ant-space-align-end',
          e.mergedAlign === 'end',
        )('ant-space-align-center', e.mergedAlign === 'center')(
          'ant-space-align-baseline',
          e.mergedAlign === 'baseline',
        ));
    },
    inputs: {
      nzDirection: 'nzDirection',
      nzAlign: 'nzAlign',
      nzSplit: 'nzSplit',
      nzWrap: [2, 'nzWrap', 'nzWrap', T],
      nzSize: 'nzSize',
    },
    exportAs: ['NzSpace'],
    standalone: !0,
    features: [L, F, C],
    ngContentSelectors: qi,
    decls: 3,
    vars: 0,
    consts: [
      [1, 'ant-space-item'],
      [3, 'ngTemplateOutlet'],
      [1, 'ant-space-split', 3, 'margin-bottom', 'margin-right'],
      [1, 'ant-space-split'],
      [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
    ],
    template: function (o, e) {
      o & 1 && (j(), B(0), me(1, eo, 3, 6, null, null, Vt)),
        o & 2 && (l(), he(e.items));
    },
    dependencies: [A],
    encapsulation: 2,
    changeDetection: 0,
  }));
var Sn = rt;
Z([G()], Sn.prototype, 'nzSize', void 0);
var Al = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({}));
  let i = t;
  return i;
})();
var ro = ['okBtn'],
  so = ['cancelBtn'];
function lo(i, t) {
  i & 1 && (d(0, 'div', 6), _(1, 'span', 14), m());
}
function co(i, t) {
  if (
    (i & 1 && (ne(0), d(1, 'span', 17), _(2, 'span', 18), m(), ie()), i & 2)
  ) {
    let o = t.$implicit;
    l(2), c('nzType', o || 'exclamation-circle');
  }
}
function po(i, t) {
  if (
    (i & 1 &&
      (ne(0),
      p(1, co, 3, 1, 'ng-container', 15),
      d(2, 'div', 16),
      E(3),
      m(),
      ie()),
    i & 2)
  ) {
    let o = s(2);
    l(), c('nzStringTemplateOutlet', o.nzIcon), l(2), ue(o.nzTitle);
  }
}
function mo(i, t) {
  if ((i & 1 && E(0), i & 2)) {
    let o = s(2);
    q(' ', o.nzCancelText, ' ');
  }
}
function ho(i, t) {
  i & 1 && (E(0), Pe(1, 'nzI18n')),
    i & 2 && q(' ', Ve(1, 1, 'Modal.cancelText'), ' ');
}
function uo(i, t) {
  if ((i & 1 && E(0), i & 2)) {
    let o = s(2);
    q(' ', o.nzOkText, ' ');
  }
}
function fo(i, t) {
  i & 1 && (E(0), Pe(1, 'nzI18n')),
    i & 2 && q(' ', Ve(1, 1, 'Modal.okText'), ' ');
}
function zo(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'div', 4)(1, 'div', 5),
      p(2, lo, 2, 0, 'div', 6),
      d(3, 'div', 7)(4, 'div')(5, 'div', 8)(6, 'div', 9),
      p(7, po, 4, 2, 'ng-container', 10),
      m(),
      d(8, 'div', 11)(9, 'button', 12, 1),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.onCancel());
      }),
      p(11, mo, 1, 1)(12, ho, 2, 3),
      m(),
      d(13, 'button', 13, 2),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.onConfirm());
      }),
      p(15, uo, 1, 1)(16, fo, 2, 3),
      m()()()()()()();
  }
  if (i & 2) {
    let o = s();
    D('ant-popover-rtl', o.dir === 'rtl'),
      c('cdkTrapFocusAutoCapture', o.nzAutoFocus !== null)(
        'ngClass',
        o._classMap,
      )('ngStyle', o.nzOverlayStyle)(
        '@.disabled',
        !!(o.noAnimation != null && o.noAnimation.nzNoAnimation),
      )(
        'nzNoAnimation',
        o.noAnimation == null ? null : o.noAnimation.nzNoAnimation,
      )('@zoomBigMotion', 'active'),
      l(2),
      z(o.nzPopconfirmShowArrow ? 2 : -1),
      l(5),
      c('nzStringTemplateOutlet', o.nzTitle)(
        'nzStringTemplateOutletContext',
        o.nzTitleContext,
      ),
      l(2),
      c('nzSize', 'small'),
      J('cdkFocusInitial', o.nzAutoFocus === 'cancel' || null),
      l(2),
      z(o.nzCancelText ? 11 : 12),
      l(2),
      c('nzSize', 'small')(
        'nzType',
        o.nzOkType !== 'danger' ? o.nzOkType : 'primary',
      )('nzDanger', o.nzOkDanger || o.nzOkType === 'danger')(
        'nzLoading',
        o.confirmLoading,
      )('disabled', o.nzOkDisabled),
      J('cdkFocusInitial', o.nzAutoFocus === 'ok' || null),
      l(2),
      z(o.nzOkText ? 15 : 16);
  }
}
var go = 'popconfirm',
  lt = class lt extends ai {
    getProxyPropertyMap() {
      return Ct(
        {
          nzOkText: ['nzOkText', () => this.nzOkText],
          nzOkType: ['nzOkType', () => this.nzOkType],
          nzOkDanger: ['nzOkDanger', () => this.nzOkDanger],
          nzOkDisabled: ['nzOkDisabled', () => this.nzOkDisabled],
          nzCancelText: ['nzCancelText', () => this.nzCancelText],
          nzBeforeConfirm: ['nzBeforeConfirm', () => this.nzBeforeConfirm],
          nzCondition: ['nzCondition', () => this.nzCondition],
          nzIcon: ['nzIcon', () => this.nzIcon],
          nzPopconfirmShowArrow: [
            'nzPopconfirmShowArrow',
            () => this.nzPopconfirmShowArrow,
          ],
          nzPopconfirmBackdrop: ['nzBackdrop', () => this.nzPopconfirmBackdrop],
          nzPopconfirmContext: ['nzTitleContext', () => this.titleContext],
          nzAutoFocus: ['nzAutoFocus', () => this.nzAutofocus],
        },
        super.getProxyPropertyMap(),
      );
    }
    constructor() {
      super(vn),
        (this._nzModuleName = go),
        (this.titleContext = null),
        (this.trigger = 'click'),
        (this.placement = 'top'),
        (this.nzCondition = !1),
        (this.nzPopconfirmShowArrow = !0),
        (this.nzPopconfirmBackdrop = !1),
        (this.nzAutofocus = null),
        (this.visibleChange = new b()),
        (this.nzOnCancel = new b()),
        (this.nzOnConfirm = new b());
    }
    createComponent() {
      super.createComponent(),
        this.component.nzOnCancel.pipe(f(this.destroy$)).subscribe(() => {
          this.nzOnCancel.emit();
        }),
        this.component.nzOnConfirm.pipe(f(this.destroy$)).subscribe(() => {
          this.nzOnConfirm.emit();
        });
    }
  };
(lt.ɵfac = function (o) {
  return new (o || lt)();
}),
  (lt.ɵdir = pe({
    type: lt,
    selectors: [['', 'nz-popconfirm', '']],
    hostVars: 2,
    hostBindings: function (o, e) {
      o & 2 && D('ant-popover-open', e.visible);
    },
    inputs: {
      arrowPointAtCenter: [
        2,
        'nzPopconfirmArrowPointAtCenter',
        'arrowPointAtCenter',
        T,
      ],
      title: [0, 'nzPopconfirmTitle', 'title'],
      titleContext: [0, 'nzPopconfirmTitleContext', 'titleContext'],
      directiveTitle: [0, 'nz-popconfirm', 'directiveTitle'],
      trigger: [0, 'nzPopconfirmTrigger', 'trigger'],
      placement: [0, 'nzPopconfirmPlacement', 'placement'],
      origin: [0, 'nzPopconfirmOrigin', 'origin'],
      mouseEnterDelay: [0, 'nzPopconfirmMouseEnterDelay', 'mouseEnterDelay'],
      mouseLeaveDelay: [0, 'nzPopconfirmMouseLeaveDelay', 'mouseLeaveDelay'],
      overlayClassName: [0, 'nzPopconfirmOverlayClassName', 'overlayClassName'],
      overlayStyle: [0, 'nzPopconfirmOverlayStyle', 'overlayStyle'],
      visible: [0, 'nzPopconfirmVisible', 'visible'],
      nzOkText: 'nzOkText',
      nzOkType: 'nzOkType',
      nzOkDisabled: [2, 'nzOkDisabled', 'nzOkDisabled', T],
      nzOkDanger: [2, 'nzOkDanger', 'nzOkDanger', T],
      nzCancelText: 'nzCancelText',
      nzBeforeConfirm: 'nzBeforeConfirm',
      nzIcon: 'nzIcon',
      nzCondition: [2, 'nzCondition', 'nzCondition', T],
      nzPopconfirmShowArrow: [
        2,
        'nzPopconfirmShowArrow',
        'nzPopconfirmShowArrow',
        T,
      ],
      nzPopconfirmBackdrop: 'nzPopconfirmBackdrop',
      nzAutofocus: 'nzAutofocus',
    },
    outputs: {
      visibleChange: 'nzPopconfirmVisibleChange',
      nzOnCancel: 'nzOnCancel',
      nzOnConfirm: 'nzOnConfirm',
    },
    exportAs: ['nzPopconfirm'],
    standalone: !0,
    features: [L, hn],
  }));
var Yt = lt;
Z([G()], Yt.prototype, 'nzPopconfirmBackdrop', void 0);
Z([G()], Yt.prototype, 'nzAutofocus', void 0);
var vn = (() => {
  let t = class t extends ri {
    constructor(e) {
      super(),
        (this.elementRef = e),
        (this.nzCondition = !1),
        (this.nzPopconfirmShowArrow = !0),
        (this.nzOkType = 'primary'),
        (this.nzOkDanger = !1),
        (this.nzOkDisabled = !1),
        (this.nzAutoFocus = null),
        (this.nzBeforeConfirm = null),
        (this.nzOnCancel = new I()),
        (this.nzOnConfirm = new I()),
        (this._trigger = 'click'),
        (this.elementFocusedBeforeModalWasOpened = null),
        (this.document = H($n)),
        (this._prefix = 'ant-popover'),
        (this.confirmLoading = !1);
    }
    ngOnDestroy() {
      super.ngOnDestroy(),
        this.nzOnCancel.complete(),
        this.nzOnConfirm.complete();
    }
    show() {
      this.nzCondition
        ? this.onConfirm()
        : (this.capturePreviouslyFocusedElement(), super.show());
    }
    hide() {
      super.hide(), this.restoreFocus();
    }
    handleConfirm() {
      this.nzOnConfirm.next(), super.hide();
    }
    onCancel() {
      this.nzOnCancel.next(), super.hide();
    }
    onConfirm() {
      if (this.nzBeforeConfirm) {
        let e = Wn(this.nzBeforeConfirm()).pipe(On());
        (this.confirmLoading = !0),
          e
            .pipe(
              Tn(() => {
                (this.confirmLoading = !1), this.cdr.markForCheck();
              }),
              f(this.nzVisibleChange),
              f(this.destroy$),
            )
            .subscribe(n => {
              n && this.handleConfirm();
            });
      } else this.handleConfirm();
    }
    capturePreviouslyFocusedElement() {
      this.document &&
        (this.elementFocusedBeforeModalWasOpened = this.document.activeElement);
    }
    restoreFocus() {
      let e = this.elementFocusedBeforeModalWasOpened;
      if (e && typeof e.focus == 'function') {
        let n = this.document.activeElement,
          a = this.elementRef.nativeElement;
        (!n || n === this.document.body || n === a || a.contains(n)) &&
          e.focus();
      }
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-popconfirm']],
      viewQuery: function (n, a) {
        if ((n & 1 && ($(ro, 5, V), $(so, 5, V)), n & 2)) {
          let r;
          k((r = M())) && (a.okBtn = r), k((r = M())) && (a.cancelBtn = r);
        }
      },
      exportAs: ['nzPopconfirmComponent'],
      standalone: !0,
      features: [hn, C],
      decls: 2,
      vars: 6,
      consts: [
        ['overlay', 'cdkConnectedOverlay'],
        ['cancelBtn', ''],
        ['okBtn', ''],
        [
          'cdkConnectedOverlay',
          '',
          'nzConnectedOverlay',
          '',
          3,
          'overlayOutsideClick',
          'detach',
          'positionChange',
          'cdkConnectedOverlayHasBackdrop',
          'cdkConnectedOverlayOrigin',
          'cdkConnectedOverlayPositions',
          'cdkConnectedOverlayOpen',
          'cdkConnectedOverlayPush',
          'nzArrowPointAtCenter',
        ],
        [
          'cdkTrapFocus',
          '',
          1,
          'ant-popover',
          3,
          'cdkTrapFocusAutoCapture',
          'ngClass',
          'ngStyle',
          'nzNoAnimation',
        ],
        [1, 'ant-popover-content'],
        [1, 'ant-popover-arrow'],
        [1, 'ant-popover-inner'],
        [1, 'ant-popover-inner-content'],
        [1, 'ant-popover-message'],
        [4, 'nzStringTemplateOutlet', 'nzStringTemplateOutletContext'],
        [1, 'ant-popover-buttons'],
        ['nz-button', '', 3, 'click', 'nzSize'],
        [
          'nz-button',
          '',
          3,
          'click',
          'nzSize',
          'nzType',
          'nzDanger',
          'nzLoading',
          'disabled',
        ],
        [1, 'ant-popover-arrow-content'],
        [4, 'nzStringTemplateOutlet'],
        [1, 'ant-popover-message-title'],
        [1, 'ant-popover-message-icon'],
        ['nz-icon', '', 'nzTheme', 'fill', 3, 'nzType'],
      ],
      template: function (n, a) {
        if (n & 1) {
          let r = P();
          p(0, zo, 17, 21, 'ng-template', 3, 0, te),
            O('overlayOutsideClick', function (v) {
              return x(r), y(a.onClickOutside(v));
            })('detach', function () {
              return x(r), y(a.hide());
            })('positionChange', function (v) {
              return x(r), y(a.onPositionChange(v));
            });
        }
        n & 2 &&
          c('cdkConnectedOverlayHasBackdrop', a.nzBackdrop)(
            'cdkConnectedOverlayOrigin',
            a.origin,
          )('cdkConnectedOverlayPositions', a._positions)(
            'cdkConnectedOverlayOpen',
            a._visible,
          )('cdkConnectedOverlayPush', a.cdkConnectedOverlayPush)(
            'nzArrowPointAtCenter',
            a.nzArrowPointAtCenter,
          );
      },
      dependencies: [
        Qt,
        vt,
        nt,
        Ht,
        ui,
        hi,
        Rn,
        et,
        Ue,
        be,
        ye,
        ze,
        fe,
        qt,
        Zt,
        Gt,
        Jt,
        qn,
        Jn,
      ],
      encapsulation: 2,
      data: { animation: [oi] },
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var bc = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [vn] }));
  let i = t;
  return i;
})();
var Co = ['*'],
  bt = (() => {
    let t = class t {
      constructor() {
        (this.nzLabel = null), (this.changes = new I());
      }
      ngOnChanges() {
        this.changes.next();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [['nz-option-group']],
        inputs: { nzLabel: 'nzLabel' },
        exportAs: ['nzOptionGroup'],
        standalone: !0,
        features: [F, C],
        ngContentSelectors: Co,
        decls: 1,
        vars: 0,
        template: function (n, a) {
          n & 1 && (j(), B(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var _o = ['*'];
function So(i, t) {
  i & 1 && B(0);
}
var Kt = (() => {
  let t = class t {
    constructor(e) {
      (this.destroy$ = e),
        (this.changes = new I()),
        (this.groupLabel = null),
        (this.nzLabel = null),
        (this.nzValue = null),
        (this.nzDisabled = !1),
        (this.nzHide = !1),
        (this.nzCustomContent = !1),
        (this.nzOptionGroupComponent = H(bt, { optional: !0 }));
    }
    ngOnInit() {
      this.nzOptionGroupComponent &&
        this.nzOptionGroupComponent.changes
          .pipe(se(!0), f(this.destroy$))
          .subscribe(() => {
            this.groupLabel = this.nzOptionGroupComponent?.nzLabel;
          });
    }
    ngOnChanges() {
      this.changes.next();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(ae));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-option']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(ke, 7), n & 2)) {
          let r;
          k((r = M())) && (a.template = r.first);
        }
      },
      inputs: {
        nzTitle: 'nzTitle',
        nzLabel: 'nzLabel',
        nzValue: 'nzValue',
        nzKey: 'nzKey',
        nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
        nzHide: [2, 'nzHide', 'nzHide', T],
        nzCustomContent: [2, 'nzCustomContent', 'nzCustomContent', T],
      },
      exportAs: ['nzOption'],
      standalone: !0,
      features: [oe([ae]), L, F, C],
      ngContentSelectors: _o,
      decls: 1,
      vars: 0,
      template: function (n, a) {
        n & 1 && (j(), p(0, So, 1, 0, 'ng-template'));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Ci = new In('nz-empty-component-name');
var xn = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-empty-default']],
      exportAs: ['nzEmptyDefault'],
      standalone: !0,
      features: [C],
      decls: 12,
      vars: 0,
      consts: [
        [
          'width',
          '184',
          'height',
          '152',
          'viewBox',
          '0 0 184 152',
          'xmlns',
          'http://www.w3.org/2000/svg',
          1,
          'ant-empty-img-default',
        ],
        ['fill', 'none', 'fill-rule', 'evenodd'],
        ['transform', 'translate(24 31.67)'],
        [
          'cx',
          '67.797',
          'cy',
          '106.89',
          'rx',
          '67.797',
          'ry',
          '12.668',
          1,
          'ant-empty-img-default-ellipse',
        ],
        [
          'd',
          'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
          1,
          'ant-empty-img-default-path-1',
        ],
        [
          'd',
          'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
          'transform',
          'translate(13.56)',
          1,
          'ant-empty-img-default-path-2',
        ],
        [
          'd',
          'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
          1,
          'ant-empty-img-default-path-3',
        ],
        [
          'd',
          'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
          1,
          'ant-empty-img-default-path-4',
        ],
        [
          'd',
          'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
          1,
          'ant-empty-img-default-path-5',
        ],
        ['transform', 'translate(149.65 15.383)', 1, 'ant-empty-img-default-g'],
        ['cx', '20.654', 'cy', '3.167', 'rx', '2.849', 'ry', '2.815'],
        ['d', 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z'],
      ],
      template: function (n, a) {
        n & 1 &&
          (Mt(),
          d(0, 'svg', 0)(1, 'g', 1)(2, 'g', 2),
          _(3, 'ellipse', 3)(4, 'path', 4)(5, 'path', 5)(6, 'path', 6)(
            7,
            'path',
            7,
          ),
          m(),
          _(8, 'path', 8),
          d(9, 'g', 9),
          _(10, 'ellipse', 10)(11, 'path', 11),
          m()()());
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var yn = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-empty-simple']],
      exportAs: ['nzEmptySimple'],
      standalone: !0,
      features: [C],
      decls: 6,
      vars: 0,
      consts: [
        [
          'width',
          '64',
          'height',
          '41',
          'viewBox',
          '0 0 64 41',
          'xmlns',
          'http://www.w3.org/2000/svg',
          1,
          'ant-empty-img-simple',
        ],
        ['transform', 'translate(0 1)', 'fill', 'none', 'fill-rule', 'evenodd'],
        [
          'cx',
          '32',
          'cy',
          '33',
          'rx',
          '32',
          'ry',
          '7',
          1,
          'ant-empty-img-simple-ellipse',
        ],
        ['fill-rule', 'nonzero', 1, 'ant-empty-img-simple-g'],
        [
          'd',
          'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
        ],
        [
          'd',
          'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
          1,
          'ant-empty-img-simple-path',
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (Mt(),
          d(0, 'svg', 0)(1, 'g', 1),
          _(2, 'ellipse', 2),
          d(3, 'g', 3),
          _(4, 'path', 4)(5, 'path', 5),
          m()()());
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function xo(i, t) {
  if ((i & 1 && (ne(0), _(1, 'img', 4), ie()), i & 2)) {
    let o = s(2);
    l(),
      c(
        'src',
        o.nzNotFoundImage,
        Mn,
      )('alt', o.isContentString ? o.nzNotFoundContent : 'empty');
  }
}
function yo(i, t) {
  if ((i & 1 && p(0, xo, 2, 2, 'ng-container', 3), i & 2)) {
    let o = s();
    c('nzStringTemplateOutlet', o.nzNotFoundImage);
  }
}
function bo(i, t) {
  i & 1 && _(0, 'nz-empty-simple');
}
function To(i, t) {
  i & 1 && _(0, 'nz-empty-default');
}
function Oo(i, t) {
  if (
    (i & 1 &&
      p(0, bo, 1, 0, 'nz-empty-simple')(1, To, 1, 0, 'nz-empty-default'),
    i & 2)
  ) {
    let o = s();
    z(o.nzNotFoundImage === 'simple' ? 0 : 1);
  }
}
function wo(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s(2);
    l(),
      q(
        ' ',
        o.isContentString ? o.nzNotFoundContent : o.locale.description,
        ' ',
      );
  }
}
function Do(i, t) {
  if (
    (i & 1 && (d(0, 'p', 1), p(1, wo, 2, 1, 'ng-container', 3), m()), i & 2)
  ) {
    let o = s();
    l(), c('nzStringTemplateOutlet', o.nzNotFoundContent);
  }
}
function Io(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s(2);
    l(), q(' ', o.nzNotFoundFooter, ' ');
  }
}
function No(i, t) {
  if (
    (i & 1 && (d(0, 'div', 2), p(1, Io, 2, 1, 'ng-container', 3), m()), i & 2)
  ) {
    let o = s();
    l(), c('nzStringTemplateOutlet', o.nzNotFoundFooter);
  }
}
var ko = ['default', 'simple'],
  Si = (() => {
    let t = class t {
      constructor(e, n) {
        (this.i18n = e),
          (this.cdr = n),
          (this.nzNotFoundImage = 'default'),
          (this.isContentString = !1),
          (this.isImageBuildIn = !0),
          (this.destroy$ = new I());
      }
      ngOnChanges(e) {
        let { nzNotFoundContent: n, nzNotFoundImage: a } = e;
        if (n) {
          let r = n.currentValue;
          this.isContentString = typeof r == 'string';
        }
        if (a) {
          let r = a.currentValue || 'default';
          this.isImageBuildIn = ko.findIndex(h => h === r) > -1;
        }
      }
      ngOnInit() {
        this.i18n.localeChange.pipe(f(this.destroy$)).subscribe(() => {
          (this.locale = this.i18n.getLocaleData('Empty')),
            this.cdr.markForCheck();
        });
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(tt), u(U));
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [['nz-empty']],
        hostAttrs: [1, 'ant-empty'],
        inputs: {
          nzNotFoundImage: 'nzNotFoundImage',
          nzNotFoundContent: 'nzNotFoundContent',
          nzNotFoundFooter: 'nzNotFoundFooter',
        },
        exportAs: ['nzEmpty'],
        standalone: !0,
        features: [F, C],
        decls: 5,
        vars: 3,
        consts: [
          [1, 'ant-empty-image'],
          [1, 'ant-empty-description'],
          [1, 'ant-empty-footer'],
          [4, 'nzStringTemplateOutlet'],
          [3, 'src', 'alt'],
        ],
        template: function (n, a) {
          n & 1 &&
            (d(0, 'div', 0),
            p(1, yo, 1, 1, 'ng-container')(2, Oo, 2, 1),
            m(),
            p(3, Do, 2, 1, 'p', 1)(4, No, 2, 1, 'div', 2)),
            n & 2 &&
              (l(),
              z(a.isImageBuildIn ? 2 : 1),
              l(2),
              z(a.nzNotFoundContent !== null ? 3 : -1),
              l(),
              z(a.nzNotFoundFooter ? 4 : -1));
        },
        dependencies: [be, ye, xn, yn],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
function Mo(i, t) {
  if ((i & 1 && E(0), i & 2)) {
    let o = s(2);
    q(' ', o.content, ' ');
  }
}
function Fo(i, t) {}
function Po(i, t) {
  if ((i & 1 && p(0, Fo, 0, 0, 'ng-template', 0), i & 2)) {
    let o = s(2);
    c('cdkPortalOutlet', o.contentPortal);
  }
}
function Vo(i, t) {
  if ((i & 1 && p(0, Mo, 1, 1)(1, Po, 1, 1, null, 0), i & 2)) {
    let o = s();
    z(o.contentType === 'string' ? 0 : 1);
  }
}
function Eo(i, t) {
  i & 1 && _(0, 'nz-empty', 1);
}
function $o(i, t) {
  i & 1 && _(0, 'nz-empty', 2);
}
function Ro(i, t) {
  i & 1 && _(0, 'nz-empty');
}
function Ao(i, t) {
  if (
    (i & 1 &&
      p(0, Eo, 1, 0, 'nz-empty', 1)(1, $o, 1, 0, 'nz-empty', 2)(
        2,
        Ro,
        1,
        0,
        'nz-empty',
      ),
    i & 2)
  ) {
    let o,
      e = s(2);
    z((o = e.size) === 'normal' ? 0 : o === 'small' ? 1 : 2);
  }
}
function Bo(i, t) {
  if ((i & 1 && p(0, Ao, 3, 1), i & 2)) {
    let o = s();
    z(o.specificContent !== null ? 0 : -1);
  }
}
function Lo(i) {
  switch (i) {
    case 'table':
    case 'list':
      return 'normal';
    case 'select':
    case 'tree-select':
    case 'cascader':
    case 'transfer':
      return 'small';
    default:
      return '';
  }
}
var dt = (() => {
  let t = class t {
    constructor(e, n, a, r) {
      (this.configService = e),
        (this.viewContainerRef = n),
        (this.cdr = a),
        (this.injector = r),
        (this.contentType = 'string'),
        (this.size = ''),
        (this.destroy$ = new I());
    }
    ngOnChanges(e) {
      e.nzComponentName && (this.size = Lo(e.nzComponentName.currentValue)),
        e.specificContent &&
          !e.specificContent.isFirstChange() &&
          ((this.content = e.specificContent.currentValue), this.renderEmpty());
    }
    ngOnInit() {
      this.subscribeDefaultEmptyContentChange();
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    renderEmpty() {
      let e = this.content;
      if (typeof e == 'string') this.contentType = 'string';
      else if (e instanceof ke) {
        let n = { $implicit: this.nzComponentName };
        (this.contentType = 'template'),
          (this.contentPortal = new Kn(e, this.viewContainerRef, n));
      } else if (e instanceof Nn) {
        let n = Ft.create({
          parent: this.injector,
          providers: [{ provide: Ci, useValue: this.nzComponentName }],
        });
        (this.contentType = 'component'),
          (this.contentPortal = new Yn(e, this.viewContainerRef, n));
      } else (this.contentType = 'string'), (this.contentPortal = void 0);
      this.cdr.detectChanges();
    }
    subscribeDefaultEmptyContentChange() {
      this.configService
        .getConfigChangeEventForComponent('empty')
        .pipe(se(!0), f(this.destroy$))
        .subscribe(() => {
          (this.content =
            this.specificContent || this.getUserDefaultEmptyContent()),
            this.renderEmpty();
        });
    }
    getUserDefaultEmptyContent() {
      return (this.configService.getConfigForComponent('empty') || {})
        .nzDefaultEmptyContent;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(we), u(Fn), u(U), u(Ft));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-embed-empty']],
      inputs: {
        nzComponentName: 'nzComponentName',
        specificContent: 'specificContent',
      },
      exportAs: ['nzEmbedEmpty'],
      standalone: !0,
      features: [F, C],
      decls: 2,
      vars: 1,
      consts: [
        [3, 'cdkPortalOutlet'],
        ['nzNotFoundImage', 'simple', 1, 'ant-empty-normal'],
        ['nzNotFoundImage', 'simple', 1, 'ant-empty-small'],
      ],
      template: function (n, a) {
        n & 1 && p(0, Vo, 2, 1)(1, Bo, 1, 1), n & 2 && z(a.content ? 0 : 1);
      },
      dependencies: [Si, ti, ei],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var en = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [dt] }));
  let i = t;
  return i;
})();
function jo(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s();
    l(), ue(o.nzLabel);
  }
}
var xi = (() => {
  let t = class t {
    constructor() {
      this.nzLabel = null;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-option-item-group']],
      hostAttrs: [1, 'ant-select-item', 'ant-select-item-group'],
      inputs: { nzLabel: 'nzLabel' },
      standalone: !0,
      features: [C],
      decls: 1,
      vars: 1,
      consts: [[4, 'nzStringTemplateOutlet']],
      template: function (n, a) {
        n & 1 && p(0, jo, 2, 1, 'ng-container', 0),
          n & 2 && c('nzStringTemplateOutlet', a.nzLabel);
      },
      dependencies: [be, ye],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function Wo(i, t) {}
function Qo(i, t) {
  if ((i & 1 && p(0, Wo, 0, 0, 'ng-template', 1), i & 2)) {
    let o = s();
    c('ngTemplateOutlet', o.template);
  }
}
function Ho(i, t) {
  if ((i & 1 && E(0), i & 2)) {
    let o = s();
    q(' ', o.label, ' ');
  }
}
function Uo(i, t) {
  i & 1 && _(0, 'span', 3);
}
function Zo(i, t) {}
function Go(i, t) {
  if ((i & 1 && p(0, Zo, 0, 0, 'ng-template', 1), i & 2)) {
    let o = s(2);
    c('ngTemplateOutlet', o.icon);
  }
}
function Jo(i, t) {
  if (
    (i & 1 &&
      (d(0, 'div', 2), p(1, Uo, 1, 0, 'span', 3)(2, Go, 1, 1, null, 1), m()),
    i & 2)
  ) {
    let o = s();
    l(), z(o.icon ? 2 : 1);
  }
}
var yi = (() => {
  let t = class t {
    constructor(e, n, a) {
      (this.elementRef = e),
        (this.ngZone = n),
        (this.destroy$ = a),
        (this.selected = !1),
        (this.activated = !1),
        (this.grouped = !1),
        (this.customContent = !1),
        (this.template = null),
        (this.disabled = !1),
        (this.showState = !1),
        (this.label = null),
        (this.value = null),
        (this.activatedValue = null),
        (this.listOfSelectedValue = []),
        (this.icon = null),
        (this.itemClick = new b()),
        (this.itemHover = new b());
    }
    ngOnChanges(e) {
      let { value: n, activatedValue: a, listOfSelectedValue: r } = e;
      (n || r) &&
        (this.selected = this.listOfSelectedValue.some(h =>
          this.compareWith(h, this.value),
        )),
        (n || a) &&
          (this.activated = this.compareWith(this.activatedValue, this.value));
    }
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        re(this.elementRef.nativeElement, 'click')
          .pipe(f(this.destroy$))
          .subscribe(() => {
            this.disabled ||
              this.ngZone.run(() => this.itemClick.emit(this.value));
          }),
          re(this.elementRef.nativeElement, 'mouseenter')
            .pipe(f(this.destroy$))
            .subscribe(() => {
              this.disabled ||
                this.ngZone.run(() => this.itemHover.emit(this.value));
            });
      });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(X), u(ae));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-option-item']],
      hostAttrs: [1, 'ant-select-item', 'ant-select-item-option'],
      hostVars: 9,
      hostBindings: function (n, a) {
        n & 2 &&
          (J('title', a.title),
          D('ant-select-item-option-grouped', a.grouped)(
            'ant-select-item-option-selected',
            a.selected && !a.disabled,
          )('ant-select-item-option-disabled', a.disabled)(
            'ant-select-item-option-active',
            a.activated && !a.disabled,
          ));
      },
      inputs: {
        grouped: 'grouped',
        customContent: 'customContent',
        template: 'template',
        disabled: 'disabled',
        showState: 'showState',
        title: 'title',
        label: 'label',
        value: 'value',
        activatedValue: 'activatedValue',
        listOfSelectedValue: 'listOfSelectedValue',
        icon: 'icon',
        compareWith: 'compareWith',
      },
      outputs: { itemClick: 'itemClick', itemHover: 'itemHover' },
      standalone: !0,
      features: [oe([ae]), F, C],
      decls: 4,
      vars: 2,
      consts: [
        [1, 'ant-select-item-option-content'],
        [3, 'ngTemplateOutlet'],
        [
          'unselectable',
          'on',
          1,
          'ant-select-item-option-state',
          2,
          'user-select',
          'none',
        ],
        ['nz-icon', '', 'nzType', 'check', 1, 'ant-select-selected-icon'],
      ],
      template: function (n, a) {
        n & 1 &&
          (d(0, 'div', 0),
          p(1, Qo, 1, 1, null, 1)(2, Ho, 1, 1),
          m(),
          p(3, Jo, 3, 1, 'div', 2)),
          n & 2 &&
            (l(),
            z(a.customContent ? 1 : 2),
            l(2),
            z(a.showState && a.selected ? 3 : -1));
      },
      dependencies: [A, ze, fe],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function Xo(i, t) {
  if ((i & 1 && (d(0, 'div', 0), _(1, 'nz-embed-empty', 4), m()), i & 2)) {
    let o = s();
    l(), c('specificContent', o.notFoundContent);
  }
}
function Yo(i, t) {
  if ((i & 1 && _(0, 'nz-option-item-group', 5), i & 2)) {
    let o = s().$implicit;
    c('nzLabel', o.groupLabel);
  }
}
function Ko(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-option-item', 7),
      O('itemHover', function (n) {
        x(o);
        let a = s(2);
        return y(a.onItemHover(n));
      })('itemClick', function (n) {
        x(o);
        let a = s(2);
        return y(a.onItemClick(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s().$implicit,
      e = s();
    c('icon', e.menuItemSelectedIcon)('customContent', o.nzCustomContent)(
      'template',
      o.template,
    )('grouped', !!o.groupLabel)(
      'disabled',
      o.nzDisabled ||
        (e.isMaxLimitReached && !e.listOfSelectedValue.includes(o.nzValue)),
    )('showState', e.mode === 'tags' || e.mode === 'multiple')(
      'title',
      o.nzTitle,
    )('label', o.nzLabel)('compareWith', e.compareWith)(
      'activatedValue',
      e.activatedValue,
    )('listOfSelectedValue', e.listOfSelectedValue)('value', o.nzValue);
  }
}
function ea(i, t) {
  if (
    (i & 1 &&
      p(0, Yo, 1, 1, 'nz-option-item-group', 5)(
        1,
        Ko,
        1,
        12,
        'nz-option-item',
        6,
      ),
    i & 2)
  ) {
    let o,
      e = t.$implicit;
    z((o = e.type) === 'group' ? 0 : o === 'item' ? 1 : -1);
  }
}
function ta(i, t) {}
var tn = (() => {
  let t = class t {
    constructor() {
      (this.notFoundContent = void 0),
        (this.menuItemSelectedIcon = null),
        (this.dropdownRender = null),
        (this.activatedValue = null),
        (this.listOfSelectedValue = []),
        (this.mode = 'default'),
        (this.matchWidth = !0),
        (this.itemSize = 32),
        (this.maxItemLength = 8),
        (this.isMaxLimitReached = !1),
        (this.listOfContainerItem = []),
        (this.itemClick = new b()),
        (this.scrollToBottom = new b()),
        (this.scrolledIndex = 0),
        (this.ngZone = H(X)),
        (this.platformId = H(kn));
    }
    onItemClick(e) {
      this.itemClick.emit(e);
    }
    onItemHover(e) {
      this.activatedValue = e;
    }
    trackValue(e, n) {
      return n.key;
    }
    onScrolledIndexChange(e) {
      (this.scrolledIndex = e),
        e === this.listOfContainerItem.length - this.maxItemLength - 1 &&
          this.scrollToBottom.emit();
    }
    scrollToActivatedValue() {
      let e = this.listOfContainerItem.findIndex(n =>
        this.compareWith(n.key, this.activatedValue),
      );
      (e < this.scrolledIndex ||
        e >= this.scrolledIndex + this.maxItemLength) &&
        this.cdkVirtualScrollViewport.scrollToIndex(e || 0);
    }
    ngOnChanges(e) {
      let { listOfContainerItem: n, activatedValue: a } = e;
      (n || a) && this.scrollToActivatedValue();
    }
    ngAfterViewInit() {
      An(this.platformId) &&
        this.ngZone.runOutsideAngular(() =>
          setTimeout(() => this.scrollToActivatedValue()),
        );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-option-container']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(Ae, 7), n & 2)) {
          let r;
          k((r = M())) && (a.cdkVirtualScrollViewport = r.first);
        }
      },
      hostAttrs: [1, 'ant-select-dropdown'],
      inputs: {
        notFoundContent: 'notFoundContent',
        menuItemSelectedIcon: 'menuItemSelectedIcon',
        dropdownRender: 'dropdownRender',
        activatedValue: 'activatedValue',
        listOfSelectedValue: 'listOfSelectedValue',
        compareWith: 'compareWith',
        mode: 'mode',
        matchWidth: 'matchWidth',
        itemSize: 'itemSize',
        maxItemLength: 'maxItemLength',
        isMaxLimitReached: 'isMaxLimitReached',
        listOfContainerItem: 'listOfContainerItem',
      },
      outputs: { itemClick: 'itemClick', scrollToBottom: 'scrollToBottom' },
      exportAs: ['nzOptionContainer'],
      standalone: !0,
      features: [F, C],
      decls: 5,
      vars: 14,
      consts: [
        [1, 'ant-select-item-empty'],
        [3, 'scrolledIndexChange', 'itemSize', 'maxBufferPx', 'minBufferPx'],
        [
          'cdkVirtualFor',
          '',
          3,
          'cdkVirtualForOf',
          'cdkVirtualForTrackBy',
          'cdkVirtualForTemplateCacheSize',
        ],
        [3, 'ngTemplateOutlet'],
        ['nzComponentName', 'select', 3, 'specificContent'],
        [3, 'nzLabel'],
        [
          3,
          'icon',
          'customContent',
          'template',
          'grouped',
          'disabled',
          'showState',
          'title',
          'label',
          'compareWith',
          'activatedValue',
          'listOfSelectedValue',
          'value',
        ],
        [
          3,
          'itemHover',
          'itemClick',
          'icon',
          'customContent',
          'template',
          'grouped',
          'disabled',
          'showState',
          'title',
          'label',
          'compareWith',
          'activatedValue',
          'listOfSelectedValue',
          'value',
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (d(0, 'div'),
          p(1, Xo, 2, 1, 'div', 0),
          d(2, 'cdk-virtual-scroll-viewport', 1),
          O('scrolledIndexChange', function (h) {
            return a.onScrolledIndexChange(h);
          }),
          p(3, ea, 2, 1, 'ng-template', 2),
          m(),
          p(4, ta, 0, 0, 'ng-template', 3),
          m()),
          n & 2 &&
            (l(),
            z(a.listOfContainerItem.length === 0 ? 1 : -1),
            l(),
            ce('height', a.listOfContainerItem.length * a.itemSize, 'px')(
              'max-height',
              a.itemSize * a.maxItemLength,
              'px',
            ),
            D('full-width', !a.matchWidth),
            c('itemSize', a.itemSize)(
              'maxBufferPx',
              a.itemSize * a.maxItemLength,
            )('minBufferPx', a.itemSize * a.maxItemLength),
            l(),
            c('cdkVirtualForOf', a.listOfContainerItem)(
              'cdkVirtualForTrackBy',
              a.trackValue,
            )('cdkVirtualForTemplateCacheSize', 0),
            l(),
            c('ngTemplateOutlet', a.dropdownRender));
      },
      dependencies: [en, dt, xi, yi, A, Qt, jt, Wt, Ae, nt],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function na(i, t) {
  if ((i & 1 && (d(0, 'span'), E(1), m()), i & 2)) {
    let o = s();
    l(), En('', o.listOfValue.length, ' / ', o.nzMaxMultipleCount, '');
  }
}
function ia(i, t) {
  i & 1 && _(0, 'span', 0);
}
function oa(i, t) {
  i & 1 && _(0, 'span', 2);
}
function aa(i, t) {
  i & 1 && _(0, 'span', 3);
}
function ra(i, t) {
  if ((i & 1 && p(0, oa, 1, 0, 'span', 2)(1, aa, 1, 0, 'span', 3), i & 2)) {
    let o = s(2);
    z(o.search ? 0 : 1);
  }
}
function sa(i, t) {
  if ((i & 1 && _(0, 'span', 4), i & 2)) {
    let o = s().$implicit;
    c('nzType', o);
  }
}
function la(i, t) {
  if ((i & 1 && (ne(0), p(1, sa, 1, 1, 'span', 4), ie()), i & 2)) {
    let o = t.$implicit;
    l(), z(o ? 1 : -1);
  }
}
function ca(i, t) {
  if ((i & 1 && p(0, la, 2, 1, 'ng-container', 1), i & 2)) {
    let o = s(2);
    c('nzStringTemplateOutlet', o.suffixIcon);
  }
}
function pa(i, t) {
  if ((i & 1 && p(0, ra, 2, 1)(1, ca, 1, 1, 'ng-container'), i & 2)) {
    let o = s();
    z(o.showArrow && !o.suffixIcon ? 0 : 1);
  }
}
function da(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s();
    l(), ue(o.feedbackIcon);
  }
}
var bi = (() => {
  let t = class t {
    constructor() {
      (this.listOfValue = []),
        (this.loading = !1),
        (this.search = !1),
        (this.showArrow = !1),
        (this.isMaxTagCountSet = !1),
        (this.suffixIcon = null),
        (this.feedbackIcon = null),
        (this.nzMaxMultipleCount = 1 / 0);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-arrow']],
      hostAttrs: [1, 'ant-select-arrow'],
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && D('ant-select-arrow-loading', a.loading);
      },
      inputs: {
        listOfValue: 'listOfValue',
        loading: 'loading',
        search: 'search',
        showArrow: 'showArrow',
        isMaxTagCountSet: 'isMaxTagCountSet',
        suffixIcon: 'suffixIcon',
        feedbackIcon: 'feedbackIcon',
        nzMaxMultipleCount: [2, 'nzMaxMultipleCount', 'nzMaxMultipleCount', We],
      },
      standalone: !0,
      features: [L, C],
      decls: 4,
      vars: 3,
      consts: [
        ['nz-icon', '', 'nzType', 'loading'],
        [4, 'nzStringTemplateOutlet'],
        ['nz-icon', '', 'nzType', 'search'],
        ['nz-icon', '', 'nzType', 'down'],
        ['nz-icon', '', 3, 'nzType'],
      ],
      template: function (n, a) {
        n & 1 &&
          p(0, na, 2, 2, 'span')(1, ia, 1, 0, 'span', 0)(2, pa, 2, 1)(
            3,
            da,
            2,
            1,
            'ng-container',
            1,
          ),
          n & 2 &&
            (z(a.isMaxTagCountSet ? 0 : -1),
            l(),
            z(a.loading ? 1 : 2),
            l(2),
            c('nzStringTemplateOutlet', a.feedbackIcon));
      },
      dependencies: [ze, fe, be, ye],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function ma(i, t) {}
function ha(i, t) {
  if ((i & 1 && p(0, ma, 0, 0, 'ng-template', 0), i & 2)) {
    let o = s();
    c('ngTemplateOutlet', o.clearIcon);
  }
}
function ua(i, t) {
  i & 1 && _(0, 'span', 1);
}
var Ti = (() => {
  let t = class t {
    constructor() {
      (this.clearIcon = null), (this.clear = new b());
    }
    onClick(e) {
      e.preventDefault(), e.stopPropagation(), this.clear.emit(e);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-clear']],
      hostAttrs: [1, 'ant-select-clear'],
      hostBindings: function (n, a) {
        n & 1 &&
          O('click', function (h) {
            return a.onClick(h);
          });
      },
      inputs: { clearIcon: 'clearIcon' },
      outputs: { clear: 'clear' },
      standalone: !0,
      features: [C],
      decls: 2,
      vars: 1,
      consts: [
        [3, 'ngTemplateOutlet'],
        [
          'nz-icon',
          '',
          'nzType',
          'close-circle',
          'nzTheme',
          'fill',
          1,
          'ant-select-close-icon',
        ],
      ],
      template: function (n, a) {
        n & 1 && p(0, ha, 1, 1, null, 0)(1, ua, 1, 0, 'span', 1),
          n & 2 && z(a.clearIcon ? 0 : 1);
      },
      dependencies: [A, ze, fe],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var fa = i => ({ $implicit: i });
function za(i, t) {
  if ((i & 1 && (d(0, 'div', 2), E(1), m()), i & 2)) {
    let o = s(2);
    l(), ue(o.label);
  }
}
function ga(i, t) {
  if ((i & 1 && E(0), i & 2)) {
    let o = s(2);
    q(' ', o.label, ' ');
  }
}
function Ca(i, t) {
  if ((i & 1 && (ne(0), p(1, za, 2, 1, 'div', 2)(2, ga, 1, 1), ie()), i & 2)) {
    let o = s();
    l(), z(o.deletable ? 1 : 2);
  }
}
function _a(i, t) {
  i & 1 && _(0, 'span', 4);
}
function Sa(i, t) {}
function va(i, t) {
  if ((i & 1 && p(0, Sa, 0, 0, 'ng-template', 5), i & 2)) {
    let o = s(2);
    c('ngTemplateOutlet', o.removeIcon);
  }
}
function xa(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'span', 3),
      O('click', function (n) {
        x(o);
        let a = s();
        return y(a.onDelete(n));
      }),
      p(1, _a, 1, 0, 'span', 4)(2, va, 1, 1, null, 5),
      m();
  }
  if (i & 2) {
    let o = s();
    l(), z(o.removeIcon ? 2 : 1);
  }
}
var Oi = (() => {
  let t = class t {
    constructor() {
      (this.disabled = !1),
        (this.label = null),
        (this.deletable = !1),
        (this.removeIcon = null),
        (this.contentTemplateOutletContext = null),
        (this.contentTemplateOutlet = null),
        (this.delete = new b());
    }
    onDelete(e) {
      e.preventDefault(),
        e.stopPropagation(),
        this.disabled || this.delete.next(e);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-item']],
      hostAttrs: [1, 'ant-select-selection-item'],
      hostVars: 3,
      hostBindings: function (n, a) {
        n & 2 &&
          (J('title', a.label),
          D('ant-select-selection-item-disabled', a.disabled));
      },
      inputs: {
        disabled: 'disabled',
        label: 'label',
        deletable: 'deletable',
        removeIcon: 'removeIcon',
        contentTemplateOutletContext: 'contentTemplateOutletContext',
        contentTemplateOutlet: 'contentTemplateOutlet',
      },
      outputs: { delete: 'delete' },
      standalone: !0,
      features: [C],
      decls: 2,
      vars: 5,
      consts: [
        [4, 'nzStringTemplateOutlet', 'nzStringTemplateOutletContext'],
        [1, 'ant-select-selection-item-remove'],
        [1, 'ant-select-selection-item-content'],
        [1, 'ant-select-selection-item-remove', 3, 'click'],
        ['nz-icon', '', 'nzType', 'close'],
        [3, 'ngTemplateOutlet'],
      ],
      template: function (n, a) {
        n & 1 && p(0, Ca, 3, 1, 'ng-container', 0)(1, xa, 3, 1, 'span', 1),
          n & 2 &&
            (c('nzStringTemplateOutlet', a.contentTemplateOutlet)(
              'nzStringTemplateOutletContext',
              Et(3, fa, a.contentTemplateOutletContext),
            ),
            l(),
            z(a.deletable && !a.disabled ? 1 : -1));
      },
      dependencies: [A, be, ye, ze, fe],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function ya(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s();
    l(), q(' ', o.placeholder, ' ');
  }
}
var wi = (() => {
  let t = class t {
    constructor() {
      this.placeholder = null;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-placeholder']],
      hostAttrs: [1, 'ant-select-selection-placeholder'],
      inputs: { placeholder: 'placeholder' },
      standalone: !0,
      features: [C],
      decls: 1,
      vars: 1,
      consts: [[4, 'nzStringTemplateOutlet']],
      template: function (n, a) {
        n & 1 && p(0, ya, 2, 1, 'ng-container', 0),
          n & 2 && c('nzStringTemplateOutlet', a.placeholder);
      },
      dependencies: [be, ye],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var ba = ['inputElement'],
  Ta = ['mirrorElement'];
function Oa(i, t) {
  i & 1 && _(0, 'span', 3, 1);
}
var Ot = (() => {
  let t = class t {
    setCompositionState(e) {
      this.isComposingChange.next(e);
    }
    onValueChange(e) {
      (this.value = e),
        this.valueChange.next(e),
        this.mirrorSync && this.syncMirrorWidth();
    }
    clearInputValue() {
      let e = this.inputElement.nativeElement;
      (e.value = ''), this.onValueChange('');
    }
    syncMirrorWidth() {
      let e = this.mirrorElement.nativeElement,
        n = this.elementRef.nativeElement,
        a = this.inputElement.nativeElement;
      this.renderer.removeStyle(n, 'width'),
        this.renderer.setProperty(e, 'textContent', `${a.value}\xA0`),
        this.renderer.setStyle(n, 'width', `${e.scrollWidth}px`);
    }
    focus() {
      this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
      this.inputElement.nativeElement.blur();
    }
    constructor(e, n, a) {
      (this.elementRef = e),
        (this.renderer = n),
        (this.focusMonitor = a),
        (this.nzId = null),
        (this.disabled = !1),
        (this.mirrorSync = !1),
        (this.showInput = !0),
        (this.focusTrigger = !1),
        (this.value = ''),
        (this.autofocus = !1),
        (this.valueChange = new b()),
        (this.isComposingChange = new b());
    }
    ngOnChanges(e) {
      let n = this.inputElement.nativeElement,
        { focusTrigger: a, showInput: r } = e;
      r &&
        (this.showInput
          ? this.renderer.removeAttribute(n, 'readonly')
          : this.renderer.setAttribute(n, 'readonly', 'readonly')),
        a && a.currentValue === !0 && a.previousValue === !1 && n.focus();
    }
    ngAfterViewInit() {
      this.mirrorSync && this.syncMirrorWidth(), this.autofocus && this.focus();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(de), u(Ee));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-search']],
      viewQuery: function (n, a) {
        if ((n & 1 && ($(ba, 7), $(Ta, 5)), n & 2)) {
          let r;
          k((r = M())) && (a.inputElement = r.first),
            k((r = M())) && (a.mirrorElement = r.first);
        }
      },
      hostAttrs: [1, 'ant-select-selection-search'],
      inputs: {
        nzId: 'nzId',
        disabled: 'disabled',
        mirrorSync: 'mirrorSync',
        showInput: 'showInput',
        focusTrigger: 'focusTrigger',
        value: 'value',
        autofocus: 'autofocus',
      },
      outputs: {
        valueChange: 'valueChange',
        isComposingChange: 'isComposingChange',
      },
      standalone: !0,
      features: [oe([{ provide: di, useValue: !1 }]), F, C],
      decls: 3,
      vars: 7,
      consts: [
        ['inputElement', ''],
        ['mirrorElement', ''],
        [
          'autocomplete',
          'off',
          1,
          'ant-select-selection-search-input',
          3,
          'ngModelChange',
          'compositionstart',
          'compositionend',
          'ngModel',
          'disabled',
        ],
        [1, 'ant-select-selection-search-mirror'],
      ],
      template: function (n, a) {
        if (n & 1) {
          let r = P();
          d(0, 'input', 2, 0),
            O('ngModelChange', function (v) {
              return x(r), y(a.onValueChange(v));
            })('compositionstart', function () {
              return x(r), y(a.setCompositionState(!0));
            })('compositionend', function () {
              return x(r), y(a.setCompositionState(!1));
            }),
            m(),
            p(2, Oa, 2, 0, 'span', 3);
        }
        n & 2 &&
          (ce('opacity', a.showInput ? null : 0),
          c('ngModel', a.value)('disabled', a.disabled),
          J('id', a.nzId)('autofocus', a.autofocus ? 'autofocus' : null),
          l(2),
          z(a.mirrorSync ? 2 : -1));
      },
      dependencies: [Ne, mi, De, Ie],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var wa = (i, t) => t.nzValue;
function Da(i, t) {
  if ((i & 1 && _(0, 'nz-select-item', 3), i & 2)) {
    let o = s(2);
    c('deletable', !1)('disabled', !1)('removeIcon', o.removeIcon)(
      'label',
      o.listOfTopItem[0].nzLabel,
    )('contentTemplateOutlet', o.customTemplate)(
      'contentTemplateOutletContext',
      o.listOfTopItem[0],
    );
  }
}
function Ia(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-select-search', 2),
      O('isComposingChange', function (n) {
        x(o);
        let a = s();
        return y(a.isComposingChange(n));
      })('valueChange', function (n) {
        x(o);
        let a = s();
        return y(a.onInputValueChange(n));
      }),
      m(),
      p(1, Da, 1, 6, 'nz-select-item', 3);
  }
  if (i & 2) {
    let o = s();
    c('nzId', o.nzId)('disabled', o.disabled)('value', o.inputValue)(
      'showInput',
      o.showSearch,
    )('mirrorSync', !1)('autofocus', o.autofocus)('focusTrigger', o.open),
      l(),
      z(o.isShowSingleLabel ? 1 : -1);
  }
}
function Na(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-select-item', 6),
      O('delete', function () {
        let n = x(o).$implicit,
          a = s(2);
        return y(a.onDeleteItem(n.contentTemplateOutletContext));
      }),
      m();
  }
  if (i & 2) {
    let o = t.$implicit,
      e = s(2);
    c('removeIcon', e.removeIcon)('label', o.nzLabel)(
      'disabled',
      o.nzDisabled || e.disabled,
    )('contentTemplateOutlet', o.contentTemplateOutlet)('deletable', !0)(
      'contentTemplateOutletContext',
      o.contentTemplateOutletContext,
    );
  }
}
function ka(i, t) {
  if (i & 1) {
    let o = P();
    me(0, Na, 1, 6, 'nz-select-item', 4, wa),
      d(2, 'nz-select-search', 5),
      O('isComposingChange', function (n) {
        x(o);
        let a = s();
        return y(a.isComposingChange(n));
      })('valueChange', function (n) {
        x(o);
        let a = s();
        return y(a.onInputValueChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    he(o.listOfSlicedItem),
      l(2),
      c('nzId', o.nzId)('disabled', o.disabled)('value', o.inputValue)(
        'autofocus',
        o.autofocus,
      )('showInput', !0)('mirrorSync', !0)('focusTrigger', o.open);
  }
}
function Ma(i, t) {
  if ((i & 1 && _(0, 'nz-select-placeholder', 1), i & 2)) {
    let o = s();
    c('placeholder', o.placeHolder);
  }
}
var mt = (() => {
  let t = class t {
    updateTemplateVariable() {
      let e = this.listOfTopItem.length === 0;
      (this.isShowPlaceholder = e && !this.isComposing && !this.inputValue),
        (this.isShowSingleLabel = !e && !this.isComposing && !this.inputValue);
    }
    isComposingChange(e) {
      (this.isComposing = e), this.updateTemplateVariable();
    }
    onInputValueChange(e) {
      e !== this.inputValue &&
        ((this.inputValue = e),
        this.updateTemplateVariable(),
        this.inputValueChange.emit(e),
        this.tokenSeparate(e, this.tokenSeparators));
    }
    tokenSeparate(e, n) {
      let a = (h, v) => {
          for (let S = 0; S < v.length; ++S)
            if (h.lastIndexOf(v[S]) > 0) return !0;
          return !1;
        },
        r = (h, v) => {
          let S = new RegExp(`[${v.join()}]`),
            R = h.split(S).filter(Q => Q);
          return [...new Set(R)];
        };
      if (e && e.length && n.length && this.mode !== 'default' && a(e, n)) {
        let h = r(e, n);
        this.tokenize.next(h);
      }
    }
    clearInputValue() {
      this.nzSelectSearchComponent &&
        this.nzSelectSearchComponent.clearInputValue();
    }
    focus() {
      this.nzSelectSearchComponent && this.nzSelectSearchComponent.focus();
    }
    blur() {
      this.nzSelectSearchComponent && this.nzSelectSearchComponent.blur();
    }
    onDeleteItem(e) {
      !this.disabled && !e.nzDisabled && this.deleteItem.next(e);
    }
    constructor(e, n) {
      (this.elementRef = e),
        (this.ngZone = n),
        (this.nzId = null),
        (this.showSearch = !1),
        (this.placeHolder = null),
        (this.open = !1),
        (this.maxTagCount = 1 / 0),
        (this.autofocus = !1),
        (this.disabled = !1),
        (this.mode = 'default'),
        (this.customTemplate = null),
        (this.maxTagPlaceholder = null),
        (this.removeIcon = null),
        (this.listOfTopItem = []),
        (this.tokenSeparators = []),
        (this.tokenize = new b()),
        (this.inputValueChange = new b()),
        (this.deleteItem = new b()),
        (this.listOfSlicedItem = []),
        (this.isShowPlaceholder = !0),
        (this.isShowSingleLabel = !1),
        (this.isComposing = !1),
        (this.inputValue = null),
        (this.destroy$ = new I()),
        (this.noAnimation = H(Ue, { host: !0, optional: !0 }));
    }
    ngOnChanges(e) {
      let {
        listOfTopItem: n,
        maxTagCount: a,
        customTemplate: r,
        maxTagPlaceholder: h,
      } = e;
      if ((n && this.updateTemplateVariable(), n || a || r || h)) {
        let v = this.listOfTopItem
          .slice(0, this.maxTagCount)
          .map(S => ({
            nzLabel: S.nzLabel,
            nzValue: S.nzValue,
            nzDisabled: S.nzDisabled,
            contentTemplateOutlet: this.customTemplate,
            contentTemplateOutletContext: S,
          }));
        if (this.listOfTopItem.length > this.maxTagCount) {
          let S = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`,
            R = this.listOfTopItem.map(N => N.nzValue),
            Q = {
              nzLabel: S,
              nzValue: '$$__nz_exceeded_item',
              nzDisabled: !0,
              contentTemplateOutlet: this.maxTagPlaceholder,
              contentTemplateOutletContext: R.slice(this.maxTagCount),
            };
          v.push(Q);
        }
        this.listOfSlicedItem = v;
      }
    }
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        re(this.elementRef.nativeElement, 'click')
          .pipe(f(this.destroy$))
          .subscribe(e => {
            e.target !==
              this.nzSelectSearchComponent.inputElement.nativeElement &&
              this.nzSelectSearchComponent.focus();
          }),
          re(this.elementRef.nativeElement, 'keydown')
            .pipe(f(this.destroy$))
            .subscribe(e => {
              if (e.target instanceof HTMLInputElement) {
                let n = e.target.value;
                e.keyCode === 8 &&
                  this.mode !== 'default' &&
                  !n &&
                  this.listOfTopItem.length > 0 &&
                  (e.preventDefault(),
                  this.ngZone.run(() =>
                    this.onDeleteItem(
                      this.listOfTopItem[this.listOfTopItem.length - 1],
                    ),
                  ));
              }
            });
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(X));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-select-top-control']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(Ot, 5), n & 2)) {
          let r;
          k((r = M())) && (a.nzSelectSearchComponent = r.first);
        }
      },
      hostAttrs: [1, 'ant-select-selector'],
      inputs: {
        nzId: 'nzId',
        showSearch: 'showSearch',
        placeHolder: 'placeHolder',
        open: 'open',
        maxTagCount: [2, 'maxTagCount', 'maxTagCount', We],
        autofocus: 'autofocus',
        disabled: 'disabled',
        mode: 'mode',
        customTemplate: 'customTemplate',
        maxTagPlaceholder: 'maxTagPlaceholder',
        removeIcon: 'removeIcon',
        listOfTopItem: 'listOfTopItem',
        tokenSeparators: 'tokenSeparators',
      },
      outputs: {
        tokenize: 'tokenize',
        inputValueChange: 'inputValueChange',
        deleteItem: 'deleteItem',
      },
      exportAs: ['nzSelectTopControl'],
      standalone: !0,
      features: [L, F, C],
      decls: 3,
      vars: 2,
      consts: [
        [
          3,
          'nzId',
          'disabled',
          'value',
          'autofocus',
          'showInput',
          'mirrorSync',
          'focusTrigger',
        ],
        [3, 'placeholder'],
        [
          3,
          'isComposingChange',
          'valueChange',
          'nzId',
          'disabled',
          'value',
          'showInput',
          'mirrorSync',
          'autofocus',
          'focusTrigger',
        ],
        [
          3,
          'deletable',
          'disabled',
          'removeIcon',
          'label',
          'contentTemplateOutlet',
          'contentTemplateOutletContext',
        ],
        [
          3,
          'removeIcon',
          'label',
          'disabled',
          'contentTemplateOutlet',
          'deletable',
          'contentTemplateOutletContext',
        ],
        [
          3,
          'isComposingChange',
          'valueChange',
          'nzId',
          'disabled',
          'value',
          'autofocus',
          'showInput',
          'mirrorSync',
          'focusTrigger',
        ],
        [
          3,
          'delete',
          'removeIcon',
          'label',
          'disabled',
          'contentTemplateOutlet',
          'deletable',
          'contentTemplateOutletContext',
        ],
      ],
      template: function (n, a) {
        if (
          (n & 1 &&
            p(0, Ia, 2, 8)(1, ka, 3, 7, 'nz-select-search', 0)(
              2,
              Ma,
              1,
              1,
              'nz-select-placeholder',
              1,
            ),
          n & 2)
        ) {
          let r;
          z((r = a.mode) === 'default' ? 0 : 1),
            l(2),
            z(a.isShowPlaceholder ? 2 : -1);
        }
      },
      dependencies: [Ot, Oi, wi],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function Va(i, t) {
  if ((i & 1 && _(0, 'nz-form-item-feedback-icon', 6), i & 2)) {
    let o = s(3);
    c('status', o.status);
  }
}
function Ea(i, t) {
  if ((i & 1 && p(0, Va, 1, 1, 'nz-form-item-feedback-icon', 6), i & 2)) {
    let o = s(2);
    z(o.hasFeedback && o.status ? 0 : -1);
  }
}
function $a(i, t) {
  if (
    (i & 1 &&
      (d(0, 'nz-select-arrow', 3),
      p(1, Ea, 1, 1, 'ng-template', null, 1, te),
      m()),
    i & 2)
  ) {
    let o = W(2),
      e = s();
    c('showArrow', e.nzShowArrow)('loading', e.nzLoading)(
      'search',
      e.nzOpen && e.nzShowSearch,
    )('suffixIcon', e.nzSuffixIcon)('feedbackIcon', o)(
      'nzMaxMultipleCount',
      e.nzMaxMultipleCount,
    )('listOfValue', e.listOfValue)('isMaxTagCountSet', e.isMaxTagCountSet);
  }
}
function Ra(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-select-clear', 7),
      O('clear', function () {
        x(o);
        let n = s();
        return y(n.onClearSelection());
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    c('clearIcon', o.nzClearIcon);
  }
}
function Aa(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-option-container', 8),
      O('keydown', function (n) {
        x(o);
        let a = s();
        return y(a.onKeyDown(n));
      })('itemClick', function (n) {
        x(o);
        let a = s();
        return y(a.onItemClick(n));
      })('scrollToBottom', function () {
        x(o);
        let n = s();
        return y(n.nzScrollToBottom.emit());
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    D(
      'ant-select-dropdown-placement-bottomLeft',
      o.dropDownPosition === 'bottomLeft',
    )(
      'ant-select-dropdown-placement-topLeft',
      o.dropDownPosition === 'topLeft',
    )(
      'ant-select-dropdown-placement-bottomRight',
      o.dropDownPosition === 'bottomRight',
    )(
      'ant-select-dropdown-placement-topRight',
      o.dropDownPosition === 'topRight',
    ),
      c('ngStyle', o.nzDropdownStyle)('itemSize', o.nzOptionHeightPx)(
        'maxItemLength',
        o.nzOptionOverflowSize,
      )('matchWidth', o.nzDropdownMatchSelectWidth)('@slideMotion', 'enter')(
        '@.disabled',
        !!(o.noAnimation != null && o.noAnimation.nzNoAnimation),
      )(
        'nzNoAnimation',
        o.noAnimation == null ? null : o.noAnimation.nzNoAnimation,
      )('listOfContainerItem', o.listOfContainerItem)(
        'menuItemSelectedIcon',
        o.nzMenuItemSelectedIcon,
      )('notFoundContent', o.nzNotFoundContent)(
        'activatedValue',
        o.activatedValue,
      )('listOfSelectedValue', o.listOfValue)(
        'dropdownRender',
        o.nzDropdownRender,
      )('compareWith', o.compareWith)('mode', o.nzMode)(
        'isMaxLimitReached',
        o.isMaxLimitReached,
      );
  }
}
var Ba = (i, t) =>
    t && t.nzLabel
      ? t.nzLabel.toString().toLowerCase().indexOf(i.toLowerCase()) > -1
      : !1,
  La = 'select',
  Ze = class Ze {
    set nzShowArrow(t) {
      this._nzShowArrow = t;
    }
    get nzShowArrow() {
      return this._nzShowArrow === void 0
        ? this.nzMode === 'default'
        : this._nzShowArrow;
    }
    get isMaxTagCountSet() {
      return this.nzMaxMultipleCount !== 1 / 0;
    }
    generateTagItem(t) {
      return { nzValue: t, nzLabel: t, type: 'item' };
    }
    onItemClick(t) {
      if (((this.activatedValue = t), this.nzMode === 'default'))
        (this.listOfValue.length === 0 ||
          !this.compareWith(this.listOfValue[0], t)) &&
          this.updateListOfValue([t]),
          this.setOpenState(!1);
      else {
        let o = this.listOfValue.findIndex(e => this.compareWith(e, t));
        if (o !== -1) {
          let e = this.listOfValue.filter((n, a) => a !== o);
          this.updateListOfValue(e);
        } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
          let e = [...this.listOfValue, t];
          this.updateListOfValue(e);
        }
        this.focus(), this.nzAutoClearSearchValue && this.clearInput();
      }
    }
    onItemDelete(t) {
      let o = this.listOfValue.filter(e => !this.compareWith(e, t.nzValue));
      this.updateListOfValue(o), this.clearInput();
    }
    updateListOfContainerItem() {
      let t = this.listOfTagAndTemplateItem
        .filter(n => !n.nzHide)
        .filter(n =>
          !this.nzServerSearch && this.searchValue
            ? this.nzFilterOption(this.searchValue, n)
            : !0,
        );
      if (this.nzMode === 'tags' && this.searchValue) {
        let n = this.listOfTagAndTemplateItem.find(
          a => a.nzLabel === this.searchValue,
        );
        if (n) this.activatedValue = n.nzValue;
        else {
          let a = this.generateTagItem(this.searchValue);
          (t = [a, ...t]), (this.activatedValue = a.nzValue);
        }
      }
      let o =
        t.find(n => n.nzLabel === this.searchValue) ||
        t.find(n => this.compareWith(n.nzValue, this.activatedValue)) ||
        t.find(n => this.compareWith(n.nzValue, this.listOfValue[0])) ||
        t[0];
      this.activatedValue = (o && o.nzValue) || null;
      let e = [];
      this.isReactiveDriven
        ? (e = [
            ...new Set(
              this.nzOptions.filter(n => n.groupLabel).map(n => n.groupLabel),
            ),
          ])
        : this.listOfNzOptionGroupComponent &&
          (e = this.listOfNzOptionGroupComponent.map(n => n.nzLabel)),
        e.forEach(n => {
          let a = t.findIndex(r => n === r.groupLabel);
          if (a > -1) {
            let r = { groupLabel: n, type: 'group', key: n };
            t.splice(a, 0, r);
          }
        }),
        (this.listOfContainerItem = [...t]),
        this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
      this.nzSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(t) {
      let e = ((n, a) => (a === 'default' ? (n.length > 0 ? n[0] : null) : n))(
        t,
        this.nzMode,
      );
      this.value !== e &&
        ((this.listOfValue = t),
        this.listOfValue$.next(t),
        (this.value = e),
        this.onChange(this.value)),
        (this.isMaxLimitReached =
          this.nzMaxMultipleCount !== 1 / 0 &&
          this.listOfValue.length === this.nzMaxMultipleCount);
    }
    onTokenSeparate(t) {
      let o = this.listOfTagAndTemplateItem
        .filter(e => t.findIndex(n => n === e.nzLabel) !== -1)
        .map(e => e.nzValue)
        .filter(
          e => this.listOfValue.findIndex(n => this.compareWith(n, e)) === -1,
        );
      if (this.nzMode === 'multiple')
        this.updateListOfValue([...this.listOfValue, ...o]);
      else if (this.nzMode === 'tags') {
        let e = t.filter(
          n =>
            this.listOfTagAndTemplateItem.findIndex(a => a.nzLabel === n) ===
            -1,
        );
        this.updateListOfValue([...this.listOfValue, ...o, ...e]);
      }
      this.clearInput();
    }
    onKeyDown(t) {
      if (this.nzDisabled) return;
      let o = this.listOfContainerItem
          .filter(n => n.type === 'item')
          .filter(n => !n.nzDisabled),
        e = o.findIndex(n => this.compareWith(n.nzValue, this.activatedValue));
      switch (t.keyCode) {
        case 38:
          if ((t.preventDefault(), this.nzOpen && o.length > 0)) {
            let n = e > 0 ? e - 1 : o.length - 1;
            this.activatedValue = o[n].nzValue;
          }
          break;
        case 40:
          if ((t.preventDefault(), this.nzOpen && o.length > 0)) {
            let n = e < o.length - 1 ? e + 1 : 0;
            this.activatedValue = o[n].nzValue;
          } else this.setOpenState(!0);
          break;
        case 13:
          t.preventDefault(),
            this.nzOpen
              ? un(this.activatedValue) &&
                e !== -1 &&
                this.onItemClick(this.activatedValue)
              : this.setOpenState(!0);
          break;
        case 32:
          this.nzOpen || (this.setOpenState(!0), t.preventDefault());
          break;
        case 9:
          this.nzSelectOnTab
            ? this.nzOpen &&
              (t.preventDefault(),
              un(this.activatedValue) && this.onItemClick(this.activatedValue))
            : this.setOpenState(!1);
          break;
        case 27:
          break;
        default:
          this.nzOpen || this.setOpenState(!0);
      }
    }
    setOpenState(t) {
      this.nzOpen !== t &&
        ((this.nzOpen = t),
        this.nzOpenChange.emit(t),
        this.onOpenChange(),
        this.cdr.markForCheck());
    }
    onOpenChange() {
      this.updateCdkConnectedOverlayStatus(),
        this.nzAutoClearSearchValue && this.clearInput();
    }
    onInputValueChange(t) {
      (this.searchValue = t),
        this.updateListOfContainerItem(),
        this.nzOnSearch.emit(t),
        this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
      this.updateListOfValue([]);
    }
    onClickOutside(t) {
      let o = Bn(t);
      this.host.nativeElement.contains(o) || this.setOpenState(!1);
    }
    focus() {
      this.nzSelectTopControlComponent.focus();
    }
    blur() {
      this.nzSelectTopControlComponent.blur();
    }
    onPositionChange(t) {
      let o = ni(t);
      this.dropDownPosition = o;
    }
    updateCdkConnectedOverlayStatus() {
      if (this.platform.isBrowser && this.originElement.nativeElement) {
        let t = this.triggerWidth;
        zn(this.requestId),
          (this.requestId = gn(() => {
            (this.triggerWidth =
              this.originElement.nativeElement.getBoundingClientRect().width),
              t !== this.triggerWidth && this.cdr.detectChanges();
          }));
      }
    }
    updateCdkConnectedOverlayPositions() {
      gn(() => {
        this.cdkConnectedOverlay?.overlayRef?.updatePosition();
      });
    }
    constructor(t, o, e, n, a, r, h, v, S) {
      (this.ngZone = t),
        (this.destroy$ = o),
        (this.nzConfigService = e),
        (this.cdr = n),
        (this.host = a),
        (this.renderer = r),
        (this.platform = h),
        (this.focusMonitor = v),
        (this.directionality = S),
        (this._nzModuleName = La),
        (this.nzId = null),
        (this.nzSize = 'default'),
        (this.nzStatus = ''),
        (this.nzOptionHeightPx = 32),
        (this.nzOptionOverflowSize = 8),
        (this.nzDropdownClassName = null),
        (this.nzDropdownMatchSelectWidth = !0),
        (this.nzDropdownStyle = null),
        (this.nzNotFoundContent = void 0),
        (this.nzPlaceHolder = null),
        (this.nzPlacement = null),
        (this.nzMaxTagCount = 1 / 0),
        (this.nzDropdownRender = null),
        (this.nzCustomTemplate = null),
        (this.nzSuffixIcon = null),
        (this.nzClearIcon = null),
        (this.nzRemoveIcon = null),
        (this.nzMenuItemSelectedIcon = null),
        (this.nzTokenSeparators = []),
        (this.nzMaxTagPlaceholder = null),
        (this.nzMaxMultipleCount = 1 / 0),
        (this.nzMode = 'default'),
        (this.nzFilterOption = Ba),
        (this.compareWith = (R, Q) => R === Q),
        (this.nzAllowClear = !1),
        (this.nzBorderless = !1),
        (this.nzShowSearch = !1),
        (this.nzLoading = !1),
        (this.nzAutoFocus = !1),
        (this.nzAutoClearSearchValue = !0),
        (this.nzServerSearch = !1),
        (this.nzDisabled = !1),
        (this.nzOpen = !1),
        (this.nzSelectOnTab = !1),
        (this.nzBackdrop = !1),
        (this.nzOptions = []),
        (this.nzOnSearch = new b()),
        (this.nzScrollToBottom = new b()),
        (this.nzOpenChange = new b()),
        (this.nzBlur = new b()),
        (this.nzFocus = new b()),
        (this.listOfValue$ = new Y([])),
        (this.listOfTemplateItem$ = new Y([])),
        (this.listOfTagAndTemplateItem = []),
        (this.searchValue = ''),
        (this.isReactiveDriven = !1),
        (this.requestId = -1),
        (this.isNzDisableFirstChange = !0),
        (this.onChange = () => {}),
        (this.onTouched = () => {}),
        (this.dropDownPosition = 'bottomLeft'),
        (this.triggerWidth = null),
        (this.listOfContainerItem = []),
        (this.listOfTopItem = []),
        (this.activatedValue = null),
        (this.listOfValue = []),
        (this.focused = !1),
        (this.dir = 'ltr'),
        (this.positions = []),
        (this.isMaxLimitReached = !1),
        (this.prefixCls = 'ant-select'),
        (this.statusCls = {}),
        (this.status = ''),
        (this.hasFeedback = !1),
        (this.noAnimation = H(Ue, { host: !0, optional: !0 })),
        (this.nzFormStatusService = H(it, { optional: !0 })),
        (this.nzFormNoStatusService = H(si, { optional: !0 }));
    }
    writeValue(t) {
      if (this.value !== t) {
        this.value = t;
        let e = ((n, a) => (n == null ? [] : a === 'default' ? [n] : n))(
          t,
          this.nzMode,
        );
        (this.listOfValue = e),
          this.listOfValue$.next(e),
          this.cdr.markForCheck();
      }
    }
    registerOnChange(t) {
      this.onChange = t;
    }
    registerOnTouched(t) {
      this.onTouched = t;
    }
    setDisabledState(t) {
      (this.nzDisabled = (this.isNzDisableFirstChange && this.nzDisabled) || t),
        (this.isNzDisableFirstChange = !1),
        this.nzDisabled && this.setOpenState(!1),
        this.cdr.markForCheck();
    }
    ngOnChanges(t) {
      let {
        nzOpen: o,
        nzDisabled: e,
        nzOptions: n,
        nzStatus: a,
        nzPlacement: r,
      } = t;
      if (
        (o && this.onOpenChange(),
        e && this.nzDisabled && this.setOpenState(!1),
        n)
      ) {
        this.isReactiveDriven = !0;
        let v = (this.nzOptions || []).map(S => ({
          template: S.label instanceof ke ? S.label : null,
          nzTitle: this.getTitle(S.title, S.label),
          nzLabel:
            typeof S.label == 'string' || typeof S.label == 'number'
              ? S.label
              : null,
          nzValue: S.value,
          nzDisabled: S.disabled || !1,
          nzHide: S.hide || !1,
          nzCustomContent: S.label instanceof ke,
          groupLabel: S.groupLabel || null,
          type: 'item',
          key: S.key === void 0 ? S.value : S.key,
        }));
        this.listOfTemplateItem$.next(v);
      }
      if ((a && this.setStatusStyles(this.nzStatus, this.hasFeedback), r)) {
        let { currentValue: h } = r;
        this.dropDownPosition = h;
        let v = ['bottomLeft', 'topLeft', 'bottomRight', 'topRight'];
        h && v.includes(h)
          ? (this.positions = [_n[h]])
          : (this.positions = v.map(S => _n[S]));
      }
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges
        .pipe(
          qe(
            (t, o) => t.status === o.status && t.hasFeedback === o.hasFeedback,
          ),
          Dn(
            this.nzFormNoStatusService
              ? this.nzFormNoStatusService.noFormStatus
              : Nt(!1),
          ),
          ee(([{ status: t, hasFeedback: o }, e]) => ({
            status: e ? '' : t,
            hasFeedback: o,
          })),
          f(this.destroy$),
        )
        .subscribe(({ status: t, hasFeedback: o }) => {
          this.setStatusStyles(t, o);
        }),
        this.focusMonitor
          .monitor(this.host, !0)
          .pipe(f(this.destroy$))
          .subscribe(t => {
            t
              ? ((this.focused = !0),
                this.cdr.markForCheck(),
                this.nzFocus.emit())
              : ((this.focused = !1),
                this.cdr.markForCheck(),
                this.nzBlur.emit(),
                Promise.resolve().then(() => {
                  this.onTouched();
                }));
          }),
        ge([this.listOfValue$, this.listOfTemplateItem$])
          .pipe(f(this.destroy$))
          .subscribe(([t, o]) => {
            let e = t
              .filter(() => this.nzMode === 'tags')
              .filter(
                n => o.findIndex(a => this.compareWith(a.nzValue, n)) === -1,
              )
              .map(
                n =>
                  this.listOfTopItem.find(a =>
                    this.compareWith(a.nzValue, n),
                  ) || this.generateTagItem(n),
              );
            (this.listOfTagAndTemplateItem = [...o, ...e]),
              (this.listOfTopItem = this.listOfValue
                .map(n =>
                  [
                    ...this.listOfTagAndTemplateItem,
                    ...this.listOfTopItem,
                  ].find(a => this.compareWith(n, a.nzValue)),
                )
                .filter(n => !!n)),
              this.updateListOfContainerItem();
          }),
        this.directionality.change?.pipe(f(this.destroy$)).subscribe(t => {
          (this.dir = t), this.cdr.detectChanges();
        }),
        this.nzConfigService
          .getConfigChangeEventForComponent('select')
          .pipe(f(this.destroy$))
          .subscribe(() => {
            this.cdr.markForCheck();
          }),
        (this.dir = this.directionality.value),
        this.ngZone.runOutsideAngular(() =>
          re(this.host.nativeElement, 'click')
            .pipe(f(this.destroy$))
            .subscribe(() => {
              (this.nzOpen && this.nzShowSearch) ||
                this.nzDisabled ||
                this.ngZone.run(() => this.setOpenState(!this.nzOpen));
            }),
        ),
        this.cdkConnectedOverlay.overlayKeydown
          .pipe(f(this.destroy$))
          .subscribe(t => {
            t.keyCode === 27 && this.setOpenState(!1);
          });
    }
    ngAfterContentInit() {
      this.isReactiveDriven ||
        Te(
          this.listOfNzOptionGroupComponent.changes,
          this.listOfNzOptionComponent.changes,
        )
          .pipe(
            se(!0),
            le(() =>
              Te(
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map(t => t.changes),
                ...this.listOfNzOptionGroupComponent.map(t => t.changes),
              ).pipe(se(!0)),
            ),
            f(this.destroy$),
          )
          .subscribe(() => {
            let t = this.listOfNzOptionComponent.toArray().map(o => {
              let {
                template: e,
                nzLabel: n,
                nzValue: a,
                nzKey: r,
                nzDisabled: h,
                nzHide: v,
                nzCustomContent: S,
                groupLabel: R,
              } = o;
              return {
                template: e,
                nzLabel: n,
                nzValue: a,
                nzDisabled: h,
                nzHide: v,
                nzCustomContent: S,
                groupLabel: R,
                nzTitle: this.getTitle(o.nzTitle, o.nzLabel),
                type: 'item',
                key: r === void 0 ? a : r,
              };
            });
            this.listOfTemplateItem$.next(t), this.cdr.markForCheck();
          });
    }
    ngOnDestroy() {
      zn(this.requestId), this.focusMonitor.stopMonitoring(this.host);
    }
    setStatusStyles(t, o) {
      (this.status = t),
        (this.hasFeedback = o),
        this.cdr.markForCheck(),
        (this.statusCls = Qn(this.prefixCls, t, o)),
        Object.keys(this.statusCls).forEach(e => {
          this.statusCls[e]
            ? this.renderer.addClass(this.host.nativeElement, e)
            : this.renderer.removeClass(this.host.nativeElement, e);
        });
    }
    getTitle(t, o) {
      let e;
      return (
        t === void 0
          ? (typeof o == 'string' || typeof o == 'number') && (e = o.toString())
          : (typeof t == 'string' || typeof t == 'number') &&
            (e = t.toString()),
        e
      );
    }
  };
(Ze.ɵfac = function (o) {
  return new (o || Ze)(
    u(X),
    u(ae),
    u(we),
    u(U),
    u(V),
    u(de),
    u(Rt),
    u(Ee),
    u(Ce),
  );
}),
  (Ze.ɵcmp = g({
    type: Ze,
    selectors: [['nz-select']],
    contentQueries: function (o, e, n) {
      if ((o & 1 && (Oe(n, Kt, 5), Oe(n, bt, 5)), o & 2)) {
        let a;
        k((a = M())) && (e.listOfNzOptionComponent = a),
          k((a = M())) && (e.listOfNzOptionGroupComponent = a);
      }
    },
    viewQuery: function (o, e) {
      if (
        (o & 1 && ($(Cn, 7, V), $(vt, 7), $(mt, 7), $(bt, 7, V), $(mt, 7, V)),
        o & 2)
      ) {
        let n;
        k((n = M())) && (e.originElement = n.first),
          k((n = M())) && (e.cdkConnectedOverlay = n.first),
          k((n = M())) && (e.nzSelectTopControlComponent = n.first),
          k((n = M())) && (e.nzOptionGroupComponentElement = n.first),
          k((n = M())) && (e.nzSelectTopControlComponentElement = n.first);
      }
    },
    hostAttrs: [1, 'ant-select'],
    hostVars: 26,
    hostBindings: function (o, e) {
      o & 2 &&
        D('ant-select-in-form-item', !!e.nzFormStatusService)(
          'ant-select-lg',
          e.nzSize === 'large',
        )('ant-select-sm', e.nzSize === 'small')(
          'ant-select-show-arrow',
          e.nzShowArrow,
        )('ant-select-disabled', e.nzDisabled)(
          'ant-select-show-search',
          (e.nzShowSearch || e.nzMode !== 'default') && !e.nzDisabled,
        )('ant-select-allow-clear', e.nzAllowClear)(
          'ant-select-borderless',
          e.nzBorderless,
        )('ant-select-open', e.nzOpen)(
          'ant-select-focused',
          e.nzOpen || e.focused,
        )('ant-select-single', e.nzMode === 'default')(
          'ant-select-multiple',
          e.nzMode !== 'default',
        )('ant-select-rtl', e.dir === 'rtl');
    },
    inputs: {
      nzId: 'nzId',
      nzSize: 'nzSize',
      nzStatus: 'nzStatus',
      nzOptionHeightPx: 'nzOptionHeightPx',
      nzOptionOverflowSize: 'nzOptionOverflowSize',
      nzDropdownClassName: 'nzDropdownClassName',
      nzDropdownMatchSelectWidth: 'nzDropdownMatchSelectWidth',
      nzDropdownStyle: 'nzDropdownStyle',
      nzNotFoundContent: 'nzNotFoundContent',
      nzPlaceHolder: 'nzPlaceHolder',
      nzPlacement: 'nzPlacement',
      nzMaxTagCount: 'nzMaxTagCount',
      nzDropdownRender: 'nzDropdownRender',
      nzCustomTemplate: 'nzCustomTemplate',
      nzSuffixIcon: 'nzSuffixIcon',
      nzClearIcon: 'nzClearIcon',
      nzRemoveIcon: 'nzRemoveIcon',
      nzMenuItemSelectedIcon: 'nzMenuItemSelectedIcon',
      nzTokenSeparators: 'nzTokenSeparators',
      nzMaxTagPlaceholder: 'nzMaxTagPlaceholder',
      nzMaxMultipleCount: 'nzMaxMultipleCount',
      nzMode: 'nzMode',
      nzFilterOption: 'nzFilterOption',
      compareWith: 'compareWith',
      nzAllowClear: [2, 'nzAllowClear', 'nzAllowClear', T],
      nzBorderless: [2, 'nzBorderless', 'nzBorderless', T],
      nzShowSearch: [2, 'nzShowSearch', 'nzShowSearch', T],
      nzLoading: [2, 'nzLoading', 'nzLoading', T],
      nzAutoFocus: [2, 'nzAutoFocus', 'nzAutoFocus', T],
      nzAutoClearSearchValue: [
        2,
        'nzAutoClearSearchValue',
        'nzAutoClearSearchValue',
        T,
      ],
      nzServerSearch: [2, 'nzServerSearch', 'nzServerSearch', T],
      nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
      nzOpen: [2, 'nzOpen', 'nzOpen', T],
      nzSelectOnTab: [2, 'nzSelectOnTab', 'nzSelectOnTab', T],
      nzBackdrop: [2, 'nzBackdrop', 'nzBackdrop', T],
      nzOptions: 'nzOptions',
      nzShowArrow: [2, 'nzShowArrow', 'nzShowArrow', T],
    },
    outputs: {
      nzOnSearch: 'nzOnSearch',
      nzScrollToBottom: 'nzScrollToBottom',
      nzOpenChange: 'nzOpenChange',
      nzBlur: 'nzBlur',
      nzFocus: 'nzFocus',
    },
    exportAs: ['nzSelect'],
    standalone: !0,
    features: [
      oe([ae, { provide: Qe, useExisting: je(() => Ze), multi: !0 }]),
      L,
      F,
      C,
    ],
    decls: 5,
    vars: 25,
    consts: [
      ['origin', 'cdkOverlayOrigin'],
      ['feedbackIconTpl', ''],
      [
        'cdkOverlayOrigin',
        '',
        3,
        'inputValueChange',
        'tokenize',
        'deleteItem',
        'keydown',
        'nzId',
        'open',
        'disabled',
        'mode',
        'nzNoAnimation',
        'maxTagPlaceholder',
        'removeIcon',
        'placeHolder',
        'maxTagCount',
        'customTemplate',
        'tokenSeparators',
        'showSearch',
        'autofocus',
        'listOfTopItem',
      ],
      [
        3,
        'showArrow',
        'loading',
        'search',
        'suffixIcon',
        'feedbackIcon',
        'nzMaxMultipleCount',
        'listOfValue',
        'isMaxTagCountSet',
      ],
      [3, 'clearIcon'],
      [
        'cdkConnectedOverlay',
        '',
        'nzConnectedOverlay',
        '',
        3,
        'overlayOutsideClick',
        'detach',
        'positionChange',
        'cdkConnectedOverlayHasBackdrop',
        'cdkConnectedOverlayMinWidth',
        'cdkConnectedOverlayWidth',
        'cdkConnectedOverlayOrigin',
        'cdkConnectedOverlayTransformOriginOn',
        'cdkConnectedOverlayPanelClass',
        'cdkConnectedOverlayOpen',
        'cdkConnectedOverlayPositions',
      ],
      [3, 'status'],
      [3, 'clear', 'clearIcon'],
      [
        3,
        'keydown',
        'itemClick',
        'scrollToBottom',
        'ngStyle',
        'itemSize',
        'maxItemLength',
        'matchWidth',
        'nzNoAnimation',
        'listOfContainerItem',
        'menuItemSelectedIcon',
        'notFoundContent',
        'activatedValue',
        'listOfSelectedValue',
        'dropdownRender',
        'compareWith',
        'mode',
        'isMaxLimitReached',
      ],
    ],
    template: function (o, e) {
      if (o & 1) {
        let n = P();
        d(0, 'nz-select-top-control', 2, 0),
          O('inputValueChange', function (r) {
            return x(n), y(e.onInputValueChange(r));
          })('tokenize', function (r) {
            return x(n), y(e.onTokenSeparate(r));
          })('deleteItem', function (r) {
            return x(n), y(e.onItemDelete(r));
          })('keydown', function (r) {
            return x(n), y(e.onKeyDown(r));
          }),
          m(),
          p(2, $a, 3, 8, 'nz-select-arrow', 3)(
            3,
            Ra,
            1,
            1,
            'nz-select-clear',
            4,
          )(4, Aa, 1, 24, 'ng-template', 5),
          O('overlayOutsideClick', function (r) {
            return x(n), y(e.onClickOutside(r));
          })('detach', function () {
            return x(n), y(e.setOpenState(!1));
          })('positionChange', function (r) {
            return x(n), y(e.onPositionChange(r));
          });
      }
      if (o & 2) {
        let n = W(1);
        c('nzId', e.nzId)('open', e.nzOpen)('disabled', e.nzDisabled)(
          'mode',
          e.nzMode,
        )(
          '@.disabled',
          !!(e.noAnimation != null && e.noAnimation.nzNoAnimation),
        )(
          'nzNoAnimation',
          e.noAnimation == null ? null : e.noAnimation.nzNoAnimation,
        )('maxTagPlaceholder', e.nzMaxTagPlaceholder)(
          'removeIcon',
          e.nzRemoveIcon,
        )('placeHolder', e.nzPlaceHolder)('maxTagCount', e.nzMaxTagCount)(
          'customTemplate',
          e.nzCustomTemplate,
        )('tokenSeparators', e.nzTokenSeparators)('showSearch', e.nzShowSearch)(
          'autofocus',
          e.nzAutoFocus,
        )('listOfTopItem', e.listOfTopItem),
          l(2),
          z(
            e.nzShowArrow || (e.hasFeedback && e.status) || e.isMaxTagCountSet
              ? 2
              : -1,
          ),
          l(),
          z(e.nzAllowClear && !e.nzDisabled && e.listOfValue.length ? 3 : -1),
          l(),
          c('cdkConnectedOverlayHasBackdrop', e.nzBackdrop)(
            'cdkConnectedOverlayMinWidth',
            e.nzDropdownMatchSelectWidth ? null : e.triggerWidth,
          )(
            'cdkConnectedOverlayWidth',
            e.nzDropdownMatchSelectWidth ? e.triggerWidth : null,
          )('cdkConnectedOverlayOrigin', n)(
            'cdkConnectedOverlayTransformOriginOn',
            '.ant-select-dropdown',
          )('cdkConnectedOverlayPanelClass', e.nzDropdownClassName)(
            'cdkConnectedOverlayOpen',
            e.nzOpen,
          )('cdkConnectedOverlayPositions', e.positions);
      }
    },
    dependencies: [mt, Cn, Ue, bi, ci, li, Ti, vt, nt, Ht, tn, et],
    encapsulation: 2,
    data: { animation: [ii] },
    changeDetection: 0,
  }));
var $e = Ze;
Z([G()], $e.prototype, 'nzOptionHeightPx', void 0);
Z([G()], $e.prototype, 'nzSuffixIcon', void 0);
Z([G()], $e.prototype, 'nzBorderless', void 0);
Z([G()], $e.prototype, 'nzBackdrop', void 0);
var Di = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [$e, tn, mt, Ot] }));
  let i = t;
  return i;
})();
var Wa = ['nz-pagination-item', ''],
  Qa = (i, t) => ({ $implicit: i, page: t });
function Ha(i, t) {
  if ((i & 1 && (d(0, 'a'), E(1), m()), i & 2)) {
    let o = s().page;
    l(), ue(o);
  }
}
function Ua(i, t) {
  i & 1 && _(0, 'span', 4);
}
function Za(i, t) {
  i & 1 && _(0, 'span', 5);
}
function Ga(i, t) {
  if (
    (i & 1 &&
      (d(0, 'button', 2),
      p(1, Ua, 1, 0, 'span', 4)(2, Za, 1, 0, 'span', 5),
      m()),
    i & 2)
  ) {
    let o = s(2);
    c('disabled', o.disabled),
      J('title', o.locale.prev_page),
      l(),
      z(o.direction === 'rtl' ? 1 : 2);
  }
}
function Ja(i, t) {
  i & 1 && _(0, 'span', 5);
}
function qa(i, t) {
  i & 1 && _(0, 'span', 4);
}
function Xa(i, t) {
  if (
    (i & 1 &&
      (d(0, 'button', 2),
      p(1, Ja, 1, 0, 'span', 5)(2, qa, 1, 0, 'span', 4),
      m()),
    i & 2)
  ) {
    let o = s(2);
    c('disabled', o.disabled),
      J('title', o.locale.next_page),
      l(),
      z(o.direction === 'rtl' ? 1 : 2);
  }
}
function Ya(i, t) {
  i & 1 && _(0, 'span', 8);
}
function Ka(i, t) {
  i & 1 && _(0, 'span', 9);
}
function er(i, t) {
  if ((i & 1 && p(0, Ya, 1, 0, 'span', 8)(1, Ka, 1, 0, 'span', 9), i & 2)) {
    let o = s(3);
    z(o.direction === 'rtl' ? 0 : 1);
  }
}
function tr(i, t) {
  i & 1 && _(0, 'span', 9);
}
function nr(i, t) {
  i & 1 && _(0, 'span', 8);
}
function ir(i, t) {
  if ((i & 1 && p(0, tr, 1, 0, 'span', 9)(1, nr, 1, 0, 'span', 8), i & 2)) {
    let o = s(3);
    z(o.direction === 'rtl' ? 0 : 1);
  }
}
function or(i, t) {
  if (
    (i & 1 &&
      (d(0, 'a', 3)(1, 'div', 6),
      p(2, er, 2, 1)(3, ir, 2, 1),
      d(4, 'span', 7),
      E(5, '\u2022\u2022\u2022'),
      m()()()),
    i & 2)
  ) {
    let o,
      e = s().$implicit;
    l(2), z((o = e) === 'prev_5' ? 2 : o === 'next_5' ? 3 : -1);
  }
}
function ar(i, t) {
  if (
    (i & 1 &&
      p(0, Ha, 2, 1, 'a')(1, Ga, 3, 3, 'button', 2)(2, Xa, 3, 3, 'button', 2)(
        3,
        or,
        6,
        1,
        'a',
        3,
      ),
    i & 2)
  ) {
    let o,
      e = t.$implicit;
    z((o = e) === 'page' ? 0 : o === 'prev' ? 1 : o === 'next' ? 2 : 3);
  }
}
function rr(i, t) {}
var nn = (() => {
  let t = class t {
    constructor() {
      (this.active = !1),
        (this.index = null),
        (this.disabled = !1),
        (this.direction = 'ltr'),
        (this.type = null),
        (this.itemRender = null),
        (this.diffIndex = new b()),
        (this.gotoIndex = new b()),
        (this.title = null);
    }
    clickItem() {
      this.disabled ||
        (this.type === 'page'
          ? this.gotoIndex.emit(this.index)
          : this.diffIndex.emit(
              { next: 1, prev: -1, prev_5: -5, next_5: 5 }[this.type],
            ));
    }
    ngOnChanges(e) {
      let { locale: n, index: a, type: r } = e;
      (n || a || r) &&
        (this.title = {
          page: `${this.index}`,
          next: this.locale?.next_page,
          prev: this.locale?.prev_page,
          prev_5: this.locale?.prev_5,
          next_5: this.locale?.next_5,
        }[this.type]);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['li', 'nz-pagination-item', '']],
      hostVars: 19,
      hostBindings: function (n, a) {
        n & 1 &&
          O('click', function () {
            return a.clickItem();
          }),
          n & 2 &&
            (J('title', a.title),
            D('ant-pagination-prev', a.type === 'prev')(
              'ant-pagination-next',
              a.type === 'next',
            )('ant-pagination-item', a.type === 'page')(
              'ant-pagination-jump-prev',
              a.type === 'prev_5',
            )('ant-pagination-jump-prev-custom-icon', a.type === 'prev_5')(
              'ant-pagination-jump-next',
              a.type === 'next_5',
            )('ant-pagination-jump-next-custom-icon', a.type === 'next_5')(
              'ant-pagination-disabled',
              a.disabled,
            )('ant-pagination-item-active', a.active));
      },
      inputs: {
        active: 'active',
        locale: 'locale',
        index: 'index',
        disabled: 'disabled',
        direction: 'direction',
        type: 'type',
        itemRender: 'itemRender',
      },
      outputs: { diffIndex: 'diffIndex', gotoIndex: 'gotoIndex' },
      standalone: !0,
      features: [F, C],
      attrs: Wa,
      decls: 3,
      vars: 5,
      consts: [
        ['renderItemTemplate', ''],
        [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
        ['type', 'button', 1, 'ant-pagination-item-link', 3, 'disabled'],
        [1, 'ant-pagination-item-link'],
        ['nz-icon', '', 'nzType', 'right'],
        ['nz-icon', '', 'nzType', 'left'],
        [1, 'ant-pagination-item-container'],
        [1, 'ant-pagination-item-ellipsis'],
        [
          'nz-icon',
          '',
          'nzType',
          'double-right',
          1,
          'ant-pagination-item-link-icon',
        ],
        [
          'nz-icon',
          '',
          'nzType',
          'double-left',
          1,
          'ant-pagination-item-link-icon',
        ],
      ],
      template: function (n, a) {
        if (
          (n & 1 &&
            p(
              0,
              ar,
              4,
              1,
              'ng-template',
              null,
              0,
              te,
            )(2, rr, 0, 0, 'ng-template', 1),
          n & 2)
        ) {
          let r = W(1);
          l(2),
            c('ngTemplateOutlet', a.itemRender || r)(
              'ngTemplateOutletContext',
              Ke(2, Qa, a.type, a.index),
            );
        }
      },
      dependencies: [ze, fe, A],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var sr = ['nz-pagination-options', ''],
  lr = (i, t) => t.value;
function cr(i, t) {
  if ((i & 1 && _(0, 'nz-option', 3), i & 2)) {
    let o = t.$implicit;
    c('nzLabel', o.label)('nzValue', o.value);
  }
}
function pr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-select', 2),
      O('ngModelChange', function (n) {
        x(o);
        let a = s();
        return y(a.onPageSizeChange(n));
      }),
      me(1, cr, 1, 2, 'nz-option', 3, lr),
      m();
  }
  if (i & 2) {
    let o = s();
    c('nzDisabled', o.disabled)('nzSize', o.nzSize)('ngModel', o.pageSize),
      l(),
      he(o.listOfPageSizeOption);
  }
}
function dr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'div', 1),
      E(1),
      d(2, 'input', 4),
      O('keydown.enter', function (n) {
        x(o);
        let a = s();
        return y(a.jumpToPageViaInput(n));
      }),
      m(),
      E(3),
      m();
  }
  if (i & 2) {
    let o = s();
    l(),
      q(' ', o.locale.jump_to, ' '),
      l(),
      c('disabled', o.disabled),
      l(),
      q(' ', o.locale.page, ' ');
  }
}
var on = (() => {
  let t = class t {
    constructor() {
      (this.nzSize = 'default'),
        (this.disabled = !1),
        (this.showSizeChanger = !1),
        (this.showQuickJumper = !1),
        (this.total = 0),
        (this.pageIndex = 1),
        (this.pageSize = 10),
        (this.pageSizeOptions = []),
        (this.pageIndexChange = new b()),
        (this.pageSizeChange = new b()),
        (this.listOfPageSizeOption = []);
    }
    onPageSizeChange(e) {
      this.pageSize !== e && this.pageSizeChange.next(e);
    }
    jumpToPageViaInput(e) {
      let n = e.target,
        a = Math.floor(At(n.value, this.pageIndex));
      this.pageIndexChange.next(a), (n.value = '');
    }
    ngOnChanges(e) {
      let { pageSize: n, pageSizeOptions: a, locale: r } = e;
      (n || a || r) &&
        (this.listOfPageSizeOption = [
          ...new Set([...this.pageSizeOptions, this.pageSize]),
        ].map(h => ({
          value: h,
          label: `${h} ${this.locale.items_per_page}`,
        })));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['li', 'nz-pagination-options', '']],
      hostAttrs: [1, 'ant-pagination-options'],
      inputs: {
        nzSize: 'nzSize',
        disabled: 'disabled',
        showSizeChanger: 'showSizeChanger',
        showQuickJumper: 'showQuickJumper',
        locale: 'locale',
        total: 'total',
        pageIndex: 'pageIndex',
        pageSize: 'pageSize',
        pageSizeOptions: 'pageSizeOptions',
      },
      outputs: {
        pageIndexChange: 'pageIndexChange',
        pageSizeChange: 'pageSizeChange',
      },
      standalone: !0,
      features: [F, C],
      attrs: sr,
      decls: 2,
      vars: 2,
      consts: [
        [
          1,
          'ant-pagination-options-size-changer',
          3,
          'nzDisabled',
          'nzSize',
          'ngModel',
        ],
        [1, 'ant-pagination-options-quick-jumper'],
        [
          1,
          'ant-pagination-options-size-changer',
          3,
          'ngModelChange',
          'nzDisabled',
          'nzSize',
          'ngModel',
        ],
        [3, 'nzLabel', 'nzValue'],
        [3, 'keydown.enter', 'disabled'],
      ],
      template: function (n, a) {
        n & 1 && p(0, pr, 3, 3, 'nz-select', 0)(1, dr, 4, 3, 'div', 1),
          n & 2 &&
            (z(a.showSizeChanger ? 0 : -1), l(), z(a.showQuickJumper ? 1 : -1));
      },
      dependencies: [Di, Kt, $e, Ne, De, Ie],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var mr = ['containerTemplate'],
  hr = (i, t) => ({ $implicit: i, range: t });
function ur(i, t) {}
function fr(i, t) {
  if (
    (i & 1 && (d(0, 'li', 1), p(1, ur, 0, 0, 'ng-template', 4), m()), i & 2)
  ) {
    let o = s(2);
    l(),
      c('ngTemplateOutlet', o.showTotal)(
        'ngTemplateOutletContext',
        Ke(2, hr, o.total, o.ranges),
      );
  }
}
function zr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'li', 5),
      O('gotoIndex', function (n) {
        x(o);
        let a = s(2);
        return y(a.jumpPage(n));
      })('diffIndex', function (n) {
        x(o);
        let a = s(2);
        return y(a.jumpDiff(n));
      }),
      m();
  }
  if (i & 2) {
    let o = t.$implicit,
      e = s(2);
    c('locale', e.locale)('type', o.type)('index', o.index)(
      'disabled',
      !!o.disabled,
    )('itemRender', e.itemRender)('active', e.pageIndex === o.index)(
      'direction',
      e.dir,
    );
  }
}
function gr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'li', 6),
      O('pageIndexChange', function (n) {
        x(o);
        let a = s(2);
        return y(a.onPageIndexChange(n));
      })('pageSizeChange', function (n) {
        x(o);
        let a = s(2);
        return y(a.onPageSizeChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s(2);
    c('total', o.total)('locale', o.locale)('disabled', o.disabled)(
      'nzSize',
      o.nzSize,
    )('showSizeChanger', o.showSizeChanger)(
      'showQuickJumper',
      o.showQuickJumper,
    )('pageIndex', o.pageIndex)('pageSize', o.pageSize)(
      'pageSizeOptions',
      o.pageSizeOptions,
    );
  }
}
function Cr(i, t) {
  if (
    (i & 1 &&
      (d(0, 'ul'),
      p(1, fr, 2, 5, 'li', 1),
      me(2, zr, 1, 7, 'li', 2, Pn().trackByPageItem, !0),
      p(4, gr, 1, 9, 'li', 3),
      m()),
    i & 2)
  ) {
    let o = s();
    l(),
      z(o.showTotal ? 1 : -1),
      l(),
      he(o.listOfPageItem),
      l(2),
      z(o.showQuickJumper || o.showSizeChanger ? 4 : -1);
  }
}
var an = (() => {
  let t = class t {
    constructor(e, n, a, r) {
      (this.cdr = e),
        (this.renderer = n),
        (this.elementRef = a),
        (this.directionality = r),
        (this.nzSize = 'default'),
        (this.itemRender = null),
        (this.showTotal = null),
        (this.disabled = !1),
        (this.showSizeChanger = !1),
        (this.showQuickJumper = !1),
        (this.total = 0),
        (this.pageIndex = 1),
        (this.pageSize = 10),
        (this.pageSizeOptions = [10, 20, 30, 40]),
        (this.pageIndexChange = new b()),
        (this.pageSizeChange = new b()),
        (this.ranges = [0, 0]),
        (this.listOfPageItem = []),
        (this.dir = 'ltr'),
        (this.destroy$ = new I()),
        n.removeChild(n.parentNode(a.nativeElement), a.nativeElement);
    }
    ngOnInit() {
      this.directionality.change?.pipe(f(this.destroy$)).subscribe(e => {
        (this.dir = e), this.updateRtlStyle(), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value),
        this.updateRtlStyle();
    }
    updateRtlStyle() {
      this.dir === 'rtl'
        ? this.renderer.addClass(
            this.elementRef.nativeElement,
            'ant-pagination-rtl',
          )
        : this.renderer.removeClass(
            this.elementRef.nativeElement,
            'ant-pagination-rtl',
          );
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    jumpPage(e) {
      this.onPageIndexChange(e);
    }
    jumpDiff(e) {
      this.jumpPage(this.pageIndex + e);
    }
    trackByPageItem(e, n) {
      return `${n.type}-${n.index}`;
    }
    onPageIndexChange(e) {
      this.pageIndexChange.next(e);
    }
    onPageSizeChange(e) {
      this.pageSizeChange.next(e);
    }
    getLastIndex(e, n) {
      return Math.ceil(e / n);
    }
    buildIndexes() {
      let e = this.getLastIndex(this.total, this.pageSize);
      this.listOfPageItem = this.getListOfPageItem(this.pageIndex, e);
    }
    getListOfPageItem(e, n) {
      let a = h => {
          let v = { type: 'prev', disabled: e === 1 },
            S = { type: 'next', disabled: e === n };
          return [v, ...h, S];
        },
        r = (h, v) => {
          let S = [];
          for (let R = h; R <= v; R++) S.push({ index: R, type: 'page' });
          return S;
        };
      return n <= 9
        ? a(r(1, n))
        : a(
            ((v, S) => {
              let R = [],
                Q = { type: 'prev_5' },
                N = { type: 'next_5' },
                _e = r(1, 1),
                Be = r(n, n);
              if (v < 5) R = [...r(2, v === 4 ? 6 : 5), N];
              else if (v < S - 3) R = [Q, ...r(v - 2, v + 2), N];
              else {
                let Je = v === S - 3 ? S - 5 : S - 4;
                R = [Q, ...r(Je, S - 1)];
              }
              return [..._e, ...R, ...Be];
            })(e, n),
          );
    }
    ngOnChanges(e) {
      let { pageIndex: n, pageSize: a, total: r } = e;
      (n || a || r) &&
        ((this.ranges = [
          (this.pageIndex - 1) * this.pageSize + 1,
          Math.min(this.pageIndex * this.pageSize, this.total),
        ]),
        this.buildIndexes());
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(U), u(de), u(V), u(Ce));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-pagination-default']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(mr, 7), n & 2)) {
          let r;
          k((r = M())) && (a.template = r.first);
        }
      },
      inputs: {
        nzSize: 'nzSize',
        itemRender: 'itemRender',
        showTotal: 'showTotal',
        disabled: 'disabled',
        locale: 'locale',
        showSizeChanger: 'showSizeChanger',
        showQuickJumper: 'showQuickJumper',
        total: 'total',
        pageIndex: 'pageIndex',
        pageSize: 'pageSize',
        pageSizeOptions: 'pageSizeOptions',
      },
      outputs: {
        pageIndexChange: 'pageIndexChange',
        pageSizeChange: 'pageSizeChange',
      },
      standalone: !0,
      features: [F, C],
      decls: 2,
      vars: 0,
      consts: [
        ['containerTemplate', ''],
        [1, 'ant-pagination-total-text'],
        [
          'nz-pagination-item',
          '',
          3,
          'locale',
          'type',
          'index',
          'disabled',
          'itemRender',
          'active',
          'direction',
        ],
        [
          'nz-pagination-options',
          '',
          3,
          'total',
          'locale',
          'disabled',
          'nzSize',
          'showSizeChanger',
          'showQuickJumper',
          'pageIndex',
          'pageSize',
          'pageSizeOptions',
        ],
        [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
        [
          'nz-pagination-item',
          '',
          3,
          'gotoIndex',
          'diffIndex',
          'locale',
          'type',
          'index',
          'disabled',
          'itemRender',
          'active',
          'direction',
        ],
        [
          'nz-pagination-options',
          '',
          3,
          'pageIndexChange',
          'pageSizeChange',
          'total',
          'locale',
          'disabled',
          'nzSize',
          'showSizeChanger',
          'showQuickJumper',
          'pageIndex',
          'pageSize',
          'pageSizeOptions',
        ],
      ],
      template: function (n, a) {
        n & 1 && p(0, Cr, 5, 2, 'ng-template', null, 0, te);
      },
      dependencies: [A, nn, on],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var _r = ['containerTemplate'];
function Sr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'ul')(1, 'li', 1),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.prePage());
      }),
      m(),
      d(2, 'li', 2)(3, 'input', 3),
      O('keydown.enter', function (n) {
        x(o);
        let a = s();
        return y(a.jumpToPageViaInput(n));
      }),
      m(),
      d(4, 'span', 4),
      E(5, '/'),
      m(),
      E(6),
      m(),
      d(7, 'li', 5),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.nextPage());
      }),
      m()();
  }
  if (i & 2) {
    let o = s();
    l(),
      c('locale', o.locale)('disabled', o.isFirstIndex)('direction', o.dir)(
        'itemRender',
        o.itemRender,
      ),
      J('title', o.locale.prev_page),
      l(),
      J('title', o.pageIndex + '/' + o.lastIndex),
      l(),
      c('disabled', o.disabled)('value', o.pageIndex),
      l(3),
      q(' ', o.lastIndex, ' '),
      l(),
      c('locale', o.locale)('disabled', o.isLastIndex)('direction', o.dir)(
        'itemRender',
        o.itemRender,
      ),
      J('title', o.locale == null ? null : o.locale.next_page);
  }
}
var Ii = (() => {
  let t = class t {
    constructor(e, n, a, r) {
      (this.cdr = e),
        (this.renderer = n),
        (this.elementRef = a),
        (this.directionality = r),
        (this.itemRender = null),
        (this.disabled = !1),
        (this.total = 0),
        (this.pageIndex = 1),
        (this.pageSize = 10),
        (this.pageIndexChange = new b()),
        (this.lastIndex = 0),
        (this.isFirstIndex = !1),
        (this.isLastIndex = !1),
        (this.dir = 'ltr'),
        (this.destroy$ = new I()),
        n.removeChild(n.parentNode(a.nativeElement), a.nativeElement);
    }
    ngOnInit() {
      this.directionality.change?.pipe(f(this.destroy$)).subscribe(e => {
        (this.dir = e), this.updateRtlStyle(), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value),
        this.updateRtlStyle();
    }
    updateRtlStyle() {
      this.dir === 'rtl'
        ? this.renderer.addClass(
            this.elementRef.nativeElement,
            'ant-pagination-rtl',
          )
        : this.renderer.removeClass(
            this.elementRef.nativeElement,
            'ant-pagination-rtl',
          );
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    jumpToPageViaInput(e) {
      let n = e.target,
        a = At(n.value, this.pageIndex);
      this.onPageIndexChange(a), (n.value = `${this.pageIndex}`);
    }
    prePage() {
      this.onPageIndexChange(this.pageIndex - 1);
    }
    nextPage() {
      this.onPageIndexChange(this.pageIndex + 1);
    }
    onPageIndexChange(e) {
      this.pageIndexChange.next(e);
    }
    updateBindingValue() {
      (this.lastIndex = Math.ceil(this.total / this.pageSize)),
        (this.isFirstIndex = this.pageIndex === 1),
        (this.isLastIndex = this.pageIndex === this.lastIndex);
    }
    ngOnChanges(e) {
      let { pageIndex: n, total: a, pageSize: r } = e;
      (n || a || r) && this.updateBindingValue();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(U), u(de), u(V), u(Ce));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-pagination-simple']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(_r, 7), n & 2)) {
          let r;
          k((r = M())) && (a.template = r.first);
        }
      },
      inputs: {
        itemRender: 'itemRender',
        disabled: 'disabled',
        locale: 'locale',
        total: 'total',
        pageIndex: 'pageIndex',
        pageSize: 'pageSize',
      },
      outputs: { pageIndexChange: 'pageIndexChange' },
      standalone: !0,
      features: [F, C],
      decls: 2,
      vars: 0,
      consts: [
        ['containerTemplate', ''],
        [
          'nz-pagination-item',
          '',
          'type',
          'prev',
          3,
          'click',
          'locale',
          'disabled',
          'direction',
          'itemRender',
        ],
        [1, 'ant-pagination-simple-pager'],
        ['size', '3', 3, 'keydown.enter', 'disabled', 'value'],
        [1, 'ant-pagination-slash'],
        [
          'nz-pagination-item',
          '',
          'type',
          'next',
          3,
          'click',
          'locale',
          'disabled',
          'direction',
          'itemRender',
        ],
      ],
      template: function (n, a) {
        n & 1 && p(0, Sr, 8, 14, 'ng-template', null, 0, te);
      },
      dependencies: [nn],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function vr(i, t) {}
function xr(i, t) {
  if ((i & 1 && p(0, vr, 0, 0, 'ng-template', 4), i & 2)) {
    s(2);
    let o = W(2);
    c('ngTemplateOutlet', o.template);
  }
}
function yr(i, t) {}
function br(i, t) {
  if ((i & 1 && p(0, yr, 0, 0, 'ng-template', 4), i & 2)) {
    s(2);
    let o = W(4);
    c('ngTemplateOutlet', o.template);
  }
}
function Tr(i, t) {
  if ((i & 1 && p(0, xr, 1, 1, null, 4)(1, br, 1, 1, null, 4), i & 2)) {
    let o = s();
    z(o.nzSimple ? 0 : 1);
  }
}
var Or = 'pagination',
  ut = class ut {
    validatePageIndex(t, o) {
      return t > o ? o : t < 1 ? 1 : t;
    }
    onPageIndexChange(t) {
      let o = this.getLastIndex(this.nzTotal, this.nzPageSize),
        e = this.validatePageIndex(t, o);
      e !== this.nzPageIndex &&
        !this.nzDisabled &&
        ((this.nzPageIndex = e), this.nzPageIndexChange.emit(this.nzPageIndex));
    }
    onPageSizeChange(t) {
      (this.nzPageSize = t), this.nzPageSizeChange.emit(t);
      let o = this.getLastIndex(this.nzTotal, this.nzPageSize);
      this.nzPageIndex > o && this.onPageIndexChange(o);
    }
    onTotalChange(t) {
      let o = this.getLastIndex(t, this.nzPageSize);
      this.nzPageIndex > o &&
        Promise.resolve().then(() => {
          this.onPageIndexChange(o), this.cdr.markForCheck();
        });
    }
    getLastIndex(t, o) {
      return Math.ceil(t / o);
    }
    constructor(t, o, e, n, a) {
      (this.i18n = t),
        (this.cdr = o),
        (this.breakpointService = e),
        (this.nzConfigService = n),
        (this.directionality = a),
        (this._nzModuleName = Or),
        (this.nzPageSizeChange = new b()),
        (this.nzPageIndexChange = new b()),
        (this.nzShowTotal = null),
        (this.nzItemRender = null),
        (this.nzSize = 'default'),
        (this.nzPageSizeOptions = [10, 20, 30, 40]),
        (this.nzShowSizeChanger = !1),
        (this.nzShowQuickJumper = !1),
        (this.nzSimple = !1),
        (this.nzDisabled = !1),
        (this.nzResponsive = !1),
        (this.nzHideOnSinglePage = !1),
        (this.nzTotal = 0),
        (this.nzPageIndex = 1),
        (this.nzPageSize = 10),
        (this.showPagination = !0),
        (this.size = 'default'),
        (this.dir = 'ltr'),
        (this.destroy$ = new I()),
        (this.total$ = new K(1));
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(f(this.destroy$)).subscribe(() => {
        (this.locale = this.i18n.getLocaleData('Pagination')),
          this.cdr.markForCheck();
      }),
        this.total$.pipe(f(this.destroy$)).subscribe(t => {
          this.onTotalChange(t);
        }),
        this.breakpointService
          .subscribe(Zn)
          .pipe(f(this.destroy$))
          .subscribe(t => {
            this.nzResponsive &&
              ((this.size = t === Un.xs ? 'small' : 'default'),
              this.cdr.markForCheck());
          }),
        this.directionality.change?.pipe(f(this.destroy$)).subscribe(t => {
          (this.dir = t), this.cdr.detectChanges();
        }),
        (this.dir = this.directionality.value);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    ngOnChanges(t) {
      let { nzHideOnSinglePage: o, nzTotal: e, nzPageSize: n, nzSize: a } = t;
      e && this.total$.next(this.nzTotal),
        (o || e || n) &&
          (this.showPagination =
            (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) ||
            (this.nzTotal > 0 && !this.nzHideOnSinglePage)),
        a && (this.size = a.currentValue);
    }
  };
(ut.ɵfac = function (o) {
  return new (o || ut)(u(tt), u(U), u(Gn), u(we), u(Ce));
}),
  (ut.ɵcmp = g({
    type: ut,
    selectors: [['nz-pagination']],
    hostAttrs: [1, 'ant-pagination'],
    hostVars: 8,
    hostBindings: function (o, e) {
      o & 2 &&
        D('ant-pagination-simple', e.nzSimple)(
          'ant-pagination-disabled',
          e.nzDisabled,
        )('ant-pagination-mini', !e.nzSimple && e.size === 'small')(
          'ant-pagination-rtl',
          e.dir === 'rtl',
        );
    },
    inputs: {
      nzShowTotal: 'nzShowTotal',
      nzItemRender: 'nzItemRender',
      nzSize: 'nzSize',
      nzPageSizeOptions: 'nzPageSizeOptions',
      nzShowSizeChanger: [2, 'nzShowSizeChanger', 'nzShowSizeChanger', T],
      nzShowQuickJumper: [2, 'nzShowQuickJumper', 'nzShowQuickJumper', T],
      nzSimple: [2, 'nzSimple', 'nzSimple', T],
      nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
      nzResponsive: [2, 'nzResponsive', 'nzResponsive', T],
      nzHideOnSinglePage: [2, 'nzHideOnSinglePage', 'nzHideOnSinglePage', T],
      nzTotal: [2, 'nzTotal', 'nzTotal', We],
      nzPageIndex: [2, 'nzPageIndex', 'nzPageIndex', We],
      nzPageSize: [2, 'nzPageSize', 'nzPageSize', We],
    },
    outputs: {
      nzPageSizeChange: 'nzPageSizeChange',
      nzPageIndexChange: 'nzPageIndexChange',
    },
    exportAs: ['nzPagination'],
    standalone: !0,
    features: [L, F, C],
    decls: 5,
    vars: 18,
    consts: [
      ['simplePagination', ''],
      ['defaultPagination', ''],
      [
        3,
        'pageIndexChange',
        'disabled',
        'itemRender',
        'locale',
        'pageSize',
        'total',
        'pageIndex',
      ],
      [
        3,
        'pageIndexChange',
        'pageSizeChange',
        'nzSize',
        'itemRender',
        'showTotal',
        'disabled',
        'locale',
        'showSizeChanger',
        'showQuickJumper',
        'total',
        'pageIndex',
        'pageSize',
        'pageSizeOptions',
      ],
      [3, 'ngTemplateOutlet'],
    ],
    template: function (o, e) {
      if (o & 1) {
        let n = P();
        p(0, Tr, 2, 1),
          d(1, 'nz-pagination-simple', 2, 0),
          O('pageIndexChange', function (r) {
            return x(n), y(e.onPageIndexChange(r));
          }),
          m(),
          d(3, 'nz-pagination-default', 3, 1),
          O('pageIndexChange', function (r) {
            return x(n), y(e.onPageIndexChange(r));
          })('pageSizeChange', function (r) {
            return x(n), y(e.onPageSizeChange(r));
          }),
          m();
      }
      o & 2 &&
        (z(e.showPagination ? 0 : -1),
        l(),
        c('disabled', e.nzDisabled)('itemRender', e.nzItemRender)(
          'locale',
          e.locale,
        )('pageSize', e.nzPageSize)('total', e.nzTotal)(
          'pageIndex',
          e.nzPageIndex,
        ),
        l(2),
        c('nzSize', e.size)('itemRender', e.nzItemRender)(
          'showTotal',
          e.nzShowTotal,
        )('disabled', e.nzDisabled)('locale', e.locale)(
          'showSizeChanger',
          e.nzShowSizeChanger,
        )('showQuickJumper', e.nzShowQuickJumper)('total', e.nzTotal)(
          'pageIndex',
          e.nzPageIndex,
        )('pageSize', e.nzPageSize)('pageSizeOptions', e.nzPageSizeOptions));
    },
    dependencies: [A, Ii, an],
    encapsulation: 2,
    changeDetection: 0,
  }));
var Me = ut;
Z([G()], Me.prototype, 'nzSize', void 0);
Z([G()], Me.prototype, 'nzPageSizeOptions', void 0);
Z([G()], Me.prototype, 'nzShowSizeChanger', void 0);
Z([G()], Me.prototype, 'nzShowQuickJumper', void 0);
Z([G()], Me.prototype, 'nzSimple', void 0);
var Ni = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [Me, on, an] }));
  let i = t;
  return i;
})();
var Se = (() => {
  let t = class t {
    constructor() {
      (this.theadTemplate$ = new K(1)),
        (this.tfootTemplate$ = new K(1)),
        (this.tfootFixed$ = new K(1)),
        (this.hasFixLeft$ = new K(1)),
        (this.hasFixRight$ = new K(1)),
        (this.hostWidth$ = new K(1)),
        (this.columnCount$ = new K(1)),
        (this.showEmpty$ = new K(1)),
        (this.noResult$ = new K(1)),
        (this.listOfThWidthConfigPx$ = new Y([])),
        (this.tableWidthConfigPx$ = new Y([])),
        (this.manualWidthConfigPx$ = ge([
          this.tableWidthConfigPx$,
          this.listOfThWidthConfigPx$,
        ]).pipe(ee(([e, n]) => (e.length ? e : n)))),
        (this.listOfAutoWidthPx$ = new K(1)),
        (this.listOfListOfThWidthPx$ = Te(
          this.manualWidthConfigPx$,
          ge([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(
            ee(([e, n]) =>
              e.length === n.length
                ? e.map((a, r) => (a === '0px' ? n[r] || null : n[r] || a))
                : n,
            ),
          ),
        )),
        (this.listOfMeasureColumn$ = new K(1)),
        (this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(
          ee(e => e.map(n => parseInt(n, 10))),
        )),
        (this.enableAutoMeasure$ = new K(1));
    }
    setTheadTemplate(e) {
      this.theadTemplate$.next(e);
    }
    setTfootTemplate(e) {
      this.tfootTemplate$.next(e);
    }
    setTfootFixed(e) {
      this.tfootFixed$.next(e);
    }
    setHasFixLeft(e) {
      this.hasFixLeft$.next(e);
    }
    setHasFixRight(e) {
      this.hasFixRight$.next(e);
    }
    setTableWidthConfig(e) {
      this.tableWidthConfigPx$.next(e);
    }
    setListOfTh(e) {
      let n = 0;
      e.forEach(r => {
        n += (r.colspan && +r.colspan) || (r.colSpan && +r.colSpan) || 1;
      });
      let a = e.map(r => r.nzWidth);
      this.columnCount$.next(n), this.listOfThWidthConfigPx$.next(a);
    }
    setListOfMeasureColumn(e) {
      let n = [];
      e.forEach(a => {
        let r = (a.colspan && +a.colspan) || (a.colSpan && +a.colSpan) || 1;
        for (let h = 0; h < r; h++) n.push(`measure_key_${h}`);
      }),
        this.listOfMeasureColumn$.next(n);
    }
    setListOfAutoWidth(e) {
      this.listOfAutoWidthPx$.next(e.map(n => `${n}px`));
    }
    setShowEmpty(e) {
      this.showEmpty$.next(e);
    }
    setNoResult(e) {
      this.noResult$.next(e);
    }
    setScroll(e, n) {
      let a = !!(e || n);
      a || this.setListOfAutoWidth([]), this.enableAutoMeasure$.next(a);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = Xe({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
var Zu = (() => {
  let t = class t {
    constructor() {
      this.isInsideTable = !!H(Se, { optional: !0 });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [
        ['th', 9, 'nz-disable-th', 3, 'mat-cell', ''],
        ['td', 9, 'nz-disable-td', 3, 'mat-cell', ''],
      ],
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && D('ant-table-cell', a.isInsideTable);
      },
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var Dr = ['*'],
  Mi = (() => {
    let t = class t {
      constructor() {
        (this.nzOnChange = new b()), (this.checkboxList = []);
      }
      addCheckbox(e) {
        this.checkboxList.push(e);
      }
      removeCheckbox(e) {
        this.checkboxList.splice(this.checkboxList.indexOf(e), 1);
      }
      onChange() {
        let e = this.checkboxList.filter(n => n.nzChecked).map(n => n.nzValue);
        this.nzOnChange.emit(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [['nz-checkbox-wrapper']],
        hostAttrs: [1, 'ant-checkbox-group'],
        outputs: { nzOnChange: 'nzOnChange' },
        exportAs: ['nzCheckboxWrapper'],
        standalone: !0,
        features: [C],
        ngContentSelectors: Dr,
        decls: 1,
        vars: 0,
        template: function (n, a) {
          n & 1 && (j(), B(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Ir = ['inputElement'],
  Nr = ['nz-checkbox', ''],
  kr = ['*'],
  Re = (() => {
    let t = class t {
      innerCheckedChange(e) {
        this.nzDisabled ||
          ((this.nzChecked = e),
          this.onChange(this.nzChecked),
          this.nzCheckedChange.emit(this.nzChecked),
          this.nzCheckboxWrapperComponent &&
            this.nzCheckboxWrapperComponent.onChange());
      }
      writeValue(e) {
        (this.nzChecked = e), this.cdr.markForCheck();
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      setDisabledState(e) {
        (this.nzDisabled =
          (this.isNzDisableFirstChange && this.nzDisabled) || e),
          (this.isNzDisableFirstChange = !1),
          this.cdr.markForCheck();
      }
      focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
      }
      blur() {
        this.inputElement.nativeElement.blur();
      }
      constructor(e, n, a, r, h) {
        (this.ngZone = e),
          (this.elementRef = n),
          (this.cdr = a),
          (this.focusMonitor = r),
          (this.directionality = h),
          (this.dir = 'ltr'),
          (this.destroy$ = new I()),
          (this.isNzDisableFirstChange = !0),
          (this.onChange = () => {}),
          (this.onTouched = () => {}),
          (this.nzCheckedChange = new b()),
          (this.nzValue = null),
          (this.nzAutoFocus = !1),
          (this.nzDisabled = !1),
          (this.nzIndeterminate = !1),
          (this.nzChecked = !1),
          (this.nzId = null),
          (this.nzCheckboxWrapperComponent = H(Mi, { optional: !0 })),
          (this.nzFormStatusService = H(it, { optional: !0 }));
      }
      ngOnInit() {
        this.focusMonitor
          .monitor(this.elementRef, !0)
          .pipe(f(this.destroy$))
          .subscribe(e => {
            e || Promise.resolve().then(() => this.onTouched());
          }),
          this.nzCheckboxWrapperComponent &&
            this.nzCheckboxWrapperComponent.addCheckbox(this),
          this.directionality.change.pipe(f(this.destroy$)).subscribe(e => {
            (this.dir = e), this.cdr.detectChanges();
          }),
          (this.dir = this.directionality.value),
          this.ngZone.runOutsideAngular(() => {
            re(this.elementRef.nativeElement, 'click')
              .pipe(f(this.destroy$))
              .subscribe(e => {
                e.preventDefault(),
                  this.focus(),
                  !this.nzDisabled &&
                    this.ngZone.run(() => {
                      this.innerCheckedChange(!this.nzChecked),
                        this.cdr.markForCheck();
                    });
              }),
              re(this.inputElement.nativeElement, 'click')
                .pipe(f(this.destroy$))
                .subscribe(e => e.stopPropagation());
          });
      }
      ngAfterViewInit() {
        this.nzAutoFocus && this.focus();
      }
      ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef),
          this.nzCheckboxWrapperComponent &&
            this.nzCheckboxWrapperComponent.removeCheckbox(this),
          this.destroy$.next(),
          this.destroy$.complete();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(X), u(V), u(U), u(Ee), u(Ce));
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [['', 'nz-checkbox', '']],
        viewQuery: function (n, a) {
          if ((n & 1 && $(Ir, 7), n & 2)) {
            let r;
            k((r = M())) && (a.inputElement = r.first);
          }
        },
        hostAttrs: [1, 'ant-checkbox-wrapper'],
        hostVars: 6,
        hostBindings: function (n, a) {
          n & 2 &&
            D('ant-checkbox-wrapper-in-form-item', !!a.nzFormStatusService)(
              'ant-checkbox-wrapper-checked',
              a.nzChecked,
            )('ant-checkbox-rtl', a.dir === 'rtl');
        },
        inputs: {
          nzValue: 'nzValue',
          nzAutoFocus: [2, 'nzAutoFocus', 'nzAutoFocus', T],
          nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
          nzIndeterminate: [2, 'nzIndeterminate', 'nzIndeterminate', T],
          nzChecked: [2, 'nzChecked', 'nzChecked', T],
          nzId: 'nzId',
        },
        outputs: { nzCheckedChange: 'nzCheckedChange' },
        exportAs: ['nzCheckbox'],
        standalone: !0,
        features: [
          oe([{ provide: Qe, useExisting: je(() => t), multi: !0 }]),
          L,
          C,
        ],
        attrs: Nr,
        ngContentSelectors: kr,
        decls: 6,
        vars: 11,
        consts: [
          ['inputElement', ''],
          [1, 'ant-checkbox'],
          [
            'type',
            'checkbox',
            1,
            'ant-checkbox-input',
            3,
            'ngModelChange',
            'checked',
            'ngModel',
            'disabled',
          ],
          [1, 'ant-checkbox-inner'],
        ],
        template: function (n, a) {
          if (n & 1) {
            let r = P();
            j(),
              d(0, 'span', 1)(1, 'input', 2, 0),
              O('ngModelChange', function (v) {
                return x(r), y(a.innerCheckedChange(v));
              }),
              m(),
              _(3, 'span', 3),
              m(),
              d(4, 'span'),
              B(5),
              m();
          }
          n & 2 &&
            (D('ant-checkbox-checked', a.nzChecked && !a.nzIndeterminate)(
              'ant-checkbox-disabled',
              a.nzDisabled,
            )('ant-checkbox-indeterminate', a.nzIndeterminate),
            l(),
            c('checked', a.nzChecked)('ngModel', a.nzChecked)(
              'disabled',
              a.nzDisabled,
            ),
            J('autofocus', a.nzAutoFocus ? 'autofocus' : null)('id', a.nzId));
        },
        dependencies: [Ne, pi, De, Ie],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Mr = (i, t) => t.value;
function Fr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'label', 1),
      O('nzCheckedChange', function (n) {
        let a = x(o).$implicit,
          r = s();
        return y(r.onCheckedChange(a, n));
      }),
      d(1, 'span'),
      E(2),
      m()();
  }
  if (i & 2) {
    let o = t.$implicit,
      e = s();
    c('nzDisabled', o.disabled || e.nzDisabled)('nzChecked', o.checked),
      l(2),
      ue(o.label);
  }
}
var Fi = (() => {
  let t = class t {
    onCheckedChange(e, n) {
      (e.checked = n), this.onChange(this.options);
    }
    constructor(e, n, a, r) {
      (this.elementRef = e),
        (this.focusMonitor = n),
        (this.cdr = a),
        (this.directionality = r),
        (this.onChange = () => {}),
        (this.onTouched = () => {}),
        (this.options = []),
        (this.nzDisabled = !1),
        (this.dir = 'ltr'),
        (this.destroy$ = new I()),
        (this.isNzDisableFirstChange = !0);
    }
    ngOnInit() {
      this.focusMonitor
        .monitor(this.elementRef, !0)
        .pipe(f(this.destroy$))
        .subscribe(e => {
          e || Promise.resolve().then(() => this.onTouched());
        }),
        this.directionality.change?.pipe(f(this.destroy$)).subscribe(e => {
          (this.dir = e), this.cdr.detectChanges();
        }),
        (this.dir = this.directionality.value);
    }
    ngOnDestroy() {
      this.focusMonitor.stopMonitoring(this.elementRef),
        this.destroy$.next(),
        this.destroy$.complete();
    }
    writeValue(e) {
      (this.options = e), this.cdr.markForCheck();
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
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(Ee), u(U), u(Ce));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-checkbox-group']],
      hostAttrs: [1, 'ant-checkbox-group'],
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && D('ant-checkbox-group-rtl', a.dir === 'rtl');
      },
      inputs: { nzDisabled: [2, 'nzDisabled', 'nzDisabled', T] },
      exportAs: ['nzCheckboxGroup'],
      standalone: !0,
      features: [
        oe([{ provide: Qe, useExisting: je(() => t), multi: !0 }]),
        L,
        C,
      ],
      decls: 2,
      vars: 0,
      consts: [
        [
          'nz-checkbox',
          '',
          1,
          'ant-checkbox-group-item',
          3,
          'nzDisabled',
          'nzChecked',
        ],
        [
          'nz-checkbox',
          '',
          1,
          'ant-checkbox-group-item',
          3,
          'nzCheckedChange',
          'nzDisabled',
          'nzChecked',
        ],
      ],
      template: function (n, a) {
        n & 1 && me(0, Fr, 3, 3, 'label', 0, Mr), n & 2 && he(a.options);
      },
      dependencies: [Re],
      encapsulation: 2,
    }));
  let i = t;
  return i;
})();
var ft = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [Re, Fi] }));
  let i = t;
  return i;
})();
var Pi = (() => {
  let t = class t {
    constructor() {
      (this.expand = !1), (this.spaceMode = !1), (this.expandChange = new b());
    }
    onHostClick() {
      this.spaceMode ||
        ((this.expand = !this.expand), this.expandChange.next(this.expand));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [['button', 'nz-row-expand-button', '']],
      hostAttrs: [1, 'ant-table-row-expand-icon'],
      hostVars: 7,
      hostBindings: function (n, a) {
        n & 1 &&
          O('click', function () {
            return a.onHostClick();
          }),
          n & 2 &&
            (Vn('type', 'button'),
            D(
              'ant-table-row-expand-icon-expanded',
              !a.spaceMode && a.expand === !0,
            )(
              'ant-table-row-expand-icon-collapsed',
              !a.spaceMode && a.expand === !1,
            )('ant-table-row-expand-icon-spaced', a.spaceMode));
      },
      inputs: { expand: 'expand', spaceMode: 'spaceMode' },
      outputs: { expandChange: 'expandChange' },
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var Vi = (() => {
  let t = class t {
    constructor() {
      this.indentSize = 0;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [['nz-row-indent']],
      hostAttrs: [1, 'ant-table-row-indent'],
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && ce('padding-left', a.indentSize, 'px');
      },
      inputs: { indentSize: 'indentSize' },
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var Pr = ['nzChecked', ''],
  Vr = ['*'];
function Er(i, t) {}
function $r(i, t) {
  if ((i & 1 && p(0, Er, 0, 0, 'ng-template', 2), i & 2)) {
    let o = s(2);
    c('ngTemplateOutlet', o.nzExpandIcon);
  }
}
function Rr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'button', 4),
      O('expandChange', function (n) {
        x(o);
        let a = s(2);
        return y(a.onExpandChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s(2);
    c('expand', o.nzExpand)('spaceMode', !o.nzShowExpand);
  }
}
function Ar(i, t) {
  if (
    (i & 1 &&
      (_(0, 'nz-row-indent', 1),
      p(1, $r, 1, 1, null, 2)(2, Rr, 1, 2, 'button', 3)),
    i & 2)
  ) {
    let o = s();
    c('indentSize', o.nzIndentSize), l(), z(o.nzExpandIcon ? 1 : 2);
  }
}
function Br(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'label', 5),
      O('ngModelChange', function (n) {
        x(o);
        let a = s();
        return y(a.onCheckedChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    c('nzDisabled', o.nzDisabled)('ngModel', o.nzChecked)(
      'nzIndeterminate',
      o.nzIndeterminate,
    ),
      J('aria-label', o.nzLabel);
  }
}
var Ei = (() => {
  let t = class t {
    constructor() {
      (this.nzChecked = !1),
        (this.nzDisabled = !1),
        (this.nzIndeterminate = !1),
        (this.nzLabel = null),
        (this.nzIndentSize = 0),
        (this.nzShowExpand = !1),
        (this.nzShowCheckbox = !1),
        (this.nzExpand = !1),
        (this.nzExpandIcon = null),
        (this.nzCheckedChange = new b()),
        (this.nzExpandChange = new b()),
        (this.isNzShowExpandChanged = !1),
        (this.isNzShowCheckboxChanged = !1);
    }
    onCheckedChange(e) {
      (this.nzChecked = e), this.nzCheckedChange.emit(e);
    }
    onExpandChange(e) {
      (this.nzExpand = e), this.nzExpandChange.emit(e);
    }
    ngOnChanges(e) {
      let n = S => S && S.firstChange && S.currentValue !== void 0,
        { nzExpand: a, nzChecked: r, nzShowExpand: h, nzShowCheckbox: v } = e;
      h && (this.isNzShowExpandChanged = !0),
        v && (this.isNzShowCheckboxChanged = !0),
        n(a) && !this.isNzShowExpandChanged && (this.nzShowExpand = !0),
        n(r) && !this.isNzShowCheckboxChanged && (this.nzShowCheckbox = !0);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [
        ['td', 'nzChecked', ''],
        ['td', 'nzDisabled', ''],
        ['td', 'nzIndeterminate', ''],
        ['td', 'nzIndentSize', ''],
        ['td', 'nzExpand', ''],
        ['td', 'nzShowExpand', ''],
        ['td', 'nzShowCheckbox', ''],
      ],
      hostVars: 4,
      hostBindings: function (n, a) {
        n & 2 &&
          D('ant-table-cell-with-append', a.nzShowExpand || a.nzIndentSize > 0)(
            'ant-table-selection-column',
            a.nzShowCheckbox,
          );
      },
      inputs: {
        nzChecked: 'nzChecked',
        nzDisabled: 'nzDisabled',
        nzIndeterminate: 'nzIndeterminate',
        nzLabel: 'nzLabel',
        nzIndentSize: 'nzIndentSize',
        nzShowExpand: [2, 'nzShowExpand', 'nzShowExpand', T],
        nzShowCheckbox: [2, 'nzShowCheckbox', 'nzShowCheckbox', T],
        nzExpand: [2, 'nzExpand', 'nzExpand', T],
        nzExpandIcon: 'nzExpandIcon',
      },
      outputs: {
        nzCheckedChange: 'nzCheckedChange',
        nzExpandChange: 'nzExpandChange',
      },
      standalone: !0,
      features: [L, F, C],
      attrs: Pr,
      ngContentSelectors: Vr,
      decls: 3,
      vars: 2,
      consts: [
        ['nz-checkbox', '', 3, 'nzDisabled', 'ngModel', 'nzIndeterminate'],
        [3, 'indentSize'],
        [3, 'ngTemplateOutlet'],
        ['nz-row-expand-button', '', 3, 'expand', 'spaceMode'],
        ['nz-row-expand-button', '', 3, 'expandChange', 'expand', 'spaceMode'],
        [
          'nz-checkbox',
          '',
          3,
          'ngModelChange',
          'nzDisabled',
          'ngModel',
          'nzIndeterminate',
        ],
      ],
      template: function (n, a) {
        n & 1 && (j(), p(0, Ar, 3, 2)(1, Br, 1, 4, 'label', 0), B(2)),
          n & 2 &&
            (z(a.nzShowExpand || a.nzIndentSize > 0 ? 0 : -1),
            l(),
            z(a.nzShowCheckbox ? 1 : -1));
      },
      dependencies: [Vi, Pi, A, ft, Re, Ne, De, Ie],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var $i = (() => {
  let t = class t {
    constructor(e, n) {
      (this.renderer = e),
        (this.elementRef = n),
        (this.changes$ = new I()),
        (this.nzWidth = null),
        (this.colspan = null),
        (this.colSpan = null),
        (this.rowspan = null),
        (this.rowSpan = null);
    }
    ngOnChanges(e) {
      let { nzWidth: n, colspan: a, rowspan: r, colSpan: h, rowSpan: v } = e;
      if (a || h) {
        let S = this.colspan || this.colSpan;
        fn(S)
          ? this.renderer.removeAttribute(
              this.elementRef.nativeElement,
              'colspan',
            )
          : this.renderer.setAttribute(
              this.elementRef.nativeElement,
              'colspan',
              `${S}`,
            );
      }
      if (r || v) {
        let S = this.rowspan || this.rowSpan;
        fn(S)
          ? this.renderer.removeAttribute(
              this.elementRef.nativeElement,
              'rowspan',
            )
          : this.renderer.setAttribute(
              this.elementRef.nativeElement,
              'rowspan',
              `${S}`,
            );
      }
      (n || a) && this.changes$.next();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(de), u(V));
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [['th']],
      inputs: {
        nzWidth: 'nzWidth',
        colspan: 'colspan',
        colSpan: 'colSpan',
        rowspan: 'rowspan',
        rowSpan: 'rowSpan',
      },
      standalone: !0,
      features: [F],
    }));
  let i = t;
  return i;
})();
function Hr(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'label', 3),
      O('ngModelChange', function (n) {
        x(o);
        let a = s();
        return y(a.onCheckedChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    D('ant-table-selection-select-all-custom', o.showRowSelection),
      c('ngModel', o.checked)('nzDisabled', o.disabled)(
        'nzIndeterminate',
        o.indeterminate,
      ),
      J('aria-label', o.label);
  }
}
function Ur(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'li', 8),
      O('click', function () {
        let n = x(o).$implicit;
        return y(n.onSelect());
      }),
      E(1),
      m();
  }
  if (i & 2) {
    let o = t.$implicit;
    l(), q(' ', o.text, ' ');
  }
}
function Zr(i, t) {
  if (
    (i & 1 &&
      (d(0, 'div', 2)(1, 'span', 4),
      _(2, 'span', 5),
      m(),
      d(3, 'nz-dropdown-menu', null, 0)(5, 'ul', 6),
      me(6, Ur, 2, 1, 'li', 7, Vt),
      m()()()),
    i & 2)
  ) {
    let o = W(4),
      e = s();
    l(), c('nzDropdownMenu', o), l(5), he(e.listOfSelections);
  }
}
var rn = (() => {
  let t = class t {
    constructor() {
      (this.listOfSelections = []),
        (this.checked = !1),
        (this.disabled = !1),
        (this.indeterminate = !1),
        (this.label = null),
        (this.showCheckbox = !1),
        (this.showRowSelection = !1),
        (this.checkedChange = new b());
    }
    onCheckedChange(e) {
      (this.checked = e), this.checkedChange.emit(e);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-selection']],
      hostAttrs: [1, 'ant-table-selection'],
      inputs: {
        listOfSelections: 'listOfSelections',
        checked: 'checked',
        disabled: 'disabled',
        indeterminate: 'indeterminate',
        label: 'label',
        showCheckbox: 'showCheckbox',
        showRowSelection: 'showRowSelection',
      },
      outputs: { checkedChange: 'checkedChange' },
      standalone: !0,
      features: [C],
      decls: 2,
      vars: 2,
      consts: [
        ['selectionMenu', 'nzDropdownMenu'],
        [
          'nz-checkbox',
          '',
          3,
          'ant-table-selection-select-all-custom',
          'ngModel',
          'nzDisabled',
          'nzIndeterminate',
        ],
        [1, 'ant-table-selection-extra'],
        [
          'nz-checkbox',
          '',
          3,
          'ngModelChange',
          'ngModel',
          'nzDisabled',
          'nzIndeterminate',
        ],
        [
          'nz-dropdown',
          '',
          'nzPlacement',
          'bottomLeft',
          1,
          'ant-table-selection-down',
          3,
          'nzDropdownMenu',
        ],
        ['nz-icon', '', 'nzType', 'down'],
        ['nz-menu', '', 1, 'ant-table-selection-menu'],
        ['nz-menu-item', ''],
        ['nz-menu-item', '', 3, 'click'],
      ],
      template: function (n, a) {
        n & 1 && p(0, Hr, 1, 6, 'label', 1)(1, Zr, 8, 1, 'div', 2),
          n & 2 &&
            (z(a.showCheckbox ? 0 : -1), l(), z(a.showRowSelection ? 1 : -1));
      },
      dependencies: [Ne, De, Ie, ft, Re, at, Ut, Lt, ot, Xt, ze, fe],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Gr = ['nzSelections', ''],
  Jr = ['*'],
  Ri = (() => {
    let t = class t {
      constructor() {
        (this.nzSelections = []),
          (this.nzChecked = !1),
          (this.nzDisabled = !1),
          (this.nzIndeterminate = !1),
          (this.nzLabel = null),
          (this.nzShowCheckbox = !1),
          (this.nzShowRowSelection = !1),
          (this.nzCheckedChange = new b()),
          (this.isNzShowExpandChanged = !1),
          (this.isNzShowCheckboxChanged = !1);
      }
      onCheckedChange(e) {
        (this.nzChecked = e), this.nzCheckedChange.emit(e);
      }
      ngOnChanges(e) {
        let n = S => S && S.firstChange && S.currentValue !== void 0,
          {
            nzChecked: a,
            nzSelections: r,
            nzShowExpand: h,
            nzShowCheckbox: v,
          } = e;
        h && (this.isNzShowExpandChanged = !0),
          v && (this.isNzShowCheckboxChanged = !0),
          n(r) && !this.isNzShowExpandChanged && (this.nzShowRowSelection = !0),
          n(a) && !this.isNzShowCheckboxChanged && (this.nzShowCheckbox = !0);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [
          ['th', 'nzSelections', ''],
          ['th', 'nzChecked', ''],
          ['th', 'nzShowCheckbox', ''],
          ['th', 'nzShowRowSelection', ''],
        ],
        hostAttrs: [1, 'ant-table-selection-column'],
        inputs: {
          nzSelections: 'nzSelections',
          nzChecked: [2, 'nzChecked', 'nzChecked', T],
          nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
          nzIndeterminate: 'nzIndeterminate',
          nzLabel: 'nzLabel',
          nzShowCheckbox: [2, 'nzShowCheckbox', 'nzShowCheckbox', T],
          nzShowRowSelection: [
            2,
            'nzShowRowSelection',
            'nzShowRowSelection',
            T,
          ],
        },
        outputs: { nzCheckedChange: 'nzCheckedChange' },
        standalone: !0,
        features: [L, F, C],
        attrs: Gr,
        ngContentSelectors: Jr,
        decls: 2,
        vars: 7,
        consts: [
          [
            3,
            'checkedChange',
            'checked',
            'disabled',
            'indeterminate',
            'label',
            'listOfSelections',
            'showCheckbox',
            'showRowSelection',
          ],
        ],
        template: function (n, a) {
          n & 1 &&
            (j(),
            d(0, 'nz-table-selection', 0),
            O('checkedChange', function (h) {
              return a.onCheckedChange(h);
            }),
            m(),
            B(1)),
            n & 2 &&
              c('checked', a.nzChecked)('disabled', a.nzDisabled)(
                'indeterminate',
                a.nzIndeterminate,
              )('label', a.nzLabel)('listOfSelections', a.nzSelections)(
                'showCheckbox',
                a.nzShowCheckbox,
              )('showRowSelection', a.nzShowRowSelection);
        },
        dependencies: [rn],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var qr = ['tdElement'],
  Xr = ['nz-table-fixed-row', ''],
  Yr = ['*'];
function Kr(i, t) {}
function es(i, t) {
  if (
    (i & 1 &&
      (d(0, 'div', 5), Pe(1, 'async'), p(2, Kr, 0, 0, 'ng-template', 4), m()),
    i & 2)
  ) {
    let o = s(),
      e = W(6);
    ce('width', Ve(1, 3, o.hostWidth$), 'px'), l(2), c('ngTemplateOutlet', e);
  }
}
function ts(i, t) {}
function ns(i, t) {
  if ((i & 1 && p(0, ts, 0, 0, 'ng-template', 4), i & 2)) {
    s();
    let o = W(6);
    c('ngTemplateOutlet', o);
  }
}
function is(i, t) {
  i & 1 && B(0);
}
var Ai = (() => {
  let t = class t {
    constructor(e, n) {
      (this.nzTableStyleService = e),
        (this.renderer = n),
        (this.hostWidth$ = new Y(null)),
        (this.enableAutoMeasure$ = new Y(!1)),
        (this.destroy$ = new I());
    }
    ngOnInit() {
      if (this.nzTableStyleService) {
        let { enableAutoMeasure$: e, hostWidth$: n } = this.nzTableStyleService;
        e.pipe(f(this.destroy$)).subscribe(this.enableAutoMeasure$),
          n.pipe(f(this.destroy$)).subscribe(this.hostWidth$);
      }
    }
    ngAfterViewInit() {
      this.nzTableStyleService.columnCount$
        .pipe(f(this.destroy$))
        .subscribe(e => {
          this.renderer.setAttribute(
            this.tdElement.nativeElement,
            'colspan',
            `${e}`,
          );
        });
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Se), u(de));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [
        ['tr', 'nz-table-fixed-row', ''],
        ['tr', 'nzExpand', ''],
      ],
      viewQuery: function (n, a) {
        if ((n & 1 && $(qr, 7), n & 2)) {
          let r;
          k((r = M())) && (a.tdElement = r.first);
        }
      },
      standalone: !0,
      features: [C],
      attrs: Xr,
      ngContentSelectors: Yr,
      decls: 7,
      vars: 3,
      consts: [
        ['tdElement', ''],
        ['contentTemplate', ''],
        [1, 'nz-disable-td', 'ant-table-cell'],
        [
          1,
          'ant-table-expanded-row-fixed',
          2,
          'position',
          'sticky',
          'left',
          '0',
          'overflow',
          'hidden',
          3,
          'width',
        ],
        [3, 'ngTemplateOutlet'],
        [
          1,
          'ant-table-expanded-row-fixed',
          2,
          'position',
          'sticky',
          'left',
          '0',
          'overflow',
          'hidden',
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (j(),
          d(0, 'td', 2, 0),
          p(2, es, 3, 5, 'div', 3),
          Pe(3, 'async'),
          p(4, ns, 1, 1, null, 4),
          m(),
          p(5, is, 1, 0, 'ng-template', null, 1, te)),
          n & 2 && (l(2), z(Ve(3, 1, a.enableAutoMeasure$) ? 2 : 4));
      },
      dependencies: [$t, A],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var as = ['tdElement'],
  rs = ['nz-table-measure-row', ''];
function ss(i, t) {
  i & 1 && _(0, 'td', 1, 0);
}
var Bi = (() => {
  let t = class t {
    constructor(e, n) {
      (this.nzResizeObserver = e),
        (this.ngZone = n),
        (this.listOfMeasureColumn = []),
        (this.listOfAutoWidth = new b()),
        (this.destroy$ = new I());
    }
    ngAfterViewInit() {
      this.listOfTdElement.changes
        .pipe(se(this.listOfTdElement))
        .pipe(
          le(e =>
            ge(
              e.toArray().map(n =>
                this.nzResizeObserver.observe(n).pipe(
                  ee(([a]) => {
                    let { width: r } = a.target.getBoundingClientRect();
                    return Math.floor(r);
                  }),
                ),
              ),
            ),
          ),
          kt(16),
          f(this.destroy$),
        )
        .subscribe(e => {
          this.ngZone instanceof X && X.isInAngularZone()
            ? this.listOfAutoWidth.next(e)
            : this.ngZone.run(() => this.listOfAutoWidth.next(e));
        });
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Bt), u(X));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['tr', 'nz-table-measure-row', '']],
      viewQuery: function (n, a) {
        if ((n & 1 && $(as, 5), n & 2)) {
          let r;
          k((r = M())) && (a.listOfTdElement = r);
        }
      },
      hostAttrs: [1, 'ant-table-measure-now'],
      inputs: { listOfMeasureColumn: 'listOfMeasureColumn' },
      outputs: { listOfAutoWidth: 'listOfAutoWidth' },
      standalone: !0,
      features: [C],
      attrs: rs,
      decls: 2,
      vars: 0,
      consts: [
        ['tdElement', ''],
        [1, 'nz-disable-td', 2, 'padding', '0', 'border', '0', 'height', '0'],
      ],
      template: function (n, a) {
        n & 1 && me(0, ss, 2, 0, 'td', 1, Pt),
          n & 2 && he(a.listOfMeasureColumn);
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var ls = ['*'];
function cs(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'tr', 2),
      O('listOfAutoWidth', function (n) {
        x(o);
        let a = s(2);
        return y(a.onListOfAutoWidthChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s();
    c('listOfMeasureColumn', o);
  }
}
function ps(i, t) {
  if ((i & 1 && p(0, cs, 1, 1, 'tr', 1), i & 2)) {
    let o = s();
    z(o.isInsideTable && t.length ? 0 : -1);
  }
}
function ds(i, t) {
  if (
    (i & 1 && (d(0, 'tr', 0), _(1, 'nz-embed-empty', 3), Pe(2, 'async'), m()),
    i & 2)
  ) {
    let o = s();
    l(), c('specificContent', Ve(2, 1, o.noResult$));
  }
}
var sn = (() => {
  let t = class t {
    constructor() {
      if (
        ((this.isInsideTable = !1),
        (this.showEmpty$ = new Y(!1)),
        (this.noResult$ = new Y(void 0)),
        (this.listOfMeasureColumn$ = new Y([])),
        (this.destroy$ = new I()),
        (this.nzTableStyleService = H(Se, { optional: !0 })),
        (this.isInsideTable = !!this.nzTableStyleService),
        this.nzTableStyleService)
      ) {
        let {
          showEmpty$: e,
          noResult$: n,
          listOfMeasureColumn$: a,
        } = this.nzTableStyleService;
        n.pipe(f(this.destroy$)).subscribe(this.noResult$),
          a.pipe(f(this.destroy$)).subscribe(this.listOfMeasureColumn$),
          e.pipe(f(this.destroy$)).subscribe(this.showEmpty$);
      }
    }
    onListOfAutoWidthChange(e) {
      this.nzTableStyleService?.setListOfAutoWidth(e);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['tbody']],
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && D('ant-table-tbody', a.isInsideTable);
      },
      standalone: !0,
      features: [C],
      ngContentSelectors: ls,
      decls: 5,
      vars: 6,
      consts: [
        ['nz-table-fixed-row', '', 1, 'ant-table-placeholder'],
        ['nz-table-measure-row', '', 3, 'listOfMeasureColumn'],
        [
          'nz-table-measure-row',
          '',
          3,
          'listOfAutoWidth',
          'listOfMeasureColumn',
        ],
        ['nzComponentName', 'table', 3, 'specificContent'],
      ],
      template: function (n, a) {
        if (
          (n & 1 &&
            (j(),
            p(0, ps, 1, 1),
            Pe(1, 'async'),
            B(2),
            p(3, ds, 3, 3, 'tr', 0),
            Pe(4, 'async')),
          n & 2)
        ) {
          let r;
          z((r = Ve(1, 2, a.listOfMeasureColumn$)) ? 0 : -1, r),
            l(3),
            z(Ve(4, 4, a.showEmpty$) ? 3 : -1);
        }
      },
      dependencies: [$t, Bi, Ai, en, dt],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Ge = (() => {
  let t = class t {
    updatePageSize(e) {
      this.pageSize$.next(e);
    }
    updateFrontPagination(e) {
      this.frontPagination$.next(e);
    }
    updatePageIndex(e) {
      this.pageIndex$.next(e);
    }
    updateListOfData(e) {
      this.listOfData$.next(e);
    }
    updateListOfCustomColumn(e) {
      this.listOfCustomColumn$.next(e);
    }
    constructor() {
      (this.destroy$ = new I()),
        (this.pageIndex$ = new Y(1)),
        (this.frontPagination$ = new Y(!0)),
        (this.pageSize$ = new Y(10)),
        (this.listOfData$ = new Y([])),
        (this.listOfCustomColumn$ = new Y([])),
        (this.pageIndexDistinct$ = this.pageIndex$.pipe(qe())),
        (this.pageSizeDistinct$ = this.pageSize$.pipe(qe())),
        (this.listOfCalcOperator$ = new Y([])),
        (this.queryParams$ = ge([
          this.pageIndexDistinct$,
          this.pageSizeDistinct$,
          this.listOfCalcOperator$,
        ]).pipe(
          kt(0),
          wn(1),
          ee(([e, n, a]) => ({
            pageIndex: e,
            pageSize: n,
            sort: a
              .filter(r => r.sortFn)
              .map(r => ({ key: r.key, value: r.sortOrder })),
            filter: a
              .filter(r => r.filterFn)
              .map(r => ({ key: r.key, value: r.filterValue })),
          })),
        )),
        (this.listOfDataAfterCalc$ = ge([
          this.listOfData$,
          this.listOfCalcOperator$,
        ]).pipe(
          ee(([e, n]) => {
            let a = [...e],
              r = n.filter(v => {
                let { filterValue: S, filterFn: R } = v;
                return (
                  !(S == null || (Array.isArray(S) && S.length === 0)) &&
                  typeof R == 'function'
                );
              });
            for (let v of r) {
              let { filterFn: S, filterValue: R } = v;
              a = a.filter(Q => S(R, Q));
            }
            let h = n
              .filter(
                v => v.sortOrder !== null && typeof v.sortFn == 'function',
              )
              .sort((v, S) => +S.sortPriority - +v.sortPriority);
            return (
              n.length &&
                a.sort((v, S) => {
                  for (let R of h) {
                    let { sortFn: Q, sortOrder: N } = R;
                    if (Q && N) {
                      let _e = Q(v, S, N);
                      if (_e !== 0) return N === 'ascend' ? _e : -_e;
                    }
                  }
                  return 0;
                }),
              a
            );
          }),
        )),
        (this.listOfFrontEndCurrentPageData$ = ge([
          this.pageIndexDistinct$,
          this.pageSizeDistinct$,
          this.listOfDataAfterCalc$,
        ]).pipe(
          f(this.destroy$),
          Le(e => {
            let [n, a, r] = e,
              h = Math.ceil(r.length / a) || 1;
            return n <= h;
          }),
          ee(([e, n, a]) => a.slice((e - 1) * n, e * n)),
        )),
        (this.listOfCurrentPageData$ = this.frontPagination$.pipe(
          le(e =>
            e ? this.listOfFrontEndCurrentPageData$ : this.listOfDataAfterCalc$,
          ),
        )),
        (this.total$ = this.frontPagination$.pipe(
          le(e => (e ? this.listOfDataAfterCalc$ : this.listOfData$)),
          ee(e => e.length),
          qe(),
        ));
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = Xe({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
var ms = ['nz-table-content', ''],
  hs = ['*'];
function us(i, t) {
  if ((i & 1 && _(0, 'col'), i & 2)) {
    let o = t.$implicit;
    ce('width', o)('min-width', o);
  }
}
function fs(i, t) {}
function zs(i, t) {
  if (
    (i & 1 && (d(0, 'thead', 1), p(1, fs, 0, 0, 'ng-template', 2), m()), i & 2)
  ) {
    let o = s();
    l(), c('ngTemplateOutlet', o.theadTemplate);
  }
}
function gs(i, t) {}
function Cs(i, t) {}
function _s(i, t) {
  if (
    (i & 1 && (d(0, 'tfoot', 3), p(1, Cs, 0, 0, 'ng-template', 2), m()), i & 2)
  ) {
    let o = s();
    l(), c('ngTemplateOutlet', o.tfootTemplate);
  }
}
var ln = (() => {
  let t = class t {
    constructor() {
      (this.tableLayout = 'auto'),
        (this.theadTemplate = null),
        (this.contentTemplate = null),
        (this.tfootTemplate = null),
        (this.listOfColWidth = []),
        (this.scrollX = null);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['table', 'nz-table-content', '']],
      hostVars: 8,
      hostBindings: function (n, a) {
        n & 2 &&
          (ce('table-layout', a.tableLayout)('width', a.scrollX)(
            'min-width',
            a.scrollX ? '100%' : null,
          ),
          D('ant-table-fixed', a.scrollX));
      },
      inputs: {
        tableLayout: 'tableLayout',
        theadTemplate: 'theadTemplate',
        contentTemplate: 'contentTemplate',
        tfootTemplate: 'tfootTemplate',
        listOfColWidth: 'listOfColWidth',
        scrollX: 'scrollX',
      },
      standalone: !0,
      features: [C],
      attrs: ms,
      ngContentSelectors: hs,
      decls: 6,
      vars: 3,
      consts: [
        [3, 'width', 'minWidth'],
        [1, 'ant-table-thead'],
        [3, 'ngTemplateOutlet'],
        [1, 'ant-table-summary'],
      ],
      template: function (n, a) {
        n & 1 &&
          (j(),
          me(0, us, 1, 4, 'col', 0, Pt),
          p(2, zs, 2, 1, 'thead', 1)(3, gs, 0, 0, 'ng-template', 2),
          B(4),
          p(5, _s, 2, 1, 'tfoot', 3)),
          n & 2 &&
            (he(a.listOfColWidth),
            l(2),
            z(a.theadTemplate ? 2 : -1),
            l(),
            c('ngTemplateOutlet', a.contentTemplate),
            l(2),
            z(a.tfootTemplate ? 5 : -1));
      },
      dependencies: [A],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var ji = (() => {
  let t = class t {
    constructor() {
      (this.tableLayout = 'auto'),
        (this.listOfColWidth = []),
        (this.theadTemplate = null),
        (this.contentTemplate = null),
        (this.tfootTemplate = null);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-inner-default']],
      hostAttrs: [1, 'ant-table-container'],
      inputs: {
        tableLayout: 'tableLayout',
        listOfColWidth: 'listOfColWidth',
        theadTemplate: 'theadTemplate',
        contentTemplate: 'contentTemplate',
        tfootTemplate: 'tfootTemplate',
      },
      standalone: !0,
      features: [C],
      decls: 2,
      vars: 5,
      consts: [
        [1, 'ant-table-content'],
        [
          'nz-table-content',
          '',
          3,
          'contentTemplate',
          'tableLayout',
          'listOfColWidth',
          'theadTemplate',
          'tfootTemplate',
        ],
      ],
      template: function (n, a) {
        n & 1 && (d(0, 'div', 0), _(1, 'table', 1), m()),
          n & 2 &&
            (l(),
            c('contentTemplate', a.contentTemplate)(
              'tableLayout',
              a.tableLayout,
            )('listOfColWidth', a.listOfColWidth)(
              'theadTemplate',
              a.theadTemplate,
            )('tfootTemplate', a.tfootTemplate));
      },
      dependencies: [ln],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Ss = ['tableHeaderElement'],
  vs = ['tableBodyElement'],
  xs = ['tableFootElement'],
  ys = (i, t) => ({ $implicit: i, index: t });
function bs(i, t) {
  if ((i & 1 && (d(0, 'div', 6, 1), _(2, 'table', 9), m()), i & 2)) {
    let o = s(2);
    c('ngStyle', o.bodyStyleMap),
      l(2),
      c('scrollX', o.scrollX)('listOfColWidth', o.listOfColWidth)(
        'contentTemplate',
        o.contentTemplate,
      );
  }
}
function Ts(i, t) {}
function Os(i, t) {
  if ((i & 1 && (ne(0), p(1, Ts, 0, 0, 'ng-template', 13), ie()), i & 2)) {
    let o = t.$implicit,
      e = t.index,
      n = s(3);
    l(),
      c('ngTemplateOutlet', n.virtualTemplate)(
        'ngTemplateOutletContext',
        Ke(2, ys, o, e),
      );
  }
}
function ws(i, t) {
  if (
    (i & 1 &&
      (d(0, 'cdk-virtual-scroll-viewport', 10, 1)(2, 'table', 11)(3, 'tbody'),
      p(4, Os, 2, 5, 'ng-container', 12),
      m()()()),
    i & 2)
  ) {
    let o = s(2);
    ce('height', o.data.length ? o.scrollY : o.noDataVirtualHeight),
      c('itemSize', o.virtualItemSize)('maxBufferPx', o.virtualMaxBufferPx)(
        'minBufferPx',
        o.virtualMinBufferPx,
      ),
      l(2),
      c('scrollX', o.scrollX)('listOfColWidth', o.listOfColWidth),
      l(2),
      c('cdkVirtualForOf', o.data)('cdkVirtualForTrackBy', o.virtualForTrackBy);
  }
}
function Ds(i, t) {
  if ((i & 1 && (d(0, 'div', 8, 2), _(2, 'table', 14), m()), i & 2)) {
    let o = s(2);
    c('ngStyle', o.headerStyleMap),
      l(2),
      c('scrollX', o.scrollX)('listOfColWidth', o.listOfColWidth)(
        'tfootTemplate',
        o.tfootTemplate,
      );
  }
}
function Is(i, t) {
  if (
    (i & 1 &&
      (d(0, 'div', 4, 0),
      _(2, 'table', 5),
      m(),
      p(3, bs, 3, 4, 'div', 6)(4, ws, 5, 9, 'cdk-virtual-scroll-viewport', 7)(
        5,
        Ds,
        3,
        4,
        'div',
        8,
      )),
    i & 2)
  ) {
    let o = s();
    c('ngStyle', o.headerStyleMap),
      l(2),
      c('scrollX', o.scrollX)('listOfColWidth', o.listOfColWidth)(
        'theadTemplate',
        o.theadTemplate,
      )('tfootTemplate', o.tfootFixed === 'top' ? o.tfootTemplate : null),
      l(),
      z(o.virtualTemplate ? 4 : 3),
      l(2),
      z(o.tfootFixed === 'bottom' ? 5 : -1);
  }
}
function Ns(i, t) {
  if ((i & 1 && (d(0, 'div', 3, 1), _(2, 'table', 15), m()), i & 2)) {
    let o = s();
    c('ngStyle', o.bodyStyleMap),
      l(2),
      c('scrollX', o.scrollX)('listOfColWidth', o.listOfColWidth)(
        'theadTemplate',
        o.theadTemplate,
      )('contentTemplate', o.contentTemplate)('tfootTemplate', o.tfootTemplate);
  }
}
var wt = (() => {
  let t = class t {
    setScrollPositionClassName(e = !1) {
      let {
          scrollWidth: n,
          scrollLeft: a,
          clientWidth: r,
        } = this.tableBodyElement.nativeElement,
        h = 'ant-table-ping-left',
        v = 'ant-table-ping-right';
      (n === r && n !== 0) || e
        ? (this.renderer.removeClass(this.tableMainElement, h),
          this.renderer.removeClass(this.tableMainElement, v))
        : a === 0
          ? (this.renderer.removeClass(this.tableMainElement, h),
            this.renderer.addClass(this.tableMainElement, v))
          : n === a + r
            ? (this.renderer.removeClass(this.tableMainElement, v),
              this.renderer.addClass(this.tableMainElement, h))
            : (this.renderer.addClass(this.tableMainElement, h),
              this.renderer.addClass(this.tableMainElement, v));
    }
    constructor(e, n, a, r) {
      (this.renderer = e),
        (this.ngZone = n),
        (this.platform = a),
        (this.resizeService = r),
        (this.data = []),
        (this.scrollX = null),
        (this.scrollY = null),
        (this.contentTemplate = null),
        (this.widthConfig = []),
        (this.listOfColWidth = []),
        (this.theadTemplate = null),
        (this.tfootTemplate = null),
        (this.tfootFixed = null),
        (this.virtualTemplate = null),
        (this.virtualItemSize = 0),
        (this.virtualMaxBufferPx = 200),
        (this.virtualMinBufferPx = 100),
        (this.virtualForTrackBy = h => h),
        (this.headerStyleMap = {}),
        (this.bodyStyleMap = {}),
        (this.verticalScrollBarWidth = 0),
        (this.noDataVirtualHeight = '182px'),
        (this.data$ = new I()),
        (this.scroll$ = new I()),
        (this.destroy$ = new I());
    }
    ngOnChanges(e) {
      let { scrollX: n, scrollY: a, data: r } = e;
      if (n || a) {
        let h = this.verticalScrollBarWidth !== 0;
        (this.headerStyleMap = {
          overflowX: 'hidden',
          overflowY: this.scrollY && h ? 'scroll' : 'hidden',
        }),
          (this.bodyStyleMap = {
            overflowY: this.scrollY ? 'scroll' : 'hidden',
            overflowX: this.scrollX ? 'auto' : null,
            maxHeight: this.scrollY,
          }),
          this.ngZone.runOutsideAngular(() => this.scroll$.next());
      }
      r && this.ngZone.runOutsideAngular(() => this.data$.next());
    }
    ngAfterViewInit() {
      this.platform.isBrowser &&
        this.ngZone.runOutsideAngular(() => {
          let e = this.scroll$.pipe(
              se(null),
              St(0),
              le(() =>
                re(this.tableBodyElement.nativeElement, 'scroll').pipe(se(!0)),
              ),
              f(this.destroy$),
            ),
            n = this.resizeService.subscribe().pipe(f(this.destroy$)),
            a = this.data$.pipe(f(this.destroy$));
          Te(e, n, a, this.scroll$)
            .pipe(se(!0), St(0), f(this.destroy$))
            .subscribe(() => this.setScrollPositionClassName()),
            e.pipe(Le(() => !!this.scrollY)).subscribe(() => {
              (this.tableHeaderElement.nativeElement.scrollLeft =
                this.tableBodyElement.nativeElement.scrollLeft),
                this.tableFootElement &&
                  (this.tableFootElement.nativeElement.scrollLeft =
                    this.tableBodyElement.nativeElement.scrollLeft);
            });
        });
    }
    ngOnDestroy() {
      this.setScrollPositionClassName(!0),
        this.destroy$.next(),
        this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(de), u(X), u(Rt), u(Hn));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-inner-scroll']],
      viewQuery: function (n, a) {
        if (
          (n & 1 && ($(Ss, 5, V), $(vs, 5, V), $(xs, 5, V), $(Ae, 5, Ae)),
          n & 2)
        ) {
          let r;
          k((r = M())) && (a.tableHeaderElement = r.first),
            k((r = M())) && (a.tableBodyElement = r.first),
            k((r = M())) && (a.tableFootElement = r.first),
            k((r = M())) && (a.cdkVirtualScrollViewport = r.first);
        }
      },
      hostAttrs: [1, 'ant-table-container'],
      inputs: {
        data: 'data',
        scrollX: 'scrollX',
        scrollY: 'scrollY',
        contentTemplate: 'contentTemplate',
        widthConfig: 'widthConfig',
        listOfColWidth: 'listOfColWidth',
        theadTemplate: 'theadTemplate',
        tfootTemplate: 'tfootTemplate',
        tfootFixed: 'tfootFixed',
        virtualTemplate: 'virtualTemplate',
        virtualItemSize: 'virtualItemSize',
        virtualMaxBufferPx: 'virtualMaxBufferPx',
        virtualMinBufferPx: 'virtualMinBufferPx',
        tableMainElement: 'tableMainElement',
        virtualForTrackBy: 'virtualForTrackBy',
        verticalScrollBarWidth: 'verticalScrollBarWidth',
        noDataVirtualHeight: 'noDataVirtualHeight',
      },
      standalone: !0,
      features: [F, C],
      decls: 2,
      vars: 1,
      consts: [
        ['tableHeaderElement', ''],
        ['tableBodyElement', ''],
        ['tableFootElement', ''],
        [1, 'ant-table-content', 3, 'ngStyle'],
        [1, 'ant-table-header', 'nz-table-hide-scrollbar', 3, 'ngStyle'],
        [
          'nz-table-content',
          '',
          'tableLayout',
          'fixed',
          3,
          'scrollX',
          'listOfColWidth',
          'theadTemplate',
          'tfootTemplate',
        ],
        [1, 'ant-table-body', 3, 'ngStyle'],
        [3, 'itemSize', 'maxBufferPx', 'minBufferPx', 'height'],
        [1, 'ant-table-summary', 3, 'ngStyle'],
        [
          'nz-table-content',
          '',
          'tableLayout',
          'fixed',
          3,
          'scrollX',
          'listOfColWidth',
          'contentTemplate',
        ],
        [3, 'itemSize', 'maxBufferPx', 'minBufferPx'],
        [
          'nz-table-content',
          '',
          'tableLayout',
          'fixed',
          3,
          'scrollX',
          'listOfColWidth',
        ],
        [4, 'cdkVirtualFor', 'cdkVirtualForOf', 'cdkVirtualForTrackBy'],
        [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
        [
          'nz-table-content',
          '',
          'tableLayout',
          'fixed',
          3,
          'scrollX',
          'listOfColWidth',
          'tfootTemplate',
        ],
        [
          'nz-table-content',
          '',
          'tableLayout',
          'fixed',
          3,
          'scrollX',
          'listOfColWidth',
          'theadTemplate',
          'contentTemplate',
          'tfootTemplate',
        ],
      ],
      template: function (n, a) {
        n & 1 && p(0, Is, 6, 7)(1, Ns, 3, 6, 'div', 3),
          n & 2 && z(a.scrollY ? 0 : 1);
      },
      dependencies: [ln, et, Xn, jt, Wt, Ae, A, sn],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Wi = (() => {
  let t = class t {
    constructor(e) {
      this.templateRef = e;
    }
    static ngTemplateContextGuard(e, n) {
      return !0;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(ke));
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [['', 'nz-virtual-scroll', '']],
      exportAs: ['nzVirtualScroll'],
      standalone: !0,
    }));
  let i = t;
  return i;
})();
function ks(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s();
    l(), ue(o.title);
  }
}
function Ms(i, t) {
  if ((i & 1 && (ne(0), E(1), ie()), i & 2)) {
    let o = s();
    l(), ue(o.footer);
  }
}
var Qi = (() => {
  let t = class t {
    constructor() {
      (this.title = null), (this.footer = null);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-title-footer']],
      hostVars: 4,
      hostBindings: function (n, a) {
        n & 2 &&
          D('ant-table-title', a.title !== null)(
            'ant-table-footer',
            a.footer !== null,
          );
      },
      inputs: { title: 'title', footer: 'footer' },
      standalone: !0,
      features: [C],
      decls: 2,
      vars: 2,
      consts: [[4, 'nzStringTemplateOutlet']],
      template: function (n, a) {
        n & 1 &&
          p(0, ks, 2, 1, 'ng-container', 0)(1, Ms, 2, 1, 'ng-container', 0),
          n & 2 &&
            (c('nzStringTemplateOutlet', a.title),
            l(),
            c('nzStringTemplateOutlet', a.footer));
      },
      dependencies: [be, ye],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Fs = ['*'];
function Ps(i, t) {}
function Vs(i, t) {
  if ((i & 1 && p(0, Ps, 0, 0, 'ng-template', 4), i & 2)) {
    s();
    let o = W(10);
    c('ngTemplateOutlet', o);
  }
}
function Es(i, t) {
  if ((i & 1 && _(0, 'nz-table-title-footer', 6), i & 2)) {
    let o = s();
    c('title', o.nzTitle);
  }
}
function $s(i, t) {
  if ((i & 1 && _(0, 'nz-table-inner-scroll', 7), i & 2)) {
    let o = s(),
      e = W(3),
      n = W(12);
    c('data', o.data)('scrollX', o.scrollX)('scrollY', o.scrollY)(
      'contentTemplate',
      n,
    )('listOfColWidth', o.listOfAutoColWidth)('theadTemplate', o.theadTemplate)(
      'tfootTemplate',
      o.tfootTemplate,
    )('tfootFixed', o.tfootFixed)(
      'verticalScrollBarWidth',
      o.verticalScrollBarWidth,
    )(
      'virtualTemplate',
      o.nzVirtualScrollDirective
        ? o.nzVirtualScrollDirective.templateRef
        : null,
    )('virtualItemSize', o.nzVirtualItemSize)(
      'virtualMaxBufferPx',
      o.nzVirtualMaxBufferPx,
    )('virtualMinBufferPx', o.nzVirtualMinBufferPx)('tableMainElement', e)(
      'virtualForTrackBy',
      o.nzVirtualForTrackBy,
    )('noDataVirtualHeight', o.noDataVirtualHeight);
  }
}
function Rs(i, t) {
  if ((i & 1 && _(0, 'nz-table-inner-default', 8), i & 2)) {
    let o = s(),
      e = W(12);
    c('tableLayout', o.nzTableLayout)('listOfColWidth', o.listOfManualColWidth)(
      'theadTemplate',
      o.theadTemplate,
    )('contentTemplate', e)('tfootTemplate', o.tfootTemplate);
  }
}
function As(i, t) {
  if ((i & 1 && _(0, 'nz-table-title-footer', 9), i & 2)) {
    let o = s();
    c('footer', o.nzFooter);
  }
}
function Bs(i, t) {}
function Ls(i, t) {
  if ((i & 1 && p(0, Bs, 0, 0, 'ng-template', 4), i & 2)) {
    s();
    let o = W(10);
    c('ngTemplateOutlet', o);
  }
}
function js(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-pagination', 11),
      O('nzPageSizeChange', function (n) {
        x(o);
        let a = s(2);
        return y(a.onPageSizeChange(n));
      })('nzPageIndexChange', function (n) {
        x(o);
        let a = s(2);
        return y(a.onPageIndexChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s(2);
    c('hidden', !o.showPagination)('nzShowSizeChanger', o.nzShowSizeChanger)(
      'nzPageSizeOptions',
      o.nzPageSizeOptions,
    )('nzItemRender', o.nzItemRender)('nzShowQuickJumper', o.nzShowQuickJumper)(
      'nzHideOnSinglePage',
      o.nzHideOnSinglePage,
    )('nzShowTotal', o.nzShowTotal)(
      'nzSize',
      o.nzPaginationType === 'small'
        ? 'small'
        : o.nzSize === 'default'
          ? 'default'
          : 'small',
    )('nzPageSize', o.nzPageSize)('nzTotal', o.nzTotal)('nzSimple', o.nzSimple)(
      'nzPageIndex',
      o.nzPageIndex,
    );
  }
}
function Ws(i, t) {
  if ((i & 1 && p(0, js, 1, 12, 'nz-pagination', 10), i & 2)) {
    let o = s();
    z(o.nzShowPagination && o.data.length ? 0 : -1);
  }
}
function Qs(i, t) {
  i & 1 && B(0);
}
var Hi = 'table',
  zt = class zt {
    onPageSizeChange(t) {
      this.nzTableDataService.updatePageSize(t);
    }
    onPageIndexChange(t) {
      this.nzTableDataService.updatePageIndex(t);
    }
    constructor(t, o, e, n, a, r, h) {
      (this.elementRef = t),
        (this.nzResizeObserver = o),
        (this.nzConfigService = e),
        (this.cdr = n),
        (this.nzTableStyleService = a),
        (this.nzTableDataService = r),
        (this.directionality = h),
        (this._nzModuleName = Hi),
        (this.nzTableLayout = 'auto'),
        (this.nzShowTotal = null),
        (this.nzItemRender = null),
        (this.nzTitle = null),
        (this.nzFooter = null),
        (this.nzNoResult = void 0),
        (this.nzPageSizeOptions = [10, 20, 30, 40, 50]),
        (this.nzVirtualItemSize = 0),
        (this.nzVirtualMaxBufferPx = 200),
        (this.nzVirtualMinBufferPx = 100),
        (this.nzVirtualForTrackBy = v => v),
        (this.nzLoadingDelay = 0),
        (this.nzPageIndex = 1),
        (this.nzPageSize = 10),
        (this.nzTotal = 0),
        (this.nzWidthConfig = []),
        (this.nzData = []),
        (this.nzCustomColumn = []),
        (this.nzPaginationPosition = 'bottom'),
        (this.nzScroll = { x: null, y: null }),
        (this.noDataVirtualHeight = '182px'),
        (this.nzPaginationType = 'default'),
        (this.nzFrontPagination = !0),
        (this.nzTemplateMode = !1),
        (this.nzShowPagination = !0),
        (this.nzLoading = !1),
        (this.nzOuterBordered = !1),
        (this.nzLoadingIndicator = null),
        (this.nzBordered = !1),
        (this.nzSize = 'default'),
        (this.nzShowSizeChanger = !1),
        (this.nzHideOnSinglePage = !1),
        (this.nzShowQuickJumper = !1),
        (this.nzSimple = !1),
        (this.nzPageSizeChange = new b()),
        (this.nzPageIndexChange = new b()),
        (this.nzQueryParams = new b()),
        (this.nzCurrentPageDataChange = new b()),
        (this.nzCustomColumnChange = new b()),
        (this.data = []),
        (this.scrollX = null),
        (this.scrollY = null),
        (this.theadTemplate = null),
        (this.tfootTemplate = null),
        (this.tfootFixed = null),
        (this.listOfAutoColWidth = []),
        (this.listOfManualColWidth = []),
        (this.hasFixLeft = !1),
        (this.hasFixRight = !1),
        (this.showPagination = !0),
        (this.destroy$ = new I()),
        (this.templateMode$ = new Y(!1)),
        (this.dir = 'ltr'),
        (this.verticalScrollBarWidth = 0),
        this.nzConfigService
          .getConfigChangeEventForComponent(Hi)
          .pipe(f(this.destroy$))
          .subscribe(() => {
            this.cdr.markForCheck();
          });
    }
    ngOnInit() {
      let {
          pageIndexDistinct$: t,
          pageSizeDistinct$: o,
          listOfCurrentPageData$: e,
          total$: n,
          queryParams$: a,
          listOfCustomColumn$: r,
        } = this.nzTableDataService,
        {
          theadTemplate$: h,
          tfootTemplate$: v,
          tfootFixed$: S,
          hasFixLeft$: R,
          hasFixRight$: Q,
        } = this.nzTableStyleService;
      (this.dir = this.directionality.value),
        this.directionality.change?.pipe(f(this.destroy$)).subscribe(N => {
          (this.dir = N), this.cdr.detectChanges();
        }),
        a.pipe(f(this.destroy$)).subscribe(this.nzQueryParams),
        t.pipe(f(this.destroy$)).subscribe(N => {
          N !== this.nzPageIndex &&
            ((this.nzPageIndex = N), this.nzPageIndexChange.next(N));
        }),
        o.pipe(f(this.destroy$)).subscribe(N => {
          N !== this.nzPageSize &&
            ((this.nzPageSize = N), this.nzPageSizeChange.next(N));
        }),
        n
          .pipe(
            f(this.destroy$),
            Le(() => this.nzFrontPagination),
          )
          .subscribe(N => {
            N !== this.nzTotal && ((this.nzTotal = N), this.cdr.markForCheck());
          }),
        e.pipe(f(this.destroy$)).subscribe(N => {
          (this.data = N),
            this.nzCurrentPageDataChange.next(N),
            this.cdr.markForCheck();
        }),
        r.pipe(f(this.destroy$)).subscribe(N => {
          (this.nzCustomColumn = N),
            this.nzCustomColumnChange.next(N),
            this.cdr.markForCheck();
        }),
        h.pipe(f(this.destroy$)).subscribe(N => {
          (this.theadTemplate = N), this.cdr.markForCheck();
        }),
        ge([v, S])
          .pipe(f(this.destroy$))
          .subscribe(([N, _e]) => {
            (this.tfootTemplate = N),
              (this.tfootFixed = _e),
              this.cdr.markForCheck();
          }),
        R.pipe(f(this.destroy$)).subscribe(N => {
          (this.hasFixLeft = N), this.cdr.markForCheck();
        }),
        Q.pipe(f(this.destroy$)).subscribe(N => {
          (this.hasFixRight = N), this.cdr.markForCheck();
        }),
        ge([n, this.templateMode$])
          .pipe(
            ee(([N, _e]) => N === 0 && !_e),
            f(this.destroy$),
          )
          .subscribe(N => {
            this.nzTableStyleService.setShowEmpty(N);
          }),
        (this.verticalScrollBarWidth = jn('vertical')),
        this.nzTableStyleService.listOfListOfThWidthPx$
          .pipe(f(this.destroy$))
          .subscribe(N => {
            (this.listOfAutoColWidth = N), this.cdr.markForCheck();
          }),
        this.nzTableStyleService.manualWidthConfigPx$
          .pipe(f(this.destroy$))
          .subscribe(N => {
            (this.listOfManualColWidth = N), this.cdr.markForCheck();
          });
    }
    ngOnChanges(t) {
      let {
        nzScroll: o,
        nzPageIndex: e,
        nzPageSize: n,
        nzFrontPagination: a,
        nzData: r,
        nzCustomColumn: h,
        nzWidthConfig: v,
        nzNoResult: S,
        nzTemplateMode: R,
      } = t;
      e && this.nzTableDataService.updatePageIndex(this.nzPageIndex),
        n && this.nzTableDataService.updatePageSize(this.nzPageSize),
        r &&
          ((this.nzData = this.nzData || []),
          this.nzTableDataService.updateListOfData(this.nzData)),
        h &&
          ((this.nzCustomColumn = this.nzCustomColumn || []),
          this.nzTableDataService.updateListOfCustomColumn(
            this.nzCustomColumn,
          )),
        a &&
          this.nzTableDataService.updateFrontPagination(this.nzFrontPagination),
        o && this.setScrollOnChanges(),
        v && this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig),
        R && this.templateMode$.next(this.nzTemplateMode),
        S && this.nzTableStyleService.setNoResult(this.nzNoResult),
        this.updateShowPagination();
    }
    ngAfterViewInit() {
      this.nzResizeObserver
        .observe(this.elementRef)
        .pipe(
          ee(([t]) => {
            let { width: o } = t.target.getBoundingClientRect(),
              e = this.scrollY ? this.verticalScrollBarWidth : 0;
            return Math.floor(o - e);
          }),
          f(this.destroy$),
        )
        .subscribe(this.nzTableStyleService.hostWidth$),
        this.nzTableInnerScrollComponent &&
          this.nzTableInnerScrollComponent.cdkVirtualScrollViewport &&
          (this.cdkVirtualScrollViewport =
            this.nzTableInnerScrollComponent.cdkVirtualScrollViewport);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    setScrollOnChanges() {
      (this.scrollX = (this.nzScroll && this.nzScroll.x) || null),
        (this.scrollY = (this.nzScroll && this.nzScroll.y) || null),
        this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
    }
    updateShowPagination() {
      this.showPagination =
        (this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize) ||
        (this.nzData.length > 0 && !this.nzHideOnSinglePage) ||
        (!this.nzFrontPagination && this.nzTotal > this.nzPageSize);
    }
  };
(zt.ɵfac = function (o) {
  return new (o || zt)(u(V), u(Bt), u(we), u(U), u(Se), u(Ge), u(Ce));
}),
  (zt.ɵcmp = g({
    type: zt,
    selectors: [['nz-table']],
    contentQueries: function (o, e, n) {
      if ((o & 1 && Oe(n, Wi, 5), o & 2)) {
        let a;
        k((a = M())) && (e.nzVirtualScrollDirective = a.first);
      }
    },
    viewQuery: function (o, e) {
      if ((o & 1 && $(wt, 5), o & 2)) {
        let n;
        k((n = M())) && (e.nzTableInnerScrollComponent = n.first);
      }
    },
    hostAttrs: [1, 'ant-table-wrapper'],
    hostVars: 4,
    hostBindings: function (o, e) {
      o & 2 &&
        D('ant-table-wrapper-rtl', e.dir === 'rtl')(
          'ant-table-custom-column',
          e.nzCustomColumn.length,
        );
    },
    inputs: {
      nzTableLayout: 'nzTableLayout',
      nzShowTotal: 'nzShowTotal',
      nzItemRender: 'nzItemRender',
      nzTitle: 'nzTitle',
      nzFooter: 'nzFooter',
      nzNoResult: 'nzNoResult',
      nzPageSizeOptions: 'nzPageSizeOptions',
      nzVirtualItemSize: 'nzVirtualItemSize',
      nzVirtualMaxBufferPx: 'nzVirtualMaxBufferPx',
      nzVirtualMinBufferPx: 'nzVirtualMinBufferPx',
      nzVirtualForTrackBy: 'nzVirtualForTrackBy',
      nzLoadingDelay: 'nzLoadingDelay',
      nzPageIndex: 'nzPageIndex',
      nzPageSize: 'nzPageSize',
      nzTotal: 'nzTotal',
      nzWidthConfig: 'nzWidthConfig',
      nzData: 'nzData',
      nzCustomColumn: 'nzCustomColumn',
      nzPaginationPosition: 'nzPaginationPosition',
      nzScroll: 'nzScroll',
      noDataVirtualHeight: 'noDataVirtualHeight',
      nzPaginationType: 'nzPaginationType',
      nzFrontPagination: [2, 'nzFrontPagination', 'nzFrontPagination', T],
      nzTemplateMode: [2, 'nzTemplateMode', 'nzTemplateMode', T],
      nzShowPagination: [2, 'nzShowPagination', 'nzShowPagination', T],
      nzLoading: [2, 'nzLoading', 'nzLoading', T],
      nzOuterBordered: [2, 'nzOuterBordered', 'nzOuterBordered', T],
      nzLoadingIndicator: 'nzLoadingIndicator',
      nzBordered: [2, 'nzBordered', 'nzBordered', T],
      nzSize: 'nzSize',
      nzShowSizeChanger: [2, 'nzShowSizeChanger', 'nzShowSizeChanger', T],
      nzHideOnSinglePage: [2, 'nzHideOnSinglePage', 'nzHideOnSinglePage', T],
      nzShowQuickJumper: [2, 'nzShowQuickJumper', 'nzShowQuickJumper', T],
      nzSimple: [2, 'nzSimple', 'nzSimple', T],
    },
    outputs: {
      nzPageSizeChange: 'nzPageSizeChange',
      nzPageIndexChange: 'nzPageIndexChange',
      nzQueryParams: 'nzQueryParams',
      nzCurrentPageDataChange: 'nzCurrentPageDataChange',
      nzCustomColumnChange: 'nzCustomColumnChange',
    },
    exportAs: ['nzTable'],
    standalone: !0,
    features: [oe([Se, Ge]), L, F, C],
    ngContentSelectors: Fs,
    decls: 13,
    vars: 26,
    consts: [
      ['tableMainElement', ''],
      ['paginationTemplate', ''],
      ['contentTemplate', ''],
      [3, 'nzDelay', 'nzSpinning', 'nzIndicator'],
      [3, 'ngTemplateOutlet'],
      [1, 'ant-table'],
      [3, 'title'],
      [
        3,
        'data',
        'scrollX',
        'scrollY',
        'contentTemplate',
        'listOfColWidth',
        'theadTemplate',
        'tfootTemplate',
        'tfootFixed',
        'verticalScrollBarWidth',
        'virtualTemplate',
        'virtualItemSize',
        'virtualMaxBufferPx',
        'virtualMinBufferPx',
        'tableMainElement',
        'virtualForTrackBy',
        'noDataVirtualHeight',
      ],
      [
        3,
        'tableLayout',
        'listOfColWidth',
        'theadTemplate',
        'contentTemplate',
        'tfootTemplate',
      ],
      [3, 'footer'],
      [
        1,
        'ant-table-pagination',
        'ant-table-pagination-right',
        3,
        'hidden',
        'nzShowSizeChanger',
        'nzPageSizeOptions',
        'nzItemRender',
        'nzShowQuickJumper',
        'nzHideOnSinglePage',
        'nzShowTotal',
        'nzSize',
        'nzPageSize',
        'nzTotal',
        'nzSimple',
        'nzPageIndex',
      ],
      [
        1,
        'ant-table-pagination',
        'ant-table-pagination-right',
        3,
        'nzPageSizeChange',
        'nzPageIndexChange',
        'hidden',
        'nzShowSizeChanger',
        'nzPageSizeOptions',
        'nzItemRender',
        'nzShowQuickJumper',
        'nzHideOnSinglePage',
        'nzShowTotal',
        'nzSize',
        'nzPageSize',
        'nzTotal',
        'nzSimple',
        'nzPageIndex',
      ],
    ],
    template: function (o, e) {
      o & 1 &&
        (j(),
        d(0, 'nz-spin', 3),
        p(1, Vs, 1, 1, null, 4),
        d(2, 'div', 5, 0),
        p(4, Es, 1, 1, 'nz-table-title-footer', 6)(
          5,
          $s,
          1,
          16,
          'nz-table-inner-scroll',
          7,
        )(6, Rs, 1, 5, 'nz-table-inner-default', 8)(
          7,
          As,
          1,
          1,
          'nz-table-title-footer',
          9,
        ),
        m(),
        p(8, Ls, 1, 1, null, 4),
        m(),
        p(9, Ws, 1, 1, 'ng-template', null, 1, te)(
          11,
          Qs,
          1,
          0,
          'ng-template',
          null,
          2,
          te,
        )),
        o & 2 &&
          (c('nzDelay', e.nzLoadingDelay)('nzSpinning', e.nzLoading)(
            'nzIndicator',
            e.nzLoadingIndicator,
          ),
          l(),
          z(
            e.nzPaginationPosition === 'both' ||
              e.nzPaginationPosition === 'top'
              ? 1
              : -1,
          ),
          l(),
          D('ant-table-rtl', e.dir === 'rtl')(
            'ant-table-fixed-header',
            e.nzData.length && e.scrollY,
          )('ant-table-fixed-column', e.scrollX)(
            'ant-table-has-fix-left',
            e.hasFixLeft,
          )('ant-table-has-fix-right', e.hasFixRight)(
            'ant-table-bordered',
            e.nzBordered,
          )('nz-table-out-bordered', e.nzOuterBordered && !e.nzBordered)(
            'ant-table-middle',
            e.nzSize === 'middle',
          )('ant-table-small', e.nzSize === 'small'),
          l(2),
          z(e.nzTitle ? 4 : -1),
          l(),
          z(e.scrollY || e.scrollX ? 5 : 6),
          l(2),
          z(e.nzFooter ? 7 : -1),
          l(),
          z(
            e.nzPaginationPosition === 'both' ||
              e.nzPaginationPosition === 'bottom'
              ? 8
              : -1,
          ));
    },
    dependencies: [fi, A, Qi, wt, ji, Ni, Me],
    encapsulation: 2,
    changeDetection: 0,
  }));
var Fe = zt;
Z([G()], Fe.prototype, 'nzLoadingIndicator', void 0);
Z([G()], Fe.prototype, 'nzBordered', void 0);
Z([G()], Fe.prototype, 'nzSize', void 0);
Z([G()], Fe.prototype, 'nzShowSizeChanger', void 0);
Z([G()], Fe.prototype, 'nzHideOnSinglePage', void 0);
Z([G()], Fe.prototype, 'nzShowQuickJumper', void 0);
Z([G()], Fe.prototype, 'nzSimple', void 0);
var Ui = (() => {
  let t = class t {
    setAutoLeftWidth(e) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'left', e);
    }
    setAutoRightWidth(e) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'right', e);
    }
    setIsFirstRight(e) {
      this.setFixClass(e, 'ant-table-cell-fix-right-first');
    }
    setIsLastLeft(e) {
      this.setFixClass(e, 'ant-table-cell-fix-left-last');
    }
    setFixClass(e, n) {
      this.renderer.removeClass(this.elementRef.nativeElement, n),
        e && this.renderer.addClass(this.elementRef.nativeElement, n);
    }
    constructor(e, n) {
      (this.renderer = e),
        (this.elementRef = n),
        (this.nzRight = !1),
        (this.nzLeft = !1),
        (this.colspan = null),
        (this.colSpan = null),
        (this.changes$ = new I()),
        (this.isAutoLeft = !1),
        (this.isAutoRight = !1),
        (this.isFixedLeft = !1),
        (this.isFixedRight = !1),
        (this.isFixed = !1);
    }
    ngOnChanges() {
      this.setIsFirstRight(!1),
        this.setIsLastLeft(!1),
        (this.isAutoLeft = this.nzLeft === '' || this.nzLeft === !0),
        (this.isAutoRight = this.nzRight === '' || this.nzRight === !0),
        (this.isFixedLeft = this.nzLeft !== !1),
        (this.isFixedRight = this.nzRight !== !1),
        (this.isFixed = this.isFixedLeft || this.isFixedRight);
      let e = n => (typeof n == 'string' && n !== '' ? n : null);
      this.setAutoLeftWidth(e(this.nzLeft)),
        this.setAutoRightWidth(e(this.nzRight)),
        this.changes$.next();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(de), u(V));
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [
        ['td', 'nzRight', ''],
        ['th', 'nzRight', ''],
        ['td', 'nzLeft', ''],
        ['th', 'nzLeft', ''],
      ],
      hostVars: 6,
      hostBindings: function (n, a) {
        n & 2 &&
          (ce('position', a.isFixed ? 'sticky' : null),
          D('ant-table-cell-fix-right', a.isFixedRight)(
            'ant-table-cell-fix-left',
            a.isFixedLeft,
          ));
      },
      inputs: {
        nzRight: 'nzRight',
        nzLeft: 'nzLeft',
        colspan: 'colspan',
        colSpan: 'colSpan',
      },
      standalone: !0,
      features: [F],
    }));
  let i = t;
  return i;
})();
var Zi = (() => {
  let t = class t {
    constructor() {
      (this.destroy$ = new I()),
        (this.listOfFixedColumns$ = new K(1)),
        (this.listOfColumns$ = new K(1)),
        (this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(
          le(e =>
            Te(this.listOfFixedColumns$, ...e.map(n => n.changes$)).pipe(
              _t(() => this.listOfFixedColumns$),
            ),
          ),
          f(this.destroy$),
        )),
        (this.listOfFixedLeftColumnChanges$ =
          this.listOfFixedColumnsChanges$.pipe(
            ee(e => e.filter(n => n.nzLeft !== !1)),
          )),
        (this.listOfFixedRightColumnChanges$ =
          this.listOfFixedColumnsChanges$.pipe(
            ee(e => e.filter(n => n.nzRight !== !1)),
          )),
        (this.listOfColumnsChanges$ = this.listOfColumns$.pipe(
          le(e =>
            Te(this.listOfColumns$, ...e.map(n => n.changes$)).pipe(
              _t(() => this.listOfColumns$),
            ),
          ),
          f(this.destroy$),
        )),
        (this.nzTableStyleService = H(Se, { optional: !0 })),
        (this.isInsideTable = !!this.nzTableStyleService);
    }
    ngAfterContentInit() {
      this.nzTableStyleService &&
        (this.listOfCellFixedDirective.changes
          .pipe(se(this.listOfCellFixedDirective), f(this.destroy$))
          .subscribe(this.listOfFixedColumns$),
        this.listOfNzThDirective.changes
          .pipe(se(this.listOfNzThDirective), f(this.destroy$))
          .subscribe(this.listOfColumns$),
        this.listOfFixedLeftColumnChanges$.subscribe(e => {
          e.forEach(n => n.setIsLastLeft(n === e[e.length - 1]));
        }),
        this.listOfFixedRightColumnChanges$.subscribe(e => {
          e.forEach(n => n.setIsFirstRight(n === e[0]));
        }),
        ge([
          this.nzTableStyleService.listOfListOfThWidth$,
          this.listOfFixedLeftColumnChanges$,
        ])
          .pipe(f(this.destroy$))
          .subscribe(([e, n]) => {
            n.forEach((a, r) => {
              if (a.isAutoLeft) {
                let v = n
                    .slice(0, r)
                    .reduce((R, Q) => R + (Q.colspan || Q.colSpan || 1), 0),
                  S = e.slice(0, v).reduce((R, Q) => R + Q, 0);
                a.setAutoLeftWidth(`${S}px`);
              }
            });
          }),
        ge([
          this.nzTableStyleService.listOfListOfThWidth$,
          this.listOfFixedRightColumnChanges$,
        ])
          .pipe(f(this.destroy$))
          .subscribe(([e, n]) => {
            n.forEach((a, r) => {
              let h = n[n.length - r - 1];
              if (h.isAutoRight) {
                let S = n
                    .slice(n.length - r, n.length)
                    .reduce((Q, N) => Q + (N.colspan || N.colSpan || 1), 0),
                  R = e
                    .slice(e.length - S, e.length)
                    .reduce((Q, N) => Q + N, 0);
                h.setAutoRightWidth(`${R}px`);
              }
            });
          }));
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = pe({
      type: t,
      selectors: [
        [
          'tr',
          3,
          'mat-row',
          '',
          3,
          'mat-header-row',
          '',
          3,
          'nz-table-measure-row',
          '',
          3,
          'nzExpand',
          '',
          3,
          'nz-table-fixed-row',
          '',
        ],
      ],
      contentQueries: function (n, a, r) {
        if ((n & 1 && (Oe(r, $i, 4), Oe(r, Ui, 4)), n & 2)) {
          let h;
          k((h = M())) && (a.listOfNzThDirective = h),
            k((h = M())) && (a.listOfCellFixedDirective = h);
        }
      },
      hostVars: 2,
      hostBindings: function (n, a) {
        n & 2 && D('ant-table-row', a.isInsideTable);
      },
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var cn = (() => {
  let t = class t {
    constructor() {
      (this.selected$ = new K(1)),
        (this.touched$ = new I()),
        (this.disabled$ = new K(1)),
        (this.name$ = new K(1));
    }
    touch() {
      this.touched$.next();
    }
    select(e) {
      this.selected$.next(e);
    }
    setDisabled(e) {
      this.disabled$.next(e);
    }
    setName(e) {
      this.name$.next(e);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = Xe({ token: t, factory: t.ɵfac }));
  let i = t;
  return i;
})();
var Us = ['inputElement'],
  Zs = ['nz-radio', ''],
  Gs = ['*'],
  Gi = (() => {
    let t = class t {
      focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
      }
      blur() {
        this.inputElement.nativeElement.blur();
      }
      constructor(e, n, a, r) {
        (this.ngZone = e),
          (this.elementRef = n),
          (this.cdr = a),
          (this.focusMonitor = r),
          (this.isNgModel = !1),
          (this.destroy$ = new I()),
          (this.isNzDisableFirstChange = !0),
          (this.directionality = H(Ce)),
          (this.nzRadioService = H(cn, { optional: !0 })),
          (this.nzFormStatusService = H(it, { optional: !0 })),
          (this.isChecked = !1),
          (this.name = null),
          (this.onChange = () => {}),
          (this.onTouched = () => {}),
          (this.nzValue = null),
          (this.nzDisabled = !1),
          (this.nzAutoFocus = !1),
          (this.isRadioButton = !1),
          (this.dir = 'ltr');
      }
      setDisabledState(e) {
        (this.nzDisabled =
          (this.isNzDisableFirstChange && this.nzDisabled) || e),
          (this.isNzDisableFirstChange = !1),
          this.cdr.markForCheck();
      }
      writeValue(e) {
        (this.isChecked = e), this.cdr.markForCheck();
      }
      registerOnChange(e) {
        (this.isNgModel = !0), (this.onChange = e);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      ngOnInit() {
        this.nzRadioService &&
          (this.nzRadioService.name$.pipe(f(this.destroy$)).subscribe(e => {
            (this.name = e), this.cdr.markForCheck();
          }),
          this.nzRadioService.disabled$.pipe(f(this.destroy$)).subscribe(e => {
            (this.nzDisabled =
              (this.isNzDisableFirstChange && this.nzDisabled) || e),
              (this.isNzDisableFirstChange = !1),
              this.cdr.markForCheck();
          }),
          this.nzRadioService.selected$.pipe(f(this.destroy$)).subscribe(e => {
            let n = this.isChecked;
            (this.isChecked = this.nzValue === e),
              this.isNgModel &&
                n !== this.isChecked &&
                this.isChecked === !1 &&
                this.onChange(!1),
              this.cdr.markForCheck();
          })),
          this.focusMonitor
            .monitor(this.elementRef, !0)
            .pipe(f(this.destroy$))
            .subscribe(e => {
              e ||
                (Promise.resolve().then(() => this.onTouched()),
                this.nzRadioService && this.nzRadioService.touch());
            }),
          this.directionality.change.pipe(f(this.destroy$)).subscribe(e => {
            (this.dir = e), this.cdr.detectChanges();
          }),
          (this.dir = this.directionality.value),
          this.setupClickListener();
      }
      ngAfterViewInit() {
        this.nzAutoFocus && this.focus();
      }
      ngOnDestroy() {
        this.destroy$.next(),
          this.destroy$.complete(),
          this.focusMonitor.stopMonitoring(this.elementRef);
      }
      setupClickListener() {
        this.ngZone.runOutsideAngular(() => {
          re(this.elementRef.nativeElement, 'click')
            .pipe(f(this.destroy$))
            .subscribe(e => {
              e.stopPropagation(),
                e.preventDefault(),
                !(this.nzDisabled || this.isChecked) &&
                  this.ngZone.run(() => {
                    this.focus(),
                      this.nzRadioService?.select(this.nzValue),
                      this.isNgModel &&
                        ((this.isChecked = !0), this.onChange(!0)),
                      this.cdr.markForCheck();
                  });
            });
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(X), u(V), u(U), u(Ee));
    }),
      (t.ɵcmp = g({
        type: t,
        selectors: [
          ['', 'nz-radio', ''],
          ['', 'nz-radio-button', ''],
        ],
        viewQuery: function (n, a) {
          if ((n & 1 && $(Us, 7), n & 2)) {
            let r;
            k((r = M())) && (a.inputElement = r.first);
          }
        },
        hostVars: 18,
        hostBindings: function (n, a) {
          n & 2 &&
            D('ant-radio-wrapper-in-form-item', !!a.nzFormStatusService)(
              'ant-radio-wrapper',
              !a.isRadioButton,
            )('ant-radio-button-wrapper', a.isRadioButton)(
              'ant-radio-wrapper-checked',
              a.isChecked && !a.isRadioButton,
            )(
              'ant-radio-button-wrapper-checked',
              a.isChecked && a.isRadioButton,
            )('ant-radio-wrapper-disabled', a.nzDisabled && !a.isRadioButton)(
              'ant-radio-button-wrapper-disabled',
              a.nzDisabled && a.isRadioButton,
            )('ant-radio-wrapper-rtl', !a.isRadioButton && a.dir === 'rtl')(
              'ant-radio-button-wrapper-rtl',
              a.isRadioButton && a.dir === 'rtl',
            );
        },
        inputs: {
          nzValue: 'nzValue',
          nzDisabled: [2, 'nzDisabled', 'nzDisabled', T],
          nzAutoFocus: [2, 'nzAutoFocus', 'nzAutoFocus', T],
          isRadioButton: [2, 'nz-radio-button', 'isRadioButton', T],
        },
        exportAs: ['nzRadio'],
        standalone: !0,
        features: [
          oe([{ provide: Qe, useExisting: je(() => t), multi: !0 }]),
          L,
          C,
        ],
        attrs: Zs,
        ngContentSelectors: Gs,
        decls: 6,
        vars: 24,
        consts: [
          ['inputElement', ''],
          ['type', 'radio', 3, 'disabled', 'checked'],
        ],
        template: function (n, a) {
          n & 1 &&
            (j(),
            d(0, 'span'),
            _(1, 'input', 1, 0)(3, 'span'),
            m(),
            d(4, 'span'),
            B(5),
            m()),
            n & 2 &&
              (D('ant-radio', !a.isRadioButton)(
                'ant-radio-checked',
                a.isChecked && !a.isRadioButton,
              )('ant-radio-disabled', a.nzDisabled && !a.isRadioButton)(
                'ant-radio-button',
                a.isRadioButton,
              )('ant-radio-button-checked', a.isChecked && a.isRadioButton)(
                'ant-radio-button-disabled',
                a.nzDisabled && a.isRadioButton,
              ),
              l(),
              D('ant-radio-input', !a.isRadioButton)(
                'ant-radio-button-input',
                a.isRadioButton,
              ),
              c('disabled', a.nzDisabled)('checked', a.isChecked),
              J('autofocus', a.nzAutoFocus ? 'autofocus' : null)(
                'name',
                a.name,
              ),
              l(2),
              D('ant-radio-inner', !a.isRadioButton)(
                'ant-radio-button-inner',
                a.isRadioButton,
              ));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Js = ['*'],
  qs = 'filterTrigger',
  gt = class gt {
    onVisibleChange(t) {
      (this.nzVisible = t), this.nzVisibleChange.next(t);
    }
    hide() {
      (this.nzVisible = !1), this.cdr.markForCheck();
    }
    show() {
      (this.nzVisible = !0), this.cdr.markForCheck();
    }
    constructor(t, o, e, n) {
      (this.nzConfigService = t),
        (this.ngZone = o),
        (this.cdr = e),
        (this.destroy$ = n),
        (this._nzModuleName = qs),
        (this.nzActive = !1),
        (this.nzVisible = !1),
        (this.nzBackdrop = !1),
        (this.nzVisibleChange = new b());
    }
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        re(this.nzDropdown.nativeElement, 'click')
          .pipe(f(this.destroy$))
          .subscribe(t => {
            t.stopPropagation();
          });
      });
    }
  };
(gt.ɵfac = function (o) {
  return new (o || gt)(u(we), u(X), u(U), u(ae));
}),
  (gt.ɵcmp = g({
    type: gt,
    selectors: [['nz-filter-trigger']],
    viewQuery: function (o, e) {
      if ((o & 1 && $(ot, 7, V), o & 2)) {
        let n;
        k((n = M())) && (e.nzDropdown = n.first);
      }
    },
    inputs: {
      nzActive: 'nzActive',
      nzDropdownMenu: 'nzDropdownMenu',
      nzVisible: 'nzVisible',
      nzBackdrop: [2, 'nzBackdrop', 'nzBackdrop', T],
    },
    outputs: { nzVisibleChange: 'nzVisibleChange' },
    exportAs: ['nzFilterTrigger'],
    standalone: !0,
    features: [oe([ae]), L, C],
    ngContentSelectors: Js,
    decls: 2,
    vars: 8,
    consts: [
      [
        'nz-dropdown',
        '',
        'nzTrigger',
        'click',
        'nzPlacement',
        'bottomRight',
        1,
        'ant-table-filter-trigger',
        3,
        'nzVisibleChange',
        'nzBackdrop',
        'nzClickHide',
        'nzDropdownMenu',
        'nzVisible',
      ],
    ],
    template: function (o, e) {
      o & 1 &&
        (j(),
        d(0, 'span', 0),
        O('nzVisibleChange', function (a) {
          return e.onVisibleChange(a);
        }),
        B(1),
        m()),
        o & 2 &&
          (D('active', e.nzActive)('ant-table-filter-open', e.nzVisible),
          c('nzBackdrop', e.nzBackdrop)('nzClickHide', !1)(
            'nzDropdownMenu',
            e.nzDropdownMenu,
          )('nzVisible', e.nzVisible));
    },
    dependencies: [at, ot],
    encapsulation: 2,
    changeDetection: 0,
  }));
var Dt = gt;
Z([G()], Dt.prototype, 'nzBackdrop', void 0);
var Xs = (i, t) => t.value;
function Ys(i, t) {}
function Ks(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'label', 14),
      O('ngModelChange', function () {
        x(o);
        let n = s().$implicit,
          a = s(2);
        return y(a.check(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s().$implicit;
    c('ngModel', o.checked);
  }
}
function el(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'label', 15),
      O('ngModelChange', function () {
        x(o);
        let n = s().$implicit,
          a = s(2);
        return y(a.check(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s().$implicit;
    c('ngModel', o.checked);
  }
}
function tl(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'li', 11),
      O('click', function () {
        let n = x(o).$implicit,
          a = s(2);
        return y(a.check(n));
      }),
      p(1, Ks, 1, 1, 'label', 12)(2, el, 1, 1, 'label', 13),
      d(3, 'span'),
      E(4),
      m()();
  }
  if (i & 2) {
    let o = t.$implicit,
      e = s(2);
    c('nzSelected', o.checked),
      l(),
      z(e.filterMultiple ? 2 : 1),
      l(3),
      ue(o.text);
  }
}
function nl(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-filter-trigger', 3),
      O('nzVisibleChange', function (n) {
        x(o);
        let a = s();
        return y(a.onVisibleChange(n));
      }),
      _(1, 'span', 4),
      m(),
      d(2, 'nz-dropdown-menu', null, 0)(4, 'div', 5)(5, 'ul', 6),
      me(6, tl, 5, 3, 'li', 7, Xs),
      m(),
      d(8, 'div', 8)(9, 'button', 9),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.reset());
      }),
      E(10),
      m(),
      d(11, 'button', 10),
      O('click', function () {
        x(o);
        let n = s();
        return y(n.confirm());
      }),
      E(12),
      m()()()();
  }
  if (i & 2) {
    let o = W(3),
      e = s();
    c('nzVisible', e.isVisible)('nzActive', e.isChecked)('nzDropdownMenu', o),
      l(6),
      he(e.listOfParsedFilter),
      l(3),
      c('disabled', !e.isChecked),
      l(),
      q(' ', e.locale.filterReset, ' '),
      l(2),
      ue(e.locale.filterConfirm);
  }
}
function il(i, t) {
  if ((i & 1 && Ye(0, 2), i & 2)) {
    let o = s();
    c('ngTemplateOutlet', o.extraTemplate);
  }
}
var pn = (() => {
  let t = class t {
    check(e) {
      this.filterMultiple
        ? ((this.listOfParsedFilter = this.listOfParsedFilter.map(n =>
            n === e ? mn(Ct({}, n), { checked: !e.checked }) : n,
          )),
          (e.checked = !e.checked))
        : (this.listOfParsedFilter = this.listOfParsedFilter.map(n =>
            mn(Ct({}, n), { checked: n === e }),
          )),
        (this.isChecked = this.getCheckedStatus(this.listOfParsedFilter));
    }
    confirm() {
      (this.isVisible = !1), this.emitFilterData();
    }
    reset() {
      (this.isVisible = !1),
        (this.listOfParsedFilter = this.parseListOfFilter(
          this.listOfFilter,
          !0,
        )),
        (this.isChecked = this.getCheckedStatus(this.listOfParsedFilter)),
        this.emitFilterData();
    }
    onVisibleChange(e) {
      (this.isVisible = e),
        e
          ? (this.listOfChecked = this.listOfParsedFilter
              .filter(n => n.checked)
              .map(n => n.value))
          : this.emitFilterData();
    }
    emitFilterData() {
      let e = this.listOfParsedFilter.filter(n => n.checked).map(n => n.value);
      Ln(this.listOfChecked, e) ||
        (this.filterMultiple
          ? this.filterChange.emit(e)
          : this.filterChange.emit(e.length > 0 ? e[0] : null));
    }
    parseListOfFilter(e, n) {
      return e.map(a => {
        let r = n ? !1 : !!a.byDefault;
        return { text: a.text, value: a.value, checked: r };
      });
    }
    getCheckedStatus(e) {
      return e.some(n => n.checked);
    }
    constructor(e, n) {
      (this.cdr = e),
        (this.i18n = n),
        (this.contentTemplate = null),
        (this.customFilter = !1),
        (this.extraTemplate = null),
        (this.filterMultiple = !0),
        (this.listOfFilter = []),
        (this.filterChange = new b()),
        (this.destroy$ = new I()),
        (this.isChecked = !1),
        (this.isVisible = !1),
        (this.listOfParsedFilter = []),
        (this.listOfChecked = []);
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(f(this.destroy$)).subscribe(() => {
        (this.locale = this.i18n.getLocaleData('Table')),
          this.cdr.markForCheck();
      });
    }
    ngOnChanges(e) {
      let { listOfFilter: n } = e;
      n &&
        this.listOfFilter &&
        this.listOfFilter.length &&
        ((this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter)),
        (this.isChecked = this.getCheckedStatus(this.listOfParsedFilter)));
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(U), u(tt));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-filter']],
      hostAttrs: [1, 'ant-table-filter-column'],
      inputs: {
        contentTemplate: 'contentTemplate',
        customFilter: 'customFilter',
        extraTemplate: 'extraTemplate',
        filterMultiple: 'filterMultiple',
        listOfFilter: 'listOfFilter',
      },
      outputs: { filterChange: 'filterChange' },
      standalone: !0,
      features: [F, C],
      decls: 4,
      vars: 2,
      consts: [
        ['filterMenu', 'nzDropdownMenu'],
        [1, 'ant-table-column-title'],
        [3, 'ngTemplateOutlet'],
        [3, 'nzVisibleChange', 'nzVisible', 'nzActive', 'nzDropdownMenu'],
        ['nz-icon', '', 'nzType', 'filter', 'nzTheme', 'fill'],
        [1, 'ant-table-filter-dropdown'],
        ['nz-menu', ''],
        ['nz-menu-item', '', 3, 'nzSelected'],
        [1, 'ant-table-filter-dropdown-btns'],
        [
          'nz-button',
          '',
          'nzType',
          'link',
          'nzSize',
          'small',
          3,
          'click',
          'disabled',
        ],
        ['nz-button', '', 'nzType', 'primary', 'nzSize', 'small', 3, 'click'],
        ['nz-menu-item', '', 3, 'click', 'nzSelected'],
        ['nz-radio', '', 3, 'ngModel'],
        ['nz-checkbox', '', 3, 'ngModel'],
        ['nz-radio', '', 3, 'ngModelChange', 'ngModel'],
        ['nz-checkbox', '', 3, 'ngModelChange', 'ngModel'],
      ],
      template: function (n, a) {
        n & 1 &&
          (d(0, 'span', 1),
          p(1, Ys, 0, 0, 'ng-template', 2),
          m(),
          p(2, nl, 13, 6)(3, il, 1, 1, 'ng-container', 2)),
          n & 2 &&
            (l(),
            c('ngTemplateOutlet', a.contentTemplate),
            l(),
            z(a.customFilter ? 3 : 2));
      },
      dependencies: [
        A,
        Dt,
        ze,
        fe,
        at,
        Ut,
        Lt,
        Xt,
        Gi,
        ft,
        Re,
        Ne,
        De,
        Ie,
        qt,
        Zt,
        Gt,
        Jt,
      ],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function ol(i, t) {}
function al(i, t) {
  if ((i & 1 && _(0, 'span', 6), i & 2)) {
    let o = s();
    D('active', o.sortOrder === 'ascend');
  }
}
function rl(i, t) {
  if ((i & 1 && _(0, 'span', 7), i & 2)) {
    let o = s();
    D('active', o.sortOrder === 'descend');
  }
}
var Ji = (() => {
  let t = class t {
    constructor() {
      (this.sortDirections = ['ascend', 'descend', null]),
        (this.sortOrder = null),
        (this.contentTemplate = null),
        (this.isUp = !1),
        (this.isDown = !1);
    }
    ngOnChanges(e) {
      let { sortDirections: n } = e;
      n &&
        ((this.isUp = this.sortDirections.indexOf('ascend') !== -1),
        (this.isDown = this.sortDirections.indexOf('descend') !== -1));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['nz-table-sorters']],
      hostAttrs: [1, 'ant-table-column-sorters'],
      inputs: {
        sortDirections: 'sortDirections',
        sortOrder: 'sortOrder',
        contentTemplate: 'contentTemplate',
      },
      standalone: !0,
      features: [F, C],
      decls: 6,
      vars: 5,
      consts: [
        [1, 'ant-table-column-title'],
        [3, 'ngTemplateOutlet'],
        [1, 'ant-table-column-sorter'],
        [1, 'ant-table-column-sorter-inner'],
        [
          'nz-icon',
          '',
          'nzType',
          'caret-up',
          1,
          'ant-table-column-sorter-up',
          3,
          'active',
        ],
        [
          'nz-icon',
          '',
          'nzType',
          'caret-down',
          1,
          'ant-table-column-sorter-down',
          3,
          'active',
        ],
        ['nz-icon', '', 'nzType', 'caret-up', 1, 'ant-table-column-sorter-up'],
        [
          'nz-icon',
          '',
          'nzType',
          'caret-down',
          1,
          'ant-table-column-sorter-down',
        ],
      ],
      template: function (n, a) {
        n & 1 &&
          (d(0, 'span', 0),
          p(1, ol, 0, 0, 'ng-template', 1),
          m(),
          d(2, 'span', 2)(3, 'span', 3),
          p(4, al, 1, 2, 'span', 4)(5, rl, 1, 2, 'span', 5),
          m()()),
          n & 2 &&
            (l(),
            c('ngTemplateOutlet', a.contentTemplate),
            l(),
            D('ant-table-column-sorter-full', a.isDown && a.isUp),
            l(2),
            z(a.isUp ? 4 : -1),
            l(),
            z(a.isDown ? 5 : -1));
      },
      dependencies: [ze, fe, A],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var sl = ['nzColumnKey', ''],
  ll = [[['', 'nz-th-extra', '']], [['nz-filter-trigger']], '*'],
  cl = ['[nz-th-extra]', 'nz-filter-trigger', '*'];
function pl(i, t) {
  if (i & 1) {
    let o = P();
    d(0, 'nz-table-filter', 6),
      O('filterChange', function (n) {
        x(o);
        let a = s();
        return y(a.onFilterValueChange(n));
      }),
      m();
  }
  if (i & 2) {
    let o = s(),
      e = W(3),
      n = W(5);
    c('contentTemplate', e)('extraTemplate', n)(
      'customFilter',
      o.nzCustomFilter,
    )('filterMultiple', o.nzFilterMultiple)('listOfFilter', o.nzFilters);
  }
}
function dl(i, t) {
  if ((i & 1 && Ye(0, 5), i & 2)) {
    s();
    let o = W(3);
    c('ngTemplateOutlet', o);
  }
}
function ml(i, t) {}
function hl(i, t) {
  if ((i & 1 && p(0, ml, 0, 0, 'ng-template', 5), i & 2)) {
    let o = s(),
      e = W(7),
      n = W(9);
    c('ngTemplateOutlet', o.nzShowSort ? e : n);
  }
}
function ul(i, t) {
  i & 1 && (B(0), B(1, 1));
}
function fl(i, t) {
  if ((i & 1 && _(0, 'nz-table-sorters', 7), i & 2)) {
    let o = s(),
      e = W(9);
    c('sortOrder', o.sortOrder)('sortDirections', o.sortDirections)(
      'contentTemplate',
      e,
    );
  }
}
function zl(i, t) {
  i & 1 && B(0, 2);
}
var dn = (() => {
  let t = class t {
    getNextSortDirection(e, n) {
      let a = e.indexOf(n);
      return a === e.length - 1 ? e[0] : e[a + 1];
    }
    setSortOrder(e) {
      this.sortOrderChange$.next(e);
    }
    clearSortOrder() {
      this.sortOrder !== null && this.setSortOrder(null);
    }
    onFilterValueChange(e) {
      this.nzFilterChange.emit(e),
        (this.nzFilterValue = e),
        this.updateCalcOperator();
    }
    updateCalcOperator() {
      this.calcOperatorChange$.next();
    }
    constructor(e, n, a, r) {
      (this.host = e),
        (this.cdr = n),
        (this.ngZone = a),
        (this.destroy$ = r),
        (this.manualClickOrder$ = new I()),
        (this.calcOperatorChange$ = new I()),
        (this.nzFilterValue = null),
        (this.sortOrder = null),
        (this.sortDirections = ['ascend', 'descend', null]),
        (this.sortOrderChange$ = new I()),
        (this.isNzShowSortChanged = !1),
        (this.isNzShowFilterChanged = !1),
        (this.nzFilterMultiple = !0),
        (this.nzSortOrder = null),
        (this.nzSortPriority = !1),
        (this.nzSortDirections = ['ascend', 'descend', null]),
        (this.nzFilters = []),
        (this.nzSortFn = null),
        (this.nzFilterFn = null),
        (this.nzShowSort = !1),
        (this.nzShowFilter = !1),
        (this.nzCustomFilter = !1),
        (this.nzCheckedChange = new b()),
        (this.nzSortOrderChange = new b()),
        (this.nzFilterChange = new b());
    }
    ngOnInit() {
      this.ngZone.runOutsideAngular(() =>
        re(this.host.nativeElement, 'click')
          .pipe(
            Le(() => this.nzShowSort),
            f(this.destroy$),
          )
          .subscribe(() => {
            let e = this.getNextSortDirection(
              this.sortDirections,
              this.sortOrder,
            );
            this.ngZone.run(() => {
              this.setSortOrder(e), this.manualClickOrder$.next(this);
            });
          }),
      ),
        this.sortOrderChange$.pipe(f(this.destroy$)).subscribe(e => {
          this.sortOrder !== e &&
            ((this.sortOrder = e), this.nzSortOrderChange.emit(e)),
            this.updateCalcOperator(),
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(e) {
      let {
        nzSortDirections: n,
        nzFilters: a,
        nzSortOrder: r,
        nzSortFn: h,
        nzFilterFn: v,
        nzSortPriority: S,
        nzFilterMultiple: R,
        nzShowSort: Q,
        nzShowFilter: N,
      } = e;
      n &&
        this.nzSortDirections &&
        this.nzSortDirections.length &&
        (this.sortDirections = this.nzSortDirections),
        r &&
          ((this.sortOrder = this.nzSortOrder),
          this.setSortOrder(this.nzSortOrder)),
        Q && (this.isNzShowSortChanged = !0),
        N && (this.isNzShowFilterChanged = !0);
      let _e = Be => Be && Be.firstChange && Be.currentValue !== void 0;
      if (
        ((_e(r) || _e(h)) &&
          !this.isNzShowSortChanged &&
          (this.nzShowSort = !0),
        _e(a) && !this.isNzShowFilterChanged && (this.nzShowFilter = !0),
        (a || R) && this.nzShowFilter)
      ) {
        let Be = this.nzFilters.filter(Je => Je.byDefault).map(Je => Je.value);
        this.nzFilterValue = this.nzFilterMultiple ? Be : Be[0] || null;
      }
      (h || v || S || a) && this.updateCalcOperator();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(U), u(X), u(ae));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [
        ['th', 'nzColumnKey', ''],
        ['th', 'nzSortFn', ''],
        ['th', 'nzSortOrder', ''],
        ['th', 'nzFilters', ''],
        ['th', 'nzShowSort', ''],
        ['th', 'nzShowFilter', ''],
        ['th', 'nzCustomFilter', ''],
      ],
      hostVars: 4,
      hostBindings: function (n, a) {
        n & 2 &&
          D('ant-table-column-has-sorters', a.nzShowSort)(
            'ant-table-column-sort',
            a.sortOrder === 'descend' || a.sortOrder === 'ascend',
          );
      },
      inputs: {
        nzColumnKey: 'nzColumnKey',
        nzFilterMultiple: 'nzFilterMultiple',
        nzSortOrder: 'nzSortOrder',
        nzSortPriority: 'nzSortPriority',
        nzSortDirections: 'nzSortDirections',
        nzFilters: 'nzFilters',
        nzSortFn: 'nzSortFn',
        nzFilterFn: 'nzFilterFn',
        nzShowSort: [2, 'nzShowSort', 'nzShowSort', T],
        nzShowFilter: [2, 'nzShowFilter', 'nzShowFilter', T],
        nzCustomFilter: [2, 'nzCustomFilter', 'nzCustomFilter', T],
      },
      outputs: {
        nzCheckedChange: 'nzCheckedChange',
        nzSortOrderChange: 'nzSortOrderChange',
        nzFilterChange: 'nzFilterChange',
      },
      standalone: !0,
      features: [oe([ae]), L, F, C],
      attrs: sl,
      ngContentSelectors: cl,
      decls: 10,
      vars: 1,
      consts: [
        ['notFilterTemplate', ''],
        ['extraTemplate', ''],
        ['sortTemplate', ''],
        ['contentTemplate', ''],
        [
          3,
          'contentTemplate',
          'extraTemplate',
          'customFilter',
          'filterMultiple',
          'listOfFilter',
        ],
        [3, 'ngTemplateOutlet'],
        [
          3,
          'filterChange',
          'contentTemplate',
          'extraTemplate',
          'customFilter',
          'filterMultiple',
          'listOfFilter',
        ],
        [3, 'sortOrder', 'sortDirections', 'contentTemplate'],
      ],
      template: function (n, a) {
        n & 1 &&
          (j(ll),
          p(0, pl, 1, 5, 'nz-table-filter', 4)(1, dl, 1, 1, 'ng-container', 5)(
            2,
            hl,
            1,
            1,
            'ng-template',
            null,
            0,
            te,
          )(4, ul, 2, 0, 'ng-template', null, 1, te)(
            6,
            fl,
            1,
            3,
            'ng-template',
            null,
            2,
            te,
          )(8, zl, 1, 0, 'ng-template', null, 3, te)),
          n & 2 && z(a.nzShowFilter || a.nzCustomFilter ? 0 : 1);
      },
      dependencies: [pn, A, Ji],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var gl = ['contentTemplate'],
  Cl = ['*'];
function _l(i, t) {
  i & 1 && B(0);
}
function Sl(i, t) {}
function vl(i, t) {
  if ((i & 1 && p(0, Sl, 0, 0, 'ng-template', 1), i & 2)) {
    s();
    let o = W(1);
    c('ngTemplateOutlet', o);
  }
}
var MC = (() => {
  let t = class t {
    constructor(e, n) {
      (this.elementRef = e),
        (this.renderer = n),
        (this.destroy$ = new I()),
        (this.isInsideTable = !1),
        (this.nzSortOrderChange = new b()),
        (this.nzTableStyleService = H(Se, { optional: !0 })),
        (this.nzTableDataService = H(Ge, { optional: !0 })),
        (this.isInsideTable = !!this.nzTableStyleService);
    }
    ngOnInit() {
      this.nzTableStyleService &&
        this.nzTableStyleService.setTheadTemplate(this.templateRef);
    }
    ngAfterContentInit() {
      if (this.nzTableStyleService) {
        let e = this.listOfNzTrDirective.changes.pipe(
            se(this.listOfNzTrDirective),
            ee(h => h && h.first),
          ),
          n = e.pipe(
            le(h => (h ? h.listOfColumnsChanges$ : It)),
            f(this.destroy$),
          );
        n.subscribe(h => this.nzTableStyleService.setListOfTh(h)),
          this.nzTableStyleService.enableAutoMeasure$
            .pipe(le(h => (h ? n : Nt([]))))
            .pipe(f(this.destroy$))
            .subscribe(h => this.nzTableStyleService.setListOfMeasureColumn(h));
        let a = e.pipe(
            le(h => (h ? h.listOfFixedLeftColumnChanges$ : It)),
            f(this.destroy$),
          ),
          r = e.pipe(
            le(h => (h ? h.listOfFixedRightColumnChanges$ : It)),
            f(this.destroy$),
          );
        a.subscribe(h => {
          this.nzTableStyleService.setHasFixLeft(h.length !== 0);
        }),
          r.subscribe(h => {
            this.nzTableStyleService.setHasFixRight(h.length !== 0);
          });
      }
      if (this.nzTableDataService) {
        let e = this.listOfNzThAddOnComponent.changes.pipe(
          se(this.listOfNzThAddOnComponent),
        );
        e
          .pipe(
            le(() =>
              Te(
                ...this.listOfNzThAddOnComponent.map(r => r.manualClickOrder$),
              ),
            ),
            f(this.destroy$),
          )
          .subscribe(r => {
            let h = { key: r.nzColumnKey, value: r.sortOrder };
            this.nzSortOrderChange.emit(h),
              r.nzSortFn &&
                r.nzSortPriority === !1 &&
                this.listOfNzThAddOnComponent
                  .filter(v => v !== r)
                  .forEach(v => v.clearSortOrder());
          }),
          e
            .pipe(
              le(r =>
                Te(e, ...r.map(h => h.calcOperatorChange$)).pipe(_t(() => e)),
              ),
              ee(r =>
                r
                  .filter(h => !!h.nzSortFn || !!h.nzFilterFn)
                  .map(h => {
                    let {
                      nzSortFn: v,
                      sortOrder: S,
                      nzFilterFn: R,
                      nzFilterValue: Q,
                      nzSortPriority: N,
                      nzColumnKey: _e,
                    } = h;
                    return {
                      key: _e,
                      sortFn: v,
                      sortPriority: N,
                      sortOrder: S,
                      filterFn: R,
                      filterValue: Q,
                    };
                  }),
              ),
              St(0),
              f(this.destroy$),
            )
            .subscribe(r => {
              this.nzTableDataService?.listOfCalcOperator$.next(r);
            });
      }
    }
    ngAfterViewInit() {
      this.nzTableStyleService &&
        this.renderer.removeChild(
          this.renderer.parentNode(this.elementRef.nativeElement),
          this.elementRef.nativeElement,
        );
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(V), u(de));
  }),
    (t.ɵcmp = g({
      type: t,
      selectors: [['thead', 9, 'ant-table-thead']],
      contentQueries: function (n, a, r) {
        if ((n & 1 && (Oe(r, Zi, 5), Oe(r, dn, 5)), n & 2)) {
          let h;
          k((h = M())) && (a.listOfNzTrDirective = h),
            k((h = M())) && (a.listOfNzThAddOnComponent = h);
        }
      },
      viewQuery: function (n, a) {
        if ((n & 1 && $(gl, 7), n & 2)) {
          let r;
          k((r = M())) && (a.templateRef = r.first);
        }
      },
      outputs: { nzSortOrderChange: 'nzSortOrderChange' },
      standalone: !0,
      features: [C],
      ngContentSelectors: Cl,
      decls: 3,
      vars: 1,
      consts: [
        ['contentTemplate', ''],
        [3, 'ngTemplateOutlet'],
      ],
      template: function (n, a) {
        n & 1 &&
          (j(),
          p(0, _l, 1, 0, 'ng-template', null, 0, te)(2, vl, 1, 1, null, 1)),
          n & 2 && (l(2), z(a.isInsideTable ? -1 : 2));
      },
      dependencies: [A],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var $_ = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = xe({ type: t })),
    (t.ɵinj = ve({ imports: [Fe, dn, Ei, sn, wt, pn, rn, Ri] }));
  let i = t;
  return i;
})();
export {
  zi as a,
  Sn as b,
  Al as c,
  Yt as d,
  bc as e,
  dt as f,
  en as g,
  Kt as h,
  $e as i,
  Di as j,
  Me as k,
  Ni as l,
  Re as m,
  ft as n,
  Zu as o,
  Ei as p,
  $i as q,
  Ri as r,
  sn as s,
  Fe as t,
  Zi as u,
  MC as v,
  $_ as w,
};
