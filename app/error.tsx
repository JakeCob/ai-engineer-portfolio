"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <main className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{error.message}</p>
    </main>
  );
}
