import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: string, required: true},
    name: {type: string, required: true},
    username: {type: string},
    profilepic: {type: string},
    createdAt: {type: data},
    email: {type: string, required: true},
})
 
