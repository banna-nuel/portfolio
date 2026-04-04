import { c as createComponent, a as addAttribute, r as renderHead, b as renderSlot, d as renderTemplate, e as createAstro, m as maybeRenderHead, f as renderScript, g as renderComponent } from '../chunks/astro/server_DsFiW41x.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, MeshDistortMaterial, Float } from '@react-three/drei';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Emanuel Rodriguez - Professional Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Fira+Code&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-[#050505] text-white selection:bg-blue-600/30 antialiased overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/unipaz-manuel/portfolio/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "SOBRE M\xCD", href: "#sobre-mi" },
    { name: "TECH STACK", href: "#tech" },
    { name: "PROYECTOS", href: "#proyectos" },
    { name: "EXPERIENCIA", href: "#experiencia" },
    { name: "CONTACTO", href: "#contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-500" id="main-nav"> <div class="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between"> <a href="/" class="group flex items-center gap-2"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> <span class="text-white font-bold text-xs font-mono">ER</span> </div> <span class="font-bold tracking-tighter text-xl group-hover:text-blue-500 transition-colors">EMANUEL<span class="text-blue-500">.</span></span> </a> <div class="hidden lg:flex items-center gap-12"> <ul class="flex items-center gap-10"> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors duration-300 relative group py-2"> ${link.name} <span class="absolute bottom-0 left-0 w-0 h-px bg-blue-600 transition-all duration-500 group-hover:w-full"></span> </a> </li>`)} </ul> <a href="#contacto" class="group relative overflow-hidden px-8 py-3 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] tracking-widest uppercase hover:bg-blue-600 transition-all duration-500"> <span class="relative z-10">Let&apos;s Talk</span> <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div> </a> </div> <!-- Mobile Menu Button --> <button class="lg:hidden p-2 text-white/70" id="mobile-menu-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> </button> </div> </nav> ${renderScript($$result, "C:/unipaz-manuel/portfolio/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/unipaz-manuel/portfolio/src/components/Navbar.astro", void 0);

function RotatingAvatar() {
  const meshRef = useRef(null);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.5) * Math.PI / 4;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * Math.PI / 8;
    }
  });
  return /* @__PURE__ */ jsx(Float, { speed: 2, rotationIntensity: 0.5, floatIntensity: 1, children: /* @__PURE__ */ jsxs("mesh", { ref: meshRef, children: [
    /* @__PURE__ */ jsx("boxGeometry", { args: [3, 4, 0.2] }),
    /* @__PURE__ */ jsx("meshStandardMaterial", { color: "#2563eb", metalness: 0.5, roughness: 0.2 }),
    /* @__PURE__ */ jsx("meshStandardMaterial", { attach: "material-4", color: "#ffffff" })
  ] }) });
}
function Avatar3D() {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full min-h-[400px]", children: /* @__PURE__ */ jsxs(Canvas, { shadows: true, children: [
    /* @__PURE__ */ jsx(PerspectiveCamera, { makeDefault: true, position: [0, 0, 8], fov: 50 }),
    /* @__PURE__ */ jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsx("pointLight", { position: [10, 10, 10], intensity: 1 }),
    /* @__PURE__ */ jsx("spotLight", { position: [-10, 10, 10], angle: 0.15, penumbra: 1 }),
    /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
      /* @__PURE__ */ jsx(RotatingAvatar, {}),
      /* @__PURE__ */ jsxs("mesh", { position: [0, 0, -2], children: [
        /* @__PURE__ */ jsx("sphereGeometry", { args: [5, 64, 64] }),
        /* @__PURE__ */ jsx(
          MeshDistortMaterial,
          {
            color: "#1e3a8a",
            attach: "material",
            distort: 0.4,
            speed: 1.5,
            roughness: 0,
            metalness: 1,
            transparent: true,
            opacity: 0.1
          }
        )
      ] })
    ] })
  ] }) });
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative min-h-screen flex items-center justify-center pt-20 px-8 lg:px-16 overflow-hidden" data-astro-cid-bbe6dxrz>  <div class="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" data-astro-cid-bbe6dxrz></div> <div class="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" data-astro-cid-bbe6dxrz> <div class="space-y-8" data-astro-cid-bbe6dxrz> <div class="space-y-2" data-astro-cid-bbe6dxrz> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-sm animate-fade-in" data-astro-cid-bbe6dxrz>Portafolio 2025</p> <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-tight" data-astro-cid-bbe6dxrz>
EMANUEL<br data-astro-cid-bbe6dxrz> <span class="italic font-light text-white/80" data-astro-cid-bbe6dxrz>RODRIGUEZ</span> </h1> </div> <div class="space-y-6 max-w-lg" data-astro-cid-bbe6dxrz> <p class="text-xl text-slate-400 font-light leading-relaxed" data-astro-cid-bbe6dxrz> <span class="text-white font-medium" data-astro-cid-bbe6dxrz>Full Stack Developer</span> en formación, enfocado en crear soluciones tecnológicas que resuelvan problemas reales mediante código limpio e inteligencia artificial.
</p> <div class="flex flex-wrap gap-4 pt-4" data-astro-cid-bbe6dxrz> <a href="#contacto" class="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 duration-300 shadow-xl shadow-white/5" data-astro-cid-bbe6dxrz>
PROYECTOS
</a> <a href="/cv.pdf" download="Emanuel_Rodriguez_CV.pdf" class="group flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full hover:border-white/40 transition-all font-mono text-xs tracking-widest uppercase" data-astro-cid-bbe6dxrz>
DESCARGAR CV
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-y-1 transition-transform" data-astro-cid-bbe6dxrz><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-bbe6dxrz></path><polyline points="7 10 12 15 17 10" data-astro-cid-bbe6dxrz></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-bbe6dxrz></line></svg> </a> </div> </div> </div> <div class="relative h-[500px] lg:h-[600px] flex items-center justify-center" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Avatar3D", Avatar3D, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/unipaz-manuel/portfolio/src/components/Avatar3D", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })}  <div class="absolute -bottom-4 right-10 p-4 glass rounded-2xl flex items-center gap-3 animate-bounce shadow-2xl" data-astro-cid-bbe6dxrz> <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" data-astro-cid-bbe6dxrz></div> <span class="text-xs font-mono uppercase tracking-widest" data-astro-cid-bbe6dxrz>Disponible para proyectos</span> </div> </div> </div> <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce" data-astro-cid-bbe6dxrz> <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30" data-astro-cid-bbe6dxrz>Scroll Down</span> <div class="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" data-astro-cid-bbe6dxrz></div> </div> </section> `;
}, "C:/unipaz-manuel/portfolio/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    "Desarrollo Full Stack",
    "Inteligencia Artificial",
    "Aplicaciones Web",
    "Bases de Datos",
    "APIs con IA",
    "Machine Learning"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="sobre-mi" class="relative py-32 md:py-24 overflow-hidden border-t border-white/5" data-astro-cid-v2cbyr3p> <div class="container mx-auto px-8 lg:px-16" data-astro-cid-v2cbyr3p> <div class="grid lg:grid-cols-2 gap-20 items-start" data-astro-cid-v2cbyr3p> <div class="space-y-12" data-astro-cid-v2cbyr3p> <div class="space-y-4" data-astro-cid-v2cbyr3p> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs" data-astro-cid-v2cbyr3p>01 — SOBRE MÍ</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter" data-astro-cid-v2cbyr3p>QUIEN SOY</h2> </div> <div class="space-y-8 max-w-xl" data-astro-cid-v2cbyr3p> <p class="text-lg md:text-xl text-slate-400 font-light leading-relaxed" data-astro-cid-v2cbyr3p>
Estudiante de <span class="text-white font-medium" data-astro-cid-v2cbyr3p>Ingeniería Informática</span> apasionado por construir software que resuelve problemas reales. Combino lógica y creatividad para dar vida a proyectos que van desde aplicaciones web hasta sistemas con inteligencia artificial integrada.
</p> <p class="text-2xl md:text-3xl font-light italic text-blue-500 font-serif leading-tight" data-astro-cid-v2cbyr3p>
"Enamorándome del código, una función a la vez."
</p> </div> <div class="pt-8" data-astro-cid-v2cbyr3p> <a href="/cv.pdf" download="Mi_Hoja_de_Vida.pdf" class="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 duration-300" data-astro-cid-v2cbyr3p>
DESCARGAR CV
<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-v2cbyr3p></path><polyline points="7 10 12 15 17 10" data-astro-cid-v2cbyr3p></polyline><line x1="12" y1="15" x2="12" y2="3" data-astro-cid-v2cbyr3p></line></svg> </a> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 relative" data-astro-cid-v2cbyr3p> <!-- Decorative frame for skills --> <div class="absolute -inset-4 bg-blue-600/5 blur-3xl -z-10" data-astro-cid-v2cbyr3p></div> ${skills.map((skill, index) => renderTemplate`<div class="p-8 glass rounded-3xl group hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 cursor-default" data-astro-cid-v2cbyr3p> <div class="w-10 h-10 bg-white/5 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors" data-astro-cid-v2cbyr3p> <span class="text-blue-500 font-mono font-black text-xs" data-astro-cid-v2cbyr3p>0${index + 1}</span> </div> <h3 class="text-xl font-bold tracking-tight mb-2 uppercase" data-astro-cid-v2cbyr3p>${skill}</h3> <div class="w-8 h-1 bg-blue-600 rounded-full group-hover:w-full transition-all duration-700" data-astro-cid-v2cbyr3p></div> </div>`)} </div> </div> </div> </section> `;
}, "C:/unipaz-manuel/portfolio/src/components/About.astro", void 0);

