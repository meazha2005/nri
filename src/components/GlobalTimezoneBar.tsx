'use client';

import React, { useState, useEffect } from 'react';
import { Clock, PhoneCall, ShieldCheck, Building2 } from 'lucide-react';

interface CityTime {
  city: string;
  country: string;
  flag: string;
  timezone: string;
  timeStr: string;
}

export default function GlobalTimezoneBar() {
  const [times, setTimes] = useState<CityTime[]>([
    { city: 'Chennai', country: 'India', flag: '🇮🇳', timezone: 'Asia/Kolkata', timeStr: '--:--' },
    { city: 'Dubai', country: 'UAE', flag: '🇦🇪', timezone: 'Asia/Dubai', timeStr: '--:--' },
    { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', timezone: 'Asia/Singapore', timeStr: '--:--' },
    { city: 'London', country: 'UK', flag: '🇬🇧', timezone: 'Europe/London', timeStr: '--:--' },
    { city: 'New York', country: 'USA', flag: '🇺🇸', timezone: 'America/New_York', timeStr: '--:--' },
    { city: 'San Jose', country: 'USA', flag: '🇺🇸', timezone: 'America/Los_Angeles', timeStr: '--:--' },
    { city: 'Sydney', country: 'Australia', flag: '🇦🇺', timezone: 'Australia/Sydney', timeStr: '--:--' },
  ]);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes((prev) =>
        prev.map((item) => {
          try {
            const formatter = new Intl.DateTimeFormat('en-US', {
              timeZone: item.timezone,
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            });
            return { ...item, timeStr: formatter.format(now) };
          } catch {
            return item;
          }
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-emerald-900/40 relative z-50">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Global Hubs Time */}
        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto scrollbar-none py-0.5 shrink-0">
          <div className="flex items-center gap-1.5 font-bold text-emerald-400 whitespace-nowrap bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 shadow-2xs">
            <Clock className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>NRI Global Desk:</span>
          </div>

          <div className="flex items-center gap-3.5 text-slate-300 text-[11px] whitespace-nowrap">
            {times.slice(0, 5).map((item) => (
              <span key={item.city} className="flex items-center gap-1">
                <span>{item.flag}</span>
                <span className="text-slate-400">{item.city}:</span>
                <span className="font-mono text-amber-300 font-semibold">{item.timeStr}</span>
              </span>
            ))}
            {/* Extended hubs on 2XL wide screens */}
            {times.slice(5).map((item) => (
              <span key={item.city} className="hidden 2xl:flex items-center gap-1">
                <span>{item.flag}</span>
                <span className="text-slate-400">{item.city}:</span>
                <span className="font-mono text-amber-300 font-semibold">{item.timeStr}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: Sri Thirumagal Builders Group & Approvals & WhatsApp */}
        <div className="flex items-center gap-3 text-[11px] shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 text-amber-300 font-semibold">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Sri Thirumagal Builders Group</span>
          </div>
          <span className="hidden xl:inline text-slate-600">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>100% CMDA & DTCP • RERA Registered</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <a
            href="https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20I%20am%20an%20NRI%20interested%20in%20property%20investment%20in%20Tamil%20Nadu."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span>WhatsApp NRI Desk: +91 98400 12345</span>
          </a>
        </div>

      </div>
    </div>
  );
}
