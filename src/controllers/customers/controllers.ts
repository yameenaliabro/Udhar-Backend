import { ApiError } from "../../helpers";
import { omitUndefined } from "../../helpers/objectUtils";
import { CustomerModel } from "../../models";
import { CustomerProps } from "../../types";
import { CreateCustomers, DeleteCustomerProps, GetCustomerType, UpdateCustomerProps } from "./dto";

export const addCustomer = async (customer: CreateCustomers) => {
    const { email, image, fullname, address, phonenumber, user_id } = customer

    const customerdata = new CustomerModel({
        fullname,
        email,
        image,
        address,
        phonenumber,
        user: user_id
    })
    const createcustomer = customerdata.save()
    return createcustomer
}

export const deleteCustomer = async (props: DeleteCustomerProps) => {
    const { _id } = props
    const product = await CustomerModel.findById(_id)
    if (!product) {
        throw new ApiError(401, "product is not deleted")
    }
    product.deleteOne()
    return { sucess: true }
}

export const updateCustomer = async (props: UpdateCustomerProps) => {
    const { _id, ...restprops } = props
    const customer = await CustomerModel.findById(_id)
    if (!customer) {
        throw new ApiError(404, "this Customer is not found")
    }
    await customer.updateOne(restprops)
    return { sucess: true }
}

export const getCustomer = async (props: GetCustomerType) => {
    const { user_id, id } = props
    const products = await CustomerModel.find(omitUndefined({ user: user_id, id: id }))
    if (id) {
        if (products[0]) {
            return products[0]
        }
        else {
            throw new ApiError(404, "product not Found!")
        }
    }
    else {
        return products
    }
}
