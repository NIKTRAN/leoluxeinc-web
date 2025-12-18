import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './app/drizzle/migration',
    schema: './app/drizzle/schema.ts',
    dialect: 'postgresql',
    breakpoints: false,
    

    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
});