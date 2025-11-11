import { Gift } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-[#A88BBE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#A88BBE] to-[#9678AA] p-2 rounded-lg">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#A88BBE]">Naturals Salon</span>
          </div>

          {/* Title */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[#A88BBE] hidden sm:block">
            Buy Gift Card
          </h1>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8 text-gray-600">
            <a href="#" className="hover:text-[#A88BBE] transition-colors hidden sm:block">
              Home
            </a>
            <a href="#" className="hover:text-[#A88BBE] transition-colors hidden sm:block">
              Services
            </a>
            <a href="#" className="hover:text-[#A88BBE] transition-colors">
              Gift Cards
            </a>
          </nav>
        </div>
        
        {/* Mobile Title */}
        <h1 className="text-[#A88BBE] text-center pb-4 sm:hidden">
          Buy Gift Card
        </h1>
      </div>
    </header>
  );
}
