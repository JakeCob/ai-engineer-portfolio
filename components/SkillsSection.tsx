'use client';

import { useState } from 'react';

const skillCategories = [
  {
    name: "GenAI & LLMs",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "LangChain", level: 90, icon: "🔗" },
      { name: "RAG Systems", level: 88, icon: "📚" },
      { name: "Prompt Engineering", level: 92, icon: "✍️" },
      { name: "Multi-Agent Systems", level: 85, icon: "👥" },
      { name: "LLM Fine-tuning", level: 80, icon: "⚙️" },
      { name: "Vector Embeddings", level: 87, icon: "📊" }
    ]
  },
  {
    name: "AI/ML Frameworks",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "OpenAI API", level: 95, icon: "🔥" },
      { name: "Groq", level: 90, icon: "⚡" },
      { name: "Anthropic Claude", level: 88, icon: "🎯" },
      { name: "Hugging Face", level: 82, icon: "🤗" },
      { name: "Whisper (STT)", level: 85, icon: "🎤" },
      { name: "TensorFlow/PyTorch", level: 80, icon: "🔬" }
    ]
  },
  {
    name: "Traditional ML & CV",
    icon: "📊",
    color: "from-teal-500 to-green-500",
    skills: [
      { name: "NLP & Text Analysis", level: 87, icon: "📝" },
      { name: "Computer Vision", level: 83, icon: "👁️" },
      { name: "Model Training", level: 85, icon: "🎓" },
      { name: "Scikit-learn", level: 88, icon: "🔧" },
      { name: "Data Preprocessing", level: 90, icon: "🧹" },
      { name: "Feature Engineering", level: 86, icon: "⚙️" }
    ]
  },
  {
    name: "Low-Code/No-Code",
    icon: "⚡",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "n8n Workflows", level: 95, icon: "🔄" },
      { name: "n8n + LangChain", level: 92, icon: "🔗" },
      { name: "API Integration", level: 93, icon: "🔌" },
      { name: "Zapier", level: 85, icon: "⚙️" },
      { name: "Make (Integromat)", level: 82, icon: "🛠️" },
      { name: "Workflow Automation", level: 94, icon: "🤖" }
    ]
  },
  {
    name: "Backend & Databases",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "FastAPI", level: 92, icon: "⚡" },
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "Supabase", level: 87, icon: "🔥" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Redis", level: 82, icon: "💎" }
    ]
  },
  {
    name: "Frontend & UI",
    icon: "💻",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "React/Next.js", level: 85, icon: "⚛️" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Gradio Interfaces", level: 87, icon: "🎭" },
      { name: "REST APIs", level: 92, icon: "🔗" },
      { name: "WebSockets", level: 78, icon: "🔌" }
    ]
  }
];

const certifications = [
  {
    title: "Omdena AI Contributor",
    organization: "Omdena",
    year: "2024",
    icon: "🏆",
    description: "Active contributor to global AI projects"
  },
  {
    title: "AI Project Portfolio",
    organization: "Self-Built",
    year: "2024",
    icon: "🎯",
    description: "8+ production AI systems deployed"
  },
  {
    title: "n8n Workflow Expert",
    organization: "Sevron Ltd",
    year: "2024",
    icon: "⚡",
    description: "Enterprise automation specialist"
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Specialized in GenAI, LLM orchestration, and no-code automation with production-ready implementations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                activeCategory === index
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              <span className="text-sm md:text-base">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 md:p-10 shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-sm md:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-neutral-600 dark:text-neutral-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.1}s both`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all hover:scale-105 transform"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {cert.organization} • {cert.year}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Additional Tools & Technologies</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Extended toolkit for comprehensive AI solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Git', 'AWS', 'Railway', 'SLAM3R', 'SpatialLM',
              'Qdrant', 'Matplotlib', 'Gradio', 'Point Clouds',
              'CrewAI', 'AutoGen', 'LangFlow', 'Google Gemini', 'Supabase'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 text-neutral-700 dark:text-neutral-300 font-medium hover:scale-110 transition-transform border border-neutral-300 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
}