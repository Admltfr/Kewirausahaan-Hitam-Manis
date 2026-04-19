import ClosingCTASection from "./components/sections/ClosingCTASection";
import FlavorShowcaseSection from "./components/sections/FlavorShowcaseSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import InsightSection from "./components/sections/InsightSection";
import Navbar from "./components/sections/Navbar";
import StepsSection from "./components/sections/StepsSection";
import ValueSection from "./components/sections/ValueSection";
import BackToTopButton from "./components/ui/BackToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--bg-main)] text-[color:var(--ink-900)]">
      <Navbar />
      <main>
        <HeroSection />
        <InsightSection />
        <FlavorShowcaseSection />
        <ValueSection />
        <StepsSection />
        <ClosingCTASection />
      </main>
      <BackToTopButton />
      <FooterSection />
    </div>
  );
}
