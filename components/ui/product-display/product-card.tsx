// components/product-card.tsx
import { Product } from "@/types/product";


interface ProductCardProps {
  product: Product;  
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}