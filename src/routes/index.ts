import express from "express"
import cunstomerroute from "./customer"
import productroutes from "./product"

const routes = express()
    .use("/customer", cunstomerroute)
    .use("/product", productroutes)

export default routes
