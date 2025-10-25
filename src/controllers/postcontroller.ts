import { Request, Response } from "express";
import { pool } from "../db/db";
import postservice from "../services/postservice";

class PostsController {
  async createPost(req: Request, res: Response) {
    try {
      const newPost = await postservice.createPost(req.body);
      res.json(newPost.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPostByUser(req: Request, res: Response) {
    try {
      const id = req.query.id;

      if (!id || typeof id !== "string") {
        return res.status(400).json({ error: "Valid user ID is required" });
      }

      const posts = await postservice.getPostById(id);

      if (!posts.rows || posts.rows.length === 0) {
        return res
          .status(404)
          .json({ message: "No posts found for this user" });
      }

      res.json(posts.rows);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json(error);
    }
  }
}

export default new PostsController();
