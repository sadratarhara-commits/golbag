import { IndustryInfo, ModelInfo, Testimonial, PricingPlan } from '../types';

export const industriesData: IndustryInfo[] = [
  {
    id: 'fintech',
    name: 'بانکداری و فین‌تک',
    icon: 'account_balance',
    badge: 'سناریوی اختصاصی مؤسسات مالی',
    title: 'کشف بی‌درنگ تخلفات و تحلیل اعتباری خودکار',
    desc: 'پردازش میلیون‌ها تراکنش در ثانیه، احراز هویت بیومتریک صوتی مشتریان، تطبیق خودکار اسناد مالیاتی و رتبه‌بندی اعتباری هوشمند متناسب با آیین‌نامه‌های بانکی کشور.',
    metric: 'دقت عملیاتی: ۹۹.۸٪ در ارزیابی ریسک',
    f1_title: 'شناسایی پولشویی (AML)',
    f1_desc: 'کاهش ۹۴٪ هشدارهای کاذب با یادگیری رفتاری الگوها.',
    f2_title: 'استخراج هوشمند اسناد (OCR)',
    f2_desc: 'خواندن چک‌ها و سفته‌ها با دقت ۹۹.۸٪ بدون مداخله دست.',
    tps: '48,200 TPS',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8edn3Rc9KPITbuMNvFaEAPEMLdTgABDFd0XnqwIWPSccXDXkjPAVJp-10Gg5QwXdtFXlXx7fs_YjciwMX98AP2aaM5rpn5YuBuynLjaJdoCSTKczkH0ede4pcjB4pV39zCssNVlZcmIaRKRTM2LCOZdTD6KrZsRoGlmdb2XOVTvUHkYGCzCwNtPpJ68RC7uFXm3erFS4jhm4JhrigKgvNv8JEuL9JLDhIclrzy40OaGalbIbKwSqk'
  },
  {
    id: 'health',
    name: 'سلامت و پزشکی',
    icon: 'medical_services',
    badge: 'سناریوی یکپارچه مراکز درمانی و بیمه',
    title: 'غربالگری خودکار پرونده‌های بیمه و نسخه‌خوانی دیجیتال',
    desc: 'بررسی صحت اسناد بالینی، تطبیق پرونده‌های بیمارستانی با تعرفه‌های وزارت بهداشت و کشف خطاهای عمدی یا سهوی در نسخ دارویی در لحظه پذیرش.',
    metric: 'کاهش زمان تسویه مطالبات بیمه: از ۴۵ روز به ۴ ساعت',
    f1_title: 'تحلیل خودکار تصاویر پزشکی',
    f1_desc: 'پشتیبان تصمیم‌یار پزشک در تفسیر سی‌تی‌اسکن و MRI.',
    f2_title: 'رسیدگی به اسناد بستری',
    f2_desc: 'حذف تاخیرهای اداری و ارزیابی خسارت برخط.',
    tps: '16,500 TPS',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_8z5u97WPZyGKL_vI5rYGq4CAorenaKMKcTdcR_XzltYc2QMg8cmwXJ1jx5DH-e9pn5ch-AnMJjMGjemMOJmVZfXwM8N8rpzU-uksm4voNbHNF6FBQMS_iu3GNTNjRS5kGYXfiQRXh8NHQF3e-UQd--Ek-USN_iRVXuy4ttPdHY_vmvpxgxmcKhtmg5qsphvTz_ANIfDhuH6ZjO3oOl5gwauJLiwqfIsRlPEVsYzBLnUYUQAbaW5'
  },
  {
    id: 'ecommerce',
    name: 'تجارت الکترونیک',
    icon: 'storefront',
    badge: 'سناریوی خرده‌فروشی آنلاین و لجستیک',
    title: 'پشتیبانی مکالمه‌ای ۲۴/۷ و پیش‌بینی تقاضای انبارداری',
    desc: 'پاسخگویی فوق‌هوشمند به تیکت‌های مرجوعی، مسیربندی سفارش‌های ناوگان حمل‌ونقل و ارائه بسته‌های شخصی‌سازی‌شده تخفیف بر اساس رفتار خرید کاربران.',
    metric: 'افزایش نرخ تبدیل (Conversion Rate): ۲۸٪ رشد میانگین',
    f1_title: 'بات صوتی و متنی پشتیبانی',
    f1_desc: 'حل ۸۲٪ شکایات پرتکرار بدون ارجاع به اپراتور انسانی.',
    f2_title: 'مدیریت موجودی هوشمند',
    f2_desc: 'پیش‌بینی کسری موجودی کالاها پیش از رسیدن به نقطه بحرانی.',
    tps: '64,800 TPS',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8edn3Rc9KPITbuMNvFaEAPEMLdTgABDFd0XnqwIWPSccXDXkjPAVJp-10Gg5QwXdtFXlXx7fs_YjciwMX98AP2aaM5rpn5YuBuynLjaJdoCSTKczkH0ede4pcjB4pV39zCssNVlZcmIaRKRTM2LCOZdTD6KrZsRoGlmdb2XOVTvUHkYGCzCwNtPpJ68RC7uFXm3erFS4jhm4JhrigKgvNv8JEuL9JLDhIclrzy40OaGalbIbKwSqk'
  },
  {
    id: 'telecom',
    name: 'مخابرات و ارتباطات',
    icon: 'router',
    badge: 'سناریوی اپراتورهای تلفن همراه و ISPها',
    title: 'مدیریت ریزش مشترکین (Churn) و نگهداری پیشگیرانه دکل‌ها',
    desc: 'شناسایی زودهنگام نارضایتی کاربران پیش از لغو سرویس، تحلیل کیفیت شبکه مخابراتی بر اساس گزارش تیکت‌ها و توزیع بار خودکار بر ترافیک داده.',
    metric: 'جلوگیری از ریزش سالانه: حفظ بیش از ۱۲۰,۰۰۰ کاربر',
    f1_title: 'تحلیل احساسات مشتریان',
    f1_desc: 'پایش مستمر صدای مشتری در شبکه‌های اجتماعی و تماس‌ها.',
    f2_title: 'اتوماسیون فنی شبکه (NOC)',
    f2_desc: 'ارسال خودکار تیم تعمیرات پیش از اختلال سراسری سیگنال.',
    tps: '89,100 TPS',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_8z5u97WPZyGKL_vI5rYGq4CAorenaKMKcTdcR_XzltYc2QMg8cmwXJ1jx5DH-e9pn5ch-AnMJjMGjemMOJmVZfXwM8N8rpzU-uksm4voNbHNF6FBQMS_iu3GNTNjRS5kGYXfiQRXh8NHQF3e-UQd--Ek-USN_iRVXuy4ttPdHY_vmvpxgxmcKhtmg5qsphvTz_ANIfDhuH6ZjO3oOl5gwauJLiwqfIsRlPEVsYzBLnUYUQAbaW5'
  }
];

