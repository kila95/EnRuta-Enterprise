import React from 'react';
import { Check, ArrowRight, Building2, HelpCircle, Users, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const secondaryBenefits = [
    'Sincronización PWA Offline garantizada en zonas con baja señal',
    'Rastreo GPS en tiempo real y geocercas satelitales a 15 metros',
    'Notificaciones automáticas por WhatsApp con comprobante digital',
    'Cuadre de caja automatizado y liquidación neta de cobradores',
    'Inmutabilidad criptográfica SHA-256 en cada recibo generado',
    'Consola CFO con exportación inmediata a Excel y PDF auditables',
    'Integración directa con Wompi, Nequi y PSE para recaudos digitales',
    'Soporte técnico VIP 24/7 con atención corporativa en Colombia'
  ];

  return (
    <section id="precios" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/60 text-amber-400 text-xs font-mono font-medium mb-3 shadow-lg">
              <Building2 className="w-3.5 h-3.5" />
              <span>Modelo Fijo Sin Cobros Ocultos por Usuario</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tarifa Plana Institucional por Administrador
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Pague una única tarifa plana para su cuenta administrativa. Sin cobro adicional por cantidad de cobradores, operarios ni volumen recaudado.
            </p>
          </div>
        </ScrollReveal>

        {/* SINGLE CENTRAL VIP HIGHLIGHTED CARD WITH INTENSE GOLD GLOW */}
        <ScrollReveal delayMs={150}>
          <div className="max-w-2xl mx-auto relative">
            
            {/* Direct Backlight Aura */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/30 via-emerald-500/20 to-amber-500/30 blur-2xl opacity-90 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

            <div 
              style={{ boxShadow: '0 0 35px 0px rgba(234, 179, 8, 0.35), inset 0 0 20px 0px rgba(234, 179, 8, 0.15)' }}
              className="relative group p-8 sm:p-10 rounded-3xl bg-slate-900/95 border-2 border-amber-400/80 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 gold-pricing-glow backdrop-blur-md"
            >
              
              {/* Top Recommended Tag */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-widest font-mono shadow-xl border border-amber-300">
                Licencia Corporativa Unificada
              </div>

              <div className="text-center pt-2 pb-6 border-b border-slate-800">
                <h3 className="text-2xl font-bold text-white">Suscripción por Administrador</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Acceso completo a la plataforma para la gestión de su empresa
                </p>

                <div className="mt-6 flex items-baseline justify-center gap-1 font-mono">
                  <span className="text-2xl font-bold text-amber-400">$</span>
                  <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">140.000</span>
                  <span className="text-slate-400 text-sm font-sans font-medium">COP / mes</span>
                </div>

                <p className="text-xs text-emerald-400 font-mono mt-3 font-semibold">
                  Un solo pago fijo. Cobradores y trabajadores 100% ilimitados.
                </p>
              </div>

              {/* Core Highlighted Bullet Benefits */}
              <div className="py-8 space-y-4">
                
                {/* Viñeta 1 (Destacada) */}
                <div className="p-4 rounded-xl bg-amber-500/15 border-2 border-amber-400/60 flex items-start gap-3.5 group-hover:border-amber-300 transition-colors shadow-md">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-md">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-amber-300 font-mono tracking-wide block">
                      Cobradores y operarios ILIMITADOS.
                    </span>
                    <span className="text-xs text-slate-300 mt-0.5 block">
                      Agregue todos los cobradores de su equipo sin costo adicional por usuario.
                    </span>
                  </div>
                </div>

                {/* Viñeta 2 */}
                <div className="flex items-start gap-3.5 px-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-white leading-snug">
                    Rutas y volumen de clientes sin restricciones.
                  </span>
                </div>

                {/* Viñeta 3 */}
                <div className="flex items-start gap-3.5 px-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-white leading-snug">
                    Un solo pago fijo, sin importar cuánto crezca tu equipo.
                  </span>
                </div>

                {/* Secondary Feature Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <p className="text-[11px] uppercase font-mono text-slate-400 tracking-wider font-semibold mb-2">
                    Incluido en tu suscripción administrativa:
                  </p>
                  {secondaryBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/40">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-300 leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* CTA Button as Exact Hyperlink */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <a
                  href="https://creditos-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-sm uppercase tracking-wider font-mono shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2 border border-emerald-400/50"
                >
                  <span>Iniciar Prueba Gratis de 7 Días</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                
                {/* Viñeta inferior gancho de ventas */}
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-amber-400/50 flex items-start gap-3 text-left shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    Experimenta el control absoluto de tu capital. Accede a 7 días de prueba institucional gratuita y valida la eficiencia operativa de tu cartera.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <p className="flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-slate-400" />
            ¿Tienes múltiples empresas o necesitas integración personalizada con tu ERP?
            <a href="https://creditos-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-semibold ml-1">
              Contactar Soporte Institucional
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
