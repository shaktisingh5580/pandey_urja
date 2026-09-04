import React from 'react';
import { Home, ArrowRight } from 'lucide-react';

export default function SolarWhatWeDo({ onOpenConsultation }) {
  return (
    <section
      id="about"
      className="relative bg-white text-black py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-black/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row (Left Tag + Right Two-Tone Headline) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16 mb-12 sm:mb-16">
          {/* Left Category Tag */}
          <div className="shrink-0">
            <span className="text-xs sm:text-sm font-medium tracking-wider text-black/70 uppercase font-sans">
              /WHY PANDEY URJA
            </span>
          </div>

          {/* Right Two-Tone Headline */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-black tracking-tight leading-[1.3]">
              A better solar experience from consultation to installation.{' '}
              <span className="text-black/40 font-normal">
                We build energy systems that maximize savings, DISCOM compliance,
                and long-term performance.
              </span>
            </h2>
          </div>
        </div>

        {/* 3-Column Asymmetric Feature Cards Grid (Left 3.5 cols : Center 5 cols : Right 3.5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Left Narrower Card (Portrait Image + Text) */}
          <div className="lg:col-span-3 bg-[#F4F6F8] rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border border-black/5 hover:shadow-lg transition-all duration-300 group">
            {/* Top Portrait Image Thumbnail */}
            <div className="overflow-hidden rounded-2xl mb-8 w-36 h-48 sm:w-40 sm:h-52 bg-neutral-200 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=85"
                alt="Lower monthly energy costs"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-auto">
              <h3 className="text-xl sm:text-[22px] font-semibold text-black tracking-tight leading-snug mb-2.5">
                Lower monthly energy costs
              </h3>
              <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                Most customers reduce electricity bills by 55–90%, with many
                reaching near-net-zero energy usage.
              </p>
            </div>
          </div>

          {/* Card 2: Center Wider Featured Card (Sleek Gradient Minimalist Card - No Image) */}
          <div
            onClick={onOpenConsultation}
            className="lg:col-span-6 relative rounded-[32px] overflow-hidden min-h-[460px] lg:min-h-[500px] flex flex-col justify-between p-8 sm:p-10 text-white shadow-xl group cursor-pointer bg-gradient-to-b from-[#9AA3AC] via-[#646F7A] to-[#333C45] hover:shadow-2xl transition-all duration-300"
          >

            {/* Top Section */}
            <div className="relative z-10">
              {/* White Round Icon Badge */}
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black shadow-md mb-6 transition-transform duration-300 group-hover:scale-110">
                <Home className="h-5 w-5 stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight mb-3">
                End-to-end project management
              </h3>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal max-w-md">
                Solar-equipped properties typically generate higher yields and enjoy
                seamless grid sync with 100% DISCOM net-metering compliance.
              </p>
            </div>

            {/* Bottom Action Hint */}
            <div className="relative z-10 mt-auto pt-12 flex items-center justify-between border-t border-white/25">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Turnkey Solar EPC
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:underline">
                <span>Discuss Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Card 3: Right Narrower Card (Portrait Image + Text) */}
          <div className="lg:col-span-3 bg-[#F4F6F8] rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border border-black/5 hover:shadow-lg transition-all duration-300 group">
            {/* Top Portrait Image Thumbnail */}
            <div className="overflow-hidden rounded-2xl mb-8 w-36 h-48 sm:w-40 sm:h-52 bg-neutral-200 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=85"
                alt="Increase home value"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-auto">
              <h3 className="text-xl sm:text-[22px] font-semibold text-black tracking-tight leading-snug mb-2.5">
                Increase home value
              </h3>
              <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-normal">
                Solar-equipped homes typically sell faster and command higher
                resale values in energy-conscious markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
