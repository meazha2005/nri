'use client';

import React from 'react';
import {
  TrendingUp,
  Building2,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Plane,
  Heart,
  Cpu,
  MapPin,
  Check,
} from 'lucide-react';
import { CORRIDOR_STATS } from '@/data/properties';

export default function WhyTamilNadu() {
  return (
    <section id="why-tamilnadu" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>High-Yield Homeland Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Tamil Nadu is India&apos;s #1 Choice for NRI Real Estate
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A potent combination of India&apos;s highest urbanisation, a booming \$300B+ industrial economy, 
            and deep ancestral heritage makes Tamil Nadu the safest, highest-appreciating wealth haven.
          </p>
        </div>

        {/* 4 Pillars of Tamil Nadu Advantage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">2nd Largest State Economy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Targeting a \$1 Trillion GDP by 2030. Massive foreign investments from Apple, Foxconn, Hyundai, 
              and Boeing driving consistent land value appreciation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">High Tech & EV Corridors</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From Chennai&apos;s OMR IT Corridor & FinTech City to Hosur&apos;s EV hub and Coimbatore&apos;s Defense Corridor, 
              employment centers guarantee strong rental demand.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Digital Land Governance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tamil Nadu leads India in digitized land records (tnreginet & eservices) with computerized Patta, Chitta, 
              and online Encumbrance verification preventing title disputes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <Heart className="w-6 h-6 text-amber-500 group-hover:text-amber-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Roots & Legacy Pride</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nothing compares to owning tangible land in your native soil. A serene retreat for family vacations, 
              peaceful retirement, and generational inheritance.
            </p>
          </div>

        </div>

        {/* Growth Corridor Performance Matrix */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Regional Analytics</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Tamil Nadu Growth Corridors (2020 - 2026 Projections)</h3>
            </div>
            <div className="text-xs text-emerald-200 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-700/50">
              Source: TN Planning Commission & Market Transaction Data
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {CORRIDOR_STATS.map((item, idx) => (
              <div key={idx} className="p-6 space-y-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>{item.city}</span>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">{item.growth5Yr}</span>
                  <span className="text-xs text-emerald-600 font-bold">5-Yr Growth</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Avg Rental Yield:</span>
                    <strong className="text-slate-900 font-semibold">{item.avgRentalYield}</strong>
                  </div>
                  <div className="text-slate-500 pt-1">
                    <span className="font-medium text-slate-700">Key Catalysts:</span> {item.topDrivers}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-medium text-[11px] border border-amber-200">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
