import { pool } from "../db/db";
import { Post } from "../types/Post";

class PostService {
  async createPost(post: Post) {
    if (!post.user_id) {
      throw new Error("user id is not defined");
    }
    const createdPost = await pool.query(
      "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
      [post.title, post.content, post.user_id]
    );
    return createdPost;
  }

  async getPostById(id: string) {
    if (!id) {
      throw new Error("id is not defined");
    }
    const post = await pool.query("select * from post where user_id = $1", [
      id,
    ]);
    return post;
  }
}

export default new PostService();
