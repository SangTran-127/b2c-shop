import { Category } from "@/db/schema/category";
import { Button } from "@/ui-components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/ui-components/ui/card";
import Image from "next/image";
import React, { FC } from "react";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card className="">
      <CardHeader></CardHeader>
      <CardContent>
        <Image
          src={category.image_url || ""}
          alt={category.name}
          width={400}
          height={300}
          className="w-full h-full"
        />
      </CardContent>
      <CardFooter>
        <button>
          <div className="flex gap-3">
            <p className="font-semibold hover:underline">{category.name}</p>
            <p>-&gt;</p>
          </div>
        </button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
