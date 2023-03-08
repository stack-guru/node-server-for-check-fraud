require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('./routes')(app);

module.exports = app;