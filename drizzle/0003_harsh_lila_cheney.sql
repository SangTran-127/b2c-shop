CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" text DEFAULT 'https://massdrop-s3.imgix.net/img_site/shop_by_category/AMPS-desktop.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=1&chromasub=444&q=70',
	"name" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "inventories";--> statement-breakpoint
DROP TABLE "product_detail";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "category_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
