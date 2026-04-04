import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Previene el error en tiempo de compilación si las variables en Vercel no están listas
const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!supabase) {
      console.error('El cliente de Supabase no está configurado (faltan variables de entorno).');
      setStatus('error');
      return;
    }

    const { error } = await supabase
      .from('contactos')
      .insert([formData]);

    if (error) {
      console.error('Error enviando mensaje:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/10 transition-colors"></div>
      
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="nombre" className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
              placeholder="Emanuel Rodriguez"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
              placeholder="ejemplo@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="asunto" className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Asunto</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20"
            placeholder="Propuesta de colaboración"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mensaje" className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20 resize-none"
            placeholder="Cuéntame sobre tu proyecto..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full group relative overflow-hidden px-8 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            <Send className={`w-4 h-4 ${status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
          </span>
        </button>

        {status === 'success' && (
          <div className="flex items-center gap-3 text-green-500 font-mono text-xs tracking-tighter bg-green-500/10 p-4 rounded-xl animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            ¡Mensaje enviado correctamente! Te contactaré pronto.
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 text-red-500 font-mono text-xs tracking-tighter bg-red-500/10 p-4 rounded-xl animate-fade-in">
            <AlertCircle className="w-4 h-4" />
            Hubo un error al enviar el mensaje. Inténtalo de nuevo.
          </div>
        )}
      </form>
    </div>
  );
}
