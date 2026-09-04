import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

export const BlurredStagger = ({ text = '' }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm sm:text-base leading-relaxed break-words whitespace-normal text-black/75 font-normal"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export const defaultFaqItems = [
  {
    id: 'item-1',
    question: 'What type of solar systems do you provide?',
    answer:
      'We provide complete grid-tied (on-grid), hybrid with battery storage, and captive solar solutions tailored specifically for residential homes, housing societies, commercial establishments, and industrial plants.',
  },
  {
    id: 'item-2',
    question: 'Do you supply the solar panels and inverter?',
    answer:
      'Yes. We procure and supply all major equipment — including tier-1 Mono-PERC / TopCon panels, smart inverters, hot-dip galvanized mounting structures, ACDB/DCDB protection boxes, and certified wiring.',
  },
  {
    id: 'item-3',
    question: 'Do you handle the entire installation process?',
    answer:
      'Yes. Our dedicated in-house technical team performs all structural mounting, electrical cabling, grounding, testing, and official grid commissioning. You do not need to hire third-party electricians.',
  },
  {
    id: 'item-4',
    question: 'Do you help with net metering and government approvals?',
    answer:
      'Yes. We assist customers with all applicable documentation, DISCOM net-metering applications, technical feasibility assessments, CEIG approvals, and bi-directional meter installation.',
  },
  {
    id: 'item-5',
    question: 'Do you provide solar maintenance after installation?',
    answer:
      'Yes. We provide scheduled routine maintenance, high-pressure panel cleaning, thermal health inspections, troubleshooting, component warranty support, and Annual Maintenance Contracts (AMC).',
  },
  {
    id: 'item-6',
    question: 'Can you help if I already have an existing solar system?',
    answer:
      'Yes. Depending on your requirement, we can diagnose low generation faults, repair damaged components, upgrade inverters, and offer comprehensive maintenance or AMC plans for pre-existing solar systems.',
  },
];

export default function FAQs({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about planning and commissioning solar with Pandey Urja.",
  faqItems = defaultFaqItems,
  onOpenConsultation,
}) {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-black border-t border-black/5">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12 items-start">
          {/* Left Column Header */}
          <div className="md:col-span-2">
            <span className="bg-black text-white text-[11px] font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-black/70 mt-4 text-sm sm:text-base leading-relaxed font-normal">
              {description}
            </p>
            <p className="text-black/60 mt-6 hidden md:block text-xs sm:text-sm leading-relaxed">
              Can’t find what you’re looking for? Reach out to our{' '}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="text-black font-semibold underline underline-offset-4 hover:opacity-80 cursor-pointer"
              >
                solar team
              </button>{' '}
              for direct assistance.
            </p>
          </div>

          {/* Right Column Accordion with Text Reveal */}
          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="space-y-1">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-black/10 py-1"
                >
                  <AccordionTrigger className="cursor-pointer text-base font-semibold text-black hover:no-underline text-left py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-1">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Mobile Bottom Contact Prompt */}
          <p className="text-black/60 mt-2 md:hidden text-xs">
            Can’t find what you’re looking for? Contact our{' '}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="text-black font-semibold underline underline-offset-4 hover:opacity-80 cursor-pointer"
            >
              customer support team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
