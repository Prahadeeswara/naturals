import { motion } from 'framer-motion';
import { Plus, X, Users } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FamilyMember {
  name: string;
  phone: string;
}

interface FamilyFriendsSectionProps {
  familyMembers: FamilyMember[];
  onUpdate: (members: FamilyMember[]) => void;
}

export function FamilyFriendsSection({ familyMembers, onUpdate }: FamilyFriendsSectionProps) {
  const handleAddMember = () => {
    if (familyMembers.length < 5) {
      onUpdate([...familyMembers, { name: '', phone: '' }]);
    }
  };

  const handleRemoveMember = (index: number) => {
    onUpdate(familyMembers.filter((_, i) => i !== index));
  };

  const handleUpdateMember = (index: number, field: 'name' | 'phone', value: string) => {
    const updated = familyMembers.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    onUpdate(updated);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#A88BBE]/10"
    >
      <h3 className="text-[#A88BBE] flex items-center gap-2 mb-6">
        <span className="bg-[#A88BBE] text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
        Add Family or Friends to Gift Them Too
      </h3>

      <div className="space-y-4">
        {familyMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#FAF8F5] rounded-xl border border-[#A88BBE]/10 relative"
          >
            <div className="space-y-2">
              <Label className="text-gray-700">Name</Label>
              <Input
                type="text"
                placeholder="Enter name"
                value={member.name}
                onChange={(e) => handleUpdateMember(index, 'name', e.target.value)}
                className="border-[#A88BBE]/30 focus:border-[#A88BBE] focus:ring-[#A88BBE]/20"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700">Phone Number</Label>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={member.phone}
                onChange={(e) => handleUpdateMember(index, 'phone', e.target.value)}
                className="border-[#A88BBE]/30 focus:border-[#A88BBE] focus:ring-[#A88BBE]/20"
              />
            </div>
            <button
              onClick={() => handleRemoveMember(index)}
              className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        ))}

        {familyMembers.length < 5 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddMember}
            className="flex items-center gap-2 text-[#A88BBE] hover:text-[#9678AA] transition-colors py-3 px-4 border-2 border-dashed border-[#A88BBE]/30 rounded-xl w-full justify-center hover:border-[#A88BBE]/60 hover:bg-[#A88BBE]/5"
          >
            <Plus className="w-5 h-5" />
            Add Another ({familyMembers.length}/5)
          </motion.button>
        )}

        {familyMembers.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No family or friends added yet</p>
            <p>Click "Add Another" to get started</p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
