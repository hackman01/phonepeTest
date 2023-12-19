const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const path = require("path")
require("dotenv").config();
app.use(cors());
// app.use(cors());
app.use(express.json());  

const bodyParser = require('body-parser');

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname,"/client/build")))

//Razorpay Route
const phonepeRoute = require('./routes/phonepe/phonepeRoute')



app.use("/api", phonepeRoute);

app.get("*",(req,res)=>{
  res.sendFile(__dirname+"/client/build/index.html")
})
// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
