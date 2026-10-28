import React from 'react';
import { Layers, Building, Truck, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { MATERIALS_CATALOG } from '../data/mockData';

interface ServicesSectionProps {
  onQuickInquire: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onQuickInquire }) => {
  const coreServices = [
    {
      id: 'modeling',
      icon: Layers,
      title: '3D BIM Architectural Modeling & Design',
      tagline: 'Experience your complete home in photorealistic 3D before pouring a single drop of concrete.',
      points: [
        'Photorealistic 3D Exterior Elevations & Interior Walkthroughs',
        'AutoCAD Civil Engineering Working & Structural Drawings',
        'Vastu-Compliant Scientific Space & Ventilation Planning',
        'Mysore MCC & MUDA Municipal Plan Sanction Clearances',
      ],
      badge: 'Architecture & 3D BIM',
    },
    {
      id: 'construction',
      icon: Building,
      title: 'Turnkey Residential & Commercial Construction',
      tagline: 'End-to-end foundation-to-handover execution personally audited by civil engineer Er. Suprith (B.E. Civil).',
      points: [
        'Custom Luxury Villas, Duplexes & Independent Houses',
        'Multi-Storey Commercial Complexes & Corporate Spaces',
        'Earthquake-Resistant High-Ductility RCC Framing',
        '100% Binding Per Sq. Ft. Billing with Zero Hidden Costs',
      ],
      badge: 'Turnkey Civil Execution',
    },
    {
      id: 'materials',
      icon: Truck,
      title: 'Certified Construction Materials Supply',
      tagline: 'Wholesale factory-direct supply of primary steel, 53-grade cement, M-sand, and solid blocks across Mysore.',
      points: [
        'Tata Tiscon & JSW Neosteel Fe550D TMT Reinforcement',
        'UltraTech Super & Birla Super 53 Grade Fresh Cement',
        'Triple-Washed M-Sand, P-Sand & Mysore Graded Jelly',
        'Steam-Cured 6" & 8" High Compressive Solid Blocks',
      ],
      badge: 'Direct Factory Supply',
    },
  ];

  return (
    <section id="services-section" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0c444a] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Full-Scope Civil Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight font-display">
              3D Modeling, Construction &amp; Materials Supply{' '}
              <span className="text-[#0c444a] font-serif font-normal italic">Under One Roof</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-gray-600 max-w-sm leading-relaxed"
          >
            Eliminate multiple subcontracting middlemen. Er. Suprith unifies structural design, factory material sourcing, and certified execution across Mysore.
          </motion.p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-16">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-[#faf7f2] rounded-3xl p-6 sm:p-8 border border-[#eee6d8] hover:border-[#0c444a]/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#052327] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full bg-teal-50 text-[#0c444a] border border-teal-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onQuickInquire(service.title)}
                  className="w-full bg-white group-hover:bg-[#052327] text-gray-900 group-hover:text-white border border-gray-300 group-hover:border-transparent py-3 sm:py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Quick Inquire for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:text-amber-300" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Building Materials Direct Wholesale Supply Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#041a1d] via-[#072f34] to-[#0c444a] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6 sm:mb-8">
            <div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Site Wholesale Supply in Mysore</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-display">
                Need High-Grade Steel, Cement or M-Sand for Your Plot?
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90 mt-1.5 max-w-2xl leading-relaxed">
                Wholesale bulk dispatch directly from accredited factories with batch test certificates to any construction site in Mysore.
              </p>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onQuickInquire('Bulk Construction Materials Order')}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 px-6 py-3.5 rounded-full font-black text-xs hover:brightness-105 transition-all shrink-0 shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 fill-gray-950" />
              <span>Order Materials Now</span>
            </motion.button>
          </div>

          {/* Quick Materials Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {MATERIALS_CATALOG.map((mat) => (
              <motion.div
                key={mat.id}
                whileHover={{ y: -3 }}
                onClick={() => onQuickInquire(`Material Order: ${mat.name}`)}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/15 transition-all cursor-pointer group"
              >
                <div className="text-[10px] text-amber-300 font-bold mb-1 truncate">
                  {mat.category}
                </div>
                <div className="font-bold text-xs text-white line-clamp-1 mb-1 sm:mb-1.5">
                  {mat.name}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-extrabold text-white">
                  ₹{mat.approxRate}{' '}
                  <span className="text-[10px] font-normal text-teal-200">{mat.unit}</span>
                </div>
                <div className="text-[10px] text-teal-100/70 mt-1 line-clamp-1">
                  {mat.deliveryTime}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
