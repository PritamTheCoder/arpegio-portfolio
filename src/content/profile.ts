export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  phone?: string
}

export const profile = {
  name: 'Pritam Thapa',
  role: 'AI Research Engineer',
  location: 'Kathmandu, Nepal',
  tagline:
    'Building applied AI systems through research, computer vision, and practical model engineering.',
  about:
    'I work across applied AI and AI research, building production-ready model systems in computer vision, medical AI, and agentic workflows. My work runs the full lifecycle: research and architecture, training and evaluation, then MLOps and deployment. I care about systems that ship and hold up under real-world load, not prototypes that stall in a notebook.',
  current:
    'Currently working at the intersection of high-stakes medical AI, agent-orchestration systems, and environmental intelligence — a systems-architect nerd who turns research ideas into working implementations.',
  ending:
    'I build AI systems that connect research with real-world use. My focus is computer vision, medical AI, and practical model engineering.',
  quote: {
    text: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
    author: 'Alan Turing',
  },
  links: {
    github: 'https://github.com/PritamTheCoder',
    linkedin: 'https://www.linkedin.com/in/pritam-thapa',
    email: 'pritamth.ai@gmail.com',
  } satisfies SocialLinks,
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'papers', label: 'Papers' },
  { id: 'blog', label: 'Blog' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const
