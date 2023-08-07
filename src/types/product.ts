import { Types } from "mongoose";

export type ProductSchemaType = {
    title: string,
    description: string,
    purchaseprice: number,
    sellprice: number,
    rating: number,
    image: string,
    user: Types.ObjectId,
    count: number
}