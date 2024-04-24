"use server";
import db from "./db";
import BlogModel from "../models/Blog"; // Changed variable name to avoid confusion

export const getBlogs = async () => {
  try {
    await db.connect(); // Assuming db.connect() returns a promise
    const blogs = await BlogModel.find({}); // Changed variable name to lowercase
    return blogs;
  } catch (error) {
    throw new Error("Failed To Get Blogs " + error);
  }
};

export const getBlog = async (id) => {
  try {
    await db.connect(); // Assuming db.connect() returns a promise
    const blogs = await BlogModel.findById(id); // Changed variable name to lowercase
    return blogs;
  } catch (error) {
    throw new Error("Failed To Get Blog " + error);
  }
};
