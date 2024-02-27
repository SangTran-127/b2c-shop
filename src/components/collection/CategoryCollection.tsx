"use client";
import { Product } from "@/db/schema/products";
import React, { FC } from "react";
import ProductCard from "../card/ProductCard";

type CategoryCollectionProps = {
  products: Product[];
};

const CategoryCollection: FC<CategoryCollectionProps> = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CategoryCollection;
