import { SectionHeading } from "@/components/ui/SectionHeading";

const SOLUTIONS = [
  {
    number: "01",
    title: "Instant Quote Calculator",
    description:
      "Clients get estimated pricing immediately without waiting for a response.",
  },
  {
    number: "02",
    title: "WhatsApp AI Agent",
    description:
      "Routine enquiries are handled automatically 24/7, while complex questions are escalated to your team.",
  },
  {
    number: "03",
    title: "Shipment Tracking System",
    description:
      "Clients can check their cargo status independently, reducing constant follow-up calls.",
  },
  {
    number: "04",
    title: "Professional Digital Presence",
    description:
      "Your 23 years of experience and IATA certification are clearly and professionally presented online.",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]"
    >
      <SectionHeading
        eyebrow="Our Approach"
        title="How We’ll Help"
        lead="We don’t sell generic tools. We study how your business actually operates, then build systems that reduce friction and improve responsiveness."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOLUTIONS.map((solution) => (
          <div
            key={solution.number}
            className="border border-[#E5E5E5] rounded-2xl p-7 md:p-8 transition-colors duration-300 hover:border-[#232732]/30"
          >
            <div className="text-xs font-medium tracking-[0.2em] text-[#8E3947] mb-5">
              {solution.number}
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">{solution.title}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          Everything we build is shaped around how{" "}
          <span className="font-medium text-[#232732]">your</span> business wins
          and serves clients — not generic templates.
        </p>
      </div>
    </section>
  );
}
