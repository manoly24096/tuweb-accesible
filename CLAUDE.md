@AGENTS.md

# webaccesible.com — Identidad de Agencia

## Misión
Agencia boutique de ingeniería digital que democratiza la tecnología para emprendedores peruanos.
Tagline: **"Tecnología real para negocios de verdad. Sin rentas mensuales."**

## Propuesta de Valor
- **Costo S/ 0 mensual**: Hosting gratuito en Vercel para pequeños negocios.
- **Propiedad Total**: El cliente recibe todas las "llaves" (GitHub, Vercel, Supabase).
- **Multiplataforma**: Web, App Móvil (iOS & Android), Software de Escritorio.

## Tono de Comunicación
- Siempre usar **"Nosotros"** / **"Nuestro equipo"** (nunca "Yo").
- Estilo: Agencia Boutique Premium. Confianza técnica, lenguaje accesible.
- Público objetivo: Emprendedores y PYMES en Perú.

## Stack Tecnológico
- **Framework**: Next.js 15+ (App Router)
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Hosting**: Vercel (gratuito)
- **DB/Storage**: Supabase (opcional por proyecto)
- **Lenguaje**: TypeScript

## Paleta de Diseño
- Blanco (`#ffffff`) — fondo principal
- Slate-900 (`#0f172a`) — textos y secciones oscuras
- Blue-600 (`#2563eb`) — color de acento y CTAs
- Slate-50 (`#f8fafc`) — fondos de secciones alternas

## Estructura de Secciones
1. **Navbar** — Logo + links de navegación + CTA WhatsApp
2. **Hero** — Propuesta de valor principal, stats (S/0, 100%, 3 plataformas)
3. **Expertise** — Hosting Gratis, Pedidos por WhatsApp, Multiplataforma + Stack
4. **Dominios** — Plan Cortesía (.vercel.app, S/0) vs Plan Profesional (.com, ~S/55/año)
5. **Metodología** — 3 pasos: Diagnóstico → Desarrollo → Entrega Total
6. **FAQ** — Hosting gratis, seguridad de datos, propiedad, tiempos
7. **Footer** — CTA final + links

## CTA Principal (WhatsApp)
```
https://wa.me/51999999999?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20t%C3%A9cnica%20con%20el%20equipo%20de%20webaccesible.com
```
**Nota**: Reemplazar `51999999999` con el número real de WhatsApp Business antes del deploy.

## SEO Target
- "agencia web peru"
- "desarrollo web lima"
- "crear pagina web peru sin mensualidad"
- "hosting gratis peru"

## Archivos del Proyecto
- `app/page.tsx` — Página principal (orquesta todos los componentes)
- `app/layout.tsx` — Metadatos SEO, lang="es"
- `app/components/` — Navbar, Hero, Expertise, Dominios, Metodologia, FAQ, Footer
