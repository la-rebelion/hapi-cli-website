import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Examples } from "@/components/sections/Examples";
import { WhyHapi } from "@/components/sections/WhyHapi";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { useExitIntent } from "@/hooks/useExitIntent";

const Index = () => {
  console.log('Index page rendering...');
  const { showExitIntent, closeExitIntent } = useExitIntent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="examples">
        <Examples />
      </div>
      <div id="why-hapi">
        <WhyHapi />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <Footer />
      <ExitIntentModal open={showExitIntent} onClose={closeExitIntent} />
    </div>
  );
};

export default Index;
