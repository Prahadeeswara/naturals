// GiftCardPopup.tsx
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Gift, X } from 'lucide-react';

interface GiftCardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  targetDate?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const GiftCardPopup: React.FC<GiftCardPopupProps> = ({ 
  isOpen, 
  onClose,
  targetDate = '2025-12-01T00:00:00'
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!isOpen) return;
    const targetDateTime = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDateTime - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [isOpen, targetDate]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-4 min-w-[80px] mb-2 transform transition-all hover:scale-105">
        <div className="text-4xl font-bold text-[#7f469b]">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm font-semibold text-white uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
      onClick={onClose}
    >
      {/* Popup Window */}
      <div 
        className="relative rounded-3xl shadow-2xl w-full text-center text-white"
        style={{ 
          maxWidth: '42rem',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, #3b0a45 0%, #5c2d73 50%, #7f469b 100%)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button — fixed at top-right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black text-white rounded-full p-2.5 hover:scale-110 transition-all shadow-xl"
          aria-label="Close popup"
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Popup Content */}
        <div className="p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/90 rounded-full p-6 shadow-xl">
              <Gift className="w-16 h-16 text-[#7f469b]" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Coming Soon!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-md mx-auto">
            Get ready to share the joy! Our gift cards will be available soon.
          </p>

          <div className="bg-gradient-to-r from-[#9b5fc4] to-[#7f469b] rounded-2xl p-8 mb-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Launch Countdown
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>

        <div className="h-24 bg-gradient-to-t from-[#3b0a45]/30 to-transparent" />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default GiftCardPopup;
