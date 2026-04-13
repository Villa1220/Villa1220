/* ─── Dominio: Proyecto ────────────────────────────────────────────────────── */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
  featured?: boolean;
}

/* ─── Dominio: Skill ──────────────────────────────────────────────────────── */
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tooling" | "design";
  level: 1 | 2 | 3 | 4 | 5;
}

/* ─── Dominio: Experiencia ────────────────────────────────────────────────── */
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

/* ─── UI: Bento Cell ──────────────────────────────────────────────────────── */
export interface BentoCell {
  id: string;
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12;
  rowSpan?: 1 | 2 | 3;
  content: React.ReactNode;
  className?: string;
}
