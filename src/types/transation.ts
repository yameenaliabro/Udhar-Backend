import { Types } from "mongoose"

export type TrasactionsSchemaType = {
    customer: Types.ObjectId
    purchasedProducts: {
        product: Types.ObjectId;
    }[],
    date: Date
}

export type TrasactionsSchemaType2 = {
    customer: string
    purchasedProducts: {
        product: string
        quantity: number,
        price: number
    }[],
    date: Date
}