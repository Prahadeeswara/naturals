import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
}

export function ProductCard({ image, name, description }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative">
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7f469b] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
           style={{ padding: '2px' }}>
        <div className="bg-white w-full h-full rounded-xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-white relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#7f469b]/0 group-hover:bg-[#7f469b]/10 transition-all duration-300"></div>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="mb-2 text-gray-900 group-hover:text-[#7f469b] transition-colors">{name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
          <Button onClick={() => window.open('https://nxtface.com', '_blank')}
            className="w-full bg-[#7f469b] hover:bg-[#6a3a82] text-white rounded-full shadow-md hover:shadow-lg hover:shadow-[#7f469b]/30 transition-all group-hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
