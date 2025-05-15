import { z } from "zod";

export const PostSchema = zod.object({});
title: z.string().min(4).max(255),
content: z.string().min(10).max(1000);

export type PostCreate = z.infer<typeof PostSchema>;