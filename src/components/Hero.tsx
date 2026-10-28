import React, { useState } from 'react';
import { ShieldCheck, MapPin, ArrowRight, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MYSORE_LOCALITIES } from '../data/mockData';

interface HeroProps {
  onSearch: (criteria: { areaQuery: string; type: string; maxRatePerSqFt: number | null }) => void;
  onOpenContact: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenContact }) => {
  const [selectedLocality, setSelectedLocality] = useState<string>('Vijayanagar');
  const [plotSize, setPlotSize] = useState<string>('30x40');
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorPhone, setVisitorPhone] = useState<string>('');
  const [requested, setRequested] = useState<boolean>(false);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) return;
    setRequested(true);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[700px] lg:min-h-[760px] bg-[#041a1d] overflow-hidden flex items-center px-4 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-16">
      {/* High-Definition Architectural Background Image — Vibrant, Sharp & Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
          alt="Bespoke luxury villa construction in Mysore by Suprith Constructions"
          fetchPriority="high"
          className="w-full h-full object-cover object-center lg:object-[80%_center]"
        />
        {/* Elegant directional shading: protects text contrast on left while keeping the villa architecture vibrant & clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041a1d]/95 via-[#041a1d]/75 lg:via-[#041a1d]/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a1d] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Hero Content — Architectural Monograph Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-white w-full"
        >
          {/* Official Engineering Credential Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 sm:mb-6 border border-amber-400/30 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" />
            <span className="tracking-wider uppercase text-amber-200 text-[11px] sm:text-xs">
              Licensed Civil Engineer · B.E. (Civil Engineering)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-tight mb-4 sm:mb-5 text-white font-display"
          >
            Bespoke homes engineered for Mysore.{' '}
            <span className="block mt-1 font-serif font-normal italic text-amber-300">
              Crafted for generations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm sm:text-base lg:text-lg text-teal-50/90 font-normal mb-6 sm:mb-8 max-w-xl leading-relaxed"
          >
            From photorealistic 3D BIM elevations and MUDA plan sanctions to earthquake-resistant turnkey execution — personally supervised from foundation to key handover by{' '}
            <strong className="text-white font-semibold underline decoration-amber-400/60 decoration-2 underline-offset-4">
              Er. Suprith (B.E. Civil Engineering)
            </strong>
            .
          </motion.p>

          {/* Core Guarantees Quick Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8 pt-1"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-teal-100/90 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>10-Yr Structural Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-teal-100/90 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
              <Award className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Zero Cost Escalation</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-teal-100/90 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
              <span>100% MUDA Sanctions</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenContact('Free Site Inspection & Plot Evaluation with Er. Suprith')}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-gray-950 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-extrabold text-xs sm:text-base hover:brightness-105 transition-all shadow-xl shadow-amber-500/25 cursor-pointer"
            >
              <span>Schedule Free Site Visit</span>
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-base transition-all cursor-pointer"
            >
              <span>Explore Landmark Builds</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Floating Sleek Site Consultation Booking Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[410px] bg-white rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/80 relative"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <div>
              <span className="text-[11px] font-bold text-[#0c444a] tracking-wider uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Complimentary Mysore Service</span>
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-0.5 font-display">
                Book Free Site Inspection
              </h2>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
              Zero Obligation
            </span>
          </div>

          <AnimatePresence mode="wait">
            {requested ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-6 text-center space-y-3"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-display">Inspection Booked!</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thank you, <strong>{visitorName}</strong>. Er. Suprith will contact you at <strong>{visitorPhone}</strong> within 2 hours to confirm your site visit in <strong>{selectedLocality}, Mysore</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setRequested(false)}
                  className="text-xs font-bold text-[#0c444a] underline mt-2 cursor-pointer hover:text-black"
                >
                  Book another inspection
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleConsultationSubmit}
                className="space-y-3"
              >
                {/* Mysore Locality */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Plot Location in Mysore:
                  </label>
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] cursor-pointer"
                  >
                    {MYSORE_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}, Mysore
                      </option>
                    ))}
                    <option value="Other Area">Other / Mysore Surrounds</option>
                  </select>
                </div>

                {/* Plot Dimension */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Plot Dimension / Size:
                  </label>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    {['30x40', '30x50', '40x60', '50x80'].map((dim) => (
                      <button
                        key={dim}
                        type="button"
                        onClick={() => setPlotSize(dim)}
                        className={`py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all border cursor-pointer ${
                          plotSize === dim
                            ? 'bg-[#052327] text-white border-[#052327]'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {dim}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="space-y-2.5 pt-0.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Gowda"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 XXXXX"
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#052327] hover:bg-[#073339] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Confirm Free Site Visit with Er. Suprith</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </motion.button>

                <div className="pt-0.5 text-center">
                  <a
                    href={`https://wa.me/919845012345?text=${encodeURIComponent(
                      `Hi Er. Suprith, I would like to book a free site inspection for my ${plotSize} plot in ${selectedLocality}, Mysore.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Or connect immediately on WhatsApp</span>
                  </a>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
