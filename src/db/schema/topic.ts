import { pgTable, serial, varchar, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const Topic = pgTable("topics", {
  id: serial("id").primaryKey(),
  
  title: varchar("title", { length: 255 }).notNull(),
  avatar: text("avatar"),
  description: text("description"),
  status: varchar("status", { length: 50 }),
  slug: varchar("slug", { length: 255 }),

  deleted: boolean("deleted").default(false),
  
  deletedAt: timestamp("deleted_at"),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});