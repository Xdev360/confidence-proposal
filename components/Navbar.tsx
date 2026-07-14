"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { WHATSAPP_URL } from "@/lib/site";

const LINKS = [
  { href: "#opportunity", label: "The Opportunity" },
  { href: "#phases", label: "Phase Breakdown" },
  { href: "#interactive", label: "Interactive Experience" },
  { href: "#investment", label: "Investment" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-semibold text-[15px] tracking-tight">
            Wintech Studio
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#4A4A4A] hover:text-[#232732] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Speak With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-[#232732]"></div>
              <div className="w-5 h-0.5 bg-[#232732]"></div>
              <div className="w-5 h-0.5 bg-[#232732]"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white px-6 py-4">
          <div className="flex flex-col gap-4 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-[#4A4A4A]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="mt-2 w-full"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Speak With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
