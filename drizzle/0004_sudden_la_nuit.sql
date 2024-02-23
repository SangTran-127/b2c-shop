ALTER TABLE "categories" ADD CONSTRAINT "categories_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_name_unique" UNIQUE("name");