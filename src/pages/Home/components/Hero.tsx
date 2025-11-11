import { Button } from "./ui/button";
import { Sparkles, Gift } from "lucide-react";
import frontBanner from "../assets/front_banner.jpg";
import mobileBanner from "../assets/Mobile_banner.jpg";

export function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Responsive background */}
      <picture className="absolute inset-0 w-full h-full z-0">
        <source media="(max-width: 767px)" srcSet={mobileBanner} />
        <img
          src={frontBanner}
          alt="Naturals Hero Banner"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* ✨ Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent z-10"></div>

      {/* Optional Text (centered) */}
      {/* <h1 className="relative z-20 text-white text-5xl font-bold text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
        Welcome to Naturals
      </h1> */}
    </section>
  );
}
