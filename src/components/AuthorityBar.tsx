import React from 'react';
import { CreditCard, WifiOff, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AuthorityBar: React.FC = () => {
  const items = [
    {
      icon: CreditCard,
      title: 'Procesamiento Wompi',
      subtitle: 'PSE, Bancolombia, Nequi y Tarjetas',
      badge: 'Cero Riesgo Efectivo'
    },
    {
      icon: WifiOff,
      title: 'Sincronización Offline PWA',
      subtitle: 'Recaudos garantizados en terreno sin señal',
      badge: 'Cola Encriptada Local'
    },
    {
      icon: MapPin,
      title: 'Auditoría Satelital GPS',
      subtitle: 'Geocercas a 15m del domicilio registrado',
      badge: 'Geofencing Activo'
    },
    {
      icon: MessageSquare,
      title: 'Comprobantes WhatsApp',
      subtitle: 'Notificación e insumos con Hash SHA-256',
      badge: 'Inmutabilidad Inmediata'
    }
  ];

  return (
    <section className="relative z-10 py-10 sm:py-12 border-y border-slate-800/80 bg-slate-900/60 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono">
              Infraestructura Operativa de Alta Autoridad
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-1 break-words">
              4 Tecnologías Integradas para la Custodia Ininterrumpida de su Capital
            </h2>
          </div>
        </ScrollReveal>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delayMs={idx * 100}>
                <div className="group p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-950/30 relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all pointer-events-none"></div>
                  
                  <div>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:border-amber-500/60 group-hover:scale-105 transition-all shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 text-amber-400/90 border border-amber-500/20 shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5 break-words">
                      {item.title}
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 inline-block" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
