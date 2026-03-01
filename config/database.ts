import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const connect = async (): Promise<void> => {
    try {
        const database = await pool.connect();
        console.log("Connect Success!");
        database.release();
    } catch (error) {

        console.log("Connect Error!", error);
    }
}