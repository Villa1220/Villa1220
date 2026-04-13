"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/ui/motion";

export function ContactSection() {
  const links = [
    { icon: Github, label: "GitHub", href: "#", description: "Ver código" },
    { icon: Linkedin, label: "LinkedIn", href: "#", description: "Conectar" },
    { icon: Mail, label: "Email", href: "mailto:tu@email.com", description: "Escribir" },
  ];

  return (
    <section
      id="contact"
      aria-label="Contacto"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Gradiente de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgb(99_102_241/0.08),transparent)]"
      />

      <div className="mx-auto max-w-2xl text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            Hablemos
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl text-balance"
          >
            ¿Tienes un proyecto en mente?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-12 text-zinc-500 text-lg leading-relaxed text-balance"
          >
            Estoy disponible para proyectos freelance, colaboraciones y
            oportunidades full-time. No dudes en escribirme.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-12 flex justify-center">
            <a href="mailto:tu@email.com">
              <Button variant="primary" size="lg" className="gap-2">
                <Mail size={16} />
                Enviar mensaje
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {links.map(({ icon: Icon, label, href, description }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
              >
                <Icon size={15} />
                <span className="font-medium">{label}</span>
                <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {description}
                </span>
                <ArrowUpRight
                  size={12}
                  className="text-zinc-700 group-hover:text-zinc-500 transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
