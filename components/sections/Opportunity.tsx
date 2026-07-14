import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = [
  {
    number: "01",
    title: "Instant Responses",
    description: "Clients expect quick answers, not long waiting periods.",
  },
  {
    number: "02",
    title: "Instant Pricing",
    description: "They want to see costs immediately without filling forms.",
  },
  {
    number: "03",
    title: "Self-Service Tracking",
    description: "Clients want to check their cargo status independently.",
  },
  {
    number: "04",
    title: "Professional Experience",
    description: "They judge your company by how modern your digital presence feels.",
  },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
      <SectionHeading
        eyebrow="The Opportunity"
        title="The Way Clients Engage Has Changed"
        lead="Serious importers now expect faster responses, instant pricing, and the ability to track their shipments without calling."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {POINTS.map((point) => (
          <div
            key={point.number}
            className="border border-[#E5E5E5] rounded-2xl p-7 transition-colors duration-300 hover:border-[#232732]/30"
          >
            <div className="text-xs font-medium tracking-[0.2em] text-[#8E3947] mb-5">
              {point.number}
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">{point.title}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          Companies that fail to meet these expectations are quietly losing clients 
          to more responsive competitors — even when their actual operations are stronger.
        </p>
      </div>
    </section>
  );
}
