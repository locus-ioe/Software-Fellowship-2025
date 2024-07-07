const mongoose = require("mongoose");

const todoModelSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: "ongoing",
  },
});

const Todo = mongoose.model("Todo", todoModelSchema);
module.exports = Todo;
