import formatDate from '@/lib/formatDate';
import getSortedPostsData, { getPostData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const posts = getSortedPostsData();

  const { slug } = params;
  const foundPost = posts.find((post) => post.id === slug);

  if (!slug || !foundPost)
    return {
      title: 'Post Not Found',
    };

  return {
    title: foundPost.title,
  };
}

export default async function Post({ params }: Props) {
  const posts = getSortedPostsData();

  const { slug } = params;

  if (!slug || !posts.find((post) => post.id === slug)) notFound();

  const { title, date, contentHtml } = await getPostData(slug);
  const pubDate = formatDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <p>
          <Link href='/'>&larr; Back to Home</Link>
        </p>
      </article>
    </main>
  );
}
