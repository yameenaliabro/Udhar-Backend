import { Types } from "mongoose"

export type CustomerProps = {
    user: Types.ObjectId
    fullname: string,
    email: string,
    image: string,
    address: string,
    phonenumber: number,
}