import { Types } from "mongoose"

export type TrasactionsSchemaType = {
    customer: Types.ObjectId
    purchasedProducts: {
        product: Types.ObjectId;
        quantity: number
    }[],
    date: Date
}