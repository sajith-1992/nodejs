 const express=require("express")
 const path = require("path")
 const app = express()

app.use(function(req,res,next){
    console.log("working")
    next()
  
})


 app.get('/sign',(req,res)=>{
    res.sendFile (path.join(__dirname,"/signup.html"))
 })
app.post('/sign',(req,res)=>{
    res.send("hai")
})
 app.listen(3000,()=>{
 console.log(__dirname)
 console.log(__filename)

 console.log("connected")})