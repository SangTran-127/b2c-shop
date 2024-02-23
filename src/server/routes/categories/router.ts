import { Category, NewCategory, categories } from "@/db/schema/category";
import { db } from "@/server";
import { publicProcedure, router } from "@/server/trpc";

const datas: Array<NewCategory> = [
  {
    name: "Mechanical Keyboard",
    image_url: "https://drop.com/buy/drop-dcl-shadow-keycap-set",
  },
  {
    name: "Deskmat",
    image_url:
      "https://massdrop-s3.imgix.net/product-images/keycadets-gravity-deskmat/FP/lS1hxpCeRNWNng49PU4s_gravity%20oreo.902.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
  },
  {
    name: "Switch",
    image_url:
      "https://massdrop-s3.imgix.net/product-images/drop-invyr-holy-panda-mechanical-switches/FP/UopfIG4XR4CTaEk5NkAM_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
  },
  {
    name: "Keycaps",
    image_url: "https://drop.com/buy/drop-biip-mt3-extended-custom-keycap-set",
  },
  {
    name: "Shirts",
    image_url:
      "https://massdrop-s3.imgix.net/product-images/fifth-sun-star-wars-t-shirts/FP/XXzEAlRHGTpUx1AA0zKg_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
  },
];

export const categoryRouter = router({
  getAllCategories: publicProcedure.query(async () => {
    const categoriesList = await db.select().from(categories);
    return categoriesList;
  }),
});
