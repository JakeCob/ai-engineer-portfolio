
const skills = {
  "AI & Machine Learning": [
    "LLM Integration & Fine-tuning",
    "Agent Architecture Design",
    "Prompt Engineering",
    "RAG Systems",
    "NLP & Text Processing",
    "Computer Vision",
    "MLOps & Model Deployment",
  ],
  "Backend Development": [
    "Python (FastAPI, Django)",
    "Node.js (Express, NestJS)",
    "Go",
    "PostgreSQL, MongoDB",
    "Redis, Elasticsearch",
    "GraphQL, REST APIs",
    "Microservices Architecture",
  ],
  "Frontend & UI": [
    "React, Next.js",
    "TypeScript",
    "Tailwind CSS",
    "State Management",
    "Web Performance",
    "Responsive Design",
  ],
  "DevOps & Cloud": [
    "Docker, Kubernetes",
    "CI/CD Pipelines",
    "AWS, GCP, Azure",
    "Terraform",
    "Monitoring & Logging",
    "Security Best Practices",
  ],
};

const timeline = [
  {
    year: "2024",
    title: "Senior AI Engineer",
    company: "Current Role",
    description: "Leading agent-first development initiatives for enterprise productivity tools.",
  },
  {
    year: "2023",
    title: "AI/ML Engineer",
    company: "Previous Company",
    description: "Built and deployed ML models for NLP tasks, improving accuracy by 35%.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Tech Startup",
    description: "Developed scalable SaaS applications serving 100K+ users.",
  },
  {
    year: "2021",
    title: "Computer Science Degree",
    company: "University",
    description: "Graduated with honors, specialization in AI and distributed systems.",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with agent-first architectures and emerging AI technologies.",
  },
  {
    title: "User-Centric Design",
    description: "Building tools that genuinely improve developer productivity and user experience.",
  },
  {
    title: "Continuous Learning",
    description: "Staying ahead with the latest in AI research and engineering best practices.",
  },
  {
    title: "Open Collaboration",
    description: "Contributing to open-source and sharing knowledge with the developer community.",
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold">About Me</h1>

        {/* Introduction */}
        <section className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            I&apos;m an AI Engineer passionate about building agent-first applications that transform how developers work.
            With expertise spanning from low-level ML operations to high-level system architecture, I specialize in
            creating intelligent tools that adapt to user needs and automate complex workflows.
          </p>
          <p className="mt-4">
            My approach combines rigorous engineering practices with cutting-edge AI research, ensuring that the
            solutions I build are not just innovative but also reliable, scalable, and user-friendly. I believe in
            the power of AI agents to augment human capabilities rather than replace them.
          </p>
        </section>

        {/* Values */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-900 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-sm text-neutral-500 dark:text-neutral-400">
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.company}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            I&apos;m always interested in challenging projects that push the boundaries of AI and software engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="/documents/resume.pdf"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              download
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
