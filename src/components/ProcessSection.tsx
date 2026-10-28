import React from 'react';
import { Compass, FileSpreadsheet, HardHat, KeyRound, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Complimentary Site & Soil Assessment',
      subtitle: 'Free on-site consultation at your Mysore plot',
      description:
        'Er. Suprith personally visits your plot (Gokulam, Vijayanagar, JP Nagar, etc.) to evaluate soil topography, road levels, Vastu alignments, and MCC/MUDA setback requirements.',
      deliverables: ['Soil bearing capacity check', 'Plot dimension verification', 'Feasibility advisory'],
      badge: 'Step 1 · Zero Obligation',
    },
    {
      number: '02',
      icon: FileSpreadsheet,
      title: '3D BIM Walkthrough & Fixed-Price Agreement',
      subtitle: 'See your complete home before pouring concrete',
      description:
        'Our architectural team develops photorealistic 3D exterior elevations and interior floor layouts. We sign a binding per sq. ft. contract with zero mid-project price escalation.',
      deliverables: ['3D architectural rendering', 'Fixed cost breakdown per sq.ft', 'MUDA sanction drawings'],
      badge: 'Step 2 · Total Transparency',
    },
    {
      number: '03',
      icon: HardHat,
      title: 'Precision Structural Execution',
      subtitle: 'Daily WhatsApp photo & video site updates',
      description:
        'Primary Fe550D TMT reinforcement, factory-certified 53-grade cement, and steam-cured solid blocks. Dedicated site supervisors and chartered engineer inspection at every slab casting.',
      deliverables: ['Batch cube strength test reports', 'Weekly milestone schedule', 'Daily WhatsApp progress reports'],
      badge: 'Step 3 · Uncompromised Quality',
    },
    {
      number: '04',
      icon: KeyRound,
      title: 'Auspicious Handover & 10-Year Guarantee',
      subtitle: 'Move in on time with complete certified stability',
      description:
        'Complete deep cleaning, electrical and plumbing load testing, and auspicious housewarming handover with Er. Suprith’s signed 10-Year Structural Stability Certificate.',
      deliverables: ['10-Year Structural Warranty', 'As-built electrical & plumbing maps', 'Keys & municipal completion docs'],
      badge: 'Step 4 · Lifetime Peace of Mind',
    },
  ];

  return (
    <section id="process-section" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-[#faf7f2] border-b border-[#ede5d6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#0c444a]/10 text-[#0c444a] mb-3">
            <span>Transparent Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-display">
            The 4-Step Journey to Your{' '}
            <span className="text-[#0c444a]">Masterpiece Home</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Building a home should be exhilarating, not stressful. We eliminated contractor ambiguity with an engineer-led milestone process.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8dfce] shadow-sm hover:shadow-xl hover:border-[#0c444a]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-amber-500 font-display">
                      {step.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#052327] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 text-[#0c444a] border border-teal-100 mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-1 font-display">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-gray-100 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    What You Receive:
                  </div>
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenContact('Schedule Step 1: Free On-Site Assessment with Er. Suprith')}
            className="inline-flex items-center gap-2.5 bg-[#052327] hover:bg-[#073339] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Start Step 1: Schedule Your Free Site Inspection</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </motion.button>
          <div className="text-xs text-gray-500 mt-2">
            Available across Gokulam, Vijayanagar, Kuvempunagar, JP Nagar &amp; all Mysore taluks.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
