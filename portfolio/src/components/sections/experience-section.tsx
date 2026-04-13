"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer } from "@/components/ui/motion";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experiencia profesional"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Trayectoria
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Experiencia
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Línea vertical */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent"
          />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative flex gap-6 pl-14"
            >
              {/* Punto de timeline */}
              <div
                className="absolute left-0 top-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900"
                aria-hidden
              >
                <Briefcase size={14} className="text-indigo-400" />
              </div>

              {/* Contenido */}
              <div className="flex-1 rounded-[var(--radius-card)] border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-indigo-400 mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-zinc-600 font-mono bg-zinc-800 px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
