import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

export default function CustomImage({ src, alt, priority }: Props) {
  return (
    <div className='w-full h-auto rounded-lg mx-auto'>
      <Image
        className='rounded-lg mx-auto'
        src={src}
        alt={alt}
        width={650}
        height={366}
        sizes='(min-width: 720px) 650px, calc(95.5vw - 19px)'
        priority={!!priority}
      />
    </div>
  );
}
