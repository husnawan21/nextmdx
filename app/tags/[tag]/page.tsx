import { getPostsMeta } from '@/lib/posts';
import ListItem from '@/app/components/ListItem';
import Link from 'next/link';

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

// for ssg, disable this in development
export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped

  if (!posts) return []; // array of object

  const tags = new Set(posts.map((post) => post.tags).flat()); // post.tags ialah array of array, maka kita butuh flat(). dan Set agar tidak duplicate

  return Array.from(tags).map((tag) => ({ tag })); // resultnya value dari tag apapun
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Post about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); // deduped

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts for that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className='mt-4 mb-0 text-3xl'>Results for: #{tag}</h2>
      <section className='max-w-2xl mx-auto mt-6'>
        <ul className='w-full p-0 list-none'>
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
