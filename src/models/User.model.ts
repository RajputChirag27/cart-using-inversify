// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from 'src/interfaces/UserRepositoryInterface';

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);
