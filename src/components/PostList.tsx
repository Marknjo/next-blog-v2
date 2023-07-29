import formatDate from '@/lib/formatDate';
import Link from 'next/link';

type Props = {
  post: Post;
};
export default function PostList({ post }: Props) {
  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/posts/${post.id}`}>
        {post.title}
      </Link>
      <br />
      <p className='text-sm mt-1'>{formatDate(post.date)}</p>
    </li>
  );
}
