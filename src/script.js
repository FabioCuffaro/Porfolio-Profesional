/* ==========================================================================
   PORTFOLIO FABIO CUFFARO — ÍNDICE JAVASCRIPT

   1. Traducciones
   2. Configuración y almacenamiento
   3. Referencias del DOM
   4. Navegación móvil
   5. Tema claro / oscuro
   6. Internacionalización
   7. Selector de currículum
   8. Botón volver arriba
   9. Eventos globales
   10. Animaciones de entrada
   11. Inicialización
   ========================================================================== */

/* 1. TRADUCCIONES ======================================================== */
const translations = {
    "es": {
        "meta.title": "Fabio Cuffaro | Backend Developer",
        "meta.description": "Portfolio de Fabio Cuffaro, Backend Developer especializado en Java, Spring Boot, Python, FastAPI, APIs, microservicios e inteligencia artificial aplicada.",
        "meta.ogDescription": "Java, Spring Boot, Python, FastAPI, arquitectura backend e inteligencia artificial aplicada.",
        "nav.aria": "Navegación principal",
        "nav.homeAria": "Ir al inicio",
        "nav.profile": "Perfil",
        "nav.projects": "Proyectos",
        "nav.experience": "Experiencia",
        "nav.technologies": "Tecnologías",
        "nav.menuOpen": "Abrir menú",
        "nav.menuClose": "Cerrar menú",
        "nav.menuLabel": "Menú",
        "nav.menuCloseLabel": "Cerrar",
        "language.selectorAria": "Seleccionar idioma",
        "common.cvShort": "CV",
        "common.viewProjects": "Ver proyectos",
        "common.downloadCv": "Descargar CV",
        "cv.selectorTitle": "Descargar currículum",
        "cv.selectorDescription": "Selecciona el idioma del documento.",
        "cv.closeAria": "Cerrar selector de currículum",
        "cv.recommended": "Recomendado",
        "cv.downloadEsAria": "Descargar currículum en español",
        "cv.downloadEnAria": "Descargar currículum en inglés",
        "cv.downloadItAria": "Descargar currículum en italiano",
        "common.viewLinkedin": "Ver LinkedIn",
        "common.viewExperience": "Ver experiencia",
        "common.viewAll": "Ver todos",
        "theme.enableDark": "Activar modo oscuro",
        "theme.enableLight": "Activar modo claro",
        "hero.imageAlt": "Retrato de Fabio Cuffaro",
        "hero.hello": "¡Hola! Soy",
        "hero.eyebrow": "Backend · APIs · Microservicios · IA aplicada",
        "hero.title": "Backend Developer",
        "hero.stack": "Java / Spring Boot · Python / FastAPI",
        "hero.description": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con experiencia en una plataforma empresarial cloud-native. Desarrollo APIs seguras, servicios backend y soluciones orientadas a datos, con interés creciente en la integración práctica de inteligencia artificial.",
        "social.groupAria": "Redes y contacto",
        "social.emailAria": "Enviar correo a Fabio",
        "social.githubAria": "GitHub de Fabio Cuffaro",
        "social.linkedinAria": "LinkedIn de Fabio Cuffaro",
        "profile.title": "Mi trayectoria no empezó en la programación, y eso también suma.",
        "profile.paragraph1": "Antes de desarrollar software trabajé en marketing, comunicación, administración, ventas y atención al cliente. Esa experiencia me enseñó a entender necesidades, hacer las preguntas correctas y comunicar soluciones con claridad.",
        "profile.paragraph2": "En 2026 finalicé Desarrollo de Aplicaciones Multiplataforma y participé en Conductor, una plataforma analítica cloud-native y multi-tenant para Mercanza. Hoy centro mi perfil en backend con Java, Spring Boot, Python y FastAPI, y continúo especializándome mediante un Máster en AI Engineering de Prometeo · ThePowerMBA.",
        "profile.evidenceAria": "Evidencias profesionales",
        "profile.evidence.languagesTitle": "Idiomas",
        "profile.evidence.languages": "Español · Inglés · Italiano",
        "profile.evidence.dam": "Titulación oficial finalizada",
        "profile.evidence.tfg": "Proyecto final de ciclo",
        "profile.evidence.cloud": "Experiencia en plataforma real",
        "projects.sectionTitle": "Portfolio y proyectos de GitHub",
        "projects.badges.professional": "Experiencia profesional",
        "projects.badges.featured": "Proyecto destacado",
        "projects.badges.personal": "Proyecto personal",
        "projects.badges.inDevelopment": "En desarrollo",
        "projects.badges.repository": "Repositorio completo",
        "projects.conductor.imageAlt": "Identidad visual de la plataforma Conductor",
        "projects.conductor.title": "Conductor · Plataforma analítica",
        "projects.conductor.date": "Marzo – Junio 2026",
        "projects.conductor.description": "Plataforma empresarial cloud-native y multi-tenant. Mi trabajo se centró en APIs y BFF, autenticación y autorización con JWT/RS256, control de acceso basado en roles y permisos, Kafka, Docker, PostgreSQL, MongoDB, testing y validación de migraciones.",
        "projects.conductor.techAria": "Tecnologías de Conductor",
        "projects.conductor.rbacTag": "RBAC · roles y permisos",
        "projects.tfg.imageAlt": "Pantalla de acceso de la red social desarrollada como TFG",
        "projects.tfg.title": "Backend Red Social · Java/Spring Boot",
        "projects.tfg.date": "Marzo 2026",
        "projects.tfg.description": "Proyecto final de DAM calificado con 10/10. API REST para una red social con Spring Boot, Spring Security, autenticación JWT, usuarios, seguidores, publicaciones, imágenes, persistencia y control de permisos.",
        "projects.tfg.techAria": "Tecnologías del proyecto final",
        "projects.rally.imageAlt": "Dashboard del proyecto Rally Performance Analyzer",
        "projects.rally.title": "Rally Performance Analyzer",
        "projects.rally.date": "Junio 2026",
        "projects.rally.description": "Aplicación para analizar datos reales del World Rally Championship. Integra scraping responsable, procesamiento de información, una API REST con FastAPI y visualizaciones orientadas al rendimiento deportivo.",
        "projects.rally.techAria": "Tecnologías de Rally Performance",
        "projects.tags.scraping": "Scraping",
        "projects.tags.data": "Datos",
        "projects.portfolio.imageAlt": "Captura del portfolio profesional",
        "projects.portfolio.title": "Portfolio profesional",
        "projects.portfolio.date": "Noviembre 2025",
        "projects.portfolio.description": "Portfolio estático desarrollado desde cero para presentar proyectos y experiencia. Incluye diseño responsive, modo oscuro, mejoras de accesibilidad, SEO y despliegue en Vercel.",
        "projects.portfolio.techAria": "Tecnologías del portfolio",
        "projects.chatbot.localModel": "Modelo local",
        "projects.chatbot.title": "Chatbot local con IA",
        "projects.chatbot.date": "Julio 2026",
        "projects.chatbot.description": "Proyecto en desarrollo para construir un chat local ligero mediante una API con FastAPI y Pydantic. La arquitectura está planteada para ejecutar modelos con Ollama, gestionar contexto e historial y permitir futuros proveedores de IA.",
        "projects.chatbot.techAria": "Tecnologías previstas para el chatbot",
        "projects.chatbot.localLlm": "LLM local",
        "projects.chatbot.status": "Diseño y desarrollo en curso",
        "projects.chatbot.statusTitle": "Proyecto actualmente en desarrollo",
        "projects.more.areas": "Java · Python · Frontend · Bases de datos",
        "projects.more.title": "Más proyectos y evolución técnica",
        "projects.more.description": "Consulta otros ejercicios y proyectos de aprendizaje: aplicaciones Java, lógica backend, interfaces web, bases de datos y experimentos técnicos que muestran mi evolución.",
        "projects.more.techAria": "Áreas de otros proyectos",
        "projects.tags.web": "Web",
        "projects.tags.learning": "Aprendizaje",
        "career.experienceTitle": "Experiencia laboral",
        "career.mercanza.role": "Software Engineer Intern",
        "career.mercanza.date": "Marzo 2026 – Junio 2026",
        "career.mercanza.description": "Participación en el desarrollo y la validación de una plataforma analítica empresarial cloud-native, trabajando en servicios backend, seguridad, datos e integración.",
        "career.mercanza.highlight1": "APIs, BFF, autenticación, autorización, roles y permisos.",
        "career.mercanza.highlight2": "Arquitectura multi-tenant, PostgreSQL, MongoDB y migraciones.",
        "career.mercanza.highlight3": "Kafka, Docker, testing unitario, integración y regresión.",
        "career.marquez.role": "Oficial administrativo",
        "career.marquez.date": "Octubre 2022 – Febrero 2026",
        "career.marquez.description": "Gestión administrativa, atención a clientes, organización documental, seguimiento de operaciones y resolución de incidencias en un entorno de contacto directo con el público.",
        "career.vipsual.role": "Departamento de marketing",
        "career.vipsual.date": "Febrero 2021 – Julio 2021",
        "career.vipsual.description": "Apoyo en marketing digital, comunicación, gestión de contenidos y coordinación de tareas dentro de un equipo orientado a proyectos y clientes.",
        "education.title": "Formación y acreditaciones",
        "education.master.title": "Máster en AI Engineering",
        "education.master.date": "Junio 2026 – Septiembre 2026 · En curso",
        "education.master.description": "Especialización práctica en inteligencia artificial, integración de modelos, automatización y desarrollo de soluciones de ingeniería de IA.",
        "education.dam.title": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
        "education.dam.date": "Finalizado en 2026",
        "education.dam.description": "Formación oficial en programación, bases de datos, servicios, interfaces, acceso a datos y desarrollo multiplataforma.",
        "education.aws.date": "Febrero 2026",
        "education.aws.description": "Fundamentos de cloud computing, servicios AWS, seguridad, arquitectura, costes y soporte.",
        "education.nicolas.title": "Formación Java y Spring Boot",
        "education.nicolas.date": "Junio 2025 – Octubre 2025",
        "education.nicolas.description": "Backend con Java, Spring Boot, APIs REST, seguridad, persistencia y prácticas de desarrollo profesional.",
        "education.brais.title": "Formación técnica en programación y backend",
        "education.brais.date": "Formación técnica complementaria",
        "education.brais.description": "Programa práctico de MoureDev con lógica de programación, Java, SQL, Python, FastAPI, desarrollo de APIs e implementación progresiva de soluciones backend.",
        "recommendation.title": "Referencias y trabajo en equipo",
        "recommendation.text": "Mis recomendaciones profesionales respaldan iniciativa, autonomía, responsabilidad, comunicación y capacidad de colaboración. También puedes consultar el artículo de mi tutor en Mercanza sobre el uso combinado de criterio humano e inteligencia artificial en un proyecto real.",
        "recommendation.view": "Ver recomendaciones",
        "recommendation.article": "Leer artículo sobre IA y equipo",
        "technologies.title": "Tecnologías",
        "technologies.intro": "Mi stack principal se concentra en backend. Las tecnologías se muestran por función para diferenciar la especialización principal de las competencias complementarias.",
        "technologies.stripAria": "Tecnologías principales destacadas",
        "technologies.logoAlt.python": "Logotipo de Python",
        "technologies.logoAlt.postgresql": "Logotipo de PostgreSQL",
        "technologies.logoAlt.mongodb": "Logotipo de MongoDB",
        "technologies.logoAlt.docker": "Logotipo de Docker",
        "technologies.groups.main": "Stack principal",
        "technologies.groups.backend": "Backend, arquitectura y seguridad",
        "technologies.groups.data": "Datos e infraestructura",
        "technologies.groups.complementary": "Complementarias e IA aplicada",
        "technologies.tags.microservices": "Microservicios",
        "technologies.tags.testing": "Testing",
        "technologies.tags.localModels": "Modelos locales",
        "technologies.tags.aiApis": "APIs de IA",
        "technologies.roles.backendLanguage": "Lenguaje backend",
        "technologies.roles.backendFramework": "Framework backend",
        "technologies.roles.apiFramework": "Framework para APIs",
        "technologies.roles.sqlDatabase": "Base de datos SQL",
        "technologies.roles.nosqlDatabase": "Base de datos NoSQL",
        "technologies.roles.messaging": "Mensajería distribuida",
        "technologies.roles.containers": "Contenedores",
        "technologies.profileImageAlt": "Fabio Cuffaro trabajando con su ordenador",
        "footer.email": "Correo",
        "footer.cv": "Currículum vitae",
        "top.title": "Volver arriba",
        "top.aria": "Volver al principio"
    },
    "en": {
        "meta.title": "Fabio Cuffaro | Backend Developer",
        "meta.description": "Portfolio of Fabio Cuffaro, a Backend Developer specialising in Java, Spring Boot, Python, FastAPI, APIs, microservices and applied artificial intelligence.",
        "meta.ogDescription": "Java, Spring Boot, Python, FastAPI, backend architecture and applied artificial intelligence.",
        "nav.aria": "Main navigation",
        "nav.homeAria": "Go to the homepage",
        "nav.profile": "Profile",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.technologies": "Technologies",
        "nav.menuOpen": "Open menu",
        "nav.menuClose": "Close menu",
        "nav.menuLabel": "Menu",
        "nav.menuCloseLabel": "Close",
        "language.selectorAria": "Select language",
        "common.cvShort": "CV",
        "common.viewProjects": "View projects",
        "common.downloadCv": "Download CV",
        "cv.selectorTitle": "Download résumé",
        "cv.selectorDescription": "Choose the document language.",
        "cv.closeAria": "Close résumé selector",
        "cv.recommended": "Recommended",
        "cv.downloadEsAria": "Download résumé in Spanish",
        "cv.downloadEnAria": "Download résumé in English",
        "cv.downloadItAria": "Download résumé in Italian",
        "common.viewLinkedin": "View LinkedIn",
        "common.viewExperience": "View experience",
        "common.viewAll": "View all",
        "theme.enableDark": "Enable dark mode",
        "theme.enableLight": "Enable light mode",
        "hero.imageAlt": "Portrait of Fabio Cuffaro",
        "hero.hello": "Hello! I am",
        "hero.eyebrow": "Backend · APIs · Microservices · Applied AI",
        "hero.title": "Backend Developer",
        "hero.stack": "Java / Spring Boot · Python / FastAPI",
        "hero.description": "Higher Technician in Multiplatform Application Development with experience on a cloud-native enterprise platform. I build secure APIs, backend services and data-oriented solutions, with a growing focus on the practical integration of artificial intelligence.",
        "social.groupAria": "Social links and contact",
        "social.emailAria": "Email Fabio",
        "social.githubAria": "Fabio Cuffaro on GitHub",
        "social.linkedinAria": "Fabio Cuffaro on LinkedIn",
        "profile.title": "My career did not start in programming, and that is also an advantage.",
        "profile.paragraph1": "Before developing software, I worked in marketing, communication, administration, sales and customer service. That experience taught me to understand needs, ask the right questions and communicate solutions clearly.",
        "profile.paragraph2": "In 2026 I completed a Higher Vocational Diploma in Multiplatform Application Development and contributed to Conductor, a cloud-native, multi-tenant analytics platform for Mercanza. I now focus on backend development with Java, Spring Boot, Python and FastAPI, while continuing my specialisation through a Master's in AI Engineering at Prometeo · ThePowerMBA.",
        "profile.evidenceAria": "Professional highlights",
        "profile.evidence.languagesTitle": "Languages",
        "profile.evidence.languages": "Spanish · English · Italian",
        "profile.evidence.dam": "Official qualification completed",
        "profile.evidence.tfg": "Final qualification project",
        "profile.evidence.cloud": "Experience on a real platform",
        "projects.sectionTitle": "Portfolio and GitHub projects",
        "projects.badges.professional": "Professional experience",
        "projects.badges.featured": "Featured project",
        "projects.badges.personal": "Personal project",
        "projects.badges.inDevelopment": "In development",
        "projects.badges.repository": "Full repository",
        "projects.conductor.imageAlt": "Visual identity of the Conductor platform",
        "projects.conductor.title": "Conductor · Analytics platform",
        "projects.conductor.date": "March – June 2026",
        "projects.conductor.description": "Cloud-native, multi-tenant enterprise platform. My work focused on APIs and BFF, JWT/RS256 authentication and authorisation, role- and permission-based access control, Kafka, Docker, PostgreSQL, MongoDB, testing and migration validation.",
        "projects.conductor.techAria": "Technologies used in Conductor",
        "projects.conductor.rbacTag": "RBAC · roles and permissions",
        "projects.tfg.imageAlt": "Login screen of the social network developed as the final project",
        "projects.tfg.title": "Social Network Backend · Java/Spring Boot",
        "projects.tfg.date": "March 2026",
        "projects.tfg.description": "Final project for my Multiplatform Application Development qualification, graded 10/10. REST API for a social network built with Spring Boot, Spring Security, JWT authentication, users, followers, posts, images, persistence and permission control.",
        "projects.tfg.techAria": "Technologies used in the final project",
        "projects.rally.imageAlt": "Dashboard of the Rally Performance Analyzer project",
        "projects.rally.title": "Rally Performance Analyzer",
        "projects.rally.date": "June 2026",
        "projects.rally.description": "Application for analysing real World Rally Championship data. It combines responsible web scraping, data processing, a REST API built with FastAPI and performance-oriented visualisations.",
        "projects.rally.techAria": "Technologies used in Rally Performance",
        "projects.tags.scraping": "Web scraping",
        "projects.tags.data": "Data",
        "projects.portfolio.imageAlt": "Screenshot of the professional portfolio",
        "projects.portfolio.title": "Professional portfolio",
        "projects.portfolio.date": "November 2025",
        "projects.portfolio.description": "Static portfolio developed from scratch to present projects and experience. It includes responsive design, dark mode, accessibility improvements, SEO and deployment on Vercel.",
        "projects.portfolio.techAria": "Portfolio technologies",
        "projects.chatbot.localModel": "Local model",
        "projects.chatbot.title": "Local AI chatbot",
        "projects.chatbot.date": "July 2026",
        "projects.chatbot.description": "Project in development to build a lightweight local chat application through an API created with FastAPI and Pydantic. The architecture is designed to run models with Ollama, manage context and history, and support additional AI providers in the future.",
        "projects.chatbot.techAria": "Planned technologies for the chatbot",
        "projects.chatbot.localLlm": "Local LLM",
        "projects.chatbot.status": "Design and development in progress",
        "projects.chatbot.statusTitle": "Project currently in development",
        "projects.more.areas": "Java · Python · Frontend · Databases",
        "projects.more.title": "More projects and technical progress",
        "projects.more.description": "Explore other learning exercises and projects: Java applications, backend logic, web interfaces, databases and technical experiments that show my progress.",
        "projects.more.techAria": "Areas covered by other projects",
        "projects.tags.web": "Web",
        "projects.tags.learning": "Learning",
        "career.experienceTitle": "Work experience",
        "career.mercanza.role": "Software Engineer Intern",
        "career.mercanza.date": "March 2026 – June 2026",
        "career.mercanza.description": "Contributed to the development and validation of a cloud-native enterprise analytics platform, working on backend services, security, data and integration.",
        "career.mercanza.highlight1": "APIs, BFF, authentication, authorisation, roles and permissions.",
        "career.mercanza.highlight2": "Multi-tenant architecture, PostgreSQL, MongoDB and migrations.",
        "career.mercanza.highlight3": "Kafka, Docker, unit, integration and regression testing.",
        "career.marquez.role": "Administrative Officer",
        "career.marquez.date": "October 2022 – February 2026",
        "career.marquez.description": "Administrative management, customer service, document organisation, operational follow-up and issue resolution in a public-facing environment.",
        "career.vipsual.role": "Marketing Department",
        "career.vipsual.date": "February 2021 – July 2021",
        "career.vipsual.description": "Support in digital marketing, communication, content management and task coordination within a team focused on projects and clients.",
        "education.title": "Education and credentials",
        "education.master.title": "Master's in AI Engineering",
        "education.master.date": "June 2026 – September 2026 · In progress",
        "education.master.description": "Practical specialisation in artificial intelligence, model integration, automation and the development of AI engineering solutions.",
        "education.dam.title": "Higher Technician in Multiplatform Application Development",
        "education.dam.date": "Completed in 2026",
        "education.dam.description": "Official training in programming, databases, services, interfaces, data access and multiplatform development.",
        "education.aws.date": "February 2026",
        "education.aws.description": "Fundamentals of cloud computing, AWS services, security, architecture, costs and support.",
        "education.nicolas.title": "Java and Spring Boot training",
        "education.nicolas.date": "June 2025 – October 2025",
        "education.nicolas.description": "Backend development with Java, Spring Boot, REST APIs, security, persistence and professional development practices.",
        "education.brais.title": "Technical training in programming and backend development",
        "education.brais.date": "Additional technical training",
        "education.brais.description": "Practical MoureDev programme covering programming logic, Java, SQL, Python, FastAPI, API development and the progressive implementation of backend solutions.",
        "recommendation.title": "References and teamwork",
        "recommendation.text": "My professional recommendations highlight initiative, autonomy, responsibility, communication and the ability to collaborate. You can also read my Mercanza mentor’s article about combining human judgement and artificial intelligence in a real project.",
        "recommendation.view": "View recommendations",
        "recommendation.article": "Read the article on AI and teamwork",
        "technologies.title": "Technologies",
        "technologies.intro": "My main stack is focused on backend development. Technologies are grouped by function to distinguish my core specialisation from complementary skills.",
        "technologies.stripAria": "Featured core technologies",
        "technologies.logoAlt.python": "Python logo",
        "technologies.logoAlt.postgresql": "PostgreSQL logo",
        "technologies.logoAlt.mongodb": "MongoDB logo",
        "technologies.logoAlt.docker": "Docker logo",
        "technologies.groups.main": "Core stack",
        "technologies.groups.backend": "Backend, architecture and security",
        "technologies.groups.data": "Data and infrastructure",
        "technologies.groups.complementary": "Complementary skills and applied AI",
        "technologies.tags.microservices": "Microservices",
        "technologies.tags.testing": "Testing",
        "technologies.tags.localModels": "Local models",
        "technologies.tags.aiApis": "AI APIs",
        "technologies.roles.backendLanguage": "Backend language",
        "technologies.roles.backendFramework": "Backend framework",
        "technologies.roles.apiFramework": "API framework",
        "technologies.roles.sqlDatabase": "SQL database",
        "technologies.roles.nosqlDatabase": "NoSQL database",
        "technologies.roles.messaging": "Distributed messaging",
        "technologies.roles.containers": "Containers",
        "technologies.profileImageAlt": "Fabio Cuffaro working at his computer",
        "footer.email": "Email",
        "footer.cv": "CV",
        "top.title": "Back to top",
        "top.aria": "Back to the beginning"
    },
    "it": {
        "meta.title": "Fabio Cuffaro | Backend Developer",
        "meta.description": "Portfolio di Fabio Cuffaro, Backend Developer specializzato in Java, Spring Boot, Python, FastAPI, API, microservizi e intelligenza artificiale applicata.",
        "meta.ogDescription": "Java, Spring Boot, Python, FastAPI, architettura backend e intelligenza artificiale applicata.",
        "nav.aria": "Navigazione principale",
        "nav.homeAria": "Vai alla pagina iniziale",
        "nav.profile": "Profilo",
        "nav.projects": "Progetti",
        "nav.experience": "Esperienza",
        "nav.technologies": "Tecnologie",
        "nav.menuOpen": "Apri menu",
        "nav.menuClose": "Chiudi menu",
        "nav.menuLabel": "Menu",
        "nav.menuCloseLabel": "Chiudi",
        "language.selectorAria": "Seleziona lingua",
        "common.cvShort": "CV",
        "common.viewProjects": "Vedi progetti",
        "common.downloadCv": "Scarica CV",
        "cv.selectorTitle": "Scarica il curriculum",
        "cv.selectorDescription": "Scegli la lingua del documento.",
        "cv.closeAria": "Chiudi il selettore del curriculum",
        "cv.recommended": "Consigliato",
        "cv.downloadEsAria": "Scarica il curriculum in spagnolo",
        "cv.downloadEnAria": "Scarica il curriculum in inglese",
        "cv.downloadItAria": "Scarica il curriculum in italiano",
        "common.viewLinkedin": "Vedi LinkedIn",
        "common.viewExperience": "Vedi esperienza",
        "common.viewAll": "Vedi tutti",
        "theme.enableDark": "Attiva modalità scura",
        "theme.enableLight": "Attiva modalità chiara",
        "hero.imageAlt": "Ritratto di Fabio Cuffaro",
        "hero.hello": "Ciao! Sono",
        "hero.eyebrow": "Backend · API · Microservizi · IA applicata",
        "hero.title": "Backend Developer",
        "hero.stack": "Java / Spring Boot · Python / FastAPI",
        "hero.description": "Tecnico Superiore in Sviluppo di Applicazioni Multipiattaforma con esperienza in una piattaforma aziendale cloud-native. Sviluppo API sicure, servizi backend e soluzioni orientate ai dati, con un interesse crescente per l’integrazione pratica dell’intelligenza artificiale.",
        "social.groupAria": "Social e contatti",
        "social.emailAria": "Invia un’email a Fabio",
        "social.githubAria": "Fabio Cuffaro su GitHub",
        "social.linkedinAria": "Fabio Cuffaro su LinkedIn",
        "profile.title": "Il mio percorso non è iniziato con la programmazione, e anche questo è un valore.",
        "profile.paragraph1": "Prima di sviluppare software ho lavorato nel marketing, nella comunicazione, nell’amministrazione, nelle vendite e nell’assistenza clienti. Questa esperienza mi ha insegnato a comprendere le esigenze, porre le domande giuste e comunicare le soluzioni con chiarezza.",
        "profile.paragraph2": "Nel 2026 ho conseguito il titolo di Tecnico Superiore in Sviluppo di Applicazioni Multipiattaforma e ho partecipato a Conductor, una piattaforma analitica cloud-native e multi-tenant per Mercanza. Oggi mi concentro sul backend con Java, Spring Boot, Python e FastAPI, continuando la mia specializzazione con un Master in AI Engineering presso Prometeo · ThePowerMBA.",
        "profile.evidenceAria": "Punti di forza professionali",
        "profile.evidence.languagesTitle": "Lingue",
        "profile.evidence.languages": "Spagnolo · Inglese · Italiano",
        "profile.evidence.dam": "Titolo ufficiale conseguito",
        "profile.evidence.tfg": "Progetto finale del percorso",
        "profile.evidence.cloud": "Esperienza su una piattaforma reale",
        "projects.sectionTitle": "Portfolio e progetti GitHub",
        "projects.badges.professional": "Esperienza professionale",
        "projects.badges.featured": "Progetto in evidenza",
        "projects.badges.personal": "Progetto personale",
        "projects.badges.inDevelopment": "In sviluppo",
        "projects.badges.repository": "Repository completo",
        "projects.conductor.imageAlt": "Identità visiva della piattaforma Conductor",
        "projects.conductor.title": "Conductor · Piattaforma analitica",
        "projects.conductor.date": "Marzo – Giugno 2026",
        "projects.conductor.description": "Piattaforma aziendale cloud-native e multi-tenant. Il mio lavoro si è concentrato su API e BFF, autenticazione e autorizzazione con JWT/RS256, controllo degli accessi basato su ruoli e permessi, Kafka, Docker, PostgreSQL, MongoDB, test e validazione delle migrazioni.",
        "projects.conductor.techAria": "Tecnologie utilizzate in Conductor",
        "projects.conductor.rbacTag": "RBAC · ruoli e permessi",
        "projects.tfg.imageAlt": "Schermata di accesso del social network sviluppato come progetto finale",
        "projects.tfg.title": "Backend Social Network · Java/Spring Boot",
        "projects.tfg.date": "Marzo 2026",
        "projects.tfg.description": "Progetto finale del percorso di Sviluppo di Applicazioni Multipiattaforma, valutato 10/10. API REST per un social network sviluppata con Spring Boot, Spring Security, autenticazione JWT, utenti, follower, pubblicazioni, immagini, persistenza e controllo dei permessi.",
        "projects.tfg.techAria": "Tecnologie utilizzate nel progetto finale",
        "projects.rally.imageAlt": "Dashboard del progetto Rally Performance Analyzer",
        "projects.rally.title": "Rally Performance Analyzer",
        "projects.rally.date": "Giugno 2026",
        "projects.rally.description": "Applicazione per analizzare dati reali del World Rally Championship. Integra web scraping responsabile, elaborazione dei dati, un’API REST con FastAPI e visualizzazioni orientate alle prestazioni sportive.",
        "projects.rally.techAria": "Tecnologie utilizzate in Rally Performance",
        "projects.tags.scraping": "Web scraping",
        "projects.tags.data": "Dati",
        "projects.portfolio.imageAlt": "Schermata del portfolio professionale",
        "projects.portfolio.title": "Portfolio professionale",
        "projects.portfolio.date": "Novembre 2025",
        "projects.portfolio.description": "Portfolio statico sviluppato da zero per presentare progetti ed esperienza. Include design responsive, modalità scura, miglioramenti di accessibilità, SEO e deployment su Vercel.",
        "projects.portfolio.techAria": "Tecnologie del portfolio",
        "projects.chatbot.localModel": "Modello locale",
        "projects.chatbot.title": "Chatbot locale con IA",
        "projects.chatbot.date": "Luglio 2026",
        "projects.chatbot.description": "Progetto in sviluppo per costruire una chat locale leggera tramite un’API realizzata con FastAPI e Pydantic. L’architettura è progettata per eseguire modelli con Ollama, gestire contesto e cronologia e supportare in futuro altri provider di IA.",
        "projects.chatbot.techAria": "Tecnologie previste per il chatbot",
        "projects.chatbot.localLlm": "LLM locale",
        "projects.chatbot.status": "Progettazione e sviluppo in corso",
        "projects.chatbot.statusTitle": "Progetto attualmente in sviluppo",
        "projects.more.areas": "Java · Python · Frontend · Database",
        "projects.more.title": "Altri progetti ed evoluzione tecnica",
        "projects.more.description": "Consulta altri esercizi e progetti di apprendimento: applicazioni Java, logica backend, interfacce web, database ed esperimenti tecnici che mostrano la mia evoluzione.",
        "projects.more.techAria": "Aree degli altri progetti",
        "projects.tags.web": "Web",
        "projects.tags.learning": "Apprendimento",
        "career.experienceTitle": "Esperienza lavorativa",
        "career.mercanza.role": "Software Engineer Intern",
        "career.mercanza.date": "Marzo 2026 – Giugno 2026",
        "career.mercanza.description": "Partecipazione allo sviluppo e alla validazione di una piattaforma analitica aziendale cloud-native, lavorando su servizi backend, sicurezza, dati e integrazione.",
        "career.mercanza.highlight1": "API, BFF, autenticazione, autorizzazione, ruoli e permessi.",
        "career.mercanza.highlight2": "Architettura multi-tenant, PostgreSQL, MongoDB e migrazioni.",
        "career.mercanza.highlight3": "Kafka, Docker, test unitari, di integrazione e di regressione.",
        "career.marquez.role": "Impiegato amministrativo",
        "career.marquez.date": "Ottobre 2022 – Febbraio 2026",
        "career.marquez.description": "Gestione amministrativa, assistenza clienti, organizzazione documentale, monitoraggio delle operazioni e risoluzione delle problematiche in un ambiente a diretto contatto con il pubblico.",
        "career.vipsual.role": "Reparto marketing",
        "career.vipsual.date": "Febbraio 2021 – Luglio 2021",
        "career.vipsual.description": "Supporto nel marketing digitale, nella comunicazione, nella gestione dei contenuti e nel coordinamento delle attività all’interno di un team orientato a progetti e clienti.",
        "education.title": "Formazione e qualifiche",
        "education.master.title": "Master in AI Engineering",
        "education.master.date": "Giugno 2026 – Settembre 2026 · In corso",
        "education.master.description": "Specializzazione pratica in intelligenza artificiale, integrazione di modelli, automazione e sviluppo di soluzioni di ingegneria dell’IA.",
        "education.dam.title": "Tecnico Superiore in Sviluppo di Applicazioni Multipiattaforma",
        "education.dam.date": "Completato nel 2026",
        "education.dam.description": "Formazione ufficiale in programmazione, database, servizi, interfacce, accesso ai dati e sviluppo multipiattaforma.",
        "education.aws.date": "Febbraio 2026",
        "education.aws.description": "Fondamenti di cloud computing, servizi AWS, sicurezza, architettura, costi e supporto.",
        "education.nicolas.title": "Formazione Java e Spring Boot",
        "education.nicolas.date": "Giugno 2025 – Ottobre 2025",
        "education.nicolas.description": "Sviluppo backend con Java, Spring Boot, API REST, sicurezza, persistenza e pratiche di sviluppo professionale.",
        "education.brais.title": "Formazione tecnica in programmazione e sviluppo backend",
        "education.brais.date": "Formazione tecnica complementare",
        "education.brais.description": "Programma pratico MoureDev con logica di programmazione, Java, SQL, Python, FastAPI, sviluppo di API e implementazione progressiva di soluzioni backend.",
        "recommendation.title": "Referenze e lavoro di squadra",
        "recommendation.text": "Le mie referenze professionali evidenziano iniziativa, autonomia, responsabilità, comunicazione e capacità di collaborazione. Puoi anche leggere l’articolo del mio tutor in Mercanza sull’uso combinato del giudizio umano e dell’intelligenza artificiale in un progetto reale.",
        "recommendation.view": "Vedi referenze",
        "recommendation.article": "Leggi l’articolo su IA e lavoro di squadra",
        "technologies.title": "Tecnologie",
        "technologies.intro": "Il mio stack principale è focalizzato sul backend. Le tecnologie sono raggruppate per funzione per distinguere la specializzazione principale dalle competenze complementari.",
        "technologies.stripAria": "Tecnologie principali in evidenza",
        "technologies.logoAlt.python": "Logo di Python",
        "technologies.logoAlt.postgresql": "Logo di PostgreSQL",
        "technologies.logoAlt.mongodb": "Logo di MongoDB",
        "technologies.logoAlt.docker": "Logo di Docker",
        "technologies.groups.main": "Stack principale",
        "technologies.groups.backend": "Backend, architettura e sicurezza",
        "technologies.groups.data": "Dati e infrastruttura",
        "technologies.groups.complementary": "Competenze complementari e IA applicata",
        "technologies.tags.microservices": "Microservizi",
        "technologies.tags.testing": "Testing",
        "technologies.tags.localModels": "Modelli locali",
        "technologies.tags.aiApis": "API di IA",
        "technologies.roles.backendLanguage": "Linguaggio backend",
        "technologies.roles.backendFramework": "Framework backend",
        "technologies.roles.apiFramework": "Framework per API",
        "technologies.roles.sqlDatabase": "Database SQL",
        "technologies.roles.nosqlDatabase": "Database NoSQL",
        "technologies.roles.messaging": "Messaggistica distribuita",
        "technologies.roles.containers": "Container",
        "technologies.profileImageAlt": "Fabio Cuffaro al lavoro al computer",
        "footer.email": "Email",
        "footer.cv": "Curriculum vitae",
        "top.title": "Torna su",
        "top.aria": "Torna all’inizio"
    }
};

