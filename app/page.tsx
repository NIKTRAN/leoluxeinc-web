export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import Image from "next/image";

import ProductList from "@/components/ui/product-display/product-list";
import { getDb } from "./drizzle/db";
import { product } from "./drizzle/schema";

export default async function Home() {
  const db = getDb();
  const products = await db.select().from(product);

  return (
    <div className="relative pt-10 lg:pt-25">

      <div className="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden">
        <Image
          src="/images/stock/leoluxebg.png"
          alt="Background"
          fill
          draggable={false}
          className="object-cover -z-10 invert-95 dark:invert-0"
          priority
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/brand-assets/leoluxeinc-logo.svg"
              width={200}
              height={200}
              alt="LEO LUXE INC logo"
              className="h-50 lg:h-87.5 w-auto invert dark:invert-1"
              draggable={false}
            />

            <h1 className="text-3xl font-sans text-center select-none invert-0 dark:invert-1">
              Deals on luxury items
            </h1>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] lg:h-[90vh] w-screen">
        <br />

        <div className="px-[4%] w-full h-full box-border">
          <br />
          <h1 className="text-2xl text-center font-semibold">All Products</h1>
          <br />

          <ProductList products={products} />

          <br />

          <br />
        </div>
      </div>


      


    </div>
  );
}
