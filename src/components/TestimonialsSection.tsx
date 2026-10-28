import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <span>Verified Homeowner Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-display">
            What Our Mysore Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Hear from families and commercial developers who trusted Er. Suprith for their life’s biggest investment.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#faf7f2] rounded-3xl shadow-xl border border-[#ede5d6] overflow-hidden text-left grid grid-cols-1 md:grid-cols-12 min-h-[360px]"
            >
              {/* Content Column */}
              <div className="md:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Verified Build
                    </span>
                  </div>

                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300/80 mb-3" />
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-serif italic mb-6">
                    “{current.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e8dfce]">
                  <div className="flex items-center gap-1.5 text-xs text-[#0c444a] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{current.location} · {current.projectType}</span>
                  </div>
                  <div className="font-extrabold text-gray-900 text-base sm:text-lg font-display leading-tight">
                    {current.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{current.role}</div>
                </div>
              </div>

              {/* Photo Column */}
              <div className="md:col-span-4 bg-[#0c444a] relative min-h-[260px] md:min-h-full overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Thumbnails of All 3 Clients */}
            <div className="flex items-center gap-2 sm:gap-3">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 pr-2.5 sm:pr-3 rounded-full border transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-[#052327] text-white border-[#052327] shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-bold hidden sm:inline">{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Next / Prev Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#052327] hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#052327] hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
