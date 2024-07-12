const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const todoRouter = require('./routes/todoRoutes')
// route middleware
app.use('/api/v1/todos', todoRouter)


module.exports = app;
