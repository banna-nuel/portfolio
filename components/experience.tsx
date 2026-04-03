"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Ingenieria Informatica",
    institution: "Instituto Universitario de la Paz — UNIPAZ",
    period: "2023 - Presente",
    description: "Barrancabermeja, Colombia. Enfasis en desarrollo de software, inteligencia artificial y sistemas de informacion.",
  },
]

const languages = [
  {
    name: "Espanol",
    level: "Nativo",
  },
  {
    name: "Ingles",
    level: "Basico - A2",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — FORMACION ACADEMICA</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-16">Educacion</h2>

        <div className="max-w-2xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative border-l border-white/20 pl-8 pb-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-sans text-2xl md:text-3xl font-light">{edu.degree}</h3>
                  <p className="font-mono text-sm text-accent">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest">{edu.period}</span>
              </div>
              
              <p className="text-muted-foreground max-w-2xl">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left mb-24"
      />

      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — IDIOMAS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-16">Idiomas</h2>

        <div className="flex flex-wrap gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 border border-white/10 rounded-lg hover:border-accent/50 transition-all duration-300 min-w-[150px]"
            >
              <h3 className="font-sans text-xl font-light mb-2 group-hover:text-accent transition-colors duration-300">
                {lang.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
