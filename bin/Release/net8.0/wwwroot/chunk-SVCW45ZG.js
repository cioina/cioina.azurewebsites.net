import {
  $a as N,
  A as ue,
  Ca as Q,
  Cd as tt,
  Da as g,
  E as Z,
  Eb as Qe,
  Ed as ae,
  Fc as qe,
  G as re,
  Ga as z,
  Ha as ce,
  Hd as nt,
  Ia as v,
  Id as De,
  Jb as V,
  Jd as it,
  Kb as c,
  Kd as ot,
  M as we,
  N as de,
  Na as Y,
  O as u,
  Pb as ve,
  Qc as Xe,
  Rb as Ge,
  Rc as Ze,
  Rd as ie,
  Sa as I,
  Sb as Me,
  Sd as p,
  Se as lt,
  T as me,
  Ta as O,
  Td as st,
  U as J,
  Ua as q,
  V as Ie,
  Va as Le,
  W as Fe,
  Wa as Be,
  X as m,
  Xd as rt,
  Y as S,
  Ya as te,
  Z as K,
  _ as ee,
  _a as he,
  ae as Ce,
  bb as M,
  bd as Ne,
  be as at,
  cb as G,
  cd as ke,
  db as B,
  dc as Ue,
  ea as w,
  g as d,
  gb as U,
  gc as Ye,
  h,
  ha as x,
  hb as fe,
  hc as Oe,
  ia as L,
  ib as _,
  jb as $,
  k as je,
  kb as ze,
  l as Pe,
  lb as He,
  mb as We,
  na as C,
  nc as D,
  p as H,
  pc as ge,
  pd as Je,
  q as R,
  qa as j,
  r as Ve,
  rd as Ke,
  tb as ne,
  u as le,
  ub as k,
  va as P,
  wa as l,
  x as E,
  xa as xe,
  ya as W,
  yd as et,
  z as A,
  za as pe,
} from './chunk-55QWLPSH.js';
var b = new Ie('NzIsInDropDownMenuToken'),
  Te = new Ie('NzMenuServiceLocalToken');
