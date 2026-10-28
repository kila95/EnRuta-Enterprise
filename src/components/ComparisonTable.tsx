import React from 'react';
import { Check, X, Shield, Zap, Lock, Cpu, Server, Clock, AlertTriangle, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      category: 'Seguridad & Criptografía',
      feature: 'Inmutabilidad de Registro',
      enRuta: 'Inalterable (Firma SHA-256 instantánea)',
      traditional: 'Fácilmente modificable o editable retroactivamente',
      isEnRutaSuperior: true
    },
    {
      category: 'Seguridad & Criptografía',
      feature: 'Geofencing y Trazabilidad Terreno',
      enRuta: 'Validación GPS Satelital a menos de 15 metros',
      traditional: 'Cero verificación de visita física al domicilio',
      isEnRutaSuperior: true
    },
    {
      category: 'Seguridad & Criptografía',
      feature: 'Protección de Datos e Extravío',
      enRuta: 'Revocación remota en milisegundos sin datos expuestos',
      traditional: 'Archivos o fotos de recibos expuestos en celulares',
      isEnRutaSuperior: true
    },
    {
      category: 'Latencia & Tiempo Real',
      feature: 'Latencia de Actualización de Caja',
      enRuta: 'Tiempo Real (< 1.2 segundos por cobro)',
      traditional: 'Alta latencia (8 a 24 horas al cerrar el día)',
      isEnRutaSuperior: true
    },
    {
      category: 'Latencia & Tiempo Real',
      feature: 'Operatividad Offline en Calle',
      enRuta: 'PWA con cola encriptada local en IndexedDB',
      traditional: 'Se detiene el cobro si falla la conexión móvil',
      isEnRutaSuperior: true
    },
    {
      category: 'Eficiencia & Costos',
      feature: 'Comprobante Inmediato al Cliente',
      enRuta: 'WhatsApp automático con recibo digital inmutable',
      traditional: 'Papel físico alterable o recibos manuales',
      isEnRutaSuperior: true
    },
    {
      category: 'Eficiencia & Costos',
      feature: 'Modelo de Licenciamiento',
      enRuta: 'Tarifa plana de $140k COP (Cobradores Ilimitados)',
      traditional: 'Cobro por usuario / Fugas constantes por jineteo',
      isEnRutaSuperior: true
    }
  ];

  return (
    <section className="py-24 bg-slate-900/90 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Matriz Comparativa de Arquitectura Financiera</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EnRuta Enterprise vs. Métodos Tradicionales
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Compare la diferencia entre una infraestructura criptográfica en tiempo real y el riesgo operativo de las hojas de cálculo o software local.
          </p>
        </div>

        {/* COMPARATIVE TABLE CARD */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Header Row */}
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 text-slate-400 font-semibold w-1/3">
                    Factor de Evaluación
                  </th>
                  <th className="py-5 px-6 bg-emerald-950/40 text-emerald-300 font-bold border-x border-emerald-500/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span>EnRuta Enterprise (SaaS VIP)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-400 font-semibold w-1/3">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-slate-500" />
                      <span>Excel / Software Local Tradicional</span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm font-sans">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-900/50 transition-colors"
                  >
                    {/* Feature Label */}
                    <td className="py-4 px-6 font-semibold text-white">
                      <span className="block text-[10px] text-amber-400/90 font-mono uppercase mb-0.5">
                        {row.category}
                      </span>
                      {row.feature}
                    </td>

                    {/* EnRuta Enterprise Advantage */}
                    <td className="py-4 px-6 bg-emerald-950/20 border-x border-emerald-500/20 text-white font-medium">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-emerald-200 font-semibold leading-snug">
                          {row.enRuta}
                        </span>
                      </div>
                    </td>

                    {/* Traditional Method Disadvantage */}
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">
                          {row.traditional}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Table Bottom Highlights Strip */}
          <div className="p-6 bg-slate-900/90 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-white font-bold block">Latencia Reducida a Milisegundos</span>
                <span className="text-slate-400">Trazabilidad en tiempo real sin esperar cierres manuales de jornada.</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-white font-bold block">Seguridad Anti-Fugas Garantizada</span>
                <span className="text-slate-400">Inmutabilidad criptográfica en cada peso recaudado en calle.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
