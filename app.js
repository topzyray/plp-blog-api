import express from "express";
import blogRouter from "./route/blog.route.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/blog", blogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our Blog API.");
});

export default app;
