"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      aria-label={t.actions.toggleLanguage}
      title={t.actions.toggleLanguage}
      onClick={toggleLocale}
      className="flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <span className={locale === "es" ? "text-accent" : ""}>ES</span>
      <span aria-hidden className="text-border">/</span>
      <span className={locale === "en" ? "text-accent" : ""}>EN</span>
    </button>
  );
}
