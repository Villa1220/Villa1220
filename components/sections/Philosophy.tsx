"use client";

import { PROFILE, principleIds } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  const { t } = useI18n();

  return (
    <Container as="section" id="philosophy" className="py-28">
      <Reveal>
        <SectionHeading eyebrow={t.philosophy.eyebrow} title={t.philosophy.title} />
      </Reveal>

      <Reveal>
        <figure className="mb-14 border-l-2 border-accent pl-6">
          <blockquote className="text-headline font-medium leading-snug text-foreground">
            “{t.philosophy.quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">
            — {PROFILE.name}
          </figcaption>
        </figure>
      </Reveal>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principleIds.map((id, index) => {
          const copy = t.philosophy.principles[id];
          return (
            <li key={id}>
              <Reveal delay={index * 0.06}>
                <div className="h-full rounded-card border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {copy.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{copy.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
