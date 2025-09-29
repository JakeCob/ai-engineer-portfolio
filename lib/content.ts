// Content utility to handle Contentlayer imports safely
export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  domain: string;
  skills: string[];
  publishedAt: string;
  readingTime: number;
  body: { code: string };
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  body: { code: string };
}

export function getAllProjects(): Project[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { allProjects } = require('contentlayer/generated');
    return allProjects || [];
  } catch {
    return [];
  }
}

export function getAllPosts(): Post[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { allPosts } = require('contentlayer/generated');
    return allPosts || [];
  } catch {
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}