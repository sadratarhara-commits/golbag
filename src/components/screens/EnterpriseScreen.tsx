import React, { useState } from 'react';
import { industriesData } from '../../data/mockData';

interface EnterpriseScreenProps {
  onOpenSandbox: () => void;
  onOpenRoiModal: (staff: number, tickets: number, hours: number, money: string) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const EnterpriseScreen: React.FC<EnterpriseScreenProps> = ({
  onOpenSandbox,
  onOpenRoiModal,
}) => {
  // Industry Tabs State
  const [activeIndustryId, setActiveIndustryId] = useState('fintech');
  const activeIndustry = industriesData.find((i) => i.id === activeIndustryId) || industriesData[0];

  // ROI Calculator State
  const [staffCount, setStaffCount] = useState(45);
  const [ticketsCount, setTicketsCount] = useState(1200);

  // Calculations:
  // Each staff member saves ~960 hours per year
  const savedHours = Math.round(staffCount * 960);
  // Cost savings formula in Billion Tomans:
  const savedBillionTomans = ((staffCount * 105000000 + ticketsCount * 400000) / 10000000000).toFixed(1);

  // Security audit simulation state
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditLogCount, setAuditLogCount] = useState(4);

  // Demo Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    orgName: '',
    orgSize: '200-1000',
    needs: '',
    ndaAgreement: true
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAuditRecheck = () => {
    setAuditRunning(true);
    setAuditLogCount(1);
    setTimeout(() => setAuditLogCount(2), 400);
    setTimeout(() => setAuditLogCount(3), 800);
    setTimeout(() => {
      setAuditLogCount(4);
      setAuditRunning(false);
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full text-right" dir="rtl">
      {/* Ambient Top Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#7c3aed]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-[#03b5d3]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 flex flex-col items-center text-center">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f2b] border border-[#313441] text-[#4cd7f6] text-xs shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span>زیرساخت اختصاصی سازمانی (On-Premise & Hybrid Cloud)</span>
            <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">verified_user</span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f2] tracking-tight leading-tight lg:leading-[60px]">
            تحول دیجیتال و اتوماسیون{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#4cd7f6] to-[#d2bbff]">
              هوشمند سازمان شما
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mt-4 text-[#ccc3d8] text-base lg:text-lg leading-relaxed">
            پلتفرم جامع هوش مصنوعی سازمانی با حفظ کامل حریم خصوصی داده‌ها، یکپارچه‌سازی با سامانه‌های داخلی و گزارش‌گیری پیشرفته در مقیاس ملی.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#demo-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7c3aed] text-white text-sm font-medium shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:bg-[#732ee4] transition-all group cursor-pointer"
            >
              <span>درخواست جلسه مشاوره سازمانی</span>
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
            </a>
            <button
              onClick={() => {
                document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#272936] hover:bg-[#313441] text-[#e0e1f2] text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">calculate</span>
              <span>محاسبه‌گر صرفه‌جویی هزینه و زمان (ROI)</span>
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="w-full mt-20 pt-6 flex flex-col items-center">
            <span className="text-xs text-[#958da1] uppercase tracking-wider mb-6">
              مورد اعتماد ارگان‌ها، هلدینگ‌ها و رهبران فناوری کشور
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-75">
              <div className="flex items-center gap-2 text-sm text-[#ccc3d8] font-semibold">
                <span className="material-symbols-outlined text-[#4cd7f6]">account_balance</span>
                <span>بانک سپهر</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ccc3d8] font-semibold">
                <span className="material-symbols-outlined text-[#d2bbff]">health_and_safety</span>
                <span>درمان‌گستر نوین</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ccc3d8] font-semibold">
                <span className="material-symbols-outlined text-[#4cd7f6]">shopping_bag</span>
                <span>پارس کالا</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ccc3d8] font-semibold">
                <span className="material-symbols-outlined text-[#d2bbff]">cell_tower</span>
                <span>تلکام ارتباط هوشمند</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ccc3d8] font-semibold">
                <span className="material-symbols-outlined text-[#4cd7f6]">assured_workload</span>
                <span>بورس اوراق بهادار</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 1: INDUSTRIES COVERED (TABS) */}
      <section className="w-full py-20 bg-[#0b0e19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs text-[#4cd7f6] uppercase font-semibold">تطبیق تخصصی مدل‌ها</span>
              <h2 className="mt-1 text-2xl lg:text-3xl font-bold text-[#e0e1f2]">صنایع تحت پوشش پلتفرم</h2>
            </div>
            <p className="max-w-md text-[#ccc3d8] text-sm leading-relaxed">
              مدل‌های زبانی و پردازشی آموزش‌دیده بر پایگاه‌های تخصصی هر صنعت برای بازدهی حداکثری و دقت محاسباتی بی‌نقص.
            </p>
          </div>

          {/* Industry Tab Buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#1c1f2b] rounded-xl w-fit mb-8 border border-[#313441]/60">
            {industriesData.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`px-5 py-2 rounded-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeIndustryId === ind.id
                    ? 'bg-[#7c3aed] text-white shadow-md font-medium'
                    : 'text-[#ccc3d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{ind.icon}</span>
                <span>{ind.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Contents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Content Card */}
            <div className="lg:col-span-7 bg-[#181b27] border border-[#313441] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1f2b] text-[#4cd7f6] text-xs">
                  <span>{activeIndustry.badge}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#e0e1f2]">{activeIndustry.title}</h3>
                <p className="text-[#ccc3d8] text-sm leading-relaxed">{activeIndustry.desc}</p>

                {/* 2 Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-2">
                    <span className="material-symbols-outlined text-[#4cd7f6]">security</span>
                    <h4 className="font-semibold text-sm text-[#e0e1f2]">{activeIndustry.f1_title}</h4>
                    <p className="text-[#ccc3d8] text-xs leading-relaxed">{activeIndustry.f1_desc}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-2">
                    <span className="material-symbols-outlined text-[#d2bbff]">receipt_long</span>
                    <h4 className="font-semibold text-sm text-[#e0e1f2]">{activeIndustry.f2_title}</h4>
                    <p className="text-[#ccc3d8] text-xs leading-relaxed">{activeIndustry.f2_desc}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#313441]/60 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#4cd7f6]">{activeIndustry.metric}</span>
                <a
                  href="#demo-form"
                  className="inline-flex items-center gap-1 text-xs text-[#d2bbff] hover:text-white transition-colors"
                >
                  <span>دریافت وایت‌پیپر صنعتی</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card with Telemetry */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#1c1f2b] border border-[#313441] flex flex-col justify-end p-6 min-h-[380px] shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60"
                style={{ backgroundImage: `url('${activeIndustry.bgImage}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19] via-[#0b0e19]/60 to-transparent"></div>

              <div className="relative z-10 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-[#4cd7f6]">
                  <span>TELEMETRY_STREAM // LIVE</span>
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
                </div>
                <div className="p-4 rounded-xl bg-[#181b27]/90 backdrop-blur-md border border-[#313441] space-y-2">
                  <div className="flex justify-between items-center text-xs text-[#e0e1f2]">
                    <span>توان عملیاتی در اوج بار</span>
                    <span className="text-[#4cd7f6] font-mono font-bold">{activeIndustry.tps}</span>
                  </div>
                  <div className="w-full bg-[#313441] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4cd7f6] h-full w-[88%] transition-all duration-1000"></div>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">یکپارچه با کربنکینگ بدون وقفه در سرویس‌دهی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE AUTOMATION FLOWCHART */}
      <section className="w-full py-24 bg-[#10131e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs text-[#d2bbff] uppercase font-semibold">معماری خط لوله پردازشی</span>
            <h2 className="mt-1 text-2xl lg:text-3xl font-bold text-[#e0e1f2]">
              فلوچارت تعاملی اتوماسیون سازمانی
            </h2>
            <p className="mt-2 text-[#ccc3d8] text-sm leading-relaxed">
              مشاهده کنید چگونه اسناد و پیام‌های پراکنده به تصمیمات عملیاتی ساختاریافته در نرم‌افزارهای داخلی بدل می‌شوند.
            </p>
          </div>

          {/* 3-Stage Pipeline Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Stage 1: Input */}
            <div className="lg:col-span-3 bg-[#181b27] p-5 rounded-2xl border border-[#313441] shadow-lg relative group hover:border-[#4cd7f6]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1f2b] flex items-center justify-center text-[#4cd7f6]">
                  <span className="material-symbols-outlined">folder_open</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#958da1]">مرحله ۱: ورودی</span>
                  <h4 className="font-semibold text-sm text-[#e0e1f2]">داده‌های ناهمگون</h4>
                </div>
              </div>
              <ul className="space-y-2 text-[#ccc3d8] text-xs leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                  اسناد اسکن‌شده و PDF رسمی
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                  ایمیل‌ها، تیکت‌ها و قراردادها
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                  پیام‌های صوتی مرکز تماس (VoIP)
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-[#313441]/60 flex justify-between items-center text-xs text-[#958da1] font-mono">
                <span>انتقال امن TLS 1.3</span>
                <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">lock</span>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="flex flex-col items-center gap-1 text-[#d2bbff]">
                <span className="material-symbols-outlined text-2xl rotate-180">double_arrow</span>
                <span className="text-[11px] font-mono">ZeroCopy</span>
              </div>
            </div>

            {/* Stage 2: Ava Core Engine */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#272936] to-[#1c1f2b] p-6 rounded-2xl border border-[#7c3aed]/50 shadow-[0_0_30px_rgba(124,58,237,0.2)] relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded bg-[#7c3aed] text-white text-[11px] font-medium">
                هسته پردازش Ava LLM
              </div>
              <div className="flex items-center gap-3 mb-4 pt-2">
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center text-[#d2bbff]">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#d2bbff]">مرحله ۲: تحلیل معنایی عمیق</span>
                  <h4 className="font-semibold text-sm text-[#e0e1f2]">موتور عصبی آوا</h4>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 px-3 rounded-lg bg-[#181b27] text-xs text-[#e0e1f2] flex items-center justify-between">
                  <span>درک نیت و استخراج کلیدواژگان فارسی</span>
                  <span className="text-[#4cd7f6] font-mono font-bold">99.4%</span>
                </div>
                <div className="p-2.5 px-3 rounded-lg bg-[#181b27] text-xs text-[#e0e1f2] flex items-center justify-between">
                  <span>انطباق با قوانین سازمانی و پالایش</span>
                  <span className="text-[#4cd7f6] font-mono font-bold">&lt;12ms</span>
                </div>
                <div className="p-2.5 px-3 rounded-lg bg-[#181b27] text-xs text-[#e0e1f2] flex items-center justify-between">
                  <span>تولید تصمیم و دستورالعمل خروجی</span>
                  <span className="text-[#4cd7f6] font-mono font-bold">تایید خودکار</span>
                </div>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="flex flex-col items-center gap-1 text-[#4cd7f6]">
                <span className="material-symbols-outlined text-2xl rotate-180">double_arrow</span>
                <span className="text-[11px] font-mono">REST/gRPC</span>
              </div>
            </div>

            {/* Stage 3: CRM / ERP Integration */}
            <div className="lg:col-span-3 bg-[#181b27] p-5 rounded-2xl border border-[#313441] shadow-lg relative group hover:border-[#7c3aed]/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1c1f2b] flex items-center justify-center text-[#d2bbff]">
                  <span className="material-symbols-outlined">sync_alt</span>
                </div>
                <div>
                  <span className="text-[11px] text-[#958da1]">مرحله ۳: اقدام</span>
                  <h4 className="font-semibold text-sm text-[#e0e1f2]">سامانه‌های CRM و ERP</h4>
                </div>
              </div>
              <ul className="space-y-2 text-[#ccc3d8] text-xs leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  ثبت پیش‌فاکتور در SAP / همکاران سیستم
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  ارجاع خودکار تیکت با اولویت بحرانی
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  صدور مجوز تراکنش بدون دخالت کارشناس
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-[#313441]/60 flex justify-between items-center text-xs text-[#958da1] font-mono">
                <span>تکمیل چرخه در ۳.۲ ثانیه</span>
                <span className="material-symbols-outlined text-[16px] text-[#d2bbff]">done_all</span>
              </div>
            </div>
          </div>

          {/* Flow Telemetry Action Strip */}
          <div className="mt-8 p-5 rounded-2xl bg-[#0b0e19] border border-[#313441] flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-[#4cd7f6] animate-ping"></div>
              <div>
                <h5 className="font-semibold text-sm text-[#e0e1f2]">تست زنده خط پردازش در محیط شبیه‌ساز</h5>
                <p className="text-xs text-[#ccc3d8] mt-0.5">
                  امکان اتصال به Sandbox اختصاصی سازمان شما با متادیتای آزمایشی بدون ریسک امنیتی.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenSandbox}
              className="px-5 py-2.5 rounded-lg bg-[#272936] hover:bg-[#313441] text-[#e0e1f2] text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">terminal</span>
              <span>دسترسی به محیط Sandbox</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: TANGIBLE ENTERPRISE RESULTS & ROI CALCULATOR */}
      <section className="w-full py-24 bg-[#0b0e19]" id="roi-calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-2xl bg-[#181b27] border border-[#313441] shadow-lg flex flex-col justify-between space-y-4 hover:border-[#4cd7f6]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1c1f2b] flex items-center justify-center text-[#4cd7f6]">
                <span className="material-symbols-outlined text-3xl">timer</span>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-[#4cd7f6] tracking-tight">۶۵٪</div>
                <div className="font-semibold text-base text-[#e0e1f2] mt-2">کاهش زمان پاسخ‌دهی به مشتریان</div>
                <p className="text-xs text-[#ccc3d8] leading-relaxed mt-1">
                  پاسخگویی آنی و چندمرحله‌ای به ارباب‌رجوع در تمام ساعات شبانه‌روز با حفظ لحن رسمی و ضوابط سازمانی.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#181b27] border border-[#313441] shadow-lg flex flex-col justify-between space-y-4 hover:border-[#7c3aed]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1c1f2b] flex items-center justify-center text-[#d2bbff]">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-[#d2bbff] tracking-tight">۴ برابر</div>
                <div className="font-semibold text-base text-[#e0e1f2] mt-2">افزایش بهره‌وری نیروی انسانی</div>
                <p className="text-xs text-[#ccc3d8] leading-relaxed mt-1">
                  حذف کارهای تکراری مانند بررسی پرونده‌ها، ورود دستی داده‌ها و ارجاع نامه‌های اتوماسیون اداری.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#181b27] border border-[#313441] shadow-lg flex flex-col justify-between space-y-4 hover:border-[#4cd7f6]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#1c1f2b] flex items-center justify-center text-[#4cd7f6]">
                <span className="material-symbols-outlined text-3xl">domain</span>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">۳۵۰+</div>
                <div className="font-semibold text-base text-[#e0e1f2] mt-2">سازمان دولتی و خصوصی فعال</div>
                <p className="text-xs text-[#ccc3d8] leading-relaxed mt-1">
                  به‌کارگیری موفق در زیرساخت‌های حیاتی با انطباق کامل بر مقررات پدافند غیرعامل و افتا.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive ROI Calculator Widget */}
          <div className="rounded-2xl bg-[#1c1f2b] border border-[#313441] p-6 lg:p-8 shadow-2xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs text-[#4cd7f6] font-semibold uppercase">ابزار برآورد بازگشت سرمایه</span>
              <h3 className="text-xl lg:text-2xl font-bold text-[#e0e1f2] mt-1">
                محاسبه‌گر صرفه‌جویی هزینه و زمان سازمان شما
              </h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed mt-1">
                تعداد کارشناسان و حجم فرآیندهای روزانه را تنظیم کنید تا تخمین صرفه‌جویی سالانه را بلافاصله مشاهده کنید.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders on Left */}
              <div className="lg:col-span-7 space-y-6">
                {/* Staff Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#ccc3d8]">تعداد پرسنل درگیر در فرآیندهای تکراری:</span>
                    <span className="text-[#4cd7f6] font-bold font-mono text-base">{staffCount.toLocaleString('fa-IR')} نفر</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    value={staffCount}
                    onChange={(e) => setStaffCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#313441] rounded-lg appearance-none cursor-pointer accent-[#4cd7f6]"
                  />
                  <div className="flex justify-between text-[11px] text-[#958da1] font-mono">
                    <span>۱۰ نفر</span>
                    <span>۱۵۰ نفر</span>
                    <span>۳۰۰ نفر</span>
                  </div>
                </div>

                {/* Tickets Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#ccc3d8]">میانگین اسناد و تیکت‌های روزانه:</span>
                    <span className="text-[#d2bbff] font-bold font-mono text-base">{ticketsCount.toLocaleString('fa-IR')} فقره</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={ticketsCount}
                    onChange={(e) => setTicketsCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#313441] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]"
                  />
                  <div className="flex justify-between text-[11px] text-[#958da1] font-mono">
                    <span>۲۰۰ فقره</span>
                    <span>۵,۰۰۰ فقره</span>
                    <span>۱۰,۰۰۰ فقره</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs on Right */}
              <div className="lg:col-span-5 bg-[#0b0e19] border border-[#313441] p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-inner">
                <div className="space-y-3">
                  <span className="text-xs text-[#958da1]">تخمین صرفه‌جویی سالانه سازمان شما</span>
                  <div className="p-4 rounded-xl bg-[#181b27] border border-[#313441]/60">
                    <span className="text-xs text-[#ccc3d8]">ساعات کار صرفه‌جویی شده در سال:</span>
                    <div className="text-2xl font-bold text-[#4cd7f6] mt-1 font-mono">
                      {savedHours.toLocaleString('fa-IR')} ساعت
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#181b27] border border-[#313441]/60">
                    <span className="text-xs text-[#ccc3d8]">کاهش هزینه‌های عملیاتی سالانه:</span>
                    <div className="text-2xl font-bold text-[#d2bbff] mt-1 font-mono">
                      {savedBillionTomans} میلیارد تومان
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenRoiModal(staffCount, ticketsCount, savedHours, savedBillionTomans)}
                  className="w-full py-3 text-center rounded-lg bg-[#7c3aed] text-white text-xs font-medium hover:bg-[#732ee4] transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                  <span>دریافت گزارش تفصیلی بازگشت سرمایه (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MILITARY-GRADE DATA SECURITY */}
      <section className="w-full py-24 bg-[#10131e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Security Narrative Left */}
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1f2b] border border-[#313441] text-[#d2bbff] text-xs">
                <span className="material-symbols-outlined text-[16px]">shield</span>
                <span>انطباق کامل با استاندارد افتا و پدافند سایبری</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2] leading-tight">
                امنیت در سطح نظامی؛ داده‌های شما هرگز از مرز سازمان خارج نمی‌شوند
              </h2>
              <p className="text-[#ccc3d8] text-sm lg:text-base leading-relaxed">
                ما زیرساخت را طوری طراحی کرده‌ایم که کنترل ۱۰۰٪ کلیدهای رمزنگاری و خوشه‌های پردازشی در اتاق سرور اختصاصی یا ابر خصوصی سازمان شما باقی بماند.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#181b27] border border-[#313441]/60">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-2xl mt-0.5">apartment</span>
                  <div>
                    <h4 className="font-semibold text-sm text-[#e0e1f2]">استقرار کاملاً محلی (On-Premise Full Air-Gap)</h4>
                    <p className="text-xs text-[#ccc3d8] mt-1 leading-relaxed">
                      اجرای مدل‌ها حتی بدون نیاز به اتصال اینترنت خارجی در شبکه بسته اینترانت سازمان.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#181b27] border border-[#313441]/60">
                  <span className="material-symbols-outlined text-[#d2bbff] text-2xl mt-0.5">key</span>
                  <div>
                    <h4 className="font-semibold text-sm text-[#e0e1f2]">رمزنگاری سرتاسری End-to-End و HSM</h4>
                    <p className="text-xs text-[#ccc3d8] mt-1 leading-relaxed">
                      استفاده از ماژول‌های امنیتی سخت‌افزاری و الگوریتم AES-256 در حالت سکون و حین تبادل داده.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#181b27] border border-[#313441]/60">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-2xl mt-0.5">policy</span>
                  <div>
                    <h4 className="font-semibold text-sm text-[#e0e1f2]">ردیابی و لاگ ممیزی کامل (Audit Trails & RBAC)</h4>
                    <p className="text-xs text-[#ccc3d8] mt-1 leading-relaxed">
                      ثبت غیرقابل تغییر تمامی استعلام‌ها و تصمیمات مدل با دسترسی دقیق مبتنی بر نقش سازمانی.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Visual Right */}
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden bg-[#181b27] border border-[#313441] p-6 lg:p-8 shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN_8z5u97WPZyGKL_vI5rYGq4CAorenaKMKcTdcR_XzltYc2QMg8cmwXJ1jx5DH-e9pn5ch-AnMJjMGjemMOJmVZfXwM8N8rpzU-uksm4voNbHNF6FBQMS_iu3GNTNjRS5kGYXfiQRXh8NHQF3e-UQd--Ek-USN_iRVXuy4ttPdHY_vmvpxgxmcKhtmg5qsphvTz_ANIfDhuH6ZjO3oOl5gwauJLiwqfIsRlPEVsYzBLnUYUQAbaW5')`
                  }}
                ></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#313441]/60">
                    <span className="font-mono text-xs text-[#4cd7f6] font-bold">SECURITY_VERIFICATION // PASS</span>
                    <button
                      onClick={handleAuditRecheck}
                      disabled={auditRunning}
                      className="px-2.5 py-1 rounded bg-[#272936] hover:bg-[#313441] text-[11px] text-[#ccc3d8] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className={`material-symbols-outlined text-xs ${auditRunning ? 'animate-spin' : ''}`}>
                        refresh
                      </span>
                      <span>بررسی مجدد</span>
                    </button>
                  </div>

                  {/* Terminal verification preview */}
                  <div className="p-4 rounded-xl bg-[#0b0e19] font-mono text-xs space-y-2 text-[#ccc3d8] shadow-inner text-left" dir="ltr">
                    <div className="text-[#4cd7f6]">$ ava-sec audit --mode enterprise-airgap</div>
                    {auditLogCount >= 1 && <div>[✓] Checking hardware HSM signature... VALID</div>}
                    {auditLogCount >= 2 && <div>[✓] Local weights isolation verify... ISOLATED</div>}
                    {auditLogCount >= 3 && <div>[✓] Zero external network packets detected... CONFIRMED</div>}
                    {auditLogCount >= 4 && (
                      <>
                        <div>[✓] Role-Based Access Control matrix synced... OK</div>
                        <div className="text-[#d2bbff] font-semibold mt-2">&gt;&gt; STATUS: SOVEREIGN OPERATIONAL MODE ACTIVE</div>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#272936]/80 text-center border border-[#313441]">
                      <span className="font-bold text-sm text-white">ISO 27001</span>
                      <p className="text-[11px] text-[#958da1] mt-0.5">دارای گواهینامه بین‌المللی</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#272936]/80 text-center border border-[#313441]">
                      <span className="font-bold text-sm text-white">افتا رتبه ۱</span>
                      <p className="text-[11px] text-[#958da1] mt-0.5">انطباق زیرساخت حیاتی</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE DEMO REQUEST FORM */}
      <section className="w-full py-24 bg-[#0b0e19]" id="demo-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs text-[#4cd7f6] font-semibold uppercase">همکاری استراتژیک</span>
            <h2 className="mt-1 text-2xl lg:text-3xl font-bold text-[#e0e1f2]">
              فرم درخواست دمو و جلسه اختصاصی سازمانی
            </h2>
            <p className="mt-2 text-[#ccc3d8] text-sm max-w-lg mx-auto leading-relaxed">
              تیم معماران هوش مصنوعی آوا در کمتر از ۲۴ ساعت کاری با مدیران ارشد فناوری سازمان شما تماس خواهند گرفت.
            </p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-[#181b27] border border-[#313441] shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-white">درخواست سازمانی شما با موفقیت ثبت شد</h3>
                <p className="text-sm text-[#ccc3d8] max-w-md mx-auto leading-relaxed">
                  کد پیگیری سازمانی:{' '}
                  <span className="font-mono text-[#4cd7f6] font-bold" dir="ltr">
                    AVA-ENT-9842
                  </span>
                  . کارشناس ارشد راهکارهای سازمانی حداکثر ظرف ۴ ساعت کاری با شما هماهنگ خواهد شد.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-[#272936] text-xs text-white hover:bg-[#313441] cursor-pointer"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#e0e1f2]">نام و نام‌خانوادگی مدیر یا نماینده</label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="مثال: دکتر علیرضا سلیمانی"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-[#e0e1f2] text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#e0e1f2]">ایمیل سازمانی (غیر رایگان)</label>
                    <input
                      required
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.ir"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-[#e0e1f2] text-sm placeholder:text-[#958da1] text-left focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  {/* Organization Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#e0e1f2]">نام سازمان یا هلدینگ</label>
                    <input
                      required
                      type="text"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="نام رسمی شرکت..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-[#e0e1f2] text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  {/* Company Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#e0e1f2]">تعداد کارکنان سازمان</label>
                    <select
                      value={formData.orgSize}
                      onChange={(e) => setFormData({ ...formData, orgSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-[#e0e1f2] text-sm focus:outline-none focus:border-[#4cd7f6]"
                    >
                      <option value="50-200">۵۰ تا ۲۰۰ نفر</option>
                      <option value="200-1000">۲۰۰ تا ۱,۰۰۰ نفر</option>
                      <option value="1000-5000">۱,۰۰۰ تا ۵,۰۰۰ نفر</option>
                      <option value="5000+">بیش از ۵,۰۰۰ نفر (ابرسازمان)</option>
                    </select>
                  </div>
                </div>

                {/* Specific Requirements */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#e0e1f2]">نیازمندی‌ها و سامانه‌های هدف اتوماسیون</label>
                  <textarea
                    rows={4}
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    placeholder="سامانه‌های فعلی سازمان (مانند CRM، اتوماسیون مکاتبات، دیتاسنتر محلی) و انتظارات از استقرار هوش مصنوعی را شرح دهید..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1c1f2b] border border-[#313441] text-[#e0e1f2] text-sm placeholder:text-[#958da1] focus:outline-none focus:border-[#4cd7f6] resize-none"
                  ></textarea>
                </div>

                {/* NDA Agreement Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda-agree"
                    checked={formData.ndaAgreement}
                    onChange={(e) => setFormData({ ...formData, ndaAgreement: e.target.checked })}
                    className="w-4 h-4 rounded bg-[#1c1f2b] border-[#313441] accent-[#7c3aed] cursor-pointer"
                  />
                  <label htmlFor="nda-agree" className="text-xs text-[#ccc3d8] cursor-pointer">
                    درخواست امضای قرارداد حفظ محرمانگی (NDA) پیش از تبادل اطلاعات فنی
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#7c3aed] text-white text-sm font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:bg-[#732ee4] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ثبت نهایی درخواست و رزرو جلسه معمار فنی</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* EXECUTIVE FAQ ACCORDION */}
      <section className="w-full py-20 bg-[#10131e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-[#e0e1f2]">
              پرسش‌های متداول مدیران ارشد فناوری (CIO / CTO)
            </h3>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'فرآیند استقرار در دیتاسنتر محلی چقدر زمان می‌برد؟',
                a: 'به لطف کانتینریزاسیون بر پایه Kubernetes و سازگاری کامل با پردازنده‌های گرافیکی NVIDIA و زیرساخت‌های بومی، پیاده‌سازی آزمایشی (PoC) ظرف ۳ روز کاری و استقرار نهایی مقیاس‌پذیر در کمتر از ۳ هفته تکمیل می‌گردد.'
              },
              {
                q: 'آیا هوش مصنوعی آوا با نرم‌افزارهای یکپارچه ایرانی همخوان است؟',
                a: 'بله، آوا دارای کانکتورهای آماده برای نرم‌افزارهای سازمانی پیشرو از جمله همکاران سیستم، چارگون، پایا، آرین سیستم و راهکارهای سفارشی مبتنی بر وب‌سرویس‌های SOAP و REST است.'
              },
              {
                q: 'مالکیت حقوقی مدل‌های Fine-tune شده با کیست؟',
                a: 'تمام وزن‌ها، هایپرپارامترها و الگوهای آموزش‌دیده بر روی داده‌های سازمان شما، دارایی انحصاری سازمان مشتری محسوب شده و در قرارداد رسمی به ثبت می‌رسد.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="p-4 rounded-xl bg-[#181b27] border border-[#313441] cursor-pointer hover:border-[#4cd7f6]/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#e0e1f2]">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[#4cd7f6] transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {openFaq === idx && (
                  <p className="mt-3 pt-3 border-t border-[#313441]/40 text-xs text-[#ccc3d8] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
