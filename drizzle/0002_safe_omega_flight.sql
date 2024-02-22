CREATE TABLE IF NOT EXISTS "inventories" (
	"id" serial PRIMARY KEY NOT NULL,
	"stock" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_detail" (
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"thumbnail" text NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_detail" ADD CONSTRAINT "product_detail_user_id_products_id_fk" FOREIGN KEY ("user_id") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
