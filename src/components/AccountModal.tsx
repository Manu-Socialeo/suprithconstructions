import React, { useState } from 'react';
import { X, Check, Lock, User, Mail } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [role, setRole] = useState<'buyer' | 'seller' | 'agent'>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoggedIn(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="account-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {loggedIn ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Welcome to Suprith Constructions!</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
              Signed in as <strong className="text-gray-900 font-semibold">{email}</strong>. You
              can now save projects, receive construction rate alerts, and book site consultations.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0f0f0f] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl mb-6 max-w-xs mx-auto">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  mode === 'signin' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  mode === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                }`}
              >
                Create Account
              </button>
            </div>

            <h2 id="account-modal-title" className="text-xl font-bold text-gray-900 text-center mb-1">
              {mode === 'signin' ? 'Welcome Back' : 'Join Suprith Constructions'}
            </h2>
            <p className="text-xs text-gray-500 text-center mb-6">
              {mode === 'signin'
                ? 'Sign in to access your saved projects and inquiries.'
                : 'Free access to project tracking, rate alerts, and verified construction updates.'}
            </p>

            {mode === 'signup' && (
              <div className="flex gap-2 mb-4">
                {(['buyer', 'seller', 'agent'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg capitalize border transition-colors ${
                      role === r
                        ? 'border-[#0a5c63] bg-teal-50 text-[#0a5c63]'
                        : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0a5c63]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0a5c63]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a5c63] hover:bg-[#074247] text-white py-3 rounded-xl font-semibold text-xs tracking-wide transition-colors shadow-md mt-2"
              >
                {mode === 'signin' ? 'Sign In' : 'Create Free Account'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
