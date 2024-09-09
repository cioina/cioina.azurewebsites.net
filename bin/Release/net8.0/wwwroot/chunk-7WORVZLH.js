import { a as dt, b as ut } from './chunk-CLBWRC3X.js';
import {
  $a as et,
  Ca as X,
  Da as h,
  Eb as rt,
  Fc as j,
  Ga as a,
  Jb as st,
  Kb as N,
  Lb as ct,
  Na as v,
  O as Q,
  Ob as lt,
  Pb as at,
  Q as V,
  Qc as pt,
  Rb as ht,
  Rc as S,
  Sa as u,
  Sb as I,
  Ta as p,
  U as H,
  Ua as Y,
  Wc as mt,
  X as $,
  Y as k,
  Ya as tt,
  Z as q,
  a as D,
  b as L,
  bb as m,
  cb as x,
  db as A,
  ea as P,
  g as R,
  gb as nt,
  ha as U,
  hb as w,
  ia as W,
  ib as C,
  jb as T,
  kb as b,
  l as g,
  lb as it,
  mb as ot,
  na as y,
  oa as Z,
  pc as E,
  qa as J,
  rc as ft,
  u as B,
  ua as G,
  ub as O,
  va as f,
  wa as c,
  wb as M,
  xa as K,
  ya as _,
} from './chunk-55QWLPSH.js';
function F(n, t) {
  if (!n || !n.getClientRects().length) return 0;
  let e = n.getBoundingClientRect();
  if (e.width || e.height) {
    if (t === window) {
      let i = n.ownerDocument.documentElement;
      return e.top - i.clientTop;
    }
    return e.top - t.getBoundingClientRect().top;
  }
  return e.top;
}
var Tt = ['ink'],
  St = ['*'],
  kt = n => ({ 'ant-anchor-wrapper-horizontal': n }),
  yt = n => ({ 'ant-anchor-fixed': n });
