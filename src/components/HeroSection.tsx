
import React from 'react';
import { Shield, Phone, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Protection",
      description: "Round-the-clock safety monitoring and emergency response"
    },
    {
      icon: Phone,
      title: "Emergency Helpline",
      description: "Instant connection to trained safety professionals"
    },
    {
      icon: MessageCircle,
      title: "Anonymous Chat",
      description: "Secure and confidential support conversations"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with a supportive network of women"
    }
  ];

  return (
    <div className="min-h-screen gradient-soft pt-16">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Women,
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ensuring Safety
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted companion for safety, support, and empowerment. 
            Connect with our 24/7 helpline, access emergency services, and join a community that cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-purple text-white hover:opacity-90 px-8 py-3">
              Get Help Now
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-purple-100 hover:border-purple-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold text-red-800">In Emergency?</h3>
                <p className="text-red-600">Call our 24/7 helpline immediately</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="destructive" size="lg">
                Emergency: 911
              </Button>
              <Button variant="outline" className="border-red-400 text-red-600 hover:bg-red-50">
                Helpline: 1-800-SAFE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
