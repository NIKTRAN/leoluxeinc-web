CREATE TABLE "product" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"type" text NOT NULL,
	"gender_category" text NOT NULL,
	"images" json
);
