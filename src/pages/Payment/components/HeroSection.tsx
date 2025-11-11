import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#A88BBE]/10 via-[#C8A65A]/5 to-[#A88BBE]/10 py-12 sm:py-16 mt-6 mx-4 sm:mx-8 rounded-3xl shadow-sm"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-[#C8A65A]" />
          <h2 className="text-[#A88BBE]">
            Gift Beauty to Your Loved Ones
          </h2>
          <Sparkles className="w-6 h-6 text-[#C8A65A]" />
        </div>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Share the gift of beauty and wellness with those you care about
        </p>

        {/* Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block"
        >
          <div className="bg-gradient-to-br from-[#A88BBE] to-[#C8A65A] p-8 sm:p-12 rounded-2xl shadow-xl">
            <Gift className="w-20 h-20 sm:w-24 sm:h-24 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 bg-[#C8A65A] text-white px-3 py-1 rounded-full shadow-lg">
            Special
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
