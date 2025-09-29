import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import readingTime from 'reading-time';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    domain: { type: 'string', required: true },
    skills: { type: 'list', of: { type: 'string' }, required: true },
    metrics: { type: 'json' },
    repoUrl: { type: 'string' },
    demoUrl: { type: 'string' },
    coverImage: { type: 'string' },
    publishedAt: { type: 'date', required: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
    readingTime: { type: 'number', resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes) },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    coverImage: { type: 'string' },
    publishedAt: { type: 'date', required: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
    readingTime: { type: 'number', resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes) },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
});