var f = (() => {
  let i = class i {
    constructor() {
      (this.descendantMenuItemClick$ = new d()),
        (this.childMenuItemClick$ = new d()),
        (this.theme$ = new h('light')),
        (this.mode$ = new h('vertical')),
        (this.inlineIndent$ = new h(24)),
        (this.isChildSubMenuOpen$ = new h(!1));
    }
    onDescendantMenuItemClick(t) {
      this.descendantMenuItemClick$.next(t);
    }
    onChildMenuItemClick(t) {
      this.childMenuItemClick$.next(t);
    }
    setMode(t) {
      this.mode$.next(t);
    }
    setTheme(t) {
      this.theme$.next(t);
    }
    setInlineIndent(t) {
      this.inlineIndent$.next(t);
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)();
  }),
    (i.ɵprov = me({ token: i, factory: i.ɵfac }));
  let o = i;
  return o;
})();
var oe = (() => {
  let i = class i {
    onChildMenuItemClick(t) {
      this.childMenuItemClick$.next(t);
    }
    setOpenStateWithoutDebounce(t) {
      this.isCurrentSubMenuOpen$.next(t);
    }
    setMouseEnterTitleOrOverlayState(t) {
      this.isMouseEnterTitleOrOverlay$.next(t);
    }
    constructor(t) {
      (this.nzMenuService = t),
        (this.mode$ = this.nzMenuService.mode$.pipe(
          H(r =>
            r === 'inline'
              ? 'inline'
              : r === 'vertical' || this.nzHostSubmenuService
                ? 'vertical'
                : 'horizontal',
          ),
        )),
        (this.level = 1),
        (this.isMenuInsideDropDown = m(b)),
        (this.isCurrentSubMenuOpen$ = new h(!1)),
        (this.isChildSubMenuOpen$ = new h(!1)),
        (this.isMouseEnterTitleOrOverlay$ = new d()),
        (this.childMenuItemClick$ = new d()),
        (this.destroy$ = new d()),
        (this.nzHostSubmenuService = m(i, { optional: !0, skipSelf: !0 })),
        this.nzHostSubmenuService &&
          (this.level = this.nzHostSubmenuService.level + 1);
      let n = this.childMenuItemClick$.pipe(
          Ve(() => this.mode$),
          A(r => r !== 'inline' || this.isMenuInsideDropDown),
          Z(!1),
        ),
        e = E(this.isMouseEnterTitleOrOverlay$, n);
      R([this.isChildSubMenuOpen$, e])
        .pipe(
          H(([r, F]) => r || F),
          ue(150),
          re(),
          u(this.destroy$),
        )
        .pipe(re())
        .subscribe(r => {
          this.setOpenStateWithoutDebounce(r),
            this.nzHostSubmenuService
              ? this.nzHostSubmenuService.isChildSubMenuOpen$.next(r)
              : this.nzMenuService.isChildSubMenuOpen$.next(r);
        });
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(Fe(f));
  }),
    (i.ɵprov = me({ token: i, factory: i.ɵfac }));
  let o = i;
  return o;
})();
var zt = ['nz-menu-item', ''],
  vt = ['*'],
  ye = (() => {
    let i = class i {
      clickMenuItem(t) {
        this.nzDisabled
          ? (t.preventDefault(), t.stopPropagation())
          : (this.nzMenuService.onDescendantMenuItemClick(this),
            this.nzSubmenuService
              ? this.nzSubmenuService.onChildMenuItemClick(this)
              : this.nzMenuService.onChildMenuItemClick(this));
      }
      setSelectedState(t) {
        (this.nzSelected = t), this.selected$.next(t);
      }
      updateRouterActive() {
        !this.listOfRouterLink ||
          !this.router ||
          !this.router.navigated ||
          !this.nzMatchRouter ||
          Promise.resolve().then(() => {
            let t = this.hasActiveLinks();
            this.nzSelected !== t &&
              ((this.nzSelected = t),
              this.setSelectedState(this.nzSelected),
              this.cdr.markForCheck());
          });
      }
      hasActiveLinks() {
        let t = this.isLinkActive(this.router);
        return (
          (this.routerLink && t(this.routerLink)) ||
          this.listOfRouterLink.some(t)
        );
      }
      isLinkActive(t) {
        return n =>
          t.isActive(n.urlTree || '', {
            paths: this.nzMatchRouterExact ? 'exact' : 'subset',
            queryParams: this.nzMatchRouterExact ? 'exact' : 'subset',
            fragment: 'ignored',
            matrixParams: 'ignored',
          });
      }
      constructor(t, n) {
        (this.nzMenuService = t),
          (this.cdr = n),
          (this.destroy$ = new d()),
          (this.nzSubmenuService = m(oe, { optional: !0 })),
          (this.directionality = m(D)),
          (this.routerLink = m(Oe, { optional: !0 })),
          (this.router = m(Ye, { optional: !0 })),
          (this.isMenuInsideDropDown = m(b)),
          (this.level = this.nzSubmenuService
            ? this.nzSubmenuService.level + 1
            : 1),
          (this.selected$ = new d()),
          (this.inlinePaddingLeft = null),
          (this.dir = 'ltr'),
          (this.nzDisabled = !1),
          (this.nzSelected = !1),
          (this.nzDanger = !1),
          (this.nzMatchRouterExact = !1),
          (this.nzMatchRouter = !1),
          this.router &&
            this.router.events
              .pipe(
                u(this.destroy$),
                A(e => e instanceof Ue),
              )
              .subscribe(() => {
                this.updateRouterActive();
              });
      }
      ngOnInit() {
        R([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
          .pipe(u(this.destroy$))
          .subscribe(([t, n]) => {
            this.inlinePaddingLeft = t === 'inline' ? this.level * n : null;
          }),
          (this.dir = this.directionality.value),
          this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
            this.dir = t;
          });
      }
      ngAfterContentInit() {
        this.listOfRouterLink.changes
          .pipe(u(this.destroy$))
          .subscribe(() => this.updateRouterActive()),
          this.updateRouterActive();
      }
      ngOnChanges(t) {
        t.nzSelected && this.setSelectedState(this.nzSelected);
      }
      ngOnDestroy() {
        this.destroy$.next(!0), this.destroy$.complete();
      }
    };
    (i.ɵfac = function (n) {
      return new (n || i)(l(f), l(V));
    }),
      (i.ɵcmp = S({
        type: i,
        selectors: [['', 'nz-menu-item', '']],
        contentQueries: function (n, e, a) {
          if ((n & 1 && U(a, Oe, 5), n & 2)) {
            let r;
            _((r = $())) && (e.listOfRouterLink = r);
          }
        },
        hostVars: 20,
        hostBindings: function (n, e) {
          n & 1 &&
            N('click', function (r) {
              return e.clickMenuItem(r);
            }),
            n & 2 &&
              (ce(
                'padding-left',
                e.dir === 'rtl' ? null : e.nzPaddingLeft || e.inlinePaddingLeft,
                'px',
              )(
                'padding-right',
                e.dir === 'rtl' ? e.nzPaddingLeft || e.inlinePaddingLeft : null,
                'px',
              ),
              v('ant-dropdown-menu-item', e.isMenuInsideDropDown)(
                'ant-dropdown-menu-item-selected',
                e.isMenuInsideDropDown && e.nzSelected,
              )(
                'ant-dropdown-menu-item-danger',
                e.isMenuInsideDropDown && e.nzDanger,
              )(
                'ant-dropdown-menu-item-disabled',
                e.isMenuInsideDropDown && e.nzDisabled,
              )('ant-menu-item', !e.isMenuInsideDropDown)(
                'ant-menu-item-selected',
                !e.isMenuInsideDropDown && e.nzSelected,
              )('ant-menu-item-danger', !e.isMenuInsideDropDown && e.nzDanger)(
                'ant-menu-item-disabled',
                !e.isMenuInsideDropDown && e.nzDisabled,
              ));
        },
        inputs: {
          nzPaddingLeft: [2, 'nzPaddingLeft', 'nzPaddingLeft', qe],
          nzDisabled: [2, 'nzDisabled', 'nzDisabled', c],
          nzSelected: [2, 'nzSelected', 'nzSelected', c],
          nzDanger: [2, 'nzDanger', 'nzDanger', c],
          nzMatchRouterExact: [
            2,
            'nzMatchRouterExact',
            'nzMatchRouterExact',
            c,
          ],
          nzMatchRouter: [2, 'nzMatchRouter', 'nzMatchRouter', c],
        },
        exportAs: ['nzMenuItem'],
        standalone: !0,
        features: [Q, w, k],
        attrs: zt,
        ngContentSelectors: vt,
        decls: 2,
        vars: 0,
        consts: [[1, 'ant-menu-title-content']],
        template: function (n, e) {
          n & 1 && (G(), I(0, 'span', 0), B(1), O());
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let o = i;
    return o;
  })();
var Mt = ['nz-submenu-inline-child', ''];
function gt(o, i) {}
var ut = (() => {
  let i = class i {
    constructor(t, n, e) {
      (this.elementRef = t),
        (this.renderer = n),
        (this.directionality = e),
        (this.templateOutlet = null),
        (this.menuClass = ''),
        (this.mode = 'vertical'),
        (this.nzOpen = !1),
        (this.listOfCacheClassName = []),
        (this.expandState = 'collapsed'),
        (this.dir = 'ltr'),
        (this.destroy$ = new d());
    }
    calcMotionState() {
      this.nzOpen
        ? (this.expandState = 'expanded')
        : (this.expandState = 'collapsed');
    }
    ngOnInit() {
      this.calcMotionState(),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
          this.dir = t;
        });
    }
    ngOnChanges(t) {
      let { mode: n, nzOpen: e, menuClass: a } = t;
      (n || e) && this.calcMotionState(),
        a &&
          (this.listOfCacheClassName.length &&
            this.listOfCacheClassName
              .filter(r => !!r)
              .forEach(r => {
                this.renderer.removeClass(this.elementRef.nativeElement, r);
              }),
          this.menuClass &&
            ((this.listOfCacheClassName = this.menuClass.split(' ')),
            this.listOfCacheClassName
              .filter(r => !!r)
              .forEach(r => {
                this.renderer.addClass(this.elementRef.nativeElement, r);
              })));
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(j), l(W), l(D));
  }),
    (i.ɵcmp = S({
      type: i,
      selectors: [['', 'nz-submenu-inline-child', '']],
      hostAttrs: [1, 'ant-menu', 'ant-menu-inline', 'ant-menu-sub'],
      hostVars: 3,
      hostBindings: function (n, e) {
        n & 2 &&
          (he('@collapseMotion', e.expandState),
          v('ant-menu-rtl', e.dir === 'rtl'));
      },
      inputs: {
        templateOutlet: 'templateOutlet',
        menuClass: 'menuClass',
        mode: 'mode',
        nzOpen: 'nzOpen',
      },
      exportAs: ['nzSubmenuInlineChild'],
      standalone: !0,
      features: [w, k],
      attrs: Mt,
      decls: 1,
      vars: 1,
      consts: [[3, 'ngTemplateOutlet']],
      template: function (n, e) {
        n & 1 && g(0, gt, 0, 0, 'ng-template', 0),
          n & 2 && z('ngTemplateOutlet', e.templateOutlet);
      },
      dependencies: [Me],
      encapsulation: 2,
      data: { animation: [rt] },
      changeDetection: 0,
    }));
  let o = i;
  return o;
})();
var Dt = ['nz-submenu-none-inline-child', ''];
function Ct(o, i) {}
var dt = (() => {
  let i = class i {
    constructor(t) {
      (this.directionality = t),
        (this.menuClass = ''),
        (this.theme = 'light'),
        (this.templateOutlet = null),
        (this.isMenuInsideDropDown = !1),
        (this.mode = 'vertical'),
        (this.position = 'right'),
        (this.nzDisabled = !1),
        (this.nzOpen = !1),
        (this.subMenuMouseState = new C()),
        (this.expandState = 'collapsed'),
        (this.dir = 'ltr'),
        (this.destroy$ = new d());
    }
    setMouseState(t) {
      this.nzDisabled || this.subMenuMouseState.next(t);
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    calcMotionState() {
      this.nzOpen
        ? this.mode === 'horizontal'
          ? (this.expandState = 'bottom')
          : this.mode === 'vertical' && (this.expandState = 'active')
        : (this.expandState = 'collapsed');
    }
    ngOnInit() {
      this.calcMotionState(),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
          this.dir = t;
        });
    }
    ngOnChanges(t) {
      let { mode: n, nzOpen: e } = t;
      (n || e) && this.calcMotionState();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(D));
  }),
    (i.ɵcmp = S({
      type: i,
      selectors: [['', 'nz-submenu-none-inline-child', '']],
      hostAttrs: [1, 'ant-menu-submenu', 'ant-menu-submenu-popup'],
      hostVars: 14,
      hostBindings: function (n, e) {
        n & 1 &&
          N('mouseenter', function () {
            return e.setMouseState(!0);
          })('mouseleave', function () {
            return e.setMouseState(!1);
          }),
          n & 2 &&
            (he('@slideMotion', e.expandState)('@zoomBigMotion', e.expandState),
            v('ant-menu-light', e.theme === 'light')(
              'ant-menu-dark',
              e.theme === 'dark',
            )('ant-menu-submenu-placement-bottom', e.mode === 'horizontal')(
              'ant-menu-submenu-placement-right',
              e.mode === 'vertical' && e.position === 'right',
            )(
              'ant-menu-submenu-placement-left',
              e.mode === 'vertical' && e.position === 'left',
            )('ant-menu-submenu-rtl', e.dir === 'rtl'));
      },
      inputs: {
        menuClass: 'menuClass',
        theme: 'theme',
        templateOutlet: 'templateOutlet',
        isMenuInsideDropDown: 'isMenuInsideDropDown',
        mode: 'mode',
        position: 'position',
        nzDisabled: 'nzDisabled',
        nzOpen: 'nzOpen',
      },
      outputs: { subMenuMouseState: 'subMenuMouseState' },
      exportAs: ['nzSubmenuNoneInlineChild'],
      standalone: !0,
      features: [w, k],
      attrs: Dt,
      decls: 2,
      vars: 16,
      consts: [
        [3, 'ngClass'],
        [3, 'ngTemplateOutlet'],
      ],
      template: function (n, e) {
        n & 1 && (I(0, 'div', 0), g(1, Ct, 0, 0, 'ng-template', 1), O()),
          n & 2 &&
            (v('ant-dropdown-menu', e.isMenuInsideDropDown)(
              'ant-menu',
              !e.isMenuInsideDropDown,
            )('ant-dropdown-menu-vertical', e.isMenuInsideDropDown)(
              'ant-menu-vertical',
              !e.isMenuInsideDropDown,
            )('ant-dropdown-menu-sub', e.isMenuInsideDropDown)(
              'ant-menu-sub',
              !e.isMenuInsideDropDown,
            )('ant-menu-rtl', e.dir === 'rtl'),
            z('ngClass', e.menuClass),
            P(),
            z('ngTemplateOutlet', e.templateOutlet));
      },
      dependencies: [ve, Me],
      encapsulation: 2,
      data: { animation: [at, Ce] },
      changeDetection: 0,
    }));
  let o = i;
  return o;
})();
var yt = ['nz-submenu-title', ''],
  St = ['*'];
