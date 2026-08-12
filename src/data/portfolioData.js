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
    { label: "Primary Project", value: "KitchenConnect", suffix: "" },
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
    id: "kitchen-connect",
    name: "KitchenConnect",
    tagline: "Role-Based Household Kitchen Inventory & Shopping Management Web Application",
    description: "KitchenConnect is a practical multi-role household web application designed to connect kitchen and supermarket workflows through dedicated, role-specific dashboards. It streamlines how households manage stock levels and fulfill grocery purchases.",
    techStack: ["React", "Vite", "JavaScript", "Firebase Authentication", "Cloud Firestore", "Bootstrap", "CSS", "Firebase Hosting"],
    workflow: ["Pending", "Shopping in Progress", "Purchase Completed"],
    roles: [
      {
        role: "Admin Dashboard",
        icon: "ShieldCheck",
        responsibilities: [
          "Manage kitchen items and inventory categories",
          "Create and review shopping requests",
          "Monitor overall application activity and stock logs"
        ]
      },
      {
        role: "Mother Dashboard",
        icon: "HeartHandshake",
        responsibilities: [
          "View current kitchen items & stock levels",
          "Select out-of-stock items and create shopping requests",
          "Track request status and view purchase history",
          "Receive real-time notifications on purchase completion"
        ]
      },
      {
        role: "Father Dashboard",
        icon: "ShoppingBag",
        responsibilities: [
          "View incoming household shopping requests",
          "Manage active grocery lists and update purchase status",
          "Mark grocery purchases as completed"
        ]
      }
    ],
    features: [
      "Role-based authentication & protected routes",
      "Dedicated Admin, Mother, and Father dashboards",
      "Real-time Firestore database synchronization",
      "Shopping request tracking (Pending → In Progress → Completed)",
      "Purchase history and notification tracking",
      "Hosted live on Firebase Hosting"
    ],
    github: "https://github.com/rnprahul/KitchenConnect",
    liveDemo: "https://kitchenconnect-eddfd.web.app"
  },

  secondaryProjects: [
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
