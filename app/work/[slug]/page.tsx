export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Case Study</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Slug: {slug}</p>
      <p className="mt-4">This is a placeholder for the project detail page.</p>
    </main>
  );
}
