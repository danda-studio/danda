"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/cn";
import { VuesaxBoldCheck, VuesaxBoldDocumentCode, VuesaxBoldFolder, VuesaxBoldLampOn, VuesaxBoldPath, VuesaxBoldProfile2User } from "./icons/vuesax";

type Variant = "pair" | "quad";

export interface GlassIconClusterProps {
  variant: Variant;
  className?: string;
  floatDelay?: number;
}

const iconWrapperClassName = "relative flex size-10 shrink-0 items-center justify-center overflow-clip rounded-[0.75rem] bg-white";

export function GlassIconCluster({ variant, className, floatDelay = 0 }: GlassIconClusterProps) {
  return (
    <div className={cn(className)}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
        className="flex items-center justify-center gap-1 rounded-[1rem] border-[0.0375rem] border-solid border-[var(--dd-border-subtle)] bg-[var(--dd-glass-tint)] p-1 backdrop-blur-[0.53438rem]"
      >
        {variant === "pair"
          ? (
              <>
                <div className={iconWrapperClassName}>
                  <VuesaxBoldFolder className="size-4" />
                </div>
                <div className={iconWrapperClassName}>
                  <VuesaxBoldCheck className="size-4" />
                </div>
              </>
            )
          : (
              <>
                <div className={iconWrapperClassName}>
                  <VuesaxBoldDocumentCode className="size-4" />
                </div>
                <div className={iconWrapperClassName}>
                  <VuesaxBoldPath className="size-4" />
                </div>
                <div className={cn(iconWrapperClassName, "bg-brand")}>
                  <VuesaxBoldProfile2User className="size-4" />
                </div>
                <div className={iconWrapperClassName}>
                  <VuesaxBoldLampOn className="size-4" />
                </div>
              </>
            )}
      </motion.div>
    </div>
  );
}
