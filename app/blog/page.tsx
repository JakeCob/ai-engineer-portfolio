import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export default function BlogPage() {
  const posts = getAllPosts().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">Deep dives on systems, evaluations, and tradeoffs.</p>
      
      <div className="mt-12 space-y-8">
        {posts.length > 0 ? posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <time className="text-sm text-neutral-600 dark:text-neutral-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </article>
          </Link>
        )) : (
          <div className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400">
              No blog posts available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
