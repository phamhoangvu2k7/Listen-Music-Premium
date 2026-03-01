import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  // Đường dẫn tới thư mục chứa các file schema của bạn
  schema: "./src/db/schema/*", 
  
  // Thư mục chứa các file migration (nếu dùng sau này)
  out: "./drizzle",
  
  // Loại database đang dùng
  dialect: "postgresql",
  
  // Lấy đường dẫn kết nối từ file .env
  dbCredentials: {
    url: process.env.DATABASE_URL!, 
  },
});