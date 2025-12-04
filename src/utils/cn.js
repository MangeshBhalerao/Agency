// Import utility libraries for className management
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind CSS classes
// Combines multiple class names and resolves conflicts
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