const SUPPORTED_LANGUAGES = ['es', 'en', 'it'];
const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const THEME_STORAGE_KEY = 'theme';

/* 2. CONFIGURACIÓN Y ALMACENAMIENTO ===================================== */
function readStoredValue(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
}

function storeValue(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        // La web sigue funcionando aunque el navegador bloquee localStorage.
    }
}

function resolveInitialLanguage() {
    const savedLanguage = readStoredValue(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        return savedLanguage;
    }

    const browserLanguage = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : 'es';
}

let currentLanguage = resolveInitialLanguage();

function translate(key) {
    return translations[currentLanguage]?.[key]
        ?? translations.es[key]
        ?? key;
}

/* 3. REFERENCIAS DEL DOM ================================================= */
const yearSpan = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('i');
const topButton = document.getElementById('topBtn');
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const desktopNavLinks = document.querySelectorAll('.navbar__menu a');
const languageButtons = document.querySelectorAll('.language-switcher__button');
const cvPopover = document.getElementById('cv-language-popover');
const cvTriggers = document.querySelectorAll('[data-cv-trigger]');
const cvCloseButton = cvPopover?.querySelector('.cv-popover__close');
const cvLanguageOptions = cvPopover?.querySelectorAll('[data-cv-lang]') || [];
let activeCvTrigger = null;

