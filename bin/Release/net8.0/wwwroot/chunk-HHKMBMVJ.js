import { a as Xe } from './chunk-7GJ2ULY7.js';
import { a as $e, b as et, c as tt } from './chunk-L2DU7FT6.js';
import { a as Ye, b as Qe, c as Y } from './chunk-QA7LV64I.js';
import { a as Ke, b as Ze } from './chunk-IN7KQEXB.js';
import {
  a as nt,
  b as it,
  c as ot,
  d as rt,
  e as at,
  f as lt,
} from './chunk-WV7DJJBC.js';
import { a as N, b as D } from './chunk-5ATXPZ32.js';
import { a as X, b as H, c as K, d as Z, e as $ } from './chunk-5VUTOZIQ.js';
import {
  a as Se,
  c as ye,
  e as Ue,
  f as je,
  g as We,
  h as G,
} from './chunk-SVCW45ZG.js';
import { a as He, b as Q } from './chunk-WDME6LND.js';
import {
  $a as h,
  $b as we,
  $e as Ge,
  Aa as v,
  Ab as Ce,
  Ae as Ve,
  Be as Fe,
  Ce as ke,
  Da as p,
  Db as ge,
  De as Ie,
  Eb as w,
  Ee as Le,
  Ga as c,
  Jb as he,
  Le as Oe,
  Mb as xe,
  Me as Re,
  N as le,
  Na as g,
  Oe as R,
  Pe as U,
  Qe as A,
  Re as j,
  Sa as a,
  T as se,
  Ta as i,
  Te as W,
  Ua as u,
  Ue as q,
  Va as d,
  Ve as Ae,
  Wa as f,
  We as B,
  X as C,
  Xe as qe,
  Y as b,
  Ya as E,
  Ye as Be,
  af as Je,
  bb as m,
  bc as Ee,
  bf as J,
  cc as re,
  dd as V,
  ed as F,
  fb as de,
  fd as k,
  gc as Te,
  ha as _,
  hb as fe,
  ia as z,
  ib as ue,
  jb as _e,
  ka as me,
  kb as x,
  la as pe,
  lb as s,
  ma as ce,
  mb as ee,
  nb as y,
  pd as I,
  pe as Pe,
  qb as te,
  rb as ne,
  rd as L,
  sb as ie,
  se as ve,
  tb as ze,
  te as be,
  ub as M,
  va as l,
  vb as oe,
  ve as Me,
  we as O,
  xe as Ne,
  ye as De,
} from './chunk-55QWLPSH.js';
var ae = (() => {
  class e extends Je {
    #t = C(J);
    #e = C(Ge);
    #n = C(we);
    ngrxOnStoreInit() {
      this.setState({ profile: null });
    }
    getProfile = this.effect(
      le(
        t => (
          t.loading.set(!0),
          this.#e.getProfile(t.username).pipe(
            Be({
              next: n => {
                this.#n.setTitle(`${n.profile.username} - Profile`),
                  this.patchState({ profile: n.profile });
              },
              error: n => {
                this.patchState({ profile: null }),
                  console.error('Get Progile with', t.username, n.error),
                  this.#t.logout();
              },
              finalize: () => {
                t.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    static ɵfac = (() => {
      let t;
      return function (r) {
        return (t || (t = me(e)))(r || e);
      };
    })();
    static ɵprov = se({ token: e, factory: e.ɵfac });
  }
  return e;
})();
var mt = () => ({ standalone: !0 });
function wt(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 26),
      h('nzOnConfirm', function () {
        _(t);
        let r = m();
        return z(r.confirmApply());
      }),
      u(2, 'span', 27),
      s(3, ' Undo '),
      i(),
      f();
  }
  if (e & 2) {
    let t = m(),
      n = x(8);
    l(), c('nzIcon', n)('disabled', t.isLoading());
  }
}
function Et(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 28),
      h('nzOnConfirm', function () {
        _(t);
        let r = m();
        return z(r.confirmClose());
      }),
      u(2, 'span', 29),
      s(3, ' Close '),
      i(),
      f();
  }
  if (e & 2) {
    let t = m(),
      n = x(6);
    l(), c('nzIcon', n)('nzOkDanger', !0)('disabled', t.isLoading());
  }
}
function Tt(e, o) {
  e & 1 && (d(0), a(1, 'h4', 30), u(2, 'span', 31), i(), f());
}
function St(e, o) {
  e & 1 &&
    (d(0),
    a(1, 'h5', 32),
    s(2, 'Do you what to close without changes?'),
    i(),
    f());
}
function yt(e, o) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    p(1, Tt, 3, 0, 'ng-container', 11)(2, St, 3, 0, 'ng-container', 11),
    i());
}
function Pt(e, o) {
  e & 1 && (d(0), a(1, 'h4', 33), u(2, 'span', 31), i(), f());
}
function vt(e, o) {
  e & 1 &&
    (d(0), a(1, 'h5', 32), s(2, 'Do you what to undo all changes?'), i(), f());
}
function bt(e, o) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    p(1, Pt, 3, 0, 'ng-container', 11)(2, vt, 3, 0, 'ng-container', 11),
    i());
}
function Mt(e, o) {
  e & 1 && s(0, ' Please input your username. ');
}
function Nt(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The username must be at least ',
      t.MinUserNameLength,
      ' characters long. ',
    );
  }
}
function Dt(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The username must be at most ',
      t.MaxUserNameLength,
      ' characters long. ',
    );
  }
}
function Vt(e, o) {
  if ((e & 1 && p(0, Mt, 1, 0)(1, Nt, 1, 1)(2, Dt, 1, 1), e & 2)) {
    let t = o.$implicit;
    g(t.hasError('required') ? 0 : -1),
      l(),
      g(t.hasError('min') ? 1 : -1),
      l(),
      g(t.hasError('max') ? 2 : -1);
  }
}
function Ft(e, o) {
  if (e & 1) {
    let t = E();
    a(0, 'span', 34),
      h('click', function () {
        _(t);
        let r = m();
        return z((r.passwordVisible = !r.passwordVisible));
      }),
      i();
  }
  if (e & 2) {
    let t = m();
    c('nzType', t.passwordVisible ? 'eye' : 'eye-invisible');
  }
}
function kt(e, o) {
  e & 1 && s(0, ' Please enter your password. ');
}
function It(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The password must be at least ',
      t.MinPasswordLength,
      ' characters long. ',
    );
  }
}
function Lt(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The password must be at most ',
      t.MaxPasswordLength,
      ' characters long. ',
    );
  }
}
function Ot(e, o) {
  if ((e & 1 && p(0, kt, 1, 0)(1, It, 1, 1)(2, Lt, 1, 1), e & 2)) {
    let t = o.$implicit;
    g(t.hasError('required') ? 0 : -1),
      l(),
      g(t.hasError('min') ? 1 : -1),
      l(),
      g(t.hasError('max') ? 2 : -1);
  }
}
function Rt(e, o) {
  e & 1 && s(0, ' Please confirm your password. ');
}
function Ut(e, o) {
  e & 1 && s(0, ' The confirm password is inconsistent with password. ');
}
function At(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The password must be at least ',
      t.MinPasswordLength,
      ' characters long. ',
    );
  }
}
function jt(e, o) {
  if ((e & 1 && s(0), e & 2)) {
    let t = m(2);
    y(
      ' The password must be at most ',
      t.MaxPasswordLength,
      ' characters long. ',
    );
  }
}
function Wt(e, o) {
  if ((e & 1 && p(0, Rt, 1, 0)(1, Ut, 1, 0)(2, At, 1, 1)(3, jt, 1, 1), e & 2)) {
    let t = o.$implicit;
    g(t.hasError('required') ? 0 : -1),
      l(),
      g(t.hasError('confirm') ? 1 : -1),
      l(),
      g(t.hasError('min') ? 2 : -1),
      l(),
      g(t.hasError('max') ? 3 : -1);
  }
}
function qt(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 35),
      h('nzOnConfirm', function () {
        _(t);
        let r = m();
        return z(r.submitForm());
      }),
      s(2, ' Submit '),
      i(),
      f();
  }
  if (e & 2) {
    let t = m(),
      n = x(49);
    l(),
      c('nzLoading', t.isLoading())('nzIcon', n)('disabled', !t.userForm.valid);
  }
}
function Bt(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 36),
      h('nzOnConfirm', function () {
        _(t);
        let r = m();
        return z(r.resetForm());
      }),
      s(2, ' Reset '),
      i(),
      f();
  }
  if (e & 2) {
    m();
    let t = x(51);
    l(), c('nzIcon', t)('nzOkDanger', !0);
  }
}
function Gt(e, o) {
  e & 1 && (d(0), a(1, 'h4', 33), u(2, 'span', 31), i(), f());
}
function Jt(e, o) {
  e & 1 &&
    (d(0), a(1, 'h5', 32), s(2, 'Do you what to submit the form?'), i(), f());
}
function Yt(e, o) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    p(1, Gt, 3, 0, 'ng-container', 11)(2, Jt, 3, 0, 'ng-container', 11),
    i());
}
function Qt(e, o) {
  e & 1 && (d(0), a(1, 'h4', 30), u(2, 'span', 31), i(), f());
}
function Xt(e, o) {
  e & 1 &&
    (d(0), a(1, 'h5', 32), s(2, 'Do you what to reset the form?'), i(), f());
}
function Ht(e, o) {
  e & 1 &&
    (a(0, 'nz-space', 10),
    p(1, Qt, 3, 0, 'ng-container', 11)(2, Xt, 3, 0, 'ng-container', 11),
    i());
}
var pt = (() => {
  class e {
    user;
    errorResponse;
    enablePassword = !1;
    enableUsername = !1;
    nzMessageService = C(tt);
    drawerRef = C(Ye);
    atLeastOneTry = !1;
    isSubmited = !1;
    changeDetectorRef = C(he);
    messageId = null;
    isLoading = v(!0);
    injector = C(pe);
    MinUserNameLength = 2;
    MaxUserNameLength = 100;
    MinPasswordLength = 16;
    MaxPasswordLength = 32;
    passwordVisible = !1;
    confirmValidator = t => {
      if (t.value) {
        if (t.value.length < this.MinPasswordLength)
          return { error: !0, min: !0 };
        if (t.value.length > this.MaxPasswordLength)
          return { error: !0, max: !0 };
        if (t.value !== this.userForm.controls.password.value)
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
    userForm = new Me({
      password: new O('', {
        nonNullable: !0,
        validators: [this.passwordValidator],
      }),
      confirm: new O('', {
        nonNullable: !0,
        validators: [this.confirmValidator],
      }),
      username: new O('', {
        nonNullable: !0,
        validators: [this.nameValidator],
      }),
    });
    removeMessageService() {
      this.messageId &&
        (this.nzMessageService.remove(this.messageId), (this.messageId = null));
    }
    setMessageService() {
      this.isLoading.set(!0),
        (this.messageId = this.nzMessageService.loading(
          'Action in progress...',
          { nzDuration: 0 },
        ).messageId);
    }
    ngOnDestroy() {
      this.removeMessageService();
    }
    ngOnInit() {
      this.userForm.patchValue({ username: this.user()?.username }),
        this.disableEnable(),
        re(this.errorResponse, { injector: this.injector }).subscribe(t => {
          t &&
            (this.removeMessageService(),
            (this.isSubmited = !1),
            this.disableEnable());
        }),
        re(this.user, { injector: this.injector }).subscribe(t => {
          t &&
            this.isSubmited &&
            (this.removeMessageService(), this.drawerRef.close(!0));
        }),
        this.isLoading.set(!1);
    }
    submitForm() {
      this.isLoading() ||
        (this.setMessageService(),
        (this.atLeastOneTry = !0),
        (this.isSubmited = !0),
        this.drawerRef.execute({
          loading: this.isLoading,
          form: this.userForm,
        }));
    }
    resetForm() {
      this.userForm.reset(),
        this.userForm.controls.username.markAsPristine(),
        this.userForm.controls.username.updateValueAndValidity(),
        this.userForm.controls.password.markAsPristine(),
        this.userForm.controls.password.updateValueAndValidity(),
        this.userForm.controls.confirm.markAsPristine(),
        this.userForm.controls.confirm.updateValueAndValidity(),
        this.changeDetectorRef.markForCheck();
    }
    confirmClose() {
      this.atLeastOneTry &&
        this.nzMessageService.warning('Changes were not saved!'),
        this.drawerRef.close(!1);
    }
    confirmApply() {
      this.resetForm(),
        this.userForm.patchValue({ username: this.user()?.username });
    }
    validateConfirmPassword() {
      setTimeout(() => this.userForm.controls.confirm.updateValueAndValidity());
    }
    disableEnable() {
      this.disableEnableUsername(!0), this.disableEnablePassword(!0);
    }
    disableEnableUsername(t) {
      for (let n in this.userForm.controls)
        n === 'username' &&
          ((!this.enableUsername && !t) || (this.enableUsername && t)
            ? this.userForm.controls[n].enable()
            : (this.userForm.controls[n].markAsPristine(),
              this.userForm.controls[n].updateValueAndValidity(),
              this.userForm.controls[n].disable()));
    }
    disableEnablePassword(t) {
      for (let n in this.userForm.controls)
        (n === 'password' || n === 'confirm') &&
          ((!this.enablePassword && !t) || (this.enablePassword && t)
            ? this.userForm.controls[n].enable()
            : (this.userForm.controls[n].markAsPristine(),
              this.userForm.controls[n].updateValueAndValidity(),
              this.userForm.controls[n].disable()));
    }
    static ɵfac = function (n) {
      return new (n || e)();
    };
    static ɵcmp = b({
      type: e,
      selectors: [['app-article-listing-tags-edit']],
      inputs: {
        user: 'user',
        errorResponse: 'errorResponse',
        enablePassword: 'enablePassword',
        enableUsername: 'enableUsername',
      },
      standalone: !0,
      features: [M],
      decls: 53,
      vars: 21,
      consts: [
        ['closeTpl', ''],
        ['undoTpl', ''],
        ['userErrorTpl', ''],
        ['suffixTemplate', ''],
        ['passwordErrorTpl', ''],
        ['confirmErrorTpl', ''],
        ['submitTpl', ''],
        ['resetTpl', ''],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', ''],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-row', '', 'nzJustify', 'center'],
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
        ['nz-row', '', 'nzJustify', 'start'],
        [
          'nzCheckedChildren',
          'Change Username',
          'nzUnCheckedChildren',
          "Don't Change Username",
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
        ],
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
          'nzCheckedChildren',
          'Change Password',
          'nzUnCheckedChildren',
          "Don't Change Password",
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
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
          'nzIcon',
          'disabled',
        ],
        ['nz-icon', '', 'nzType', 'undo'],
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
          'disabled',
        ],
        ['nz-icon', '', 'nzType', 'close'],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        ['nz-typography', '', 'nzType', 'success'],
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
      ],
      template: function (n, r) {
        if (n & 1) {
          let T = E();
          a(0, 'div', 8)(1, 'div', 9)(2, 'nz-space', 10),
            p(3, wt, 4, 2, 'ng-container', 11)(4, Et, 4, 3, 'ng-container', 11),
            i()(),
            p(5, yt, 3, 0, 'ng-template', null, 0, w)(
              7,
              bt,
              3,
              0,
              'ng-template',
              null,
              1,
              w,
            ),
            i(),
            a(9, 'nz-card')(10, 'div', 12)(11, 'div', 13)(12, 'form', 14)(
              13,
              'div',
              15,
            )(14, 'div', 9)(15, 'nz-switch', 16),
            ie('ngModelChange', function (S) {
              return (
                _(T), ne(r.enableUsername, S) || (r.enableUsername = S), z(S)
              );
            }),
            h('click', function () {
              return _(T), z(r.disableEnableUsername(!1));
            }),
            i()()(),
            a(16, 'nz-form-item')(17, 'nz-form-label', 17),
            s(18, 'Username'),
            i(),
            a(19, 'nz-form-control', 18),
            u(20, 'input', 19),
            p(21, Vt, 3, 3, 'ng-template', null, 2, w),
            i()(),
            a(23, 'div', 15)(24, 'div', 9)(25, 'nz-switch', 20),
            ie('ngModelChange', function (S) {
              return (
                _(T), ne(r.enablePassword, S) || (r.enablePassword = S), z(S)
              );
            }),
            h('click', function () {
              return _(T), z(r.disableEnablePassword(!1));
            }),
            i()()(),
            a(26, 'nz-form-item')(27, 'nz-form-label', 17),
            s(28, 'Password'),
            i(),
            a(29, 'nz-form-control', 18)(30, 'nz-input-group', 21)(
              31,
              'input',
              22,
            ),
            h('ngModelChange', function () {
              return _(T), z(r.validateConfirmPassword());
            }),
            i()(),
            p(32, Ft, 1, 1, 'ng-template', null, 3, w),
            i(),
            p(34, Ot, 3, 3, 'ng-template', null, 4, w),
            i(),
            a(36, 'nz-form-item')(37, 'nz-form-label', 17),
            s(38, 'Confirm Password'),
            i(),
            a(39, 'nz-form-control', 18),
            u(40, 'input', 23),
            p(41, Wt, 4, 4, 'ng-template', null, 5, w),
            i()(),
            a(43, 'nz-form-item')(44, 'nz-form-control', 24)(
              45,
              'nz-space',
              10,
            ),
            p(46, qt, 3, 3, 'ng-container', 11)(
              47,
              Bt,
              3,
              2,
              'ng-container',
              11,
            ),
            i()(),
            p(48, Yt, 3, 0, 'ng-template', null, 6, w)(
              50,
              Ht,
              3,
              0,
              'ng-template',
              null,
              7,
              w,
            ),
            i()(),
            u(52, 'app-form-errors', 25),
            i()()();
        }
        if (n & 2) {
          let T = x(22),
            P = x(33),
            S = x(35),
            ct = x(42);
          l(12),
            c('formGroup', r.userForm),
            l(3),
            te('ngModel', r.enableUsername),
            c('ngModelOptions', oe(19, mt)),
            l(2),
            c('nzSpan', 12),
            l(2),
            c('nzSpan', 24)('nzErrorTip', T),
            l(6),
            te('ngModel', r.enablePassword),
            c('ngModelOptions', oe(20, mt)),
            l(2),
            c('nzSpan', 12),
            l(2),
            c('nzSpan', 24)('nzErrorTip', S),
            l(),
            c('nzSuffix', P),
            l(),
            c('type', r.passwordVisible ? 'text' : 'password'),
            l(6),
            c('nzSpan', 12),
            l(2),
            c('nzSpan', 24)('nzErrorTip', ct),
            l(5),
            c('nzOffset', 12)('nzSpan', 24),
            l(8),
            c('errorResponse', r.errorResponse);
        }
      },
      dependencies: [
        Ie,
        De,
        Pe,
        ve,
        be,
        Ve,
        Fe,
        lt,
        ke,
        Ne,
        B,
        j,
        W,
        q,
        D,
        N,
        at,
        F,
        V,
        it,
        nt,
        rt,
        ot,
        Y,
        G,
        k,
        L,
        I,
        R,
        Le,
        Re,
        Oe,
        $,
        Z,
        K,
        H,
        X,
        Q,
        Ze,
        Ke,
        A,
        U,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return e;
})();
var Kt = ['drawerTitleTemplate'];
function Zt(e, o) {
  e & 1 && (a(0, 'div', 4), u(1, 'nz-spin', 5), i());
}
function $t(e, o) {
  if ((e & 1 && (d(0), u(1, 'nz-avatar', 10), f()), e & 2)) {
    let t = m(3);
    l(),
      de(
        'nzSrc',
        'https://picsum.photos/id/',
        t.profile().image.length,
        '/300/200.jpg',
      );
  }
}
function en(e, o) {
  if (
    (e & 1 && (d(0), a(1, 'h5', 11), s(2), Ce(3, 'nzEllipsis'), i(), f()),
    e & 2)
  ) {
    let t = m(3);
    l(2), ee(ge(3, 1, t.profile().username, 15, '...'));
  }
}
function tn(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 12),
      u(2, 'span', 13),
      s(3, ' Blog Data '),
      u(4, 'span', 14),
      i(),
      a(5, 'nz-dropdown-menu', null, 2)(7, 'ul', 15)(8, 'li', 16)(9, 'a', 17),
      h('click', function () {
        _(t);
        let r = m(3);
        return z(r.clickLink('articles'));
      }),
      s(10, 'Articles'),
      i()()()(),
      f();
  }
  if (e & 2) {
    let t = x(6);
    l(), c('nzDropdownMenu', t);
  }
}
function nn(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 18),
      u(2, 'span', 13),
      s(3, ' Edit Profile '),
      u(4, 'span', 14),
      i(),
      a(5, 'nz-dropdown-menu', null, 3)(7, 'ul', 15)(8, 'li', 16)(9, 'a', 17),
      h('click', function () {
        _(t);
        let r = m(3);
        return z(r.createComponentModal('username'));
      }),
      s(10, 'Change Username'),
      i()(),
      a(11, 'li', 16)(12, 'a', 17),
      h('click', function () {
        _(t);
        let r = m(3);
        return z(r.createComponentModal('password'));
      }),
      s(13, 'Change Password'),
      i()()()(),
      f();
  }
  if (e & 2) {
    let t = x(6),
      n = m(3);
    l(), c('nzLoading', n.isUpdateLoading())('nzDropdownMenu', t);
  }
}
function on(e, o) {
  if (e & 1) {
    let t = E();
    d(0),
      a(1, 'button', 19),
      h('nzOnConfirm', function () {
        _(t);
        let r = m(3);
        return z(r.logOut());
      }),
      u(2, 'span', 20),
      s(3, ' Sign Off '),
      i(),
      f();
  }
  if (e & 2) {
    m();
    let t = x(13);
    l(), c('nzIcon', t)('nzOkDanger', !0);
  }
}
function rn(e, o) {
  e & 1 && (d(0), a(1, 'h4', 21), u(2, 'span', 22), i(), f());
}
function an(e, o) {
  e & 1 && (d(0), a(1, 'h5', 23), s(2, 'Do you what to sign off?'), i(), f());
}
function ln(e, o) {
  e & 1 &&
    (a(0, 'nz-space', 8),
    p(1, rn, 3, 0, 'ng-container', 9)(2, an, 3, 0, 'ng-container', 9),
    i());
}
function sn(e, o) {
  e & 1 &&
    (a(0, 'nz-card')(1, 'div', 6)(2, 'div', 7)(3, 'nz-space', 8),
    p(4, $t, 2, 2, 'ng-container', 9)(5, en, 4, 5, 'ng-container', 9),
    i()()(),
    a(6, 'div', 6)(7, 'div', 7)(8, 'nz-space', 8),
    p(9, tn, 11, 1, 'ng-container', 9)(10, nn, 14, 2, 'ng-container', 9)(
      11,
      on,
      4,
      2,
      'ng-container',
      9,
    ),
    i()()(),
    p(12, ln, 3, 0, 'ng-template', null, 1, w),
    i());
}
function mn(e, o) {
  if ((e & 1 && p(0, sn, 14, 0, 'nz-card'), e & 2)) {
    let t = m();
    g(t.isCurrentUser() ? 0 : -1);
  }
}
function pn(e, o) {
  if (
    (e & 1 && (a(0, 'div', 24)(1, 'div', 25)(2, 'h3', 11), s(3), i()()()),
    e & 2)
  ) {
    let t = m();
    l(3), ee(t.drawerTitle);
  }
}
var wi = (() => {
  class e {
    drawerTitleTemplate;
    #t = C(ae);
    #e = C(J);
    router = C(Te);
    destroyRef = C(ce);
    drawerService = C(Qe);
    profile = this.#t.selectors.profile;
    isCurrentUser = xe(() => !!this.profile());
    isLoading = v(!0);
    isUpdateLoading = v(!1);
    drawerTitle = '';
    set username(t) {
      this.#t.getProfile({ loading: this.isLoading, username: t });
    }
    noCancel() {
      return new Promise(n => {
        try {
          n(!1);
        } finally {
        }
      });
    }
    logOut() {
      this.#e.logout();
    }
    clickLink(t) {
      this.router.navigate(['admin', t]);
    }
    createComponentModal(t) {
      if (this.isUpdateLoading()) return;
      this.isUpdateLoading.set(!0),
        (this.drawerTitle = 'Update Account'),
        this.#e.resetErrorResponse();
      let n = this.drawerService.create({
        nzTitle: this.drawerTitleTemplate,
        nzContent: pt,
        nzWidth: 600,
        nzClosable: !1,
        nzOnCancel: this.noCancel,
        nzContentParams: {
          user: this.#e.selectors.user,
          errorResponse: this.#e.selectors.errorResponse,
          enableUsername: t === 'username',
          enablePassword: t === 'password',
        },
      });
      n.afterExecute.pipe(Ee(this.destroyRef)).subscribe(r => {
        r && this.#e.updateUser({ loading: r.loading, form: r.form });
      }),
        n.afterClose.subscribe(r => {
          r && this.router.navigate(['/']), this.isUpdateLoading.set(!1);
        });
    }
    static ɵfac = function (n) {
      return new (n || e)();
    };
    static ɵcmp = b({
      type: e,
      selectors: [['app-profile']],
      viewQuery: function (n, r) {
        if ((n & 1 && fe(Kt, 5), n & 2)) {
          let T;
          ue((T = _e())) && (r.drawerTitleTemplate = T.first);
        }
      },
      inputs: { username: 'username' },
      standalone: !0,
      features: [ze([qe(ae)]), M],
      decls: 4,
      vars: 1,
      consts: [
        ['drawerTitleTemplate', ''],
        ['closeTpl', ''],
        ['menu1', 'nzDropdownMenu'],
        ['menu', 'nzDropdownMenu'],
        [1, 'app-article-preview'],
        ['nzTip', 'Loading profile...'],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', '', 1, 'login-header-button'],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nzIcon', 'user', 3, 'nzSrc'],
        ['nz-typography', '', 'nzType', 'success'],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'round',
          'nz-dropdown',
          '',
          3,
          'nzDropdownMenu',
        ],
        ['nz-icon', '', 'nzType', 'audit'],
        ['nz-icon', '', 'nzType', 'down'],
        ['nz-menu', ''],
        ['nz-menu-item', ''],
        ['nz-button', '', 'nzType', 'link', 3, 'click'],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'round',
          'nz-dropdown',
          '',
          3,
          'nzLoading',
          'nzDropdownMenu',
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
        ['nz-icon', '', 'nzType', 'export'],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        ['nz-row', '', 'nzJustify', 'center'],
        ['nz-col', ''],
      ],
      template: function (n, r) {
        n & 1 &&
          p(0, Zt, 2, 0, 'div', 4)(1, mn, 1, 1)(
            2,
            pn,
            4,
            1,
            'ng-template',
            null,
            0,
            w,
          ),
          n & 2 && g(r.isLoading() ? 0 : 1);
      },
      dependencies: [
        et,
        $e,
        B,
        j,
        W,
        q,
        D,
        N,
        Y,
        G,
        ye,
        Se,
        Ue,
        We,
        je,
        L,
        I,
        $,
        Z,
        Xe,
        K,
        H,
        X,
        Q,
        He,
        A,
        U,
        k,
        F,
        V,
        Ae,
        R,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return e;
})();
export { wi as default };
