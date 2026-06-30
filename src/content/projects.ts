import argusImg from '../../assets/optimized/argus.webp'
import neuroImg from '../../assets/optimized/brain-tu.webp'
import cervImg from '../../assets/optimized/cerv.webp'

export interface ProjectLink {
  label: string
  href?: string
}

export interface Project {
  name: string
  kind?: string
  image?: ImageMetadata
  summary: string
  tags: string[]
  status?: string
  links: ProjectLink[]
}

export const featuredProjects: Project[] = [
  {
    name: 'Project Argus',
    kind: 'Agentic AI Research System',
    image: argusImg,
    summary:
      'A multi-agent "research pod" that reads full sources, evaluates research paths, and keeps a human in the loop — beyond shallow single-agent summarization.',
    tags: ['Multi-Agent', 'Deep Retrieval', 'Research Automation', 'Human-in-the-loop'],
    links: [{ label: 'GitHub', href: 'https://github.com/PritamTheCoder' }],
  },
  {
    name: 'NeuroSight AI',
    kind: 'AI-Assisted Brain MRI Analysis',
    image: neuroImg,
    summary:
      'Brain tumor segmentation and classification with Grad-CAM explainability, served through an interactive web app. Research prototype, not for diagnosis.',
    tags: ['Medical AI', 'Segmentation', 'Explainability', 'Web App'],
    links: [
      { label: 'Pages', href: 'https://pritamthecoder.github.io/neurosight-ai/' },
    ],
  },
  {
    name: 'Cervical Cytology AI',
    kind: 'End-to-End Medical AI Workflow',
    image: cervImg,
    summary:
      'An end-to-end cervical cytology pipeline from cell segmentation to Bethesda-aligned reporting, reaching 92.6% accuracy on SIPaKMeD.',
    tags: ['Medical AI', 'Segmentation', 'Classification', 'Explainability'],
    links: [
      { label: 'GitHub', href: 'https://github.com/PritamTheCoder' },
      { label: 'Hugging Face' },
    ],
  },
  {
    name: 'AIGLE',
    kind: 'Agentic Multimodal Clinical Support',
    summary:
      'An agentic, multimodal clinical decision-support system bridging medical image understanding and clinical reasoning.',
    tags: ['Multimodal AI', 'Agentic Reasoning', 'Uncertainty-aware', 'Decision Support'],
    links: [{ label: 'GitHub', href: 'https://github.com/PritamTheCoder' }],
  },
]

export const moreProjects: Project[] = [
  {
    name: 'P.U.L.S.E AI',
    kind: 'Football Analytics Pipeline',
    summary:
      'Positional and Universal Live Statistical Engine — turns raw match video into tracked players, team clustering, pitch mapping, and match analytics.',
    tags: ['YOLO + DeepSORT', 'SigLIP Clustering', 'Homography', 'Analytics'],
    links: [{ label: 'GitHub', href: 'https://github.com/PritamTheCoder' }],
  },
  {
    name: 'YOLO-Forge',
    kind: 'Dataset Engineering Pipeline',
    summary:
      'A production dataset pipeline: scanning, label repair, stratified splits, and bbox-aware augmentation with automated QC.',
    tags: ['Dataset Engineering', 'Augmentation', 'Label Repair', 'QC'],
    links: [{ label: 'GitHub', href: 'https://github.com/PritamTheCoder' }],
  },
  {
    name: 'Structura AI',
    kind: 'Depth & Structural Masking API',
    summary:
      'Depth estimation and structural masking served as a containerized vision API for 3D/VFX workflows.',
    tags: ['Depth Estimation', 'Vision API', 'Deployment'],
    links: [
      { label: 'GitHub', href: 'https://github.com/PritamTheCoder' },
      { label: 'Demo' },
    ],
  },
]

export const researchDirections = [
  'Agentic AI systems',
  'Medical AI and computational pathology',
  'Environmental AI and monitoring',
  'Explainable AI',
  'AI infrastructure and deployment',
]
