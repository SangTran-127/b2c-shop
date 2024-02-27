import { serverClient } from "@/app/_trpc/serverClient";
import Link from "next/link";
import React from "react";

const FilterCollection = async () => {
  const categories = await serverClient.category.getAllCategories();
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={{
                pathname: `/collection/${category.slug}`,
                query: {
                  id: category.id,
                },
              }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCollection;
