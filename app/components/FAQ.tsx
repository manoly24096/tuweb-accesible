"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "¿Por qué el hosting realmente es gratis?",
    a: "Vercel, la empresa detrás de Next.js, ofrece un plan gratuito para proyectos personales y pequeños negocios. Su negocio se despliega en infraestructura global de primer nivel sin costo mensual. Este modelo existe porque Vercel monetiza con empresas grandes; nosotros aprovechamos este beneficio para nuestros clientes.",
  },
  {
    q: "¿Qué pasa si Vercel cambia su política y deja de ser gratis?",
    a: "En ese caso, migraremos su proyecto a otra plataforma equivalente (Netlify, Railway, Cloudflare Pages) sin costo adicional para usted. Dado que usted es el dueño del código en GitHub, tiene la libertad total de moverse. Nuestro equipo le acompañará en ese proceso.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Sí. Todas las webs incluyen SSL/HTTPS activado automáticamente. Si usamos Supabase como base de datos, sus datos están encriptados y respaldados en infraestructura de AWS. Además, usted tiene acceso directo y completo a su base de datos, sin intermediarios.",
  },
  {
    q: "¿Qué incluye exactamente la 'Entrega de Propiedad Total'?",
    a: "Le entregamos: (1) acceso de administrador al repositorio en GitHub, (2) acceso al proyecto en Vercel conectado a su propio correo, (3) acceso a la base de datos en Supabase si aplica, (4) las credenciales del dominio en Namecheap si contrata el plan profesional. Nuestro equipo hace una sesión de capacitación para que usted o alguien de su equipo entienda cómo funciona todo.",
  },
  {
    q: "¿Cuánto tiempo tarda el desarrollo de mi web?",
    a: "Una landing page o web de presentación toma entre 5 y 10 días hábiles. Un sistema con pedidos por WhatsApp o funcionalidades avanzadas puede tomar 2 a 4 semanas. Siempre establecemos un cronograma claro desde el inicio del diagnóstico.",
  },
  {
    q: "¿Puedo solicitar cambios después de la entrega?",
    a: "Sí. Ofrecemos un período de ajustes post-entrega sin costo adicional. Para cambios mayores o nuevas funcionalidades, nuestro equipo le proporcionará una cotización transparente. Al tener el código, también puede contratar a cualquier desarrollador de Next.js para hacer cambios.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center transition-transform ${open ? "rotate-45 bg-blue-600 text-white" : "text-slate-500"}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Resolvemos sus dudas
          </h2>
          <p className="text-slate-500 text-lg">
            Transparencia total: si tiene más preguntas, nuestro equipo está a un mensaje de WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-slate-50 rounded-2xl px-8 py-2"
        >
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
