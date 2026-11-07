'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';

export default function StickyFloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      
      {/* Scroll to Top Pill */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2.5 rounded-full bg-white text-slate-700 hover:text-emerald-800 border border-slate-200 shadow-md transition-all hover:scale-110"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Consultation Pill */}
      <a
        href="#consultation"
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 text-amber-300 hover:bg-slate-800 text-xs font-bold shadow-lg border border-slate-700 transition-all hover:scale-105"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book NRI Video Slot</span>
      </a>

      {/* Floating WhatsApp Action Pill */}
      <a
        href="https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20I%20am%20an%20overseas%20buyer%20interested%20in%20Tamil%20Nadu%20properties."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with NRI Desk"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-700/30 hover:shadow-emerald-700/50 hover:scale-105 transition-all border border-emerald-500"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp NRI Desk</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>

    </div>
  );
}
