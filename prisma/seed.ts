import { db } from './client';

async function main() {
  await db.user.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'Zipelas',
      email: 'mcshaffa@gmail.com',
      emailVerified: false,
      updatedAt: new Date(),
      posts: {
        create: [
          {
            title: 'GRRRR',
            content: 'Va fan fungerar det inte för :-(',
          },
          {
            title: 'Zipelas 2a post',
            content: 'This is the content of the second post',
          },
          {
            title: 'Zipelas 3e post',
            content: 'This is the content of the third post',
          },
        ],
      },
    },
  });

  await db.user.upsert({
    where: { id: '2' },
    update: {},
    create: {
      id: '2',
      name: 'Putte',
      email: 'putte@example.com',
      emailVerified: false,
      updatedAt: new Date(),
      posts: {
        create: [
          {
            title: 'Patas 1a post',
            content: 'This is the content of the first post',
          },
          {
            title: 'Patas 2a post',
            content: 'This is the content of the second post',
          },
          {
            title: 'Patas 3e post',
            content: 'This is the content of the third post',
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
