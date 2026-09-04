import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'consultation', label: 'Consultation' },
  { id: 'design', label: 'System Design' },
  { id: 'equipment', label: 'Equipment Supply' },
  { id: 'installation', label: 'Installation' },
  { id: 'maintenance', label: 'Cleaning & Maintenance' },
];

const SERVICES_DATA = [
  {
    id: 'consultation',
    number: '01',
    category: 'consultation',
    categoryLabel: 'Consultation',
    title: 'Solar Consultation',
    description:
      'We check your electricity bills and property space to recommend the right capacity before you invest.',
    image: '/whatdowedo/consolation.webp',
  },
  {
    id: 'design',
    number: '02',
    category: 'design',
    categoryLabel: 'System Design',
    title: 'Solar System Design',
    description:
      'Complete system layout designed around your roof structure and appliances for maximum energy generation.',
    image: '/whatdowedo/Solar System Design.webp',
  },
  {
    id: 'supply',
    number: '03',
    category: 'equipment',
    categoryLabel: 'Equipment',
    title: 'Complete Equipment Supply',
    description:
      'Direct supply of Tier-1 solar panels, certified inverters, galvanized mounting structures, and electrical BOS.',
    image: '/whatdowedo/equipments.webp',
  },
  {
    id: 'installation',
    number: '04',
    category: 'installation',
    categoryLabel: 'Installation',
    title: 'Turnkey Installation & Grid Sync',
    description:
      'Safe mechanical structure mounting, precision electrical wiring, earthing pits, and net metering grid synchronization.',
    image: '/whatdowedo/installation.webp',
  },
  {
    id: 'maintenance',
    number: '05',
    category: 'maintenance',
    categoryLabel: 'Maintenance',
    title: 'Solar Cleaning & Maintenance',
    description:
      'Regular panel washing, electrical health diagnostics, fault troubleshooting, and ongoing service support.',
    image: '/whatdowedo/cleaning.webp',
  },
];

export default function SolarServices({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section
      id="services"
      className="relative bg-[#F0F5F7] py-14 sm:py-20 px-6 sm:px-10 lg:px-16 border-t border-black/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Row: Title & Brief Philosophy */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-16 text-[#154359]">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#154359]/70 uppercase mb-2 inline-block">
              / WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#154359]">
              What Services
              <br />
              Do We Offer
            </h2>
          </div>

          <div className="max-w-xl text-sm sm:text-base text-[#154359]/85 leading-relaxed">
            <p>
              We handle the complete solar project from consultation to installation,
              DISCOM net metering, and maintenance. One team, straightforward
              advice, and zero jargon.
            </p>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-2.5 mt-4 text-xs sm:text-sm font-semibold text-[#154359] hover:text-[#0a2330] cursor-pointer"
            >
              <span>Discuss Your Solar Requirement</span>
              <div className="w-6 h-6 rounded-full border border-[#154359] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#154359] text-white shadow-sm'
                    : 'bg-white/70 text-[#154359]/80 hover:bg-white hover:text-[#154359]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Compact, Clean Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#154359]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Area (Branded Images from public/whatdowedo) */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-semibold text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md uppercase">
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Area (Compact, Little bit of info) */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#154359] tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-[#154359]/75 font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="text-xs font-semibold text-[#154359] group-hover:text-emerald-700 inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-[11px] font-medium text-black/40">
                      Stage {service.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
