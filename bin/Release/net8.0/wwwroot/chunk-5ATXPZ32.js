import {
  Ca as g,
  Da as l,
  Ga as m,
  Ha as k,
  Hc as ie,
  Ia as f,
  Jb as I,
  Kb as z,
  Na as p,
  O as q,
  Oa as Z,
  Pa as K,
  Qa as O,
  Qc as oe,
  Ra as F,
  Rb as L,
  Rc as b,
  Sa as c,
  Sb as ee,
  Ta as d,
  U as w,
  Ua as C,
  Va as j,
  Wa as H,
  Y as u,
  Z as E,
  _ as P,
  a as N,
  bb as s,
  bd as V,
  cb as _,
  cd as $,
  db as y,
  ea as B,
  g as J,
  gb as G,
  hb as X,
  ib as M,
  jb as A,
  l as D,
  lb as Q,
  mb as R,
  nc as te,
  oc as ne,
  ub as v,
  va as r,
  vb as Y,
  wa as h,
  xa as W,
} from './chunk-55QWLPSH.js';
var me = ['nzType', 'avatar'];
var ae = (() => {
  let t = class t {
    constructor() {
      (this.nzActive = !1), (this.nzBlock = !1);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = P({
      type: t,
      selectors: [['nz-skeleton-element']],
      hostAttrs: [1, 'ant-skeleton', 'ant-skeleton-element'],
      hostVars: 4,
      hostBindings: function (i, a) {
        i & 2 &&
          f('ant-skeleton-active', a.nzActive)('ant-skeleton-block', a.nzBlock);
      },
      inputs: {
        nzActive: [2, 'nzActive', 'nzActive', z],
        nzType: 'nzType',
        nzBlock: [2, 'nzBlock', 'nzBlock', z],
      },
      standalone: !0,
      features: [g],
    }));
  let e = t;
  return e;
})();
var re = (() => {
  let t = class t {
    constructor() {
      (this.nzShape = 'circle'),
        (this.nzSize = 'default'),
        (this.styleMap = {});
    }
    ngOnChanges(n) {
      if (n.nzSize && typeof this.nzSize == 'number') {
        let i = `${this.nzSize}px`;
        this.styleMap = { width: i, height: i, 'line-height': i };
      } else this.styleMap = {};
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = u({
      type: t,
      selectors: [['nz-skeleton-element', 'nzType', 'avatar']],
      inputs: { nzShape: 'nzShape', nzSize: 'nzSize' },
      standalone: !0,
      features: [B, v],
      attrs: me,
      decls: 1,
      vars: 9,
      consts: [[1, 'ant-skeleton-avatar', 3, 'ngStyle']],
      template: function (i, a) {
        i & 1 && C(0, 'span', 0),
          i & 2 &&
            (f('ant-skeleton-avatar-square', a.nzShape === 'square')(
              'ant-skeleton-avatar-circle',
              a.nzShape === 'circle',
            )('ant-skeleton-avatar-lg', a.nzSize === 'large')(
              'ant-skeleton-avatar-sm',
              a.nzSize === 'small',
            ),
            m('ngStyle', a.styleMap));
      },
      dependencies: [L],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var ze = ['*'];
function fe(e, t) {
  if ((e & 1 && (c(0, 'div', 1), C(1, 'nz-skeleton-element', 4), d()), e & 2)) {
    let o = s(2);
    r(),
      m('nzSize', o.avatar.size || 'default')(
        'nzShape',
        o.avatar.shape || 'circle',
      );
  }
}
function ue(e, t) {
  if ((e & 1 && C(0, 'h3', 5), e & 2)) {
    let o = s(2);
    k('width', o.toCSSUnit(o.title.width));
  }
}
function Ce(e, t) {
  if ((e & 1 && C(0, 'li'), e & 2)) {
    let o = t.$index,
      n = s(3);
    k('width', n.toCSSUnit(n.widthList[o]));
  }
}
function ve(e, t) {
  if ((e & 1 && (c(0, 'ul', 3), O(1, Ce, 1, 2, 'li', 6, K), d()), e & 2)) {
    let o = s(2);
    r(), F(o.rowsList);
  }
}
function he(e, t) {
  if (
    (e & 1 &&
      (l(0, fe, 2, 2, 'div', 1),
      c(1, 'div', 0),
      l(2, ue, 1, 2, 'h3', 2)(3, ve, 3, 0, 'ul', 3),
      d()),
    e & 2)
  ) {
    let o = s();
    p(o.nzAvatar ? 0 : -1),
      r(2),
      p(o.nzTitle ? 2 : -1),
      r(),
      p(o.nzParagraph ? 3 : -1);
  }
}
function ge(e, t) {
  e & 1 && y(0);
}
var le = (() => {
  let t = class t {
    constructor(n) {
      (this.cdr = n),
        (this.nzActive = !1),
        (this.nzLoading = !0),
        (this.nzRound = !1),
        (this.nzTitle = !0),
        (this.nzAvatar = !1),
        (this.nzParagraph = !0),
        (this.rowsList = []),
        (this.widthList = []);
    }
    toCSSUnit(n = '') {
      return ie(n);
    }
    getTitleProps() {
      let n = !!this.nzAvatar,
        i = !!this.nzParagraph,
        a = '';
      return (
        !n && i ? (a = '38%') : n && i && (a = '50%'),
        N({ width: a }, this.getProps(this.nzTitle))
      );
    }
    getAvatarProps() {
      let n = this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
      return N({ shape: n, size: 'large' }, this.getProps(this.nzAvatar));
    }
    getParagraphProps() {
      let n = !!this.nzAvatar,
        i = !!this.nzTitle,
        a = {};
      return (
        (!n || !i) && (a.width = '61%'),
        !n && i ? (a.rows = 3) : (a.rows = 2),
        N(N({}, a), this.getProps(this.nzParagraph))
      );
    }
    getProps(n) {
      return n && typeof n == 'object' ? n : {};
    }
    getWidthList() {
      let { width: n, rows: i } = this.paragraph,
        a = [];
      return (
        n && Array.isArray(n)
          ? (a = n)
          : n && !Array.isArray(n) && ((a = []), (a[i - 1] = n)),
        a
      );
    }
    updateProps() {
      (this.title = this.getTitleProps()),
        (this.avatar = this.getAvatarProps()),
        (this.paragraph = this.getParagraphProps()),
        (this.rowsList = [...Array(this.paragraph.rows)]),
        (this.widthList = this.getWidthList()),
        this.cdr.markForCheck();
    }
    ngOnInit() {
      this.updateProps();
    }
    ngOnChanges(n) {
      (n.nzTitle || n.nzAvatar || n.nzParagraph) && this.updateProps();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(h(I));
  }),
    (t.ɵcmp = u({
      type: t,
      selectors: [['nz-skeleton']],
      hostAttrs: [1, 'ant-skeleton'],
      hostVars: 6,
      hostBindings: function (i, a) {
        i & 2 &&
          f('ant-skeleton-with-avatar', !!a.nzAvatar)(
            'ant-skeleton-active',
            a.nzActive,
          )('ant-skeleton-round', !!a.nzRound);
      },
      inputs: {
        nzActive: 'nzActive',
        nzLoading: 'nzLoading',
        nzRound: 'nzRound',
        nzTitle: 'nzTitle',
        nzAvatar: 'nzAvatar',
        nzParagraph: 'nzParagraph',
      },
      exportAs: ['nzSkeleton'],
      standalone: !0,
      features: [B, v],
      ngContentSelectors: ze,
      decls: 2,
      vars: 1,
      consts: [
        [1, 'ant-skeleton-content'],
        [1, 'ant-skeleton-header'],
        [1, 'ant-skeleton-title', 3, 'width'],
        [1, 'ant-skeleton-paragraph'],
        ['nzType', 'avatar', 3, 'nzSize', 'nzShape'],
        [1, 'ant-skeleton-title'],
        [3, 'width'],
      ],
      template: function (i, a) {
        i & 1 && (_(), l(0, he, 4, 3, 'div', 0)(1, ge, 1, 0)),
          i & 2 && p(a.nzLoading ? 0 : 1);
      },
      dependencies: [ae, re],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var se = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = E({ type: t })),
    (t.ɵinj = w({}));
  let e = t;
  return e;
})();
var de = (() => {
  let t = class t {
    constructor() {
      this.nzHoverable = !0;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = P({
      type: t,
      selectors: [['', 'nz-card-grid', '']],
      hostAttrs: [1, 'ant-card-grid'],
      hostVars: 2,
      hostBindings: function (i, a) {
        i & 2 && f('ant-card-hoverable', a.nzHoverable);
      },
      inputs: { nzHoverable: [2, 'nzHoverable', 'nzHoverable', z] },
      exportAs: ['nzCardGrid'],
      standalone: !0,
      features: [g],
    }));
  let e = t;
  return e;
})();
var Se = ['*'];
function xe(e, t) {
  e & 1 && y(0);
}
var pe = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = u({
      type: t,
      selectors: [['nz-card-tab']],
      viewQuery: function (i, a) {
        if ((i & 1 && X(W, 7), i & 2)) {
          let U;
          M((U = A())) && (a.template = U.first);
        }
      },
      exportAs: ['nzCardTab'],
      standalone: !0,
      features: [v],
      ngContentSelectors: Se,
      decls: 1,
      vars: 0,
      template: function (i, a) {
        i & 1 && (_(), l(0, xe, 1, 0, 'ng-template'));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let e = t;
  return e;
})();
var Ne = ['*'],
  De = () => ({ rows: 4 });
function ke(e, t) {
  if ((e & 1 && (j(0), Q(1), H()), e & 2)) {
    let o = s(3);
    r(), R(o.nzTitle);
  }
}
function Me(e, t) {
  if (
    (e & 1 && (c(0, 'div', 6), l(1, ke, 2, 1, 'ng-container', 9), d()), e & 2)
  ) {
    let o = s(2);
    r(), m('nzStringTemplateOutlet', o.nzTitle);
  }
}
function Ae(e, t) {
  if ((e & 1 && (j(0), Q(1), H()), e & 2)) {
    let o = s(3);
    r(), R(o.nzExtra);
  }
}
function be(e, t) {
  if (
    (e & 1 && (c(0, 'div', 7), l(1, Ae, 2, 1, 'ng-container', 9), d()), e & 2)
  ) {
    let o = s(2);
    r(), m('nzStringTemplateOutlet', o.nzExtra);
  }
}
function we(e, t) {}
function Ee(e, t) {
  if ((e & 1 && l(0, we, 0, 0, 'ng-template', 8), e & 2)) {
    let o = s(2);
    m('ngTemplateOutlet', o.listOfNzCardTabComponent.template);
  }
}
function Pe(e, t) {
  if (
    (e & 1 &&
      (c(0, 'div', 0)(1, 'div', 5),
      l(2, Me, 2, 1, 'div', 6)(3, be, 2, 1, 'div', 7),
      d(),
      l(4, Ee, 1, 1, null, 8),
      d()),
    e & 2)
  ) {
    let o = s();
    r(2),
      p(o.nzTitle ? 2 : -1),
      r(),
      p(o.nzExtra ? 3 : -1),
      r(),
      p(o.listOfNzCardTabComponent ? 4 : -1);
  }
}
function Be(e, t) {}
function Oe(e, t) {
  if (
    (e & 1 && (c(0, 'div', 1), l(1, Be, 0, 0, 'ng-template', 8), d()), e & 2)
  ) {
    let o = s();
    r(), m('ngTemplateOutlet', o.nzCover);
  }
}
function Fe(e, t) {
  e & 1 && C(0, 'nz-skeleton', 3),
    e & 2 && m('nzActive', !0)('nzTitle', !1)('nzParagraph', Y(3, De));
}
function Ie(e, t) {
  e & 1 && y(0);
}
function Le(e, t) {}
function qe(e, t) {
  if (
    (e & 1 && (c(0, 'li')(1, 'span'), l(2, Le, 0, 0, 'ng-template', 8), d()()),
    e & 2)
  ) {
    let o = t.$implicit,
      n = s(2);
    k('width', 100 / n.nzActions.length, '%'), r(2), m('ngTemplateOutlet', o);
  }
}
function je(e, t) {
  if ((e & 1 && (c(0, 'ul', 4), O(1, qe, 3, 3, 'li', 10, Z), d()), e & 2)) {
    let o = s();
    r(), F(o.nzActions);
  }
}
var ce = 'card',
  x = class x {
    constructor(t, o, n) {
      (this.nzConfigService = t),
        (this.cdr = o),
        (this.directionality = n),
        (this._nzModuleName = ce),
        (this.nzBordered = !0),
        (this.nzBorderless = !1),
        (this.nzLoading = !1),
        (this.nzHoverable = !1),
        (this.nzBodyStyle = null),
        (this.nzActions = []),
        (this.nzType = null),
        (this.nzSize = 'default'),
        (this.dir = 'ltr'),
        (this.destroy$ = new J()),
        this.nzConfigService
          .getConfigChangeEventForComponent(ce)
          .pipe(q(this.destroy$))
          .subscribe(() => {
            this.cdr.markForCheck();
          });
    }
    ngOnInit() {
      this.directionality.change?.pipe(q(this.destroy$)).subscribe(t => {
        (this.dir = t), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value);
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
(x.ɵfac = function (o) {
  return new (o || x)(h(oe), h(I), h(te));
}),
  (x.ɵcmp = u({
    type: x,
    selectors: [['nz-card']],
    contentQueries: function (o, n, i) {
      if ((o & 1 && (G(i, pe, 5), G(i, de, 4)), o & 2)) {
        let a;
        M((a = A())) && (n.listOfNzCardTabComponent = a.first),
          M((a = A())) && (n.listOfNzCardGridDirective = a);
      }
    },
    hostAttrs: [1, 'ant-card'],
    hostVars: 16,
    hostBindings: function (o, n) {
      o & 2 &&
        f('ant-card-loading', n.nzLoading)(
          'ant-card-bordered',
          n.nzBorderless === !1 && n.nzBordered,
        )('ant-card-hoverable', n.nzHoverable)(
          'ant-card-small',
          n.nzSize === 'small',
        )(
          'ant-card-contain-grid',
          n.listOfNzCardGridDirective && n.listOfNzCardGridDirective.length,
        )('ant-card-type-inner', n.nzType === 'inner')(
          'ant-card-contain-tabs',
          !!n.listOfNzCardTabComponent,
        )('ant-card-rtl', n.dir === 'rtl');
    },
    inputs: {
      nzBordered: [2, 'nzBordered', 'nzBordered', z],
      nzBorderless: [2, 'nzBorderless', 'nzBorderless', z],
      nzLoading: [2, 'nzLoading', 'nzLoading', z],
      nzHoverable: [2, 'nzHoverable', 'nzHoverable', z],
      nzBodyStyle: 'nzBodyStyle',
      nzCover: 'nzCover',
      nzActions: 'nzActions',
      nzType: 'nzType',
      nzSize: 'nzSize',
      nzTitle: 'nzTitle',
      nzExtra: 'nzExtra',
    },
    exportAs: ['nzCard'],
    standalone: !0,
    features: [g, v],
    ngContentSelectors: Ne,
    decls: 6,
    vars: 5,
    consts: [
      [1, 'ant-card-head'],
      [1, 'ant-card-cover'],
      [1, 'ant-card-body', 3, 'ngStyle'],
      [3, 'nzActive', 'nzTitle', 'nzParagraph'],
      [1, 'ant-card-actions'],
      [1, 'ant-card-head-wrapper'],
      [1, 'ant-card-head-title'],
      [1, 'ant-card-extra'],
      [3, 'ngTemplateOutlet'],
      [4, 'nzStringTemplateOutlet'],
      [3, 'width'],
    ],
    template: function (o, n) {
      o & 1 &&
        (_(),
        l(0, Pe, 5, 3, 'div', 0)(1, Oe, 2, 1, 'div', 1),
        c(2, 'div', 2),
        l(3, Fe, 1, 4, 'nz-skeleton', 3)(4, Ie, 1, 0),
        d(),
        l(5, je, 3, 0, 'ul', 4)),
        o & 2 &&
          (p(n.nzTitle || n.nzExtra || n.listOfNzCardTabComponent ? 0 : -1),
          r(),
          p(n.nzCover ? 1 : -1),
          r(),
          m('ngStyle', n.nzBodyStyle),
          r(),
          p(n.nzLoading ? 3 : 4),
          r(2),
          p(n.nzActions.length ? 5 : -1));
    },
    dependencies: [$, V, ee, L, se, le],
    encapsulation: 2,
    changeDetection: 0,
  }));
var T = x;
D([b()], T.prototype, 'nzBordered', void 0);
D([b()], T.prototype, 'nzBorderless', void 0);
D([b()], T.prototype, 'nzHoverable', void 0);
D([b()], T.prototype, 'nzSize', void 0);
var en = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = E({ type: t })),
    (t.ɵinj = w({ imports: [ne] }));
  let e = t;
  return e;
})();
export { T as a, en as b };
