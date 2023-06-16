import Posts from './components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 86400;

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <MyProfilePic />
      <p className='my-12 text-2xl text-center dark:text-white'>
        Hello, welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Dwi</span>
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </main>
  );
}
