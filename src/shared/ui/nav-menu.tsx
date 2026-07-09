"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/cn";

const NAV_ITEMS = [
  { label: "Проекты", slug: "projects" },
  { label: "Процесс", slug: "process" },
  { label: "Услуги", slug: "services" },
  { label: "Отзывы", slug: "testimonials" },
];

interface NavMenuProps {
  /**
   * Label/icon shown inside the collapsed pill — chrome (background, radius, padding) is
   * supplied separately via `closedClassName` so the same shared-layout element can own both
   * the collapsed and expanded look and animate smoothly between them.
   */
  closedContent: ReactNode;
  closedClassName: string;
  /**
   * Set as a Framer-tracked `style` value (not a Tailwind class) so it can crossfade smoothly
   * into the panel's black background as part of the shared layoutId transition — a static
   * `bg-*` class would just snap instantly instead of animating.
   */
  closedBg?: string;
  closedAriaLabel?: string;
  /** Opens on hover for desktop pointers, opens on tap for mobile. */
  mode: "hover" | "click";
  /** Appended to each section id — the mobile tree uses distinct ids from the desktop tree. */
  idSuffix?: string;
  align?: "center" | "right";
}

function MenuArrowIcon() {
  return <img alt="" className="size-[0.75rem]" src="/landing/desktop-6/menu-arrow.svg" />;
}

export function NavMenu({ closedContent, closedClassName, closedBg = "var(--dd-gray-200)", closedAriaLabel = "Меню", mode, idSuffix = "", align = "center" }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== "click" || !open)
      return;
    function handlePointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mode, open]);

  function handleItemClick(slug: string) {
    document.getElementById(`${slug}${idSuffix}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={mode === "hover" ? () => setOpen(true) : undefined}
      onMouseLeave={mode === "hover" ? () => setOpen(false) : undefined}
    >
      {/* Both states share `layoutId`, so Framer treats them as the same element and animates
          the FLIP between their two boxes (position, size, radius) — the button visibly
          stretches into the panel instead of a separate dropdown appearing over it. */}
      <AnimatePresence initial={false}>
        {!open && (
          <motion.div
            key="closed"
            layoutId="nav-menu-shell"
            initial={{ backgroundColor: closedBg }}
            animate={{ backgroundColor: closedBg }}
            exit={{ backgroundColor: "#000000", transition: { duration: 0.28 } }}
            transition={{ layout: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
            className={closedClassName}
            role="button"
            tabIndex={0}
            aria-label={closedAriaLabel}
            aria-expanded={false}
            onClick={mode === "click" ? () => setOpen(true) : undefined}
            onKeyDown={mode === "click"
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }
              : undefined}
          >
            {/* Fades out fast on its own so the label doesn't visibly stretch while the
                shared box (tracked by layoutId above) is still resizing into the panel. */}
            <motion.div exit={{ opacity: 0, transition: { duration: 0.08 } }} className="flex size-full items-center justify-center">
              {closedContent}
            </motion.div>
          </motion.div>
        )}

        {open && (
          <motion.div
            key="open"
            layoutId="nav-menu-shell"
            initial={{ backgroundColor: closedBg }}
            animate={{ backgroundColor: "#000000", transition: { duration: 0.28 } }}
            exit={{ backgroundColor: closedBg, transition: { duration: 0.28 } }}
            transition={{ layout: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
            className={cn(
              "absolute top-0 z-50 flex w-[16.125rem] flex-col items-center gap-[1.5rem] rounded-[1.25rem] px-[1.25rem] py-[1rem]",
              align === "center" ? "left-1/2 -translate-x-1/2" : "right-0",
            )}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12 } }}
              exit={{ opacity: 0, transition: { duration: 0.06 } }}
              className="font-(family-name:--font-manrope-sans) text-[1rem] leading-[1.1] font-medium tracking-[-0.025rem] text-white"
            >
              Меню
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12 } }}
              exit={{ opacity: 0, transition: { duration: 0.06 } }}
              className="flex w-full flex-col items-start gap-[1.25rem]"
            >
              {NAV_ITEMS.map((item, i) => (
                <div key={item.slug} className="flex w-full flex-col items-start gap-[1.25rem]">
                  {i > 0 && <div className="h-0 w-full border-t-[0.04375rem] border-white/29" />}
                  <button
                    type="button"
                    className="group flex w-full cursor-pointer items-center justify-between"
                    onClick={() => handleItemClick(item.slug)}
                  >
                    <span className="font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium tracking-[-0.0625rem] text-white">
                      {item.label}
                    </span>
                    <span className="flex items-center justify-center rounded-[0.75rem] border-[0.04375rem] border-white/29 px-[0.75rem] py-[0.5rem] group-hover:border-transparent group-hover:bg-brand">
                      <MenuArrowIcon />
                    </span>
                  </button>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
