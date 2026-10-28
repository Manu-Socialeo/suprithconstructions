import React, { useState, useEffect } from 'react';
import { HardHat, ChevronDown, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ENGINEER_PROFILE } from '../data/mockData';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenContact: (subject?: string) => void;
  onOpenDownload?: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Residential Villas', filter: 'Residential Villa', targetId: 'projects-section' },
    { label: 'Commercial Hubs', filter: 'Commercial Complex', targetId: 'projects-section' },
    { label: '3D Modeling', filter: '3D Modeling & Design', targetId: 'projects-section' },
    { label: 'Materials Supply', filter: 'Materials', targetId: 'services-section' },
    { label: '4-Step Process', filter: 'Process', targetId: 'process-section' },
  ];

  const handleNavClick = (filter: string, targetId: string) => {
    setActiveNav(filter);
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#041a1d]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-white/10 shadow-lg shadow-black/10'
          : 'bg-gradient-to-b from-[#041a1d]/90 via-[#041a1d]/30 to-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-white">
        {/* Brand Logo & Authority Lockup */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-xl"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center text-[#041a1d] shadow-sm group-hover:scale-105 transition-transform">
            <HardHat className="w-4 h-4 sm:w-5 sm:h-5 fill-[#041a1d]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg leading-none text-white tracking-tight">
              Suprith Constructions
            </span>
            <span className="text-[9px] sm:text-[10px] text-teal-200/80 font-medium tracking-wider uppercase mt-1">
              Civil Engineers &amp; Builders · Mysore
            </span>
          </div>
        </a>

        {/* Sleek Minimalist Navigation */}
        <nav className="hidden xl:flex items-center gap-6 font-medium text-xs tracking-wide text-white/85">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.filter, item.targetId)}
              className={`transition-colors duration-150 py-1 hover:text-amber-300 cursor-pointer ${
                activeNav === item.filter
                  ? 'text-amber-300 font-bold border-b border-amber-300'
                  : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Scope Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onBlur={() => setTimeout(() => setServicesDropdownOpen(false), 200)}
              className="flex items-center gap-1 py-1 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-expanded={servicesDropdownOpen}
            >
              <span>Scope &amp; Sanctions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-[#06262b] text-gray-100 rounded-2xl shadow-2xl p-2 z-50 border border-white/10 text-xs"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      onOpenContact('3D Architectural Modeling & BIM Elevation');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-white">3D BIM Elevations</div>
                    <div className="text-[10px] text-teal-200/70">Photorealistic exterior &amp; floorplans</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      onOpenContact('Turnkey Residential Construction in Mysore');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-colors cursor-pointer"
                  >
                    <div className="font-bold text-white">Turnkey Villas &amp; Duplexes</div>
                    <div className="text-[10px] text-teal-200/70">Engineered RCC structure</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      onOpenContact('MCC / MUDA Municipal Plan Approval');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 font-medium transition-colors border-t border-white/10 cursor-pointer"
                  >
                    <div className="font-bold text-amber-300">MUDA &amp; MCC Plan Sanctions</div>
                    <div className="text-[10px] text-teal-200/70">100% municipal compliance</div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Sleek Right Action: Direct Hotline */}
        <div className="hidden sm:flex items-center">
          <a
            href={`tel:${ENGINEER_PROFILE.phone}`}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-white transition-all hover:border-amber-300/40"
            title="Call Er. Suprith directly"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-semibold tracking-wide">{ENGINEER_PROFILE.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-[#041a1d] border-t border-white/10 px-5 py-4 shadow-2xl flex flex-col gap-2.5 xl:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.filter, item.targetId)}
                className="text-left text-xs font-semibold py-1.5 text-white/90 hover:text-amber-200"
              >
                {item.label}
              </button>
            ))}

            <a
              href={`tel:${ENGINEER_PROFILE.phone}`}
              className="flex items-center gap-2 text-xs text-white py-1.5 font-bold border-t border-white/10 pt-2.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Er. Suprith: {ENGINEER_PROFILE.phone}</span>
            </a>

            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Mobile Consultation Request');
                }}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-extrabold text-center py-2.5 rounded-full text-xs shadow-md cursor-pointer"
              >
                Book Free Site Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
