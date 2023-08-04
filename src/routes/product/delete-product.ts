import Joi from 'joi';
import { EmptyObject, Request, Response } from '../../helpers';
import { wrap } from '../../wrappers';
import { deleteProduct } from '../../controllers';

const deletProductchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0),
};

type DeleteTodosQuery = {
    id: string;
}

async function deleteProductApi(req: Request<EmptyObject, DeleteTodosQuery>, res: Response) {
    const { id } = req.query
    const product = await deleteProduct({ _id: id })
    res.send(product)
}

export default wrap(deleteProductApi, {
    catch: true,
    authedOnly: true,
    validate: deletProductchemas
})