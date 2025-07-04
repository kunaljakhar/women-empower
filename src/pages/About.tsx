
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ChatBox from '@/components/ChatBox';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <ChatBox />
    </div>
  );
};

export default About;
