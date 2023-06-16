import { getPostsMeta } from '@/lib/posts';
import React from 'react';
import ListItem from './ListItem';

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  return (
    <section className='max-w-2xl mx-auto mt-6'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
      <ul className='w-full p-0 list-none'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}