function _t(n, t) {}
function xt(n, t) {
  if (
    (n & 1 && (u(0, 'nz-affix', 2), h(1, _t, 0, 0, 'ng-template', 3), p()),
    n & 2)
  ) {
    let e = m(),
      i = b(3);
    a('nzOffsetTop', e.nzOffsetTop)('nzTarget', e.container),
      f(),
      a('ngTemplateOutlet', i);
  }
}
function At(n, t) {}
function wt(n, t) {
  if ((n & 1 && h(0, At, 0, 0, 'ng-template', 3), n & 2)) {
    m();
    let e = b(3);
    a('ngTemplateOutlet', e);
  }
}
function Ot(n, t) {
  if (
    (n & 1 &&
      (u(0, 'div', 4)(1, 'div', 5)(2, 'div', 6),
      Y(3, 'div', 7, 1),
      p(),
      A(5),
      p()()),
    n & 2)
  ) {
    let e = m();
    a('ngClass', M(3, kt, e.nzDirection === 'horizontal'))(
      'ngStyle',
      e.wrapperStyle,
    ),
      f(),
      a('ngClass', M(5, yt, !e.nzAffix && !e.nzShowInkInFixed));
  }
}
var zt = 'ant-anchor-ink-ball-visible',
  Nt = 'anchor',
  It = /#([^#]+)$/,
  Et = ft({ passive: !0 }),
  z = class z {
    constructor(t, e, i, o, r, s) {
      (this.nzConfigService = t),
        (this.scrollSrv = e),
        (this.cdr = i),
        (this.platform = o),
        (this.zone = r),
        (this.renderer = s),
        (this._nzModuleName = Nt),
        (this.nzAffix = !0),
        (this.nzShow = !0),
        (this.nzShowInkInFixed = !1),
        (this.nzBounds = 5),
        (this.nzOffsetTop = void 0),
        (this.nzTargetOffset = void 0),
        (this.nzDirection = 'vertical'),
        (this.nzClick = new y()),
        (this.nzChange = new y()),
        (this.nzScroll = new y()),
        (this.visible = !1),
        (this.wrapperStyle = { 'max-height': '100vh' }),
        (this.links = []),
        (this.animating = !1),
        (this.destroy$ = new R()),
        (this.doc = $(lt));
    }
    registerLink(t) {
      this.links.push(t);
    }
    unregisterLink(t) {
      this.links.splice(this.links.indexOf(t), 1);
    }
    getContainer() {
      return this.container || window;
    }
    ngAfterViewInit() {
      this.registerScrollEvent();
    }
    ngOnDestroy() {
      clearTimeout(this.handleScrollTimeoutID),
        this.destroy$.next(!0),
        this.destroy$.complete();
    }
    registerScrollEvent() {
      this.platform.isBrowser &&
        (this.destroy$.next(!0),
        this.zone.runOutsideAngular(() => {
          B(this.getContainer(), 'scroll', Et)
            .pipe(V(50), Q(this.destroy$))
            .subscribe(() => this.handleScroll());
        }),
        (this.handleScrollTimeoutID = setTimeout(() => this.handleScroll())));
    }
    handleScroll() {
      if (typeof document > 'u' || this.animating) return;
      let t = [],
        i =
          (this.nzTargetOffset ? this.nzTargetOffset : this.nzOffsetTop || 0) +
          this.nzBounds;
      if (
        (this.links.forEach(o => {
          let r = It.exec(o.nzHref.toString());
          if (!r) return;
          let s = this.doc.getElementById(r[1]);
          if (s) {
            let d = F(s, this.getContainer());
            d < i && t.push({ top: d, comp: o });
          }
        }),
        (this.visible = !!t.length),
        !this.visible)
      )
        this.clearActive(), this.cdr.detectChanges();
      else {
        let o = t.reduce((r, s) => (s.top > r.top ? s : r));
        this.handleActive(o.comp);
      }
      this.setVisible();
    }
    clearActive() {
      this.links.forEach(t => {
        t.unsetActive();
      });
    }
    setActive(t) {
      let e = this.activeLink,
        i =
          (this.nzCurrentAnchor &&
            this.links.find(r => r.nzHref === this.nzCurrentAnchor)) ||
          t;
      if (!i) return;
      i.setActive();
      let o = i.getLinkTitleElement();
      this.nzDirection === 'vertical'
        ? (this.ink.nativeElement.style.top = `${o.offsetTop + o.clientHeight / 2 - 4.5}px`)
        : (this.ink.nativeElement.style.left = `${o.offsetLeft + o.clientWidth / 2}px`),
        (this.activeLink = (t || i).nzHref),
        e !== this.activeLink && this.nzChange.emit(this.activeLink);
    }
    handleActive(t) {
      this.clearActive(),
        this.setActive(t),
        (this.visible = !0),
        this.setVisible(),
        this.nzScroll.emit(t);
    }
    setVisible() {
      this.ink &&
        (this.visible
          ? this.renderer.addClass(this.ink.nativeElement, zt)
          : this.renderer.removeClass(this.ink.nativeElement, zt));
    }
    handleScrollTo(t) {
      let e = this.doc.querySelector(t.nzHref);
      if (!e) return;
      this.animating = !0;
      let i = this.scrollSrv.getScroll(this.getContainer()),
        o = F(e, this.getContainer()),
        r = i + o;
      (r -=
        this.nzTargetOffset !== void 0
          ? this.nzTargetOffset
          : this.nzOffsetTop || 0),
        this.scrollSrv.scrollTo(this.getContainer(), r, {
          callback: () => {
            (this.animating = !1), this.handleActive(t);
          },
        }),
        this.nzClick.emit(t.nzHref);
    }
    ngOnChanges(t) {
      let { nzShow: e, nzOffsetTop: i, nzContainer: o, nzCurrentAnchor: r } = t;
      if (
        (i &&
          (this.wrapperStyle = L(D({}, this.wrapperStyle), {
            'max-height': `calc(100vh - ${this.nzOffsetTop}px)`,
          })),
        e &&
          (this.wrapperStyle = L(D({}, this.wrapperStyle), {
            display: this.nzShow ? 'block' : 'none',
          })),
        o)
      ) {
        let s = this.nzContainer;
        (this.container = typeof s == 'string' ? this.doc.querySelector(s) : s),
          this.registerScrollEvent();
      }
      r && this.setActive();
    }
  };
(z.ɵfac = function (e) {
  return new (e || z)(c(pt), c(mt), c(st), c(E), c(Z), c(_));
}),
  (z.ɵcmp = k({
    type: z,
    selectors: [['nz-anchor']],
    viewQuery: function (e, i) {
      if ((e & 1 && w(Tt, 5), e & 2)) {
        let o;
        C((o = T())) && (i.ink = o.first);
      }
    },
    inputs: {
      nzAffix: [2, 'nzAffix', 'nzAffix', N],
      nzShow: [2, 'nzShow', 'nzShow', N],
      nzShowInkInFixed: [2, 'nzShowInkInFixed', 'nzShowInkInFixed', N],
      nzBounds: [2, 'nzBounds', 'nzBounds', ct],
      nzOffsetTop: [2, 'nzOffsetTop', 'nzOffsetTop', j],
      nzTargetOffset: [2, 'nzTargetOffset', 'nzTargetOffset', j],
      nzContainer: 'nzContainer',
      nzCurrentAnchor: 'nzCurrentAnchor',
      nzDirection: 'nzDirection',
    },
    outputs: { nzClick: 'nzClick', nzChange: 'nzChange', nzScroll: 'nzScroll' },
    exportAs: ['nzAnchor'],
    standalone: !0,
    features: [X, P, O],
    ngContentSelectors: St,
    decls: 4,
    vars: 1,
    consts: [
      ['content', ''],
      ['ink', ''],
      [3, 'nzOffsetTop', 'nzTarget'],
      [3, 'ngTemplateOutlet'],
      [1, 'ant-anchor-wrapper', 3, 'ngClass', 'ngStyle'],
      [1, 'ant-anchor', 3, 'ngClass'],
      [1, 'ant-anchor-ink'],
      [1, 'ant-anchor-ink-ball'],
    ],
    template: function (e, i) {
      e & 1 &&
        (x(),
        h(0, xt, 2, 3, 'nz-affix', 2)(1, wt, 1, 1, null, 3)(
          2,
          Ot,
          6,
          7,
          'ng-template',
          null,
          0,
          rt,
        )),
        e & 2 && v(i.nzAffix ? 0 : 1);
    },
    dependencies: [at, ht, I, ut, dt],
    encapsulation: 2,
    changeDetection: 0,
  }));
