
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");

var app = express();
app.use(bodyParser.json());

app.use("/people", PeopleRoutes);



app.listen(3000);