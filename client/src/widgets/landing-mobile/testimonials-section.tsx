"use client";

import Image from "next/image";
import { useRef } from "react";
import { TESTIMONIALS } from "@/entities/testimonial";

export function TestimonialsSectionMobile() {
  const cardsRef = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCard = (id: string) => {
    cardsRef.current[id]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="testimonials-mobile" className="relative px-3 pt-3 pb-10">
      <div className="relative mx-auto min-h-[26rem] w-[21rem] overflow-clip rounded-[1.5rem] bg-black py-8">
        <div className="flex flex-col items-center gap-5 px-6 text-center">
          <p className="w-[18rem] font-(family-name:--font-inter-sans) text-[2rem] leading-none font-medium tracking-[-0.04rem] text-white [word-break:break-word]">
            Отзывы наших клиентов
          </p>
          <div className="flex items-center gap-[0.625rem]">
            {TESTIMONIALS.map(testimonial => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => scrollToCard(testimonial.id)}
                aria-label={`Отзыв от ${testimonial.name}`}
                className="relative size-9 shrink-0 cursor-pointer overflow-hidden rounded-full outline-none transition-transform hover:scale-110 focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)]"
              >
                <Image alt="" fill sizes="36px" src={testimonial.avatar} className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[4.75rem] flex snap-x snap-mandatory items-start gap-2 overflow-x-auto px-3 pb-1 [scrollbar-width:none]">
          {TESTIMONIALS.map(testimonial => (
            <div
              key={testimonial.id}
              ref={(el) => { cardsRef.current[testimonial.id] = el; }}
              className="flex h-[12.5rem] w-[18.75rem] shrink-0 snap-center flex-col items-start justify-center rounded-[1.5rem] bg-(--dd-gray-850) p-6"
            >
              <div className="flex w-full flex-1 flex-col items-start justify-between">
                <p className="line-clamp-2 w-full font-(family-name:--font-manrope-sans) text-[1rem] leading-[1.2] font-medium text-white">
                  {testimonial.quote}
                </p>
                <div className="flex w-full items-center gap-4">
                  <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
                    <Image alt="" fill sizes="36px" src={testimonial.avatar} className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center gap-[0.125rem]">
                    <p className="font-(family-name:--font-manrope-sans) text-[1rem] tracking-[-0.0625rem] whitespace-nowrap text-white">
                      {testimonial.name}
                    </p>
                    <p className="font-(family-name:--font-manrope-sans) text-[0.75rem] text-(--dd-gray-400)">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
