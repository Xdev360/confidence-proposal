import { Check } from "lucide-react";

const PHASES = [
  {
    badge: "Phase 01",
    title: "Foundation",
    description:
      "Build the core infrastructure that stops losing clients due to slow response and weak first impressions.",
    items: [
      "Modern website redesign",
      "Brand Identity Refresh",
      "AI Instant Quote Calculator",
      "WhatsApp AI Agent (24/7 support)",
      "Strong credibility section",
    ],
    duration: "7 weeks",
  },
  {
    badge: "Phase 02",
    title: "Client Experience",
    description: "Reduce manual work and give clients more control and transparency.",
    items: [
      "Shipment Tracking system",
      "Automated WhatsApp status updates",
      "Self-service document access",
      "Fewer manual status enquiries",
    ],
    duration: "4 weeks",
  },
  {
    badge: "Phase 03",
    title: "Growth & Optimization",
    description: "Build long-term visibility and improve decision-making with data.",
    items: [
      "SEO-optimized content",
      "Performance tracking dashboard",
      "Refinements based on usage data",
    ],
    duration: "3 weeks",
  },
];

export default function PhaseBreakdown() {
  return (
    <section
      id="phases"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5]"
    >
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">
          A Practical 3-Phase Plan
        </h2>
        <p className="text-lg text-[#4A4A4A]">
          We recommend breaking the project into three clear phases. This
          approach allows you to see progress at each stage while keeping
          everything manageable.
        </p>
      </div>

      <div className="space-y-8">
        {PHASES.map((phase) => (
          <div
            key={phase.badge}
            className="bg-white border border-[#E5E5E5] rounded-[24px] p-8 md:p-12"
          >
            {/* Title + phase badge */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                {phase.title}
              </h3>
              <span className="shrink-0 rounded-full bg-[#E9F6EE] text-[#16A34A] text-sm font-medium px-4 py-1.5">
                {phase.badge}
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-lg text-[#9CA3AF] max-w-md leading-relaxed">
              {phase.description}
            </p>

            {/* Checklist */}
            <div className="mt-10 pl-1 md:pl-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {phase.items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} className="shrink-0 text-[#9CA3AF]" />
                  <span className="text-[#6B7280] text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Duration */}
            <div className="mt-12 flex items-center justify-between gap-4">
              <p className="text-xl md:text-2xl font-semibold tracking-tight">
                {phase.duration}
              </p>
              <span className="rounded-full border border-[#E5E5E5] px-6 py-2.5 text-sm font-medium text-[#6B7280]">
                Duration
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[#6B7280]">
          Total Timeline:{" "}
          <span className="font-medium text-[#232732]">3.5 months (14 weeks)</span>
        </p>
      </div>
    </section>
  );
}
