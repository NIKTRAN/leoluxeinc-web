// components/product-card.tsx
import { Product } from "@/types/product";

import Image from "next/image";


interface ProductCardProps {
  product: Product;  
}


function normalizeImageSrc(src?: string) {
  if (!src) return "/images/placeholder.png"; // fallback in public/

  // If it's an absolute URL, return as-is
  if (/^https?:\/\//i.test(src)) return src;
  
  // Remove leading "public/" if user included it
  if (src.startsWith("public/")) src = src.slice("public/".length);
  
  // Ensure it starts with a slash
  if (!src.startsWith("/")) src = "/" + src;
  return src;
}



export default function ProductCard({ product }: ProductCardProps) {
  const src = normalizeImageSrc(product.image);

  return (
    <article className="bg-transparent  overflow-hidden ">
      <div className="relative w-full h-56 md:h-64 lg:h-72 bg-gray-100">
        <Image
          src={src}
          alt={product.title}
          fill
          draggable={false}
          className="object-cover select-none"
          // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-1">
        <h3 className="text-lg text-center font-semibold text-slate-900 dark:text-slate-100">
          {product.title}
        </h3>

        <p className="text-md text-center text-slate-600 dark:text-slate-300 ">
          ${product.price}
        </p>
{/* 
        {product.description && (
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {product.description}
          </p>
        )} */}
      </div>
    </article>
  );
}