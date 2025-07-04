
import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Support",
      price: "Free",
      period: "Forever",
      description: "Essential safety features for everyone",
      features: [
        "24/7 Emergency Helpline Access",
        "Anonymous Chat Support",
        "Basic Safety Resources",
        "Community Forum Access",
        "Emergency Contact System"
      ],
      buttonText: "Get Started Free",
      popular: false,
      icon: Shield
    },
    {
      name: "Premium Care",
      price: "$9.99",
      period: "per month",
      description: "Enhanced protection and priority support",
      features: [
        "Everything in Basic Support",
        "Priority Response (< 30 seconds)",
        "Personal Safety Dashboard",
        "Location Sharing with Trusted Contacts",
        "Advanced Safety Alerts",
        "Monthly Safety Training Sessions",
        "Dedicated Support Representative"
      ],
      buttonText: "Start Premium Trial",
      popular: true,
      icon: Star
    },
    {
      name: "Elite Protection",
      price: "$24.99",
      period: "per month",
      description: "Comprehensive safety solution with premium features",
      features: [
        "Everything in Premium Care",
        "24/7 Personal Safety Concierge",
        "Real-time GPS Monitoring",
        "Emergency Response Coordination",
        "Legal Support Consultation",
        "Family Safety Dashboard",
        "Custom Safety Plans",
        "Quarterly Safety Products Box"
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Safety Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic support to comprehensive protection, find the plan that fits your safety needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-purple-500 border-2 shadow-xl' 
                  : 'border-gray-200 hover:border-purple-200'
              } transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'gradient-purple' : 'bg-purple-100'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                  {plan.period !== "Forever" && (
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'gradient-purple text-white hover:opacity-90' 
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-purple-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-purple-800 mb-2">
              Need a Custom Solution?
            </h3>
            <p className="text-purple-600 mb-4">
              We offer enterprise solutions for organizations, schools, and communities. 
              Contact us to discuss your specific safety requirements.
            </p>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
