import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";
import { MapPin, Gift, Building2, Send } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import famCard from "./assets/FAM_CARD.png";
import sunscreen from "./assets/sunscreen.png";
import lipBalm from "./assets/lipbalm.png";
import hairSerum from "./assets/serum_product.png";
import product from "./assets/product1.png";
import { useState } from "react";
import GiftCardPopup from "./components/ui/GiftCardPopup";
import { useNavigate } from 'react-router-dom';


export default function App() {

  const [popupOpen, setPopupOpen] = useState(false);
const navigate = useNavigate();
  const products = [
    {
      image: lipBalm,
      name: "Lip Balm",
      description: ""
    },
    {
      image: sunscreen,
      name: "Sunscreen",
      description: ""
    },
    {
      image: hairSerum,
      name: "Serums",
      description: ""
    },
    {
      image: product,
      name: "Am - PM Routine",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Gift Card Offer Section */}
      <section id="gift-card-offer" className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7f469b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7f469b]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#7f469b] text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                  Special Offer
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl text-[#7f469b]">
                Get ₹15,000 Value<br></br> for Just ₹10,000!
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#7f469b] to-purple-300 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Treat yourself or someone special to premium salon services. Purchase a gift card worth ₹10,000 and receive ₹15,000 in value. Perfect for all Naturals Salon services including haircare, skincare, and beauty treatments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>Redeemable at all Naturals locations</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>Valid for all salon services</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>12-month validity period</span>
                </li>
              </ul>
             {/* Gift Card Button - Opens Popup */}
               
       <Button
  size="lg"
  className="bg-[#7f469b] hover:bg-[#6a3a82] text-white rounded-full px-10 py-6 shadow-xl transition-all hover:scale-105"
  onClick={() => navigate('/payment')}
>
  <Gift className="w-5 h-5 mr-2" />
  Pay Now
</Button>


      {/* Gift Card Popup */}
      <GiftCardPopup
  isOpen={popupOpen}
  onClose={() => setPopupOpen(false)}
  targetDate="2025-12-01T00:00:00"
/>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7f469b] to-purple-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all"></div>
                <ImageWithFallback 
                  src={famCard}
                  alt="Naturals Salon Gift Card"
                  className="rounded-3xl shadow-2xl w-full max-w-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Gift Card Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-l from-[#7f469b] to-purple-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGVtYWlsfGVufDF8fHx8MTc2MTcyNTAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="E-Gift Card on Mobile"
                  className="rounded-3xl shadow-2xl w-full max-w-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block">
                <span className="bg-purple-100 text-[#7f469b] px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                  Instant Delivery
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl text-[#7f469b]">
                Send an<br />E-Gift Card
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#7f469b] to-purple-300 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Send joy instantly! Our digital gift cards are delivered via email within minutes. Perfect for last-minute gifts and special occasions. Redeemable at all Naturals Salon locations across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#7f469b] hover:bg-[#6a3a82] text-white rounded-full px-10 py-6 shadow-xl hover:shadow-2xl hover:shadow-[#7f469b]/30 transition-all hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send E-Gift Card
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#7f469b] text-[#7f469b] hover:bg-[#7f469b] hover:text-white rounded-full px-10 py-6 transition-all"
                >
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gift Cards Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7f469b]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#7f469b] text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                  For Businesses
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl text-[#7f469b]">
                Corporate<br />Gift Cards
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#7f469b] to-purple-300 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Reward your team with the gift of wellness and beauty. Bulk gift cards available for corporate gifting, employee rewards, and client appreciation. Customizable denominations and branding options available.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>Bulk ordering available</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#7f469b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#7f469b]"></div>
                  </div>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-[#7f469b] hover:bg-[#6a3a82] text-white rounded-full px-10 py-6 shadow-xl hover:shadow-2xl hover:shadow-[#7f469b]/30 transition-all hover:scale-105"
                onClick={() => window.open('https://zfrmz.in/2A367ZNrGMHGThENZn48', '_blank')}
                type="button"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Enquire for Corporate Gifting
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7f469b] to-purple-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGdpZnR8ZW58MXx8fHwxNzYxNzI1MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Gift Cards"
                  className="rounded-3xl shadow-2xl w-full max-w-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Salon CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7f469b] via-[#6a3a82] to-[#5c2d73] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm uppercase tracking-wider border border-white/30">
                600+ Locations
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Visit Your Nearest<br />Naturals Salon
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Experience world-class beauty and wellness services at over 600 locations across India
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#7f469b] hover:bg-yellow-300 hover:text-[#7f469b] rounded-full px-10 py-7 shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Your Nearest Salon
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#7f469b]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-purple-100 text-[#7f469b] px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                Shop Now
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl mb-6 text-[#7f469b]">
              Explore Our Premium Products
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#7f469b] to-purple-300 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive range of professional hair care and skin care products
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                image={product.image}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
