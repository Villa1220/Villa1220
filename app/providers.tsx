"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      enableColorScheme
      storageKey="portfolio-theme"
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
