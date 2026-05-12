"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Plan Cortesía",
    domain: ".vercel.app",
    price: "S/ 0",
    period: "/ año",
    description: "Perfecto para lanzar su negocio digital sin ningún costo inicial.",
    features: [
      "Dominio gratuito (.vercel.app)",
      "Hosting en Vercel incluido",
      "SSL/HTTPS automático",
      "Despliegue en minutos",
      "Actualizaciones sin costo",
    ],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Plan Profesional",
    domain: ".com",
    price: "~S/ 55",
    period: "/ año",
    description: "La imagen profesional que su negocio merece con dominio propio.",
    features: [
      "Dominio .com propio (Namecheap)",
      "Hosting en Vercel incluido",
      "SSL/HTTPS automático",
      "Email profesional opcional",
      "Mayor credibilidad y SEO",
    ],
    cta: "Agendar consultoría",
    highlight: true,
  },
];

const whatsappUrl =
  "https://wa.me/51921773497?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20t%C3%A9cnica%20con%20el%20equipo%20de%20webaccesible.com";

export default function Dominios() {
  return (
    <section id="dominios" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
            Planes de Dominio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Elige tu presencia digital
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            En ambos planes el hosting es completamente gratuito. La diferencia está en la dirección web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                plan.highlight
                  ? "border-blue-600 bg-blue-600 text-white shadow-2xl shadow-blue-600/25"
                  : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Recomendado
                </span>
              )}
              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                </div>
                <code className={`text-2xl font-bold mt-1 block ${plan.highlight ? "text-blue-100" : "text-slate-400"}`}>
                  sunegocio{plan.domain}
                </code>
              </div>

              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3 px-6 rounded-full transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          El único costo del plan profesional es el registro del dominio .com en Namecheap (~S/ 55/año).
          Nuestro equipo le guía en cada paso.
        </motion.p>
      </div>
    </section>
  );
}
