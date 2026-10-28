import React from 'react';
import { Lock, MapPin, Calculator, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AntiFraudPillars: React.FC = () => {
  const pillars = [
    {
      icon: Lock,
      number: '01',
      title: 'Inmutabilidad Criptográfica SHA-256',
      tagline: 'Eliminación absoluta del jineteo y alteración de facturas.',
      description: 'Cada recaudo en efectivo o transferencia genera un bloque de validación inmutable registrado de forma secuencial. El cobrador no puede modificar abonos pasados, editar montos ni emitir recibos dobles.',
      metrics: [
        { label: 'Integridad de Recaudos', value: '100% Auditada' },
        { label: 'Tiempo de Marcación', value: '< 1.2 segundos' }
      ]
    },
    {
      icon: MapPin,
      number: '02',
      title: 'Rastreo Geográfico Satelital GPS',
      tagline: 'Geocercas activas que certifican la visita real en terreno.',
      description: 'El sistema valida que la marcación del pago ocurra a menos de 15 metros de las coordenadas GPS registradas del establecimiento o vivienda del cliente. Previene cobros simulados desde casa o rutas falsas.',
      metrics: [
        { label: 'Tolerancia de Geocerca', value: '15 metros' },
        { label: 'Verificación Terreno', value: 'Satelital RTK' }
      ]
    },
    {
      icon: Calculator,
      number: '03',
      title: 'Cuadre Automático y Liquidación Neta',
      tagline: 'Cierre instantáneo de caja con cero margen de descuadre.',
      description: 'Cierre de día automatizado. Contrasta el efectivo entregado en bóveda con los registros PWA en campo y transacciones PSE/Wompi. Clasifica automáticamente la cartera en Vigente, Mora 1-7 días y Crítica.',
      metrics: [
        { label: 'Descuadre Promedio', value: '$0 COP' },
        { label: 'Tiempo Cierre Ruta', value: 'Instantáneo' }
      ]
    }
  ];

  return (
    <section id="pilares" className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-400/50 text-amber-400 text-xs font-mono font-medium mb-4 shadow-lg">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Blindaje Institucional de Cartera</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight break-words">
              Pilares Anti-Fraude de Nivel Bancario
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Diseñado para erradicar las fugas históricas del microcrédito urbano: alteración de recibos, desvío de efectivo y cobros fantasma.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delayMs={idx * 120}>
                <div 
                  style={{ boxShadow: '0 0 25px -5px rgba(16, 185, 129, 0.25), inset 0 0 15px -5px rgba(16, 185, 129, 0.15)' }}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/95 border-2 border-amber-500/50 hover:border-amber-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/40 h-full backdrop-blur-md"
                >
                  {/* Header Zone */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-950 border-2 border-amber-400/50 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-300 transition-all shadow-md shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-700 group-hover:text-amber-400 transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors break-words">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-amber-400 mb-4">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Metrics / Proof Grid inside Card */}
                  <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 sm:gap-4">
                    {pillar.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-950/90 p-2.5 sm:p-3 rounded-lg border border-emerald-500/30 group-hover:border-emerald-400/60 transition-colors">
                        <span className="block text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                          {m.label}
                        </span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Claim to Proof Adjacency Banner */}
        <ScrollReveal delayMs={300}>
          <div 
            style={{ boxShadow: '0 0 25px -5px rgba(16, 185, 129, 0.25)' }}
            className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-emerald-500/50 hover:border-emerald-400 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Validado en Carteras Complejas de Medellín, Bogotá y Cali
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Más de $14.200 Millones COP procesados sin pérdida de registro ni descuadres de caja.
                </p>
              </div>
            </div>
            <a
              href="https://creditos-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-mono font-semibold transition-all border border-amber-400/60 hover:border-amber-300 shrink-0 hover:-translate-y-0.5"
            >
              <span>Ver Tarifa Plana por Administrador</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
