import {
  $a as S,
  $d as Se,
  Ba as A,
  Ca as Y,
  D as U,
  Da as w,
  Fa as ee,
  Ga as p,
  Ha as F,
  Hc as fe,
  Hd as Ce,
  Ia as O,
  Jb as d,
  Lb as le,
  Na as C,
  O as W,
  Pa as te,
  Pb as he,
  Qa as ne,
  Qc as T,
  Ra as ie,
  Rc as R,
  Sa as m,
  T as $,
  Ta as u,
  Tc as ue,
  U as B,
  Ua as l,
  Va as oe,
  W as D,
  Wa as se,
  Y as z,
  Ya as j,
  Z as J,
  _ as L,
  a as f,
  b as V,
  bb as h,
  bd as ge,
  cd as ze,
  ea as Q,
  g as x,
  ha as N,
  hb as re,
  ia as E,
  ib as ae,
  jb as ce,
  l as _,
  la as q,
  lb as pe,
  mb as me,
  na as v,
  pd as b,
  qa as K,
  qc as de,
  rd as P,
  ta as Z,
  ua as X,
  ub as y,
  va as c,
  wa as a,
  xd as ve,
  z as H,
} from './chunk-55QWLPSH.js';
var Ne = ['textEl'];
function Ee(i, t) {
  if ((i & 1 && l(0, 'span', 1), i & 2)) {
    let o = h();
    p('nzType', o.nzIcon);
  }
}
function Ae(i, t) {
  if (i & 1) {
    let o = j();
    m(0, 'img', 4),
      S('error', function (n) {
        N(o);
        let s = h();
        return E(s.imgError(n));
      }),
      u();
  }
  if (i & 2) {
    let o = h();
    p('src', o.nzSrc, X), ee('srcset', o.nzSrcSet)('alt', o.nzAlt);
  }
}
function we(i, t) {
  if ((i & 1 && (m(0, 'span', 3, 0), pe(2), u()), i & 2)) {
    let o = h();
    c(2), me(o.nzText);
  }
}
var Fe = 'avatar',
  I = class I {
    constructor(t, o, e) {
      (this.nzConfigService = t),
        (this.elementRef = o),
        (this.cdr = e),
        (this._nzModuleName = Fe),
        (this.nzShape = 'circle'),
        (this.nzSize = 'default'),
        (this.nzGap = 4),
        (this.nzError = new v()),
        (this.hasText = !1),
        (this.hasSrc = !0),
        (this.hasIcon = !1),
        (this.classMap = {}),
        (this.customSize = null),
        (this.el = this.elementRef.nativeElement);
    }
    imgError(t) {
      this.nzError.emit(t),
        t.defaultPrevented ||
          ((this.hasSrc = !1),
          (this.hasIcon = !1),
          (this.hasText = !1),
          this.nzIcon
            ? (this.hasIcon = !0)
            : this.nzText && (this.hasText = !0),
          this.cdr.detectChanges(),
          this.setSizeStyle(),
          this.calcStringSize());
    }
    ngOnChanges() {
      (this.hasText = !this.nzSrc && !!this.nzText),
        (this.hasIcon = !this.nzSrc && !!this.nzIcon),
        (this.hasSrc = !!this.nzSrc),
        this.setSizeStyle(),
        this.calcStringSize();
    }
    ngAfterViewInit() {
      this.calcStringSize();
    }
    calcStringSize() {
      if (!this.hasText || !this.textEl) return;
      let t = this.textEl.nativeElement,
        o = t.offsetWidth,
        e = this.el.getBoundingClientRect?.().width ?? 0,
        n = this.nzGap * 2 < e ? this.nzGap * 2 : 8,
        s = e - n < o ? (e - n) / o : 1;
      (t.style.transform = `scale(${s}) translateX(-50%)`),
        (t.style.lineHeight = this.customSize || '');
    }
    setSizeStyle() {
      typeof this.nzSize == 'number'
        ? (this.customSize = `${this.nzSize}px`)
        : (this.customSize = null),
        this.cdr.markForCheck();
    }
  };
