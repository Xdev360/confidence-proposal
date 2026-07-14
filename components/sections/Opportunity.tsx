export default function Opportunity() {
  return (
    <section id="opportunity" className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24">
      
      {/* Headline */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">
          The Way Clients Engage Has Changed
        </h2>
        <p className="text-lg text-[#4A4A4A]">
          Serious importers now expect faster responses, instant pricing, 
          and the ability to track their shipments without calling.
        </p>
      </div>

      {/* Key Points - Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#232732] transition-colors">
          <div className="text-sm font-medium text-[#8E3947] mb-3">01</div>
          <h3 className="font-semibold mb-2">Instant Responses</h3>
          <p className="text-sm text-[#4A4A4A]">Clients expect quick answers, not long waiting periods.</p>
        </div>

        <div className="border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#232732] transition-colors">
          <div className="text-sm font-medium text-[#8E3947] mb-3">02</div>
          <h3 className="font-semibold mb-2">Instant Pricing</h3>
          <p className="text-sm text-[#4A4A4A]">They want to see costs immediately without filling forms.</p>
        </div>

        <div className="border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#232732] transition-colors">
          <div className="text-sm font-medium text-[#8E3947] mb-3">03</div>
          <h3 className="font-semibold mb-2">Self-Service Tracking</h3>
          <p className="text-sm text-[#4A4A4A]">Clients want to check their cargo status independently.</p>
        </div>

        <div className="border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#232732] transition-colors">
          <div className="text-sm font-medium text-[#8E3947] mb-3">04</div>
          <h3 className="font-semibold mb-2">Professional Experience</h3>
          <p className="text-sm text-[#4A4A4A]">They judge your company by how modern your digital presence feels.</p>
        </div>

      </div>

      {/* Bottom Statement */}
      <div className="mt-12 text-center">
        <p className="text-[#4A4A4A] max-w-xl mx-auto">
          Companies that fail to meet these expectations are quietly losing clients 
          to more responsive competitors — even when their actual operations are stronger.
        </p>
      </div>

    </section>
  );
}
