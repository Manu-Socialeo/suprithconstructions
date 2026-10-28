import React, { useState, useEffect } from 'react';
import { X, Check, Phone, MessageCircle } from 'lucide-react';
import { ENGINEER_PROFILE, MYSORE_LOCALITIES } from '../data/mockData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Vijayanagar');
  const [service, setService] = useState('Turnkey House Construction');
  const [areaSqFt, setAreaSqFt] = useState('');
  const [message, setMessage] = useState(
    initialSubject ? `Hello Er. Suprith, I would like to inquire about "${initialSubject}".` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  // Reset form state when modal opens with a new subject
  useEffect(() => {
    if (isOpen) {
      setMessage(
        initialSubject ? `Hello Er. Suprith, I would like to inquire about "${initialSubject}".` : ''
      );
      setSubmitted(false);
    }
  }, [isOpen, initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/919845012345?text=${encodeURIComponent(
    `Hello Er. Suprith, my name is ${name || 'Mysore Resident'}. I'm inquiring about: ${
      initialSubject || service
    } for my plot in ${locality}, Mysore.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-display">Inquiry Confirmed</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
              Thank you, <strong className="font-semibold text-gray-900">{name}</strong>. Er. Suprith will personally review your project requirements for{' '}
              <strong className="font-semibold text-gray-900">{locality}, Mysore</strong> and contact you at{' '}
              <strong className="font-semibold text-gray-900">{phone}</strong> within 2 hours.
            </p>
            <div className="p-4 bg-[#faf7f2] rounded-2xl text-xs text-gray-700 border border-[#eee6d8] space-y-1">
              <div>
                Direct Helpline:{' '}
                <a href={`tel:${ENGINEER_PROFILE.phone}`} className="font-bold text-[#0c444a]">
                  {ENGINEER_PROFILE.phone}
                </a>
              </div>
              <div className="text-[11px] text-gray-500">
                Office: 84/A, Ring Road, Vijayanagar 2nd Stage, Mysore
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#052327] hover:bg-[#073339] text-white text-xs font-bold px-8 py-3 rounded-full transition-colors mt-2 cursor-pointer shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0c444a]">
                Direct Engineer Consultation
              </span>
            </div>
            <h2 id="contact-modal-title" className="text-2xl font-extrabold text-gray-900 mb-1 font-display">
              {initialSubject ? `Inquire: ${initialSubject}` : 'Consult Er. Suprith'}
            </h2>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Have a plot ready in Mysore, need 3D elevations, or want a fixed-price turnkey estimate? Share your details for an immediate civil engineering quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Gowda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] focus:ring-2 focus:ring-[#0c444a]/15"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] focus:ring-2 focus:ring-[#0c444a]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mysore Locality
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] cursor-pointer"
                  >
                    {MYSORE_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}, Mysore
                      </option>
                    ))}
                    <option value="Other Area">Other / Outside Mysore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] cursor-pointer"
                  >
                    <option value="Turnkey House Construction">Turnkey House Construction</option>
                    <option value="Commercial Complex Build">Commercial Complex Build</option>
                    <option value="3D Architectural Modeling">3D Architectural Modeling &amp; BIM</option>
                    <option value="Building Materials Supply">Building Materials Supply</option>
                    <option value="MCC / MUDA Plan Sanction">MCC / MUDA Plan Sanction</option>
                    <option value="Free Site Inspection">Free On-Site Inspection</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Built-Up Area / Plot Size (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 30x40 site (1,200 sq.ft) or 2,400 sq.ft built-up"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Project Notes / Specific Questions
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Er. Suprith what you would like to build..."
                  className="w-full px-3.5 py-2.5 text-xs text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0c444a] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#052327] hover:bg-[#073339] text-white py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-lg shadow-black/10 cursor-pointer"
              >
                Send Request to Er. Suprith
              </button>

              {/* Or WhatsApp Directly */}
              <div className="pt-2 text-center">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Or click here to chat directly on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
