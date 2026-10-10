import React, { useState } from 'react';

interface RoiReportModalProps {
  isOpen: boolean;
  staff: number;
  tickets: number;
  savedHours: number;
  savedBillionTomans: string;
  onClose: () => void;
}

export const RoiReportModal: React.FC<RoiReportModalProps> = ({
  isOpen,
  staff,
  tickets,
  savedHours,
  savedBillionTomans,
  onClose
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl p-6 text-right flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#313441]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6]">picture_as_pdf</span>
            <h3 className="font-semibold text-lg text-white">گزارش تفصیلی ارزیابی بازگشت سرمایه (ROI Executive Report)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Report Content */}
        <div className="py-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-[#10131e] border border-[#313441] flex justify-between items-center text-xs">
            <div>
              <span className="text-[#958da1]">کد ارزیابی: </span>
              <span className="font-mono text-[#4cd7f6]">AVA-ROI-2026-X89</span>
            </div>
            <div>
              <span className="text-[#958da1]">تاریخ تولید گزارش: </span>
              <span className="text-white">۱۴۰۳/۰۸/۲۴</span>
            </div>
            <div>
              <span className="text-[#958da1]">سطح محرمانگی: </span>
              <span className="text-emerald-400">سازمانی اختصاصی</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">خلاصه پارامترهای ورودی سازمان:</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#1c1f2b] border border-[#313441]">
                <div className="text-[#958da1]">تعداد پرسنل درگیر در کارهای تکراری:</div>
                <div className="text-base font-bold text-white mt-1">{staff.toLocaleString('fa-IR')} نفر</div>
              </div>
              <div className="p-3 rounded-lg bg-[#1c1f2b] border border-[#313441]">
                <div className="text-[#958da1]">حجم مکاتبات و تیکت‌های روزانه:</div>
                <div className="text-base font-bold text-white mt-1">{tickets.toLocaleString('fa-IR')} فقره</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">نتایج پیش‌بینی‌شده مدل اقتصادی هوش مصنوعی آوا:</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/40 text-right">
                <span className="text-xs text-[#d2bbff]">کل ساعات کار آزادشده در سال:</span>
                <div className="text-2xl font-bold text-[#4cd7f6] mt-1 font-mono">
                  {savedHours.toLocaleString('fa-IR')} ساعت
                </div>
                <p className="text-[11px] text-[#ccc3d8] mt-1">معادل ظرفیت کاری {Math.round(staff * 0.45)} نیروی تمام‌وقت</p>
              </div>
              <div className="p-4 rounded-xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 text-right">
                <span className="text-xs text-[#acedff]">کاهش خالص هزینه‌های جاری:</span>
                <div className="text-2xl font-bold text-[#d2bbff] mt-1 font-mono">
                  {savedBillionTomans} میلیارد تومان
                </div>
                <p className="text-[11px] text-[#ccc3d8] mt-1">دوره بازگشت سرمایه سرمایه‌گذاری: ۳.۲ ماه</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c1f2b] text-xs text-[#ccc3d8] space-y-1.5 leading-relaxed">
            <div className="font-semibold text-white">ملاحظات فنی و امنیتی استقرار:</div>
            <p>• استقرار کلاستر در محل اتاق سرور (On-Premise) بدون وابستگی به شبکه خارجی طبق مصوبه افتا.</p>
            <p>• یکپارچه‌سازی از طریق پروتکل‌های استاندارد REST/gRPC با سامانه‌های موجود بدون نیاز به تغییر دیتابیس.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#313441] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-[#ccc3d8] hover:text-white cursor-pointer"
          >
            بستن پنجره
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#732ee4] text-white text-xs font-medium transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-sm">
              {downloaded ? 'check' : 'download'}
            </span>
            <span>{downloaded ? 'فایل PDF ذخیره گردید' : 'دانلود نسخه رسمی PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
