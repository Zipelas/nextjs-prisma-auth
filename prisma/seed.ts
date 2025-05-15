import { db } from "./client";

async function main() {

await db.post.upsert({
  "where": { id: 1 },
  "create": {
    title: "First Post",
    content: "This is the content of the first post",
    author:  "Zipelas",
  "update": {},
}),

await db.post.upsert({
  "where": { id: 2 },
  "create": {
    title: "Id 2",
    content: "This is the content of the second post",
    author:  "Mutti",
  },
  "update": {},
}),

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
