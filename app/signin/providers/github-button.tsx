'use client';

import { signIn } from '@/app/auth-client';

export default function GithubButton() {
  return (
    <button
      className='cursor-pointer bg-sky-500 p-3 rounded text-lg'
      onClick={() => signIn.social({ provider: 'github' })}>
      Sign in with GitHub
    </button>
  );
}
