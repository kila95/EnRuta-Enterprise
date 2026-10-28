import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, ArrowRight, Zap, Check, Users } from 'lucide-react';

export const CfoCalculator: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  const [collectors, setCollectors] = useState<number>(10);
  const [capitalMillions, setCapitalMillions] = useState<number>(150); // Millions COP
  const [leakagePercent, setLeakagePercent] = useState<number>(4.5); // %
  const [moraPercent, setMoraPercent] = useState<number>(14); // %

  const FLAT_ADMIN_FEE_COP = 140000; // $140.000 COP per Admin Account (UNLIMITED collectors)

  const calculations = useMemo(() => {
    const totalCapitalCOP = capitalMillions * 1000000;
    const monthlyLeakageCOP = totalCapitalCOP * (leakagePercent / 100);
    
    // EnRuta reduces cash leakage by ~92% thanks to SHA-256 immutable logs and instant WhatsApp receipt
    const leakageSavedMonthlyCOP = monthlyLeakageCOP * 0.92;
    
    // EnRuta reduces delinquency capital impact by ~38% with GPS geofencing & real-time automated reminders
    const monthlyMoraCapitalCOP = totalCapitalCOP * (moraPercent / 100);
    const moraRecoveredMonthlyCOP = monthlyMoraCapitalCOP * 0.38;

    const totalGrossSavingsMonthlyCOP = leakageSavedMonthlyCOP + moraRecoveredMonthlyCOP;
    
    // Flat subscription fee per Admin Account ($140.000 COP total regardless of collector count)
    const totalEnRutaCostMonthlyCOP = FLAT_ADMIN_FEE_COP;
    
    const netProfitMonthlyCOP = totalGrossSavingsMonthlyCOP - totalEnRutaCostMonthlyCOP;
    const netProfitAnnualCOP = netProfitMonthlyCOP * 12;
    const roiPercentage = totalEnRutaCostMonthlyCOP > 0 
      ? ((netProfitMonthlyCOP / totalEnRutaCostMonthlyCOP) * 100).toFixed(0)
      : '0';

    return {
      totalCapitalCOP,
      monthlyLeakageCOP,
      leakageSavedMonthlyCOP,
      moraRecoveredMonthlyCOP,
      totalGrossSavingsMonthlyCOP,
      totalEnRutaCostMonthlyCOP,
      netProfitMonthlyCOP,
      netProfitAnnualCOP,
      roiPercentage
    };
  }, [collectors, capitalMillions, leakagePercent, moraPercent]);

  const formatCOP = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-900/80 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Modelo Financiero y Resiliencia de Flujo de Caja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulador de Rendimiento Operativo CFO
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Calcule el retorno de inversión (ROI) neto con nuestra suscripción plana de $140.000 COP por administrador para cobradores y trabajadores 100% ilimitados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Parámetros de su Empresa</span>
            </h3>

            {/* Input 1: Collectors / Operarios Count */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 font-semibold uppercase flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Cobradores u Operarios
                </label>
                <span className="text-sm font-bold font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {collectors} Cobradores (ILIMITADOS)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={collectors}
                onChange={(e) => setCollectors(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-emerald-400 font-mono mt-1 font-semibold">
                <span>1 Cobrador</span>
                <span>Un solo pago fijo sin importar el equipo</span>
                <span>Cobradores Ilimitados</span>
              </div>
            </div>

            {/* Input 2: Capital in Street */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 font-semibold uppercase">
                  Capital en Calle (COP)
                </label>
                <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  ${capitalMillions} Millones
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={capitalMillions}
                onChange={(e) => setCapitalMillions(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>$20M COP</span>
                <span>$500M COP</span>
                <span>$1.000M COP</span>
              </div>
            </div>

            {/* Input 3: Estimated Fuga / Descuadre % */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 font-semibold uppercase">
                  Fuga Estimar por Jineteo / Descuadre (%)
                </label>
                <span className="text-sm font-bold font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  {leakagePercent}%
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={leakagePercent}
                onChange={(e) => setLeakagePercent(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Promedio del sector sin software inmutable: 3.5% - 6.0% mensual.
              </p>
            </div>

            {/* Input 4: Current Delinquency Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-slate-300 font-semibold uppercase">
                  Tasa de Mora Actual (%)
                </label>
                <span className="text-sm font-bold font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {moraPercent}%
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                value={moraPercent}
                onChange={(e) => setMoraPercent(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
              <TrendingUp className="w-48 h-48 text-amber-400" />
            </div>

            <div className="relative z-10 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Dictamen Financiero Estimado
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Impacto Liquidez Neta
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono text-slate-400 block">ROI Neto Estimado</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-400">
                    +{calculations.roiPercentage}%
                  </span>
                </div>
              </div>

              {/* Financial Metrics Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-mono block uppercase">
                    Fuga de Efectivo Recuperada / mes
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">
                    {formatCOP(calculations.leakageSavedMonthlyCOP)}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Eliminación de alteraciones de recibos
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-mono block uppercase">
                    Recuperación de Mora por GPS / mes
                  </span>
                  <span className="text-xl font-bold font-mono text-amber-400 mt-1 block">
                    {formatCOP(calculations.moraRecoveredMonthlyCOP)}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Garantía de visita geográfica
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 font-mono block uppercase">
                    Costo Suscripción por Administrador
                  </span>
                  <span className="text-lg font-bold font-mono text-slate-300 mt-1 block">
                    {formatCOP(FLAT_ADMIN_FEE_COP)} / mes
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block font-semibold">
                    Un solo pago fijo. Cobradores y trabajadores 100% ilimitados.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                  <span className="text-[11px] text-emerald-300 font-mono block uppercase font-semibold">
                    Aumento de Caja Anualizado (Neto)
                  </span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-300 mt-1 block">
                    {formatCOP(calculations.netProfitAnnualCOP)}
                  </span>
                  <span className="text-[10px] text-emerald-400/80 mt-1 block font-medium">
                    Excedente directo a utilidades netas
                  </span>
                </div>

              </div>

              {/* Call to action inside calculator */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <div className="text-xs text-slate-300">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Trabajadores y cobradores 100% ilimitados en tu prueba gratis de 7 días.
                  </p>
                  <p className="text-slate-400 mt-0.5">
                    Sin contrato de permanencia. Instalación inmediata en menos de 10 minutos.
                  </p>
                </div>

                <a
                  href="https://creditos-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider font-mono shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Iniciar Prueba Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
