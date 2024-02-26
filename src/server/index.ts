import { router } from "./trpc";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// import { userRouter } from "./routes/user/router";
import { categoryRouter } from "./routes/categories";

export const client = postgres(
  "postgresql://transang:transang@localhost:5432/codergang_shop",
  { max: 1 }
);

export const db = drizzle(client, {
  logger: true,
});

export const appRouter = router({
  // user: userRouter,
  category: categoryRouter,
});

migrate(db, { migrationsFolder: "drizzle" });

export type AppRouter = typeof appRouter;
