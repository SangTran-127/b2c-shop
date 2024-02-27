import { categories } from "@/db/schema/category";
import { products } from "@/db/schema/products";
import { db } from "@/server";
import { publicProcedure, router } from "@/server/trpc";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const productRouter = router({
  getAllProduct: publicProcedure
    .input(z.object({ page: z.number().min(1), limit: z.number().min(1) }))
    .query(async ({ input }) => {
      const offset = (input.page - 1) * input.limit;
      const productList = await db
        .select()
        .from(products)
        .limit(input.limit)
        .offset(offset);
      return productList;
    }),
  getAllProductByCategory: publicProcedure
    .input(
      z.object({
        page: z.number().min(1),
        limit: z.number().min(1),
        categoryId: z.number(),
      })
    )
    .query(async ({ input }) => {
      const offset = (input.page - 1) * input.limit;
      return await db
        .select()
        .from(products)
        .limit(input.limit)
        .offset(offset)
        .where(eq(products.category_id, input.categoryId));
    }),
});
