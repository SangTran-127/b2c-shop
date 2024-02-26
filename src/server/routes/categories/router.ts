import { NewCategory, categories } from "@/db/schema/category";
import { db } from "@/server";
import { publicProcedure, router } from "@/server/trpc";

export const categoryRouter = router({
  getAllCategories: publicProcedure.query(async () => {
    const categoriesList = await db.select().from(categories);
    return categoriesList;
  }),
});
