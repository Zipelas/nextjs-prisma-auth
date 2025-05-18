'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { savePost } from '../api/actions';
import { PostCreate, PostSchema } from '../api/schemas';

export default function PostForm() {
  const form = useForm({
    resolver: zodResolver(PostSchema),
  });

  const handleSavePost = async (post: PostCreate) => {
    // todo: use RQ mutation for loading state
    await savePost(post);
    // todo: show toast to user...
  };

  return (
    <form
      className='grid gap-2 p-2'
      onSubmit={form.handleSubmit(handleSavePost)}>
      <h1 className='text-sky-500 text-xl'>Create new Post</h1>
      <input
        type='text'
        {...form.register('title')}
        placeholder='Title'
        className='p-1 border rounded border-slate-400'
      />
      <textarea
        {...form.register('content')}
        placeholder='Content'
        className='p-1 border rounded border-slate-400'
      />
      <button className='bg-sky-500 bg-hover-sky-700 p-1 rounded'>Save</button>
    </form>
  );
}
