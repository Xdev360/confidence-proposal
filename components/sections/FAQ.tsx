import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    question: "Will I understand what’s being built?",
    answer:
      "Yes. We document everything clearly. You’ll always know what’s being worked on and why.",
  },
  {
    question: "What if I don’t like something?",
    answer:
      "We build in feedback rounds at key stages. Your input shapes the final outcome.",
  },
  {
    question: "How long before I see results?",
    answer:
      "You’ll begin seeing improvements after Phase 1 goes live (within 7 weeks).",
  },
  {
    question: "Can we start with just one phase first?",
    answer:
      "Yes. We can begin with Phase 1 only and decide on the next phases later.",
  },
  {
    question: "What if my team needs training?",
    answer:
      "We’ll provide simple documentation and a short walkthrough so your team can use the new tools comfortably.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

      <div className="divide-y divide-[#E5E5E5]">
        {FAQS.map((faq) => (
          <div key={faq.question} className="py-7 first:pt-0 last:pb-0">
            <h3 className="text-[16px] font-semibold mb-2.5">{faq.question}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
