"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectsMeta } from "@/data/profile";
import { useI18n } from "@/i18n/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  const { t } = useI18n();

  return (
    <Container as="section" id="work" className="py-28">
      <Reveal>
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
        />
      </Reveal>

      <ul className="grid gap-6 sm:grid-cols-2">
        {projectsMeta.map((project, index) => {
          const copy = t.work.projects[project.id];
          return (
            <li key={project.id}>
              <Reveal delay={index * 0.08}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_var(--accent-soft)]"
                >
                  <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-surface-elevated">
                    <Image
                      src={project.preview}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {copy.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <p className="mb-6 flex-1 leading-relaxed text-muted">
                      {copy.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
