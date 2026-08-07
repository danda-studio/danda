"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/shared/lib/cn";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export interface BlurredStaggerTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function BlurredStaggerText({ text, className, wordClassName }: BlurredStaggerTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={container}
    >
      {words.map((w, i) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          variants={word}
          className={cn("inline-block will-change-[filter,transform,opacity]", wordClassName)}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
