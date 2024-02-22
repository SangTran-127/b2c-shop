import { router } from "./trpc";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

import { userRouter } from "./user/router";

const client = new Client({
  connectionString: "postgres://postgres:mysecretpassword@localhost:5432/shop",
});

export const db = drizzle(client);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
