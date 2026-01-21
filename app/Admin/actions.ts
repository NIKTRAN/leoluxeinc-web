"use server";

import { revalidatePath } from "next/cache";
import { getDb } from "../drizzle/db";
import { product } from "../drizzle/schema";
import { eq } from "drizzle-orm";

// --------------------------------------------------
// INSERT PRODUCT
// --------------------------------------------------
export async function insertProduct(formData: FormData) {
  const db = getDb();

  const name = formData.get("name") as string;

  // Extract raw values
  let dollars = String(formData.get("price_dollars") || "").trim();
  let cents = String(formData.get("price_cents") || "").trim();

  // Apply defaults if empty
  if (dollars === "") dollars = "1";
  if (cents === "") cents = "00";

  // Sanitize
  dollars = dollars.replace(/\D/g, "");
  cents = cents.replace(/\D/g, "");

  // Ensure cents is always 2 digits
  if (cents.length === 1) cents = cents + "0";
  if (cents.length === 0) cents = "00";


  const price = `${dollars}.${cents}`;

  // const stock = Number(formData.get("stock")); 


  // Extract raw value
  let stockRaw = String(formData.get("stock") || "").trim();

  // Default if empty
  if (stockRaw === "") stockRaw = "0";

  // Sanitize (remove anything not a digit)
  stockRaw = stockRaw.replace(/\D/g, "");

  // Convert to number
  const stock = Number(stockRaw);

// Validate
if (stock < 0) throw new Error("Stock cannot be negative");


  type ProductType = "perfume" | "bag" | "watch" | "other";
  type GenderCategory = "men" | "women" | "unisex";

  const type = formData.get("type") as ProductType;
  const gender = formData.get("gender_category") as GenderCategory;

  

  await db.insert(product).values({
    name,
    price,
    type,
    gender_category: gender,
    stock,
    images: null,
  });

  revalidatePath("/Admin");
}


// --------------------------------------------------
// DELETE PRODUCT
// --------------------------------------------------
export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get("id"));
  const db = getDb();

  await db.delete(product).where(eq(product.id, id));
  revalidatePath("/Admin");
}




// --------------------------------------------------
// UPDATE PRODUCT
// --------------------------------------------------
export async function updateProduct(formData: FormData) {
  const db = getDb();

  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;

  const dollars = String(formData.get("price_dollars") || "0").replace(/\D/g, "");
  const cents = String(formData.get("price_cents") || "0").replace(/\D/g, "");

  const price = `${dollars}.${cents}`;

  const stock = Number(formData.get("stock"));

  type ProductType = "perfume" | "bag" | "watch" | "other";
  type GenderCategory = "men" | "women" | "unisex";

  const type = formData.get("type") as ProductType;
  const gender = formData.get("gender_category") as GenderCategory;


  await db
    .update(product)
    .set({
      name,
      price,
      type,
      gender_category: gender,
      stock,
    })
    .where(eq(product.id, id));

  revalidatePath("/Admin");
}

