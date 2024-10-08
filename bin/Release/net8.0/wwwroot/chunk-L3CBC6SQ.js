import {
  Aa as K,
  Ca as Y,
  Cc as kt,
  D as ut,
  Dc as v,
  Ea as yt,
  He as Nt,
  Ia as Et,
  Ib as Rt,
  Ie as Mt,
  Jb as xt,
  Kb as J,
  Lb as Tt,
  M as ft,
  N as mt,
  Nb as Ct,
  O as C,
  Ob as L,
  P as vt,
  T as W,
  V as E,
  W as b,
  X as O,
  Y as Dt,
  _ as $,
  ca as wt,
  e as S,
  ea as bt,
  f as U,
  g as p,
  h as dt,
  j as pt,
  la as Pt,
  na as P,
  nc as Ot,
  oa as k,
  p as _t,
  qa as q,
  rc as I,
  sc as N,
  tb as X,
  tc as R,
  td as Lt,
  ub as It,
  w as gt,
  wa as u,
  x as Z,
  za as St,
} from './chunk-55QWLPSH.js';
function Xt(o) {
  let t = o.cloneNode(!0),
    s = t.querySelectorAll('[id]'),
    e = o.nodeName.toLowerCase();
  t.removeAttribute('id');
  for (let i = 0; i < s.length; i++) s[i].removeAttribute('id');
  return (
    e === 'canvas'
      ? Ht(o, t)
      : (e === 'input' || e === 'select' || e === 'textarea') && At(o, t),
    Ft('canvas', o, t, Ht),
    Ft('input, textarea, select', o, t, At),
    t
  );
}
function Ft(o, t, s, e) {
  let i = t.querySelectorAll(o);
  if (i.length) {
    let n = s.querySelectorAll(o);
    for (let r = 0; r < i.length; r++) e(i[r], n[r]);
  }
}
var re = 0;
function At(o, t) {
  t.type !== 'file' && (t.value = o.value),
    t.type === 'radio' && t.name && (t.name = `mat-clone-${t.name}-${re++}`);
}
function Ht(o, t) {
  let s = t.getContext('2d');
  if (s)
    try {
      s.drawImage(o, 0, 0);
    } catch {}
}
function ot(o) {
  let t = o.getBoundingClientRect();
  return {
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    width: t.width,
    height: t.height,
    x: t.x,
    y: t.y,
  };
}
function tt(o, t, s) {
  let { top: e, bottom: i, left: n, right: r } = o;
  return s >= e && s <= i && t >= n && t <= r;
}
function T(o, t, s) {
  (o.top += t),
    (o.bottom = o.top + o.height),
    (o.left += s),
    (o.right = o.left + o.width);
}
function zt(o, t, s, e) {
  let { top: i, right: n, bottom: r, left: a, width: h, height: l } = o,
    c = h * t,
    d = l * t;
  return e > i - d && e < r + d && s > a - c && s < n + c;
}
var H = class {
  constructor(t) {
    (this._document = t), (this.positions = new Map());
  }
  clear() {
    this.positions.clear();
  }
  cache(t) {
    this.clear(),
      this.positions.set(this._document, {
        scrollPosition: this.getViewportScrollPosition(),
      }),
      t.forEach(s => {
        this.positions.set(s, {
          scrollPosition: { top: s.scrollTop, left: s.scrollLeft },
          clientRect: ot(s),
        });
      });
  }
  handleScroll(t) {
    let s = R(t),
      e = this.positions.get(s);
    if (!e) return null;
    let i = e.scrollPosition,
      n,
      r;
    if (s === this._document) {
      let l = this.getViewportScrollPosition();
      (n = l.top), (r = l.left);
    } else (n = s.scrollTop), (r = s.scrollLeft);
    let a = i.top - n,
      h = i.left - r;
    return (
      this.positions.forEach((l, c) => {
        l.clientRect && s !== c && s.contains(c) && T(l.clientRect, a, h);
      }),
      (i.top = n),
      (i.left = r),
      { top: a, left: h }
    );
  }
  getViewportScrollPosition() {
    return { top: window.scrollY, left: window.scrollX };
  }
};
function Jt(o, t) {
  let s = o.rootNodes;
  if (s.length === 1 && s[0].nodeType === t.ELEMENT_NODE) return s[0];
  let e = t.createElement('div');
  return s.forEach(i => e.appendChild(i)), e;
}
function at(o, t, s) {
  for (let e in t)
    if (t.hasOwnProperty(e)) {
      let i = t[e];
      i
        ? o.setProperty(e, i, s?.has(e) ? 'important' : '')
        : o.removeProperty(e);
    }
  return o;
}
function y(o, t) {
  let s = t ? '' : 'none';
  at(o.style, {
    'touch-action': t ? '' : 'none',
    '-webkit-user-drag': t ? '' : 'none',
    '-webkit-tap-highlight-color': t ? '' : 'transparent',
    'user-select': s,
    '-ms-user-select': s,
    '-webkit-user-select': s,
    '-moz-user-select': s,
  });
}
function jt(o, t, s) {
  at(
    o.style,
    {
      position: t ? '' : 'fixed',
      top: t ? '' : '0',
      opacity: t ? '' : '0',
      left: t ? '' : '-999em',
    },
    s,
  );
}
function z(o, t) {
  return t && t != 'none' ? o + ' ' + t : o;
}
function Vt(o, t) {
  (o.style.width = `${t.width}px`),
    (o.style.height = `${t.height}px`),
    (o.style.transform = j(t.left, t.top));
}
function j(o, t) {
  return `translate3d(${Math.round(o)}px, ${Math.round(t)}px, 0)`;
}
function Gt(o) {
  let t = o.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
  return parseFloat(o) * t;
}
function oe(o) {
  let t = getComputedStyle(o),
    s = Q(t, 'transition-property'),
    e = s.find(a => a === 'transform' || a === 'all');
  if (!e) return 0;
  let i = s.indexOf(e),
    n = Q(t, 'transition-duration'),
    r = Q(t, 'transition-delay');
  return Gt(n[i]) + Gt(r[i]);
}
function Q(o, t) {
  return o
    .getPropertyValue(t)
    .split(',')
    .map(e => e.trim());
}
var ae = new Set(['position']),
  et = class {
    get element() {
      return this._preview;
    }
    constructor(t, s, e, i, n, r, a, h, l) {
      (this._document = t),
        (this._rootElement = s),
        (this._direction = e),
        (this._initialDomRect = i),
        (this._previewTemplate = n),
        (this._previewClass = r),
        (this._pickupPositionOnPage = a),
        (this._initialTransform = h),
        (this._zIndex = l);
    }
    attach(t) {
      (this._preview = this._createPreview()),
        t.appendChild(this._preview),
        Bt(this._preview) && this._preview.showPopover();
    }
    destroy() {
      this._preview.remove(),
        this._previewEmbeddedView?.destroy(),
        (this._preview = this._previewEmbeddedView = null);
    }
    setTransform(t) {
      this._preview.style.transform = t;
    }
    getBoundingClientRect() {
      return this._preview.getBoundingClientRect();
    }
    addClass(t) {
      this._preview.classList.add(t);
    }
    getTransitionDuration() {
      return oe(this._preview);
    }
    addEventListener(t, s) {
      this._preview.addEventListener(t, s);
    }
    removeEventListener(t, s) {
      this._preview.removeEventListener(t, s);
    }
    _createPreview() {
      let t = this._previewTemplate,
        s = this._previewClass,
        e = t ? t.template : null,
        i;
      if (e && t) {
        let n = t.matchSize ? this._initialDomRect : null,
          r = t.viewContainer.createEmbeddedView(e, t.context);
        r.detectChanges(),
          (i = Jt(r, this._document)),
          (this._previewEmbeddedView = r),
          t.matchSize
            ? Vt(i, n)
            : (i.style.transform = j(
                this._pickupPositionOnPage.x,
                this._pickupPositionOnPage.y,
              ));
      } else
        (i = Xt(this._rootElement)),
          Vt(i, this._initialDomRect),
          this._initialTransform &&
            (i.style.transform = this._initialTransform);
      return (
        at(
          i.style,
          {
            'pointer-events': 'none',
            margin: Bt(i) ? '0 auto 0 0' : '0',
            position: 'fixed',
            top: '0',
            left: '0',
            'z-index': this._zIndex + '',
          },
          ae,
        ),
        y(i, !1),
        i.classList.add('cdk-drag-preview'),
        i.setAttribute('popover', 'manual'),
        i.setAttribute('dir', this._direction),
        s &&
          (Array.isArray(s)
            ? s.forEach(n => i.classList.add(n))
            : i.classList.add(s)),
        i
      );
    }
  };
