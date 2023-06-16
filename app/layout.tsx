import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Dwi's Blog",
  description: 'Created by Dwi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Navbar />
        <main className='px-4 mx-auto prose prose-xl prose-slate md:px-6 dark:prose-invert'>
          {children}
        </main>
      </body>
    </html>
  );
}
