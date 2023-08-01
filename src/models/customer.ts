import mongoose, { Schema } from "mongoose";
import { CustomerProps } from "../types";

const CustomerSchema = new Schema<CustomerProps>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" }
})

const CustomerModel = mongoose.model("Customer", CustomerSchema)
export default CustomerModel