const express = require("express");
const router = express.Router();

const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(createTodo);

router.route("/:id").get(getTodoById).patch(updateTodo).delete(deleteTodo);

module.exports = router;
