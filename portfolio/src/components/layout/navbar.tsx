"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-white transition-colors"
        >
          <span className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-xs font-bold">
            P
          </span>
          Portfolio
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:tu@email.com"
            className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all duration-200"
          >
            Disponible
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
          </a>
        </div>

        {/* Botón mobile */}
        <button
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Menú mobile */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 space-y-1 md:hidden"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
