import { Types } from "mongoose";
import { Request, Response } from "../../helpers";
import { deleteTransation } from "../../controllers/transaction";
import { wrap } from "../../wrappers";
import Joi from "joi";

type deleteTransationParams = {
    id: Types.ObjectId
}

const deleteTransationSchema = {
    reQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0)
}

const DeleteTrasationApi = async (req: Request<deleteTransationParams>, res: Response) => {
    const { id } = req.query
    const deletetransation = await deleteTransation({ _id: id })
    res.send(deletetransation)
}

export default wrap(DeleteTrasationApi, {
    authedOnly: true,
    catch: true,
    validate: deleteTransationSchema
})
