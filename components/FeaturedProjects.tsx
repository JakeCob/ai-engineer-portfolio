import Link from 'next/link';

const featuredProjects = [
  {
    title: "Tapat - AI Audio Agent for Philippine Elections",
    description: "Built an LLM-powered audio agent with real-time conversation capabilities. Demonstrates RAG implementation, prompt engineering, and production FastAPI deployment.",
    tech: ["Whisper", "GPT-4", "FastAPI", "LangChain"],
    metrics: {
      latency: "<2s response",
      languages: "Multilingual",
      deployment: "Production"
    },
    link: "/projects/tapat-ai",
    icon: "🎙️"
  },
  {
    title: "n8n Workflow Orchestration Platform",
    description: "Designed and deployed 20+ enterprise automation workflows using n8n. Integrated LLMs, APIs, and databases for no-code AI solutions similar to ELGO's platform.",
    tech: ["n8n", "LangChain", "PostgreSQL", "APIs"],
    metrics: {
      workflows: "20+ built",
      efficiency: "60% faster",
      integrations: "15+ services"
    },
    link: "/projects/n8n-workflows",
    icon: "⚡"
  },
  {
    title: "Athena - Spatial AI Analysis Platform",
    description: "Computer vision system leveraging SLAM3R for 3D point cloud generation and SpatialLM for spatial analysis. Creates interactive 2D/3D floorplans with AI-powered risk assessments and design recommendations.",
    tech: ["SLAM3R", "SpatialLM", "Gradio", "Computer Vision", "3D Visualization"],
    metrics: {
      processing: "Video → 3D",
      analysis: "Risk + Design",
      interface: "Interactive"
    },
    link: "/projects/athena",
    icon: "🏗️"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            End-to-end AI solutions from research to production deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Badge */}
              <div className="absolute -top-4 left-6 text-4xl bg-white dark:bg-neutral-900 px-2">
                {project.icon}
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-4 flex flex-wrap gap-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1">
                      <span className="text-xs text-neutral-500 capitalize">{key}:</span>
                      <span className="text-sm font-semibold text-black dark:text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    {(project.title.includes('Athena') || project.title.includes('Tapat')) ? 'Watch Demo' : 'View Details'}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors font-medium"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}