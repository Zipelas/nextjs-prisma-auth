export default async function Home() {
  const post = await db.post.findMany({ where: { authorId: [1, 2] }, include: { author: {select: { name: true }} }});



  return (
    <main>
      <section className='bg-sky-500 p-2 grid gap-4'>
        <h2 className='text-xl'>Things happening right now</h2>
        {posts.map((post) => (
        <article key={post.id}>
          <span className='text-sm text-slate-700'>Created by: {post.author.name}</span>
          <h3 className='text-lg font-bold'>{post.title}</h3>
          <p className='text-slate-800'>{post.content}
          </p>
        </article>
        ))}
      </section>
    </main>
  );
}
