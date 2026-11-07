'use client';

import React from 'react';
import {
  FileCheck2,
  CheckCircle,
  ShieldCheck,
  Scale,
  Download,
  AlertCircle,
  FileText,
} from 'lucide-react';

export default function LegalChecklistSection() {
  const checklistItems = [
    {
      no: '01',
      title: '30-Year Encumbrance Certificate (EC)',
      tamil: '30 வருட வில்லங்க சான்றிதழ்',
      description: 'Scrutinized via Inspector General of Registration (tnreginet) to verify zero prior mortgages, court attachments, or liens.',
    },
    {
      no: '02',
      title: 'Revenue Patta, Chitta & Adangal',
      tamil: 'வருவாய் பட்டா, சிட்டா மற்றும் அடங்கல்',
      description: 'Verified with Tamil Nadu Revenue Department (eservices.tn.gov.in) confirming exclusive title of the current seller.',
    },
    {
      no: '03',
      title: 'Parent Document Link Chain (Mother Deeds)',
      tamil: 'மூலப்பத்திரங்களின் தொடர் சங்கிலி',
      description: 'Complete unbroken chain of ownership transfers for at least 30 to 35+ years to eliminate ancestral disputes.',
    },
    {
      no: '04',
      title: 'CMDA / DTCP / HNTDA Layout Approval',
      tamil: 'அரசு திட்ட அனுமதி (CMDA/DTCP)',
      description: 'Sanctioned layout plan confirming open space reservations (OSR), public gift deeds, and approved road widths.',
    },
    {
      no: '05',
      title: 'TNRERA Registration Verification',
      tamil: 'தமிழ்நாடு ரெரா பதிவு (TNRERA)',
      description: 'Verification on rera.tn.gov.in ensuring regulatory compliance and developer escrow account security.',
    },
    {
      no: '06',
      title: 'Family Tree & Legal Heir Clearance',
      tamil: 'வாரிசு சான்றிதழ் மற்றும் குடும்ப மரம்',
      description: 'Thorough investigation of all living and deceased legal heirs to ensure 100% consent without pending minor claims.',
    },
    {
      no: '07',
      title: 'FMB (Field Measurement Book) Sketch Survey',
      tamil: 'எஃப்.எம்.பி (FMB) வரைபட நில அளவீடு',
      description: 'Physical land survey matching village survey boundaries and exact square footage on the ground.',
    },
    {
      no: '08',
      title: 'No Acquisition / Alignment NOC',
      tamil: 'அரசு கையகப்படுத்துதல் இல்லை சான்று',
      description: 'Clearance from NHAI, State Highways, and Metro Rail ensuring land is not marked for upcoming acquisition.',
    },
    {
      no: '09',
      title: 'CRZ & Waterbody / Poramboke Clearance',
      tamil: 'நீர்வழி மற்றும் புறம்போக்கு அல்ல சான்று',
      description: 'Confirmation that the land is not on wetland, lake catchment, temple endowment, or coastal prohibited zones.',
    },
    {
      no: '10',
      title: 'Up-to-Date Municipal & Property Tax Receipts',
      tamil: 'நகராட்சி / ஊராட்சி வரி ரசீதுகள்',
      description: 'Verification of property tax, water tax, and electricity charges paid up-to-date with nil pending liabilities.',
    },
    {
      no: '11',
      title: 'Sub-Registrar Jurisdiction & Guideline Value Audit',
      tamil: 'சார்பதிவாளர் வழிகாட்டி மதிப்பு சரிபார்ப்பு',
      description: 'Cross-verifying the official government guideline value for transparent stamp duty and registration fees.',
    },
    {
      no: '12',
      title: 'Advocate Title Opinion & Guarantee Certificate',
      tamil: 'உயர்நீதிமன்ற வழக்கறிஞர் உரிமை அறிக்கை',
      description: 'Signed legal opinion from our Senior High Court advocate formally declaring the title clean, marketable, and secure.',
    },
  ];

  return (
    <section id="due-diligence" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>Zero-Litigation Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Tamil NRI 12-Point Legal Due Diligence Guarantee
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Before we present any property to an overseas buyer, our senior High Court legal advocates 
            personally verify every document down to the micro-level.
          </p>
        </div>

        {/* 12-Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {checklistItems.map((item) => (
            <div
              key={item.no}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black text-amber-600 bg-amber-100 px-2.5 py-0.5 rounded">
                  ITEM {item.no}
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>

              <div className="text-xs font-semibold text-emerald-800 mb-1">
                {item.tamil}
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Download Legal Report CTA Box */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700/60 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">
                Want to examine a sample Tamil NRI Legal Due Diligence Dossier?
              </h4>
              <p className="text-xs text-slate-300">
                Includes sample 30-year EC analysis, Patta transfer verification, and High Court Title Opinion format.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20please%20send%20me%20the%20Sample%2012-Point%20Legal%20Due%20Diligence%20Dossier%20PDF."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Request Sample Legal Dossier PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
