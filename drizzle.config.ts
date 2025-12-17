import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './app/db/schema.ts',
    dialect: 'postgresql',
    breakpoints: false,

    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});