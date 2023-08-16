import mongoose, { Schema } from "mongoose";
import { IAuth } from "../types";

const authSchema = new Schema<IAuth>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    pasword: { type: String, select: true },
    token: { type: String, },
    phoneNumber: { type: Number, required: true, },
    PhotoUrl: { type: String, required: true }
})

authSchema.pre<IAuth>("save", async (next) => {
    try {


    } catch (error) {

    }
})

const AuthModel = mongoose.model("user", authSchema)


export default AuthModel