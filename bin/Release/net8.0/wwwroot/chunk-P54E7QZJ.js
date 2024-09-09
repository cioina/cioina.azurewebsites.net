import {
  a as jt,
  b as Wt,
  c as Ut,
  d as Kt,
  e as Yt,
  f as Ht,
  g as Gt,
  h as qt,
  i as Xt,
  j as et,
  k as tt,
} from './chunk-PDOH3BKW.js';
import './chunk-L3CBC6SQ.js';
import { c as ae } from './chunk-L2DU7FT6.js';
import { a as fe, b as Bt, c as oe } from './chunk-QA7LV64I.js';
import { a as ze, b as Ce } from './chunk-IN7KQEXB.js';
import {
  a as nt,
  b as it,
  c as rt,
  d as ot,
  e as at,
  f as lt,
} from './chunk-WV7DJJBC.js';
import { a as Ee, b as Se } from './chunk-5ATXPZ32.js';
import {
  a as $,
  b as ee,
  c as te,
  d as ne,
  e as ie,
  h as Je,
  i as je,
  j as We,
  k as Zt,
  l as $t,
  o as Ue,
  p as Ke,
  q as Ye,
  r as He,
  s as Ge,
  t as qe,
  u as Xe,
  v as Ze,
  w as $e,
} from './chunk-5VUTOZIQ.js';
import {
  a as Le,
  c as we,
  e as Fe,
  f as Pe,
  g as Qe,
  h as ue,
} from './chunk-SVCW45ZG.js';
import { a as Jt, b as Z } from './chunk-WDME6LND.js';
import {
  $a as z,
  Aa as V,
  Ab as Nt,
  Ae as ke,
  Be as De,
  Cb as Mt,
  Ce as _e,
  Da as p,
  De as Re,
  Eb as x,
  Ee as Ve,
  Ga as m,
  H as ut,
  Jb as me,
  Mb as kt,
  N as re,
  Na as S,
  Ne as Oe,
  Oe as he,
  P as Ae,
  Pa as N,
  Pe as K,
  Qa as M,
  Qe as Y,
  Ra as k,
  Re as H,
  Sa as a,
  T as xt,
  Ta as o,
  Te as G,
  Ua as f,
  Ub as Dt,
  Ue as q,
  Va as h,
  Ve as Ot,
  Wa as u,
  Wb as Rt,
  We as X,
  X as L,
  Xe as Ft,
  Y as F,
  Ya as A,
  Ye as O,
  Ze as Pt,
  a as D,
  af as Qt,
  b as R,
  bb as s,
  bc as zt,
  bf as Be,
  cc as le,
  dd as B,
  eb as ft,
  ed as J,
  fb as Lt,
  fd as j,
  fe as ye,
  gc as Vt,
  ha as g,
  hb as wt,
  he as ve,
  ia as _,
  ib as yt,
  jb as vt,
  ka as Et,
  kb as C,
  la as xe,
  lb as d,
  ma as St,
  mb as P,
  na as se,
  nb as w,
  pb as bt,
  pd as W,
  pe as be,
  qb as y,
  rb as v,
  rd as U,
  sb as b,
  se as pe,
  tb as It,
  te as Ie,
  ub as Q,
  va as c,
  vb as I,
  ve as Ne,
  we as de,
  xb as ce,
  xe as ge,
  ye as Me,
} from './chunk-55QWLPSH.js';
var Ct = (() => {
  class t extends Qt {
    #e = L(Be);
    #t = L(Pt);
    #n = L(Ut);
    #r = L(Rt);
    articleListConfig = this.#e.selectors.articleListConfig;
    ngrxOnStoreInit() {
      this.setState({
        articleList: [],
        tags: [],
        articleCount: 0,
        errorResponse: null,
        currentArticle: null,
      });
    }
    deleteArticle = this.effect(
      re(
        e => (
          e.loading.set(!0),
          this.#t.deleteArticle(e.articleId).pipe(
            O({
              next: i => {
                if (i > 0) {
                  let n = this.selectors.articleList(),
                    l = [];
                  n.forEach(T => {
                    T.id !== e.articleId && l.push(T);
                  }),
                    this.patchState({ articleList: l });
                } else console.error('Delete Article ID Failed', e.articleId);
              },
              error: i => {
                console.error(
                  'Delete Article ID Failed with',
                  e.articleId,
                  i.error,
                );
              },
              finalize: () => {
                e.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    linkTags = this.effect(
      re(
        e => (
          e.loading.set(!0),
          this.#t.linkTags(e.articleTags).pipe(
            O({
              next: i => {
                if (i >= 0) {
                  let n = this.selectors.articleList(),
                    l = [];
                  n.forEach(T => {
                    T.id !== e.articleTags.articleId ||
                      (T.tagList = e.articleTags.tags),
                      l.push(T);
                  }),
                    this.patchState({ articleList: l });
                } else
                  console.error(
                    'Link Tags Article ID Failed',
                    e.articleTags.articleId,
                  );
              },
              error: i => {
                console.error(
                  'Link Tags Article ID Failed',
                  e.articleTags.articleId,
                  i.error,
                );
              },
              finalize: () => {
                e.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    getArticleDetails = this.effect(
      re(
        e => (
          e.loading.set(!0),
          this.#t.getArticleDetail(e.articleId).pipe(
            O({
              next: i => {
                this.patchState({ currentArticle: i.article });
              },
              error: i => {
                this.patchState({ currentArticle: null }),
                  console.error(
                    'Get Article Details with',
                    e.articleId,
                    i.error,
                  );
              },
              finalize: () => {
                e.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    createTag = this.effect(
      re(
        e => (
          e.form.disable(),
          e.loading.set(!0),
          this.#n.createTag(e.form.getRawValue()).pipe(O(this.#o(e)))
        ),
      ),
    );
    editTag = this.effect(
      re(
        e => (
          e.form.disable(),
          e.loading.set(!0),
          this.#n.editTag(e.tagId, e.form.getRawValue()).pipe(O(this.#o(e)))
        ),
      ),
    );
    deleteTag = this.effect(
      re(
        e => (
          e.loading.set(!0),
          this.#n.deleteTag(e.tagId).pipe(
            O({
              next: i => {
                if (i > 0) {
                  let n = this.selectors.tags(),
                    l = [];
                  n.forEach(T => {
                    T.id !== i && l.push(T);
                  }),
                    this.patchState({ tags: l });
                } else console.error('Delete Tags ID Failed', e.tagId);
              },
              error: i => {
                console.error('Delete Tag ID Failed with', e.tagId, i.error);
              },
              finalize: () => {
                e.loading.set(!1);
              },
            }),
          )
        ),
      ),
    );
    #o = e => ({
      next: i => {
        let n = this.selectors.tags(),
          l = [];
        l.push(i.tag),
          n.forEach(T => {
            T.id !== i.tag.id && l.push(T);
          }),
          this.patchState({ tags: l }),
          this.selectors.errorResponse() &&
            this.patchState({ errorResponse: null });
      },
      error: i => {
        this.patchState({ errorResponse: i.error });
      },
      finalize: () => {
        e.form.enable(), e.loading.set(!1);
      },
    });
    getTags = this.effect(
      ut(
        e => (
          e.set(!0),
          this.#n.getTags().pipe(
            O(
              i => {
                this.patchState({ tags: i.tags });
              },
              i => {
                console.error('Get Tags Failed', i);
              },
              () => {
                e.set(!1);
              },
            ),
          )
        ),
      ),
    );
    createArticle = this.effect(
      re(
        e => (
          e.form.disable(),
          e.loading.set(!0),
          this.#t
            .createArticle(
              R(D({}, e.form.getRawValue()), { published: e.published }),
            )
            .pipe(O(this.#a(e)))
        ),
      ),
    );
    editArticle = this.effect(
      re(
        e => (
          e.form.disable(),
          e.loading.set(!0),
          this.#t
            .editArticle(
              e.articleId,
              R(D({}, e.form.getRawValue()), { published: e.published }),
            )
            .pipe(O(this.#a(e)))
        ),
      ),
    );
    #a = e => ({
      next: i => {
        let n = this.selectors.articleList(),
          l = n.findIndex(E => E.id === i.article.id),
          T = [];
        l < 0
          ? (T.push(i.article),
            n.forEach(E => {
              T.push(E);
            }))
          : n.forEach(E => {
              E.id === i.article.id ? T.push(i.article) : T.push(E);
            }),
          this.patchState({ articleList: T, currentArticle: i.article }),
          this.selectors.errorResponse() &&
            this.patchState({ errorResponse: null });
      },
      error: i => {
        this.patchState({ errorResponse: i.error });
      },
      finalize: () => {
        e.form.enable(), e.loading.set(!1);
      },
    });
    queryArticle = this.effect(
      Ae(e => {
        this.#e.patchState({
          articleListConfig: R(D({}, this.articleListConfig()), {
            currentPage: e.params.offset
              ? this.articleListConfig().currentPage
              : 1,
            filters: {
              limit: e.params.limit,
              offset: e.params.offset,
              tags: e.params.tags,
              published: e.params.published,
              createdAtAsc: e.params.createdAtAsc,
            },
          }),
        }),
          this.#i(e.loading);
      }),
    );
    onOffsetChange = this.effect(
      Ae(e => {
        this.#e.patchState({
          articleListConfig: R(D({}, this.articleListConfig()), {
            currentPage: e.offset,
            filters: R(D({}, this.articleListConfig()?.filters), {
              offset:
                Number(this.articleListConfig().filters.limit) * (e.offset - 1),
            }),
          }),
        }),
          this.#r.scrollToPosition([0, 0]),
          this.#i(e.loading);
      }),
    );
    onLimitChange = this.effect(
      Ae(e => {
        this.#e.patchState({
          articleListConfig: R(D({}, this.articleListConfig()), {
            currentPage: 1,
            filters: R(D({}, this.articleListConfig()?.filters), {
              limit: e.limit,
              offset: 0,
            }),
          }),
        }),
          this.#r.scrollToPosition([0, 0]),
          this.#i(e.loading);
      }),
    );
    #i = this.effect(
      ut(
        e => (
          e.set(!0),
          this.#l().pipe(
            O(
              i => {
                this.patchState({
                  articleList: i.articles,
                  articleCount: i.total,
                });
              },
              i => {
                console.error('Get Article Failed', i);
              },
              () => {
                e.set(!1);
              },
            ),
          )
        ),
      ),
    );
    #l() {
      let e = this.articleListConfig()?.filters;
      return this.#t.getAllArticles({
        limit: e?.limit,
        offset: e?.offset,
        tags: e?.tags,
        published: e?.published,
        createdAtAsc: e?.createdAtAsc,
      });
    }
    resetErrorResponse = this.updater(e =>
      R(D({}, e), { currentArticle: null, errorResponse: null }),
    );
    static ɵfac = (() => {
      let e;
      return function (n) {
        return (e || (e = Et(t)))(n || t);
      };
    })();
    static ɵprov = xt({ token: t, factory: t.ɵfac });
  }
  return t;
})();
var dn = () => ({ standalone: !0 }),
  en = () => ({ minRows: 2, maxRows: 5 }),
  gn = () => ({ minRows: 5, maxRows: 10 });
function _n(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 22),
      z('nzOnConfirm', function () {
        g(e);
        let n = s(2);
        return _(n.confirmApply());
      }),
      f(2, 'span', 23),
      d(3, ' Undo '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(2),
      i = C(8);
    c(), m('nzIcon', i)('disabled', e.isLoading());
  }
}
function hn(t, r) {
  t & 1 && p(0, _n, 4, 2, 'ng-container', 10);
}
function un(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 24),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.confirmClose());
      }),
      f(2, 'span', 25),
      d(3, ' Close '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(),
      i = C(6);
    c(), m('nzIcon', i)('nzOkDanger', !0)('disabled', e.isLoading());
  }
}
function fn(t, r) {
  t & 1 && (h(0), a(1, 'h4', 26), f(2, 'span', 27), o(), u());
}
function zn(t, r) {
  t & 1 &&
    (h(0),
    a(1, 'h5', 28),
    d(2, 'Do you what to close without changes?'),
    o(),
    u());
}
function Cn(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 9),
    p(1, fn, 3, 0, 'ng-container', 10)(2, zn, 3, 0, 'ng-container', 10),
    o());
}
function Tn(t, r) {
  t & 1 && (h(0), a(1, 'h4', 29), f(2, 'span', 27), o(), u());
}
function An(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 28), d(2, 'Do you what to undo all changes?'), o(), u());
}
function xn(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 9),
    p(1, Tn, 3, 0, 'ng-container', 10)(2, An, 3, 0, 'ng-container', 10),
    o());
}
function En(t, r) {
  t & 1 && d(0, ' Please enter slug. ');
}
function Sn(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The slug must be at least ', e.MinTitleLength, ' characters long. ');
  }
}
function Ln(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The slug must be at most ', e.MaxTitleLength, ' characters long. ');
  }
}
function wn(t, r) {
  if ((t & 1 && p(0, En, 1, 0)(1, Sn, 1, 1)(2, Ln, 1, 1), t & 2)) {
    let e = r.$implicit;
    S(e.hasError('required') ? 0 : -1),
      c(),
      S(e.hasError('min') ? 1 : -1),
      c(),
      S(e.hasError('max') ? 2 : -1);
  }
}
function yn(t, r) {
  t & 1 && d(0, ' Please enter title. ');
}
function vn(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The title must be at least ', e.MinTitleLength, ' characters long. ');
  }
}
function bn(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The title must be at most ', e.MaxTitleLength, ' characters long. ');
  }
}
function In(t, r) {
  if ((t & 1 && p(0, yn, 1, 0)(1, vn, 1, 1)(2, bn, 1, 1), t & 2)) {
    let e = r.$implicit;
    S(e.hasError('required') ? 0 : -1),
      c(),
      S(e.hasError('min') ? 1 : -1),
      c(),
      S(e.hasError('max') ? 2 : -1);
  }
}
function Nn(t, r) {
  t & 1 && d(0, ' Please enter description. ');
}
function Mn(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(
      ' The description must be at least ',
      e.MinDescriptionLength,
      ' characters long. ',
    );
  }
}
function kn(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(
      ' The description must be at most ',
      e.MaxDescriptionLength,
      ' characters long. ',
    );
  }
}
function Dn(t, r) {
  if ((t & 1 && p(0, Nn, 1, 0)(1, Mn, 1, 1)(2, kn, 1, 1), t & 2)) {
    let e = r.$implicit;
    S(e.hasError('required') ? 0 : -1),
      c(),
      S(e.hasError('min') ? 1 : -1),
      c(),
      S(e.hasError('max') ? 2 : -1);
  }
}
function Rn(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 30),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.submitForm());
      }),
      d(2, ' Submit '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(),
      i = C(43);
    c(),
      m('nzLoading', e.isLoading())('nzIcon', i)(
        'disabled',
        !e.articleForm.valid,
      );
  }
}
function Vn(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 31),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.resetForm());
      }),
      d(2, ' Reset '),
      o(),
      u();
  }
  if (t & 2) {
    s();
    let e = C(45);
    c(), m('nzIcon', e)('nzOkDanger', !0);
  }
}
function On(t, r) {
  t & 1 && (h(0), a(1, 'h4', 29), f(2, 'span', 27), o(), u());
}
function Fn(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 28), d(2, 'Do you what to submit the form?'), o(), u());
}
function Pn(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 9),
    p(1, On, 3, 0, 'ng-container', 10)(2, Fn, 3, 0, 'ng-container', 10),
    o());
}
function Qn(t, r) {
  t & 1 && (h(0), a(1, 'h4', 26), f(2, 'span', 27), o(), u());
}
function Bn(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 28), d(2, 'Do you what to reset the form?'), o(), u());
}
function Jn(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 9),
    p(1, Qn, 3, 0, 'ng-container', 10)(2, Bn, 3, 0, 'ng-container', 10),
    o());
}
var rn = (() => {
  class t {
    article;
    currentArticle;
    errorResponse;
    nzMessageService = L(ae);
    drawerRef = L(fe);
    published = !1;
    atLeastOneTry = !1;
    isSubmited = !1;
    changeDetectorRef = L(me);
    messageId = null;
    MinTitleLength = 2;
    MaxTitleLength = 320;
    MinDescriptionLength = 2;
    MaxDescriptionLength = 2e5;
    isLoading = V(!0);
    injector = L(xe);
    titleValidator = e => {
      if (e.value) {
        if (e.value.length < this.MinTitleLength) return { error: !0, min: !0 };
        if (e.value.length > this.MaxTitleLength) return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    descriptionValidator = e => {
      if (e.value) {
        if (e.value.length < this.MinDescriptionLength)
          return { error: !0, min: !0 };
        if (e.value.length > this.MaxDescriptionLength)
          return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    articleForm = new Ne({
      slug: new de('', { nonNullable: !0, validators: [this.titleValidator] }),
      title: new de('', { nonNullable: !0, validators: [this.titleValidator] }),
      description: new de('', {
        nonNullable: !0,
        validators: [this.descriptionValidator],
      }),
    });
    removeMessageService() {
      this.messageId &&
        (this.nzMessageService.remove(this.messageId), (this.messageId = null));
    }
    patchArticle(e) {
      this.articleForm.patchValue(e), (this.published = e.published);
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
      this.article && this.patchArticle(this.article),
        le(this.errorResponse, { injector: this.injector }).subscribe(e => {
          e && (this.removeMessageService(), (this.isSubmited = !1));
        }),
        le(this.currentArticle, { injector: this.injector }).subscribe(e => {
          e &&
            this.isSubmited &&
            (this.removeMessageService(), this.drawerRef.close(null));
        }),
        this.isLoading.set(!1);
    }
    submitForm() {
      this.isLoading() ||
        (this.setMessageService(),
        (this.atLeastOneTry = !0),
        (this.isSubmited = !0),
        this.article
          ? this.drawerRef.execute({
              loading: this.isLoading,
              form: this.articleForm,
              published: this.published,
              articleId: this.article.id,
            })
          : this.drawerRef.execute({
              loading: this.isLoading,
              form: this.articleForm,
              published: this.published,
            }));
    }
    resetForm() {
      this.articleForm.reset(),
        this.articleForm.controls.slug.markAsPristine(),
        this.articleForm.controls.slug.updateValueAndValidity(),
        this.articleForm.controls.title.markAsPristine(),
        this.articleForm.controls.title.updateValueAndValidity(),
        this.articleForm.controls.description.markAsPristine(),
        this.articleForm.controls.description.updateValueAndValidity(),
        (this.published = !1),
        this.changeDetectorRef.markForCheck();
    }
    confirmClose() {
      this.atLeastOneTry &&
        this.nzMessageService.warning('Changes were not saved!'),
        this.drawerRef.close(!1);
    }
    confirmApply() {
      this.article && (this.resetForm(), this.patchArticle(this.article));
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [['app-article-listing-tags-edit']],
      inputs: {
        article: 'article',
        currentArticle: 'currentArticle',
        errorResponse: 'errorResponse',
      },
      standalone: !0,
      features: [Q],
      decls: 47,
      vars: 22,
      consts: [
        ['closeTpl', ''],
        ['applyTpl', ''],
        ['slugErrorTpl', ''],
        ['titleErrorTpl', ''],
        ['descriptionErrorTpl', ''],
        ['submitTpl', ''],
        ['resetTpl', ''],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', ''],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        [
          'nzCheckedChildren',
          'Published',
          'nzUnCheckedChildren',
          'Unpublished',
          3,
          'ngModelChange',
          'ngModel',
          'ngModelOptions',
        ],
        ['nz-row', '', 'nzJustify', 'center'],
        [
          'nz-col',
          '',
          'nzXs',
          '24',
          'nzSm',
          '24',
          'nzMd',
          '24',
          'nzLg',
          '24',
          'nzXl',
          '24',
          'nzXXl',
          '24',
        ],
        ['nz-form', '', 3, 'formGroup'],
        ['nzRequired', '', 3, 'nzSpan'],
        ['nzHasFeedback', '', 3, 'nzSpan', 'nzErrorTip'],
        [
          'nz-input',
          '',
          'formControlName',
          'slug',
          'placeholder',
          'Enter article slug',
          3,
          'nzAutosize',
        ],
        [
          'nz-input',
          '',
          'formControlName',
          'title',
          'placeholder',
          'Enter article title',
          3,
          'nzAutosize',
        ],
        [
          'nz-input',
          '',
          'formControlName',
          'description',
          'placeholder',
          'Enter article description',
          3,
          'nzAutosize',
        ],
        [3, 'nzSpan'],
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
      template: function (i, n) {
        if (i & 1) {
          let l = A();
          a(0, 'div', 7)(1, 'div', 8)(2, 'nz-space', 9),
            p(3, hn, 1, 0, 'ng-container')(4, un, 4, 3, 'ng-container', 10),
            o()(),
            p(5, Cn, 3, 0, 'ng-template', null, 0, x)(
              7,
              xn,
              3,
              0,
              'ng-template',
              null,
              1,
              x,
            ),
            o(),
            a(9, 'nz-card')(10, 'div', 7)(11, 'div', 8)(12, 'nz-switch', 11),
            b('ngModelChange', function (E) {
              return g(l), v(n.published, E) || (n.published = E), _(E);
            }),
            o()()(),
            a(13, 'div', 12)(14, 'div', 13)(15, 'form', 14)(16, 'nz-form-item')(
              17,
              'nz-form-label',
              15,
            ),
            d(18, 'Slug'),
            o(),
            a(19, 'nz-form-control', 16),
            f(20, 'textarea', 17),
            o(),
            p(21, wn, 3, 3, 'ng-template', null, 2, x),
            o(),
            a(23, 'nz-form-item')(24, 'nz-form-label', 15),
            d(25, 'Title'),
            o(),
            a(26, 'nz-form-control', 16),
            f(27, 'textarea', 18),
            o(),
            p(28, In, 3, 3, 'ng-template', null, 3, x),
            o(),
            a(30, 'nz-form-item')(31, 'nz-form-label', 15),
            d(32, 'Description'),
            o(),
            a(33, 'nz-form-control', 16),
            f(34, 'textarea', 19),
            o(),
            p(35, Dn, 3, 3, 'ng-template', null, 4, x),
            o(),
            a(37, 'nz-form-item')(38, 'nz-form-control', 20)(39, 'nz-space', 9),
            p(40, Rn, 3, 3, 'ng-container', 10)(
              41,
              Vn,
              3,
              2,
              'ng-container',
              10,
            ),
            o()(),
            p(42, Pn, 3, 0, 'ng-template', null, 5, x)(
              44,
              Jn,
              3,
              0,
              'ng-template',
              null,
              6,
              x,
            ),
            o()(),
            f(46, 'app-form-errors', 21),
            o()()();
        }
        if (i & 2) {
          let l = C(22),
            T = C(29),
            E = C(36);
          c(3),
            S(n.article ? 3 : -1),
            c(9),
            y('ngModel', n.published),
            m('ngModelOptions', I(18, dn)),
            c(3),
            m('formGroup', n.articleForm),
            c(2),
            m('nzSpan', 24),
            c(2),
            m('nzSpan', 24)('nzErrorTip', l),
            c(),
            m('nzAutosize', I(19, en)),
            c(4),
            m('nzSpan', 24),
            c(2),
            m('nzSpan', 24)('nzErrorTip', T),
            c(),
            m('nzAutosize', I(20, en)),
            c(4),
            m('nzSpan', 24),
            c(2),
            m('nzSpan', 24)('nzErrorTip', E),
            c(),
            m('nzAutosize', I(21, gn)),
            c(4),
            m('nzSpan', 24),
            c(8),
            m('errorResponse', n.errorResponse);
        }
      },
      dependencies: [
        Re,
        Me,
        be,
        pe,
        Ie,
        ke,
        De,
        lt,
        _e,
        ge,
        X,
        H,
        G,
        q,
        Se,
        Ee,
        at,
        J,
        B,
        it,
        nt,
        ot,
        rt,
        oe,
        ue,
        j,
        U,
        W,
        he,
        Ve,
        Oe,
        ie,
        ne,
        te,
        ee,
        $,
        Z,
        Ce,
        ze,
        Y,
        K,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return t;
})();
var Un = (t, r) => [t, r];
function Kn(t, r) {
  t & 1 && (a(0, 'div', 10), f(1, 'nz-spin', 12), o());
}
function Yn(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'button', 15),
      z('click', function () {
        g(e);
        let n = s().$implicit,
          l = s();
        return _(l.clickEditTagsLink(n));
      }),
      f(1, 'span', 16),
      o();
  }
  if (t & 2) {
    let e = s().$implicit,
      i = s();
    m('nzLoading', i.routerLinkLoadingId() === e.id && i.loadingIndex === 1)(
      'disabled',
      i.isRouterLinkLoading() &&
        (i.routerLinkLoadingId() !== e.id || i.loadingIndex !== 1),
    );
  }
}
function Hn(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'button', 17),
      f(1, 'span', 18),
      o(),
      a(2, 'nz-dropdown-menu', null, 9)(4, 'ul', 19)(5, 'li', 20)(
        6,
        'button',
        21,
      ),
      z('nzOnConfirm', function () {
        g(e);
        let n = s().$implicit,
          l = s();
        return _(l.confirmDeleteArticle(n));
      }),
      d(7, ' Delete Article '),
      o()()()();
  }
  if (t & 2) {
    let e = C(3),
      i = s().$implicit,
      n = C(6),
      l = s();
    m('nzLoading', l.routerLinkLoadingId() === i.id && l.loadingIndex === 2)(
      'disabled',
      l.isRouterLinkLoading() &&
        (l.routerLinkLoadingId() !== i.id || l.loadingIndex !== 2),
    )('nzDropdownMenu', e),
      c(6),
      m(
        'disabled',
        (l.isRouterLinkLoading() &&
          (l.routerLinkLoadingId() !== i.id || l.loadingIndex !== 2)) ||
          (l.routerLinkLoadingId() === i.id && l.loadingIndex === 2),
      )('nzIcon', n)('nzOkDanger', !0);
  }
}
function Gn(t, r) {
  t & 1 && (h(0), a(1, 'h4', 24), f(2, 'span', 25), o(), u());
}
function qn(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 26), d(2, 'Do you what to delete article?'), o(), u());
}
function Xn(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 22),
    p(1, Gn, 3, 0, 'ng-container', 23)(2, qn, 3, 0, 'ng-container', 23),
    o());
}
function Zn(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'a', 27),
      z('click', function () {
        g(e);
        let n = s().$implicit,
          l = s();
        return _(l.clickArticleLink(n));
      }),
      d(1),
      o();
  }
  if (t & 2) {
    let e = s().$implicit;
    c(), w(' ', e.title, ' ');
  }
}
function $n(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2).$implicit;
    w(' ', e.description, ' ');
  }
}
function ei(t, r) {
  if (t & 1) {
    let e = A();
    p(0, $n, 1, 1),
      a(1, 'a', 15),
      z('click', function () {
        g(e);
        let n = s().$implicit,
          l = s();
        return _(l.clickEditArticleLink(n));
      }),
      d(2, 'Edit Article'),
      f(3, 'span', 28),
      o();
  }
  if (t & 2) {
    let e = s().$implicit,
      i = s();
    S(e.published ? 0 : -1),
      c(),
      m('nzLoading', i.routerLinkLoadingId() === e.id && i.loadingIndex === 3)(
        'disabled',
        i.isRouterLinkLoading() &&
          (i.routerLinkLoadingId() !== e.id || i.loadingIndex !== 3),
      );
  }
}
function ti(t, r) {
  if (
    (t & 1 &&
      (a(0, 'div', 29)(1, 'div', 30)(2, 'h5', 31),
      d(3),
      Nt(4, 'date'),
      o()()(),
      a(5, 'div', 32)(6, 'div', 33),
      f(7, 'img', 34),
      o()()),
    t & 2)
  ) {
    let e = s().$implicit,
      i = s();
    c(),
      ft('id', e.slug),
      c(2),
      P(Mt(4, 7, e.createdAt, 'MMMM d, yyyy')),
      c(4),
      Lt('nzSrc', 'https://picsum.photos/id/', e.id, '/300/200.jpg'),
      ft('alt', e.title),
      m('nzFallback', i.fallback)('nzPlaceholder', i.fallback);
  }
}
function ni(t, r) {
  if (
    (t & 1 &&
      (a(0, 'nz-list-item', 13),
      p(1, Yn, 2, 2, 'ng-template', null, 3, x)(
        3,
        Hn,
        8,
        6,
        'ng-template',
        null,
        4,
        x,
      )(5, Xn, 3, 0, 'ng-template', null, 5, x),
      a(7, 'nz-list-item-meta', 14),
      p(8, Zn, 2, 1, 'ng-template', null, 6, x)(
        10,
        ei,
        4,
        3,
        'ng-template',
        null,
        7,
        x,
      ),
      o(),
      p(12, ti, 8, 10, 'ng-template', null, 8, x),
      o()),
    t & 2)
  ) {
    let e = C(2),
      i = C(4),
      n = C(9),
      l = C(11),
      T = C(13);
    m('nzActions', ce(4, Un, e, i))('nzExtra', T),
      c(7),
      m('nzTitle', n)('nzDescription', l);
  }
}
function ii(t, r) {
  if (
    (t & 1 && (a(0, 'div', 29)(1, 'div', 33)(2, 'h5', 26), d(3), o()()()),
    t & 2)
  ) {
    let e = r,
      i = s(2);
    c(3),
      bt(
        ' ',
        i.articleListConfig().filters.limit *
          (i.articleListConfig().currentPage - 1) +
          1,
        ' - ',
        i.articleListConfig().filters.limit *
          i.articleListConfig().currentPage >
          e
          ? e
          : i.articleListConfig().filters.limit *
              i.articleListConfig().currentPage,
        ' of ',
        e,
        ' records ',
      );
  }
}
function ri(t, r) {
  if ((t & 1 && p(0, ii, 4, 3, 'div', 29), t & 2)) {
    let e,
      i = s();
    S((e = i.articlesCount()) ? 0 : -1, e);
  }
}
function oi(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'nz-pagination', 35),
      z('nzPageSizeChange', function (n) {
        g(e);
        let l = s();
        return _(l.setPageSize(n));
      })('nzPageIndexChange', function (n) {
        g(e);
        let l = s();
        return _(l.setPage(n));
      }),
      o();
  }
  if (t & 2) {
    let e = s();
    m('nzShowSizeChanger', !0)(
      'nzPageSize',
      e.articleListConfig().filters.limit,
    )('nzPageIndex', e.articleListConfig().currentPage)(
      'nzTotal',
      e.articlesCount(),
    );
  }
}
var on = (() => {
  class t {
    isRouterLinkLoading;
    routerLinkLoadingId;
    articleList;
    articlesCount;
    isLoading;
    articleListConfig;
    oldLimit;
    nzEditArticle = new se();
    nzDeleteArticle = new se();
    nzEditTags = new se();
    nzSetPage = new se();
    nzSetPageSize = new se();
    router = L(Vt);
    changeDetectorRef = L(me);
    loadingIndex = 0;
    fallback =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';
    setLoading(e, i) {
      (this.loadingIndex = i),
        this.isRouterLinkLoading.set(!0),
        this.routerLinkLoadingId.set(e.id),
        this.changeDetectorRef.markForCheck();
    }
    confirmDeleteArticle(e) {
      this.setLoading(e, 2), this.nzDeleteArticle.emit(e);
    }
    clickArticleLink(e) {
      this.setLoading(e, 0),
        setTimeout(() => {
          this.router.navigate(['articles', e.slug]);
        });
    }
    clickEditArticleLink(e) {
      this.setLoading(e, 3), this.nzEditArticle.emit(e);
    }
    clickEditTagsLink(e) {
      this.setLoading(e, 1), this.nzEditTags.emit(e);
    }
    setPage(e) {
      this.oldLimit() === this.articleListConfig().filters.limit
        ? this.nzSetPage.emit(e)
        : this.oldLimit.set(this.articleListConfig().filters.limit);
    }
    setPageSize(e) {
      this.articleListConfig().currentPage > Math.ceil(this.articlesCount() / e)
        ? this.oldLimit.set(this.articleListConfig().filters.limit)
        : this.oldLimit.set(e),
        this.nzSetPageSize.emit(e);
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [['app-articles']],
      inputs: {
        isRouterLinkLoading: 'isRouterLinkLoading',
        routerLinkLoadingId: 'routerLinkLoadingId',
        articleList: 'articleList',
        articlesCount: 'articlesCount',
        isLoading: 'isLoading',
        articleListConfig: 'articleListConfig',
        oldLimit: 'oldLimit',
      },
      outputs: {
        nzEditArticle: 'nzEditArticle',
        nzDeleteArticle: 'nzDeleteArticle',
        nzEditTags: 'nzEditTags',
        nzSetPage: 'nzSetPage',
        nzSetPageSize: 'nzSetPageSize',
      },
      standalone: !0,
      features: [Q],
      decls: 8,
      vars: 7,
      consts: [
        ['item', ''],
        ['footer', ''],
        ['pagination', ''],
        ['starAction', ''],
        ['likeAction', ''],
        ['closeTpl', ''],
        ['nzTitle', ''],
        ['nzDescription', ''],
        ['extra', ''],
        ['menu1', 'nzDropdownMenu'],
        [1, 'app-article-preview'],
        [
          3,
          'hidden',
          'nzDataSource',
          'nzItemLayout',
          'nzRenderItem',
          'nzPagination',
          'nzFooter',
        ],
        ['nzTip', 'Loading posts...'],
        [3, 'nzActions', 'nzExtra'],
        [3, 'nzTitle', 'nzDescription'],
        [
          'nz-button',
          '',
          'nzType',
          'link',
          3,
          'click',
          'nzLoading',
          'disabled',
        ],
        ['nz-icon', '', 'nzType', 'tag'],
        [
          'nz-button',
          '',
          'nzType',
          'link',
          'nz-dropdown',
          '',
          3,
          'nzLoading',
          'disabled',
          'nzDropdownMenu',
        ],
        ['nz-icon', '', 'nzType', 'delete'],
        ['nz-menu', ''],
        ['nz-menu-item', ''],
        [
          'nz-button',
          '',
          'nzDanger',
          'true',
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
          'disabled',
          'nzIcon',
          'nzOkDanger',
        ],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        [3, 'click'],
        ['nz-icon', '', 'nzType', 'edit'],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', '', 3, 'id'],
        ['nz-typography', '', 'nzType', 'secondary'],
        ['nz-row', ''],
        ['nz-col', ''],
        [
          'nz-image',
          '',
          'width',
          '300px',
          'height',
          '200px',
          3,
          'nzSrc',
          'nzFallback',
          'nzPlaceholder',
          'alt',
        ],
        [
          3,
          'nzPageSizeChange',
          'nzPageIndexChange',
          'nzShowSizeChanger',
          'nzPageSize',
          'nzPageIndex',
          'nzTotal',
        ],
      ],
      template: function (i, n) {
        if (
          (i & 1 &&
            (p(0, Kn, 2, 0, 'div', 10),
            a(1, 'nz-list', 11),
            p(2, ni, 14, 7, 'ng-template', null, 0, x)(
              4,
              ri,
              1,
              1,
              'ng-template',
              null,
              1,
              x,
            )(6, oi, 1, 4, 'ng-template', null, 2, x),
            o()),
          i & 2)
        ) {
          let l = C(3),
            T = C(5),
            E = C(7);
          S(n.isLoading() ? 0 : -1),
            c(),
            m('hidden', n.isLoading())('nzDataSource', n.articleList())(
              'nzItemLayout',
              'vertical',
            )('nzRenderItem', l)('nzPagination', E)('nzFooter', T);
        }
      },
      dependencies: [
        Dt,
        $t,
        Zt,
        j,
        J,
        B,
        Xt,
        Gt,
        qt,
        Ht,
        te,
        ee,
        $,
        ue,
        we,
        Le,
        Fe,
        Qe,
        Pe,
        Z,
        Jt,
        Yt,
        Kt,
        X,
        H,
        G,
        q,
        U,
        W,
        ie,
        ne,
        Y,
        K,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return t;
})();
var mi = () => ({ minRows: 2, maxRows: 5 }),
  pi = (t, r) => [t, r],
  Tt = () => ({ standalone: !0 });
function di(t, r) {
  if ((t & 1 && (h(0), a(1, 'h5', 30), f(2, 'span', 31), o(), u()), t & 2)) {
    let e = s(2);
    c(2), m('nzTooltipTitle', e.applyTooltipTitle);
  }
}
function gi(t, r) {
  t & 1 && p(0, di, 3, 1, 'ng-container', 17);
}
function _i(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 32),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.confirmApply());
      }),
      f(2, 'span', 33),
      d(3, ' Apply '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(),
      i = C(9);
    c(), m('disabled', e.disableApply())('nzIcon', i);
  }
}
function hi(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 34),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.confirmClose());
      }),
      f(2, 'span', 35),
      d(3, ' Close '),
      o(),
      u();
  }
  if (t & 2) {
    s();
    let e = C(7);
    c(), m('nzIcon', e)('nzOkDanger', !0);
  }
}
function ui(t, r) {
  t & 1 && (h(0), a(1, 'h4', 30), f(2, 'span', 36), o(), u());
}
function fi(t, r) {
  t & 1 &&
    (h(0),
    a(1, 'h5', 37),
    d(2, 'Do you what to close without changes?'),
    o(),
    u());
}
function zi(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 16),
    p(1, ui, 3, 0, 'ng-container', 17)(2, fi, 3, 0, 'ng-container', 17),
    o());
}
function Ci(t, r) {
  t & 1 && (h(0), a(1, 'h4', 38), f(2, 'span', 36), o(), u());
}
function Ti(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 37), d(2, 'Do you what to apply changes?'), o(), u());
}
function Ai(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 16),
    p(1, Ci, 3, 0, 'ng-container', 17)(2, Ti, 3, 0, 'ng-container', 17),
    o());
}
function xi(t, r) {
  if (
    (t & 1 && (a(0, 'div', 18)(1, 'div', 15)(2, 'h3', 30), d(3), o()()()),
    t & 2)
  ) {
    let e = s();
    c(3), w('Edit existing tag with id: ', e.currentTagId, '');
  }
}
function Ei(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-switch', 39),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.showEditTag, n) || (l.showEditTag = n), _(n);
      }),
      z('click', function () {
        g(e);
        let n = s();
        return _(n.disableEnableEditTag());
      }),
      o(),
      u();
  }
  if (t & 2) {
    let e = s();
    c(),
      y('ngModel', e.showEditTag),
      m('ngModelOptions', I(3, Tt))('disabled', e.disableApply());
  }
}
function Si(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'button', 40),
      f(1, 'span', 41),
      o(),
      a(2, 'nz-dropdown-menu', null, 8)(4, 'ul', 42)(5, 'li', 43)(
        6,
        'button',
        44,
      ),
      z('nzOnConfirm', function () {
        g(e);
        let n = s(2);
        return _(n.clickDeleteTag());
      }),
      d(7, ' Delete Tag '),
      o()()()();
  }
  if (t & 2) {
    let e = C(3),
      i = s(2),
      n = C(18);
    m('nzLoading', i.isLoading())('disabled', i.currentTagId <= 0)(
      'nzDropdownMenu',
      e,
    ),
      c(6),
      m('disabled', i.currentTagId <= 0)('nzIcon', n)('nzOkDanger', !0);
  }
}
function Li(t, r) {
  if ((t & 1 && (h(0), p(1, Si, 8, 6), u()), t & 2)) {
    let e = s();
    c(), S(e.showEditTag ? 1 : -1);
  }
}
function wi(t, r) {
  t & 1 && (h(0), a(1, 'h4', 30), f(2, 'span', 36), o(), u());
}
function yi(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 37), d(2, 'Do you what to delete article?'), o(), u());
}
function vi(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 16),
    p(1, wi, 3, 0, 'ng-container', 17)(2, yi, 3, 0, 'ng-container', 17),
    o());
}
function bi(t, r) {
  if ((t & 1 && (h(0), a(1, 'h5', 30), f(2, 'span', 31), o(), u()), t & 2)) {
    let e = s(3);
    c(2), m('nzTooltipTitle', e.applyTooltipTitle);
  }
}
function Ii(t, r) {
  t & 1 && p(0, bi, 3, 1, 'ng-container', 17);
}
function Ni(t, r) {
  if ((t & 1 && f(0, 'nz-option', 46), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.title)('nzValue', e);
  }
}
function Mi(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = r.$implicit;
    w(' ', e.nzLabel, ' ');
  }
}
function ki(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-select', 45),
      b('ngModelChange', function (n) {
        g(e);
        let l = s(2);
        return v(l.showEditTag, n) || (l.showEditTag = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s(2);
        return _(l.updateEditTag(n));
      }),
      M(2, Ni, 1, 2, 'nz-option', 46, N),
      o(),
      p(4, Mi, 1, 1, 'ng-template', null, 9, x),
      u();
  }
  if (t & 2) {
    let e = C(5),
      i = s(2);
    c(),
      m('nzBackdrop', !0)('disabled', i.disableApply())('nzCustomTemplate', e),
      y('ngModel', i.showEditTag),
      m('ngModelOptions', I(5, Tt)),
      c(),
      k(i.editTags);
  }
}
function Di(t, r) {
  if (
    (t & 1 &&
      (a(0, 'div', 14)(1, 'div', 15)(2, 'nz-space', 16),
      p(3, Ii, 1, 0, 'ng-container')(4, ki, 6, 6, 'ng-container', 17),
      o()()()),
    t & 2)
  ) {
    let e = s();
    c(3), S(e.disableApply() ? 3 : -1);
  }
}
function Ri(t, r) {
  t & 1 && d(0, ' Please enter tag name. ');
}
function Vi(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The tag name must be at least ', e.MinNameLength, ' characters long. ');
  }
}
function Oi(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = s(2);
    w(' The tag name must be at most ', e.MaxNameLength, ' characters long. ');
  }
}
function Fi(t, r) {
  if ((t & 1 && p(0, Ri, 1, 0)(1, Vi, 1, 1)(2, Oi, 1, 1), t & 2)) {
    let e = r.$implicit;
    S(e.hasError('required') ? 0 : -1),
      c(),
      S(e.hasError('min') ? 1 : -1),
      c(),
      S(e.hasError('max') ? 2 : -1);
  }
}
function Pi(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 47),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.submitForm());
      }),
      d(2),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(),
      i = C(36);
    c(),
      m('nzLoading', e.isLoading())('nzIcon', i)('disabled', !e.tagForm.valid),
      c(),
      w(' ', e.currentTagId > 0 ? 'Change Tag' : 'New Tag', ' ');
  }
}
function Qi(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 34),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.resetForm());
      }),
      d(2, ' Reset '),
      o(),
      u();
  }
  if (t & 2) {
    s();
    let e = C(38);
    c(), m('nzIcon', e)('nzOkDanger', !0);
  }
}
function Bi(t, r) {
  t & 1 && (h(0), a(1, 'h4', 38), f(2, 'span', 36), o(), u());
}
function Ji(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 37), d(2, 'Do you what to submit the form?'), o(), u());
}
function ji(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 16),
    p(1, Bi, 3, 0, 'ng-container', 17)(2, Ji, 3, 0, 'ng-container', 17),
    o());
}
function Wi(t, r) {
  t & 1 && (h(0), a(1, 'h4', 30), f(2, 'span', 36), o(), u());
}
function Ui(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 37), d(2, 'Do you what to reset the form?'), o(), u());
}
function Ki(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 16),
    p(1, Wi, 3, 0, 'ng-container', 17)(2, Ui, 3, 0, 'ng-container', 17),
    o());
}
function Yi(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-switch', 48),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.showSearch, n) || (l.showSearch = n), _(n);
      }),
      z('click', function () {
        g(e);
        let n = s();
        return _(n.disableEnable());
      }),
      o(),
      u();
  }
  if (t & 2) {
    let e = s();
    c(),
      y('ngModel', e.showSearch),
      m('ngModelOptions', I(3, Tt))('disabled', e.leftSearch || e.rightSearch);
  }
}
function Hi(t, r) {
  t & 1 && (h(0), a(1, 'h5', 30), f(2, 'span', 49), o(), u());
}
function Gi(t, r) {
  t & 1 && p(0, Hi, 3, 0, 'ng-container', 17);
}
function qi(t, r) {
  t & 1 && (h(0), a(1, 'h4', 53), d(2, 'Remaining Tags'), o(), u());
}
function Xi(t, r) {
  t & 1 && (h(0), a(1, 'h5', 53), f(2, 'span', 54), o(), u());
}
function Zi(t, r) {
  if ((t & 1 && f(0, 'nz-option', 46), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.label)('nzValue', e.value);
  }
}
function $i(t, r) {
  if ((t & 1 && (f(0, 'span', 55), d(1)), t & 2)) {
    let e = r.$implicit;
    m('nzType', 'sort-' + e.nzValue), c(), w(' ', e.nzLabel, ' ');
  }
}
function er(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'tr', 56),
      z('click', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      a(1, 'td', 57),
      z('nzCheckedChange', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      o(),
      a(2, 'td'),
      d(3),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = s().disabled;
    c(),
      m('nzChecked', e.checked)('nzDisabled', i || e.disabled),
      c(2),
      P(e.title);
  }
}
function tr(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'div', 18)(1, 'div', 15)(2, 'nz-space', 16),
      p(3, qi, 3, 0, 'ng-container', 17)(4, Xi, 3, 0, 'ng-container', 17),
      o()()(),
      a(5, 'div', 18)(6, 'div', 15)(7, 'nz-select', 50),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.orderModelLeft, n) || (l.orderModelLeft = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s();
        return _(l.handleOrderLeft(n));
      }),
      M(8, Zi, 1, 2, 'nz-option', 46, N),
      o(),
      p(10, $i, 2, 2, 'ng-template', null, 10, x),
      o()(),
      a(12, 'nz-table', 51, 11)(14, 'thead')(15, 'tr')(16, 'th', 52),
      z('nzCheckedChange', function (n) {
        let l = g(e).onItemSelectAll;
        return _(l(n));
      }),
      o(),
      a(17, 'th'),
      d(18, 'All'),
      o()()(),
      a(19, 'tbody'),
      M(20, er, 4, 3, 'tr', null, N),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = r.stat,
      n = r.disabled,
      l = C(11),
      T = C(13),
      E = s();
    c(7),
      m('nzBackdrop', !0)('nzCustomTemplate', l),
      y('ngModel', E.orderModelLeft),
      c(),
      k(E.listOfOption),
      c(4),
      m('nzData', E.convertItemsRight(e)),
      c(4),
      m('nzDisabled', n)('nzChecked', i.checkAll)(
        'nzIndeterminate',
        i.checkHalf,
      ),
      c(4),
      k(T.data);
  }
}
function nr(t, r) {
  t & 1 && (h(0), a(1, 'h4', 38), d(2, 'Selected Tags'), o(), u());
}
function ir(t, r) {
  t & 1 && (h(0), a(1, 'h5', 38), f(2, 'span', 58), o(), u());
}
function rr(t, r) {
  if ((t & 1 && f(0, 'nz-option', 46), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.label)('nzValue', e.value);
  }
}
function or(t, r) {
  if ((t & 1 && (f(0, 'span', 55), d(1)), t & 2)) {
    let e = r.$implicit;
    m('nzType', 'sort-' + e.nzValue), c(), w(' ', e.nzLabel, ' ');
  }
}
function ar(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'tr', 56),
      z('click', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      a(1, 'td', 57),
      z('nzCheckedChange', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      o(),
      a(2, 'td'),
      d(3),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = s().disabled;
    c(),
      m('nzChecked', e.checked)('nzDisabled', i || e.disabled),
      c(2),
      P(e.title);
  }
}
function lr(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'div', 18)(1, 'div', 15)(2, 'nz-space', 16),
      p(3, nr, 3, 0, 'ng-container', 17)(4, ir, 3, 0, 'ng-container', 17),
      o()()(),
      a(5, 'div', 18)(6, 'div', 15)(7, 'nz-select', 50),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.orderModelRight, n) || (l.orderModelRight = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s();
        return _(l.handleOrderRight(n));
      }),
      M(8, rr, 1, 2, 'nz-option', 46, N),
      o(),
      p(10, or, 2, 2, 'ng-template', null, 12, x),
      o()(),
      a(12, 'nz-table', 51, 13)(14, 'thead')(15, 'tr')(16, 'th', 52),
      z('nzCheckedChange', function (n) {
        let l = g(e).onItemSelectAll;
        return _(l(n));
      }),
      o(),
      a(17, 'th'),
      d(18, 'All'),
      o()()(),
      a(19, 'tbody'),
      M(20, ar, 4, 3, 'tr', null, N),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = r.stat,
      n = r.disabled,
      l = C(11),
      T = C(13),
      E = s();
    c(7),
      m('nzBackdrop', !0)('nzCustomTemplate', l),
      y('ngModel', E.orderModelRight),
      c(),
      k(E.listOfOption),
      c(4),
      m('nzData', E.convertItemsLeft(e)),
      c(4),
      m('nzDisabled', n)('nzChecked', i.checkAll)(
        'nzIndeterminate',
        i.checkHalf,
      ),
      c(4),
      k(T.data);
  }
}
var an = (() => {
  class t {
    article;
    tagList;
    currentArticle;
    errorResponse;
    nzMessageService = L(ae);
    drawerRef = L(fe);
    selectedCount = 0;
    list = [];
    showSearch = !1;
    leftSearch = !1;
    rightSearch = !1;
    selectedTags = null;
    applyTooltipTitle = '';
    orderModelLeft = null;
    orderModelRight = null;
    listOfOption = [
      { label: 'Ascending', value: 'ascending' },
      { label: 'Descending', value: 'descending' },
    ];
    sortOrder = null;
    isAscending = !1;
    changeDetectorRef = L(me);
    messageId = null;
    MinNameLength = 2;
    MaxNameLength = 420;
    editTags = [];
    currentTagId = 0;
    showEditTag = !1;
    isLoading = V(!0);
    injector = L(xe);
    titleValidator = e => {
      if (e.value) {
        if (e.value.length < this.MinNameLength) return { error: !0, min: !0 };
        if (e.value.length > this.MaxNameLength) return { error: !0, max: !0 };
      } else return { error: !0, required: !0 };
      return {};
    };
    tagForm = new Ne({
      title: new de('', { nonNullable: !0, validators: [this.titleValidator] }),
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
    cancelLoading() {
      this.removeMessageService(),
        this.isLoading.set(!1),
        this.changeDetectorRef.markForCheck();
    }
    isTagListChange() {
      let e = this.selectedTags;
      if (
        ((this.selectedTags = []),
        this.list
          .filter(n => n.direction === 'right')
          .forEach(n => this.selectedTags.push(n.id)),
        e.length !== this.selectedTags.length)
      )
        return !0;
      let i = !0;
      return e.forEach(n => (i = i && this.selectedTags.includes(n))), !i;
    }
    fillTags(e) {
      (this.list = []),
        e.forEach(i =>
          this.list.push({
            title: i.title,
            id: i.id,
            direction: this.selectedTags.includes(i.id) ? 'right' : 'left',
          }),
        ),
        (this.selectedCount = this.selectedTags.length),
        (this.showEditTag = null),
        (this.orderModelLeft = null),
        (this.orderModelRight = null),
        (this.currentTagId = 0),
        (this.editTags = []),
        this.resetForm(),
        this.cancelLoading();
    }
    ngOnDestroy() {
      this.removeMessageService();
    }
    ngOnInit() {
      (this.messageId = this.nzMessageService.loading('Action in progress...', {
        nzDuration: 0,
      }).messageId),
        this.article.tagList
          ? (this.selectedTags = this.article.tagList)
          : (this.drawerRef.execute({
              loading: this.isLoading,
              articleId: this.article.id,
            }),
            le(this.currentArticle, { injector: this.injector }).subscribe(
              e => {
                e &&
                  (e.tagList
                    ? (this.selectedTags = e.tagList)
                    : (this.selectedTags = []),
                  this.tagList().length && this.fillTags(this.tagList()));
              },
            )),
        le(this.errorResponse, { injector: this.injector }).subscribe(e => {
          e && this.removeMessageService();
        }),
        le(this.tagList, { injector: this.injector }).subscribe(e => {
          e && e.length && this.selectedTags && this.fillTags(e);
        });
    }
    submitForm() {
      this.isLoading() ||
        (this.setMessageService(),
        this.currentTagId
          ? this.drawerRef.execute({
              loading: this.isLoading,
              form: this.tagForm,
              tagId: this.currentTagId,
            })
          : this.drawerRef.execute({
              loading: this.isLoading,
              form: this.tagForm,
            }));
    }
    resetForm() {
      this.tagForm.reset(),
        this.tagForm.controls.title.markAsPristine(),
        this.tagForm.controls.title.updateValueAndValidity(),
        this.changeDetectorRef.markForCheck();
    }
    clickDeleteTag() {
      this.isLoading() ||
        (this.setMessageService(),
        this.drawerRef.execute({
          loading: this.isLoading,
          tagId: this.currentTagId,
        }));
    }
    updateEditTag(e) {
      e
        ? ((this.currentTagId = e.id),
          this.tagForm.patchValue(e),
          this.changeDetectorRef.markForCheck())
        : (this.currentTagId = 0);
    }
    disableEnableEditTag() {
      (this.editTags = []),
        (this.currentTagId = 0),
        this.showEditTag ||
          this.list
            .filter(e => e.direction === 'right')
            .forEach(e => this.editTags.push({ title: e.title, id: e.id })),
        this.changeDetectorRef.markForCheck();
    }
    disableEnable() {
      this.showSearch ||
        (this.showSearch = this.leftSearch || this.rightSearch);
    }
    handleSearchChange(e) {
      e.direction === 'left'
        ? (this.leftSearch = e.value !== '')
        : (this.rightSearch = e.value !== '');
    }
    handleChange(e) {
      e.from === 'right'
        ? ((this.orderModelLeft = null),
          (this.sortOrder = { direction: 'left', sortOrder: null }),
          (this.selectedCount -= e.list.length))
        : ((this.orderModelRight = null),
          (this.sortOrder = { direction: 'right', sortOrder: null }),
          (this.selectedCount += e.list.length));
    }
    handleFilterOption(e, i) {
      return i.title.toLowerCase().includes(e.toLowerCase());
    }
    confirmClose() {
      this.isTagListChange() &&
        this.nzMessageService.warning('Changes were not saved!'),
        this.drawerRef.close(!1);
    }
    disableApply() {
      return this.selectedCount < 1
        ? ((this.applyTooltipTitle = 'It should be at least one selected tag.'),
          !0)
        : this.selectedCount > 100
          ? ((this.applyTooltipTitle =
              'It should not be more than 100 selected tags.'),
            !0)
          : !1;
    }
    confirmApply() {
      this.isTagListChange()
        ? (this.nzMessageService.info('Applying selected tags.'),
          this.selectedTags.length === this.list.length &&
            (this.selectedTags = null),
          this.drawerRef.close(this.selectedTags))
        : this.drawerRef.close(null);
    }
    convertItemsRight(e) {
      return e.filter(i => !i.hide);
    }
    convertItemsLeft(e) {
      return e.filter(i => !i.hide);
    }
    handleOrderRight(e) {
      this.sortOrder = { direction: 'right', sortOrder: e };
    }
    handleOrderLeft(e) {
      this.sortOrder = { direction: 'left', sortOrder: e };
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [['app-article-listing-tags-edit']],
      inputs: {
        article: 'article',
        tagList: 'tagList',
        currentArticle: 'currentArticle',
        errorResponse: 'errorResponse',
      },
      standalone: !0,
      features: [Q],
      decls: 50,
      vars: 21,
      consts: [
        ['closeTpl', ''],
        ['applyTpl', ''],
        ['deleteTpl', ''],
        ['tagErrorTpl', ''],
        ['submitTpl', ''],
        ['resetTpl', ''],
        ['renderList', ''],
        ['renderSelectedList', ''],
        ['menu1', 'nzDropdownMenu'],
        ['tagTemplate', ''],
        ['orderTemplateLeft', ''],
        ['t1', ''],
        ['orderTemplateRight', ''],
        ['t2', ''],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', ''],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-row', '', 'nzJustify', 'center'],
        ['nz-row', '', 'nzJustify', 'start'],
        [
          'nz-col',
          '',
          'nzXs',
          '24',
          'nzSm',
          '24',
          'nzMd',
          '24',
          'nzLg',
          '24',
          'nzXl',
          '24',
          'nzXXl',
          '24',
        ],
        ['nz-form', '', 3, 'formGroup'],
        ['nzRequired', '', 3, 'nzSpan'],
        ['nzHasFeedback', '', 3, 'nzSpan', 'nzErrorTip'],
        [
          'nz-input',
          '',
          'formControlName',
          'title',
          'placeholder',
          'Enter tag name',
          3,
          'nzAutosize',
        ],
        [3, 'nzSpan'],
        [3, 'errorResponse'],
        ['nz-row', '', 'nzJustify', 'start', 2, 'margin-bottom', '20px'],
        ['nzSize', 'small', 'nzAlign', 'center'],
        [
          3,
          'nzSearchChange',
          'nzChange',
          'nzDataSource',
          'nzShowSearch',
          'nzShowSelectAll',
          'nzFilterOption',
          'nzRenderList',
          'nzSortOrder',
        ],
        ['nz-typography', '', 'nzType', 'danger'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          3,
          'nzTooltipTitle',
        ],
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
          'disabled',
          'nzIcon',
        ],
        ['nz-icon', '', 'nzType', 'check'],
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
        ['nz-icon', '', 'nzType', 'close'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        ['nz-typography', '', 'nzType', 'success'],
        [
          'nzCheckedChildren',
          'Disable Edit',
          'nzUnCheckedChildren',
          'Enable Edit',
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
          'disabled',
        ],
        [
          'nz-button',
          '',
          'nzType',
          'link',
          'nz-dropdown',
          '',
          3,
          'nzLoading',
          'disabled',
          'nzDropdownMenu',
        ],
        ['nz-icon', '', 'nzType', 'delete'],
        ['nz-menu', ''],
        ['nz-menu-item', ''],
        [
          'nz-button',
          '',
          'nzDanger',
          'true',
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
          'disabled',
          'nzIcon',
          'nzOkDanger',
        ],
        [
          'nzAllowClear',
          '',
          'nzPlaceHolder',
          'Edit Tag',
          3,
          'ngModelChange',
          'nzBackdrop',
          'disabled',
          'nzCustomTemplate',
          'ngModel',
          'ngModelOptions',
        ],
        [3, 'nzLabel', 'nzValue'],
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
          'nzCheckedChildren',
          'Hide Search',
          'nzUnCheckedChildren',
          'Show Search',
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
          'disabled',
        ],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Clear out all search boxes in order to hide them.',
        ],
        [
          'nzAllowClear',
          '',
          'nzPlaceHolder',
          'Sort Order...',
          3,
          'ngModelChange',
          'nzBackdrop',
          'nzCustomTemplate',
          'ngModel',
        ],
        ['nzSize', 'small', 3, 'nzData'],
        [
          'nzShowCheckbox',
          '',
          3,
          'nzCheckedChange',
          'nzDisabled',
          'nzChecked',
          'nzIndeterminate',
        ],
        ['nz-typography', '', 'nzType', 'warning'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Here are all remaining tags.',
        ],
        ['nz-icon', '', 3, 'nzType'],
        [3, 'click'],
        ['nzShowCheckbox', '', 3, 'nzCheckedChange', 'nzChecked', 'nzDisabled'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Here are all selected tags.',
        ],
      ],
      template: function (i, n) {
        if (i & 1) {
          let l = A();
          a(0, 'div', 14)(1, 'div', 15)(2, 'nz-space', 16),
            p(3, gi, 1, 0, 'ng-container')(4, _i, 4, 2, 'ng-container', 17)(
              5,
              hi,
              4,
              2,
              'ng-container',
              17,
            ),
            o()(),
            p(6, zi, 3, 0, 'ng-template', null, 0, x)(
              8,
              Ai,
              3,
              0,
              'ng-template',
              null,
              1,
              x,
            ),
            o(),
            a(10, 'nz-card'),
            p(11, xi, 4, 1, 'div', 18),
            a(12, 'div', 19)(13, 'div', 15)(14, 'nz-space', 16),
            p(15, Ei, 2, 4, 'ng-container', 17)(
              16,
              Li,
              2,
              1,
              'ng-container',
              17,
            ),
            o()()(),
            p(17, vi, 3, 0, 'ng-template', null, 2, x)(19, Di, 5, 1, 'div', 14),
            a(20, 'div', 18)(21, 'div', 20)(22, 'form', 21)(23, 'nz-form-item')(
              24,
              'nz-form-label',
              22,
            ),
            d(25, 'Tag Name'),
            o(),
            a(26, 'nz-form-control', 23),
            f(27, 'textarea', 24),
            o(),
            p(28, Fi, 3, 3, 'ng-template', null, 3, x),
            o(),
            a(30, 'nz-form-item')(31, 'nz-form-control', 25)(
              32,
              'nz-space',
              16,
            ),
            p(33, Pi, 3, 4, 'ng-container', 17)(
              34,
              Qi,
              3,
              2,
              'ng-container',
              17,
            ),
            o()(),
            p(35, ji, 3, 0, 'ng-template', null, 4, x)(
              37,
              Ki,
              3,
              0,
              'ng-template',
              null,
              5,
              x,
            ),
            o()(),
            f(39, 'app-form-errors', 26),
            o()()(),
            a(40, 'div', 27)(41, 'div', 15)(42, 'nz-space', 28),
            p(43, Yi, 2, 4, 'ng-container', 17)(44, Gi, 1, 0, 'ng-container'),
            o()()(),
            a(45, 'nz-transfer', 29),
            z('nzSearchChange', function (E) {
              return g(l), _(n.handleSearchChange(E));
            })('nzChange', function (E) {
              return g(l), _(n.handleChange(E));
            }),
            p(46, tr, 22, 7, 'ng-template', null, 6, x)(
              48,
              lr,
              22,
              7,
              'ng-template',
              null,
              7,
              x,
            ),
            o();
        }
        if (i & 2) {
          let l = C(29),
            T = C(47),
            E = C(49);
          c(3),
            S(n.disableApply() ? 3 : -1),
            c(8),
            S(n.currentTagId > 0 ? 11 : -1),
            c(8),
            S(n.showEditTag ? 19 : -1),
            c(3),
            m('formGroup', n.tagForm),
            c(2),
            m('nzSpan', 24),
            c(2),
            m('nzSpan', 24)('nzErrorTip', l),
            c(),
            m('nzAutosize', I(17, mi)),
            c(4),
            m('nzSpan', 24),
            c(8),
            m('errorResponse', n.errorResponse),
            c(5),
            S(n.leftSearch || n.rightSearch ? 44 : -1),
            c(),
            m('nzDataSource', n.list)('nzShowSearch', n.showSearch)(
              'nzShowSelectAll',
              !1,
            )('nzFilterOption', n.handleFilterOption)(
              'nzRenderList',
              ce(18, pi, T, E),
            )('nzSortOrder', n.sortOrder);
        }
      },
      dependencies: [
        Re,
        Me,
        be,
        pe,
        Ie,
        ke,
        De,
        lt,
        _e,
        ge,
        X,
        H,
        G,
        q,
        Se,
        Ee,
        at,
        J,
        B,
        it,
        nt,
        ot,
        rt,
        oe,
        ue,
        we,
        Le,
        Fe,
        Qe,
        Pe,
        j,
        U,
        W,
        he,
        Ve,
        Oe,
        ie,
        ne,
        te,
        ee,
        $,
        Z,
        $e,
        qe,
        Ue,
        Ye,
        Ke,
        Ze,
        Ge,
        Xe,
        He,
        tt,
        et,
        ve,
        ye,
        Ce,
        ze,
        We,
        Je,
        je,
        Y,
        K,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return t;
})();
var sr = (t, r) => [t, r],
  At = () => ({ standalone: !0 });
function cr(t, r) {
  if ((t & 1 && (h(0), a(1, 'h5', 17), f(2, 'span', 18), o(), u()), t & 2)) {
    let e = s(2);
    c(2), m('nzTooltipTitle', e.applyTooltipTitle);
  }
}
function mr(t, r) {
  t & 1 && p(0, cr, 3, 1, 'ng-container', 12);
}
function pr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 19),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.confirmApply());
      }),
      f(2, 'span', 20),
      d(3, ' Apply '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(),
      i = C(9);
    c(), m('disabled', e.disableApply())('nzIcon', i);
  }
}
function dr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 21),
      z('nzOnConfirm', function () {
        g(e);
        let n = s();
        return _(n.confirmClose());
      }),
      f(2, 'span', 22),
      d(3, ' Close '),
      o(),
      u();
  }
  if (t & 2) {
    s();
    let e = C(7);
    c(), m('nzIcon', e)('nzOkDanger', !0);
  }
}
function gr(t, r) {
  t & 1 && (h(0), a(1, 'h4', 17), f(2, 'span', 23), o(), u());
}
function _r(t, r) {
  t & 1 &&
    (h(0),
    a(1, 'h5', 24),
    d(2, 'Do you what to close without changes?'),
    o(),
    u());
}
function hr(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 11),
    p(1, gr, 3, 0, 'ng-container', 12)(2, _r, 3, 0, 'ng-container', 12),
    o());
}
function ur(t, r) {
  t & 1 && (h(0), a(1, 'h4', 25), f(2, 'span', 23), o(), u());
}
function fr(t, r) {
  t & 1 &&
    (h(0), a(1, 'h5', 24), d(2, 'Do you what to apply changes?'), o(), u());
}
function zr(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 11),
    p(1, ur, 3, 0, 'ng-container', 12)(2, fr, 3, 0, 'ng-container', 12),
    o());
}
function Cr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-switch', 26),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.isAscending, n) || (l.isAscending = n), _(n);
      }),
      z('click', function () {
        g(e);
        let n = s();
        return _(n.ascendingEnable());
      }),
      o(),
      u();
  }
  if (t & 2) {
    let e = s();
    c(), y('ngModel', e.isAscending), m('ngModelOptions', I(2, At));
  }
}
function Tr(t, r) {
  if ((t & 1 && f(0, 'nz-option', 28), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.name)('nzValue', e.value);
  }
}
function Ar(t, r) {
  if ((t & 1 && d(0), t & 2)) {
    let e = r.$implicit;
    w(' ', e.nzLabel, ' ');
  }
}
function xr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-select', 27),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.selectedOption, n) || (l.selectedOption = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s();
        return _(l.handleSelectPublished(n));
      }),
      M(2, Tr, 1, 2, 'nz-option', 28, N),
      o(),
      p(4, Ar, 1, 1, 'ng-template', null, 4, x),
      u();
  }
  if (t & 2) {
    let e = C(5),
      i = s();
    c(),
      m('nzBackdrop', !0)('nzCustomTemplate', e),
      y('ngModel', i.selectedOption),
      m('ngModelOptions', I(4, At)),
      c(),
      k(i.publisedOptions);
  }
}
function Er(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'nz-switch', 29),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.showSearch, n) || (l.showSearch = n), _(n);
      }),
      z('click', function () {
        g(e);
        let n = s();
        return _(n.disableEnable());
      }),
      o(),
      u();
  }
  if (t & 2) {
    let e = s();
    c(),
      y('ngModel', e.showSearch),
      m('ngModelOptions', I(3, At))('disabled', e.leftSearch || e.rightSearch);
  }
}
function Sr(t, r) {
  t & 1 && (h(0), a(1, 'h5', 17), f(2, 'span', 30), o(), u());
}
function Lr(t, r) {
  t & 1 && p(0, Sr, 3, 0, 'ng-container', 12);
}
function wr(t, r) {
  t & 1 && (h(0), a(1, 'h4', 35), d(2, 'Remaining Tags'), o(), u());
}
function yr(t, r) {
  t & 1 && (h(0), a(1, 'h5', 35), f(2, 'span', 36), o(), u());
}
function vr(t, r) {
  if ((t & 1 && f(0, 'nz-option', 28), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.label)('nzValue', e.value);
  }
}
function br(t, r) {
  if ((t & 1 && (f(0, 'span', 37), d(1)), t & 2)) {
    let e = r.$implicit;
    m('nzType', 'sort-' + e.nzValue), c(), w(' ', e.nzLabel, ' ');
  }
}
function Ir(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'tr', 38),
      z('click', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      a(1, 'td', 39),
      z('nzCheckedChange', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      o(),
      a(2, 'td'),
      d(3),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = s().disabled;
    c(),
      m('nzChecked', e.checked)('nzDisabled', i || e.disabled),
      c(2),
      P(e.title);
  }
}
function Nr(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'div', 31)(1, 'div', 10)(2, 'nz-space', 11),
      p(3, wr, 3, 0, 'ng-container', 12)(4, yr, 3, 0, 'ng-container', 12),
      o()()(),
      a(5, 'div', 31)(6, 'div', 10)(7, 'nz-select', 32),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.orderModelLeft, n) || (l.orderModelLeft = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s();
        return _(l.handleOrderLeft(n));
      }),
      M(8, vr, 1, 2, 'nz-option', 28, N),
      o(),
      p(10, br, 2, 2, 'ng-template', null, 5, x),
      o()(),
      a(12, 'nz-table', 33, 6)(14, 'thead')(15, 'tr')(16, 'th', 34),
      z('nzCheckedChange', function (n) {
        let l = g(e).onItemSelectAll;
        return _(l(n));
      }),
      o(),
      a(17, 'th'),
      d(18, 'All'),
      o()()(),
      a(19, 'tbody'),
      M(20, Ir, 4, 3, 'tr', null, N),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = r.stat,
      n = r.disabled,
      l = C(11),
      T = C(13),
      E = s();
    c(7),
      m('nzBackdrop', !0)('nzCustomTemplate', l),
      y('ngModel', E.orderModelLeft),
      c(),
      k(E.listOfOption),
      c(4),
      m('nzData', E.convertItemsRight(e)),
      c(4),
      m('nzDisabled', n)('nzChecked', i.checkAll)(
        'nzIndeterminate',
        i.checkHalf,
      ),
      c(4),
      k(T.data);
  }
}
function Mr(t, r) {
  t & 1 && (h(0), a(1, 'h4', 25), d(2, 'Selected Tags'), o(), u());
}
function kr(t, r) {
  t & 1 && (h(0), a(1, 'h5', 25), f(2, 'span', 40), o(), u());
}
function Dr(t, r) {
  if ((t & 1 && f(0, 'nz-option', 28), t & 2)) {
    let e = r.$implicit;
    m('nzLabel', e.label)('nzValue', e.value);
  }
}
function Rr(t, r) {
  if ((t & 1 && (f(0, 'span', 37), d(1)), t & 2)) {
    let e = r.$implicit;
    m('nzType', 'sort-' + e.nzValue), c(), w(' ', e.nzLabel, ' ');
  }
}
function Vr(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'tr', 38),
      z('click', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      a(1, 'td', 39),
      z('nzCheckedChange', function () {
        let n = g(e).$implicit,
          l = s().onItemSelect;
        return _(l(n));
      }),
      o(),
      a(2, 'td'),
      d(3),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = s().disabled;
    c(),
      m('nzChecked', e.checked)('nzDisabled', i || e.disabled),
      c(2),
      P(e.title);
  }
}
function Or(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'div', 31)(1, 'div', 10)(2, 'nz-space', 11),
      p(3, Mr, 3, 0, 'ng-container', 12)(4, kr, 3, 0, 'ng-container', 12),
      o()()(),
      a(5, 'div', 31)(6, 'div', 10)(7, 'nz-select', 32),
      b('ngModelChange', function (n) {
        g(e);
        let l = s();
        return v(l.orderModelRight, n) || (l.orderModelRight = n), _(n);
      }),
      z('ngModelChange', function (n) {
        g(e);
        let l = s();
        return _(l.handleOrderRight(n));
      }),
      M(8, Dr, 1, 2, 'nz-option', 28, N),
      o(),
      p(10, Rr, 2, 2, 'ng-template', null, 7, x),
      o()(),
      a(12, 'nz-table', 33, 8)(14, 'thead')(15, 'tr')(16, 'th', 34),
      z('nzCheckedChange', function (n) {
        let l = g(e).onItemSelectAll;
        return _(l(n));
      }),
      o(),
      a(17, 'th'),
      d(18, 'All'),
      o()()(),
      a(19, 'tbody'),
      M(20, Vr, 4, 3, 'tr', null, N),
      o()();
  }
  if (t & 2) {
    let e = r.$implicit,
      i = r.stat,
      n = r.disabled,
      l = C(11),
      T = C(13),
      E = s();
    c(7),
      m('nzBackdrop', !0)('nzCustomTemplate', l),
      y('ngModel', E.orderModelRight),
      c(),
      k(E.listOfOption),
      c(4),
      m('nzData', E.convertItemsLeft(e)),
      c(4),
      m('nzDisabled', n)('nzChecked', i.checkAll)(
        'nzIndeterminate',
        i.checkHalf,
      ),
      c(4),
      k(T.data);
  }
}
var ln = (() => {
  class t {
    params;
    nzMessageService = L(ae);
    drawerRef = L(fe);
    selectedCount = 0;
    list = [];
    showSearch = !1;
    leftSearch = !1;
    rightSearch = !1;
    selectedTags = [];
    applyTooltipTitle = '';
    orderModelLeft = null;
    orderModelRight = null;
    listOfOption = [
      { label: 'Ascending', value: 'ascending' },
      { label: 'Descending', value: 'descending' },
    ];
    sortOrder = null;
    isAscending = !1;
    createdAtAsc = null;
    initialCreatedAtAsc = null;
    publisedOptions = [
      { name: 'All - Published/Unpublished', value: null },
      { name: 'Published', value: !0 },
      { name: 'Unpublished', value: !1 },
    ];
    selectedOption = null;
    initialSelectedOption = null;
    isTagListChange() {
      let e = this.selectedTags;
      if (
        ((this.selectedTags = []),
        this.list
          .filter(n => n.direction === 'right')
          .forEach(n => this.selectedTags.push(n.id)),
        this.createdAtAsc !== this.initialCreatedAtAsc ||
          this.selectedOption !== this.initialSelectedOption ||
          e?.length !== this.selectedTags.length)
      )
        return !0;
      let i = !0;
      return e.forEach(n => (i = i && this.selectedTags.includes(n))), !i;
    }
    ngOnInit() {
      this.params.createdAtAsc === void 0
        ? ((this.isAscending = !1), (this.createdAtAsc = null))
        : ((this.isAscending = this.params.createdAtAsc),
          (this.createdAtAsc = this.isAscending)),
        (this.initialCreatedAtAsc = this.createdAtAsc),
        this.params.published === void 0
          ? (this.selectedOption = null)
          : (this.selectedOption = this.params.published),
        (this.initialSelectedOption = this.selectedOption),
        this.params.tags
          ? (this.selectedTags = this.params.tags)
          : ((this.selectedTags = []),
            this.params.tagList.forEach(e => this.selectedTags.push(e.id))),
        (this.list = []),
        this.params.tagList.forEach(e =>
          this.list.push({
            title: e.title,
            id: e.id,
            direction: this.selectedTags.includes(e.id) ? 'right' : 'left',
          }),
        ),
        (this.selectedCount = this.selectedTags.length);
    }
    ascendingEnable() {
      this.isAscending ? (this.createdAtAsc = null) : (this.createdAtAsc = !0);
    }
    handleSelectPublished(e) {
      this.selectedOption = e;
    }
    disableEnable() {
      this.showSearch ||
        (this.showSearch = this.leftSearch || this.rightSearch);
    }
    handleSearchChange(e) {
      e.direction === 'left'
        ? (this.leftSearch = e.value !== '')
        : (this.rightSearch = e.value !== '');
    }
    handleChange(e) {
      e.from === 'right'
        ? ((this.orderModelLeft = null),
          (this.sortOrder = { direction: 'left', sortOrder: null }),
          (this.selectedCount -= e.list.length))
        : ((this.orderModelRight = null),
          (this.sortOrder = { direction: 'right', sortOrder: null }),
          (this.selectedCount += e.list.length));
    }
    handleFilterOption(e, i) {
      return i.title.toLowerCase().includes(e.toLowerCase());
    }
    confirmClose() {
      this.isTagListChange() &&
        this.nzMessageService.warning('Changes were not saved!'),
        this.drawerRef.close(!1);
    }
    disableApply() {
      return this.selectedCount < 1
        ? ((this.applyTooltipTitle = 'It should be at least one selected tag.'),
          !0)
        : this.selectedCount > 100
          ? ((this.applyTooltipTitle =
              'It should not be more than 100 selected tags.'),
            !0)
          : !1;
    }
    confirmApply() {
      this.isTagListChange()
        ? (this.nzMessageService.info('Applying selected tags.'),
          this.selectedTags.length === this.list.length &&
            (this.selectedTags = null),
          this.drawerRef.close({
            tags: this.selectedTags,
            published: this.selectedOption,
            createdAtAsc: this.createdAtAsc,
          }))
        : this.drawerRef.close(null);
    }
    convertItemsRight(e) {
      return e.filter(i => !i.hide);
    }
    convertItemsLeft(e) {
      return e.filter(i => !i.hide);
    }
    handleOrderRight(e) {
      this.sortOrder = { direction: 'right', sortOrder: e };
    }
    handleOrderLeft(e) {
      this.sortOrder = { direction: 'left', sortOrder: e };
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [['app-article-listing-tags']],
      inputs: { params: 'params' },
      standalone: !0,
      features: [Q],
      decls: 25,
      vars: 11,
      consts: [
        ['closeTpl', ''],
        ['applyTpl', ''],
        ['renderList', ''],
        ['renderSelectedList', ''],
        ['publishedTemplate', ''],
        ['orderTemplateLeft', ''],
        ['t1', ''],
        ['orderTemplateRight', ''],
        ['t2', ''],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-col', ''],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-row', '', 'nzJustify', 'start', 2, 'margin-top', '20px'],
        ['nz-row', '', 'nzJustify', 'start', 2, 'margin-bottom', '20px'],
        ['nzSize', 'small', 'nzAlign', 'center'],
        [
          3,
          'nzSearchChange',
          'nzChange',
          'nzDataSource',
          'nzShowSearch',
          'nzShowSelectAll',
          'nzFilterOption',
          'nzRenderList',
          'nzSortOrder',
        ],
        ['nz-typography', '', 'nzType', 'danger'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          3,
          'nzTooltipTitle',
        ],
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
          'disabled',
          'nzIcon',
        ],
        ['nz-icon', '', 'nzType', 'check'],
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
        ['nz-icon', '', 'nzType', 'close'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        ['nz-typography', '', 'nzType', 'success'],
        [
          'nzCheckedChildren',
          'Oldest first',
          'nzUnCheckedChildren',
          'Newest first',
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
        ],
        [
          'nzAllowClear',
          '',
          'nzPlaceHolder',
          'All - Published/Unpublished',
          3,
          'ngModelChange',
          'nzBackdrop',
          'nzCustomTemplate',
          'ngModel',
          'ngModelOptions',
        ],
        [3, 'nzLabel', 'nzValue'],
        [
          'nzCheckedChildren',
          'Hide Search',
          'nzUnCheckedChildren',
          'Show Search',
          3,
          'ngModelChange',
          'click',
          'ngModel',
          'ngModelOptions',
          'disabled',
        ],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Clear out all search boxes in order to hide them.',
        ],
        ['nz-row', '', 'nzJustify', 'center'],
        [
          'nzAllowClear',
          '',
          'nzPlaceHolder',
          'Sort Order...',
          3,
          'ngModelChange',
          'nzBackdrop',
          'nzCustomTemplate',
          'ngModel',
        ],
        ['nzSize', 'small', 3, 'nzData'],
        [
          'nzShowCheckbox',
          '',
          3,
          'nzCheckedChange',
          'nzDisabled',
          'nzChecked',
          'nzIndeterminate',
        ],
        ['nz-typography', '', 'nzType', 'warning'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Here are all remaining tags.',
        ],
        ['nz-icon', '', 3, 'nzType'],
        [3, 'click'],
        ['nzShowCheckbox', '', 3, 'nzCheckedChange', 'nzChecked', 'nzDisabled'],
        [
          'nz-icon',
          '',
          'nzType',
          'info-circle',
          'nz-tooltip',
          '',
          'nzTooltipTitle',
          'Here are all selected tags.',
        ],
      ],
      template: function (i, n) {
        if (i & 1) {
          let l = A();
          a(0, 'div', 9)(1, 'div', 10)(2, 'nz-space', 11),
            p(3, mr, 1, 0, 'ng-container')(4, pr, 4, 2, 'ng-container', 12)(
              5,
              dr,
              4,
              2,
              'ng-container',
              12,
            ),
            o()(),
            p(6, hr, 3, 0, 'ng-template', null, 0, x)(
              8,
              zr,
              3,
              0,
              'ng-template',
              null,
              1,
              x,
            ),
            o(),
            a(10, 'div', 13)(11, 'div', 10)(12, 'nz-space', 11),
            p(13, Cr, 2, 3, 'ng-container', 12)(
              14,
              xr,
              6,
              5,
              'ng-container',
              12,
            ),
            o()()(),
            a(15, 'div', 14)(16, 'div', 10)(17, 'nz-space', 15),
            p(18, Er, 2, 4, 'ng-container', 12)(19, Lr, 1, 0, 'ng-container'),
            o()()(),
            a(20, 'nz-transfer', 16),
            z('nzSearchChange', function (E) {
              return g(l), _(n.handleSearchChange(E));
            })('nzChange', function (E) {
              return g(l), _(n.handleChange(E));
            }),
            p(21, Nr, 22, 7, 'ng-template', null, 2, x)(
              23,
              Or,
              22,
              7,
              'ng-template',
              null,
              3,
              x,
            ),
            o();
        }
        if (i & 2) {
          let l = C(22),
            T = C(24);
          c(3),
            S(n.disableApply() ? 3 : -1),
            c(16),
            S(n.leftSearch || n.rightSearch ? 19 : -1),
            c(),
            m('nzDataSource', n.list)('nzShowSearch', n.showSearch)(
              'nzShowSelectAll',
              !1,
            )('nzFilterOption', n.handleFilterOption)(
              'nzRenderList',
              ce(8, sr, l, T),
            )('nzSortOrder', n.sortOrder);
        }
      },
      dependencies: [
        _e,
        pe,
        ge,
        X,
        H,
        G,
        q,
        oe,
        j,
        J,
        B,
        U,
        W,
        ie,
        ne,
        te,
        ee,
        $,
        Z,
        $e,
        qe,
        Ue,
        Ye,
        Ke,
        Ze,
        Ge,
        Xe,
        He,
        tt,
        et,
        ve,
        ye,
        Ce,
        ze,
        We,
        Je,
        je,
        Y,
        K,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return t;
})();
var Fr = ['drawerTitleTemplate'];
function Pr(t, r) {
  t & 1 &&
    (a(0, 'div', 2)(1, 'div', 3)(2, 'h3', 4), d(3, 'Not Authorized'), o()()());
}
function Qr(t, r) {
  t & 1 && (h(0), a(1, 'h3', 10), d(2, 'Article Admin Page'), o(), u());
}
function Br(t, r) {
  t & 1 && (h(0), a(1, 'h4', 13), f(2, 'span', 14), o(), u());
}
function Jr(t, r) {
  t & 1 && (h(0), a(1, 'h5', 15), d(2, 'Do you what to reload all?'), o(), u());
}
function jr(t, r) {
  t & 1 &&
    (a(0, 'nz-space', 5),
    p(1, Br, 3, 0, 'ng-container', 6)(2, Jr, 3, 0, 'ng-container', 6),
    o());
}
function Wr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 11),
      z('nzOnConfirm', function () {
        g(e);
        let n = s(2);
        return _(n.selectAll());
      }),
      f(2, 'span', 12),
      o(),
      p(3, jr, 3, 0, 'ng-template', null, 1, x),
      u();
  }
  if (t & 2) {
    let e = C(4),
      i = s(2);
    c(), m('nzLoading', i.isArticlesLoading())('nzIcon', e);
  }
}
function Ur(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 16),
      z('click', function () {
        g(e);
        let n = s(2);
        return _(n.openTagsFilter());
      }),
      f(2, 'span', 17),
      d(3, ' Tags '),
      o(),
      a(4, 'nz-badge', 18),
      f(5, 'a', 19),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(2);
    c(), m('nzLoading', e.isTagsLoading()), c(3), m('nzCount', e.tagCount());
  }
}
function Kr(t, r) {
  if (t & 1) {
    let e = A();
    h(0),
      a(1, 'button', 16),
      z('click', function () {
        g(e);
        let n = s(2);
        return _(n.newArticle());
      }),
      f(2, 'span', 20),
      d(3, ' New Article '),
      o(),
      u();
  }
  if (t & 2) {
    let e = s(2);
    c(), m('nzLoading', e.isNewArticle());
  }
}
function Yr(t, r) {
  if (
    (t & 1 && (a(0, 'div', 2)(1, 'div', 3)(2, 'h3', 10), d(3), o()()()), t & 2)
  ) {
    let e = s(2);
    c(3), P(e.title);
  }
}
function Hr(t, r) {
  if (t & 1) {
    let e = A();
    a(0, 'div', 2)(1, 'div', 3)(2, 'nz-space', 5),
      p(3, Qr, 3, 0, 'ng-container', 6),
      o(),
      a(4, 'nz-space', 5),
      p(5, Wr, 5, 2, 'ng-container', 6),
      o()()(),
      a(6, 'div', 7)(7, 'div', 3)(8, 'nz-space', 5),
      p(9, Ur, 6, 2, 'ng-container', 6),
      o()()(),
      a(10, 'div', 8)(11, 'div', 3)(12, 'nz-space', 5),
      p(13, Kr, 4, 1, 'ng-container', 6),
      o()()(),
      a(14, 'app-articles', 9),
      z('nzSetPage', function (n) {
        g(e);
        let l = s();
        return _(l.onPageOffsetChange(n));
      })('nzSetPageSize', function (n) {
        g(e);
        let l = s();
        return _(l.onPageLimitChange(n));
      })('nzEditTags', function (n) {
        g(e);
        let l = s();
        return _(l.linkTags(n));
      })('nzDeleteArticle', function (n) {
        g(e);
        let l = s();
        return _(l.handleDeleteArticle(n));
      })('nzEditArticle', function (n) {
        g(e);
        let l = s();
        return _(l.handleEditArticle(n));
      }),
      o(),
      p(15, Yr, 4, 1, 'ng-template', null, 0, x);
  }
  if (t & 2) {
    let e = s();
    c(14),
      m('isRouterLinkLoading', e.isRouterLinkLoading)(
        'routerLinkLoadingId',
        e.routerLinkLoadingId,
      )('articleList', e.articleList)('articlesCount', e.articleCount)(
        'isLoading',
        e.isArticlesLoading,
      )('articleListConfig', e.articleListConfig)('oldLimit', e.oldLimit);
  }
}
var ul = (() => {
  class t {
    drawerTitleTemplate;
    nzMessageService = L(ae);
    destroyRef = L(St);
    drawerService = L(Bt);
    #e = L(Ct);
    #t = L(Be);
    articleListConfig = this.#t.selectors.articleListConfig;
    isAuthenticated = this.#t.selectors.isAuthenticated;
    articleCount = this.#e.selectors.articleCount;
    articleList = this.#e.selectors.articleList;
    tagList = this.#e.selectors.tags;
    isNewArticle = V(!1);
    isTagsLoading = V(!1);
    isArticlesLoading = V(!1);
    isRouterLinkLoading = V(!1);
    routerLinkLoadingId = V(0);
    tagCount = kt(() =>
      this.articleListConfig()?.filters.tags
        ? this.articleListConfig()?.filters.tags.length
        : 0,
    );
    oldLimit = V(this.articleListConfig().filters.limit);
    title = '';
    noCancel() {
      return new Promise(i => {
        try {
          i(!1);
        } finally {
        }
      });
    }
    ngOnInit() {
      if ((this.#t.setAdminArticles(!0), this.isAuthenticated())) {
        let e = this.articleListConfig()?.filters;
        (e?.tags === void 0 || e?.tags === null) &&
        (e?.published === void 0 || e?.published === null) &&
        (e?.createdAtAsc === void 0 || e?.createdAtAsc === null)
          ? this.selectAll()
          : (this.#e.getTags(this.isTagsLoading),
            this.#e.queryArticle({
              loading: this.isArticlesLoading,
              params: {
                limit: e?.limit,
                offset: 0,
                tags: e?.tags,
                published: e?.published,
                createdAtAsc: e?.createdAtAsc,
              },
            }));
      }
    }
    selectAll() {
      this.#e.getTags(this.isTagsLoading),
        this.#e.queryArticle({
          loading: this.isArticlesLoading,
          params: { limit: 10, offset: 0 },
        }),
        this.oldLimit.set(10);
    }
    onPageOffsetChange(e) {
      this.#e.onOffsetChange({ loading: this.isArticlesLoading, offset: e });
    }
    onPageLimitChange(e) {
      this.#e.onLimitChange({ loading: this.isArticlesLoading, limit: e });
    }
    openTagsFilter() {
      if (this.isTagsLoading()) return;
      this.isTagsLoading.set(!0), (this.title = 'Article Tags');
      let e = this.articleListConfig()?.filters;
      this.drawerService
        .create({
          nzTitle: this.drawerTitleTemplate,
          nzContent: ln,
          nzWidth: 600,
          nzClosable: !1,
          nzOnCancel: this.noCancel,
          nzContentParams: {
            params: {
              tagList: this.tagList(),
              tags: e?.tags,
              published: e?.published,
              createdAtAsc: e?.createdAtAsc,
            },
          },
        })
        .afterClose.subscribe(n => {
          if (n) {
            let l = this.articleListConfig()?.filters;
            this.#e.queryArticle({
              loading: this.isArticlesLoading,
              params: R(D({}, n), { limit: l?.limit, offset: 0 }),
            });
          }
          this.isTagsLoading.set(!1);
        });
    }
    linkTags(e) {
      if (this.isTagsLoading()) return;
      this.isTagsLoading.set(!0),
        (this.title = 'Create/Edit Tags'),
        this.#e.resetErrorResponse();
      let i = this.drawerService.create({
        nzTitle: this.drawerTitleTemplate,
        nzContent: an,
        nzWidth: 600,
        nzClosable: !1,
        nzOnCancel: this.noCancel,
        nzContentParams: {
          article: e,
          tagList: this.#e.selectors.tags,
          currentArticle: this.#e.selectors.currentArticle,
          errorResponse: this.#e.selectors.errorResponse,
        },
      });
      i.afterExecute.pipe(zt(this.destroyRef)).subscribe(n => {
        n &&
          (this.#e.resetErrorResponse(),
          n.form
            ? n.tagId
              ? this.#e.editTag({
                  loading: n.loading,
                  tagId: n.tagId,
                  form: n.form,
                })
              : this.#e.createTag({ loading: n.loading, form: n.form })
            : n.tagId
              ? this.#e.deleteTag({ loading: n.loading, tagId: n.tagId })
              : n.articleId &&
                this.#e.getArticleDetails({
                  loading: n.loading,
                  articleId: n.articleId,
                }));
      }),
        i.afterClose.subscribe(n => {
          !n && n !== null
            ? (this.isRouterLinkLoading.set(!1),
              this.routerLinkLoadingId.set(0))
            : (this.#e.linkTags({
                loading: this.isRouterLinkLoading,
                articleTags: { tags: n, articleId: e.id },
              }),
              this.routerLinkLoadingId.set(0)),
            this.isTagsLoading.set(!1);
        });
    }
    editArticle(e) {
      if (this.isNewArticle()) return;
      this.isNewArticle.set(!0),
        (this.title = e ? 'Edit Article' : 'New Article'),
        this.#e.resetErrorResponse();
      let i = this.drawerService.create({
        nzTitle: this.drawerTitleTemplate,
        nzContent: rn,
        nzWidth: 600,
        nzClosable: !1,
        nzOnCancel: this.noCancel,
        nzContentParams: {
          article: e,
          currentArticle: this.#e.selectors.currentArticle,
          errorResponse: this.#e.selectors.errorResponse,
        },
      });
      i.afterExecute.pipe(zt(this.destroyRef)).subscribe(n => {
        n &&
          n.form &&
          (n.articleId
            ? this.#e.editArticle({
                loading: n.loading,
                form: n.form,
                articleId: n.articleId,
                published: n.published,
              })
            : this.#e.createArticle({
                loading: n.loading,
                form: n.form,
                published: n.published,
              }));
      }),
        i.afterClose.subscribe(() => {
          this.isRouterLinkLoading.set(!1),
            this.routerLinkLoadingId.set(0),
            this.isNewArticle.set(!1);
        });
    }
    newArticle() {
      this.editArticle(null);
    }
    handleEditArticle(e) {
      this.editArticle(e);
    }
    handleDeleteArticle(e) {
      this.nzMessageService.info('Deleting article...'),
        this.#e.deleteArticle({
          loading: this.isRouterLinkLoading,
          articleId: e.id,
        }),
        this.routerLinkLoadingId.set(0);
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵcmp = F({
      type: t,
      selectors: [['app-article-listing']],
      viewQuery: function (i, n) {
        if ((i & 1 && wt(Fr, 5), i & 2)) {
          let l;
          yt((l = vt())) && (n.drawerTitleTemplate = l.first);
        }
      },
      standalone: !0,
      features: [It([Ft(Ct)]), Q],
      decls: 2,
      vars: 1,
      consts: [
        ['drawerTitleTemplate', ''],
        ['applyTpl', ''],
        ['nz-row', '', 'nzJustify', 'center'],
        ['nz-col', ''],
        ['nz-typography', '', 'nzType', 'danger'],
        ['nzSize', 'small', 'nzAlign', 'baseline'],
        [4, 'nzSpaceItem'],
        ['nz-row', '', 'nzJustify', 'end'],
        ['nz-row', '', 'nzJustify', 'start'],
        [
          3,
          'nzSetPage',
          'nzSetPageSize',
          'nzEditTags',
          'nzDeleteArticle',
          'nzEditArticle',
          'isRouterLinkLoading',
          'routerLinkLoadingId',
          'articleList',
          'articlesCount',
          'isLoading',
          'articleListConfig',
          'oldLimit',
        ],
        ['nz-typography', '', 'nzType', 'warning'],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'circle',
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
        ],
        ['nz-icon', '', 'nzType', 'sync'],
        ['nz-typography', '', 'nzType', 'success'],
        ['nz-icon', '', 'nzType', 'question-circle-o'],
        ['nz-typography', ''],
        [
          'nz-button',
          '',
          'nzType',
          'primary',
          'nzShape',
          'round',
          3,
          'click',
          'nzLoading',
        ],
        ['nz-icon', '', 'nzType', 'tag'],
        [3, 'nzCount'],
        [1, 'head-example'],
        ['nz-icon', '', 'nzType', 'form'],
      ],
      template: function (i, n) {
        i & 1 && p(0, Pr, 4, 0, 'div', 2)(1, Hr, 17, 7),
          i & 2 && S(n.isAuthenticated() ? 1 : 0);
      },
      dependencies: [
        on,
        Wt,
        jt,
        X,
        H,
        G,
        q,
        oe,
        U,
        W,
        ie,
        ne,
        te,
        ee,
        $,
        Z,
        Y,
        K,
        j,
        J,
        B,
        Ot,
        he,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return t;
})();
export { ul as default };
