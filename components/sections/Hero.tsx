"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { socials, statsMeta } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { LinkedInIcon } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

const socialIcon = {
  linkedin: LinkedInIcon,
  email: Mail,
  github: ArrowRight,
} as const;

export function Hero() {
  const { t } = useI18n();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100vh-4rem)] items-center"
    >
      <Container className="py-24">
        <motion.div
          {...fadeUp(0)}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.availability}
        </motion.div>

        <motion.p
          {...fadeUp(0.06)}
          className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-accent"
        >
          {t.hero.role}
        </motion.p>

        <motion.h1
          id="hero-heading"
          {...fadeUp(0.12)}
          className="max-w-4xl text-display font-semibold tracking-tight"
        >
          {t.hero.headlineLead}{" "}
          <span className="text-gradient">{t.hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {t.hero.summary}
        </motion.p>

        <motion.div
          {...fadeUp(0.28)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {t.actions.viewWork}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = socialIcon[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.dl
          {...fadeUp(0.36)}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {statsMeta.map((stat) => (
            <div key={stat.id}>
              <dt className="text-3xl font-semibold text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-muted">
                {t.stats[stat.id as keyof typeof t.stats]}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
