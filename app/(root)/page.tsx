import { CallToAction } from "@/components/CallToAction";
import Collections from "@/components/Collections";
import { Hero } from "@/components/Hero";
import { LimitedOffer } from "@/components/LimitedOffer";
import { MarqueeComponent } from "@/components/Marquee";
import NewsLetter from "@/components/NewsLetter";
import ProductList from "@/components/ProductList";
import ProductListCosrx from "@/components/ProductListCosrx";
import ProductListLa from "@/components/ProductListLa";
import ProductListOrdinary from "@/components/ProductListOrdinary";
import ProductListOtwo from "@/components/ProductListOtwo";
import ProductListSpecial from "@/components/ProductListSpecial";
import RelatedList from "@/components/RelatedList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <NewsLetter />
      <Hero />
      <MarqueeComponent  />
      <Collections />
      <LimitedOffer />
      <ProductListSpecial />
      <RelatedList />
      {/* <ProductList /> */}
      <ProductListLa />
      <ProductListOtwo />
      <ProductListCosrx />
      <ProductListOrdinary />
      <CallToAction />
    </>
  );
}

export const dynamic = "force-dynamic";

