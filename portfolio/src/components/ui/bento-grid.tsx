"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, scaleIn } from "./motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoItem({ children, className, index = 0 }: BentoItemProps) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{ scale: 1.015, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "relative rounded-[var(--radius-card)] border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden group",
        className
      )}
    >
      {/* Efecto de borde iluminado en hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"
      />
      {/* Gradiente top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] bg-gradient-to-br from-white/[0.03] to-transparent"
      />
      {children}
    </motion.div>
  );
}
