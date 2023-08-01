import { Types } from "mongoose"

export type CreateProductType = {
    user_id: Types.ObjectId
    title: string,
    description: string,
    price: number,
    rating: number,
    image: string
}

export type UpdateProductType = {
    _id: string,
    title?: string,
    description?: string,
    price?: number,
    reting?: number,
}

export type DeleteProductType = {
    _id: string
}

export type GetProductType = {
    user_id: Types.ObjectId,
    id?: string
}