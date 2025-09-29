import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {};

export default function MDXRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Component components={components as any} />;
}