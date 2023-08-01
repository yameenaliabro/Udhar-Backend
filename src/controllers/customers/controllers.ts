import { CustomerModel } from "../../models";
import { CustomerProps } from "../../types";

export const addCustomer = async (customer: CustomerProps) => {
    const { email, image, password, role, username } = customer
    const customerdata = new CustomerModel({
        username,
        email,
        password,
        image,
        role,
    })
    const createcustomer = customerdata.save()
    return createcustomer
}


