type ClassValue = string | number | null | false | undefined;

/**
 * Lightweight, dependency-free className joiner.
 * Filters out falsy values so conditional classes stay readable.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
