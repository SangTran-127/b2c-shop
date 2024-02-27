ALTER TABLE "categories" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "slug" text NOT NULL;