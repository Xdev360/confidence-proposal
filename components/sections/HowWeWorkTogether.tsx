import { SectionHeading } from "@/components/ui/SectionHeading";

const PRINCIPLES = [
  {
    title: "Weekly Updates",
    description: "You’ll receive clear progress updates during active phases.",
  },
  {
    title: "Clear Deliverables",
    description: "Every phase has defined deliverables and timelines.",
  },
  {
    title: "Direct Access",
    description: "You’ll work directly with the person handling your project.",
  },
  {
    title: "Documented Decisions",
    description: "All key decisions are documented so nothing is left to assumption.",
  },
];

export default function HowWeWorkTogether() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]">
      <SectionHeading
        eyebrow="Working Together"
        title="How We Work Together"
        lead="We believe clarity and communication are non-negotiable."
      />

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.title}
            className="border border-[#E5E5E5] rounded-2xl p-7 transition-colors duration-300 hover:border-[#232732]/30"
          >
            <h3 className="text-[16px] font-semibold mb-2">{principle.title}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-[15px] text-[#6B7280] mt-12">
        You will always know what’s being worked on, why, and what comes next.
      </p>
    </section>
  );
}
