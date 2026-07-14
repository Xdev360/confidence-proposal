"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { Lock, Mic, MoreVertical, Phone, Video } from "lucide-react";

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
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bubbles = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-bubble]")
    );
    const typings = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-typing]")
    );
    const presence = root.querySelector<HTMLElement>("[data-presence]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(bubbles, { display: "block", autoAlpha: 1 });
      return;
    }

    // Bubbles grow out of their "tail" corner like real chat apps
    bubbles.forEach((bubble) => {
      const isClient = bubble.dataset.bubble === "client";
      gsap.set(bubble, {
        transformOrigin: isClient ? "100% 0%" : "0% 0%",
      });
    });

    const setPresence = (text: string) => {
      if (presence) presence.textContent = text;
    };

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
      onRepeat: () => setPresence("online"),
    });
    tl.set(bubbles, { display: "none" });
    tl.set(typings, { display: "none" });

    bubbles.forEach((bubble, i) => {
      const isAi = bubble.dataset.bubble === "ai";

      if (isAi) {
        const typing = root.querySelector<HTMLElement>(`[data-typing="${i}"]`);
        if (typing) {
          tl.set(typing, { display: "block" }, "+=0.65");
          tl.call(() => setPresence("typing…"));
          tl.fromTo(
            typing,
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }
          );
          tl.to({}, { duration: 1.4 });
          tl.set(typing, { display: "none" });
          tl.call(() => setPresence("online"));
        }
      }

      tl.set(bubble, { display: "block" }, isAi ? undefined : "+=1");
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
      "+=3.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="w-full max-w-sm rounded-2xl border border-[#E5E5E5] overflow-hidden shadow-[0_8px_30px_rgba(35,39,50,0.08)] select-none"
    >
      {/* Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-semibold">
          CC
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-tight">Confidence Cargo</p>
          <p data-presence className="text-[11px] text-white/70 leading-tight">
            online
          </p>
        </div>
        <Video size={18} className="text-white/80" />
        <Phone size={16} className="text-white/80" />
        <MoreVertical size={18} className="text-white/80" />
      </div>

      {/* Chat area */}
      <div className="bg-[#ECE5DD] [background-image:radial-gradient(#dbd2c4_1px,transparent_1px)] [background-size:16px_16px] px-3 py-4 h-[380px] flex flex-col justify-end gap-2 overflow-hidden">
        {/* Date + encryption chips */}
        <div className="flex flex-col items-center gap-1.5 mb-1">
          <span className="bg-white/90 text-[#54656F] text-[11px] rounded-md px-2.5 py-1 shadow-sm">
            Today
          </span>
          <span className="flex items-center gap-1 bg-[#FDF4C5] text-[#54656F] text-[10.5px] rounded-md px-2.5 py-1.5 text-center shadow-sm">
            <Lock size={10} className="shrink-0" />
            Messages are end-to-end encrypted
          </span>
        </div>

        {MESSAGES.map((msg, i) => (
          <Fragment key={i}>
            {msg.from === "ai" && (
              <div
                data-typing={i}
                style={{ display: "none" }}
                className="self-start bg-white rounded-lg rounded-tl-none px-3 py-2.5 shadow-sm"
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
              className={`max-w-[80%] px-3 py-2 shadow-sm text-[13px] leading-snug ${
                msg.from === "client"
                  ? "self-end bg-[#DCF8C6] rounded-lg rounded-tr-none"
                  : "self-start bg-white rounded-lg rounded-tl-none"
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
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-[13px] text-[#9CA3AF]">
          Type a message
        </div>
        <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center">
          <Mic size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}
