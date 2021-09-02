require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Url = require("./config/DataBase");

const app = express();

mongoose.connect(Url.Url_mongoDb, { useNewUrlParser: true, useUnifiedTopology: true},
    console.log("mongoDb open ---ok---"));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3015, function(){
    console.log("server running port 3015");
})

