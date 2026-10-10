import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl p-6 text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#313441] mb-6 pt-2">
          <button
            onClick={() => setMode('login')}
            className={`pb-3 px-4 font-semibold text-sm transition-colors cursor-pointer ${
              mode === 'login'
                ? 'border-b-2 border-[#7c3aed] text-[#d2bbff]'
                : 'text-[#ccc3d8] hover:text-white'
            }`}
          >
            ورود به سامانه
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`pb-3 px-4 font-semibold text-sm transition-colors cursor-pointer ${
              mode === 'signup'
                ? 'border-b-2 border-[#7c3aed] text-[#d2bbff]'
                : 'text-[#ccc3d8] hover:text-white'
            }`}
          >
            ایجاد حساب جدید
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">check</span>
            </div>
            <h4 className="font-semibold text-white">
              {mode === 'login' ? 'با موفقیت وارد شدید' : 'حساب شما ایجاد شد'}
            </h4>
            <p className="text-xs text-[#ccc3d8]">در حال انتقال به کنسول کاربری آوا...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">نام و نام‌خانوادگی</label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="مثال: کیوان رضایی"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">ایمیل سازمانی یا کاری</label>
              <input
                required
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ccc3d8] mb-1.5">رمز عبور</label>
              <input
                required
                type="password"
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-white text-sm placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#732ee4] text-white text-sm font-medium transition-all shadow-[0_0_16px_rgba(124,58,237,0.3)] cursor-pointer"
              >
                {mode === 'login' ? 'ورود به داشبورد' : 'ثبت نام و دریافت توکن هدیه'}
              </button>
            </div>

            <div className="text-center pt-2 text-xs text-[#958da1]">
              رمزنگاری سرتاسری مطابق استاندارد امنیت سایبری ملی
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
