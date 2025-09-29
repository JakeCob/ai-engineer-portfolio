import Link from 'next/link';
import { getAllProjects } from '@/lib/content';

export default function WorkPage() {
  const projects = getAllProjects().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Work</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">Project case studies and experiments.</p>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group">
            <article className="h-full rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {project.domain}
              </p>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        )) : (
          <div className="col-span-full text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400">
              No projects available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
