import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: string, required: true},
    name: {type: string, required: true},
    username: {type: string},
    profilepic: {type: string},
    createdAt: {type: data, default: Date.now},
    updatedAt: {type: data, default: Date.now},
})
 
const User = model("User", UserSchema);
export default mongoose.models.USer 