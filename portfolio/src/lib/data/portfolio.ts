import type { Project, Skill, Experience } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "API Platform",
    description:
      "Plataforma de gestión de APIs con autenticación OAuth2, rate limiting y analytics en tiempo real.",
    tags: ["Next.js", "tRPC", "PostgreSQL", "Redis"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Design System",
    description:
      "Sistema de diseño interno con 60+ componentes accesibles, Storybook y pruebas visuales automatizadas.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    id: "proj-3",
    title: "CLI Toolkit",
    description:
      "Herramienta de línea de comandos para scaffolding de proyectos full-stack con opinionated conventions.",
    tags: ["Node.js", "Bun", "TypeScript"],
    href: "#",
    repoHref: "#",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend", level: 5 },
  { name: "React / Next.js", category: "frontend", level: 5 },
  { name: "Tailwind CSS", category: "frontend", level: 5 },
  { name: "Framer Motion", category: "frontend", level: 4 },
  { name: "Node.js", category: "backend", level: 5 },
  { name: "PostgreSQL", category: "backend", level: 4 },
  { name: "Redis", category: "backend", level: 4 },
  { name: "Docker", category: "tooling", level: 4 },
  { name: "Figma", category: "design", level: 3 },
];

export const experience: Experience[] = [
  {
    company: "Empresa A",
    role: "Senior Frontend Engineer",
    period: "2023 – Actualidad",
    description:
      "Lidero el desarrollo del frontend de una SaaS B2B con 50K+ usuarios activos mensuales.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
  },
  {
    company: "Empresa B",
    role: "Full Stack Developer",
    period: "2021 – 2023",
    description:
      "Construí y mantuve microservicios en Node.js y una SPA en React para el equipo de producto.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
];

export const hero = {
  greeting: "Hola, soy",
  name: "Tu Nombre",
  roles: ["Desarrollador Full Stack", "Ingeniero de UI", "Arquitecto de APIs"],
  bio: "Construyo productos digitales de alto rendimiento con atención obsesiva al detalle, la experiencia de usuario y el código limpio.",
  cta: {
    primary: { label: "Ver proyectos", href: "#projects" },
    secondary: { label: "Contactar", href: "#contact" },
  },
  stats: [
    { label: "Años de experiencia", value: "5+" },
    { label: "Proyectos entregados", value: "40+" },
    { label: "Tecnologías dominadas", value: "15+" },
  ],
};
