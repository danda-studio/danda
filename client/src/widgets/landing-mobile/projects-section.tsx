"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ProjectCounter, PROJECTS } from "@/entities/project";
import { useDragScroll } from "@/shared/lib/use-drag-scroll";
import { getCenteredCarouselIndex } from "@/shared/lib/get-centered-carousel-index";
import { Tag } from "@/shared/ui/tag";

const PROJECT_IMAGES: Record<string, string> = {
  selix: "/landing/mobile/selix-card.png",
  "dr-smile": "/landing/mobile/drsmile-card.png",
  "food-delivery": "/landing/mobile/fooddelivery-card.png",
};

export function ProjectsSectionMobile() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [...PROJECTS].reverse();
  useDragScroll(scrollerRef);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el)
      return;
    setActiveIndex(getCenteredCarouselIndex(el));
  };

  return (
    <section id="projects-mobile" className="relative px-3 pt-10 pb-5">
      <h2 className="w-[13.4375rem] font-(family-name:--font-manrope-sans) text-[2rem] leading-none font-semibold tracking-[-0.06rem] whitespace-nowrap text-black [word-break:break-word]">
        Наши проекты
      </h2>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="mt-8 flex cursor-grab snap-x snap-mandatory gap-3 overflow-x-auto pb-1 select-none [scrollbar-width:none] active:cursor-grabbing touch-pan-x touch-pan-y [&_img]:pointer-events-none"
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="relative h-[34rem] w-[21rem] shrink-0 snap-center overflow-clip rounded-[1.5rem] bg-black"
          >
            <Image
              alt=""
              fill
              quality={55}
              sizes="336px"
              className="object-cover"
              src={PROJECT_IMAGES[project.id]}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 backdrop-blur-[1.875rem]"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 40%, black 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 80%)",
              }}
            />
            <ProjectCounter
              current={String(index + 1).padStart(2, "0")}
              total={String(projects.length).padStart(2, "0")}
              className="absolute top-[1.5rem] left-[1.5rem] gap-[0.25rem]"
              numberClassName="text-[1.5rem] tracking-[-0.045rem]"
              totalClassName="text-[1rem] tracking-[-0.03rem]"
            />
            <div className="absolute right-0 bottom-0 left-0 flex flex-col items-start gap-[1.25rem] p-6">
              <div className="flex flex-col items-start gap-[0.75rem] text-white [word-break:break-word]">
                <p className="font-(family-name:--font-manrope-sans) text-[1.75rem] leading-none font-semibold tracking-[-0.0525rem] whitespace-nowrap">
                  {project.name}
                </p>
                <p className="font-(family-name:--font-manrope-sans) text-[0.875rem] leading-[1.2] font-medium opacity-76">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-[0.5rem]">
                {project.tags.map(tag => (
                  <Tag key={tag} className="rounded-[1rem] border-[0.0438rem] px-[1rem] py-[0.75rem] text-[0.875rem] tracking-[-0.0263rem]">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Проект ${project.name}`}
            onClick={() => {
              const el = scrollerRef.current;
              const card = el?.children[index] as HTMLElement | undefined;
              card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
            className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-brand" : "w-1.5 bg-(--dd-gray-300)"}`}
          />
        ))}
      </div>
    </section>
  );
}
