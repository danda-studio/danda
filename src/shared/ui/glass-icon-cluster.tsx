import { cn } from "@/shared/lib/cn";
import { VuesaxBoldCheck, VuesaxBoldDocumentCode, VuesaxBoldFolder, VuesaxBoldLampOn, VuesaxBoldPath, VuesaxBoldProfile2User } from "./icons/vuesax";

type Variant = "pair" | "quad";

export interface GlassIconClusterProps {
  variant: Variant;
  className?: string;
}

const iconWrapperClassName = "relative flex size-[2.5rem] shrink-0 items-center justify-center overflow-clip rounded-[0.75rem] bg-white";

export function GlassIconCluster({ variant, className }: GlassIconClusterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-[0.25rem] rounded-[1rem] border-[0.0375rem] border-solid border-[var(--color-border-subtle)] bg-[var(--color-glass-tint)] p-[0.25rem] backdrop-blur-[0.53438rem]",
        className,
      )}
    >
      {variant === "pair"
        ? (
            <>
              <div className={iconWrapperClassName}>
                <VuesaxBoldFolder className="size-[1rem]" />
              </div>
              <div className={iconWrapperClassName}>
                <VuesaxBoldCheck className="size-[1rem]" />
              </div>
            </>
          )
        : (
            <>
              <div className={iconWrapperClassName}>
                <VuesaxBoldDocumentCode className="size-[1rem]" />
              </div>
              <div className={iconWrapperClassName}>
                <VuesaxBoldPath className="size-[1rem]" />
              </div>
              <div className={cn(iconWrapperClassName, "bg-brand")}>
                <VuesaxBoldProfile2User className="size-[1rem]" />
              </div>
              <div className={iconWrapperClassName}>
                <VuesaxBoldLampOn className="size-[1rem]" />
              </div>
            </>
          )}
    </div>
  );
}
