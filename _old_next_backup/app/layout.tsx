import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Emanuel Rodriguez | Full Stack Developer",
  description: "Estudiante de Ingenieria Informatica apasionado por construir software que resuelve problemas reales. Combino logica y creatividad para proyectos web e inteligencia artificial.",
  keywords: ["desarrollador", "full stack", "python", "astro", "supabase", "ia", "machine learning", "portafolio", "emanuel rodriguez"],
  authors: [{ name: "Emanuel Rodriguez" }],
  creator: "Emanuel Rodriguez",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://emanuelrodriguez.dev",
    title: "Emanuel Rodriguez | Full Stack Developer",
    description: "Estudiante de Ingenieria Informatica apasionado por construir software que resuelve problemas reales. Combino logica y creatividad para proyectos web e inteligencia artificial.",
    siteName: "Emanuel Rodriguez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Rodriguez | Full Stack Developer",
    description: "Estudiante de Ingenieria Informatica apasionado por construir software con IA.",
    creator: "@banna_nuel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
