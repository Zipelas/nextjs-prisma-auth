import { db } from '@/prisma/client';

export default async function Home() {
  const posts = await db.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <main className='bg-pink-500 text-sky-500'>
      <section className='p-2 grid gap-4'>
        <h2 className='text-sky-500 text-xl'>Things happening right now!</h2>
        {posts.map((post) => (
          <article key={post.id}>
            <span className='text-sm text-slate-700'>
              Created by: {post.author.name}
            </span>
            <h3 className='text-lg font-bold'>{post.title}</h3>
            <p className='text-sky-500'>{post.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
