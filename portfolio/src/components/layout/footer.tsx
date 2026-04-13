export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>
          © {year} Tu Nombre. Construido con{" "}
          <span className="text-zinc-500">Next.js 15</span>,{" "}
          <span className="text-zinc-500">Tailwind CSS v4</span> y{" "}
          <span className="text-zinc-500">Framer Motion</span>.
        </p>
        <p className="font-mono">Diseñado con atención al detalle.</p>
      </div>
    </footer>
  );
}
