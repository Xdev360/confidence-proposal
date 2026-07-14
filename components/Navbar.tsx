"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-semibold text-lg tracking-tight">Wintech Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#opportunity" className="hover:text-[#8E3947] transition-colors">The Opportunity</a>
            <a href="#phases" className="hover:text-[#8E3947] transition-colors">Phase Breakdown</a>
            <a href="#interactive" className="hover:text-[#8E3947] transition-colors">Interactive Experience</a>
            <a href="#investment" className="hover:text-[#8E3947] transition-colors">Investment</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '#next-steps'}
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
            <a href="#opportunity" className="py-1">The Opportunity</a>
            <a href="#phases" className="py-1">Phase Breakdown</a>
            <a href="#interactive" className="py-1">Interactive Experience</a>
            <a href="#investment" className="py-1">Investment</a>
            <Button 
              variant="primary" 
              className="mt-2 w-full"
              onClick={() => window.location.href = '#next-steps'}
            >
              Speak With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
