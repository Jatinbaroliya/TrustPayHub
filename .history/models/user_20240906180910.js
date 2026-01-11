import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    username: {type: String},
    profilepic: {type: String},
    createdAt: {type: data, default: Date.now},
    updatedAt: {type: data, default: Date.now},
})
 
const User = model("User", UserSchema);
export default mongoose.models.User || User;