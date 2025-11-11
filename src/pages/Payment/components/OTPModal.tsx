import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { toast } from 'sonner';
import { Smartphone } from 'lucide-react';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: () => void;
  phoneNumber: string;
}

export function OTPModal({ isOpen, onClose, onVerified, phoneNumber }: OTPModalProps) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length === 6) {
      // Simulate OTP verification
      toast.success('Phone number verified successfully!');
      onVerified();
      setOtp('');
    } else {
      toast.error('Please enter a valid 6-digit OTP');
    }
  };

  const handleResendOTP = () => {
    toast.success('OTP has been resent to your phone number');
    setOtp('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <DialogHeader>
              <DialogTitle className="text-center text-[#A88BBE] flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" />
                Verify Your Mobile Number
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              <p className="text-center text-gray-600">
                An OTP has been sent to{' '}
                <span className="text-[#A88BBE]">{phoneNumber}</span>
              </p>

              <div className="flex flex-col items-center gap-6">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="border-[#A88BBE]/30" />
                    <InputOTPSlot index={1} className="border-[#A88BBE]/30" />
                    <InputOTPSlot index={2} className="border-[#A88BBE]/30" />
                    <InputOTPSlot index={3} className="border-[#A88BBE]/30" />
                    <InputOTPSlot index={4} className="border-[#A88BBE]/30" />
                    <InputOTPSlot index={5} className="border-[#A88BBE]/30" />
                  </InputOTPGroup>
                </InputOTP>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleVerify}
                  className="w-full bg-[#A88BBE] text-white py-3 rounded-xl hover:bg-[#9678AA] transition-colors shadow-md"
                >
                  Verify OTP
                </motion.button>

                <button
                  onClick={handleResendOTP}
                  className="text-[#C8A65A] hover:text-[#B8965A] transition-colors self-end"
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
