import Joi from "joi";
import { addCustomer } from "../../controllers/customers";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

type CreateCustomerBody = {
    username: string,
    email: string,
    password: string,
    image: string,
    role: string
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
    const { email, image, password, role, username } = req.body
    const createcustomer = await addCustomer({ email, image, password, role, username })
    res.send(createcustomer)

}

export default wrap(createCustomerApi, {
    catch: true,
    authedOnly: true,
    validate: createCustomerSchemas
})