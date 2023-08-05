import { compileMDX } from 'next-mdx-remote/rsc';
import { Meta, Post } from '../../types';

type Filetree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(
  filename: string
): Promise<Post | undefined> {
  const res = await fetch(
    `http://raw.githubusercontent.com/Marknjo/next-blog-v2-test-posts/main/${filename}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === '404: Not Found') return undefined;

  const { frontmatter, content } = await compileMDX<Omit<Meta, 'id'>>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
    },
  });

  const id = filename.replace(/\.mdx$/, '');

  const blogPostObj: Post = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
}
