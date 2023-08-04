import express from "express"
import createCustomer from "./create-customer"
import getCustomer from "./get-customer"
import deleteCustomer from "./delete-customer"
import updateCustomer from "./update-customer"

const cunstomerroute = express()
    .post("/", createCustomer)
    .get("/", getCustomer)
    .delete("/", deleteCustomer)
    .patch("/", updateCustomer)


export default cunstomerroute