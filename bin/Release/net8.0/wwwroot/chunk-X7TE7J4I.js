import {
  a as pe,
  b as se,
  c as ce,
  d as de,
  e as _e,
  f as ue,
} from './chunk-WV7DJJBC.js';
import { a as M, b } from './chunk-5ATXPZ32.js';
import { a as re, b as ae, c as le, e as me } from './chunk-5VUTOZIQ.js';
import './chunk-SVCW45ZG.js';
import { b as oe } from './chunk-WDME6LND.js';
import {
  $a as x,
  Aa as w,
  Ae as W,
  Be as $,
  Da as d,
  De as j,
  Eb as E,
  Ee as J,
  Ga as m,
  Le as H,
  Me as K,
  Na as c,
  Oe as Q,
  Pe as U,
  Qe as Y,
  Re as Z,
  Sa as r,
  Ta as i,
  Te as ee,
  Ua as g,
  Ue as te,
  Va as z,
  Wa as C,
  We as ne,
  X as y,
  Y as L,
  Ya as v,
  bb as p,
  bf as ie,
  dd as F,
  ed as R,
  fe as I,
  gc as V,
  ha as u,
  he as k,
  ia as f,
  kb as T,
  lb as a,
  nb as h,
  pd as D,
  pe as A,
  qe as G,
  rd as P,
  se as q,
  te as O,
  ub as N,
  va as o,
  ve as X,
  we as S,
  ye as B,
} from './chunk-55QWLPSH.js';
function fe(e, n) {
  e & 1 &&
    (r(0, 'div', 3)(1, 'div', 4)(2, 'h3', 5),
    a(3, 'Already Authenticated'),
    i()()());
}
function ge(e, n) {
  e & 1 && (z(0), r(1, 'h3', 19), a(2, 'Sign In'), i(), C());
}
function ze(e, n) {
  e & 1 && (z(0), r(1, 'h5', 20), g(2, 'span', 21), i(), C());
}
function Ce(e, n) {
  e & 1 && (z(0), r(1, 'h5', 20), a(2, "Don't' have an account?"), i(), C());
}
function xe(e, n) {
  if (e & 1) {
    let t = v();
    z(0),
      r(1, 'a', 22),
      x('click', function () {
        u(t);
        let l = p(2);
        return f(l.clickLink());
      }),
      a(2, 'Register'),
      g(3, 'span', 23),
      i(),
      C();
  }
}
function he(e, n) {
  e & 1 && a(0, ' The input is not a valid email. ');
}
function ve(e, n) {
  e & 1 && a(0, ' Please input your email. ');
}
function Te(e, n) {
  if ((e & 1 && a(0), e & 2)) {
    let t = p(3);
    h(' The email must be at least ', t.MinEmailLength, ' characters long. ');
  }
}
function Ee(e, n) {
  if ((e & 1 && a(0), e & 2)) {
    let t = p(3);
    h(' The email must be at most ', t.MaxEmailLength, ' characters long. ');
  }
}
function ye(e, n) {
  if ((e & 1 && d(0, he, 1, 0)(1, ve, 1, 0)(2, Te, 1, 1)(3, Ee, 1, 1), e & 2)) {
    let t = n.$implicit;
    c(t.hasError('email') ? 0 : -1),
      o(),
      c(t.hasError('required') ? 1 : -1),
      o(),
      c(t.hasError('min') ? 2 : -1),
      o(),
      c(t.hasError('max') ? 3 : -1);
  }
}
function Se(e, n) {
  if (e & 1) {
    let t = v();
    r(0, 'span', 24),
      x('click', function () {
        u(t);
        let l = p(2);
        return f((l.passwordVisible = !l.passwordVisible));
      }),
      i();
  }
  if (e & 2) {
    let t = p(2);
    m('nzType', t.passwordVisible ? 'eye' : 'eye-invisible');
  }
}
function Le(e, n) {
  e & 1 && a(0, ' Please enter your password! ');
}
function we(e, n) {
  if ((e & 1 && a(0), e & 2)) {
    let t = p(3);
    h(
      ' The email must be at least ',
      t.MinPasswordLength,
      ' characters long. ',
    );
  }
}
function Ne(e, n) {
  if ((e & 1 && a(0), e & 2)) {
    let t = p(3);
    h(' The email must be at most ', t.MaxPasswordLength, ' characters long. ');
  }
}
function Ve(e, n) {
  if ((e & 1 && d(0, Le, 1, 0)(1, we, 1, 1)(2, Ne, 1, 1), e & 2)) {
    let t = n.$implicit;
    c(t.hasError('required') ? 0 : -1),
      o(),
      c(t.hasError('min') ? 1 : -1),
      o(),
      c(t.hasError('max') ? 2 : -1);
  }
}
function Me(e, n) {
  if (e & 1) {
    let t = v();
    r(0, 'nz-card')(1, 'div', 3)(2, 'div', 4)(3, 'nz-space', 6),
      d(4, ge, 3, 0, 'ng-container', 7)(5, ze, 3, 0, 'ng-container', 7),
      i()()(),
      r(6, 'div', 3)(7, 'div', 4)(8, 'nz-space', 6),
      d(9, Ce, 3, 0, 'ng-container', 7)(10, xe, 4, 0, 'ng-container', 7),
      i()()(),
      r(11, 'div', 3)(12, 'div', 8)(13, 'form', 9),
      x('ngSubmit', function () {
        u(t);
        let l = p();
        return f(l.login());
      }),
      r(14, 'nz-form-item')(15, 'nz-form-label', 10),
      a(16, 'Email'),
      i(),
      r(17, 'nz-form-control', 11)(18, 'nz-input-group', 12),
      g(19, 'input', 13),
      i(),
      d(20, ye, 4, 4, 'ng-template', null, 0, E),
      i()(),
      r(22, 'nz-form-item')(23, 'nz-form-label', 10),
      a(24, 'Password'),
      i(),
      r(25, 'nz-form-control', 11)(26, 'nz-input-group', 14),
      g(27, 'input', 15),
      i(),
      d(28, Se, 1, 1, 'ng-template', null, 1, E)(
        30,
        Ve,
        3,
        3,
        'ng-template',
        null,
        2,
        E,
      ),
      i()(),
      r(32, 'nz-form-item')(33, 'nz-form-control', 16)(34, 'button', 17),
      a(35, ' Sign In '),
      i()()()(),
      r(36, 'app-form-errors', 18),
      x('nzErrorResponseChanged', function (l) {
        u(t);
        let _ = p();
        return f(_.handleErrorResponseChanged(l));
      }),
      i()()()();
  }
  if (e & 2) {
    let t = T(21),
      s = T(29),
      l = T(31),
      _ = p();
    o(13),
      m('formGroup', _.loginForm),
      o(2),
      m('nzSpan', 12),
      o(2),
      m('nzSpan', 24)('nzErrorTip', t),
      o(6),
      m('nzSpan', 12),
      o(2),
      m('nzSpan', 24)('nzErrorTip', l),
      o(),
      m('nzSuffix', s),
      o(),
      m('type', _.passwordVisible ? 'text' : 'password'),
      o(6),
      m('nzOffset', 12)('nzSpan', 24),
      o(),
      m('nzLoading', _.isLoading())('disabled', !_.loginForm.valid),
      o(2),
      m('errorResponse', _.errorResponse);
  }
}
var mt = (() => {
  class e {
    router = y(V);
    #e = y(ie);
    errorResponse = this.#e.selectors.errorResponse;
    isAuthenticated = this.#e.selectors.isAuthenticated;
    isLoading = w(!1);
    passwordVisible = !1;
    MinEmailLength = 3;
    MaxEmailLength = 50;
    MinPasswordLength = 16;
    MaxPasswordLength = 32;
    passwordValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinPasswordLength)
          return { error: !0, min: !0 };
        if (t.value.length > this.MaxPasswordLength)
          return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    emailValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinEmailLength) return { error: !0, min: !0 };
        if (t.value.length > this.MaxEmailLength) return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    loginForm = new X({
      email: new S('', {
        nonNullable: !0,
        validators: [G.email, this.emailValidator],
      }),
      password: new S('', {
        nonNullable: !0,
        validators: [this.passwordValidator],
      }),
    });
    login() {
      this.isLoading() ||
        this.#e.login({ loading: this.isLoading, form: this.loginForm });
    }
    resetForm() {
      this.loginForm.reset(),
        this.loginForm.controls.email.markAsPristine(),
        this.loginForm.controls.email.updateValueAndValidity(),
        this.loginForm.controls.password.markAsPristine(),
        this.loginForm.controls.password.updateValueAndValidity();
    }
    clickLink() {
      this.router.navigate(['register']);
    }
    handleErrorResponseChanged(t) {
      t && this.resetForm();
    }
    ngOnDestroy() {
      this.#e.resetErrorResponse();
    }
    static ɵfac = function (s) {
      return new (s || e)();
    };
    static ɵcmp = L({
      type: e,
      selectors: [['app-login']],
      standalone: !0,
      features: [N],
      decls: 2,
      vars: 1,
      consts: [
        ['userErrorTpl', ''],
        ['suffixTemplate', ''],
        ['passwordErrorTpl', ''],
        ['nz-row', '', 'nzJustify', 'center'],
        ['nz-col', ''],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        [
          'nz-col',
          '',
          'nzXs',
          '24',
          'nzSm',
          '24',
          'nzMd',
          '18',
          'nzLg',
          '18',
          'nzXl',
          '18',
          'nzXXl',
          '12',
        ],
        ['nz-form', '', 3, 'ngSubmit', 'formGroup'],
        ['nzRequired', '', 3, 'nzSpan'],
        [3, 'nzSpan', 'nzErrorTip'],
        ['nzPrefixIcon', 'user'],
        [
          'nz-input',
          '',
          'formControlName',
          'email',
          'placeholder',
          'Please enter you email',
        ],
        ['nzPrefixIcon', 'lock', 3, 'nzSuffix'],
        [
          'nz-input',
          '',
          'formControlName',
          'password',
          'placeholder',
          'Please enter you password',
          3,
          'type',
        ],
        [3, 'nzOffset', 'nzSpan'],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'round',
          1,
          'login-form-button',
          3,
          'nzLoading',
          'disabled',
        ],
        [3, 'nzErrorResponseChanged', 'errorResponse'],
        ['nz-typography', '', 'nzType', 'success'],
        ['nz-typography', '', 'nzType', 'warning'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'This feature is not implemented yet.',
        ],
        ['nz-button', '', 'nzType', 'link', 3, 'click'],
        ['nz-icon', '', 'nzType', 'arrow-right'],
        ['nz-icon', '', 1, 'login-form-icon', 3, 'click', 'nzType'],
      ],
      template: function (s, l) {
        s & 1 && d(0, fe, 4, 0, 'div', 3)(1, Me, 37, 14, 'nz-card'),
          s & 2 && c(l.isAuthenticated() ? 0 : 1);
      },
      dependencies: [
        j,
        B,
        A,
        q,
        O,
        W,
        $,
        ue,
        le,
        ae,
        re,
        P,
        D,
        _e,
        R,
        F,
        se,
        pe,
        de,
        ce,
        oe,
        Q,
        J,
        K,
        H,
        b,
        M,
        ne,
        Z,
        ee,
        te,
        me,
        Y,
        U,
        k,
        I,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return e;
})();
export { mt as default };
