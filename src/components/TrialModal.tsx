import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Building, Phone, Mail, MapPin, ArrowRight, Lock, Users } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    nit: '',
    city: 'Medellín',
    collectorsCount: '5-10 Cobradores',
    managerName: '',
    phone: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Suscripción por Administrador · $140.000 COP / mes</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Active su Cuenta Corporativa EnRuta
              </h3>
              <p className="text-xs text-amber-400 font-mono mt-1 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 inline" />
                Cobradores y operarios ILIMITADOS incluidos sin cobros extra.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    Empresa / Cartera *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Inversiones El Poblado S.A.S."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    NIT / Doc Fiscal *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 901.345.678-9"
                    value={formData.nit}
                    onChange={(e) => setFormData({ ...formData, nit: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    Ciudad Sede *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="Medellín">Medellín / Área Metropolitana</option>
                    <option value="Bogotá">Bogotá D.C.</option>
                    <option value="Cali">Cali</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Pereira">Pereira / Eje Cafetero</option>
                    <option value="Otra">Otra Ciudad en Colombia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    Cantidad de Cobradores
                  </label>
                  <select
                    value={formData.collectorsCount}
                    onChange={(e) => setFormData({ ...formData, collectorsCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="1-4 Cobradores">1 a 4 Cobradores ($0 Extra)</option>
                    <option value="5-10 Cobradores">5 a 10 Cobradores ($0 Extra)</option>
                    <option value="11-25 Cobradores">11 a 25 Cobradores ($0 Extra)</option>
                    <option value="25+ Cobradores">Más de 25 Cobradores ($0 Extra)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                  Nombre del Administrador Principal / CFO *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carlos Andrés Gómez"
                  value={formData.managerName}
                  onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    WhatsApp Corporativo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 font-semibold mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="cfo@suempresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider font-mono shadow-xl hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Iniciar Prueba Gratis de 7 Días</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-slate-500 text-center font-mono flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Prueba 100% gratuita durante 7 días. Luego $140.000 COP / mes por administrador.</span>
              </p>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              ¡Solicitud Aprobada Satisfactoriamente!
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Hemos enviado sus credenciales de Administrador y enlaces de descarga PWA para sus cobradores al WhatsApp <span className="text-amber-400 font-mono">{formData.phone || '+57 (WhatsApp)'}</span>.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Organización:</span>
                <span className="text-white font-bold">{formData.companyName || 'Inversiones S.A.S.'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Cobradores Incluidos:</span>
                <span className="text-amber-400 font-bold">{formData.collectorsCount} (ILIMITADOS)</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Suscripción Post-Prueba:</span>
                <span className="text-emerald-400 font-bold">$140.000 COP / mes (Por Admin)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold transition-colors"
            >
              Cerrar Ventana y Continuar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
