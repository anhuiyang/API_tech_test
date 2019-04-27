const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const apiHelpler = require('./API_helper')
const transaction = require('./src/transaction')

const transactionData = ''
app.get('/', (req, res)=>{
    apiHelpler.makeAPICall('https://transactions.spokedev.xyz/transactions')
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{res.send(error)})
})

app.get('/insights/categories', (req, res)=>{
    apiHelpler.makeAPICall('https://transactions.spokedev.xyz/transactions')
    .then(response=>{
        let transaction = new transaction(response)
        category.
    })
    .catch(error=>{res.send(error)})
})

app.listen(3000, ()=>{console.log('app running on port 3000')})

module.exports = transactionData