"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";

const STAGES = [
  { label: "Picked Up", time: "Mon, 09:14" },
  { label: "In Transit", time: "Tue, 14:02" },
  { label: "At Port", time: "Thu, 08:47" },
  { label: "Customs Clearance", time: "Fri, 11:30" },
  { label: "Out for Delivery", time: "Sat, 07:55" },
  { label: "Delivered", time: "Sat, 15:20" },
];

export default function TrackingDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const dots = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-dot]")
    );
    const rows = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-row]")
    );
    const line = root.querySelector<HTMLElement>("[data-line]");
    const status = root.querySelector<HTMLElement>("[data-status]");
    const toast = root.querySelector<HTMLElement>("[data-toast]");
    const stepper = root.querySelector<HTMLElement>("[data-stepper]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(dots, { backgroundColor: "#232732" });
      gsap.set(rows, { color: "#232732" });
      gsap.set(line, { scaleY: 1 });
      if (status) status.textContent = "Delivered";
      return;
    }

    const setStatus = (label: string) => {
      if (status) status.textContent = label;
    };

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.4,
      onRepeat: () => setStatus(STAGES[0].label),
    });

    // Reset happens while the stepper is invisible, so the loop never
    // looks like it's rewinding
    tl.set(line, { scaleY: 0, transformOrigin: "top center" });
    tl.set(dots, { backgroundColor: "#E5E5E5", scale: 1 });
    tl.set(rows, { color: "#9CA3AF" });
    tl.set(toast, { x: "120%", autoAlpha: 0 });
    tl.to(stepper, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });

    STAGES.forEach((stage, i) => {
      tl.to(
        line,
        {
          scaleY: i / (STAGES.length - 1),
          duration: 0.55,
          ease: "power2.inOut",
        },
        i === 0 ? "+=0.4" : "+=0.85"
      );

      // Dot pops as its stage activates
      tl.to(
        dots[i],
        { backgroundColor: "#232732", scale: 1.35, duration: 0.2, ease: "power2.out" },
        "<+=0.2"
      );
      tl.to(dots[i], { scale: 1, duration: 0.3, ease: "power2.inOut" });
      tl.to(rows[i], { color: "#232732", duration: 0.3 }, "<");

      // Status pill crossfades to the new stage
      tl.to(status, { autoAlpha: 0, duration: 0.15 }, "<");
      tl.call(() => setStatus(stage.label));
      tl.to(status, { autoAlpha: 1, duration: 0.25 });

      // WhatsApp notification pops in when cargo goes In Transit
      if (i === 1) {
        tl.to(toast, {
          x: "0%",
          autoAlpha: 1,
          duration: 0.5,
          ease: "back.out(1.2)",
        });
        tl.to(
          toast,
          { x: "120%", autoAlpha: 0, duration: 0.4, ease: "power2.in" },
          "+=1.8"
        );
      }
    });

    // Hold the delivered state, then fade out gently before replaying
    tl.to(stepper, { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "+=2.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-sm border border-[#E5E5E5] rounded-2xl bg-white shadow-sm overflow-hidden select-none"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E5E5E5] flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-[#6B7280]">
            Tracking Number
          </p>
          <p className="text-sm font-semibold">CCL-28491</p>
        </div>
        <span
          data-status
          className="text-xs font-medium bg-[#F8F7F2] border border-[#E5E5E5] rounded-full px-3 py-1"
        >
          Picked Up
        </span>
      </div>

      {/* Stepper */}
      <div className="p-5">
        <div data-stepper className="relative pl-6">
          {/* Track + progress line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#E5E5E5]" />
          <div
            data-line
            className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#232732] origin-top scale-y-0"
          />

          <div className="space-y-5">
            {STAGES.map((stage) => (
              <div key={stage.label} data-row className="relative text-[#9CA3AF]">
                <span
                  data-dot
                  className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#E5E5E5]"
                />
                <p className="text-sm font-medium leading-tight">{stage.label}</p>
                <p className="text-[11px] mt-0.5">{stage.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp notification toast */}
      <div
        data-toast
        className="absolute top-3 right-3 w-64 bg-white border border-[#E5E5E5] rounded-xl shadow-md p-3 flex gap-2.5 opacity-0"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle size={15} className="text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold leading-tight">WhatsApp</p>
          <p className="text-[11px] text-[#4A4A4A] leading-snug mt-0.5">
            Confidence Cargo: Your shipment CCL-28491 is now In Transit.
          </p>
        </div>
      </div>
    </div>
  );
}
