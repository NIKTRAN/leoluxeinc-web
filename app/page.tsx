import Image from "next/image";


import ProductList from "@/components/ui/product-display/product-list";
import { Product } from "@/types/product";
import { getProducts } from "@/lib/api";

// const products: Product[] = [
//   { id: 1, title: "Laptop", price: 999, description: "High performance laptop" },
//   { id: 2, title: "Headphones", price: 199, description: "Noise-cancelling headphones" },
//   { id: 3, title: "Smartphone", price: 799, description: "Latest model smartphone" },
  
// ];





export default async function Home() {


  const products: Product[] = await getProducts();
  return (

    <div>

      <div className="relative h-[70vh] lg:h-[90vh] w-screen overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/stock/leoluxebg.png"
          // width={500}
          // height={500}
          alt="Background"
          fill 
          draggable={false}
          // onDragStart={(e) => e.preventDefault()}
          
          className="
            object-cover
            invert dark:invert-0
            -z-10
          "

          priority   
        />

        {/* Logo on top */}
        <Image
          src="/images/brand-assets/leoluxeinc-logo.svg"
          width={200}
          height={200}
          alt="LEO LUXE INC logo"
          // draggable={false}
          // onDragStart={(e) => e.preventDefault()}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-10
            h-[200px] lg:h-[250px]
            w-auto
            invert dark:invert-0
            pointerEvents: none
          "
        />
        <span>
          
        </span>
      </div>



      {/* <div className="h-[100px] w-[100vw] overflow-hidden"> */}

        {/* <Image
          src="/images/stock/leoluxebg.png"
          width={500}
          height={500}
          alt="Picture"
          className="
          h-full 
          w-full 
          object-cover
          "
        /> */}
      {/* </div> */}



      <div className="relative h-[70vh] lg:h-[90vh] w-screen overflow-hidden">
        {/* Background image */}        
        
        <Image

          src="/images/stock/leoluxebg.png"
          // width={500}
          // height={500}
          alt="Background"
          fill 

          
          className="
            object-cover
            invert dark:invert-0
            -z-10
          "
          priority   
        />

      
      
        {/* Content wrapper with gutter */}
        <div className="px-[2%] w-full h-full box-border">
          <h1>All Products 🛍️</h1>
          <ProductList products={products} />
        </div>



      
      </div>


      
    </div>


  );
}
