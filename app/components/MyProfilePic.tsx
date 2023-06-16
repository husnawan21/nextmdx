import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className='mx-auto w-full'>
      <Image
        className='mx-auto mt-8 rounded-full border-4 border-slate-900 dark:border-slate-500'
        src='/images/profile.png'
        width={200}
        height={200}
        alt='Dwi Husnawan'
        priority
      />
    </section>
  );
}
