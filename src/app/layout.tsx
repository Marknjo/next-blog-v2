import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';

const Atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Mark's Blog",
  description: 'Created by Mark Njoroge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={`${Atkinson.className} dark:bg-slate-800`}>
        <Navbar />

        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
