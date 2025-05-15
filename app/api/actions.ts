'use server';

import { db } from '@/prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PostCreate, PostSchema } from './schemas';

export const savePost = async (data: PostCreate) => {
  const postData = PostSchema.parse(data);
  const post = await db.post.create({ data: { ...postData, authorId: 1 } });

  revalidatePath('/');
  redirect('/');
};
