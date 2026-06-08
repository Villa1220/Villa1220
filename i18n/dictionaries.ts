import type { Locale } from "@/i18n/config";

interface NamedCopy {
  readonly title: string;
  readonly description: string;
}

export interface Dictionary {
  readonly nav: Record<"work" | "stack" | "philosophy" | "contact", string>;
  readonly actions: {
    readonly getInTouch: string;
    readonly viewWork: string;
    readonly startConversation: string;
    readonly visitSite: string;
    readonly toggleTheme: string;
    readonly toggleLanguage: string;
  };
  readonly hero: {
    readonly availability: string;
    readonly role: string;
    readonly headlineLead: string;
    readonly headlineAccent: string;
    readonly summary: string;
  };
  readonly stats: Record<"experience" | "projects" | "uptime", string>;
  readonly work: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly projects: Record<string, NamedCopy>;
  };
  readonly stack: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly categories: Record<string, string>;
  };
  readonly philosophy: {
    readonly eyebrow: string;
    readonly title: string;
    readonly quote: string;
    readonly principles: Record<string, NamedCopy>;
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
  };
  readonly footer: {
    readonly tagline: string;
  };
}

const en: Dictionary = {
  nav: {
    work: "Work",
    stack: "Stack",
    philosophy: "Philosophy",
    contact: "Contact",
  },
  actions: {
    getInTouch: "Get in touch",
    viewWork: "View selected work",
    startConversation: "Start a conversation",
    visitSite: "Visit live site",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Switch to Spanish",
  },
  hero: {
    availability: "Available for enterprise work",
    role: "Software Engineer · Full-Stack Architect",
    headlineLead: "I design and ship",
    headlineAccent: "enterprise-grade systems.",
    summary:
      "Software Engineer specialized in robust architectures, financial security and AI ecosystems. I translate complex business needs into scalable, clean and modular code — prioritizing usability, efficient resource consumption and security by design.",
  },
  stats: {
    experience: "Years building software",
    projects: "Products in production",
    uptime: "Production uptime",
  },
  work: {
    eyebrow: "Selected Work",
    title: "Production systems, shipped.",
    description:
      "A focused selection of enterprise platforms and applied-intelligence products currently live in production.",
    projects: {
      chasquibus: {
        title: "ChasquiBus Enterprise Platform",
        description:
          "Co-designed the logical infrastructure for a mass-transit platform, implementing agile workflows and robust quality control.",
      },
      ayalma: {
        title: "Ayalma Corporate Landing",
        description:
          "High-fidelity corporate landing page focused on performance, accessibility and brand-grade visual polish.",
      },
      doctor: {
        title: "Clinical Dashboard — Doctor Frontend",
        description:
          "Clinical management dashboard with a secure authentication flow and a clean, data-dense interface.",
      },
      conversor: {
        title: "Conversor IA — Applied Intelligence",
        description:
          "AI-driven conversion tool applying intelligent automation to streamline document and media workflows.",
      },
    },
  },
  stack: {
    eyebrow: "Tech Stack",
    title: "An enterprise-grade toolkit.",
    description:
      "From premium frontend ecosystems to mission-critical backends and intelligent automation.",
    categories: {
      frontend: "Premium Frontend",
      backend: "Mission-Critical Backend",
      data: "Database & Storage",
      devops: "DevOps & Automation",
    },
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Engineering pillars.",
    quote:
      "Translate complex business needs into highly scalable, clean and modular code — prioritizing usability, efficient resource consumption and security by design.",
    principles: {
      security: {
        title: "Security by Design",
        description:
          "Applied cryptography and hardened data flows from the first commit.",
      },
      bff: {
        title: "BFF Pattern",
        description: "Decoupled APIs optimized for each client surface.",
      },
      scalability: {
        title: "Modular Scalability",
        description: "Clean code under SOLID principles, built to grow.",
      },
      ai: {
        title: "AI Integration",
        description: "Hybrid architectures and predictive models in production.",
      },
      ux: {
        title: "UX-First",
        description: "High-fidelity, performant and accessible interfaces.",
      },
      qa: {
        title: "Quality Assurance",
        description:
          "Strict auditing and control across the software lifecycle.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something exceptional.",
    description:
      "Available for enterprise engagements, architecture consulting and high-fidelity product work.",
  },
  footer: {
    tagline: "Building the future of FinTech & Automation.",
  },
};

const es: Dictionary = {
  nav: {
    work: "Proyectos",
    stack: "Stack",
    philosophy: "Filosofía",
    contact: "Contacto",
  },
  actions: {
    getInTouch: "Hablemos",
    viewWork: "Ver proyectos destacados",
    startConversation: "Iniciar una conversación",
    visitSite: "Ver sitio en vivo",
    toggleTheme: "Cambiar tema",
    toggleLanguage: "Switch to English",
  },
  hero: {
    availability: "Disponible para proyectos enterprise",
    role: "Ingeniero de Software · Arquitecto Full-Stack",
    headlineLead: "Diseño y despliego",
    headlineAccent: "sistemas de nivel enterprise.",
    summary:
      "Ingeniero de Software especializado en arquitecturas robustas, seguridad financiera y ecosistemas de IA. Traduzco necesidades complejas de negocio en código escalable, limpio y modular — priorizando la usabilidad, el consumo eficiente de recursos y la seguridad por diseño.",
  },
  stats: {
    experience: "Años construyendo software",
    projects: "Productos en producción",
    uptime: "Disponibilidad en producción",
  },
  work: {
    eyebrow: "Proyectos Destacados",
    title: "Sistemas en producción, entregados.",
    description:
      "Una selección enfocada de plataformas enterprise y productos de inteligencia aplicada actualmente en producción.",
    projects: {
      chasquibus: {
        title: "Plataforma Enterprise ChasquiBus",
        description:
          "Co-diseño de la infraestructura lógica para una plataforma de transporte masivo, implementando flujos ágiles y control de calidad robusto.",
      },
      ayalma: {
        title: "Landing Corporativa Ayalma",
        description:
          "Landing corporativa de alta fidelidad enfocada en rendimiento, accesibilidad y acabado visual de marca.",
      },
      doctor: {
        title: "Dashboard Clínico — Doctor Frontend",
        description:
          "Dashboard de gestión clínica con un flujo de autenticación seguro y una interfaz limpia y densa en datos.",
      },
      conversor: {
        title: "Conversor IA — Inteligencia Aplicada",
        description:
          "Herramienta de conversión con IA que aplica automatización inteligente para agilizar flujos de documentos y medios.",
      },
    },
  },
  stack: {
    eyebrow: "Stack Tecnológico",
    title: "Un toolkit de nivel enterprise.",
    description:
      "Desde ecosistemas frontend premium hasta backends de misión crítica y automatización inteligente.",
    categories: {
      frontend: "Frontend Premium",
      backend: "Backend de Misión Crítica",
      data: "Bases de Datos y Almacenamiento",
      devops: "DevOps y Automatización",
    },
  },
  philosophy: {
    eyebrow: "Filosofía",
    title: "Pilares de ingeniería.",
    quote:
      "Traducir necesidades complejas de negocio en código altamente escalable, limpio y modular — priorizando la usabilidad, el consumo eficiente de recursos y la seguridad por diseño.",
    principles: {
      security: {
        title: "Seguridad por Diseño",
        description:
          "Criptografía aplicada y flujos de datos blindados desde el primer commit.",
      },
      bff: {
        title: "Patrón BFF",
        description: "APIs desacopladas y optimizadas para cada cliente.",
      },
      scalability: {
        title: "Escalabilidad Modular",
        description: "Código limpio bajo principios SOLID, hecho para crecer.",
      },
      ai: {
        title: "Integración de IA",
        description:
          "Arquitecturas híbridas y modelos predictivos en producción.",
      },
      ux: {
        title: "UX Primero",
        description: "Interfaces de alta fidelidad, rendimiento y accesibilidad.",
      },
      qa: {
        title: "Aseguramiento de Calidad",
        description:
          "Auditoría y control estricto en todo el ciclo de vida del software.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo excepcional.",
    description:
      "Disponible para proyectos enterprise, consultoría de arquitectura y trabajo de producto de alta fidelidad.",
  },
  footer: {
    tagline: "Construyendo el futuro del FinTech y la Automatización.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
