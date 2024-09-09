import {
  $a as W,
  Ad as k,
  Ba as se,
  Bc as _e,
  Bd as De,
  Ca as le,
  Da as s,
  Dd as Re,
  Eb as de,
  Fd as be,
  Fe as Ie,
  Ga as l,
  Ha as E,
  Hc as x,
  Hd as M,
  Ia as j,
  Jb as L,
  Kb as f,
  La as ce,
  Na as p,
  O as C,
  Ob as fe,
  Qc as ge,
  Rb as ue,
  Rc as O,
  Rd as Te,
  Sa as m,
  Sb as ze,
  T as K,
  Ta as h,
  U,
  Ua as y,
  V as q,
  Va as v,
  W as G,
  Wa as w,
  Wd as Ne,
  X as J,
  Xa as pe,
  Y as ee,
  Ya as $,
  Yd as Ee,
  Z as te,
  _ as ne,
  bb as a,
  bd as ye,
  c as B,
  cd as ve,
  da as ie,
  ea as oe,
  g as z,
  gb as me,
  ha as P,
  hb as Z,
  ia as V,
  ib as I,
  jb as S,
  l as g,
  la as R,
  na as b,
  nc as Ce,
  pd as we,
  rd as xe,
  ta as T,
  ub as he,
  va as r,
  wa as c,
  xa as N,
  xd as A,
  ya as re,
  yd as Oe,
  za as ae,
} from './chunk-55QWLPSH.js';
var Se = (() => {
  let t = class t {
    constructor(i) {
      this.templateRef = i;
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(c(N));
  }),
    (t.ɵdir = ne({
      type: t,
      selectors: [['', 'nzDrawerContent', '']],
      exportAs: ['nzDrawerContent'],
      standalone: !0,
    }));
  let n = t;
  return n;
})();
var Q = 378,
  X = 736,
  Ae = new q('NZ_DRAWER_DATA');
