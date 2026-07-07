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
  outline: "border-[0.04375rem] border-[var(--color-border-on-dark)] border-solid text-white",
  dark: "bg-black text-white",
  light: "bg-[var(--color-gray-150)] text-black",
};

export function Tag({ children, icon, variant = "outline", className }: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-[0.625rem] overflow-clip rounded-[1rem] px-[1rem] py-[0.75rem] text-[1rem] font-medium leading-[1.2] tracking-[-0.03rem] whitespace-nowrap",
        variantClassName[variant],
        className,
      )}
    >
      {icon}
      {children}
    </div>
  );
}