function wt(o, i) {
  if ((o & 1 && q(0, 'span', 0), o & 2)) {
    let s = M();
    z('nzType', s.nzIcon);
  }
}
function It(o, i) {
  if ((o & 1 && (Le(0), I(1, 'span', 4), He(2), O(), Be()), o & 2)) {
    let s = M();
    P(2), We(s.nzTitle);
  }
}
function Ot(o, i) {
  o & 1 && q(0, 'span', 5);
}
function Nt(o, i) {
  o & 1 && q(0, 'span', 6);
}
function kt(o, i) {
  if (
    (o & 1 &&
      (I(0, 'span', 2), g(1, Ot, 1, 0, 'span', 5)(2, Nt, 1, 0, 'span', 6), O()),
    o & 2)
  ) {
    let s,
      t = M();
    P(), Y((s = t.dir) === 'rtl' ? 1 : 2);
  }
}
function Tt(o, i) {
  o & 1 && q(0, 'span', 3);
}
var mt = (() => {
  let i = class i {
    constructor(t, n) {
      (this.cdr = t),
        (this.directionality = n),
        (this.nzIcon = null),
        (this.nzTitle = null),
        (this.isMenuInsideDropDown = !1),
        (this.nzDisabled = !1),
        (this.paddingLeft = null),
        (this.mode = 'vertical'),
        (this.toggleSubMenu = new C()),
        (this.subMenuMouseState = new C()),
        (this.dir = 'ltr'),
        (this.destroy$ = new d());
    }
    ngOnInit() {
      (this.dir = this.directionality.value),
        this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
          (this.dir = t), this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
    setMouseState(t) {
      this.nzDisabled || this.subMenuMouseState.next(t);
    }
    clickTitle() {
      this.mode === 'inline' && !this.nzDisabled && this.toggleSubMenu.emit();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(V), l(D));
  }),
    (i.ɵcmp = S({
      type: i,
      selectors: [['', 'nz-submenu-title', '']],
      hostVars: 8,
      hostBindings: function (n, e) {
        n & 1 &&
          N('click', function () {
            return e.clickTitle();
          })('mouseenter', function () {
            return e.setMouseState(!0);
          })('mouseleave', function () {
            return e.setMouseState(!1);
          }),
          n & 2 &&
            (ce('padding-left', e.dir === 'rtl' ? null : e.paddingLeft, 'px')(
              'padding-right',
              e.dir === 'rtl' ? e.paddingLeft : null,
              'px',
            ),
            v('ant-dropdown-menu-submenu-title', e.isMenuInsideDropDown)(
              'ant-menu-submenu-title',
              !e.isMenuInsideDropDown,
            ));
      },
      inputs: {
        nzIcon: 'nzIcon',
        nzTitle: 'nzTitle',
        isMenuInsideDropDown: 'isMenuInsideDropDown',
        nzDisabled: 'nzDisabled',
        paddingLeft: 'paddingLeft',
        mode: 'mode',
      },
      outputs: {
        toggleSubMenu: 'toggleSubMenu',
        subMenuMouseState: 'subMenuMouseState',
      },
      exportAs: ['nzSubmenuTitle'],
      standalone: !0,
      features: [k],
      attrs: yt,
      ngContentSelectors: St,
      decls: 5,
      vars: 3,
      consts: [
        ['nz-icon', '', 3, 'nzType'],
        [4, 'nzStringTemplateOutlet'],
        [1, 'ant-dropdown-menu-submenu-expand-icon'],
        [1, 'ant-menu-submenu-arrow'],
        [1, 'ant-menu-title-content'],
        [
          'nz-icon',
          '',
          'nzType',
          'left',
          1,
          'ant-dropdown-menu-submenu-arrow-icon',
        ],
        [
          'nz-icon',
          '',
          'nzType',
          'right',
          1,
          'ant-dropdown-menu-submenu-arrow-icon',
        ],
      ],
      template: function (n, e) {
        n & 1 &&
          (G(),
          g(0, wt, 1, 1, 'span', 0)(1, It, 3, 1, 'ng-container', 1),
          B(2),
          g(3, kt, 3, 1, 'span', 2)(4, Tt, 1, 0, 'span', 3)),
          n & 2 &&
            (Y(e.nzIcon ? 0 : -1),
            P(),
            z('nzStringTemplateOutlet', e.nzTitle),
            P(2),
            Y(e.isMenuInsideDropDown ? 3 : 4));
      },
      dependencies: [Ke, Je, ke, Ne],
      encapsulation: 2,
      changeDetection: 0,
    }));
  let o = i;
  return o;
})();
var Rt = ['nz-submenu', ''],
  Et = [[['', 'title', '']], '*'],
  At = ['[title]', '*'];
