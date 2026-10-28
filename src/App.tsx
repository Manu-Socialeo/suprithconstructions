import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { ProcessSection } from './components/ProcessSection';
import { PropertiesSection } from './components/PropertiesSection';
import { ServicesSection } from './components/ServicesSection';
import { AgentsSection } from './components/AgentsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { PropertyModal } from './components/PropertyModal';
import { ContactModal } from './components/ContactModal';
import { DownloadModal } from './components/DownloadModal';
import { PROJECTS } from './data/mockData';
import { filterProjects } from './utils/construction-calculator';
import { Project } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState('All Projects');
  const [selectedType, setSelectedType] = useState('All Projects');
  const [searchAreaQuery, setSearchAreaQuery] = useState('');
  const [searchMaxRate, setSearchMaxRate] = useState<number | null>(null);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Filter projects using pure logic
  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS, {
      type: selectedType,
      areaQuery: searchAreaQuery,
      maxRatePerSqFt: searchMaxRate,
    });
  }, [selectedType, searchAreaQuery, searchMaxRate]);

  const handleHeroSearch = (criteria: {
    areaQuery: string;
    type: string;
    maxRatePerSqFt: number | null;
  }) => {
    setSearchAreaQuery(criteria.areaQuery);
    if (criteria.type) {
      setSelectedType(criteria.type);
    }
    setSearchMaxRate(criteria.maxRatePerSqFt);
  };

  const handleResetFilters = () => {
    setSelectedType('All Projects');
    setSearchAreaQuery('');
    setSearchMaxRate(null);
  };

  const handleOpenContactWithSubject = (subject?: string) => {
    setContactSubject(subject || '');
    setContactModalOpen(true);
  };

  const isFiltered = selectedType !== 'All Projects' || searchAreaQuery !== '' || searchMaxRate !== null;

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 font-sans antialiased selection:bg-[#0c444a] selection:text-amber-200">
      {/* Skip to main content link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sleek Minimalist Header */}
      <Header
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          if (nav !== 'Materials' && nav !== 'Process') {
            setSelectedType(nav);
          }
        }}
        onOpenSearch={() => {
          const el = document.getElementById('projects-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={(subj) => handleOpenContactWithSubject(subj || 'Civil Engineering Consultation with Er. Suprith')}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Hero Section: Architectural Prestige & Instant Mysore Consultation */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenContact={() => handleOpenContactWithSubject('General Consultation with Er. Suprith')}
        />

        {/* 2. Prestige Trust Ribbon */}
        <Stats />

        {/* 3. The Er. Suprith Civil Engineering Difference */}
        <About />

        {/* 4. The 4-Step Journey to Your Masterpiece Home */}
        <ProcessSection
          onOpenContact={(subj) => handleOpenContactWithSubject(subj || 'Schedule Step 1 Site Visit')}
        />

        {/* 5. Landmark Mysore Projects Portfolio */}
        <PropertiesSection
          projects={filteredProjects}
          selectedType={selectedType}
          onSelectType={(type) => {
            setSelectedType(type);
            setActiveNav(type);
          }}
          onSelectProject={(project) => setSelectedProject(project)}
          onResetFilters={handleResetFilters}
          isFiltered={isFiltered}
        />

        {/* 6. Combined 3D BIM Services & Wholesale Materials Supply */}
        <ServicesSection
          onQuickInquire={(serviceName) => handleOpenContactWithSubject(`Inquiry: ${serviceName}`)}
        />

        {/* 7. Meet Er. Suprith & Engineering Leadership */}
        <AgentsSection
          onOpenConsultationModal={() =>
            handleOpenContactWithSubject('Schedule On-Site Consultation with Er. Suprith')
          }
        />

        {/* 8. Verified Mysore Homeowner Testimonials */}
        <TestimonialsSection />

        {/* 9. General & Municipal FAQs Accordion */}
        <FaqSection
          onOpenContact={(subj) => handleOpenContactWithSubject(subj)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={(subj) => handleOpenContactWithSubject(subj)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenDownload={() => setDownloadModalOpen(true)}
      />

      {/* Floating Sticky Mobile & Desktop Quick Contact Bar */}
      <FloatingActionBar
        onOpenContact={(subj) => handleOpenContactWithSubject(subj)}
      />

      {/* Project Details Modal */}
      <PropertyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={(title) => handleOpenContactWithSubject(`Quote for ${title}`)}
      />

      {/* Contact / Inquire Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => {
          setContactModalOpen(false);
          setContactSubject('');
        }}
        initialSubject={contactSubject}
      />

      {/* Download Website Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Privacy & Warranty Dialog */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="warranty-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border border-gray-100">
            <h2 id="warranty-title" className="text-xl font-bold text-gray-900 mb-3 font-display">
              Suprith Constructions · 10-Year Structural Guarantee &amp; Terms
            </h2>
            <div className="text-xs sm:text-sm text-gray-600 space-y-3 leading-relaxed max-h-80 overflow-y-auto mb-6 pr-1">
              <p>
                <strong className="text-gray-900">10-Year Bonded Structural Guarantee:</strong> Every turnkey RCC building constructed by Suprith Constructions is covered by a 10-year stability guarantee personally signed by Er. Suprith, Chartered Civil Engineer. Includes footings, columns, beams, and slab integrity.
              </p>
              <p>
                <strong className="text-gray-900">Transparent Pricing Guarantee:</strong> Our agreed rate per sq. ft. is binding based on the chosen package specifications. Zero mid-project markup, zero hidden contractor escalation.
              </p>
              <p>
                <strong className="text-gray-900">Material Quality Audits:</strong> We supply only primary Fe550D TMT steel (Tata Tiscon / JSW) and factory fresh 53-grade cement (UltraTech / Birla Super) accompanied by lab batch test certificates.
              </p>
              <p>
                <strong className="text-gray-900">MUDA / MCC Regulatory Compliance:</strong> All architectural drawings strictly comply with Mysore municipal setback rules, avoiding legal complications or zoning penalties.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              className="w-full bg-[#052327] hover:bg-[#073339] text-white py-3 rounded-full text-xs font-bold transition-colors cursor-pointer"
            >
              I Understand &amp; Agree
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
