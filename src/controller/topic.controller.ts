import { Request, Response } from "express";
import { Topic } from "../db";
import { db } from "../config/database";  
import { eq } from "drizzle-orm"; 

// [GET] /topics/
export const index = async (req: Request, res: Response) => {
  try {
    const topics = await db.select().from(Topic).where(eq(Topic.deleted, false)).orderBy(Topic.id);

    res.render("client/pages/topics/index", {
      pageTitle: "Danh sách chủ đề",
      topics: topics
    });
  } catch (error) {
    console.log(error);
    res.redirect("back");
  }
};

// [POST]
export const create = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    
  }
}