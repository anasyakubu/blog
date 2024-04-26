import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Subscribers ||
  mongoose.model("Subscribers", SubscriberSchema);
