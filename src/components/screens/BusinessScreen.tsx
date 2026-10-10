import React, { useState, useEffect } from 'react';
import { testimonialsData, pricingPlans } from '../../data/mockData';
import { PricingPlan } from '../../types';

interface BusinessScreenProps {
  onOpenPlanModal: (plan: PricingPlan, billingPeriod: 'monthly' | 'annual') => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const BusinessScreen: React.FC<BusinessScreenProps> = ({
  onOpenPlanModal,
  onOpenAuth
}) => {
  // Playground state
  const [promptInput, setPromptInput] = useState(
    'خلاصه تحلیل احساسات مکالمات پشتیبانی مشتریان فصل پاییز'
  );
  const [selectedModel, setSelectedModel] = useState<'chat' | 'ocr' | 'audio'>('chat');
  const [isProcessing, setIsProcessing] = useState(false);
  const [playgroundOutput, setPlaygroundOutput] = useState(
    'بر اساس تحلیل ۹,۸۲۰ مکالمه: نرخ رضایت کل به ۸۸.۲٪ افزایش یافته است. پرتکرارترین کلمات مثبت شامل «پاسخگویی سریع» و «سهولت احراز هویت» ثبت شده و گلوگاه‌های اصلی در بخش تسویه بانکی در حال کاهش هستند.'
  );

  // Temperature fine-tuner state
  const [temperature, setTemperature] = useState(0.7);
  const [systemPrompt, setSystemPrompt] = useState(
    'شما دستیار ارشد هوش مصنوعی آوا هستید. پاسخ‌ها را ساختاریافته، دقیق و مبتنی بر منابع معتبر تنظیم کنید.'
  );
  const [configToast, setConfigToast] = useState(false);

  // Live Token Counter Animation
  const [tokenCounter, setTokenCounter] = useState(2418930);

  useEffect(() => {
    const timer = setInterval(() => {
      setTokenCounter((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Pricing Billing Toggle
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  // Handle prompt execution
  const handleSendPrompt = () => {
    if (!promptInput.trim()) return;
    setIsProcessing(true);
    setPlaygroundOutput('در حال پردازش در خوشه محاسباتی آوا...');

    setTimeout(() => {
      if (selectedModel === 'chat') {
        setPlaygroundOutput(
          `پاسخ مدل به «${promptInput}»: متن ورودی با موفقیت استخراج و الگوهای کلیدی دسته‌بندی گردیدند. نتیجه تحلیل نشان‌دهنده دقت معنایی ۹۹.۴٪ در بافت زبانی فارسی است.`
        );
      } else if (selectedModel === 'ocr') {
        setPlaygroundOutput(
          `تحلیل سند بصری تکمیل گردید: ساختار جداول مالیاتی، امضای رسمی و شناسه ملی احراز شد. خروجی در فرمت JSON ساختاریافته آماده ادغام در CRM است.`
        );
      } else {
        setPlaygroundOutput(
          `تبدیل صوت به متن با تفکیک گوینده انجام شد: «درود، سفارش شما با کد پیگیری ۹۰۴ ثبت و پیامک اعتبارسنجی ارسال گردید.»`
        );
      }
      setIsProcessing(false);
    }, 600);
  };

  const handleApplyConfig = () => {
    setConfigToast(true);
    setTimeout(() => setConfigToast(false), 2500);
  };

  return (
    <div className="flex flex-col w-full text-right" dir="rtl">
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-96 left-10 w-80 h-80 bg-[#4cd7f6]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Hero Text (Right Side in RTL) */}
            <div className="w-full lg:w-1/2 flex flex-col items-start space-y-5 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#272936] text-[#4cd7f6] text-xs shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
                <span>نسل جدید مدل‌های زبانی فارسی و چندرسانه‌ای</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f2] tracking-tight leading-tight">
                هوش مصنوعی پیشرفته برای کسب‌وکارهای پیشرو
              </h1>

              <p className="text-base lg:text-lg text-[#ccc3d8] max-w-xl leading-relaxed">
                با پلتفرم آوا، پردازش متن، تولید محتوا، تحلیل داده‌ها و ساخت دستیارهای هوشمند اختصاصی را در چند دقیقه پیاده‌سازی کنید.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7c3aed] text-white text-sm font-medium shadow-lg shadow-[#7c3aed]/25 hover:bg-[#732ee4] transition-all cursor-pointer"
                >
                  <span>شروع تست رایگان (بدون نیاز به کارت)</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('console-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#272936] hover:bg-[#313441] text-[#e0e1f2] text-sm font-medium transition-all shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#4cd7f6] text-base">play_circle</span>
                  <span>مشاهده کنسول زنده</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3 space-x-reverse">
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1c1f2b]"
                    alt="سرپرست فنی تیم"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7YwBIbcAe5DZvDSLW0mTCaKCxZUsivsbTg80MOQY4uvhknpBcGu37PYr-kfliOhL31op6gibmgKKpu406cmcdmZ0sbYeE2YxsB2Uzqc1_6QorQ4wsGB69Mz5VLrklLHV4Rs-3w4Pn9fC-9rGElIerY0ph48Ql92nNWl04hFbbVBBczSgWrRUVyz0CTf3YO9Ik2XwLjHX4nAgf5ee2QlfOgDGg2as-HfojjYvTIPcQzvSpCRImHFj9"
                  />
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1c1f2b]"
                    alt="دانشمند داده ارشد"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zLHo3zfB_Fli_o43BwdcmUSieDhBAoGAwIE-fJQTTwPtbrWTtl37uVeuzyubRpNWQXIN5mchtWfCZ7nKNgZSwobwPkRWiDfy-IUaFThDK-3sDtZzckb9I-TCq6O2uDchnMBtOV1NQirrKTGvY-UKt9maJmrjGGVbtW16qKmFQ_AEKPfxirJ2vYSG9c1oKW9BfICKF_yaZnfQkFQFE2U2IpCxbmUf0D7jPkoX5mHeV5SVaSL_AQca"
                  />
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1c1f2b]"
                    alt="مهندس نرم‌افزار"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZNu8gThs-R6ElGW0nmoIkvATUHyLiWFBz7QG4N3RLamflRt5_xUkVUBKNtJw4ddQ4CRq3zS6B4MUWPFZR1gGpOu9B_Yk6myr_ED5HO0MTmgb-92fyZvoPhj-0_w7GO-_S1OGZcyuFzwqQCOYL2wXK5vukXQ0-vuhIZPauUh2_uEtiSx-0C7B0u3XcuCJn5hsFMff9PYHZCIFW57jFnZGV-5c27o4XMzqrZdS9yEwnfy1XcrD_picN"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-[#4cd7f6] gap-1 text-xs">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-mono text-white mr-1">۴.۹ / ۵</span>
                  </div>
                  <span className="text-[11px] text-[#958da1]">مورد اعتماد بیش از ۱,۴۰۰ تیم فنی و تجاری</span>
                </div>
              </div>
            </div>

            {/* Interactive AI Copilot Playground Simulation (Left in RTL) */}
            <div className="w-full lg:w-1/2">
              <div className="relative bg-[#1c1f2b] border border-[#313441] rounded-2xl shadow-2xl p-6 backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#313441]/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#ccc3d8] font-mono text-xs">
                    <span className="material-symbols-outlined text-sm text-[#4cd7f6]">terminal</span>
                    <span>ava-neural-persian-v4.2 // live</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-[#272936] text-[#4cd7f6] font-mono text-[11px]">
                    Latency: 28ms
                  </div>
                </div>

                {/* Prompt Interaction Bar */}
                <div className="relative mb-4">
                  <div className="flex items-center bg-[#0b0e19] border border-[#313441] rounded-xl p-1.5">
                    <input
                      type="text"
                      value={promptInput}
                      onChange={(e) => setPromptInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
                      placeholder="پرامپت فارسی خود را وارد کنید..."
                      className="w-full bg-transparent px-3 py-2 text-[#e0e1f2] text-xs focus:outline-none"
                    />
                    <button
                      onClick={handleSendPrompt}
                      disabled={isProcessing}
                      className="p-2 rounded-lg bg-[#7c3aed] text-white hover:bg-[#732ee4] transition-all cursor-pointer disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-base">arrow_back</span>
                    </button>
                  </div>

                  {/* Suggestions Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-[#958da1]">
                    <span className="text-[#ccc3d8]">پیشنهاد:</span>
                    <button
                      onClick={() => setPromptInput('تحلیل احساسات مکالمات پشتیبانی مشتریان فصل پاییز')}
                      className="hover:text-[#4cd7f6] underline cursor-pointer"
                    >
                      تحلیل احساسات
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => setPromptInput('استخراج جدول حسابرسی سود و زیان از صورتحساب')}
                      className="hover:text-[#4cd7f6] underline cursor-pointer"
                    >
                      استخراج صورتحساب
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => setPromptInput('تنظیم پاسخ رسمی به درخواست همکاری سازمانی')}
                      className="hover:text-[#4cd7f6] underline cursor-pointer"
                    >
                      پاسخ مکاتبات
                    </button>
                  </div>
                </div>

                {/* Live Response Box */}
                <div className="space-y-3">
                  <div className="bg-[#0b0e19]/90 border border-[#313441] rounded-xl p-4 text-right space-y-1.5">
                    <div className="flex items-center justify-between text-[#4cd7f6] text-xs">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#d2bbff]">auto_awesome</span>
                        <span>پاسخ بلادرنگ مدل</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#958da1]">Confidence: 99.4%</span>
                    </div>
                    <p className="text-xs text-[#e0e1f2] leading-relaxed min-h-[50px]">
                      {playgroundOutput}
                    </p>
                  </div>

                  {/* Streamed Code preview */}
                  <div className="bg-[#181b27] border border-[#313441]/60 rounded-xl p-3 text-left font-mono text-[11px] overflow-x-auto text-[#d2bbff]" dir="ltr">
                    <div className="flex justify-between items-center text-[#958da1] pb-1 border-b border-[#313441]/40">
                      <span>python-sdk-client.py</span>
                      <span className="text-[#4cd7f6]">200 OK</span>
                    </div>
                    <pre className="leading-5 text-white pt-1">
                      <code>
                        <span className="text-[#4cd7f6]">from</span> ava_ai{' '}
                        <span className="text-[#4cd7f6]">import</span> AvaClient{'\n'}
                        client = AvaClient(api_key=
                        <span className="text-[#cebdff]">&quot;ava_live_secret_k9x&quot;</span>){'\n'}
                        response = client.nlp.analyze_sentiment({'\n'}
                        {'    '}text=
                        <span className="text-[#cebdff]">&quot;پشتیبانی بسیار عالی و پاسخگویی سریع بود&quot;</span>
                        ,{'\n'}
                        {'    '}language=<span className="text-[#4cd7f6]">&quot;fa-IR&quot;</span>
                        {'\n'}){'\n'}
                        print(response.sentiment_score){'  '}
                        <span className="text-[#958da1]"># 0.985</span>
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Model switcher pills */}
                <div className="flex flex-wrap items-center justify-between pt-4 mt-3 border-t border-[#313441]/60 text-xs">
                  <span className="text-[#958da1]">تغییر مدل زنده:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSelectedModel('chat')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        selectedModel === 'chat'
                          ? 'bg-[#7c3aed] text-white font-medium'
                          : 'bg-[#272936] text-[#ccc3d8] hover:text-white'
                      }`}
                    >
                      Ava-Pro-Chat
                    </button>
                    <button
                      onClick={() => setSelectedModel('ocr')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        selectedModel === 'ocr'
                          ? 'bg-[#7c3aed] text-white font-medium'
                          : 'bg-[#272936] text-[#ccc3d8] hover:text-white'
                      }`}
                    >
                      Ava-Vision-OCR
                    </button>
                    <button
                      onClick={() => setSelectedModel('audio')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        selectedModel === 'audio'
                          ? 'bg-[#7c3aed] text-white font-medium'
                          : 'bg-[#272936] text-[#ccc3d8] hover:text-white'
                      }`}
                    >
                      Ava-Audio-Stream
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* KEY CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-1 text-right">
            <span className="text-[#4cd7f6] text-xs font-semibold uppercase tracking-wider">
              زیرساخت هوش مصنوعی بومی
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">توانمندی‌های کلیدی آوا</h2>
          </div>
          <p className="text-sm text-[#ccc3d8] max-w-md text-right mt-2 md:mt-0 leading-relaxed">
            معماری مدرن تنسور با بهینه‌سازی اختصاصی برای زبان فارسی، با تضمین پایداری ۹۹.۹۹٪ در زیرساخت ابری مقیاس‌پذیر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] hover:border-[#7c3aed]/50 transition-all shadow-md group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#d2bbff] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">translate</span>
              </div>
              <h3 className="font-semibold text-base text-[#e0e1f2]">پردازش زبان فارسی با دقت ۹۹٪</h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed">
                پشتیبانی از دستور زبان پیچیده، محاوره‌ای، تمایز معنایی و ریشه‌یابی صرفی بدون نیاز به تبدیل یا ترجمه ثانویه.
              </p>
            </div>
            <div className="pt-4 border-t border-[#313441]/60 flex items-center gap-1.5 text-[#4cd7f6] text-xs">
              <span>درک گرامری ۹۹.۱٪</span>
              <span className="material-symbols-outlined text-sm">verified</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] hover:border-[#4cd7f6]/50 transition-all shadow-md group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#4cd7f6] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">query_stats</span>
              </div>
              <h3 className="font-semibold text-base text-[#e0e1f2]">تحلیل هوشمند اسناد و کلان‌داده</h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed">
                استخراج اطلاعات ساختاریافته از هزاران صفحه PDF، گزارش‌های مالی و دیتابیس‌های سازمانی در کسری از ثانیه.
              </p>
            </div>
            <div className="pt-4 border-t border-[#313441]/60 flex items-center gap-1.5 text-[#4cd7f6] text-xs">
              <span>پردازش ۲۰k توکن/ثانیه</span>
              <span className="material-symbols-outlined text-sm">bolt</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] hover:border-[#7c3aed]/50 transition-all shadow-md group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#cebdff] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">record_voice_over</span>
              </div>
              <h3 className="font-semibold text-base text-[#e0e1f2]">دستیار صوتی و تصویرساز اختصاصی</h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed">
                تبدیل دوطرفه گفتار فارسی به متن با لهجه‌های مختلف همراه با موتور چندرسانه‌ای خلق تصاویر مفهومی اختصاصی.
              </p>
            </div>
            <div className="pt-4 border-t border-[#313441]/60 flex items-center gap-1.5 text-[#4cd7f6] text-xs">
              <span>تولید صدای طبیعی زنده</span>
              <span className="material-symbols-outlined text-sm">graphic_eq</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] hover:border-[#4cd7f6]/50 transition-all shadow-md group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#272936] flex items-center justify-center text-[#d2bbff] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="font-semibold text-base text-[#e0e1f2]">اتصال امن به API سازمانی</h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed">
                یکپارچگی آسان با وب‌هوک‌ها، CRMها و پایگاه‌های داده داخلی با رمزنگاری سرتاسری و انطباق کامل با داده‌های حساس.
              </p>
            </div>
            <div className="pt-4 border-t border-[#313441]/60 flex items-center gap-1.5 text-[#4cd7f6] text-xs">
              <span>رمزنگاری AES-256</span>
              <span className="material-symbols-outlined text-sm">lock</span>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW & TOKEN COUNTER CONSOLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="console-section">
        <div className="bg-[#181b27] border border-[#313441] rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-1 text-right">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6]">monitoring</span>
                <h2 className="text-xl lg:text-2xl font-bold text-[#e0e1f2]">پیش‌نمایش کنسول کاربری آوا</h2>
              </div>
              <p className="text-xs text-[#ccc3d8]">
                مانیتورینگ لحظه‌ای مصرف توکن، زمان تاخیر مدل، و استقرار خودکار پایپ‌لاین‌ها
              </p>
            </div>

            {/* Live Token Counters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2.5 rounded-xl bg-[#1c1f2b] border border-[#313441] text-right shadow-sm">
                <span className="block text-[11px] text-[#958da1]">توکن‌های مصرفی ماه جاری</span>
                <span className="text-base lg:text-lg text-[#4cd7f6] font-mono font-bold">
                  {tokenCounter.toLocaleString('fa-IR')}
                </span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[#1c1f2b] border border-[#313441] text-right shadow-sm">
                <span className="block text-[11px] text-[#958da1]">نرخ خطای مدل</span>
                <span className="text-base lg:text-lg text-[#d2bbff] font-mono font-bold">۰.۰۲٪</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[#1c1f2b] border border-[#313441] text-right shadow-sm">
                <span className="block text-[11px] text-[#958da1]">درخواست‌های همزمان</span>
                <span className="text-base lg:text-lg text-white font-mono font-bold">۳,۲۱۰ rps</span>
              </div>
            </div>
          </div>

          {/* Internal Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Analytics Chart (SVG) */}
            <div className="lg:col-span-2 bg-[#1c1f2b] border border-[#313441] rounded-xl p-5 shadow-inner flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#e0e1f2] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[#7c3aed] text-base">show_chart</span>
                  <span>نمودار توان عملیاتی مدل و پاسخ‌دهی (۲۴ ساعت گذشته)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#272936] text-[#4cd7f6] font-mono text-[11px]">
                  تراکنش در ثانیه
                </span>
              </div>

              {/* Inline Chart Graphic */}
              <div className="w-full h-44 py-2">
                <svg className="w-full h-full text-[#4cd7f6]" preserveAspectRatio="none" viewBox="0 0 600 160">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.35"></stop>
                      <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <line stroke="#313441" strokeDasharray="4" x1="0" x2="600" y1="40" y2="40"></line>
                  <line stroke="#313441" strokeDasharray="4" x1="0" x2="600" y1="80" y2="80"></line>
                  <line stroke="#313441" strokeDasharray="4" x1="0" x2="600" y1="120" y2="120"></line>
                  <path
                    d="M0,130 Q70,90 140,110 T280,60 T420,70 T520,30 T600,45 L600,160 L0,160 Z"
                    fill="url(#chartGradient)"
                  ></path>
                  <path
                    d="M0,130 Q70,90 140,110 T280,60 T420,70 T520,30 T600,45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                  <circle cx="280" cy="60" fill="#7c3aed" r="4"></circle>
                  <circle cx="520" cy="30" fill="#4cd7f6" r="4"></circle>
                </svg>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[#958da1] font-mono text-xs">
                <span>۰۰:۰۰</span>
                <span>۰۶:۰۰</span>
                <span>۱۲:۰۰</span>
                <span>۱۸:۰۰</span>
              </div>
            </div>

            {/* Prompt Fine-Tuner Panel */}
            <div className="bg-[#1c1f2b] border border-[#313441] rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3 text-right">
                <span className="text-xs font-semibold text-[#e0e1f2]">تنظیمات حرارت و نوآوری (Temperature)</span>
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs text-[#958da1]">
                    <span>خلاقیت</span>
                    <span className="text-[#4cd7f6] font-bold">{temperature}</span>
                    <span>دقت قطعی</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-[#4cd7f6] bg-[#313441] rounded-lg cursor-pointer h-2"
                  />
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] text-[#958da1]">قالب دستور سیستم (System Prompt):</span>
                  <textarea
                    rows={3}
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    className="w-full bg-[#0b0e19] text-[#e0e1f2] text-xs p-2.5 rounded-lg border border-[#313441] focus:outline-none focus:border-[#4cd7f6] resize-none text-right leading-relaxed"
                  ></textarea>
                </div>
              </div>

              <div>
                {configToast && (
                  <div className="mb-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center">
                    پیکربندی به متغیرهای زنده اعمال شد
                  </div>
                )}
                <button
                  onClick={handleApplyConfig}
                  className="w-full py-2.5 rounded-lg bg-[#272936] hover:bg-[#313441] text-[#e0e1f2] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-[#4cd7f6]">tune</span>
                  <span>اعمال پیکربندی به متغیرهای زنده</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT PRICING TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="pricing-section">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[#4cd7f6] text-xs font-semibold uppercase tracking-wider">
            پلن‌های منعطف برای هر مرحله رشد
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">تعرفه شفاف، بدون هزینه پنهان</h2>
          <p className="text-xs text-[#ccc3d8]">
            امکان ارتقا یا لغو در هر زمان با پشتیبانی فنی ۲۴ ساعته متخصصان بومی
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <span className={`text-xs ${billingPeriod === 'monthly' ? 'text-white font-semibold' : 'text-[#958da1]'}`}>
              پرداخت ماهانه
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-12 h-6 rounded-full bg-[#272936] border border-[#313441] transition-colors p-0.5 cursor-pointer"
              aria-label="تغییر دوره پرداخت"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#4cd7f6] transition-transform ${
                  billingPeriod === 'annual' ? '-translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`text-xs flex items-center gap-1 ${billingPeriod === 'annual' ? 'text-white font-semibold' : 'text-[#958da1]'}`}>
              <span>پرداخت سالانه</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                ۲۰٪ تخفیف
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingPeriod === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`p-6 lg:p-8 rounded-2xl flex flex-col justify-between text-right transition-all border ${
                  plan.featured
                    ? 'bg-[#272936] border-[#7c3aed] shadow-2xl relative md:-translate-y-2'
                    : 'bg-[#1c1f2b] border-[#313441] hover:border-[#4cd7f6]/50 shadow-md'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#03b5d3] text-[#003640] text-xs font-semibold shadow-md whitespace-nowrap">
                    پیشنهاد اکثر کسب‌وکارها
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className={`font-semibold text-lg ${plan.featured ? 'text-[#4cd7f6]' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#ccc3d8] mt-1">{plan.target}</p>
                  </div>

                  <div className="flex items-baseline gap-1 py-2">
                    <span className="text-3xl font-bold text-white font-mono">{price}</span>
                    {price !== 'تماس بگیرید' && (
                      <span className="text-xs text-[#958da1]">تومان / {billingPeriod === 'annual' ? 'ماهانه (سالیانه)' : 'ماهانه'}</span>
                    )}
                  </div>

                  <ul className="space-y-3 text-xs text-[#ccc3d8] pt-2 border-t border-[#313441]/60">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-base ${
                            f.included ? 'text-[#4cd7f6]' : 'text-[#958da1]'
                          }`}
                        >
                          {f.included ? 'check_circle' : 'cancel'}
                        </span>
                        <span className={!f.included ? 'text-[#958da1]' : ''}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenPlanModal(plan, billingPeriod)}
                  className={`mt-6 w-full py-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    plan.featured
                      ? 'bg-[#7c3aed] hover:bg-[#732ee4] text-white shadow-lg shadow-[#7c3aed]/30'
                      : 'bg-[#272936] hover:bg-[#313441] text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-1 text-right mb-10">
          <span className="text-[#4cd7f6] text-xs font-semibold uppercase tracking-wider">داستان‌های موفقیت</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#e0e1f2]">نظرات تیم‌های پیشرو</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1c1f2b] border border-[#313441] text-right flex flex-col justify-between shadow-sm hover:border-[#7c3aed]/50 transition-all"
            >
              <p className="text-xs text-[#ccc3d8] leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-[#313441]/40 mt-4">
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#272936]"
                  alt={t.name}
                  src={t.avatar}
                />
                <div className="space-y-0.5">
                  <h4 className="font-semibold text-sm text-[#e0e1f2]">{t.name}</h4>
                  <span className="text-[11px] text-[#958da1]">
                    {t.role} | {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GRADIENT BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#272936] to-[#0b0e19] p-8 lg:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl text-right space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#03b5d3] text-[#003640] text-[11px] font-semibold">
              شروع سریع در کمتر از ۵ دقیقه
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              کسب‌وکار خود را به قدرت نسل جدید هوش مصنوعی متصل کنید
            </h2>
            <p className="text-xs lg:text-sm text-[#ccc3d8] leading-relaxed">
              بدون نیاز به زیرساخت‌های سخت‌افزاری سنگین، از همین امروز از مدل‌های پیش‌آموخته فارسی آوا بهره‌مند شوید.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4cd7f6] text-[#003640] text-xs font-bold shadow-lg shadow-[#4cd7f6]/20 hover:scale-105 transition-all cursor-pointer"
              >
                <span>دریافت توکن تست رایگان</span>
                <span className="material-symbols-outlined text-base">rocket_launch</span>
              </button>
              <button
                onClick={() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-xl bg-[#1c1f2b]/60 hover:bg-[#1c1f2b] text-white text-xs font-medium transition-all cursor-pointer"
              >
                تماس با واحد فروش و ادغام
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
