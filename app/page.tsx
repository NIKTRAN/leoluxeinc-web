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
            -z-10

            invert-95 dark:invert-0
          "

          priority   
        />




        {/* Centered stack: logo + heading */}

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/images/brand-assets/leoluxeinc-logo.svg"
              width={200}
              height={200}
              alt="LEO LUXE INC logo"
              className="h-[200px] lg:h-[250px] w-auto invert dark:invert-1"
              draggable={false}
            />

            <h1 className="text-3xl font-sans text-center select-none invert-0 dark:invert-1">
              Deals on luxury items
            </h1>
          </div>
        </div>


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



      <div className="relative h-[70vh] lg:h-[90vh] w-screen">
        {/* Background image */}        
        
        {/* <Image

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
        /> */}

      
      
        {/* Content wrapper with gutter */}
        <br></br>
        <div className="px-[4%] w-full h-full box-border">
          <h1 className="text-lg font-semibold">All Products </h1>

          <ProductList products={products} />
        </div>



      
      </div>


      
    </div>


  );
}
