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

  skills: [
    {
      category: "Frontend",
      description: "Building responsive & user-focused web interfaces",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Bootstrap"]
    },
    {
      category: "Backend & Databases",
      description: "Authentication, database management & cloud hosting",
      items: ["Firebase", "Cloud Firestore", "Firebase Auth", "Firebase Hosting", "MongoDB", "SQL"]
    },
    {
      category: "Programming Languages",
      description: "Core software engineering & application logic",
      items: ["JavaScript", "Python", "SQL"]
    },
    {
      category: "Development Tools",
      description: "Version control & environment workflow",
      items: ["Git", "GitHub", "VS Code", "Postman"]
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
