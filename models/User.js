import mongoose from "mongoose";
const {Schema , model} = mongoose;

const UserSchema = new Schema({
    email: {type: String , required: true},
    name: {type: String},
    username: {type: String , required: true},
    profilepic: {type: String},
    coverpic: {type: String},
    razorpayid: {type: String},
    razorpaysecret: {type: String},
    createAt: {type: String , default: Date.now},
    updateAt: {type: String , default: Date.now},
});

export default mongoose.models.User || model("User" , UserSchema);