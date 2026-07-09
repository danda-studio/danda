"use client";

import type { MotionValue } from "motion/react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCounter, PROJECTS } from "@/entities/project";
import { cn } from "@/shared/lib/cn";
import { Tag } from "@/shared/ui/tag";

const PEEK_STEP = 1; // rem the not-yet-current cards peek out, per step behind
const PEEK_SCALE_STEP = 0.08; // the not-yet-current cards shrink slightly, per step behind
const EXIT_DISTANCE = 50; // rem an already-current card travels up when it's removed
const DWELL = 0.15; // half-width (in step units) a card holds fully in place at its peak

function useCardMotion(step: MotionValue<number>, index: number) {
  const y = useTransform(step, (v) => {
    const distance = v - index;
    if (Math.abs(distance) <= DWELL)
      return "0rem";
    return distance < 0 ? `${PEEK_STEP * (distance + DWELL)}rem` : `${-EXIT_DISTANCE * Math.min(distance - DWELL, 1)}rem`;
  });
  const scaleX = useTransform(step, (v) => {
    const distance = v - index;
    if (Math.abs(distance) <= DWELL)
      return 1;
    return distance < 0 ? 1 + PEEK_SCALE_STEP * (distance + DWELL) : 1;
  });
  return { y, scaleX };
}

// Static bottom scrim so the card's white text stays legible over busy background art —
// present at all times regardless of scroll position, matching Figma where all 3 project
// cards have this same soft blur baked into the bottom of their background image.
function BottomBlurScrim() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 backdrop-blur-[1.875rem]"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 40%, black 80%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 80%)",
      }}
    />
  );
}

interface StackCardProps {
  background: ReactNode;
  name: string;
  description: string;
  tags: string[];
  current: string;
  y: MotionValue<string> | string;
  scaleX: MotionValue<number> | number;
  zClassName: string;
}

function StackCard({ background, name, description, tags, current, y, scaleX, zClassName }: StackCardProps) {
  return (
    <motion.div className={cn("absolute inset-0 origin-top overflow-clip rounded-[1.5rem] bg-black", zClassName)} style={{ y, scaleX }}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {background}
      </div>
      <BottomBlurScrim />
      <div className="absolute top-[25.5rem] left-[1.5rem] flex w-[17.6875rem] flex-col items-start gap-[1.25rem]">
        <div className="flex flex-col items-start gap-[0.75rem] text-white [word-break:break-word]">
          <p className="font-(family-name:--font-manrope-sans) text-[1.75rem] leading-none font-semibold tracking-[-0.0525rem] whitespace-nowrap">
            {name}
          </p>
          <p className="h-[3.25rem] w-[15.5625rem] font-(family-name:--font-manrope-sans) text-[0.875rem] leading-[1.2] font-medium opacity-76">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-[0.5rem]">
          {tags.map(tag => (
            <Tag key={tag} className="rounded-[1rem] border-[0.0438rem] px-[1rem] py-[0.75rem] text-[0.875rem] tracking-[-0.0263rem]">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <ProjectCounter
        current={current}
        total="03"
        className="absolute top-[1.5rem] left-[1.5rem] gap-[0.25rem]"
        numberClassName="text-[1.5rem] tracking-[-0.045rem]"
        totalClassName="text-[1rem] tracking-[-0.03rem]"
      />
    </motion.div>
  );
}

export function ProjectsSectionMobile() {
  const [selix, drSmile, foodDelivery] = [...PROJECTS].reverse();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, 1], [0, PROJECTS.length - 1]);

  const card0 = useCardMotion(step, 0);
  const card1 = useCardMotion(step, 1);
  const card2 = useCardMotion(step, 2);

  return (
    <section id="projects-mobile" className="relative px-3 py-10">
      <h2 className="w-[13.4375rem] font-(family-name:--font-manrope-sans) text-[2rem] leading-none font-semibold tracking-[-0.06rem] whitespace-nowrap text-black [word-break:break-word]">
        Наши проекты
      </h2>

      <div ref={trackRef} className="relative mx-auto mt-14 h-[226.5rem] w-[21rem]">
        <div className="sticky top-0 flex h-dvh items-center">
          <div className="relative h-[42.5rem] w-full">
            <StackCard
              background={<img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/selix-card.png" />}
              name={selix.name}
              description={selix.description}
              tags={selix.tags}
              current="03"
              y={card0.y}
              scaleX={card0.scaleX}
              zClassName="z-30"
            />
            <StackCard
              background={<img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/drsmile-card.png" />}
              name={drSmile.name}
              description={drSmile.description}
              tags={drSmile.tags}
              current="02"
              y={card1.y}
              scaleX={card1.scaleX}
              zClassName="z-20"
            />
            <StackCard
              background={<img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/fooddelivery-card.png" />}
              name={foodDelivery.name}
              description={foodDelivery.description}
              tags={foodDelivery.tags}
              current="01"
              y={card2.y}
              scaleX={card2.scaleX}
              zClassName="z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
