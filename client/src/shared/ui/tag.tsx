import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type Variant = "outline" | "dark" | "light";

export interface TagProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClassName: Record<Variant, string> = {
  outline: "border-[0.04375rem] border-[var(--dd-border-on-dark)] border-solid text-white",
  dark: "bg-black text-white",
  light: "bg-[var(--dd-gray-150)] text-black",
};

export function Tag({ children, icon, variant = "outline", className }: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-[0.625rem] overflow-clip rounded-[1rem] px-4 py-3 text-[1rem] font-medium leading-none tracking-[-0.03rem] whitespace-nowrap",
        variantClassName[variant],
        className,
      )}
    >
      {icon
        ? (
            <span className="inline-flex size-[1.25rem] shrink-0 items-center justify-center overflow-hidden [&_img]:size-full [&_img]:max-w-none [&_img]:object-contain">
              {icon}
            </span>
          )
        : null}
      <span className="leading-none">{children}</span>
    </div>
  );
}
