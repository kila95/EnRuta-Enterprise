import React from 'react';
import { ShieldAlert, FileSpreadsheet, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const EnterpriseFeatures: React.FC = () => {
  const features = [
    {
      icon: ShieldAlert,
      title: 'Gestión de Crisis en 1 Clic',
      description: '¿Un operario perdió su dispositivo? Revoca el acceso a su cuenta en milisegundos desde tu panel central. La información de tus clientes jamás queda expuesta en la calle.',
      tag: 'Seguridad en Tiempo Real',
      highlightColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-400/50'
    },
    {
      icon: FileSpreadsheet,
      title: 'Onboarding Instantáneo',
      description: 'Migra tu cartera actual desde Excel en menos de 5 minutos. Sin digitación manual y sin pérdida de datos. Nuestro sistema lee tu archivo y estructura tus rutas al instante.',
      tag: 'Importación Directa .XLSX',
      highlightColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-400/50'
    },
    {
      icon: TrendingUp,
      title: 'Inteligencia Financiera',
      description: 'Tableros gráficos que no solo muestran el recaudo diario, sino que proyectan el flujo de caja mensual y alertan sobre el índice de riesgo de tu cartera en tiempo real.',
      tag: 'Proyección Analítica CFO',
      highlightColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-400/50'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-400/50 text-amber-400 text-xs font-mono font-medium mb-3 shadow-lg">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Capacidades Avanzadas de Plataforma</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Características de Nivel Enterprise
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Herramientas diseñadas para mantener la continuidad operativa, la seguridad de la información y el control estratégico de su organización.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Dark Grid with Intense Perimeter Emerald Glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delayMs={idx * 120}>
                <div 
                  style={{ boxShadow: '0 0 25px -5px rgba(16, 185, 129, 0.25), inset 0 0 15px -5px rgba(16, 185, 129, 0.15)' }}
                  className="group relative p-8 rounded-2xl bg-slate-900/95 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/40 flex flex-col justify-between h-full backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-xl bg-slate-950 border-2 border-emerald-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all p-3 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded border ${item.badgeBg} ${item.highlightColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Garantía de Continuidad Nivel Bancario</span>
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
