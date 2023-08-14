import PostItem from '@/components/PostItem';
import { getPostsMeta } from '@/lib/posts';
import Link from 'next/link';

export const revalidate = 0; //86400

type Props = {
  params: {
    tag: string;
  };
};

// export async function generateStaticParams() {
//   const posts = (await getPostsMeta()) || [];

//   if (posts.length === 0) return [];

//   const tags = new Set(posts.map((post) => post.tags).flat());

//   return Array.from(tags).map((tag) => ({
//     tag,
//   }));
// }

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Post about ${tag}`,
  };
}

export default async function TagPosts({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts)
    return <p className='mt-10 text-center'>Sorry, no posts available</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no post for {tag} keyword.</p>
        <Link href='/'>&larr; Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className='text-3xl mt-4 mb-0'>Results for: #{tag}</h2>
      <section className='mt-6 mx-auto mx-w-2xl'>
        <ul className='w-full list-none p-0'>
          {tagPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
