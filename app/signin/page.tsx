import GithubButton from './providers/github-button';

export default function SigninPage() {
  return (
    <main className='mt-20 grid place-content-center gap-4'>
      <h1 className='text-4xl text-center'>Login</h1>
      <GithubButton />
    </main>
  );
}
