"use client";

import Image from "next/image";
import { PROFILE, socials } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col items-center gap-6 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Image
            src="/logo-mark.svg"
            alt={`${PROFILE.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div>
            <p className="font-medium text-foreground">
              {PROFILE.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1">{t.footer.tagline}</p>
          </div>
        </div>

        <ul className="flex items-center gap-6">
          {socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target={social.platform === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs">
          © {year} · {PROFILE.location}
        </p>
      </Container>
    </footer>
  );
}
