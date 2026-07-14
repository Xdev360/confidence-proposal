import { SectionHeading } from "@/components/ui/SectionHeading";

export default function WhyWintechStudio() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E5E5E5]">
      <SectionHeading eyebrow="About Us" title="Why Wintech Studio" />

      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-lg md:text-xl font-medium text-[#232732] leading-relaxed">
          Wintech Studio is a Lagos-based design and digital product studio that
          helps established Nigerian businesses build modern systems that drive
          growth.
        </p>
        <p className="text-base text-[#4A4A4A] leading-[1.8]">
          We work directly on every project — from strategy to execution. We
          don’t hand off work to junior teams.
        </p>
        <p className="text-base text-[#4A4A4A] leading-[1.8]">
          While we offer services like brand identity, website design, and
          product systems,{" "}
          <span className="font-medium text-[#232732]">
            intelligent automation
          </span>{" "}
          is one important part of what we do — helping companies reduce manual
          work and respond faster without adding more pressure on the team.
        </p>
        <p className="text-base text-[#4A4A4A] leading-[1.8]">
          We are selective about the clients we work with. We partner with
          owners who are serious about running a more modern and efficient
          operation.
        </p>
      </div>
    </section>
  );
}