function Bt(o) {
  return 'showPopover' in o;
}
var Ut = I({ passive: !0 }),
  M = I({ passive: !1 }),
  Zt = I({ passive: !1, capture: !0 }),
  he = 800,
  Wt = new Set(['position']),
  it = class {
    get disabled() {
      return (
        this._disabled ||
        !!(this._dropContainer && this._dropContainer.disabled)
      );
    }
    set disabled(t) {
      t !== this._disabled &&
        ((this._disabled = t),
        this._toggleNativeDragInteractions(),
        this._handles.forEach(s => y(s, t)));
    }
    constructor(t, s, e, i, n, r) {
      (this._config = s),
        (this._document = e),
        (this._ngZone = i),
        (this._viewportRuler = n),
        (this._dragDropRegistry = r),
        (this._passiveTransform = { x: 0, y: 0 }),
        (this._activeTransform = { x: 0, y: 0 }),
        (this._hasStartedDragging = K(!1)),
        (this._moveEvents = new p()),
        (this._pointerMoveSubscription = S.EMPTY),
        (this._pointerUpSubscription = S.EMPTY),
        (this._scrollSubscription = S.EMPTY),
        (this._resizeSubscription = S.EMPTY),
        (this._boundaryElement = null),
        (this._nativeInteractionsEnabled = !0),
        (this._handles = []),
        (this._disabledHandles = new Set()),
        (this._direction = 'ltr'),
        (this.dragStartDelay = 0),
        (this.scale = 1),
        (this._disabled = !1),
        (this.beforeStarted = new p()),
        (this.started = new p()),
        (this.released = new p()),
        (this.ended = new p()),
        (this.entered = new p()),
        (this.exited = new p()),
        (this.dropped = new p()),
        (this.moved = this._moveEvents),
        (this._pointerDown = a => {
          if ((this.beforeStarted.next(), this._handles.length)) {
            let h = this._getTargetHandle(a);
            h &&
              !this._disabledHandles.has(h) &&
              !this.disabled &&
              this._initializeDragSequence(h, a);
          } else
            this.disabled || this._initializeDragSequence(this._rootElement, a);
        }),
        (this._pointerMove = a => {
          let h = this._getPointerPositionOnPage(a);
          if (!this._hasStartedDragging()) {
            let c = Math.abs(h.x - this._pickupPositionOnPage.x),
              d = Math.abs(h.y - this._pickupPositionOnPage.y);
            if (c + d >= this._config.dragStartThreshold) {
              let D =
                  Date.now() >=
                  this._dragStartTime + this._getDragStartDelay(a),
                w = this._dropContainer;
              if (!D) {
                this._endDragSequence(a);
                return;
              }
              (!w || (!w.isDragging() && !w.isReceiving())) &&
                (a.cancelable && a.preventDefault(),
                this._hasStartedDragging.set(!0),
                this._ngZone.run(() => this._startDragSequence(a)));
            }
            return;
          }
          a.cancelable && a.preventDefault();
          let l = this._getConstrainedPointerPosition(h);
          if (
            ((this._hasMoved = !0),
            (this._lastKnownPointerPosition = h),
            this._updatePointerDirectionDelta(l),
            this._dropContainer)
          )
            this._updateActiveDropContainer(l, h);
          else {
            let c = this.constrainPosition
                ? this._initialDomRect
                : this._pickupPositionOnPage,
              d = this._activeTransform;
            (d.x = l.x - c.x + this._passiveTransform.x),
              (d.y = l.y - c.y + this._passiveTransform.y),
              this._applyRootElementTransform(d.x, d.y);
          }
          this._moveEvents.observers.length &&
            this._ngZone.run(() => {
              this._moveEvents.next({
                source: this,
                pointerPosition: l,
                event: a,
                distance: this._getDragDistance(l),
                delta: this._pointerDirectionDelta,
              });
            });
        }),
        (this._pointerUp = a => {
          this._endDragSequence(a);
        }),
        (this._nativeDragStart = a => {
          if (this._handles.length) {
            let h = this._getTargetHandle(a);
            h &&
              !this._disabledHandles.has(h) &&
              !this.disabled &&
              a.preventDefault();
          } else this.disabled || a.preventDefault();
        }),
        this.withRootElement(t).withParent(s.parentDragRef || null),
        (this._parentPositions = new H(e)),
        r.registerDragItem(this);
    }
    getPlaceholderElement() {
      return this._placeholder;
    }
    getRootElement() {
      return this._rootElement;
    }
    getVisibleElement() {
      return this.isDragging()
        ? this.getPlaceholderElement()
        : this.getRootElement();
    }
    withHandles(t) {
      (this._handles = t.map(e => v(e))),
        this._handles.forEach(e => y(e, this.disabled)),
        this._toggleNativeDragInteractions();
      let s = new Set();
      return (
        this._disabledHandles.forEach(e => {
          this._handles.indexOf(e) > -1 && s.add(e);
        }),
        (this._disabledHandles = s),
        this
      );
    }
    withPreviewTemplate(t) {
      return (this._previewTemplate = t), this;
    }
    withPlaceholderTemplate(t) {
      return (this._placeholderTemplate = t), this;
    }
    withRootElement(t) {
      let s = v(t);
      return (
        s !== this._rootElement &&
          (this._rootElement &&
            this._removeRootElementListeners(this._rootElement),
          this._ngZone.runOutsideAngular(() => {
            s.addEventListener('mousedown', this._pointerDown, M),
              s.addEventListener('touchstart', this._pointerDown, Ut),
              s.addEventListener('dragstart', this._nativeDragStart, M);
          }),
          (this._initialTransform = void 0),
          (this._rootElement = s)),
        typeof SVGElement < 'u' &&
          this._rootElement instanceof SVGElement &&
          (this._ownerSVGElement = this._rootElement.ownerSVGElement),
        this
      );
    }
    withBoundaryElement(t) {
      return (
        (this._boundaryElement = t ? v(t) : null),
        this._resizeSubscription.unsubscribe(),
        t &&
          (this._resizeSubscription = this._viewportRuler
            .change(10)
            .subscribe(() => this._containInsideBoundaryOnResize())),
        this
      );
    }
    withParent(t) {
      return (this._parentDragRef = t), this;
    }
    dispose() {
      this._removeRootElementListeners(this._rootElement),
        this.isDragging() && this._rootElement?.remove(),
        this._anchor?.remove(),
        this._destroyPreview(),
        this._destroyPlaceholder(),
        this._dragDropRegistry.removeDragItem(this),
        this._removeListeners(),
        this.beforeStarted.complete(),
        this.started.complete(),
        this.released.complete(),
        this.ended.complete(),
        this.entered.complete(),
        this.exited.complete(),
        this.dropped.complete(),
        this._moveEvents.complete(),
        (this._handles = []),
        this._disabledHandles.clear(),
        (this._dropContainer = void 0),
        this._resizeSubscription.unsubscribe(),
        this._parentPositions.clear(),
        (this._boundaryElement =
          this._rootElement =
          this._ownerSVGElement =
          this._placeholderTemplate =
          this._previewTemplate =
          this._anchor =
          this._parentDragRef =
            null);
    }
    isDragging() {
      return (
        this._hasStartedDragging() && this._dragDropRegistry.isDragging(this)
      );
    }
    reset() {
      (this._rootElement.style.transform = this._initialTransform || ''),
        (this._activeTransform = { x: 0, y: 0 }),
        (this._passiveTransform = { x: 0, y: 0 });
    }
    disableHandle(t) {
      !this._disabledHandles.has(t) &&
        this._handles.indexOf(t) > -1 &&
        (this._disabledHandles.add(t), y(t, !0));
    }
    enableHandle(t) {
      this._disabledHandles.has(t) &&
        (this._disabledHandles.delete(t), y(t, this.disabled));
    }
    withDirection(t) {
      return (this._direction = t), this;
    }
    _withDropContainer(t) {
      this._dropContainer = t;
    }
    getFreeDragPosition() {
      let t = this.isDragging()
        ? this._activeTransform
        : this._passiveTransform;
      return { x: t.x, y: t.y };
    }
    setFreeDragPosition(t) {
      return (
        (this._activeTransform = { x: 0, y: 0 }),
        (this._passiveTransform.x = t.x),
        (this._passiveTransform.y = t.y),
        this._dropContainer || this._applyRootElementTransform(t.x, t.y),
        this
      );
    }
    withPreviewContainer(t) {
      return (this._previewContainer = t), this;
    }
    _sortFromLastPointerPosition() {
      let t = this._lastKnownPointerPosition;
      t &&
        this._dropContainer &&
        this._updateActiveDropContainer(
          this._getConstrainedPointerPosition(t),
          t,
        );
    }
    _removeListeners() {
      this._pointerMoveSubscription.unsubscribe(),
        this._pointerUpSubscription.unsubscribe(),
        this._scrollSubscription.unsubscribe(),
        this._getShadowRoot()?.removeEventListener('selectstart', qt, Zt);
    }
    _destroyPreview() {
      this._preview?.destroy(), (this._preview = null);
    }
    _destroyPlaceholder() {
      this._placeholder?.remove(),
        this._placeholderRef?.destroy(),
        (this._placeholder = this._placeholderRef = null);
    }
    _endDragSequence(t) {
      if (
        this._dragDropRegistry.isDragging(this) &&
        (this._removeListeners(),
        this._dragDropRegistry.stopDragging(this),
        this._toggleNativeDragInteractions(),
        this._handles &&
          (this._rootElement.style.webkitTapHighlightColor =
            this._rootElementTapHighlight),
        !!this._hasStartedDragging())
      )
        if (
          (this.released.next({ source: this, event: t }), this._dropContainer)
        )
          this._dropContainer._stopScrolling(),
            this._animatePreviewToPlaceholder().then(() => {
              this._cleanupDragArtifacts(t),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this);
            });
        else {
          this._passiveTransform.x = this._activeTransform.x;
          let s = this._getPointerPositionOnPage(t);
          (this._passiveTransform.y = this._activeTransform.y),
            this._ngZone.run(() => {
              this.ended.next({
                source: this,
                distance: this._getDragDistance(s),
                dropPoint: s,
                event: t,
              });
            }),
            this._cleanupCachedDimensions(),
            this._dragDropRegistry.stopDragging(this);
        }
    }
    _startDragSequence(t) {
      x(t) && (this._lastTouchEventTime = Date.now()),
        this._toggleNativeDragInteractions();
      let s = this._getShadowRoot(),
        e = this._dropContainer;
      if (
        (s &&
          this._ngZone.runOutsideAngular(() => {
            s.addEventListener('selectstart', qt, Zt);
          }),
        e)
      ) {
        let i = this._rootElement,
          n = i.parentNode,
          r = (this._placeholder = this._createPlaceholderElement()),
          a = (this._anchor = this._anchor || this._document.createComment(''));
        n.insertBefore(a, i),
          (this._initialTransform = i.style.transform || ''),
          (this._preview = new et(
            this._document,
            this._rootElement,
            this._direction,
            this._initialDomRect,
            this._previewTemplate || null,
            this.previewClass || null,
            this._pickupPositionOnPage,
            this._initialTransform,
            this._config.zIndex || 1e3,
          )),
          this._preview.attach(this._getPreviewInsertionPoint(n, s)),
          jt(i, !1, Wt),
          this._document.body.appendChild(n.replaceChild(r, i)),
          this.started.next({ source: this, event: t }),
          e.start(),
          (this._initialContainer = e),
          (this._initialIndex = e.getItemIndex(this));
      } else
        this.started.next({ source: this, event: t }),
          (this._initialContainer = this._initialIndex = void 0);
      this._parentPositions.cache(e ? e.getScrollableParents() : []);
    }
    _initializeDragSequence(t, s) {
      this._parentDragRef && s.stopPropagation();
      let e = this.isDragging(),
        i = x(s),
        n = !i && s.button !== 0,
        r = this._rootElement,
        a = R(s),
        h =
          !i &&
          this._lastTouchEventTime &&
          this._lastTouchEventTime + he > Date.now(),
        l = i ? Mt(s) : Nt(s);
      if (
        (a && a.draggable && s.type === 'mousedown' && s.preventDefault(),
        e || n || h || l)
      )
        return;
      if (this._handles.length) {
        let f = r.style;
        (this._rootElementTapHighlight = f.webkitTapHighlightColor || ''),
          (f.webkitTapHighlightColor = 'transparent');
      }
      (this._hasMoved = !1),
        this._hasStartedDragging.set(this._hasMoved),
        this._removeListeners(),
        (this._initialDomRect = this._rootElement.getBoundingClientRect()),
        (this._pointerMoveSubscription =
          this._dragDropRegistry.pointerMove.subscribe(this._pointerMove)),
        (this._pointerUpSubscription =
          this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
        (this._scrollSubscription = this._dragDropRegistry
          .scrolled(this._getShadowRoot())
          .subscribe(f => this._updateOnScroll(f))),
        this._boundaryElement &&
          (this._boundaryRect = ot(this._boundaryElement));
      let c = this._previewTemplate;
      this._pickupPositionInElement =
        c && c.template && !c.matchSize
          ? { x: 0, y: 0 }
          : this._getPointerPositionInElement(this._initialDomRect, t, s);
      let d =
        (this._pickupPositionOnPage =
        this._lastKnownPointerPosition =
          this._getPointerPositionOnPage(s));
      (this._pointerDirectionDelta = { x: 0, y: 0 }),
        (this._pointerPositionAtLastDirectionChange = { x: d.x, y: d.y }),
        (this._dragStartTime = Date.now()),
        this._dragDropRegistry.startDragging(this, s);
    }
    _cleanupDragArtifacts(t) {
      jt(this._rootElement, !0, Wt),
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor),
        this._destroyPreview(),
        this._destroyPlaceholder(),
        (this._initialDomRect =
          this._boundaryRect =
          this._previewRect =
          this._initialTransform =
            void 0),
        this._ngZone.run(() => {
          let s = this._dropContainer,
            e = s.getItemIndex(this),
            i = this._getPointerPositionOnPage(t),
            n = this._getDragDistance(i),
            r = s._isOverContainer(i.x, i.y);
          this.ended.next({
            source: this,
            distance: n,
            dropPoint: i,
            event: t,
          }),
            this.dropped.next({
              item: this,
              currentIndex: e,
              previousIndex: this._initialIndex,
              container: s,
              previousContainer: this._initialContainer,
              isPointerOverContainer: r,
              distance: n,
              dropPoint: i,
              event: t,
            }),
            s.drop(
              this,
              e,
              this._initialIndex,
              this._initialContainer,
              r,
              n,
              i,
              t,
            ),
            (this._dropContainer = this._initialContainer);
        });
    }
    _updateActiveDropContainer({ x: t, y: s }, { x: e, y: i }) {
      let n = this._initialContainer._getSiblingContainerFromPosition(
        this,
        t,
        s,
      );
      !n &&
        this._dropContainer !== this._initialContainer &&
        this._initialContainer._isOverContainer(t, s) &&
        (n = this._initialContainer),
        n &&
          n !== this._dropContainer &&
          this._ngZone.run(() => {
            this.exited.next({ item: this, container: this._dropContainer }),
              this._dropContainer.exit(this),
              (this._dropContainer = n),
              this._dropContainer.enter(
                this,
                t,
                s,
                n === this._initialContainer && n.sortingDisabled
                  ? this._initialIndex
                  : void 0,
              ),
              this.entered.next({
                item: this,
                container: n,
                currentIndex: n.getItemIndex(this),
              });
          }),
        this.isDragging() &&
          (this._dropContainer._startScrollingIfNecessary(e, i),
          this._dropContainer._sortItem(
            this,
            t,
            s,
            this._pointerDirectionDelta,
          ),
          this.constrainPosition
            ? this._applyPreviewTransform(t, s)
            : this._applyPreviewTransform(
                t - this._pickupPositionInElement.x,
                s - this._pickupPositionInElement.y,
              ));
    }
    _animatePreviewToPlaceholder() {
      if (!this._hasMoved) return Promise.resolve();
      let t = this._placeholder.getBoundingClientRect();
      this._preview.addClass('cdk-drag-animating'),
        this._applyPreviewTransform(t.left, t.top);
      let s = this._preview.getTransitionDuration();
      return s === 0
        ? Promise.resolve()
        : this._ngZone.runOutsideAngular(
            () =>
              new Promise(e => {
                let i = r => {
                    (!r ||
                      (this._preview &&
                        R(r) === this._preview.element &&
                        r.propertyName === 'transform')) &&
                      (this._preview?.removeEventListener('transitionend', i),
                      e(),
                      clearTimeout(n));
                  },
                  n = setTimeout(i, s * 1.5);
                this._preview.addEventListener('transitionend', i);
              }),
          );
    }
    _createPlaceholderElement() {
      let t = this._placeholderTemplate,
        s = t ? t.template : null,
        e;
      return (
        s
          ? ((this._placeholderRef = t.viewContainer.createEmbeddedView(
              s,
              t.context,
            )),
            this._placeholderRef.detectChanges(),
            (e = Jt(this._placeholderRef, this._document)))
          : (e = Xt(this._rootElement)),
        (e.style.pointerEvents = 'none'),
        e.classList.add('cdk-drag-placeholder'),
        e
      );
    }
    _getPointerPositionInElement(t, s, e) {
      let i = s === this._rootElement ? null : s,
        n = i ? i.getBoundingClientRect() : t,
        r = x(e) ? e.targetTouches[0] : e,
        a = this._getViewportScrollPosition(),
        h = r.pageX - n.left - a.left,
        l = r.pageY - n.top - a.top;
      return { x: n.left - t.left + h, y: n.top - t.top + l };
    }
    _getPointerPositionOnPage(t) {
      let s = this._getViewportScrollPosition(),
        e = x(t)
          ? t.touches[0] || t.changedTouches[0] || { pageX: 0, pageY: 0 }
          : t,
        i = e.pageX - s.left,
        n = e.pageY - s.top;
      if (this._ownerSVGElement) {
        let r = this._ownerSVGElement.getScreenCTM();
        if (r) {
          let a = this._ownerSVGElement.createSVGPoint();
          return (a.x = i), (a.y = n), a.matrixTransform(r.inverse());
        }
      }
      return { x: i, y: n };
    }
    _getConstrainedPointerPosition(t) {
      let s = this._dropContainer ? this._dropContainer.lockAxis : null,
        { x: e, y: i } = this.constrainPosition
          ? this.constrainPosition(
              t,
              this,
              this._initialDomRect,
              this._pickupPositionInElement,
            )
          : t;
      if (
        (this.lockAxis === 'x' || s === 'x'
          ? (i =
              this._pickupPositionOnPage.y -
              (this.constrainPosition ? this._pickupPositionInElement.y : 0))
          : (this.lockAxis === 'y' || s === 'y') &&
            (e =
              this._pickupPositionOnPage.x -
              (this.constrainPosition ? this._pickupPositionInElement.x : 0)),
        this._boundaryRect)
      ) {
        let { x: n, y: r } = this.constrainPosition
            ? { x: 0, y: 0 }
            : this._pickupPositionInElement,
          a = this._boundaryRect,
          { width: h, height: l } = this._getPreviewRect(),
          c = a.top + r,
          d = a.bottom - (l - r),
          f = a.left + n,
          D = a.right - (h - n);
        (e = $t(e, f, D)), (i = $t(i, c, d));
      }
      return { x: e, y: i };
    }
    _updatePointerDirectionDelta(t) {
      let { x: s, y: e } = t,
        i = this._pointerDirectionDelta,
        n = this._pointerPositionAtLastDirectionChange,
        r = Math.abs(s - n.x),
        a = Math.abs(e - n.y);
      return (
        r > this._config.pointerDirectionChangeThreshold &&
          ((i.x = s > n.x ? 1 : -1), (n.x = s)),
        a > this._config.pointerDirectionChangeThreshold &&
          ((i.y = e > n.y ? 1 : -1), (n.y = e)),
        i
      );
    }
    _toggleNativeDragInteractions() {
      if (!this._rootElement || !this._handles) return;
      let t = this._handles.length > 0 || !this.isDragging();
      t !== this._nativeInteractionsEnabled &&
        ((this._nativeInteractionsEnabled = t), y(this._rootElement, t));
    }
    _removeRootElementListeners(t) {
      t.removeEventListener('mousedown', this._pointerDown, M),
        t.removeEventListener('touchstart', this._pointerDown, Ut),
        t.removeEventListener('dragstart', this._nativeDragStart, M);
    }
    _applyRootElementTransform(t, s) {
      let e = 1 / this.scale,
        i = j(t * e, s * e),
        n = this._rootElement.style;
      this._initialTransform == null &&
        (this._initialTransform =
          n.transform && n.transform != 'none' ? n.transform : ''),
        (n.transform = z(i, this._initialTransform));
    }
    _applyPreviewTransform(t, s) {
      let e = this._previewTemplate?.template ? void 0 : this._initialTransform,
        i = j(t, s);
      this._preview.setTransform(z(i, e));
    }
    _getDragDistance(t) {
      let s = this._pickupPositionOnPage;
      return s ? { x: t.x - s.x, y: t.y - s.y } : { x: 0, y: 0 };
    }
    _cleanupCachedDimensions() {
      (this._boundaryRect = this._previewRect = void 0),
        this._parentPositions.clear();
    }
    _containInsideBoundaryOnResize() {
      let { x: t, y: s } = this._passiveTransform;
      if ((t === 0 && s === 0) || this.isDragging() || !this._boundaryElement)
        return;
      let e = this._rootElement.getBoundingClientRect(),
        i = this._boundaryElement.getBoundingClientRect();
      if (
        (i.width === 0 && i.height === 0) ||
        (e.width === 0 && e.height === 0)
      )
        return;
      let n = i.left - e.left,
        r = e.right - i.right,
        a = i.top - e.top,
        h = e.bottom - i.bottom;
      i.width > e.width ? (n > 0 && (t += n), r > 0 && (t -= r)) : (t = 0),
        i.height > e.height ? (a > 0 && (s += a), h > 0 && (s -= h)) : (s = 0),
        (t !== this._passiveTransform.x || s !== this._passiveTransform.y) &&
          this.setFreeDragPosition({ y: s, x: t });
    }
    _getDragStartDelay(t) {
      let s = this.dragStartDelay;
      return typeof s == 'number' ? s : x(t) ? s.touch : s ? s.mouse : 0;
    }
    _updateOnScroll(t) {
      let s = this._parentPositions.handleScroll(t);
      if (s) {
        let e = R(t);
        this._boundaryRect &&
          e !== this._boundaryElement &&
          e.contains(this._boundaryElement) &&
          T(this._boundaryRect, s.top, s.left),
          (this._pickupPositionOnPage.x += s.left),
          (this._pickupPositionOnPage.y += s.top),
          this._dropContainer ||
            ((this._activeTransform.x -= s.left),
            (this._activeTransform.y -= s.top),
            this._applyRootElementTransform(
              this._activeTransform.x,
              this._activeTransform.y,
            ));
      }
    }
    _getViewportScrollPosition() {
      return (
        this._parentPositions.positions.get(this._document)?.scrollPosition ||
        this._parentPositions.getViewportScrollPosition()
      );
    }
    _getShadowRoot() {
      return (
        this._cachedShadowRoot === void 0 &&
          (this._cachedShadowRoot = N(this._rootElement)),
        this._cachedShadowRoot
      );
    }
    _getPreviewInsertionPoint(t, s) {
      let e = this._previewContainer || 'global';
      if (e === 'parent') return t;
      if (e === 'global') {
        let i = this._document;
        return (
          s ||
          i.fullscreenElement ||
          i.webkitFullscreenElement ||
          i.mozFullScreenElement ||
          i.msFullscreenElement ||
          i.body
        );
      }
      return v(e);
    }
    _getPreviewRect() {
      return (
        (!this._previewRect ||
          (!this._previewRect.width && !this._previewRect.height)) &&
          (this._previewRect = this._preview
            ? this._preview.getBoundingClientRect()
            : this._initialDomRect),
        this._previewRect
      );
    }
    _getTargetHandle(t) {
      return this._handles.find(
        s => t.target && (t.target === s || s.contains(t.target)),
      );
    }
  };
