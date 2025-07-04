
import React from 'react';
import { Heart, Users, Shield, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "10K+", label: "Women Helped" },
    { icon: Shield, number: "24/7", label: "Support Available" },
    { icon: Heart, number: "500+", label: "Volunteers" },
    { icon: Award, number: "5+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About SafeGuard Women
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to creating a safer world for women through technology, 
            community support, and immediate access to help when it's needed most.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-purple-100 hover:border-purple-200 transition-colors">
              <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SafeGuard Women was founded with a simple yet powerful mission: to ensure every woman 
              has access to immediate help, support, and resources when facing challenging situations. 
              We believe that safety is a fundamental right, not a privilege.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our platform combines cutting-edge technology with human compassion to provide 
              24/7 support, emergency services, safety products, and a community where women 
              can find strength, support, and solidarity.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold text-purple-600 mb-3">What We Offer</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 Emergency Helpline</li>
                  <li>• Anonymous Support Chat</li>
                  <li>• Safety Product Store</li>
                  <li>• Community Support Network</li>
                  <li>• Educational Resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-3">Our Values</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Confidentiality & Privacy</li>
                  <li>• Immediate Response</li>
                  <li>• Non-judgmental Support</li>
                  <li>• Empowerment & Education</li>
                  <li>• Community Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
