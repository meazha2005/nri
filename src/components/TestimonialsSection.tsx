'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, Quote, MapPin, Globe } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-emerald-700" />
            <span>Global Diaspora Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Overseas Tamils Across 24+ Countries
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Read real stories of tech leaders, doctors, and professionals who purchased dream homes and plots in Tamil Nadu 
            completely remotely.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified NRI Purchaser</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>

                {/* Property Acquired Badge */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Acquired: {test.propertyName} ({test.cityInTN})</span>
                  </div>
                </div>

              </div>

              {/* User Bio Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600/30">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                    {test.tamilName && (
                      <div className="text-[11px] text-amber-700 font-medium">
                        {test.tamilName}
                      </div>
                    )}
                    <p className="text-xs text-slate-500">{test.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base">{test.countryFlag}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{test.country}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Diaspora Footprint Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Active Tamil Diaspora Client Communities
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-800">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇺🇸 Silicon Valley & Texas
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇦🇪 Dubai & Abu Dhabi
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇸🇬 Singapore & Johor
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇬🇧 London & Midlands
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇦🇺 Sydney & Melbourne
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇨🇦 Toronto & Vancouver
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇲🇾 Kuala Lumpur
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              🇩🇪 Frankfurt & Munich
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
