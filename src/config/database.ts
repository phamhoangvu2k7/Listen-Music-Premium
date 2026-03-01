import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../db/schema/topic"; 
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
});

export const db = drizzle(pool, { schema }); 

export const connect = async () => {
    try {
        await pool.connect();
        console.log("Connect Success!");
    } catch (error) {
        console.log("Connect Error!", error);
    }
}