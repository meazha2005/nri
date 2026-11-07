import React from 'react';
import GlobalTimezoneBar from '@/components/GlobalTimezoneBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyTamilNadu from '@/components/WhyTamilNadu';
import CuratedProperties from '@/components/CuratedProperties';
import NRIServicesSuite from '@/components/NRIServicesSuite';
import StepByStepRemoteProcess from '@/components/StepByStepRemoteProcess';
import LegalChecklistSection from '@/components/LegalChecklistSection';
import InteractiveROICalculator from '@/components/InteractiveROICalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ConsultationFormSection from '@/components/ConsultationFormSection';
import Footer from '@/components/Footer';
import StickyFloatingActions from '@/components/StickyFloatingActions';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Global Timezone & Quick Hotline Bar */}
      <GlobalTimezoneBar />

      {/* 2. Primary Navigation Header */}
      <Navbar />

      {/* 3. Hero Section with Trust Elements & Core Pitch */}
      <main className="flex-1">
        <HeroSection />

        {/* 4. Why Tamil Nadu Economic & Heritage Case */}
        <WhyTamilNadu />

        {/* 5. Curated Properties Catalog with Dynamic Currency FX */}
        <CuratedProperties />

        {/* 6. Comprehensive 360° NRI Services Suite */}
        <NRIServicesSuite />

        {/* 7. Step-by-Step Frictionless Remote Acquisition Roadmap */}
        <StepByStepRemoteProcess />

        {/* 8. 12-Point Transparent High Court Legal Due Diligence */}
        <LegalChecklistSection />

        {/* 9. Interactive ROI, Capital Gains & Rental Yield Calculator */}
        <InteractiveROICalculator />

        {/* 10. Diaspora Voices & Global Client Testimonials */}
        <TestimonialsSection />

        {/* 11. NRI Knowledge Base & FAQs */}
        <FAQSection />

        {/* 12. Consultation Booking Form */}
        <ConsultationFormSection />
      </main>

      {/* 13. Comprehensive Brand Footer */}
      <Footer />

      {/* 14. Sticky Floating WhatsApp & Fast Action Buttons */}
      <StickyFloatingActions />
    </div>
  );
}
