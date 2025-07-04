
import React from 'react';
import Navbar from '@/components/Navbar';
import FAQSection from '@/components/FAQSection';
import ChatBox from '@/components/ChatBox';

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FAQSection />
      </div>
      <ChatBox />
    </div>
  );
};

export default FAQ;
