'use client';

import React from 'react';
import {
  Video,
  FileSearch,
  PenTool,
  CreditCard,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function StepByStepRemoteProcess() {
  const steps = [
    {
      step: '01',
      title: 'Virtual Consultation & Corridor Matchmaking',
      tamilTitle: 'இணையவழி ஆலோசனை மற்றும் தேர்வு',
      description:
        'Connect with our dedicated NRI Specialist over Zoom or WhatsApp at a time convenient to your local timezone (US, UK, UAE, Singapore, Australia). We understand your budget, asset preferences, and long-term goals.',
      icon: <Video className="w-6 h-6 text-emerald-700" />,
      features: ['Personalized shortlist within 24 hours', 'Live 4K drone site footage', 'Local infrastructure walkthrough'],
    },
    {
      step: '02',
      title: '12-Point High Court Legal Due Diligence',
      tamilTitle: 'உயர்நீதிமன்ற வழக்கறிஞர் சட்ட தணிக்கை',
      description:
        'Our senior practicing advocates scrutinize the 30-year Encumbrance Certificate (Villangam), Revenue Patta, Chitta, Parent Document chains, and CMDA/DTCP/RERA approvals. You receive a formal written legal opinion.',
      icon: <FileSearch className="w-6 h-6 text-amber-600" />,
      features: ['Zero-litigation guarantee', 'Parent title chain up to 35+ years', 'RERA bank escrow verification'],
    },
    {
      step: '03',
      title: 'Remote Special Power of Attorney (PoA)',
      tamilTitle: 'தூதரக பவர் ஆஃப் அட்டார்னி பதிவு',
      description:
        'No flights or leave required. We draft your tailored Special PoA. You get it attested at your nearest Indian Embassy/Consulate or apostilled in your country of residence, and courier it. We get it adjudicated locally.',
      icon: <PenTool className="w-6 h-6 text-teal-700" />,
      features: ['Embassy attestation guidelines', 'Strictly limited to this specific property', 'Complete fraud-proof legal safeguards'],
    },
    {
      step: '04',
      title: 'Secure Banking & Sub-Registrar Registration',
      tamilTitle: 'பாதுகாப்பான நிதிப்பரிமாற்றம் & பத்திரப்பதிவு',
      description:
        'Pay transparently from your NRE or NRO account directly to the verified developer or seller. Our legal team represents you at the Sub-Registrar Office in Tamil Nadu to complete official registration.',
      icon: <CreditCard className="w-6 h-6 text-emerald-700" />,
      features: ['Official Government Registration receipt', 'Registered Sale Deed scanned within 24 hours', 'FEMA & RBI compliant audit trail'],
    },
    {
      step: '05',
      title: 'Patta Mutation, Fencing & Asset Management',
      tamilTitle: 'பட்டா மாற்றம், வேலி மற்றும் சொத்து பராமரிப்பு',
      description:
        'We transfer the Revenue Patta to your name, erect reinforced boundary stones and protective fencing with signboards, and provide ongoing tenant vetting or quarterly drone surveillance reports.',
      icon: <KeyRound className="w-6 h-6 text-amber-600" />,
      features: ['Revenue Patta in your name', 'GPS coordinates & boundary fencing', 'Quarterly video inspection updates'],
    },
  ];

  return (
    <section id="remote-process" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Frictionless Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How You Buy Seamlessly From Overseas
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A battle-tested 5-step remote acquisition protocol designed for complete transparency, legal safety, 
            and zero travel requirements.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="mt-14 relative">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group"
              >
                {/* Left Step Header & Icon */}
                <div className="flex items-start gap-4 sm:gap-6 max-w-xl">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-colors">
                    <span className="text-[10px] font-black font-mono text-amber-600">STEP</span>
                    <span className="text-xl font-black text-slate-900 group-hover:text-emerald-800">
                      {step.step}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-600 block">
                      {step.tamilTitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables Pills */}
                <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 flex flex-wrap lg:flex-col gap-2">
                  {step.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Remote Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
              ✓
            </div>
            <div className="text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 font-bold block">100% Remote Compliance Guarantee:</strong>
              We have completed over 1,850+ remote registrations via Indian Consulates in the US, UK, UAE, Singapore, and Australia.
            </div>
          </div>

          <a
            href="#consultation"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 shrink-0 transition-colors"
          >
            Start Your Journey
          </a>
        </div>

      </div>
    </section>
  );
}
