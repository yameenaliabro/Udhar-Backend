import { Types } from "mongoose";
import { Request, Response } from "../../helpers";
import { updateTransation } from "../../controllers/transaction";
import { wrap } from "../../wrappers";
import Joi from "joi";

type updateTransationBody = {
    customer: string,
    purchasedProducts: {
        product?: string;
        quantity?: number,
        price?: number
    }[],
    date: Date
}

type updateTransationQuery = {
    id: string
}

const updateTransationSchema = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object({
        customer: Joi.string().optional(),
        purchasedProducts: Joi.array().items(
            Joi.object({
                product: Joi.string().optional(),
                quantity: Joi.number().integer().min(1).optional(),
                price: Joi.number().min(0).optional(),
            })
        ).min(1).required(),
        date: Joi.date().optional(),
    }),
}

const UpdateTransationApi = async (req: Request<updateTransationBody, updateTransationQuery>, res: Response) => {
    const { id } = req.query
    const updatetransation = await updateTransation({ _id: id, ...req.body })
    res.send(updatetransation)
}

export default wrap(UpdateTransationApi, {
    authedOnly: true,
    catch: true,
    validate: updateTransationSchema
})