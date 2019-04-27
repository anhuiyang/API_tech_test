const request = require('request')

module.exports = {
    makeAPICall : (url)=>{
        return new Promise((resolve, reject)=>{
            request(url, {json:true}, (err, res, body)=>{
                err ? reject(err) : resolve(body) 
            })
        })
    }
}