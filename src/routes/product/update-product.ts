import { Request, Response } from "../../helpers";
import { updateProduct } from "../../controllers/product";
import { wrap } from "../../wrappers";
import Joi from "joi";
type updateProductQuery = {
    id: string
}

type updateProductBody = {
    title?: string,
    description?: string,
    purchaseprice?: string,
    sellprice?: string
    image?: string,
    rating?: number,
}

const UpdateProductSchemas = {
    reqBody: Joi.object({
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        purchaseprice: Joi.number().optional(),
        sellprice: Joi.number().optional(),
        rating: Joi.number().optional(),
        image: Joi.string().optional(),
    }),
    reqQuery: Joi.object({
        id: Joi.string().required()
    })
}

const UpdateProductApi = async (req: Request<updateProductBody, updateProductQuery>, res: Response) => {
    const { id } = req.query
    const updateproduct = await updateProduct({ _id: id, ...req.body })
    res.send(updateproduct)
}

export default wrap(UpdateProductApi, {
    catch: true,
    authedOnly: true,
    validate: UpdateProductSchemas
})