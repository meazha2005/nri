'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  FileCheck2,
  ShieldCheck,
  Send,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  DollarSign,
  MapPin,
  Scale,
  Building2,
  Globe,
  ArrowRight,
  Landmark,
} from 'lucide-react';

export default function SellPropertySection() {
  const [sellForm, setSellForm] = useState({
    name: '',
    whatsapp: '',
    country: 'United States (+1)',
    district: 'Chennai',
    propertyType: 'Residential Plot / Land',
    extent: '',
    titleStatus: 'Clear Patta in My Name',
    targetPrice: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSell = () => {
    const text = `Hello TamilNRIProperty Selling Desk,
I would like to sell my property in Tamil Nadu:
Name: ${sellForm.name || 'NRI Property Owner'}
Resident Country: ${sellForm.country}
Location/District: ${sellForm.district}
Property Type: ${sellForm.propertyType}
Extent/Size: ${sellForm.extent || 'Not specified'}
Title Status: ${sellForm.titleStatus}
WhatsApp: ${sellForm.whatsapp}
Please arrange a market valuation and advise on remote sale via Power of Attorney.`;

    window.open(
      `https://wa.me/919884495395?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const sellFeatures = [
    {
      icon: <Scale className="w-6 h-6 text-emerald-700" />,
      title: '100% Remote PoA Sale',
      tamil: 'தொலைதூர பவர் ஆஃப் அட்டார்னி விற்பனை',
      desc: 'Sell without traveling to India or missing work. Execute Special PoA attested at your local Indian Embassy/Consulate; we complete the sale and registration on your behalf.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      title: 'Fair Market Valuation',
      tamil: 'துல்லியமான சந்தை மதிப்பீடு',
      desc: 'Zero broker lowballing. We calculate scientific valuation based on recent registered corridor transactions, guideline rates, and local infrastructure demand.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-700" />,
      title: 'Lower TDS (Form 13) Support',
      tamil: 'குறைந்த வரி விலக்கு சான்றிதழ்',
      desc: 'Standard NRI sale deduction is 20%+ TDS under Section 195. Our CAs obtain a Lower/Nil TDS Certificate from the Income Tax department, saving you lakhs in upfront cuts.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      title: '15CA/15CB Repatriation',
      tamil: 'வெளிநாட்டு வங்கிக்கு பணப்பரிமாற்றம்',
      desc: 'Completely FEMA & RBI compliant. Our Chartered Accountants issue Form 15CA/15CB and wire your entire sale proceeds legally to your foreign bank account abroad.',
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-emerald-700" />,
      title: 'Title & Patta Clean-Up',
      tamil: 'பட்டா மற்றும் ஆவண சரிபார்ப்பு',
      desc: 'Have missing parent documents, boundary confusion, or undivided family share? Our High Court legal advocates rectify titles and execute smooth family partition deeds before sale.',
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      title: '1,800+ Verified NRI Buyer Network',
      tamil: 'நேரடி வெளிநாட்டு வாங்குவோர்',
      desc: 'Direct access to thousands of pre-screened diaspora buyers in the US, UK, UAE, Singapore & Australia. Fast, transparent deals without local middleman commissions.',
    },
  ];

  return (
    <section id="sell-property" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>NRI Land & Property Selling Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Want to Sell Your Land or Property in <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Tamil Nadu from Abroad?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Own plots, agricultural acres, villas, or ancestral properties in India? We handle end-to-end remote selling, 
            fair market appraisal, Embassy PoA registration, Lower TDS (Form 13), and 100% legal funds repatriation to your overseas bank.
          </p>

          <div className="text-xs sm:text-sm font-semibold text-amber-300 pt-1">
            சொத்து மறுவிற்பனை • தூதரக பவர் ஆஃப் அட்டார்னி • வரி சேமிப்பு & பணப்பரிமாற்றம்
          </div>
        </div>

        {/* 6 Key Selling Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {sellFeatures.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div className="text-xs font-bold text-amber-400 mb-1">
                {item.tamil}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Seller Lead & Free Valuation Card */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 p-6 sm:p-10 border border-emerald-900/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left pitch */}
            <div className="lg:col-span-5 space-y-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 inline-block">
                Free Valuation & Consultation
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Get a Complimentary Market Appraisal & Selling Roadmap for Your Property
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether it is a vacant plot in Chennai ECR, acres in Coimbatore, a tech corridor layout in Hosur, 
                or heritage ancestral land in Madurai / Trichy, our Senior Land Managers provide instant guidance.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No need to travel to India — 100% Remote Embassy PoA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Save on 20%+ TDS with in-house Form 13 CA filing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Funds legally credited directly into your foreign bank account</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSell}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Direct WhatsApp with Selling Desk: +91 98844 95395</span>
                </button>
              </div>
            </div>

            {/* Right Quick Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Property Submission Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Our Senior Land Selling Manager will review your property details, verify current corridor market values, 
                    and reach out to you on WhatsApp within 24 hours with a comprehensive valuation and PoA roadmap.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 hover:underline pt-2 inline-block"
                  >
                    Submit another property
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h4 className="text-lg font-black text-slate-900">
                      Submit Your Land / Property for Sale
                    </h4>
                    <p className="text-xs text-slate-500">
                      Confidential valuation • Zero obligation • Direct diaspora buyers
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={sellForm.name}
                        onChange={(e) => setSellForm({ ...sellForm, name: e.target.value })}
                        placeholder="e.g. Senthil Kumar"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        WhatsApp Number (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={sellForm.whatsapp}
                        onChange={(e) => setSellForm({ ...sellForm, whatsapp: e.target.value })}
                        placeholder="e.g. +1 408 555 0192"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        District / City in TN *
                      </label>
                      <select
                        value={sellForm.district}
                        onChange={(e) => setSellForm({ ...sellForm, district: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900 bg-white"
                      >
                        <option>Chennai (ECR / OMR / City)</option>
                        <option>Coimbatore</option>
                        <option>Hosur / Krishnagiri</option>
                        <option>Madurai</option>
                        <option>Trichy</option>
                        <option>Salem</option>
                        <option>Chengalpattu / Kanchipuram</option>
                        <option>Tirunelveli</option>
                        <option>Other District in TN</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Property Category *
                      </label>
                      <select
                        value={sellForm.propertyType}
                        onChange={(e) => setSellForm({ ...sellForm, propertyType: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900 bg-white"
                      >
                        <option>Residential Plot / Layout</option>
                        <option>Agricultural / Farm Land</option>
                        <option>Commercial Plot / Land</option>
                        <option>Independent Villa / House</option>
                        <option>Apartment / Flat</option>
                        <option>Ancestral / Inherited Land</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Extent / Area (Approx) *
                      </label>
                      <input
                        type="text"
                        required
                        value={sellForm.extent}
                        onChange={(e) => setSellForm({ ...sellForm, extent: e.target.value })}
                        placeholder="e.g. 2.5 Grounds / 1 Acre"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Current Title Condition *
                      </label>
                      <select
                        value={sellForm.titleStatus}
                        onChange={(e) => setSellForm({ ...sellForm, titleStatus: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900 bg-white"
                      >
                        <option>Clear Patta in My Name</option>
                        <option>Inherited / Joint Family Property</option>
                        <option>Needs Revenue Survey / Demarcation</option>
                        <option>Missing Older Parent Deeds</option>
                        <option>Special Power of Attorney Ready</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Expected Price (Optional)
                      </label>
                      <input
                        type="text"
                        value={sellForm.targetPrice}
                        onChange={(e) => setSellForm({ ...sellForm, targetPrice: e.target.value })}
                        placeholder="e.g. ₹85 Lakhs / Open to Market"
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Request Free Valuation & Selling Roadmap</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
