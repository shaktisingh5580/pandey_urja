import React, { useRef, useState, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1];

// Top floating squares positions: (x%, y%, size px)
const TOP_FLOATING_SQUARES = [
  { x: 6, y: 20, size: 12 },
  { x: 12, y: 32, size: 8 },
  { x: 8, y: 44, size: 6 },
  { x: 88, y: 18, size: 10 },
  { x: 92, y: 30, size: 14 },
  { x: 85, y: 42, size: 7 },
  { x: 90, y: 52, size: 5 },
  { x: 14, y: 56, size: 5 },
];

// 4 Solar Solutions Data tailored to property types
const SOLAR_SOLUTIONS = [
  {
    id: 'residential',
    title: 'Residential Solar',
    badge: 'HOMES & VILLAS',
    subtitle: 'Solar for Residential Homes',
    category: 'Homes & Villas',
    year: '3 kW - 10 kW',
    tagline:
      'Rooftop solar systems designed around your household electricity consumption and roof space.',
    description:
      'Slash your monthly electricity bills by up to 90% with customized residential rooftop systems. We optimize for your terrace layout, shading patterns, and appliance loads while facilitating PM Surya Ghar subsidy processing and DISCOM net metering.',
    metrics: [
      { label: 'Typical Capacity', val: '3 kW - 10 kW' },
      { label: 'Bill Reduction', val: 'Up to 90%' },
      { label: 'Subsidy Support', val: 'PM Surya Ghar' },
    ],
    benefits: [
      'Tailored for RCC terraces, sloped roofs, and elevated structures',
      'High-efficiency Mono-PERC / TopCon half-cut solar panels',
      'Smart hybrid / on-grid inverter with mobile app generation tracking',
      'Complete net-metering documentation and DISCOM synchronization',
    ],
    image: '/residential.png',
    squares: [
      { x: 5, y: 30, size: 16 },
      { x: 10, y: 42, size: 10 },
      { x: 3, y: 52, size: 7 },
      { x: 80, y: 70, size: 14 },
      { x: 85, y: 82, size: 9 },
      { x: 78, y: 60, size: 6 },
    ],
  },
  {
    id: 'societies',
    title: 'Housing Societies',
    badge: 'APARTMENTS & SOCIETIES',
    subtitle: 'Solar for Housing Societies',
    category: 'Apartments & Societies',
    year: '20 kW - 80 kW',
    tagline:
      'Solutions for common-area electricity requirements including society buildings, lighting, lifts, pumps and shared facilities.',
    description:
      'Transform recurring society maintenance overhead into a self-sustaining asset. We design high-output rooftop solar installations on clubhouses and residential towers to power heavy shared loads effortlessly without burdening members.',
    metrics: [
      { label: 'Typical Capacity', val: '20 kW - 80 kW' },
      { label: 'Common Load Offset', val: 'Lifts & Pumps' },
      { label: 'Maintenance Relief', val: 'Direct Society Savings' },
    ],
    benefits: [
      'Powers common area lifts, water pumps, clubhouse, and street lighting',
      'Comprehensive presentation & documentation support for AGM committees',
      'Zero disturbance to residents during professional mechanical mounting',
      'Scheduled preventive AMC cleaning and quarterly health inspections',
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    squares: [
      { x: 82, y: 55, size: 16 },
      { x: 88, y: 68, size: 10 },
      { x: 78, y: 72, size: 7 },
      { x: 85, y: 42, size: 6 },
      { x: 90, y: 80, size: 8 },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    badge: 'OFFICES & INSTITUTES',
    subtitle: 'Solar for Commercial Businesses',
    category: 'Offices & Institutes',
    year: '25 kW - 150 kW+',
    tagline:
      'Solar solutions for offices, shops, schools, hospitals, hotels and commercial properties.',
    description:
      'Offset expensive daytime commercial tariff rates with on-site rooftop solar generation. Benefit from accelerated depreciation tax advantages, guaranteed project payback within 3 to 4 years, and enhanced ESG corporate credentials.',
    metrics: [
      { label: 'Typical Capacity', val: '25 kW - 150 kW+' },
      { label: 'Tax Advantage', val: '40% Acc. Depreciation' },
      { label: 'Est. Payback Period', val: '3.2 - 4.0 Years' },
    ],
    benefits: [
      'Engineered for commercial buildings, hospitals, schools, and malls',
      'Accelerated depreciation tax benefits under Income Tax Act Section 32',
      'Zero operational disruption during electrical integration & testing',
      'Real-time IoT cloud telemetry and multi-site monitoring dashboard',
    ],
    image: '/solar_comme.jpg',
    squares: [
      { x: 4, y: 24, size: 16 },
      { x: 10, y: 36, size: 10 },
      { x: 2, y: 44, size: 7 },
      { x: 78, y: 78, size: 14 },
      { x: 84, y: 88, size: 8 },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Plants',
    badge: 'FACTORIES & PLANTS',
    subtitle: 'Solar for Industrial Facilities',
    category: 'Factories & Plants',
    year: '100 kW - Multi-MW',
    tagline:
      'Solar systems for factories, manufacturing plants and industrial facilities with large electricity requirements.',
    description:
      'Engineered for high-voltage industrial machinery and manufacturing operations. We design heavy-duty metal shed and RCC rooftop captive solar plants capable of offsetting millions of units of industrial grid power annually.',
    metrics: [
      { label: 'Typical Capacity', val: '100 kW - Multi-MW' },
      { label: 'Tariff Hedging', val: '25-Year Price Lock' },
      { label: 'Grid Voltage', val: 'LT / 11kV / 66kV HT' },
    ],
    benefits: [
      'Custom clamp mounting for trapezoidal / standing seam metal sheet sheds',
      'Harmonic-compliant high-power central and string inverters',
      'Turnkey HT/LT connection, CEIG electrical approvals & synchronization',
      'Industrial-grade SCADA monitoring with weather sensors & irradiance meters',
    ],
    image: '/indrustial.jpg',
    squares: [
      { x: 82, y: 26, size: 14 },
      { x: 88, y: 38, size: 10 },
      { x: 78, y: 44, size: 7 },
      { x: 84, y: 54, size: 5 },
      { x: 90, y: 60, size: 8 },
    ],
  },
];

// Marquee Brand Logos
const MARQUEE_LOGOS = [
  { name: 'Codecraft_', type: 'code' },
  { name: 'ennLabs', type: 'dots' },
  { name: 'GlobalBank', type: 'circle-ring' },
  { name: '45 Degrees°', type: 'arrow' },
  { name: 'AlphaWave', type: 'wave-circle' },
  { name: 'Biosynthesis', type: 'lines' },
  { name: 'Boltshift', type: 'bolt' },
  { name: 'Clandestine', type: 'plus' },
];

function BrandIcon({ type }) {
  switch (type) {
    case 'code':
      return (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 4 1 9 6 14" />
          <polyline points="16 4 21 9 16 14" />
          <line x1="13" y1="2" x2="9" y2="16" />
        </svg>
      );
    case 'dots':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          {[3, 10, 17].map((x) =>
            [3, 10, 17].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />
            ))
          )}
        </svg>
      );
    case 'circle-ring':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="9" />
          <circle cx="11" cy="11" r="4" />
        </svg>
      );
    case 'arrow':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="2" y1="16" x2="16" y2="2" />
          <polyline points="7 2 16 2 16 11" />
        </svg>
      );
    case 'wave-circle':
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="11" cy="11" r="9" />
          <path d="M5 11Q8 7 11 11Q14 15 17 11" />
        </svg>
      );
    case 'lines':
      return (
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="0" y1="3" x2="24" y2="3" />
          <line x1="6" y1="9" x2="24" y2="9" />
          <line x1="0" y1="15" x2="18" y2="15" />
        </svg>
      );
    case 'bolt':
      return (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor">
          <polygon points="8,0 0,11 6,11 6,20 14,9 8,9" />
        </svg>
      );
    case 'plus':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <rect x="7.5" y="0" width="3" height="18" />
          <rect x="0" y="7.5" width="18" height="3" />
        </svg>
      );
    default:
      return null;
  }
}

