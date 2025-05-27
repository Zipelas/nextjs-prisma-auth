# NextJS & Prisma

## Lansering

1. Bygg appen med `npm run build` och kontrollera att bygget ser bra ut.
2. Kontrollera att ni kör `prisma generate` i postinstall.
3. Publicera sidan på github.
4. Lansera sidan på vercel, lägg till miljövariablerna.
5. Skapa en ny GitHub OAuth app och ändra miljövariablerna, använd den nya URL'en.

## Installation

Kör som vanligt med `npm run dev`. Se [package.json](./package.json) för andra skript att köra.

## Prisma och SQL

Här är koden vi skrev gällande Prisma och dess motsvarighet i SQL.

### Hämta data ur databasen

Du kan läsa mer om hur [uthämtningsfrågor](https://www.prisma.io/docs/orm/prisma-client/queries/crud#read) skrivs på Prisma's hemsida.

```typescript
const posts = await db.post.findMany({
  where: { authorId: { in: [1, 2] } },
  include: {
    author: {
      select: { name: true },
    },
  },
});
```

```sql
SELECT p.*, a.name
FROM post p
JOIN author a ON p.authorId = a.id
WHERE p.authorId IN (1, 2);
```

### Definiera databasens tabeller

Här hittar du dokumentationen över [hur modeller skrivs](https://www.prisma.io/docs/orm/prisma-schema/data-model/models) i Prisma's schema.

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())

  posts Post[]
}
```

```sql
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

Relationer i Prisma skrivs med @relation och [här kan det vara bra att läsa](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations) lite om de olika typer av relationer som finns, en-till-många, många-till-många, etc.

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  createdAt DateTime @default(now())
  authorId  Int

  author User @relation(fields: [authorId], references: [id])
}
```

```sql
CREATE TABLE Post (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  authorId INT,
  FOREIGN KEY (authorId) REFERENCES User(id) ON DELETE CASCADE
);
```

### Insättning av ny data i databasen

[Här kan du läsa](https://www.prisma.io/docs/orm/prisma-client/queries/crud#create) om hur ny data skapas i Prisma.

```typescript
await db.post.create({ data: { ...postData, authorId: 1 } });
```

```sql
INSERT INTO post (title, content, authorId)
VALUES ('En titel', 'En lång text...', 1);
```

### Uppdatering och borttagning

Vi skrev ingenting i dagens genomgång gällande borttagning eller uppdatering men du hittar dokumentationen [här](https://www.prisma.io/docs/orm/prisma-client/queries/crud).
