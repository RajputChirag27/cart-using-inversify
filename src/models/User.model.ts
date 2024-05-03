// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interfaces/UserRepositoryInterface';

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model<IUser>('User', UserSchema);
