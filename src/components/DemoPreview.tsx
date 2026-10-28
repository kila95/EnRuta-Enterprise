import React, { useState } from 'react';
import { X, ShieldCheck, Activity, Smartphone, MapPin, CheckCircle2, AlertTriangle, RefreshCw, Send, DollarSign, Lock, Download, Check } from 'lucide-react';

interface DemoPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const DemoPreview: React.FC<DemoPreviewProps> = ({ isOpen, onClose, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'cfo' | 'field'>('cfo');
  const [isSyncing, setIsSyncing] = useState(false);
  const [closureDone, setClosureDone] = useState(false);

  // Field collector simulated state
  const [clients, setClients] = useState([
    {
      id: 'CL-101',
      name: 'Variedades La 70 (Medellín)',
      quota: 30000,
      status: 'PENDIENTE',
      time: '-',
      hash: '-'
    },
    {
      id: 'CL-102',
      name: 'Supermercado San Javier',
      quota: 45000,
      status: 'PAGADO',
      time: '14:15:02',
      hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    },
    {
      id: 'CL-103',
      name: 'Panadería El Parque',
      quota: 20000,
      status: 'PENDIENTE',
      time: '-',
      hash: '-'
    },
    {
      id: 'CL-104',
      name: 'Calzado Belén',
      quota: 50000,
      status: 'PAGADO',
      time: '11:30:44',
      hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4'
    }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRegisterPayment = (id: string, name: string, amount: number) => {
    setIsSyncing(true);
    setTimeout(() => {
      const generatedHash = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
      setClients(prev => prev.map(c => {
        if (c.id === id) {
          return {
            ...c,
            status: 'PAGADO',
            time: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            hash: generatedHash
          };
        }
        return c;
      }));
      setIsSyncing(false);
      setNotification(`Recaudo de $${amount.toLocaleString('es-CO')} COP registrado para ${name}. Notificación WhatsApp enviada con Hash SHA-256.`);
      setTimeout(() => setNotification(null), 5000);
    }, 600);
  };

  const handleSimulateClosure = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setClosureDone(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-950 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Entorno de Pruebas EnRuta Enterprise</span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SIMULACIÓN EN VIVO
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Alterne entre la vista de Dirección Financiera y la vista PWA de Cobrador en Campo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Segmented Switch */}
        <div className="px-6 py-3 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('cfo')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'cfo'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Vista 1: Consola CFO / Dirección</span>
            </button>

            <button
              onClick={() => setActiveTab('field')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-md transition-all flex items-center gap-2 ${
                activeTab === 'field'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Vista 2: PWA Campo (Cobrador)</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Encriptación SHA-256 Activa</span>
          </div>
        </div>

        {/* Content Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 no-scrollbar">
          
          {/* Notification Alert Banner */}
          {notification && (
            <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center justify-between animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{notification}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold">WHATSAPP ENVIADO</span>
            </div>
          )}

          {activeTab === 'cfo' ? (
            /* CFO DASHBOARD VIEW */
            <div className="space-y-6">
              
              {/* Summary KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Recaudo Total Día</span>
                  <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">$18.450.000 COP</span>
                  <span className="text-[10px] text-emerald-500 mt-1 block">5 Rutas en Medellín</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Efectividad de Ruta</span>
                  <span className="text-xl font-bold font-mono text-amber-400 mt-1 block">96.8%</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">142 / 148 Clientes</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Auditoría Geofence GPS</span>
                  <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">100% Válido</span>
                  <span className="text-[10px] text-emerald-500 mt-1 block">Tolerancia máx: 15m</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Estado de Cierre</span>
                  <span className={`text-sm font-bold font-mono mt-1 block ${closureDone ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {closureDone ? 'CIERRE SELLADO SHA-256' : 'EN EJECUCIÓN (ABIERTO)'}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    {closureDone ? 'Hash: e9a2c...881f' : 'Pendiente liquidación final'}
                  </span>
                </div>
              </div>

              {/* Collectors GPS Status Table */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Monitoreo GPS de Cobradores en Terreno</span>
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">
                    Último ping satelital: hace 4s
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                        <th className="py-2.5 px-3">Ruta / Cobrador</th>
                        <th className="py-2.5 px-3">Zona Medellín</th>
                        <th className="py-2.5 px-3">Recaudo Acum.</th>
                        <th className="py-2.5 px-3">Precisión GPS</th>
                        <th className="py-2.5 px-3">Estado Auditado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Ruta #01 - Mario V.</td>
                        <td className="py-3 px-3">Comuna 11 (La 70 / Laureles)</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">$4.120.000 COP</td>
                        <td className="py-3 px-3 text-slate-400">8 metros (Óptimo)</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                            OK · SIN DESVIACIONES
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Ruta #02 - Andrés F.</td>
                        <td className="py-3 px-3">Comuna 13 (San Javier)</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">$3.850.000 COP</td>
                        <td className="py-3 px-3 text-slate-400">12 metros</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                            OK · SIN DESVIACIONES
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Ruta #03 - Juan K.</td>
                        <td className="py-3 px-3">Comuna 04 (Aranjuez)</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">$3.200.000 COP</td>
                        <td className="py-3 px-3 text-amber-400">14 metros</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
                            ADVERTENCIA PERIMETRO
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Closure Simulation Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      Cierre de Bóveda y Sellado Criptográfico SHA-256
                    </p>
                    <p className="text-[11px]">
                      Genera el acta digital inmutable con cuadre directo contra el efectivo recibido.
                    </p>
                  </div>

                  <button
                    onClick={handleSimulateClosure}
                    disabled={isSyncing || closureDone}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-mono text-xs font-bold shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    {isSyncing ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : closureDone ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShieldCheck className="w-4 h-4" />
                    )}
                    <span>{closureDone ? 'Cierre Exitoso Garantizado' : 'Ejecutar Cierre y Cuadre Net'}</span>
                  </button>
                </div>

              </div>

            </div>
          ) : (
            /* FIELD COLLECTOR PWA VIEW */
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Ruta Activa Terreno</span>
                  <h4 className="text-base font-bold text-white font-mono">Ruta #01 - Medellín Centro / La 70</h4>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> GPS RTK Fijado · Sincronización Offline Disponible
                  </p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-slate-400 block">Avance Itinerario</span>
                  <span className="text-lg font-bold text-amber-400">2 / 4 Cobrados</span>
                </div>
              </div>

              {/* Field Clients List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider font-semibold">
                  Itinerario de Visitas en Campo (Pulse para Cobrar):
                </h4>

                {clients.map((client) => (
                  <div
                    key={client.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      client.status === 'PAGADO'
                        ? 'bg-slate-900/60 border-emerald-500/40'
                        : 'bg-slate-900 border-slate-800 hover:border-amber-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-400">{client.id}</span>
                        <h5 className="text-sm font-bold text-white">{client.name}</h5>
                        {client.status === 'PAGADO' && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> PAGADO
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        Cuota Diaria: <span className="text-white font-bold">${client.quota.toLocaleString('es-CO')} COP</span>
                      </p>

                      {client.hash !== '-' && (
                        <p className="text-[10px] text-slate-500 font-mono mt-1 truncate max-w-md">
                          Hash SHA-256: {client.hash}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 w-full sm:w-auto">
                      {client.status === 'PENDIENTE' ? (
                        <button
                          onClick={() => handleRegisterPayment(client.id, client.name, client.quota)}
                          disabled={isSyncing}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <DollarSign className="w-4 h-4" />
                          <span>Registrar Cobro (${client.quota.toLocaleString('es-CO')})</span>
                        </button>
                      ) : (
                        <div className="text-right font-mono text-xs text-slate-400">
                          <span className="block text-emerald-400 font-bold">Cobrado a las {client.time}</span>
                          <span className="text-[10px] text-slate-500">Notificado a WhatsApp</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Call to Action */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span className="text-white font-semibold">¿Listo para desplegar EnRuta en sus rutas de cobro?</span>
            <p className="text-[11px] text-slate-400">Tarifa plana de $140.000 COP / mes por ruta. Prueba de 7 días 100% gratis.</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenTrial();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-600/30 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <span>Activar Prueba Gratis 7 Días</span>
            <ShieldCheck className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
