import Link from 'next/link';
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 p-4 bg-slate-600 drop-shadow'>
      <div className='flex flex-col justify-between mx-auto prose prose-xl md:px-6 sm:flex-row'>
        <h1 className='grid mb-2 text-2xl font-bold text-white place-content-center md:mb-0'>
          <Link
            href='/'
            className='no-underline text-white/90 hover:text-white'
          >
            Dwi Husnawan
          </Link>
        </h1>
        <div className='flex flex-row justify-center gap-4 text-4xl text-white align-middle sm:justify-evenly lg:text-5xl'>
          <Link
            href='https://youtube.com'
            className='text-white/90 hover:text-white'
          >
            <FaYoutube />
          </Link>
          <Link
            href='https://youtube.com'
            className='text-white/90 hover:text-white'
          >
            <FaTwitter />
          </Link>
          <Link
            href='https://youtube.com'
            className='text-white/90 hover:text-white'
          >
            <FaGithub />
          </Link>
          <Link
            href='https://youtube.com'
            className='text-white/90 hover:text-white'
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
