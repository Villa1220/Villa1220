"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROFILE, navOrder } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "@/components/controls/ThemeToggle";
import { LanguageToggle } from "@/components/controls/LanguageToggle";

const sectionIds = [...navOrder];

export function Header() {
  const activeId = useActiveSection(sectionIds);
  const { t } = useI18n();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.svg"
            alt={`${PROFILE.name} logo`}
            width={34}
            height={34}
            priority
            className="h-8 w-8"
          />
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            {PROFILE.name}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navOrder.map((id) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className={cn(
                    "relative text-sm transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted",
                  )}
                >
                  {t.nav[id]}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            href="#contact"
            className="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.actions.getInTouch}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
