'use server';

import { db } from '@/prisma/client';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '../auth';
import { PostCreate, PostSchema } from './schemas';

export const savePost = async (data: PostCreate) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) throw new Error('Not logged in...');

  const postData = PostSchema.parse(data);
  await db.post.create({ data: { ...postData, authorId: session.user.id } });

  revalidatePath('/');
  redirect('/');
};
