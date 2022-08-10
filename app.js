var express=require('express')
var app=express()

app.get('/',(req,res)=>
{
    res.send("hello")
})
app.get('/home',(req,res)=>{
    res.send("welcome to my home page")

})

app.listen(8000,()=>{
    console.log("server started athttp://localhost:7000/home")
})