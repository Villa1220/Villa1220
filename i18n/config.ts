export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const STORAGE_KEY = "portfolio-locale";

export function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value);
}
