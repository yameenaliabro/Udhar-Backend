import Joi from "joi";
import { createProduct } from "../../controllers/product";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

type CreateProductBody = {
    title: string,
    description: string,
    image: string,
    price: number,
    rating: number


}

const CreateProductSchemas = {
    reqBody: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        rating: Joi.number().required(),
        price: Joi.number().required(),
    }),
    reqQuery: Joi.object().length(0)
}

const CreateProductApi = async (req: Request<CreateProductBody>, res: Response) => {
    const { description, image, price, rating, title } = req.body
    const { _id: user_id } = res.locals.user || {}
    const product = await createProduct({ title, description, image, price, rating, user_id: user_id! })
    res.send(product)
}

export default wrap(CreateProductApi, {
    catch: true,
    authedOnly: true,
    validate: CreateProductSchemas
})  