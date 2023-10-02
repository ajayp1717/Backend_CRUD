const express=require('express')
const app=express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('Hello Backend')
})

app.get('/download',(req,res)=>{
    res.send("I'm Download")
})
let port=process.env.PORT || 5001

try{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
}
catch(err){
    console.log(err)
}
