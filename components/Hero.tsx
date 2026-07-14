"use client";

import { Button } from "./ui/Button";
import { WHATSAPP_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        
        {/* Small Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F4F4F5] text-sm mb-6">
          <span className="text-[#4A4A4A]">Proposal for Confidence Cargo Limited</span>
        </div>

        {/* Headline */}
        <h1 className="text-[36px] md:text-[56px] leading-[1.1] font-semibold tracking-[-1.5px] mb-6">
          Win More Clients with a<br /> Stronger Digital Presence
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#4A4A4A] mb-10">
          A focused proposal to help Confidence Cargo attract serious clients, 
          reduce manual work, and present the company professionally online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="md"
            onClick={() => window.location.href = '#interactive'}
          >
            See It In Action
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            Speak With Us
          </Button>
        </div>

        <p className="mt-6 text-sm text-[#6B7280]">
          Prepared by Wintech Studio • July 2026
        </p>
      </div>
    </section>
  );
}