function jt(o, i) {
  o & 1 && B(0);
}
function Pt(o, i) {
  if ((o & 1 && q(0, 'div', 3), o & 2)) {
    let s = M(),
      t = ze(6);
    z('mode', s.mode)('nzOpen', s.nzOpen)(
      '@.disabled',
      !!(s.noAnimation != null && s.noAnimation.nzNoAnimation),
    )(
      'nzNoAnimation',
      s.noAnimation == null ? null : s.noAnimation.nzNoAnimation,
    )('menuClass', s.nzMenuClassName)('templateOutlet', t);
  }
}
function Vt(o, i) {
  if (o & 1) {
    let s = te();
    I(0, 'div', 6),
      N('subMenuMouseState', function (n) {
        x(s);
        let e = M(2);
        return L(e.setMouseEnterState(n));
      }),
      O();
  }
  if (o & 2) {
    let s = M(2),
      t = ze(6);
    z('theme', s.theme)('mode', s.mode)('nzOpen', s.nzOpen)(
      'position',
      s.position,
    )('nzDisabled', s.nzDisabled)(
      'isMenuInsideDropDown',
      s.isMenuInsideDropDown,
    )('templateOutlet', t)('menuClass', s.nzMenuClassName)(
      '@.disabled',
      !!(s.noAnimation != null && s.noAnimation.nzNoAnimation),
    )(
      'nzNoAnimation',
      s.noAnimation == null ? null : s.noAnimation.nzNoAnimation,
    );
  }
}
function Ft(o, i) {
  if (o & 1) {
    let s = te();
    g(0, Vt, 1, 10, 'ng-template', 5),
      N('positionChange', function (n) {
        x(s);
        let e = M();
        return L(e.onPositionChange(n));
      });
  }
  if (o & 2) {
    let s = M(),
      t = ze(1);
    z('cdkConnectedOverlayPositions', s.overlayPositions)(
      'cdkConnectedOverlayOrigin',
      t,
    )('cdkConnectedOverlayWidth', s.triggerWidth)(
      'cdkConnectedOverlayOpen',
      s.nzOpen,
    )('cdkConnectedOverlayTransformOriginOn', '.ant-menu-submenu');
  }
}
function xt(o, i) {
  o & 1 && B(0, 1);
}
var pt = [p.rightTop, p.right, p.rightBottom, p.leftTop, p.left, p.leftBottom],
  Lt = [p.bottomLeft, p.bottomRight, p.topRight, p.topLeft],
  Se = (() => {
    let i = class i {
      setOpenStateWithoutDebounce(t) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(t);
      }
      toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.nzOpen);
      }
      setMouseEnterState(t) {
        (this.isActive = t),
          this.mode !== 'inline' &&
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(t);
      }
      setTriggerWidth() {
        this.mode === 'horizontal' &&
          this.platform.isBrowser &&
          this.cdkOverlayOrigin &&
          this.nzPlacement === 'bottomLeft' &&
          (this.triggerWidth =
            this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width);
      }
      onPositionChange(t) {
        let n = st(t);
        n === 'rightTop' || n === 'rightBottom' || n === 'right'
          ? (this.position = 'right')
          : (n === 'leftTop' || n === 'leftBottom' || n === 'left') &&
            (this.position = 'left');
      }
      constructor(t, n, e, a) {
        (this.nzMenuService = t),
          (this.cdr = n),
          (this.nzSubmenuService = e),
          (this.platform = a),
          (this.nzMenuClassName = ''),
          (this.nzPaddingLeft = null),
          (this.nzTitle = null),
          (this.nzIcon = null),
          (this.nzOpen = !1),
          (this.nzDisabled = !1),
          (this.nzPlacement = 'bottomLeft'),
          (this.nzOpenChange = new C()),
          (this.cdkOverlayOrigin = null),
          (this.listOfNzSubMenuComponent = null),
          (this.listOfNzMenuItemDirective = null),
          (this.level = this.nzSubmenuService.level),
          (this.destroy$ = new d()),
          (this.position = 'right'),
          (this.triggerWidth = null),
          (this.theme = 'light'),
          (this.mode = 'vertical'),
          (this.inlinePaddingLeft = null),
          (this.overlayPositions = pt),
          (this.isSelected = !1),
          (this.isActive = !1),
          (this.dir = 'ltr'),
          (this.isMenuInsideDropDown = m(b)),
          (this.noAnimation = m(ie, { optional: !0, host: !0 })),
          (this.directionality = m(D));
      }
      ngOnInit() {
        this.nzMenuService.theme$.pipe(u(this.destroy$)).subscribe(t => {
          (this.theme = t), this.cdr.markForCheck();
        }),
          this.nzSubmenuService.mode$.pipe(u(this.destroy$)).subscribe(t => {
            (this.mode = t),
              t === 'horizontal'
                ? (this.overlayPositions = [p[this.nzPlacement], ...Lt])
                : t === 'vertical' && (this.overlayPositions = pt),
              this.cdr.markForCheck();
          }),
          R([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(u(this.destroy$))
            .subscribe(([t, n]) => {
              (this.inlinePaddingLeft = t === 'inline' ? this.level * n : null),
                this.cdr.markForCheck();
            }),
          this.nzSubmenuService.isCurrentSubMenuOpen$
            .pipe(u(this.destroy$))
            .subscribe(t => {
              (this.isActive = t),
                t !== this.nzOpen &&
                  (this.setTriggerWidth(),
                  (this.nzOpen = t),
                  this.nzOpenChange.emit(this.nzOpen),
                  this.cdr.markForCheck());
            }),
          (this.dir = this.directionality.value),
          this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
            (this.dir = t), this.cdr.markForCheck();
          });
      }
      ngAfterContentInit() {
        this.setTriggerWidth();
        let t = this.listOfNzMenuItemDirective,
          n = t.changes,
          e = E(n, ...t.map(a => a.selected$));
        n.pipe(
          we(t),
          de(() => e),
          we(!0),
          H(() => t.some(a => a.nzSelected)),
          u(this.destroy$),
        ).subscribe(a => {
          (this.isSelected = a), this.cdr.markForCheck();
        });
      }
      ngOnChanges(t) {
        let { nzOpen: n } = t;
        n &&
          (this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),
          this.setTriggerWidth());
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
    };
    (i.ɵfac = function (n) {
      return new (n || i)(l(f), l(V), l(oe), l(ge));
    }),
      (i.ɵcmp = S({
        type: i,
        selectors: [['', 'nz-submenu', '']],
        contentQueries: function (n, e, a) {
          if ((n & 1 && (U(a, i, 5), U(a, ye, 5)), n & 2)) {
            let r;
            _((r = $())) && (e.listOfNzSubMenuComponent = r),
              _((r = $())) && (e.listOfNzMenuItemDirective = r);
          }
        },
        viewQuery: function (n, e) {
          if ((n & 1 && fe(De, 7, j), n & 2)) {
            let a;
            _((a = $())) && (e.cdkOverlayOrigin = a.first);
          }
        },
        hostVars: 34,
        hostBindings: function (n, e) {
          n & 2 &&
            v('ant-dropdown-menu-submenu', e.isMenuInsideDropDown)(
              'ant-dropdown-menu-submenu-disabled',
              e.isMenuInsideDropDown && e.nzDisabled,
            )(
              'ant-dropdown-menu-submenu-open',
              e.isMenuInsideDropDown && e.nzOpen,
            )(
              'ant-dropdown-menu-submenu-selected',
              e.isMenuInsideDropDown && e.isSelected,
            )(
              'ant-dropdown-menu-submenu-vertical',
              e.isMenuInsideDropDown && e.mode === 'vertical',
            )(
              'ant-dropdown-menu-submenu-horizontal',
              e.isMenuInsideDropDown && e.mode === 'horizontal',
            )(
              'ant-dropdown-menu-submenu-inline',
              e.isMenuInsideDropDown && e.mode === 'inline',
            )(
              'ant-dropdown-menu-submenu-active',
              e.isMenuInsideDropDown && e.isActive,
            )('ant-menu-submenu', !e.isMenuInsideDropDown)(
              'ant-menu-submenu-disabled',
              !e.isMenuInsideDropDown && e.nzDisabled,
            )('ant-menu-submenu-open', !e.isMenuInsideDropDown && e.nzOpen)(
              'ant-menu-submenu-selected',
              !e.isMenuInsideDropDown && e.isSelected,
            )(
              'ant-menu-submenu-vertical',
              !e.isMenuInsideDropDown && e.mode === 'vertical',
            )(
              'ant-menu-submenu-horizontal',
              !e.isMenuInsideDropDown && e.mode === 'horizontal',
            )(
              'ant-menu-submenu-inline',
              !e.isMenuInsideDropDown && e.mode === 'inline',
            )('ant-menu-submenu-active', !e.isMenuInsideDropDown && e.isActive)(
              'ant-menu-submenu-rtl',
              e.dir === 'rtl',
            );
        },
        inputs: {
          nzMenuClassName: 'nzMenuClassName',
          nzPaddingLeft: 'nzPaddingLeft',
          nzTitle: 'nzTitle',
          nzIcon: 'nzIcon',
          nzOpen: [2, 'nzOpen', 'nzOpen', c],
          nzDisabled: [2, 'nzDisabled', 'nzDisabled', c],
          nzPlacement: 'nzPlacement',
        },
        outputs: { nzOpenChange: 'nzOpenChange' },
        exportAs: ['nzSubmenu'],
        standalone: !0,
        features: [ne([oe]), Q, w, k],
        attrs: Rt,
        ngContentSelectors: At,
        decls: 7,
        vars: 8,
        consts: [
          ['origin', 'cdkOverlayOrigin'],
          ['subMenuTemplate', ''],
          [
            'nz-submenu-title',
            '',
            'cdkOverlayOrigin',
            '',
            3,
            'subMenuMouseState',
            'toggleSubMenu',
            'nzIcon',
            'nzTitle',
            'mode',
            'nzDisabled',
            'isMenuInsideDropDown',
            'paddingLeft',
          ],
          [
            'nz-submenu-inline-child',
            '',
            3,
            'mode',
            'nzOpen',
            'nzNoAnimation',
            'menuClass',
            'templateOutlet',
          ],
          [
            'cdkConnectedOverlay',
            '',
            3,
            'cdkConnectedOverlayPositions',
            'cdkConnectedOverlayOrigin',
            'cdkConnectedOverlayWidth',
            'cdkConnectedOverlayOpen',
            'cdkConnectedOverlayTransformOriginOn',
          ],
          [
            'cdkConnectedOverlay',
            '',
            3,
            'positionChange',
            'cdkConnectedOverlayPositions',
            'cdkConnectedOverlayOrigin',
            'cdkConnectedOverlayWidth',
            'cdkConnectedOverlayOpen',
            'cdkConnectedOverlayTransformOriginOn',
          ],
          [
            'nz-submenu-none-inline-child',
            '',
            3,
            'subMenuMouseState',
            'theme',
            'mode',
            'nzOpen',
            'position',
            'nzDisabled',
            'isMenuInsideDropDown',
            'templateOutlet',
            'menuClass',
            'nzNoAnimation',
          ],
        ],
        template: function (n, e) {
          if (n & 1) {
            let a = te();
            G(Et),
              I(0, 'div', 2, 0),
              N('subMenuMouseState', function (F) {
                return x(a), L(e.setMouseEnterState(F));
              })('toggleSubMenu', function () {
                return x(a), L(e.toggleSubMenu());
              }),
              g(2, jt, 1, 0),
              O(),
              g(3, Pt, 1, 6, 'div', 3)(4, Ft, 1, 5, null, 4)(
                5,
                xt,
                1,
                0,
                'ng-template',
                null,
                1,
                Qe,
              );
          }
          n & 2 &&
            (z('nzIcon', e.nzIcon)('nzTitle', e.nzTitle)('mode', e.mode)(
              'nzDisabled',
              e.nzDisabled,
            )('isMenuInsideDropDown', e.isMenuInsideDropDown)(
              'paddingLeft',
              e.nzPaddingLeft || e.inlinePaddingLeft,
            ),
            P(2),
            Y(e.nzTitle ? -1 : 2),
            P(),
            Y(e.mode === 'inline' ? 3 : 4));
        },
        dependencies: [mt, ut, ie, dt, ot, it, De],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let o = i;
    return o;
  })();
function Bt() {
  let o = m(f, { skipSelf: !0, optional: !0 }),
    i = m(Te);
  return o ?? i;
}
function Ht() {
  return m(b, { skipSelf: !0, optional: !0 }) ?? !1;
}
var Ni = (() => {
  let i = class i {
    setInlineCollapsed(t) {
      (this.nzInlineCollapsed = t), this.inlineCollapsed$.next(t);
    }
    updateInlineCollapse() {
      this.listOfNzMenuItemDirective &&
        (this.nzInlineCollapsed
          ? ((this.listOfOpenedNzSubMenuComponent =
              this.listOfNzSubMenuComponent.filter(t => t.nzOpen)),
            this.listOfNzSubMenuComponent.forEach(t =>
              t.setOpenStateWithoutDebounce(!1),
            ))
          : (this.listOfOpenedNzSubMenuComponent.forEach(t =>
              t.setOpenStateWithoutDebounce(!0),
            ),
            (this.listOfOpenedNzSubMenuComponent = [])));
    }
    constructor(t, n) {
      (this.nzMenuService = t),
        (this.cdr = n),
        (this.isMenuInsideDropDown = m(b)),
        (this.nzInlineIndent = 24),
        (this.nzTheme = 'light'),
        (this.nzMode = 'vertical'),
        (this.nzInlineCollapsed = !1),
        (this.nzSelectable = !this.isMenuInsideDropDown),
        (this.nzClick = new C()),
        (this.actualMode = 'vertical'),
        (this.dir = 'ltr'),
        (this.inlineCollapsed$ = new h(this.nzInlineCollapsed)),
        (this.mode$ = new h(this.nzMode)),
        (this.destroy$ = new d()),
        (this.listOfOpenedNzSubMenuComponent = []),
        (this.directionality = m(D));
    }
    ngOnInit() {
      R([this.inlineCollapsed$, this.mode$])
        .pipe(u(this.destroy$))
        .subscribe(([t, n]) => {
          (this.actualMode = t ? 'vertical' : n),
            this.nzMenuService.setMode(this.actualMode),
            this.cdr.markForCheck();
        }),
        this.nzMenuService.descendantMenuItemClick$
          .pipe(u(this.destroy$))
          .subscribe(t => {
            this.nzClick.emit(t),
              this.nzSelectable &&
                !t.nzMatchRouter &&
                this.listOfNzMenuItemDirective.forEach(n =>
                  n.setSelectedState(n === t),
                );
          }),
        (this.dir = this.directionality.value),
        this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
          (this.dir = t),
            this.nzMenuService.setMode(this.actualMode),
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
      this.inlineCollapsed$.pipe(u(this.destroy$)).subscribe(() => {
        this.updateInlineCollapse(), this.cdr.markForCheck();
      });
    }
    ngOnChanges(t) {
      let {
        nzInlineCollapsed: n,
        nzInlineIndent: e,
        nzTheme: a,
        nzMode: r,
      } = t;
      n && this.inlineCollapsed$.next(this.nzInlineCollapsed),
        e && this.nzMenuService.setInlineIndent(this.nzInlineIndent),
        a && this.nzMenuService.setTheme(this.nzTheme),
        r &&
          (this.mode$.next(this.nzMode),
          !t.nzMode.isFirstChange() &&
            this.listOfNzSubMenuComponent &&
            this.listOfNzSubMenuComponent.forEach(F =>
              F.setOpenStateWithoutDebounce(!1),
            ));
    }
    ngOnDestroy() {
      this.destroy$.next(!0), this.destroy$.complete();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(f), l(V));
  }),
    (i.ɵdir = ee({
      type: i,
      selectors: [['', 'nz-menu', '']],
      contentQueries: function (n, e, a) {
        if ((n & 1 && (U(a, ye, 5), U(a, Se, 5)), n & 2)) {
          let r;
          _((r = $())) && (e.listOfNzMenuItemDirective = r),
            _((r = $())) && (e.listOfNzSubMenuComponent = r);
        }
      },
      hostVars: 34,
      hostBindings: function (n, e) {
        n & 2 &&
          v('ant-dropdown-menu', e.isMenuInsideDropDown)(
            'ant-dropdown-menu-root',
            e.isMenuInsideDropDown,
          )(
            'ant-dropdown-menu-light',
            e.isMenuInsideDropDown && e.nzTheme === 'light',
          )(
            'ant-dropdown-menu-dark',
            e.isMenuInsideDropDown && e.nzTheme === 'dark',
          )(
            'ant-dropdown-menu-vertical',
            e.isMenuInsideDropDown && e.actualMode === 'vertical',
          )(
            'ant-dropdown-menu-horizontal',
            e.isMenuInsideDropDown && e.actualMode === 'horizontal',
          )(
            'ant-dropdown-menu-inline',
            e.isMenuInsideDropDown && e.actualMode === 'inline',
          )(
            'ant-dropdown-menu-inline-collapsed',
            e.isMenuInsideDropDown && e.nzInlineCollapsed,
          )('ant-menu', !e.isMenuInsideDropDown)(
            'ant-menu-root',
            !e.isMenuInsideDropDown,
          )('ant-menu-light', !e.isMenuInsideDropDown && e.nzTheme === 'light')(
            'ant-menu-dark',
            !e.isMenuInsideDropDown && e.nzTheme === 'dark',
          )(
            'ant-menu-vertical',
            !e.isMenuInsideDropDown && e.actualMode === 'vertical',
          )(
            'ant-menu-horizontal',
            !e.isMenuInsideDropDown && e.actualMode === 'horizontal',
          )(
            'ant-menu-inline',
            !e.isMenuInsideDropDown && e.actualMode === 'inline',
          )(
            'ant-menu-inline-collapsed',
            !e.isMenuInsideDropDown && e.nzInlineCollapsed,
          )('ant-menu-rtl', e.dir === 'rtl');
      },
      inputs: {
        nzInlineIndent: 'nzInlineIndent',
        nzTheme: 'nzTheme',
        nzMode: 'nzMode',
        nzInlineCollapsed: [2, 'nzInlineCollapsed', 'nzInlineCollapsed', c],
        nzSelectable: [2, 'nzSelectable', 'nzSelectable', c],
      },
      outputs: { nzClick: 'nzClick' },
      exportAs: ['nzMenu'],
      standalone: !0,
      features: [
        ne([
          { provide: Te, useClass: f },
          { provide: f, useFactory: Bt },
          { provide: b, useFactory: Ht },
        ]),
        Q,
        w,
      ],
    }));
  let o = i;
  return o;
})();
var ct = (() => {
  let i = class i {};
  (i.ɵfac = function (n) {
    return new (n || i)();
  }),
    (i.ɵmod = K({ type: i })),
    (i.ɵinj = J({ imports: [Se] }));
  let o = i;
  return o;
})();
var Ut = 'dropDown',
  Yt = [p.bottomLeft, p.bottomRight, p.topRight, p.topLeft],
  se = class se {
    setDropdownMenuValue(i, s) {
      this.nzDropdownMenu && this.nzDropdownMenu.setValue(i, s);
    }
    constructor(i, s, t, n, e, a) {
      (this.nzConfigService = i),
        (this.elementRef = s),
        (this.overlay = t),
        (this.renderer = n),
        (this.viewContainerRef = e),
        (this.platform = a),
        (this._nzModuleName = Ut),
        (this.overlayRef = null),
        (this.destroy$ = new d()),
        (this.positionStrategy = this.overlay
          .position()
          .flexibleConnectedTo(this.elementRef.nativeElement)
          .withLockedPosition()
          .withTransformOriginOn('.ant-dropdown')),
        (this.inputVisible$ = new h(!1)),
        (this.nzTrigger$ = new h('hover')),
        (this.overlayClose$ = new d()),
        (this.nzDropdownMenu = null),
        (this.nzTrigger = 'hover'),
        (this.nzMatchWidthElement = null),
        (this.nzBackdrop = !1),
        (this.nzClickHide = !0),
        (this.nzDisabled = !1),
        (this.nzVisible = !1),
        (this.nzOverlayClassName = ''),
        (this.nzOverlayStyle = {}),
        (this.nzPlacement = 'bottomLeft'),
        (this.nzVisibleChange = new C());
    }
    ngAfterViewInit() {
      if (this.nzDropdownMenu) {
        let i = this.elementRef.nativeElement,
          s = E(
            le(i, 'mouseenter').pipe(Z(!0)),
            le(i, 'mouseleave').pipe(Z(!1)),
          ),
          t = this.nzDropdownMenu.mouseState$,
          n = E(t, s),
          e = le(i, 'click').pipe(H(() => !this.nzVisible)),
          a = this.nzTrigger$.pipe(
            de(T => (T === 'hover' ? n : T === 'click' ? e : je)),
          ),
          r = this.nzDropdownMenu.descendantMenuItemClick$.pipe(
            A(() => this.nzClickHide),
            Z(!1),
          ),
          F = E(a, r, this.overlayClose$).pipe(A(() => !this.nzDisabled)),
          ht = E(this.inputVisible$, F);
        R([ht, this.nzDropdownMenu.isChildSubMenuOpen$])
          .pipe(
            H(([T, Ee]) => T || Ee),
            ue(150),
            re(),
            A(() => this.platform.isBrowser),
            u(this.destroy$),
          )
          .subscribe(T => {
            let Ae = (
              this.nzMatchWidthElement
                ? this.nzMatchWidthElement.nativeElement
                : i
            ).getBoundingClientRect().width;
            if (
              (this.nzVisible !== T && this.nzVisibleChange.emit(T),
              (this.nzVisible = T),
              T)
            ) {
              if (!this.overlayRef)
                (this.overlayRef = this.overlay.create({
                  positionStrategy: this.positionStrategy,
                  minWidth: Ae,
                  disposeOnNavigation: !0,
                  hasBackdrop: this.nzBackdrop && this.nzTrigger === 'click',
                  scrollStrategy: this.overlay.scrollStrategies.reposition(),
                })),
                  E(
                    this.overlayRef.backdropClick(),
                    this.overlayRef.detachments(),
                    this.overlayRef
                      .outsidePointerEvents()
                      .pipe(
                        A(
                          X =>
                            !this.elementRef.nativeElement.contains(X.target),
                        ),
                      ),
                    this.overlayRef
                      .keydownEvents()
                      .pipe(A(X => X.keyCode === 27 && !tt(X))),
                  )
                    .pipe(u(this.destroy$))
                    .subscribe(() => {
                      this.overlayClose$.next(!1);
                    });
              else {
                let X = this.overlayRef.getConfig();
                X.minWidth = Ae;
              }
              this.positionStrategy.withPositions([p[this.nzPlacement], ...Yt]),
                (!this.portal ||
                  this.portal.templateRef !==
                    this.nzDropdownMenu.templateRef) &&
                  (this.portal = new et(
                    this.nzDropdownMenu.templateRef,
                    this.viewContainerRef,
                  )),
                this.overlayRef.attach(this.portal);
            } else this.overlayRef && this.overlayRef.detach();
          }),
          this.nzDropdownMenu.animationStateChange$
            .pipe(u(this.destroy$))
            .subscribe(T => {
              T.toState === 'void' &&
                (this.overlayRef && this.overlayRef.dispose(),
                (this.overlayRef = null));
            });
      }
    }
    ngOnDestroy() {
      this.destroy$.next(!0),
        this.destroy$.complete(),
        this.overlayRef &&
          (this.overlayRef.dispose(), (this.overlayRef = null));
    }
    ngOnChanges(i) {
      let {
        nzVisible: s,
        nzDisabled: t,
        nzOverlayClassName: n,
        nzOverlayStyle: e,
        nzTrigger: a,
      } = i;
      if (
        (a && this.nzTrigger$.next(this.nzTrigger),
        s && this.inputVisible$.next(this.nzVisible),
        t)
      ) {
        let r = this.elementRef.nativeElement;
        this.nzDisabled
          ? (this.renderer.setAttribute(r, 'disabled', ''),
            this.inputVisible$.next(!1))
          : this.renderer.removeAttribute(r, 'disabled');
      }
      n &&
        this.setDropdownMenuValue(
          'nzOverlayClassName',
          this.nzOverlayClassName,
        ),
        e && this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
    }
  };
