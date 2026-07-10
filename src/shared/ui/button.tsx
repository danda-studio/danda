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
  /**
   * Swaps the leading icon for a spinner and disables interaction, matching the Figma
   * "loading" button state.
   */
  loading?: boolean;
}

const variantClassName: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-black",
  dark: "bg-black text-white",
  light: "bg-[var(--dd-gray-200)] text-black",
};

export function Button({ variant = "primary", leadingIcon, trailingIcon, className, children, loading = false, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <BaseButton
      disabled={isDisabled}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-medium leading-[1.1] tracking-[-0.025rem] outline-none transition-colors",
        "focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)] focus-visible:ring-offset-[0.125rem]",
        "disabled:cursor-not-allowed disabled:opacity-60",
        leadingIcon
          ? "gap-4 rounded-[1.25rem] py-[0.625rem] pr-6 pl-[0.625rem] text-[1.25rem]"
          : "h-11 gap-[0.625rem] rounded-[1rem] px-5 py-4 text-[1rem]",
        variantClassName[variant],
        className,
      )}
      {...props}
    >
      {leadingIcon && (
        <span className={cn("flex size-12 shrink-0 items-center justify-center overflow-clip rounded-[1rem]", isDisabled ? "bg-[var(--dd-gray-350)]" : "bg-white")}>
          {loading
            ? (
                <img alt="" className="size-7 animate-spin" src="/landing/desktop-6/loader.svg" />
              )
            : (
                leadingIcon
              )}
        </span>
      )}
      <span className="flex flex-1 items-center justify-center">{children}</span>
      {trailingIcon}
    </BaseButton>
  );
}
