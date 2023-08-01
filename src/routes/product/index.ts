import express from "express"
import getProduct from "./get-product"
import createProduct from "./create-product"
import updateProduct from "./update-product"
import { deletProduct } from "../../controllers/product"

const productroutes = express()
    .get("/", getProduct)
    .post("/", createProduct)
    .patch("/", updateProduct)
    .delete("/", deletProduct)

export default productroutes