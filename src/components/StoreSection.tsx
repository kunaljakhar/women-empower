
import React from 'react';
import { ShoppingCart, Star, Shield, Zap, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StoreSection = () => {
  const products = [
    {
      id: 1,
      name: "Personal Safety Alarm",
      price: "$24.99",
      rating: 4.8,
      image: "/placeholder.svg",
      description: "Loud 130dB alarm with LED light",
      features: ["130dB Sound", "LED Light", "Keychain Design"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Pepper Spray Keychain",
      price: "$19.99",
      rating: 4.6,
      image: "/placeholder.svg",
      description: "Compact and easy-to-use protection",
      features: ["10ft Range", "UV Dye", "Safety Lock"],
      badge: "Popular"
    },
    {
      id: 3,
      name: "Smart Safety Ring",
      price: "$149.99",
      rating: 4.9,
      image: "/placeholder.svg",
      description: "Discreet wearable emergency device",
      features: ["GPS Tracking", "SOS Button", "Waterproof"],
      badge: "New"
    },
    {
      id: 4,
      name: "Safety Whistle Set",
      price: "$12.99",
      rating: 4.5,
      image: "/placeholder.svg",
      description: "Set of 3 loud emergency whistles",
      features: ["120dB Sound", "Lightweight", "Durable"],
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Safety Product Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully curated collection of safety products designed to keep you protected and confident.
          </p>
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Currently under development - Coming Soon!</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover bg-gradient-to-br from-purple-100 to-pink-100"
                />
                {product.badge && (
                  <Badge className="absolute top-2 left-2 bg-purple-600 text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600">{product.price}</span>
                  <Button size="sm" className="gradient-purple text-white" disabled>
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 border-purple-200">
            <div className="gradient-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Store Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're working hard to bring you the best safety products. 
              Sign up to be notified when our store launches with exclusive early-bird discounts!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="gradient-purple text-white">
                <Bell className="w-4 h-4 mr-2" />
                Notify Me When Available
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600">
                View Product Catalog
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
