import { notFound } from 'next/navigation';
import MDXRenderer from '@/components/MDXRenderer';
import { getProjectBySlug } from '@/lib/content';

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span>{project.domain}</span>
          <span>•</span>
          <span>{project.readingTime} min read</span>
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
        <MDXRenderer code={project.body.code} />
      </article>
    </main>
  );
}
