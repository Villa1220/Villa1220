import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Stack } from "@/components/sections/Stack";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Stack />
      <Philosophy />
      <Contact />
    </>
  );
}
