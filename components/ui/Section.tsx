import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("max-w-5xl mx-auto px-6 md:px-8", className)}>
      {children}
    </section>
  );
}
