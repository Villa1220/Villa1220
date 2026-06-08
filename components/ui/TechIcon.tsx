import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiDotnet,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiDocker,
  SiGnubash,
  SiTailwindcss,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

interface TechMeta {
  readonly Icon: IconType;
  /** Brand color, or "current" to inherit the surrounding text color (theme-aware). */
  readonly color: string;
}

/**
 * Maps a technology label to its official brand icon and color.
 * Black/white brands (Next.js, Bash) inherit `currentColor` so they stay
 * legible in both light and dark themes.
 */
const TECH: Record<string, TechMeta> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "current" },
  "Vue.js": { Icon: SiVuedotjs, color: "#42B883" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "SQL Server": { Icon: DiMsqlServer, color: "#CC2927" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#00758F" },
  n8n: { Icon: SiN8N, color: "#EA4B71" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Azure: { Icon: VscAzure, color: "#0078D4" },
  Bash: { Icon: SiGnubash, color: "current" },
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  const tech = TECH[name];
  if (!tech) return null;

  const { Icon, color } = tech;
  return (
    <Icon
      className={className}
      color={color === "current" ? undefined : color}
      aria-hidden
    />
  );
}
