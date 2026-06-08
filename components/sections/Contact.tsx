"use client";

import { Mail } from "lucide-react";
import { socials } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon } from "@/components/ui/icons";

const socialIcon = {
  linkedin: LinkedInIcon,
  email: Mail,
  github: Mail,
} as const;

export function Contact() {
  const { t } = useI18n();

  return (
    <Container as="section" id="contact" className="py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-card border border-border bg-surface p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-accent to-transparent"
          />
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {t.contact.eyebrow}
          </p>
          <h2 className="mx-auto max-w-2xl text-headline font-semibold text-foreground">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            {t.contact.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = socialIcon[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
