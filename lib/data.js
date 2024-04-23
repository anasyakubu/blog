"use server";
import db from "./db";
import Blog from "../models/Blog";

export const getBlogs = async () => {
  try {
    db.connect();
    const Blogs = await Blog.find({});
    return Blogs;
  } catch (error) {
    throw new Error("Failed To Get Blogs " + error);
  }
};

export const getBlog = async (id) => {
  try {
    db.connect();
    const Blog = await Blog.findById(id);
    return Blog;
  } catch (error) {
    throw new Error("Failed To Get Blog " + error);
  }
};
