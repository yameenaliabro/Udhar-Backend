import { Types } from "mongoose";
import { Request, Response } from "../../helpers";
import { getTransation } from "../../controllers/transaction";
import { wrap } from "../../wrappers";
import Joi from "joi";


type getTransationQuery = {
    _id?: Types.ObjectId
}

const getTransationSchemas = {
    reqQuery: Joi.object({
        _id: Joi.string().optional()
    }),
    reqBody: Joi.object().length(0)
}

const GetTransationApi = async (req: Request<getTransationQuery>, res: Response) => {
    const { _id } = req.query
    const gettransation = await getTransation(_id)
    res.send(gettransation)
}

export default wrap(GetTransationApi, {
    catch: true,
    authedOnly: true,
    validate: getTransationSchemas
})