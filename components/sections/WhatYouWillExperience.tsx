import { SectionHeading } from "@/components/ui/SectionHeading";

const OUTCOMES = [
  {
    number: "01",
    title: "More Qualified Leads",
    description:
      "Clients can get instant quotes and engage with you faster, increasing conversion.",
  },
  {
    number: "02",
    title: "Less Manual Work",
    description:
      "Routine enquiries and status updates are handled automatically, freeing your team.",
  },
  {
    number: "03",
    title: "Better Client Experience",
    description:
      "Clients can track shipments and access documents themselves without calling.",
  },
  {
    number: "04",
    title: "Stronger Professional Image",
    description:
      "Your 23 years of experience and IATA certification are clearly presented online.",
  },
  {
    number: "05",
    title: "Faster Response Time",
    description:
      "The WhatsApp AI Agent handles enquiries 24/7, even outside business hours.",
  },
  {
    number: "06",
    title: "Clearer Business Visibility",
    description:
      "You’ll have better insight into how clients are interacting with your business.",
  },
];

export default function WhatYouWillExperience() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]">
      <SectionHeading
        eyebrow="Outcomes"
        title="What You’ll Experience"
        lead="By the end of this project, Confidence Cargo will have a stronger, more efficient, and more professional digital presence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {OUTCOMES.map((outcome) => (
          <div
            key={outcome.number}
            className="border border-[#E5E5E5] rounded-2xl p-7 transition-colors duration-300 hover:border-[#232732]/30"
          >
            <div className="text-xs font-medium tracking-[0.2em] text-[#8E3947] mb-5">
              {outcome.number}
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">{outcome.title}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
