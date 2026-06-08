"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  STORAGE_KEY,
  defaultLocale,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start from the default locale so the server and first client paint
  // match (no hydration mismatch); the stored preference is applied post-mount.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored) && stored !== locale) {
      setLocaleState(stored);
    }
    // Run once on mount to hydrate the stored preference.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, t: dictionaries[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return context;
}
