import Joi from "joi";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import { updateCustomer } from "../../controllers";

type UpdateCustomerBody = {
    fullname?: string,
    address?: string,
    phonenumber?: number,
    email?: string,
    image?: string

}

type UpdateCustomerQuery = {
    id: string
}


const UpdateCustomerSchemas = {
    reqBody: Joi.object({
        fullname: Joi.string().optional(),
        address: Joi.string().optional(),
        phonenumber: Joi.number().optional(),
        email: Joi.string().optional(),
        image: Joi.string().optional()
    }),
    reqQuery: Joi.object({
        id: Joi.string().required()
    })
}

const CustomerUpdateApi = async (req: Request<UpdateCustomerBody, UpdateCustomerQuery>, res: Response) => {
    const { id } = req.query
    const updatecustomer = await updateCustomer({ _id: id, ...req.body })
    res.send(updatecustomer)
}

export default wrap(CustomerUpdateApi, {
    authedOnly: true,
    catch: true,
    validate: UpdateCustomerSchemas,
})