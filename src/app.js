require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true},
    console.log("mongoDB ok "));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

app.use(require("./routes"));

app.listen(3015, function(){
    console.log("server running port 3015");
})

