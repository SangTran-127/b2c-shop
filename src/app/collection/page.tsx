import React, { FC } from "react";
import { serverClient } from "../_trpc/serverClient";
import { parseObjectNumber } from "@/lib/utils";
import CategoryCollection from "../../components/collection/CategoryCollection";

type CollectionPageProps = {
  params: { slug: string };
  searchParams: {
    page?: string;
  };
};

const CollectionPage: FC<CollectionPageProps> = async ({ searchParams }) => {
  const queryParams = {
    page: Number(searchParams.page) || 1,
  };
  const products = await serverClient.product.getAllProduct({
    ...queryParams,
    limit: 50,
  });

  return (
    <div>
      <div>
        <CategoryCollection products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
