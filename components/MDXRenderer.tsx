'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

export default function MDXRenderer({ code }: { code: string }) {
  try {
    const Component = useMDXComponent(code);
    return <Component />;
  } catch (error) {
    console.error('MDX rendering error:', error);
    // Fallback rendering for development
    return (
      <div className="text-neutral-600 dark:text-neutral-400">
        <p>Content loading...</p>
      </div>
    );
  }
}