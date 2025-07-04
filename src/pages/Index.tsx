
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StoreSection from '@/components/StoreSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ChatBox from '@/components/ChatBox';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StoreSection />
      <PricingSection />
      <FAQSection />
      <ChatBox />
    </div>
  );
};

export default Index;
