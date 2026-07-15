import { twMerge } from "tailwind-merge";

type ClassValue = string | number | boolean | null | undefined;

export function cn(...values: ClassValue[]): string {
  return twMerge(values.filter(Boolean).join(" "));
}