export const modelsData: ModelInfo[] = [
  {
    id: 'ava-chat',
    name: 'آوا-چت (Ava-Chat)',
    tag: 'LLM',
    tagColor: 'bg-[#7c3aed] text-[#ede0ff]',
    params: '۷۰B & ۸B',
    desc: 'قوی‌ترین مدل گفت‌وگویی زبان فارسی برای چت‌بات‌های شرکتی، استدلال و پشتیبانی هوشمند مشتریان.',
    features: ['۳۲k context', 'فارسی/انگلیسی'],
    category: 'llm'
  },
  {
    id: 'ava-vision',
    name: 'آوا-ویژن (Ava-Vision)',
    tag: 'VLM',
    tagColor: 'bg-[#03b5d3] text-[#003640]',
    params: '۳۴B',
    desc: 'ادراک چندوجهی تصاویر، خواندن اسناد اداری فارسی (OCR پیشرفته)، جداول مالی و نمودارها با دقت استثنایی.',
    features: ['OCR اسناد', '۴k Resolution'],
    category: 'vlm'
  },
  {
    id: 'ava-code',
    name: 'آوا-کد (Ava-Code)',
    tag: 'CODE',
    tagColor: 'bg-[#6f54bf] text-[#ebe1ff]',
    params: '۳۳B',
    desc: 'دستیار برنامه‌نویسی برای تولید کد، مستندسازی به زبان فارسی و بازبینی امنیتی معماری نرم‌افزار.',
    features: ['پشتیبانی از ۳۰+ زبان', 'Fill-In-Middle'],
    category: 'code'
  },
  {
    id: 'ava-voice',
    name: 'آوا-صدا (Ava-Voice)',
    tag: 'AUDIO',
    tagColor: 'bg-[#313441] text-[#e0e1f2]',
    params: 'STT / TTS',
    desc: 'تبدیل گفتار به متن هم‌زمان با تفکیک گویندگان و سنتز گفتار بسیار طبیعی با لحن‌های روان فارسی.',
    features: ['لهجه‌های بومی', 'Realtime WebSocket'],
    category: 'audio'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'مهندس روزبه پارسا',
    role: 'مدیر ارشد محصول',
    company: 'پرداخت‌یار نوین',
    quote: '«دقت پردازش متون حقوقی و اسناد بیمه‌ای در آوا فراتر از نمونه‌های بین‌المللی بود. سرعت پاسخ‌دهی بالا باعث شد زمان فرآیند تایید پرونده‌ها ۷۰٪ کاهش یابد.»',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDExV6ifF46Q9q6j0d9uKfoYb3fKv3MeUXrLehl9qHW--Iu27Qy6TAVSz-2jKXAzJ9NrjwjhWw-1b39LqPBbFSJudb703x1PyMV7P9sa6b0zW0DRYPg-nv_X81137V-NZugAajvM9_ypR39PgiPxcGFsU9o41rSIKOyHGa00oGx6k_PXcxO2Nw9Vl3KOcVYzilODAT6JO5d7HFT1lK2QTm1gUFMnpY0ZJAuYwJjGnxRfGEQzHOWeIGJ'
  },
  {
    name: 'دکتر سارا کیانی',
    role: 'مدیر فناوری',
    company: 'هلدینگ داده‌پردازی سپهر',
    quote: '«موتور گفتار به متن آوا تحولی عظیم در مرکز تماس ما ایجاد کرد. تحلیل لحن مکالمات با ضریب خطای ناچیز، به بزرگ‌ترین مزیت رقابتی ما تبدیل شده است.»',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyYNVDPXElMDpnJA86b3R-jWrrDR8TEc280yV1BXg8qXiqd-kqs56kDfU_cJzvm6InlmmWr8Ik6Dj866T7bR_SDTEvbUL10EHy7rvRT-H_Q_gXllOafvkIN4oXPdKtxqL10RxHwKbJ3wb8ukHVfWh5PQHZL-BxaXJ_kxmSiclLXp6so49MEVGjK_lTQCSJ5T5eI0BFmuQkNPBwd52P-ylbN0o0L2LsJyDLVFyS9e3wCJZC3au8o5c5'
  },
  {
    name: 'علی رحمانی',
    role: 'معمار نرم‌افزار',
    company: 'فروشگاه آنلاین آریا',
    quote: '«سادگی مستندات و کتابخانه‌های پایتون آوا کم‌نظیر است. پایپ‌لاین تولید محتوای هوشمند ما تنها در ۳ روز کاری به طور کامل راه‌اندازی شد.»',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZqSCRUs5eDEichWL4wKph3YsD_mJkw_e_vjzEBoOk5wxcb2MXtLYjl5AQqqRpqmX54QdgUdGVmNS0xBM_rpEN_ETymJNbmlkNJRkO6vHoNXXETWUe_Cpty_FERmpCyULP1cXYmeL_DyAJjom4ey5SKNLI3TqbKhGAqA42ugYci5BBifTEjlBFa7SwkPdFXmf-bp59eLEbstrqQHUkMfYMktZ_MSNEM2O2g0RZq6LDRiSDMDM5kSXF'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'پلن پایه',
    target: 'مناسب استارتاپ‌ها و پروژه‌های نوپا',
    priceMonthly: '۹۵۰,۰۰۰',
    priceAnnual: '۷۶۰,۰۰۰',
    priceRawMonthly: 950000,
    features: [
      { text: '۵ میلیون توکن ماهانه', included: true },
      { text: 'دسترسی به مدل متنی استاندارد', included: true },
      { text: 'پشتیبانی تیکتی در ساعات کاری', included: true },
      { text: 'دستیار صوتی و ساخت تصویر اختصاصی', included: false }
    ],
    cta: 'انتخاب پلن پایه'
  },
  {
    id: 'pro',
    name: 'پلن حرفه‌ای',
    target: 'ایده‌آل برای تیم‌های محصول در حال توسعه',
    priceMonthly: '۳,۴۰۰,۰۰۰',
    priceAnnual: '۲,۷۲۰,۰۰۰',
    priceRawMonthly: 3400000,
    featured: true,
    features: [
      { text: '۲۵ میلیون توکن مدل پیشرفته Ava-Pro', included: true },
      { text: 'دسترسی به موتور صوتی و OCR تصویر', included: true },
      { text: 'کلیدهای API چندگانه با محدودیت نرخ بالا', included: true },
      { text: 'پشتیبانی اولویت‌دار اختصاصی ۲۴ ساعته', included: true }
    ],
    cta: 'شروع پلن حرفه‌ای'
  },
  {
    id: 'enterprise',
    name: 'پلن سازمانی',
    target: 'توسعه داده‌های محرمانه و سرورهای On-Premise',
    priceMonthly: 'تماس بگیرید',
    priceAnnual: 'تماس بگیرید',
    priceRawMonthly: 0,
    features: [
      { text: 'توکن نامحدود و سرور اختصاصی GPU', included: true },
      { text: 'فاین‌تیون اختصاصی بر روی داده‌های سازمان', included: true },
      { text: 'تضمین توافق‌نامه سطح خدمت (SLA ۹۹.۹۹٪)', included: true },
      { text: 'مدیر حساب فنی اختصاصی و مشاوره حضوری', included: true }
    ],
    cta: 'مشاوره با مهندسان آوا'
  }
];

export const codeSnippets = {
  py: `from ava_ai import AvaClient

client = AvaClient(api_key="ava_live_secret")
response = client.chat.create(
    model="ava-chat-persian-v3",
    prompt="برای پردازش موازی داده‌ها چه راهکاری پیشنهاد می‌کنی؟"
)
print(response.text)`,
  ts: `import { Ava } from '@ava-ai/sdk';

const ava = new Ava({ apiKey: process.env.AVA_API_KEY });
const { message } = await ava.generate({
  model: 'ava-chat-persian-v3',
  prompt: 'طراحی ساختار دیتابیس توزیع‌شده',
});
console.log(message.content);`,
  curl: `curl https://api.ava-ai.ir/v1/completions \\
  -H "Authorization: Bearer $AVA_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "ava-chat-persian-v3", "prompt": "سلام دنیا", "max_tokens": 100}'`
};
