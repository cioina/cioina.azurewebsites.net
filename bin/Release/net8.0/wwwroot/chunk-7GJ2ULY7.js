import { $ as o } from './chunk-55QWLPSH.js';
var p = (() => {
  let e = class e {
    transform(t, n, f = '') {
      if (typeof t != 'string') return t;
      let i = typeof n > 'u' ? t.length : n;
      return t.length <= i ? t : t.substring(0, i) + f;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵpipe = o({ name: 'nzEllipsis', type: e, pure: !0, standalone: !0 }));
  let r = e;
  return r;
})();
export { p as a };
