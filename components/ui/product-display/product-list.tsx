// components/product-list.tsx
import { Product } from "@/types/product";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];   // plural
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />  
      ))}
    </div>
  );
}