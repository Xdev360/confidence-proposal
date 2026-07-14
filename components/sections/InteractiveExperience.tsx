import QuoteCalculatorDemo from "@/components/demos/QuoteCalculatorDemo";
import WhatsAppDemo from "@/components/demos/WhatsAppDemo";
import TrackingDemo from "@/components/demos/TrackingDemo";
import { SectionHeading } from "@/components/ui/SectionHeading";

const DEMOS = [
  {
    number: "Demo 01",
    title: "AI Instant Quote Calculator",
    description:
      "A client enters their shipment details and gets an estimated price instantly — no forms, no waiting for a callback.",
    component: <QuoteCalculatorDemo />,
    reverse: false,
  },
  {
    number: "Demo 02",
    title: "WhatsApp AI Agent",
    description:
      "Routine enquiries are answered automatically 24/7, exactly where your clients already are — on WhatsApp.",
    component: <WhatsAppDemo />,
    reverse: true,
  },
  {
    number: "Demo 03",
    title: "Shipment Tracking",
    description:
      "Clients follow their cargo from pickup to delivery on their own, with automatic WhatsApp updates at every stage.",
    component: <TrackingDemo />,
    reverse: false,
  },
];

export default function InteractiveExperience() {
  return (
    <section
      id="interactive"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]"
    >
      <SectionHeading
        eyebrow="Live Previews"
        title="See the Tools in Action"
        lead="These previews play automatically — no clicks needed. They show how each tool will feel for your clients and your team."
      />

      <div className="space-y-8">
        {DEMOS.map((demo) => (
          <div
            key={demo.number}
            className={`rounded-[24px] bg-[#F7F6F3] p-8 md:p-12 md:flex md:items-center md:gap-12 ${
              demo.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="mb-10 md:mb-0 md:w-2/5">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8E3947]">
                {demo.number}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-3">
                {demo.title}
              </h3>
              <p className="text-[15px] text-[#6B7280] mt-3 leading-relaxed">
                {demo.description}
              </p>
            </div>
            <div className="md:flex-1 flex justify-center">{demo.component}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-[#6B7280]">
          These are simplified previews. The final versions will be fully
          integrated with your operations.
        </p>
      </div>
    </section>
  );
}
