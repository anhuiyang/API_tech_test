const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const apiHelpler = require('./API_helper')
const Transaction = require('./src/transaction')

app.get('/insights/categories', (req, res)=>{
    apiHelpler.makeAPICall('https://transactions.spokedev.xyz/transactions')
    .then(response=>{
        let transaction = new Transaction(response)
        res.json(transaction.category())
    })
    .catch(error=>{res.send(error)})
})

app.get('/insights/cashflow', (req, res)=>{
    apiHelpler.makeAPICall('https://transactions.spokedev.xyz/transactions')
    .then(response=>{
        let transaction = new Transaction(response)
        res.json(transaction.cashflow())
    })
    .catch(error=>{res.send(error)})
})

app.listen(3000, ()=>{console.log('app running on port 3000')})

