import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, IndianRupee, User, Phone, Users } from 'lucide-react';

interface CheckoutPageProps {
  customerDetails: { name: string; phone: string };
  familyMembers: Array<{ name: string; phone: string }>;
  amount: number | null;
  onBack: () => void;
}

export function CheckoutPage({ customerDetails, familyMembers, amount, onBack }: CheckoutPageProps) {
  const totalRecipients = 1 + familyMembers.filter(m => m.name && m.phone).length;
  const totalAmount = amount ? amount * totalRecipients : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <header className="bg-white shadow-sm border-b border-[#A88BBE]/10 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#A88BBE] hover:text-[#9678AA] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Gift Card Form
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-[#A88BBE]/10"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A88BBE] to-[#C8A65A] rounded-full mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[#A88BBE] mb-2">Checkout Summary</h2>
            <p className="text-gray-600">Review your gift card purchase details</p>
          </div>

          <div className="space-y-6 mb-8">
            {/* Customer Details */}
            <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#A88BBE]/10">
              <h3 className="text-[#A88BBE] mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Primary Recipient
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="text-gray-500">Name:</span> {customerDetails.name}</p>
                <p><span className="text-gray-500">Phone:</span> {customerDetails.phone}</p>
                <div className="flex items-center gap-1 mt-3 pt-3 border-t border-[#A88BBE]/10">
                  <span className="text-gray-500">Amount:</span>
                  <IndianRupee className="w-4 h-4 text-[#C8A65A]" />
                  <span className="text-[#A88BBE]">{amount}</span>
                </div>
              </div>
            </div>

            {/* Family & Friends */}
            {familyMembers.filter(m => m.name && m.phone).length > 0 && (
              <div className="bg-[#FAF8F5] rounded-xl p-6 border border-[#A88BBE]/10">
                <h3 className="text-[#A88BBE] mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Additional Recipients
                </h3>
                <div className="space-y-4">
                  {familyMembers.filter(m => m.name && m.phone).map((member, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-[#A88BBE]/10">
                      <div className="space-y-2 text-gray-700">
                        <p><span className="text-gray-500">Name:</span> {member.name}</p>
                        <p><span className="text-gray-500">Phone:</span> {member.phone}</p>
                        <div className="flex items-center gap-1 mt-2 pt-2 border-t border-[#A88BBE]/10">
                          <span className="text-gray-500">Amount:</span>
                          <IndianRupee className="w-4 h-4 text-[#C8A65A]" />
                          <span className="text-[#A88BBE]">{amount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Total */}
            <div className="bg-gradient-to-r from-[#A88BBE]/10 to-[#C8A65A]/10 rounded-xl p-6 border border-[#A88BBE]/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Total Recipients:</span>
                <span className="text-[#A88BBE]">{totalRecipients}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#A88BBE]/20">
                <span className="text-gray-700">Total Amount:</span>
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-5 h-5 text-[#C8A65A]" />
                  <span className="text-[#A88BBE]">{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-[#A88BBE] to-[#9678AA] text-white py-4 rounded-xl hover:shadow-xl transition-all"
            >
              Complete Purchase
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBack}
              className="flex-1 bg-white text-[#A88BBE] py-4 rounded-xl border-2 border-[#A88BBE] hover:bg-[#A88BBE]/5 transition-all"
            >
              Edit Details
            </motion.button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Gift cards will be sent via SMS to all recipients
          </p>
        </motion.div>
      </main>
    </div>
  );
}
