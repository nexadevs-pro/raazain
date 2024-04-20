"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";
import { Button } from "./ui/button";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>
      <div className='space-y-2 text-sm pt-2 mt-2'>
          <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>AVAILABILITY</span> : ✅ In Stock</p>
          <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>PRODUCT TYPE</span> : {productInfo.category}</p>
          <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>VENDOR</span> : RAAZAIN</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className='text-gray-700 line-clamp-3 mt-2'>{productInfo.description}</p>
        <p className="text-2xl font-semibold text-primary">Dhs. {productInfo.price}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-primary text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-primary text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-sm">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="text-primary cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="text-primary cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <Button
        className=" py-3 mt-6 rounded-lg hover:bg-primary hover:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductInfo;
