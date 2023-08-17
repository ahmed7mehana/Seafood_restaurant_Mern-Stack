const mongoose =require("mongoose")
const express =require("express")
const connectionDB = require("./config/connectionDB")
const cors = require("cors");
const bodyParser=require('body-parser')
require("dotenv").config()

//
connectionDB()
// init
const app =express()
//middleware
// app.use(express.json())
app.use(bodyParser.json())

// Cors Policy

app.use((_req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Methods","OPTION, GET , POST, PUT , PATCH , DELETE")
  res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization")
  next()
})
  
//Route
app.use("/api/auth",require("./router/authRoute"))
app.use("/api/user",require("./router/userRoute"))
app.use("/api/meal",require("./router/mealRoute"))
app.use("/api/Reserv",require("./router/ReservRoute"))



//server
const port=process.env.PORT || 8000

app.listen(port,()=>{
console.log("server  is running very well")
})
