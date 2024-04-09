


import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center mt-12">
        <Image
          src={"5421740_2840522.svg"}
          alt="kuch bhi"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">Sorry we are under maintenance</h1>
        <p className="text-gray-600">
          Sorry for the inconvenience but performing some maintenance at the
          moment.
        </p>
        <p className="text-gray-600">
          If you need to reach us you can always contact on{" "}
          <span className="text-primary font-semibold">
            raazain.store@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
}
