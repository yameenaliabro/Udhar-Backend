import { ApiError } from "../../helpers";
import { omitUndefined } from "../../helpers/objectUtils";
import { ProductModel } from "../../models";
import { CreateProductType, DeleteProductType, GetProductType, UpdateProductType } from "./dto";

export const createProduct = async (props: CreateProductType) => {
    const { title, description, price, rating, user_id, image } = props
    const products = new ProductModel({
        title,
        description,
        price,
        rating,
        user_id,
        image,
    })
    const createproduct = await products.save()
    return createProduct
}

export const getProduct = async (props: GetProductType) => {
    const { user_id, id } = props
    const product = await ProductModel.find(omitUndefined({ user: user_id, id: id }))
    if (product) {
        if (product[0]) {
            return product[0]
        }
        else {
            throw new ApiError(40, "product not Found!")
        }
    }
    else {
        return product
    }
}

export const deletProduct = async (props: DeleteProductType) => {
    const { _id } = props
    const product = await ProductModel.findByIdAndRemove(_id)
    if (!product) {
        throw new ApiError(401, "product is not deleted")
    }
}

export const updateProduct = async (props: UpdateProductType) => {
    const { _id, ...restprops } = props
    const product = await ProductModel.findById(_id)
    if (!product) {
        throw new ApiError(404, "this product not found")
    }
    await product.updateOne()
    return { sucess: true }
}