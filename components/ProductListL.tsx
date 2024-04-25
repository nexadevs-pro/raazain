import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardL from "./ProductCardL";


const RelatedList = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4  text-2xl font-semibold text-indigo-950">La-Roche Posay</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="grid grid-cols-1  sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
              <div className="p-5 mx-auto">
            <ProductCardL key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
    </>
  );
};

export default RelatedList;
