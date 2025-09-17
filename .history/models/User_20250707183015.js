import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String }, // optional full name
  username: { type: String, required: true }, // required username
  profilepic: { type: String, default: "" },
  coverpic: { type: String, default: "" },
  razorpayid: { type: String, default: "" },
  razorpaysecret: { type: String, default: "" },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

// Prevent redefinition in dev
export default mongoose.models.User || model("User", UserSchema);
