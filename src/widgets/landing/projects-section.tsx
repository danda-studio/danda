"use client";

import type { MotionValue } from "motion/react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCounter, PROJECTS } from "@/entities/project";
import { BlurredStaggerText } from "@/shared/ui/blurred-stagger-text";
import { Tag } from "@/shared/ui/tag";

function FoodDeliveryBackground() {
  return (
    <>
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/desktop-6/food-delivery-bg.png" />
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/desktop-6/food-delivery-bg2.png" />
      <div className="absolute top-[44.875rem] left-[77rem] h-[0.375rem] w-[7.75rem]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/food-delivery-slide.svg" />
      </div>
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
      <div className="absolute top-[44.875rem] left-[73rem] h-[0.375rem] w-[11.75rem]">
        <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/frame2147221819.svg" />
      </div>
    </>
  );
}

interface StackCardProps {
  background: ReactNode;
  name: string;
  description: string;
  tags: string[];
  current: string;
  y: MotionValue<number> | number;
  scale: MotionValue<number> | number;
}

function StackCard({ background, name, description, tags, current, y, scale }: StackCardProps) {
  return (
    <motion.div className="absolute inset-0 origin-top overflow-clip rounded-[2rem]" style={{ y, scale }}>
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
    </motion.div>
  );
}

export function ProjectsSection() {
  const [foodDelivery, drSmile, selix] = PROJECTS;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  const drSmileY = useTransform(scrollYProgress, [0, 0.5, 1], [-16, 0, 0]);
  const drSmileScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.933189, 1, 1]);
  const selixY = useTransform(scrollYProgress, [0, 0.5, 1], [-32, -16, 0]);
  const selixScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.835526, 0.933189, 1]);

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

      <div ref={trackRef} className="relative mx-auto mt-[5.5rem] h-[142.5rem] w-[87rem]">
        <div className="sticky top-24 h-[47.5rem] w-full">
          <StackCard background={<FoodDeliveryBackground />} name={foodDelivery.name} description={foodDelivery.description} tags={foodDelivery.tags} current="01" y={0} scale={1} />
          <StackCard background={<DrSmileBackground />} name={drSmile.name} description={drSmile.description} tags={drSmile.tags} current="02" y={drSmileY} scale={drSmileScale} />
          <StackCard background={<SelixBackground />} name={selix.name} description={selix.description} tags={selix.tags} current="03" y={selixY} scale={selixScale} />
        </div>
      </div>
    </section>
  );
}
