import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardOtwo from "./ProductCardOtwo";
import ProductCardLa from "./ProductCardLa";
import Image from "next/image";


const ProductListLa = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-7xl mx-auto px-10 pb-10 text-2xl font-semibold text-indigo-950">La-Roche Posay</h1>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl px-10 flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="lg:basis-1/3 xl:basis-1/4  ">
              <div className="p-5">
            <ProductCardLa key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
          
    </>
  );
};

export default ProductListLa;
