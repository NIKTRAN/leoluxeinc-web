
CREATE TABLE "product" (
	"id" integer PRIMARY KEY DEFAULT nextval('product_id_seq') NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"type" "product_type" NOT NULL,
	"gender_category" "gender_category" NOT NULL,
	"images" json
);
