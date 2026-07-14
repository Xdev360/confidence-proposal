import { WHATSAPP_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#232732] text-white mt-10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="font-semibold text-lg tracking-tight">Wintech Studio</p>
            <p className="text-sm text-white/60 mt-2 max-w-xs leading-relaxed">
              A Lagos-based design and digital product studio helping
              established businesses build modern systems that drive growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 text-sm">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-3">
                Proposal
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#opportunity" className="text-white/80 hover:text-white transition-colors">
                    The Opportunity
                  </a>
                </li>
                <li>
                  <a href="#phases" className="text-white/80 hover:text-white transition-colors">
                    Phase Breakdown
                  </a>
                </li>
                <li>
                  <a href="#interactive" className="text-white/80 hover:text-white transition-colors">
                    Interactive Experience
                  </a>
                </li>
                <li>
                  <a href="#investment" className="text-white/80 hover:text-white transition-colors">
                    Investment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-3">
                Get in Touch
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-white text-[#232732] hover:bg-white/90 transition-colors"
              >
                Speak With Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/50">
          <p>© 2026 Wintech Studio. All rights reserved.</p>
          <p>Prepared exclusively for Confidence Cargo Limited · Confidential</p>
        </div>
      </div>
    </footer>
  );
}
