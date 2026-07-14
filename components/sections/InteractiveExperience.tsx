import QuoteCalculatorDemo from "@/components/demos/QuoteCalculatorDemo";
import WhatsAppDemo from "@/components/demos/WhatsAppDemo";
import TrackingDemo from "@/components/demos/TrackingDemo";

export default function InteractiveExperience() {
  return (
    <section
      id="interactive"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5]"
    >
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">See the Tools in Action</h2>
        <p className="text-lg text-[#4A4A4A]">
          These previews play automatically — no clicks needed. They show how
          each tool will feel for your clients and your team.
        </p>
      </div>

      <div className="space-y-10">
        {/* 1. AI Instant Quote Calculator */}
        <div className="border border-[#E5E5E5] rounded-2xl p-8 md:flex md:items-center md:gap-12">
          <div className="mb-8 md:mb-0 md:w-2/5">
            <span className="text-sm font-medium text-[#8E3947]">DEMO 01</span>
            <h3 className="text-xl font-semibold mt-1">
              AI Instant Quote Calculator
            </h3>
            <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
              A client enters their shipment details and gets an estimated
              price instantly — no forms, no waiting for a callback.
            </p>
          </div>
          <div className="md:flex-1 flex justify-center">
            <QuoteCalculatorDemo />
          </div>
        </div>

        {/* 2. WhatsApp AI Agent */}
        <div className="border border-[#E5E5E5] rounded-2xl p-8 md:flex md:items-center md:gap-12">
          <div className="mb-8 md:mb-0 md:w-2/5">
            <span className="text-sm font-medium text-[#8E3947]">DEMO 02</span>
            <h3 className="text-xl font-semibold mt-1">WhatsApp AI Agent</h3>
            <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
              Routine enquiries are answered automatically 24/7, exactly where
              your clients already are — on WhatsApp.
            </p>
          </div>
          <div className="md:flex-1 flex justify-center">
            <WhatsAppDemo />
          </div>
        </div>

        {/* 3. Shipment Tracking */}
        <div className="border border-[#E5E5E5] rounded-2xl p-8 md:flex md:items-center md:gap-12">
          <div className="mb-8 md:mb-0 md:w-2/5">
            <span className="text-sm font-medium text-[#8E3947]">DEMO 03</span>
            <h3 className="text-xl font-semibold mt-1">Shipment Tracking</h3>
            <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
              Clients follow their cargo from pickup to delivery on their own,
              with automatic WhatsApp updates at every stage.
            </p>
          </div>
          <div className="md:flex-1 flex justify-center">
            <TrackingDemo />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[#6B7280]">
          These are simplified previews. The final versions will be fully
          integrated with your operations.
        </p>
      </div>
    </section>
  );
}
