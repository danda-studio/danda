import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";
import type { ReactNode } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "@/shared/lib/cn";

type Variant = "primary" | "dark" | "light";

export interface ButtonProps extends Omit<BaseButtonProps, "className"> {
  variant?: Variant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
}

const variantClassName: Record<Variant, string> = {
  primary: "bg-brand text-white",
  dark: "bg-black text-white",
  light: "bg-[var(--dd-gray-200)] text-black",
};

export function Button({ variant = "primary", leadingIcon, trailingIcon, className, children, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium leading-[1.1] tracking-[-0.025rem]",
        leadingIcon
          ? "gap-4 rounded-[1.25rem] py-[0.625rem] pr-6 pl-[0.625rem] text-[1.25rem]"
          : "h-11 gap-[0.625rem] rounded-[1rem] px-5 py-4 text-[1rem]",
        variantClassName[variant],
        className,
      )}
      {...props}
    >
      {leadingIcon && (
        <span className="flex size-12 shrink-0 items-center justify-center overflow-clip rounded-[1rem] bg-white">
          {leadingIcon}
        </span>
      )}
      <span className="flex flex-1 items-center justify-center">{children}</span>
      {trailingIcon}
    </BaseButton>
  );
}
