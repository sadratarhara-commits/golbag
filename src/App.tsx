import { useState, useEffect } from 'react';
import { ScreenId, PricingPlan } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnterpriseScreen } from './components/screens/EnterpriseScreen';
import { DeveloperScreen } from './components/screens/DeveloperScreen';
import { BusinessScreen } from './components/screens/BusinessScreen';
import { AuthModal } from './components/modals/AuthModal';
import { SandboxModal } from './components/modals/SandboxModal';
import { ApiKeyModal } from './components/modals/ApiKeyModal';
import { RoiReportModal } from './components/modals/RoiReportModal';
import { PlanModal } from './components/modals/PlanModal';
import { OfficeHoursModal } from './components/modals/OfficeHoursModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('enterprise');

  // Modals state
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  const [sandboxModalOpen, setSandboxModalOpen] = useState(false);
  const [apiKeyModalOpen, setApiKeyModalOpen] = useState(false);
  const [roiModal, setRoiModal] = useState<{
    isOpen: boolean;
    staff: number;
    tickets: number;
    hours: number;
    money: string;
  }>({
    isOpen: false,
    staff: 45,
    tickets: 1200,
    hours: 43200,
    money: '۴.۸'
  });
  const [planModal, setPlanModal] = useState<{
    isOpen: boolean;
    plan: PricingPlan | null;
    billingPeriod: 'monthly' | 'annual';
  }>({
    isOpen: false,
    plan: null,
    billingPeriod: 'monthly'
  });
  const [officeHoursModalOpen, setOfficeHoursModalOpen] = useState(false);

  // Scroll to top on screen switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  return (
    <div className="min-h-screen bg-[#10131e] text-[#e0e1f2] flex flex-col font-sans selection:bg-[#7c3aed] selection:text-[#ede0ff]">
      {/* Universal Header */}
      <Header
        currentScreen={currentScreen}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
        onOpenDemo={() => {
          if (currentScreen !== 'enterprise') {
            setCurrentScreen('enterprise');
            setTimeout(() => {
              document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Screen Renderer */}
      <main className="w-full pt-20 flex-1">
        {currentScreen === 'enterprise' && (
          <EnterpriseScreen
            onOpenSandbox={() => setSandboxModalOpen(true)}
            onOpenRoiModal={(staff, tickets, hours, money) =>
              setRoiModal({ isOpen: true, staff, tickets, hours, money })
            }
            onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
          />
        )}

        {currentScreen === 'developer' && (
          <DeveloperScreen
            onSelectScreen={(screen) => setCurrentScreen(screen)}
            onOpenApiKeyModal={() => setApiKeyModalOpen(true)}
            onOpenOfficeHoursModal={() => setOfficeHoursModalOpen(true)}
          />
        )}

        {currentScreen === 'business' && (
          <BusinessScreen
            onOpenPlanModal={(plan, billingPeriod) =>
              setPlanModal({ isOpen: true, plan, billingPeriod })
            }
            onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onSelectScreen={(screen) => setCurrentScreen(screen)} />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

      <SandboxModal
        isOpen={sandboxModalOpen}
        onClose={() => setSandboxModalOpen(false)}
      />

      <ApiKeyModal
        isOpen={apiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
      />

      <RoiReportModal
        isOpen={roiModal.isOpen}
        staff={roiModal.staff}
        tickets={roiModal.tickets}
        savedHours={roiModal.hours}
        savedBillionTomans={roiModal.money}
        onClose={() => setRoiModal({ ...roiModal, isOpen: false })}
      />

      <PlanModal
        isOpen={planModal.isOpen}
        plan={planModal.plan}
        billingPeriod={planModal.billingPeriod}
        onClose={() => setPlanModal({ ...planModal, isOpen: false, plan: null })}
      />

      <OfficeHoursModal
        isOpen={officeHoursModalOpen}
        onClose={() => setOfficeHoursModalOpen(false)}
      />
    </div>
  );
}
