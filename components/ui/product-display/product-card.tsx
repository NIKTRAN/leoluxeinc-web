// components/product-card.tsx

import Image from "next/image";

export default function ProductCard({ product }) {

  const src = "/images/products/562637555_17847749523580278_3951226208909332847_n.jpg";
  return (
    <article className="bg-transparent overflow-hidden">
      
      {/* Placeholder image area */}
      <div className="relative w-full h-56 md:h-64 lg:h-72 bg-gray-200 flex items-center justify-center">
        {/* <span className="text-gray-500 text-sm select-none">
          No image
        </span> */}
        <Image
          src={src}
          alt={product.name}
          fill
          draggable={false}
          className="object-cover select-none"
        />


      </div>

      <div className="p-1">
        <h3 className="text-lg text-center font-semibold text-slate-900 dark:text-slate-100">
          {product.name}
        </h3>

        <p className="text-md text-center text-slate-600 dark:text-slate-300">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
