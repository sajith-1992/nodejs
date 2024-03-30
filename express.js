 const express=require("express")
 const path = require("path")
 const app = express()
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({ extended: true}))
 app.use(express.static('public'));

app.use(function(req,res,next){
    console.log("working")
    next()
  
})


 app.get('/sign',(req,res)=>{

    res.sendFile (path.join(__dirname,"/signup.html"))
 })
 
 app.get('/signupfinish',(req,res)=>{
   const emailup = req.query.email;
   console.log(emailup)
    res.sendFile (path.join(__dirname,"/signupfinish.html",))
 })





 app.post('/sign', (req, res) => {
    console.log(req.body);
    var email = req.body.email;
   
    res.redirect(`/signupfinish?email=${encodeURIComponent(email)}`);
   });


 app.listen(3000,()=>{
 console.log(__dirname)
 console.log(__filename)

 console.log("connected")})