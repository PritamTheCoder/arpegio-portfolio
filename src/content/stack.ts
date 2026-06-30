export interface StackGroup {
  label: string
  items: string[]
}

// Rule: every tag is a named tool/library/framework or a specific named technique —
// never a capability-level buzzword. Ordered strongest / most production-proven first.
export const stack: StackGroup[] = [
  {
    label: 'Computer Vision & Medical Imaging',
    items: [
      'YOLO',
      'Cellpose',
      'U-Net++',
      'EfficientNetV2',
      'ConvNeXt / ConvNeXt-V2',
      'MobileViT',
      'OpenCV',
      'MONAI',
      'PyRadiomics',
      'Multi-Object Tracking',
      'Grad-CAM / XAI',
    ],
  },
  {
    label: 'ML Foundations & Research',
    items: [
      'PyTorch',
      'Hugging Face Transformers',
      'scikit-learn',
      'Albumentations',
      'NumPy',
      'Pandas',
      'SciPy',
    ],
  },
  {
    label: 'Inference, Optimization & Serving',
    items: [
      'ONNX',
      'TensorRT',
      'INT8 Quantization',
      'LoRA',
      'FastAPI',
      'Celery',
      'Redis',
    ],
  },
  {
    label: 'MLOps & Deployment',
    items: ['Docker', 'CI/CD', 'Git', 'PostgreSQL', 'TimescaleDB'],
  },
  {
    label: 'Engineering & Backend',
    items: ['Django', 'REST APIs', 'SQLite', 'Next.js', 'React', 'Tailwind CSS'],
  },
  {
    label: 'LLM & Agentic',
    items: ['LangGraph', 'LangChain', 'Knowledge Graphs', 'Multimodal AI', 'VLMs', 'VLAs'],
  },
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'C', 'HTML', 'CSS'],
  },
]
