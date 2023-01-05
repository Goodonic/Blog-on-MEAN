const express = require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log("Server working! Port:" + port)
});

app.get('/', (req, res)=>{
    res.send("Главная страница");
});