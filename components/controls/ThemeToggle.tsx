"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={t.actions.toggleTheme}
      title={t.actions.toggleTheme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-[1.05rem] w-[1.05rem]" />
        ) : (
          <Moon className="h-[1.05rem] w-[1.05rem]" />
        )
      ) : (
        <span className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  );
}
