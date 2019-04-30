let Transaction = require('../src/transaction')
let data = [
    {
    "id": 1,
    "amount": 100,
    "merchant": "Tescos Ltd",
    "category": "food",
    "paymentDate": "2019-01-27T14:24:48.960Z"
    },
    {
    "id": 2,
    "amount": 20,
    "merchant": "TFL London",
    "category": "transport",
    "paymentDate": "2019-02-27T14:24:48.960Z"
    }
]
let categoryData = {"food": {
    "totalNumber": 2,
    "totalValue": 120,
    "averageValue": 60
  }}
describe('Transaction', ()=>{
    let transaction = new Transaction(data)
    test('initializer', ()=>{
        expect(transaction.data.length).toBe(2)
    })
    test('category-food', ()=>{
        expect(transaction.category().food.averageValue).toBe(100)
    })
    test('category-transport', ()=>{
        expect(transaction.category().transport.averageValue).toBe(20)
    })
    test('groupByC-food', ()=>{
        expect(transaction.groupByC(data, 'category').food.averageValue).toBe(100)
    })
    test('groupByC-transport', ()=>{
        expect(transaction.groupByC(data, 'category').transport.averageValue).toBe(20)
    })
    test('cashflow-"01/01/2019"', ()=>{
        expect(transaction.cashflow()['27/01/2019'].averageValue).toBe(100)
    })
    test('cashflow-"02/01/2019"', ()=>{
        expect(transaction.cashflow()['27/02/2019'].averageValue).toBe(20)
    })
    test('cashflow-"01/01/2019"', ()=>{
        expect(transaction.cashflow(data, 'paymentDate')['27/01/2019'].averageValue).toBe(100)
    })
    test('cashflow-"02/01/2019"', ()=>{
        expect(transaction.cashflow(data, 'paymentDate')['27/02/2019'].averageValue).toBe(20)
    })
})