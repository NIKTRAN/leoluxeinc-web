import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../drizzle/schema";

export function getDb() {
  const connectionString =
    process.env.HYPERDRIVE_CONNECTION_STRING || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing database connection string");
  }

  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  return drizzle(pool, { schema });
}
