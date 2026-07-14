export default function FAQ() {
  const faqs = [
    {
      question: "Will I understand what’s being built?",
      answer: "Yes. We document everything clearly. You’ll always know what’s being worked on and why.",
    },
    {
      question: "What if I don’t like something?",
      answer: "We build in feedback rounds at key stages. Your input shapes the final outcome.",
    },
    {
      question: "How long before I see results?",
      answer: "You’ll begin seeing improvements after Phase 1 goes live (within 7 weeks).",
    },
    {
      question: "Can we start with just one phase first?",
      answer: "Yes. We can begin with Phase 1 only and decide on the next phases later.",
    },
    {
      question: "What if my team needs training?",
      answer: "We’ll provide simple documentation and a short walkthrough so your team can use the new tools comfortably.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-[#E5E5E5]">
      
      <div className="text-center mb-12">
        <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-semibold tracking-tight mb-3">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#E5E5E5] pb-6">
            <h4 className="font-semibold mb-2">{faq.question}</h4>
            <p className="text-sm text-[#4A4A4A]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
