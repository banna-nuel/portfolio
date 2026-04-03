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
  title: "Tu Nombre | Desarrollador Full Stack",
  description: "Portafolio profesional de desarrollador full stack. Especializado en React, Next.js, Node.js y arquitectura de software. Disponible para proyectos y colaboraciones.",
  keywords: ["desarrollador", "full stack", "react", "next.js", "node.js", "typescript", "portafolio"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: "Tu Nombre | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador full stack. Especializado en React, Next.js, Node.js y arquitectura de software.",
    siteName: "Tu Nombre Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Nombre | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador full stack.",
    creator: "@tu_usuario",
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
