"use client";

import type { MotionValue } from "motion/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { SERVICES } from "@/entities/service";
import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { Tag } from "@/shared/ui/tag";

const TOTAL_STEPS = SERVICES.length - 1;
// Blue tint matching Figma's rgba(1,96,251,…) overlay — cards not yet in front fade toward
// the section's own background color instead of blurring, so they visually recede into it.
const OVERLAY_RGB = "1, 96, 251";

interface StackCardData {
  image: string;
  rotateDeg: number;
  leftRem: number | "center";
  boxWidthRem: number;
  boxHeightRem: number;
  titleBottomRem: number;
  titleWidthRem: number;
  // One value per step (0..3), in rem — matches Figma's 4 authored snapshots exactly;
  // Framer linearly interpolates between them as the user scrolls.
  topKeyframes: [number, number, number, number];
  overlayOpacityKeyframes: [number, number, number, number];
}

const CARDS: StackCardData[] = [
  {
    image: "/landing/desktop-6/services-card-sites.png",
    rotateDeg: -15,
    leftRem: "center",
    boxWidthRem: 30.1357,
    boxHeightRem: 30.4892,
    titleBottomRem: 4.375,
    titleWidthRem: 16.75,
    topKeyframes: [4.1875, -26.4375, -55.1875, -55.1875],
    overlayOpacityKeyframes: [0, 0, 0, 0],
  },
  {
    image: "/landing/desktop-6/services-card-design.png",
    rotateDeg: 4,
    leftRem: "center",
    boxWidthRem: 26.1843,
    boxHeightRem: 26.6481,
    titleBottomRem: 4.375,
    titleWidthRem: 7,
    topKeyframes: [11.25, 5.625, -23.125, -53.125],
    overlayOpacityKeyframes: [0.24, 0, 0, 0],
  },
  {
    image: "/landing/desktop-6/services-card-mobileapps.png",
    rotateDeg: -4,
    leftRem: 29.5,
    boxWidthRem: 26.1843,
    boxHeightRem: 26.6481,
    titleBottomRem: 6.75,
    titleWidthRem: 18.3125,
    topKeyframes: [11.4375, 8.9375, 6.4375, -23.5625],
    overlayOpacityKeyframes: [0.68, 0.24, 0, 0],
  },
  {
    image: "/landing/desktop-6/services-card-support.png",
    rotateDeg: -14,
    leftRem: 27.625,
    boxWidthRem: 29.8203,
    boxHeightRem: 30.1845,
    titleBottomRem: 6.75,
    titleWidthRem: 12.0625,
    topKeyframes: [9.875, 9.875, 9.25, 5.5],
    overlayOpacityKeyframes: [0.88, 0.68, 0.24, 0],
  },
];

function StackCard({ card, title, step }: { card: StackCardData; title: string; step: MotionValue<number> }) {
  const top = useTransform(step, [0, 1, 2, 3], card.topKeyframes.map(v => `${v}rem`));
  const overlayOpacity = useTransform(step, [0, 1, 2, 3], card.overlayOpacityKeyframes);

  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        top,
        left: card.leftRem === "center" ? "50%" : `${card.leftRem}rem`,
        width: `${card.boxWidthRem}rem`,
        height: `${card.boxHeightRem}rem`,
        x: card.leftRem === "center" ? "-50%" : undefined,
      }}
    >
      <div className="flex-none" style={{ transform: `rotate(${card.rotateDeg}deg)` }}>
        <div className="relative h-[25rem] w-[24.5rem] overflow-clip rounded-[1.5rem] bg-white shadow-[1rem_-0.8125rem_4.29375rem_0.3125rem_var(--dd-shadow-transparent)]">
          <img alt="" className="absolute top-0 left-1/2 h-[19.5rem] w-[24.5rem] max-w-none -translate-x-1/2 object-cover" src={card.image} />
          <p
            className="absolute left-[2rem] font-(family-name:--font-manrope-sans) text-[2rem] leading-[1.2] font-semibold tracking-[-0.0625rem] text-black [word-break:break-word]"
            style={{ bottom: `${card.titleBottomRem}rem`, width: `${card.titleWidthRem}rem` }}
          >
            {title}
          </p>
          <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundColor: `rgb(${OVERLAY_RGB})`, opacity: overlayOpacity }} />
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesBanner() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, 1], [0, TOTAL_STEPS]);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(step, "change", (latest) => {
    const index = Math.round(Math.min(Math.max(latest, 0), TOTAL_STEPS));
    setActiveIndex(prev => (prev === index ? prev : index));
  });

  const active = SERVICES[activeIndex];

  return (
    <section id="services" className="relative -mt-[2.75rem]">
      <div ref={trackRef} className="relative mx-auto h-[200rem] w-[87rem]">
        <div className="sticky top-0 flex h-dvh items-center">
          <div className="relative h-[47.375rem] w-full overflow-clip rounded-[2rem] bg-brand">
            <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover" src="/landing/desktop-6/services-bg-new.svg" />

            {/* Rendered back-to-front (index 3 first) so the earliest-revealed card (index 0)
                always paints on top, matching Figma's own layer order — each card's z-order
                is fixed by its reveal position, not by which one is currently active, exactly
                like the deck-of-cards mechanic in the projects section. */}
            {[...CARDS].reverse().map((card, reversedI) => {
              const i = CARDS.length - 1 - reversedI;
              return <StackCard key={SERVICES[i].title} card={card} title={SERVICES[i].title} step={step} />;
            })}

            <div className="absolute top-[27.5rem] left-[15rem] flex h-0 w-[20rem] -translate-x-1/2 -translate-y-full flex-col items-center justify-end text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-(family-name:--font-inter-sans) text-[2.25rem] leading-none font-medium tracking-[-0.09rem] text-white [word-break:break-word]"
                >
                  {active.heading}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="absolute top-[27.375rem] left-[70.8125rem] flex h-0 w-[19.875rem] -translate-x-1/2 -translate-y-full flex-col items-center justify-end text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-(family-name:--font-inter-sans) text-[1.5rem] leading-[1.1] font-normal tracking-[-0.06rem] text-white [word-break:break-word]"
                >
                  {active.description.map(part => (
                    <span key={part.text} className={part.dim ? "text-(--dd-overlay-on-dark-strong)" : ""}>{part.text}</span>
                  ))}
                </motion.p>
              </AnimatePresence>
            </div>

            <Button
              variant="dark"
              className="absolute top-[29.375rem] left-[62.75rem] pt-[0.5rem] pb-[0.625rem]"
              leadingIcon={<BoxiconsSend className="relative size-[1.75rem] -rotate-90" />}
              render={<a href="#contact" />}
              nativeButton={false}
            >
              Обсудить проект
            </Button>

            {active.techBadges.length > 0 && (
              <div className="absolute top-[42.125rem] left-1/2 flex -translate-x-1/2 items-center justify-center gap-[0.5rem]">
                {active.techBadges.map(badge => (
                  <Tag
                    key={badge.name}
                    icon={<img alt="" className="pointer-events-none size-[1.25rem] object-cover" src={badge.icon} />}
                  >
                    {badge.name}
                  </Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
