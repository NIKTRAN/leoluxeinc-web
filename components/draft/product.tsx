export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;       // optional now, useful later
  category?: string;    
  
}