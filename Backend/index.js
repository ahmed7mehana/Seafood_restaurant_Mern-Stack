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
app.use(cors({
  origin: 'https://sea-food-seven.vercel.app',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true
}));
  
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
