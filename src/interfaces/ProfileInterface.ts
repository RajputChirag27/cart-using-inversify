import { Types , Document } from "mongoose";
// 1. Create an interface representing a document in MongoDB


export interface Profile extends Document {
    user_id : Types.ObjectId;
    name : string;
    carts ?: Types.ObjectId;
}