"use server";
import Subscribers from "../../models/Subscriber";
import db from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addSubscriber = async (FormData) => {
  const { email } = Object.fromEntries(FormData);
  try {
    db.connect();
    const newSubscriber = new Subscribers({
      email,
    });
    await newSubscriber.save();
  } catch (error) {
    throw new Error("Failed To Create Subscriber " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const updateSubscriber = async (FormData) => {
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
    await Subscriber.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed To Update Subscriber " + error);
  }
  revalidatePath("/");
  redirect("/");
};

export const deleteSubscriber = async (FormData) => {
  const { id } = Object.fromEntries(FormData);
  try {
    db.connect();
    await Subscriber.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed To Delete Subscriber " + error);
  }
  revalidatePath("/");
};
