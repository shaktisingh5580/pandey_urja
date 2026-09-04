import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Single Stacking Card inside the Pinned Viewport
function WorkflowStackCard({
  entry,
  index,
  total,
  scrollYProgress,
  onOpenConsultation,
}) {
  const stepSize = 1 / total;
  const start = index * stepSize;
  const prevStart = Math.max(0, (index - 0.9) * stepSize);
  const nextStart = Math.min(1, (index + 1) * stepSize);

  // Y Transform: starts from below (120%), smoothly settles at 0%
  const rawY = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.05, stepSize, 1]
      : [prevStart, start, nextStart, 1],
    index === 0
      ? ['0%', '0%', '-3%', '-10%']
      : ['120%', '0%', '-3%', '-10%']
  );

  // Scale Transform: slightly scales down as subsequent cards stack over it
  const rawScale = useTransform(
    scrollYProgress,
    index === 0
      ? [0, stepSize, 1]
      : [prevStart, start, nextStart, 1],
    index === 0
      ? [1, 0.97, 0.91]
      : [0.9, 1, 0.97, 0.91]
  );

  // Opacity Transform: fades in as it slides up
  const rawOpacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.01, 1]
      : [prevStart, start - 0.03, start, 1],
    index === 0
      ? [1, 1, 1]
      : [0, 0.4, 1, 1]
  );

  const smoothY = useSpring(rawY, { stiffness: 100, damping: 22, mass: 0.5 });
  const smoothScale = useSpring(rawScale, { stiffness: 100, damping: 22, mass: 0.5 });
  const smoothOpacity = useSpring(rawOpacity, { stiffness: 100, damping: 22, mass: 0.5 });

  return (
    <motion.div
      style={{
        y: smoothY,
        scale: smoothScale,
        opacity: smoothOpacity,
        zIndex: index + 10,
      }}
      className="absolute inset-x-0 mx-auto w-full max-w-4xl rounded-3xl bg-[#fafafa] border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 sm:p-8 md:p-9 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-between select-none"
    >
      {/* Left Column: Stage Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Badge
              variant="default"
              className="bg-black text-white px-3 py-1 font-semibold rounded-full text-xs shadow-xs"
            >
              {entry.version}
            </Badge>
            <span className="text-xs font-semibold text-black/50 tracking-wider uppercase">
              {entry.date}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black tracking-tight mb-2.5">
            {entry.title}
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-black/70 leading-relaxed font-normal mb-4">
            {entry.description}
          </p>

          {entry.items && entry.items.length > 0 && (
            <ul className="space-y-1.5 text-xs sm:text-sm text-black/80 font-normal">
              {entry.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer CTA */}
        <div className="mt-5 pt-3.5 border-t border-black/5 flex items-center justify-between">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="bg-black hover:bg-black/85 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-xs group"
          >
            <span>{entry.button ? entry.button.text : 'Discuss this Stage'}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <span className="text-[11px] font-medium text-black/40">
            Stage {index + 1} of {total}
          </span>
        </div>
      </div>

      {/* Right Column: Stage Image */}
      {entry.image && (
        <div className="w-full md:w-72 lg:w-88 h-48 sm:h-56 md:h-auto rounded-2xl overflow-hidden border border-black/10 relative shadow-inner shrink-0 bg-neutral-200">
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
            <span className="font-semibold px-2.5 py-0.5 rounded-full bg-white/95 text-black text-[11px] shadow-xs">
              Pandey Urja Workflow
            </span>
            <span className="font-medium text-[11px]">
              Stage 0{index + 1}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function StagePill({ idx, total, entry, scrollYProgress }) {
  const stepSize = 1 / total;
  const start = idx * stepSize;
  const end = (idx + 1) * stepSize;

  const rawBg = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, 0.02, end - 0.02, end + 0.03]
      : [start - 0.04, start, end - 0.02, end + 0.03],
    ['#f5f5f5', '#000000', '#000000', '#f5f5f5']
  );
  const rawColor = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, 0.02, end - 0.02, end + 0.03]
      : [start - 0.04, start, end - 0.02, end + 0.03],
    ['#555555', '#ffffff', '#ffffff', '#555555']
  );

  return (
    <motion.div
      style={{ backgroundColor: rawBg, color: rawColor }}
      className="px-2.5 py-1 rounded-full border border-black/10 text-[11px] font-medium flex items-center gap-1.5 transition-all shadow-xs"
    >
      <span className="font-bold">0{idx + 1}</span>
      <span className="hidden sm:inline opacity-90">{entry.date}</span>
    </motion.div>
  );
}

export const Changelog1 = ({
  title = "From Planning to Long-Term Support",
  description = "We take care of the important stages of your solar project through one single team. No dealing with separate brokers, contractors, or inspectors.",
  entries = [],
  onOpenConsultation,
}) => {
  const containerRef = useRef(null);
  const total = entries.length || 1;

  // Scroll tracking across the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-white text-black border-t border-black/5"
      style={{ height: `${(total + 1) * 75}vh` }}
    >
      {/* Sticky Full-Screen Viewport - Pinned in place while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 sm:py-10 px-5 sm:px-10 lg:px-16 overflow-hidden">
        {/* Header (Stays pinned in place) */}
        <div className="mx-auto max-w-3xl text-center shrink-0">
          <span className="mb-2.5 inline-block bg-black px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white rounded-md">
            END-TO-END WORKFLOW
          </span>
          <h2 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-black/70 leading-relaxed font-normal max-w-2xl mx-auto">
            {description}
          </p>

          {/* Stage Progress Pills Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap">
            {entries.map((entry, idx) => (
              <StagePill
                key={idx}
                idx={idx}
                total={total}
                entry={entry}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Stacked Cards Area (Cards slide UP one by one as user scrolls) */}
        <div className="relative w-full max-w-4xl mx-auto flex-1 flex items-center justify-center my-2 sm:my-4 min-h-[360px] sm:min-h-[400px]">
          {entries.map((entry, index) => (
            <WorkflowStackCard
              key={entry.version || index}
              entry={entry}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
              onOpenConsultation={onOpenConsultation}
            />
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="text-center shrink-0 pb-1">
          <span className="text-xs text-black/40 font-medium inline-flex items-center gap-1.5">
            <span>Scroll down to advance workflow stages</span>
            <span className="animate-bounce">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
};