const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const mainTech = ["ASTRO", "TAILWIND CSS", "NODE.JS", "PYTHON", "JAVA", "SUPABASE", "SQL", "FIREBASE"];
  const subTech = ["LLAMA 3.3", "CLAUDE API", "VERCEL", "NETLIFY", "GIT", "GITHUB", "CURSOR", "VS CODE"];
  return renderTemplate`${maybeRenderHead()}<section id="tech" class="py-32 overflow-hidden bg-black/20 border-t border-b border-white/5" data-astro-cid-lfow52u2> <div class="px-8 lg:px-16 mb-20 text-center" data-astro-cid-lfow52u2> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs mb-4" data-astro-cid-lfow52u2>02 — TECH STACK</p> <h2 class="text-4xl md:text-5xl font-black tracking-tight italic uppercase" data-astro-cid-lfow52u2>Herramientas & Conceptos</h2> </div> <div class="space-y-12" data-astro-cid-lfow52u2> <div class="relative flex overflow-hidden group" data-astro-cid-lfow52u2> <div class="animate-marquee whitespace-nowrap flex items-center gap-16 py-4" data-astro-cid-lfow52u2> ${[...mainTech, ...mainTech].map((tech) => renderTemplate`<span class="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter opacity-10 hover:opacity-100 transition-all duration-700 cursor-default hover:text-blue-500 select-none" data-astro-cid-lfow52u2> ${tech} <span class="mx-12 text-blue-600/30 font-serif font-light" data-astro-cid-lfow52u2>•</span> </span>`)} </div> </div> <div class="relative flex overflow-hidden group" data-astro-cid-lfow52u2> <div class="animate-marquee-reverse whitespace-nowrap flex items-center gap-16 py-4" data-astro-cid-lfow52u2> ${[...subTech, ...subTech].map((tech) => renderTemplate`<span class="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter opacity-10 hover:opacity-100 transition-all duration-700 cursor-default hover:text-purple-500 select-none" data-astro-cid-lfow52u2> ${tech} <span class="mx-12 text-purple-600/30 font-serif font-light" data-astro-cid-lfow52u2>•</span> </span>`)} </div> </div> </div> </section> `;
}, "C:/unipaz-manuel/portfolio/src/components/TechStack.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      title: "Ray App",
      tags: ["Python", "Astro", "Supabase", "Groq"],
      year: "2025",
      description: "Sistema para controlar un PC con Windows desde el m\xF3vil mediante comandos de voz.",
      url: "https://ray-app-wine.vercel.app",
      color: "from-blue-600/20 to-transparent"
    },
    {
      title: "Valantin App",
      tags: ["HTML/CSS/JS", "Firebase", "PWA"],
      year: "2025",
      description: "PWA para parejas con estados de \xE1nimo y base de datos en tiempo real.",
      url: "https://github.com/banna-nuel",
      color: "from-purple-600/20 to-transparent"
    },
    {
      title: "Detecci\xF3n de Intrusos",
      tags: ["Orange", "Python", "ML"],
      year: "2024",
      description: "Clasificaci\xF3n de tr\xE1fico de red para detectar intrusiones usando machine learning.",
      url: null,
      color: "from-green-600/20 to-transparent"
    },
    {
      title: "Mantenimiento Vehicular",
      tags: ["Orange", "Data Mining"],
      year: "2024",
      description: "Sistema de recomendaci\xF3n de mantenimiento preventivo usando \xE1rboles de decisi\xF3n.",
      url: null,
      color: "from-amber-600/20 to-transparent"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="proyectos" class="py-32 bg-[#050505] relative overflow-hidden"> <div class="px-8 lg:px-16 mb-24"> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs mb-4">03 — PROYECTOS</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter">TRABAJOS DESTACADOS</h2> </div> <div class="space-y-px border-t border-b border-white/10"> ${projects.map((project, index) => renderTemplate`<div class="group relative py-12 md:py-20 px-8 lg:px-16 hover:bg-white/5 transition-all duration-700"> <div${addAttribute(`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`, "class")}></div> <a${addAttribute(project.url || "#", "href")}${addAttribute(project.url ? "_blank" : "_self", "target")} class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8"> <div class="flex-1 space-y-6"> <div class="flex items-center gap-4"> <span class="font-mono text-xs text-white/40 tracking-[0.3em]">0${index + 1}</span> <span class="w-8 h-px bg-white/20"></span> <span class="font-mono text-xs text-white/40 tracking-[0.3em] uppercase">${project.year}</span> </div> <h3 class="text-5xl md:text-7xl font-light tracking-tight group-hover:italic transition-all duration-500 transform group-hover:translate-x-4"> ${project.title} </h3> <div class="flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<span class="px-4 py-1.5 border border-white/10 rounded-full font-mono text-[10px] tracking-widest uppercase text-white/50 group-hover:border-blue-500/50 group-hover:text-blue-500 transition-colors"> ${tag} </span>`)} </div> </div> <div class="max-w-xs text-right hidden md:block"> <p class="text-sm text-slate-400 font-light leading-relaxed group-hover:text-white transition-colors duration-500"> ${project.description} </p> <div class="mt-6 flex justify-end"> <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 transform group-hover:rotate-45"> <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> </div> </div> </div> </a> </div>`)} </div> </section>`;
}, "C:/unipaz-manuel/portfolio/src/components/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  const experience = [
    {
      role: "Full Stack Developer (Trainee)",
      company: "Freelance / Proyectos Personales",
      period: "2024 - Presente",
      description: "Desarrollo de aplicaciones web y sistemas de IA. Uso de tecnolog\xEDas como Astro, Python, Supabase y Firebase para crear soluciones de software.",
      points: [
        "Implementaci\xF3n de agentes de IA para automatizaci\xF3n.",
        "Desarrollo de PWAs con bases de datos en tiempo real.",
        "Integraci\xF3n de modelos de lenguaje (LLMs) en apps web."
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experiencia" class="py-32 px-8 lg:px-16 border-t border-white/5"> <div class="mb-20"> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs mb-4">04 — EXPERIENCIA</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">Trayectoria</h2> </div> <div class="max-w-4xl space-y-16"> ${experience.map((exp) => renderTemplate`<div class="relative pl-12 md:pl-20 group"> <div class="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div> <div class="absolute -left-1 top-2 w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] group-hover:scale-125 transition-transform"></div> <div class="space-y-6"> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4"> <div class="space-y-1"> <h3 class="text-3xl md:text-4xl font-light tracking-tight">${exp.role}</h3> <p class="font-mono text-blue-500 text-sm tracking-widest uppercase">${exp.company}</p> </div> <span class="font-mono text-xs text-white/40 tracking-[0.2em] whitespace-nowrap pt-2 uppercase"> ${exp.period} </span> </div> <p class="text-slate-400 font-light leading-relaxed max-w-2xl"> ${exp.description} </p> <ul class="space-y-4"> ${exp.points.map((point) => renderTemplate`<li class="flex items-start gap-3 group/item"> <div class="w-1.5 h-1.5 rounded-full bg-blue-600/50 mt-1.5 group-hover/item:bg-blue-600 transition-colors"></div> <span class="text-sm text-slate-300 font-light group-hover/item:text-white transition-colors">${point}</span> </li>`)} </ul> </div> </div>`)} </div> </section>`;
}, "C:/unipaz-manuel/portfolio/src/components/Experience.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const education = [
    {
      degree: "Ingenier\xEDa Inform\xE1tica",
      institution: "Instituto Universitario de la Paz \u2014 UNIPAZ",
      period: "2023 - Presente",
      description: "Barrancabermeja, Colombia. \xC9nfasis en desarrollo de software, inteligencia artificial y sistemas de informaci\xF3n.",
      specialties: ["Inteligencia Artificial", "Algoritmia", "Desarrollo Web"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="formacion" class="py-32 px-8 lg:px-16 border-t border-white/5 bg-black/10" data-astro-cid-2gvrk3wr> <div class="mb-20" data-astro-cid-2gvrk3wr> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs mb-4" data-astro-cid-2gvrk3wr>05 — FORMACIÓN</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase" data-astro-cid-2gvrk3wr>Academia</h2> </div> <div class="grid md:grid-cols-2 gap-12 items-start max-w-6xl" data-astro-cid-2gvrk3wr> ${education.map((edu) => renderTemplate`<div class="glass p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden" data-astro-cid-2gvrk3wr> <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/10 transition-colors" data-astro-cid-2gvrk3wr></div> <div class="space-y-6 relative z-10" data-astro-cid-2gvrk3wr> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4" data-astro-cid-2gvrk3wr> <div class="space-y-1" data-astro-cid-2gvrk3wr> <h3 class="text-3xl font-light tracking-tight group-hover:text-blue-400 transition-colors" data-astro-cid-2gvrk3wr>${edu.degree}</h3> <p class="font-mono text-blue-500 text-sm tracking-widest uppercase" data-astro-cid-2gvrk3wr>${edu.institution}</p> </div> <span class="font-mono text-xs text-white/30 tracking-[0.2em] whitespace-nowrap pt-2 uppercase" data-astro-cid-2gvrk3wr> ${edu.period} </span> </div> <p class="text-slate-400 font-light leading-relaxed" data-astro-cid-2gvrk3wr> ${edu.description} </p> <div class="flex flex-wrap gap-2 pt-4" data-astro-cid-2gvrk3wr> ${edu.specialties.map((specialty) => renderTemplate`<span class="px-4 py-1.5 bg-blue-600/5 rounded-lg font-mono text-[9px] tracking-wider uppercase text-blue-400 border border-blue-600/10" data-astro-cid-2gvrk3wr> ${specialty} </span>`)} </div> </div> </div>`)} </div> </section> `;
}, "C:/unipaz-manuel/portfolio/src/components/Education.astro", void 0);

const $$Certifications = createComponent(($$result, $$props, $$slots) => {
  const certifications = [
    {
      name: "Desarrollo Cloud con Google Cloud",
      issuer: "Google Cloud / Coursera",
      date: "2024",
      status: "Completado"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      status: "Completado"
    },
    {
      name: "Machine Learning Foundations",
      issuer: "Stanford / DeepLearning.AI",
      date: "2024",
      status: "En Progreso"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="certificaciones" class="py-32 px-8 lg:px-16 border-t border-white/5" data-astro-cid-n357i2j7> <div class="mb-20" data-astro-cid-n357i2j7> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs mb-4" data-astro-cid-n357i2j7>06 — CERTIFICACIONES</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase" data-astro-cid-n357i2j7>Logros</h2> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl" data-astro-cid-n357i2j7> ${certifications.map((cert) => renderTemplate`<div class="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative" data-astro-cid-n357i2j7> <div class="flex flex-col h-full justify-between gap-6" data-astro-cid-n357i2j7> <div class="space-y-4" data-astro-cid-n357i2j7> <div class="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors" data-astro-cid-n357i2j7> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500" data-astro-cid-n357i2j7><path d="M12 15l-2 5 2 2 2-2-2-5z" data-astro-cid-n357i2j7></path><path d="M12 15l2 5 2 2 2-2-2-5z" transform="rotate(120 12 15)" data-astro-cid-n357i2j7></path><path d="M12 15l-2 5 2 2 2-2-2-5z" transform="rotate(240 12 15)" data-astro-cid-n357i2j7></path><circle cx="12" cy="9" r="7" data-astro-cid-n357i2j7></circle></svg> </div> <div class="space-y-2" data-astro-cid-n357i2j7> <h3 class="text-2xl font-light tracking-tight leading-tight group-hover:text-blue-400 transition-colors" data-astro-cid-n357i2j7>${cert.name}</h3> <p class="font-mono text-blue-500 text-[10px] tracking-widest uppercase" data-astro-cid-n357i2j7>${cert.issuer}</p> </div> </div> <div class="flex items-center justify-between pt-6 border-t border-white/5" data-astro-cid-n357i2j7> <span class="font-mono text-[10px] text-white/30 tracking-widest uppercase" data-astro-cid-n357i2j7>${cert.date}</span> <span${addAttribute(`px-3 py-1 rounded-full font-mono text-[9px] tracking-wider uppercase ${cert.status === "Completado" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"}`, "class")} data-astro-cid-n357i2j7> ${cert.status} </span> </div> </div> </div>`)} </div> </section> `;
}, "C:/unipaz-manuel/portfolio/src/components/Certifications.astro", void 0);

const supabaseUrl = undefined                                   ;
const supabaseAnonKey = undefined                                        ;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const [status, setStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("contactos").insert([formData]);
    if (error) {
      console.error("Error enviando mensaje:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 w-64 h-64 bg-blue-600/5 blur-[100px] group-hover:bg-blue-600/10 transition-colors" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "nombre", className: "font-mono text-[10px] tracking-[0.3em] uppercase text-white/40", children: "Nombre" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "nombre",
              name: "nombre",
              value: formData.nombre,
              onChange: handleChange,
              required: true,
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20",
              placeholder: "Emanuel Rodriguez"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "font-mono text-[10px] tracking-[0.3em] uppercase text-white/40", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              value: formData.email,
              onChange: handleChange,
              required: true,
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20",
              placeholder: "ejemplo@email.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "asunto", className: "font-mono text-[10px] tracking-[0.3em] uppercase text-white/40", children: "Asunto" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "asunto",
            name: "asunto",
            value: formData.asunto,
            onChange: handleChange,
            required: true,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20",
            placeholder: "Propuesta de colaboración"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "mensaje", className: "font-mono text-[10px] tracking-[0.3em] uppercase text-white/40", children: "Mensaje" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "mensaje",
            name: "mensaje",
            value: formData.mensaje,
            onChange: handleChange,
            required: true,
            rows: 5,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/20 resize-none",
            placeholder: "Cuéntame sobre tu proyecto..."
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: status === "loading",
          className: "w-full group relative overflow-hidden px-8 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50",
          children: /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-3", children: [
            status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAJE",
            /* @__PURE__ */ jsx(Send, { className: `w-4 h-4 ${status === "loading" ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform` })
          ] })
        }
      ),
      status === "success" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-green-500 font-mono text-xs tracking-tighter bg-green-500/10 p-4 rounded-xl animate-fade-in", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
        "¡Mensaje enviado correctamente! Te contactaré pronto."
      ] }),
      status === "error" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-red-500 font-mono text-xs tracking-tighter bg-red-500/10 p-4 rounded-xl animate-fade-in", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4" }),
        "Hubo un error al enviar el mensaje. Inténtalo de nuevo."
      ] })
    ] })
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 border-t border-white/5 bg-black/40 relative overflow-hidden"> <!-- Background mesh --> <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.05),transparent_70%)]"></div> <div class="container mx-auto px-8 lg:px-16 relative z-10"> <div class="grid md:grid-cols-3 gap-16 md:gap-8 items-start mb-20"> <div class="space-y-6"> <a href="/" class="flex items-center gap-2 group"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"> <span class="text-white font-bold text-xs font-mono">ER</span> </div> <span class="font-bold tracking-tighter text-xl uppercase">EMANUEL<span class="text-blue-500">.</span></span> </a> <p class="text-slate-400 font-light text-sm leading-relaxed max-w-xs">
Desarrollador Full Stack en formación, creando experiencias digitales modernas y funcionales con enfoque en la innovación.
</p> </div> <div class="space-y-6"> <h4 class="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Navegación</h4> <ul class="space-y-4"> <li><a href="#inicio" class="text-sm text-slate-300 hover:text-blue-500 transition-colors">Inicio</a></li> <li><a href="#sobre-mi" class="text-sm text-slate-300 hover:text-blue-500 transition-colors">Sobre Mí</a></li> <li><a href="#proyectos" class="text-sm text-slate-300 hover:text-blue-500 transition-colors">Proyectos</a></li> <li><a href="#contacto" class="text-sm text-slate-300 hover:text-blue-500 transition-colors">Contacto</a></li> </ul> </div> <div class="space-y-6 text-right"> <h4 class="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">Digital</h4> <div class="flex justify-end gap-4"> <a href="https://github.com/banna-nuel" target="_blank" class="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-blue-600/10 hover:border-blue-500 transition-all"> <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path></svg> </a> <a href="https://linkedin.com/in/emanuelrodriguez" target="_blank" class="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-blue-600/10 hover:border-blue-500 transition-all"> <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> </div> <p class="text-[10px] font-mono text-white/20 uppercase tracking-widest pt-4 leading-loose">
HECHO CON AMOR & ASTRO<br>
BARRANCABERMEJA, COLOMBIA
</p> </div> </div> <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5"> <span class="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
&copy; ${currentYear} EMANUEL RODRIGUEZ. TODOS LOS DERECHOS RESERVADOS.
</span> <div class="flex gap-8"> <span class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Privacy</span> <span class="text-[10px] font-mono text-white/20 uppercase tracking-widest">Terms</span> </div> </div> </div> </footer>`;
}, "C:/unipaz-manuel/portfolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Emanuel Rodriguez | Full Stack Developer Portfolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="relative" data-astro-cid-j7pv25f6> <!-- Global background noise/texture --> <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('/noise.png')]" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} <div class="space-y-0 relative z-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TechStack", $$TechStack, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Certifications", $$Certifications, { "data-astro-cid-j7pv25f6": true })} <section id="contacto" class="py-32 px-8 lg:px-16 border-t border-white/5 bg-gradient-to-b from-[#050505] to-black" data-astro-cid-j7pv25f6> <div class="container mx-auto" data-astro-cid-j7pv25f6> <div class="flex flex-col lg:flex-row gap-20 items-start justify-between" data-astro-cid-j7pv25f6> <div class="max-w-xl space-y-12" data-astro-cid-j7pv25f6> <div class="space-y-4" data-astro-cid-j7pv25f6> <p class="font-mono text-blue-500 tracking-[0.3em] uppercase text-xs" data-astro-cid-j7pv25f6>07 — CONTACTO</p> <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase" data-astro-cid-j7pv25f6>Conversemos</h2> </div> <p class="text-xl text-slate-400 font-light leading-relaxed" data-astro-cid-j7pv25f6>
¿Tienes un proyecto en mente, una propuesta de colaboración o simplemente quieres decir hola? No dudes en escribirme.
</p> <div class="space-y-8" data-astro-cid-j7pv25f6> <div class="flex items-center gap-6 group" data-astro-cid-j7pv25f6> <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-500" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500" data-astro-cid-j7pv25f6><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-j7pv25f6></path><polyline points="22,6 12,13 2,6" data-astro-cid-j7pv25f6></polyline></svg> </div> <div class="space-y-1" data-astro-cid-j7pv25f6> <p class="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase" data-astro-cid-j7pv25f6>Email</p> <a href="mailto:emanuelrodriguezpadilla@gmail.com" class="text-lg font-light hover:text-blue-500 transition-colors" data-astro-cid-j7pv25f6>emanuelrodriguezpadilla@gmail.com</a> </div> </div> <div class="flex items-center gap-6 group" data-astro-cid-j7pv25f6> <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-500" data-astro-cid-j7pv25f6> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500" data-astro-cid-j7pv25f6><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-j7pv25f6></path><circle cx="12" cy="10" r="3" data-astro-cid-j7pv25f6></circle></svg> </div> <div class="space-y-1" data-astro-cid-j7pv25f6> <p class="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase" data-astro-cid-j7pv25f6>Ubicación</p> <span class="text-lg font-light" data-astro-cid-j7pv25f6>Barrancabermeja, Colombia</span> </div> </div> </div> </div> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/unipaz-manuel/portfolio/src/components/ContactForm", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/unipaz-manuel/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/unipaz-manuel/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
