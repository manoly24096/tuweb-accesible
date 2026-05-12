"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const whatsappUrl =
    "https://wa.me/51921773497?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20t%C3%A9cnica%20con%20el%20equipo%20de%20webaccesible.com";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-slate-900 font-bold text-lg tracking-tight">
          web<span className="text-blue-600">accesible</span>.com
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
          <a href="#expertise" className="hover:text-blue-600 transition-colors">Servicios</a>
          <a href="#dominios" className="hover:text-blue-600 transition-colors">Planes</a>
          <a href="#metodologia" className="hover:text-blue-600 transition-colors">Metodología</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Consultoría Gratis
        </a>
      </div>
    </motion.nav>
  );
}
