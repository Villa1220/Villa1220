import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors",
        variant === "default" && "bg-zinc-800 text-zinc-300 border border-zinc-700",
        variant === "accent" && "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30",
        variant === "muted" && "bg-zinc-900 text-zinc-500 border border-zinc-800",
        className
      )}
    >
      {children}
    </span>
  );
}
