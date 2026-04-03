import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/tu-perfil", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/tu-usuario", icon: Github },
  { name: "Twitter", href: "https://twitter.com/tu-usuario", icon: Twitter },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For static sites, you can use services like:
      // - Formspree (formspree.io)
      // - Netlify Forms
      // - EmailJS
      // Example with Formspree:
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-[#a3a3a3] mb-4">07 — CONTACTO</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Conectemos</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-lg text-[#a3a3a3] leading-relaxed">
            Estoy siempre abierto a nuevas oportunidades, colaboraciones interesantes 
            o simplemente una buena conversacion sobre tecnologia y diseno.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-1">EMAIL</p>
                <a href="mailto:tu@email.com" className="text-[#fafafa] hover:text-[#2563eb] transition-colors">
                  tu@email.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-1">UBICACION</p>
                <p className="text-[#fafafa]">Ciudad, Pais</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/10">
            <p className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-4">SIGUEME</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2563eb] hover:bg-[#2563eb]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-2 block">
                  NOMBRE
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg font-mono text-sm focus:outline-none focus:border-[#2563eb] transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg font-mono text-sm focus:outline-none focus:border-[#2563eb] transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-2 block">
                ASUNTO
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg font-mono text-sm focus:outline-none focus:border-[#2563eb] transition-colors duration-300"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs text-[#a3a3a3] tracking-widest mb-2 block">
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg font-mono text-sm focus:outline-none focus:border-[#2563eb] transition-colors duration-300 resize-none"
                placeholder="Cuentame sobre tu proyecto..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-lg font-mono text-sm tracking-widest uppercase bg-transparent hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar Mensaje
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-green-400"
              >
                Mensaje enviado correctamente. Te respondere pronto.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-mono text-sm text-red-400"
              >
                Hubo un error al enviar el mensaje. Intenta de nuevo.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
