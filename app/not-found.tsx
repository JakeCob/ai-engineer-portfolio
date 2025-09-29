import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="space-y-4 max-w-lg">
          <div className="text-8xl font-bold text-neutral-200 dark:text-neutral-800">404</div>
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center pt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="mt-16 p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg max-w-md">
          <h2 className="font-semibold mb-2">Looking for something specific?</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            You might find what you&apos;re looking for in one of these sections:
          </p>
          <nav className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/work" className="text-blue-600 hover:underline dark:text-blue-400">
              → Projects & Case Studies
            </Link>
            <Link href="/blog" className="text-blue-600 hover:underline dark:text-blue-400">
              → Blog & Articles
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline dark:text-blue-400">
              → About Me
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
              → Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
