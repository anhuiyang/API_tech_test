class Transaction{
    constructor(data){
        this.data = data
        this.categoryType = []
    }
    cashflow(){
        return this.groupByT(this.data, 'paymentDate')
    }
    category(){
        return this.groupByC(this.data, 'category')
    }
    groupByC(array, property){
        return array.reduce((acc, obj)=>{
            let key = obj[property]
            if(!acc[key]){
                acc[key] ={
                    "totalNumber": 0,
                    "totalValue": 0,
                    "averageValue": 0
                }
            }
            acc[key].totalNumber+=1
            acc[key].totalValue+=obj.amount
            acc[key].averageValue=acc[key].totalValue/acc[key].totalNumber
            return acc
        }, {})
    }
    groupByT(array, property){
        return array.reduce((acc, obj)=>{
            let key = +obj[property].slice(8,10)+'/'+obj[property].slice(5,7)+'/'+obj[property].slice(0,4)
            if(!acc[key]){
                acc[key] ={
                    "totalNumber": 0,
                    "totalValue": 0,
                    "averageValue": 0
                }
            }
            acc[key].totalNumber+=1
            acc[key].totalValue+=obj.amount
            acc[key].averageValue=acc[key].totalValue/acc[key].totalNumber
            return acc
        }, {})
    }
}
module.exports = Transaction