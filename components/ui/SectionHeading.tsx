interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-headline font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  );
}
