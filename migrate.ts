import { migrate } from "drizzle-orm/postgres-js/migrator";
import "dotenv/config";
import { db, client } from "./src/server/index";

async function appMigrate() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await client.end();
}

appMigrate();
