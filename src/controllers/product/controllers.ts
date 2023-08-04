import { ApiError } from "../../helpers";
import { omitUndefined } from "../../helpers/objectUtils";
import { ProductModel } from "../../models";
import { CreateProductType, DeleteProductType, GetProductType, UpdateProductType } from "./dto";

export const createProduct = async (props: CreateProductType) => {
    const { title, description, purchaseprice, sellprice, rating, user_id, image } = props
    const products = new ProductModel({
        title,
        description,
        sellprice,
        purchaseprice,
        rating,
        user: user_id,
        image,
    })
    const createproduct = await products.save()
    return createproduct
}

export const getProduct = async (props: GetProductType) => {
    const { user_id, id } = props
    const products = await ProductModel.find(omitUndefined({ user: user_id, id: id }))
    if (id) {
        if (products[0]) {
            return products[0]
        }
        else {
            throw new ApiError(404, "product not Found!")
        }
    }
    else {
        return products
    }
}

export const deleteProduct = async (props: DeleteProductType) => {
    const { _id } = props
    console.log(_id)
    const product = await ProductModel.findById(_id)
    if (!product) {
        throw new ApiError(401, "product is not deleted")
    }
    product.deleteOne()
    return { sucess: true }
}

export const updateProduct = async (props: UpdateProductType) => {
    const { _id, ...restprops } = props
    const product = await ProductModel.findById(_id)
    if (!product) {
        throw new ApiError(404, "this product not found")
    }
    await product.updateOne(restprops)
    return { sucess: true }
}
