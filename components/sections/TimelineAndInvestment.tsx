import { SectionHeading } from "@/components/ui/SectionHeading";

const ROWS = [
  {
    phase: "Phase 1",
    duration: "7 weeks",
    focus: "Website + Brand Identity + Core Tools",
    amount: "$4,000",
  },
  {
    phase: "Phase 2",
    duration: "4 weeks",
    focus: "Shipment Tracking & Updates",
    amount: "$1,800",
  },
  {
    phase: "Phase 3",
    duration: "3 weeks",
    focus: "Growth & Final Optimizations",
    amount: "$1,700",
  },
];

const PAYMENT_TERMS = [
  { label: "40% to commence", amount: "$3,000" },
  { label: "30% after Phase 1 delivery", amount: "$2,250" },
  { label: "30% after Phase 2 delivery", amount: "$2,250" },
];

export default function TimelineAndInvestment() {
  return (
    <section
      id="investment"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]"
    >
      <SectionHeading
        eyebrow="Investment"
        title="Timeline & Investment"
        lead="A clear and transparent breakdown of the project timeline and investment."
      />

      {/* Total Investment Highlight */}
      <div className="max-w-md mx-auto text-center mb-14">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280] mb-3">
          Total Investment
        </p>
        <p className="text-5xl md:text-6xl font-semibold tracking-[-0.03em]">
          $7,500
        </p>
        <p className="text-sm text-[#6B7280] mt-3">3.5 months (14 weeks)</p>
      </div>

      {/* Phase Breakdown Table */}
      <div className="max-w-3xl mx-auto">
        <div className="border border-[#E5E5E5] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1.6fr_auto] gap-4 bg-[#F7F6F3] px-6 py-4 text-xs uppercase tracking-wide font-medium text-[#6B7280]">
            <div>Phase</div>
            <div>Focus</div>
            <div className="text-right">Investment</div>
          </div>

          {ROWS.map((row) => (
            <div
              key={row.phase}
              className="grid grid-cols-[1fr_1.6fr_auto] gap-4 px-6 py-5 border-t border-[#E5E5E5] text-sm items-center"
            >
              <div>
                <span className="font-medium">{row.phase}</span>
                <span className="block text-[#9CA3AF] text-[13px] mt-0.5">
                  {row.duration}
                </span>
              </div>
              <div className="text-[#6B7280] leading-relaxed">{row.focus}</div>
              <div className="text-right font-semibold">{row.amount}</div>
            </div>
          ))}

          {/* Total Row */}
          <div className="grid grid-cols-[1fr_1.6fr_auto] gap-4 px-6 py-5 border-t border-[#E5E5E5] bg-[#F7F6F3] text-sm font-semibold items-center">
            <div>Total</div>
            <div>Full Project</div>
            <div className="text-right">$7,500</div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-8 border border-[#E5E5E5] rounded-2xl p-6 md:p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280] mb-5">
            Payment Terms
          </p>
          <div className="space-y-3.5">
            {PAYMENT_TERMS.map((term) => (
              <div
                key={term.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-[#6B7280]">{term.label}</span>
                <span className="font-semibold">{term.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[13px] text-[#9CA3AF] mt-6 text-center">
          All amounts are in USD. Invoicing in Naira is available at the prevailing exchange rate.
        </p>
      </div>
    </section>
  );
}
