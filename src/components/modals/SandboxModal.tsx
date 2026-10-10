import React, { useState } from 'react';

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SandboxModal: React.FC<SandboxModalProps> = ({ isOpen, onClose }) => {
  const [docType, setDocType] = useState<'invoice' | 'insurance' | 'ticket'>('invoice');
  const [processingState, setProcessingState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [progressStep, setProgressStep] = useState(0);

  if (!isOpen) return null;

  const samples = {
    invoice: {
      name: 'فاکتور رسمی فروش تجهیزات شبکه (PDF)',
      source: 'سامانه مودیان / اسکن دبیرخانه',
      rawText: 'شماره فاکتور: ۱۴۰۳/۸۸۲۱ - خریدار: شرکت فناوری پارس - مبلغ کل: ۱,۴۲۰,۰۰۰,۰۰۰ ریال - شناسه ملی: ۱۰۱۰۳۸۲۹۱ - وضعیت پرداخت: تسویه‌شده',
      output: {
        document_type: 'TAX_COMPLIANT_INVOICE',
        tax_id: '101038291',
        total_amount_irr: 1420000000,
        validation_status: 'PASSED',
        crm_action: 'SAP_B1_INVOICE_POSTED',
        execution_time_ms: 184
      }
    },
    insurance: {
      name: 'پرونده بستری و صورتحساب درمانی (OCR)',
      source: 'پورتال بیمه تکمیلی سلامت',
      rawText: 'بیمار: مریم کاظمی - کد ملی: ۰۰۷۳۸۲۹۱۸ - بیمارستان: پارس تهران - بخش: جراحی عمومی - تشخیص: کد K80.2 - مبلغ خسارت تاییدشده: ۳۸۰,۰۰۰,۰۰۰ ریال',
      output: {
        document_type: 'HOSPITAL_DISCHARGE_RECORD',
        national_id: '007382918',
        icd_code: 'K80.2',
        coverage_verified: true,
        crm_action: 'DIRECT_SETTLEMENT_AUTHORIZED',
        execution_time_ms: 212
      }
    },
    ticket: {
      name: 'تیکت صوتی انتقاد و گزارش اختلال (VoIP)',
      source: 'مرکز تماس مشتریان ویپ',
      rawText: '«سلام، درگاه پرداخت من از ساعت ۱۰ صبح در اتصال به بانک رفاه خطای تایم‌اوت میده و حدود ۴۵ تراکنش مشتریانم لغو شده... لطفا سریع بررسی کنید.»',
      output: {
        document_type: 'CALL_CENTER_VOICE_STREAM',
        sentiment_score: -0.78,
        priority: 'CRITICAL_URGENT',
        extracted_entities: ['بانک رفاه', 'درگاه پرداخت', 'تایم‌اوت'],
        crm_action: 'ESCALATE_TO_L3_INCIDENT_TEAM',
        execution_time_ms: 96
      }
    }
  };

  const handleRunPipeline = () => {
    setProcessingState('running');
    setProgressStep(1);

    setTimeout(() => {
      setProgressStep(2);
    }, 600);

    setTimeout(() => {
      setProgressStep(3);
    }, 1200);

    setTimeout(() => {
      setProcessingState('completed');
    }, 1800);
  };

  const currentSample = samples[docType];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#181b27] border border-[#313441] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#1c1f2b] border-b border-[#313441] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6]">terminal</span>
            <h3 className="font-semibold text-lg text-white">محیط شبیه‌ساز پایپ‌لاین هوش مصنوعی آوا (Sandbox)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#ccc3d8] hover:text-white rounded-lg hover:bg-[#313441] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-right">
          <div>
            <label className="block text-sm font-medium text-[#ccc3d8] mb-2">انتخاب نوع سند سازمانی جهت تست:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => { setDocType('invoice'); setProcessingState('idle'); }}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                  docType === 'invoice'
                    ? 'border-[#7c3aed] bg-[#7c3aed]/10 text-white'
                    : 'border-[#313441] bg-[#1c1f2b] text-[#ccc3d8] hover:border-[#4cd7f6]/50'
                }`}
              >
                <div className="font-semibold text-sm">فاکتور و سند مالی</div>
                <div className="text-xs text-[#958da1] mt-1">تطبیق مالیاتی و کربنکینگ</div>
              </button>
              <button
                onClick={() => { setDocType('insurance'); setProcessingState('idle'); }}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                  docType === 'insurance'
                    ? 'border-[#7c3aed] bg-[#7c3aed]/10 text-white'
                    : 'border-[#313441] bg-[#1c1f2b] text-[#ccc3d8] hover:border-[#4cd7f6]/50'
                }`}
              >
                <div className="font-semibold text-sm">پرونده بالینی و بیمه</div>
                <div className="text-xs text-[#958da1] mt-1">نسخه‌خوانی و تعرفه‌سنجی</div>
              </button>
              <button
                onClick={() => { setDocType('ticket'); setProcessingState('idle'); }}
                className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                  docType === 'ticket'
                    ? 'border-[#7c3aed] bg-[#7c3aed]/10 text-white'
                    : 'border-[#313441] bg-[#1c1f2b] text-[#ccc3d8] hover:border-[#4cd7f6]/50'
                }`}
              >
                <div className="font-semibold text-sm">صوت مرکز تماس (VoIP)</div>
                <div className="text-xs text-[#958da1] mt-1">تحلیل احساسات و اقدام CRM</div>
              </button>
            </div>
          </div>

          {/* Sample Input Preview */}
          <div className="p-4 rounded-xl bg-[#10131e] border border-[#313441]/60">
            <div className="flex justify-between items-center text-xs text-[#958da1] mb-2 font-mono">
              <span>{currentSample.name}</span>
              <span>منبع: {currentSample.source}</span>
            </div>
            <p className="text-sm text-[#e0e1f2] leading-relaxed font-sans">{currentSample.rawText}</p>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#ccc3d8]">
              <span>مراحل خط لوله (Pipeline Architecture):</span>
              <span className="font-mono text-[#4cd7f6]">
                {processingState === 'running' ? 'در حال اجرا...' : processingState === 'completed' ? 'تکمیل شد' : 'آماده پردازش'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  progressStep >= 1
                    ? 'border-[#4cd7f6] bg-[#4cd7f6]/10 text-[#4cd7f6]'
                    : 'border-[#313441] text-[#958da1]'
                }`}
              >
                ۱. استخراج امن OCR / Whisper
              </div>
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  progressStep >= 2
                    ? 'border-[#7c3aed] bg-[#7c3aed]/10 text-[#d2bbff]'
                    : 'border-[#313441] text-[#958da1]'
                }`}
              >
                ۲. پالایش معنایی Ava LLM
              </div>
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  progressStep >= 3
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    : 'border-[#313441] text-[#958da1]'
                }`}
              >
                ۳. فراخوانی وب‌هوک ERP / CRM
              </div>
            </div>
          </div>

          {/* JSON Structured Output Result */}
          {processingState === 'completed' && (
            <div className="p-4 rounded-xl bg-[#0b0e19] border border-[#313441] text-left" dir="ltr">
              <div className="flex justify-between items-center text-xs text-[#4cd7f6] mb-2 font-mono">
                <span>STATUS: 200 OK // ZERO_SECURITY_LEAK</span>
                <span>Latency: {currentSample.output.execution_time_ms}ms</span>
              </div>
              <pre className="text-xs text-[#cebdff] font-mono overflow-x-auto">
                {JSON.stringify(currentSample.output, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#1c1f2b] border-t border-[#313441] flex items-center justify-between">
          <button
            onClick={() => setProcessingState('idle')}
            className="text-xs text-[#ccc3d8] hover:text-white cursor-pointer"
          >
            بازنشانی
          </button>
          <button
            disabled={processingState === 'running'}
            onClick={handleRunPipeline}
            className="px-6 py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#732ee4] text-white text-sm font-medium transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">play_arrow</span>
            <span>{processingState === 'running' ? 'در حال تحلیل...' : 'اجرای خط پردازش زنده'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
