import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText, Check, Sparkles } from 'lucide-react';
import { CONSTRUCTION_PACKAGES } from '../data/mockData';
import { calculateConstructionEstimate, formatINR, formatINRExact } from '../utils/construction-calculator';

interface RateCalculatorSectionProps {
  initialSqFt?: number;
  initialTier?: 'standard' | 'premium' | 'luxury' | 'commercial';
  onBookConsultation: (details: string) => void;
}

export const RateCalculatorSection: React.FC<RateCalculatorSectionProps> = ({
  initialSqFt = 2400,
  initialTier = 'premium',
  onBookConsultation,
}) => {
  const [builtUpSqFt, setBuiltUpSqFt] = useState<number>(initialSqFt);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'premium' | 'luxury' | 'commercial'>(initialTier);

  const estimate = calculateConstructionEstimate(builtUpSqFt, selectedTier);
  const currentPkg = CONSTRUCTION_PACKAGES.find((p) => p.tier === selectedTier) || CONSTRUCTION_PACKAGES[1];

  const mysorePresets = [
    { label: '30 × 40', sqft: 1200, note: 'Standard Villa' },
    { label: '30 × 50', sqft: 1500, note: 'Spacious Home' },
    { label: '40 × 60', sqft: 2400, note: 'Popular Duplex' },
    { label: '40 × 60 (2 Flr)', sqft: 3200, note: 'Executive Duplex' },
    { label: '50 × 80', sqft: 4000, note: 'Luxury Estate' },
    { label: 'Commercial G+3', sqft: 5800, note: 'Multi-Storey' },
  ];

  return (
    <section id="rate-calculator-section" className="py-20 px-6 sm:px-10 bg-[#f7f4ed] border-y border-[#e8dfce]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#052327] text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Transparent Billing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-gray-900 mb-4 font-display">
            Interactive Construction Rate Estimator{' '}
            <span className="block text-[#0c444a] font-serif font-normal italic text-2xl sm:text-3xl mt-1">
              Guaranteed Per Sq. Ft. Pricing in Mysore
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            No vague contractor quotes. Select your plot dimensions and package tier to calculate your exact turnkey construction budget with zero hidden margins.
          </p>
        </div>

        {/* Main Calculator Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Configuration Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#e2d8c6] space-y-8">
            {/* 1. Package Tier Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#052327] text-white text-[11px] flex items-center justify-center font-bold">1</span>
                  <span>Select Construction Specification Tier</span>
                </label>
                <span className="text-[11px] text-gray-500">Fixed rate contract</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CONSTRUCTION_PACKAGES.map((pkg) => {
                  const isSelected = selectedTier === pkg.tier;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedTier(pkg.tier)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border transition-all relative cursor-pointer ${
                        isSelected
                          ? 'border-[#0c444a] bg-teal-50/50 shadow-md ring-2 ring-[#0c444a]/20'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Most Chosen</span>
                        </span>
                      )}
                      <div className="font-bold text-gray-900 text-sm mb-1 font-display">{pkg.name}</div>
                      <div className="text-xl font-extrabold text-[#0c444a] tracking-tight">
                        ₹{pkg.ratePerSqFt}{' '}
                        <span className="text-xs font-normal text-gray-500">/ sq.ft</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                        {pkg.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Built-up Area Slider & Presets */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#052327] text-white text-[11px] flex items-center justify-center font-bold">2</span>
                  <span>Total Built-Up Area (Sq. Ft.)</span>
                </label>
                <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
                  <input
                    type="number"
                    min="500"
                    max="30000"
                    step="50"
                    value={builtUpSqFt}
                    onChange={(e) => setBuiltUpSqFt(Math.max(100, Number(e.target.value)))}
                    className="w-20 text-right font-black text-base text-gray-900 bg-transparent focus:outline-none"
                  />
                  <span className="text-xs font-bold text-gray-600">sq.ft</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="600"
                max="10000"
                step="50"
                value={builtUpSqFt}
                onChange={(e) => setBuiltUpSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0c444a]"
              />

              {/* Mysore Popular Dimension Presets */}
              <div className="mt-4">
                <div className="text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wider">
                  Mysore Standard Plot Presets:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {mysorePresets.map((plot) => (
                    <button
                      key={plot.label}
                      type="button"
                      onClick={() => setBuiltUpSqFt(plot.sqft)}
                      className={`p-2 rounded-xl text-xs font-semibold transition-all border text-left cursor-pointer ${
                        builtUpSqFt === plot.sqft
                          ? 'bg-[#052327] text-white border-[#052327] shadow-sm'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200'
                      }`}
                    >
                      <div className="font-bold">{plot.label}</div>
                      <div className={`text-[10px] ${builtUpSqFt === plot.sqft ? 'text-amber-300' : 'text-gray-500'}`}>
                        {plot.sqft.toLocaleString()} sq.ft · {plot.note}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Package Specifications Preview */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0c444a]" />
                  <span>{currentPkg.name} Specifications Included</span>
                </span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Certified Materials
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#eee6d8]">
                  <span className="font-bold text-gray-900">Steel Rebar:</span>{' '}
                  <span className="text-gray-600">{currentPkg.specs.steel}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#eee6d8]">
                  <span className="font-bold text-gray-900">Cement Grade:</span>{' '}
                  <span className="text-gray-600">{currentPkg.specs.cement}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#eee6d8]">
                  <span className="font-bold text-gray-900">Bricks/Blocks:</span>{' '}
                  <span className="text-gray-600">{currentPkg.specs.bricks}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#eee6d8]">
                  <span className="font-bold text-gray-900">Flooring:</span>{' '}
                  <span className="text-gray-600">{currentPkg.specs.flooring}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Calculation Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#041a1d] via-[#06262b] to-[#0a383f] text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-teal-200/80 mb-2">
                <span className="uppercase tracking-wider font-semibold">Total Turnkey Project Cost</span>
                <span className="bg-amber-400/20 text-amber-200 px-3 py-1 rounded-full text-[11px] font-bold border border-amber-300/30">
                  Fixed Mysore Rate
                </span>
              </div>

              {/* Grand Total */}
              <div className="text-4xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-none mt-2 font-display">
                {formatINR(estimate.totalCost)}
              </div>
              <div className="text-xs text-teal-200/90 font-medium mt-2">
                Exact Estimate: <strong className="text-white">{formatINRExact(estimate.totalCost)}</strong> ({builtUpSqFt.toLocaleString()} sq.ft @ ₹{estimate.ratePerSqFt}/sq.ft)
              </div>

              {/* Estimated Handover Timeline */}
              <div className="flex items-center gap-2 mt-5 p-3 rounded-2xl bg-white/10 border border-white/10 text-xs text-white/95">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>
                  Estimated Handover Timeline: <strong className="text-amber-200 font-bold">{estimate.estimatedMonths} Months</strong> from groundbreaking
                </span>
              </div>

              {/* Civil Engineering Cost Allocation Breakdown */}
              <div className="mt-7 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center justify-between">
                  <span>Certified Cost Breakdown</span>
                  <span className="text-[10px] text-white/60">IS 456 Standards</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-teal-100/90 mb-1">
                      <span>Primary Steel &amp; 53-Grade Cement (32%)</span>
                      <span className="font-bold text-white">{formatINR(estimate.breakdown.steelAndCement)}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '32%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-teal-100/90 mb-1">
                      <span>Masonry, M-Sand &amp; Framing (24%)</span>
                      <span className="font-bold text-white">{formatINR(estimate.breakdown.masonryAndStructure)}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '24%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-teal-100/90 mb-1">
                      <span>Skilled Labor &amp; Er. Suprith Supervision (14%)</span>
                      <span className="font-bold text-white">{formatINR(estimate.breakdown.laborAndSupervision)}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-teal-300 h-full rounded-full" style={{ width: '14%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-teal-100/90 mb-1">
                      <span>Flooring, Joinery &amp; Luxury Finishes (30%)</span>
                      <span className="font-bold text-white">
                        {formatINR(
                          estimate.breakdown.flooringAndTiling +
                            estimate.breakdown.plumbingAndElectrical +
                            estimate.breakdown.finishingAndPainting
                        )}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-cyan-300 h-full rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Intent Conversion CTA */}
            <div className="pt-6 mt-7 border-t border-white/15 space-y-3">
              <button
                type="button"
                onClick={() =>
                  onBookConsultation(
                    `${estimate.packageName} Package (${builtUpSqFt} sq.ft @ ₹${estimate.ratePerSqFt}/sq.ft = ${formatINR(
                      estimate.totalCost
                    )})`
                  )
                }
                className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-gray-950 py-4 rounded-2xl font-black text-sm hover:brightness-105 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>Lock In This Rate &amp; Book Site Visit</span>
                <ArrowRight className="w-4 h-4 text-gray-950" />
              </button>

              <div className="text-[11px] text-teal-200/80 text-center flex items-center justify-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-300" />
                <span>Includes free 3D elevations &amp; soil inspection in Mysore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
