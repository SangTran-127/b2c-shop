import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseObjectNumber<T extends Record<string, string>>(
  obj: T
): ObjectValueNumber<T> {
  let res: Record<string, number> = {};
  for (let key in obj) {
    res[key] = Number(obj[key]);
  }
  return res as ObjectValueNumber<T>;
}
