'use client';

import React from 'react';
import {
  FileCheck,
  Video,
  ShieldCheck,
  Scale,
  Building,
  Key,
  Compass,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  DollarSign,
  Landmark,
} from 'lucide-react';

export default function NRIServicesSuite() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-700" />,
      title: "NRI Land & Property Selling Desk",
      tamilTitle: "சொத்து மறுவிற்பனை & வெளிநாட்டு பரிமாற்றம்",
      description:
        "Sell your land, plots, or villas in India without traveling down. We handle scientific market valuation, connect with vetted diaspora buyers, execute Embassy Special PoA, secure Lower TDS (Form 13), and wire proceeds abroad.",
      deliverable: "Sale Proceeds Credited Abroad + Form 15CA/CB Tax Clearance"
    },
    {
      icon: <Scale className="w-6 h-6 text-amber-600" />,
      title: "12-Point High Court Legal Title Audit",
      tamilTitle: "சட்டப்பூர்வ உரிமை சரிபார்ப்பு",
      description:
        "Every property undergoes a comprehensive 30-year Encumbrance Certificate (EC) scrutiny, parent document chain audit, and Revenue Patta validation by practicing Madras High Court senior advocates.",
      deliverable: "Written High Court Advocate Title Opinion Report"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-teal-700" />,
      title: "Remote Power of Attorney (PoA) Buying & Selling",
      tamilTitle: "தொலைதூர பவர் ஆஃப் அட்டார்னி பதிவு",
      description:
        "Buy or sell property without boarding a flight. We draft tailored Special PoAs, guide your local Indian Embassy / Consulate attestation, handle District Registrar adjudication, and complete Sub-Registrar execution.",
      deliverable: "Legally Certified Registered Deed Executed Remotely"
    },
    {
      icon: <Landmark className="w-6 h-6 text-emerald-700" />,
      title: "FEMA, RBI & Lower TDS (Form 13) Repatriation",
      tamilTitle: "வரி சேமிப்பு மற்றும் வெளிநாட்டு பணப்பரிமாற்றம்",
      description:
        "Our in-house Chartered Accountants obtain Lower/Nil TDS Certificates under Section 195 (saving up to 20% on sale cuts), manage NRE/NRO funds, and guarantee seamless repatriation under Form 15CA & 15CB.",
      deliverable: "Full CA Certification & Legal Foreign Bank Wire Transfer"
    },
    {
      icon: <Video className="w-6 h-6 text-amber-600" />,
      title: "Live 4K Drone & 360° Virtual Walkthrough",
      tamilTitle: "4K ட்ரோன் நேரடி தணிக்கை",
      description:
        "Inspect the exact boundary, elevation, approach road, and groundwater aquifer in real time. Your dedicated Relationship Manager conducts a live video walkthrough scheduled in your local time zone.",
      deliverable: "Raw 4K Drone Video Footage & Geo-Tag Coordinates"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-700" />,
      title: "Anti-Encroachment Fencing & GPS Geo-Tagging",
      tamilTitle: "ஆக்கிரமிப்பு தடுப்பு வேலி மற்றும் பாதுகாப்பு",
      description:
        "Protect your vacant land from encroachment. We install reinforced boundary stones, heavy-duty chain-link fencing with an iron gate, bilingual ownership signboards, and provide quarterly video surveillance reports.",
      deliverable: "Quarterly GPS Surveillance Photo & Video Logs"
    }
  ];

  return (
    <section id="nri-services" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>360° Remote Ecosystem (Buy & Sell)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Specifically for Overseas Tamils
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From remote property acquisition and legal title vetting to selling your existing land and repatriating your wealth abroad, 
            we provide complete peace of mind across the diaspora.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <div className="text-xs font-bold text-amber-600 mb-1">
                  {service.tamilTitle}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block text-[11px]">Key Deliverable:</span>
                    <span className="text-slate-900 font-medium">{service.deliverable}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selling Facility Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-emerald-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-900/50">
          <div className="space-y-1 text-center md:text-left">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 inline-block mb-1">
              NRI Land Liquidation & Resale
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Own land or ancestral property in Tamil Nadu that you want to sell?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We provide accurate market valuation, remote Consulate PoA execution, Lower TDS (Form 13) tax minimization, and 100% legal repatriation wired to your foreign bank account.
            </p>
          </div>

          <a
            href="#sell-property"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 shadow-lg"
          >
            <span>Explore Selling Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
