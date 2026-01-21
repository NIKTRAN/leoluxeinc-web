

export const dynamic = "force-dynamic";

export const revalidate = 0;

import AdminControls from "./InsertProduct";
import EditProduct from "./EditProduct";


import Image from "next/image";
// import { insertProduct } from "./actions";
// import { updateProduct } from "./actions";
import { product } from "../drizzle/schema";
import { getDb } from "../drizzle/db";


export default async function Admin() {
  const db = getDb();
  const result = await db.select().from(product);

  return (

    //this div make stuff cetner verticaly
    <div className="relative pt-30 lg:pt-25">
      <div>



<div className="w-full flex justify-center mb-6">
  <h1 className="text-2xl ">This is the admin page</h1>
</div>


<div
  className="
    w-[98vw] max-w-6xl mx-auto
    bg-background border border-border rounded-xl
    shadow-xl
    max-h-[calc(100vh-280px)]
    overflow-y-auto overflow-x-auto
    mb-10
  "
>


          <table className="w-full border-collapse">
            <thead>





              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2 hidden sm:table-cell">Type</th>
                <th className="border px-4 py-2 hidden sm:table-cell">Gender</th>
                <th className="border px-4 py-2 hidden sm:table-cell">Images</th>
                <th className="border px-4 py-2">Edit</th>
              </tr>
            </thead>

            <tbody>

              {result.map((p) => (
                <tr key={p.id} className="text-center">
                  <td className="border px-1 py-2">{p.id}</td>
                  <td className="border px-4 py-2">{p.name}</td>
                  <td className="border px-4 py-2">${p.price}</td>


                  <td className="border px-4 py-2 hidden sm:table-cell">{p.type}</td>
                  <td className="border px-4 py-2 hidden sm:table-cell">{p.gender_category}</td>

                  <td className="border px-4 py-2 hidden sm:table-cell">
                    {p.images?.length ? (
                      <div className="flex gap-2 justify-center">
                        {p.images.map((img, i) => (
                          <Image
                            key={i}
                            src={img}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        ))}
                      </div>
                    ) : (
                      "No images"
                    )}
                  </td>

                  <td className="border px-1 py-2"> <EditProduct product={p} /> </td>

                </tr>
              )
              )
              }

            </tbody>
          </table>

        </div>


        <AdminControls />

      </div>


    </div>
  );
}





