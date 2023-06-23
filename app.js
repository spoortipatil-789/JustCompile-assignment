const express = require("express");
const collection = require("./mongo");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/employee")


app.post("/register",(req, res) => {
collection.create(req.body)
.then(employees => res.json(employees))
.catch(err => res.json(err))
})
app.listen(8000,()=>{
    console.log("Connected")
})