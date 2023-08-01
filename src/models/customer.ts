import mongoose, { Schema } from "mongoose";
import { CustomerProps } from "../types";

const CustomerSchema = new Schema<CustomerProps>({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true })

const CustomerModel = mongoose.model("Customer", CustomerSchema)
export default CustomerModel