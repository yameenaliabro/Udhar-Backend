import Joi from "joi";
import { addCustomer } from "../../controllers/customers";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

type CreateCustomerBody = {
    fullname: string,
    email: string,
    image: string,
    address: string,
    phonenumber: number

}

const createCustomerSchemas = {
    reqBody: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        image: Joi.string().required(),
        role: Joi.string().optional(),
    })
}

const createCustomerApi = async (req: Request<CreateCustomerBody>, res: Response) => {
    const { email, image, fullname, address, phonenumber } = req.body
    const createcustomer = await addCustomer({ email, image, fullname, address, phonenumber })
    res.send(createcustomer)

}

export default wrap(createCustomerApi, {
    catch: true,
    authedOnly: true,
    validate: createCustomerSchemas
})