/* 4. NAVEGACIÓN MÓVIL ===================================================
   El menú se genera desde la navegación de escritorio para mantener
   enlaces y traducciones sincronizados. */
const mobileMenu = document.createElement('div');
mobileMenu.id = 'mobile-menu';
mobileMenu.classList.add('navbar__mobile-menu');

desktopNavLinks.forEach((link) => {
    mobileMenu.appendChild(link.cloneNode(true));
});

if (navbar) {
    navbar.parentNode.insertBefore(mobileMenu, navbar.nextSibling);
}

function setMobileMenuState(open) {
    if (!hamburger) return;

    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', translate(open ? 'nav.menuClose' : 'nav.menuOpen'));

    const icon = hamburger.querySelector('i');
    const label = hamburger.querySelector('.navbar__hamburger-label');

    if (icon) {
        icon.className = open ? 'ri-close-line' : 'ri-menu-line';
    }

    if (label) {
        label.textContent = translate(open ? 'nav.menuCloseLabel' : 'nav.menuLabel');
    }
}

/* 5. TEMA CLARO / OSCURO ================================================ */
function updateThemeControl() {
    if (!themeToggle || !themeIcon) return;

    const darkModeEnabled = document.body.classList.contains('dark-mode');
    themeIcon.className = darkModeEnabled ? 'ri-sun-line' : 'ri-moon-line';

    const accessibleLabel = translate(darkModeEnabled ? 'theme.enableLight' : 'theme.enableDark');
    themeToggle.setAttribute('aria-label', accessibleLabel);
    themeToggle.setAttribute('title', accessibleLabel);
}

