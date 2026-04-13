import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ─── Fuentes ─────────────────────────────────────────────────────────────── */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/* ─── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Portfolio — Desarrollador Full Stack",
    template: "%s · Portfolio",
  },
  description:
    "Portafolio profesional de desarrollo web. Proyectos construidos con Next.js, TypeScript y diseño centrado en el usuario.",
  keywords: ["portfolio", "desarrollador", "full stack", "next.js", "typescript", "react"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Portfolio — Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ─────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] font-sans antialiased selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
