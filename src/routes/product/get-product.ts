import { Types } from "mongoose";
import { getProduct } from "../../controllers/product";
import { EmptyObject, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import Joi from "joi";

type GetProductQuery = {
    id?: Types.ObjectId
}

const GetProductSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0)
}

const GetProductApi = async (req: Request<EmptyObject, GetProductQuery>, res: Response) => {
    const { id } = req.query
    const { _id: user_id } = res.locals.user || {}
    const product = await getProduct({ user_id: id! })
    res.send(product)
}

export default wrap(GetProductApi, {
    catch: true,
    authedOnly: true,
    validate: GetProductSchemas
})
