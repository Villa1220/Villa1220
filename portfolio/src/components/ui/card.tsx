"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  interactive?: boolean;
}

export function Card({ children, glow, interactive, className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "relative rounded-[var(--radius-card)] border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden",
        glow && "shadow-[var(--shadow-glow)]",
        interactive && "cursor-pointer",
        className
      )}
      {...(props as object)}
    >
      {/* Gradiente sutil en la esquina superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] bg-gradient-to-br from-white/[0.04] to-transparent"
      />
      {children}
    </motion.div>
  );
}
