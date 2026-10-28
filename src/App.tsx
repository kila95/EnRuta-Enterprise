import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityBar } from './components/AuthorityBar';
import { AntiFraudPillars } from './components/AntiFraudPillars';
import { EnterpriseFeatures } from './components/EnterpriseFeatures';
import { ComparisonTable } from './components/ComparisonTable';
import { CfoCalculator } from './components/CfoCalculator';
import { PricingSection } from './components/PricingSection';
import { FooterCTA } from './components/FooterCTA';
import { TrialModal } from './components/TrialModal';
import { DemoPreview } from './components/DemoPreview';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState<boolean>(false);
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);

  const handleOpenTrial = () => setIsTrialOpen(true);
  const handleCloseTrial = () => setIsTrialOpen(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Bar Contract Navigation */}
      <Header 
        onOpenTrial={handleOpenTrial} 
        onOpenDemo={handleOpenDemo} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero 
          onOpenTrial={handleOpenTrial} 
          onOpenDemo={handleOpenDemo} 
        />

        {/* Section 2: Authority Bar (4 Pillars) */}
        <AuthorityBar />

        {/* Section 3: Anti-Fraud Pillars */}
        <AntiFraudPillars />

        {/* Section: Características de Nivel Enterprise */}
        <EnterpriseFeatures />

        {/* Section: Matriz Comparativa (EnRuta vs Métodos Tradicionales) */}
        <ComparisonTable />

        {/* CFO Yield & Liquidity Calculator */}
        <CfoCalculator 
          onOpenTrial={handleOpenTrial} 
        />

        {/* Section 4: Single Central VIP Pricing Card */}
        <PricingSection 
          onOpenTrial={handleOpenTrial} 
        />
      </main>

      {/* Section 5: Footer CTA */}
      <FooterCTA 
        onOpenTrial={handleOpenTrial} 
      />

      {/* Interactive Modals */}
      <TrialModal 
        isOpen={isTrialOpen} 
        onClose={handleCloseTrial} 
      />

      <DemoPreview 
        isOpen={isDemoOpen} 
        onClose={handleCloseDemo} 
        onOpenTrial={handleOpenTrial} 
      />

    </div>
  );
}
