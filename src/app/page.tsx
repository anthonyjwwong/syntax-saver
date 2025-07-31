import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/FeatureSection";
import LanguageSection from "@/components/landing/LanguageSection";
import PriceSection from "@/components/landing/PriceSection";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />

        <FeatureSection />
        <LanguageSection />
        <PriceSection />
      </main>
    </div>
  );
}