function $t(o, t, s) {
  return Math.max(t, Math.min(s, o));
}
function x(o) {
  return o.type[0] === 't';
}
function qt(o) {
  o.preventDefault();
}
function Qt(o, t, s) {
  let e = Kt(t, o.length - 1),
    i = Kt(s, o.length - 1);
  if (e === i) return;
  let n = o[e],
    r = i < e ? -1 : 1;
  for (let a = e; a !== i; a += r) o[a] = o[a + r];
  o[i] = n;
}
function Kt(o, t) {
  return Math.max(0, Math.min(t, o));
}
var V = class {
    constructor(t) {
      (this._dragDropRegistry = t),
        (this._itemPositions = []),
        (this.orientation = 'vertical'),
        (this._previousSwap = { drag: null, delta: 0, overlaps: !1 });
    }
    start(t) {
      this.withItems(t);
    }
    sort(t, s, e, i) {
      let n = this._itemPositions,
        r = this._getItemIndexFromPointerPosition(t, s, e, i);
      if (r === -1 && n.length > 0) return null;
      let a = this.orientation === 'horizontal',
        h = n.findIndex(_ => _.drag === t),
        l = n[r],
        c = n[h].clientRect,
        d = l.clientRect,
        f = h > r ? 1 : -1,
        D = this._getItemOffsetPx(c, d, f),
        w = this._getSiblingOffsetPx(h, n, f),
        G = n.slice();
      return (
        Qt(n, h, r),
        n.forEach((_, ne) => {
          if (G[ne] === _) return;
          let ht = _.drag === t,
            B = ht ? D : w,
            lt = ht ? t.getPlaceholderElement() : _.drag.getRootElement();
          _.offset += B;
          let ct = Math.round(_.offset * (1 / _.drag.scale));
          a
            ? ((lt.style.transform = z(
                `translate3d(${ct}px, 0, 0)`,
                _.initialTransform,
              )),
              T(_.clientRect, 0, B))
            : ((lt.style.transform = z(
                `translate3d(0, ${ct}px, 0)`,
                _.initialTransform,
              )),
              T(_.clientRect, B, 0));
        }),
        (this._previousSwap.overlaps = tt(d, s, e)),
        (this._previousSwap.drag = l.drag),
        (this._previousSwap.delta = a ? i.x : i.y),
        { previousIndex: h, currentIndex: r }
      );
    }
    enter(t, s, e, i) {
      let n =
          i == null || i < 0
            ? this._getItemIndexFromPointerPosition(t, s, e)
            : i,
        r = this._activeDraggables,
        a = r.indexOf(t),
        h = t.getPlaceholderElement(),
        l = r[n];
      if (
        (l === t && (l = r[n + 1]),
        !l &&
          (n == null || n === -1 || n < r.length - 1) &&
          this._shouldEnterAsFirstChild(s, e) &&
          (l = r[0]),
        a > -1 && r.splice(a, 1),
        l && !this._dragDropRegistry.isDragging(l))
      ) {
        let c = l.getRootElement();
        c.parentElement.insertBefore(h, c), r.splice(n, 0, t);
      } else this._element.appendChild(h), r.push(t);
      (h.style.transform = ''), this._cacheItemPositions();
    }
    withItems(t) {
      (this._activeDraggables = t.slice()), this._cacheItemPositions();
    }
    withSortPredicate(t) {
      this._sortPredicate = t;
    }
    reset() {
      this._activeDraggables?.forEach(t => {
        let s = t.getRootElement();
        if (s) {
          let e = this._itemPositions.find(i => i.drag === t)?.initialTransform;
          s.style.transform = e || '';
        }
      }),
        (this._itemPositions = []),
        (this._activeDraggables = []),
        (this._previousSwap.drag = null),
        (this._previousSwap.delta = 0),
        (this._previousSwap.overlaps = !1);
    }
    getActiveItemsSnapshot() {
      return this._activeDraggables;
    }
    getItemIndex(t) {
      return (
        this.orientation === 'horizontal' && this.direction === 'rtl'
          ? this._itemPositions.slice().reverse()
          : this._itemPositions
      ).findIndex(e => e.drag === t);
    }
    updateOnScroll(t, s) {
      this._itemPositions.forEach(({ clientRect: e }) => {
        T(e, t, s);
      }),
        this._itemPositions.forEach(({ drag: e }) => {
          this._dragDropRegistry.isDragging(e) &&
            e._sortFromLastPointerPosition();
        });
    }
    withElementContainer(t) {
      this._element = t;
    }
    _cacheItemPositions() {
      let t = this.orientation === 'horizontal';
      this._itemPositions = this._activeDraggables
        .map(s => {
          let e = s.getVisibleElement();
          return {
            drag: s,
            offset: 0,
            initialTransform: e.style.transform || '',
            clientRect: ot(e),
          };
        })
        .sort((s, e) =>
          t
            ? s.clientRect.left - e.clientRect.left
            : s.clientRect.top - e.clientRect.top,
        );
    }
    _getItemOffsetPx(t, s, e) {
      let i = this.orientation === 'horizontal',
        n = i ? s.left - t.left : s.top - t.top;
      return e === -1 && (n += i ? s.width - t.width : s.height - t.height), n;
    }
    _getSiblingOffsetPx(t, s, e) {
      let i = this.orientation === 'horizontal',
        n = s[t].clientRect,
        r = s[t + e * -1],
        a = n[i ? 'width' : 'height'] * e;
      if (r) {
        let h = i ? 'left' : 'top',
          l = i ? 'right' : 'bottom';
        e === -1
          ? (a -= r.clientRect[h] - n[l])
          : (a += n[h] - r.clientRect[l]);
      }
      return a;
    }
    _shouldEnterAsFirstChild(t, s) {
      if (!this._activeDraggables.length) return !1;
      let e = this._itemPositions,
        i = this.orientation === 'horizontal';
      if (e[0].drag !== this._activeDraggables[0]) {
        let r = e[e.length - 1].clientRect;
        return i ? t >= r.right : s >= r.bottom;
      } else {
        let r = e[0].clientRect;
        return i ? t <= r.left : s <= r.top;
      }
    }
    _getItemIndexFromPointerPosition(t, s, e, i) {
      let n = this.orientation === 'horizontal',
        r = this._itemPositions.findIndex(({ drag: a, clientRect: h }) => {
          if (a === t) return !1;
          if (i) {
            let l = n ? i.x : i.y;
            if (
              a === this._previousSwap.drag &&
              this._previousSwap.overlaps &&
              l === this._previousSwap.delta
            )
              return !1;
          }
          return n
            ? s >= Math.floor(h.left) && s < Math.floor(h.right)
            : e >= Math.floor(h.top) && e < Math.floor(h.bottom);
        });
      return r === -1 || !this._sortPredicate(r, t) ? -1 : r;
    }
  },
  st = class {
    constructor(t, s) {
      (this._document = t),
        (this._dragDropRegistry = s),
        (this._previousSwap = {
          drag: null,
          deltaX: 0,
          deltaY: 0,
          overlaps: !1,
        }),
        (this._relatedNodes = []);
    }
    start(t) {
      let s = this._element.childNodes;
      this._relatedNodes = [];
      for (let e = 0; e < s.length; e++) {
        let i = s[e];
        this._relatedNodes.push([i, i.nextSibling]);
      }
      this.withItems(t);
    }
    sort(t, s, e, i) {
      let n = this._getItemIndexFromPointerPosition(t, s, e),
        r = this._previousSwap;
      if (n === -1 || this._activeItems[n] === t) return null;
      let a = this._activeItems[n];
      if (r.drag === a && r.overlaps && r.deltaX === i.x && r.deltaY === i.y)
        return null;
      let h = this.getItemIndex(t),
        l = t.getPlaceholderElement(),
        c = a.getRootElement();
      n > h ? c.after(l) : c.before(l), Qt(this._activeItems, h, n);
      let d = this._getRootNode().elementFromPoint(s, e);
      return (
        (r.deltaX = i.x),
        (r.deltaY = i.y),
        (r.drag = a),
        (r.overlaps = c === d || c.contains(d)),
        { previousIndex: h, currentIndex: n }
      );
    }
    enter(t, s, e, i) {
      let n =
        i == null || i < 0 ? this._getItemIndexFromPointerPosition(t, s, e) : i;
      n === -1 && (n = this._getClosestItemIndexToPointer(t, s, e));
      let r = this._activeItems[n],
        a = this._activeItems.indexOf(t);
      a > -1 && this._activeItems.splice(a, 1),
        r && !this._dragDropRegistry.isDragging(r)
          ? (this._activeItems.splice(n, 0, t),
            r.getRootElement().before(t.getPlaceholderElement()))
          : (this._activeItems.push(t),
            this._element.appendChild(t.getPlaceholderElement()));
    }
    withItems(t) {
      this._activeItems = t.slice();
    }
    withSortPredicate(t) {
      this._sortPredicate = t;
    }
    reset() {
      let t = this._element,
        s = this._previousSwap;
      for (let e = this._relatedNodes.length - 1; e > -1; e--) {
        let [i, n] = this._relatedNodes[e];
        i.parentNode === t &&
          i.nextSibling !== n &&
          (n === null
            ? t.appendChild(i)
            : n.parentNode === t && t.insertBefore(i, n));
      }
      (this._relatedNodes = []),
        (this._activeItems = []),
        (s.drag = null),
        (s.deltaX = s.deltaY = 0),
        (s.overlaps = !1);
    }
    getActiveItemsSnapshot() {
      return this._activeItems;
    }
    getItemIndex(t) {
      return this._activeItems.indexOf(t);
    }
    updateOnScroll() {
      this._activeItems.forEach(t => {
        this._dragDropRegistry.isDragging(t) &&
          t._sortFromLastPointerPosition();
      });
    }
    withElementContainer(t) {
      t !== this._element && ((this._element = t), (this._rootNode = void 0));
    }
    _getItemIndexFromPointerPosition(t, s, e) {
      let i = this._getRootNode().elementFromPoint(
          Math.floor(s),
          Math.floor(e),
        ),
        n = i
          ? this._activeItems.findIndex(r => {
              let a = r.getRootElement();
              return i === a || a.contains(i);
            })
          : -1;
      return n === -1 || !this._sortPredicate(n, t) ? -1 : n;
    }
    _getRootNode() {
      return (
        this._rootNode || (this._rootNode = N(this._element) || this._document),
        this._rootNode
      );
    }
    _getClosestItemIndexToPointer(t, s, e) {
      if (this._activeItems.length === 0) return -1;
      if (this._activeItems.length === 1) return 0;
      let i = 1 / 0,
        n = -1;
      for (let r = 0; r < this._activeItems.length; r++) {
        let a = this._activeItems[r];
        if (a !== t) {
          let { x: h, y: l } = a.getRootElement().getBoundingClientRect(),
            c = Math.hypot(s - h, e - l);
          c < i && ((i = c), (n = r));
        }
      }
      return n;
    }
  },
  Yt = 0.05,
  te = 0.05,
  m = (function (o) {
    return (
      (o[(o.NONE = 0)] = 'NONE'),
      (o[(o.UP = 1)] = 'UP'),
      (o[(o.DOWN = 2)] = 'DOWN'),
      o
    );
  })(m || {}),
  g = (function (o) {
    return (
      (o[(o.NONE = 0)] = 'NONE'),
      (o[(o.LEFT = 1)] = 'LEFT'),
      (o[(o.RIGHT = 2)] = 'RIGHT'),
      o
    );
  })(g || {}),
  nt = class {
    constructor(t, s, e, i, n) {
      (this._dragDropRegistry = s),
        (this._ngZone = i),
        (this._viewportRuler = n),
        (this.disabled = !1),
        (this.sortingDisabled = !1),
        (this.autoScrollDisabled = !1),
        (this.autoScrollStep = 2),
        (this.enterPredicate = () => !0),
        (this.sortPredicate = () => !0),
        (this.beforeStarted = new p()),
        (this.entered = new p()),
        (this.exited = new p()),
        (this.dropped = new p()),
        (this.sorted = new p()),
        (this.receivingStarted = new p()),
        (this.receivingStopped = new p()),
        (this._isDragging = !1),
        (this._draggables = []),
        (this._siblings = []),
        (this._activeSiblings = new Set()),
        (this._viewportScrollSubscription = S.EMPTY),
        (this._verticalScrollDirection = m.NONE),
        (this._horizontalScrollDirection = g.NONE),
        (this._stopScrollTimers = new p()),
        (this._cachedShadowRoot = null),
        (this._scrollableElements = []),
        (this._direction = 'ltr'),
        (this._startScrollInterval = () => {
          this._stopScrolling(),
            gt(0, pt)
              .pipe(C(this._stopScrollTimers))
              .subscribe(() => {
                let a = this._scrollNode,
                  h = this.autoScrollStep;
                this._verticalScrollDirection === m.UP
                  ? a.scrollBy(0, -h)
                  : this._verticalScrollDirection === m.DOWN &&
                    a.scrollBy(0, h),
                  this._horizontalScrollDirection === g.LEFT
                    ? a.scrollBy(-h, 0)
                    : this._horizontalScrollDirection === g.RIGHT &&
                      a.scrollBy(h, 0);
              });
        });
      let r = (this.element = v(t));
      (this._document = e),
        this.withOrientation('vertical').withElementContainer(r),
        s.registerDropContainer(this),
        (this._parentPositions = new H(e));
    }
    dispose() {
      this._stopScrolling(),
        this._stopScrollTimers.complete(),
        this._viewportScrollSubscription.unsubscribe(),
        this.beforeStarted.complete(),
        this.entered.complete(),
        this.exited.complete(),
        this.dropped.complete(),
        this.sorted.complete(),
        this.receivingStarted.complete(),
        this.receivingStopped.complete(),
        this._activeSiblings.clear(),
        (this._scrollNode = null),
        this._parentPositions.clear(),
        this._dragDropRegistry.removeDropContainer(this);
    }
    isDragging() {
      return this._isDragging;
    }
    start() {
      this._draggingStarted(), this._notifyReceivingSiblings();
    }
    enter(t, s, e, i) {
      this._draggingStarted(),
        i == null && this.sortingDisabled && (i = this._draggables.indexOf(t)),
        this._sortStrategy.enter(t, s, e, i),
        this._cacheParentPositions(),
        this._notifyReceivingSiblings(),
        this.entered.next({
          item: t,
          container: this,
          currentIndex: this.getItemIndex(t),
        });
    }
    exit(t) {
      this._reset(), this.exited.next({ item: t, container: this });
    }
    drop(t, s, e, i, n, r, a, h = {}) {
      this._reset(),
        this.dropped.next({
          item: t,
          currentIndex: s,
          previousIndex: e,
          container: this,
          previousContainer: i,
          isPointerOverContainer: n,
          distance: r,
          dropPoint: a,
          event: h,
        });
    }
    withItems(t) {
      let s = this._draggables;
      return (
        (this._draggables = t),
        t.forEach(e => e._withDropContainer(this)),
        this.isDragging() &&
          (s.filter(i => i.isDragging()).every(i => t.indexOf(i) === -1)
            ? this._reset()
            : this._sortStrategy.withItems(this._draggables)),
        this
      );
    }
    withDirection(t) {
      return (
        (this._direction = t),
        this._sortStrategy instanceof V && (this._sortStrategy.direction = t),
        this
      );
    }
    connectedTo(t) {
      return (this._siblings = t.slice()), this;
    }
    withOrientation(t) {
      if (t === 'mixed')
        this._sortStrategy = new st(this._document, this._dragDropRegistry);
      else {
        let s = new V(this._dragDropRegistry);
        (s.direction = this._direction),
          (s.orientation = t),
          (this._sortStrategy = s);
      }
      return (
        this._sortStrategy.withElementContainer(this._container),
        this._sortStrategy.withSortPredicate((s, e) =>
          this.sortPredicate(s, e, this),
        ),
        this
      );
    }
    withScrollableParents(t) {
      let s = this._container;
      return (
        (this._scrollableElements =
          t.indexOf(s) === -1 ? [s, ...t] : t.slice()),
        this
      );
    }
    withElementContainer(t) {
      if (t === this._container) return this;
      let s = v(this.element),
        e = this._scrollableElements.indexOf(this._container),
        i = this._scrollableElements.indexOf(t);
      return (
        e > -1 && this._scrollableElements.splice(e, 1),
        i > -1 && this._scrollableElements.splice(i, 1),
        this._sortStrategy && this._sortStrategy.withElementContainer(t),
        (this._cachedShadowRoot = null),
        this._scrollableElements.unshift(t),
        (this._container = t),
        this
      );
    }
    getScrollableParents() {
      return this._scrollableElements;
    }
    getItemIndex(t) {
      return this._isDragging
        ? this._sortStrategy.getItemIndex(t)
        : this._draggables.indexOf(t);
    }
    isReceiving() {
      return this._activeSiblings.size > 0;
    }
    _sortItem(t, s, e, i) {
      if (
        this.sortingDisabled ||
        !this._domRect ||
        !zt(this._domRect, Yt, s, e)
      )
        return;
      let n = this._sortStrategy.sort(t, s, e, i);
      n &&
        this.sorted.next({
          previousIndex: n.previousIndex,
          currentIndex: n.currentIndex,
          container: this,
          item: t,
        });
    }
    _startScrollingIfNecessary(t, s) {
      if (this.autoScrollDisabled) return;
      let e,
        i = m.NONE,
        n = g.NONE;
      if (
        (this._parentPositions.positions.forEach((r, a) => {
          a === this._document ||
            !r.clientRect ||
            e ||
            (zt(r.clientRect, Yt, t, s) &&
              (([i, n] = le(a, r.clientRect, this._direction, t, s)),
              (i || n) && (e = a)));
        }),
        !i && !n)
      ) {
        let { width: r, height: a } = this._viewportRuler.getViewportSize(),
          h = { width: r, height: a, top: 0, right: r, bottom: a, left: 0 };
        (i = ee(h, s)), (n = ie(h, t)), (e = window);
      }
      e &&
        (i !== this._verticalScrollDirection ||
          n !== this._horizontalScrollDirection ||
          e !== this._scrollNode) &&
        ((this._verticalScrollDirection = i),
        (this._horizontalScrollDirection = n),
        (this._scrollNode = e),
        (i || n) && e
          ? this._ngZone.runOutsideAngular(this._startScrollInterval)
          : this._stopScrolling());
    }
    _stopScrolling() {
      this._stopScrollTimers.next();
    }
    _draggingStarted() {
      let t = this._container.style;
      this.beforeStarted.next(),
        (this._isDragging = !0),
        (this._initialScrollSnap =
          t.msScrollSnapType || t.scrollSnapType || ''),
        (t.scrollSnapType = t.msScrollSnapType = 'none'),
        this._sortStrategy.start(this._draggables),
        this._cacheParentPositions(),
        this._viewportScrollSubscription.unsubscribe(),
        this._listenToScrollEvents();
    }
    _cacheParentPositions() {
      this._parentPositions.cache(this._scrollableElements),
        (this._domRect = this._parentPositions.positions.get(
          this._container,
        ).clientRect);
    }
    _reset() {
      this._isDragging = !1;
      let t = this._container.style;
      (t.scrollSnapType = t.msScrollSnapType = this._initialScrollSnap),
        this._siblings.forEach(s => s._stopReceiving(this)),
        this._sortStrategy.reset(),
        this._stopScrolling(),
        this._viewportScrollSubscription.unsubscribe(),
        this._parentPositions.clear();
    }
    _isOverContainer(t, s) {
      return this._domRect != null && tt(this._domRect, t, s);
    }
    _getSiblingContainerFromPosition(t, s, e) {
      return this._siblings.find(i => i._canReceive(t, s, e));
    }
    _canReceive(t, s, e) {
      if (
        !this._domRect ||
        !tt(this._domRect, s, e) ||
        !this.enterPredicate(t, this)
      )
        return !1;
      let i = this._getShadowRoot().elementFromPoint(s, e);
      return i ? i === this._container || this._container.contains(i) : !1;
    }
    _startReceiving(t, s) {
      let e = this._activeSiblings;
      !e.has(t) &&
        s.every(
          i => this.enterPredicate(i, this) || this._draggables.indexOf(i) > -1,
        ) &&
        (e.add(t),
        this._cacheParentPositions(),
        this._listenToScrollEvents(),
        this.receivingStarted.next({ initiator: t, receiver: this, items: s }));
    }
    _stopReceiving(t) {
      this._activeSiblings.delete(t),
        this._viewportScrollSubscription.unsubscribe(),
        this.receivingStopped.next({ initiator: t, receiver: this });
    }
    _listenToScrollEvents() {
      this._viewportScrollSubscription = this._dragDropRegistry
        .scrolled(this._getShadowRoot())
        .subscribe(t => {
          if (this.isDragging()) {
            let s = this._parentPositions.handleScroll(t);
            s && this._sortStrategy.updateOnScroll(s.top, s.left);
          } else this.isReceiving() && this._cacheParentPositions();
        });
    }
    _getShadowRoot() {
      if (!this._cachedShadowRoot) {
        let t = N(this._container);
        this._cachedShadowRoot = t || this._document;
      }
      return this._cachedShadowRoot;
    }
    _notifyReceivingSiblings() {
      let t = this._sortStrategy
        .getActiveItemsSnapshot()
        .filter(s => s.isDragging());
      this._siblings.forEach(s => s._startReceiving(this, t));
    }
  };
