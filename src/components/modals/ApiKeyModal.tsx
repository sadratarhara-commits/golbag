import React, { useState } from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('ava_live_sec_7f9b8a2e1d0c45689ef0');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl p-6 text-right space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#313441]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6]">key</span>
            <h3 className="font-semibold text-lg text-white">کلید API تست رایگان شما</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm text-[#ccc3d8] leading-relaxed">
          کلید زیر برای دسترسی به محیط آزمایشی با اعتباری معادل ۱٬۰۰۰٬۰۰۰ توکن پردازش رایگان فعال گردیده است. این کلید را در متغیرهای محیطی خود ذخیره کنید.
        </p>

        <div className="p-3 rounded-xl bg-[#0b0e19] border border-[#313441] flex items-center justify-between gap-3" dir="ltr">
          <code className="text-xs text-[#4cd7f6] font-mono break-all select-all">{apiKey}</code>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-[#272936] hover:bg-[#313441] text-white text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'کپی شد' : 'کپی'}</span>
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-[#1c1f2b] text-xs text-[#958da1] space-y-1">
          <div className="text-white font-medium">نحوه استفاده در کلاینت پایتون:</div>
          <code className="block text-[#d2bbff] font-mono pt-1 text-left" dir="ltr">
            export AVA_API_KEY=&quot;{apiKey}&quot;
          </code>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#7c3aed] text-white text-xs font-medium hover:bg-[#732ee4] transition-colors cursor-pointer"
          >
            متوجه شدم و ذخیره کردم
          </button>
        </div>
      </div>
    </div>
  );
};
