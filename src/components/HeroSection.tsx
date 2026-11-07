'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Video,
  FileCheck2,
  Globe2,
  ArrowRight,
  TrendingUp,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">

      {/* ── NRI Landmark Background Collage ── */}
      {/* Statue of Liberty — left */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
        style={{
          backgroundColor: '#dbeafe',
          opacity: 0,
        }}
      />
      {/* London Tower Bridge — centre */}
      <div
        className="absolute inset-y-0 left-1/3 w-1/3 pointer-events-none"
        style={{
          backgroundColor: '#e2e8f0',
          opacity: 0,
        }}
      />
      {/* Burj Khalifa Dubai — right */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
        style={{
          backgroundColor: '#e2e8f0',
          opacity: 0,
        }}
      />

      {/* Softer dimmer overlay to keep the global-city backdrop visible but still readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/100 pointer-events-none" />
      {/* Subtle emerald glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-emerald-700/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                <span className="block whitespace-nowrap">
                  Your Dream Land in{' '}
                  <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                    Tamil Nadu.
                  </span>
                </span>
                <span className="mt-3 block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-700 border-l-4 border-emerald-500 pl-4">
                  Buy &amp; Sell — Without Leaving Your Country.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                <strong className="text-slate-900 font-semibold">Buy verified plots &amp; luxury villas</strong> or{' '}
                <strong className="text-emerald-600 font-semibold">sell ancestral land &amp; property</strong> — 100% remotely,
                with High Court legal vetting, Remote Power of Attorney, fair market valuation, and seamless FEMA repatriation.
              </p>
              {/* City Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Chennai', 'Mahabalipuram', 'Coimbatore', 'Madurai', 'Hosur', 'Trichy'].map((city) => (
                  <span key={city} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-xs font-semibold backdrop-blur-sm">
                    <MapPin className="w-3 h-3" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* NRI Exclusive Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">30-Yr Clear Title</div>
                  <div className="text-slate-600">Nil Encumbrance (EC)</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-sm">
                <FileCheck2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Remote PoA</div>
                  <div className="text-slate-600">Embassy Attested</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-sm">
                <Video className="w-5 h-5 text-teal-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Live 4K Drone</div>
                  <div className="text-slate-600">Walkthrough on Zoom</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#nri-services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02] border border-emerald-500"
              >
                <span>Explore NRI Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-200 rounded-xl transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>View Verified Properties</span>
              </a>

              <a
                href="#sell-property"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-sm"
              >
                <span>Want to Sell Land?</span>
              </a>
            </div>

            {/* Social Proof Flags */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Dedicated NRI Desks for:</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇺🇸 USA</span></span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇦🇪 UAE</span></span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇸🇬 Singapore</span></span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇬🇧 UK</span></span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇦🇺 Australia</span></span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700"><span>🇲🇾 Malaysia</span></span>
            </div>

          </div>

          {/* Right Column: Land Image Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-3">

                {/* Card 1 — Chennai */}
                <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 group shadow-lg ring-1 ring-white/10">
                  <Image
                    src="/hero-chennai.jpg"
                    alt="Plotted land layout Chennai Tamil Nadu"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-emerald-300 text-[10px] font-semibold">
                      <MapPin className="w-3 h-3" /> ECR / OMR Belt
                    </div>
                    <div className="text-white text-xs font-bold leading-tight">Chennai</div>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">CMDA ✓</span>
                </div>

                {/* Card 2 — Mahabalipuram */}
                <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 group shadow-lg ring-1 ring-white/10">
                  <Image
                    src="/hero-mahabalipuram.jpg"
                    alt="Mahabalipuram Shore Temple Tourist Zone"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-amber-300 text-[10px] font-semibold">
                      <MapPin className="w-3 h-3" /> Tourist Zone
                    </div>
                    <div className="text-white text-xs font-bold leading-tight">Mahabalipuram</div>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">DTCP ✓</span>
                </div>

                {/* Card 3 — Madurai */}
                <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48 group shadow-lg ring-1 ring-white/10">
                  <Image
                    src="/hero-madurai.jpg"
                    alt="Plotted land layout Madurai Tamil Nadu"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-amber-300 text-[10px] font-semibold">
                      <MapPin className="w-3 h-3" /> Cultural Hub
                    </div>
                    <div className="text-white text-xs font-bold leading-tight">Madurai</div>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">DTCP ✓</span>
                </div>

                {/* Card 4 — Coimbatore */}
                <div className="relative rounded-2xl overflow-hidden h-40 sm:h-48 group shadow-lg ring-1 ring-white/10">
                  <Image
                    src="/hero-coimbatore.jpg"
                    alt="Plotted land layout Coimbatore Tamil Nadu"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 text-emerald-300 text-[10px] font-semibold">
                      <MapPin className="w-3 h-3" /> Smart City Zone
                    </div>
                    <div className="text-white text-xs font-bold leading-tight">Coimbatore</div>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">DTCP ✓</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">1,850+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">NRI Families Settled</div>
            <div className="text-xs text-slate-500">Across 24+ countries</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">Clear Title Guarantee</div>
            <div className="text-xs text-slate-500">High Court legal audit</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-600">0 Days</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">Physical Travel Needed</div>
            <div className="text-xs text-slate-500">Remote Consulate PoA</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">₹0 Hidden Fees</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">Transparent Pricing</div>
            <div className="text-xs text-slate-500">Direct developer rates</div>
          </div>
        </div>

      </div>
    </section>
  );
}
