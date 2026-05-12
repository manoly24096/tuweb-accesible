"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    subtitle: "Entendemos su negocio",
    description:
      "Nuestro equipo analiza su industria, competencia y objetivos. Definimos juntos las funcionalidades clave que impactarán directamente en sus ventas.",
    duration: "1–2 días",
  },
  {
    number: "02",
    title: "Desarrollo",
    subtitle: "Construimos su activo",
    description:
      "Diseñamos y programamos con Next.js, Tailwind y Framer Motion. Iteramos con usted en cada etapa para asegurar que el resultado supere sus expectativas.",
    duration: "1–3 semanas",
  },
  {
    number: "03",
    title: "Entrega Total",
    subtitle: "Las llaves son suyas",
    description:
      "Le entregamos acceso completo a GitHub, Vercel y Supabase. Su activo digital le pertenece al 100%. Nuestro equipo capacita a su equipo para que tenga independencia total.",
    duration: "Día de lanzamiento",
  },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
            Nuestra Metodología
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Tres pasos hacia su transformación digital
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Un proceso claro, transparente y orientado a resultados para su negocio.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 mx-32" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
              >
                <div className="relative z-10 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mb-6">
                  {step.number}
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {step.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{step.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-2">Garantía de Propiedad</p>
          <p className="text-2xl font-bold">
            Al finalizar el proyecto, todas las "llaves" son suyas.
            <span className="text-blue-200"> GitHub · Vercel · Supabase</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
