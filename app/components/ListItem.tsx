import getFormatedDate from '@/lib/getFormatedDate';
import Link from 'next/link';

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;

  const formatedDate = getFormatedDate(date);

  return (
    <li className='mt-4 text-2xl dark:text-white/90' key={id}>
      <Link
        className='underline hover:text-slate-700 dark:hover:text-white'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='mt-1 text-sm dark:text-slate-300'>{formatedDate}</p>
    </li>
  );
}
