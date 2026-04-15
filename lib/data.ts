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
    image: "/images/project-pulsegrid.svg",
    alt: "FinTrack personal finance dashboard interface"
  },
  {
    title: "BrewPOS",
    description:
      "Designed a coffee shop POS system that goes beyond order-taking by connecting checkout flows with inventory tracking and back-office operations. It is positioned as an operations-focused tool for managing stock visibility, sales activity, and day-to-day cafe workflows from a single system.",
    stack: ["POS", "Inventory", "Operations"],
    githubUrl: "",
    liveUrl: "",
    image: "/images/project-lablane.svg",
    alt: "BrewPOS coffee shop point-of-sale and inventory management interface"
  }
];

export const contactLinks = {
  email: "periabras.joshua.garo@gmail.com",
  github: "https://github.com/juswa2415",
  linkedin: "https://www.linkedin.com/in/joshua-periabras-0721082a7"
};