function initializeTheme() {
    if (readStoredValue(THEME_STORAGE_KEY) === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeControl();
}

/* 6. INTERNACIONALIZACIÓN ===============================================
   Traduce texto, metadatos y atributos de accesibilidad. */
function applyLanguage(language, persist = true) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = translate('meta.title');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translate(key);
    });

    const attributeBindings = [
        ['data-i18n-aria-label', 'aria-label'],
        ['data-i18n-title', 'title'],
        ['data-i18n-alt', 'alt'],
        ['data-i18n-content', 'content']
    ];

    attributeBindings.forEach(([dataAttribute, targetAttribute]) => {
        document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
            const key = element.getAttribute(dataAttribute);
            element.setAttribute(targetAttribute, translate(key));
        });
    });

    languageButtons.forEach((button) => {
        const active = button.dataset.lang === language;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });

    if (persist) {
        storeValue(LANGUAGE_STORAGE_KEY, language);
    }

    setMobileMenuState(mobileMenu.classList.contains('open'));
    updateThemeControl();
    updateCvRecommendedOption();

    if (cvPopover && !cvPopover.hidden && activeCvTrigger) {
        positionCvPopover(activeCvTrigger);
    }
}

/* 7. SELECTOR DE CURRÍCULUM =============================================
   Un único panel sirve a los accesos de navbar, hero y footer. */
