import { getProducts } from "@/lib/actions/actions";
import ProductCardOrdinary from "./ProductCardOrdinary";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


const ProductListOrdinary = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4 pb-10 text-2xl font-semibold text-indigo-950">The Ordinary</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="grid grid-cols-1  sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
              <div className="p-5 mx-auto">
            <ProductCardOrdinary key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
    </>
  );
};

export default ProductListOrdinary;
