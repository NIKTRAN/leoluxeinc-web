"use server";

import { revalidatePath } from "next/cache";
import { getDb } from "../drizzle/db"; // adjust path if needed
import { product } from "../drizzle/schema";

export async function insertProduct() {
  try {
    const db = getDb();

    await db.insert(product).values({
      name: "name",
      price: "10.00",
      type: "other",
      gender_category: "unisex",
      images: null,
    });

    revalidatePath("/Admin");
  } catch (err) {
    console.error("POSTGRES ERROR:", err);
    throw err;
  }
}







// export async function insertProduct() {
//   try {
//     console.log("DEBUG: insertProduct called");
//     return;
//   } catch (err) {
//     console.error("DEBUG ERROR:", err);
//     throw err;
//   }
// }
