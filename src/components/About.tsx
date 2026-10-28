import React from 'react';
import { ShieldCheck, Compass, CheckCircle2, FileCheck2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>The Suprith Engineering Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            Why Mysore Homeowners Choose a{' '}
            <span className="text-[#0c444a] underline decoration-amber-400 decoration-3 underline-offset-6">
              Chartered Structural Engineer
            </span>{' '}
            Over Local Contractors
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
            Led by certified civil engineer <strong>Er. Suprith (B.E. Civil Engineering)</strong>, our practice bridges the gap between high-end architectural aesthetics and uncompromising structural safety. Over 12 years and 150+ residential and commercial landmarks built across Mysore.
          </p>
        </motion.div>

        {/* 3 Pillars of Structural Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-7 rounded-3xl bg-[#faf7f2] border border-[#eee6d8] hover:border-[#0c444a]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8dfce] text-[#0c444a] flex items-center justify-center shadow-sm mb-5">
                <ShieldCheck className="w-6 h-6 text-[#0c444a]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Earthquake &amp; Load Certified RCC
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                We perform comprehensive soil-bearing capacity tests (SBC) on your plot before designing the footing. Only primary Fe550D TMT steel and factory-fresh 53-grade cement are specified.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e8dfce] flex items-center gap-2 text-xs font-bold text-[#0c444a]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>10-Year Bonded Structural Guarantee</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-7 rounded-3xl bg-[#faf7f2] border border-[#eee6d8] hover:border-[#0c444a]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8dfce] text-amber-700 flex items-center justify-center shadow-sm mb-5">
                <Compass className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Photorealistic 3D BIM Modeling
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Walk through your living room, terrace gardens, and bedroom layouts in 3D virtual reality before a single brick is laid. Experience sun path, natural ventilation, and Vastu compliance.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e8dfce] flex items-center gap-2 text-xs font-bold text-amber-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Costly On-Site Alterations</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-7 rounded-3xl bg-[#faf7f2] border border-[#eee6d8] hover:border-[#0c444a]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8dfce] text-emerald-700 flex items-center justify-center shadow-sm mb-5">
                <FileCheck2 className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                100% MUDA &amp; MCC Sanction Liaison
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Avoid municipal stop-work notices and setback disputes. We handle all architectural blueprint submissions, zoning verifications, and building license approvals across Mysore.
              </p>
            </div>
            <div className="pt-4 border-t border-[#e8dfce] flex items-center gap-2 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Complete Legal Peace of Mind</span>
            </div>
          </motion.div>
        </div>

        {/* Engineer Personal Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#052327] via-[#08363c] to-[#0c444a] text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="text-amber-300 text-3xl font-serif leading-none select-none mb-1">“</div>
            <blockquote className="text-sm sm:text-base lg:text-lg font-serif italic text-white/95 leading-relaxed">
              A home in Mysore isn’t just a construction project; it’s the sanctuary of your family’s lifetime dreams. We treat every foundation pour and cantilever beam with the exact mathematical rigor of civil structural engineering.
            </blockquote>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="font-extrabold text-xs sm:text-sm text-amber-300 tracking-wide font-display">
                Er. Suprith, B.E. (Civil Engineering)
              </div>
              <span className="text-white/40 hidden sm:inline">·</span>
              <div className="text-[11px] sm:text-xs text-teal-200">
                Founder &amp; Principal Structural Consultant
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
