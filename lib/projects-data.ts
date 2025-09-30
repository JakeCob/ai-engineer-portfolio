export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  domain: string;
  skills: string[];
  metrics?: {
    [key: string]: string;
  };
  publishedAt: string;
  featured?: boolean;
  demoVideo?: string;
}

export const projects: Project[] = [
  {
    slug: "n8n-workflows",
    title: "n8n Workflow Orchestration Platform",
    summary: "Designed and deployed 20+ enterprise automation workflows using n8n. Integrated LLMs, APIs, and databases for no-code AI solutions. Live implementation powers this portfolio's AI assistant.",
    description: "Enterprise-grade automation platform built with n8n, demonstrating expertise in no-code AI workflow development and system integration.",
    tags: ["n8n", "LangChain", "PostgreSQL", "APIs", "No-Code", "Workflow Automation", "Groq", "RAG"],
    domain: "Automation & Integration",
    skills: ["Workflow Design", "API Integration", "Database Management", "LLM Orchestration", "No-Code Development", "RAG Implementation"],
    metrics: {
      "workflows": "20+ built",
      "efficiency": "60% faster",
      "integrations": "15+ services",
      "response_time": "<2s latency"
    },
    publishedAt: "2024-09-01",
    featured: true
  },
  {
    slug: "tapat-ai",
    title: "Tapat - AI Audio Agent for Philippine Elections",
    summary: "Built an LLM-powered audio agent with real-time conversation capabilities. Demonstrates RAG implementation, prompt engineering, and production FastAPI deployment.",
    description: "An intelligent audio agent designed to provide accurate information about Philippine elections through natural voice conversations.",
    tags: ["Whisper", "GPT-4", "FastAPI", "LangChain", "RAG", "Audio AI"],
    domain: "Political AI",
    skills: ["LLM Integration", "Audio Processing", "FastAPI", "RAG", "Prompt Engineering"],
    metrics: {
      "latency": "<2s response",
      "languages": "Multilingual",
      "deployment": "Production"
    },
    publishedAt: "2024-08-15",
    featured: true,
    demoVideo: "https://drive.google.com/file/d/1FhJhVhyqDV_M_ZHSXgQLe_PU00fGRZT4/preview"
  },
  {
    slug: "athena",
    title: "Athena - Spatial AI Analysis Platform",
    summary: "Computer vision system leveraging SLAM3R for 3D point cloud generation and SpatialLM for spatial analysis. Creates interactive 2D/3D floorplans with AI-powered risk assessments.",
    description: "Advanced computer vision system that transforms 2D videos into interactive 3D spatial environments with AI-powered analysis and recommendations.",
    tags: ["SLAM3R", "SpatialLM", "Gradio", "Computer Vision", "3D Visualization", "Spatial AI"],
    domain: "Computer Vision",
    skills: ["3D Reconstruction", "Computer Vision", "Spatial Analysis", "AI Integration", "UI Development"],
    metrics: {
      "processing": "Video → 3D",
      "analysis": "Risk + Design",
      "interface": "Interactive"
    },
    publishedAt: "2024-07-20",
    featured: true,
    demoVideo: "https://drive.google.com/file/d/10TfFjHhV6NLiB6ZFJ3ls7zngmcKfEYYw/preview"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}