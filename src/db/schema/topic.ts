import { pgTable, serial, varchar, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const Topic = pgTable("topics", {
  // serial tương đương với id tự tăng
  id: serial("id").primaryKey(),
  
  // varchar giới hạn độ dài, text cho nội dung dài
  title: varchar("title", { length: 255 }).notNull(),
  avatar: text("avatar"),
  description: text("description"),
  status: varchar("status", { length: 50 }),
  slug: varchar("slug", { length: 255 }),

  // deleted kiểu Boolean với giá trị mặc định là false
  deleted: boolean("deleted").default(false),
  
  // Lưu thời gian xóa
  deletedAt: timestamp("deleted_at"),

  // Timestamps: tự động tạo lúc insert và update
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});