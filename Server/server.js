const express = require('express');
const mongoose =require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');

//MongoDB Connection 
mongoose.connect('mongodb+srv://vivekkatta295:vivek1829@cluste0.odtbp5a.mongodb.net/')
.then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.log("Error while connecting MongoDb",error));


const app =express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{console.log(`Server running sucessfully on ${PORT}`)});