import { relations } from "drizzle-orm";
import { serial, text, pgTable, numeric, integer } from "drizzle-orm/pg-core";
import { categories } from "./category";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  thumbnail: text("thumbnail").notNull(),
  price: numeric("price").notNull(),
  category_id: integer("category_id")
    .references(() => categories.id)
    .notNull(),
});

export const productRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.category_id],
    references: [categories.id],
  }),
}));

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
