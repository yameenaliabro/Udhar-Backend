import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user";

const UserSchema = new Schema<IUser>({
    firebaseUid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    emailVerified: { type: Boolean, default: false },
    displayName: { type: String, required: true },
    image: { type: String, default: null }
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)

export default UserModel