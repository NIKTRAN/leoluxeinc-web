CREATE TYPE "public"."gender_category" AS ENUM('men', 'women', 'unisex');
CREATE TYPE "public"."product_type" AS ENUM('perfume', 'bag', 'watch', 'other');
CREATE TABLE "product" (
	"id" integer PRIMARY KEY DEFAULT nextval('product_id_seq') NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"type" "product_type" NOT NULL,
	"gender_category" "gender_category" NOT NULL,
	"images" json
);
