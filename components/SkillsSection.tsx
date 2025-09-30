'use client';

import { useState } from 'react';

const skillCategories = [
  {
    name: "GenAI & LLMs",
    icon: "🤖",
    skills: [
      { name: "LangChain", level: 88 },
      { name: "RAG Systems", level: 85 },
      { name: "Computer Vision", level: 83 },
      { name: "FastAPI", level: 92 },
      { name: "Multi-Agent Systems", level: 82 },
      { name: "Spatial AI", level: 85 }
    ]
  },
  {
    name: "Data & Infrastructure",
    icon: "📊",
    skills: [
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Vector DBs (Qdrant)", level: 80 },
      { name: "AWS", level: 83 }
    ]
  },
  {
    name: "Backend & DevOps",
    icon: "⚙️",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS/GCP", level: 82 },
      { name: "CI/CD", level: 85 },
      { name: "PostgreSQL", level: 87 }
    ]
  },
  {
    name: "Frontend",
    icon: "💻",
    skills: [
      { name: "React/Next.js", level: 82 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Data Visualization", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets", level: 75 }
    ]
  },
  {
    name: "Low-Code/No-Code",
    icon: "⚡",
    skills: [
      { name: "n8n Workflows", level: 92 },
      { name: "Zapier", level: 85 },
      { name: "Make (Integromat)", level: 80 },
      { name: "Retool", level: 78 },
      { name: "Bubble", level: 75 },
      { name: "API Integration", level: 90 }
    ]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Full-stack AI engineering with focus on production-ready systems
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === index
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 md:p-8 shadow-lg">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm md:text-base">
                    {skill.name}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
              Also experienced with:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Git', 'Docker', 'OpenAI API', 'Anthropic API', 'SLAM3R', 'SpatialLM',
                'Matplotlib', 'Gradio', 'Point Clouds', '3D Visualization',
                'Hugging Face', 'CrewAI', 'AutoGen', 'LangFlow'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--width);
          }
        }
      `}</style>
    </section>
  );
}