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
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

export default function NRIServicesSuite() {
  const services = [
    {
      icon: <Scale className="w-6 h-6 text-emerald-700" />,
      title: "12-Point High Court Legal Title Audit",
      tamilTitle: "சட்டப்பூர்வ உரிமை சரிபார்ப்பு",
      description:
        "Every property undergoes a comprehensive 30-year Encumbrance Certificate (EC) scrutiny, parent document chain audit, and Revenue Patta validation by practicing Madras High Court senior advocates.",
      deliverable: "Written High Court Advocate Title Opinion Report"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-amber-600" />,
      title: "Remote Power of Attorney (PoA) Registration",
      tamilTitle: "தொலைதூர பவர் ஆஃப் அட்டார்னி பதிவு",
      description:
        "Buy and register property in your name without traveling to India. We draft the customized Special PoA, guide your local Indian Embassy/Consulate attestation, handle local District Registrar adjudication, and complete registration.",
      deliverable: "Legally Certified Registered Sale Deed in Your Name"
    },
    {
      icon: <Building className="w-6 h-6 text-teal-700" />,
      title: "FEMA, RBI & Tax Repatriation Advisory",
      tamilTitle: "வரி மற்றும் வெளிநாட்டு பணப்பரிமாற்றம்",
      description:
        "Our in-house Chartered Accountants assist with NRE/NRO funds transfer, Lower TDS Certificate (Form 13 under Section 195), and seamless repatriation of rental income or future sale proceeds under Form 15CA/15CB.",
      deliverable: "Full CA Certification & Tax Clearance Roadmap"
    },
    {
      icon: <Video className="w-6 h-6 text-emerald-700" />,
      title: "Live 4K Drone & 360° Virtual Walkthrough",
      tamilTitle: "4K ட்ரோன் நேரடி தணிக்கை",
      description:
        "Inspect the exact boundary, elevation, approach road, and groundwater aquifer in real time. Your dedicated Relationship Manager conducts a live video walkthrough scheduled in your local time zone.",
      deliverable: "Raw 4K Drone Video Footage & Geo-Tag Coordinates"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Anti-Encroachment Fencing & GPS Geo-Tagging",
      tamilTitle: "ஆக்கிரமிப்பு தடுப்பு வேலி மற்றும் பாதுகாப்பு",
      description:
        "Protect your vacant land from encroachment. We install reinforced boundary stones, heavy-duty chain-link fencing with an iron gate, bilingual ownership signboards, and provide quarterly video surveillance reports.",
      deliverable: "Quarterly GPS Surveillance Photo & Video Logs"
    },
    {
      icon: <Key className="w-6 h-6 text-teal-700" />,
      title: "End-to-End Tenancy & Asset Management",
      tamilTitle: "முழுமையான பராமரிப்பு மற்றும் வாடகை நிர்வாகம்",
      description:
        "For villas and apartments: tenant background vetting, registered rental agreements, direct rent collection credited to your NRO account, corporation property tax payments, and routine repair management.",
      deliverable: "Monthly Rent Statement & Property Maintenance Portal"
    }
  ];

  return (
    <section id="nri-services" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>360° Remote Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Specifically for Overseas Tamils
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From your first virtual tour to registered title deeds and post-possession property care, 
            we remove every pain point of remote property ownership.
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

        {/* Highlight Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Need assistance with an existing ancestral property or family dispute in Tamil Nadu?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We also handle legacy title searches, partition deed drafting, Patta transfer, and revenue legal services for NRIs.
            </p>
          </div>

          <a
            href="https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20I%20need%20legal%20advisory%20for%20my%20existing%20ancestral%20property%20in%20Tamil%20Nadu."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors shrink-0"
          >
            <span>Consult Legal Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
