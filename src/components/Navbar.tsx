import Link from 'next/link';

import { FaYoutube, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const icons: Array<LinkIconProps> = [
  {
    url: 'https://youtube.com/@thetalkingdev',
    icon: <FaYoutube />,
  },

  {
    url: 'https://www.linkedin.com/in/mark-njoroge/',
    icon: <FaLinkedinIn />,
  },
  {
    url: 'https://github.com/Marknjo',
    icon: <FaGithub />,
  },
  {
    url: 'https://twitter.com/marknjo7',
    icon: <FaTwitter />,
  },
];

type LinkIconProps = {
  url: string;
  icon: JSX.Element;
};

function LinkIcon({ icon, url }: LinkIconProps) {
  return (
    <Link
      target='_blank'
      href={url}
      className='text-white/90 hover:text-white transition rounded-full w-8 h-8 sm:w-9 sm:h-9 bg-slate-800 hover:bg-slate-500 flex justify-center items-center'>
      {icon}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className='md:px-6 bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'>
            Mark Njoroge
          </Link>
        </h1>

        <div className='flex flex-row' />
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-lg lg:text-2xl'>
          {icons.map((icon) => (
            <LinkIcon key={icon.url} {...icon} />
          ))}
        </div>
      </div>
    </nav>
  );
}
