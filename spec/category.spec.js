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
test('Category', ()=>{
    let transaction = new Transaction(data)
    expect(transaction.data.length).toBe(2)
})