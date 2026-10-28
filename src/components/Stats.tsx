import React, { useState } from 'react';
import { Award, ShieldCheck, FileCheck, ThumbsUp, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { STATS_DATA } from '../data/mockData';

export const Stats: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const statIcons = [
    <Award className="w-5 h-5 text-amber-600" key="award" />,
    <ShieldCheck className="w-5 h-5 text-emerald-600" key="shield" />,
    <FileCheck className="w-5 h-5 text-[#0c444a]" key="file" />,
    <ThumbsUp className="w-5 h-5 text-amber-600" key="thumbs" />,
  ];

  return (
    <section className="bg-[#f5f1e8] border-b border-[#e6dfd1] py-8 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#e2dac9]">
          {STATS_DATA.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`pt-3 sm:pt-0 ${index > 0 ? 'sm:pl-6' : ''} flex items-center gap-3 sm:gap-4 relative group`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-[#e8dfce] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {statIcons[index % statIcons.length]}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight font-display">
                      {item.value}
                    </span>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveTooltip(index)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                      aria-label={`Details for ${item.label}`}
                      className="text-gray-400 hover:text-gray-600 p-0.5 rounded cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>

                    {activeTooltip === index && (
                      <div className="absolute bottom-full left-0 mb-2 w-52 sm:w-56 p-3 bg-[#052327] text-white text-xs rounded-xl shadow-xl z-30 pointer-events-none text-left border border-white/10">
                        {item.note}
                        <div className="absolute top-full left-6 border-4 border-transparent border-t-[#052327]" />
                      </div>
                    )}
                  </div>
                  <div className="text-[11px] sm:text-xs lg:text-sm font-semibold text-gray-700 leading-snug">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
