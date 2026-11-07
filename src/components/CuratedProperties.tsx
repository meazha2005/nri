'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  ShieldCheck,
  TrendingUp,
  Video,
  FileText,
  MessageCircle,
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PROPERTIES, Property } from '@/data/properties';

type Currency = 'INR' | 'USD' | 'AED' | 'SGD' | 'GBP' | 'AUD' | 'EUR';

const EXCHANGE_RATES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  INR: { symbol: '₹', rate: 1, label: 'Indian Rupee (INR)' },
  USD: { symbol: '$', rate: 86.8, label: 'US Dollar (USD)' },
  AED: { symbol: 'AED ', rate: 23.6, label: 'UAE Dirham (AED)' },
  SGD: { symbol: 'S$', rate: 65.2, label: 'Singapore Dollar (SGD)' },
  GBP: { symbol: '£', rate: 110.4, label: 'British Pound (GBP)' },
  AUD: { symbol: 'A$', rate: 56.5, label: 'Australian Dollar (AUD)' },
  EUR: { symbol: '€', rate: 93.8, label: 'Euro (EUR)' },
};

export default function CuratedProperties() {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');

  const cities = ['All', 'Chennai', 'Coimbatore', 'Hosur', 'Madurai & Trichy'];

  const filteredProperties =
    selectedCity === 'All'
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.city === selectedCity);

  const formatConvertedPrice = (priceINR: number) => {
    if (selectedCurrency === 'INR') {
      return priceINR >= 10000000
        ? `₹${(priceINR / 10000000).toFixed(2)} Cr`
        : `₹${(priceINR / 100000).toFixed(2)} Lakhs`;
    }

    const { symbol, rate } = EXCHANGE_RATES[selectedCurrency];
    const converted = Math.round(priceINR / rate);
    return `${symbol}${converted.toLocaleString('en-US')}`;
  };

  return (
    <section id="properties" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Handpicked & 100% Legal Clear</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Curated High-Growth Properties in Tamil Nadu
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Each property undergoes our proprietary 12-point High Court legal audit before listing. 
              Available for full remote purchase, Power of Attorney registration, and 360° management.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 shrink-0">
            <div className="text-xs font-semibold text-slate-500 mb-1.5 flex items-center justify-between">
              <span>View Prices In:</span>
              <span className="text-[11px] text-emerald-700 font-bold">Live NRI FX</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {(Object.keys(EXCHANGE_RATES) as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setSelectedCurrency(cur)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedCurrency === cur
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCity === city
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {city === 'All' ? '🌟 All Regions' : city}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-emerald-900 shadow-sm backdrop-blur-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {property.approvals[0]}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-amber-300 shadow-sm">
                    {property.type}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/90 text-slate-800 shadow-sm">
                    RERA: {property.reraId}
                  </span>
                </div>
              </div>

              {/* Property Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  {/* Location & Title */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {property.title}
                  </h3>
                  
                  {property.tamilTitle && (
                    <div className="text-xs text-amber-700 font-medium mt-0.5">
                      {property.tamilTitle}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 p-2 rounded-lg">
                    <span className="text-slate-500 block text-[11px]">Plot / Area</span>
                    <span className="font-bold text-slate-800">{property.size}</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg">
                    <span className="text-slate-500 block text-[11px]">Exp. 5-Yr Growth</span>
                    <span className="font-bold text-emerald-700">{property.appreciationRate}</span>
                  </div>
                </div>

                {/* Bullet Features */}
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {property.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Section */}
                <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Total Investment</span>
                    <div className="text-xl font-black text-slate-900">
                      {property.priceDisplay}
                    </div>
                    {selectedCurrency !== 'INR' && (
                      <div className="text-xs font-bold text-emerald-700">
                        ≈ {formatConvertedPrice(property.priceINR)}
                      </div>
                    )}
                  </div>

                  {property.rentalYield !== 'N/A' && (
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Rental Yield</span>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {property.rentalYield}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20I%20am%20interested%20in%20${encodeURIComponent(
                      property.title
                    )}%20(${property.location}).%20Please%20share%20the%20complete%20legal%20dossier%20and%20drone%20video.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <Video className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Drone Tour</span>
                  </a>

                  <a
                    href="#consultation"
                    className="flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                  >
                    <span>Enquire Details</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Land Scouting Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Bespoke Asset Scouting
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for land in your specific ancestral town or village?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We conduct dedicated title searches, revenue survey vetting, and site inspections across any taluk 
              in Tamil Nadu for NRI clients.
            </p>
          </div>

          <a
            href="#consultation"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 shadow-lg shadow-amber-400/20"
          >
            Request Custom Scouting
          </a>
        </div>

      </div>
    </section>
  );
}
