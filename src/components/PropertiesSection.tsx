import React, { useState } from 'react';
import { Bed, Bath, Maximize2, ChevronLeft, ChevronRight, Heart, Search, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { FILTER_TABS } from '../data/mockData';
import { formatINR } from '../utils/construction-calculator';

interface PropertiesSectionProps {
  projects: Project[];
  selectedType: string;
  onSelectType: (type: string) => void;
  onSelectProject: (project: Project) => void;
  onResetFilters: () => void;
  isFiltered: boolean;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  projects,
  selectedType,
  onSelectType,
  onSelectProject,
  onResetFilters,
  isFiltered,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerPage));
  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects-section" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0c444a] uppercase tracking-wider mb-2">
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-display">
            Explore Landmark Projects Across Mysore
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            Each residence is a testament to structural safety, photorealistic 3D design, and transparent per sq. ft. execution.
          </p>
          {isFiltered && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-gray-500">
                Showing {projects.length} matching builds in Mysore
              </span>
              <button
                type="button"
                onClick={onResetFilters}
                className="text-xs text-[#0c444a] font-bold underline hover:text-black cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Previous / Next buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-400 font-semibold mr-1">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            type="button"
            onClick={handlePrevPage}
            aria-label="Previous projects page"
            disabled={totalPages <= 1}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:border-gray-500 hover:bg-gray-100 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            aria-label="Next projects page"
            disabled={totalPages <= 1}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 hover:border-gray-500 hover:bg-gray-100 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Tabs with Smooth Touch Scrolling */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {FILTER_TABS.map((tab) => {
          const isActive = selectedType === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => {
                onSelectType(tab);
                setCurrentPage(0);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#052327] text-white shadow-md'
                  : 'bg-[#f4efe6] text-gray-700 hover:bg-[#eae3d5]'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Projects Cards Grid */}
      {currentProjects.length === 0 ? (
        <div className="text-center py-16 sm:py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300 p-8">
          <div className="w-14 h-14 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No matching projects</h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto mb-5">
            We couldn’t find projects matching your selected filter. Clear filters to explore all Mysore landmarks.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="bg-[#052327] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-black transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentProjects.map((proj, index) => {
            const isFav = !!favorites[proj.id];

            return (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectProject(proj)}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#e8dfce] hover:border-[#0c444a]/40 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Project Image Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gray-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Tag */}
                  {proj.tag && (
                    <span className="absolute top-4 left-4 bg-[#052327]/90 backdrop-blur-md text-amber-200 text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-white/10">
                      {proj.tag}
                    </span>
                  )}

                  {/* Favorite button */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(e, proj.id)}
                    aria-label={`Save ${proj.title} to favorites`}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center text-gray-700 transition-colors shadow-md cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-600'
                      }`}
                    />
                  </button>

                  {/* Quick specs pill bottom overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-300" />
                      <span>{proj.areaName}, Mysore</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-amber-300">
                      ₹{proj.ratePerSqFt} / sq.ft
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-2 group-hover:text-[#0c444a] transition-colors font-display">
                      {proj.title}
                    </h3>

                    {/* Meta Specs: Area in sq.ft, Beds, Baths */}
                    <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-600 mb-3 sm:mb-4">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>{proj.areaSqFt.toLocaleString()} sq.ft</span>
                      </span>
                      {proj.beds !== undefined && proj.beds > 0 && (
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Bed className="w-3.5 h-3.5 text-gray-400" />
                          <span>{proj.beds} BHK</span>
                        </span>
                      )}
                      {proj.baths !== undefined && (
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Bath className="w-3.5 h-3.5 text-gray-400" />
                          <span>{proj.baths} Bath</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  {/* Card Bottom: Rate and View Details */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] sm:text-[11px] text-gray-400 font-semibold uppercase">Total Project Cost</div>
                      <div className="text-sm sm:text-base font-black text-[#0c444a]">
                        {proj.totalCost ? formatINR(proj.totalCost) : 'Custom Quote'}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:text-[#0c444a]">
                      <span>View Specs</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </section>
  );
};
