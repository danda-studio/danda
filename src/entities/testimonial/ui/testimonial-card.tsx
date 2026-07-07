import type { Testimonial } from "../model/types";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";

const GRADIENT_BACKGROUND = "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 372 224' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(18.598 13.218 -8.3743 41.312 186 112)'><stop stop-color='rgba(248,250,251,1)' offset='0'/><stop stop-color='rgba(241,245,248,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const isLight = testimonial.variant === "light";
  const fontClassName = isLight ? "font-(family-name:--font-inter-sans)" : "font-(family-name:--font-manrope-sans)";

  return (
    <div
      className={cn(
        "flex h-56 w-93 shrink-0 flex-col items-start justify-center rounded-[1.5rem] p-6",
        isLight ? "" : "bg-[var(--dd-gray-850)]",
      )}
      style={isLight ? { backgroundImage: GRADIENT_BACKGROUND } : undefined}
    >
      <div className="flex w-full flex-1 flex-col items-start justify-between">
        <p
          className={cn(
            "line-clamp-2 w-full text-[1rem] leading-[1.2] font-medium",
            fontClassName,
            isLight ? "text-[var(--dd-gray-800)]" : "text-white",
          )}
        >
          {testimonial.quote}
        </p>
        <div className="flex w-full items-center gap-4">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
            <Image alt="" fill src={testimonial.avatar} className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-[0.125rem]">
            <p className={cn("text-[1.25rem] tracking-[-0.0625rem] whitespace-nowrap", fontClassName, isLight ? "text-[var(--dd-gray-800)]" : "text-white")}>
              {testimonial.name}
            </p>
            <p className={cn("text-[1rem]", fontClassName, isLight ? "text-[var(--dd-gray-350)]" : "text-[var(--dd-gray-400)]")}>
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
