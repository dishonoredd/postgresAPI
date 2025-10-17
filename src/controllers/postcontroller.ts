import { Request, Response } from "express";
import { pool } from "../db/db";

class PostsController {
  async createPost(req: Request, res: Response) {
    const { title, content, userId } = req.body;
    const newPost = await pool.query(
      "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  async getPostByUser(req: Request, res: Response) {
    const id = req.query.id;
    const posts = await pool.query("select * from post where user_id = $1", [
      id,
    ]);
  }
}

export default new PostsController();
