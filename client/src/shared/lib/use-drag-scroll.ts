import type { RefObject } from "react";
import { useEffect } from "react";

/** Enables mouse-drag and vertical-wheel → horizontal scroll on overflow carousels. */
export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el)
      return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch")
        return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(event.pointerId);
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging)
        return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 3)
        moved = true;
      el.scrollLeft = startScroll - dx;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging)
        return;
      dragging = false;
      el.style.cursor = "";
      if (moved) {
        // Prevent accidental click on child links/buttons after a drag.
        const blockClick = (clickEvent: MouseEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          el.removeEventListener("click", blockClick, true);
        };
        el.addEventListener("click", blockClick, true);
      }
      try {
        el.releasePointerCapture(event.pointerId);
      }
      catch {
        // ignore if already released
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX))
        return;
      if (el.scrollWidth <= el.clientWidth)
        return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
}
