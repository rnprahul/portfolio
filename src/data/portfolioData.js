export const portfolioData = {
  personal: {
    name: "Rahul N P",
    title: "Software Developer | React Developer | Full-Stack Developer",
    subTitle: "BCA Graduate | Software Developer | Building practical web applications with React, Python & Cloud Databases",
    aboutImage: "/assets/rahul-about.jpg",
    bio: "I am a BCA graduate and software developer passionate about building practical, user-focused web applications. I enjoy turning ideas into functional software solutions using React, Python, SQL, MongoDB, and Firebase, continuously improving my engineering skills through hands-on project development.",
    focusList: ["Software Development", "React", "Python & SQL", "Firebase & MongoDB", "Full-Stack Web Apps"],
    statusBadge: "Open to Software Developer & Web Developer Opportunities",
    location: "Kerala, India (Available Remote / Relocation)",
    phone: "+91 6238254020",
    socialLinks: {
      github: "https://github.com/rnprahul",
      linkedin: "https://www.linkedin.com/in/rahul-n-p",
      email: "rnprahul20@gmail.com",
      twitter: "https://x.com/Rahul_N_P",
      instagram: "https://www.instagram.com/_rahul_n_p_?igsh=MXZodnVpZnQybmpi&igsi=MXZodnVpZnQybmpi",
      facebook: "https://www.facebook.com/rahul.paramba"
    }
  },

  stats: [
    { label: "Degree Completed", value: "BCA", suffix: "" },
    { label: "Primary Project", value: "NexaMind", suffix: "" },
    { label: "Core Expertise", value: "Software & Web Dev", suffix: "" },
    { label: "Internship", value: "MERN Stack", suffix: "" }
  ],

  journeySignals: [
    {
      id: "bca",
      title: "BCA Graduate",
      secondaryText: "Bachelor of Computer Applications",
      icon: "GraduationCap"
    },
    {
      id: "software-dev",
      title: "Software & Web Developer",
      secondaryText: "Building practical web applications",
      icon: "Code2"
    },
    {
      id: "react-dev",
      title: "React Developer",
      secondaryText: "React • Vite • JavaScript",
      icon: "Atom"
    },
    {
      id: "cloud-deployed",
      title: "Cloud Deployed",
      secondaryText: "Vercel • Cloudflare • Firebase",
      icon: "Cloud"
    },
    {
      id: "projects",
      title: "Multiple Projects",
      secondaryText: "Building and deploying real-world projects",
      icon: "Boxes"
    },
    {
      id: "opportunities",
      title: "Open to Opportunities",
      secondaryText: "Software Developer & Web Developer roles",
      icon: "Sparkles",
      statusDot: true
    }
  ],

  technologies: [
    // Primary / Core Highlights
    { name: "React", category: "frontend", tier: "primary" },
    { name: "JavaScript", category: "frontend", tier: "primary" },
    { name: "Firebase", category: "backend", tier: "primary" },
    { name: "MongoDB", category: "backend", tier: "primary" },
    { name: "Vite", category: "frontend", tier: "primary" },
    { name: "GitHub", category: "tools", tier: "primary" },
    { name: "HTML5", category: "frontend", tier: "primary" },
    { name: "CSS3", category: "frontend", tier: "primary" },

    // Secondary Tier
    { name: "TypeScript", category: "frontend", tier: "secondary" },
    { name: "Node.js", category: "backend", tier: "secondary" },
    { name: "Express.js", category: "backend", tier: "secondary" },
    { name: "Cloud Firestore", category: "backend", tier: "secondary" },
    { name: "Firebase Authentication", category: "backend", tier: "secondary" },
    { name: "MongoDB Atlas", category: "backend", tier: "secondary" },
    { name: "Git", category: "tools", tier: "secondary" },
    { name: "Vercel", category: "tools", tier: "secondary" },
    { name: "Render", category: "tools", tier: "secondary" },
    { name: "Cloudflare", category: "backend", tier: "secondary" },
    { name: "REST APIs", category: "backend", tier: "secondary" },

    // Practical & Supporting Skills
    { name: "Bootstrap", category: "frontend", tier: "tertiary" },
    { name: "React Router", category: "frontend", tier: "tertiary" },
    { name: "Responsive Web Design", category: "frontend", tier: "tertiary" },
    { name: "UI/UX", category: "frontend", tier: "tertiary" },
    { name: "Component-Based Architecture", category: "frontend", tier: "tertiary" },
    { name: "REST API Integration", category: "frontend", tier: "tertiary" },
    { name: "Firebase Storage", category: "backend", tier: "tertiary" },
    { name: "Firebase Hosting", category: "backend", tier: "tertiary" },
    { name: "MongoDB Compass", category: "backend", tier: "tertiary" },
    { name: "CORS", category: "backend", tier: "tertiary" },
    { name: "Cloudflare Pages", category: "backend", tier: "tertiary" },
    { name: "VS Code", category: "tools", tier: "tertiary" },
    { name: "Postman", category: "tools", tier: "tertiary" },
    { name: "npm", category: "tools", tier: "tertiary" }
  ],

  projects: [
    {
      id: "omniverse-marvel-dc",
      name: "OMNIVERSE",
      tagline: "Two Universes. One Experience. Infinite Stories.",
      badge: "INTERACTIVE",
      category: "Marvel × DC Interactive Universe",
      description: "OMNIVERSE is a cinematic interactive Marvel × DC universe experience featuring dynamic universe switching, character dossiers, cross-universe battle simulations, relationship networks, power comparisons, multiverse exploration, iconic locations, timelines, and immersive visual effects.",
      image: "/assets/omniverse-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "HTML5 Canvas",
        "Web Audio API",
        "CSS",
        "Lucide React",
        "Vercel"
      ],
      highlights: [
        "Cinematic Marvel ↔ DC universe switching with immersive visual transitions",
        "Interactive character vault, dossiers, relationship web & multiverse exploration",
        "Deterministic cross-universe Battle Arena with animated winner simulations"
      ],
      github: "https://github.com/rnprahul/Omniverse-Marvel-DC",
      liveDemo: "https://omniverse-marvel-dc.vercel.app"
    },
    {
      id: "nexa-mind",
      name: "NexaMind",
      tagline: "Enterprise AI Knowledge & Governance Platform",
      badge: "ENTERPRISE AI",
      category: "AI Knowledge Platform",
      description: "NexaMind is a production-deployed enterprise AI platform designed for organizational knowledge management, AI-assisted insights, document intelligence, role-based administration, system health monitoring, audit activity, and enterprise governance.",
      image: "/assets/nexamind-preview.png",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express",
        "Supabase",
        "Gemini API",
        "Vercel",
        "Render"
      ],
      highlights: [
        "Gemini AI-powered enterprise intelligence & interactive knowledge assistant",
        "Role-based access control, document intelligence & audit activity logging",
        "System health monitoring telemetry & real-time analytics"
      ],
      github: "https://github.com/rnprahul/NexaMind",
      liveDemo: "https://nexa-mind-one.vercel.app"
    },
    {
      id: "taskflow",
      name: "TaskFlow",
      tagline: "Full-Stack Project Management Platform",
      badge: "FULL STACK",
      category: "Project & Task Management",
      description: "TaskFlow is a full-stack project management web application designed to help users organize projects, manage tasks, collaborate with team members, track progress, and stay updated through notifications and activity tracking.",
      image: "/assets/taskflow-preview.png",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST API",
        "JWT Auth",
        "Vercel",
        "Render"
      ],
      highlights: [
        "Complete task lifecycle, member delegation & milestone management",
        "Real-time activity logs, notification feeds & productivity overview analytics",
        "Persistent MongoDB Atlas backend with JWT authentication"
      ],
      github: "https://github.com/rnprahul/CodeAlpha_ProjectManagementTool",
      liveDemo: "https://taskflow-kohl-tau.vercel.app"
    },
    {
      id: "chatnest",
      name: "ChatNest",
      tagline: "Real-Time Chat Application",
      badge: "REAL-TIME COMMUNICATION",
      category: "Real-Time Communication Platform",
      description: "ChatNest is a modern real-time communication platform built with React, TypeScript, Firebase, and Vite. It provides instant chat rooms, real-time message synchronization, anonymous user access, online presence tracking, room discovery, shareable room links, and a polished responsive interface without requiring traditional account registration.",
      image: "/assets/chatnest-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Firebase",
        "Firestore",
        "Firebase Authentication",
        "Vercel"
      ],
      highlights: [
        "Real-time messaging & multi-user sync powered by Firebase Firestore",
        "Anonymous authentication, online presence tracking & live typing indicators",
        "Instant chat room creation, public discovery & shareable invite links"
      ],
      github: "https://github.com/rnprahul/ChatNest",
      liveDemo: "https://chat-nest-plum.vercel.app/"
    },
    {
      id: "kanban-task-board",
      name: "Kanban Task Board",
      tagline: "Plan. Move. Complete.",
      badge: "PRODUCTIVITY",
      category: "PRODUCTIVITY / TASK MANAGEMENT",
      description: "A modern responsive Kanban task management application built with React and TypeScript. Users can create, edit, delete, search, filter, and organize tasks while moving them between To Do, In Progress, and Done using smooth drag-and-drop interactions.",
      image: "/assets/kanban-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "dnd-kit",
        "LocalStorage"
      ],
      highlights: [
        "Drag-and-drop task management between To Do, In Progress, and Done with column reordering",
        "Full task lifecycle with search, priority filtering, tags, due dates, and editing controls",
        "Automatic LocalStorage persistence, dark & light themes, and touch-friendly responsive design"
      ],
      github: "https://github.com/rnprahul/KanbanTaskBoard",
      liveDemo: "https://kanban-task-board-nu.vercel.app/"
    },
    {
      id: "codecanvas",
      name: "CodeCanvas",
      tagline: "Browser-Based HTML, CSS & JavaScript Editor",
      badge: "DEVELOPER TOOL",
      category: "Developer Tool / Browser IDE",
      description: "CodeCanvas is a browser-based front-end development playground that allows users to write HTML, CSS, and JavaScript with dedicated CodeMirror editors, live preview, responsive preview modes, integrated developer console, local project persistence, templates, and standalone HTML export.",
      image: "/assets/codecanvas-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "CodeMirror 6",
        "Lucide React",
        "LocalStorage",
        "Iframe",
        "Vercel"
      ],
      highlights: [
        "Professional HTML, CSS & JavaScript editors powered by CodeMirror 6",
        "Isolated live preview with responsive Desktop / Tablet / Mobile modes",
        "Integrated developer console, LocalStorage persistence and HTML export"
      ],
      github: "https://github.com/rnprahul/CodeCanvas",
      liveDemo: "https://code-canvas-plum.vercel.app/"
    },
    {
      id: "gitscope",
      name: "GitScope",
      tagline: "GitHub Profile Analyzer",
      badge: "DEVELOPER ANALYTICS",
      category: "Developer Analytics / GitHub Profile Analyzer",
      description: "GitScope is a modern browser-based GitHub profile analytics dashboard that transforms a public GitHub username into detailed developer insights, including repository statistics, programming-language distribution, repository health, top repositories, and recent activity.",
      image: "/assets/gitscope-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Recharts",
        "GitHub API",
        "Vercel"
      ],
      highlights: [
        "Real-time GitHub profile analysis & repository health metrics",
        "Interactive programming-language distribution & star/fork statistics",
        "Repository search, filtering, sorting & search history with LocalStorage"
      ],
      github: "https://github.com/rnprahul/GitScope",
      liveDemo: "https://git-scope-six.vercel.app/"
    },
    {
      id: "quickkart",
      name: "QuickKart",
      tagline: "Full-Stack E-Commerce Store",
      badge: "E-COMMERCE",
      category: "Full-Stack Shopping Platform",
      description: "QuickKart is a full-stack e-commerce web application featuring a modern shopping interface, product catalog browsing, multi-criteria filtering, user authentication, interactive cart management, order workflows, and MongoDB-backed product data.",
      image: "/assets/quickkart-preview.png",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST API",
        "JWT Auth",
        "Vercel",
        "Render"
      ],
      highlights: [
        "Dynamic product browsing with live category, rating & price range filtering",
        "Persistent cart system, checkout workflow & user profile management",
        "Express REST backend protected by JWT auth, Helmet & CORS"
      ],
      github: "https://github.com/rnprahul/CodeAlpha_EcommerceStore",
      liveDemo: "https://quickkart-six.vercel.app"
    },
    {
      id: "kitchen-connect",
      name: "KitchenConnect",
      tagline: "Role-Based Household Kitchen Inventory & Shopping Management",
      badge: "FIREBASE APP",
      category: "Household Management Web App",
      description: "KitchenConnect is a practical multi-role household web application designed to connect kitchen and supermarket workflows through dedicated, role-specific dashboards (Admin, Mother, Father) with real-time Firestore synchronization and shopping request tracking.",
      image: "/assets/kitchenconnect-preview.png",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Firebase Auth",
        "Cloud Firestore",
        "Bootstrap",
        "CSS",
        "Firebase Hosting"
      ],
      highlights: [
        "Role-tailored dashboards for household members with distinct permissions",
        "Instant real-time sync for pantry inventory, shopping lists & purchase history",
        "Deployed on Firebase Hosting with Firebase Cloud Firestore backend"
      ],
      github: "https://github.com/rnprahul/KitchenConnect",
      liveDemo: "https://kitchenconnect-eddfd.web.app"
    },
    {
      id: "westeros-interactive-chronicles",
      name: "Westeros Interactive Chronicles",
      tagline: "Immersive Interactive Archive & Living Citadel Map of Westeros",
      badge: "INTERACTIVE",
      category: "Interactive Map & Lore Engine",
      description: "An immersive interactive archive of Westeros featuring cinematic UI, interactive living Citadel cartography maps, Great Houses lineage, dragon vaults, and historical exploration.",
      image: "/assets/westeros-preview.jpg",
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide Icons",
        "Cloudflare Pages"
      ],
      highlights: [
        "Interactive Citadel living cartography map & entity intelligence graph",
        "Cinematic Iron Throne succession lineage & 20+ dragon vault statistics"
      ],
      github: "https://github.com/rnprahul/westeros-interactive-chronicles",
      liveDemo: "https://westeros-interactive-chronicles.pages.dev"
    },
    {
      id: "unitwise-converter",
      name: "UnitWise Converter",
      tagline: "Fast, accurate and responsive multi-category unit conversion",
      badge: "WEB APP",
      category: "Unit Conversion Web Application",
      description: "Fast, accurate and responsive unit conversion across 13 categories and 85+ standard units.",
      image: "/assets/unitwise-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "LocalStorage"
      ],
      highlights: [
        "13 Conversion Categories & 85+ Standard Units",
        "Instant Client-Side Conversion & Formula Explanations",
        "Conversion History & Favorites Persistence"
      ],
      github: "https://github.com/rnprahul/UnitWise-Converter",
      liveDemo: "https://unit-wise-converter.vercel.app"
    },
    {
      id: "quizforge",
      name: "QuizForge",
      tagline: "Interactive Online Quiz Platform with Timed Challenges & Leaderboards",
      badge: "WEB APP",
      category: "Online Quiz Platform",
      description: "An interactive online quiz platform with timed quizzes, multiple categories, difficulty levels, scoring, answer review, quiz history, favorites, and a local leaderboard.",
      image: "/assets/quizforge-preview.png",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "CSS",
        "LocalStorage"
      ],
      highlights: [
        "Multiple quiz categories, difficulty modes & per-question countdown timers",
        "Real-time dynamic scoring, accuracy tracking & detailed answer reviews",
        "Local leaderboard, quiz history & favorite questions with LocalStorage persistence"
      ],
      github: "https://github.com/rnprahul/QuizForge",
      liveDemo: "https://quiz-forge-tau-drab.vercel.app/"
    },
    {
      id: "resumeforge",
      name: "ResumeForge",
      tagline: "Professional Resume Builder with Live A4 Preview & PDF Generation",
      badge: "PRODUCTIVITY",
      category: "Web Application / Productivity Tool",
      description: "ResumeForge is a professional resume builder web application that enables users to enter comprehensive career details, customize templates and styling, preview resumes in real time, and generate polished, ATS-friendly A4 PDFs with complete client-side data privacy.",
      image: "/assets/resumeforge-preview.png",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Client-Side PDF",
        "LocalStorage"
      ],
      highlights: [
        "Real-time A4 resume preview with multi-template switching & accent color customization",
        "Comprehensive career section editor, profile completeness meter & sample loader",
        "Client-side PDF generation, print support & ATS-friendly layouts with total browser privacy"
      ],
      github: "https://github.com/rnprahul/ResumeForge",
      liveDemo: "https://resume-forge-seven-tawny.vercel.app"
    },
    {
      id: "billmate",
      name: "BillMate",
      tagline: "A professional digital receipt generator for small businesses with automated tax & GST calculations.",
      badge: "PRODUCTIVITY",
      category: "Business / Productivity",
      description: "BillMate is a professional, privacy-focused digital receipt generator built for small businesses. It allows users to create, customize, manage, print, and download professional receipts while automatically handling tax and GST calculations.",
      image: "/assets/billmate-preview.png",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Client-Side State",
        "PDF / Print",
        "LocalStorage"
      ],
      highlights: [
        "Digital receipt creation, custom templates & live formatted receipt preview",
        "Automated GST & tax calculations with customer management & business settings",
        "Print-ready layout support & client-side PDF generation with local privacy"
      ],
      github: "https://github.com/rnprahul/BillMate",
      liveDemo: "https://billmate-beta.vercel.app/"
    },
    {
      id: "quantumcalc",
      name: "QuantumCalc",
      tagline: "Next-Gen Mechanical Calculator",
      badge: "INTERACTIVE",
      category: "Interactive Web Application / Calculator",
      description: "QuantumCalc is an interactive next-generation calculator featuring a tactile mechanical-keyboard interface, scientific mathematics, real-time unit conversion, interactive function graphing, calculation history, keyboard controls, synthesized audio feedback, and animated particle effects.",
      image: "/assets/quantumcalc-preview.png",
      techStack: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
        "Canvas API",
        "Web Audio API"
      ],
      highlights: [
        "Tactile 3D mechanical calculator interface with scientific math, roots & DEG/RAD modes",
        "Real-time multi-category unit converter & interactive 2D mathematical function grapher",
        "Synthesized Web Audio switch feedback, keyboard controls & ambient particle canvas"
      ],
      github: "https://github.com/rnprahul/Calculator",
      liveDemo: "https://calculator-eight-tau-89.vercel.app/"
    }
  ]
};

