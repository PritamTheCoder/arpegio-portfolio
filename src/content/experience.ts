export interface Experience {
  role: string
  org: string
  sub: string
  period: string
  intro?: string
  focus: string[]
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'AI Researcher',
    org: 'Wiseyak Inc.',
    sub: 'AI HealthTech · Bellevue, WA, USA (HQ) & Kathmandu, Nepal',
    period: 'Dec 2025 – Present',
    focus: [
      'AI Research',
      'Medical AI',
      'Cervical Cancer Screening',
      'Deep Learning',
      'Model Training & Evaluation',
      'Explainable AI',
      'Remote Monitoring Systems',
    ],
    bullets: [
      'Contributing to a research initiative for AI-assisted cervical cancer screening, synthesizing SOTA deep learning methods with clinical requirements.',
      'Built Explainable AI (XAI) features — N/C ratio and morphology metrics — for interpretable diagnostic support aligned with the Bethesda System.',
      'Researched and fine-tuned deep learning models for core use cases in cervical cancer screening, grounded in the Bethesda-based framework.',
      'Designed WMMS (Wise Microscopy Monitoring System) for remote monitoring of microscope and product condition and health.',
    ],
  },
  {
    role: 'AI Research Engineer',
    org: 'Greenalaya Nepal',
    sub: 'Deep Learning & Environmental Systems · Kathmandu, Nepal',
    period: 'Jun 2026 – Present',
    intro:
      'Greenalaya Nepal builds AI for biodiversity, conservation, and environmental monitoring. I focus on deep learning and deployable environmental systems, while bridging AI research with real-world conservation and monitoring work.',
    focus: [
      'Deep Learning',
      'Environmental AI',
      'Research & Benchmarks',
      'Conservation Tech',
      'Deployable Systems',
      'GLOF Monitoring',
    ],
    bullets: [
      'Building deployable environmental monitoring systems powered by deep learning.',
      'Conducting research and publishing papers and benchmarks for environmental AI.',
      'Bridging the gap between AI, conservation, and ecological monitoring.',
      'Working toward a GLOF (glacial lake outburst flood) monitoring system and research as a long-term goal.',
    ],
  },
  {
    role: 'Computer Vision Engineer Intern',
    org: 'PointRef Inc.',
    sub: 'AI Sports-Tech (DE C-Corp) · Humboldt, TN, USA',
    period: 'Jul 2025 – Dec 2025',
    focus: [
      'YOLO Pipelines',
      'Sports Analytics',
      'Detection / Pose / Tracking',
      'Reproducible Workflows',
    ],
    bullets: [
      'Engineered end-to-end computer vision pipelines for sports analytics — data collection, preprocessing, and augmentation at scale.',
      'Trained and evaluated custom detectors (YOLOv8, YOLOv8-Pose, YOLOv12s), optimizing for inference speed and recall on small objects.',
      'Established reproducible training workflows and architecture comparisons to select production-fit models.',
    ],
  },
]
