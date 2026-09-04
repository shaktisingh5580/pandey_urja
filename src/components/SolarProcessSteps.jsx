import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';

const SOLAR_PROCESS_PHASES = [
  {
    id: 'process-1',
    stage: 'Stage 01',
    category: 'Consultation',
    title: 'Requirement Discovery & Load Profiling',
    description:
      'We understand your property type, historical electricity bills, peak connected load, and clean energy goals before recommending an optimal system capacity.',
    deliverables: [
      '12-Month DISCOM utility bill audit & tariff analysis',
      'Sanctioned load vs peak demand evaluation',
      'Preliminary project feasibility & financial ROI model',
    ],
  },
  {
    id: 'process-2',
    stage: 'Stage 02',
    category: 'Site Survey',
    title: '3D Site Assessment & Shadow Simulation',
    description:
      'Certified solar engineers conduct precision on-site physical measurements, 3D sun-path shadow simulations, and structural load-bearing integrity checks.',
    deliverables: [
      'Drone & laser measurement of shadow-free roof area',
      'RCC slab / metal shed structural load validation',
      'Solar irradiance & optimal tilt angle simulation',
    ],
  },
  {
    id: 'process-3',
    stage: 'Stage 03',
    category: 'System Design',
    title: 'Custom Engineering & Single Line Diagrams (SLD)',
    description:
      'We prepare detailed CAD layout blueprints, string configurations, electrical protection schematics, and PVSyst 25-year generation yield models.',
    deliverables: [
      'Comprehensive Single Line Diagram (SLD) & wiring plan',
      'Hot-dip galvanized (HDG) mounting structure layout',
      'PVSyst certified generation forecast & loss analysis',
    ],
  },
  {
    id: 'process-4',
    stage: 'Stage 04',
    category: 'Equipment Supply',
    title: 'Tier-1 Hardware Procurement & Direct Sourcing',
    description:
      'We arrange and supply high-efficiency tier-1 solar panels, string/micro inverters, ACDB/DCDB protection boxes, and certified DC solar cables.',
    deliverables: [
      'High-efficiency Mono-PERC / TopCon half-cut bifacial panels',
      'European / Tier-1 smart inverters with built-in IoT telemetry',
      'Class-A DC surge protection devices (SPD) & MC4 kits',
    ],
  },
  {
    id: 'process-5',
    stage: 'Stage 05',
    category: 'Installation',
    title: 'Engineered Mechanical & Electrical Execution',
    description:
      'Our in-house trained technicians execute physical mounting and electrical cabling adhering to strict safety, wind-load, and waterproofing standards.',
    deliverables: [
      'Zero-penetration clamps for metal sheds / chemical anchors on RCC',
      'Dedicated chemical copper earthing pits & lightning arresters',
      'IP65 weather-proof conduit dressing & inverter mounting',
    ],
  },
  {
    id: 'process-6',
    stage: 'Stage 06',
    category: 'Documentation',
    title: 'Net-Metering & DISCOM Synchronization',
    description:
      'We handle all regulatory documentation, CEIG electrical inspectorate approvals, PM Surya Ghar subsidy processing, and bi-directional meter liaisoning.',
    deliverables: [
      'Complete DISCOM net-metering application & follow-ups',
      'CEIG electrical safety compliance certification',
      'Bi-directional net generation meter synchronization',
    ],
  },
  {
    id: 'process-7',
    stage: 'Stage 07',
    category: 'Commissioning',
    title: 'String Testing & Safe Grid Energization',
    description:
      'Comprehensive pre-commissioning quality testing including open-circuit voltage checks, insulation resistance verification, and official power turn-on.',
    deliverables: [
      'String VOC, ISC and insulation resistance quality checks',
      'Inverter anti-islanding & harmonic compliance validation',
      'Project documentation handover & mobile monitoring app setup',
    ],
  },
  {
    id: 'process-8',
    stage: 'Stage 08',
    category: 'Support & AMC',
    title: '25-Year Performance Telemetry & Maintenance',
    description:
      'Our dedicated customer service team provides real-time IoT generation monitoring, routine de-ionized panel cleaning, and preventive maintenance contracts (AMC).',
    deliverables: [
      '24/7 cloud generation monitoring & performance anomaly alerts',
      'Scheduled preventive inspections & thermal imaging',
      'Rapid on-site breakdown troubleshooting & manufacturer warranty service',
    ],
  },
];

export default function SolarProcessSteps({ onOpenConsultation }) {
  return (
    <section
      id="process"
      className="relative bg-white text-black py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column (Sticky Sidebar pinned in place) */}
          <div className="lg:col-span-5 left-0 top-0 lg:sticky lg:top-28 flex flex-col justify-between pt-2 pb-6">
            <div>
              <span className="mb-3.5 inline-block bg-black px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white rounded-md">
                END-TO-END WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black leading-[1.15] mb-5">
                From Planning to{' '}
                <span className="text-black/40">Long-Term Support</span>
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal mb-8">
                We take care of every critical stage of your solar project
                through one single team. No dealing with separate brokers, civil
                contractors, or government inspectors.
              </p>

              {/* Process Highlights */}
              <div className="space-y-3 mb-8">
                {[
                  'Single-point accountability from survey to grid sync',
                  'Tailored engineering designs optimized for your roof',
                  '100% DISCOM net-metering & subsidy compliance',
                  '25-year ongoing performance telemetry & AMC support',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-black shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-black/80 font-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-6 border-t border-black/10">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="bg-black hover:bg-black/85 text-white rounded-full px-6 py-3 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                <span>Discuss Your Solar Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Stacked Sticky Cards Container */}
          <div className="lg:col-span-7">
            <ContainerScroll className="space-y-12 sm:space-y-16 pb-32">
              {SOLAR_PROCESS_PHASES.map((phase, index) => (
                <CardSticky
                  key={phase.id}
                  index={index}
                  baseTop={96}
                  incrementY={24}
                  className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 md:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-black/5 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black text-white">
                        {phase.stage}
                      </span>
                      <span className="text-xs font-semibold text-black/50 uppercase tracking-wide">
                        {phase.category}
                      </span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold font-sans text-black/30 tracking-tight">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-normal mb-5">
                    {phase.description}
                  </p>

                  {/* Key Deliverables */}
                  {phase.deliverables && (
                    <div className="pt-4 border-t border-black/5">
                      <div className="text-[11px] font-semibold text-black/50 uppercase tracking-wider mb-2.5">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-black/80 font-normal">
                        {phase.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
