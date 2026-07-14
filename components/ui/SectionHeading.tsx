interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8E3947] mb-5">
        {eyebrow}
      </p>
      <h2 className="text-[32px] md:text-[48px] leading-[1.12] font-semibold tracking-[-0.02em]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-base md:text-lg text-[#6B7280] leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}
