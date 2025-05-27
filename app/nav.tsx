import Link from 'next/link';
import { signOut, useSession } from './auth-client';

export default function Nav() {
  const { data } = useSession();

  return (
    <nav className='flex gap-2'>
      {data ? (
        <>
          <Link href='/create-post'>Create</Link>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <Link href='/create-post'>Create</Link>
        </>
      )}
    </nav>
  );
}