(I.ɵfac = function (o) {
  return new (o || I)(a(T), a(K), a(d));
}),
  (I.ɵcmp = z({
    type: I,
    selectors: [['nz-avatar']],
    viewQuery: function (o, e) {
      if ((o & 1 && re(Ne, 5), o & 2)) {
        let n;
        ae((n = ce())) && (e.textEl = n.first);
      }
    },
    hostAttrs: [1, 'ant-avatar'],
    hostVars: 20,
    hostBindings: function (o, e) {
      o & 2 &&
        (F('width', e.customSize)('height', e.customSize)(
          'line-height',
          e.customSize,
        )('font-size', e.hasIcon && e.customSize ? e.nzSize / 2 : null, 'px'),
        O('ant-avatar-lg', e.nzSize === 'large')(
          'ant-avatar-sm',
          e.nzSize === 'small',
        )('ant-avatar-square', e.nzShape === 'square')(
          'ant-avatar-circle',
          e.nzShape === 'circle',
        )('ant-avatar-icon', e.nzIcon)('ant-avatar-image', e.hasSrc));
    },
    inputs: {
      nzShape: 'nzShape',
      nzSize: 'nzSize',
      nzGap: [2, 'nzGap', 'nzGap', le],
      nzText: 'nzText',
      nzSrc: 'nzSrc',
      nzSrcSet: 'nzSrcSet',
      nzAlt: 'nzAlt',
      nzIcon: 'nzIcon',
    },
    outputs: { nzError: 'nzError' },
    exportAs: ['nzAvatar'],
    standalone: !0,
    features: [Y, Q, y],
    decls: 3,
    vars: 3,
    consts: [
      ['textEl', ''],
      ['nz-icon', '', 3, 'nzType'],
      [3, 'src'],
      [1, 'ant-avatar-string'],
      [3, 'error', 'src'],
    ],
    template: function (o, e) {
      o & 1 &&
        w(0, Ee, 1, 1, 'span', 1)(1, Ae, 1, 3, 'img', 2)(
          2,
          we,
          3,
          1,
          'span',
          3,
        ),
        o & 2 &&
          (C(e.nzIcon && e.hasIcon ? 0 : -1),
          c(),
          C(e.nzSrc && e.hasSrc ? 1 : -1),
          c(),
          C(e.nzText && e.hasText ? 2 : -1));
    },
    dependencies: [P, b, de],
    encapsulation: 2,
    changeDetection: 0,
  }));
