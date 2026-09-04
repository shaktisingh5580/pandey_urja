import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ArrowRight,
  X,
  CheckCircle2,
  Send,
  Clock,
} from 'lucide-react';

export default function SolarFinalCTAAndFooter({
  isModalOpen,
  onCloseModal,
  onOpenModal,
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    monthlyBill: '₹3,000 - ₹6,000',
    city: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* FINAL PRACTICAL SOLAR CTA SECTION (White section with bold black card) */}
      <section className="relative bg-white text-black py-20 px-6 sm:px-10 lg:px-16 border-t border-black/5 overflow-hidden">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-3 inline-block">
                LET'S TALK SPECIFICS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
                Planning to Install Solar?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
                Tell us about your property and electricity requirements. We'll help you understand
                the right capacity, expected savings, and execution roadmap for your project.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenModal}
                  className="bg-white hover:bg-neutral-100 text-black rounded-full px-8 py-3.5 text-sm font-medium inline-flex items-center gap-2 transition-all shadow-lg group cursor-pointer"
                >
                  <span>Discuss Your Solar Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:+919876543210"
                  className="border border-white/20 bg-white/5 hover:bg-white/15 rounded-full px-6 py-3.5 text-sm font-medium text-white inline-flex items-center gap-2 transition-all"
                >
                  <Phone className="h-4 w-4 text-white/80" />
                  <span>Call Us: +91 98765 43210</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Pandey%20Urja,%20I%20would%20like%20to%20discuss%20a%20solar%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 bg-white/5 hover:bg-white/15 rounded-full px-6 py-3.5 text-sm font-medium text-white inline-flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5 pt-6 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="flex items-center gap-3 text-xs text-white/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Site assessment & consumption analysis</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Custom proposal with tailored layout</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Complete net metering & subsidy support</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>25-year linear performance warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT OUR OFFICE & LOCATION MAP SECTION */}
      <section id="contact" className="relative bg-[#F8F9FA] py-14 sm:py-20 px-6 sm:px-10 lg:px-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest text-black/60 uppercase mb-2 inline-block">
                  / VISIT US
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight leading-tight mb-3">
                  Visit Our Corporate Office
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                  Visit our office to consult with our team, review equipment specifications, and discuss your rooftop or commercial solar project.
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-black/85">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Pandey Urja LLP</div>
                      <div className="text-black/60 mt-0.5 leading-relaxed">
                        Office No. 123, Vaibhav Laxmi Complex, near Sangam Chowkdi, Bhestan, Surat, Gujarat 395023
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Working Hours</div>
                      <div className="text-black/60 mt-0.5">Monday – Saturday: 9:00 AM – 8:00 PM</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Contact</div>
                      <div className="text-black/60 mt-0.5">+91 98765 43210 · your@pandeyurja.in</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-black/10">
                <a
                  href="https://www.google.com/maps/place/Pandey+Urja+LLP/@21.1227958,72.8466435,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed Iframe */}
            <div className="lg:col-span-7 h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md border border-black/10 bg-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.743353129324!2d72.8466435!3d21.1227958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051178c3fa3fd%3A0x4466d2543fc4fe77!2sPandey%20Urja%20LLP!5e0!3m2!1sen!2sin!4v1788495754479!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pandey Urja LLP Google Maps Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f8f9fa] text-black pt-16 pb-12 px-6 sm:px-10 lg:px-16 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Brand Top Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-black/10 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/Pandey_Urja_LLP_logo_ULTRA_HD_8K_7680px.png"
                alt="Pandey Urja LLP"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-black/60 max-w-md">
              Serving Homes · Housing Societies · Commercial Properties · Industrial Plants across India.
            </p>
          </div>

          {/* 5 Column Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-black/10 text-xs sm:text-sm">
            {/* Col 1 */}
            <div>
              <h4 className="font-semibold text-black tracking-wider uppercase text-xs mb-4">
                Solar Solutions
              </h4>
              <ul className="space-y-2.5 text-black/60 font-normal">
                <li><a href="#solutions" className="hover:text-black transition-colors">Residential Solar</a></li>
                <li><a href="#solutions" className="hover:text-black transition-colors">Society Solar</a></li>
                <li><a href="#solutions" className="hover:text-black transition-colors">Commercial Solar</a></li>
                <li><a href="#solutions" className="hover:text-black transition-colors">Industrial Solar</a></li>
                <li><a href="#assessment" className="hover:text-black transition-colors">Solar Cost Calculator</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-semibold text-black tracking-wider uppercase text-xs mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-black/60 font-normal">
                <li><a href="#services" className="hover:text-black transition-colors">Solar Consultation</a></li>
                <li><a href="#process" className="hover:text-black transition-colors">Site Survey & Design</a></li>
                <li><a href="#why-us" className="hover:text-black transition-colors">Equipment Supply</a></li>
                <li><a href="#process" className="hover:text-black transition-colors">Turnkey Installation</a></li>
                <li><a href="#maintenance" className="hover:text-black transition-colors">Net Metering Assistance</a></li>
                <li><a href="#maintenance" className="hover:text-black transition-colors">Maintenance & AMC</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-semibold text-black tracking-wider uppercase text-xs mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-black/60 font-normal">
                <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#process" className="hover:text-black transition-colors">End-to-End Workflow</a></li>
                <li><a href="#why-us" className="hover:text-black transition-colors">Why Pandey Urja</a></li>
                <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-semibold text-black tracking-wider uppercase text-xs mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-black/60 font-normal">
                <li><a href="#why-us" className="hover:text-black transition-colors">Solar Subsidy Guide</a></li>
                <li><a href="#why-us" className="hover:text-black transition-colors">Net Metering Rules</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">Panel Care & AMC</a></li>
                <li><a href="#solutions" className="hover:text-black transition-colors">Solar Solutions Guide</a></li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-black tracking-wider uppercase text-xs mb-4">
                Contact & Support
              </h4>
              <ul className="space-y-3 text-black/60 font-normal text-xs">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-black/80 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-black/80 shrink-0" />
                  <span>your@pandeyurja.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-black/80 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Office No. 123, Vaibhav Laxmi Complex, near Sangam Chowkdi, Bhestan, Surat, Gujarat 395023
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/50 gap-4 font-normal">
            <p>© 2026 Pandey Urja. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#about" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#about" className="hover:text-black transition-colors">Terms & Conditions</a>
              <a href="#about" className="hover:text-black transition-colors">Warranty Policy</a>
              <a href="#about" className="hover:text-black transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE CONSULTATION INQUIRY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-xl bg-white text-black rounded-3xl p-6 sm:p-9 border border-black/15 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={onCloseModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div>
                <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider mb-2.5 inline-block">
                  DIRECT SOLAR CONSULTATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-2">
                  Connect With Our Team
                </h3>
                <p className="text-xs sm:text-sm text-black/70 mb-6 font-normal">
                  Choose your preferred option below to discuss your property requirements and solar installation.
                </p>

                {/* 3 Contact Options */}
                <div className="space-y-3.5">
                  {/* Option 1: WhatsApp */}
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Pandey%20Urja%20team,%20I%20would%20like%20to%20inquire%20about%20a%20rooftop%20solar%20installation%20for%20my%20property."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#f0fdf4] border border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                        <MessageSquare className="h-5 w-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-base font-semibold text-black tracking-tight">
                            Chat on WhatsApp
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 uppercase">
                            Instant
                          </span>
                        </div>
                        <p className="text-xs text-black/70 mt-0.5 font-normal">
                          Share roof photos & power bills for instant estimation
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-emerald-700 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Option 2: Phone Call */}
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#f0f9ff] border border-sky-300 hover:border-sky-500 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-sky-600 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                        <Phone className="h-5 w-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-base font-semibold text-black tracking-tight">
                            Call Us Directly
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-200 text-sky-900 uppercase">
                            Direct Line
                          </span>
                        </div>
                        <p className="text-xs text-black/70 mt-0.5 font-normal">
                          +91 98765 43210 · Mon–Sat (9:00 AM – 8:00 PM)
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-sky-700 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Option 3: Email */}
                  <a
                    href="mailto:your@pandeyurja.in?subject=Rooftop%20Solar%20Project%20Inquiry%20-%20Pandey%20Urja&body=Hello%20Pandey%20Urja%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20solar%20project%20for%20my%20property.%0A%0AProperty%20Type:%20%0AAverage%20Monthly%20Bill:%20%0ACity/State:%20%0A%0AThank%20you!"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#fafafa] border border-black/15 hover:border-black/40 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                        <Mail className="h-5 w-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-base font-semibold text-black tracking-tight">
                            Send an Email
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 uppercase">
                            Proposal
                          </span>
                        </div>
                        <p className="text-xs text-black/70 mt-0.5 font-normal">
                          your@pandeyurja.in · Share utility bills & property details
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-black shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Grounded reassurance */}
                <div className="mt-6 pt-5 border-t border-black/10 flex items-center justify-between text-xs text-black/60 font-normal">
                  <span>✓ Direct Consultation</span>
                  <span>✓ Clear Information</span>
                  <span>✓ Prompt Response</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
