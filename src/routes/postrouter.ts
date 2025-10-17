import { Router } from "express";
import postController from "../controllers/postcontroller";

const postUrl = "/posts";

export const postRouter = Router();

postRouter.post(postUrl, postController.createPost);
postRouter.get(postUrl + "/:id", postController.getPostByUser);
