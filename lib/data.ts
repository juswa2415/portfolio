export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const heroRoles = [
  "Software Engineer",
  "Problem Solver",
  "Computer Engineering Student"
];

export const profileSnapshot = {
  projectCount: 4,
  internshipFocus: "SWE"
};

export const aboutParagraphs = [
  "I am a Computer Engineering student who enjoys turning vague ideas into products that feel dependable, fast, and easy to use. My strongest work sits at the intersection of software engineering and systems thinking: building interfaces, APIs, and tooling that stay clean under real constraints.",
  "I am targeting Summer 2026 internships and entry-level roles where I can contribute across the stack, learn from strong engineering teams, and keep sharpening my foundations in full-stack development, cloud deployment, and practical problem solving."
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Prisma", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "npm"]
  },
  {
    title: "Platforms",
    items: ["Vercel", "PostgreSQL", "Auth.js", "Prisma", "Windows", "Linux"]
  }
];

export const projects = [
  {
    title: "FinTrack",
    description:
      "Built a personal finance tracker for monitoring expenses, income, budgets, recurring transactions, and savings goals in one workflow. The app pairs authenticated user dashboards with analytics, category management, CSV import support, and PDF-ready reporting for clearer day-to-day financial visibility.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Recharts"],
    githubUrl: "https://github.com/juswa2415/fintrack",
    liveUrl: "",
    image: "/images/project-fintrack.png",
    alt: "FinTrack personal finance dashboard interface"
  },
  {
    title: "BrewPOS",
    description:
      "Built a cafe-focused POS platform that ties cashier workflows to inventory and operational tracking so owners can monitor orders, stock movement, and day-to-day service from one dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "POS", "Inventory"],
    githubUrl: "https://github.com/juswa2415/BrewPOS.git",
    liveUrl: "",
    image: "/images/project-brewpos.png",
    alt: "BrewPOS coffee shop point-of-sale and inventory management interface"
  },
  {
    title: "NHA Water Billing",
    description:
      "Developed a community water billing system to replace manual pen-and-paper workflows with digital billing records, payment tracking, and resident account management. The project includes a desktop-first workflow and a mobile simulation for field staff operations.",
    stack: ["React", "TypeScript", "Node.js", "Billing", "Field Ops"],
    githubUrl: "https://github.com/juswa2415/nha-water-billing.git",
    liveUrl: "",
    image: "/images/project-nha-water-billing.png",
    alt: "NHA Water Billing dashboard for community billing and payment tracking"
  },
  {
    title: "Credix",
    description:
      "Credix is a secure credential and account management web application that enables users to store, organize, and manage login information efficiently within a centralized system.",
    stack: ["Next.js", "TypeScript", "Encryption", "OAuth", "Secure-by-design"],
    githubUrl: "https://github.com/juswa2415/credix.git",
    liveUrl: "",
    image: "/images/project-credix.png",
    alt: "Credix local credential management interface for household accounts"
  }
];

export const contactLinks = {
  email: "periabras.joshua.garo@gmail.com",
  github: "https://github.com/juswa2415",
  linkedin: "https://www.linkedin.com/in/joshua-periabras-0721082a7"
};
