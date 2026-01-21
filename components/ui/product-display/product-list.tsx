// components/product-list.tsx
import ProductCard from "./product-card";

export default function ProductList({ products }) {
  return (
    <div className="w-full box-border">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <br />
      <br />
      <br />
    </div>
    
  );
}
