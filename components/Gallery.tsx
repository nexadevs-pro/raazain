"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="product"
        className="w-96 h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
      <Carousel className="w-full max-w-[250px] mx-auto">
      <CarouselContent className="-ml-1">
        {productMedia.map((image, index) => (
          <CarouselItem className="basis-1/4">
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="product"
            className={`w-16 h-16 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-primary" : ""}`}
            onClick={() => setMainImage(image)}
          />
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
                    <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
