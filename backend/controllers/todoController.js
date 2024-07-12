const Todo = require("../models/todoModel");

// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single todo by ID
exports.getATodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
    
        if (!todo) {
          return res.status(404).json({ message: "Todo not found" });
        }
    
        res.json(todo);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

// Create a new todo
exports.createTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
      });
    
      try {
        const newTodo = await todo.save();
    
        res.status(201).json(newTodo);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

// Update an existing todo
exports.updateTodo = async(req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
    
        if (!updatedTodo) {
          return res.status(404).json({ message: "Todo not found" });
        }
    
        res.json(updatedTodo);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}
// Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    
        if (!deletedTodo) {
          return res.status(404).json({ message: "Todo not found" });
        }
    
        res.json({ message: "Todo deleted" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}


  