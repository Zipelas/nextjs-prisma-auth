export default async function Home() {
  const post = await db.post.findMany({})
  
  return (
    <main>
      <section className='bg-sky-500 p-2 grid gap-4'>
        <h2 className='text-xl'>Things happening right now</h2>
        <article>
          <span className='text-sm text-slate-700'>Created by: {post.author}</span>
          <h3 className='text-lg font-bold'>{post.title}</h3>
          <p className='text-slate-800'>{post.content}
          </p>
        </article>
        
      </section>
    </main>
  );
}
