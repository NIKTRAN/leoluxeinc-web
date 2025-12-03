// lib/api.ts
import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  // Static for now
  return [
    { id: 1, title: "Laptop", price: 999, description: "High performance laptop", image: "public/images/products/562637555_17847749523580278_3951226208909332847_n.jpg" },
    { id: 2, title: "Headphones", price: 199, description: "Noise-cancelling headphones",  image: "public/images/products/562637555_17847749523580278_3951226208909332847_n.jpg" },
    { id: 3, title: "Smartphone", price: 799, description: "Latest model smartphone", image: "public/images/products/562637555_17847749523580278_3951226208909332847_n.jpg" },
    // { id: 3, title: "Smartphone", price: 799, description: "Latest model smartphone" },
    // { id: 3, title: "Smartphone", price: 799, description: "Latest model smartphone" },
    // { id: 3, title: "Smartphone", price: 799, description: "Latest model smartphone" },
  ];

}
