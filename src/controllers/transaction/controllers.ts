import mongoose from "mongoose";
import { ApiError } from "../../helpers";
import TransactionModel from "../../models/transaction";
import { DeleteTransationType, GetTransationType, TrasactionCreateType, UpdateTransationType } from "./dto";

export const createTransation = async (props: TrasactionCreateType) => {
    const { customer, date, purchasedProducts } = props
    const transaction = new TransactionModel({
        _id: new mongoose.Types.ObjectId,
        customer,
        date,
        purchasedProducts
    })
    const transactions = await transaction.save()
    return transactions
}

export const getTransation = async () => {
    const gettransation = await TransactionModel.find({})
        .populate("customer").
        populate("purchasedProducts.product")
    return gettransation;

}

export const updateTransation = async (props: UpdateTransationType) => {
    const { _id, ...restprops } = props
    const updatetransation = await TransactionModel.findById(_id)
    if (!updatetransation) {
        throw new ApiError(404, "this is no update by refer id")
    }
    await updatetransation.updateOne(restprops)
    return updatetransation
}

export const deleteTransation = async (props: DeleteTransationType) => {
    const { _id } = props
    const deletetransation = await TransactionModel.findById(_id)
    if (!deletetransation) {
        throw new ApiError(404, "this is not deleted ")
    }
    deletetransation.deleteOne()
    return { sucess: true }

}