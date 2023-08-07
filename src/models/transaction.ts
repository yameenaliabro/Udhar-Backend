import mongoose, { Schema, Types } from "mongoose";
import { TrasactionsSchemaType } from "../types";

const TransactionSchema = new Schema<TrasactionsSchemaType>({
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    date: { type: Date, default: Date.now },
    purchasedProducts: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
        }],
        required: true
    }

}, { timestamps: true },)

const TransactionModel = mongoose.model("Transaction", TransactionSchema)

export default TransactionModel

