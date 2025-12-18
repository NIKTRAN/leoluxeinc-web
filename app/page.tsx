import Image from "next/image";


import 'dotenv/config';

import { product } from "./drizzle/schema";

import { db } from "./drizzle/db"

import LiveTime from "../components/LiveTime";


// const db = drizzle(process.env.DATABASE_URL!);


// import { sql } from "drizzle-orm";

// type ProductRow = {
//   id: number;
//   name: string;
//   price: string; // numeric comes back as string from pg driver
//   type: string;
//   gender_category: string;
// };




export default async function Home() {

  
  // const resultNow = await db.execute("SELECT NOW()");

  const result = await db.select().from(product)


  // fetch all products
  // const rows = (await db.select().from(product).execute()) as ProductRow[];
  
  return (

    // <div className="relative pt-10 lg:pt-25">
    <div>

      <div className="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden">
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
              className="h-[220px] lg:h-[350px] w-auto invert dark:invert-1"
              draggable={false}
            />

            <h1 className="text-2xl lg:text-5xl font-sans text-center select-none invert-0 dark:invert-1">
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
          <h1 className="text-2xl text-center font-semibold">All Products </h1>
          <br></br>



          <h1>Neon + Drizzle Connection Test</h1>

          <LiveTime />
          {/* <p>Connected at: {resultNow.rows[0].now.toString()}</p> */}


          <br></br>









          {/* <h1>Products</h1>

          <br></br> */}
        
        
         {result.map((p) => (
        <div key={p.id}>
          <p>Name: {p.name}</p>
          <p>Price: {p.price}</p>
          <p>Type: {p.type}</p>
          <p>Gender: {p.gender_category}</p>

          {/* {p.images?.length > 0 && (
            <div>
              {p.images.map((Image, i) => (
                <Image
                key={i}
                src={"null"}
                alt={p.name}
                width={80}
                height={80}
                className="object-cover rounded"
              />
              ))}
            </div>
          )} */}
          <br></br>
          
        </div>
      ))}
        
        
        
        
        


        
        </div>

      </div>
      
    </div>

  );
}
