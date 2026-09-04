import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  BatteryCharging,
  Globe,
  HelpCircle,
  User,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

import SolarSolutions from './components/SolarSolutions';
import SolarServices from './components/SolarServices';
import SolarWhatWeDo from './components/SolarWhatWeDo';
import SolarAboutTestimonialsFAQ from './components/SolarAboutTestimonialsFAQ';
import SolarFinalCTAAndFooter from './components/SolarFinalCTAAndFooter';

const EASING = [0.16, 1, 0.3, 1];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Solutions', href: '#solutions', testId: 'nav-link-solutions' },
    { label: 'Services', href: '#services', testId: 'nav-link-services' },
    { label: 'About', href: '#about', testId: 'nav-link-about' },
    { label: 'FAQ', href: '#faq', testId: 'nav-link-faq' },
  ];

  return (
    <div data-testid="page" className="relative w-full min-h-screen bg-white text-black font-sans">
      {/* 1. TESLA ENERGY STYLE HERO SECTION (Full Viewport with Clean Architectural Solar Backdrop) */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between select-none"
      >
        {/* Full-bleed Responsive Architectural Solar Background (Mobile & Desktop) */}
        <div className="absolute inset-0 z-0">
          <picture className="h-full w-full">
            <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.png" />
            <source media="(min-width: 768px)" srcSet="/hero-bg-desktop.png" />
            <img
              src="/hero-bg-desktop.png"
              alt="Pandey Urja Solar Energy"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </picture>
          {/* Subtle natural daylight gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55"
            aria-hidden="true"
          />
        </div>

        {/* Minimalist Top Navigation Header */}
        <header
          data-testid="navbar"
          className="relative z-30 flex items-center justify-between px-6 pt-5 sm:px-10 sm:pt-6 lg:px-14 lg:pt-7 w-full"
        >
          {/* Brand Logo (Ultra HD Image) */}
          <a
            href="#hero"
            data-testid="nav-logo"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/Pandey_Urja_LLP_logo_ULTRA_HD_8K_7680px.png"
              alt="Pandey Urja LLP"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
            />
          </a>

          {/* Desktop Centered Clean Navigation */}
          <nav
            data-testid="desktop-nav"
            className="hidden md:flex items-center gap-7 lg:gap-9"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={link.testId}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Utility Icons + Consultation CTA */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={() => setConsultationModalOpen(true)}
              aria-label="Help & FAQ"
              className="text-white/80 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <HelpCircle className="h-5 w-5 stroke-[1.75]" />
            </button>
            <button
              type="button"
              onClick={() => setConsultationModalOpen(true)}
              aria-label="Region & Language"
              className="text-white/80 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <Globe className="h-5 w-5 stroke-[1.75]" />
            </button>
            <button
              type="button"
              onClick={() => setConsultationModalOpen(true)}
              aria-label="Account & Consultation"
              className="text-white/80 hover:text-white transition-colors p-1 cursor-pointer"
            >
              <User className="h-5 w-5 stroke-[1.75]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button (<md) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="relative h-10 w-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: EASING }}
                className="relative z-10 flex h-full w-72 flex-col justify-between bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <img
                      src="/Pandey_Urja_LLP_logo_ULTRA_HD_8K_7680px.png"
                      alt="Pandey Urja LLP"
                      className="h-9 w-auto object-contain"
                    />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-1.5 text-white/70 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 text-base font-medium text-white/85 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setConsultationModalOpen(true);
                    }}
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Get a Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Bottom 3-Pillar Features & Consultation Bar */}
        <div className="relative z-10 w-full px-6 pb-8 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14 max-w-7xl mx-auto mt-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* 3 Pillars Group */}
            <div className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-14 items-start text-center md:text-left w-full md:w-auto">
              {/* Pillar 1: Solar Generation */}
              <div className="flex flex-col items-center md:items-start">
                <div className="h-7 flex items-center justify-center mb-1">
                  <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  Convert Sunlight
                </div>
                <div className="text-[11px] sm:text-xs text-white/80 font-normal">
                  Into Clean Energy
                </div>
              </div>

              {/* Pillar 2: Smart Storage & Grid */}
              <div className="flex flex-col items-center md:items-start">
                <div className="h-7 flex items-center justify-center mb-1">
                  <BatteryCharging className="h-5 w-5 sm:h-6 sm:w-6 text-white stroke-[2]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  Store & Manage
                </div>
                <div className="text-[11px] sm:text-xs text-white/80 font-normal">
                  with Net Metering
                </div>
              </div>

              {/* Pillar 3: 24/7 AMC Support */}
              <div className="flex flex-col items-center md:items-start">
                <div className="h-7 flex items-center justify-center mb-1">
                  <span className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-none">
                    24/7
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  Access Backup
                </div>
                <div className="text-[11px] sm:text-xs text-white/80 font-normal">
                  Power & Support
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setConsultationModalOpen(true)}
                className="w-full md:w-auto px-7 sm:px-9 py-3 sm:py-3.5 rounded-xl border border-white/90 bg-white/15 backdrop-blur-md hover:bg-white hover:text-black text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAILORED ENERGY ARCHITECTURE (Solar Solutions for Different Requirements) */}
      <SolarSolutions onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 3. WHAT SERVICES DO WE OFFER (Consultation, Design, Equipment, Installation, Net Metering, AMC) */}
      <SolarServices onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 4. WHY PANDEY URJA (Value Proposition & Property Approach) */}
      <SolarWhatWeDo onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 5. ABOUT, TESTIMONIALS & FAQ */}
      <SolarAboutTestimonialsFAQ onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* 10. FINAL PRACTICAL CTA & FOOTER + CONSULTATION MODAL */}
      <SolarFinalCTAAndFooter
        isModalOpen={consultationModalOpen}
        onOpenModal={() => setConsultationModalOpen(true)}
        onCloseModal={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
