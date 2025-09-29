'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="space-y-4 max-w-lg">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            An unexpected error occurred while processing your request. Don&apos;t worry, we&apos;re on it!
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg text-left">
              <summary className="cursor-pointer text-sm font-medium text-red-800 dark:text-red-200">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 text-xs text-red-700 dark:text-red-300 whitespace-pre-wrap">
                {error.message}
              </pre>
              {error.digest && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                  Error ID: {error.digest}
                </p>
              )}
            </details>
          )}

          <div className="flex gap-4 justify-center pt-6">
            <button
              onClick={reset}
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>

        <div className="mt-16 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg max-w-md">
          <h2 className="font-semibold mb-2">Need help?</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            If this problem persists, please don&apos;t hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </main>
  );
}
