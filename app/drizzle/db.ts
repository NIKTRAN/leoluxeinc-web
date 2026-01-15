import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

console.log("Worker started — drizzle/db.ts loaded");

export function getDb() {
  const url = process.env.DATABASE_URL;

  if (!url) {
    throw new Error("Missing DATABASE_URL");
  }

  const sql = neon(url);
  return drizzle(sql, { schema });
}
