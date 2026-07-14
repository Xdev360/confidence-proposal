export default function HowWeWorkTogether() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5]">
      
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">
          How We Work Together
        </h2>
        <p className="text-lg text-[#4A4A4A]">
          We believe clarity and communication are non-negotiable.
        </p>
      </div>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="border border-[#E5E5E5] rounded-2xl p-6">
          <h4 className="font-semibold mb-2">Weekly Updates</h4>
          <p className="text-[#4A4A4A]">You’ll receive clear progress updates during active phases.</p>
        </div>
        <div className="border border-[#E5E5E5] rounded-2xl p-6">
          <h4 className="font-semibold mb-2">Clear Deliverables</h4>
          <p className="text-[#4A4A4A]">Every phase has defined deliverables and timelines.</p>
        </div>
        <div className="border border-[#E5E5E5] rounded-2xl p-6">
          <h4 className="font-semibold mb-2">Direct Access</h4>
          <p className="text-[#4A4A4A]">You’ll work directly with the person handling your project.</p>
        </div>
        <div className="border border-[#E5E5E5] rounded-2xl p-6">
          <h4 className="font-semibold mb-2">Documented Decisions</h4>
          <p className="text-[#4A4A4A]">All key decisions are documented so nothing is left to assumption.</p>
        </div>
      </div>

      <p className="text-center text-sm text-[#4A4A4A] mt-10">
        You will always know what’s being worked on, why, and what comes next.
      </p>
    </section>
  );
}
