import { Types } from "mongoose";
import { Request, Response } from "../../helpers";
import { getTransation } from "../../controllers/transaction";
import { wrap } from "../../wrappers";
import Joi from "joi";


type getTransationQuery = {
    id?: Types.ObjectId
}

const getTransationSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().optional()
    }),
    reqBody: Joi.object().optional()
}

const GetTransationApi = async (req: Request<getTransationQuery>, res: Response) => {
    const { id } = req.query
    const gettransation = await getTransation(id)
    res.send(gettransation)
}

export default wrap(GetTransationApi, {
    catch: true,
    authedOnly: false,
    validate: getTransationSchemas
})