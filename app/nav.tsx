'use client';

import Link from 'next/link';
import { signOut, useSession } from './auth-client';

export default function Nav() {
  const { data } = useSession();

  return (
    <nav className='flex gap-2'>
      {data ? (
        <>
          <Link href='/create-post'>Create</Link>
          <button onClick={() => signOut()}>Signout</button>
        </>
      ) : (
        <>
          <Link href='/signIn'>Signin</Link>
        </>
      )}
    </nav>
  );
}
