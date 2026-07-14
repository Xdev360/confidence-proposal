import { SectionHeading } from "@/components/ui/SectionHeading";

const CHALLENGES = [
  {
    number: "01",
    title: "No Instant Pricing",
    description:
      "Clients must fill a form and wait for a response. Many simply move on to faster competitors.",
  },
  {
    number: "02",
    title: "High Volume of Manual Enquiries",
    description:
      "Your team spends too much time answering repetitive questions about shipment status.",
  },
  {
    number: "03",
    title: "No Self-Service Tracking",
    description:
      "Clients have no way to check their cargo status independently, leading to constant calls and messages.",
  },
  {
    number: "04",
    title: "Weak Digital Credibility",
    description:
      "Your 23 years of experience and IATA certification are not strongly communicated online.",
  },
];

export default function CurrentChallenges() {
  return (
    <section
      id="challenges"
      className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]"
    >
      <SectionHeading
        eyebrow="Current Challenges"
        title="Your Current Digital Setup Is Limiting Growth"
        lead="After reviewing your website and digital presence, here are the key issues holding Confidence Cargo back."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHALLENGES.map((challenge) => (
          <div
            key={challenge.number}
            className="border border-[#E5E5E5] rounded-2xl p-7 md:p-8 transition-colors duration-300 hover:border-[#232732]/30"
          >
            <div className="text-xs font-medium tracking-[0.2em] text-[#8E3947] mb-5">
              {challenge.number}
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">{challenge.title}</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
