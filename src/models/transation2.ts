import mongoose from "mongoose";
import { TrasactionsSchemaType2 } from "../types";

const TransactionSchema = new mongoose.Schema<TrasactionsSchemaType2>({
    customer: { type: String, required: true },
    date: { type: Date, default: Date.now },
    purchasedProducts: {
        type: [{
            product: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,

            },
            price: { type: Number, required: true }
        }],
        required: true,
    }
}, { timestamps: true })

const TransactionModel2 = mongoose.model("transations", TransactionSchema)
export default TransactionModel2
