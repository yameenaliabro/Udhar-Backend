import { Types } from "mongoose";
import { getProduct } from "../../controllers/product";
import { EmptyObject, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import Joi from "joi";
import { getCustomer } from "../../controllers/customers";

type GetCustomerQuery = {
    id?: Types.ObjectId
}

const GetCustomerSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().optional()
    }),
    reqBody: Joi.object().length(0)
}

const GetCustomerApi = async (req: Request<EmptyObject, GetCustomerQuery>, res: Response) => {
    const { id } = req.query
    const { _id: user_id } = res.locals.user || {}
    const product = await getCustomer({ user_id: id })
    res.send(product)
}

export default wrap(GetCustomerApi, {
    catch: true,
    authedOnly: true,
    validate: GetCustomerSchemas
})
