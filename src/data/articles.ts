// Import markdown files
import gettingStartedGatsby from '../articles/getting-started-with-gatsby.md?raw';
import fiveTips from '../articles/five-tips-SWE-conference.md?raw';

export interface Article {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  slug: string
  tags: string[]
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Bringing in the 20s with Tips for Using Gatsby',
    date: '01-02-2020',
    excerpt: 'GatsbyJS tips for beginners based on my personal experience.',
    slug: 'getting-started-with-gatsby',
    content: gettingStartedGatsby,
    tags: ['Gatsby', 'React', 'Blog', 'Beginner-friendly'],
  },
  {
    id: 2,
    title: '5 Tips for the SWE Conference',
    date: '2019-12-07',
    excerpt: '5 Tips for the SWE Conference.',
    slug: '5-tips-conference',
    content: fiveTips,
    tags: ['Tips', 'Engineering', 'Conference', 'Beginner-friendly'],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

/*

  {
    id: 1,
    title: 'Getting Started with React',
    date: 'January 15, 2024',
    excerpt: 'Learn the fundamentals of React and how to build your first component.',
    slug: 'getting-started-with-react',
    content: gettingStartedContent,
    tags: ['React', 'JavaScript', 'Web Development', 'Beginner-friendly'],
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    date: 'February 1, 2024',
    excerpt: 'Discover tips and tricks for writing better TypeScript code.',
    slug: 'typescript-best-practices',
    content: typescriptContent,
    tags: ['TypeScript', 'Programming', 'Best Practices'],
  },
  {
    id: 3,
    title: 'Building Modern Web Applications',
    date: 'February 20, 2024',
    excerpt: 'A guide to creating scalable and maintainable web applications.',
    slug: 'building-modern-web-applications',
    content: modernWebContent,
    tags: ['Web Development', 'Architecture', 'Performance', 'Accessibility'],
  },
*/

