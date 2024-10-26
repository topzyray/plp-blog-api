import express from "express";
import {
  createNewPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
} from "../controller/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/", createNewPost);

blogRouter.get("/", getAllPosts);

blogRouter.get("/:id", getPostById);

blogRouter.put("/:id", updatePostById);

blogRouter.delete("/:id", deletePostById);

export default blogRouter;
