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
  Award,
  CheckCircle2,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-100">
      {/* Subtle Background Glows matching Logo Emerald & Gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-50/60 via-amber-50/30 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Compelling Pitch & Trust Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elite Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm text-emerald-900 text-xs sm:text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-amber-800 font-extrabold italic">&ldquo;Honest is key for success&rdquo;</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-800 font-bold">சொந்த மண்ணில் சொந்த வீடு</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-800 font-bold">Sri Thirumagal Builders Group</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700">Trusted by 1,800+ Families</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Buy & Sell Prime Land in <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-amber-600 bg-clip-text text-transparent">
                  Tamil Nadu
                </span>
                <span className="text-slate-900 block text-2xl sm:text-4xl lg:text-5xl mt-2 font-extrabold">
                  Without Leaving Your Country.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Whether you want to <strong className="text-slate-900 font-semibold">buy verified plots and luxury villas</strong> or <strong className="text-emerald-800 font-semibold">sell existing land & ancestral property</strong> across 
                <strong className="text-slate-900 font-semibold"> Chennai, Coimbatore, Madurai & Hosur</strong>. 
                Experience 100% remote Power of Attorney execution, High Court legal vetting, fair market valuation, and seamless FEMA repatriation.
              </p>
            </div>

            {/* NRI Exclusive Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">30-Yr Clear Title</div>
                  <div className="text-slate-500">Nil Encumbrance (EC)</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <FileCheck2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Remote PoA</div>
                  <div className="text-slate-500">Embassy Attested</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <Video className="w-5 h-5 text-teal-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Live 4K Drone</div>
                  <div className="text-slate-500">Walkthrough on Zoom</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#nri-services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-700/25 transition-all hover:scale-[1.02] border border-emerald-600"
              >
                <span>Explore NRI Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>View Verified Properties</span>
              </a>

              <a
                href="#sell-property"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm sm:text-base font-bold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-300 rounded-xl transition-all"
              >
                <span>Want to Sell Land?</span>
              </a>
            </div>

            {/* Social Proof Flags */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Dedicated NRI Desks for:</span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇺🇸 USA</span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇦🇪 UAE</span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇸🇬 Singapore</span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇬🇧 UK</span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇦🇺 Australia</span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                <span>🇲🇾 Malaysia</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-emerald-600 via-amber-400 to-emerald-700 shadow-2xl shadow-emerald-950/15">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-900">
                  <Image
                    src="/hero-villa.jpg"
                    alt="Luxury Coastal Villa in Chennai Tamil Nadu"
                    width={720}
                    height={520}
                    className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      RERA & CMDA Approved
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                      Ready to Register
                    </span>
                  </div>

                  {/* Bottom Information Card on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>ECR Coastal Belt, Chennai</span>
                        </div>
                        <h3 className="text-base font-bold text-white mt-0.5">The Bayview Sanctuary</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Starting at</div>
                        <div className="text-lg font-black text-amber-400">₹3.85 Cr</div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                      <span>Live Drone Walkthrough on Request</span>
                      <span className="text-emerald-400 font-semibold">Remote PoA Included</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 animate-pulse-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-black">
                  ₹
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Assets Under Management</div>
                  <div className="text-base font-black text-slate-900">₹540+ Crores</div>
                </div>
              </div>

              {/* Floating Stat Badge 2: Bottom Right */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Avg. TN Capital Growth</div>
                  <div className="text-base font-black text-emerald-700">14.8% CAGR</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">1,850+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">NRI Families Settled</div>
            <div className="text-xs text-slate-500">Across 24+ countries</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">Clear Title Guarantee</div>
            <div className="text-xs text-slate-500">High Court legal audit</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-600">0 Days</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">Physical Travel Needed</div>
            <div className="text-xs text-slate-500">Remote Consulate PoA</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">₹0 Hidden Fees</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-800">Transparent Pricing</div>
            <div className="text-xs text-slate-500">Direct developer rates</div>
          </div>
        </div>

      </div>
    </section>
  );
}
