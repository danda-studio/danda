"use client";

import type { MotionValue } from "motion/react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCounter, PROJECTS } from "@/entities/project";
import { cn } from "@/shared/lib/cn";
import { BlurredStaggerText } from "@/shared/ui/blurred-stagger-text";
import { Tag } from "@/shared/ui/tag";

const PEEK_STEP = 16; // px the not-yet-current cards peek out, per step behind
const PEEK_SCALE_STEP = 0.08; // the not-yet-current cards shrink slightly, per step behind
const EXIT_DISTANCE = 900; // px an already-current card travels up when it's removed
const DWELL = 0.15; // half-width (in step units) a card holds fully in place at its peak, so the handoff never leaves a gap

function useCardMotion(step: MotionValue<number>, index: number) {
  const y = useTransform(step, (v) => {
    const distance = v - index;
    if (Math.abs(distance) <= DWELL)
      return 0;
    return distance < 0 ? PEEK_STEP * (distance + DWELL) : -EXIT_DISTANCE * Math.min(distance - DWELL, 1);
  });
  // Only the width narrows for cards waiting their turn — the height always stays full,
  // so a peeking card's bottom edge never falls short of the exiting card's (which only
  // ever translates, never scales) and leaves a gap at the bottom of the stack.
  const scaleX = useTransform(step, (v) => {
    const distance = v - index;
    if (Math.abs(distance) <= DWELL)
      return 1;
    return distance < 0 ? 1 + PEEK_SCALE_STEP * (distance + DWELL) : 1;
  });
  return { y, scaleX };
}

function FoodDeliveryBackground() {
  return (
    <>
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/desktop-6/food-delivery-bg.png" />
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/desktop-6/food-delivery-bg2.png" />
    </>
  );
}

function DrSmileBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-(--dd-blue-200) to-(--dd-blue-300) to-[62.566%]" />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute top-[-5.84%] left-[3.19%] h-[94.71%] w-[93.65%] max-w-none" src="/landing/desktop-6/frame2136141697.png" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute top-[-2.83%] left-0 h-[116.04%] w-full max-w-none" src="/landing/desktop-6/frame2136141698.png" />
      </div>
      <div className="absolute top-[30rem] left-[-12.8125rem] h-[26.625rem] w-[45rem]">
        <div className="absolute inset-[-56.64%_-33.51%]">
          <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/ellipse11731.svg" />
        </div>
      </div>
    </>
  );
}

function SelixBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-(--dd-gray-100)" />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute top-[-3.1%] left-[0.02%] h-[121.24%] w-full max-w-none" src="/landing/desktop-6/frame2136141693.jpg" />
      </div>
      <img alt="" className="absolute size-full max-w-none object-cover" src="/landing/desktop-6/frame2136141694.png" />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute top-[-13.88%] left-0 h-[137.37%] w-full max-w-none" src="/landing/desktop-6/frame2136141695.jpg" />
      </div>
    </>
  );
}

function SlideDot({ step, index }: { step: MotionValue<number>; index: number }) {
  const fillWidth = useTransform(step, v => `${Math.min(Math.max(index + 1 - v, 0), 1) * 100}%`);
  return (
    <div className="h-[0.375rem] w-[2.4375rem] overflow-hidden rounded-full bg-white/24">
      <motion.div className="h-full rounded-full bg-white" style={{ width: fillWidth }} />
    </div>
  );
}

function SlideDots({ step, total }: { step: MotionValue<number>; total: number }) {
  return (
    <div className="pointer-events-none absolute right-[2.25rem] bottom-[2.625rem] flex items-center gap-[0.375rem]">
      {Array.from({ length: total }, (_, i) => total - 1 - i).map(i => (
        <SlideDot key={i} step={step} index={i} />
      ))}
    </div>
  );
}

interface StackCardProps {
  background: ReactNode;
  name: string;
  description: string;
  tags: string[];
  current: string;
  y: MotionValue<number> | number;
  scaleX: MotionValue<number> | number;
  zClassName: string;
  step: MotionValue<number>;
  totalProjects: number;
}

function StackCard({ background, name, description, tags, current, y, scaleX, zClassName, step, totalProjects }: StackCardProps) {
  return (
    <motion.div className={cn("absolute inset-0 origin-top overflow-clip rounded-[2rem]", zClassName)} style={{ y, scaleX }}>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem]">
        {background}
      </div>
      <div className="absolute top-[32.625rem] left-[2.25rem] flex w-[26.5rem] flex-col items-start gap-[1.5rem]">
        <div className="flex w-[21.125rem] flex-col items-start gap-[1.25rem] text-white [word-break:break-word]">
          <p className="font-(family-name:--font-manrope-sans) text-[2.5rem] leading-none font-semibold tracking-[-0.075rem] whitespace-nowrap">
            {name}
          </p>
          <p className="h-[4.6875rem] font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium opacity-76">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-[0.5rem]">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <ProjectCounter
        current={current}
        total="03"
        className="absolute top-[2.25rem] left-[80.25rem] gap-[0.25rem]"
        numberClassName="text-[2.25rem] tracking-[-0.0675rem]"
        totalClassName="text-[1.25rem] tracking-[-0.0375rem]"
      />
      <SlideDots step={step} total={totalProjects} />
    </motion.div>
  );
}

export function ProjectsSection() {
  const [foodDelivery, drSmile, selix] = PROJECTS;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, 1], [0, PROJECTS.length - 1]);

  const card0 = useCardMotion(step, 0);
  const card1 = useCardMotion(step, 1);
  const card2 = useCardMotion(step, 2);

  return (
    <section className="relative -mt-[17.875rem] px-6 py-16">
      <div className="mx-auto flex max-w-[87rem] items-baseline justify-between">
        <h2 className="font-(family-name:--font-manrope-sans) text-[3.5rem] leading-none font-semibold tracking-[-0.105rem] whitespace-nowrap text-black [word-break:break-word]">
          <BlurredStaggerText text="Наши проекты" />
        </h2>
        <p className="text-center font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium tracking-[-0.0625rem] whitespace-nowrap text-(--dd-gray-300)">
          От задачи к решению
        </p>
      </div>

      <div ref={trackRef} className="relative mx-auto mt-[5.5rem] h-[450vh] w-[87rem]">
        <div className="sticky top-24 h-[47.5rem] w-full">
          <StackCard background={<SelixBackground />} name={selix.name} description={selix.description} tags={selix.tags} current="03" y={card0.y} scaleX={card0.scaleX} zClassName="z-30" step={step} totalProjects={PROJECTS.length} />
          <StackCard background={<DrSmileBackground />} name={drSmile.name} description={drSmile.description} tags={drSmile.tags} current="02" y={card1.y} scaleX={card1.scaleX} zClassName="z-20" step={step} totalProjects={PROJECTS.length} />
          <StackCard background={<FoodDeliveryBackground />} name={foodDelivery.name} description={foodDelivery.description} tags={foodDelivery.tags} current="01" y={card2.y} scaleX={card2.scaleX} zClassName="z-10" step={step} totalProjects={PROJECTS.length} />
        </div>
      </div>
    </section>
  );
}
