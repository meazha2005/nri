import React from 'react';
import GlobalTimezoneBar from '@/components/GlobalTimezoneBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NRIServicesSuite from '@/components/NRIServicesSuite';
import CuratedProperties from '@/components/CuratedProperties';
import SellPropertySection from '@/components/SellPropertySection';
import WhyTamilNadu from '@/components/WhyTamilNadu';
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

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Trust Elements & Core Pitch */}
        <HeroSection />

        {/* 4. Comprehensive 360° NRI Services Suite (1st as per scroll) */}
        <NRIServicesSuite />

        {/* 5. Curated Properties Catalog (2nd as per scroll) */}
        <CuratedProperties />

        {/* 6. NRI Land & Property Selling Facility (For NRIs Selling Land in India) */}
        <SellPropertySection />

        {/* 7. Why Tamil Nadu Economic & Heritage Case */}
        <WhyTamilNadu />

        {/* 8. Step-by-Step Frictionless Remote Acquisition Roadmap */}
        <StepByStepRemoteProcess />

        {/* 9. 12-Point Transparent High Court Legal Due Diligence */}
        <LegalChecklistSection />

        {/* 10. Interactive ROI, Capital Gains & Rental Yield Calculator */}
        <InteractiveROICalculator />

        {/* 11. Diaspora Voices & Global Client Testimonials */}
        <TestimonialsSection />

        {/* 12. NRI Knowledge Base & FAQs */}
        <FAQSection />

        {/* 13. Consultation Booking Form */}
        <ConsultationFormSection />
      </main>

      {/* 14. Comprehensive Brand Footer */}
      <Footer />

      {/* 15. Sticky Floating WhatsApp & Fast Action Buttons */}
      <StickyFloatingActions />
    </div>
  );
}
