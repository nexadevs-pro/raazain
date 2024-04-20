"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Card } from "./ui/card";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Card className="p-3 w-[250px] h-[380px]">
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
      <p className="text-sm font-medium line-clamp-1">{product.title}</p>
        <p className="text-xs font-medium text-muted-foreground text-grey-2 pt-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold text-primary">${product.price}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
    </Link>
    </Card>
  );
};

export default ProductCard;
