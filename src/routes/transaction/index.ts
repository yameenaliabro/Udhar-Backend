import express from 'express'
import createTransaction from './create-transaction'
import getTransation from './get-transation'
import deleteTransation from './delete-transation'
import updateTransation from './update-transation'

const transactionroutes = express()
    .post("/", createTransaction)
    .get("/", getTransation)
    .delete("/", deleteTransation)
    .patch("/", updateTransation)

export default transactionroutes