"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedRoles } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/ui/motion";
import { hero } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      aria-label="Presentación"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16"
    >
      {/* ── Fondo con malla de puntos y gradiente radial ────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgb(99_102_241/0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(255 255 255 / 0.045) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* ── Orbe de luz flotante ────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]"
      />

      {/* ── Contenido principal ──────────────────────────────────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Badge de disponibilidad */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Saludo y nombre */}
        <motion.p
          variants={fadeUp}
          className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
        >
          {hero.greeting}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          style={{ fontFeatureSettings: '"ss01"' }}
        >
          {hero.name}
        </motion.h1>

        {/* Roles animados */}
        <motion.div
          variants={fadeUp}
          className="mb-8 h-10 text-2xl font-semibold text-indigo-400 sm:text-3xl"
        >
          <AnimatedRoles roles={hero.roles} />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="mb-10 mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg text-balance"
        >
          {hero.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={hero.cta.primary.href}>
            <Button variant="primary" size="lg">
              {hero.cta.primary.label}
            </Button>
          </a>
          <a href={hero.cta.secondary.href}>
            <Button variant="outline" size="lg">
              {hero.cta.secondary.label}
            </Button>
          </a>
        </motion.div>

        {/* Links sociales */}
        <motion.div
          variants={fadeUp}
          className="mb-16 flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, label: "GitHub", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Mail, label: "Email", href: "mailto:tu@email.com" },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {hero.stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-zinc-50 tabular-nums">
                {value}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5 text-balance">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-zinc-600" />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
