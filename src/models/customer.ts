import mongoose, { Schema } from "mongoose";
import { CustomerProps } from "../types";

const customerSchema = new Schema<CustomerProps>({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    address: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "Users" }

}, { timestamps: true })

const CustomerModel = mongoose.model("Customer", customerSchema)
export default CustomerModel