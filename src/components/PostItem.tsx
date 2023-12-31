import formatDate from '@/lib/formatDate';
import Link from 'next/link';
import { Meta } from '../../types';

type Props = {
  post: Meta;
};
export default function PostItem({ post }: Props) {
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