function updateCvRecommendedOption() {
    cvLanguageOptions.forEach((option) => {
        const recommended = option.dataset.cvLang === currentLanguage;
        option.classList.toggle('is-recommended', recommended);
        option.querySelectorAll('[data-cv-recommended]').forEach((badge) => {
            badge.hidden = !recommended;
        });
    });
}

function positionCvPopover(trigger) {
    if (!cvPopover || !trigger || cvPopover.hidden) return;

    const mobileLayout = window.innerWidth <= 700;
    cvPopover.classList.toggle('cv-popover--mobile', mobileLayout);

    if (mobileLayout) {
        cvPopover.style.removeProperty('top');
        cvPopover.style.removeProperty('left');
        cvPopover.removeAttribute('data-placement');
        return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const popoverRect = cvPopover.getBoundingClientRect();
    const viewportPadding = 16;
    const gap = 12;

    let top = triggerRect.bottom + gap;
    let placement = 'bottom';

    if (top + popoverRect.height > window.innerHeight - viewportPadding) {
        top = triggerRect.top - popoverRect.height - gap;
        placement = 'top';
    }

    let left = triggerRect.left + (triggerRect.width / 2) - (popoverRect.width / 2);
    left = Math.max(viewportPadding, Math.min(left, window.innerWidth - popoverRect.width - viewportPadding));

    cvPopover.style.top = `${Math.max(viewportPadding, top)}px`;
    cvPopover.style.left = `${left}px`;
    cvPopover.dataset.placement = placement;
}

function setCvPopoverState(open, trigger = activeCvTrigger, restoreFocus = true) {
    if (!cvPopover) return;

    cvTriggers.forEach((item) => {
        item.setAttribute('aria-expanded', String(open && item === trigger));
    });

    if (!open) {
        cvPopover.classList.remove('is-open');
        cvPopover.hidden = true;
        cvPopover.style.removeProperty('top');
        cvPopover.style.removeProperty('left');
        cvPopover.removeAttribute('data-placement');

        if (restoreFocus && activeCvTrigger) {
            activeCvTrigger.focus();
        }
        activeCvTrigger = null;
        return;
    }

    activeCvTrigger = trigger;
    updateCvRecommendedOption();
    cvPopover.hidden = false;
    cvPopover.classList.add('is-open');
    positionCvPopover(trigger);

    const preferredOption = cvPopover.querySelector(`[data-cv-lang="${currentLanguage}"]`);
    window.requestAnimationFrame(() => preferredOption?.focus());
}

function toggleCvPopover(trigger) {
    const alreadyOpenForTrigger = !cvPopover?.hidden && activeCvTrigger === trigger;
    setCvPopoverState(!alreadyOpenForTrigger, trigger);
}

/* 8. BOTÓN VOLVER ARRIBA ================================================ */
function updateTopButtonVisibility() {
    if (!topButton) return;
    const pageOffset = document.body.scrollTop || document.documentElement.scrollTop;
    topButton.style.display = pageOffset > 300 ? 'flex' : 'none';
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* 9. EVENTOS ============================================================ */
languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
    });
});

cvTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => toggleCvPopover(trigger));
});

cvCloseButton?.addEventListener('click', () => setCvPopoverState(false));

cvLanguageOptions.forEach((option) => {
    option.addEventListener('click', () => {
        window.setTimeout(() => setCvPopoverState(false, activeCvTrigger, false), 80);
    });
});

themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const activeTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    storeValue(THEME_STORAGE_KEY, activeTheme);
    updateThemeControl();
});

hamburger?.addEventListener('click', () => {
    setMobileMenuState(!mobileMenu.classList.contains('open'));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenuState(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    if (cvPopover && !cvPopover.hidden) {
        setCvPopoverState(false);
        return;
    }

    if (mobileMenu.classList.contains('open')) {
        setMobileMenuState(false);
        hamburger?.focus();
    }
});

document.addEventListener('click', (event) => {
    if (cvPopover && !cvPopover.hidden) {
        const clickedTrigger = Array.from(cvTriggers).some((trigger) => trigger.contains(event.target));
        if (!cvPopover.contains(event.target) && !clickedTrigger) {
            setCvPopoverState(false, activeCvTrigger, false);
        }
    }

    if (!mobileMenu.classList.contains('open')) return;
    if (mobileMenu.contains(event.target) || hamburger?.contains(event.target)) return;
    setMobileMenuState(false);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
        setMobileMenuState(false);
    }

    if (cvPopover && !cvPopover.hidden && activeCvTrigger) {
        positionCvPopover(activeCvTrigger);
    }
});

