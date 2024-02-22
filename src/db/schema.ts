import { relations } from "drizzle-orm";
import {
  serial,
  text,
  timestamp,
  pgTable,
  numeric,
  integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  image: text("image").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  thumbnail: text("thumbnail").notNull(),
  price: numeric("price").notNull(),
});

export const productDetail = pgTable("product_detail", {
  product_id: integer("user_id").references(() => products.id),
});

export const productRelations = relations(products, ({ one }) => ({
  productDetail: one(productDetail),
}));

export const inventories = pgTable("inventories", {
  id: serial("id").primaryKey(),
  stock: numeric("stock").notNull(),
});

export type Product = typeof products.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
