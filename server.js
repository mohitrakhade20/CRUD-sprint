require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.listen(3000, ()=>{
    console.log('Dev-Server Started :)');
})

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err)=>{
      console.log("Somthing is RONG !!!", err)
  }
  )




