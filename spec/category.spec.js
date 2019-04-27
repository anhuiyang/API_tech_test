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
    test('categorize', ()=>{
        transaction.categorized()
        expect(transaction.categoryType[0]).toBe('food')
    })
    test('category', ()=>{
        expect(transaction.category().food.totalNumber).toBe(2)
    })
})

