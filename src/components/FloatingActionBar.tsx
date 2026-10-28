import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ENGINEER_PROFILE } from '../data/mockData';

interface FloatingActionBarProps {
  onOpenContact: (subject?: string) => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenContact,
}) => {
  const whatsappUrl = `https://wa.me/919845012345?text=${encodeURIComponent(
    "Hello Er. Suprith, I saw your website and would like to consult with you about building a house in Mysore."
  )}`;

  return (
    <>
      {/* Mobile Sticky Bottom Floating Action Bar with Safe Area */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#041a1d]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-3 sm:hidden shadow-2xl"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Er. Suprith</span>
        </a>

        <a
          href={`tel:${ENGINEER_PROFILE.phone}`}
          className="bg-white hover:bg-gray-100 text-gray-950 font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer min-h-[44px]"
        >
          <Phone className="w-3.5 h-3.5 text-[#0c444a]" />
          <span>Call Now</span>
        </a>
      </motion.div>

      {/* Desktop Floating WhatsApp Badge (Bottom Right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
        className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white text-gray-900 pl-4 pr-3 py-2 rounded-full shadow-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-emerald-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Er. Suprith Online
            </span>
            <span className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              Chat on WhatsApp
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-600 group-hover:bg-emerald-700 text-white flex items-center justify-center shadow-md transition-colors">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </a>
      </motion.div>
    </>
  );
};
