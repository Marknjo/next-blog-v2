import { getPostsMeta } from '@/lib/posts';
import PostList from './PostList';

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no post available</p>;
  }

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>

      <ul className='w-full list-none p-0'>
        {posts.map((post) => (
          <PostList key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
