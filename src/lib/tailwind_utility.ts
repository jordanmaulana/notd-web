import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param inputs a list of strings of Tailwind classnames
 * @returns a classnames which the later list takes more priority
 *
 * This will help us to write more readable conditioned classnames instead of manually conditioning it and write a lot of (!)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
