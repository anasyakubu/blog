"use server";
import db from "./db";
import SubscriberModel from "../models/Subscriber"; // Changed variable name to avoid confusion

export const getSubscribers = async () => {
  try {
    await db.connect(); // Assuming db.connect() returns a promise
    const subscribers = await SubscriberModel.find({}); // Changed variable name to lowercase
    return subscribers;
  } catch (error) {
    throw new Error("Failed To Get Subscribers " + error);
  }
};

export const getSubscriber = async (id) => {
  try {
    await db.connect(); // Assuming db.connect() returns a promise
    const subscribers = await SubscriberModel.findById(id); // Changed variable name to lowercase
    return subscribers;
  } catch (error) {
    throw new Error("Failed To Get Subscriber " + error);
  }
};
