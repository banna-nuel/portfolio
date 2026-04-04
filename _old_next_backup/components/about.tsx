"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Download } from "lucide-react"

const statements = [
  "Enamorandome del codigo, una funcion a la vez.",
  "Combino logica y creatividad para resolver problemas.",
  "Desde aplicaciones web hasta sistemas con IA.",
  "Construyo software que resuelve problemas reales.",
]

const skills = [
  "Desarrollo Full Stack",
  "Inteligencia Artificial",
  "Aplicaciones Web",
  "Bases de Datos",
  "APIs con IA",
  "Machine Learning",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">01 — SOBRE MI</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-8">Quien Soy</h2>
        
        {/* Bio Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estudiante de Ingenieria Informatica apasionado por construir software que resuelve 
              problemas reales. Combino logica y creatividad para dar vida a proyectos que van 
              desde aplicaciones web hasta sistemas con inteligencia artificial integrada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic text-accent">
              &quot;Enamorandome del codigo, una funcion a la vez.&quot;
            </p>
            
            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download="Mi_Hoja_de_Vida.pdf"
              data-cursor-hover
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full font-mono text-sm tracking-wider uppercase bg-transparent hover:bg-white hover:text-black transition-all duration-300 mt-4"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </motion.a>
          </div>
          
          {/* Skills Grid */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6">HABILIDADES CLAVE</p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-sm text-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Horizontal Scroll Container - Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-8"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">FILOSOFIA</p>
      </motion.div>

      <div className="relative flex items-center overflow-hidden py-0 gap-0 h-16">
        <motion.div style={{ x: smoothX }} className="flex gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white/90"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
