import { Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#7f469b] via-[#6a3a82] to-[#5c2d73] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl mb-6">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-white/90 leading-relaxed">
                  Naturals Salon Private Limited<br />
                  3rd Floor, Ispahani Centre<br />
                  123 & 124, Nungambakkam High Rd<br />
                  Thousand Lights West, Thousand Lights<br />
                  Chennai, Tamil Nadu 600006
                </p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a 
                  href="mailto:care@naturals.in" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  care@naturals.in
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <a 
                  href="https://wa.me/919092626262" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  WhatsApp: 9092626262
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-3xl mb-6">Follow Us</h3>
            <p className="text-white/80 mb-6">Stay connected for latest updates, offers, and beauty tips</p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-[#7f469b] flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-[#7f469b] flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-[#7f469b] flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-white hover:text-[#7f469b] flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Naturals Salon Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
