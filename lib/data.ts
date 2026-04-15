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
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "Figma", "GitHub Actions"]
  },
  {
    title: "Platforms",
    items: ["Vercel", "AWS Basics", "Linux", "Firebase", "Supabase", "Arduino"]
  }
];

export const projects = [
  {
    title: "PulseGrid",
    description:
      "Built an IoT dashboard that aggregates live room temperature, humidity, and motion readings from ESP32 sensors into a responsive monitoring interface. Designed the data flow to surface anomalies quickly and reduce noisy updates with threshold-based alerts.",
    stack: ["Next.js", "TypeScript", "MQTT", "Chart.js", "Supabase"],
    githubUrl: "https://github.com/yourusername/pulsegrid",
    liveUrl: "https://pulsegrid-demo.vercel.app",
    image: "/images/project-pulsegrid.svg",
    alt: "PulseGrid IoT sensor dashboard interface"
  },
  {
    title: "Patchnote CLI",
    description:
      "Created a developer CLI that scans conventional commits, groups release notes by change type, and outputs changelogs suitable for GitHub releases. Added configuration presets so small teams could adopt it without maintaining custom scripts.",
    stack: ["Node.js", "TypeScript", "Commander", "Vitest", "npm"],
    githubUrl: "https://github.com/yourusername/patchnote-cli",
    liveUrl: "https://www.npmjs.com/package/patchnote-cli",
    image: "/images/project-patchnote.svg",
    alt: "Patchnote CLI terminal and release summary preview"
  },
  {
    title: "LabLane",
    description:
      "Shipped a full-stack CRUD app for managing student project submissions, review status, and lab resources in one place. Focused on clean relational data modeling, optimistic UI updates, and role-based access for student and admin views.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Vercel"],
    githubUrl: "https://github.com/yourusername/lablane",
    liveUrl: "https://lablane-demo.vercel.app",
    image: "/images/project-lablane.svg",
    alt: "LabLane full-stack student project management app"
  }
];

export const contactLinks = {
  email: "periabras.joshua.garo@gmail.com",
  github: "https://github.com/juswa2415",
  linkedin: "https://www.linkedin.com/in/joshua-periabras-0721082a7"
};
