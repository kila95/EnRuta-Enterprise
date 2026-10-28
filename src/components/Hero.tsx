import React from 'react';
import { ArrowRight, ShieldCheck, Play, Activity, CheckCircle2, MapPin, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-950">
      
      {/* Luces de Fondo (Neon Glow Ambient Effects) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-amber-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-1/4 left-5 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Conversion Header */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Authority Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-amber-300">
                SaaS Corporativo para Carteras de Alto Volumen
              </span>
            </div>

            {/* Main Required Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-wrap">
              Digitaliza tu Cartera.{' '}
              <span className="gold-text-gradient block mt-1">
                Audita tu Capital en Tiempo Real.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              El estándar corporativo de gestión de microcréditos para empresas de cartera. Inmutabilidad criptográfica en cada recaudo, geolocalización de cobradores y liquidación neta de caja sin posibilidad de jineteo.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://creditos-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-sm uppercase tracking-wider font-mono shadow-2xl shadow-emerald-950 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Iniciar Prueba Gratis de 7 Días</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDemo}
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 font-semibold text-sm border border-amber-500/30 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer backdrop-blur-md"
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Explorar Probador Interactivo</span>
              </button>
            </div>

            {/* Trust Markers Row below CTAs */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cierre SHA-256</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Geofencing GPS</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Wompi / WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column - High Tech Interactive Dashboard Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-slate-800 to-emerald-500/20 shadow-2xl gold-border-glow">
              <div className="rounded-xl bg-slate-950/90 backdrop-blur-md p-6 space-y-5 border border-slate-800">
                
                {/* Live System Status Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Consola CFO EnRuta
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-900 border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded">
                    Ruta Medellín Centro · #04
                  </span>
                </div>

                {/* Real-time Collections Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">Recaudo Hoy</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">
                      $4.280.000 COP
                    </span>
                    <span className="text-[10px] text-emerald-500/90 font-mono">100% Auditado SHA-256</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">Cumplimiento</span>
                    <span className="text-lg font-bold font-mono text-amber-400 mt-0.5 block">
                      94.2% (38/40 Visitas)
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Tolerancia GPS 12m</span>
                  </div>
                </div>

                {/* Simulated Geofence Activity Stream */}
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      Última Marcación Terreno
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">14:22:08</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80 text-xs">
                    <div className="flex justify-between font-mono font-semibold text-white">
                      <span>Surtidora La 70</span>
                      <span className="text-emerald-400">+$50.000 COP</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      GPS Validado (Lat 6.2442, Long -75.5812) · Envió Recibo WA
                    </p>
                  </div>
                </div>

                {/* Interactive Demo Callout Button inside Card */}
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-mono font-bold border border-amber-500/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>Probar Demostración Completa en Vivo</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
