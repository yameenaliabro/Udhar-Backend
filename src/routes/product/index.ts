import express from "express"
import getProduct from "./get-product"
import createProduct from "./create-product"
import updateProduct from "./update-product"
import deleteProduct from "./delete-product"

const productroutes = express()
    .get("/", getProduct)
    .post("/", createProduct)
    .patch("/", updateProduct)
    .delete("/", deleteProduct)

export default productroutes