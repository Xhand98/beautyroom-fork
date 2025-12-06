import { HeroSection } from "@/components/home/hero";
import { CtaSection } from "@/components/home/ctaSection"

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <HeroSection />
      <CtaSection/>
    </div>
  );
}
