import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import HowItWorks from "@/components/sections/HowItWorks";
import CoreFeatures from "@/components/sections/CoreFeatures";
import Differentiation from "@/components/sections/Differentiation";
import AIFeatures from "@/components/sections/AIFeatures";
import PCOSAwareness from "@/components/sections/PCOSAwareness";
import BuiltForIndia from "@/components/sections/BuiltForIndia";
import Impact from "@/components/sections/Impact";
import TargetAudience from "@/components/sections/TargetAudience";
import StartupJourney from "@/components/sections/StartupJourney";
import Team from "@/components/sections/Team";
import InvestorSection from "@/components/sections/InvestorSection";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <CoreFeatures />
      <Differentiation />
      <AIFeatures />
      <PCOSAwareness />
      <BuiltForIndia />
      <Impact />
      <TargetAudience />
      <StartupJourney />
      <Team />
      <InvestorSection />
      <FAQ />
      <CTA />
    </div>
  );
}
