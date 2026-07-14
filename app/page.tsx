"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Opportunity from "@/components/sections/Opportunity";
import CurrentChallenges from "@/components/sections/CurrentChallenges";
import HowWeHelp from "@/components/sections/HowWeHelp";
import PhaseBreakdown from "@/components/sections/PhaseBreakdown";
import InteractiveExperience from "@/components/sections/InteractiveExperience";
import WhatYouWillExperience from "@/components/sections/WhatYouWillExperience";
import TimelineAndInvestment from "@/components/sections/TimelineAndInvestment";
import HowWeWorkTogether from "@/components/sections/HowWeWorkTogether";
import WhyWintechStudio from "@/components/sections/WhyWintechStudio";
import FAQ from "@/components/sections/FAQ";
import NextSteps from "@/components/sections/NextSteps";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {!isLoading && (
        <>
          <Navbar />
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <Opportunity />
          </Reveal>
          <Reveal>
            <CurrentChallenges />
          </Reveal>
          <Reveal>
            <HowWeHelp />
          </Reveal>
          <Reveal>
            <PhaseBreakdown />
          </Reveal>
          <Reveal>
            <InteractiveExperience />
          </Reveal>
          <Reveal>
            <WhatYouWillExperience />
          </Reveal>
          <Reveal>
            <TimelineAndInvestment />
          </Reveal>
          <Reveal>
            <HowWeWorkTogether />
          </Reveal>
          <Reveal>
            <WhyWintechStudio />
          </Reveal>
          <Reveal>
            <FAQ />
          </Reveal>
          <Reveal>
            <NextSteps />
          </Reveal>
          <Footer />
        </>
      )}
    </>
  );
}
