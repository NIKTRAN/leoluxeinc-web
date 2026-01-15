import { pgTable, integer, text, numeric, json, pgSequence, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const genderCategory = pgEnum("gender_category", ['men', 'women', 'unisex'])
export const productType = pgEnum("product_type", ['perfume', 'bag', 'watch', 'other'])

export const productIdSeq = pgSequence("product_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false })

export const product = pgTable("product", {
	id: integer().default(sql`nextval('product_id_seq'::regclass)`).notNull(),
	name: text().notNull(),
	price: numeric({ precision: 10, scale:  2 }).notNull(),
	type: productType().notNull(),
	genderCategory: genderCategory("gender_category").notNull(),
	images: json(),
});
