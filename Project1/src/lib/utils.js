import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