var g = I;
_([R()], g.prototype, 'nzShape', void 0);
_([R()], g.prototype, 'nzSize', void 0);
_([R()], g.prototype, 'nzGap', void 0);
var st = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = J({ type: t })),
    (t.ɵinj = B({ imports: [g] }));
  let i = t;
  return i;
})();
var Oe = 0,
  G = class {
    constructor(t, o, e) {
      (this.nzSingletonService = t), (this.overlay = o), (this.injector = e);
    }
    remove(t) {
      this.container &&
        (t ? this.container.remove(t) : this.container.removeAll());
    }
    getInstanceId() {
      return `${this.componentPrefix}-${Oe++}`;
    }
    withContainer(t) {
      let o = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
      if (o) return o;
      let e = this.overlay.create({
          hasBackdrop: !1,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
          positionStrategy: this.overlay.position().global(),
        }),
        n = new ve(t, null, this.injector),
        s = e.attach(n),
        r = e.hostElement;
      return (
        (r.style.zIndex = '1010'),
        o ||
          ((this.container = o = s.instance),
          this.nzSingletonService.registerSingletonWithKey(
            this.componentPrefix,
            o,
          ),
          this.container.afterAllInstancesRemoved.subscribe(() => {
            (this.container = void 0),
              this.nzSingletonService.unregisterSingletonWithKey(
                this.componentPrefix,
              ),
              e.dispose();
          })),
        o
      );
    }
  },
  Te = (() => {
    let t = class t {
      constructor(e, n) {
        (this.cdr = e),
          (this.nzConfigService = n),
          (this.instances = []),
          (this._afterAllInstancesRemoved = new x()),
          (this.afterAllInstancesRemoved =
            this._afterAllInstancesRemoved.asObservable()),
          (this.destroy$ = new x()),
          this.updateConfig();
      }
      ngOnInit() {
        this.subscribeConfigChange();
      }
      ngOnDestroy() {
        this.destroy$.next(), this.destroy$.complete();
      }
      create(e) {
        let n = this.onCreate(e);
        return (
          this.instances.length >= this.config.nzMaxStack &&
            (this.instances = this.instances.slice(1)),
          (this.instances = [...this.instances, n]),
          this.readyInstances(),
          n
        );
      }
      remove(e, n = !1) {
        this.instances
          .map((s, r) => ({ index: r, instance: s }))
          .filter(({ instance: s }) => s.messageId === e)
          .forEach(({ index: s, instance: r }) => {
            this.instances.splice(s, 1),
              (this.instances = [...this.instances]),
              this.onRemove(r, n),
              this.readyInstances();
          }),
          this.instances.length || this.onAllInstancesRemoved();
      }
      removeAll() {
        this.instances.forEach(e => this.onRemove(e, !1)),
          (this.instances = []),
          this.readyInstances(),
          this.onAllInstancesRemoved();
      }
      onCreate(e) {
        return (
          (e.options = this.mergeOptions(e.options)), (e.onClose = new x()), e
        );
      }
      onRemove(e, n) {
        e.onClose.next(n), e.onClose.complete();
      }
      onAllInstancesRemoved() {
        this._afterAllInstancesRemoved.next(),
          this._afterAllInstancesRemoved.complete();
      }
      readyInstances() {
        this.cdr.detectChanges();
      }
      mergeOptions(e) {
        let { nzDuration: n, nzAnimate: s, nzPauseOnHover: r } = this.config;
        return f({ nzDuration: n, nzAnimate: s, nzPauseOnHover: r }, e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(a(d), a(T));
    }),
      (t.ɵdir = L({ type: t }));
    let i = t;
    return i;
  })(),
  Ie = (() => {
    let t = class t {
      constructor(e) {
        (this.cdr = e),
          (this.destroyed = new v()),
          (this.animationStateChanged = new x()),
          (this.userAction = !1);
      }
      ngOnInit() {
        (this.options = this.instance.options),
          this.options.nzAnimate &&
            ((this.instance.state = 'enter'),
            this.animationStateChanged
              .pipe(
                H(e => e.phaseName === 'done' && e.toState === 'leave'),
                U(1),
              )
              .subscribe(() => {
                clearTimeout(this.closeTimer),
                  this.destroyed.next({
                    id: this.instance.messageId,
                    userAction: this.userAction,
                  });
              })),
          (this.autoClose = this.options.nzDuration > 0),
          this.autoClose && (this.initErase(), this.startEraseTimeout());
      }
      ngOnDestroy() {
        this.autoClose && this.clearEraseTimeout(),
          this.animationStateChanged.complete();
      }
      onEnter() {
        this.autoClose &&
          this.options.nzPauseOnHover &&
          (this.clearEraseTimeout(), this.updateTTL());
      }
      onLeave() {
        this.autoClose &&
          this.options.nzPauseOnHover &&
          this.startEraseTimeout();
      }
      destroy(e = !1) {
        (this.userAction = e),
          this.options.nzAnimate
            ? ((this.instance.state = 'leave'),
              this.cdr.detectChanges(),
              (this.closeTimer = setTimeout(() => {
                (this.closeTimer = void 0),
                  this.destroyed.next({
                    id: this.instance.messageId,
                    userAction: e,
                  });
              }, 200)))
            : this.destroyed.next({
                id: this.instance.messageId,
                userAction: e,
              });
      }
      initErase() {
        (this.eraseTTL = this.options.nzDuration),
          (this.eraseTimingStart = Date.now());
      }
      updateTTL() {
        this.autoClose && (this.eraseTTL -= Date.now() - this.eraseTimingStart);
      }
      startEraseTimeout() {
        this.eraseTTL > 0
          ? (this.clearEraseTimeout(),
            (this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL)),
            (this.eraseTimingStart = Date.now()))
          : this.destroy();
      }
      clearEraseTimeout() {
        this.eraseTimer !== null &&
          (clearTimeout(this.eraseTimer), (this.eraseTimer = void 0));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(a(d));
    }),
      (t.ɵdir = L({ type: t }));
    let i = t;
    return i;
  })();
