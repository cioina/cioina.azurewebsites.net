import {
  a as pe,
  b as ce,
  c as _e,
  d as de,
  e as ue,
  f as fe,
} from './chunk-WV7DJJBC.js';
import { a as M, b } from './chunk-5ATXPZ32.js';
import {
  a as oe,
  b as ae,
  c as le,
  d as me,
  e as se,
} from './chunk-5VUTOZIQ.js';
import './chunk-SVCW45ZG.js';
import { b as re } from './chunk-WDME6LND.js';
import {
  $a as E,
  Aa as R,
  Ae as $,
  Be as B,
  Da as m,
  De as W,
  Eb as x,
  Ee as Y,
  Ga as s,
  Le as j,
  Me as H,
  Na as p,
  Oe as J,
  Pe as K,
  Qe as Q,
  Re as Z,
  Sa as a,
  Ta as i,
  Te as ee,
  Ua as f,
  Ue as te,
  Va as d,
  Wa as u,
  We as ne,
  X as y,
  Y as S,
  Ya as T,
  bb as l,
  bf as ie,
  dd as L,
  ed as F,
  fe as I,
  gc as V,
  ha as z,
  he as k,
  ia as h,
  kb as C,
  lb as r,
  nb as g,
  pd as P,
  pe as A,
  qe as O,
  rd as D,
  se as q,
  te as G,
  ub as N,
  va as o,
  ve as U,
  we as v,
  ye as X,
} from './chunk-55QWLPSH.js';
function xe(e, n) {
  e & 1 &&
    (a(0, 'div', 7)(1, 'div', 8)(2, 'h3', 9),
    r(3, 'Already Authenticated'),
    i()()());
}
function ze(e, n) {
  e & 1 && (d(0), a(1, 'h3', 23), r(2, 'Register an account'), i(), u());
}
function he(e, n) {
  e & 1 && (d(0), a(1, 'h5', 24), f(2, 'span', 25), i(), u());
}
function Te(e, n) {
  e & 1 && (d(0), a(1, 'h5', 24), r(2, 'Already have an account?'), i(), u());
}
function Ee(e, n) {
  if (e & 1) {
    let t = T();
    d(0),
      a(1, 'a', 26),
      E('click', function () {
        z(t);
        let _ = l(2);
        return h(_.clickLink());
      }),
      r(2, 'Sign In'),
      f(3, 'span', 27),
      i(),
      u();
  }
}
function ve(e, n) {
  e & 1 && r(0, ' Please input your username. ');
}
function we(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The username must be at least ',
      t.MinUserNameLength,
      ' characters long. ',
    );
  }
}
function ye(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The username must be at most ',
      t.MaxUserNameLength,
      ' characters long. ',
    );
  }
}
function Se(e, n) {
  if ((e & 1 && m(0, ve, 1, 0)(1, we, 1, 1)(2, ye, 1, 1), e & 2)) {
    let t = n.$implicit;
    p(t.hasError('required') ? 0 : -1),
      o(),
      p(t.hasError('min') ? 1 : -1),
      o(),
      p(t.hasError('max') ? 2 : -1);
  }
}
function Re(e, n) {
  e & 1 && r(0, ' The input is not a valid email. ');
}
function Ne(e, n) {
  e & 1 && r(0, ' Please input your email. ');
}
function Ve(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(' The email must be at least ', t.MinEmailLength, ' characters long. ');
  }
}
function Me(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(' The email must be at most ', t.MaxEmailLength, ' characters long. ');
  }
}
function be(e, n) {
  if ((e & 1 && m(0, Re, 1, 0)(1, Ne, 1, 0)(2, Ve, 1, 1)(3, Me, 1, 1), e & 2)) {
    let t = n.$implicit;
    p(t.hasError('email') ? 0 : -1),
      o(),
      p(t.hasError('required') ? 1 : -1),
      o(),
      p(t.hasError('min') ? 2 : -1),
      o(),
      p(t.hasError('max') ? 3 : -1);
  }
}
function Le(e, n) {
  if (e & 1) {
    let t = T();
    a(0, 'span', 28),
      E('click', function () {
        z(t);
        let _ = l(2);
        return h((_.passwordVisible = !_.passwordVisible));
      }),
      i();
  }
  if (e & 2) {
    let t = l(2);
    s('nzType', t.passwordVisible ? 'eye' : 'eye-invisible');
  }
}
function Fe(e, n) {
  e & 1 && r(0, ' Please enter your password. ');
}
function Pe(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The password must be at least ',
      t.MinPasswordLength,
      ' characters long. ',
    );
  }
}
function De(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The password must be at most ',
      t.MaxPasswordLength,
      ' characters long. ',
    );
  }
}
function Ie(e, n) {
  if ((e & 1 && m(0, Fe, 1, 0)(1, Pe, 1, 1)(2, De, 1, 1), e & 2)) {
    let t = n.$implicit;
    p(t.hasError('required') ? 0 : -1),
      o(),
      p(t.hasError('min') ? 1 : -1),
      o(),
      p(t.hasError('max') ? 2 : -1);
  }
}
function ke(e, n) {
  e & 1 && r(0, ' Please confirm your password. ');
}
function Ae(e, n) {
  e & 1 && r(0, ' The confirm password is inconsistent with password. ');
}
function Oe(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The password must be at least ',
      t.MinPasswordLength,
      ' characters long. ',
    );
  }
}
function qe(e, n) {
  if ((e & 1 && r(0), e & 2)) {
    let t = l(3);
    g(
      ' The password must be at most ',
      t.MaxPasswordLength,
      ' characters long. ',
    );
  }
}
function Ge(e, n) {
  if ((e & 1 && m(0, ke, 1, 0)(1, Ae, 1, 0)(2, Oe, 1, 1)(3, qe, 1, 1), e & 2)) {
    let t = n.$implicit;
    p(t.hasError('required') ? 0 : -1),
      o(),
      p(t.hasError('confirm') ? 1 : -1),
      o(),
      p(t.hasError('min') ? 2 : -1),
      o(),
      p(t.hasError('max') ? 3 : -1);
  }
}
function Ue(e, n) {
  if (e & 1) {
    let t = T();
    d(0),
      a(1, 'button', 29),
      E('nzOnConfirm', function () {
        z(t);
        let _ = l(2);
        return h(_.register());
      }),
      r(2, ' Submit '),
      i(),
      u();
  }
  if (e & 2) {
    l();
    let t = C(51),
      c = l();
    o(),
      s('nzLoading', c.isLoading())('nzIcon', t)(
        'disabled',
        !c.registerForm.valid,
      );
  }
}
function Xe(e, n) {
  if (e & 1) {
    let t = T();
    d(0),
      a(1, 'button', 30),
      E('nzOnConfirm', function () {
        z(t);
        let _ = l(2);
        return h(_.resetForm());
      }),
      r(2, ' Reset '),
      i(),
      u();
  }
  if (e & 2) {
    l();
    let t = C(53);
    o(), s('nzIcon', t)('nzOkDanger', !0);
  }
}
function $e(e, n) {
  e & 1 && (d(0), a(1, 'h4', 23), f(2, 'span', 31), i(), u());
}
function Be(e, n) {
  e & 1 &&
    (d(0), a(1, 'h5', 32), r(2, 'Do you what to submit the form?'), i(), u());
}
function We(e, n) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    m(1, $e, 3, 0, 'ng-container', 11)(2, Be, 3, 0, 'ng-container', 11),
    i());
}
function Ye(e, n) {
  e & 1 && (d(0), a(1, 'h4', 9), f(2, 'span', 31), i(), u());
}
function je(e, n) {
  e & 1 &&
    (d(0), a(1, 'h5', 32), r(2, 'Do you what to reset the form?'), i(), u());
}
function He(e, n) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    m(1, Ye, 3, 0, 'ng-container', 11)(2, je, 3, 0, 'ng-container', 11),
    i());
}
function Je(e, n) {
  if (e & 1) {
    let t = T();
    a(0, 'nz-card')(1, 'div', 7)(2, 'div', 8)(3, 'nz-space', 10),
      m(4, ze, 3, 0, 'ng-container', 11)(5, he, 3, 0, 'ng-container', 11),
      i()()(),
      a(6, 'div', 7)(7, 'div', 8)(8, 'nz-space', 10),
      m(9, Te, 3, 0, 'ng-container', 11)(10, Ee, 4, 0, 'ng-container', 11),
      i()()(),
      a(11, 'div', 7)(12, 'div', 12)(13, 'form', 13)(14, 'nz-form-item')(
        15,
        'nz-form-label',
        14,
      ),
      r(16, 'Username'),
      i(),
      a(17, 'nz-form-control', 15),
      f(18, 'input', 16),
      m(19, Se, 3, 3, 'ng-template', null, 0, x),
      i()(),
      a(21, 'nz-form-item')(22, 'nz-form-label', 14),
      r(23, 'Email'),
      i(),
      a(24, 'nz-form-control', 15),
      f(25, 'input', 17),
      m(26, be, 4, 4, 'ng-template', null, 1, x),
      i()(),
      a(28, 'nz-form-item')(29, 'nz-form-label', 14),
      r(30, 'Password'),
      i(),
      a(31, 'nz-form-control', 15)(32, 'nz-input-group', 18)(33, 'input', 19),
      E('ngModelChange', function () {
        z(t);
        let _ = l();
        return h(_.validateConfirmPassword());
      }),
      i()(),
      m(34, Le, 1, 1, 'ng-template', null, 2, x),
      i(),
      m(36, Ie, 3, 3, 'ng-template', null, 3, x),
      i(),
      a(38, 'nz-form-item')(39, 'nz-form-label', 14),
      r(40, 'Confirm Password'),
      i(),
      a(41, 'nz-form-control', 15),
      f(42, 'input', 20),
      m(43, Ge, 4, 4, 'ng-template', null, 4, x),
      i()(),
      a(45, 'nz-form-item')(46, 'nz-form-control', 21)(47, 'nz-space', 10),
      m(48, Ue, 3, 3, 'ng-container', 11)(49, Xe, 3, 2, 'ng-container', 11),
      i()(),
      m(50, We, 3, 0, 'ng-template', null, 5, x)(
        52,
        He,
        3,
        0,
        'ng-template',
        null,
        6,
        x,
      ),
      i()(),
      f(54, 'app-form-errors', 22),
      i()()();
  }
  if (e & 2) {
    let t = C(20),
      c = C(27),
      _ = C(35),
      ge = C(37),
      Ce = C(44),
      w = l();
    o(13),
      s('formGroup', w.registerForm),
      o(2),
      s('nzSpan', 12),
      o(2),
      s('nzSpan', 24)('nzErrorTip', t),
      o(5),
      s('nzSpan', 12),
      o(2),
      s('nzSpan', 24)('nzErrorTip', c),
      o(5),
      s('nzSpan', 12),
      o(2),
      s('nzSpan', 24)('nzErrorTip', ge),
      o(),
      s('nzSuffix', _),
      o(),
      s('type', w.passwordVisible ? 'text' : 'password'),
      o(6),
      s('nzSpan', 12),
      o(2),
      s('nzSpan', 24)('nzErrorTip', Ce),
      o(5),
      s('nzOffset', 12)('nzSpan', 24),
      o(8),
      s('errorResponse', w.errorResponse);
  }
}
var Vt = (() => {
  class e {
    router = y(V);
    #e = y(ie);
    errorResponse = this.#e.selectors.errorResponse;
    isAuthenticated = this.#e.selectors.isAuthenticated;
    isLoading = R(!1);
    passwordVisible = !1;
    MinUserNameLength = 2;
    MaxUserNameLength = 100;
    MinEmailLength = 3;
    MaxEmailLength = 50;
    MinPasswordLength = 16;
    MaxPasswordLength = 32;
    confirmValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinPasswordLength)
          return { error: !0, min: !0 };
        if (t.value.length > this.MaxPasswordLength)
          return { error: !0, max: !0 };
        if (t.value !== this.registerForm.controls.password.value)
          return { error: !0, confirm: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    passwordValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinPasswordLength)
          return { error: !0, min: !0 };
        if (t.value.length > this.MaxPasswordLength)
          return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    nameValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinUserNameLength)
          return { error: !0, min: !0 };
        if (t.value.length > this.MaxUserNameLength)
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
    registerForm = new U({
      email: new v('', {
        nonNullable: !0,
        validators: [O.email, this.emailValidator],
      }),
      password: new v('', {
        nonNullable: !0,
        validators: [this.passwordValidator],
      }),
      confirm: new v('', {
        nonNullable: !0,
        validators: [this.confirmValidator],
      }),
      username: new v('', {
        nonNullable: !0,
        validators: [this.nameValidator],
      }),
    });
    register() {
      this.isLoading() ||
        this.#e.register({ loading: this.isLoading, form: this.registerForm });
    }
    resetForm() {
      this.registerForm.reset(),
        this.registerForm.controls.email.markAsPristine(),
        this.registerForm.controls.email.updateValueAndValidity(),
        this.registerForm.controls.username.markAsPristine(),
        this.registerForm.controls.username.updateValueAndValidity(),
        this.registerForm.controls.password.markAsPristine(),
        this.registerForm.controls.password.updateValueAndValidity(),
        this.registerForm.controls.confirm.markAsPristine(),
        this.registerForm.controls.confirm.updateValueAndValidity();
    }
    clickLink() {
      this.router.navigate(['login']);
    }
    validateConfirmPassword() {
      setTimeout(() =>
        this.registerForm.controls.confirm.updateValueAndValidity(),
      );
    }
    ngOnDestroy() {
      this.#e.resetErrorResponse();
    }
    static ɵfac = function (c) {
      return new (c || e)();
    };
    static ɵcmp = S({
      type: e,
      selectors: [['app-register']],
      standalone: !0,
      features: [N],
      decls: 2,
      vars: 1,
      consts: [
        ['userErrorTpl', ''],
        ['emailErrorTpl', ''],
        ['suffixTemplate', ''],
        ['passwordErrorTpl', ''],
        ['confirmErrorTpl', ''],
        ['applyTpl', ''],
        ['closeTpl', ''],
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
        ['nz-form', '', 3, 'formGroup'],
        ['nzRequired', '', 3, 'nzSpan'],
        ['nzHasFeedback', '', 3, 'nzSpan', 'nzErrorTip'],
        [
          'nz-input',
          '',
          'formControlName',
          'username',
          'placeholder',
          'Enter your username',
        ],
        [
          'nz-input',
          '',
          'formControlName',
          'email',
          'placeholder',
          'Enter your email',
          'type',
          'email',
        ],
        [3, 'nzSuffix'],
        [
          'nz-input',
          '',
          'formControlName',
          'password',
          'placeholder',
          'Enter your password',
          3,
          'ngModelChange',
          'type',
        ],
        [
          'nz-input',
          '',
          'type',
          'password',
          'formControlName',
          'confirm',
          'placeholder',
          'Confirm your password',
        ],
        [3, 'nzOffset', 'nzSpan'],
        [3, 'errorResponse'],
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
        ['nz-icon', '', 1, 'register-form-icon', 3, 'click', 'nzType'],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'round',
          'nz-popconfirm',
          '',
          'nzPopconfirmTitle',
          ' ',
          'nzPopconfirmShowArrow',
          'false',
          'nzOkText',
          'Yes',
          'nzCancelText',
          'No',
          3,
          'nzOnConfirm',
          'nzLoading',
          'nzIcon',
          'disabled',
        ],
        [
          'nz-button',
          '',
          'nzDanger',
          'true',
          'nzShape',
          'round',
          'nz-popconfirm',
          '',
          'nzPopconfirmTitle',
          ' ',
          'nzPopconfirmShowArrow',
          'false',
          'nzOkText',
          'Yes',
          'nzCancelText',
          'No',
          3,
          'nzOnConfirm',
          'nzIcon',
          'nzOkDanger',
        ],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
      ],
      template: function (c, _) {
        c & 1 && m(0, xe, 4, 0, 'div', 7)(1, Je, 55, 18, 'nz-card'),
          c & 2 && p(_.isAuthenticated() ? 0 : 1);
      },
      dependencies: [
        W,
        X,
        A,
        q,
        G,
        $,
        B,
        fe,
        le,
        ae,
        oe,
        D,
        P,
        ue,
        F,
        L,
        ce,
        pe,
        de,
        _e,
        re,
        J,
        Y,
        H,
        j,
        b,
        M,
        ne,
        Z,
        ee,
        te,
        se,
        me,
        Q,
        K,
        k,
        I,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return e;
})();
export { Vt as default };
