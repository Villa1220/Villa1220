"use client";

import { techStackMeta } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";

export function Stack() {
  const { t } = useI18n();

  return (
    <Container as="section" id="stack" className="py-28">
      <Reveal>
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          description={t.stack.description}
        />
      </Reveal>

      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2">
          {techStackMeta.map((category) => (
            <article key={category.id} className="bg-surface p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                {t.stack.categories[category.id]}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-surface-elevated py-1.5 pl-2.5 pr-3.5 text-sm text-foreground ring-1 ring-border transition-colors hover:ring-accent/40"
                  >
                    <TechIcon name={item} className="h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
