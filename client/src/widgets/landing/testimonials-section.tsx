"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { TestimonialCard, TESTIMONIALS } from "@/entities/testimonial";
import { cn } from "@/shared/lib/cn";
import { BlurredStaggerText } from "@/shared/ui/blurred-stagger-text";

const DEFAULT_INDEX = 2;
const CARD_STEP = 382; // ширина карточки (w-93 = 372px) + gap-[0.625rem] (10px)

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_INDEX);

  return (
    <section id="testimonials" className="relative mt-[0.75rem] px-6">
      <div className="relative mx-auto h-[41.25rem] w-[87rem]">
        <div className="absolute inset-0 rounded-[2rem] bg-black" />

        <div className="absolute top-[5rem] left-1/2 h-[31.25rem] w-[89.875rem] -translate-x-1/2 overflow-clip">
          <p className="absolute top-0 left-[44.9375rem] -translate-x-1/2 text-center font-(family-name:--font-manrope-sans) text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] whitespace-nowrap text-white [word-break:break-word]">
            <BlurredStaggerText text="Отзывы наших клиентов" />
          </p>

          <div className="absolute top-[12rem] left-[1.4375rem] h-[23.5625rem] w-[86.9375rem]">
            <div className="absolute top-[-0.00063rem] left-0 flex w-[86.9375rem] items-start justify-center">
              <div className="flex items-center gap-[0.625rem]">
                {TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "relative size-[3rem] shrink-0 cursor-pointer overflow-hidden rounded-full transition-[box-shadow] duration-300",
                      index === activeIndex ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image alt="" fill sizes="48px" src={testimonial.avatar} className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute top-[5.25rem] left-0 flex w-[86.9375rem] items-start justify-center gap-[0.625rem] overflow-clip">
              <motion.div
                className="flex items-start gap-[0.625rem]"
                animate={{ x: (DEFAULT_INDEX - activeIndex) * CARD_STEP }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
              >
                {TESTIMONIALS.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute top-[calc(50%+8.625rem)] left-6 h-[14rem] w-[21.125rem] -translate-y-1/2 bg-gradient-to-l from-(--dd-fade-black-transparent) to-[43.023%] to-black" />
          <div className="absolute top-[calc(50%+8.625rem)] right-6 h-[14rem] w-[21.125rem] -translate-y-1/2 bg-gradient-to-r from-(--dd-fade-black-transparent) to-[43.023%] to-black" />
        </div>
      </div>
    </section>
  );
}
