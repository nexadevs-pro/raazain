import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <section className="my-10 max-w-[82rem] px-2 mx-auto">
        <div className="grid lg:grid-cols-7 xl:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 grid-cols-3  ">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id} className="flex flex-col justify-center items-center gap-y-2 mt-8 hover:scale-110">
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={100}
                height={100}
                className="rounded-full cursor-pointer"
              />
              <p className="text-muted-foreground text-xs">{collection.title}</p>
            </Link>
          ))}
        </div>
        </section>
  );
};

export default Collections;
