import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/mockData';

interface FaqSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  // Single active accordion ID to keep the section compact and sleek
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-hidden">
      {/* Sleek Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-[#0c444a] uppercase tracking-wider bg-teal-50 border border-teal-100 mb-2.5">
          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>Quick Answers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-display">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1.5 max-w-lg mx-auto">
          Rates, 3D designs, MUDA sanctions &amp; construction timelines in Mysore.
        </p>
      </motion.div>

      {/* Sleek Accordion List (Single open item at a time) */}
      <div className="flex flex-col gap-2.5">
        {FAQS.map((faq, index) => {
          const isOpen = activeFaqId === faq.id;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? 'border-[#0c444a] bg-white shadow-sm ring-1 ring-[#0c444a]/10'
                  : 'border-[#eee6d8] bg-white hover:border-gray-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-bold text-gray-900 gap-3 cursor-pointer font-display"
              >
                <span className="leading-snug">{faq.question}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#052327] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2.5">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Compact Bottom Support Strip */}
      <div className="mt-6 text-center text-xs text-gray-500 flex flex-wrap items-center justify-center gap-2">
        <span>Have another question about your plot?</span>
        <a
          href={`https://wa.me/919845012345?text=${encodeURIComponent(
            "Hi Er. Suprith, I have a question about my plot construction in Mysore."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 hover:underline"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Ask Er. Suprith directly on WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