export const playgroundSection = {
  subtitle: "INTERACTIVE PLAYGROUND",
  heading: "Playground Beyond the Usual",
  lead: "Not everything I build is a dashboard. This is where I experiment with games, interactive systems, real-time rendering, and ideas that are simply fun to play."
};

export const playgroundProjects = [
  {
    id: "neon-drift",
    name: "Neon Drift",
    titleWord1: "NEON",
    titleWord2: "DRIFT",
    projectNumber: "INTERACTIVE / 01",
    badge: "PLAYABLE EXPERIENCE",
    category: "FUTURISTIC SURVIVAL ARCADE",
    tagline: "Drift. Survive. Dominate.",
    description: "A futuristic browser-based neon survival game where you pilot a spacecraft, dodge increasingly dangerous hazards, collect energy, build combos, and use tactical power-ups to chase your high score.",
    controlHint: "Keyboard, mouse, or touch controls.",
    image: "/assets/neon-drift-preview.png",
    alt: "Neon Drift futuristic neon survival game preview",
    urlAddress: "neon-drift-drab.vercel.app",
    fpsBadge: "60 FPS CANVAS",
    liveDemo: "https://neon-drift-drab.vercel.app/",
    github: "https://github.com/rnprahul/NeonDrift",
    playLabel: "PLAY NEON DRIFT",
    themeClass: "theme-neondrift",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "HTML5 Canvas",
      "Web Audio API",
      "LocalStorage"
    ],
    featureStrip: [
      {
        label: "CANVAS ENGINE",
        desc: "Real-time 60fps rendering",
        icon: "Cpu"
      },
      {
        label: "REAL-TIME SYSTEMS",
        desc: "Drift physics & combo scoring",
        icon: "Zap"
      },
      {
        label: "PROCEDURAL AUDIO",
        desc: "Synthesized Web Audio FX",
        icon: "Radio"
      },
      {
        label: "DYNAMIC DIFFICULTY",
        desc: "Tracking drones & elite hazards",
        icon: "Flame"
      }
    ],
    coreFeatures: [
      "Real-time Canvas game engine",
      "Smooth spacecraft movement",
      "Drift / Dash mechanic",
      "Dynamic difficulty progression",
      "Energy + combo scoring",
      "Near-miss rewards",
      "Tracking drones and elite hazards",
      "Overdrive / Shield / EMP power-ups",
      "Procedural Web Audio",
      "Particle effects",
      "Local high-score persistence",
      "Mouse + touch + keyboard controls"
    ]
  },
  {
    id: "timeloop",
    name: "TimeLoop",
    titleWord1: "TIME",
    titleWord2: "LOOP",
    projectNumber: "INTERACTIVE / 02",
    badge: "PLAYABLE EXPERIENCE",
    category: "TIME-LOOP PUZZLE GAME",
    tagline: "You have 30 seconds. Make them count.",
    description: "A futuristic time-loop puzzle game where every run becomes part of the next. Record your actions, work alongside your past selves, and solve increasingly complex puzzles before time runs out.",
    controlHint: "Keyboard & mouse temporal controls.",
    image: "/assets/timeloop-preview.png",
    alt: "TimeLoop futuristic time-loop puzzle game preview",
    urlAddress: "time-loop-puce.vercel.app",
    fpsBadge: "60 HZ ENGINE",
    liveDemo: "https://time-loop-puce.vercel.app/",
    github: "https://github.com/rnprahul/TimeLoop",
    playLabel: "PLAY TIMELOOP",
    themeClass: "theme-timeloop",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "HTML5 Canvas",
      "Web Audio API",
      "LocalStorage"
    ],
    featureStrip: [
      {
        label: "DETERMINISTIC SIMULATION",
        desc: "60Hz fixed-timestep gameplay",
        icon: "Cpu"
      },
      {
        label: "GHOST TIMELINES",
        desc: "Past runs become playable ghosts",
        icon: "History"
      },
      {
        label: "TIME-LOOP PUZZLES",
        desc: "Actions from previous loops become part of the solution",
        icon: "RotateCcw"
      },
      {
        label: "MULTI-LEVEL CAMPAIGN",
        desc: "Three handcrafted puzzle levels",
        icon: "Layers"
      }
    ],
    coreFeatures: [
      "Fixed 60Hz deterministic loop simulation",
      "Ghost timeline playback engine",
      "Cooperative self-play mechanics",
      "Multi-stage pressure plate and gate puzzles",
      "Lethal laser hazards & spatial conduits",
      "Synchronized temporal audio & sound design",
      "High-precision canvas graphics & particle effects",
      "Responsive state management & level progression"
    ]
  }
];

export const playgroundData = {
  ...playgroundSection,
  projects: playgroundProjects,
  ...playgroundProjects[0]
};

portfolioData.playground = playgroundData;
portfolioData.playgroundProjects = playgroundProjects;