// Parallax & Bobbing floating square in the top header
function ParallaxTopSquare({ sq, index, scrollYProgress }) {
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -(80 + index * 30)]);
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 20 });

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${sq.x}%`,
        top: `${sq.y}%`,
        y: smoothY,
        zIndex: 1,
      }}
      className="pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3 + index * 0.4,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: index * 0.3,
        }}
        style={{
          width: sq.size,
          height: sq.size,
          backgroundColor: 'black',
        }}
      />
    </motion.div>
  );
}

// Single Magnetic Square for Solution Cards
function MagneticCardSquare({ sq, mouseX, mouseY }) {
  const sqXNorm = sq.x / 100;
  const sqYNorm = sq.y / 100;

  const rawX = useTransform(mouseX, (x) => (x - sqXNorm) * 40);
  const rawY = useTransform(mouseY, (y) => (y - sqYNorm) * 40);

  const smoothX = useSpring(rawX, { stiffness: 80, damping: 18, mass: 0.6 });
  const smoothY = useSpring(rawY, { stiffness: 80, damping: 18, mass: 0.6 });

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${sq.x}%`,
        top: `${sq.y}%`,
        width: sq.size,
        height: sq.size,
        x: smoothX,
        y: smoothY,
        backgroundColor: 'black',
        zIndex: 15,
      }}
      className="pointer-events-none shadow-sm"
    />
  );
}

