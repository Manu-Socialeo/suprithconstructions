import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Check, ShieldCheck, Share2, Truck, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { formatINR } from '../utils/construction-calculator';

interface PropertyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (projectTitle?: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'visit'>('overview');

  // Site visit booking state
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('11:00');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitBooked, setVisitBooked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;
    setVisitBooked(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-[#0c444a] border border-teal-100">
              {project.type}
            </span>
            {project.tag && (
              <span className="text-xs font-semibold text-gray-500">
                · {project.tag}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share project link"
              className="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Main Visual Banner */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#052327]/90 backdrop-blur-md px-5 py-2.5 rounded-xl text-white font-extrabold text-xl shadow-lg flex items-center gap-2 border border-white/15">
              <span className="text-amber-300">₹{project.ratePerSqFt} / sq.ft</span>
              {project.totalCost && (
                <span className="text-xs font-semibold text-teal-200 border-l border-white/20 pl-2">
                  Total: {formatINR(project.totalCost)}
                </span>
              )}
            </div>
            {copiedLink && (
              <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-md animate-fade-in">
                Link copied to clipboard!
              </div>
            )}
          </div>

          {/* Title & Mysore Location */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-display"
            >
              {project.title}
            </h2>
            <div className="flex items-center gap-1.5 text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#faf7f2] rounded-2xl border border-[#eee6d8] text-center">
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Built-Up Area</div>
              <div className="text-base sm:text-lg font-black text-gray-800 flex items-center justify-center gap-1.5 mt-0.5">
                <Maximize2 className="w-4 h-4 text-[#0c444a]" />
                <span>{project.areaSqFt.toLocaleString()} sq.ft</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Rate / Sq.Ft</div>
              <div className="text-base sm:text-lg font-black text-[#0c444a] flex items-center justify-center gap-1 mt-0.5">
                <span>₹{project.ratePerSqFt}</span>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase">Configuration</div>
              <div className="text-base sm:text-lg font-black text-gray-800 flex items-center justify-center gap-1.5 mt-0.5">
                <Bed className="w-4 h-4 text-[#0c444a]" />
                <span>{project.beds !== undefined && project.beds > 0 ? `${project.beds} BHK` : 'Commercial'}</span>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex border-b border-gray-200 gap-6">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-[#0c444a] border-b-2 border-[#0c444a]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Overview &amp; Structural Specs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('materials')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'materials'
                  ? 'text-[#0c444a] border-b-2 border-[#0c444a]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Materials Used</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('visit')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'visit'
                  ? 'text-[#0c444a] border-b-2 border-[#0c444a]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Visit</span>
            </button>
          </div>

          {/* Tab 1: Overview & Structural Specs */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Civil Engineering Overview</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Structural &amp; Civil Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.structuralSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-gray-800 bg-[#faf7f2] px-3.5 py-2.5 rounded-xl border border-[#eee6d8]"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0c444a] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700 leading-relaxed">
                  <strong className="text-gray-900 font-bold">Er. Suprith Certified:</strong>{' '}
                  All structural column layouts, slab reinforcement, and soil bearing tests personally inspected and certified by Chartered Civil Engineer Suprith.
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Materials Used */}
          {activeTab === 'materials' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Quality Materials Specified</h4>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Direct manufacturer sourcing with zero compromised grades. Every batch tested for compressive strength.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.materialsUsed.map((mat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6d8] text-xs font-bold text-gray-800 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0c444a]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Book Site Visit */}
          {activeTab === 'visit' && (
            <div>
              {visitBooked ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-1 font-display">Site Visit Confirmed</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mb-4">
                    Thank you, <strong>{visitorName}</strong>. Er. Suprith’s team will meet you at{' '}
                    <strong>{project.title}</strong> ({project.areaName}, Mysore) on{' '}
                    <strong>{visitDate || 'this week'}</strong> at <strong>{visitTime}</strong>. Confirmation sent to {visitorPhone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setVisitBooked(false)}
                    className="text-xs font-bold text-[#0c444a] underline cursor-pointer"
                  >
                    Modify appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookVisit} className="space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    Schedule a private on-site inspection of this project in {project.areaName}, Mysore with Er. Suprith.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={visitTime}
                        onChange={(e) => setVisitTime(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] cursor-pointer"
                      >
                        <option value="10:00">10:00 AM</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:30">05:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Gowda"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 XXXXX"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#052327] hover:bg-[#073339] text-white py-3 rounded-xl font-bold text-xs transition-colors shadow-md cursor-pointer"
                  >
                    Confirm Site Visit Appointment
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#faf7f2] border-t border-[#eee6d8] flex items-center justify-between gap-4">
          <div className="text-xs text-gray-600 font-medium">
            Planning to build a similar home in Mysore?
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact(project.title);
            }}
            className="bg-[#052327] hover:bg-[#073339] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>Get Quote for This Design</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
