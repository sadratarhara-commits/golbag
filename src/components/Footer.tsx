import React, { useState } from 'react';
import { ScreenId } from '../types';

interface FooterProps {
  onSelectScreen: (screen: ScreenId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectScreen }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="w-full bg-[#0b0e19] border-t border-[#313441]/40 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-lg bg-[#1c1f2b]">
                <img
                  alt="لوگوی هوش مصنوعی آوا"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Woy8IODJNq3WhM0CLQK3mSxmfvXLjLQ7-WwnqizqrrRjhKY7wTfG8qYGrcloLVmFsVoRU7fURiCL8yzuxwBhKJZ9oNxZByXxxco-p3q2TOWZmnkD_0mdmDwBTPr-44G7NX7Fh0BAK0Ot8ZImCDyIv4Rg4LYAqqbnbmjWnO1WwMPef_e0Na89FFFrvGnX55JvPg49B_Wsx_nySrywkEhqc_BsVDfpzRPjGEvqyT_iS91H5A8o0Mdr1a3zc"
                />
              </div>
              <span className="font-semibold text-lg text-[#e0e1f2]">هوش مصنوعی آوا</span>
            </div>
            <p className="text-sm text-[#ccc3d8] max-w-sm leading-relaxed">
              پلتفرم جامع هوش مصنوعی، یادگیری عمیق و پردازش زبان طبیعی متناسب با نیازمندی‌های سازمانی و فناوری‌های پیشرفته نوین.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1f2b] text-[#4cd7f6] text-xs shadow-[0_0_12px_rgba(76,215,246,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                <span>وضعیت شبکه: پایدار و فعال (۹۹.۹۹٪ SLA)</span>
              </div>
            </div>
          </div>

          {/* Products & Infrastructure */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#e0e1f2]">محصولات و زیرساخت</h3>
            <ul className="space-y-2 text-xs text-[#ccc3d8]">
              <li>
                <button
                  onClick={() => onSelectScreen('developer')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  موتور عصبی آوا
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('business')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  پردازش گفتار و متن
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('business')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  سرویس تحلیل دیداری OCR
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('developer')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  رابط‌های برنامه‌نویسی API
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#e0e1f2]">منابع و پشتیبانی</h3>
            <ul className="space-y-2 text-xs text-[#ccc3d8]">
              <li>
                <button
                  onClick={() => onSelectScreen('developer')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  مستندات توسعه‌دهندگان
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('business')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  تعرفه‌ها و اشتراک‌ها
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('enterprise')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  درباره تیم و فناوری
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen('enterprise')}
                  className="hover:text-[#d2bbff] transition-colors cursor-pointer"
                >
                  پشتیبانی فنی و تماس
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#e0e1f2]">خبرنامه تخصصی هوش مصنوعی</h3>
            <p className="text-xs text-[#ccc3d8] leading-relaxed">
              دریافت آخرین به‌روزرسانی‌های مدل‌ها، دستاوردهای پژوهشی و قابلیت‌های جدید پلتفرم.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                ایمیل شما در فهرست اعضا با موفقیت ثبت شد.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  required
                  type="email"
                  dir="ltr"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.ir"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#181b27] border border-[#313441] text-xs text-white placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#272936] hover:bg-[#313441] text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  عضویت در خبرنامه
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#313441]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#958da1]">
          <p>© ۱۴۰۳ کلیه حقوق مادی و معنوی برای هوش مصنوعی آوا محفوظ است.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#e0e1f2] cursor-pointer">حریم خصوصی</span>
            <span className="hover:text-[#e0e1f2] cursor-pointer">شرایط خدمات</span>
            <span className="hover:text-[#e0e1f2] cursor-pointer">امنیت داده</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
