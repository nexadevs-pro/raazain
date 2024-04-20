import { getProducts } from "@/lib/actions/actions";
import ProductCardOrdinary from "./ProductCardOrdinary";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


const ProductListOrdinary = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-7xl mx-auto px-10 pb-10 text-2xl font-semibold text-indigo-950">The Ordinary</h1>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl px-10 flex gap mx-auto">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="lg:basis-1/3 xl:basis-1/4  ">
              <div className="p-5">
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
