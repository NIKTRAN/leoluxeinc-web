CREATE TYPE "public"."gender_category" AS ENUM('men', 'women', 'unisex');
CREATE TYPE "public"."product_type" AS ENUM('perfume', 'bag', 'watch', 'other');
ALTER TABLE "product" ALTER COLUMN "type" SET DATA TYPE "public"."product_type" USING "type"::"public"."product_type";
ALTER TABLE "product" ALTER COLUMN "gender_category" SET DATA TYPE "public"."gender_category" USING "gender_category"::"public"."gender_category";