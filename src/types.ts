export type ScreenId = 'enterprise' | 'developer' | 'business';

export interface IndustryInfo {
  id: string;
  name: string;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  metric: string;
  f1_title: string;
  f1_desc: string;
  f2_title: string;
  f2_desc: string;
  tps: string;
  bgImage: string;
}

export interface ModelInfo {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  params: string;
  desc: string;
  features: string[];
  category: 'all' | 'llm' | 'vlm' | 'code' | 'audio';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  priceMonthly: string;
  priceAnnual: string;
  priceRawMonthly: number;
  featured?: boolean;
  features: { text: string; included: boolean }[];
  cta: string;
}
