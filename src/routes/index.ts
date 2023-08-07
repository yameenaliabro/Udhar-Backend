import express from "express"
import cunstomerroute from "./customer"
import productroutes from "./product"
import transactionroutes from "./transaction"

const routes = express()
    .use("/customers", cunstomerroute)
    .use("/products", productroutes)
    .use("/transaction", transactionroutes)

export default routes
