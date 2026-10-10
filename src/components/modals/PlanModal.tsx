import React, { useState } from 'react';
import { PricingPlan } from '../../types';

interface PlanModalProps {
  isOpen: boolean;
  plan: PricingPlan | null;
  billingPeriod: 'monthly' | 'annual';
  onClose: () => void;
}

export const PlanModal: React.FC<PlanModalProps> = ({ isOpen, plan, billingPeriod, onClose }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen || !plan) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      onClose();
      setConfirmed(false);
    }, 2000);
  };

  const price = billingPeriod === 'annual' ? plan.priceAnnual : plan.priceMonthly;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl p-6 text-right space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#313441]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7c3aed]">shopping_bag</span>
            <h3 className="font-semibold text-lg text-white">انتخاب و فعال‌سازی {plan.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">check</span>
            </div>
            <h4 className="font-semibold text-white">سفارش اشتراک شما با موفقیت ثبت شد</h4>
            <p className="text-xs text-[#ccc3d8]">کارشناس پشتیبانی برای فعال‌سازی آنی تا دقایقی دیگر با شما تماس خواهد گرفت.</p>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="space-y-4">
            <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441] space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#ccc3d8]">پلن انتخابی:</span>
                <span className="font-bold text-white">{plan.name} ({billingPeriod === 'annual' ? 'سالیانه با ۲۰٪ تخفیف' : 'ماهانه'})</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#ccc3d8]">تعرفه:</span>
                <span className="font-bold text-[#4cd7f6]">{price} {price !== 'تماس بگیرید' ? 'تومان' : ''}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">نام شرکت / تیم توسعه‌دهنده</label>
              <input
                required
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="مثال: شرکت داده‌ورزی نوین"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">شماره تماس مستقیم مسئول فنی یا مالی</label>
              <input
                required
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#732ee4] text-white text-sm font-medium transition-all shadow-[0_0_16px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                تایید نهایی و صدور پیش‌فاکتور رسمی
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
