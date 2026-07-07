import type { ReactNode } from "react";

export interface ProcessStepProps {
  index: string;
  title: string;
  description: ReactNode;
}

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-[1rem]">
        <div className="flex items-center justify-center overflow-clip rounded-[1rem] border-[0.04375rem] border-solid border-[var(--color-border-subtle-light)] px-[1rem] py-[0.75rem]">
          <p className="font-[family-name:var(--font-manrope-sans)] text-[1rem] font-medium tracking-[-0.03rem] whitespace-nowrap text-black">
            {index}
          </p>
        </div>
        <p className="font-[family-name:var(--font-manrope-sans)] text-[2rem] font-medium tracking-[-0.0625rem] whitespace-nowrap text-black">
          {title}
        </p>
      </div>
      <div className="w-[21.625rem] font-[family-name:var(--font-manrope-sans)] text-[1.25rem] leading-[1.2] font-medium text-muted">
        {description}
      </div>
    </div>
  );
}
