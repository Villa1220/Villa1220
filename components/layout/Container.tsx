import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

/**
 * Centered, max-width content wrapper with consistent horizontal gutters.
 * Polymorphic via `as` so it can render semantic landmarks (section, header...).
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
