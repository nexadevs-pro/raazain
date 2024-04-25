import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCard from "./ProductCard";

const ProductPageRList = async() => {
    const products = await getProducts();
  return (
    <>
    <h1 className="max-w-[82rem] mx-auto   text-2xl font-semibold text-indigo-950">Related Products</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="grid grid-cols-1  sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
              <div className="p-5 mx-auto">
            <ProductCard key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
    </>
  )
}

export default ProductPageRList