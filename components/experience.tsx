"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Presente",
    description: "Liderando el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Implementacion de arquitecturas de microservicios y mejores practicas de DevOps.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Startup Innovation",
    period: "2020 - 2022",
    description: "Desarrollo de plataformas SaaS desde cero. Colaboracion directa con equipos de diseno y producto para entregar soluciones de alta calidad.",
    technologies: ["Vue.js", "Python", "Django", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Creacion de interfaces de usuario interactivas y responsivas. Optimizacion de rendimiento y accesibilidad web.",
    technologies: ["JavaScript", "React", "SASS", "Webpack"],
  },
]

const education = [
  {
    degree: "Ingenieria en Sistemas Computacionales",
    institution: "Universidad Nacional",
    period: "2014 - 2018",
    description: "Enfasis en desarrollo de software y arquitectura de sistemas.",
  },
  {
    degree: "Master en Ciencias de la Computacion",
    institution: "Instituto Tecnologico",
    period: "2019 - 2021",
    description: "Especializacion en inteligencia artificial y machine learning.",
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2022",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2022",
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2021",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — EXPERIENCIA</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-16">Trayectoria Profesional</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
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
                  <h3 className="font-sans text-2xl md:text-3xl font-light">{exp.title}</h3>
                  <p className="font-mono text-sm text-accent">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-widest">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 max-w-2xl">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — FORMACION</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-16">Educacion</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 border border-white/10 rounded-lg hover:border-white/20 transition-colors duration-300"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-widest">{edu.period}</span>
              <h3 className="font-sans text-xl md:text-2xl font-light mt-2 mb-2">{edu.degree}</h3>
              <p className="font-mono text-sm text-accent mb-3">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.description}</p>
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

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — CERTIFICACIONES</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-16">Credenciales</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 border border-white/10 rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <span className="font-mono text-xs text-accent tracking-widest">{cert.year}</span>
              <h3 className="font-sans text-lg font-light mt-2 mb-2 group-hover:text-accent transition-colors duration-300">
                {cert.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
