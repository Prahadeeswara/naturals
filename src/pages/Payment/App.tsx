import { useState } from 'react';
import { Header } from './components/Header';
// import { HeroSection } from './components/HeroSection';
import { CustomerDetailsForm } from './components/CustomerDetailsForm';
import { OTPModal } from './components/OTPModal';
import { FamilyFriendsSection } from './components/FamilyFriendsSection';
import { GiftCardAmountSection } from './components/GiftCardAmountSection';
import { CheckoutPage } from './components/CheckoutPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '' });
  const [showCheckout, setShowCheckout] = useState(false);
  const [familyMembers, setFamilyMembers] = useState<Array<{ name: string; phone: string }>>([]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleCustomerSubmit = (name: string, phone: string) => {
    setCustomerDetails({ name, phone });
    setShowOTPModal(true);
  };

  const handleOTPVerified = () => {
    setIsPhoneVerified(true);
    setShowOTPModal(false);
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  if (showCheckout) {
    return (
      <CheckoutPage
        customerDetails={customerDetails}
        familyMembers={familyMembers}
        amount={selectedAmount}
        onBack={() => setShowCheckout(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <Header />
      {/* <HeroSection /> */}
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Step 1: Customer Details */}
        <CustomerDetailsForm
          onSubmit={handleCustomerSubmit}
          isVerified={isPhoneVerified}
          initialName={customerDetails.name}
          initialPhone={customerDetails.phone}
        />

        {/* Step 2: Family & Friends */}
        {isPhoneVerified && (
          <FamilyFriendsSection
            familyMembers={familyMembers}
            onUpdate={setFamilyMembers}
          />
        )}

        {/* Step 3: Select Amount */}
        {isPhoneVerified && (
          <GiftCardAmountSection
            selectedAmount={selectedAmount}
            onSelect={setSelectedAmount}
          />
        )}

        {/* Checkout CTA */}
        {isPhoneVerified && selectedAmount && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleProceedToCheckout}
              className="bg-gradient-to-r from-[#A88BBE] to-[#9678AA] text-white px-12 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-[#9678AA] hover:to-[#A88BBE]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>

      {/* OTP Modal */}
      <OTPModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerified={handleOTPVerified}
        phoneNumber={customerDetails.phone}
      />

      <Toaster />
    </div>
  );
}
