import React, { useState } from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onSelectScreen,
  onOpenAuth,
  onOpenDemo
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#10131e]/90 backdrop-blur-xl border-b border-[#313441]/40">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onSelectScreen('enterprise')}
              className="flex items-center gap-3 group text-right focus:outline-none cursor-pointer"
            >
              <div className="relative flex items-center justify-center p-1 rounded-lg bg-[#272936] shadow-[0_0_16px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-105">
                <img
                  alt="لوگوی هوش مصنوعی آوا"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Woy8IODJNq3WhM0CLQK3mSxmfvXLjLQ7-WwnqizqrrRjhKY7wTfG8qYGrcloLVmFsVoRU7fURiCL8yzuxwBhKJZ9oNxZByXxxco-p3q2TOWZmnkD_0mdmDwBTPr-44G7NX7Fh0BAK0Ot8ZImCDyIv4Rg4LYAqqbnbmjWnO1WwMPef_e0Na89FFFrvGnX55JvPg49B_Wsx_nySrywkEhqc_BsVDfpzRPjGEvqyT_iS91H5A8o0Mdr1a3zc"
                />
              </div>
              <span className="font-semibold text-lg text-[#e0e1f2] group-hover:text-[#d2bbff] transition-colors tracking-tight">
                هوش مصنوعی آوا
              </span>
            </button>

            {/* Screen View Mode Switcher in Desktop Header */}
            <div className="hidden xl:flex items-center gap-1 p-1 bg-[#181b27] border border-[#313441]/60 rounded-xl text-xs font-medium">
              <button
                onClick={() => onSelectScreen('enterprise')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentScreen === 'enterprise'
                    ? 'bg-[#7c3aed] text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]'
                    : 'text-[#ccc3d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                <span>راهکارهای سازمانی</span>
              </button>
              <button
                onClick={() => onSelectScreen('developer')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentScreen === 'developer'
                    ? 'bg-[#7c3aed] text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]'
                    : 'text-[#ccc3d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                <span>زیرساخت API</span>
              </button>
              <button
                onClick={() => onSelectScreen('business')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentScreen === 'business'
                    ? 'bg-[#7c3aed] text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]'
                    : 'text-[#ccc3d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">play_circle</span>
                <span>کنسول و دمو</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <button
              onClick={() => onSelectScreen('enterprise')}
              className={`hover:text-[#e0e1f2] transition-colors cursor-pointer ${
                currentScreen === 'enterprise' ? 'text-[#d2bbff] font-semibold' : 'text-[#ccc3d8]'
              }`}
            >
              سازمانی
            </button>
            <button
              onClick={() => onSelectScreen('developer')}
              className={`hover:text-[#e0e1f2] transition-colors cursor-pointer ${
                currentScreen === 'developer' ? 'text-[#d2bbff] font-semibold' : 'text-[#ccc3d8]'
              }`}
            >
              مدل‌ها و API
            </button>
            <button
              onClick={() => onSelectScreen('business')}
              className={`hover:text-[#e0e1f2] transition-colors cursor-pointer ${
                currentScreen === 'business' ? 'text-[#d2bbff] font-semibold' : 'text-[#ccc3d8]'
              }`}
            >
              پلی‌گراند زنده
            </button>
            <button
              onClick={() => {
                onSelectScreen('business');
                setTimeout(() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-[#ccc3d8] hover:text-[#e0e1f2] transition-colors cursor-pointer"
            >
              تعرفه‌ها
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('login')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm text-[#ccc3d8] hover:text-[#e0e1f2] hover:bg-[#272936] transition-all cursor-pointer"
            >
              ورود به حساب
            </button>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#7c3aed] text-[#ede0ff] text-sm font-medium shadow-[0_0_16px_rgba(124,58,237,0.3)] hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] hover:bg-[#732ee4] transition-all cursor-pointer"
            >
              <span>درخواست دمو</span>
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#ccc3d8] hover:text-white hover:bg-[#272936] rounded-lg transition-colors cursor-pointer"
              aria-label="باز کردن منو"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 bg-[#181b27] border-b border-[#313441] space-y-2">
            <div className="grid grid-cols-3 gap-1 p-1 bg-[#10131e] rounded-lg text-center text-xs">
              <button
                onClick={() => {
                  onSelectScreen('enterprise');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 rounded-md ${
                  currentScreen === 'enterprise' ? 'bg-[#7c3aed] text-white font-medium' : 'text-[#ccc3d8]'
                }`}
              >
                سازمانی
              </button>
              <button
                onClick={() => {
                  onSelectScreen('developer');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 rounded-md ${
                  currentScreen === 'developer' ? 'bg-[#7c3aed] text-white font-medium' : 'text-[#ccc3d8]'
                }`}
              >
                توسعه‌دهندگان
              </button>
              <button
                onClick={() => {
                  onSelectScreen('business');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 rounded-md ${
                  currentScreen === 'business' ? 'bg-[#7c3aed] text-white font-medium' : 'text-[#ccc3d8]'
                }`}
              >
                کنسول دمو
              </button>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenAuth('login');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-sm text-[#ccc3d8] bg-[#272936] rounded-lg"
              >
                ورود به حساب کاربری
              </button>
              <button
                onClick={() => {
                  onOpenAuth('signup');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-sm text-white bg-[#7c3aed] rounded-lg font-medium"
              >
                شروع رایگان
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Screen Mode Indicator / Floating Pill */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 p-1.5 bg-[#181b27]/90 backdrop-blur-md border border-[#313441] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <span className="text-[11px] text-[#958da1] pr-2.5 pl-1 font-mono">صفحه فعال:</span>
        <button
          onClick={() => onSelectScreen('enterprise')}
          className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
            currentScreen === 'enterprise'
              ? 'bg-[#7c3aed] text-white font-medium shadow-sm'
              : 'text-[#ccc3d8] hover:text-white'
          }`}
        >
          ۱. سازمانی
        </button>
        <button
          onClick={() => onSelectScreen('developer')}
          className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
            currentScreen === 'developer'
              ? 'bg-[#7c3aed] text-white font-medium shadow-sm'
              : 'text-[#ccc3d8] hover:text-white'
          }`}
        >
          ۲. توسعه‌دهندگان
        </button>
        <button
          onClick={() => onSelectScreen('business')}
          className={`px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${
            currentScreen === 'business'
              ? 'bg-[#7c3aed] text-white font-medium shadow-sm'
              : 'text-[#ccc3d8] hover:text-white'
          }`}
        >
          ۳. کنسول کسب‌وکار
        </button>
      </div>
    </>
  );
};
