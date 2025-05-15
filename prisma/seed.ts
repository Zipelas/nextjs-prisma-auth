import { db } from "./client";

async function main() {
  await db.user.upsert({
    "where": { id: 1 },
    "update": {}
    "create": {
      name: "Zipelas",
      post: { "create": [
        title: "First Post",
        content: "This is the content of the first post",
        title: "2nd Post",
        content: "This is the content of the first post",
        title: "3rd Post",
        content: "This is the content of the first post",
      ] },
    }
  )};

  await db.user.upsert({
    "where": { id: 2 },
    "update": {}
    "create": {
      name: "Putte",
      post: { "create": [
        title: "First Post",
        content: "This is the content of the first post",
        title: "2nd Post",
        content: "This is the content of the first post",
        title: "3rd Post",
        content: "This is the content of the first post",
      ] },
    }
  )};



main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
