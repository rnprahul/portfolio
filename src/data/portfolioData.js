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
    }
  ]
};
