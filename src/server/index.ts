import { router } from "./trpc";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";
import { userRouter } from "./user/router";

export const db = drizzle(sql);

migrate(db, { migrationsFolder: "drizzle" });

// export async function seed() {
//   const insertedUsers: User[] = await db
//     .insert(users)
//     .values(newUsers)
//     .returning();
//   console.log(`Seeded ${insertedUsers.length} users`);

//   return {
//     insertedUsers,
//   };
// }

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