// Single Case Study / Solution Card
function SolutionCard({ item, index, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: EASING,
      }}
      onClick={() => onSelect(item)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[4/3] w-full overflow-hidden cursor-pointer select-none bg-neutral-100 border border-black/10 shadow-xs hover:shadow-xl transition-shadow duration-300"
    >
      {/* 1. Background image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      {/* 2. Pixel-block hover overlay: 12 columns x 8 rows */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-12 grid-rows-8 z-10">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => {
            const delayIn = (row + col) * 0.018;
            const delayOut = (8 - row + (12 - col)) * 0.012;
            return (
              <motion.div
                key={`${row}-${col}`}
                className="h-full w-full bg-black/80 origin-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1.02 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.25,
                  delay: isHovered ? delayIn : delayOut,
                  ease: EASING,
                }}
              />
            );
          })
        )}
      </div>

      {/* 3. Magnetic squares */}
      {item.squares.map((sq, i) => (
        <MagneticCardSquare key={i} sq={sq} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* 4. Plus button (top right) */}
      <div className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center border border-white/30 text-xs text-white backdrop-blur-[2px] group-hover:border-white group-hover:bg-white/10 transition-all">
        +
      </div>

      {/* 5. Info plate (bottom left) with visible action button */}
      <div className="absolute bottom-0 left-0 z-20 max-w-[90%] sm:max-w-[85%] bg-white px-4 pb-3.5 pt-3 shadow-md flex items-end justify-between gap-3 sm:gap-4">
        <div>
          <h3 className="text-[clamp(1.2rem,2vw,1.75rem)] font-normal leading-tight text-black">
            {item.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] sm:text-[12px] text-black/60 font-normal">
              {item.category}
            </span>
            <span className="text-[11px] sm:text-[12px] font-medium text-black">
              {item.year}
            </span>
          </div>
        </div>

        {/* Small Action Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          className="shrink-0 bg-black hover:bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 transition-all shadow-sm cursor-pointer group-hover:scale-105"
        >
          <span>View Details</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function SolarSolutions({ onOpenConsultation }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });
  const [selectedSolution, setSelectedSolution] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative bg-white text-black overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Marquee Keyframe Style Injection */}
      <style>{`
        @keyframes marqueeProjects {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-projects {
          animation: marqueeProjects 28s linear infinite;
        }
        .marquee-projects:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Area (Header with floating squares) */}
      <div className="relative px-6 pb-10 pt-24 sm:px-10 lg:px-16 lg:pt-32">
        {/* Parallax Floating Squares Layer */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {TOP_FLOATING_SQUARES.map((sq, index) => (
            <ParallaxTopSquare
              key={index}
              sq={sq}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Header Text */}
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: EASING }}
          >
            <span className="mb-5 inline-block bg-black px-4 py-1.5 text-[13px] font-medium tracking-wide text-white">
              Solar Solutions
            </span>
            <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.25] tracking-tight">
              <span className="text-black">Tailored Architecture </span>
              <span className="text-black/40">for</span>
              <br />
              <span className="text-black/40">Every Property Type</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Case Study / Solar Solutions 2x2 Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16">
        <div className="grid gap-4 md:grid-cols-2">
          {SOLAR_SOLUTIONS.map((item, index) => (
            <SolutionCard
              key={item.id}
              item={item}
              index={index}
              onSelect={(sol) => setSelectedSolution(sol)}
            />
          ))}
        </div>
      </div>



      {/* Detail Modal when a card is clicked */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ ease: EASING, duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-black transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-black px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wide uppercase">
                  {selectedSolution.badge}
                </span>
                <span className="text-xs text-black/60 font-medium">
                  Pandey Urja Architecture
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-2">
                {selectedSolution.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-black/70 mb-5 leading-relaxed font-normal">
                {selectedSolution.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {selectedSolution.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl bg-neutral-50 border border-black/5"
                  >
                    <span className="text-[10px] text-black/50 block font-medium">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-black block mt-0.5">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="space-y-2 mb-6">
                {selectedSolution.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-black/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/10">
                <button
                  onClick={() => {
                    setSelectedSolution(null);
                    onOpenConsultation();
                  }}
                  className="bg-black text-white hover:bg-black/85 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Proposal for this Property</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#assessment"
                  onClick={() => setSelectedSolution(null)}
                  className="text-xs sm:text-sm font-medium text-black/70 hover:text-black transition-colors"
                >
                  Calculate Cost →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Spacer */}
      <div className="h-12" />
    </section>
  );
}
