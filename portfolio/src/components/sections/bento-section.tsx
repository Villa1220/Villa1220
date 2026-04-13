"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Terminal,
  Cpu,
  Palette,
  Globe,
} from "lucide-react";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/components/ui/motion";
import { projects, skills } from "@/lib/data";

/* ─── Células individuales del Bento ────────────────────────────────────── */

function ProjectCell({ index }: { index: number }) {
  const project = projects[index];
  if (!project) return null;

  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div>
        <Code2 size={20} className="mb-4 text-indigo-400" />
        <h3 className="mb-2 text-base font-semibold text-zinc-100 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SkillsCell() {
  const byCategory = skills.reduce<Record<string, typeof skills>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category]!.push(skill);
      return acc;
    },
    {}
  );

  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="flex items-center gap-2 mb-5">
        <Layers size={18} className="text-indigo-400" />
        <span className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">
          Stack
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(byCategory).flatMap(([, list]) =>
          list.map((skill) => (
            <Badge key={skill.name} variant="accent">
              {skill.name}
            </Badge>
          ))
        )}
      </div>
    </div>
  );
}

function TerminalCell() {
  const lines = [
    { prompt: "~", text: "npx create-next-app@latest" },
    { prompt: "✓", text: "TypeScript  ✔" },
    { prompt: "✓", text: "Tailwind CSS v4  ✔" },
    { prompt: "✓", text: "App Router  ✔" },
    { prompt: "$", text: "npm run dev", blink: true },
  ];

  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex items-center gap-2 mb-4">
        <Terminal size={18} className="text-emerald-400" />
        <span className="text-xs font-mono text-zinc-500 tracking-wide">
          zsh — portfolio
        </span>
      </div>
      <div className="font-mono text-xs space-y-1.5 flex-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span
              className={
                line.prompt === "✓"
                  ? "text-emerald-400"
                  : line.prompt === "$"
                    ? "text-indigo-400"
                    : "text-zinc-600"
              }
            >
              {line.prompt}
            </span>
            <span className="text-zinc-300">{line.text}</span>
            {line.blink && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1.5 h-3.5 bg-indigo-400 rounded-sm"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DesignSystemCell() {
  const palette = [
    { name: "Background", color: "#09090b" },
    { name: "Surface", color: "#18181b" },
    { name: "Border", color: "#3f3f46" },
    { name: "Accent", color: "#6366f1" },
    { name: "Foreground", color: "#fafafa" },
  ];

  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex items-center gap-2 mb-5">
        <Palette size={18} className="text-indigo-400" />
        <span className="text-sm font-semibold text-zinc-300">Design System</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {palette.map(({ name, color }) => (
          <div key={name} className="flex flex-col items-center gap-1.5">
            <div
              className="h-10 w-10 rounded-lg border border-zinc-700"
              style={{ backgroundColor: color }}
            />
            <span className="text-[9px] text-zinc-600 font-mono">{color}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-xs text-zinc-500 font-mono">--font-sans: Geist</p>
        <p className="text-xs text-zinc-500 font-mono">--radius-card: 1.25rem</p>
      </div>
    </div>
  );
}

function PerformanceCell() {
  const metrics = [
    { label: "Performance", score: 99, color: "text-emerald-400" },
    { label: "Accessibility", score: 100, color: "text-emerald-400" },
    { label: "Best Practices", score: 100, color: "text-emerald-400" },
    { label: "SEO", score: 100, color: "text-emerald-400" },
  ];

  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex items-center gap-2 mb-5">
        <Cpu size={18} className="text-emerald-400" />
        <span className="text-sm font-semibold text-zinc-300">Lighthouse</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map(({ label, score, color }) => (
          <div key={label} className="flex flex-col">
            <motion.span
              className={`text-2xl font-bold tabular-nums ${color}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {score}
            </motion.span>
            <span className="text-[10px] text-zinc-600 mt-0.5">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GlobeCell() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center p-6 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-[0.06]"
      >
        <Globe size={200} className="text-indigo-400" />
      </motion.div>
      <Globe size={32} className="text-indigo-400 mb-3 relative z-10" />
      <p className="text-xs text-zinc-400 text-center relative z-10 font-medium">
        Disponible para colaborar<br />
        <span className="text-zinc-600">Remoto · Global</span>
      </p>
    </div>
  );
}

/* ─── Sección principal ──────────────────────────────────────────────────── */

export function BentoSection() {
  return (
    <section
      id="projects"
      aria-label="Proyectos y habilidades"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Trabajo & Habilidades
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Lo que construyo
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto text-balance">
            Una selección de proyectos, tecnologías y principios que definen mi
            práctica de desarrollo.
          </p>
        </motion.div>

        {/* Grid Bento */}
        <BentoGrid>
          {/* Proyecto 1 – ancho completo en mobile, 2 cols en tablet */}
          <BentoItem className="col-span-1 md:col-span-2" index={0}>
            <ProjectCell index={0} />
          </BentoItem>

          {/* Terminal */}
          <BentoItem className="col-span-1 md:col-span-1" index={1}>
            <TerminalCell />
          </BentoItem>

          {/* Skills */}
          <BentoItem className="col-span-1 md:col-span-1" index={2}>
            <SkillsCell />
          </BentoItem>

          {/* Proyecto 2 */}
          <BentoItem className="col-span-1 md:col-span-2" index={3}>
            <ProjectCell index={1} />
          </BentoItem>

          {/* Design System */}
          <BentoItem className="col-span-1 md:col-span-2 lg:col-span-2" index={4}>
            <DesignSystemCell />
          </BentoItem>

          {/* Performance */}
          <BentoItem className="col-span-1 md:col-span-1" index={5}>
            <PerformanceCell />
          </BentoItem>

          {/* Globe / Disponibilidad */}
          <BentoItem className="col-span-1 md:col-span-1 lg:col-span-1" index={6}>
            <GlobeCell />
          </BentoItem>

          {/* Proyecto 3 */}
          <BentoItem className="col-span-1 md:col-span-3 lg:col-span-2" index={7}>
            <ProjectCell index={2} />
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  );
}
