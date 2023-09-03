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
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE ");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
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
