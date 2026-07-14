export default function TimelineAndInvestment() {
  return (
    <section id="investment" className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5]">
      
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">
          Timeline & Investment
        </h2>
        <p className="text-lg text-[#4A4A4A]">
          A clear and transparent breakdown of the project timeline and investment.
        </p>
      </div>

      {/* Total Investment Highlight */}
      <div className="max-w-md mx-auto text-center mb-12">
        <p className="text-sm text-[#6B7280] mb-1">Total Investment</p>
        <p className="text-5xl font-semibold tracking-tighter">$7,500</p>
        <p className="text-sm text-[#6B7280] mt-1">3.5 months (14 weeks)</p>
      </div>

      {/* Phase Breakdown Table */}
      <div className="max-w-3xl mx-auto">
        <div className="border border-[#E5E5E5] rounded-2xl overflow-hidden">
          
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#F8F7F2] px-6 py-4 text-sm font-medium text-[#4A4A4A]">
            <div>Phase</div>
            <div>Focus</div>
            <div className="text-right">Investment</div>
          </div>

          {/* Phase 1 */}
          <div className="grid grid-cols-3 px-6 py-5 border-t border-[#E5E5E5] text-sm">
            <div>
              <span className="font-medium">Phase 1</span><br />
              <span className="text-[#6B7280]">7 weeks</span>
            </div>
            <div className="text-[#4A4A4A]">Website + Brand Identity + Core Tools</div>
            <div className="text-right font-medium">$4,000</div>
          </div>

          {/* Phase 2 */}
          <div className="grid grid-cols-3 px-6 py-5 border-t border-[#E5E5E5] text-sm">
            <div>
              <span className="font-medium">Phase 2</span><br />
              <span className="text-[#6B7280]">4 weeks</span>
            </div>
            <div className="text-[#4A4A4A]">Shipment Tracking & Updates</div>
            <div className="text-right font-medium">$1,800</div>
          </div>

          {/* Phase 3 */}
          <div className="grid grid-cols-3 px-6 py-5 border-t border-[#E5E5E5] text-sm">
            <div>
              <span className="font-medium">Phase 3</span><br />
              <span className="text-[#6B7280]">3 weeks</span>
            </div>
            <div className="text-[#4A4A4A]">Growth & Final Optimizations</div>
            <div className="text-right font-medium">$1,700</div>
          </div>

          {/* Total Row */}
          <div className="grid grid-cols-3 px-6 py-5 border-t border-[#E5E5E5] bg-[#F8F7F2] text-sm font-semibold">
            <div>Total</div>
            <div>Full Project</div>
            <div className="text-right">$7,500</div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-8 text-sm">
          <p className="font-medium mb-3">Payment Terms</p>
          <div className="space-y-2 text-[#4A4A4A]">
            <div className="flex justify-between">
              <span>40% to commence</span>
              <span className="font-medium">$3,000</span>
            </div>
            <div className="flex justify-between">
              <span>30% after Phase 1 delivery</span>
              <span className="font-medium">$2,250</span>
            </div>
            <div className="flex justify-between">
              <span>30% after Phase 2 delivery</span>
              <span className="font-medium">$2,250</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#6B7280] mt-6 text-center">
          All amounts are in USD. Invoicing in Naira is available at the prevailing exchange rate.
        </p>
      </div>

    </section>
  );
}
