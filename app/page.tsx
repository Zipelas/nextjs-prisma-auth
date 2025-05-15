import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className='p-2 grid gap-4'>
        <h2 className='text-xl'>Things happening right now</h2>
        <article>
          <span className='text-sm text text-slate-700'>
            Created by: Zipelas
          </span>
          <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
          <p className='text-slate-800'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            sequi tempore atque facere, consequuntur veniam saepe dicta fugiat
            esse vel cum neque officiis consectetur animi harum, ut iste. Sint,
            consectetur.
          </p>{' '}
        </article>
        <article>
          <span className='text-sm text text-slate-700'>
            Created by: Mutti
          </span>
          <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
          <p className='text-slate-800'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            sequi tempore atque facere, consequuntur veniam saepe dicta fugiat
            esse vel cum neque officiis consectetur animi harum, ut iste. Sint,
            consectetur.
          </p>{' '}
        </article>
        <article>
          <span className='text-sm text text-slate-700'>
            Created by: Putte
          </span>
          <h3 className='text-xl font-bold'>Lorem Ipsum</h3>
          <p className='text-slate-800'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            sequi tempore atque facere, consequuntur veniam saepe dicta fugiat
            esse vel cum neque officiis consectetur animi harum, ut iste. Sint,
            consectetur.
          </p>{' '}
        </article>
      </section>
    </main>
  );
}
