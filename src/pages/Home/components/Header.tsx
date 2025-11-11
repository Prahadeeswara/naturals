import logoImage from "../assets/logo.png";
import { Button } from "./ui/button";
import { Gift, Phone } from "lucide-react";

export function Header() {
  const scrollToOffer = () => {
    document.getElementById("gift-card-offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full bg-white/90 shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img
            src={logoImage}
            alt="Naturals - India's No.1 hair and beauty salon"
            className="h-14 md:h-18"
          />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-[#7f469b] text-[#7f469b] hover:bg-[#7f469b] hover:text-white rounded-full"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>

            <Button
              size="sm"
              onClick={scrollToOffer}
              className="bg-[#7f469b] hover:bg-[#6a3a82] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Gift className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Buy Gift Card</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
