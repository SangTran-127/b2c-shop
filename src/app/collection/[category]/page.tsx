import { serverClient } from "@/app/_trpc/serverClient";
import CategoryCollection from "@/components/collection/CategoryCollection";
import React, { FC } from "react";

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams: {
    id: string;
    page?: string;
  };
};

const CategoryPage: FC<CategoryPageProps> = async ({
  searchParams: { id, page },
}) => {
  const productListByCategory =
    await serverClient.product.getAllProductByCategory({
      page: Number(page) || 1,
      limit: 4,
      categoryId: Number(id),
    });
  return (
    <div>
      <div>
        <CategoryCollection products={productListByCategory} />
      </div>
    </div>
  );
};

export default CategoryPage;
