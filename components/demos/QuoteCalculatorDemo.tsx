"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const FIELDS = [
  { label: "Origin", value: "Lagos, Nigeria" },
  { label: "Destination", value: "Guangzhou, China" },
  { label: "Weight", value: "500 kg" },
  { label: "Cargo Type", value: "General Goods" },
];

export default function QuoteCalculatorDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const boxes = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-field]")
    );
    const values = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-value]")
    );
    const button = root.querySelector<HTMLElement>("[data-button]");
    const loading = root.querySelector<HTMLElement>("[data-loading]");
    const result = root.querySelector<HTMLElement>("[data-result]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      values.forEach((el, i) => (el.textContent = FIELDS[i].value));
      gsap.set(result, { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    const resetFields = () => values.forEach((el) => (el.textContent = ""));
    resetFields();

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
      onRepeat: resetFields,
    });

    tl.set(result, { autoAlpha: 0, y: 20, scale: 0.97 });
    tl.set(loading, { autoAlpha: 0 });
    tl.set(values, { autoAlpha: 1 });

    // Fill each field with a typing effect, highlighting the active one
    values.forEach((el, i) => {
      const text = FIELDS[i].value;
      const proxy = { p: 0 };

      tl.to(
        boxes[i],
        { borderColor: "#232732", duration: 0.25, ease: "power2.out" },
        i === 0 ? "+=0.4" : "+=0.15"
      );
      tl.fromTo(
        proxy,
        { p: 0 },
        {
          p: 1,
          duration: Math.max(0.5, text.length * 0.045),
          ease: "none",
          onUpdate: () => {
            el.textContent = text.slice(0, Math.round(text.length * proxy.p));
          },
        }
      );
      tl.to(boxes[i], { borderColor: "#E5E5E5", duration: 0.35 });
    });

    // Button press, brief calculation, then the estimate springs in
    tl.to(
      button,
      { scale: 0.96, duration: 0.09, yoyo: true, repeat: 1, ease: "power1.inOut" },
      "+=0.3"
    );
    tl.to(loading, { autoAlpha: 1, duration: 0.2 });
    tl.to(loading, { autoAlpha: 0, duration: 0.2 }, "+=0.8");
    tl.fromTo(
      result,
      { autoAlpha: 0, y: 20, scale: 0.97 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.4)" }
    );

    // Hold, then drift everything away gently before replaying
    tl.to(result, { autoAlpha: 0, y: -10, duration: 0.45, ease: "power2.in" }, "+=3");
    tl.to(values, { autoAlpha: 0, duration: 0.35, stagger: 0.04, ease: "power2.in" }, "<");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="w-full max-w-sm border border-[#E5E5E5] rounded-2xl bg-white shadow-sm overflow-hidden select-none"
    >
      <div className="px-5 py-4 border-b border-[#E5E5E5]">
        <p className="text-sm font-semibold">Instant Quote</p>
        <p className="text-xs text-[#6B7280] mt-0.5">Get an estimate in seconds</p>
      </div>

      <div className="p-5 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {FIELDS.map((field) => (
            <div
              key={field.label}
              data-field
              className="border border-[#E5E5E5] rounded-lg px-3 py-2"
            >
              <p className="text-[10px] uppercase tracking-wide text-[#6B7280]">
                {field.label}
              </p>
              <p data-value className="text-[13px] font-medium min-h-[18px]" />
            </div>
          ))}
        </div>

        <div
          data-button
          className="relative w-full bg-[#232732] text-white rounded-lg py-2.5 text-center text-sm font-medium"
        >
          Get Instant Quote
          <span
            data-loading
            className="absolute inset-0 flex items-center justify-center gap-1.5 bg-[#232732] rounded-lg opacity-0"
          >
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${d * 0.15}s` }}
              />
            ))}
          </span>
        </div>

        <div data-result className="bg-[#F8F7F2] rounded-xl p-4 opacity-0">
          <p className="text-xs text-[#6B7280] mb-1">Estimated Cost</p>
          <p className="text-lg font-semibold">₦2,850,000 – ₦3,150,000</p>
          <p className="text-xs text-[#6B7280] mt-1">
            Sea Freight · 18–22 days · Air option available
          </p>
        </div>
      </div>
    </div>
  );
}
