const express = require('express');
const mongoose =require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const authRouter =require('./routes/auth/auth-routes.js')
const adminProductsRouter=require('./routes/admin/products-routes.js')
const shopProductsRouter=require('./routes/shop/products-routes.js')
const shopCartRouter=require('./routes/shop/cart-routes.js')
const shopAddressRouter=require('./routes/shop/address-routes.js')
const shopOrderRouter=require('./routes/shop/order-routes.js')
const adminOrderRouter=require('./routes/admin/order-routes.js')
const shopSearchRouter=require('./routes/shop/search-routes.js')

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

//routes
app.use("/api/auth",authRouter)
app.use("/api/admin/products",adminProductsRouter)
app.use("/api/admin/orders",adminOrderRouter)
app.use("/api/shop/products",shopProductsRouter)
app.use("/api/shop/cart",shopCartRouter)
app.use("/api/shop/address",shopAddressRouter)
app.use("/api/shop/order",shopOrderRouter)
app.use("/api/shop/search",shopSearchRouter)

app.listen(PORT,()=>{console.log(`Server running sucessfully on ${PORT}`)});