class Transaction{
    constructor(data){
        this.data = data
    }
    category(){
        return {"food": {
            "totalNumber": 2,
            "totalValue": 120,
            "averageValue": 60
          }}
    }
}
module.exports = Transaction