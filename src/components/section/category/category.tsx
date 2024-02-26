import CategoryCard from "@/components/card/CategoryCard";
import { Category } from "@/db/schema/category";
import React, { FC } from "react";

type CategorySectionProps = {
  data: Category[];
};

const CategorySection: FC<CategorySectionProps> = ({ data }) => {
  return (
    <section className="mt-6">
      <h1 className="font-medium text-center text-3xl">Shop By Categories</h1>
      <div className="w-screen overflow-hidden grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
        {data.map((d) => (
          <div key={d.id} className="">
            <CategoryCard category={d} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
