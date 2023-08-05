import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-center'>
      <p className='mt-10'>The requested post does not exist in our archives</p>
      <Link href='/'>&larr; Back to Home</Link>
    </div>
  );
}