function ee(o, t) {
  let { top: s, bottom: e, height: i } = o,
    n = i * te;
  return t >= s - n && t <= s + n
    ? m.UP
    : t >= e - n && t <= e + n
      ? m.DOWN
      : m.NONE;
}
function ie(o, t) {
  let { left: s, right: e, width: i } = o,
    n = i * te;
  return t >= s - n && t <= s + n
    ? g.LEFT
    : t >= e - n && t <= e + n
      ? g.RIGHT
      : g.NONE;
}
function le(o, t, s, e, i) {
  let n = ee(t, i),
    r = ie(t, e),
    a = m.NONE,
    h = g.NONE;
  if (n) {
    let l = o.scrollTop;
    n === m.UP
      ? l > 0 && (a = m.UP)
      : o.scrollHeight - l > o.clientHeight && (a = m.DOWN);
  }
  if (r) {
    let l = o.scrollLeft;
    s === 'rtl'
      ? r === g.RIGHT
        ? l < 0 && (h = g.RIGHT)
        : o.scrollWidth + l > o.clientWidth && (h = g.LEFT)
      : r === g.LEFT
        ? l > 0 && (h = g.LEFT)
        : o.scrollWidth - l > o.clientWidth && (h = g.RIGHT);
  }
  return [a, h];
}
var F = I({ passive: !1, capture: !0 }),
  A = new Set(),
  ce = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵcmp = Dt({
        type: t,
        selectors: [['ng-component']],
        hostAttrs: ['cdk-drag-resets-container', ''],
        standalone: !0,
        features: [It],
        decls: 0,
        vars: 0,
        template: function (i, n) {},
        styles: [
          '@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let o = t;
    return o;
  })(),
  de = (() => {
    let t = class t {
      constructor(e, i) {
        (this._ngZone = e),
          (this._appRef = O(Rt)),
          (this._environmentInjector = O(wt)),
          (this._dropInstances = new Set()),
          (this._dragInstances = new Set()),
          (this._activeDragInstances = K([])),
          (this._globalListeners = new Map()),
          (this._draggingPredicate = n => n.isDragging()),
          (this.pointerMove = new p()),
          (this.pointerUp = new p()),
          (this.scroll = new p()),
          (this._preventDefaultWhileDragging = n => {
            this._activeDragInstances().length > 0 && n.preventDefault();
          }),
          (this._persistentTouchmoveListener = n => {
            this._activeDragInstances().length > 0 &&
              (this._activeDragInstances().some(this._draggingPredicate) &&
                n.preventDefault(),
              this.pointerMove.next(n));
          }),
          (this._document = i);
      }
      registerDropContainer(e) {
        this._dropInstances.has(e) || this._dropInstances.add(e);
      }
      registerDragItem(e) {
        this._dragInstances.add(e),
          this._dragInstances.size === 1 &&
            this._ngZone.runOutsideAngular(() => {
              this._document.addEventListener(
                'touchmove',
                this._persistentTouchmoveListener,
                F,
              );
            });
      }
      removeDropContainer(e) {
        this._dropInstances.delete(e);
      }
      removeDragItem(e) {
        this._dragInstances.delete(e),
          this.stopDragging(e),
          this._dragInstances.size === 0 &&
            this._document.removeEventListener(
              'touchmove',
              this._persistentTouchmoveListener,
              F,
            );
      }
      startDragging(e, i) {
        if (
          !(this._activeDragInstances().indexOf(e) > -1) &&
          (this._loadResets(),
          this._activeDragInstances.update(n => [...n, e]),
          this._activeDragInstances().length === 1)
        ) {
          let n = i.type.startsWith('touch');
          this._globalListeners
            .set(n ? 'touchend' : 'mouseup', {
              handler: r => this.pointerUp.next(r),
              options: !0,
            })
            .set('scroll', { handler: r => this.scroll.next(r), options: !0 })
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: F,
            }),
            n ||
              this._globalListeners.set('mousemove', {
                handler: r => this.pointerMove.next(r),
                options: F,
              }),
            this._ngZone.runOutsideAngular(() => {
              this._globalListeners.forEach((r, a) => {
                this._document.addEventListener(a, r.handler, r.options);
              });
            });
        }
      }
      stopDragging(e) {
        this._activeDragInstances.update(i => {
          let n = i.indexOf(e);
          return n > -1 ? (i.splice(n, 1), [...i]) : i;
        }),
          this._activeDragInstances().length === 0 &&
            this._clearGlobalListeners();
      }
      isDragging(e) {
        return this._activeDragInstances().indexOf(e) > -1;
      }
      scrolled(e) {
        let i = [this.scroll];
        return (
          e &&
            e !== this._document &&
            i.push(
              new U(n =>
                this._ngZone.runOutsideAngular(() => {
                  let a = h => {
                    this._activeDragInstances().length && n.next(h);
                  };
                  return (
                    e.addEventListener('scroll', a, !0),
                    () => {
                      e.removeEventListener('scroll', a, !0);
                    }
                  );
                }),
              ),
            ),
          Z(...i)
        );
      }
      ngOnDestroy() {
        this._dragInstances.forEach(e => this.removeDragItem(e)),
          this._dropInstances.forEach(e => this.removeDropContainer(e)),
          this._clearGlobalListeners(),
          this.pointerMove.complete(),
          this.pointerUp.complete();
      }
      _clearGlobalListeners() {
        this._globalListeners.forEach((e, i) => {
          this._document.removeEventListener(i, e.handler, e.options);
        }),
          this._globalListeners.clear();
      }
      _loadResets() {
        if (!A.has(this._appRef)) {
          A.add(this._appRef);
          let e = Ct(ce, { environmentInjector: this._environmentInjector });
          this._appRef.onDestroy(() => {
            A.delete(this._appRef), A.size === 0 && e.destroy();
          });
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(b(k), b(L));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let o = t;
    return o;
  })(),
  pe = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 },
  _e = (() => {
    let t = class t {
      constructor(e, i, n, r) {
        (this._document = e),
          (this._ngZone = i),
          (this._viewportRuler = n),
          (this._dragDropRegistry = r);
      }
      createDrag(e, i = pe) {
        return new it(
          e,
          i,
          this._document,
          this._ngZone,
          this._viewportRuler,
          this._dragDropRegistry,
        );
      }
      createDropList(e) {
        return new nt(
          e,
          this._dragDropRegistry,
          this._document,
          this._ngZone,
          this._viewportRuler,
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(b(L), b(k), b(Lt), b(de));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: 'root' }));
    let o = t;
    return o;
  })(),
  rt = new E('CDK_DRAG_PARENT');
var se = new E('CdkDragHandle'),
  Ze = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._stateChanges.next(this);
      }
      constructor(e, i) {
        (this.element = e),
          (this._parentDrag = i),
          (this._stateChanges = new p()),
          (this._disabled = !1),
          i?._addHandle(this);
      }
      ngOnDestroy() {
        this._parentDrag?._removeHandle(this), this._stateChanges.complete();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(u(q), u(rt, 12));
    }),
      (t.ɵdir = $({
        type: t,
        selectors: [['', 'cdkDragHandle', '']],
        hostAttrs: [1, 'cdk-drag-handle'],
        inputs: { disabled: [2, 'cdkDragHandleDisabled', 'disabled', J] },
        standalone: !0,
        features: [X([{ provide: se, useExisting: t }]), Y],
      }));
    let o = t;
    return o;
  })(),
  ge = new E('CDK_DRAG_CONFIG'),
  ue = 'cdk-drag',
  fe = new E('CdkDropList'),
  We = (() => {
    let t = class t {
      get disabled() {
        return (
          this._disabled || (this.dropContainer && this.dropContainer.disabled)
        );
      }
      set disabled(e) {
        (this._disabled = e), (this._dragRef.disabled = this._disabled);
      }
      constructor(e, i, n, r, a, h, l, c, d, f, D) {
        (this.element = e),
          (this.dropContainer = i),
          (this._ngZone = r),
          (this._viewContainerRef = a),
          (this._dir = l),
          (this._changeDetectorRef = d),
          (this._selfHandle = f),
          (this._parentDrag = D),
          (this._destroyed = new p()),
          (this._handles = new dt([])),
          (this.scale = 1),
          (this.started = new P()),
          (this.released = new P()),
          (this.ended = new P()),
          (this.entered = new P()),
          (this.exited = new P()),
          (this.dropped = new P()),
          (this.moved = new U(w => {
            let G = this._dragRef.moved
              .pipe(
                _t(_ => ({
                  source: this,
                  pointerPosition: _.pointerPosition,
                  event: _.event,
                  delta: _.delta,
                  distance: _.distance,
                })),
              )
              .subscribe(w);
            return () => {
              G.unsubscribe();
            };
          })),
          (this._injector = O(Pt)),
          (this._dragRef = c.createDrag(e, {
            dragStartThreshold:
              h && h.dragStartThreshold != null ? h.dragStartThreshold : 5,
            pointerDirectionChangeThreshold:
              h && h.pointerDirectionChangeThreshold != null
                ? h.pointerDirectionChangeThreshold
                : 5,
            zIndex: h?.zIndex,
          })),
          (this._dragRef.data = this),
          t._dragInstances.push(this),
          h && this._assignDefaults(h),
          i &&
            (this._dragRef._withDropContainer(i._dropListRef),
            i.addItem(this),
            i._dropListRef.beforeStarted
              .pipe(C(this._destroyed))
              .subscribe(() => {
                this._dragRef.scale = this.scale;
              })),
          this._syncInputs(this._dragRef),
          this._handleEvents(this._dragRef);
      }
      getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
      }
      getRootElement() {
        return this._dragRef.getRootElement();
      }
      reset() {
        this._dragRef.reset();
      }
      getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
      }
      setFreeDragPosition(e) {
        this._dragRef.setFreeDragPosition(e);
      }
      ngAfterViewInit() {
        yt(
          () => {
            this._updateRootElement(),
              this._setupHandlesListener(),
              this.freeDragPosition &&
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
          },
          { injector: this._injector },
        );
      }
      ngOnChanges(e) {
        let i = e.rootElementSelector,
          n = e.freeDragPosition;
        i && !i.firstChange && this._updateRootElement(),
          n &&
            !n.firstChange &&
            this.freeDragPosition &&
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
      ngOnDestroy() {
        this.dropContainer && this.dropContainer.removeItem(this);
        let e = t._dragInstances.indexOf(this);
        e > -1 && t._dragInstances.splice(e, 1),
          this._ngZone.runOutsideAngular(() => {
            this._handles.complete(),
              this._destroyed.next(),
              this._destroyed.complete(),
              this._dragRef.dispose();
          });
      }
      _addHandle(e) {
        let i = this._handles.getValue();
        i.push(e), this._handles.next(i);
      }
      _removeHandle(e) {
        let i = this._handles.getValue(),
          n = i.indexOf(e);
        n > -1 && (i.splice(n, 1), this._handles.next(i));
      }
      _setPreviewTemplate(e) {
        this._previewTemplate = e;
      }
      _resetPreviewTemplate(e) {
        e === this._previewTemplate && (this._previewTemplate = null);
      }
      _setPlaceholderTemplate(e) {
        this._placeholderTemplate = e;
      }
      _resetPlaceholderTemplate(e) {
        e === this._placeholderTemplate && (this._placeholderTemplate = null);
      }
      _updateRootElement() {
        let e = this.element.nativeElement,
          i = e;
        this.rootElementSelector &&
          (i =
            e.closest !== void 0
              ? e.closest(this.rootElementSelector)
              : e.parentElement?.closest(this.rootElementSelector)),
          this._dragRef.withRootElement(i || e);
      }
      _getBoundaryElement() {
        let e = this.boundaryElement;
        return e
          ? typeof e == 'string'
            ? this.element.nativeElement.closest(e)
            : v(e)
          : null;
      }
      _syncInputs(e) {
        e.beforeStarted.subscribe(() => {
          if (!e.isDragging()) {
            let i = this._dir,
              n = this.dragStartDelay,
              r = this._placeholderTemplate
                ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef,
                  }
                : null,
              a = this._previewTemplate
                ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef,
                  }
                : null;
            (e.disabled = this.disabled),
              (e.lockAxis = this.lockAxis),
              (e.scale = this.scale),
              (e.dragStartDelay = typeof n == 'object' && n ? n : kt(n)),
              (e.constrainPosition = this.constrainPosition),
              (e.previewClass = this.previewClass),
              e
                .withBoundaryElement(this._getBoundaryElement())
                .withPlaceholderTemplate(r)
                .withPreviewTemplate(a)
                .withPreviewContainer(this.previewContainer || 'global'),
              i && e.withDirection(i.value);
          }
        }),
          e.beforeStarted.pipe(ut(1)).subscribe(() => {
            if (this._parentDrag) {
              e.withParent(this._parentDrag._dragRef);
              return;
            }
            let i = this.element.nativeElement.parentElement;
            for (; i; ) {
              if (i.classList.contains(ue)) {
                e.withParent(
                  t._dragInstances.find(n => n.element.nativeElement === i)
                    ?._dragRef || null,
                );
                break;
              }
              i = i.parentElement;
            }
          });
      }
      _handleEvents(e) {
        e.started.subscribe(i => {
          this.started.emit({ source: this, event: i.event }),
            this._changeDetectorRef.markForCheck();
        }),
          e.released.subscribe(i => {
            this.released.emit({ source: this, event: i.event });
          }),
          e.ended.subscribe(i => {
            this.ended.emit({
              source: this,
              distance: i.distance,
              dropPoint: i.dropPoint,
              event: i.event,
            }),
              this._changeDetectorRef.markForCheck();
          }),
          e.entered.subscribe(i => {
            this.entered.emit({
              container: i.container.data,
              item: this,
              currentIndex: i.currentIndex,
            });
          }),
          e.exited.subscribe(i => {
            this.exited.emit({ container: i.container.data, item: this });
          }),
          e.dropped.subscribe(i => {
            this.dropped.emit({
              previousIndex: i.previousIndex,
              currentIndex: i.currentIndex,
              previousContainer: i.previousContainer.data,
              container: i.container.data,
              isPointerOverContainer: i.isPointerOverContainer,
              item: this,
              distance: i.distance,
              dropPoint: i.dropPoint,
              event: i.event,
            });
          });
      }
      _assignDefaults(e) {
        let {
          lockAxis: i,
          dragStartDelay: n,
          constrainPosition: r,
          previewClass: a,
          boundaryElement: h,
          draggingDisabled: l,
          rootElementSelector: c,
          previewContainer: d,
        } = e;
        (this.disabled = l ?? !1),
          (this.dragStartDelay = n || 0),
          i && (this.lockAxis = i),
          r && (this.constrainPosition = r),
          a && (this.previewClass = a),
          h && (this.boundaryElement = h),
          c && (this.rootElementSelector = c),
          d && (this.previewContainer = d);
      }
      _setupHandlesListener() {
        this._handles
          .pipe(
            vt(e => {
              let i = e.map(n => n.element);
              this._selfHandle &&
                this.rootElementSelector &&
                i.push(this.element),
                this._dragRef.withHandles(i);
            }),
            mt(e => Z(...e.map(i => i._stateChanges.pipe(ft(i))))),
            C(this._destroyed),
          )
          .subscribe(e => {
            let i = this._dragRef,
              n = e.element.nativeElement;
            e.disabled ? i.disableHandle(n) : i.enableHandle(n);
          });
      }
    };
    (t._dragInstances = []),
      (t.ɵfac = function (i) {
        return new (i || t)(
          u(q),
          u(fe, 12),
          u(L),
          u(k),
          u(St),
          u(ge, 8),
          u(Ot, 8),
          u(_e),
          u(xt),
          u(se, 10),
          u(rt, 12),
        );
      }),
      (t.ɵdir = $({
        type: t,
        selectors: [['', 'cdkDrag', '']],
        hostAttrs: [1, 'cdk-drag'],
        hostVars: 4,
        hostBindings: function (i, n) {
          i & 2 &&
            Et('cdk-drag-disabled', n.disabled)(
              'cdk-drag-dragging',
              n._dragRef.isDragging(),
            );
        },
        inputs: {
          data: [0, 'cdkDragData', 'data'],
          lockAxis: [0, 'cdkDragLockAxis', 'lockAxis'],
          rootElementSelector: [0, 'cdkDragRootElement', 'rootElementSelector'],
          boundaryElement: [0, 'cdkDragBoundary', 'boundaryElement'],
          dragStartDelay: [0, 'cdkDragStartDelay', 'dragStartDelay'],
          freeDragPosition: [0, 'cdkDragFreeDragPosition', 'freeDragPosition'],
          disabled: [2, 'cdkDragDisabled', 'disabled', J],
          constrainPosition: [
            0,
            'cdkDragConstrainPosition',
            'constrainPosition',
          ],
          previewClass: [0, 'cdkDragPreviewClass', 'previewClass'],
          previewContainer: [0, 'cdkDragPreviewContainer', 'previewContainer'],
          scale: [2, 'cdkDragScale', 'scale', Tt],
        },
        outputs: {
          started: 'cdkDragStarted',
          released: 'cdkDragReleased',
          ended: 'cdkDragEnded',
          entered: 'cdkDragEntered',
          exited: 'cdkDragExited',
          dropped: 'cdkDragDropped',
          moved: 'cdkDragMoved',
        },
        exportAs: ['cdkDrag'],
        standalone: !0,
        features: [X([{ provide: rt, useExisting: t }]), Y, bt],
      }));
    let o = t;
    return o;
  })();
export { Ze as a, We as b };
