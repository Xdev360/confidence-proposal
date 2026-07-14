"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire preloader
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Typing effect
    const text = "Opening Proposal for Confidence Cargo";
    const chars = text.split("");

    chars.forEach((char, index) => {
      tl.to(textRef.current, {
        duration: 0.035,
        onUpdate: function () {
          if (textRef.current) {
            textRef.current.textContent = text.substring(0, index + 1);
          }
        },
      });
    });

    // Progress bar animation (starts after typing begins)
    tl.to(
      progressRef.current,
      {
        width: "100%",
        duration: 2.2,
        ease: "power1.inOut",
      },
      0.8 // Delay progress bar slightly
    );
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#232732]"
    >
      <div className="w-full max-w-md px-6">
        {/* Typing Text */}
        <p
          ref={textRef}
          className="font-gellix text-white text-xl md:text-2xl tracking-tight mb-8 min-h-[32px]"
        />

        {/* Progress Bar Container */}
        <div className="w-full h-[1px] bg-white/20 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white w-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