var D = class {};
var $e = ['drawerTemplate'];
function We(n, t) {
  if (n & 1) {
    let e = $();
    m(0, 'div', 9),
      W('click', function () {
        P(e);
        let o = a(2);
        return V(o.maskClick());
      }),
      h();
  }
  if (n & 2) {
    let e = a(2);
    l('@drawerMaskMotion', void 0)('ngStyle', e.nzMaskStyle);
  }
}
function Ze(n, t) {
  if ((n & 1 && (v(0), y(1, 'span', 17), w()), n & 2)) {
    let e = t.$implicit;
    r(), l('nzType', e);
  }
}
function Le(n, t) {
  if (n & 1) {
    let e = $();
    m(0, 'button', 15),
      W('click', function () {
        P(e);
        let o = a(3);
        return V(o.closeClick());
      }),
      s(1, Ze, 2, 1, 'ng-container', 16),
      h();
  }
  if (n & 2) {
    let e = a(3);
    r(), l('nzStringTemplateOutlet', e.nzCloseIcon);
  }
}
function He(n, t) {
  if ((n & 1 && (v(0), y(1, 'div', 18), w()), n & 2)) {
    let e = a(4);
    r(), l('innerHTML', e.nzTitle, T);
  }
}
function Qe(n, t) {
  if (
    (n & 1 && (m(0, 'div', 13), s(1, He, 2, 1, 'ng-container', 16), h()), n & 2)
  ) {
    let e = a(3);
    r(), l('nzStringTemplateOutlet', e.nzTitle);
  }
}
function Xe(n, t) {
  if ((n & 1 && (v(0), y(1, 'div', 18), w()), n & 2)) {
    let e = a(4);
    r(), l('innerHTML', e.nzExtra, T);
  }
}
function Ye(n, t) {
  if (
    (n & 1 && (m(0, 'div', 14), s(1, Xe, 2, 1, 'ng-container', 16), h()), n & 2)
  ) {
    let e = a(3);
    r(), l('nzStringTemplateOutlet', e.nzExtra);
  }
}
function Be(n, t) {
  if (
    (n & 1 &&
      (m(0, 'div', 10)(1, 'div', 11),
      s(2, Le, 2, 1, 'button', 12)(3, Qe, 2, 1, 'div', 13),
      h(),
      s(4, Ye, 2, 1, 'div', 14),
      h()),
    n & 2)
  ) {
    let e = a(2);
    j('ant-drawer-header-close-only', !e.nzTitle),
      r(2),
      p(e.nzClosable ? 2 : -1),
      r(),
      p(e.nzTitle ? 3 : -1),
      r(),
      p(e.nzExtra ? 4 : -1);
  }
}
function Ke(n, t) {}
function Ue(n, t) {
  n & 1 && pe(0);
}
function qe(n, t) {
  if ((n & 1 && s(0, Ue, 1, 0, 'ng-container', 19), n & 2)) {
    let e = a(3);
    l('ngTemplateOutlet', e.nzContent)(
      'ngTemplateOutletContext',
      e.templateContext,
    );
  }
}
function Ge(n, t) {
  if ((n & 1 && s(0, qe, 1, 2, 'ng-container'), n & 2)) {
    let e = a(2);
    p(e.isNzContentTemplateRef ? 0 : -1);
  }
}
function Je(n, t) {}
function et(n, t) {
  if ((n & 1 && s(0, Je, 0, 0, 'ng-template', 20), n & 2)) {
    let e = a(3);
    l('ngTemplateOutlet', e.contentFromContentChild);
  }
}
function tt(n, t) {
  if ((n & 1 && s(0, et, 1, 1, null, 20), n & 2)) {
    let e = a(2);
    p(e.contentFromContentChild && (e.isOpen || e.inAnimation) ? 0 : -1);
  }
}
function nt(n, t) {
  if ((n & 1 && (v(0), y(1, 'div', 18), w()), n & 2)) {
    let e = a(3);
    r(), l('innerHTML', e.nzFooter, T);
  }
}
function it(n, t) {
  if (
    (n & 1 && (m(0, 'div', 8), s(1, nt, 2, 1, 'ng-container', 16), h()), n & 2)
  ) {
    let e = a(2);
    r(), l('nzStringTemplateOutlet', e.nzFooter);
  }
}
function ot(n, t) {
  if (
    (n & 1 &&
      (m(0, 'div', 1),
      s(1, We, 1, 2, 'div', 2),
      m(2, 'div')(3, 'div', 3)(4, 'div', 4),
      s(5, Be, 5, 5, 'div', 5),
      m(6, 'div', 6),
      s(7, Ke, 0, 0, 'ng-template', 7)(8, Ge, 1, 1)(9, tt, 1, 1),
      h(),
      s(10, it, 2, 1, 'div', 8),
      h()()()()),
    n & 2)
  ) {
    let e = a();
    E('transform', e.offsetTransform)(
      'transition',
      e.placementChanging ? 'none' : null,
    )('z-index', e.nzZIndex),
      j('ant-drawer-rtl', e.dir === 'rtl')('ant-drawer-open', e.isOpen)(
        'no-mask',
        !e.nzMask,
      )('ant-drawer-top', e.nzPlacement === 'top')(
        'ant-drawer-bottom',
        e.nzPlacement === 'bottom',
      )('ant-drawer-right', e.nzPlacement === 'right')(
        'ant-drawer-left',
        e.nzPlacement === 'left',
      ),
      l('nzNoAnimation', e.nzNoAnimation),
      r(),
      p(e.nzMask && e.isOpen ? 1 : -1),
      r(),
      ce('ant-drawer-content-wrapper ', e.nzWrapClassName, ''),
      E('width', e.width)('height', e.height)('transform', e.transform)(
        'transition',
        e.placementChanging ? 'none' : null,
      ),
      r(2),
      E('height', e.isLeftOrRight ? '100%' : null),
      r(),
      p(e.nzTitle || e.nzClosable ? 5 : -1),
      r(),
      l('ngStyle', e.nzBodyStyle),
      r(2),
      p(e.nzContent ? 8 : 9),
      r(2),
      p(e.nzFooter ? 10 : -1);
  }
}
var rt = 300,
  at = 'drawer',
  _ = class _ extends D {
    set nzVisible(t) {
      this.isOpen = t;
    }
    get nzVisible() {
      return this.isOpen;
    }
    get offsetTransform() {
      if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) return null;
      switch (this.nzPlacement) {
        case 'left':
          return `translateX(${this.nzOffsetX}px)`;
        case 'right':
          return `translateX(-${this.nzOffsetX}px)`;
        case 'top':
          return `translateY(${this.nzOffsetY}px)`;
        case 'bottom':
          return `translateY(-${this.nzOffsetY}px)`;
      }
    }
    get transform() {
      if (this.isOpen) return null;
      switch (this.nzPlacement) {
        case 'left':
          return 'translateX(-100%)';
        case 'right':
          return 'translateX(100%)';
        case 'top':
          return 'translateY(-100%)';
        case 'bottom':
          return 'translateY(100%)';
      }
    }
    get width() {
      if (this.isLeftOrRight) {
        let t = this.nzSize === 'large' ? X : Q;
        return this.nzWidth === void 0 ? x(t) : x(this.nzWidth);
      }
      return null;
    }
    get height() {
      if (!this.isLeftOrRight) {
        let t = this.nzSize === 'large' ? X : Q;
        return this.nzHeight === void 0 ? x(t) : x(this.nzHeight);
      }
      return null;
    }
    get isLeftOrRight() {
      return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
      return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
      return this.nzAfterClose.asObservable();
    }
    get afterExecute() {
      return this.nzAfterExecute.asObservable();
    }
    get isNzContentTemplateRef() {
      return _e(this.nzContent);
    }
    constructor(t, e, i, o, u, F, Me, Fe, Pe, Ve) {
      super(),
        (this.cdr = t),
        (this.nzConfigService = e),
        (this.renderer = i),
        (this.overlay = o),
        (this.injector = u),
        (this.changeDetectorRef = F),
        (this.focusTrapFactory = Me),
        (this.viewContainerRef = Fe),
        (this.overlayKeyboardDispatcher = Pe),
        (this.directionality = Ve),
        (this._nzModuleName = at),
        (this.nzCloseIcon = 'close'),
        (this.nzClosable = !0),
        (this.nzMaskClosable = !0),
        (this.nzMask = !0),
        (this.nzCloseOnNavigation = !0),
        (this.nzNoAnimation = !1),
        (this.nzKeyboard = !0),
        (this.nzPlacement = 'right'),
        (this.nzSize = 'default'),
        (this.nzMaskStyle = {}),
        (this.nzBodyStyle = {}),
        (this.nzZIndex = 1e3),
        (this.nzOffsetX = 0),
        (this.nzOffsetY = 0),
        (this.componentInstance = null),
        (this.componentRef = null),
        (this.nzOnViewInit = new b()),
        (this.nzOnClose = new b()),
        (this.nzVisibleChange = new b()),
        (this.destroy$ = new z()),
        (this.placementChanging = !1),
        (this.isOpen = !1),
        (this.inAnimation = !1),
        (this.templateContext = { $implicit: void 0, drawerRef: this }),
        (this.nzAfterOpen = new z()),
        (this.nzAfterClose = new z()),
        (this.nzAfterExecute = new z()),
        (this.nzDirection = void 0),
        (this.dir = 'ltr'),
        (this.document = J(fe));
    }
    ngOnInit() {
      this.directionality.change?.pipe(C(this.destroy$)).subscribe(t => {
        (this.dir = t), this.cdr.detectChanges();
      }),
        (this.dir = this.nzDirection || this.directionality.value),
        this.attachOverlay(),
        this.updateOverlayStyle(),
        this.updateBodyOverflow(),
        (this.templateContext = {
          $implicit: this.nzData || this.nzContentParams,
          drawerRef: this,
        }),
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
      this.attachBodyContent(),
        this.nzOnViewInit.observers.length &&
          setTimeout(() => {
            this.nzOnViewInit.emit();
          });
    }
    ngOnChanges(t) {
      let { nzPlacement: e, nzVisible: i } = t;
      i && (t.nzVisible.currentValue ? this.open() : this.close()),
        e && !e.isFirstChange() && this.triggerPlacementChangeCycleOnce();
    }
    ngOnDestroy() {
      this.destroy$.next(),
        this.destroy$.complete(),
        clearTimeout(this.placementChangeTimeoutId),
        this.disposeOverlay();
    }
    getAnimationDuration() {
      return this.nzNoAnimation ? 0 : rt;
    }
    triggerPlacementChangeCycleOnce() {
      this.nzNoAnimation ||
        ((this.placementChanging = !0),
        this.changeDetectorRef.markForCheck(),
        clearTimeout(this.placementChangeTimeoutId),
        (this.placementChangeTimeoutId = setTimeout(() => {
          (this.placementChanging = !1), this.changeDetectorRef.markForCheck();
        }, this.getAnimationDuration())));
    }
    execute(t) {
      this.nzAfterExecute.next(t);
    }
    close(t) {
      (this.isOpen = !1),
        (this.inAnimation = !0),
        this.nzVisibleChange.emit(!1),
        this.updateOverlayStyle(),
        this.overlayKeyboardDispatcher.remove(this.overlayRef),
        this.changeDetectorRef.detectChanges(),
        setTimeout(() => {
          this.updateBodyOverflow(),
            this.restoreFocus(),
            (this.inAnimation = !1),
            this.nzAfterClose.next(t),
            this.nzAfterClose.complete(),
            (this.componentInstance = null),
            (this.componentRef = null);
        }, this.getAnimationDuration());
    }
    open() {
      this.attachOverlay(),
        (this.isOpen = !0),
        (this.inAnimation = !0),
        this.nzVisibleChange.emit(!0),
        this.overlayKeyboardDispatcher.add(this.overlayRef),
        this.updateOverlayStyle(),
        this.updateBodyOverflow(),
        this.savePreviouslyFocusedElement(),
        this.trapFocus(),
        this.changeDetectorRef.detectChanges(),
        setTimeout(() => {
          (this.inAnimation = !1),
            this.changeDetectorRef.detectChanges(),
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    getContentComponent() {
      return this.componentInstance;
    }
    getContentComponentRef() {
      return this.componentRef;
    }
    closeClick() {
      this.nzOnClose.emit();
    }
    maskClick() {
      this.nzMaskClosable && this.nzMask && this.nzOnClose.emit();
    }
    attachBodyContent() {
      if ((this.bodyPortalOutlet.dispose(), this.nzContent instanceof ie)) {
        let t = R.create({
            parent: this.injector,
            providers: [
              { provide: D, useValue: this },
              { provide: Ae, useValue: this.nzData },
            ],
          }),
          e = new A(this.nzContent, null, t);
        (this.componentRef = this.bodyPortalOutlet.attachComponentPortal(e)),
          (this.componentInstance = this.componentRef.instance),
          Object.assign(
            this.componentRef.instance,
            this.nzData || this.nzContentParams,
          ),
          this.componentRef.changeDetectorRef.detectChanges();
      }
    }
    attachOverlay() {
      this.overlayRef ||
        ((this.portal = new Oe(this.drawerTemplate, this.viewContainerRef)),
        (this.overlayRef = this.overlay.create(this.getOverlayConfig())),
        Ne(this.overlayRef, this.nzZIndex)),
        this.overlayRef &&
          !this.overlayRef.hasAttached() &&
          (this.overlayRef.attach(this.portal),
          this.overlayRef
            .keydownEvents()
            .pipe(C(this.destroy$))
            .subscribe(t => {
              t.keyCode === 27 &&
                this.isOpen &&
                this.nzKeyboard &&
                this.nzOnClose.emit();
            }),
          this.overlayRef
            .detachments()
            .pipe(C(this.destroy$))
            .subscribe(() => {
              this.disposeOverlay();
            }));
    }
    disposeOverlay() {
      this.overlayRef?.dispose(), (this.overlayRef = null);
    }
    getOverlayConfig() {
      return new Re({
        disposeOnNavigation: this.nzCloseOnNavigation,
        positionStrategy: this.overlay.position().global(),
        scrollStrategy: this.overlay.scrollStrategies.block(),
      });
    }
    updateOverlayStyle() {
      this.overlayRef &&
        this.overlayRef.overlayElement &&
        this.renderer.setStyle(
          this.overlayRef.overlayElement,
          'pointer-events',
          this.isOpen ? 'auto' : 'none',
        );
    }
    updateBodyOverflow() {
      this.overlayRef &&
        (this.isOpen
          ? this.overlayRef.getConfig().scrollStrategy.enable()
          : this.overlayRef.getConfig().scrollStrategy.disable());
    }
    savePreviouslyFocusedElement() {
      this.document &&
        !this.previouslyFocusedElement &&
        ((this.previouslyFocusedElement = this.document.activeElement),
        this.previouslyFocusedElement &&
          typeof this.previouslyFocusedElement.blur == 'function' &&
          this.previouslyFocusedElement.blur());
    }
    trapFocus() {
      !this.focusTrap &&
        this.overlayRef &&
        this.overlayRef.overlayElement &&
        ((this.focusTrap = this.focusTrapFactory.create(
          this.overlayRef.overlayElement,
        )),
        this.focusTrap.focusInitialElement());
    }
    restoreFocus() {
      this.previouslyFocusedElement &&
        typeof this.previouslyFocusedElement.focus == 'function' &&
        this.previouslyFocusedElement.focus(),
        this.focusTrap && this.focusTrap.destroy();
    }
  };
(_.ɵfac = function (e) {
  return new (e || _)(
    c(L),
    c(ge),
    c(re),
    c(M),
    c(R),
    c(L),
    c(Ie),
    c(ae),
    c(be),
    c(Ce),
  );
}),
  (_.ɵcmp = ee({
    type: _,
    selectors: [['nz-drawer']],
    contentQueries: function (e, i, o) {
      if ((e & 1 && me(o, Se, 7, N), e & 2)) {
        let u;
        I((u = S())) && (i.contentFromContentChild = u.first);
      }
    },
    viewQuery: function (e, i) {
      if ((e & 1 && (Z($e, 7), Z(k, 5)), e & 2)) {
        let o;
        I((o = S())) && (i.drawerTemplate = o.first),
          I((o = S())) && (i.bodyPortalOutlet = o.first);
      }
    },
    inputs: {
      nzContent: 'nzContent',
      nzCloseIcon: 'nzCloseIcon',
      nzClosable: [2, 'nzClosable', 'nzClosable', f],
      nzMaskClosable: [2, 'nzMaskClosable', 'nzMaskClosable', f],
      nzMask: [2, 'nzMask', 'nzMask', f],
      nzCloseOnNavigation: [2, 'nzCloseOnNavigation', 'nzCloseOnNavigation', f],
      nzNoAnimation: [2, 'nzNoAnimation', 'nzNoAnimation', f],
      nzKeyboard: [2, 'nzKeyboard', 'nzKeyboard', f],
      nzTitle: 'nzTitle',
      nzExtra: 'nzExtra',
      nzFooter: 'nzFooter',
      nzPlacement: 'nzPlacement',
      nzSize: 'nzSize',
      nzMaskStyle: 'nzMaskStyle',
      nzBodyStyle: 'nzBodyStyle',
      nzWrapClassName: 'nzWrapClassName',
      nzWidth: 'nzWidth',
      nzHeight: 'nzHeight',
      nzZIndex: 'nzZIndex',
      nzOffsetX: 'nzOffsetX',
      nzOffsetY: 'nzOffsetY',
      nzVisible: [2, 'nzVisible', 'nzVisible', f],
    },
    outputs: {
      nzOnViewInit: 'nzOnViewInit',
      nzOnClose: 'nzOnClose',
      nzVisibleChange: 'nzVisibleChange',
    },
    exportAs: ['nzDrawer'],
    standalone: !0,
    features: [le, se, oe, he],
    decls: 2,
    vars: 0,
    consts: [
      ['drawerTemplate', ''],
      [1, 'ant-drawer', 3, 'nzNoAnimation'],
      [1, 'ant-drawer-mask', 3, 'ngStyle'],
      [1, 'ant-drawer-content'],
      [1, 'ant-drawer-wrapper-body'],
      [1, 'ant-drawer-header', 3, 'ant-drawer-header-close-only'],
      [1, 'ant-drawer-body', 3, 'ngStyle'],
      ['cdkPortalOutlet', ''],
      [1, 'ant-drawer-footer'],
      [1, 'ant-drawer-mask', 3, 'click', 'ngStyle'],
      [1, 'ant-drawer-header'],
      [1, 'ant-drawer-header-title'],
      ['aria-label', 'Close', 1, 'ant-drawer-close'],
      [1, 'ant-drawer-title'],
      [1, 'ant-drawer-extra'],
      ['aria-label', 'Close', 1, 'ant-drawer-close', 3, 'click'],
      [4, 'nzStringTemplateOutlet'],
      ['nz-icon', '', 3, 'nzType'],
      [3, 'innerHTML'],
      [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
      [3, 'ngTemplateOutlet'],
    ],
    template: function (e, i) {
      e & 1 && s(0, ot, 11, 39, 'ng-template', null, 0, de);
    },
    dependencies: [Te, ue, ve, ye, xe, we, De, k, ze],
    encapsulation: 2,
    data: { animation: [Ee] },
    changeDetection: 0,
  }));
var d = _;
g([O()], d.prototype, 'nzMaskClosable', void 0);
g([O()], d.prototype, 'nzMask', void 0);
g([O()], d.prototype, 'nzCloseOnNavigation', void 0);
g([O()], d.prototype, 'nzDirection', void 0);
var Y = class {
    constructor(t, e) {
      (this.overlay = t), (this.options = e), (this.unsubscribe$ = new z());
      let u = this.options,
        { nzOnCancel: i } = u,
        o = B(u, ['nzOnCancel']);
      (this.overlayRef = this.overlay.create()),
        (this.drawerRef = this.overlayRef.attach(new A(d)).instance),
        this.updateOptions(o),
        this.drawerRef.savePreviouslyFocusedElement(),
        this.drawerRef.nzOnViewInit.pipe(C(this.unsubscribe$)).subscribe(() => {
          this.drawerRef.open();
        }),
        this.drawerRef.nzOnClose.subscribe(() => {
          i
            ? i().then(F => {
                F !== !1 && this.drawerRef.close();
              })
            : this.drawerRef.close();
        }),
        this.drawerRef.afterClose.pipe(C(this.unsubscribe$)).subscribe(() => {
          this.overlayRef.dispose(),
            (this.drawerRef = null),
            this.unsubscribe$.next(),
            this.unsubscribe$.complete();
        });
    }
    getInstance() {
      return this.drawerRef;
    }
    updateOptions(t) {
      Object.assign(this.drawerRef, t);
    }
  },
  ke = (() => {
    let t = class t {
      constructor(i) {
        this.overlay = i;
      }
      create(i) {
        return new Y(this.overlay, i).getInstance();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(G(M));
    }),
      (t.ɵprov = K({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
var Jt = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = te({ type: t })),
    (t.ɵinj = U({ providers: [ke], imports: [d] }));
  let n = t;
  return n;
})();
export { D as a, ke as b, Jt as c };
