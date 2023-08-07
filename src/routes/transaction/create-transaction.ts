import { Request, Response } from "../../helpers";
import { createTransation } from "../../controllers/transaction";
import { wrap } from "../../wrappers";
import Joi, { number } from "joi";

const createTrasationSchemas = {
    reqBody: Joi.object({
        customer: Joi.string().required(),
        purchasedProducts: Joi.array().items(
            Joi.object({
                product: Joi.string().required(),
            })
        ).min(1).required(),
        date: Joi.date().optional(),
    }),
}

type CreateTransationBodType = {
    customer: string
    purchasedProducts: {
        product: string
    }[],
    date: Date
}

const GetTransationApi = async (req: Request<CreateTransationBodType>, res: Response) => {
    const { customer, date, purchasedProducts } = req.body
    const customers = await createTransation({ customer, date, purchasedProducts })
    res.send(customers)
}

export default wrap(GetTransationApi, {
    authedOnly: false,
    catch: true,
    validate: createTrasationSchemas,
}) 