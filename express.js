 const express=require("express")
 const app = express()




 app.get('/',(req,res)=>{
    res.send ("hello")
 })
app.get('/sign',(req,res)=>{
    res.send("hai")
})
 app.listen(3000,()=>console.log("connected"))