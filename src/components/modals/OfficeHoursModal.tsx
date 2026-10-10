import React, { useState } from 'react';

interface OfficeHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficeHoursModal: React.FC<OfficeHoursModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [registered, setRegistered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => {
      onClose();
      setRegistered(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl p-6 text-right space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#313441]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6]">video_camera_front</span>
            <h3 className="font-semibold text-lg text-white">ثبت‌نام در وبینار فنی Office Hours</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {registered ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">event_available</span>
            </div>
            <h4 className="font-semibold text-white">دعوت‌نامه گوگل میت برای شما ارسال شد</h4>
            <p className="text-xs text-[#ccc3d8]">لینک جلسه آنلاین پنجشنبه ساعت ۱۷ به ایمیل شما فرستاده شد.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-[#ccc3d8] leading-relaxed">
              رویداد هفتگی آنلاین با حضور مهندسان ارشد زیرساخت آوا: موضوع این هفته «بهینه‌سازی کانتکست RoPE و استقرار مدل‌های ۷۰B با حداقل حافظه VRAM».
            </p>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">نام و نام خانوادگی</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: آرش علیزاده"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">ایمیل کاری</label>
              <input
                required
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arash@company.ir"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">پرسش یا چالش فنی مد نظر شما (اختیاری)</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="مثال: نحوه کوانتیزاسیون مدل و کاهش تاخیر TTFT..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#732ee4] text-white text-sm font-medium transition-all shadow-[0_0_16px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                رزرو صندلی و دریافت لینک ورود
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
