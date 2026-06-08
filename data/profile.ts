import type { ProjectStatus, SocialLink } from "@/types";

/**
 * Language-neutral, structural data. All human-readable copy that needs
 * translation lives in `i18n/dictionaries.ts`, keyed by these stable ids.
 */

export const PROFILE = {
  name: "Paul Villacis",
  email: "andresvillacis1220@gmail.com",
  location: "Ecuador",
} as const;

export const socials: readonly SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pa%C3%BAl-villacis-b294a4403/",
  },
  {
    platform: "email",
    label: "Email",
    href: "mailto:andresvillacis1220@gmail.com",
  },
];

export type SectionId = "work" | "stack" | "philosophy" | "contact";

export const navOrder: readonly SectionId[] = [
  "work",
  "stack",
  "philosophy",
  "contact",
];

export interface ProjectMeta {
  readonly id: string;
  readonly stack: readonly string[];
  readonly status: ProjectStatus;
  readonly url: string;
  readonly preview: string;
}

export const projectsMeta: readonly ProjectMeta[] = [
  {
    id: "chasquibus",
    stack: ["Next.js", "TypeScript", "NestJS"],
    status: "live",
    url: "https://chasquibus-web.vercel.app/auth/login",
    preview: "/previews/chasquibus.png",
  },
  {
    id: "ayalma",
    stack: ["Next.js", "Tailwind CSS"],
    status: "live",
    url: "https://pagina-ayalma.vercel.app/",
    preview: "/previews/ayalma.png",
  },
  {
    id: "doctor",
    stack: ["React", "TypeScript"],
    status: "live",
    url: "https://doctor-fronted.vercel.app/login",
    preview: "/previews/doctor.png",
  },
  {
    id: "conversor",
    stack: ["Python", "AI"],
    status: "live",
    url: "https://conversor-ia-villacis-paul.onrender.com/",
    preview: "/previews/conversor.png",
  },
];

export interface TechCategoryMeta {
  readonly id: string;
  readonly items: readonly string[];
}

export const techStackMeta: readonly TechCategoryMeta[] = [
  { id: "frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript"] },
  { id: "backend", items: ["NestJS", "Node.js", ".NET", "Python"] },
  { id: "data", items: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL"] },
  { id: "devops", items: ["n8n", "Docker", "Azure", "Bash"] },
];

export const principleIds = [
  "security",
  "bff",
  "scalability",
  "ai",
  "ux",
  "qa",
] as const;

export type PrincipleId = (typeof principleIds)[number];

export interface StatMeta {
  readonly id: string;
  readonly value: string;
}

export const statsMeta: readonly StatMeta[] = [
  { id: "experience", value: "5+" },
  { id: "projects", value: "10+" },
  { id: "uptime", value: "99.9%" },
];
