import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    to_user: {type: String, required: true},
    oid: {type: String, required: true},
    message: {type: String},
    amount: {type: Number, required: true},
    createdAt: {type: data, default: Date.now},
    updatedAt: {type: data, default: Date.now},
    done: {type: boolean, default: false},
})
 
const User = model("Payent", UserSchema);
export default mongoose.models.User || User;