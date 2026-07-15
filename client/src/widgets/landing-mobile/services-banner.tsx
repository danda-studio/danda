"use client";

import type { MotionValue } from "motion/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { SERVICES } from "@/entities/service";
import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { Tag } from "@/shared/ui/tag";

const TOTAL_STEPS = SERVICES.length - 1;
// Same blue tint as desktop — cards not yet in front fade toward the section's own
// background color instead of blurring, so they visually recede into it.
const OVERLAY_RGB = "1, 96, 251";

interface StackCardData {
  image: string;
  rotateDeg: number;
  leftRem: number | "center";
  boxWidthRem: number;
  boxHeightRem: number;
  titleBottomRem: number;
  titleWidthRem: number;
  // One value per step (0..3), in rem. Derived from the desktop keyframes scaled by this
  // section's own card-size ratio (mobile cards are a uniform ~0.6377× of desktop's),
  // since Figma only authored per-state positions at the desktop reference size.
  topKeyframes: [number, number, number, number];
  overlayOpacityKeyframes: [number, number, number, number];
}

const CARDS: StackCardData[] = [
  {
    image: "/landing/mobile/services-card4.png",
    rotateDeg: -15,
    leftRem: "center",
    boxWidthRem: 19.231,
    boxHeightRem: 19.442,
    titleBottomRem: 2.79,
    titleWidthRem: 10.68,
    topKeyframes: [0.4375, -19.09, -37.42, -37.42],
    overlayOpacityKeyframes: [0, 0, 0, 0],
  },
  {
    image: "/landing/mobile/services-card3.png",
    rotateDeg: 4,
    leftRem: "center",
    boxWidthRem: 16.7124,
    boxHeightRem: 16.9897,
    titleBottomRem: 2.79,
    titleWidthRem: 4.46,
    topKeyframes: [3.7625, 0.176, -18.16, -37.29],
    overlayOpacityKeyframes: [0.24, 0, 0, 0],
  },
  {
    image: "/landing/mobile/services-card2.png",
    rotateDeg: -4,
    leftRem: 1.796,
    boxWidthRem: 16.7124,
    boxHeightRem: 16.9897,
    titleBottomRem: 4.30,
    titleWidthRem: 11.68,
    topKeyframes: [4.151, 2.557, 0.962, -18.17],
    overlayOpacityKeyframes: [0.68, 0.24, 0, 0],
  },
  {
    image: "/landing/mobile/services-card1.png",
    rotateDeg: -14,
    leftRem: 0.75,
    boxWidthRem: 19.03,
    boxHeightRem: 19.2475,
    titleBottomRem: 4.30,
    titleWidthRem: 7.69,
    topKeyframes: [2.69, 2.69, 2.291, -0.10],
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
        <div className="relative h-[15.9375rem] w-[15.63875rem] overflow-clip rounded-[0.99613rem] bg-white">
          <div className="absolute top-0 left-1/2 h-[12.4375rem] w-[15.63875rem] -translate-x-1/2">
            <Image alt="" fill quality={55} sizes="300px" className="object-cover" src={card.image} />
          </div>
          <p
            className="absolute left-[1.25rem] font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-semibold tracking-[-0.04rem] text-black [word-break:break-word]"
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

export function ServicesBannerMobile() {
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
    <section id="services-mobile" className="relative px-3 pt-5 pb-0">
      <div ref={trackRef} className="relative mx-auto h-[160rem] w-[21rem]">
        <div className="sticky top-0 flex h-dvh items-center">
          <div className="relative h-[45rem] w-full overflow-clip rounded-[1.5rem] bg-brand">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[30.625rem] w-[49.6875rem] -translate-x-1/2 -translate-y-[calc(50%+7.75rem)]">
              <Image alt="" fill sizes="795px" className="object-cover" src="/landing/mobile/services-dots.svg" />
            </div>
            <div className="pointer-events-none absolute top-[16.5rem] left-0 h-[25rem] w-[21rem] bg-gradient-to-t from-brand from-[39.21%] to-(--dd-fade-black-transparent)" />

            {/* Rendered back-to-front (index 3 first) so the earliest-revealed card (index 0)
                always paints on top, matching the desktop stacking order. */}
            {[...CARDS].reverse().map((card, reversedI) => {
              const i = CARDS.length - 1 - reversedI;
              return <StackCard key={SERVICES[i].title} card={card} title={SERVICES[i].title} step={step} />;
            })}

            <div className="absolute top-[23.75rem] left-1/2 flex w-[18rem] -translate-x-1/2 flex-col items-center gap-5 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-(family-name:--font-inter-sans) text-[1.5rem] leading-none font-medium tracking-[-0.03rem] text-white [word-break:break-word]"
                >
                  {active.heading}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="w-[16.875rem] font-(family-name:--font-inter-sans) text-[0.875rem] leading-[1.1] text-white [word-break:break-word]"
                >
                  {active.description.map(part => (
                    <span key={part.text} className={part.dim ? "text-(--dd-overlay-on-dark-strong)" : ""}>{part.text}</span>
                  ))}
                </motion.p>
              </AnimatePresence>
              {active.techBadges.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {active.techBadges.map(badge => (
                    <Tag
                      key={badge.name}
                      className="rounded-[0.625rem] border-[0.04375rem] px-3 py-2 text-[0.75rem] tracking-[-0.0225rem]"
                      icon={<Image alt="" width={12} height={12} className="pointer-events-none size-3 object-cover" src={badge.icon} />}
                    >
                      {badge.name}
                    </Tag>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="dark"
              className="absolute top-[40rem] left-1/2 -translate-x-1/2 rounded-[1rem] py-1 pr-5 pl-1 text-[1rem]"
              leadingIcon={<BoxiconsSend className="relative size-6 -rotate-90" />}
              render={<a href="#contact-mobile" />}
              nativeButton={false}
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
