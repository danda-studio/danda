import { cn } from "@/shared/lib/cn";

export interface ProjectCounterProps {
  current: string;
  total: string;
  className?: string;
  numberClassName?: string;
  totalClassName?: string;
}

export function ProjectCounter({ current, total, className, numberClassName, totalClassName }: ProjectCounterProps) {
  return (
    <div className={cn("flex items-center font-(family-name:--font-manrope-sans) font-medium leading-[0] text-white whitespace-nowrap", className)}>
      <div className={cn("flex shrink-0 flex-col justify-center", numberClassName)}>
        <p className="leading-[1.2]">{current}</p>
      </div>
      <div className={cn("flex shrink-0 flex-col justify-center opacity-60", totalClassName)}>
        <p className="leading-[1.2]">
          /
          {total}
        </p>
      </div>
    </div>
  );
}
