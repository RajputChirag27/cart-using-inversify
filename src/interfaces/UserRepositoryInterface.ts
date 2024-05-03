import { Types } from "mongoose";

export interface IUser extends Document {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    role: string;
    password: string;
}