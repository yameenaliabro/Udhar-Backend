import { Types } from "mongoose";

export type ProductSchemaType = {
    title: string,
    description: string,
    price: number,
    rating: number,
    image: string,
    user: Types.ObjectId

}