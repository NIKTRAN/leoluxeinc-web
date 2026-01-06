

import Image from "next/image";

import { revalidatePath } from "next/cache";

import 'dotenv/config';


import { product } from "../drizzle/schema";

// import LiveTime from "../../components/LiveTime"

import { db } from "../drizzle/db";
// const db = drizzle(process.env.DATABASE_URL!);


export async function insertProduct() {
  "use server";

  try {
    await db.insert(product).values({
      name: "name",
      price: "10.00",
      type: "other",
      gender_category: "unisex",
      images: null
    });

    revalidatePath("/Admin");


  } catch (err) {
    console.error("POSTGRES ERROR:", err);
    throw err;
  }
}



export default async function Admin() {

  const result = await db.select().from(product)






  return (
    // <div className="relative pt-10 lg:pt-25">
    <div>
      <div className="px-[4%] w-full h-full box-border">

      

      <div className="flex flex-col items-center justify-center space-y-8">
        <h1>This is the admin page</h1>

        <br></br>




        <table className="min-w-full border border-gray-300">

          <thead>
            <tr>
              {Object.keys(result[0]).map((col) => (
                <th key={col} className="border px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {result.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="border px-4 py-2">{p.id}</td>
                <td className="border px-4 py-2">{p.name}</td>
                <td className="border px-4 py-2">${p.price}</td>
                <td className="border px-4 py-2">{p.type}</td>
                <td className="border px-4 py-2">{p.gender_category}</td>

                <td className="border px-4 py-2">
                  {p.images?.length ? (
                    <div className="flex gap-2 justify-center">
                      {
                      p.images.map((img, i) => (
                        <Image
                          key={i}
                          src={img}
                          alt={p.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ))
                      }
                    </div>
                  ) : (
                    "No images"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>






    <form action={insertProduct}>
      <button
        className="
          px-12 py-4 rounded-full font-bold tracking-widest uppercase
          bg-transparent hover:bg-foreground hover:text-background
          shadow-[inset_0_0_0_2px_#616467]
          transition duration-200
        "
        type="submit"
      >
        INSERT
      </button>
    </form>



        
      </div>

    </div>
    </div>
  );
}