function je(i, t) {
  i & 1 && l(0, 'span', 3);
}
function Re(i, t) {
  i & 1 && l(0, 'span', 4);
}
function be(i, t) {
  i & 1 && l(0, 'span', 5);
}
function Pe(i, t) {
  i & 1 && l(0, 'span', 6);
}
function Ge(i, t) {
  i & 1 && l(0, 'span', 7);
}
function ke(i, t) {
  if ((i & 1 && (oe(0), l(1, 'span', 9), se()), i & 2)) {
    let o = h();
    c(), p('innerHTML', o.instance.content, Z);
  }
}
var xe = (() => {
  let t = class t extends Ie {
    constructor(e) {
      super(e), (this.destroyed = new v());
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(a(d));
  }),
    (t.ɵcmp = z({
      type: t,
      selectors: [['nz-message']],
      inputs: { instance: 'instance' },
      outputs: { destroyed: 'destroyed' },
      exportAs: ['nzMessage'],
      standalone: !0,
      features: [A, y],
      decls: 9,
      vars: 4,
      consts: [
        [1, 'ant-message-notice', 3, 'mouseenter', 'mouseleave'],
        [1, 'ant-message-notice-content'],
        [1, 'ant-message-custom-content', 3, 'ngClass'],
        ['nz-icon', '', 'nzType', 'check-circle'],
        ['nz-icon', '', 'nzType', 'info-circle'],
        ['nz-icon', '', 'nzType', 'exclamation-circle'],
        ['nz-icon', '', 'nzType', 'close-circle'],
        ['nz-icon', '', 'nzType', 'loading'],
        [4, 'nzStringTemplateOutlet'],
        [3, 'innerHTML'],
      ],
      template: function (n, s) {
        if (
          (n & 1 &&
            (m(0, 'div', 0),
            S('@moveUpMotion.done', function (_e) {
              return s.animationStateChanged.next(_e);
            })('mouseenter', function () {
              return s.onEnter();
            })('mouseleave', function () {
              return s.onLeave();
            }),
            m(1, 'div', 1)(2, 'div', 2),
            w(3, je, 1, 0, 'span', 3)(4, Re, 1, 0, 'span', 4)(
              5,
              be,
              1,
              0,
              'span',
              5,
            )(6, Pe, 1, 0, 'span', 6)(7, Ge, 1, 0, 'span', 7)(
              8,
              ke,
              2,
              1,
              'ng-container',
              8,
            ),
            u()()()),
          n & 2)
        ) {
          let r;
          p('@moveUpMotion', s.instance.state),
            c(2),
            p('ngClass', 'ant-message-' + s.instance.type),
            c(),
            C(
              (r = s.instance.type) === 'success'
                ? 3
                : r === 'info'
                  ? 4
                  : r === 'warning'
                    ? 5
                    : r === 'error'
                      ? 6
                      : r === 'loading'
                        ? 7
                        : -1,
            ),
            c(5),
            p('nzStringTemplateOutlet', s.instance.content);
        }
      },
      dependencies: [he, P, b, ze, ge],
      encapsulation: 2,
      data: { animation: [Se] },
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
function Le(i, t) {
  if (i & 1) {
    let o = j();
    m(0, 'nz-message', 2),
      S('destroyed', function (n) {
        N(o);
        let s = h();
        return E(s.remove(n.id, n.userAction));
      }),
      u();
  }
  if (i & 2) {
    let o = t.$implicit;
    p('instance', o);
  }
}
var k = 'message',
  Ve = {
    nzAnimate: !0,
    nzDuration: 3e3,
    nzMaxStack: 7,
    nzPauseOnHover: !0,
    nzTop: 24,
    nzDirection: 'ltr',
  },
  Me = (() => {
    let t = class t extends Te {
      constructor(e, n) {
        super(e, n), (this.dir = 'ltr');
        let s = this.nzConfigService.getConfigForComponent(k);
        this.dir = s?.nzDirection || 'ltr';
      }
      subscribeConfigChange() {
        this.nzConfigService
          .getConfigChangeEventForComponent(k)
          .pipe(W(this.destroy$))
          .subscribe(() => {
            this.updateConfig();
            let e = this.nzConfigService.getConfigForComponent(k);
            if (e) {
              let { nzDirection: n } = e;
              this.dir = n || this.dir;
            }
          });
      }
      updateConfig() {
        (this.config = f(
          f(f({}, Ve), this.config),
          this.nzConfigService.getConfigForComponent(k),
        )),
          (this.top = fe(this.config.nzTop)),
          this.cdr.markForCheck();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(a(d), a(T));
    }),
      (t.ɵcmp = z({
        type: t,
        selectors: [['nz-message-container']],
        exportAs: ['nzMessageContainer'],
        standalone: !0,
        features: [A, y],
        decls: 3,
        vars: 4,
        consts: [
          [1, 'ant-message'],
          [3, 'instance'],
          [3, 'destroyed', 'instance'],
        ],
        template: function (n, s) {
          n & 1 && (m(0, 'div', 0), ne(1, Le, 1, 1, 'nz-message', 1, te), u()),
            n & 2 &&
              (F('top', s.top),
              O('ant-message-rtl', s.dir === 'rtl'),
              c(),
              ie(s.instances));
        },
        dependencies: [xe],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Ut = (() => {
  let t = class t extends G {
    constructor(e, n, s) {
      super(e, n, s), (this.componentPrefix = 'message-');
    }
    success(e, n) {
      return this.createInstance({ type: 'success', content: e }, n);
    }
    error(e, n) {
      return this.createInstance({ type: 'error', content: e }, n);
    }
    info(e, n) {
      return this.createInstance({ type: 'info', content: e }, n);
    }
    warning(e, n) {
      return this.createInstance({ type: 'warning', content: e }, n);
    }
    loading(e, n) {
      return this.createInstance({ type: 'loading', content: e }, n);
    }
    create(e, n, s) {
      return this.createInstance({ type: e, content: n }, s);
    }
    createInstance(e, n) {
      return (
        (this.container = this.withContainer(Me)),
        this.container.create(
          V(f({}, e), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options: n,
          }),
        )
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(D(ue), D(Ce), D(q));
  }),
    (t.ɵprov = $({ token: t, factory: t.ɵfac, providedIn: 'root' }));
  let i = t;
  return i;
})();
export { g as a, st as b, Ut as c };
