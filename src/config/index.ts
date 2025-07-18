import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Miguel Alejandro González Fernández — Desarrollador Java FullStack",
  author: "Miguel Alejandro González Fernández",
  description:
    "Desarrollador Java FullStack Junior, poseo experiencia y conocimientos en Java, JavaScript, Python, Bases de datos, Metologias Agile y Trabajo colaborativo con Git.",
  lang: "en",
  siteLogo: "/miguelglezf.github.io/portada_mini.jpg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/miguelglzfz" },
    { text: "Github", href: "https://github.com/maelex" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://maelex.github.io/miguelglezf.github.io/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Miguel González",
    specialty: "Desarrollador Java FullStack",
    summary:
      "Desarrollador Java FullStack Junior, poseo experiencia en Java, JavaScript, Python, Bases de datos, Metologias Agile y Trabajo colaborativo con Git.",
    email: "miguel-aelex005@hotmail.com",
  },
  experience: [
    {
      company: "TATA Consultancy Services",
      position: "Service Desk",
      startDate: "Noviembre 2021",
      endDate: "Enero 2023",
      summary: [
        "Proporcioné atención a usuarios con problemas y/o consultas técnicas relacionadas a las diferentes aplicaciones utilizadas",
        "Diagnostiqué y resolví de problemas técnicos reportados por los usuarios.",
        "Documenté cada problema reportado para contribuir a una base de conocimiento útil para futuras incidencias.",
        "Escalé tickets a equipos de soporte técnico de nivel superior (L2) cuando era casos prioritarios.",
        "Brindé seguimiento constante a los usuarios para asegurar el cumplimiento de los SLA´s",
      ],
    },
    {
      company: "Papelería Lupita",
      position: "Técnico en informática",
      startDate: "Febrero 2021",
      endDate: "Junio 2021",
      summary: [
        "Llevé a cabo el mantenimiento correctivo y preventivo al hardware utilizado como PC´s, impresoras, escáners etc.",
        "Gestioné la instalación y actualización de software tales como Sistema operativo, Microsoft Office, Antivirus, editor de vídeo y drivers etc.",
        "Desarrollé el sitio web de la empresa utilizando HTML, CSS y JavaScript para modernizar la imagen del negocio.",
        "Desplegué la pagina web del negocio en un servidor en linea, fortaleciendo la marca del negocio.",
      ],
    },
    {
      company: "Software Insights",
      position: "Desarrollador Web Junior",
      startDate: "Febrero 2018",
      endDate: "Junio 2018",
      summary:[
          "Desarrollé fragmentos de código HTML y CSS para ser utilizado en sitios web de negocios locales.",
          "Corregí errores en proyectos ya existentes empleando HTML, CSS, JavaScript y PHP.",
      ] 
    },
  ],
  projects: [
    {
      name: "Repairman",
      summary: "Plataforma e-commerce para la venta, compra y reparación de smartphones, fue creado utilizando Java, Spring Boot, MySQL, HTML, CSS y JavaScript.",
      linkPreview: "/",
      linkSource: "https://github.com/alamdominic/repairman",
      image: "/miguelglezf.github.io/App19.jpg",
    },
    {
      name: "Plataforma EVA",
      summary: "Herramienta de apoyo para agilizar y mejorar el proceso de obtencion de datos estadisticos en beneficio de estudiantes y profesores del Centro Univeristario del Sur (CUSur)",
      linkPreview: "/",
      linkSource: "https://github.com/maelex/Plataforma-EVA-2016",
      image: "/miguelglezf.github.io/App21.jpg",
    },
    {
      name: "Centro de Monitoreo Activo Laguna",
      summary: "Sistema para el monitoreo de la Laguna de Zapotlan el Grande Jalisco, para  preservación y conservación del ecosistema de la misma.",
      image: "/miguelglezf.github.io/App18.jpg",
    },
  ],
  about: {
    description: `
      Hola, Soy Miguel Alejandro, Desarrollador Java Full Stack, capaz de participar en proyectos que requieran compromiso para lograr los objetivos trazados, poseo experiencia y conocimientos en Java, JavaScript, Python, Bases de datos, PHP, Linux y Soporte IT. Día a día busco impulsar el éxito de proyectos importantes e innovadores.
    `,
    image: "/miguelglezf.github.io/portada.jpg",
  },
};

// #5755ff
