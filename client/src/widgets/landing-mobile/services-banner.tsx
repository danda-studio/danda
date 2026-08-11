"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SERVICES } from "@/entities/service";
import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { Tag } from "@/shared/ui/tag";

const SERVICE_IMAGES = [
  "/landing/mobile/services-card4.png",
  "/landing/mobile/services-card3.png",
  "/landing/mobile/services-card2.png",
  "/landing/mobile/services-card1.png",
];

export function ServicesBannerMobile() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el)
      return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 1;
    const gap = 12;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), SERVICES.length - 1));
  };

  return (
    <section id="services-mobile" className="relative px-3 pt-5 pb-0">
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none]"
      >
        {SERVICES.map((service, index) => (
          <article
            key={service.title}
            className="relative flex h-[34rem] w-[21rem] shrink-0 snap-center flex-col overflow-clip rounded-[1.5rem] bg-brand px-4 pt-6 pb-6"
          >
            <div className="pointer-events-none absolute inset-0">
              <Image alt="" fill sizes="336px" className="object-cover opacity-40" src="/landing/mobile/services-dots.svg" />
            </div>

            <div className="relative mx-auto mb-5 h-[14rem] w-[14rem] shrink-0 overflow-clip rounded-[1rem] bg-white shadow-[0_0.75rem_2rem_rgba(0,23,61,0.18)]">
              <Image alt="" fill quality={55} sizes="224px" className="object-cover" src={SERVICE_IMAGES[index]} />
              <p className="absolute right-4 bottom-4 left-4 font-(family-name:--font-manrope-sans) text-[1.125rem] leading-[1.2] font-semibold tracking-[-0.04rem] text-black [word-break:break-word]">
                {service.title}
              </p>
            </div>

            <div className="relative z-10 mt-auto flex flex-col items-center gap-4 text-center">
              <p className="font-(family-name:--font-inter-sans) text-[1.375rem] leading-none font-medium tracking-[-0.03rem] text-white [word-break:break-word]">
                {service.heading}
              </p>
              <p className="w-[17.5rem] font-(family-name:--font-inter-sans) text-[0.875rem] leading-[1.15] text-white [word-break:break-word]">
                {service.description.map(part => (
                  <span key={part.text} className={part.dim ? "text-(--dd-overlay-on-dark-strong)" : ""}>{part.text}</span>
                ))}
              </p>
              {service.techBadges.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {service.techBadges.map(badge => (
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
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {SERVICES.map((service, index) => (
          <button
            key={service.title}
            type="button"
            aria-label={service.title}
            onClick={() => {
              const el = scrollerRef.current;
              const card = el?.children[index] as HTMLElement | undefined;
              card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
            className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-brand" : "w-1.5 bg-(--dd-gray-300)"}`}
          />
        ))}
      </div>

      <div className="mt-5 mb-8 flex justify-center">
        <Button
          variant="dark"
          className="rounded-[1rem] py-1 pr-5 pl-1 text-[1rem]"
          leadingIcon={<BoxiconsSend className="relative size-6 -rotate-90" />}
          render={<a href="#contact-mobile" />}
          nativeButton={false}
        >
          Обсудить проект
        </Button>
      </div>
    </section>
  );
}
