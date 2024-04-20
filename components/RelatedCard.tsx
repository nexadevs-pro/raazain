"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Card } from "./ui/card";
interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const RelatedCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  
  return (
    <section>
        <Link href={`/products/${product._id}`}>
        <div key={product.title} className='flex flex-row border-b space-x-2'>
                        <Image src={product.media[0]} alt={product.title} height={80} width={80} className='w-[80px] h-[80px]'/>
                        <div className='flex flex-col justify-center gap-x-2'>
                            <h1 className='text-sm text-muted-foreground'>{product.title}</h1>
                            <p className='text-primary'>Dhs. {product.price}</p>
                        </div>
                    </div>
                    </Link>
    </section>
  );
};

export default RelatedCard;
