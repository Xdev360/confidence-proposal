import { WHATSAPP_URL } from "@/lib/site";

export default function NextSteps() {
  return (
    <section id="next-steps" className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5] text-center">
      
      <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-4">
        Next Steps
      </h2>
      <p className="text-lg text-[#4A4A4A] mb-10">
        If this direction makes sense for Confidence Cargo, here’s how we can move forward.
      </p>

      <div className="max-w-md mx-auto text-left space-y-6 mb-12">
        <div className="flex gap-4">
          <div className="font-semibold w-6">1.</div>
          <div>
            <span className="font-medium">Short Discussion</span> — A 20–30 minute call to answer any questions.
          </div>
        </div>
        <div className="flex gap-4">
          <div className="font-semibold w-6">2.</div>
          <div>
            <span className="font-medium">Agreement</span> — Simple contract and first payment.
          </div>
        </div>
        <div className="flex gap-4">
          <div className="font-semibold w-6">3.</div>
          <div>
            <span className="font-medium">Start Work</span> — We can begin within 5 working days.
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-[#232732] text-white hover:bg-black transition-colors"
      >
        Chat With Us on WhatsApp
      </a>

      <p className="text-sm text-[#4A4A4A] mt-6">
        I’m available to speak at your earliest convenience.
      </p>
    </section>
  );
}
