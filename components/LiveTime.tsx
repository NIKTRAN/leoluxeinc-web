"use client";

import { useEffect, useState } from "react";

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

// import { product } from "app/db/schema.ts";



// const db = drizzle(process.env.DATABASE_URL!);



export default function LiveTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return <p>Connected at: {now.toString()}</p>;
}
