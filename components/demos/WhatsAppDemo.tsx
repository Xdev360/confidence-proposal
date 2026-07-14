"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { Mic, MoreVertical, Phone, Video } from "lucide-react";

const MESSAGES = [
  {
    from: "client",
    text: "Hello, how much to ship 500kg from Lagos to China?",
    time: "09:41",
  },
  {
    from: "ai",
    text: "Hi! Sea freight for 500kg (Lagos → Guangzhou) is ₦2.85M – ₦3.15M, 18–22 days. Would you like a formal quote?",
    time: "09:41",
  },
  {
    from: "client",
    text: "Yes please. Also, where is my package? CCL-28491",
    time: "09:42",
  },
  {
    from: "ai",
    text: "Your shipment CCL-28491 is currently In Transit. It left Lagos on Tuesday and arrives at Guangzhou port in about 6 days. You'll get an automatic update at every stage.",
    time: "09:42",
  },
  {
    from: "client",
    text: "Perfect, thank you!",
    time: "09:43",
  },
  {
    from: "ai",
    text: "You're welcome. I'm here 24/7 if you need anything else.",
    time: "09:43",
  },
] as const;

export default function WhatsAppDemo() {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chat = chatRef.current;
    if (!chat) return;

    const bubbles = gsap.utils.toArray<HTMLElement>(
      chat.querySelectorAll("[data-bubble]")
    );
    const typings = gsap.utils.toArray<HTMLElement>(
      chat.querySelectorAll("[data-typing]")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(bubbles, { display: "block", autoAlpha: 1 });
      return;
    }

    // Bubbles grow out of their "tail" corner like real chat apps
    bubbles.forEach((bubble) => {
      const isClient = bubble.dataset.bubble === "client";
      gsap.set(bubble, {
        transformOrigin: isClient ? "100% 100%" : "0% 100%",
      });
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    tl.set(bubbles, { display: "none" });
    tl.set(typings, { display: "none" });

    bubbles.forEach((bubble, i) => {
      const isAi = bubble.dataset.bubble === "ai";

      if (isAi) {
        const typing = chat.querySelector<HTMLElement>(`[data-typing="${i}"]`);
        if (typing) {
          tl.set(typing, { display: "block" }, "+=0.45");
          tl.fromTo(
            typing,
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }
          );
          tl.to({}, { duration: 1.05 });
          tl.set(typing, { display: "none" });
        }
      }

      tl.set(bubble, { display: "block" }, isAi ? undefined : "+=0.7");
      tl.fromTo(
        bubble,
        { autoAlpha: 0, y: 16, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    });

    // Hold the finished conversation, then drift it away gently before replaying
    tl.to(
      bubbles,
      {
        autoAlpha: 0,
        y: -12,
        duration: 0.55,
        stagger: 0.05,
        ease: "power2.in",
      },
      "+=3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-[#E5E5E5] overflow-hidden shadow-sm select-none">
      {/* Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold">
          CC
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-tight">Confidence Cargo</p>
          <p className="text-[11px] text-white/70 leading-tight">online</p>
        </div>
        <Video size={18} className="text-white/90" />
        <Phone size={16} className="text-white/90" />
        <MoreVertical size={18} className="text-white/90" />
      </div>

      {/* Chat area */}
      <div
        ref={chatRef}
        className="bg-[#ECE5DD] px-3 py-4 h-[350px] flex flex-col justify-end gap-2 overflow-hidden"
      >
        {MESSAGES.map((msg, i) => (
          <Fragment key={i}>
            {msg.from === "ai" && (
              <div
                data-typing={i}
                style={{ display: "none" }}
                className="self-start bg-white rounded-lg px-3 py-2.5 shadow-sm"
              >
                <span className="flex items-center gap-1">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            )}
            <div
              data-bubble={msg.from}
              style={{ display: "none" }}
              className={`max-w-[80%] rounded-lg px-3 py-2 shadow-sm text-[13px] leading-snug ${
                msg.from === "client"
                  ? "self-end bg-[#DCF8C6]"
                  : "self-start bg-white"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[10px] text-gray-500 text-right mt-0.5">
                {msg.time}
                {msg.from === "client" && (
                  <span className="text-[#53BDEB]"> ✓✓</span>
                )}
              </p>
            </div>
          </Fragment>
        ))}
      </div>

      {/* Input bar */}
      <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-[13px] text-[#6B7280]">
          Type a message
        </div>
        <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center">
          <Mic size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}
