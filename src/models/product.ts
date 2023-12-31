import mongoose, { Schema, Types } from "mongoose";
import { ProductSchemaType } from "../types";

const ProductSchema = new Schema<ProductSchemaType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    purchaseprice: { type: Number, required: true },
    rating: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    sellprice: { type: Number, required: true },
    count: { type: Number, default: 1 }
}, { timestamps: true })
const ProductModel = mongoose.model("Product", ProductSchema)

export default ProductModel

