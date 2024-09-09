import { a as mn, b as pn } from './chunk-L3CBC6SQ.js';
import { a as fn, b as un } from './chunk-L2DU7FT6.js';
import { f as Qe, g as Ge, m as Ke, n as zn } from './chunk-5VUTOZIQ.js';
import { a as dn, b as hn } from './chunk-WDME6LND.js';
import {
  $a as y,
  Ca as k,
  Cd as Gt,
  Ce as an,
  D as Dt,
  Da as h,
  Dd as Kt,
  Eb as Be,
  Fa as Pe,
  G as wt,
  Ga as p,
  Gd as qt,
  Ha as U,
  Hd as Xt,
  Ia as M,
  Ja as Lt,
  Jb as O,
  Ka as Mt,
  Kb as x,
  La as At,
  Lb as Rt,
  M as Ie,
  N as Le,
  Na as f,
  O as T,
  Ob as jt,
  Pa as R,
  Pb as He,
  Pc as Bt,
  Qa as j,
  Qc as oe,
  R as bt,
  Ra as V,
  Rb as Ue,
  Rc as ae,
  Rd as Ze,
  Re as rn,
  Sa as c,
  Sb as K,
  T as Me,
  Ta as d,
  Te as sn,
  U as ne,
  Ua as g,
  Ue as ln,
  Va as $,
  W as ve,
  Wa as B,
  We as cn,
  X as W,
  Xa as Re,
  Xb as Vt,
  Y as C,
  Ya as H,
  Z as ie,
  Zd as Jt,
  _ as Ae,
  _a as je,
  _c as re,
  a as Y,
  ab as kt,
  ac as $t,
  bb as l,
  bd as X,
  cb as N,
  cd as J,
  ce as We,
  db as v,
  dd as Ht,
  ea as E,
  ed as Ut,
  f as St,
  fd as Zt,
  g as F,
  gb as Z,
  h as yt,
  ha as b,
  hb as G,
  hd as Wt,
  ia as I,
  ib as D,
  ie as Yt,
  jb as w,
  je as en,
  kb as se,
  l as ee,
  la as ke,
  lb as S,
  mb as A,
  n as pe,
  na as P,
  nb as Se,
  nc as q,
  oa as Oe,
  ob as Ve,
  p as xt,
  pd as de,
  pe as tn,
  qa as Q,
  qb as Ot,
  r as Tt,
  rb as Ft,
  rd as he,
  sb as Et,
  se as nn,
  t as Nt,
  tb as $e,
  u as te,
  ua as It,
  ub as _,
  va as r,
  wa as u,
  wb as le,
  wc as mt,
  x as be,
  xa as Fe,
  xb as ct,
  xd as Qt,
  xe as on,
  ya as Ee,
  yc as ye,
  z as lt,
  zb as Pt,
} from './chunk-55QWLPSH.js';
function On(e, t) {
  if ((e & 1 && (c(0, 'p', 3), S(1), d()), e & 2)) {
    let a = t.$implicit,
      o = l(2).$index,
      n = l(2);
    M('current', a === n.countArray[o]), r(), Se(' ', a, ' ');
  }
}
function Fn(e, t) {
  if ((e & 1 && j(0, On, 2, 3, 'p', 2, R), e & 2)) {
    let a = l(3);
    V(a.countSingleArray);
  }
}
function En(e, t) {
  if ((e & 1 && (c(0, 'span', 1), h(1, Fn, 2, 0), d()), e & 2)) {
    let a = t.$index,
      o = l(2);
    U('transform', 'translateY(' + -o.countArray[a] * 100 + '%)'),
      p('nzNoAnimation', o.noAnimation),
      r(),
      f(!o.nzDot && o.countArray[a] !== void 0 ? 1 : -1);
  }
}
function Pn(e, t) {
  if ((e & 1 && j(0, En, 2, 4, 'span', 0, R), e & 2)) {
    let a = l();
    V(a.maxNumberArray);
  }
}
function Rn(e, t) {
  if ((e & 1 && S(0), e & 2)) {
    let a = l();
    Se(' ', a.nzOverflowCount, '+ ');
  }
}
var gn = (() => {
  let t = class t {
    constructor() {
      (this.nzStyle = null),
        (this.nzDot = !1),
        (this.nzOverflowCount = 99),
        (this.disableAnimation = !1),
        (this.noAnimation = !1),
        (this.nzSize = 'default'),
        (this.maxNumberArray = []),
        (this.countArray = []),
        (this.count = 0),
        (this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
    generateMaxNumberArray() {
      this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    ngOnInit() {
      this.generateMaxNumberArray();
    }
    ngOnChanges(o) {
      let { nzOverflowCount: n, nzCount: i } = o;
      i &&
        typeof i.currentValue == 'number' &&
        ((this.count = Math.max(0, i.currentValue)),
        (this.countArray = this.count
          .toString()
          .split('')
          .map(s => +s))),
        n && this.generateMaxNumberArray();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-badge-sup']],
      hostAttrs: [1, 'ant-scroll-number'],
      hostVars: 17,
      hostBindings: function (n, i) {
        n & 2 &&
          (je('@.disabled', i.disableAnimation)('@zoomBadgeMotion', void 0),
          Pe('title', i.nzTitle === null ? '' : i.nzTitle || i.nzCount),
          Lt(i.nzStyle),
          U('right', i.nzOffset && i.nzOffset[0] ? -i.nzOffset[0] : null, 'px')(
            'margin-top',
            i.nzOffset && i.nzOffset[1] ? i.nzOffset[1] : null,
            'px',
          ),
          M('ant-badge-count', !i.nzDot)(
            'ant-badge-count-sm',
            i.nzSize === 'small',
          )('ant-badge-dot', i.nzDot)(
            'ant-badge-multiple-words',
            i.countArray.length >= 2,
          ));
      },
      inputs: {
        nzOffset: 'nzOffset',
        nzTitle: 'nzTitle',
        nzStyle: 'nzStyle',
        nzDot: 'nzDot',
        nzOverflowCount: [2, 'nzOverflowCount', 'nzOverflowCount', Rt],
        disableAnimation: 'disableAnimation',
        nzCount: 'nzCount',
        noAnimation: 'noAnimation',
        nzSize: 'nzSize',
      },
      exportAs: ['nzBadgeSup'],
      standalone: !0,
      features: [k, E, _],
      decls: 2,
      vars: 1,
      consts: [
        [1, 'ant-scroll-number-only', 3, 'nzNoAnimation', 'transform'],
        [1, 'ant-scroll-number-only', 3, 'nzNoAnimation'],
        [1, 'ant-scroll-number-only-unit', 3, 'current'],
        [1, 'ant-scroll-number-only-unit'],
      ],
      template: function (n, i) {
        n & 1 && h(0, Pn, 2, 0)(1, Rn, 1, 1),
          n & 2 && f(i.count <= i.nzOverflowCount ? 0 : 1);
      },
      dependencies: [Ze],
      encapsulation: 2,
      data: { animation: [We] },
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var pt = [
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
var jn = ['*'];
function Vn(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(2);
    r(), A(a.nzText);
  }
}
function $n(e, t) {
  if (
    (e & 1 &&
      (g(0, 'span', 1),
      c(1, 'span', 2),
      h(2, Vn, 2, 1, 'ng-container', 0),
      d()),
    e & 2)
  ) {
    let a = l();
    At(
      'ant-badge-status-dot ant-badge-status-',
      a.nzStatus || a.presetColor,
      '',
    ),
      U('background', !a.presetColor && a.nzColor),
      p('ngStyle', a.nzStyle),
      r(2),
      p('nzStringTemplateOutlet', a.nzText);
  }
}
function Bn(e, t) {
  if ((e & 1 && g(0, 'nz-badge-sup', 3), e & 2)) {
    let a = l(2);
    p('nzOffset', a.nzOffset)('nzSize', a.nzSize)('nzTitle', a.nzTitle)(
      'nzStyle',
      a.nzStyle,
    )('nzDot', a.nzDot)('nzOverflowCount', a.nzOverflowCount)(
      'disableAnimation',
      !!(
        a.nzStandalone ||
        a.nzStatus ||
        a.nzColor ||
        (a.noAnimation != null && a.noAnimation.nzNoAnimation)
      ),
    )('nzCount', a.nzCount)(
      'noAnimation',
      !!(a.noAnimation != null && a.noAnimation.nzNoAnimation),
    );
  }
}
function Hn(e, t) {
  if ((e & 1 && ($(0), h(1, Bn, 1, 9, 'nz-badge-sup', 3), B()), e & 2)) {
    let a = l();
    r(), f(a.showSup ? 1 : -1);
  }
}
var Un = 'badge',
  fe = class fe {
    constructor(t, a, o, n, i) {
      (this.nzConfigService = t),
        (this.renderer = a),
        (this.cdr = o),
        (this.elementRef = n),
        (this.directionality = i),
        (this._nzModuleName = Un),
        (this.showSup = !1),
        (this.presetColor = null),
        (this.dir = 'ltr'),
        (this.destroy$ = new F()),
        (this.nzShowZero = !1),
        (this.nzShowDot = !0),
        (this.nzStandalone = !1),
        (this.nzDot = !1),
        (this.nzOverflowCount = 99),
        (this.nzColor = void 0),
        (this.nzStyle = null),
        (this.nzText = null),
        (this.nzSize = 'default'),
        (this.noAnimation = W(Ze, { host: !0, optional: !0 }));
    }
    ngOnInit() {
      this.directionality.change?.pipe(T(this.destroy$)).subscribe(t => {
        (this.dir = t), this.prepareBadgeForRtl(), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value),
        this.prepareBadgeForRtl();
    }
    ngOnChanges(t) {
      let { nzColor: a, nzShowDot: o, nzDot: n, nzCount: i, nzShowZero: s } = t;
      a &&
        (this.presetColor =
          this.nzColor && pt.indexOf(this.nzColor) !== -1
            ? this.nzColor
            : null),
        (o || n || i || s) &&
          (this.showSup =
            (this.nzShowDot && this.nzDot) ||
            (typeof this.nzCount == 'number' && this.nzCount > 0) ||
            (typeof this.nzCount == 'number' &&
              this.nzCount <= 0 &&
              this.nzShowZero));
    }
    prepareBadgeForRtl() {
      this.isRtlLayout
        ? this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl')
        : this.renderer.removeClass(
            this.elementRef.nativeElement,
            'ant-badge-rtl',
          );
    }
    get isRtlLayout() {
      return this.dir === 'rtl';
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
(fe.ɵfac = function (a) {
  return new (a || fe)(u(oe), u(Ee), u(O), u(Q), u(q));
}),
  (fe.ɵcmp = C({
    type: fe,
    selectors: [['nz-badge']],
    hostAttrs: [1, 'ant-badge'],
    hostVars: 4,
    hostBindings: function (a, o) {
      a & 2 &&
        M('ant-badge-status', o.nzStatus)(
          'ant-badge-not-a-wrapper',
          !!(o.nzStandalone || o.nzStatus || o.nzColor),
        );
    },
    inputs: {
      nzShowZero: [2, 'nzShowZero', 'nzShowZero', x],
      nzShowDot: [2, 'nzShowDot', 'nzShowDot', x],
      nzStandalone: [2, 'nzStandalone', 'nzStandalone', x],
      nzDot: [2, 'nzDot', 'nzDot', x],
      nzOverflowCount: 'nzOverflowCount',
      nzColor: 'nzColor',
      nzStyle: 'nzStyle',
      nzText: 'nzText',
      nzTitle: 'nzTitle',
      nzStatus: 'nzStatus',
      nzCount: 'nzCount',
      nzOffset: 'nzOffset',
      nzSize: 'nzSize',
    },
    exportAs: ['nzBadge'],
    standalone: !0,
    features: [k, E, _],
    ngContentSelectors: jn,
    decls: 3,
    vars: 2,
    consts: [
      [4, 'nzStringTemplateOutlet'],
      [3, 'ngStyle'],
      [1, 'ant-badge-status-text'],
      [
        3,
        'nzOffset',
        'nzSize',
        'nzTitle',
        'nzStyle',
        'nzDot',
        'nzOverflowCount',
        'disableAnimation',
        'nzCount',
        'noAnimation',
      ],
    ],
    template: function (a, o) {
      a & 1 && (N(), h(0, $n, 3, 7), v(1), h(2, Hn, 2, 1, 'ng-container', 0)),
        a & 2 &&
          (f(o.nzStatus || o.nzColor ? 0 : -1),
          r(2),
          p('nzStringTemplateOutlet', o.nzCount));
    },
    dependencies: [Ue, gn, J, X],
    encapsulation: 2,
    data: { animation: [We] },
    changeDetection: 0,
  }));
var qe = fe;
ee([ae()], qe.prototype, 'nzOverflowCount', void 0);
ee([ae()], qe.prototype, 'nzColor', void 0);
var fa = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = ie({ type: t })),
    (t.ɵinj = ne({}));
  let e = t;
  return e;
})();
var Na = (() => {
  class e {
    #e = W(Vt);
    getTags() {
      return this.#e.get('/tags');
    }
    createTag(a) {
      return this.#e.post('/tags/create', { tag: a });
    }
    editTag(a, o) {
      return this.#e.put(`/tags/edit/${a}`, { tag: o });
    }
    deleteTag(a) {
      return this.#e.delete(`/tags/delete/${a}`);
    }
    static ɵfac = function (o) {
      return new (o || e)();
    };
    static ɵprov = Me({ token: e, factory: e.ɵfac, providedIn: 'root' });
  }
  return e;
})();
var Zn = ['*'],
  Cn = (() => {
    let t = class t {
      constructor() {
        (this.nzScaleStep = null), (this.images = []);
      }
      addImage(o) {
        this.images.push(o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-image-group']],
        inputs: { nzScaleStep: 'nzScaleStep' },
        exportAs: ['nzImageGroup'],
        standalone: !0,
        features: [_],
        ngContentSelectors: Zn,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), v(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })();
var Ye = 'image';
function vn(e) {
  let t = {};
  return (
    e.width <= e.clientWidth &&
      e.height <= e.clientHeight &&
      (t = { x: 0, y: 0 }),
    (e.width > e.clientWidth || e.height > e.clientHeight) &&
      (t = {
        x: _n(e.left, e.width, e.clientWidth),
        y: _n(e.top, e.height, e.clientHeight),
      }),
    t
  );
}
function Sn(e) {
  let t = e.getBoundingClientRect(),
    a = document.documentElement;
  return {
    left:
      t.left +
      (window.pageXOffset || a.scrollLeft) -
      (a.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.pageYOffset || a.scrollTop) -
      (a.clientTop || document.body.clientTop || 0),
  };
}
function yn() {
  let e = document.documentElement.clientWidth,
    t = window.innerHeight || document.documentElement.clientHeight;
  return { width: e, height: t };
}
function _n(e, t, a) {
  let o = e + t,
    n = (t - a) / 2,
    i = null;
  return (
    t > a
      ? (e > 0 && (i = n), e < 0 && o < a && (i = -n))
      : (e < 0 || o > a) && (i = e < 0 ? n : -n),
    i
  );
}
var ce = class {
  constructor() {
    (this.nzKeyboard = !0),
      (this.nzNoAnimation = !1),
      (this.nzMaskClosable = !0),
      (this.nzCloseOnNavigation = !0);
  }
};
var Gn = ['imgRef'],
  Kn = ['imagePreviewWrapper'];
function qn(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'div', 13),
      y('click', function (n) {
        b(a);
        let i = l();
        return I(i.onSwitchLeft(n));
      }),
      g(1, 'span', 14),
      d(),
      c(2, 'div', 15),
      y('click', function (n) {
        b(a);
        let i = l();
        return I(i.onSwitchRight(n));
      }),
      g(3, 'span', 16),
      d();
  }
  if (e & 2) {
    let a = l();
    M('ant-image-preview-switch-left-disabled', a.index <= 0),
      r(2),
      M(
        'ant-image-preview-switch-right-disabled',
        a.index >= a.images.length - 1,
      );
  }
}
function Xn(e, t) {
  if ((e & 1 && (c(0, 'li', 5), S(1), d()), e & 2)) {
    let a = l();
    r(), Ve('', a.index + 1, ' / ', a.images.length, '');
  }
}
function Jn(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'li', 17),
      y('click', function () {
        let n = b(a).$implicit;
        return I(n.onClick());
      }),
      g(1, 'span', 18),
      d();
  }
  if (e & 2) {
    let a,
      o = t.$implicit,
      n = l();
    M(
      'ant-image-preview-operations-operation-disabled',
      n.zoomOutDisabled && o.type === 'zoomOut',
    ),
      r(),
      p('nzType', o.icon)(
        'nzRotate',
        (a = o.rotate) !== null && a !== void 0 ? a : 0,
      );
  }
}
function Yn(e, t) {
  if ((e & 1 && g(0, 'img', 20, 1), e & 2)) {
    let a = l().$implicit,
      o = l();
    U('width', a.width)('height', a.height)(
      'transform',
      o.previewImageTransform,
    ),
      Pe('src', o.sanitizerResourceUrl(a.src), It)('srcset', a.srcset)(
        'alt',
        a.alt,
      );
  }
}
function ei(e, t) {
  if ((e & 1 && h(0, Yn, 2, 9, 'img', 19), e & 2)) {
    let a = t.$index,
      o = l();
    f(a === o.index ? 0 : -1);
  }
}
var xn = { x: 0, y: 0 },
  et = 0.5,
  ti = 1,
  ni = 0,
  Nn = (() => {
    let t = class t {
      get animationDisabled() {
        return this.config.nzNoAnimation ?? !1;
      }
      get maskClosable() {
        let o = this.nzConfigService.getConfigForComponent(Ye) || {};
        return this.config.nzMaskClosable ?? o.nzMaskClosable ?? !0;
      }
      constructor(o, n, i, s, m, z) {
        (this.ngZone = o),
          (this.cdr = n),
          (this.nzConfigService = i),
          (this.config = s),
          (this.destroy$ = m),
          (this.sanitizer = z),
          (this._defaultNzZoom = ti),
          (this._defaultNzScaleStep = et),
          (this._defaultNzRotate = ni),
          (this.images = []),
          (this.index = 0),
          (this.isDragging = !1),
          (this.visible = !0),
          (this.animationStateChanged = new P()),
          (this.scaleStepMap = new Map()),
          (this.previewImageTransform = ''),
          (this.previewImageWrapperTransform = ''),
          (this.operations = [
            {
              icon: 'close',
              onClick: () => {
                this.onClose();
              },
              type: 'close',
            },
            {
              icon: 'zoom-in',
              onClick: () => {
                this.onZoomIn();
              },
              type: 'zoomIn',
            },
            {
              icon: 'zoom-out',
              onClick: () => {
                this.onZoomOut();
              },
              type: 'zoomOut',
            },
            {
              icon: 'rotate-right',
              onClick: () => {
                this.onRotateRight();
              },
              type: 'rotateRight',
            },
            {
              icon: 'rotate-left',
              onClick: () => {
                this.onRotateLeft();
              },
              type: 'rotateLeft',
            },
            {
              icon: 'swap',
              onClick: () => {
                this.onHorizontalFlip();
              },
              type: 'flipHorizontally',
            },
            {
              icon: 'swap',
              onClick: () => {
                this.onVerticalFlip();
              },
              type: 'flipVertically',
              rotate: 90,
            },
          ]),
          (this.zoomOutDisabled = !1),
          (this.position = Y({}, xn)),
          (this.closeClick = new P()),
          (this.zoom = this.config.nzZoom ?? this._defaultNzZoom),
          (this.scaleStep =
            this.config.nzScaleStep ?? this._defaultNzScaleStep),
          (this.rotate = this.config.nzRotate ?? this._defaultNzRotate),
          (this.flipHorizontally = this.config.nzFlipHorizontally ?? !1),
          (this.flipVertically = this.config.nzFlipVertically ?? !1),
          this.updateZoomOutDisabled(),
          this.updatePreviewImageTransform(),
          this.updatePreviewImageWrapperTransform();
      }
      ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
          te(this.imagePreviewWrapper.nativeElement, 'mousedown')
            .pipe(T(this.destroy$))
            .subscribe(() => {
              this.isDragging = !0;
            }),
            te(this.imagePreviewWrapper.nativeElement, 'wheel')
              .pipe(T(this.destroy$))
              .subscribe(o => {
                this.ngZone.run(() => this.wheelZoomEventHandler(o));
              });
        });
      }
      setImages(o, n) {
        n && (this.scaleStepMap = n), (this.images = o), this.markForCheck();
      }
      switchTo(o) {
        (this.index = o), this.markForCheck();
      }
      next() {
        this.index < this.images.length - 1 &&
          (this.reset(),
          this.index++,
          this.updatePreviewImageTransform(),
          this.updatePreviewImageWrapperTransform(),
          this.updateZoomOutDisabled(),
          this.markForCheck());
      }
      prev() {
        this.index > 0 &&
          (this.reset(),
          this.index--,
          this.updatePreviewImageTransform(),
          this.updatePreviewImageWrapperTransform(),
          this.updateZoomOutDisabled(),
          this.markForCheck());
      }
      markForCheck() {
        this.cdr.markForCheck();
      }
      onClose() {
        (this.visible = !1), this.closeClick.emit();
      }
      onZoomIn() {
        let o =
          this.scaleStepMap.get(
            this.images[this.index].src ?? this.images[this.index].srcset,
          ) ?? this.scaleStep;
        (this.zoom += o),
          this.updatePreviewImageTransform(),
          this.updateZoomOutDisabled();
      }
      onZoomOut() {
        if (this.zoom > 1) {
          let o =
            this.scaleStepMap.get(
              this.images[this.index].src ?? this.images[this.index].srcset,
            ) ?? this.scaleStep;
          (this.zoom -= o),
            this.updatePreviewImageTransform(),
            this.updateZoomOutDisabled(),
            this.zoom <= 1 && this.reCenterImage();
        }
      }
      onRotateRight() {
        (this.rotate += 90), this.updatePreviewImageTransform();
      }
      onRotateLeft() {
        (this.rotate -= 90), this.updatePreviewImageTransform();
      }
      onSwitchLeft(o) {
        o.preventDefault(), o.stopPropagation(), this.prev();
      }
      onSwitchRight(o) {
        o.preventDefault(), o.stopPropagation(), this.next();
      }
      onHorizontalFlip() {
        (this.flipHorizontally = !this.flipHorizontally),
          this.updatePreviewImageTransform();
      }
      onVerticalFlip() {
        (this.flipVertically = !this.flipVertically),
          this.updatePreviewImageTransform();
      }
      wheelZoomEventHandler(o) {
        o.preventDefault(),
          o.stopPropagation(),
          this.handlerImageTransformationWhileZoomingWithMouse(o, o.deltaY),
          this.handleImageScaleWhileZoomingWithMouse(o.deltaY),
          this.updatePreviewImageWrapperTransform(),
          this.updatePreviewImageTransform(),
          this.markForCheck();
      }
      onAnimationStart(o) {
        this.animationStateChanged.emit(o);
      }
      onAnimationDone(o) {
        this.animationStateChanged.emit(o);
      }
      onDragEnd(o) {
        this.isDragging = !1;
        let n = this.imageRef.nativeElement.offsetWidth * this.zoom,
          i = this.imageRef.nativeElement.offsetHeight * this.zoom,
          { left: s, top: m } = Sn(this.imageRef.nativeElement),
          { width: z, height: me } = yn(),
          we = this.rotate % 180 !== 0,
          _e = vn({
            width: we ? i : n,
            height: we ? n : i,
            left: s,
            top: m,
            clientWidth: z,
            clientHeight: me,
          });
        ye(_e.x) || ye(_e.y)
          ? (this.position = Y(Y({}, this.position), _e))
          : !ye(_e.x) &&
            !ye(_e.y) &&
            (this.position = {
              x: o.source.getFreeDragPosition().x,
              y: o.source.getFreeDragPosition().y,
            });
      }
      sanitizerResourceUrl(o) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(o);
      }
      updatePreviewImageTransform() {
        this.previewImageTransform = `scale3d(${this.zoom * (this.flipHorizontally ? -1 : 1)}, ${this.zoom * (this.flipVertically ? -1 : 1)}, 1) rotate(${this.rotate}deg)`;
      }
      updatePreviewImageWrapperTransform() {
        this.previewImageWrapperTransform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
      }
      updateZoomOutDisabled() {
        this.zoomOutDisabled = this.zoom <= 1;
      }
      handlerImageTransformationWhileZoomingWithMouse(o, n) {
        let i,
          s = this.imageRef.nativeElement,
          z = getComputedStyle(s).transform.match(/matrix.*\((.+)\)/);
        z ? (i = +z[1].split(', ')[0]) : (i = this.zoom);
        let me = (o.clientX - s.getBoundingClientRect().x) / i,
          we = (o.clientY - s.getBoundingClientRect().y) / i,
          Ce = n < 0 ? this.scaleStep / 2 : -this.scaleStep / 2;
        (this.position.x += -me * Ce * 2 + s.offsetWidth * Ce),
          (this.position.y += -we * Ce * 2 + s.offsetHeight * Ce);
      }
      handleImageScaleWhileZoomingWithMouse(o) {
        this.isZoomedInWithMouseWheel(o) ? this.onZoomIn() : this.onZoomOut(),
          this.zoom <= 1 && this.reCenterImage();
      }
      isZoomedInWithMouseWheel(o) {
        return o < 0;
      }
      reset() {
        (this.zoom = this.config.nzZoom ?? this._defaultNzZoom),
          (this.scaleStep =
            this.config.nzScaleStep ?? this._defaultNzScaleStep),
          (this.rotate = this.config.nzRotate ?? this._defaultNzRotate),
          (this.flipHorizontally = !1),
          (this.flipVertically = !1),
          this.reCenterImage();
      }
      reCenterImage() {
        this.position = Y({}, xn);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(Oe), u(O), u(oe), u(ce), u(re), u($t));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-image-preview']],
        viewQuery: function (n, i) {
          if ((n & 1 && (G(Gn, 5), G(Kn, 7)), n & 2)) {
            let s;
            D((s = w())) && (i.imageRef = s.first),
              D((s = w())) && (i.imagePreviewWrapper = s.first);
          }
        },
        hostAttrs: [1, 'ant-image-preview-root'],
        hostVars: 6,
        hostBindings: function (n, i) {
          n & 1 &&
            kt('@fadeMotion.start', function (m) {
              return i.onAnimationStart(m);
            })('@fadeMotion.done', function (m) {
              return i.onAnimationDone(m);
            }),
            n & 2 &&
              (je('@.disabled', i.config.nzNoAnimation)(
                '@fadeMotion',
                i.visible ? 'enter' : 'leave',
              ),
              U('z-index', i.config.nzZIndex),
              M('ant-image-preview-moving', i.isDragging));
        },
        exportAs: ['nzImagePreview'],
        standalone: !0,
        features: [$e([re]), _],
        decls: 17,
        vars: 5,
        consts: [
          ['imagePreviewWrapper', ''],
          ['imgRef', ''],
          [1, 'ant-image-preview-mask'],
          [1, 'ant-image-preview-operations-wrapper'],
          [1, 'ant-image-preview-operations'],
          [1, 'ant-image-preview-operations-progress'],
          [
            1,
            'ant-image-preview-operations-operation',
            3,
            'ant-image-preview-operations-operation-disabled',
          ],
          ['tabindex', '-1', 1, 'ant-image-preview-wrap', 3, 'click'],
          ['role', 'dialog', 'aria-modal', 'true', 1, 'ant-image-preview'],
          [
            'tabindex',
            '0',
            'aria-hidden',
            'true',
            2,
            'width',
            '0',
            'height',
            '0',
            'overflow',
            'hidden',
            'outline',
            'none',
          ],
          [1, 'ant-image-preview-content'],
          [1, 'ant-image-preview-body'],
          [
            'cdkDrag',
            '',
            1,
            'ant-image-preview-img-wrapper',
            3,
            'cdkDragEnded',
            'cdkDragFreeDragPosition',
          ],
          [1, 'ant-image-preview-switch-left', 3, 'click'],
          ['nz-icon', '', 'nzType', 'left', 'nzTheme', 'outline'],
          [1, 'ant-image-preview-switch-right', 3, 'click'],
          ['nz-icon', '', 'nzType', 'right', 'nzTheme', 'outline'],
          [1, 'ant-image-preview-operations-operation', 3, 'click'],
          [
            'nz-icon',
            '',
            'nzTheme',
            'outline',
            1,
            'ant-image-preview-operations-icon',
            3,
            'nzType',
            'nzRotate',
          ],
          [
            'cdkDragHandle',
            '',
            1,
            'ant-image-preview-img',
            3,
            'width',
            'height',
            'transform',
          ],
          ['cdkDragHandle', '', 1, 'ant-image-preview-img'],
        ],
        template: function (n, i) {
          if (n & 1) {
            let s = H();
            g(0, 'div', 2),
              c(1, 'div', 3),
              h(2, qn, 4, 4),
              c(3, 'ul', 4),
              h(4, Xn, 2, 2, 'li', 5),
              j(5, Jn, 2, 4, 'li', 6, R),
              d()(),
              c(7, 'div', 7),
              y('click', function (z) {
                return (
                  b(s),
                  I(
                    i.maskClosable &&
                      z.target === z.currentTarget &&
                      i.onClose(),
                  )
                );
              }),
              c(8, 'div', 8),
              g(9, 'div', 9),
              c(10, 'div', 10)(11, 'div', 11)(12, 'div', 12, 0),
              y('cdkDragEnded', function (z) {
                return b(s), I(i.onDragEnd(z));
              }),
              j(14, ei, 1, 1, null, null, R),
              d()()(),
              g(16, 'div', 9),
              d()();
          }
          n & 2 &&
            (r(2),
            f(i.images.length > 1 ? 2 : -1),
            r(2),
            f(i.images.length > 1 ? 4 : -1),
            r(),
            V(i.operations),
            r(7),
            U('transform', i.previewImageWrapperTransform),
            p('cdkDragFreeDragPosition', i.position),
            r(2),
            V(i.images));
        },
        dependencies: [he, de, mn, pn],
        encapsulation: 2,
        data: { animation: [Jt] },
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })();
var tt = class {
  constructor(t, a, o) {
    (this.previewInstance = t),
      (this.config = a),
      (this.overlayRef = o),
      (this.destroy$ = new F()),
      o
        .keydownEvents()
        .pipe(
          lt(
            n =>
              this.config.nzKeyboard &&
              (n.keyCode === 27 || n.keyCode === 37 || n.keyCode === 39) &&
              !Gt(n),
          ),
        )
        .subscribe(n => {
          n.preventDefault(),
            n.keyCode === 27 && t.onClose(),
            n.keyCode === 37 && this.prev(),
            n.keyCode === 39 && this.next();
        }),
      o.detachments().subscribe(() => {
        this.overlayRef.dispose();
      }),
      t.closeClick
        .pipe(
          Dt(1),
          Le(() => t.animationStateChanged),
          lt(n => n.phaseName === 'done'),
          T(this.destroy$),
        )
        .subscribe(() => {
          this.close();
        });
  }
  switchTo(t) {
    this.previewInstance.switchTo(t);
  }
  next() {
    this.previewInstance.next();
  }
  prev() {
    this.previewInstance.prev();
  }
  close() {
    this.destroy$.next(), this.overlayRef.dispose();
  }
};
var nt = (() => {
  let t = class t {
    constructor(o, n, i, s) {
      (this.overlay = o),
        (this.injector = n),
        (this.nzConfigService = i),
        (this.directionality = s);
    }
    preview(o, n, i) {
      return this.display(o, n, i);
    }
    display(o, n, i) {
      let s = Y(Y({}, new ce()), n ?? {}),
        m = this.createOverlay(s),
        z = this.attachPreviewComponent(m, s);
      z.setImages(o, i);
      let me = new tt(z, s, m);
      return (z.previewRef = me), me;
    }
    attachPreviewComponent(o, n) {
      let i = ke.create({
          parent: this.injector,
          providers: [
            { provide: qt, useValue: o },
            { provide: ce, useValue: n },
          ],
        }),
        s = new Qt(Nn, null, i);
      return o.attach(s).instance;
    }
    createOverlay(o) {
      let n = this.nzConfigService.getConfigForComponent(Ye) || {},
        i = new Kt({
          scrollStrategy: this.overlay.scrollStrategies.block(),
          positionStrategy: this.overlay.position().global(),
          disposeOnNavigation:
            o.nzCloseOnNavigation ?? n.nzCloseOnNavigation ?? !0,
          direction:
            o.nzDirection || n.nzDirection || this.directionality.value,
        });
      return this.overlay.create(i);
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(ve(Xt), ve(ke), ve(oe), ve(q));
  }),
    (t.ɵprov = Me({ token: t, factory: t.ɵfac }));
  let e = t;
  return e;
})();
var oi = 'image',
  ue = class ue {
    get previewable() {
      return !this.nzDisablePreview && this.status !== 'error';
    }
    constructor(t, a, o, n, i) {
      (this.nzConfigService = t),
        (this.elementRef = a),
        (this.nzImageService = o),
        (this.cdr = n),
        (this.directionality = i),
        (this._nzModuleName = oi),
        (this.nzSrc = ''),
        (this.nzSrcset = ''),
        (this.nzDisablePreview = !1),
        (this.nzFallback = null),
        (this.nzPlaceholder = null),
        (this.nzScaleStep = null),
        (this.status = 'normal'),
        (this.backLoadDestroy$ = new F()),
        (this.destroy$ = new F()),
        (this.document = W(jt)),
        (this.parentGroup = W(Cn, { optional: !0 }));
    }
    ngOnInit() {
      this.backLoad(),
        this.parentGroup && this.parentGroup.addImage(this),
        this.directionality &&
          (this.directionality.change?.pipe(T(this.destroy$)).subscribe(t => {
            (this.dir = t), this.cdr.detectChanges();
          }),
          (this.dir = this.directionality.value));
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    onPreview() {
      if (this.previewable)
        if (this.parentGroup) {
          let t = this.parentGroup.images.filter(s => s.previewable),
            a = t.map(s => ({ src: s.nzSrc, srcset: s.nzSrcset })),
            o = t.findIndex(s => this === s),
            n = new Map();
          t.forEach(s => {
            n.set(
              s.nzSrc ?? s.nzSrcset,
              s.nzScaleStep ??
                this.parentGroup.nzScaleStep ??
                this.nzScaleStep ??
                et,
            );
          }),
            this.nzImageService
              .preview(a, { nzDirection: this.dir }, n)
              .switchTo(o);
        } else {
          let t = [{ src: this.nzSrc, srcset: this.nzSrcset }];
          this.nzImageService.preview(t, {
            nzDirection: this.dir,
            nzScaleStep: this.nzScaleStep ?? et,
          });
        }
    }
    getElement() {
      return this.elementRef;
    }
    ngOnChanges(t) {
      let { nzSrc: a } = t;
      a &&
        ((this.getElement().nativeElement.src = a.currentValue),
        this.backLoad());
    }
    backLoad() {
      (this.backLoadImage = this.document.createElement('img')),
        (this.backLoadImage.src = this.nzSrc),
        (this.backLoadImage.srcset = this.nzSrcset),
        (this.status = 'loading'),
        this.backLoadDestroy$.next(),
        this.backLoadDestroy$.complete(),
        (this.backLoadDestroy$ = new F()),
        this.backLoadImage.complete
          ? ((this.status = 'normal'),
            (this.getElement().nativeElement.src = this.nzSrc),
            (this.getElement().nativeElement.srcset = this.nzSrcset))
          : (this.nzPlaceholder
              ? ((this.getElement().nativeElement.src = this.nzPlaceholder),
                (this.getElement().nativeElement.srcset = ''))
              : ((this.getElement().nativeElement.src = this.nzSrc),
                (this.getElement().nativeElement.srcset = this.nzSrcset)),
            te(this.backLoadImage, 'load')
              .pipe(T(this.backLoadDestroy$), T(this.destroy$))
              .subscribe(() => {
                (this.status = 'normal'),
                  (this.getElement().nativeElement.src = this.nzSrc),
                  (this.getElement().nativeElement.srcset = this.nzSrcset);
              }),
            te(this.backLoadImage, 'error')
              .pipe(T(this.backLoadDestroy$), T(this.destroy$))
              .subscribe(() => {
                (this.status = 'error'),
                  this.nzFallback &&
                    ((this.getElement().nativeElement.src = this.nzFallback),
                    (this.getElement().nativeElement.srcset = ''));
              }));
    }
  };
(ue.ɵfac = function (a) {
  return new (a || ue)(u(oe), u(Q), u(nt), u(O), u(q));
}),
  (ue.ɵdir = Ae({
    type: ue,
    selectors: [['img', 'nz-image', '']],
    hostBindings: function (a, o) {
      a & 1 &&
        y('click', function () {
          return o.onPreview();
        });
    },
    inputs: {
      nzSrc: 'nzSrc',
      nzSrcset: 'nzSrcset',
      nzDisablePreview: [2, 'nzDisablePreview', 'nzDisablePreview', x],
      nzFallback: 'nzFallback',
      nzPlaceholder: 'nzPlaceholder',
      nzScaleStep: 'nzScaleStep',
    },
    exportAs: ['nzImage'],
    standalone: !0,
    features: [k, E],
  }));
var ze = ue;
ee([ae()], ze.prototype, 'nzDisablePreview', void 0);
ee([ae()], ze.prototype, 'nzFallback', void 0);
ee([ae()], ze.prototype, 'nzPlaceholder', void 0);
ee([ae()], ze.prototype, 'nzScaleStep', void 0);
var Nr = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = ie({ type: t })),
    (t.ɵinj = ne({ providers: [nt] }));
  let e = t;
  return e;
})();
var ft = ['*'];
function ai(e, t) {
  if ((e & 1 && g(0, 'nz-avatar', 1), e & 2)) {
    let a = l();
    p('nzSrc', a.nzSrc);
  }
}
function ri(e, t) {
  e & 1 && v(0);
}
var xe = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-item-meta-title']],
        exportAs: ['nzListItemMetaTitle'],
        standalone: !0,
        features: [_],
        ngContentSelectors: ft,
        decls: 2,
        vars: 0,
        consts: [[1, 'ant-list-item-meta-title']],
        template: function (n, i) {
          n & 1 && (N(), c(0, 'h4', 0), v(1), d());
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  Te = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-item-meta-description']],
        exportAs: ['nzListItemMetaDescription'],
        standalone: !0,
        features: [_],
        ngContentSelectors: ft,
        decls: 2,
        vars: 0,
        consts: [[1, 'ant-list-item-meta-description']],
        template: function (n, i) {
          n & 1 && (N(), c(0, 'div', 0), v(1), d());
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  it = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-item-meta-avatar']],
        inputs: { nzSrc: 'nzSrc' },
        exportAs: ['nzListItemMetaAvatar'],
        standalone: !0,
        features: [_],
        ngContentSelectors: ft,
        decls: 3,
        vars: 1,
        consts: [
          [1, 'ant-list-item-meta-avatar'],
          [3, 'nzSrc'],
        ],
        template: function (n, i) {
          n & 1 &&
            (N(),
            c(0, 'div', 0),
            h(1, ai, 1, 1, 'nz-avatar', 1)(2, ri, 1, 0),
            d()),
            n & 2 && (r(), f(i.nzSrc ? 1 : 2));
        },
        dependencies: [un, fn],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })();
var si = [
    [['nz-list-item-meta-avatar']],
    [['nz-list-item-meta-title']],
    [['nz-list-item-meta-description']],
  ],
  li = [
    'nz-list-item-meta-avatar',
    'nz-list-item-meta-title',
    'nz-list-item-meta-description',
  ];
function ci(e, t) {
  if ((e & 1 && g(0, 'nz-list-item-meta-avatar', 0), e & 2)) {
    let a = l();
    p('nzSrc', a.avatarStr);
  }
}
function mi(e, t) {
  if ((e & 1 && (c(0, 'nz-list-item-meta-avatar'), Re(1, 2), d()), e & 2)) {
    let a = l();
    r(), p('ngTemplateOutlet', a.avatarTpl);
  }
}
function pi(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(3);
    r(), A(a.nzTitle);
  }
}
function di(e, t) {
  if (
    (e & 1 &&
      (c(0, 'nz-list-item-meta-title'), h(1, pi, 2, 1, 'ng-container', 3), d()),
    e & 2)
  ) {
    let a = l(2);
    r(), p('nzStringTemplateOutlet', a.nzTitle);
  }
}
function hi(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(3);
    r(), A(a.nzDescription);
  }
}
function fi(e, t) {
  if (
    (e & 1 &&
      (c(0, 'nz-list-item-meta-description'),
      h(1, hi, 2, 1, 'ng-container', 3),
      d()),
    e & 2)
  ) {
    let a = l(2);
    r(), p('nzStringTemplateOutlet', a.nzDescription);
  }
}
function ui(e, t) {
  if (
    (e & 1 &&
      (c(0, 'div', 1),
      h(1, di, 2, 1, 'nz-list-item-meta-title')(
        2,
        fi,
        2,
        1,
        'nz-list-item-meta-description',
      ),
      v(3, 1),
      v(4, 2),
      d()),
    e & 2)
  ) {
    let a = l();
    r(),
      f(a.nzTitle && !a.titleComponent ? 1 : -1),
      r(),
      f(a.nzDescription && !a.descriptionComponent ? 2 : -1);
  }
}
var ut = (() => {
  let t = class t {
    set nzAvatar(o) {
      o instanceof Fe
        ? ((this.avatarStr = ''), (this.avatarTpl = o))
        : (this.avatarStr = o);
    }
    constructor(o) {
      (this.elementRef = o), (this.avatarStr = '');
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Q));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-list-item-meta'], ['', 'nz-list-item-meta', '']],
      contentQueries: function (n, i, s) {
        if ((n & 1 && (Z(s, Te, 5), Z(s, xe, 5)), n & 2)) {
          let m;
          D((m = w())) && (i.descriptionComponent = m.first),
            D((m = w())) && (i.titleComponent = m.first);
        }
      },
      hostAttrs: [1, 'ant-list-item-meta'],
      inputs: {
        nzAvatar: 'nzAvatar',
        nzTitle: 'nzTitle',
        nzDescription: 'nzDescription',
      },
      exportAs: ['nzListItemMeta'],
      standalone: !0,
      features: [_],
      ngContentSelectors: li,
      decls: 4,
      vars: 3,
      consts: [
        [3, 'nzSrc'],
        [1, 'ant-list-item-meta-content'],
        [3, 'ngTemplateOutlet'],
        [4, 'nzStringTemplateOutlet'],
      ],
      template: function (n, i) {
        n & 1 &&
          (N(si),
          h(
            0,
            ci,
            1,
            1,
            'nz-list-item-meta-avatar',
            0,
          )(1, mi, 2, 1, 'nz-list-item-meta-avatar'),
          v(2),
          h(3, ui, 5, 2, 'div', 1)),
          n & 2 &&
            (f(i.avatarStr ? 0 : -1),
            r(),
            f(i.avatarTpl ? 1 : -1),
            r(2),
            f(
              i.nzTitle ||
                i.nzDescription ||
                i.descriptionComponent ||
                i.titleComponent
                ? 3
                : -1,
            ));
      },
      dependencies: [it, K, xe, J, X, Te],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var zt = ['*'],
  ot = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-empty']],
        hostAttrs: [1, 'ant-list-empty-text'],
        inputs: { nzNoResult: 'nzNoResult' },
        exportAs: ['nzListHeader'],
        standalone: !0,
        features: [_],
        decls: 1,
        vars: 2,
        consts: [[3, 'nzComponentName', 'specificContent']],
        template: function (n, i) {
          n & 1 && g(0, 'nz-embed-empty', 0),
            n & 2 &&
              p('nzComponentName', 'list')('specificContent', i.nzNoResult);
        },
        dependencies: [Ge, Qe],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  gt = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-header']],
        hostAttrs: [1, 'ant-list-header'],
        exportAs: ['nzListHeader'],
        standalone: !0,
        features: [_],
        ngContentSelectors: zt,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), v(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  at = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-footer']],
        hostAttrs: [1, 'ant-list-footer'],
        exportAs: ['nzListFooter'],
        standalone: !0,
        features: [_],
        ngContentSelectors: zt,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), v(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  rt = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-pagination']],
        hostAttrs: [1, 'ant-list-pagination'],
        exportAs: ['nzListPagination'],
        standalone: !0,
        features: [_],
        ngContentSelectors: zt,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), v(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  Ct = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = Ae({
        type: t,
        selectors: [['nz-list-load-more']],
        exportAs: ['nzListLoadMoreDirective'],
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
var gi = [
    [['nz-list-header']],
    [['nz-list-footer'], ['', 'nz-list-footer', '']],
    [['nz-list-load-more'], ['', 'nz-list-load-more', '']],
    [['nz-list-pagination'], ['', 'nz-list-pagination', '']],
    '*',
  ],
  Ci = [
    'nz-list-header',
    'nz-list-footer, [nz-list-footer]',
    'nz-list-load-more, [nz-list-load-more]',
    'nz-list-pagination, [nz-list-pagination]',
    '*',
  ],
  In = (e, t) => ({ $implicit: e, index: t });
function _i(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(2);
    r(), A(a.nzHeader);
  }
}
function vi(e, t) {
  if (
    (e & 1 && (c(0, 'nz-list-header'), h(1, _i, 2, 1, 'ng-container', 6), d()),
    e & 2)
  ) {
    let a = l();
    r(), p('nzStringTemplateOutlet', a.nzHeader);
  }
}
function Si(e, t) {
  e & 1 && g(0, 'div'), e & 2 && U('min-height', 53, 'px');
}
function yi(e, t) {}
function xi(e, t) {
  if (
    (e & 1 && (c(0, 'div', 7), h(1, yi, 0, 0, 'ng-template', 8), d()), e & 2)
  ) {
    let a = t.$implicit,
      o = t.$index,
      n = l(2);
    p('nzSpan', n.nzGrid.span || null)('nzXs', n.nzGrid.xs || null)(
      'nzSm',
      n.nzGrid.sm || null,
    )('nzMd', n.nzGrid.md || null)('nzLg', n.nzGrid.lg || null)(
      'nzXl',
      n.nzGrid.xl || null,
    )('nzXXl', n.nzGrid.xxl || null),
      r(),
      p('ngTemplateOutlet', n.nzRenderItem)(
        'ngTemplateOutletContext',
        ct(9, In, a, o),
      );
  }
}
function Ti(e, t) {
  if ((e & 1 && (c(0, 'div', 2), j(1, xi, 2, 12, 'div', 7, R), d()), e & 2)) {
    let a = l();
    p('nzGutter', a.nzGrid.gutter || null), r(), V(a.nzDataSource);
  }
}
function Ni(e, t) {}
function Di(e, t) {
  if ((e & 1 && ($(0), h(1, Ni, 0, 0, 'ng-template', 8), B()), e & 2)) {
    let a = t.$implicit,
      o = t.$index,
      n = l(2);
    r(),
      p('ngTemplateOutlet', n.nzRenderItem)(
        'ngTemplateOutletContext',
        ct(2, In, a, o),
      );
  }
}
function wi(e, t) {
  if (
    (e & 1 &&
      (c(0, 'div', 3), j(1, Di, 2, 5, 'ng-container', null, R), v(3, 4), d()),
    e & 2)
  ) {
    let a = l();
    r(), V(a.nzDataSource);
  }
}
function bi(e, t) {
  if ((e & 1 && g(0, 'nz-list-empty', 4), e & 2)) {
    let a = l();
    p('nzNoResult', a.nzNoResult);
  }
}
function Ii(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(2);
    r(), A(a.nzFooter);
  }
}
function Li(e, t) {
  if (
    (e & 1 && (c(0, 'nz-list-footer'), h(1, Ii, 2, 1, 'ng-container', 6), d()),
    e & 2)
  ) {
    let a = l();
    r(), p('nzStringTemplateOutlet', a.nzFooter);
  }
}
function Mi(e, t) {}
function Ai(e, t) {}
function ki(e, t) {
  if (
    (e & 1 &&
      (c(0, 'nz-list-pagination'), h(1, Ai, 0, 0, 'ng-template', 5), d()),
    e & 2)
  ) {
    let a = l();
    r(), p('ngTemplateOutlet', a.nzPagination);
  }
}
var Ne = (() => {
  let t = class t {
    get itemLayoutNotify$() {
      return this.itemLayoutNotifySource.asObservable();
    }
    constructor(o) {
      (this.directionality = o),
        (this.nzBordered = !1),
        (this.nzGrid = ''),
        (this.nzItemLayout = 'horizontal'),
        (this.nzRenderItem = null),
        (this.nzLoading = !1),
        (this.nzLoadMore = null),
        (this.nzSize = 'default'),
        (this.nzSplit = !0),
        (this.hasSomethingAfterLastItem = !1),
        (this.dir = 'ltr'),
        (this.itemLayoutNotifySource = new yt(this.nzItemLayout)),
        (this.destroy$ = new F());
    }
    ngOnInit() {
      (this.dir = this.directionality.value),
        this.directionality.change?.pipe(T(this.destroy$)).subscribe(o => {
          this.dir = o;
        });
    }
    getSomethingAfterLastItem() {
      return !!(
        this.nzLoadMore ||
        this.nzPagination ||
        this.nzFooter ||
        this.nzListFooterComponent ||
        this.nzListPaginationComponent ||
        this.nzListLoadMoreDirective
      );
    }
    ngOnChanges(o) {
      o.nzItemLayout && this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
    ngOnDestroy() {
      this.itemLayoutNotifySource.unsubscribe(),
        this.destroy$.next(),
        this.destroy$.complete();
    }
    ngAfterContentInit() {
      this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(q));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-list'], ['', 'nz-list', '']],
      contentQueries: function (n, i, s) {
        if ((n & 1 && (Z(s, at, 5), Z(s, rt, 5), Z(s, Ct, 5)), n & 2)) {
          let m;
          D((m = w())) && (i.nzListFooterComponent = m.first),
            D((m = w())) && (i.nzListPaginationComponent = m.first),
            D((m = w())) && (i.nzListLoadMoreDirective = m.first);
        }
      },
      hostAttrs: [1, 'ant-list'],
      hostVars: 16,
      hostBindings: function (n, i) {
        n & 2 &&
          M('ant-list-rtl', i.dir === 'rtl')(
            'ant-list-vertical',
            i.nzItemLayout === 'vertical',
          )('ant-list-lg', i.nzSize === 'large')(
            'ant-list-sm',
            i.nzSize === 'small',
          )('ant-list-split', i.nzSplit)('ant-list-bordered', i.nzBordered)(
            'ant-list-loading',
            i.nzLoading,
          )('ant-list-something-after-last-item', i.hasSomethingAfterLastItem);
      },
      inputs: {
        nzDataSource: 'nzDataSource',
        nzBordered: [2, 'nzBordered', 'nzBordered', x],
        nzGrid: 'nzGrid',
        nzHeader: 'nzHeader',
        nzFooter: 'nzFooter',
        nzItemLayout: 'nzItemLayout',
        nzRenderItem: 'nzRenderItem',
        nzLoading: [2, 'nzLoading', 'nzLoading', x],
        nzLoadMore: 'nzLoadMore',
        nzPagination: 'nzPagination',
        nzSize: 'nzSize',
        nzSplit: [2, 'nzSplit', 'nzSplit', x],
        nzNoResult: 'nzNoResult',
      },
      exportAs: ['nzList'],
      standalone: !0,
      features: [k, E, _],
      ngContentSelectors: Ci,
      decls: 14,
      vars: 8,
      consts: [
        [3, 'nzSpinning'],
        [3, 'min-height'],
        ['nz-row', '', 3, 'nzGutter'],
        [1, 'ant-list-items'],
        [3, 'nzNoResult'],
        [3, 'ngTemplateOutlet'],
        [4, 'nzStringTemplateOutlet'],
        [
          'nz-col',
          '',
          3,
          'nzSpan',
          'nzXs',
          'nzSm',
          'nzMd',
          'nzLg',
          'nzXl',
          'nzXXl',
        ],
        [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
      ],
      template: function (n, i) {
        n & 1 &&
          (N(gi),
          h(0, vi, 2, 1, 'nz-list-header'),
          v(1),
          c(2, 'nz-spin', 0),
          $(3),
          h(4, Si, 1, 2, 'div', 1)(5, Ti, 3, 1, 'div', 2)(
            6,
            wi,
            4,
            0,
            'div',
            3,
          )(7, bi, 1, 1, 'nz-list-empty', 4),
          B(),
          d(),
          h(8, Li, 2, 1, 'nz-list-footer'),
          v(9, 1),
          h(10, Mi, 0, 0, 'ng-template', 5),
          v(11, 2),
          h(12, ki, 2, 1, 'nz-list-pagination'),
          v(13, 3)),
          n & 2 &&
            (f(i.nzHeader ? 0 : -1),
            r(2),
            p('nzSpinning', i.nzLoading),
            r(2),
            f(
              i.nzLoading && i.nzDataSource && i.nzDataSource.length === 0
                ? 4
                : -1,
            ),
            r(),
            f(i.nzGrid && i.nzDataSource ? 5 : 6),
            r(2),
            f(
              !i.nzLoading && i.nzDataSource && i.nzDataSource.length === 0
                ? 7
                : -1,
            ),
            r(),
            f(i.nzFooter ? 8 : -1),
            r(2),
            p('ngTemplateOutlet', i.nzLoadMore),
            r(2),
            f(i.nzPagination ? 12 : -1));
      },
      dependencies: [K, gt, J, X, hn, dn, Zt, Ut, Ht, ot, at, rt],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var Ln = ['*'];
function Fi(e, t) {
  e & 1 && v(0);
}
var Ei = ['nz-list-item-actions', ''];
function Pi(e, t) {}
function Ri(e, t) {
  e & 1 && g(0, 'em', 1);
}
function ji(e, t) {
  if (
    (e & 1 &&
      (c(0, 'li'), h(1, Pi, 0, 0, 'ng-template', 0)(2, Ri, 1, 0, 'em', 1), d()),
    e & 2)
  ) {
    let a = t.$implicit,
      o = t.$index,
      n = t.$count;
    r(), p('ngTemplateOutlet', a), r(), f(o !== n - 1 ? 2 : -1);
  }
}
var st = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-item-extra'], ['', 'nz-list-item-extra', '']],
        hostAttrs: [1, 'ant-list-item-extra'],
        exportAs: ['nzListItemExtra'],
        standalone: !0,
        features: [_],
        ngContentSelectors: Ln,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), v(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  Mn = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['nz-list-item-action']],
        viewQuery: function (n, i) {
          if ((n & 1 && G(Fe, 7), n & 2)) {
            let s;
            D((s = w())) && (i.templateRef = s.first);
          }
        },
        exportAs: ['nzListItemAction'],
        standalone: !0,
        features: [_],
        ngContentSelectors: Ln,
        decls: 1,
        vars: 0,
        template: function (n, i) {
          n & 1 && (N(), h(0, Fi, 1, 0, 'ng-template'));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })(),
  _t = (() => {
    let t = class t {
      constructor(o, n) {
        (this.nzActions = []),
          (this.actions = []),
          (this.inputActionChanges$ = new F()),
          (this.contentChildrenChanges$ = Nt(() =>
            this.nzListItemActions
              ? pe(null)
              : this.initialized.pipe(
                  Tt(() =>
                    this.nzListItemActions.changes.pipe(
                      Ie(this.nzListItemActions),
                    ),
                  ),
                ),
          )),
          (this.initialized = new F()),
          be(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(T(n))
            .subscribe(() => {
              this.nzActions.length
                ? (this.actions = this.nzActions)
                : (this.actions = this.nzListItemActions.map(
                    i => i.templateRef,
                  )),
                o.detectChanges();
            });
      }
      ngOnChanges() {
        this.inputActionChanges$.next(null);
      }
      ngAfterContentInit() {
        this.initialized.next(), this.initialized.complete();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(u(O), u(re));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [['ul', 'nz-list-item-actions', '']],
        contentQueries: function (n, i, s) {
          if ((n & 1 && Z(s, Mn, 4), n & 2)) {
            let m;
            D((m = w())) && (i.nzListItemActions = m);
          }
        },
        hostAttrs: [1, 'ant-list-item-action'],
        inputs: { nzActions: 'nzActions' },
        exportAs: ['nzListItemActions'],
        standalone: !0,
        features: [$e([re]), E, _],
        attrs: Ei,
        decls: 2,
        vars: 0,
        consts: [
          [3, 'ngTemplateOutlet'],
          [1, 'ant-list-item-action-split'],
        ],
        template: function (n, i) {
          n & 1 && j(0, ji, 3, 2, 'li', null, R), n & 2 && V(i.actions);
        },
        dependencies: [K],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let e = t;
    return e;
  })();
var Vi = [
    [['nz-list-item-actions'], ['', 'nz-list-item-actions', '']],
    [['nz-list-item-meta'], ['', 'nz-list-item-meta', '']],
    '*',
    [['nz-list-item-extra'], ['', 'nz-list-item-extra', '']],
  ],
  $i = [
    'nz-list-item-actions, [nz-list-item-actions]',
    'nz-list-item-meta, [nz-list-item-meta]',
    '*',
    'nz-list-item-extra, [nz-list-item-extra]',
  ];
function Bi(e, t) {
  if ((e & 1 && g(0, 'ul', 3), e & 2)) {
    let a = l(2);
    p('nzActions', a.nzActions);
  }
}
function Hi(e, t) {
  if ((e & 1 && (h(0, Bi, 1, 1, 'ul', 3), v(1)), e & 2)) {
    let a = l();
    f(a.nzActions && a.nzActions.length > 0 ? 0 : -1);
  }
}
function Ui(e, t) {
  if ((e & 1 && ($(0), S(1), B()), e & 2)) {
    let a = l(3);
    r(), A(a.nzContent);
  }
}
function Zi(e, t) {
  if ((e & 1 && h(0, Ui, 2, 1, 'ng-container', 4), e & 2)) {
    let a = l(2);
    p('nzStringTemplateOutlet', a.nzContent);
  }
}
function Wi(e, t) {
  if ((e & 1 && (v(0, 1), v(1, 2), h(2, Zi, 1, 1, 'ng-container')), e & 2)) {
    let a = l();
    r(2), f(a.nzContent ? 2 : -1);
  }
}
function Qi(e, t) {
  e & 1 && v(0, 3);
}
function Gi(e, t) {}
function Ki(e, t) {}
function qi(e, t) {}
function Xi(e, t) {
  if (
    (e & 1 &&
      (c(0, 'nz-list-item-extra'), h(1, qi, 0, 0, 'ng-template', 6), d()),
    e & 2)
  ) {
    let a = l(2);
    r(), p('ngTemplateOutlet', a.nzExtra);
  }
}
function Ji(e, t) {}
function Yi(e, t) {
  if (
    (e & 1 &&
      (c(0, 'div', 5),
      h(1, Gi, 0, 0, 'ng-template', 6)(2, Ki, 0, 0, 'ng-template', 6),
      d(),
      h(3, Xi, 2, 1, 'nz-list-item-extra')(4, Ji, 0, 0, 'ng-template', 6)),
    e & 2)
  ) {
    let a = l(),
      o = se(1),
      n = se(3),
      i = se(5);
    r(),
      p('ngTemplateOutlet', n),
      r(),
      p('ngTemplateOutlet', o),
      r(),
      f(a.nzExtra ? 3 : -1),
      r(),
      p('ngTemplateOutlet', i);
  }
}
function eo(e, t) {}
function to(e, t) {}
function no(e, t) {}
function io(e, t) {}
function oo(e, t) {
  if (
    (e & 1 &&
      h(0, eo, 0, 0, 'ng-template', 6)(1, to, 0, 0, 'ng-template', 6)(
        2,
        no,
        0,
        0,
        'ng-template',
        6,
      )(3, io, 0, 0, 'ng-template', 6),
    e & 2)
  ) {
    let a = l(),
      o = se(1),
      n = se(3),
      i = se(5);
    p('ngTemplateOutlet', n),
      r(),
      p('ngTemplateOutlet', a.nzExtra),
      r(),
      p('ngTemplateOutlet', i),
      r(),
      p('ngTemplateOutlet', o);
  }
}
var An = (() => {
  let t = class t {
    get isVerticalAndExtra() {
      return (
        this.itemLayout === 'vertical' &&
        (!!this.listItemExtraDirective || !!this.nzExtra)
      );
    }
    constructor(o, n) {
      (this.parentComp = o),
        (this.cdr = n),
        (this.nzActions = []),
        (this.nzExtra = null),
        (this.nzNoFlex = !1);
    }
    ngAfterViewInit() {
      this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(o => {
        (this.itemLayout = o), this.cdr.detectChanges();
      });
    }
    ngOnDestroy() {
      this.itemLayout$ && this.itemLayout$.unsubscribe();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Ne), u(O));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-list-item'], ['', 'nz-list-item', '']],
      contentQueries: function (n, i, s) {
        if ((n & 1 && Z(s, st, 5), n & 2)) {
          let m;
          D((m = w())) && (i.listItemExtraDirective = m.first);
        }
      },
      hostAttrs: [1, 'ant-list-item'],
      hostVars: 2,
      hostBindings: function (n, i) {
        n & 2 && M('ant-list-item-no-flex', i.nzNoFlex);
      },
      inputs: {
        nzActions: 'nzActions',
        nzContent: 'nzContent',
        nzExtra: 'nzExtra',
        nzNoFlex: [2, 'nzNoFlex', 'nzNoFlex', x],
      },
      exportAs: ['nzListItem'],
      standalone: !0,
      features: [k, _],
      ngContentSelectors: $i,
      decls: 8,
      vars: 1,
      consts: [
        ['actionsTpl', ''],
        ['contentTpl', ''],
        ['extraTpl', ''],
        ['nz-list-item-actions', '', 3, 'nzActions'],
        [4, 'nzStringTemplateOutlet'],
        [1, 'ant-list-item-main'],
        [3, 'ngTemplateOutlet'],
      ],
      template: function (n, i) {
        n & 1 &&
          (N(Vi),
          h(0, Hi, 2, 1, 'ng-template', null, 0, Be)(
            2,
            Wi,
            3,
            1,
            'ng-template',
            null,
            1,
            Be,
          )(
            4,
            Qi,
            1,
            0,
            'ng-template',
            null,
            2,
            Be,
          )(6, Yi, 5, 4)(7, oo, 4, 4)),
          n & 2 && (r(6), f(i.isVerticalAndExtra ? 6 : 7));
      },
      dependencies: [_t, J, X, K, st],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var ao = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = ie({ type: t })),
    (t.ɵinj = ne({ imports: [Ne, ot, ut, it] }));
  let e = t;
  return e;
})();
var ro = ['nz-transfer-search', ''],
  so = e => ({ 'ant-input-disabled': e });
function lo(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'span', 4),
      y('click', function () {
        b(a);
        let n = l();
        return I(n._clear());
      }),
      g(1, 'span', 5),
      d();
  }
}
var De = (() => {
  let t = class t {
    constructor(o) {
      (this.cdr = o),
        (this.disabled = !1),
        (this.valueChanged = new P()),
        (this.valueClear = new P());
    }
    _handle() {
      this.valueChanged.emit(this.value);
    }
    _clear() {
      this.disabled || ((this.value = ''), this.valueClear.emit());
    }
    ngOnChanges() {
      this.cdr.detectChanges();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(O));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['', 'nz-transfer-search', '']],
      inputs: {
        placeholder: 'placeholder',
        value: 'value',
        disabled: [2, 'disabled', 'disabled', x],
      },
      outputs: { valueChanged: 'valueChanged', valueClear: 'valueClear' },
      exportAs: ['nzTransferSearch'],
      standalone: !0,
      features: [k, E, _],
      attrs: ro,
      decls: 4,
      vars: 7,
      consts: [
        [1, 'ant-input-prefix'],
        ['nz-icon', '', 'nzType', 'search'],
        [
          1,
          'ant-input',
          3,
          'ngModelChange',
          'ngModel',
          'disabled',
          'placeholder',
          'ngClass',
        ],
        [1, 'ant-input-suffix'],
        [1, 'ant-input-suffix', 3, 'click'],
        [
          'nz-icon',
          '',
          'nzType',
          'close-circle',
          'nzTheme',
          'fill',
          1,
          'ant-input-clear-icon',
        ],
      ],
      template: function (n, i) {
        n & 1 &&
          (c(0, 'span', 0),
          g(1, 'span', 1),
          d(),
          c(2, 'input', 2),
          Et('ngModelChange', function (m) {
            return Ft(i.value, m) || (i.value = m), m;
          }),
          y('ngModelChange', function () {
            return i._handle();
          }),
          d(),
          h(3, lo, 2, 0, 'span', 3)),
          n & 2 &&
            (r(2),
            Ot('ngModel', i.value),
            p('disabled', i.disabled)('placeholder', i.placeholder)(
              'ngClass',
              le(5, so, i.disabled),
            ),
            r(),
            f(i.value && i.value.length > 0 ? 3 : -1));
      },
      dependencies: [an, tn, nn, on, he, de, He],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var co = ['headerCheckbox'],
  mo = ['checkboxes'],
  po = e => ({ 'ant-transfer__nodata': e }),
  ho = (e, t, a, o, n, i) => ({
    $implicit: e,
    direction: t,
    disabled: a,
    onItemSelectAll: o,
    onItemSelect: n,
    stat: i,
  }),
  fo = e => ({ 'ant-transfer-list-content-item-disabled': e }),
  kn = e => ({ $implicit: e });
function uo(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'label', 10, 0),
      y('nzCheckedChange', function (n) {
        b(a);
        let i = l();
        return I(i.onItemSelectAll(n));
      }),
      d();
  }
  if (e & 2) {
    let a = l();
    p('nzChecked', a.stat.checkAll)('nzIndeterminate', a.stat.checkHalf)(
      'nzDisabled',
      a.stat.shownCount === 0 || a.disabled,
    );
  }
}
function zo(e, t) {
  if ((e & 1 && (c(0, 'span', 5), S(1), d()), e & 2)) {
    let a = l();
    r(), A(a.titleText);
  }
}
function go(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'div', 7)(1, 'span', 11),
      y('valueChanged', function (n) {
        b(a);
        let i = l();
        return I(i.handleFilter(n));
      })('valueClear', function () {
        b(a);
        let n = l();
        return I(n.handleClear());
      }),
      d()();
  }
  if (e & 2) {
    let a = l();
    r(),
      p('placeholder', a.searchPlaceholder)('disabled', a.disabled)(
        'value',
        a.filter,
      );
  }
}
function Co(e, t) {
  e & 1 && Re(0);
}
function _o(e, t) {
  if (
    (e & 1 && (c(0, 'div', 8), h(1, Co, 1, 0, 'ng-container', 12), d()), e & 2)
  ) {
    let a = l();
    r(),
      p('ngTemplateOutlet', a.renderList)(
        'ngTemplateOutletContext',
        Pt(
          2,
          ho,
          a.validData,
          a.direction,
          a.disabled,
          a.onItemSelectAll,
          a.onItemSelect,
          a.stat,
        ),
      );
  }
}
function vo(e, t) {
  if ((e & 1 && S(0), e & 2)) {
    let a = l().$implicit;
    Se(' ', a.title, ' ');
  }
}
function So(e, t) {}
function yo(e, t) {
  if ((e & 1 && h(0, So, 0, 0, 'ng-template', 18), e & 2)) {
    let a = l().$implicit,
      o = l(3);
    p('ngTemplateOutlet', o.render)('ngTemplateOutletContext', le(2, kn, a));
  }
}
function xo(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'li', 16),
      y('click', function () {
        let n = b(a).$implicit,
          i = l(3);
        return I(i.onItemSelect(n));
      }),
      c(1, 'label', 17, 1),
      y('nzCheckedChange', function () {
        let n = b(a).$implicit,
          i = l(3);
        return I(i.onItemSelect(n));
      }),
      h(3, vo, 1, 1)(4, yo, 1, 4, null, 18),
      d()();
  }
  if (e & 2) {
    let a = t.$implicit,
      o = l(3);
    p('ngClass', le(4, fo, o.disabled || a.disabled)),
      r(),
      p('nzChecked', a.checked)('nzDisabled', o.disabled || a.disabled),
      r(2),
      f(o.render ? 4 : 3);
  }
}
function To(e, t) {
  if ((e & 1 && (c(0, 'ul', 13), j(1, xo, 5, 6, 'li', 15, R), d()), e & 2)) {
    let a = l(2);
    r(), V(a.validData);
  }
}
function No(e, t) {
  if ((e & 1 && (c(0, 'div', 14), g(1, 'nz-embed-empty', 19), d()), e & 2)) {
    let a = l(2);
    r(), p('nzComponentName', 'transfer')('specificContent', a.notFoundContent);
  }
}
function Do(e, t) {
  if ((e & 1 && h(0, To, 3, 0, 'ul', 13)(1, No, 2, 2, 'div', 14), e & 2)) {
    let a = l();
    f(a.stat.shownCount > 0 ? 0 : 1);
  }
}
function wo(e, t) {}
function bo(e, t) {
  if (
    (e & 1 && (c(0, 'div', 9), h(1, wo, 0, 0, 'ng-template', 18), d()), e & 2)
  ) {
    let a = l();
    r(),
      p('ngTemplateOutlet', a.footer)(
        'ngTemplateOutletContext',
        le(2, kn, a.direction),
      );
  }
}
var ge = (() => {
  let t = class t {
    get validData() {
      return this.dataSource.filter(o => !o.hide);
    }
    updateCheckStatus() {
      let o = this.dataSource.filter(n => !n.disabled).length;
      (this.stat.checkCount = this.dataSource.filter(
        n => n.checked && !n.disabled,
      ).length),
        (this.stat.shownCount = this.validData.length),
        (this.stat.checkAll = o > 0 && o === this.stat.checkCount),
        (this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll),
        this.headerCheckbox &&
          (this.headerCheckbox.nzChecked = this.stat.checkAll);
    }
    handleFilter(o) {
      (this.filter = o),
        this.dataSource.forEach(n => {
          n.hide = o.length > 0 && !this.matchFilter(o, n);
        }),
        (this.stat.shownCount = this.validData.length),
        this.filterChange.emit({ direction: this.direction, value: o });
    }
    handleClear() {
      this.handleFilter('');
    }
    matchFilter(o, n) {
      return this.filterOption ? this.filterOption(o, n) : n.title.includes(o);
    }
    constructor(o, n) {
      (this.ngZone = o),
        (this.cdr = n),
        (this.direction = 'left'),
        (this.titleText = ''),
        (this.showSelectAll = !0),
        (this.dataSource = []),
        (this.itemUnit = ''),
        (this.itemsUnit = ''),
        (this.filter = ''),
        (this.disabled = !1),
        (this.renderList = null),
        (this.render = null),
        (this.footer = null),
        (this.handleSelectAll = new P()),
        (this.handleSelect = new P()),
        (this.filterChange = new P()),
        (this.stat = {
          checkAll: !1,
          checkHalf: !1,
          checkCount: 0,
          shownCount: 0,
        }),
        (this.onItemSelect = i => {
          this.disabled ||
            i.disabled ||
            ((i.checked = !i.checked),
            this.updateCheckStatus(),
            this.handleSelect.emit(i));
        }),
        (this.onItemSelectAll = i => {
          this.dataSource.forEach(s => {
            !s.disabled && !s.hide && (s.checked = i);
          }),
            this.updateCheckStatus(),
            this.handleSelectAll.emit(i);
        });
    }
    markForCheck() {
      this.updateCheckStatus(), this.cdr.markForCheck();
    }
    ngAfterViewInit() {
      this.checkboxes.changes
        .pipe(
          Ie(this.checkboxes),
          Le(() => {
            let o = this.checkboxes.toArray();
            return new St(n =>
              this.ngZone.runOutsideAngular(() =>
                be(...o.map(i => te(i.nativeElement, 'click'))).subscribe(n),
              ),
            );
          }),
        )
        .subscribe(o => {
          o.stopPropagation();
        });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(Oe), u(O));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-transfer-list']],
      viewQuery: function (n, i) {
        if ((n & 1 && (G(co, 5, Ke), G(mo, 5, Q)), n & 2)) {
          let s;
          D((s = w())) && (i.headerCheckbox = s.first),
            D((s = w())) && (i.checkboxes = s);
        }
      },
      hostAttrs: [1, 'ant-transfer-list'],
      hostVars: 2,
      hostBindings: function (n, i) {
        n & 2 && M('ant-transfer-list-with-footer', !!i.footer);
      },
      inputs: {
        direction: 'direction',
        titleText: 'titleText',
        showSelectAll: 'showSelectAll',
        dataSource: 'dataSource',
        itemUnit: 'itemUnit',
        itemsUnit: 'itemsUnit',
        filter: 'filter',
        disabled: [2, 'disabled', 'disabled', x],
        showSearch: [2, 'showSearch', 'showSearch', x],
        searchPlaceholder: 'searchPlaceholder',
        notFoundContent: 'notFoundContent',
        filterOption: 'filterOption',
        renderList: 'renderList',
        render: 'render',
        footer: 'footer',
      },
      outputs: {
        handleSelectAll: 'handleSelectAll',
        handleSelect: 'handleSelect',
        filterChange: 'filterChange',
      },
      exportAs: ['nzTransferList'],
      standalone: !0,
      features: [k, _],
      decls: 11,
      vars: 13,
      consts: [
        ['headerCheckbox', ''],
        ['checkboxes', ''],
        [1, 'ant-transfer-list-header'],
        [
          'nz-checkbox',
          '',
          1,
          'ant-transfer-list-checkbox',
          3,
          'nzChecked',
          'nzIndeterminate',
          'nzDisabled',
        ],
        [1, 'ant-transfer-list-header-selected'],
        [1, 'ant-transfer-list-header-title'],
        [3, 'ngClass'],
        [1, 'ant-transfer-list-body-search-wrapper'],
        [1, 'ant-transfer-list-body-customize-wrapper'],
        [1, 'ant-transfer-list-footer'],
        [
          'nz-checkbox',
          '',
          1,
          'ant-transfer-list-checkbox',
          3,
          'nzCheckedChange',
          'nzChecked',
          'nzIndeterminate',
          'nzDisabled',
        ],
        [
          'nz-transfer-search',
          '',
          1,
          'ant-input-affix-wrapper',
          'ant-transfer-list-search',
          3,
          'valueChanged',
          'valueClear',
          'placeholder',
          'disabled',
          'value',
        ],
        [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
        [1, 'ant-transfer-list-content'],
        [1, 'ant-transfer-list-body-not-found'],
        [1, 'ant-transfer-list-content-item', 3, 'ngClass'],
        [1, 'ant-transfer-list-content-item', 3, 'click', 'ngClass'],
        ['nz-checkbox', '', 3, 'nzCheckedChange', 'nzChecked', 'nzDisabled'],
        [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
        [3, 'nzComponentName', 'specificContent'],
      ],
      template: function (n, i) {
        n & 1 &&
          (c(0, 'div', 2),
          h(1, uo, 2, 3, 'label', 3),
          c(2, 'span', 4)(3, 'span'),
          S(4),
          d()(),
          h(5, zo, 2, 1, 'span', 5),
          d(),
          c(6, 'div', 6),
          h(7, go, 2, 3, 'div', 7)(8, _o, 2, 9, 'div', 8)(9, Do, 2, 1),
          d(),
          h(10, bo, 2, 4, 'div', 9)),
          n & 2 &&
            (r(),
            f(i.showSelectAll ? 1 : -1),
            r(3),
            Ve(
              ' ',
              (i.stat.checkCount > 0 ? i.stat.checkCount + '/' : '') +
                i.stat.shownCount,
              ' ',
              i.validData.length > 1 ? i.itemsUnit : i.itemUnit,
              ' ',
            ),
            r(),
            f(i.titleText ? 5 : -1),
            r(),
            Mt(
              i.showSearch
                ? 'ant-transfer-list-body ant-transfer-list-body-with-search'
                : 'ant-transfer-list-body',
            ),
            p('ngClass', le(11, po, i.stat.shownCount === 0)),
            r(),
            f(i.showSearch ? 7 : -1),
            r(),
            f(i.renderList ? 8 : 9),
            r(2),
            f(i.footer ? 10 : -1));
      },
      dependencies: [He, zn, Ke, K, Ge, Qe, De],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
function Io(e, t) {
  if ((e & 1 && (c(0, 'span'), S(1), d()), e & 2)) {
    let a = l(2);
    r(), A(a.nzOperations[1]);
  }
}
function Lo(e, t) {
  if ((e & 1 && (c(0, 'span'), S(1), d()), e & 2)) {
    let a = l(2);
    r(), A(a.nzOperations[0]);
  }
}
function Mo(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'div', 1)(1, 'button', 3),
      y('click', function () {
        b(a);
        let n = l();
        return I(n.moveToLeft());
      }),
      g(2, 'span', 4),
      h(3, Io, 2, 1, 'span'),
      d(),
      c(4, 'button', 3),
      y('click', function () {
        b(a);
        let n = l();
        return I(n.moveToRight());
      }),
      g(5, 'span', 5),
      h(6, Lo, 2, 1, 'span'),
      d()();
  }
  if (e & 2) {
    let a = l();
    r(),
      p('disabled', a.nzDisabled || !a.leftActive)('nzType', 'primary')(
        'nzSize',
        'small',
      ),
      r(2),
      f(a.nzOperations[1] ? 3 : -1),
      r(),
      p('disabled', a.nzDisabled || !a.rightActive)('nzType', 'primary')(
        'nzSize',
        'small',
      ),
      r(2),
      f(a.nzOperations[0] ? 6 : -1);
  }
}
function Ao(e, t) {
  if ((e & 1 && (c(0, 'span'), S(1), d()), e & 2)) {
    let a = l(2);
    r(), A(a.nzOperations[0]);
  }
}
function ko(e, t) {
  if ((e & 1 && (c(0, 'span'), S(1), d()), e & 2)) {
    let a = l(2);
    r(), A(a.nzOperations[1]);
  }
}
function Oo(e, t) {
  if (e & 1) {
    let a = H();
    c(0, 'div', 1)(1, 'button', 3),
      y('click', function () {
        b(a);
        let n = l();
        return I(n.moveToRight());
      }),
      g(2, 'span', 4),
      h(3, Ao, 2, 1, 'span'),
      d(),
      c(4, 'button', 3),
      y('click', function () {
        b(a);
        let n = l();
        return I(n.moveToLeft());
      }),
      g(5, 'span', 5),
      h(6, ko, 2, 1, 'span'),
      d()();
  }
  if (e & 2) {
    let a = l();
    r(),
      p('disabled', a.nzDisabled || !a.rightActive)('nzType', 'primary')(
        'nzSize',
        'small',
      ),
      r(2),
      f(a.nzOperations[0] ? 3 : -1),
      r(),
      p('disabled', a.nzDisabled || !a.leftActive)('nzType', 'primary')(
        'nzSize',
        'small',
      ),
      r(2),
      f(a.nzOperations[1] ? 6 : -1);
  }
}
var vt = (() => {
  let t = class t {
    splitDataSource() {
      (this.leftDataSource = []),
        (this.rightDataSource = []),
        this.nzDataSource.forEach(o => {
          o.direction === 'right'
            ? ((o.direction = 'right'), this.rightDataSource.push(o))
            : ((o.direction = 'left'), this.leftDataSource.push(o));
        });
    }
    getCheckedData(o) {
      return this[o === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(
        n => n.checked,
      );
    }
    handleSelect(o, n, i) {
      let s = this.getCheckedData(o);
      s.every(m => m.disabled) ||
        (this.updateOperationStatus(o, s.length),
        this.nzSelectChange.emit({
          direction: o,
          checked: n,
          list: s,
          item: i,
        }));
    }
    handleFilterChange(o) {
      this.nzSearchChange.emit(o);
    }
    sortDataSource() {
      if (!this.nzSortOrder?.sortOrder) return;
      let o =
        this.nzSortOrder?.direction === 'left'
          ? this.leftDataSource
          : this.rightDataSource;
      this.nzSortOrder?.sortOrder === 'ascending'
        ? o.sort((n, i) => n.title.localeCompare(i.title))
        : this.nzSortOrder?.sortOrder === 'descending' &&
          o.sort((n, i) => i.title.localeCompare(n.title)),
        o.splice(0, o.length, ...o),
        this.markForCheckAllList();
    }
    updateOperationStatus(o, n) {
      this[o === 'right' ? 'leftActive' : 'rightActive'] =
        (typeof n > 'u'
          ? this.getCheckedData(o).filter(i => !i.disabled).length
          : n) > 0;
    }
    moveTo(o) {
      let n = o === 'left' ? 'right' : 'left';
      this.updateOperationStatus(n, 0);
      let s = (
        o === 'left' ? this.rightDataSource : this.leftDataSource
      ).filter(m => m.checked === !0 && !m.disabled);
      this.nzCanMove({ direction: o, list: s }).subscribe(
        m =>
          this.truthMoveTo(
            o,
            m.filter(z => !!z),
          ),
        () => s.forEach(m => (m.checked = !1)),
      );
    }
    truthMoveTo(o, n) {
      let i = o === 'left' ? 'right' : 'left',
        s = o === 'left' ? this.rightDataSource : this.leftDataSource,
        m = o === 'left' ? this.leftDataSource : this.rightDataSource;
      for (let z of n)
        (z.checked = !1),
          (z.hide = !1),
          (z.direction = o),
          s.splice(s.indexOf(z), 1);
      m.splice(0, 0, ...n),
        this.updateOperationStatus(i),
        this.nzChange.emit({ from: i, to: o, list: n }),
        this.markForCheckAllList();
    }
    constructor(o, n, i, s, m) {
      (this.cdr = o),
        (this.i18n = n),
        (this.elementRef = i),
        (this.renderer = s),
        (this.directionality = m),
        (this.unsubscribe$ = new F()),
        (this.leftFilter = ''),
        (this.rightFilter = ''),
        (this.dir = 'ltr'),
        (this.prefixCls = 'ant-transfer'),
        (this.statusCls = {}),
        (this.hasFeedback = !1),
        (this.nzDisabled = !1),
        (this.nzDataSource = []),
        (this.nzTitles = ['', '']),
        (this.nzOperations = []),
        (this.nzListStyle = {}),
        (this.nzShowSelectAll = !0),
        (this.nzCanMove = z => pe(z.list)),
        (this.nzRenderList = null),
        (this.nzRender = null),
        (this.nzFooter = null),
        (this.nzShowSearch = !1),
        (this.nzTargetKeys = []),
        (this.nzSelectedKeys = []),
        (this.nzStatus = ''),
        (this.nzSortOrder = null),
        (this.nzChange = new P()),
        (this.nzSearchChange = new P()),
        (this.nzSelectChange = new P()),
        (this.leftDataSource = []),
        (this.rightDataSource = []),
        (this.handleLeftSelectAll = z => this.handleSelect('left', z)),
        (this.handleRightSelectAll = z => this.handleSelect('right', z)),
        (this.handleLeftSelect = z =>
          this.handleSelect('left', !!z.checked, z)),
        (this.handleRightSelect = z =>
          this.handleSelect('right', !!z.checked, z)),
        (this.leftActive = !1),
        (this.rightActive = !1),
        (this.moveToLeft = () => this.moveTo('left')),
        (this.moveToRight = () => this.moveTo('right')),
        (this.nzFormStatusService = W(Yt, { optional: !0 })),
        (this.nzFormNoStatusService = W(en, { optional: !0 }));
    }
    markForCheckAllList() {
      this.lists && this.lists.forEach(o => o.markForCheck());
    }
    handleNzTargetKeys() {
      let o = mt(this.nzTargetKeys),
        n = i => i.hasOwnProperty('key');
      this.leftDataSource.forEach(i => {
        n(i) && o.indexOf(i.key) !== -1 && !i.disabled && (i.checked = !0);
      }),
        this.moveToRight();
    }
    handleNzSelectedKeys() {
      let o = mt(this.nzSelectedKeys);
      this.nzDataSource.forEach(i => {
        o.indexOf(i.key) !== -1 && (i.checked = !0);
      });
      let n = i => i.disabled === !1 && i.checked === !0;
      (this.rightActive = this.leftDataSource.some(n)),
        (this.leftActive = this.rightDataSource.some(n));
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges
        .pipe(
          wt(
            (o, n) => o.status === n.status && o.hasFeedback === n.hasFeedback,
          ),
          bt(
            this.nzFormNoStatusService
              ? this.nzFormNoStatusService.noFormStatus
              : pe(!1),
          ),
          xt(([{ status: o, hasFeedback: n }, i]) => ({
            status: i ? '' : o,
            hasFeedback: n,
          })),
          T(this.unsubscribe$),
        )
        .subscribe(({ status: o, hasFeedback: n }) => {
          this.setStatusStyles(o, n);
        }),
        this.i18n.localeChange.pipe(T(this.unsubscribe$)).subscribe(() => {
          (this.locale = this.i18n.getLocaleData('Transfer')),
            this.markForCheckAllList();
        }),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(T(this.unsubscribe$)).subscribe(o => {
          (this.dir = o), this.cdr.detectChanges();
        });
    }
    ngOnChanges(o) {
      let {
        nzSortOrder: n,
        nzStatus: i,
        nzDataSource: s,
        nzTargetKeys: m,
        nzSelectedKeys: z,
      } = o;
      n && this.sortDataSource(),
        s &&
          (this.splitDataSource(),
          this.updateOperationStatus('left'),
          this.updateOperationStatus('right'),
          this.cdr.detectChanges(),
          this.markForCheckAllList()),
        m && this.handleNzTargetKeys(),
        z && this.handleNzSelectedKeys(),
        i && this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    ngOnDestroy() {
      this.unsubscribe$.next(), this.unsubscribe$.complete();
    }
    setStatusStyles(o, n) {
      (this.hasFeedback = n),
        this.cdr.markForCheck(),
        (this.statusCls = Bt(this.prefixCls, o, n)),
        Object.keys(this.statusCls).forEach(i => {
          this.statusCls[i]
            ? this.renderer.addClass(this.elementRef.nativeElement, i)
            : this.renderer.removeClass(this.elementRef.nativeElement, i);
        });
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(u(O), u(Wt), u(Q), u(Ee), u(q));
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [['nz-transfer']],
      viewQuery: function (n, i) {
        if ((n & 1 && G(ge, 5), n & 2)) {
          let s;
          D((s = w())) && (i.lists = s);
        }
      },
      hostAttrs: [1, 'ant-transfer'],
      hostVars: 6,
      hostBindings: function (n, i) {
        n & 2 &&
          M('ant-transfer-rtl', i.dir === 'rtl')(
            'ant-transfer-disabled',
            i.nzDisabled,
          )('ant-transfer-customize-list', i.nzRenderList);
      },
      inputs: {
        nzDisabled: [2, 'nzDisabled', 'nzDisabled', x],
        nzDataSource: 'nzDataSource',
        nzTitles: 'nzTitles',
        nzOperations: 'nzOperations',
        nzListStyle: 'nzListStyle',
        nzShowSelectAll: [2, 'nzShowSelectAll', 'nzShowSelectAll', x],
        nzItemUnit: 'nzItemUnit',
        nzItemsUnit: 'nzItemsUnit',
        nzCanMove: 'nzCanMove',
        nzRenderList: 'nzRenderList',
        nzRender: 'nzRender',
        nzFooter: 'nzFooter',
        nzShowSearch: [2, 'nzShowSearch', 'nzShowSearch', x],
        nzFilterOption: 'nzFilterOption',
        nzSearchPlaceholder: 'nzSearchPlaceholder',
        nzNotFoundContent: 'nzNotFoundContent',
        nzTargetKeys: 'nzTargetKeys',
        nzSelectedKeys: 'nzSelectedKeys',
        nzStatus: 'nzStatus',
        nzSortOrder: 'nzSortOrder',
      },
      outputs: {
        nzChange: 'nzChange',
        nzSearchChange: 'nzSearchChange',
        nzSelectChange: 'nzSelectChange',
      },
      exportAs: ['nzTransfer'],
      standalone: !0,
      features: [k, E, _],
      decls: 4,
      vars: 31,
      consts: [
        [
          'data-direction',
          'left',
          'direction',
          'left',
          1,
          'ant-transfer-list',
          3,
          'filterChange',
          'handleSelect',
          'handleSelectAll',
          'ngStyle',
          'titleText',
          'showSelectAll',
          'dataSource',
          'filter',
          'filterOption',
          'renderList',
          'render',
          'disabled',
          'showSearch',
          'searchPlaceholder',
          'notFoundContent',
          'itemUnit',
          'itemsUnit',
          'footer',
        ],
        [1, 'ant-transfer-operation'],
        [
          'data-direction',
          'right',
          'direction',
          'right',
          1,
          'ant-transfer-list',
          3,
          'filterChange',
          'handleSelect',
          'handleSelectAll',
          'ngStyle',
          'titleText',
          'showSelectAll',
          'dataSource',
          'filter',
          'filterOption',
          'renderList',
          'render',
          'disabled',
          'showSearch',
          'searchPlaceholder',
          'notFoundContent',
          'itemUnit',
          'itemsUnit',
          'footer',
        ],
        [
          'nz-button',
          '',
          'type',
          'button',
          3,
          'click',
          'disabled',
          'nzType',
          'nzSize',
        ],
        ['nz-icon', '', 'nzType', 'left'],
        ['nz-icon', '', 'nzType', 'right'],
      ],
      template: function (n, i) {
        n & 1 &&
          (c(0, 'nz-transfer-list', 0),
          y('filterChange', function (m) {
            return i.handleFilterChange(m);
          })('handleSelect', function (m) {
            return i.handleLeftSelect(m);
          })('handleSelectAll', function (m) {
            return i.handleLeftSelectAll(m);
          }),
          d(),
          h(1, Mo, 7, 8, 'div', 1)(2, Oo, 7, 8, 'div', 1),
          c(3, 'nz-transfer-list', 2),
          y('filterChange', function (m) {
            return i.handleFilterChange(m);
          })('handleSelect', function (m) {
            return i.handleRightSelect(m);
          })('handleSelectAll', function (m) {
            return i.handleRightSelectAll(m);
          }),
          d()),
          n & 2 &&
            (p('ngStyle', i.nzListStyle)('titleText', i.nzTitles[0])(
              'showSelectAll',
              i.nzShowSelectAll,
            )('dataSource', i.leftDataSource)('filter', i.leftFilter)(
              'filterOption',
              i.nzFilterOption,
            )('renderList', i.nzRenderList && i.nzRenderList[0])(
              'render',
              i.nzRender,
            )('disabled', i.nzDisabled)('showSearch', i.nzShowSearch)(
              'searchPlaceholder',
              i.nzSearchPlaceholder ||
                (i.locale == null ? null : i.locale.searchPlaceholder),
            )('notFoundContent', i.nzNotFoundContent)(
              'itemUnit',
              i.nzItemUnit || (i.locale == null ? null : i.locale.itemUnit),
            )(
              'itemsUnit',
              i.nzItemsUnit || (i.locale == null ? null : i.locale.itemsUnit),
            )('footer', i.nzFooter),
            r(),
            f(i.dir !== 'rtl' ? 1 : 2),
            r(2),
            p('ngStyle', i.nzListStyle)('titleText', i.nzTitles[1])(
              'showSelectAll',
              i.nzShowSelectAll,
            )('dataSource', i.rightDataSource)('filter', i.rightFilter)(
              'filterOption',
              i.nzFilterOption,
            )('renderList', i.nzRenderList && i.nzRenderList[1])(
              'render',
              i.nzRender,
            )('disabled', i.nzDisabled)('showSearch', i.nzShowSearch)(
              'searchPlaceholder',
              i.nzSearchPlaceholder ||
                (i.locale == null ? null : i.locale.searchPlaceholder),
            )('notFoundContent', i.nzNotFoundContent)(
              'itemUnit',
              i.nzItemUnit || (i.locale == null ? null : i.locale.itemUnit),
            )(
              'itemsUnit',
              i.nzItemsUnit || (i.locale == null ? null : i.locale.itemsUnit),
            )('footer', i.nzFooter));
      },
      dependencies: [ge, Ue, he, de, cn, rn, sn, ln],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var Fo = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = ie({ type: t })),
    (t.ɵinj = ne({ imports: [vt, ge, De] }));
  let e = t;
  return e;
})();
export {
  qe as a,
  fa as b,
  Na as c,
  ze as d,
  Nr as e,
  ut as f,
  Ne as g,
  An as h,
  ao as i,
  vt as j,
  Fo as k,
};
