
import React from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import ChatBox from '@/components/ChatBox';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <PricingSection />
      </div>
      <ChatBox />
    </div>
  );
};

export default Pricing;
