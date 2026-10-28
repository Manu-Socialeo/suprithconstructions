import React from 'react';
import { HardHat, Phone, MapPin, Mail, Download, MessageCircle, ShieldCheck } from 'lucide-react';
import { ENGINEER_PROFILE } from '../data/mockData';

interface FooterProps {
  onOpenContact: (subject?: string) => void;
  onOpenPrivacy: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenPrivacy,
  onOpenDownload,
}) => {
  return (
    <footer className="bg-[#041a1d] text-gray-400 pt-16 pb-24 sm:pb-16 px-6 sm:px-10 border-t border-white/10 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Authority Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-white font-extrabold text-xl font-display">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-[#052327]">
                <HardHat className="w-5 h-5 fill-[#052327]" />
              </div>
              <span>Suprith Constructions</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              Premier Civil Engineering &amp; Turnkey Home Construction firm in Mysore. Specialized in photorealistic 3D BIM modeling, earthquake-resistant RCC framing, and certified wholesale building materials supply.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>10-Year Personally Signed Structural Stability Guarantee</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact('Turnkey Residential Construction')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Turnkey Residential Construction
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact('3D Architectural Modeling Inquiry')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  3D Architectural Modeling &amp; BIM
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact('Commercial Complex Construction')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Commercial Complex Construction
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact('Materials Supply Inquiry')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Direct Materials Wholesale
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  10-Year Structural Guarantee Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Mysore Engineering Office
            </div>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  84/A, Ring Road, Vijayanagar 2nd Stage, Mysore, Karnataka 570017
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${ENGINEER_PROFILE.phone}`} className="hover:text-white transition-colors font-bold">
                  {ENGINEER_PROFILE.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <a href={`mailto:${ENGINEER_PROFILE.email}`} className="hover:text-white transition-colors">
                  {ENGINEER_PROFILE.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/919845012345?text=${encodeURIComponent(
                    "Hello Er. Suprith, I would like to schedule a site consultation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-400 transition-colors font-bold"
                >
                  Chat with Er. Suprith on WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/10"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Download Complete Site Files (.ZIP)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accreditation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Suprith Constructions. All rights reserved. Registered Civil Engineering Firm, Mysore, Karnataka.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <span>MCC / MUDA Registered</span>
            <span>·</span>
            <span>Chartered Structural Engineer</span>
            <span>·</span>
            <span>Approved Valuer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
