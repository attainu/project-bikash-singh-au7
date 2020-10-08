const express = require("express")
const userAuthRoutes = require("./routes/userAuthRoutes")
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require("./routes/adminRoutes")
require('dotenv').config()
const path = require('path')
const mongoose = require("mongoose")
const { static } = require("express")
const app = express()
const PORT = process.env.PORT || 5050

// Database Connection
mongoose.connect(process.env.MONGODB_STRING, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
  console.log("mongodb conneced")
}).catch(error=>{
  console.log(error)
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Use Routes
app.use("/user",userAuthRoutes)
app.use("/user", userRoutes)
app.use("/admin", adminRoutes)

app.listen(PORT, ()=>{
  console.log(`Server is running at port ${PORT}`)
})