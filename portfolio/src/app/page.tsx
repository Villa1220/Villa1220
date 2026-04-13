import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BentoSection } from "@/components/sections/bento-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        {/* Separador sutil */}
        <div
          aria-hidden
          className="mx-auto max-w-6xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <BentoSection />

        <div aria-hidden className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <ExperienceSection />

        <div aria-hidden className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