window.addEventListener('scroll', () => {
    updateTopButtonVisibility();
    if (cvPopover && !cvPopover.hidden) {
        setCvPopoverState(false, activeCvTrigger, false);
    }
}, { passive: true });
topButton?.addEventListener('click', scrollToTop);



/* 10. ANIMACIONES DE ENTRADA ==============================================
   - Usa data-anim en elementos individuales.
   - Usa data-stagger en contenedores para animar sus hijos.
   - La propiedad translate se separa de transform para no bloquear hover.
   - Con movimiento reducido se conserva un fade breve y un desplazamiento
     mínimo, en lugar de ocultar por completo todas las transiciones.
   ========================================================================== */

function initializeMotion() {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('[data-stagger]').forEach((group) => {
        const animation = group.dataset.stagger || 'up';
        const step = Number.parseInt(group.dataset.step || '90', 10);

        Array.from(group.children).forEach((item, index) => {
            if (!item.dataset.anim) {
                item.dataset.anim = animation;
            }

            const staggerDelay = Math.min(index * step, 1200);
            item.style.setProperty('--motion-delay', `${staggerDelay}ms`);
        });
    });

    const animatedElements = Array.from(document.querySelectorAll('[data-anim]'));
    if (!animatedElements.length) return;

    animatedElements.forEach((element) => {
        const hasExplicitDelay = Object.prototype.hasOwnProperty.call(element.dataset, 'delay');
        const hasStaggerDelay = element.style.getPropertyValue('--motion-delay').trim() !== '';

        if (hasExplicitDelay) {
            const delay = Number.parseInt(element.dataset.delay || '0', 10);
            element.style.setProperty('--motion-delay', `${Math.max(delay, 0)}ms`);
        } else if (!hasStaggerDelay) {
            element.style.setProperty('--motion-delay', '0ms');
        }
    });

    const showElement = (element) => {
        element.classList.add('is-in');
    };

    if (!('IntersectionObserver' in window)) {
        animatedElements.forEach(showElement);
        return;
    }

    root.classList.add('motion-ready');
    root.classList.toggle('motion-reduced', reducedMotion);

    /* Fuerza el cálculo del estado inicial antes de activar transiciones. */
    void document.body.offsetHeight;

    const observer = new IntersectionObserver((entries, activeObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            showElement(entry.target);
            activeObserver.unobserve(entry.target);
        });
    }, {
        threshold: reducedMotion ? 0.04 : 0.12,
        rootMargin: '0px 0px -5% 0px'
    });

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            root.classList.add('motion-live');
            animatedElements.forEach((element) => observer.observe(element));
        });
    });

    /* El contenido no se revela mediante un temporizador global: cada bloque
       conserva su animación hasta entrar realmente en el viewport. */
}


/* 11. INICIALIZACIÓN ===================================================== */
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

initializeTheme();
applyLanguage(currentLanguage, false);
updateTopButtonVisibility();
initializeMotion();
