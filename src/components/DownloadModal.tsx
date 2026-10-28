import React from 'react';
import { X, Download, FolderArchive, Code, CheckCircle, ExternalLink, Globe } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#0a5c63]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0a5c63]">
            Export & Deploy
          </span>
        </div>
        <h2 id="download-modal-title" className="text-2xl font-bold text-gray-900 mb-1">
          Download Website Package
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
          Download the latest files for <strong>Suprith Constructions</strong>. Choose between the ready-to-deploy production build or the full React/TypeScript source code.
        </p>

        <div className="space-y-4">
          {/* Option 1: Production Build */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a5c63] text-white flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900 text-sm">
                    Production Build (.ZIP)
                  </h3>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  Pre-compiled HTML, CSS, JS and assets. Upload directly to cPanel, Netlify, Vercel, Hostinger or any web server.
                </p>
                <div className="text-[11px] text-gray-400 mt-1">Size: ~175 KB · Zero build setup required</div>
              </div>
            </div>

            <a
              href="/downloads/suprith-constructions-production-build.zip"
              download="suprith-constructions-production-build.zip"
              className="w-full sm:w-auto bg-[#0a5c63] hover:bg-[#074247] text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-md shadow-[#0a5c63]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Build</span>
            </a>
          </div>

          {/* Option 2: Full Source Code */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Complete Source Code (.ZIP)
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Vite + React 19 + TypeScript + Tailwind CSS project with all components and configuration.
                </p>
                <div className="text-[11px] text-gray-400 mt-1">Size: ~85 KB · For developers (npm install & npm run dev)</div>
              </div>
            </div>

            <a
              href="/downloads/suprith-constructions-source-code.zip"
              download="suprith-constructions-source-code.zip"
              className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-sm"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Download Source</span>
            </a>
          </div>
        </div>

        {/* Quick Hosting Instructions */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Quick Deployment Guide:
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-600">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong>Netlify / Vercel:</strong> Drag & drop the unzipped <code>dist</code> folder into Netlify Drop.</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong>cPanel / Apache / Nginx:</strong> Upload files to your <code>public_html</code> directory.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
