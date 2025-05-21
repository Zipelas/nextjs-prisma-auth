'use server';

import { db } from '@/prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PostCreate, PostSchema } from './schemas';

export const savePost = async (data: PostCreate) => {
  // todo: check if user has access to this endpoint
  const postData = PostSchema.parse(data);
  await db.post.create({ data: { ...postData, authorId: "1" } });
  // todo: get authorId from logged in user...

  revalidatePath('/');
  redirect('/');
};
