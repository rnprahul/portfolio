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

  latestWork: [
    {
      id: "westeros-interactive-chronicles",
      name: "Westeros Interactive Chronicles",
      tagline: "Immersive Interactive Archive & Living Citadel Map of Westeros",
      badge: "LATEST WORK",
      description: "An immersive interactive archive of Westeros featuring cinematic UI, interactive maps, Great Houses, dragons, and historical exploration.",
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
    }
  ],

  featuredProject: {
    id: "nexa-mind",
    name: "NexaMind",
    tagline: "Enterprise AI Knowledge & Governance Platform",
    description: "NexaMind is a production-deployed enterprise AI platform designed for organizational knowledge management, AI-assisted insights, document intelligence, role-based administration, system health monitoring, audit activity, and enterprise governance.",
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
    capabilities: [
      {
        title: "AI Intelligence",
        icon: "Brain",
        points: [
          "AI-powered enterprise intelligence and insights",
          "Gemini API integration"
        ]
      },
      {
        title: "Knowledge Assistant",
        icon: "Sparkles",
        points: [
          "AI-assisted interaction with organizational knowledge",
          "Knowledge-focused workflows"
        ]
      },
      {
        title: "Document Management",
        icon: "FileText",
        points: [
          "Manage and analyze enterprise documents",
          "Document intelligence and knowledge processing"
        ]
      },
      {
        title: "User & Role Management",
        icon: "Users",
        points: [
          "Role-based access and administration",
          "Enterprise user directory and governance"
        ]
      },
      {
        title: "System Health",
        icon: "Activity",
        points: [
          "Monitor application/system health",
          "Health and operational status monitoring"
        ]
      },
      {
        title: "Audit Activity",
        icon: "ClipboardList",
        points: [
          "Track important platform activity",
          "Audit and activity visibility"
        ]
      }
    ],
    github: "https://github.com/rnprahul/NexaMind",
    liveDemo: "https://nexa-mind-one.vercel.app"
  },

  secondaryProjects: [
    {
      id: "taskflow",
      name: "TaskFlow",
      tagline: "Full-Stack Project Management Platform",
      description: "TaskFlow is a full-stack project management web application designed to help users organize projects, manage tasks, collaborate with team members, track progress, and stay updated through notifications and activity tracking. It includes authentication, project and task management, team member workflows, dashboard analytics, and persistent MongoDB-backed data. The frontend is deployed on Vercel and the Express backend is deployed on Render.",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST API",
        "JWT Authentication",
        "CORS",
        "Vercel",
        "Render"
      ],
      github: "https://github.com/rnprahul/CodeAlpha_ProjectManagementTool",
      liveDemo: "https://taskflow-kohl-tau.vercel.app"
    },
    {
      id: "quickkart",
      name: "QuickKart",
      tagline: "Full-Stack E-Commerce Store",
      description: "QuickKart is a full-stack e-commerce web application with a modern shopping interface, product browsing, category filtering, authentication, cart management, order workflows, and MongoDB-backed product data. The frontend is deployed on Vercel and the Express backend is deployed on Render.",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "REST API",
        "JWT Authentication",
        "CORS",
        "Helmet",
        "Vercel",
        "Render"
      ],
      github: "https://github.com/rnprahul/CodeAlpha_EcommerceStore",
      liveDemo: "https://quickkart-six.vercel.app"
    },
    {
      id: "kitchen-connect",
      name: "KitchenConnect",
      tagline: "Role-Based Household Kitchen Inventory & Shopping Management Web Application",
      description: "KitchenConnect is a practical multi-role household web application designed to connect kitchen and supermarket workflows through dedicated, role-specific dashboards (Admin, Mother, Father). It features real-time Firestore synchronization and shopping request tracking.",
      techStack: ["React", "Vite", "JavaScript", "Firebase Authentication", "Cloud Firestore", "Bootstrap", "CSS", "Firebase Hosting"],
      github: "https://github.com/rnprahul/KitchenConnect",
      liveDemo: "https://kitchenconnect-eddfd.web.app"
    },
    {
      id: "calculator",
      name: "Calculator",
      description: "A web-based calculator application developed to showcase clean user interface design, DOM event handling, and arithmetic operation logic.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/rnprahul/CodeAlpha_calculator",
      liveDemo: null
    }
  ]
};
