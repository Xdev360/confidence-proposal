"use client";

import { Button } from "./ui/Button";
import { WHATSAPP_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="pt-28 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          <span className="text-[13px] text-[#6B7280]">
            Proposal for Confidence Cargo Limited
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[36px] md:text-[56px] leading-[1.08] font-semibold tracking-[-0.03em] mb-6">
          Win More Clients with a Stronger Digital Presence
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-[#6B7280] leading-relaxed mb-10">
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

        <p className="mt-8 text-[13px] text-[#9CA3AF]">
          Prepared by Wintech Studio · July 2026
        </p>
      </div>
    </section>
  );
}
