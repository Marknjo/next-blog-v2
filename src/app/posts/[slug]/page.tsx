import formatDate from '@/lib/formatDate';
import { getPostByName, getPostsMeta } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 0; //86400;

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateStaticParams() {
//   const posts = (await getPostsMeta()) || [];

//   return posts.map((post) => ({
//     slug: post.id,
//   }));
// }

export async function generateMetadata({ params: { slug } }: Props) {
  const foundPost = await getPostByName(`${slug}.mdx`);

  if (!foundPost)
    return {
      title: 'Post Not Found',
    };

  return {
    title: foundPost.meta.title,
  };
}

export default async function Post({ params: { slug } }: Props) {
  const foundPost = await getPostByName(`${slug}.mdx`);

  if (!foundPost) notFound();

  const {
    meta: { title, date, tags },
    content,
  } = foundPost;

  const pubDate = formatDate(date);

  const postTags = tags.map((tag, i) => (
    <Link href={`/tags/${tag}`} key={`${tag}-${i + 1}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className='text-3xl mt-4 mb-0'>{title}</h2>
      <p className='mt-0 text-sm'>{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className='flex flex-row gap-4'>{postTags}</div>
      </section>
      <p className='mb-10'>
        <Link href='/'>&larr; Back to Home</Link>
      </p>
    </>
  );
}
