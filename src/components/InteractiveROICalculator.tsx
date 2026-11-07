'use client';

import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  Building,
  CheckCircle,
  Download,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

type Currency = 'INR' | 'USD' | 'AED' | 'SGD' | 'GBP';

const RATES: Record<Currency, { symbol: string; rate: number }> = {
  INR: { symbol: '₹', rate: 1 },
  USD: { symbol: '$', rate: 86.8 },
  AED: { symbol: 'AED ', rate: 23.6 },
  SGD: { symbol: 'S$', rate: 65.2 },
  GBP: { symbol: '£', rate: 110.4 },
};

export default function InteractiveROICalculator() {
  const [investmentINR, setInvestmentINR] = useState<number>(7500000); // 75 Lakhs default
  const [propertyType, setPropertyType] = useState<'plot' | 'villa' | 'apartment'>('plot');
  const [cityCorridor, setCityCorridor] = useState<'hosur' | 'chennai' | 'coimbatore' | 'madurai'>('hosur');
  const [timeframeYears, setTimeframeYears] = useState<number>(5);
  const [currency, setCurrency] = useState<Currency>('USD');

  // Rates based on historical Tamil Nadu corridor performance
  const appreciationRates = {
    hosur: { plot: 0.18, villa: 0.14, apartment: 0.11 },
    chennai: { plot: 0.14, villa: 0.12, apartment: 0.10 },
    coimbatore: { plot: 0.15, villa: 0.13, apartment: 0.09 },
    madurai: { plot: 0.13, villa: 0.10, apartment: 0.08 },
  };

  const rentalYieldRates = {
    plot: 0,
    villa: 0.055, // 5.5%
    apartment: 0.068, // 6.8%
  };

  const annualAppreciation = appreciationRates[cityCorridor][propertyType];
  const annualRentalYield = rentalYieldRates[propertyType];

  // Compound Capital Appreciation
  const futureCapitalValue = Math.round(
    investmentINR * Math.pow(1 + annualAppreciation, timeframeYears)
  );

  const capitalGain = futureCapitalValue - investmentINR;

  // Approximate cumulative rental income (assuming 5% annual rent escalation)
  let totalRentalIncome = 0;
  if (annualRentalYield > 0) {
    let currentRentYear1 = investmentINR * annualRentalYield;
    for (let i = 0; i < timeframeYears; i++) {
      totalRentalIncome += currentRentYear1;
      currentRentYear1 *= 1.05; // 5% rent hike per year
    }
    totalRentalIncome = Math.round(totalRentalIncome);
  }

  const totalValue = futureCapitalValue + totalRentalIncome;
  const netProfit = totalValue - investmentINR;
  const totalReturnPercent = Math.round((netProfit / investmentINR) * 100);

  const formatPrice = (inrVal: number) => {
    if (currency === 'INR') {
      if (inrVal >= 10000000) {
        return `₹${(inrVal / 10000000).toFixed(2)} Cr`;
      }
      return `₹${(inrVal / 100000).toFixed(2)} L`;
    }
    const { symbol, rate } = RATES[currency];
    const converted = Math.round(inrVal / rate);
    return `${symbol}${converted.toLocaleString('en-US')}`;
  };

  return (
    <section id="roi-calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Financial Forecast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            NRI Wealth & Rental Yield Calculator
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Model projected capital appreciation and cash flows across Tamil Nadu’s premier growth corridors.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-slate-50/50">
            
            {/* Currency Choice */}
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Display Currency
              </label>
              <div className="flex gap-1">
                {(Object.keys(RATES) as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                      currency === cur
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Amount Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  Initial Investment Budget
                </label>
                <div className="text-lg font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                  {formatPrice(investmentINR)}
                  <span className="text-xs text-slate-500 font-normal ml-2">
                    (₹{(investmentINR / 100000).toFixed(0)} Lakhs)
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={2500000}
                max={50000000}
                step={500000}
                value={investmentINR}
                onChange={(e) => setInvestmentINR(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>₹25 Lakhs (~$29K)</span>
                <span>₹2.5 Crores (~$288K)</span>
                <span>₹5 Crores (~$576K)</span>
              </div>
            </div>

            {/* Target Region */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 block">
                Select Growth Corridor
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'hosur', name: 'Hosur Tech', tag: '18% p.a.' },
                  { id: 'coimbatore', name: 'Coimbatore', tag: '15% p.a.' },
                  { id: 'chennai', name: 'Chennai OMR/ECR', tag: '14% p.a.' },
                  { id: 'madurai', name: 'Madurai Ring Rd', tag: '13% p.a.' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCityCorridor(c.id as any)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      cityCorridor === c.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>{c.name}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        cityCorridor === c.id ? 'text-amber-300' : 'text-emerald-700'
                      }`}
                    >
                      Exp: {c.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Asset Class */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 block">
                Property Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'plot', name: 'Gated Villa Plot', desc: 'Max Capital Gain' },
                  { id: 'villa', name: 'Luxury Villa', desc: 'Lifestyle + Rent' },
                  { id: 'apartment', name: 'High-Yield Flat', desc: 'High Rental Yield' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as any)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      propertyType === type.id
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>{type.name}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        propertyType === type.id ? 'text-amber-200' : 'text-slate-500'
                      }`}
                    >
                      {type.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Holding Horizon */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 block">
                Holding Horizon: {timeframeYears} Years
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((years) => (
                  <button
                    key={years}
                    onClick={() => setTimeframeYears(years)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      timeframeYears === years
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {years} Years
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Projection Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {timeframeYears}-Year Wealth Projection
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  {formatPrice(totalValue)}
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>+{totalReturnPercent}% Total Projected Wealth Gain</span>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Capital Value at Exit:</span>
                  <span className="font-bold text-white text-sm">
                    {formatPrice(futureCapitalValue)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Total Capital Gains:</span>
                  <span className="font-bold text-emerald-400 text-sm">
                    +{formatPrice(capitalGain)}
                  </span>
                </div>

                {totalRentalIncome > 0 && (
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Cumulative Rental Yield:</span>
                    <span className="font-bold text-amber-300 text-sm">
                      +{formatPrice(totalRentalIncome)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center py-1 text-slate-400">
                  <span>Compounded Annual Growth:</span>
                  <span className="font-semibold text-white">
                    {(annualAppreciation * 100).toFixed(1)}% p.a.
                  </span>
                </div>

                {annualRentalYield > 0 && (
                  <div className="flex justify-between items-center py-1 text-slate-400">
                    <span>Gross Annual Rental Yield:</span>
                    <span className="font-semibold text-white">
                      {(annualRentalYield * 100).toFixed(1)}% p.a.
                    </span>
                  </div>
                )}

              </div>

              {/* Tax & Repatriation Note */}
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-300">
                <strong className="text-amber-400 block mb-0.5">FEMA & Tax Clarity:</strong>
                Sale proceeds and rental yields are 100% repatriable under RBI regulations (Form 15CA & 15CB) with our in-house CA support.
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-2.5">
              <a
                href={`https://wa.me/919884495395?text=Hello%20TamilNRIProperty,%20I%20calculated%20an%20investment%20of%20₹${(
                  investmentINR / 100000
                ).toFixed(0)}%20Lakhs%20for%20${cityCorridor}%20(${propertyType}).%20Please%20send%20matching%20properties.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Matching Properties on WhatsApp</span>
              </a>

              <a
                href="#consultation"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <span>Book 1-on-1 Consultation with Financial Advisor</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
