'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe,
  ArrowUp,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 via-amber-400 to-emerald-700 shrink-0 shadow-md">
                <div className="w-full h-full bg-white rounded-full p-0.5 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="TamilNRIProperty - Sri Thirumagal Builders Group"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white block">
                  Tamil<span className="text-emerald-400">NRIProperty</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-300 block tracking-wide uppercase">
                  A Unit of Sri Thirumagal Builders Group
                </span>
                <div className="text-xs flex items-center gap-1.5 mt-0.5">
                  <span className="font-bold text-amber-400 italic">
                    &ldquo;Honest is key for success&rdquo;
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="font-semibold text-emerald-400">
                    சொந்த மண்ணில் உங்கள் சொத்து
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier trusted real estate bridge for Tamil diaspora across the US, UK, UAE, Singapore, 
              Malaysia, and Australia. Backed by Sri Thirumagal Builders Group with decades of proven 
              excellence, 100% verified CMDA/DTCP plots, luxury villas, remote PoA registration, and complete asset protection.
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Registered Under Tamil Nadu RERA Standards</span>
            </div>
          </div>

          {/* Key Portfolios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Prime Corridors
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Chennai ECR & OMR Corridors
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Coimbatore Foothills & Avinashi
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Hosur Silicon Aero-Belt
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Madurai Ring Road Corridors
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Trichy Srirangam Heritage Plots
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-emerald-400 transition-colors">
                  Nilgiris & Kodaikanal Retreats
                </a>
              </li>
            </ul>
          </div>

          {/* NRI Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              NRI Specializations
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#sell-property" className="text-amber-300 font-semibold hover:text-amber-200 transition-colors">
                  NRI Land Selling & Liquidation Desk
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  12-Point High Court Legal Title Audit
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  Remote Power of Attorney (PoA)
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  FEMA & 15CA/15CB Repatriation
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  Live 4K Drone Walkthroughs
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  Boundary Fencing & GPS Care
                </a>
              </li>
              <li>
                <a href="#nri-services" className="hover:text-emerald-400 transition-colors">
                  NRI Rental Tenancy Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Desk Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              NRI Global Desks
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Chennai HQ:</strong> Level 5, OMR IT Expressway & Anna Nagar, Chennai - 600040.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Global Desks:</strong> Dubai (Business Bay) • Singapore (Robinson Rd).
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+919884495395" className="hover:text-emerald-400 transition-colors">
                  +91 98844 95395 (NRI Line)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:desk@tamilnriproperty.com" className="hover:text-emerald-400 transition-colors">
                  desk@tamilnriproperty.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Compliance Notice */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Statutory Compliance Disclaimer:</strong> TamilNRIProperty is an overseas real estate advisory and facilitation firm. 
            All featured plots, villas, and apartments are promoted by verified, RERA-registered developers and approved by CMDA, DTCP, or local planning authorities. 
            Remote Power of Attorney registrations are executed in compliance with the Indian Registration Act, FEMA (Foreign Exchange Management Act), and RBI regulations. 
            All projected rental yields and capital growth estimates are indicative models based on historical corridor performance.
          </p>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2025 TamilNRIProperty — A Unit of Sri Thirumagal Builders Group. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the Global Tamil Community
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
