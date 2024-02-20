import { router } from "./trpc";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "@vercel/postgres";
import { userRouter } from "./user/router";

export const db = drizzle(sql);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
