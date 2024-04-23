"use server";
import Blog from "../../models/Blog";
import db from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addBlog = async (FormData) => {
  const { title, article, tag } = Object.fromEntries(FormData);
  try {
    db.connect();
    const newBlog = new Blog({
      title,
      article,
      tag,
    });
    await newBlog.save();
  } catch (error) {
    throw new Error("Failed To Create Blog " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const updateBlog = async (FormData) => {
  const { id, title, article, tag } = Object.fromEntries(FormData);
  try {
    db.connect();
    const updateFields = {
      title,
      article,
      tag,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Blog.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed To Update Blog " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const deleteBlog = async (FormData) => {
  const { id } = Object.fromEntries(FormData);
  try {
    db.connect();
    await Blog.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed To Delete Blog " + error);
  }
  revalidatePath("/");
};
