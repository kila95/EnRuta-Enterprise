import React, { useState } from 'react';
import { Shield, ArrowRight, Activity, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Zone 1: Single Text Wordmark Brand */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-[1px] shadow-lg shadow-amber-900/20">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center transition-transform group-hover:scale-95">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
            EnRuta<span className="text-amber-500 font-light">Enterprise</span>
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#pilares" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Seguridad Criptográfica
          </a>
          <a href="#gps-auditoria" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Auditoría GPS
          </a>
          <a href="#calculadora" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Calculadora CFO
          </a>
          <a href="#precios" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Tarifa Plana
          </a>
          <button 
            onClick={onOpenDemo}
            className="text-amber-400/90 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-semibold cursor-pointer"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            Probador Interactivo
          </button>
        </nav>

        {/* Zone 3: Primary CTA as Hyperlink (Desktop) & Hamburger Toggle (Mobile) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://creditos-phi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 items-center gap-2"
          >
            <span>Prueba Gratis 7 Días</span>
            <ArrowRight className="w-4 h-4 text-emerald-100 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500/40 transition-colors focus:outline-none"
            aria-label="Abrir Menú de Navegación"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-sm text-slate-300">
            <a 
              href="#pilares" 
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              Seguridad Criptográfica
            </a>
            <a 
              href="#gps-auditoria" 
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              Auditoría GPS
            </a>
            <a 
              href="#calculadora" 
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              Calculadora CFO
            </a>
            <a 
              href="#precios" 
              onClick={closeMobileMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-400 transition-colors"
            >
              Tarifa Plana ($140k)
            </a>
            <button 
              onClick={() => {
                closeMobileMenu();
                onOpenDemo();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-amber-400 font-semibold border border-amber-500/30 text-left"
            >
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Probador Interactivo (Demo)</span>
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-900">
            <a
              href="https://creditos-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs uppercase tracking-wider font-mono shadow-lg flex items-center justify-center gap-2"
            >
              <span>Iniciar Prueba Gratis de 7 Días</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
