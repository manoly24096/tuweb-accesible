import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "webaccesible.com — Agencia de Desarrollo Web en Perú | Costo S/ 0 Mensual",
  description:
    "Creamos webs, apps y software profesional para tu negocio con tecnología de alto rendimiento y costo de mantenimiento S/ 0. Hosting gratuito en Vercel. Propiedad total para el cliente.",
  keywords:
    "agencia web peru, desarrollo web lima, crear pagina web peru, hosting gratis, next.js peru, app movil peru, software empresas peru",
  openGraph: {
    title: "webaccesible.com — Tecnología real para negocios de verdad",
    description: "Webs, apps y software sin rentas mensuales. Tú eres el dueño de tu activo digital.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
