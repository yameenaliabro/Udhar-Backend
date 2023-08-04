import express from "express"
import cunstomerroute from "./customer"
import productroutes from "./product"

const routes = express()
    .use("/customers", cunstomerroute)
    .use("/products", productroutes)

export default routes