(se.ɵfac = function (s) {
  return new (s || se)(l(Xe), l(j), l(nt), l(W), l(pe), l(ge));
}),
  (se.ɵdir = ee({
    type: se,
    selectors: [['', 'nz-dropdown', '']],
    hostAttrs: [1, 'ant-dropdown-trigger'],
    inputs: {
      nzDropdownMenu: 'nzDropdownMenu',
      nzTrigger: 'nzTrigger',
      nzMatchWidthElement: 'nzMatchWidthElement',
      nzBackdrop: [2, 'nzBackdrop', 'nzBackdrop', c],
      nzClickHide: [2, 'nzClickHide', 'nzClickHide', c],
      nzDisabled: [2, 'nzDisabled', 'nzDisabled', c],
      nzVisible: [2, 'nzVisible', 'nzVisible', c],
      nzOverlayClassName: 'nzOverlayClassName',
      nzOverlayStyle: 'nzOverlayStyle',
      nzPlacement: 'nzPlacement',
    },
    outputs: { nzVisibleChange: 'nzVisibleChange' },
    exportAs: ['nzDropdown'],
    standalone: !0,
    features: [Q, w],
  }));
var $e = se;
Pe([Ze()], $e.prototype, 'nzBackdrop', void 0);
var No = (() => {
  let i = class i {
    constructor(t, n) {
      (this.renderer = t),
        (this.elementRef = n),
        (this.nzButtonGroupComponent = m(lt, { host: !0, optional: !0 }));
    }
    ngAfterViewInit() {
      let t = this.renderer.parentNode(this.elementRef.nativeElement);
      this.nzButtonGroupComponent &&
        t &&
        this.renderer.addClass(t, 'ant-dropdown-button');
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(W), l(j));
  }),
    (i.ɵdir = ee({
      type: i,
      selectors: [['', 'nz-button', '', 'nz-dropdown', '']],
      standalone: !0,
    }));
  let o = i;
  return o;
})();
var qt = ['*'];
function Xt(o, i) {
  if (o & 1) {
    let s = te();
    I(0, 'div', 0),
      N('@slideMotion.done', function (n) {
        x(s);
        let e = M();
        return L(e.onAnimationEvent(n));
      })('mouseenter', function () {
        x(s);
        let n = M();
        return L(n.setMouseState(!0));
      })('mouseleave', function () {
        x(s);
        let n = M();
        return L(n.setMouseState(!1));
      }),
      B(1),
      O();
  }
  if (o & 2) {
    let s = M();
    v('ant-dropdown-rtl', s.dir === 'rtl'),
      z('ngClass', s.nzOverlayClassName)('ngStyle', s.nzOverlayStyle)(
        '@slideMotion',
        void 0,
      )('@.disabled', !!(s.noAnimation != null && s.noAnimation.nzNoAnimation))(
        'nzNoAnimation',
        s.noAnimation == null ? null : s.noAnimation.nzNoAnimation,
      );
  }
}
var Lo = (() => {
  let i = class i {
    onAnimationEvent(t) {
      this.animationStateChange$.emit(t);
    }
    setMouseState(t) {
      this.mouseState$.next(t);
    }
    setValue(t, n) {
      (this[t] = n), this.cdr.markForCheck();
    }
    constructor(t, n, e, a, r, F) {
      (this.cdr = t),
        (this.elementRef = n),
        (this.renderer = e),
        (this.viewContainerRef = a),
        (this.nzMenuService = r),
        (this.directionality = F),
        (this.mouseState$ = new h(!1)),
        (this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$),
        (this.descendantMenuItemClick$ =
          this.nzMenuService.descendantMenuItemClick$),
        (this.animationStateChange$ = new C()),
        (this.nzOverlayClassName = ''),
        (this.nzOverlayStyle = {}),
        (this.dir = 'ltr'),
        (this.destroy$ = new d()),
        (this.noAnimation = m(ie, { host: !0, optional: !0 }));
    }
    ngOnInit() {
      this.directionality.change?.pipe(u(this.destroy$)).subscribe(t => {
        (this.dir = t), this.cdr.detectChanges();
      }),
        (this.dir = this.directionality.value);
    }
    ngAfterContentInit() {
      this.renderer.removeChild(
        this.renderer.parentNode(this.elementRef.nativeElement),
        this.elementRef.nativeElement,
      );
    }
    ngOnDestroy() {
      this.destroy$.next(), this.destroy$.complete();
    }
  };
  (i.ɵfac = function (n) {
    return new (n || i)(l(V), l(j), l(W), l(pe), l(f), l(D));
  }),
    (i.ɵcmp = S({
      type: i,
      selectors: [['nz-dropdown-menu']],
      viewQuery: function (n, e) {
        if ((n & 1 && fe(xe, 7), n & 2)) {
          let a;
          _((a = $())) && (e.templateRef = a.first);
        }
      },
      exportAs: ['nzDropdownMenu'],
      standalone: !0,
      features: [ne([f, { provide: b, useValue: !0 }]), k],
      ngContentSelectors: qt,
      decls: 1,
      vars: 0,
      consts: [
        [
          1,
          'ant-dropdown',
          3,
          'mouseenter',
          'mouseleave',
          'ngClass',
          'ngStyle',
          'nzNoAnimation',
        ],
      ],
      template: function (n, e) {
        n & 1 && (G(), g(0, Xt, 2, 7, 'ng-template'));
      },
      dependencies: [ve, Ge, ie],
      encapsulation: 2,
      data: { animation: [Ce] },
      changeDetection: 0,
    }));
  let o = i;
  return o;
})();
var Re = (() => {
  let i = class i {};
  (i.ɵfac = function (n) {
    return new (n || i)();
  }),
    (i.ɵmod = K({ type: i })),
    (i.ɵinj = J({}));
  let o = i;
  return o;
})();
var ts = (() => {
  let i = class i {};
  (i.ɵfac = function (n) {
    return new (n || i)();
  }),
    (i.ɵmod = K({ type: i })),
    (i.ɵinj = J({ imports: [Re, ct] }));
  let o = i;
  return o;
})();
var ss = [
  new ae(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'top' },
  ),
  new ae(
    { originX: 'start', originY: 'top' },
    { overlayX: 'start', overlayY: 'bottom' },
  ),
  new ae(
    { originX: 'start', originY: 'top' },
    { overlayX: 'end', overlayY: 'bottom' },
  ),
  new ae(
    { originX: 'start', originY: 'top' },
    { overlayX: 'end', overlayY: 'top' },
  ),
];
export {
  ye as a,
  Se as b,
  Ni as c,
  ct as d,
  $e as e,
  No as f,
  Lo as g,
  ts as h,
};
