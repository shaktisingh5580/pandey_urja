import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export default function SolarAssessmentEstimator({ onOpenConsultation }) {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [propertyType, setPropertyType] = useState('residential');

  const ratePerUnit =
    propertyType === 'residential'
      ? 7.5
      : propertyType === 'commercial'
      ? 10.5
      : 8.5;
  const monthlyUnits = monthlyBill / ratePerUnit;
  const recommendedKw = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
  const roofAreaSqFt = Math.round(recommendedKw * 80);
  const annualSavings = Math.round(recommendedKw * 1450 * ratePerUnit);
  const annualUnitsGenerated = Math.round(recommendedKw * 1450);

  return (
    <section
      id="assessment"
      className="relative bg-[#f8f9fa] text-black py-20 px-6 sm:px-10 lg:px-16 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Interactive Solar Cost & Sizing Estimator Card (White Theme) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-black" />
                <span className="text-xs uppercase tracking-widest font-semibold text-black/60">
                  INSTANT SOLAR ESTIMATOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-3">
                Calculate Your Solar Potential
              </h3>
              <p className="text-sm text-black/70 mb-6 leading-relaxed font-normal">
                Adjust your monthly electricity expenditure to view estimated
                system sizing, roof space requirements, and annual cost savings.
              </p>

              {/* Property Category */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-black/80 uppercase tracking-wider block mb-2">
                  Property Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'residential', label: 'Home' },
                    { id: 'commercial', label: 'Commercial' },
                    { id: 'industrial', label: 'Industrial' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPropertyType(item.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        propertyType === item.id
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-[#f3f4f6] text-black/70 border-transparent hover:bg-neutral-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-black/80 uppercase tracking-wider">
                    Average Monthly Electricity Bill
                  </label>
                  <span className="font-sans text-lg font-bold text-black">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="150000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[11px] text-black/40 mt-1.5 font-medium">
                  <span>₹1,500</span>
                  <span>₹50,000</span>
                  <span>₹1,50,000+</span>
                </div>
              </div>

              {/* Quick Specs Pill */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-black/50 block font-medium">
                    Estimated Tariff Base
                  </span>
                  <span className="text-xs font-semibold text-black">
                    ₹{ratePerUnit.toFixed(1)} / kWh
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-black/50 block font-medium">
                    Monthly Consumption
                  </span>
                  <span className="text-xs font-semibold text-black">
                    ~{Math.round(monthlyUnits)} Units / mo
                  </span>
                </div>
              </div>
            </div>

            {/* Output Calculation Breakdown */}
            <div className="lg:col-span-6 bg-[#fafafa] rounded-2xl p-6 sm:p-8 border border-black/10">
              <div className="text-xs uppercase tracking-wider font-semibold text-black/60 mb-4">
                Recommended System Architecture
              </div>

              {/* Primary Recommended Size */}
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-black/10">
                <span className="font-sans text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                  {recommendedKw} kW
                </span>
                <span className="text-sm font-medium text-black/60">
                  Rooftop Solar Plant
                </span>
              </div>

              {/* Metric Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-black/10 shadow-xs">
                  <span className="text-[11px] text-black/50 block font-medium mb-1">
                    Est. Annual Generation
                  </span>
                  <span className="font-sans text-lg font-bold text-black">
                    {annualUnitsGenerated.toLocaleString('en-IN')} Units
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/10 shadow-xs">
                  <span className="text-[11px] text-black/50 block font-medium mb-1">
                    Est. Annual Savings
                  </span>
                  <span className="font-sans text-lg font-bold text-black text-emerald-700">
                    ₹{annualSavings.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/10 shadow-xs">
                  <span className="text-[11px] text-black/50 block font-medium mb-1">
                    Shadow-Free Roof Needed
                  </span>
                  <span className="font-sans text-lg font-bold text-black">
                    ~{roofAreaSqFt} sq. ft.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/10 shadow-xs">
                  <span className="text-[11px] text-black/50 block font-medium mb-1">
                    25-Year Life Savings
                  </span>
                  <span className="font-sans text-lg font-bold text-black">
                    ₹{(annualSavings * 25).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <button
                onClick={onOpenConsultation}
                className="w-full bg-black hover:bg-black/85 text-white py-3.5 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                <span>Get Detailed Proposal for {recommendedKw} kW</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
