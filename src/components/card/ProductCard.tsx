import { Product } from "@/db/schema/products";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/ui-components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="">
      <CardHeader>
        {/* <CardTitle>{product.name}</CardTitle>
        <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="border">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={400}
          height={300}
        />
      </CardContent>
      <CardFooter>
        <div className="flex-col">
          <Link href={`/product/${product.slug}`}>
            <p className="font-bold">{product.name}</p>
          </Link>
          <p className="font-medium">${product.price}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
