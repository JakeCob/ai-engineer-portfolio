import { notFound } from 'next/navigation';
import MDXRenderer from '@/components/MDXRenderer';
import { getPostBySlug } from '@/lib/content';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <time>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
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
        <MDXRenderer code={post.body.code} />
      </article>
    </main>
  );
}
