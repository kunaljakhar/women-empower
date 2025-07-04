
import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you. This is a safe space. How can I assist you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate support response
      setTimeout(() => {
        const supportResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for reaching out. Our support team will connect with you shortly. In case of emergency, please call 911 or our emergency helpline.",
          sender: 'support',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, supportResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full gradient-purple text-white shadow-lg hover:shadow-xl transition-all animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50 animate-bounce-in">
          <Card className="w-full h-full flex flex-col shadow-2xl border-purple-200">
            {/* Chat Header */}
            <div className="gradient-purple text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">24/7 Support</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Emergency Buttons */}
            <div className="p-2 bg-red-50 border-b flex space-x-2">
              <Button size="sm" variant="destructive" className="flex-1 text-xs">
                <Phone className="w-3 h-3 mr-1" />
                Emergency
              </Button>
              <Button size="sm" variant="outline" className="flex-1 text-xs border-orange-300 text-orange-600">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Crisis Line
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={sendMessage} size="sm" className="gradient-purple text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBox;
