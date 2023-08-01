import { CustomerModel } from "../../models";
import { CustomerProps } from "../../types";
import { CreateCustomers } from "./dto";

export const addCustomer = async (customer: CreateCustomers) => {
    const { email, image, fullname, address, phonenumber } = customer

    const customerdata = new CustomerModel({
        fullname,
        email,
        image,
        address,
        phonenumber
    })

    const createcustomer = customerdata.save()
    return createcustomer
}


