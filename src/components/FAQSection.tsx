'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '@/data/faq';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Legal', 'Remote Buying & PoA', 'Tax & Banking', 'Safety & Management'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>NRI Knowledge Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions by Overseas Indians
          </h2>
          <p className="text-base text-slate-600">
            Clear answers to your legal, banking, FEMA, and physical property management questions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mt-2">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-emerald-300 bg-emerald-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    {faq.tamilQuestion && (
                      <div className="text-xs text-amber-700 font-medium">
                        {faq.tamilQuestion}
                      </div>
                    )}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-xs sm:text-sm text-slate-700 mb-3">
            Have a specific scenario regarding your ancestral land, inheritance, or tax treaty in your country?
          </p>
          <a
            href="https://wa.me/919840012345?text=Hello%20Tamil%20NRI%20Real%20Estate,%20I%20have%20a%20specific%20question%20regarding%20NRI%20property%20regulations."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Ask Our In-House Legal & CA Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
}
