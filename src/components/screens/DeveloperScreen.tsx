import React, { useState } from 'react';
import { modelsData, codeSnippets } from '../../data/mockData';
import { ScreenId } from '../../types';

interface DeveloperScreenProps {
  onSelectScreen: (screen: ScreenId) => void;
  onOpenApiKeyModal: () => void;
  onOpenOfficeHoursModal: () => void;
}

export const DeveloperScreen: React.FC<DeveloperScreenProps> = ({
  onSelectScreen,
  onOpenApiKeyModal,
  onOpenOfficeHoursModal
}) => {
  // Code snippet language tab
  const [activeLang, setActiveLang] = useState<'py' | 'ts' | 'curl'>('py');
  const [copiedCode, setCopiedCode] = useState(false);

  // Model filter category
  const [activeCategory, setActiveCategory] = useState<'all' | 'llm' | 'vlm' | 'code' | 'audio'>('all');

  // Terminal Stream Simulation State
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState(
    '«بر اساس داده‌های فصلی، رشد سود خالص شرکت معادل ۲۸.۴٪ تخمین زده می‌شود. جریان نقدینگی عملیاتی شاخص‌های بنیادی مثبتی را نشان می‌دهد.»'
  );
  const [tokensCount, setTokensCount] = useState(186);

  // Speed Benchmark Scenario State
  const [benchScenario, setBenchScenario] = useState<'standard' | 'legal' | 'coding'>('standard');

  const benchValues = {
    standard: { ava: 158, llama: 48, gpt: 62 },
    legal: { ava: 142, llama: 39, gpt: 51 },
    coding: { ava: 168, llama: 55, gpt: 70 }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunTerminalRequest = () => {
    setIsStreaming(true);
    setStreamedText('');
    setTokensCount(0);

    const fullText =
      '«بر اساس تحلیل صورت‌های مالی سه‌ماهه، سود ناخالص شرکت با نرخ ۲۸.۴٪ افزایش یافته و شاخص کارایی عملیاتی بالاتر از میانگین بازار سرمایه ارزیابی می‌شود.»';
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setStreamedText((prev) => prev + fullText[currentIdx]);
        setTokensCount((prev) => prev + 2);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 20);
  };

  const filteredModels =
    activeCategory === 'all'
      ? modelsData
      : modelsData.filter((m) => m.category === activeCategory);

  return (
    <div className="flex flex-col w-full text-right" dir="rtl">
      {/* Ambient Glow Backgrounds */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#7c3aed]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-80 left-10 w-[500px] h-[500px] bg-[#4cd7f6]/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f2b] border border-[#313441] mb-8 shadow-[0_0_20px_rgba(76,215,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
              AVA-STUDIO // v3.4 NEURAL RUNTIME
            </span>
            <span className="text-[#958da1] font-mono text-xs">|</span>
            <span className="text-xs text-[#ccc3d8]">موتور تخصصی نگارش و ادراک پارسی</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f2] tracking-tight leading-tight">
                زیرساخت قدرتمند <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#d2bbff] via-[#4cd7f6] to-[#eaddff]">
                  هوش مصنوعی
                </span>{' '}
                برای توسعه‌دهندگان
              </h1>
              <p className="text-base lg:text-lg text-[#ccc3d8] max-w-2xl leading-relaxed">
                سریع‌ترین API پردازش زبان فارسی، دسترسی مستقیم به مدل‌های متن‌باز بهینه‌شده، بستر Fine-Tuning ابری مقیاس‌پذیر و استقرار یکپارچه مدل‌های شرکتی با حداقل تاخیر.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenApiKeyModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#7c3aed] text-white text-sm font-medium shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:bg-[#732ee4] transition-all cursor-pointer"
                >
                  <span>دریافت کلید API رایگان</span>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </button>
                <a
                  href="#models-section"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#272936] hover:bg-[#313441] text-[#e0e1f2] text-sm font-medium transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#4cd7f6] text-lg">terminal</span>
                  <span>مستندات و کتابخانه مدل‌ها</span>
                </a>
              </div>

              {/* Quick Metrics Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-10 text-[#ccc3d8] text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-sm">bolt</span>
                  <span>
                    تاخیر شبکه: <strong className="text-white text-sm">۱۹۲ms</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#d2bbff] text-sm">memory</span>
                  <span>
                    توکن در ثانیه: <strong className="text-white text-sm">۱۴۵+ T/s</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-sm">verified</span>
                  <span>
                    تطابق گرامر: <strong className="text-white text-sm">۹۹.۴٪</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Widget */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl bg-[#0b0e19] border border-[#313441] shadow-[0_24px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#181b27] border-b border-[#313441]/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="font-mono text-xs text-[#958da1] mr-3">ava-interactive-shell ~ zsh</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#1c1f2b] text-[#4cd7f6]">
                    POST /v1/chat
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs space-y-4 text-left" dir="ltr">
                  <div className="text-[#958da1] leading-relaxed">
                    <span className="text-[#4cd7f6]">$</span> curl -X POST https://api.ava-ai.ir/v1/chat/completions \<br />
                    &nbsp;&nbsp;-H <span className="text-[#eaddff]">&quot;Authorization: Bearer ava_live_9f8d&quot;</span> \<br />
                    &nbsp;&nbsp;-H <span className="text-[#eaddff]">&quot;Content-Type: application/json&quot;</span> \<br />
                    &nbsp;&nbsp;-d &apos;&#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4cd7f6]">&quot;model&quot;</span>: <span className="text-[#cebdff]">&quot;ava-persian-70b-instruct&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4cd7f6]">&quot;messages&quot;</span>: [&#123;&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;خلاصه تحلیل مالی را تولید کن.&quot;&#125;]<br />
                    &nbsp;&nbsp;&#125;&apos;
                  </div>

                  {/* Output block */}
                  <div className="p-4 rounded-xl bg-[#181b27]/80 border border-[#313441]/60 space-y-2 text-right" dir="rtl">
                    <div className="flex items-center justify-between text-[11px] text-[#958da1] pb-1 border-b border-[#313441]/40">
                      <span className="flex items-center gap-1.5 text-[#4cd7f6] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse"></span> 200 OK (184ms)
                      </span>
                      <span className="font-mono">Tokens: in 24 / out {tokensCount}</span>
                    </div>
                    <p className="text-xs text-white leading-relaxed font-sans min-h-[44px]">
                      {streamedText}
                      {isStreaming && <span className="inline-block w-1.5 h-3.5 bg-[#4cd7f6] mr-1 animate-pulse"></span>}
                    </p>
                    <div className="text-left font-mono text-[11px] text-[#cebdff] pt-1" dir="ltr">
                      ava_metrics: &#123; throughput: &quot;152 tok/sec&quot;, p99: &quot;210ms&quot; &#125;
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[#958da1] text-[11px] pt-1">
                    <span>Memory: 18.2 MB / 512 MB</span>
                    <button
                      disabled={isStreaming}
                      onClick={handleRunTerminalRequest}
                      className="text-[#4cd7f6] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>● {isStreaming ? 'Streaming response...' : 'Run request test'}</span>
                      <span className="material-symbols-outlined text-xs">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION 1: BENCHMARKS & SPEED */}
      <section className="w-full bg-[#181b27] py-20 border-t border-[#313441]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
                METRICS &amp; LATENCY
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2] mt-1">
                بنچمارک‌ها و سرعت پردازش
              </h2>
            </div>
            <p className="text-sm text-[#ccc3d8] max-w-md leading-relaxed">
              زیرساخت اختصاصی میزبانی‌شده روی کلاسترهای سخت‌افزاری H100 داخلی برای دستیابی به کمترین فاصله مکانی و بالاترین راندمان.
            </p>
          </div>

          {/* Stat Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-md flex flex-col justify-between hover:border-[#4cd7f6]/50 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-2xl">speed</span>
                </div>
                <div className="text-4xl font-bold text-white tracking-tighter font-mono" dir="ltr">
                  <span className="text-[#4cd7f6]">&lt;</span>190<span className="text-xl text-[#4cd7f6]">ms</span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">زمان پاسخ تاخیر اولیه (TTFT)</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  سرعت بارگذاری اولین توکن پاسخ در مقایسه با مدل‌های جهانی در بستر شبکه اینترانت و اینترنت ملی تا ۳ برابر سریع‌تر است.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#313441]/60 flex items-center justify-between text-[#958da1] font-mono text-[11px]">
                <span>P95 Latency: 210ms</span>
                <span className="text-[#4cd7f6]">بهینه‌سازی TensorRT-LLM</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-md flex flex-col justify-between hover:border-[#7c3aed]/50 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#d2bbff]">
                  <span className="material-symbols-outlined text-2xl">data_object</span>
                </div>
                <div className="text-4xl font-bold text-white tracking-tighter font-mono" dir="ltr">
                  128<span className="text-xl text-[#d2bbff]">k</span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">کانتکست توکن پیوسته</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  امکان بارگذاری پرونده‌های حجیم حقوقی، کتب جامع و هزاران سطر لاگ سیستمی در یک فراخوانی بدون افت کیفیت درک مفهوم.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#313441]/60 flex items-center justify-between text-[#958da1] font-mono text-[11px]">
                <span>Needle-In-Haystack: 99.8%</span>
                <span className="text-[#d2bbff]">RoPE Scaled</span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-md flex flex-col justify-between hover:border-[#4cd7f6]/50 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-2xl">cloud_sync</span>
                </div>
                <div className="text-4xl font-bold text-white tracking-tighter font-mono" dir="ltr">
                  99.99<span className="text-xl text-[#4cd7f6]">%</span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">پایداری آپ‌تایم سازمانی (SLA)</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  خوشه‌های سروری آینه‌ای در سه دیتاسنتر مستقل و توزیع بار خودکار با تضمین برگشت‌پذیری بدون اختلال سرویس.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#313441]/60 flex items-center justify-between text-[#958da1] font-mono text-[11px]">
                <span>Redundant Regions: 3</span>
                <span className="text-[#4cd7f6]">Tier-4 Standards</span>
              </div>
            </div>
          </div>

          {/* Comparative Speed Bench Visual */}
          <div className="p-6 lg:p-8 rounded-2xl bg-[#0b0e19] border border-[#313441] shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">
                  مقایسه سرعت استخراج توکن بر حسب ثانیه (فارسی استاندارد)
                </h3>
                <p className="text-xs text-[#ccc3d8]">محاسبه میانگین روی ۵۰٬۰۰۰ درخواست موازی هم‌زمان</p>
              </div>

              {/* Scenario selector */}
              <div className="flex items-center gap-1 p-1 bg-[#181b27] border border-[#313441] rounded-lg text-xs">
                <button
                  onClick={() => setBenchScenario('standard')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    benchScenario === 'standard' ? 'bg-[#7c3aed] text-white' : 'text-[#ccc3d8]'
                  }`}
                >
                  فارسی عمومی
                </button>
                <button
                  onClick={() => setBenchScenario('legal')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    benchScenario === 'legal' ? 'bg-[#7c3aed] text-white' : 'text-[#ccc3d8]'
                  }`}
                >
                  اسناد مالیاتی
                </button>
                <button
                  onClick={() => setBenchScenario('coding')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    benchScenario === 'coding' ? 'bg-[#7c3aed] text-white' : 'text-[#ccc3d8]'
                  }`}
                >
                  کدنویسی
                </button>
              </div>
            </div>

            {/* Metric Bars */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#e0e1f2]">
                  <span className="font-medium">آوا موتور بهینه‌شده ۷۰B (Ava Neural Engine)</span>
                  <span className="text-[#4cd7f6] font-mono font-bold">
                    {benchValues[benchScenario].ava} Tok/s
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#1c1f2b] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-[#4cd7f6] to-[#03b5d3] rounded-full transition-all duration-700"
                    style={{ width: `${(benchValues[benchScenario].ava / 180) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#ccc3d8]">
                  <span>مدل عمومی Llama-3-70B (سرورهای اروپایی با تاخیر مرزی)</span>
                  <span className="font-mono">{benchValues[benchScenario].llama} Tok/s</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#1c1f2b] overflow-hidden">
                  <div
                    className="h-full bg-[#313441] rounded-full transition-all duration-700"
                    style={{ width: `${(benchValues[benchScenario].llama / 180) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#ccc3d8]">
                  <span>سرویس تجاری GPT-4o Mini (پاسخ‌دهی به درخواست‌های فارسی)</span>
                  <span className="font-mono">{benchValues[benchScenario].gpt} Tok/s</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#1c1f2b] overflow-hidden">
                  <div
                    className="h-full bg-[#958da1]/40 rounded-full transition-all duration-700"
                    style={{ width: `${(benchValues[benchScenario].gpt / 180) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 LINES OF CODE INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-wider">
              DEVELOPER FIRST API
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">یکپارچه‌سازی در ۳ خط کد</h2>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              سرویس آوا به گونه‌ای طراحی شده که با استانداردهای پرکاربرد OpenAI SDK و Hugging Face همخوانی ۱۰۰٪ دارد. کافیست آدرس سرور (Base URL) و توکن را جایگزین کنید.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-[#e0e1f2] text-xs">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">check_circle</span>
                <span>پشتیبانی کامل از Streaming Response و SSE</span>
              </div>
              <div className="flex items-center gap-2 text-[#e0e1f2] text-xs">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">check_circle</span>
                <span>پشتیبانی بومی از ابزارها و Function Calling به زبان فارسی</span>
              </div>
              <div className="flex items-center gap-2 text-[#e0e1f2] text-xs">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">check_circle</span>
                <span>کلاینت رسمی برای Python، Node.js، Go و PHP</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenApiKeyModal}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#4cd7f6] hover:text-[#acedff] transition-colors cursor-pointer"
              >
                <span>دریافت توکن تست توسعه‌دهنده</span>
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
            </div>
          </div>

          {/* Code Box with Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0e19] border border-[#313441] shadow-2xl overflow-hidden">
              {/* Language Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181b27] border-b border-[#313441]/60">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveLang('py')}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                      activeLang === 'py'
                        ? 'bg-[#272936] text-[#4cd7f6] font-semibold'
                        : 'text-[#ccc3d8] hover:text-white'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveLang('ts')}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                      activeLang === 'ts'
                        ? 'bg-[#272936] text-[#4cd7f6] font-semibold'
                        : 'text-[#ccc3d8] hover:text-white'
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => setActiveLang('curl')}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                      activeLang === 'curl'
                        ? 'bg-[#272936] text-[#4cd7f6] font-semibold'
                        : 'text-[#ccc3d8] hover:text-white'
                    }`}
                  >
                    cURL
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272936] hover:bg-[#313441] text-[#ccc3d8] hover:text-white text-xs transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedCode ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedCode ? 'کپی شد!' : 'کپی کد'}</span>
                </button>
              </div>

              {/* Code Display */}
              <div className="p-6 font-mono text-xs text-left overflow-x-auto min-h-[170px]" dir="ltr">
                <pre className="text-[#ccc3d8] leading-relaxed">
                  {codeSnippets[activeLang]}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDATION MODELS HUB */}
      <section className="w-full bg-[#181b27] py-20 border-t border-[#313441]/40" id="models-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
                FOUNDATION MODELS HUB
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2] mt-1">
                کتابخانه مدل‌های آماده آوا
              </h2>
            </div>
            <p className="text-sm text-[#ccc3d8] max-w-md leading-relaxed">
              مدل‌های از پیش آموزش‌دیده و تنظیم‌شده (Instruction-Tuned) بر روی غنی‌ترین پیکره داده‌های زبانی و تخصصی کشور.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'همه مدل‌ها' },
              { id: 'llm', label: 'مدل‌های زبانی LLM' },
              { id: 'vlm', label: 'مدل‌های دیداری VLM' },
              { id: 'code', label: 'دستیار کدنویسی' },
              { id: 'audio', label: 'صوت و گفتار' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#7c3aed] text-white shadow-md'
                    : 'bg-[#1c1f2b] text-[#ccc3d8] hover:text-white border border-[#313441]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-md flex flex-col justify-between hover:border-[#7c3aed]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs px-2.5 py-0.5 rounded-md font-semibold ${model.tagColor}`}>
                      {model.tag}
                    </span>
                    <span className="font-mono text-xs text-[#4cd7f6]">{model.params}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-base text-[#e0e1f2] group-hover:text-[#d2bbff] transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-xs text-[#ccc3d8] leading-relaxed">{model.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#958da1]">
                    {model.features.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#181b27]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onSelectScreen('business')}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#272936] hover:bg-[#7c3aed] text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <span>تست در پلی‌گراند</span>
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ENTERPRISE DATA SECURITY & RESIDENCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="p-8 lg:p-10 rounded-2xl bg-[#181b27] border border-[#313441] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider">
                DATA RESIDENCY &amp; GOVERNANCE
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">
                امنیت و انطباق داده در سطح سازمانی
              </h2>
              <p className="text-sm text-[#ccc3d8] leading-relaxed">
                ما متعهد هستیم که داده‌های شما هرگز برای بازآموزی مدل‌های عمومی استفاده نشوند. تمامی اطلاعات درون مراکز داده معتبر داخل کشور، با رمزنگاری پیشرفته در حالت استراحت و انتقال نگهداری می‌شوند.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-1">
                  <div className="flex items-center gap-2 text-[#4cd7f6] font-semibold text-sm">
                    <span className="material-symbols-outlined text-base">shield_lock</span>
                    <span>رمزنگاری سرتاسری</span>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">استفاده از الگوریتم AES-256 و TLS 1.3 اختصاصی</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-1">
                  <div className="flex items-center gap-2 text-[#d2bbff] font-semibold text-sm">
                    <span className="material-symbols-outlined text-base">dns</span>
                    <span>میزبانی درون‌سازمانی (On-Prem)</span>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">استقرار کلاستر ایزوله بر روی سرورهای محلی شرکت شما</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-1">
                  <div className="flex items-center gap-2 text-[#4cd7f6] font-semibold text-sm">
                    <span className="material-symbols-outlined text-base">gavel</span>
                    <span>انطباق با قوانین حاکمیت داده</span>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">رعایت آیین‌نامه‌های سازمان فناوری اطلاعات و افتا</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1c1f2b] border border-[#313441]/60 space-y-1">
                  <div className="flex items-center gap-2 text-[#cebdff] font-semibold text-sm">
                    <span className="material-symbols-outlined text-base">delete_sweep</span>
                    <span>قرارداد عدم یادگیری (Zero Retention)</span>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">حذف لحظه‌ای کانتکست بلافاصله پس از تولید پاسخ</p>
                </div>
              </div>
            </div>

            {/* Visual Badge Cluster */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-[#1c1f2b] border border-[#313441] space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#272936] flex items-center justify-center text-[#4cd7f6] shadow-[0_0_30px_rgba(76,215,246,0.25)]">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-white">گواهی امنیت Tier-4</div>
                <p className="text-xs text-[#ccc3d8] max-w-xs leading-relaxed">
                  تاییدیه تست نفوذ دوره‌ای و تست‌های امنیتی سخت‌افزاری توسط آزمایشگاه‌های مرجع
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#4cd7f6] bg-[#0b0e19] px-4 py-2 rounded-full border border-[#313441]">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
                <span>SOC2 Type II &amp; ISO 27001 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DEVELOPER COMMUNITY & ECOSYSTEM */}
      <section className="w-full bg-[#181b27] py-20 border-t border-[#313441]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-wider">
              DEVELOPER COMMUNITY
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">
              اکوسیستم جامعه توسعه‌دهندگان آوا
            </h2>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              به جمع بیش از ۱۲٬۰۰۰ مهندس نرم‌افزار، محقق یادگیری ماشین و بنیان‌گذاران استارتاپ‌های هوش مصنوعی بپیوندید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GitHub */}
            <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-sm flex flex-col justify-between hover:border-[#4cd7f6]/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#272936] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">code</span>
                  </span>
                  <span className="font-mono text-xs text-[#4cd7f6] flex items-center gap-1" dir="ltr">
                    <span className="material-symbols-outlined text-sm">star</span> 4.8k Stars
                  </span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">مخازن متن‌باز گیت‌هاب</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  کتابخانه‌های اتصال، پایپ‌لاین‌های آماده RAG، ابزارهای ارزیابی زبان فارسی و مدل‌های نمونه روی مخزن رسمی آوا.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#4cd7f6] hover:underline"
                >
                  <span>مشاهده در GitHub</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Telegram & Discord */}
            <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-sm flex flex-col justify-between hover:border-[#7c3aed]/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#272936] flex items-center justify-center text-[#d2bbff]">
                    <span className="material-symbols-outlined">forum</span>
                  </span>
                  <span className="font-mono text-xs text-[#d2bbff] flex items-center gap-1" dir="ltr">
                    12,400+ Members
                  </span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">انجمن دیسکورد و تلگرام</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  بحث پیرامون پرامپت‌نویسی پیشرفته، رفع اشکال مستقیم توسط تیم مهندسی آوا و اشتراک تجربیات محصولی.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#d2bbff] hover:underline"
                >
                  <span>عضویت در گروه تلگرام</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] shadow-sm flex flex-col justify-between hover:border-[#4cd7f6]/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#272936] flex items-center justify-center text-[#4cd7f6]">
                    <span className="material-symbols-outlined">video_camera_front</span>
                  </span>
                  <span className="font-mono text-xs text-[#4cd7f6]">هفتگی</span>
                </div>
                <h3 className="font-semibold text-base text-[#e0e1f2]">جلسات فنی Office Hours</h3>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">
                  جلسات آنلاین هفتگی با معماران ارشد یادگیری ماشین آوا پیرامون تکنیک‌های بهینه‌سازی کانتکست و استقرار مدل.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={onOpenOfficeHoursModal}
                  className="inline-flex items-center gap-1 text-xs text-[#4cd7f6] hover:underline cursor-pointer"
                >
                  <span>ثبت‌نام در رویداد بعدی</span>
                  <span className="material-symbols-outlined text-sm">event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#272936] to-[#1c1f2b] p-8 lg:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              آماده‌اید محصول نسل بعد خود را بسازید؟
            </h2>
            <p className="text-sm text-[#ede0ff]/80 leading-relaxed">
              حساب توسعه‌دهنده خود را در چند ثانیه بسازید و ۱٬۰۰۰٬۰۰۰ توکن پردازش اولیه هدیه بگیرید.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenApiKeyModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#7c3aed] text-xs font-semibold shadow-lg hover:bg-neutral-100 transition-all cursor-pointer"
              >
                <span>ایجاد حساب و دریافت توکن هدیه</span>
                <span className="material-symbols-outlined text-base">arrow_back</span>
              </button>
              <button
                onClick={() => onSelectScreen('enterprise')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-white hover:bg-white/10 text-xs font-medium transition-all cursor-pointer"
              >
                <span>گفتگو با تیم فروش سازمانی</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
