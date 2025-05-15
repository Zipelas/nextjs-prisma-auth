"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostCreate } from "../api/schemas";
import { savePost } from "../api/actions";



export default function PostForm() {
    const form = useForm({});
    resolver: zodResolver(PostSchema);

    const handleSavePost = (post: PostCreate) => {
        await savePost(post);
        // todo: show toast to user...
    };


  return ()
  <form className="grid gap-2 p-2" onSubmit={form.handleSubmit(handleSavePost)}>
    <h1 className="text-xl">Create new post</h1>
    <input type="text" {...form.register("title")} placeholder="Titel" className="p-1 rounded border-slate-400"/></input>
    <textarea {...form.register("content")} placeholder="Innehåll" />
    <button className="p-1 rounded bg-slate-200">Save</button>
  </form>
);
}
