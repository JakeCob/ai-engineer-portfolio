import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects-data';
import TapatProject from '@/components/projects/TapatProject';
import AthenaProject from '@/components/projects/AthenaProject';

// Define the project components mapping
const projectComponents: { [key: string]: React.ComponentType } = {
  'tapat-ai': TapatProject,
  'athena': AthenaProject,
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get the specific component for this project
  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    // Fallback for projects without custom components
    return (
      <main className="container mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span>{project.domain}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-neutral max-w-none dark:prose-invert">
          <p>{project.description}</p>
        </article>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span>{project.domain}</span>
          <span>•</span>
          <span>{new Date(project.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <ProjectComponent />
    </main>
  );
}