import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCard from "./ProductCard";

const ProductPageRList = async() => {
    const products = await getProducts();
  return (
    <>
    <h1 className="max-w-7xl mx-auto   text-2xl font-semibold text-indigo-950">Related Products</h1>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl  flex  mx-auto ">
            <CarouselContent className="flex mx-auto ml-10">
          {products.map((product: ProductType) => (
            <CarouselItem   className=" basis-1/2 md:basis-1/3 xl:basis-1/4 -ml-16   flex-wrap">
              <div className="p-5">
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