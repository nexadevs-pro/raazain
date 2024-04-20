
import BreadCrumbs from "@/components/BreadCrumbs"
import { CommenSection } from "@/components/CommentSection"
import Gallery from "@/components/Gallery"
import ProductCard from "@/components/ProductCard"
import { ProductDescription } from "@/components/ProductDescription"
import ProductInfo from "@/components/ProductInfo"
import RelatedCard from "@/components/RelatedCard"
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions"
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"

const ProductDetails = async ({ params }: { params: { productId: string }}) => {
  const productDetails = await getProductDetails(params.productId)
  const relatedProducts = await getRelatedProducts(params.productId)

  return (
    <>
    <section className='pl-10 pr-5 pt-8 max-w-7xl mx-auto'>
      <div>
        <BreadCrumbs productInfo={productDetails} />
      </div>
      <div className="flex flex-row justify-between ">
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-16 py-10 px-5 ">
      <Gallery productMedia={productDetails.media} />
      <ProductInfo productInfo={productDetails} />
      <div className='flex flex-col space-y-9 mt-10'>
      <p className="text-3xl font-bold text-indigo-950">Related Products</p>
        {relatedProducts?.map((product: ProductType) => (
          <RelatedCard key={product._id} product={product} />
        ))}
      </div>
    </div>
      </div>
      <ProductDescription productInfo={productDetails} />
      <CommenSection />
    </section>
    </>
  )
}

export const dynamic = "force-dynamic";

export default ProductDetails