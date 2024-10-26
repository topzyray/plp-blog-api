import db from "../config/db.js";

export const createNewPost = (req, res) => {
  const newPost = req.body;
  res.send(newPost);
};

export const getAllPosts = async (req, res) => {
  const { query } = req;

  try {
    const [data] = await db.query("SELECT * FROM `posts`");
    res.status(200).json({
      sucess: true,
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ sucess: true, error: "No posts found!" });
  }
};

export const getPostById = (req, res) => {
  const { params } = req;
  console.log(typeof Number(params.id));
  res.send(`Blog with id ${params.id} found`);
};

export const updatePostById = (req, res) => {
  const { params, body } = req;

  console.log("Post Id", params.id);
  console.log("Post Body", body);
  res.send(`Blog with id ${params.id} updated successfully`);
};

export const deletePostById = (req, res) => {
  const { params } = req;
  res.send(`Blog with id ${params.id} deleted successfully`);
};
