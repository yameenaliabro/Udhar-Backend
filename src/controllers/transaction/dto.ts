import { Types } from "mongoose"

export type TrasactionCreateType = {
    customer: string
    purchasedProducts: {
        product: string;
    }[],
    date: Date
}

export type GetTransationType = {
    id: Types.ObjectId
}

export type UpdateTransationType = {
    _id: string,
    cusotmer?: string
    purchasedProducts: {
        product?: string;
        quantity?: number,
        price?: number
    }[],
    date: Date
}

export type DeleteTransationType = {
    _id?: string
}