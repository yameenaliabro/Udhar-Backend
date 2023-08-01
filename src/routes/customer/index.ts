import express from "express"
import createCustomer from "./create-customer"

const cunstomerroute = express()
    .post("/", createCustomer)

export default cunstomerroute