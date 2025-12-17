import { pgTable, integer, text, numeric, json, pgEnum } from "drizzle-orm/pg-core";

// 1. Define enums
export const productTypeEnum = pgEnum("product_type", [
  "perfume",
  "bag",
  "watch",
  "other",
]);

export const genderCategoryEnum = pgEnum("gender_category", [
  "men",
  "women",
  "unisex",
]);

// 2. Use enums in your table
export const product = pgTable("product", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  type: productTypeEnum("type").notNull(),
  gender_category: genderCategoryEnum("gender_category").notNull(),
  images: json("images").$type<string[]>(),
});
