'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Globe,
  Phone,
  Mail,
  User,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Send,
} from 'lucide-react';

export default function ConsultationFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    whatsapp: '',
    currentCountry: 'United States',
    preferredTimezone: 'PST / US Pacific',
    targetCity: 'Chennai',
    propertyType: 'Luxury Villa',
    budgetRange: '₹1 Cr - ₹2.5 Cr (~$120K - $300K)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful submission
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Tamil NRI Real Estate,
I would like to book an NRI consultation.
Name: ${formData.fullName || 'Overseas Buyer'}
Current Country: ${formData.currentCountry} (${formData.preferredTimezone})
Interest: ${formData.targetCity} - ${formData.propertyType}
Budget: ${formData.budgetRange}
WhatsApp: ${formData.countryCode} ${formData.whatsapp}`;

    window.open(
      `https://wa.me/919840012345?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="consultation" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Timezone Flexibility */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>1-on-1 Confidential Video Advisory</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Schedule Your Free NRI Property Consultation
              </h2>
              <div className="text-sm font-semibold text-amber-700">
                உங்கள் வசதிக்கேற்ப இணையவழி சந்திப்பு • Tailored to Your Time Zone
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Speak directly with an experienced Senior NRI Portfolio Manager. We discuss verified title dossiers, 
                upcoming infrastructure growth catalysts, remote Power of Attorney mechanics, and FEMA compliance.
              </p>
            </div>

            {/* What you get in 30 mins */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Included in your 30-Minute Discovery Call:
              </h4>

              <div className="space-y-2.5">
                {[
                  'Personalized corridor recommendation matching your investment goals',
                  '12-Point High Court Legal Title audit checklist for your shortlisted property',
                  'Remote Power of Attorney (PoA) roadmap via your local Indian Embassy',
                  'NRE/NRO banking & tax repatriation framework (Form 15CA/15CB)',
                  'Live 4K Drone walkthrough demo and upcoming corridor infrastructure masterplans',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timezone Support Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <Clock className="w-8 h-8 text-amber-600 shrink-0" />
              <div className="text-xs">
                <strong className="text-slate-900 block font-bold">Available Across All Major Time Zones:</strong>
                <span className="text-slate-500">
                  Daily slots open for US (PST, EST), UK (BST), Middle East (GST), Singapore (SGT), and Australia (AEST).
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-800" />

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Consultation Request Confirmed!
                  </h3>
                  <div className="text-sm font-semibold text-amber-700">
                    நன்றி! எங்கள் NRI ஆலோசகர் விரைவில் உங்களைத் தொடர்புகொள்வார்.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Our Senior NRI Portfolio Manager has received your details and will connect with you via 
                    WhatsApp and Email within <strong>4 hours</strong> matching your local timezone.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-200" />
                      <span>Connect Instantly on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Reserve Your Video Consultation Slot
                    </h3>
                    <p className="text-xs text-slate-500">
                      No spam, strictly private & 100% confidential property advisory.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Senthil Kumar"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="senthil@gmail.com"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country of Residence & Timezone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Current Country of Residence *
                      </label>
                      <select
                        value={formData.currentCountry}
                        onChange={(e) =>
                          setFormData({ ...formData, currentCountry: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white"
                      >
                        <option value="United States">🇺🇸 United States</option>
                        <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                        <option value="Singapore">🇸🇬 Singapore</option>
                        <option value="United Kingdom">🇬🇧 United Kingdom</option>
                        <option value="Australia">🇦🇺 Australia</option>
                        <option value="Canada">🇨🇦 Canada</option>
                        <option value="Malaysia">🇲🇾 Malaysia</option>
                        <option value="Germany / Europe">🇪🇺 Germany / Europe</option>
                        <option value="Qatar / Saudi / Kuwait">🇶🇦 Qatar / Saudi / Kuwait</option>
                        <option value="Other">🌍 Other</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Preferred Call Timezone *
                      </label>
                      <select
                        value={formData.preferredTimezone}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTimezone: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white"
                      >
                        <option value="PST / US Pacific">US Pacific (PST)</option>
                        <option value="EST / US Eastern">US Eastern (EST)</option>
                        <option value="CST / US Central">US Central (CST)</option>
                        <option value="GST / Gulf Time (Dubai)">Gulf Time / GST (Dubai)</option>
                        <option value="SGT / Singapore Time">Singapore Time (SGT)</option>
                        <option value="BST / UK Time (London)">UK Time (BST / GMT)</option>
                        <option value="AEST / Sydney Time">Australia (AEST)</option>
                        <option value="IST / India Standard Time">India (IST)</option>
                      </select>
                    </div>
                  </div>

                  {/* WhatsApp Number with Country Code */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      WhatsApp Enabled Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="w-24 px-2 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white font-mono"
                      >
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+974">+974 (QA)</option>
                        <option value="+966">+966 (SA)</option>
                        <option value="+49">+49 (DE)</option>
                      </select>

                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({ ...formData, whatsapp: e.target.value })
                          }
                          placeholder="e.g. 408 555 0199"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Target Region & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Target City in Tamil Nadu
                      </label>
                      <select
                        value={formData.targetCity}
                        onChange={(e) =>
                          setFormData({ ...formData, targetCity: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white"
                      >
                        <option value="Chennai (OMR / ECR / Porur)">Chennai (OMR / ECR / Porur)</option>
                        <option value="Coimbatore (Saravanampatti / Avinashi)">Coimbatore (Saravanampatti / Avinashi)</option>
                        <option value="Hosur (Tech & EV Corridor)">Hosur (Tech & EV Corridor)</option>
                        <option value="Madurai & Trichy">Madurai & Trichy</option>
                        <option value="Nilgiris / Kodaikanal (Holiday Home)">Nilgiris / Kodaikanal (Holiday Home)</option>
                        <option value="Specific Ancestral Taluk">Other / Ancestral Taluk</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Investment Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 bg-white"
                      >
                        <option value="₹40 Lakhs - ₹75 Lakhs (~$50K - $90K)">₹40L - ₹75 Lakhs (~$50K - $90K)</option>
                        <option value="₹75 Lakhs - ₹1.5 Crores (~$90K - $180K)">₹75L - ₹1.5 Cr (~$90K - $180K)</option>
                        <option value="₹1.5 Crores - ₹3 Crores (~$180K - $350K)">₹1.5 Cr - ₹3 Cr (~$180K - $350K)</option>
                        <option value="₹3 Crores - ₹7+ Crores ($350K+)">₹3 Cr - ₹7+ Cr (Ultra Luxury)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md shadow-emerald-700/25 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>Confirm Video Consultation Slot</span>
                    </button>
                  </div>

                  {/* Alternative Direct WhatsApp CTA */}
                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Prefer chatting directly? Message our NRI Desk on WhatsApp</span>
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
