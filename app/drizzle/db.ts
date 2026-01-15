import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema"; // relative to drizzle/db.ts

export function getDb() {
  const connectionString = process.env.HYPERDRIVE;



  if (!connectionString) {
    throw new Error("Missing database connection string");
  }

  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  return drizzle(pool, { schema });
}
