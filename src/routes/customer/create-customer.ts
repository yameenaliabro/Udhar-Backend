import Joi from "joi";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import { addCustomer } from "../../controllers";

type CreateCustomerBody = {
    fullname: string,
    email: string,
    image: string,
    address: string,
    phonenumber: number

}

const createCustomerSchemas = {
    reqBody: Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        image: Joi.string().required(),
        phonenumber: Joi.number().optional(),
    })
}

const CreateCustomerApi = async (req: Request<CreateCustomerBody>, res: Response) => {
    const { _id: user_id } = res.locals.user || {}
    const { email, image, fullname, address, phonenumber } = req.body
    const createcustomer = await addCustomer({ email, image, fullname, address, phonenumber, user_id: user_id! })
    res.send(createcustomer)
}

export default wrap(CreateCustomerApi, {
    catch: true,
    authedOnly: true,
    validate: createCustomerSchemas
})