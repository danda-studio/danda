import type { RefObject } from "react";
import { useEffect } from "react";

/** Enables mouse-drag (with inertia) and vertical-wheel → horizontal scroll on overflow carousels. */
export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el)
      return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    let pointerId: number | null = null;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;
    let rafId = 0;
    let settleTimer = 0;

    const cards = () => Array.from(el.children) as HTMLElement[];

    const nearestScrollLeft = (from = el.scrollLeft) => {
      const items = cards();
      if (items.length === 0)
        return from;

      let best = from;
      let bestDist = Infinity;
      for (const item of items) {
        // Center the card in the scroller viewport when possible.
        const target = item.offsetLeft - (el.clientWidth - item.clientWidth) / 2;
        const dist = Math.abs(from - target);
        if (dist < bestDist) {
          bestDist = dist;
          best = Math.max(0, Math.min(target, el.scrollWidth - el.clientWidth));
        }
      }
      return best;
    };

    const clearInertia = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (settleTimer) {
        window.clearTimeout(settleTimer);
        settleTimer = 0;
      }
    };

    const restoreSnap = () => {
      el.style.removeProperty("scroll-snap-type");
    };

    const disableSnap = () => {
      el.style.scrollSnapType = "none";
    };

    const smoothSettle = (fromVelocity = 0) => {
      clearInertia();
      disableSnap();

      // Nudge target in the swipe direction so a decisive flick advances a card.
      const projected = el.scrollLeft - fromVelocity * 180;
      const target = nearestScrollLeft(projected);
      const start = el.scrollLeft;
      const distance = target - start;

      if (Math.abs(distance) < 1) {
        el.scrollLeft = target;
        restoreSnap();
        return;
      }

      const duration = Math.min(520, Math.max(280, Math.abs(distance) * 0.55));
      const startedAt = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - startedAt) / duration);
        // easeOutCubic
        const eased = 1 - (1 - t) ** 3;
        el.scrollLeft = start + distance * eased;
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
          return;
        }
        el.scrollLeft = target;
        rafId = 0;
        restoreSnap();
      };

      rafId = requestAnimationFrame(tick);
    };

    const stopDragStyles = () => {
      el.style.cursor = "";
      el.style.userSelect = "";
      el.style.removeProperty("-webkit-user-select");
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch")
        return;
      if (event.button !== 0)
        return;

      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea, select, label"))
        return;

      event.preventDefault();
      clearInertia();
      disableSnap();

      dragging = true;
      moved = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      lastX = event.clientX;
      lastTime = performance.now();
      velocity = 0;
      startScroll = el.scrollLeft;
      el.style.userSelect = "none";
      el.style.setProperty("-webkit-user-select", "none");
      el.style.cursor = "grabbing";
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== pointerId)
        return;
      event.preventDefault();

      const now = performance.now();
      const dx = event.clientX - startX;
      const frameDx = event.clientX - lastX;
      const dt = Math.max(1, now - lastTime);
      // px/ms, smoothed a bit so flicks feel natural
      const instant = frameDx / dt;
      velocity = velocity * 0.7 + instant * 0.3;
      lastX = event.clientX;
      lastTime = now;

      if (Math.abs(dx) > 2)
        moved = true;

      el.scrollLeft = startScroll - dx;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging || (pointerId !== null && event.pointerId !== pointerId))
        return;

      const didMove = moved;
      const releaseVelocity = velocity;
      dragging = false;
      pointerId = null;
      stopDragStyles();

      if (didMove) {
        const blockClick = (clickEvent: MouseEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          el.removeEventListener("click", blockClick, true);
        };
        el.addEventListener("click", blockClick, true);
        smoothSettle(releaseVelocity);
      }
      else {
        restoreSnap();
      }

      try {
        el.releasePointerCapture(event.pointerId);
      }
      catch {
        // ignore if already released
      }
    };

    const onLostPointerCapture = () => {
      if (!dragging)
        return;
      dragging = false;
      pointerId = null;
      stopDragStyles();
      smoothSettle(velocity);
    };

    const onDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth)
        return;

      // Keep vertical wheel for page scroll. Only hijack clearly-horizontal
      // gestures (trackpad sideways / shift+wheel) so hovering cards doesn't trap the page.
      const horizontalIntent
        = Math.abs(event.deltaX) > Math.abs(event.deltaY)
          || event.shiftKey;

      if (!horizontalIntent)
        return;

      const delta = event.shiftKey && Math.abs(event.deltaY) >= Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

      if (delta === 0)
        return;

      event.preventDefault();
      clearInertia();
      disableSnap();
      el.scrollLeft += delta;

      if (settleTimer)
        window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        settleTimer = 0;
        smoothSettle(0);
      }, 90);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("lostpointercapture", onLostPointerCapture);
    el.addEventListener("dragstart", onDragStart);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      clearInertia();
      restoreSnap();
      stopDragStyles();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("lostpointercapture", onLostPointerCapture);
      el.removeEventListener("dragstart", onDragStart);
      el.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
}
