import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, IndianRupee } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface GiftCardAmountSectionProps {
  selectedAmount: number | null;
  onSelect: (amount: number | null) => void;
}

const PRESET_AMOUNTS = [500, 1000, 2000];

export function GiftCardAmountSection({ selectedAmount, onSelect }: GiftCardAmountSectionProps) {
  const [customAmount, setCustomAmount] = useState('');

  const handlePresetSelect = (amount: number) => {
    onSelect(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      onSelect(numValue);
    } else if (value === '') {
      onSelect(null);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#A88BBE]/10"
    >
      <h3 className="text-[#A88BBE] flex items-center gap-2 mb-6">
        <span className="bg-[#A88BBE] text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
        Select Gift Card Amount
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {PRESET_AMOUNTS.map((amount) => (
          <motion.button
            key={amount}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePresetSelect(amount)}
            className={`relative p-6 rounded-2xl border-2 transition-all shadow-md hover:shadow-xl ${
              selectedAmount === amount && !customAmount
                ? 'border-[#A88BBE] bg-gradient-to-br from-[#A88BBE]/10 to-[#C8A65A]/5'
                : 'border-[#A88BBE]/20 bg-white hover:border-[#A88BBE]/50'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <CreditCard className={`w-8 h-8 ${selectedAmount === amount && !customAmount ? 'text-[#A88BBE]' : 'text-gray-400'}`} />
              <div className="flex items-center gap-1">
                <IndianRupee className={`w-5 h-5 ${selectedAmount === amount && !customAmount ? 'text-[#C8A65A]' : 'text-gray-600'}`} />
                <span className={selectedAmount === amount && !customAmount ? 'text-[#A88BBE]' : 'text-gray-700'}>
                  {amount}
                </span>
              </div>
            </div>
            {selectedAmount === amount && !customAmount && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-[#C8A65A] text-white w-6 h-6 rounded-full flex items-center justify-center"
              >
                ✓
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="space-y-2">
        <Label className="text-gray-700">Or Enter Custom Amount</Label>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="pl-10 border-[#A88BBE]/30 focus:border-[#A88BBE] focus:ring-[#A88BBE]/20"
            min="1"
          />
        </div>
      </div>

      {selectedAmount && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-gradient-to-r from-[#A88BBE]/10 to-[#C8A65A]/10 rounded-xl border border-[#A88BBE]/20"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Selected Amount:</span>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-5 h-5 text-[#C8A65A]" />
              <span className="text-[#A88BBE]">{selectedAmount}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
