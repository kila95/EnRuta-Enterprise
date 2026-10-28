import React from 'react';
import { Shield, ArrowRight, Lock, Building, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const FooterCTA: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-800/80 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Accent Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/5 via-emerald-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* FINAL CONVERSION BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 shadow-2xl gold-border-glow text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Blindaje de Capital Inmediato</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-wrap">
            Digitalice sus Rutas Hoy. Audite cada Peso en Tiempo Real.
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Elimine el riesgo operativo del efectivo en calle. Pruebe EnRuta Enterprise durante 7 días en su empresa completamente gratis.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://creditos-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-sm uppercase tracking-wider font-mono shadow-2xl hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3"
            >
              <span>Crear Cuenta Corporativa Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2 pt-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sin tarjeta de crédito requerida para iniciar el periodo de prueba.</span>
          </p>

        </div>

        {/* FOOTER LINKS & LEGAL METADATA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-slate-900 text-xs text-slate-400">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                EnRuta<span className="text-amber-500 font-light">Enterprise</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Plataforma B2B para la custodia inmutable de carteras de alto volumen, geofencing satelital y liquidación neta de recaudos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono font-bold text-white tracking-wider">Navegación</p>
            <ul className="space-y-1.5 font-mono">
              <li><a href="#pilares" className="hover:text-amber-400 transition-colors">Pilares Anti-Fraude</a></li>
              <li><a href="#gps-auditoria" className="hover:text-amber-400 transition-colors">Auditoría GPS Satelital</a></li>
              <li><a href="#calculadora" className="hover:text-amber-400 transition-colors">Simulador de Liquidez CFO</a></li>
              <li><a href="#precios" className="hover:text-amber-400 transition-colors">Tarifa Plana ($140.000 COP)</a></li>
            </ul>
          </div>

          {/* Integrations */}
          <div className="space-y-2">
            <p className="text-xs uppercase font-mono font-bold text-white tracking-wider">Integraciones Válidas</p>
            <ul className="space-y-1.5 font-mono">
              <li>• Procesamiento Wompi / PSE / Nequi</li>
              <li>• Notificaciones e Insumos WhatsApp</li>
              <li>• Sincronización PWA Offline (IndexedDB)</li>
              <li>• Exportación ERP Excel / PDF Auditables</li>
            </ul>
          </div>

          {/* Corporate Contact & Habeas Data */}
          <div className="space-y-2 font-mono">
            <p className="text-xs uppercase font-bold text-white tracking-wider">Atención Institucional</p>
            <p className="flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Sede Principal: Medellín, Colombia</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>+57 (604) 444-9090 / WhatsApp VIP</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>corporativo@enrutaenterprise.co</span>
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} EnRuta Enterprise SaaS S.A.S. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Cumplimiento estricto Ley 1581 de 2012 (Habeas Data Colombia) y Protocolos Criptográficos SHA-256.
          </p>
        </div>

      </div>
    </footer>
  );
};
