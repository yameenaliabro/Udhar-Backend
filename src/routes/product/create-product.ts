import Joi from "joi";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import { createProduct } from "../../controllers";

type CreateProductBody = {
    title: string,
    description: string,
    image: string,
    purchaseprice: number,
    sellprice: number
    rating: number
}

const CreateProductSchemas = {
    reqBody: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        rating: Joi.number().required(),
        purchaseprice: Joi.number().required(),
        sellprice: Joi.number().required()
    }),
    reqQuery: Joi.object().length(0)
}

const CreateProductApi = async (req: Request<CreateProductBody>, res: Response) => {
    const { description, image, purchaseprice, sellprice, rating, title } = req.body
    const { _id: user_id } = res.locals.user || {}
    const product = await createProduct({ title, description, image, purchaseprice, sellprice, rating, user_id: user_id! })
    res.send(product)
}

export default wrap(CreateProductApi, {
    catch: true,
    authedOnly: true,
    validate: CreateProductSchemas
})  