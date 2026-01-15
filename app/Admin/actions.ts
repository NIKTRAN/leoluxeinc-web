"use server";

import { revalidatePath } from "next/cache";
import { getDb } from "../drizzle/db";
import { product } from "../drizzle/schema";

export async function insertProduct() {
  const db = getDb(); // env is injected automatically by OpenNext

  await db.insert(product).values({
    name: "name",
    price: "10.00",
    type: "other",
    gender_category: "unisex",
    images: null,
  });

  revalidatePath("/Admin");
}
