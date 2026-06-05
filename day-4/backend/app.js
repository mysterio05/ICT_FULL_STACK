const express = require("express");
const app=express();
const port=3000;
const userRoutes=require('./routes/userRoutes');
const userModels=require('./models/userModel');
const connectDB=require('./db');
const cors=require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json());
connectDB();
app.use('/',userRoutes);
app.listen(port,()=>{
   console.log("App Listening on port", port);
})