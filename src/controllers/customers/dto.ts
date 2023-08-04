import { Types } from "mongoose"

export type CreateCustomers = {
    email: string,
    fullname: string,
    image: string,
    phonenumber: number,
    address: string,
    user_id: Types.ObjectId
}

export type DeleteCustomerProps = {
    _id: string
}

export type UpdateCustomerProps = {
    _id: string,
    fullname?: string,
    phonenumber?: number,
    address?: string,
    email?: string
}

export type GetCustomerType = {
    user_id?: Types.ObjectId
    id?: string
}