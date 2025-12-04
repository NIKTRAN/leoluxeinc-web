// components/product-list.tsx
import { Product } from "@/types/product";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];   // plural
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="w-full box-border">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}