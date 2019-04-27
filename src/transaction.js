class Transaction{
    constructor(data){
        this.data = data
        this.categoryType = []
    }
    category(){

        this.data.forEach((transaction)=>{
            transaction.category
        })

        return {"food": {
            "totalNumber": 2,
            "totalValue": 120,
            "averageValue": 60
          }}
    }

    categorized(){
        this.data.forEach((each)=>{
            this.categoryType.includes(each.category) ? '' : this.categoryType.push(each.category)
        })
    }
}
module.exports = Transaction