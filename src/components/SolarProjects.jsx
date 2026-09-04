import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: '5 kW Rooftop Solar System',
    category: 'residential',
    categoryLabel: 'Residential Solar',
    location: 'Surat, Gujarat',
    capacity: '5 kW',
    panels: 'Mono-PERC 540W Tier-1',
    annualOffset: '7,400 Units/yr',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: '40 kW Common-Area Solar System',
    category: 'societies',
    categoryLabel: 'Housing Society',
    location: 'Vadodara, Gujarat',
    capacity: '40 kW',
    panels: 'Bifacial Glass-Glass 550W',
    annualOffset: '58,000 Units/yr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: '25 kW Commercial Rooftop System',
    category: 'commercial',
    categoryLabel: 'Commercial Solar',
    location: 'Ahmedabad, Gujarat',
    capacity: '25 kW',
    panels: 'High-Efficiency TopCon 580W',
    annualOffset: '37,500 Units/yr',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: '250 kW Industrial Rooftop Plant',
    category: 'industrial',
    categoryLabel: 'Industrial Solar',
    location: 'Sanand Industrial Estate, Gujarat',
    capacity: '250 kW',
    panels: 'Industrial Mono-PERC Array',
    annualOffset: '365,000 Units/yr',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: '10 kW Residential Hybrid Setup',
    category: 'residential',
    categoryLabel: 'Residential Solar',
    location: 'Gandhinagar, Gujarat',
    capacity: '10 kW',
    panels: 'Monocrystalline + Lithium Backup',
    annualOffset: '14,800 Units/yr',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: '500 kW Factory Captive Solar Array',
    category: 'industrial',
    categoryLabel: 'Industrial Solar',
    location: 'Rajkot, Gujarat',
    capacity: '500 kW',
    panels: 'Utility-Grade Central Plant',
    annualOffset: '730,000 Units/yr',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80',
  },
];

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'societies', label: 'Societies' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'industrial', label: 'Industrial' },
];

export default function SolarProjects({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative bg-white text-black py-20 px-6 sm:px-10 lg:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-3 inline-block">
              REAL-WORLD TRACK RECORD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-tight">
              Our Solar Projects
            </h2>
            <p className="text-base text-black/70 mt-2 font-normal">
              Real installations. Real properties. Real performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-full bg-[#f3f4f6] border border-black/5 self-start">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-black/70 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fafafa] rounded-2xl overflow-hidden border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/95 text-black shadow-sm">
                        {proj.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="h-3.5 w-3.5" />
                        {proj.location}
                      </span>
                      <span className="font-bold text-sm text-white font-sans">
                        {proj.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black tracking-tight mb-3">
                      {proj.title}
                    </h3>
                    <div className="space-y-1.5 text-xs text-black/70 mb-4">
                      <div className="flex justify-between">
                        <span className="text-black/50">Technology:</span>
                        <span className="font-medium text-black/90">{proj.panels}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-black/50">Generation:</span>
                        <span className="font-medium text-black/90">{proj.annualOffset}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-black/5">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-black hover:text-white border border-black/10 text-xs font-semibold text-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Request Similar System</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
