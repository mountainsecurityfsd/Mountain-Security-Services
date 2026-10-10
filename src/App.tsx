import React, { useState, useEffect } from 'react';
import { PageRoute, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RequisitionModal } from './components/RequisitionModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { HomePage } from './pages/HomePage';
import { WorkforceDirectoryPage } from './pages/WorkforceDirectoryPage';
import { HireStaffPage } from './pages/HireStaffPage';
import { WorkerCareersPage } from './pages/WorkerCareersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('security-guards');
  const [language, setLanguage] = useState<Language>('en');
  
  // Requisition Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState('Armed & Unarmed Security Guards');

  // WhatsApp Contact Selection Modal state
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('dir', language === 'ur' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const handleNavigate = (route: PageRoute, categoryId?: string) => {
    setCurrentRoute(route);
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (roleName: string) => {
    setModalRole(roleName);
    setModalOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#faf8ff] text-[#111a36] ${language === 'ur' ? 'font-urdu' : 'font-body'}`}>
      {/* Universal Fixed Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={setLanguage}
        onOpenWhatsAppModal={() => setWhatsAppModalOpen(true)}
      />

      {/* Main Page Viewport with Top Padding for Fixed Navigation */}
      <main className="w-full pt-[7.5rem] flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            language={language}
            onOpenRequisitionModal={handleOpenModal}
            onToggleLanguage={setLanguage}
          />
        )}

        {currentRoute === 'directory' && (
          <WorkforceDirectoryPage
            onNavigate={handleNavigate}
            language={language}
            onOpenRequisitionModal={handleOpenModal}
            initialTab={selectedCategoryId}
          />
        )}

        {currentRoute === 'hire-staff' && (
          <HireStaffPage
            onNavigate={handleNavigate}
            language={language}
          />
        )}

        {currentRoute === 'careers' && (
          <WorkerCareersPage
            onNavigate={handleNavigate}
            language={language}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            language={language}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            language={language}
            onOpenWhatsAppModal={() => setWhatsAppModalOpen(true)}
          />
        )}

        {currentRoute === 'service-detail' && (
          <ServiceDetailPage
            categoryId={selectedCategoryId}
            onNavigate={handleNavigate}
            language={language}
            onOpenRequisitionModal={handleOpenModal}
          />
        )}

        {currentRoute === 'privacy-policy' && (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
            language={language}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
      />

      {/* Requisition Order Modal */}
      <RequisitionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultRole={modalRole}
      />

      {/* WhatsApp Number Selection Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        language={language}
      />
    </div>
  );
}
