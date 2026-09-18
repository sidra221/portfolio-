/**
 * Single source of truth for every piece of content on the site.
 * Mirrors the CV (Sidra_Alsayed_CV.pdf) so the two never drift apart.
 */

export const site = {
  name: 'Sidra Alsayed',
  shortName: 'SA',
  eyebrow: "Hello, I'm",
  roles: ['Full-Stack Developer', 'Django & React', 'UI/UX Background'],
  bio: 'Full-Stack Developer specializing in scalable web applications with Django, React and relational databases. I work across REST APIs, authentication and role-based access, responsive dashboards, AI-powered features, background processing and Docker-based environments — and bring a UI/UX foundation to products that have to be maintainable as well as intuitive.',
  availability: 'Freelance & Full-time',
  cvPath: '/Sidra_Alsayed_CV.pdf',
  contact: {
    email: 'sidrasayed86@gmail.com',
    phone: '(+963) 947158561',
    phoneHref: 'tel:+963947158561',
    location: 'Damascus, Syria',
  },
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/sidra221', brand: 'github' as const },
    { id: 'email', label: 'Email', href: 'mailto:sidrasayed86@gmail.com', brand: 'email' as const },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sidra-alsayed-514702255',
      brand: 'linkedin' as const,
    },
    { id: 'behance', label: 'Behance', href: 'https://www.behance.net/sidra_alsayed', brand: 'behance' as const },
    { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/963947158561', brand: 'whatsapp' as const },
  ],
}

export type SocialItem = (typeof site.socials)[number]

export type Experience = {
  title: string
  company: string
  period: string
  location: string
  /** Shown as a small badge on the card, e.g. Freelance / UI/UX. */
  tag?: string
  description: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2026 — Present',
    location: 'Remote',
    tag: 'Freelance',
    description: [
      'Develop end-to-end web applications with Django, Django REST Framework, React, PostgreSQL and MySQL.',
      'Build REST APIs, authentication, role-based permissions, dashboards and CRUD workflows.',
      'Integrate AI services and third-party APIs, and containerize applications with Docker Compose.',
      'Translate client requirements into responsive, maintainable solutions across frontend and backend.',
    ],
  },
  {
    title: 'Online Design Program Instructor',
    company: 'Al-Sham Cultural Forum',
    period: 'Nov 2025 — Present',
    location: 'Remote · 30 students',
    tag: 'Teaching',
    description: [
      'Deliver a practical online design program to 30 students, covering usability, structure and problem-solving.',
      'Mentor participants through project work and structured design critique.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Pintours',
    period: 'May 2025 — Present',
    location: 'United States · Remote',
    tag: 'UI/UX',
    description: [
      'Lead web and mobile interface redesigns with a focus on usability, scalability and handoff-ready components.',
      'Collaborate with developers to turn UX decisions into implementable frontend components.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Amescom',
    period: 'Sep 2024 — Present',
    location: 'Damascus, Syria',
    tag: 'UI/UX',
    description: [
      'Conduct UX research and iterate on designs from user and performance feedback.',
      'Improve interaction flows and align designs with content-management systems and the existing technical architecture.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Newline',
    period: 'Mar 2024 — Aug 2024',
    location: 'Dubai, UAE · Remote',
    tag: 'UI/UX',
    description: [
      'Designed responsive interfaces with frontend implementation constraints in mind.',
      'Translated client requirements and competitor research into implementation-aware product solutions.',
    ],
  },
  {
    title: 'Volunteer Web Platform Contributor',
    company: 'Ammrha Team',
    period: 'Dec 2023 — 2025',
    location: 'Damascus, Syria',
    tag: 'Volunteer',
    description: [
      'Contributed to a web platform for managing volunteer and beneficiary data.',
      'Collaborated with developers on data structures and integration-aware user flows.',
    ],
  },
]

export type Education = {
  degree: string
  institution: string
  period: string
  location: string
  details?: string[]
}

export const education: Education[] = [
  {
    degree: 'Workflow Automation Training — n8n',
    institution: 'beIN MEDIA',
    period: 'Jun 2026 — Jul 2026',
    location: 'Remote',
    details: [
      'Hands-on training in workflow automation using n8n.',
      'Built multi-step workflows using triggers, webhooks, API integrations, data transformation and automated notifications.',
    ],
  },
  {
    degree: 'B.E. in Computer and Automation Engineering',
    institution: 'Damascus University',
    period: '2021 — 2026',
    location: 'Damascus, Syria',
  },
]

export type SkillCategory = { name: string; skills: string[] }

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'Celery', 'Redis'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Material UI', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  { name: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  {
    name: 'Automation & Infrastructure',
    skills: ['n8n', 'Docker', 'Docker Compose', 'Git', 'GitHub', 'Bash', 'Linux'],
  },
  {
    name: 'AI Integration',
    skills: ['RAG', 'LLM Integration', 'Whisper', 'LlamaIndex', 'Qdrant', 'Document Processing'],
  },
  {
    name: 'Design Foundation',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
]

export type Project = {
  title: string
  description: string
  features: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Vocalys',
    description:
      'An AI-powered platform for uploading, processing, reviewing and reporting customer-service calls, with QA and Manager workflows in one product.',
    features: [
      'Django REST APIs, JWT authentication and role-based workflows for QA and Manager users',
      'React dashboard for analytics, follow-up tasks, reports and real-time notifications',
      'Transcription, sentiment analysis, priority classification and keyword extraction',
      'Background jobs and live status updates with Celery, Redis, Channels and WebSockets',
    ],
    technologies: [
      'Django 5',
      'DRF',
      'React 19',
      'PostgreSQL',
      'Celery',
      'Redis',
      'Channels',
      'FastAPI',
      'Whisper',
      'Docker',
    ],
    githubUrl: 'https://github.com/sidra221/call-analysis',
  },
  {
    title: 'SmartTelecomRAG',
    description:
      'A Retrieval-Augmented Generation chatbot for telecom customer support, whose answers stay grounded in the company’s own documents instead of being invented.',
    features: [
      'Retrieval-Augmented Generation pipeline over an internal document set',
      'Vector search and document retrieval to improve response relevance',
      'Interactive chat interface built with Gradio',
    ],
    technologies: ['Python', 'LlamaIndex', 'Qdrant', 'Gradio'],
    githubUrl: 'https://github.com/sidra221/SmartTelecomRAG',
  },
  {
    title: 'Hospital Management System',
    description:
      'A full-stack system covering patient records, appointments and staff management, with role-based access running across the whole product.',
    features: [
      'Modules for patient records, appointments and staff management',
      'Django APIs and relational data models',
      'React components supporting full CRUD workflows and role-based access',
    ],
    technologies: ['Django', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/sidra221/hospital',
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native', detail: 'Mother tongue' },
  { name: 'English', level: 'B2', detail: 'B2 comprehension and speaking · B1 writing' },
]
