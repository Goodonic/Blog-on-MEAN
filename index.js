const express = require("express");
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
const account = require("./routes/account");
// Name and secret key of your database
const config = require("./config/db");

mongoose.set('strictQuery', false);

const app = express();

const port = 3000;

app.use(cors());

//app.use(body_parser.json);

mongoose.connect(config.db);
mongoose.connection.on('connected', () => {
    console.log("Successful connection to the database")
});

mongoose.connection.on('error', (err) => {
    console.log("Not successful connection to the database" + err)
});

app.listen(port, ()=>{
    console.log("Server working! Port:" + port)
});

app.get("/",  (req, res) => {
    res.send("Home page");
});

app.use('/account', account);

