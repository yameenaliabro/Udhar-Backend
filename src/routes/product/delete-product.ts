import Joi from "joi";
import { deletProduct } from "../../controllers/product";
import { EmptyObject, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

type DeleteProductQuery = {
    id: string,
}

const DeleteProductSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.string().length(0)
}

const DeleteProductApi = async (req: Request<DeleteProductQuery>, res: Response) => {
    const { id } = req.query
    const product = await deletProduct(id)
    res.send(product)
}

export default wrap(DeleteProductApi, {
    catch: true,
    authedOnly: true,
    validate: DeleteProductSchemas

})