import { relations } from "drizzle-orm";
import { serial, text, pgTable } from "drizzle-orm/pg-core";
import { products } from "./products";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  image_url: text("image_url").default(
    "https://massdrop-s3.imgix.net/img_site/shop_by_category/AMPS-desktop.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=1&chromasub=444&q=70"
  ),
  name: text("name").notNull(),
});
export const categoryRelations = relations(categories, ({ many }) => ({
  // product_detail: one(productDetail),
  products: many(products),
}));

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
