const voucherifyClient = require('voucherify')
 const express=require('express')
 const app=express();
 const bodyparser = require('body-parser')  
 const cors=require('cors')
const client = voucherifyClient({
    applicationId: 'f445742f-7a60-4e0f-8cb2-28084997657f',
    clientSecretKey: '0be97f4c-2ba2-450c-a33a-7271956cbe53'
})
app.use(express.json())
app.use(cors())
app.post('/code',(req,res)=>{
const {category,type,percent_off}=req.body;
    const voucher ={
  
        
        "category":category,
        "type": type,
        "discount": {
          "type": "PERCENT",
          "percent_off": percent_off
        }
    } 
        client.vouchers.create(voucher,function(err,response){
            if(err){
                console.log(err);
            }
            console.log(response);
            res.send(response.code)
        
        })
})




app.listen(4000,(err)=>{
    console.log('port 4000');
})