var l = z;
g([S()], l.prototype, 'nzShowInkInFixed', void 0);
g([S()], l.prototype, 'nzBounds', void 0);
g([S()], l.prototype, 'nzOffsetTop', void 0);
g([S()], l.prototype, 'nzTargetOffset', void 0);
var Lt = ['nzTemplate'],
  bt = ['linkTitle'],
  Mt = ['*'];
function jt(n, t) {
  if ((n & 1 && (u(0, 'span'), it(1), p()), n & 2)) {
    let e = m();
    f(), ot(e.titleStr);
  }
}
function Ft(n, t) {}
function Rt(n, t) {
  if ((n & 1 && h(0, Ft, 0, 0, 'ng-template', 2), n & 2)) {
    let e = m();
    a('ngTemplateOutlet', e.titleTpl || e.nzTemplate);
  }
}
function Bt(n, t) {
  n & 1 && A(0);
}
var ze = (() => {
  let t = class t {
    set nzTitle(i) {
      i instanceof K
        ? ((this.titleStr = null), (this.titleTpl = i))
        : (this.titleStr = i);
    }
    constructor(i, o, r, s) {
      (this.elementRef = i),
        (this.anchorComp = o),
        (this.platform = r),
        (this.renderer = s),
        (this.nzHref = '#'),
        (this.titleStr = ''),
        (this.nzDirection = 'vertical');
    }
    ngOnInit() {
      this.anchorComp.registerLink(this),
        (this.nzDirection = this.anchorComp.nzDirection);
    }
    getLinkTitleElement() {
      return this.linkTitle.nativeElement;
    }
    setActive() {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        'ant-anchor-link-active',
      );
    }
    unsetActive() {
      this.renderer.removeClass(
        this.elementRef.nativeElement,
        'ant-anchor-link-active',
      );
    }
    goToClick(i) {
      i.preventDefault(),
        i.stopPropagation(),
        this.platform.isBrowser && this.anchorComp.handleScrollTo(this);
    }
    ngOnDestroy() {
      this.anchorComp.unregisterLink(this);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(c(J), c(l), c(E), c(_));
  }),
    (t.ɵcmp = k({
      type: t,
      selectors: [['nz-link']],
      contentQueries: function (o, r, s) {
        if ((o & 1 && nt(s, Lt, 5), o & 2)) {
          let d;
          C((d = T())) && (r.nzTemplate = d.first);
        }
      },
      viewQuery: function (o, r) {
        if ((o & 1 && w(bt, 5), o & 2)) {
          let s;
          C((s = T())) && (r.linkTitle = s.first);
        }
      },
      hostAttrs: [1, 'ant-anchor-link'],
      inputs: { nzHref: 'nzHref', nzTarget: 'nzTarget', nzTitle: 'nzTitle' },
      exportAs: ['nzLink'],
      standalone: !0,
      features: [O],
      ngContentSelectors: Mt,
      decls: 5,
      vars: 5,
      consts: [
        ['linkTitle', ''],
        [1, 'ant-anchor-link-title', 3, 'click', 'href', 'title', 'target'],
        [3, 'ngTemplateOutlet'],
      ],
      template: function (o, r) {
        if (o & 1) {
          let s = tt();
          x(),
            u(0, 'a', 1, 0),
            et('click', function (vt) {
              return U(s), W(r.goToClick(vt));
            }),
            h(2, jt, 2, 1, 'span')(3, Rt, 1, 1, null, 2),
            p(),
            h(4, Bt, 1, 0);
        }
        o & 2 &&
          (a('href', r.nzHref, G)('title', r.titleStr)('target', r.nzTarget),
          f(2),
          v(r.titleStr ? 2 : 3),
          f(2),
          v(r.nzDirection === 'vertical' ? 4 : -1));
      },
      dependencies: [I],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var ke = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = q({ type: t })),
    (t.ɵinj = H({ imports: [l] }));
  let n = t;
  return n;
})();
export { l as a, ze as b, ke as c };
