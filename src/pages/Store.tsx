
import React from 'react';
import Navbar from '@/components/Navbar';
import StoreSection from '@/components/StoreSection';
import ChatBox from '@/components/ChatBox';

const Store = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <StoreSection />
      </div>
      <ChatBox />
    </div>
  );
};

export default Store;
