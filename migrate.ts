import { migrate } from "drizzle-orm/postgres-js/migrator";
import "dotenv/config";
import { db, client } from "./src/server/index";
import { faker } from "@faker-js/faker";
import { Category, NewCategory, categories } from "@/db/schema/category";
import { Product, products } from "@/db/schema/products";
import slugify from "slugify";
async function appMigrate() {
  // await generateCategories();
  //
  // await db.delete(products);
  await generateProducts();

  // await migrate(db, { migrationsFolder: "./drizzle" });
  // await client.end();
  // const categoryList = await db.select().from(categories);
  // console.log(categoryList);
}

async function generateCategories() {
  const categoriesData: NewCategory[] = [
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/keycadets-gravity-deskmat/FP/lS1hxpCeRNWNng49PU4s_gravity%20oreo.902.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Deskmat",
      slug: "deskmat",
    },
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/drop-invyr-holy-panda-mechanical-switches/FP/UopfIG4XR4CTaEk5NkAM_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Switch",
      slug: "switch",
    },
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/fifth-sun-star-wars-t-shirts/FP/XXzEAlRHGTpUx1AA0zKg_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Shirts",
      slug: "shirts",
    },
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/drop-dcl-shadow-keycap-set/FP/YMB5eJakRHsA8y0WXlPQ_PC4.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Mechanical Keyboard",
      slug: "mechanical-keyboard",
    },
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/moondrop-axis-switches/FP/HooWceTpuiCFv04IM75A_1135-copy-pc.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Keycaps",
      slug: "keycaps",
    },
    {
      image_url:
        "https://massdrop-s3.imgix.net/product-images/keebmonkey-display-bar/FP/wOrynDsXQeyf8EEjaMEF_pc2.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      name: "Stickers",
      slug: "stickers",
    },
  ];
  await db.insert(categories).values(categoriesData);
}

async function generateProducts() {
  const categoriesList = await db.select().from(categories);
  const generatedProducts = categoriesList.flatMap((category) => {
    return Array.from({ length: 50 }).map(() => {
      const name =
        faker.commerce.productName() + ` ${Math.floor(Math.random() * 100)}`;
      return {
        name, // Category-specific name
        thumbnail: faker.image.url({ width: 400, height: 300 }), // Random image URL
        price: faker.commerce.price({ min: 20, max: 100 }), // Price between $20 and $100
        category_id: category.id, // Reference to the appropriate category
        slug: slugify(name.toLowerCase()),
      } as Product;
    });
  });
  await db.insert(products).values(generatedProducts);
}

appMigrate();
