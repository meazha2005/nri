'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Calendar, MessageCircle, ChevronRight, ShieldCheck, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'NRI Services', href: '#nri-services' },
    { name: 'Properties', href: '#properties' },
    { name: 'Sell Land', href: '#sell-property' },
    { name: 'Why Tamil Nadu', href: '#why-tamilnadu' },
    { name: 'How It Works', href: '#remote-process' },
    { name: 'Legal Audit', href: '#due-diligence' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-emerald-950/5 border-b border-slate-200 py-2 sm:py-2.5'
          : 'bg-white border-b border-slate-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-[66px] md:h-[66px] shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-800 shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-full p-0.5 overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TamilNRIProperty - Sri Thirumagal Builders Group"
                  width={66}
                  height={66}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col shrink-0">
              {/* Brand Title + NRI Desk tag */}
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors whitespace-nowrap">
                  Tamil<span className="text-emerald-700">NRIProperty</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 rounded border border-amber-300 whitespace-nowrap">
                  NRI Desk
                </span>
              </div>

              {/* Group Affiliation: Sri Thirumagal Builders Group */}
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 tracking-wide uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  A Unit of Sri Thirumagal Builders Group
                </span>
              </div>

              {/* Motto Tag + Cultural Tagline */}
              <div className="text-[11px] tracking-tight mt-0.5 whitespace-nowrap flex items-center gap-1.5">
                <span className="font-bold text-amber-700 italic">
                  &ldquo;Honest is key for success&rdquo;
                </span>
                <span className="text-slate-300">•</span>
                <span className="font-semibold text-emerald-800">
                  சொந்த மண்ணில் உங்கள் சொத்து
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-5 justify-center flex-1 px-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-[13px] font-bold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 px-2 xl:px-2.5 py-1.5 rounded-md transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href="https://wa.me/919884495395?text=Hello%20TamilNRIProperty,%20I%20would%20like%20to%20request%20a%20property%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#consultation"
              className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 shadow-sm hover:shadow-md rounded-lg border border-emerald-600 transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          {/* Mobile Brand Affiliation Banner */}
          <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block w-fit">
                Sri Thirumagal Builders Group
              </span>
              <span className="text-[11px] font-bold text-amber-700 italic mt-1">
                &ldquo;Honest is key for success&rdquo;
              </span>
              <span className="text-xs font-semibold text-emerald-800">
                சொந்த மண்ணில் உங்கள் சொத்து
              </span>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 rounded border border-amber-300">
              NRI Desk
            </span>
          </div>

          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="https://wa.me/919884495395?text=Hello%20TamilNRIProperty,%20I%20would%20like%20to%20request%20a%20property%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-md shadow-emerald-800/20"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Free NRI Video Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
