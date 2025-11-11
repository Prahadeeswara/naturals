import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface CustomerDetailsFormProps {
  onSubmit: (name: string, phone: string) => void;
  isVerified: boolean;
  initialName: string;
  initialPhone: string;
}

export function CustomerDetailsForm({ onSubmit, isVerified, initialName, initialPhone }: CustomerDetailsFormProps) {
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit(name, phone);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#A88BBE]/10"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#A88BBE] flex items-center gap-2">
          <span className="bg-[#A88BBE] text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
          Customer Details
        </h3>
        {isVerified && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2 text-green-600"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Verified</span>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="customer-name" className="text-gray-700">
            <User className="w-4 h-4 inline mr-2" />
            Customer Name
          </Label>
          <Input
            id="customer-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isVerified}
            required
            className="border-[#A88BBE]/30 focus:border-[#A88BBE] focus:ring-[#A88BBE]/20 disabled:opacity-50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone-number" className="text-gray-700">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number
          </Label>
          <Input
            id="phone-number"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isVerified}
            required
            className="border-[#A88BBE]/30 focus:border-[#A88BBE] focus:ring-[#A88BBE]/20 disabled:opacity-50"
          />
        </div>

        {!isVerified && (
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#A88BBE] text-white py-3 rounded-xl hover:bg-[#9678AA] transition-colors shadow-md"
          >
            Submit
          </motion.button>
        )}
      </form>
    </motion.section>
  );
}
