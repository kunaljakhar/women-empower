
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';

const FAQSection = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([0]);

  const faqs = [
    {
      question: "How quickly can I get help in an emergency?",
      answer: "Our emergency response is immediate. Free users connect within 2 minutes, while Premium users get priority response in under 30 seconds. For life-threatening emergencies, we recommend calling 911 first, then using our service for additional support."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We use end-to-end encryption for all communications and follow strict privacy protocols. Your personal information is never shared without your explicit consent, except in cases where we're legally required to report immediate danger to yourself or others."
    },
    {
      question: "What types of support do you provide?",
      answer: "We offer emotional support, crisis intervention, safety planning, resource referrals, and emergency coordination. Our trained professionals can help with domestic violence, harassment, assault recovery, mental health crises, and general safety concerns."
    },
    {
      question: "Can I use this service anonymously?",
      answer: "Yes, our chat support allows completely anonymous conversations. However, for emergency services and location-based help, we may need some basic information to provide effective assistance."
    },
    {
      question: "Do you provide services 24/7?",
      answer: "Yes, our helpline and chat support are available 24 hours a day, 7 days a week, 365 days a year. Someone is always here when you need help."
    },
    {
      question: "What safety products do you recommend?",
      answer: "We recommend a combination of personal alarms, pepper spray (where legal), safety apps, and wearable emergency devices. Our store (coming soon) will feature professionally vetted products with detailed safety guides."
    },
    {
      question: "How much does the service cost?",
      answer: "Basic support is completely free and includes emergency helpline access and chat support. Premium plans start at $9.99/month for enhanced features like priority response and personal safety dashboard."
    },
    {
      question: "Can family members track my safety status?",
      answer: "With Premium and Elite plans, you can share your safety status with trusted contacts. This includes location sharing, check-in reminders, and automatic alerts if you miss scheduled check-ins."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our safety services and support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-purple-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you 24/7. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 gradient-purple text-white rounded-lg hover:opacity-90 transition-opacity">
                Start Live Chat
              </button>
              <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                Call Support Line
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
