import { WHATSAPP_URL } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "1",
    title: "Short Discussion",
    description: "A 20–30 minute call to answer any questions.",
  },
  {
    number: "2",
    title: "Agreement",
    description: "Simple contract and first payment.",
  },
  {
    number: "3",
    title: "Start Work",
    description: "We can begin within 5 working days.",
  },
];

export default function NextSteps() {
  return (
    <section
      id="next-steps"
      className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5] text-center"
    >
      <SectionHeading
        eyebrow="Next Steps"
        title="Ready When You Are"
        lead="If this direction makes sense for Confidence Cargo, here’s how we can move forward."
      />

      <div className="max-w-md mx-auto text-left space-y-5 mb-14">
        {STEPS.map((step) => (
          <div key={step.number} className="flex items-start gap-5">
            <div className="shrink-0 w-9 h-9 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm font-semibold">
              {step.number}
            </div>
            <div className="pt-1">
              <p className="font-semibold text-[16px]">{step.title}</p>
              <p className="text-[15px] text-[#6B7280] mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-[#232732] text-white hover:bg-black transition-colors"
      >
        Chat With Us on WhatsApp
      </a>

      <p className="text-[13px] text-[#9CA3AF] mt-6">
        I’m available to speak at your earliest convenience.
      </p>
    </section>
  );
}
