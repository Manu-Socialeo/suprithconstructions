import React from 'react';
import { HardHat, ArrowRight, Phone, MapPin, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ENGINEER_PROFILE } from '../data/mockData';

interface AgentsSectionProps {
  onOpenConsultationModal: () => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="engineer-section" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-[#faf7f2] border-y border-[#ede5d6] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct Leadership &amp; Personal Supervision</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-display">
            Meet Your Principal Civil Engineer &amp; Builder
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            No proxy site managers. Er. Suprith personally audits footing reinforcements, concrete cube tests, and slab castings.
          </p>
        </motion.div>

        {/* Feature Split Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#e8dfce] grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Civil Engineer Photo Column */}
          <div className="relative lg:col-span-5 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-[#0c444a] overflow-hidden">
            <img
              src={ENGINEER_PROFILE.avatar}
              alt="Er. Suprith - Civil Engineer in Mysore"
              loading="lazy"
              className="w-full h-full object-cover object-[center_12%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white">
              <div className="bg-white/10 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-white/20">
                <div className="text-[11px] sm:text-xs text-amber-300 font-bold uppercase tracking-wider">
                  Lead Civil Engineer · B.E. Civil
                </div>
                <div className="text-xs sm:text-sm font-extrabold mt-0.5">
                  12+ Years Transforming Mysore’s Skyline
                </div>
              </div>
            </div>
          </div>

          {/* Civil Engineer Info Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0c444a] mb-2 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                <Award className="w-3.5 h-3.5" />
                <span>{ENGINEER_PROFILE.license}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2 font-display">
                {ENGINEER_PROFILE.name}{' '}
                <span className="text-[#0c444a] text-base sm:text-lg lg:text-xl font-bold block sm:inline">
                  ({ENGINEER_PROFILE.degrees})
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                {ENGINEER_PROFILE.bio}
              </p>

              {/* Specialties Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 sm:mb-8">
                {ENGINEER_PROFILE.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-800 bg-[#faf7f2] p-2.5 rounded-xl border border-[#eee6d8]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Mysore Office & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-gray-100">
                {/* Office address */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5 mb-2">
                    <MapPin className="w-4 h-4 text-[#0c444a]" />
                    <span>Mysore Engineering Office</span>
                  </h4>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <div className="font-semibold text-gray-800">84/A, Ring Road, Vijayanagar 2nd Stage</div>
                    <div className="text-gray-500">Mysore, Karnataka 570017</div>
                    <div className="text-[11px] text-amber-700 font-semibold mt-1">Open Mon–Sat: 9:00 AM – 7:30 PM</div>
                  </div>
                </div>

                {/* Direct Connect */}
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5 mb-2">
                    <HardHat className="w-4 h-4 text-[#0c444a]" />
                    <span>Dedicated Site Team</span>
                  </h4>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span>18+ full-time site engineers, structural draftspersons, and quality assurance testers.</span>
                    <a
                      href={`tel:${ENGINEER_PROFILE.phone}`}
                      className="text-[#0c444a] font-bold block mt-2 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{ENGINEER_PROFILE.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 sm:pt-8 mt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultationModal}
                className="bg-[#052327] hover:bg-[#073339] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule On-Site Plot Inspection</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/919845012345?text=${encodeURIComponent(
                  "Hi Er. Suprith, I'm planning to build in Mysore and would like to consult with you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 sm:py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Er. Suprith</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
