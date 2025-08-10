export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Post: {slug}</h1>
      <article className="prose dark:prose-invert mt-6">MDX-rendered post will go here.</article>
    </main>
  );
}
