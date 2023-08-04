import Joi from "joi";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import { deleteCustomer } from "../../controllers";

type CreateDeleteQuery = {
    id: string
}

const deleteCustomerSchemas = {
    reqQuery: Joi.object({
        id: Joi.string().required()
    }),
    reqBody: Joi.object().length(0)
}

const CreateDeleteCustomerApi = async (req: Request<CreateDeleteQuery>, res: Response) => {
    const { id } = req.query
    console.log(id)
    const deletecustomer = await deleteCustomer({ _id: id })
    res.send(deletecustomer)
}

export default wrap(CreateDeleteCustomerApi, {
    authedOnly: true,
    catch: true,
    validate: deleteCustomerSchemas

})